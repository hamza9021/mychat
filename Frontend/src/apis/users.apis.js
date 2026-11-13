import axiosInstance from "./AxiosInstance/axios.js";

class User {
    registerUser = async (userData) => {
        try {
            console.log("Registering user with data:", userData);
            const response = await axiosInstance.post("/v1/users/register", userData);
            return response.data;
        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    };
}


export const userApi = new User();