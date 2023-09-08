import express from 'express';

import { searchMeals, listCategories, filterByCategory, fetchRecipeByID, fetchRandomRecipe, listMainIngredients } from '../controllers/RecipesController.js';

const router = express.Router();

/* Set up routes to fetch recipes from API */

router.get('/meals/:name', searchMeals);
router.get('/categories', listCategories);
router.get('/category/:name', filterByCategory);
router.get('/meal/:id', fetchRecipeByID);
router.get('/random', fetchRandomRecipe);
router.get('/ingredients', listMainIngredients);

export default router;