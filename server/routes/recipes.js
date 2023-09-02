import express from 'express';
import axios from 'axios';

import { searchMeals, listCategories, filterByCategory, fetchRecipeByID } from '../controllers/RecipesController.js';

const router = express.Router();

/* Set up routes to fetch recipes from API */

router.get('/meals/:name', searchMeals);
router.get('/categories', listCategories);
router.get('/category/:name', filterByCategory);
router.get('/meal/:id', fetchRecipeByID);

export default router;