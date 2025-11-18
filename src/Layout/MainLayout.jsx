import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Header/>

            <Toaster></Toaster>
            <div className='mt-8'>

            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;