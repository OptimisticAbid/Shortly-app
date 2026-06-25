import { and, desc, eq, sql } from "drizzle-orm";
import { clicks, urls, users } from "../db/schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { nanoid } from "nanoid";
import { db } from "../db/index.js";
import redis from "../db/redis.js"

const createShortUrl = asyncHandler(async(req,res) => {
    const { longUrl } = req.body; 

    if(!longUrl) {
        res.status(400)
        throw new Error('Please add a new URL')
    }
    const [existing] = await db.select().from(urls).where(eq(urls.longUrl,longUrl))

    if(existing){
        res.status(200).json({
            message:"URL already shortened",
            longUrl: longUrl,
            shortUrl: existing.shortUrl,
            created_at: existing.createdAt
        })
    }
    const shortUrl = nanoid(7) ;
  
    const [newUrl] = await db.insert(urls)
        .values({
            userId: req.user.id,
            longUrl,
            shortUrl,
        })
        .returning();

    res.status(201).json({
        message: "URL Shortened Sucessfully",
        userId: newUrl.userId,
        longUrl: newUrl.longUrl,
        shortUrl: shortUrl
    })    

})


const fetchUrls = asyncHandler(async (req,res) => {
    const userId = req.user.id 

    const userUrls = await db.select().from(urls).where(eq(urls.userId,userId))
    
    if(!userUrls) {
        res.status(401) 
        throw new Error("User does not exist! Cannot fetch URLs")
    }
    res.status(200).json(userUrls)

})

const updateUrl = asyncHandler(async (req,res) => {
    const urlId  = req.params.id

    const {longUrl} = req.body

    if(!longUrl) {
        res.status(400)
        throw new Error("ADD LONG URL")
    }

    const [updatedUrl] = await db.update(urls).set({
        longUrl: longUrl,
    }).where(and(eq(urls.id,urlId),eq(urls.userId,req.user.id))).returning({
        id : urls.id,
        userId:urls.userId,
        longUrl: urls.longUrl,
        shortUrl: urls.shortUrl
    })

    await redis.del(`url:${updatedUrl.shortUrl}`)

    if(!updatedUrl) {
        res.status(404)
        throw new Error("URL Not found! Update failed")
    }

    return res.status(200).json(updatedUrl)
})

const deleteUrl = asyncHandler(async(req,res) => {
    const urlId = req.params.id

    if(!urlId) {
        res.status(404)
        throw new Error("URL not found!")
    }
    const [url] = await db.delete(urls).where(and(eq(urls.id,urlId),eq(urls.userId,req.user.id))).returning({shortUrl: urls.shortUrl})

    await redis.del(`url:${url.shortUrl}`)

    return res.status(200).json({id : urlId})
})

const redirectUrl = async (req, res) => {
    const { shortUrl } = req.params;

    const cachedUrl = await redis.get(`url:${shortUrl}`)

    if(cachedUrl) {
        console.log("Cache hit");

        const url = JSON.parse(cachedUrl);

        await db.update(urls).set({clickCount : sql`${urls.clickCount} + 1`}).where(eq(urls.id, url.id))
        
        await db.insert(clicks).values({
            urlId: url.id
        })
        return res.redirect(url.longUrl);
    }

    console.log("Cache Miss");
    const [url]= await db.select().from(urls).where(eq(urls.shortUrl, shortUrl)).limit(1)

    if (!url) {
        return res.status(404).send("Not found");
    }

    await redis.set(`url:${shortUrl}`,JSON.stringify({
        id: url.id,
        longUrl: url.longUrl,
        shortUrl: url.shortUrl
    }),
    "EX",
    3600
    );

    await db
    .update(urls)
    .set({ clickCount: sql`${urls.clickCount} + 1` })
    .where(eq(urls.id, url.id));

    await db.insert(clicks).values({
        urlId: url.id
    })

    res.redirect(url.longUrl);
};

const getUrlAnalytics = asyncHandler(async (req, res) => {
    const urlId = req.params.id

    console.log("URL ID:", urlId);
    
    const [url] = await db.select().from(urls).where(eq(urls.id, urlId))

    if(!url) {
        res.status(404).json({
            success : false,
            message: "URL not found"
        })
    }
    const recentClicks = await db.select().from(clicks).where(eq(clicks.urlId, urlId)).orderBy(desc(clicks.clickedAt)).limit(10);

    res.json({
        url,
        recentClicks
    })
})

export  {createShortUrl,fetchUrls, updateUrl , deleteUrl, redirectUrl, getUrlAnalytics}