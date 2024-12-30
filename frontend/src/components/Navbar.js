import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/Logo01.png";

const Navbar = ({ darkMode, setDarkMode, isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userInfo"); // Remove the user info from localStorage
        setIsAuthenticated(false); // Update the authentication state
        toast.success("You have been logged out");
        navigate("/login"); // Redirect to the login page
    };

    return (
        <nav className="bg-blue-500 text-white py-4 shadow dark:bg-gray-800 dark:text-white">
            <div className="container mx-auto flex justify-between items-center">

            <Link to="/" className="flex items-center">
                    <img 
                        src={logo}  
                        alt="Logo" 
                        className="h-12 w-40 mr-2" 
                    />
            </Link>
                {/* <Link to="/" className="text-xl font-bold">
                    MyWebsite
                </Link> */}
                <div className="flex space-x-6">
                    {/* Conditionally render Login and Register links */}
                    {!isAuthenticated ? (
                        <>
                            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
                            <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
                            <Link to="/about" className="text-white hover:text-gray-200">About</Link>
                            {/* <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link> */}
                            {/* <Link to="/services" className="text-white hover:text-gray-200">Services</Link> */}
                            <Link to="/blog" className="text-white hover:text-gray-200">Blog</Link>
                            <Link to="/pricing" className="text-white hover:text-gray-200">Pricing</Link>
                            {/* <Link to="/faq" className="text-white hover:text-gray-200">FAQ</Link> */}
                            {/* <Link to="/terms" className="text-white hover:text-gray-200">Terms</Link> */}
                            {/* <Link to="/privacy" className="text-white hover:text-gray-200">Privacy</Link> */}
                            {/* <Link to="/support" className="text-white hover:text-gray-200">Support</Link> */}
                        </>
                    ) : (
                        <>
                            <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
                            <Link to="/profile" className="text-white hover:text-gray-200">Profile</Link>
                            <Link to="/about" className="text-white hover:text-gray-200">About</Link>
                            {/* <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link> */}
                            {/* <Link to="/services" className="text-white hover:text-gray-200">Services</Link> */}
                            <Link to="/blog" className="text-white hover:text-gray-200">Blog</Link>
                            <Link to="/pricing" className="text-white hover:text-gray-200">Pricing</Link>
                            {/* <Link to="/faq" className="text-white hover:text-gray-200">FAQ</Link> */}
                            {/* <Link to="/terms" className="text-white hover:text-gray-200">Terms</Link> */}
                            {/* <Link to="/privacy" className="text-white hover:text-gray-200">Privacy</Link> */}
                            {/* <Link to="/support" className="text-white hover:text-gray-200">Support</Link> */}
                            <button onClick={handleLogout} className="text-white hover:text-gray-200"> Logout </button>
                        </>
                    )}
                </div>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-dark dark:hover:bg-gray-600"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
