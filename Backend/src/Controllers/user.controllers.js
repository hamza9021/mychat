import { ApiError, wrapperFunction, ApiResponse } from "../Utils/index.js";
import User from "../Models/user.models.js";
import { registerUserValidator } from "../Validators/users.validators.js";
import { uploadOnCloudinary } from "../Services/cloudinary.services.js";

const registerUser = wrapperFunction(async (req, res) => {
    const { username, email, password } = req.body;
    const { error } = registerUserValidator.validate(req.body);

    if (error) {
        throw new ApiError(
            400,
            "Fields should not be empty and password should be at least 6 characters long"
        );
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
        throw new ApiError(409, "User with email or username already exists");
    }

    const profilePictureLocalPath = await req.files?.profilePicture?.[0]?.path;

    if (!profilePictureLocalPath) {
        throw new ApiError(400, "Profile Picture Should Be Required");
    }

    console.log(profilePictureLocalPath);

    const profilePicture = await uploadOnCloudinary(profilePictureLocalPath);

    if (!profilePicture) {
        throw new ApiError(400, "Profile Picture is not uploaded on cloud");
    }

    const newUser = new User({
        username,
        email,
        password,
        profilePicture: profilePicture.secure_url,
    });

    await newUser.save();

    res.status(201).json(
        new ApiResponse(201, "User registered successfully", newUser)
    );
});


export { registerUser };
