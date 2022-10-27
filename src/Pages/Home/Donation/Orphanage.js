import React from 'react';
import { useNavigate } from 'react-router-dom';

const Orphanage = () => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/orphanage')
  }
    return (
      <div onClick={handleNavigate} data-aos="zoom-in-up">
          <div className="hero h-72 orphanage">
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Orphanage</h1>
                    <p className="mb-5">We ensure all children's basic needs, including shelter, food, education, cloth etc. Currently</p>
                </div>
            </div>
        </div>
      </div>

    );
};
export default Orphanage;