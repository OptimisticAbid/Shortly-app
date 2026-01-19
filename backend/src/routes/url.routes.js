import express from 'express'
import { createShortUrl, deleteUrl, fetchUrls, updateUrl }  from '../controllers/url.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router()   


router.post('/',authMiddleware, createShortUrl)

router.get("/", authMiddleware, fetchUrls)

router.put("/:id", authMiddleware, updateUrl)

router.delete("/:id", authMiddleware, deleteUrl)


export default router