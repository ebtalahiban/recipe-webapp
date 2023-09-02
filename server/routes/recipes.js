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
        res.json(meals);
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
        res.json(categories);
    } catch (error) {
        console.error('Error listing categories:', error);
        res.status(500).json({ error: 'Unable to list categories' });
    }
});

export default router;