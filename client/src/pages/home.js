import React from 'react';
import Searchbar from '../components/Searchbar';
import PopularIngredients from '../components/PopularIngredients';
import CountryRecipes from '../components/CountryRecipes';

function Home(){
    return(
        <div>
            <Searchbar />
            <PopularIngredients />
            <CountryRecipes />
        </div>
    );
}

export default Home;