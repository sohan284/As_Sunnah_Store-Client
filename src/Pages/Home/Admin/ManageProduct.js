import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from './../../../Hooks/useProducts';

const ManageProduct = () => {
    const [products, setProduct] = useProducts();
    const navigate = useNavigate();

    const handleDeleteProduct = (id) =>{
        fetch(`https://as-sunnah-venture.onrender.com/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = products.filter(product => product._id !== id);
                    setProduct(remaining);
                    toast('deleted')
                    
                }
            })
    }
    const handleUpdateProduct =(id)=>{
        navigate(`/manageProduct/${id}`);
    }
    return (
        <div>
            <div data-aos="zoom-in" className='container  mx-auto'>
                <h1 className='text-center font-serif font-bold text-2xl text-primary'>Update & Delete Product</h1>
                {
                    products.map(product => <div>
                        <div className='flex mx-2  hover:bg-slate-200 border bg-slate-100 my-2 p-1  justify-between items-center'>
                            <div className='flex my-5 items-center'>
                                <div className='h-12 w-12'>
                                    <img src={product.img} alt="" />
                                </div>
                                <h1 className='px-3 font-semibold'> {product.name}</h1>
                               
                            </div>
                            <div>
                                <button onClick={()=>handleUpdateProduct(product._id)} className='mr-5 btn btn-sm btn-ghost my-3 text-blue-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                </button>
                                <button onClick={()=>handleDeleteProduct(product._id)} className='mr-5 btn btn-sm btn-ghost my-3 text-red-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                </button>
                               

                            </div>
                        </div>

                    </div>)
                }
                
            </div>

        </div>
    );
};

export default ManageProduct;