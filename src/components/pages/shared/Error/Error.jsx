import React from 'react';
import error from '../../../../../public/error.jpg'
const Error = () => {
    return (
        <div className='py-20'>
            <div className="flex flex-col items-center justify-center h-screen">
                <img src={error} alt="404 Not Found" className="w-1/2 md:w-1/3" />
                <h1 className="text-2xl font-bold mt-8">404 Page Not Found</h1>
            </div>
        </div>
    );
};

export default Error;