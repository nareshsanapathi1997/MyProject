import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 ">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 MyWebsite. All Rights Reserved.</p>
                <p>
                    <a href="#" className="text-blue-400 hover:underline">
                        Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                        Terms of Service
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
