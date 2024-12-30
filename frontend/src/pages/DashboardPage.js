import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const DashboardPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in by looking for user info in localStorage
        const storedUser = JSON.parse(localStorage.getItem("userInfo"));
        if (!storedUser) {
            toast.error("You must be logged in to access the dashboard");
            navigate("/login");
        } else {
            setUser(storedUser);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        toast.success("You have been logged out");
        navigate("/login");
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900"
        >
            {user ? (
                <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl text-center mb-4">Welcome, {user.name}!</h2>
                    <p className="text-center mb-4">This is your dashboard.</p>
                    <div className="space-y-4">
                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded shadow-md w-96">
                    <p className="text-center">Loading...</p>
                </div>
            )}
        </motion.div>
    );
};

export default DashboardPage;
