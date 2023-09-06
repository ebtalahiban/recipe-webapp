import express from 'express';

import { searchMeals, listCategories, filterByCategory, fetchRecipeByID, fetchRandomRecipe } from '../controllers/RecipesController.js';

const router = express.Router();

/* Set up routes to fetch recipes from API */

router.get('/meals/:name', searchMeals);
router.get('/categories', listCategories);
router.get('/category/:name', filterByCategory);
router.get('/meal/:id', fetchRecipeByID);
router.get('/random', fetchRandomRecipe);

export default router;