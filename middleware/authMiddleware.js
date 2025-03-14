module.exports = function authMiddleware(req, res, next) {
    const publicRoutes = [
        { method: "GET", path: "/recipes" },
        { method: "GET", path: "/users" },
        { method: "GET", path: "/comments" },
        { method: "POST", path: "/comments" } // Allow public comments
    ];

    const isPublic = publicRoutes.some(route => 
        req.method === route.method && req.path.startsWith(route.path)
    );

    // Allow unrestricted access if ?test=true is in the URL
    if (isPublic || req.query.test === 'true') {
        return next();
    }

    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Authorization required" });
    }

    next();
};
