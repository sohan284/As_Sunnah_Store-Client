import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardOne from './../../../Shared/CardOne';

const QuranAndHadith1 = ({quran}) => {
  const navigate= useNavigate();
  const {name,price,img,size,rating,discount,_id,p_id} = quran;
  const handleBuyNow = (id) =>{
    navigate(`/buynow/${id}`)

  }
  if(quran.p_id === 11 ){
  return (
    <div>
          <CardOne name={name} img={img} price={price} rating={rating} discount={discount} _id={_id} handleBuyNow={handleBuyNow}></CardOne>
    </div>
  );
  }
};
export default QuranAndHadith1;