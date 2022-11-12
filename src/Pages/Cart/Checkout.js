import React from 'react';
import { useState } from 'react';


const Checkout = ({amount}) => {
    const [totalPrice,setTotalPrice] = useState()
    
    const {price,orderQuantity} = amount ;
    const finalPrice = price * orderQuantity ;
 
    return (
        <div>
           
        </div>
    );
};

export default Checkout;