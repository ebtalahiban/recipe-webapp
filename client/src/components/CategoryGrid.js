import React , { useState, useEffect } from 'react'
import { getRecipeCategories } from '../services/recipeService';
import './CategoryGrid.css';

const RecipeGrid = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await getRecipeCategories();
                setCategories(data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="recipe-categories">
            <h2>Recipe Categories</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div className="category-grid">
                {categories.map((category) => (
                    <div key={category.idCategory} className="category-tile">
                    <h3>{category.strCategory}</h3>
                    <img src={category.strCategoryThumb} alt={category.strCategory} />
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}

export default RecipeGrid
