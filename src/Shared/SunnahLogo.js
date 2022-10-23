import React from 'react';
import { useNavigate } from 'react-router-dom';

const SunnahLogo = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }
    return (
        <div data-aos="fade-down" className='flex justify-center'>
        <img onClick={navigateToHome} className='w-48 ml-5' src="https://i.ibb.co/GT1RTkC/amalan-sunnah-removebg-preview.png" alt="" />
        </div>
    );
};

export default SunnahLogo;