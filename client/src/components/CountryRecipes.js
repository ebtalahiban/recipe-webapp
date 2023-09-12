import React, { useState, useEffect } from 'react';
import { getCountryRecipes } from '../services/recipeService';
import './CountryRecipes.css';

const CountryRecipes = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect (() => {
        const fetchData = async () => {
            try{
                const data = await getCountryRecipes();
                setCountries(data);
                setLoading(false);
            }
            catch (error){
                console.error('Error:', error);
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? countries.length - 1 : prevIndex - 1));
    };
    
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === countries.length - 1 ? 0 : prevIndex + 1));
    };

    return (
    <div className="country-highlight">
        <button className="prev-btn" onClick={handlePrevClick}>
        &lt;
        </button>
        {loading ? (
        <p>Loading...</p>
        ) : error ? (
        <p>Error: {error.message}</p>
        ) : (
        <>
            <div className="country">
            <h1>{countries[currentIndex].strArea}</h1>
            <img src={`${countries[currentIndex].image}`} alt={countries[currentIndex].strArea} />
            </div>
            <button className="next-btn" onClick={handleNextClick}>
            &gt;
            </button>
        </>
        )}
    </div>
    );
}

export default CountryRecipes
