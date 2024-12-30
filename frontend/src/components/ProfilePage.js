import React, { useState, useEffect } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";

const ProfilePage = () => {
    // const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo) {
            setName(userInfo.name);
            setEmail(userInfo.email);
        }
    }, []);

    const handleUpdate = async () => {
        try {
            await API.put("/auth/update", { name, email });
            toast.success("Profile updated successfully!");
        } catch (err) {
            toast.error("Failed to update profile.");
        }
    };

    return (
        <div className="space-y-4 p-8">
            <h1 className="text-2xl">Profile Settings</h1>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <button onClick={handleUpdate} className="bg-green-500 text-white p-2 rounded">
                Update Profile
            </button>
        </div>
    );
};

export default ProfilePage;
