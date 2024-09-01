// import express from "express";
// import { createServer } from "node:http";

// import { Server } from "socket.io";

// import mongoose from "mongoose";
// import { connectToSocket } from "./controllers/socketManager.js";

// import cors from "cors";
// import userRoutes from "./routes/users.routes.js";

// const app = express();
// const server = createServer(app);
// const io = connectToSocket(server);


// const { MONGO_URL, PORT } = process.env;
// app.use(cors());
// app.use(express.json({ limit: "40kb" }));
// app.use(express.urlencoded({ limit: "40kb", extended: true }));

// app.use("/api/v1/users", userRoutes);

// // Connect to MongousersDB
// mongoose
//   .connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB is connected successfully"))
//   .catch((err) => console.error(err));

// // // Middleware
// // app.use(cors({
// //   origin: ["http://localhost:3000"], // Adjust the origin to your frontend URL
// //   methods: ["GET", "POST", "PUT", "DELETE"],
// //   credentials: true,
// // }));

import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import { createServer } from "node:http"; //connect both express and soket io
import { Server } from "socket.io";
import userRoutes from "./routes/users.routes.js";
import { connectToSocket } from "./controllers/socketManager.js";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use("/api/v1/users", userRoutes);

const start = async ()=>{
  app.set("mongo_user")
  const connectionDb = await mongoose.connect("mongodb+srv://gauravwithhost1:Gauravyadav95@zoom.cdyoi.mongodb.net/?retryWrites=true&w=majority&appName=zoom")

  console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
  server.listen(app.get("port"),
   ()=>{
    console.log("Listen on port 8080 ")
  })
}
start();