import React from 'react';
import banner from '../../../../public/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-7xl font-bold leading-tight tracking-widest">The Hungry Cat</h1>
                    <p className="mb-5 text-xl font-mono">Savor every bite of life with our mouth-watering dishes and exceptional service. Come dine with us and indulge in an unforgettable culinary experience.</p>
                    <button className="btn btn-outline btn-primary bg-white px-8">See Menu</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;