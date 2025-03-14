let recipes = [
    { id: 1, name: "Spaghetti Carbonara", ingredients: ["spaghetti", "eggs", "bacon", "parmesan"], instructions: "Cook pasta, mix with eggs and bacon, add cheese." },
    { id: 2, name: "Pancakes", ingredients: ["flour", "milk", "eggs", "sugar"], instructions: "Mix ingredients, cook on a griddle until golden brown." }
];

// Get all recipes (with optional ingredient filtering)
exports.getAllRecipes = (req, res) => {
    const { ingredient } = req.query;
    if (ingredient) {
        const filteredRecipes = recipes.filter(recipe => 
            recipe.ingredients.includes(ingredient.toLowerCase())
        );
        return res.json(filteredRecipes);
    }
    res.json(recipes);
};

// Get a single recipe by ID
exports.getRecipeById = (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
};

// Create a new recipe
exports.createRecipe = (req, res) => {
    const { name, ingredients, instructions } = req.body;
    if (!name || !ingredients || !instructions) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const newRecipe = {
        id: recipes.length + 1,
        name,
        ingredients,
        instructions
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
};

// Update (partial) a recipe by ID
exports.updateRecipe = (req, res) => {
    const { name, ingredients, instructions } = req.body;
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    
    if (name) recipe.name = name;
    if (ingredients) recipe.ingredients = ingredients;
    if (instructions) recipe.instructions = instructions;
    
    res.json(recipe);
};

// Delete a recipe by ID
exports.deleteRecipe = (req, res) => {
    recipes = recipes.filter(r => r.id !== parseInt(req.params.id));
    res.json({ message: "Recipe deleted" });
};
