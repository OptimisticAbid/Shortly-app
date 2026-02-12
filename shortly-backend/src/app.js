import express, { json } from 'express'
import userRoutes from './routes/user.routes.js'
import urlRoutes from './routes/url.routes.js'
import cors from 'cors'

const app = express()


app.use(express.json())
app.use(express.urlencoded())
// app.use(cors, (req, res) => res.send("cors error"))

app.use("/api/v1/users",userRoutes) ;
app.use("/api/v1/urls", urlRoutes) ;

export default app;