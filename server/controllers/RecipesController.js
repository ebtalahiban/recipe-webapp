import axios from 'axios';

// Search recipes by name
export const searchMeals = async (req, res) => {
    const name = req.params.name;
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const meals = response.data.meals;
        console.log(meals);
        if(!meals){
            res.status(404).send({message: "No recipe found"});
            return;
        }
        res.status(200).json(meals);
    } catch (error) {
        console.error('Error searching for meals: ', error);
        res.status(500).json({ error: 'Unable to search meals' });
    }
}

// List all recipe categories
export const listCategories = async (req, res) => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        const categories = response.data.categories;
        console.log(categories);
        if(!categories){
            res.status(404).send({message: "No recipe categories found"});
            return;
        }
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error listing categories:', error);
        res.status(500).json({ error: 'Unable to list categories' });
    }
}

// List all recipes in a category
export const filterByCategory = async (req, res) => {
    const name = req.params.name;
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
        const meals = response.data.meals;
        console.log(meals);
        if(!meals){
            res.status(404).send({message: "No recipe found"});
            return;
        }
        res.status(200).json(meals);
    } catch (error) {
        console.error('Error listing categories:', error);
        res.status(500).json({ error: 'Unable to list categories' });
    }
}

// Fetch full recipe details of a meal
export const fetchRecipeByID = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const recipe = response.data.meals;
        console.log(recipe);
        if(!recipe){
            res.status(404).send({message: "No recipe found"});
            return;
        }
        res.status(200).json(recipe);
    } catch (error) {
        console.error('Error searching for meals: ', error);
        res.status(500).json({ error: 'Unable to search meals' });
    }
}
