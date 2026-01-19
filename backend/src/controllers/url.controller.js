import { and, eq } from "drizzle-orm";
import { urls, users } from "../db/schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { nanoid } from "nanoid";
import { db } from "../db/index.js";

const createShortUrl = asyncHandler(async(req,res) => {
    const { longUrl } = req.body; 

    if(!longUrl) {
        res.status(400)
        throw new Error('Please add a new URL')
    }
    const [existing] = await db.select().from(urls).where(eq(urls.longUrl,longUrl)).returning()

    if(existing){
        res.status(200).json({
            message:"URL already shortened",
            longUrl: longUrl,
            shortUrl: existing.shortUrl,
            created_at: existing.createdAt
        })
    }
    const shortUrl = nanoid(7) ;
    const newUrl = await db.insert(urls).values({
        userId:req.user.id,
        longUrl,
        shortUrl,
    }).returning()

    res.status(201).json({
        message: "URL Shortened Sucessfully",
        userId: newUrl[0].userId,
        longUrl: newUrl[0].longUrl,
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
    const url = await db.delete(urls).where(and(eq(urls.id,urlId),eq(urls.userId,req.user.id)))

    return res.status(200).json({id : req.params.id})
})


export  {createShortUrl,fetchUrls, updateUrl , deleteUrl}