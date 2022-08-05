import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardOne from './../../../Shared/CardOne';


const Attar1 = ({attar}) => {
  const navigate= useNavigate();
    const {name,price,img,size,rating,discount,_id,p_id} = attar;
    const handleBuyNow = (id) =>{
      navigate(`/buynow/${id}`)
  
    }
    if(attar.p_id === 77 ){
    return (
      <div>
            <CardOne name={name} img={img} price={price} rating={rating} discount={discount} _id={_id} handleBuyNow={handleBuyNow}></CardOne>
      </div>
    );
    }
};

export default Attar1;