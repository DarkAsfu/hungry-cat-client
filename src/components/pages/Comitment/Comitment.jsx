import React from 'react';
import bg from '../../../../public/bg2.jpg';
import food from '../../../../public/food .jpg';
import price from '../../../../public/price.jpg';
import customer from '../../../../public/customer.jpg';
import halal from '../../../../public/halal.jpg'
const Comitment = () => {
    return ( 
        // <div  style={{backgroundImage: `url(${bg})`, height:'max-content', backgroundSize:'cover', }}>
        //     <div className="hero-overlay bg-opacity-60"></div>
        //      <h2 className='text-center font-bold text-4xl mt-20'>Our Commitment</h2>
        //     <div className="divider w-80 mx-auto text-blue-700">Let's check our commitment</div>
        // </div>
        <div className="hero min-h-fit" style={{backgroundImage: `url(${bg})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div>
            <h2 className='text-center font-bold text-4xl mt-20'>Our Commitment</h2>
            <div className="divider w-80 mx-auto text-blue-700">Let's check our commitment</div>
            <div className='grid  lg:grid-cols-4 gap-x-10 pb-10'>
                <div className='card border p-5 mt-4'>
                    <img className='w-64 ps-5 md:ps-0' src={food} alt="" />
                    <p className='text-2xl font bold mt-4'>Fresh Food</p>
                </div>
                <div className='card border p-5 mt-4'>
                    <img className='w-64 ps-5 md:ps-0' src={price} alt="" />
                    <p className='text-2xl font bold mt-4'>Resonable</p>
                </div>
                <div className='card border p-5 mt-4'>
                    <img className='w-64 ps-5 md:ps-0' src={halal} alt="" />
                    <p className='text-2xl font bold mt-4'>Halal Food</p>
                </div>
                <div className='card border p-5 mt-4'>
                    <img className='w-64 ps-5 md:ps-0' src={customer} alt="" />
                    <p className='text-2xl font bold mt-4 '>Best Service</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Comitment;