import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import ExploreByCities from '../ExploreByCities/ExploreByCities';


const Home = () => {
    return (
        <>
         <Header/>
         <AboutUs></AboutUs>
         <ExploreByCities></ExploreByCities>
         <Footer/>
        </>
    );
};

export default Home;