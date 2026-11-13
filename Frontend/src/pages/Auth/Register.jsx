
import { userApi } from "../../apis/users.apis.js";
import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        profilePicture: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle file input
    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            profilePicture: e.target.files[0],
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("username", formData.username);
        data.append("password", formData.password);
        data.append("email", formData.email);

        if (formData.profilePicture) {
            data.append("profilePicture", formData.profilePicture);
        }


           for (const [key, value] of data.entries()) {
        console.log(key, value);
    }

        try {
            const response = await userApi.registerUser(data);
     

            console.log("User registered successfully:", response);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="file"
                    name="profilePicture"
                    accept="image/*"
                    onChange={handleFileChange}
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
