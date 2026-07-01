import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import cookieParser from "cookie-parser";

const app = express();


import { userRouter } from "./Routes/user.routes.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/v1/users", userRouter);



app.use("/health", (req, res) => {
    res.status(200).json({ message: "Server is running" });
});

export default app;
