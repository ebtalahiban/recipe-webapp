import React from 'react';
import { getCountryRecipes } from '../services/recipeService';
import './CountryRecipes.css';

const CountryRecipes = () => {
    return (
        <div className="country-highlight">
            <button className="prev-btn">&lt;</button>
            <div className="country">
                <h2>Country Name</h2>
                <p>Description of the country...</p>
            </div>
            <button className="next-btn">&gt;</button>
        </div>
    )
}

export default CountryRecipes
