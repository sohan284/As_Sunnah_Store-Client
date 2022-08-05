import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardOne from './../../../Shared/CardOne';

const Panjabi1 = ({panjabi}) => {
  const navigate= useNavigate();
  const {name,price,img,size,rating,discount,_id,p_id} = panjabi;
  const handleBuyNow = (id) =>{
    navigate(`/buynow/${id}`)

  }
  if(panjabi.p_id === 22 ){
  return (
    <div>
          <CardOne name={name} img={img} price={price} rating={rating} discount={discount} _id={_id} handleBuyNow={handleBuyNow}></CardOne>
    </div>
  );
  }
};

export default Panjabi1;