import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');

  }
  return (
    <footer className="footer footer-center p-10 bg-gray-300 text-base-content">
      <div>
      <div>
      <img onClick={navigateToHome} className='w-48 ml-5' src="https://i.ibb.co/GT1RTkC/amalan-sunnah-removebg-preview.png" alt="" />
        </div>  <p className="font-bold">
        AS Sunnah Store Ltd.
        </p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-2">
        <a className="link mr-1 link-hover" href='https://www.facebook.com/SrSohan2748' target='blank'>
          <img width={40} src="https://i.ibb.co/7Sv45pg/facebook-circle.png" alt="" /></a>
          <a className="link link-hover" href='https://github.com/sohan284' target='blank'>
          <img width={42} src="https://i.ibb.co/8dQKqtG/68747470733a2f2f64617368626f6172642e736e617063726166742e696f2f736974655f6d656469612f6170706d65646961.png" alt="" /></a>
          <a className="link link-hover" href='https://www.linkedin.com/in/sr-sohan-1621a0199/' target='blank'>
          <img width={43} src="https://i.ibb.co/h1bwTJB/linked-in-icon-18.png" alt="" /></a>  </div>
      </div>
    </footer>
  );
};

export default Footer;