import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api/axios";

const LoginPage = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post("/auth/login", { email, password });
            const { token } = response.data;

            localStorage.setItem("userInfo", JSON.stringify(token));
            setIsAuthenticated(true); // Update the authentication state
            toast.success("Login successful!");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.error || "Something went wrong");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl text-center mb-4">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
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
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <span className="text-sm">Don't have an account?</span>
                    <button
                        onClick={() => navigate("/register")}
                        className="text-blue-500 hover:text-blue-600 ml-1"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
