import express from 'express'
import { createShortUrl, deleteUrl, fetchUrls, getUrlAnalytics, redirectUrl, updateUrl }  from '../controllers/url.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router()   

// router.use(authMiddleware)
router.post('/',authMiddleware, createShortUrl)

router.get("/", authMiddleware, fetchUrls)

router.get("/:shortUrl", redirectUrl)

router.put("/:id", authMiddleware, updateUrl)

router.delete("/:id", authMiddleware, deleteUrl)

router.get("/:id/analytics", authMiddleware, getUrlAnalytics)


export default router