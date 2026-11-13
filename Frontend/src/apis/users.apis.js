import axiosInstance from "./AxiosInstance/axios.js";

class User {
    registerUser = async (userData) => {
        try {
            const response = await axiosInstance.post("/api/users/register", userData);
            return response.data;
        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    };
}