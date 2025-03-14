# Tito's Recipe API

## Overview
This project is a small Node.js and Express-based RESTful API that allows users to interact with recipes, users, and comments. The application follows RESTful principles and includes authentication, validation, and error handling middleware.

## Features
- Users can create, view, and manage recipes.
- Users can add comments to recipes.
- Basic authentication middleware for securing certain routes.
- Form-based interaction via EJS-rendered views.
- Query parameters for data filtering.
- RESTful API structure with GET, POST, PATCH/PUT, and DELETE requests.

## Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/itzxtito/express-recipe-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. Access the app in your browser at `http://localhost:3000`.

## API Endpoints
### Recipes
- `GET /recipes` - Fetch all recipes.
- `POST /recipes` - Create a new recipe (requires authentication).
- `PATCH /recipes/:id` - Update a recipe (requires authentication).
- `DELETE /recipes/:id` - Delete a recipe (requires authentication).

### Users
- `GET /users` - Fetch all users.
- `POST /users` - Create a new user (requires authentication).

### Comments
- `GET /comments` - Fetch all comments.
- `POST /comments` - Add a new comment.

## Middleware
- **Authentication Middleware** (`authMiddleware.js`) ensures protected routes require an authorization token.
- **Validation Middleware** (`validateFieldsMiddleware.js`) ensures required fields are provided before processing requests.
- **Error Handling Middleware** gracefully handles unexpected errors.

## Testing Instructions (For Instructor)
For easy testing, authentication can be bypassed by adding `?test=true` to any request. Example:
- To access recipes without authentication: `http://localhost:3000/recipes?test=true`
- To post a recipe without authentication: Use `POST http://localhost:3000/recipes?test=true` with a body.

This allows full functionality without requiring authentication while still demonstrating middleware usage.

## Technologies Used
- Node.js
- Express.js
- EJS for templating
- CSS for simple styling

## License
This project is for educational purposes.

