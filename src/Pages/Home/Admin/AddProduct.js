import React from 'react';
import { useForm } from "react-hook-form";
import SunnahLogo from '../../../Shared/SunnahLogo';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    
    const handleAddProduct = (e) => {
        e.preventDefault()
        
        const url = `https://as-sunnah.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
     <div>
        <SunnahLogo></SunnahLogo>
        <hr className='my-5' />
           <div className=' w-96 mx-auto  rounded-lg shadow-xl border-2 container'>
            <h2 className='text-center my-5 font-bold'>Add Product</h2>
          <div className='flex flex-col mx-5 my-5'>
          <input className='my-2 shadow-lg border rounded-md p-1'
                type="email"
                placeholder='Email'
              />
              

               
               
                <button className='btn btn-sm font-bold button border-none'>Add Product</button>
          </div>
                

             
        </div>
     </div>
    );
};
export default AddProduct;