import React from 'react';
import { useNavigate } from 'react-router-dom';

const Orphanage = () => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/orphanage')
  }
    return (
      <div onClick={handleNavigate} data-aos="zoom-in-up">
          <div class="hero h-72 orphanage">
            <div class="hero-overlay "></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Orphanage</h1>
                    <p class="mb-5">We ensure all children's basic needs, including shelter, food, education, cloth etc. Currently</p>
                </div>
            </div>
        </div>
      </div>

    );
};
export default Orphanage;