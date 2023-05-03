import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';

const ChefCard = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <>
        <h2 className='text-center font-bold text-4xl mt-20'>Our Chefs</h2>
        <div className="divider w-60 mx-auto text-blue-700">Meet our chefs</div>
        <div className='py-20 w-10/12 mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                chefs.map(chef => <SingleChef key={chef.id} chef={chef}></SingleChef>)
            }
        </div>
        </>
    );
};

export default ChefCard;