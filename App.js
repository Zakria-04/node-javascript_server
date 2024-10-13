import express from "express";
import mongoose from "mongoose";
import Routes from "./API/Routes/Routes.js";

const app = express();
app.use(express.json());
app.use("/", Routes)

// node-javascript_server2024
const url =
  "mongodb+srv://node-javascript_server:node-javascript_server2024@cluster0.0waqbd5.mongodb.net/";

mongoose.connect(url);
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfuly");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error ", err);
});

app.get("/online", (req, res) => {
  res.status(200).json({ online: true });
});

export default app;
