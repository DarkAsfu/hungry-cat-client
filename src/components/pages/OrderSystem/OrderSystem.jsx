import React from 'react';
import burger from '../../../../public/burger.jpg'
const OrderSystem = () => {
    // #1c2123
    return (
        <div className='py-36' style={{background:'#1c2123'}}>
            <div className='w-10/12 mx-auto md:grid grid-cols-3'>
                <div>
                    <img src={burger} alt="" />
                </div>
                <div className='p-16' style={{background:'#ffffff'}}>
                    <h2 className='text-4xl font-bold mb-10 mt-8'>OUR MENUS</h2>
                    <p className='text-lg leading-9 mb-5'>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                    <button className='btn btn-primary font-bold'>VIEW MENUS</button>
                </div>
                <div className='p-16' style={{background:'#e7e7e7'}}>
                    <h2 className='text-4xl font-bold mb-10 mt-8'>OUR DELIVERY</h2>
                    <p className='text-lg leading-9 mb-5'>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                    <button className='btn btn-primary font-bold'>ORDER ONLINE</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSystem;