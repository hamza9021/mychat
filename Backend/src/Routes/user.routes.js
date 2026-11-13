import { Router } from "express";
const userRouter = Router();
import { registerUser, loginUser } from "../Controllers/user.controllers.js";
import { upload } from "../Middlewares/multer.middleware.js";

userRouter
    .route("/register")
    .post(
        upload.fields([{ name: "profilePicture", maxCount: 1 }]),
        registerUser
    );

userRouter.route("/login").post(loginUser);

export { userRouter };
