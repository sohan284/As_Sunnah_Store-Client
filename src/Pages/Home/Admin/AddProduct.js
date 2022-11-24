import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../../Shared/Header';
import SunnahLogo from '../../../Shared/SunnahLogo';
import Home from '../Home';

const AddProduct = () => {
    const [pvalue, setPValue] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [discount, setDiscount] = useState();
    const [productType, setProductType] = useState();
    const [placeOrigin, setPlaceOrigin] = useState();
    const [modelNumber, setModelNumber] = useState();
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [productMaterial, setProductMaterial] = useState();
    const [img, setImg] = useState();

    const handleAddProduct = event => {
        const data = {
            p_id: parseInt(pvalue),
            name: name,
            price: parseInt(price),
            quantity: parseInt(quantity),
            discount: discount,
            disc: {
                product_type: productType,
                place_origin: placeOrigin,
                model_number: modelNumber,
                product_metarial: productMaterial,
                color: color,
                size: size
            },
            img: img

        }
        const url = `https://as-sunnah.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setName('');
                setColor('')
                setDiscount('');
                setModelNumber('')
                setPrice();
                setPlaceOrigin();
                toast.success("Product Successfully Added")
            })
    };


    return (
        <div>
            <div data-aos="zoom-in" className='bg-slate-100  border-slate-200  mx-2   shadow-xl border container'>
                <h2 className='text-center text-xl text-primary my-5 font-bold'>Add Product</h2>
                <form className='flex flex-col mx-5 my-5'>
                    <h1 className='font-bold pl-1 text-[10px]'>Product code</h1>
                    <select className='my-1 shadow-lg border rounded-md p-1' id="p_id" onClick={(e) => { setPValue(e.target.value) }} >
                        <option value="11">11</option>
                        <option value="22">22</option>
                        <option value="33">33</option>
                        <option value="44">44</option>
                        <option value="55">55</option>
                        <option value="66">66</option>
                        <option value="77">77</option>
                    </select>
                    <h1 className='font-bold pl-1 text-[10px]'>Name</h1>
                    <input className='mb-1 shadow-lg border rounded-md p-1'
                        name='Name'
                        type="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                    />
                   <div className='flex  justify-center'>
                   <div className='flex flex-col lg:flex-row lg:justify-evenly'>
                        <div className='px-1'>
                            <h1 className='font-bold pl-1 text-[10px]'>Price</h1>
                            <input className='mb-1 shadow-lg border rounded-md p-1'
                                name='Price'
                                type="Number"
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Price'
                            />
                        </div>
                        <div className='px-1'>
                            <h1 className='font-bold pl-1 text-[10px]'>Quantity</h1>
                            <input className='mb-1 shadow-lg border rounded-md p-1'
                                name='Quantity'
                                type="Number"
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder='quantity'
                            />
                        </div>
                        <div className='px-1'>
                            <h1 className='font-bold pl-1 text-[10px]'>Discount</h1>
                            <input className='mb-1 shadow-lg border rounded-md p-1'
                                name='discount'
                                type="text"
                                onChange={(e) => setDiscount(e.target.value)}
                                placeholder='Discount'
                            />
                        </div>
                    </div>

                   </div>

                    <h1 className='font-bold pl-1 text-[10px]'>Image URL</h1>
                    <input className='mb-1 shadow-lg border rounded-md p-1'
                        name='img'
                        type="text"
                        onChange={(e) => setImg(e.target.value)}
                        placeholder='URL'
                    />
                    <div className='bg-slate-100 border-slate-300 my-2 shadow-lg border rounded-md p-1'>
                        <h1 className='font-bold'>Discription</h1>
                        <div className='grid lg:grid-cols-2'>
                            <input className='mx-auto text-xs my-1 shadow-lg border rounded-md p-1'
                                name='product_type'
                                type="text"
                                onChange={(e) => setProductType(e.target.value)}
                                placeholder='Product_type'
                            />
                            <input className='mx-auto my-1 text-xs  shadow-lg border rounded-md p-1'
                                name='place_origin'
                                type="text"
                                onChange={(e) => setPlaceOrigin(e.target.value)}
                                placeholder='Place_origin'
                            />
                            <input className='mx-auto my-1 text-xs  shadow-lg border rounded-md p-1'
                                name='model_number'
                                type="text"
                                onChange={(e) => setModelNumber(e.target.value)}
                                placeholder='Model_number'
                            />
                            <input className='mx-auto my-1 text-xs  shadow-lg border rounded-md p-1'
                                name='product_metarial'
                                type="text"
                                onChange={(e) => setProductMaterial(e.target.value)}
                                placeholder='Product_metarial'
                            />
                            <input className='mx-auto my-1 lg:mb-5 text-xs  shadow-lg border rounded-md p-1'
                                name='color'
                                type="text"
                                onChange={(e) => setColor(e.target.value)}
                                placeholder='Color'
                            />
                            <input className='mx-auto my-1 mb-5 text-xs  shadow-lg border rounded-md p-1'
                                name='size'
                                type="text"
                                onChange={(e) => setSize(e.target.value)}
                                placeholder='Size'
                            />

                        </div>
                    </div>


                    <button onClick={handleAddProduct} className='btn btn-sm font-bold button border-none'>Add Product</button>
                </form>



            </div>
        </div>
    );
};
export default AddProduct;