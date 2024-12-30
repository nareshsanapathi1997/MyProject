const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    let token;

    // Check if token is provided in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Get the token from the header
            token = req.headers.authorization.split(" ")[1];

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Store the user info in the request object
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ error: "Not authorized, token failed" });
        }
    }

    if (!token) {
        res.status(401).json({ error: "Not authorized, no token" });
    }
};

module.exports = protect;
