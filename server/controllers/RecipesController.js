import axios from 'axios';
import errorHandler from '../middleware/errorMiddleware.js';

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
        errorHandler(error, req, res);
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
        errorHandler(error, req, res);
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
        errorHandler(error, req, res);
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
        errorHandler(error, req, res);
    }
}

// Fetch a random recipe
export const fetchRandomRecipe = async (req, res) => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        const randomRecipe = response.data.meals;
        console.log(randomRecipe);
        if(!randomRecipe){
            res.status(404).send({message: "Error looking for a recipe"});
            return;
        }
        res.status(200).json(randomRecipe);
    } catch (error) {
        errorHandler(error, req, res);
    }
}

// List main ingredients
export const listMainIngredients = async (req, res) => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        let ingredients = response.data.meals;
        // Only get the first 4 ingredients
        ingredients = ingredients.slice(0,4);
        console.log(ingredients);
        if(!ingredients){
            res.status(404).send({message: "No recipe ingredients found"});
            return;
        }
        res.status(200).json(ingredients);
    } catch (error) {
        errorHandler(error, req, res);
    }
}

// List countries and their recipes with images
export const listCountryRecipes = async (req, res) => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const countries = response.data.meals;
        
        if (!countries) {
            res.status(404).send({ message: "No country recipes found" });
            return;
        }

        // Fetch images for each country
        const countriesWithImages = await Promise.all(
            countries.map(async (country) => {
                const imageResponse = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.strArea}`);
                const image = imageResponse.data.meals[0].strMealThumb; 
                // Combine the country data with the image
                return { ...country, image };
            })
        );
        console.log(countriesWithImages);
        res.status(200).json(countriesWithImages);
    } catch (error) {
        errorHandler(error, req, res);
    }
}
