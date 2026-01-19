import { asyncHandler } from "../utils/asyncHandler.js";
import { db } from "../db/index.js"
import { users } from "../db/schema.js"
import { eq } from "drizzle-orm";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser = asyncHandler(async(req,res) => {
    const {name , email , password} = req.body ;

    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Enter all Fields! ")
    }

    const userExists = await db.select().from(users).where(eq(users.email,email))

    if(userExists.length > 0) {
        res.status(400)
        throw new Error("User already exists")
    }

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password,salt); 

    const user = await db.insert(users).values({
        
        name: name ,
        email: email,
        password: hashedPassword
    }).returning()

    if(user) {
        res.status(201).json({
            id : user.id,
            success : true,
            message:"Registered successfully", 
            token: generateToken(user.id)
        })
    }

})

const loginUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body

    if(!email) {
        res.status(401)
        throw new Error("Email not provided")
    }

    const [user] = await db.select().from(users).where(eq(users.email,email))

    if(user && (await bcrypt.compare(password,user.password))) {
       res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })

    }
    else {
        res.status(400)
        throw new Error("Inavlid Credentials")
    }
})

const getMe = asyncHandler(async (req,res) => {
    const [user] = await db.select({
        id: users.id,
        name: users.name,
        email: users.email
    }).from(users).where(eq(users.email,req.user.email))

    res.status(200).json({
        id:user.id,
        name: user.name,
        email: user.email
    })
})

const updateUser = asyncHandler(async (req,res) => {
    const userId = req.user.id

    if(!userId) {
        res.status(404)
        throw new Error("User id not given")
    }
    const {name, email} = req.body

    const [updatedUser] = await db.update(users).set({name, email}).where(eq(users.id,req.user.id)).returning({
        id: users.id,
        name: users.name,
        email: users.email
    })

    if(!updatedUser) {
        res.status(404)
        throw new Error("User not found!")
    }

    return res.status(200).json({
        message: "Update Sucessfull",
        name: updatedUser.name,
        email: updatedUser.email
    })

})

const deleteUser = asyncHandler(async (req,res) => {
    const userId = req.user.id

    if(!userId) {
        res.status(400)
        throw new Error("User not found!")
    }

    const user = await db.delete(users).where(eq(users.id,userId))

    res.status(200).json({
        message: "User Deleted",
        id: userId
    })
})

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
}


export {registerUser , loginUser ,getMe , updateUser , deleteUser} 