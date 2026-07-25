import { rateLimit } from "express-rate-limit"
import { success } from "zod"

export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 mins
    limit: 5,
    message: {
        success: false,
        message:"Too many login attempts! Try after some time",
    },
    statusCode: 429,    // default - msg: too many reqs
    standardHeaders: true,
    legacyHeaders: false
})

export const registerLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,   // 60 mins / 1 hr
    limit: 5,
    message: {
        success: false,
        message: "Too many registration attempts! Try after some time",
    },
    // statusCode: 429,
    standardHeaders: true,
    legacyHeaders: false
})

export const redirectLimit = rateLimit({
    windowMs: 1 * 60 * 1000,    // 1 min
    limit: 100,
    message: {
        success: false,
        message: "Too many redirect requests! Try after some time",
    },
    standardHeaders: true,
    legacyHeaders: false
})