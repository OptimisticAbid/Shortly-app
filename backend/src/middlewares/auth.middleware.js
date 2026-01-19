import jwt from 'jsonwebtoken'  
import { asyncHandler } from '../utils/asyncHandler.js'
import { users } from '../db/schema.js'
import { db } from '../db/index.js'
import { eq } from 'drizzle-orm'

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        token = req.headers.authorization.split(' ')[1]

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        const [user] = await db.select().from(users).where(eq(users.id,decoded.id))

        if(!user) {
            res.status(400)
            throw new Error("User not found!")
        }

        req.user = user ;
        next()
    }

    else {
        res.status(401)
        throw new Error("No token provided");
    }
})

export default authMiddleware