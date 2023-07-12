import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
import './SingleChef.css'
const SingleChef = ({ chef }) => {
    console.log(chef)
    return (
        <div className=''>
            
            <div className="card  bg-base-100 shadow-xl mt-4">
                <figure><LazyLoad  height={762} width={400}  onContentVisible={() => {console.log('loaded!')}}><img className='md:h-72' src={chef.chefPicture} alt="Shoes" /></LazyLoad></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-mono">{chef.chefName}</h2>
                    <p className='text-blue-500'><span className='font-bold text-black'>Years of experinece:</span> {chef.yearsOfExperience}</p>
                    <p className='text-blue-500'><span className='font-bold text-black'>Number of recipes:</span> {chef.numberOfRecipes}</p>
                    <p className='text-blue-500'><span className='font-bold text-black'>Likes:</span> {chef.likes}</p>
                    <div className="card-actions justify-start">
                        <button className="btn bg-blue-500 border-0 hover:bg-blue-700"><Link to={`/recipe/${chef.id}`}>View Recipe</Link></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleChef;