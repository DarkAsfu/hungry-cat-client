import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const Recipe = () => {
    const recipe = useLoaderData();
    const {recipes} = recipe;
    // console.log(recipes);
    return (
        <div>
            <div className="w-10/12 mx-auto py-40">
                <div className="md:flex items-center gap-8">
                    <div>
                        <img style={{ width: "900px" }} src={recipe.chefPicture
                        } className="rounded-lg shadow-2xl" />
                    </div>
                    <div className='leading-loose'>
                        <h1 className="text-5xl font-bold">{recipe.chefName}</h1>
                        <p className="py-6">{recipe.chefBio}</p>
                        {/* <p className='font-bold text-blue-500'>Number of recipes: {recipe.numberOfRecipes}</p>
                        <p className='font-bold text-blue-500'>Number of Likes: {recipe.likes}</p>
                        <p className='font-bold text-blue-500'>Years of experinece: {recipe.yearsOfExperience} years</p>
                         */}
                        <div className="stats stats-vertical lg:stats-horizontal shadow">

                            <div className="stat">
                                <div className="stat-title">No.of Recipe</div>
                                <div className="stat-value">{recipe.numberOfRecipes}</div>
                                
                            </div>

                            <div className="stat">
                                <div className="stat-title">No. of Likes</div>
                                <div className="stat-value">{recipe.likes}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">Years of experinece</div>
                                <div className="stat-value">{recipe.yearsOfExperience} years</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='md:grid grid-cols-2 gap-10 w-10/12 mx-auto pb-20'>
                {
                    recipes.map(recipe => <RecipeCard key={recipe.likes} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Recipe;