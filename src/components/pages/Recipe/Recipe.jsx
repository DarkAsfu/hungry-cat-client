import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipe = useLoaderData();
    console.log(recipe);
    return (
        <div>
            <h1>Hurray Fuck You Girl</h1>
        </div>
    );
};

export default Recipe;