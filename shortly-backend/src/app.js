import express, { json } from 'express'
import userRoutes from './routes/user.routes.js'
import urlRoutes from './routes/url.routes.js'
import cors from 'cors'
import { redirectUrl } from './controllers/url.controller.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(cors, (req, res) => res.send("cors error"))
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    })
})
app.use("/api/v1/users",userRoutes) ;
app.use("/api/v1/urls", urlRoutes) ;

app.get("/:shortUrl", redirectUrl)
export default app;