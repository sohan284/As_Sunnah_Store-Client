import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardOne from './../../../Shared/CardOne';

const Jainamaj1 = ({jainamaj}) => {
  const navigate= useNavigate();
  const {name,price,img,size,rating,discount,_id,p_id} = jainamaj;
  const handleBuyNow = (id) =>{
    navigate(`/buynow/${id}`)

  }
  if(jainamaj.p_id === 55 ){
  return (
    <div>
          <CardOne name={name} img={img} price={price} rating={rating} discount={discount} _id={_id} handleBuyNow={handleBuyNow}></CardOne>
    </div>
  );
  }
};

export default Jainamaj1;