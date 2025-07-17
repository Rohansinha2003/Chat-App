import express from 'express'
import {createServer} from "node:http"

import { Server } from 'socket.io'

import mongoose from 'mongoose'
import { connectToScoket } from './controllers/socketManager.js'

import cors from 'cors'
import router from './routes/users.routes.js'

import dotenv from 'dotenv';
dotenv.config();

const app = express()
const server = createServer(app)
// const io = new Server(server)  fro this make socketManager to manage it and pass the server variable
const io = connectToScoket(server)


app.use(cors({
  origin: ['https://vibecall-frontend.onrender.com', 'http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));



app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit: "40kb", extended: true}))

app.use("/api/v1/users", router)

const start = async () => {
  const connectionDB = await mongoose.connect(process.env.MONGO_URI);

  console.log(`Mongo connected DB host: ${connectionDB.connection.host}`);

  server.listen(process.env.PORT, () => {
    console.log("Listening on Port", process.env.PORT);
  });
};


start()
