import React from 'react';
import { useNavigate } from 'react-router-dom';

const OldAgeHome = () => {
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate('/oldagehome')
    }
    return (
        <div onClick={handleNavigate} data-aos="zoom-in-up">
            <div class="hero h-72 oldagehome">
                <div class="hero-overlay"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Old Age Home</h1>
                        <p class="mb-5">We provide outreach assistance to senior citizens living alone. This includes talking to them to sort out day to day issues, helping them to pay bills, checking out medical condition and helping them </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OldAgeHome;