import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import cookieParser from 'cookie-parser'
import path from 'path'


mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING as string)

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
)

app.use(express.static(path.join(__dirname,"../../frontend/dist")))


app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.listen(3000, () => {
  console.log('server is running on localhost:3000')
})
