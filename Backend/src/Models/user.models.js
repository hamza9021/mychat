import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default:
            "https://i.pinimg.com/736x/10/69/dc/1069dc4ca630acbb2455d6294f61b7d7.jpg",
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    refreshToken: {
        type: String,
    },
});

const User = model("User", userSchema);

export default User;
