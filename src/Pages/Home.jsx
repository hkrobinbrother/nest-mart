import React from 'react';
import Banner from '../Components/Banner/Banner';
import SmallCards from '../Components/SmallCards/SmallCards';
import Products from '../Components/Products';

const Home = () => {
    return (
        <div>
           <Banner/>
           <SmallCards/>
           <Products />
            
        </div>
    );
};

export default Home;