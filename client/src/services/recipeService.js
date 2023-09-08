import api from './api';

export const getRecipeCategories = async (req, res) => {
    try{
        const response = await api.get('/categories');
        return response.data;
    } 
    catch (error){
        console.error('Error:', error);
        throw error;
    }
}

export const getCountryRecipes = async (req, res) => {
    try{
        const response = await api.get('/countries');
        return response.data;
    } 
    catch (error){
        console.error('Error:', error);
        throw error;
    }
}

export const getIngredientsList = async () => {
    try {
        const response = await api.get('/ingredients');
        return response.data;
    }
    catch (error){
        console.error('Error:', error);
        throw error;
    }
}
