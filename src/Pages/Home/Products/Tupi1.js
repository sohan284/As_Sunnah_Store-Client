import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardOne from './../../../Shared/CardOne';

const Tupi1 = ({tupi}) => {
  const navigate= useNavigate();
  const {name,price,img,size,rating,discount,_id,p_id} = tupi;
  const handleBuyNow = (id) =>{
    navigate(`/buynow/${id}`)

  }
  if(tupi.p_id === 44 ){
  return (
    <div>
          <CardOne name={name} img={img} price={price} rating={rating} discount={discount} _id={_id} handleBuyNow={handleBuyNow}></CardOne>
    </div>
  );
  }
};

export default Tupi1;