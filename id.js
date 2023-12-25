import express from "express"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.js"
import { config } from "dotenv"

export const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(userRouter)

config({
    path : "./data/config.env"
})