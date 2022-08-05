import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardOne from './../../../Shared/CardOne';

const Tasbih1 = ({tasbih}) => {
  const navigate= useNavigate();
  const {name,price,img,size,rating,discount,_id,p_id} = tasbih;
  const handleBuyNow = (id) =>{
    navigate(`/buynow/${id}`)

  }
  if(tasbih.p_id === 66 ){
  return (
    <div>
          <CardOne name={name} img={img} price={price} rating={rating} discount={discount} _id={_id} handleBuyNow={handleBuyNow}></CardOne>
    </div>
  );
  }
};

export default Tasbih1;