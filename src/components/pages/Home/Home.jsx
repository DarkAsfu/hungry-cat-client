import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';
import Comitment from '../Comitment/Comitment';
import OrderSystem from '../OrderSystem/OrderSystem';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefCard></ChefCard>
            <Comitment></Comitment>
            <OrderSystem></OrderSystem>
            <Contact></Contact>
        </div>
    );
};

export default Home;