import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardOne from './../../../Shared/CardOne';

const Borka1 = ({borka}) => {
  const navigate= useNavigate();
  const {name,price,img,size,rating,discount,_id,p_id} = borka;
  const handleBuyNow = (id) =>{
    navigate(`/buynow/${id}`)

  }
  if(borka.p_id === 33 ){
  return (
    <div>
          <CardOne name={name} img={img} price={price} rating={rating} discount={discount} _id={_id} handleBuyNow={handleBuyNow}></CardOne>
    </div>
  );
  }
};

export default Borka1;