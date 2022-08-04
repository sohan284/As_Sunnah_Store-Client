import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SunnahLogo from '../../Shared/SunnahLogo';

const BuyNow = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setProduct(data))

    },[])
    console.log(product)
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr />
            <br />
            <hr />
            <div className='grid grid-cols-2 mt-10'>
                <div>
                <img src={product.img} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>{product.name}</h1>
                    <h2 className='text-[orange] text-lg'>{product.rating}</h2>
                    

                </div>
            </div>
            
        </div>
    );
};

export default BuyNow;