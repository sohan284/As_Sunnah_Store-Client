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
            <div className='grid container mx-auto lg:grid-cols-3 mt-10'>
                <div className='mr-5'>
                    <img className='w-[100%] p-12' src={product.img} alt="" />
                </div>
                <div className='p-3'>
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
                <div className='p-2'>
                    <h2 className='text-secondary font-bold text-4xl'>About : </h2>
                    <hr className='mt-5'/>
                    <ul className='border-4'>
                        <li className='bg-[#e7e9e0] p-2 flex justify-between'> <span className='text-primary font-bold '> Type : </span> <span className='font-semibold'>{product.disc?.product_type} {product.type}</span> </li>

                        <li className='p-2 flex justify-between'> <span className='text-primary font-bold '>Product_Code : </span> <span className='font-semibold'>{product.p_id}</span> </li>
                        <li className='bg-[#e7e9e0] p-2 flex justify-between'> <span className='text-primary font-bold '> Brand : </span> <span className='font-semibold'>{product.disc?.brand_name}</span> </li>

                        <li className='p-2 flex justify-between'> <span className='text-primary font-bold '>Place_Origin : </span> <span className='font-semibold'>{product.disc?.place_origin}</span> </li>

                        <li className='bg-[#e7e9e0] p-2 flex justify-between'> <span className='text-primary font-bold '>Model_Number : </span> <span className='font-semibold'>{product.disc?.model_number}</span> </li>

                        <li className='p-2 flex justify-between'> <span className='text-primary font-bold '> Material : </span> <span className='font-semibold'>{product.disc?.product_metarial}</span> </li>

                        

                        <li className='bg-[#e7e9e0] p-2 flex justify-between'> <span className='text-primary font-bold '> Color : </span> <span className='font-semibold'>{product.disc?.color}</span> </li>

                        <li className='p-2 flex justify-between'> <span className='text-primary font-bold '>Size : </span> <span className='font-semibold'>{product.disc?.size} {product.size}</span> </li>
                        
                    </ul>
                    
                </div>

            </div>

        </div>
    );
};

export default BuyNow;