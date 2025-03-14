module.exports = function validateFields(req, res, next) {
    const { name, ingredients, instructions, email } = req.body;
    
    // Check for recipe fields
    if (req.path.includes('/recipes') && (!name || !ingredients || !instructions)) {
        return res.status(400).json({ message: "Recipe name, ingredients, and instructions are required" });
    }
    
    // Check for user fields
    if (req.path.includes('/users') && (!name || !email)) {
        return res.status(400).json({ message: "User name and email are required" });
    }
    
    // Check for comment fields
    if (req.path.includes('/comments') && !req.body.text) {
        return res.status(400).json({ message: "Comment text is required" });
    }

    next();
};
