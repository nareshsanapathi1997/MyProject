import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api/axios";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Handle the registration process
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Send POST request to the backend API for registration
            // const response = await axios.post("/api/auth/register", { name, email, password });
            const response = await API.post("/auth/register", { name, email, password });

            const { token } = response.data;  // Extract token from response

            // Store JWT token in localStorage for later use
            // localStorage.setItem("token", token);
            localStorage.setItem("userInfo", JSON.stringify(token));

            // Show success message and redirect to dashboard
            toast.success("Registration successful!");
            navigate("/dashboard");
        } catch (error) {
            // Show error message if registration fails
            toast.error(error.response?.data?.error || "Something went wrong");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl text-center mb-4">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>
                <div className="text-center mt-4">
                    <span className="text-sm">Already have an account?</span>
                    <button
                        onClick={() => navigate("/login")}
                        className="text-blue-500 hover:text-blue-600 ml-1"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
