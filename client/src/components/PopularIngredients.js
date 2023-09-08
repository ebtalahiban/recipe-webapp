import React, { useState, useEffect } from 'react';
import { getIngredientsList } from '../services/recipeService';
import './PopularIngredients.css';

const PopularIngredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await getIngredientsList();
                setIngredients(data);
                setLoading(false);
            }
            catch (error){
                console.error('Error:', error);
                setError(error);
                setLoading('false');
            }
        }

        fetchData();
    }, []);

    return (
        <div className="popular-ingredients">
            <h2>Popular Ingredients</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div className="ingredient-grid">
                {ingredients.map((ingredient) => (
                    <div key={ingredient.idIngredient} className="ingredient-tile">
                        <h3>{ingredient.strIngredient}</h3>
                        <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt={ingredient.strIngredient} />
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}

export default PopularIngredients
