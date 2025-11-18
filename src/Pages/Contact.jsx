import React from 'react';
import ContactText from '../Components/ContactText';
import ContactFrom from '../Components/ContactFrom';

const Contact = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold text-green-300'>How Can Help You ?</h1>
            <ContactText/>
            <ContactFrom/>
            <div className='mt-4'>
                <img src="https://i.ibb.co.com/S44jkZSW/about-bottom.png" alt="" />
            </div>
        </div>
    );
};

export default Contact;