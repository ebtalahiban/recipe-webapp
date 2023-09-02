import express from 'express';
import axios from 'axios';

const router = express.Router();

/* Set up routes to fetch recipes from API */

// Search recipes by name
router.get('/meals/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const meals = response.data.meals;
        console.log(meals);
        res.status(200).json(meals);
    } catch (error) {
        console.error('Error searching for meals: ', error);
        res.status(500).json({ error: 'Unable to search meals' });
    }
});

// List all recipe categories
router.get('/categories', async (req, res) => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        const categories = response.data.categories;
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error listing categories:', error);
        res.status(500).json({ error: 'Unable to list categories' });
    }
});

// List all recipes in a category
router.get('/category/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
        const meals = response.data.meals;
        res.status(200).json(meals);
    } catch (error) {
        console.error('Error listing categories:', error);
        res.status(500).json({ error: 'Unable to list categories' });
    }
});

// Fetch full recipe details of a meal
router.get('/meal/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const recipe = response.data.meals;
        console.log(recipe);
        res.status(200).json(recipe);
    } catch (error) {
        console.error('Error searching for meals: ', error);
        res.status(500).json({ error: 'Unable to search meals' });
    }
});

export default router;