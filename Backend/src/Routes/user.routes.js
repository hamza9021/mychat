import { Router } from "express";
const userRouter = Router();
import { registerUser } from "../Controllers/User.controllers.js";
import { upload } from "../Middlewares/multer.middleware.js";

userRouter
    .route("/register")
    .post(
        upload.fields([{ name: "profilePicture", maxCount: 1 }]),
        registerUser
    );

export { userRouter };
