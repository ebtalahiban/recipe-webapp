import express from 'express';
import axios from 'axios';

const router = express.Router();

/* Set up routes to fetch recipes */

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

export default router;