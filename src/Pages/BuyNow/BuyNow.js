import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import SunnahLogo from '../../Shared/SunnahLogo';
import { toast } from 'react-toastify';


const BuyNow = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [setQuantity] = useState();


    useEffect(() => {
        const url = `https://as-sunnah.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    let errorMessage;
    const percentage = parseInt(product.discount);
    const discountPrice = (percentage / 100) * product.price;
    const previousPrice = parseInt(product.price - discountPrice);


    let productQuantity;
    if(product.quantity > 0 ){
         productQuantity = product.quantity;
    }
    else productQuantity = <p className='inline text-[#ff0000c4]'>Out of stock</p>

    const increase = event => {
        const val = document.getElementById('quantity_value').value;
        const intVal = parseInt(val);

        if (intVal >= 0) {
            const increaseQuantity = parseInt(val) + 1;
            document.getElementById('quantity_value').value = parseInt(increaseQuantity);

        }

    }
    const decrease = () => {
        const val = document.getElementById('quantity_value').value;
        if (val > 0) {
            const increaseQuantity = parseInt(val) - 1;
            document.getElementById('quantity_value').value = parseInt(increaseQuantity);
        }

    }
    const delivered = () => {
        const val = document.getElementById('quantity_value').value;
        const intVal = parseInt(val)
        if (intVal > 0 && intVal <= product.quantity) {
            const availableQuantity = product.quantity - intVal;
            const updateQuantity = { availableQuantity };

            const proceed = window.confirm(`Are you want to buy ${intVal} items ??`);
            if (proceed) {
                fetch(`https://as-sunnah.herokuapp.com/product/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(updateQuantity)
                })

                    .then(res => res.json())
                    .then(data => {
                        document.getElementById('quantity_value').value = "0";
                        toast.success(`${intVal} Items Ordered Successful`)
                        setQuantity(data);
                    })
            }
        }
        else errorMessage = <p className='text-[red] my-3 font-semibold text-sm'>Please Enter a valid quantity</p>
    }
    const handleAddtoCart = () => {
        const name = product.name;
        const img = product.img;
        const price = product.price;
        const cartItem = { name, img, price }

        toast('add to cart')
        console.log(cartItem);
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data =>
                console.log(data)
            )
    }
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr />
            <br />
            <hr />
            <div className='grid container mx-auto lg:grid-cols-3 mt-10'>
                <div data-aos="zoom-in"
                    data-aos-duration="500" className='mr-5'>
                    <img className='w-[100%] p-12' src={product.img} alt="" />
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="500" className='p-3'>
                    <h1 className='text-2xl font-semibold '>{product.name}</h1>
                    <h2 className='text-[orange] mt-3 text-lg'>{product.rating}</h2>
                    <h3 className='font-semibold text-primary'><small>{product.disc?.brand_name}</small></h3>
                    <hr className='my-5' />
                    <h1 className='text-4xl text-[tomato] font-[noto]'>BDT {product.price}</h1>
                    <h3 className=' text-lg font-semibold'><span className='text-[#a0a0a0] font-normal mr-2 line-through'>BDT {previousPrice}</span> {product.discount}</h3>
                    <hr className='my-5' />
                    <h3 className='text-sm font-bold my-3 text-[gray]'>Available : {productQuantity} </h3>
                    <div className='flex'>
                        <h1 onClick={decrease} className='bg-[#ff0000b9] btn-sm btn font-bold text-white text-xl w-10'>－</h1>
                        <input name='quantity' className='border-2 mx-2 text-center rounded w-12' type='text' defaultValue={0} id="quantity_value" />
                        <h1 onClick={increase} className='bg-[#008000b6] btn-sm btn font-bold text-white text-xl w-10'>＋</h1>
                    </div>
                    {errorMessage}
                    <div className="my-5 ">
                        <button onClick={delivered} className="btn buyButton btn-primary m-1 px-12  button">Buy now</button>
                        <button onClick={handleAddtoCart} className="btn button btn-primary m-1 px-9 button">Add to cart</button>
                    </div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="500" className='p-2'>
                    <h2 className='text-secondary font-bold text-4xl'>About : </h2>
                    <hr className='mt-5' />
                    <ul className='border-4'>
                        <li className='bg-[#e7e9e0] descLi'> <span className='text-primary font-bold '> Type : </span> <span className='font-semibold'>{product.disc?.product_type} {product.type}</span> </li>

                        <li className='descLi'> <span className='text-primary font-bold '>Product_Code : </span> <span className='font-semibold'>{product.p_id}</span> </li>
                        <li className='bg-[#e7e9e0] descLi'> <span className='text-primary font-bold '> Brand : </span> <span className='font-semibold'>{product.disc?.brand_name}</span> </li>

                        <li className='descLi'> <span className='text-primary font-bold '>Place_Origin : </span> <span className='font-semibold'>{product.disc?.place_origin}</span> </li>

                        <li className='bg-[#e7e9e0] descLi'> <span className='text-primary font-bold '>Model_Number : </span> <span className='font-semibold'>{product.disc?.model_number}</span> </li>

                        <li className='descLi'> <span className='text-primary font-bold '> Material : </span> <span className='font-semibold'>{product.disc?.product_metarial}</span> </li>

                        <li className='bg-[#e7e9e0] descLi'> <span className='text-primary font-bold '> Color : </span> <span className='font-semibold'>{product.disc?.color}</span> </li>

                        <li className='descLi'> <span className='text-primary font-bold '>Size : </span> <span className='font-semibold'>{product.disc?.size} {product.size}</span> </li>

                    </ul>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default BuyNow;
