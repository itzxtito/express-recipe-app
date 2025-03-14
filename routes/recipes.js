

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const recipeController = require('../controllers/recipeController');

// Public routes (no authentication required)
router.get('/', recipeController.getAllRecipes); // GET all recipes
router.get('/:id', recipeController.getRecipeById); // GET a single recipe by ID

// Protected routes (authentication required)
router.post('/', recipeController.createRecipe); // POST to create a recipe
router.patch('/:id', recipeController.updateRecipe); // PATCH to update a recipe
router.delete('/:id',  recipeController.deleteRecipe); // DELETE a recipe

module.exports = router;
