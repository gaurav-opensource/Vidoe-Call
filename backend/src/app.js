
import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import { createServer } from "node:http"; //connect both express and soket io
import { Server } from "socket.io";
// import userRoutes from "./routes/users.routes.js";
import { connectToSocket } from "./controllers/socketManager.js";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
// app.use("/api/v1/users", userRoutes);

const start = async ()=>{
  app.set("mongo_user")
  const connectionDb = await mongoose.connect("mongodb+srv://Netfilix:GauravYadav95@netfilix.wivg6.mongodb.net/?retryWrites=true&w=majority&appName=Netfilix")

  console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
  server.listen(app.get("port"),
   ()=>{
    console.log("Listen on port 8080 ")
  })
}
start();
