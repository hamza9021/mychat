import axiosInstance from "./AxiosInstance/axios.js";

class User {
    registerUser = async (userData) => {
        try {
            const response = await axiosInstance.post("/v1/users/register", userData);
            return response.data;
        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    };

    loginUser = async (loginData) => {
        try {
            const response = await axiosInstance.post("/v1/users/login", loginData);
            return response.data;
        }
        catch (error) {
            console.error("Error logging in user:", error);
            throw error;
        }
    }
}


export const userApi = new User();