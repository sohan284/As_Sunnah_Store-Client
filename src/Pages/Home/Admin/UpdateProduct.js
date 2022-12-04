import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SunnahLogo from './../../../Shared/SunnahLogo';

const UpdateProduct = ({ id }) => {
    const navigate = useNavigate()
    const [img] = useState();
    const { productId } = useParams();
    console.log(productId);
    const [product, setProduct] = useState();
    useEffect(() => {
        const url = `https://assunnahstore.up.railway.app/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    const handleUpdateProduct = () => {
        const data = {
            name: document.getElementById('name').value,
            price: parseInt(document.getElementById('price').value) ,
            quantity: parseInt(document.getElementById('quantity').value),
            discount:document.getElementById('discount').value,
            disc: {
                color : document.getElementById('color').value,
                size : document.getElementById('size').value, 
                model_number: document.getElementById('model_number').value, 
                place_origin: document.getElementById('place_origin').value, 
            },
            img : img 

        }
        fetch(`https://assunnahstore.up.railway.app/product/manage/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
               toast.success('Product Updated')
               navigate('/manageProduct')
            })


    }
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr className='my-5' />
            <div  data-aos="zoom-in" className='bg-slate-100  border-slate-300  w-[80%] mx-auto  rounded-lg shadow-xl border-2 container'>
                <h2 className='text-center text-xl text-primary my-5 font-bold'>Update Product</h2>
                <div className='flex flex-col mx-5 my-5'>
                    <div className='flex justify-evenly'>
                        <div>
                        <h1 className='font-bold pl-1 text-[10px]'>Product Code</h1>
                            <input disabled className=' w-24 my-1 text-xs  shadow-lg border rounded-md p-1'
                                placeholder={product?.p_id}
                            />
                        </div>
                        <div>
                            <h1 className='font-bold pl-1 text-[10px]'>Model number</h1>
                            <input disabled className='w-24 my-1 text-xs  shadow-lg border rounded-md p-1'
                                id='model_number'
                                type="text"
                                value={product?.disc?.model_number}
                                placeholder={product?.disc?.model_number}
                            />
                        </div>
                        <div>
                            <h1 className='font-bold pl-1 text-[10px]'>Origin</h1>
                            <input disabled className=' w-24 my-1 text-xs  shadow-lg border rounded-md p-1'
                                id='place_origin'
                                type="text"
                              value={product?.disc?.place_origin}
                                placeholder={product?.disc?.place_origin}
                            />
                        </div>
                        

                    </div>


                    <h1 className='font-bold pl-1 text-[10px]'>Name</h1>
                    <input className='mb-2 shadow-lg border rounded-md p-1'
                        name='Name'
                        id='name'
                        defaultValue={product?.name}
                        placeholder={product?.name}
                    />
                 <div className='flex flex-col lg:flex-row mx-auto justify-evenly'>
                    <div>
                    <h1 className='font-bold pl-1 text-[10px]'>Price</h1>
                    <input className='mx-auto my-1 lg:mb-5 text-xs  shadow-lg border rounded-md p-1'
                        name='Price'
                        type="Number"
                        id='price'
                        defaultValue={product?.price}
                        
                     
                    />
                    </div>
                    <div>
                    <h1 className='font-bold pl-1 text-[10px]'>Quantity</h1>
                    <input className='mx-auto my-1 lg:mb-5 text-xs  shadow-lg border rounded-md p-1'
                        name='Quantity'
                        type="Number"
                        id='quantity'
                        defaultValue={product?.quantity}
                        placeholder={product?.quantity}
                    />

                    </div>
                    <div>
                    <h1 className='font-bold pl-1 text-[10px]'>color</h1>
                    <input className='mx-auto my-1 lg:mb-5 text-xs  shadow-lg border rounded-md p-1'
                                name='color'
                                type="text"
                                id='color'
                                defaultValue={product?.disc?.color}
                                placeholder={product?.disc?.color}
                            />
                          
                    </div>
                    <div>
                    <h1 className='font-bold pl-1 text-[10px]'>Size</h1>
                    <input className='mx-auto my-1 lg:mb-5 text-xs  shadow-lg border rounded-md p-1'
                                name='size'
                                type="text"
                                id='size'
                                defaultValue={product?.disc?.size}
                                placeholder={product?.disc?.size}
                            />
                    </div>
                    <div>
                    <h1 className='font-bold pl-1 text-[10px]'>Discount</h1>
                    <input className='mx-auto my-1 lg:mb-5 text-xs  shadow-lg border rounded-md p-1'
                        id='discount'
                        type="text"
                        defaultValue={product?.discount}
                        placeholder={product?.discount}
                    />
                    </div>
                
                   
                   
                 </div>
                    <h1 className='font-bold pl-1 text-[10px]'>Image URL</h1>
                    <input className='mb-5 shadow-lg border rounded-md p-1'
                        name='img'
                        type="text"
                        placeholder={product?.img}
                    />
                   


                    <button onClick={handleUpdateProduct} className='btn btn-sm font-bold button border-none'>Update Product</button>
                </div>



            </div>
        </div>
    );
};

export default UpdateProduct;