const express = require('express');
const router = express.Router();

let comments = [
    { id: 1, recipeId: 1, text: "Great recipe!" },
    { id: 2, recipeId: 2, text: "Delicious!" }
];

// Get all comments
router.get('/', (req, res) => {
    res.json(comments);
});

// Add a new comment
router.post('/', (req, res) => {
    const { recipeId, text } = req.body;
    if (!recipeId || !text) {
        return res.status(400).json({ message: "Recipe ID and text are required" });
    }
    const newComment = { id: comments.length + 1, recipeId, text };
    comments.push(newComment);
    res.status(201).json(newComment);
});

module.exports = router;
