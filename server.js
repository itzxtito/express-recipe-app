const express = require('express');
const path = require('path');
const app = express();

const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');
const commentRoutes = require('./routes/comments');

// Import middleware
const validateFields = require('./middleware/validateFieldsMiddleware');
const authMiddleware = require('./middleware/authMiddleware');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Custom logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// Apply validation middleware where required
app.use('/recipes', validateFields);
app.use('/users', validateFields);
app.use('/comments', validateFields);

// Apply authentication middleware ONLY to protected routes
app.use('/recipes', (req, res, next) => {
    if (req.method !== 'GET') return authMiddleware(req, res, next);
    next();
});
app.use('/users', (req, res, next) => {
    if (req.method !== 'GET') return authMiddleware(req, res, next);
    next();
});
app.use('/comments', (req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'POST') return authMiddleware(req, res, next);
    next();
});

// Routes
app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);

// Home Route
app.get('/', (req, res) => {
    res.render('index', { title: "Recipe API" });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);

    if (err.name === "ValidationError") {
        return res.status(400).json({ message: err.message });
    }

    res.status(500).json({ message: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
