import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use("/health", (req, res) => {
    res.status(200).json({ message: "Server is running" });
});

export default app;
