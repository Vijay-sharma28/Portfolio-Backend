import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoute from "./routes/contactRoute.js";

const app = express();

app.use(cors({
  origin: "https://vijaysharma-portfolio.netlify.app",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
