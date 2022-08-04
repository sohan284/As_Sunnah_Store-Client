import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SunnahLogo from '../../Shared/SunnahLogo';

const BuyNow = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    const percentage = parseInt(product.discount);
    const discountPrice = (percentage / 100) * product.price;
    const previousPrice = parseInt(product.price - discountPrice);

    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr />
            <br />
            <hr />
            <div className='grid grid-cols-2 mt-10'>
                <div className='mr-5'>
                    <img src={product.img} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold '>{product.name}</h1>
                    <h2 className='text-[orange] mt-3 text-lg'>{product.rating}</h2>
                    <h3 className='font-semibold text-primary'><small>{product.disc?.brand_name}</small></h3>
                    <hr className='my-5' />
                    <h1 className='text-4xl text-[tomato] font-[noto]'>BDT {product.price}</h1>
                    <h3 className=' text-lg font-semibold'><span className='text-[#a0a0a0] font-normal mr-2 line-through'>BDT {previousPrice}</span> {product.discount}</h3>
                    <hr className='my-5' />
                    <h3 className='text-sm font-bold text-[gray]'>{product.size} {product.disc?.size}</h3>
                    <div className="my-5 ">
                        <button className="btn buyButton btn-primary m-1 px-12  button">Buy now</button>
                        <button className="btn button btn-primary m-1 px-9 button">Add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BuyNow;