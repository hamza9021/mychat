import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

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
        minlength: 6,
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


userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(this.password, salt);
            this.password = hashedPassword;
        }
        next;
    } catch (error) {
        console.log(error);
        next(error);
    }
});

userSchema.methods.isPasswordMatch = async function (password) {
    try {
        return bcrypt.compareSync(password, this.password);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const User = model("User", userSchema);

export default User;
