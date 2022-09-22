import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoute from "./routes/Product.js"

// import test from "test"

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api", productRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server is running!");
});


