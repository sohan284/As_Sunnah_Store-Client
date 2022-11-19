import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../Shared/Card';

const Product = ({search,product }) => {
  const navigate = useNavigate();
  const { name, price, img, discount,_id,rating } = product;
 
  const handleBuyNow = (id) =>{
    navigate(`/buynow/${id}`)

  }
  if(name?.toLowerCase().includes(search)){
    return (
        <div>
          <Card name={name} img={img} price={price} rating={rating} discount={discount} _id={_id} handleBuyNow={handleBuyNow}></Card>
        </div>
    );
  }
  

};

export default Product;