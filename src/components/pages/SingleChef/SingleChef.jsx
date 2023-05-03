import React from 'react';

const SingleChef = ({ chef }) => {
    console.log(chef)
    return (
        <div className=''>
            <div className="card  bg-base-100 shadow-xl mt-4">
                <figure><img className='md:h-72' src={chef.chefPicture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-mono">{chef.chefName}</h2>
                    <p className='text-blue-500'><span className='font-bold text-black'>Years of experinece:</span> {chef.yearsOfExperience}</p>
                    <p className='text-blue-500'><span className='font-bold text-black'>Number of recipes:</span> {chef.numberOfRecipes}</p>
                    <p className='text-blue-500'><span className='font-bold text-black'>Likes:</span> {chef.likes}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;