import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // Ensure this is the correct URL
});

export default API;
