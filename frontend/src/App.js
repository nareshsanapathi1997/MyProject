import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Include Tailwind CSS and custom styles
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import About from "./pages/About";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedMode = JSON.parse(localStorage.getItem("darkMode"));
        const token = localStorage.getItem("userInfo"); // Check for JWT token
        if (storedMode !== null) {
            setDarkMode(storedMode);
        }
        if (token) {
            setIsAuthenticated(true); // User is logged in if token exists
        }
    }, []);

    useEffect(() => {
        // Apply or remove dark mode class to the body based on darkMode state
        if (darkMode) {
            document.body.classList.add("dark"); // Add dark class to body
        } else {
            document.body.classList.remove("dark"); // Remove dark class from body
        }

        // Save dark mode preference to localStorage
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <Router>
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated} // Pass the state update function
            />

            {/* Custom ToastContainer styling */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                limit={3}
                style={{ display: 'none' }}  // Hide the container if no toasts are active
            />


            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/pricing" element={<Pricing darkMode={darkMode} />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>

            <Footer />
        </Router>
    );
};

export default App;
