import React, { useState } from 'react';
import useProducts from './../../../Hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products, setProduct] = useProducts([]);
    const [search,setSearch] = useState('');
    const handleSearch = event => {
        event.preventDefault();
        const value = document.getElementById('default-search').value;
        setSearch(value);
        document.getElementById('default-search').value = '';
    }
    return (
        <div>
                <form className='flex justify-center absolute lg:top-24 top-[120px] left-[20%] lg:left-[40%]'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" placeholder='What are you looking for.....' className="block p-2 pl-10 w-72 lg:w-96 lg:h-10 h-8 text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-primary dark:placeholder-gray-400  dark:focus:ring-blue-500 " required="" />

                    <button onClick={handleSearch} className="text-white button absolute right-1 top-1  bottom-1 lg:bottom-1.5  hover:bg-primary focus:ring-4 focus:outline-none font-medium rounded-full  text-sm lg:px-5 px-3  dark:bg-primary hover:bg-green-800 dark:focus:ring-green-700">Search</button>
                </div>
            </form>
            <div className='flex flex-col lg:flex-row banner justify-evenly'>
                <div>
                    <div className="h-96 carousel w-full  mx-auto carousel-vertical  rounded-box">
                        <div>
                            <div className="carousel-item h-54 w-full">
                                <img src="https://i.ibb.co/sJ7RSfq/Visit-www-reallygreatsite-com-1.png" />
                            </div>
                            <div className="carousel-item mt-5 h-54 w-full">
                                <img src="https://i.ibb.co/9ZPgmvj/Visit-www-reallygreatsite-com-3.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="h-96 carousel w-full  mx-auto carousel-vertical  rounded-box">
                        <div>
                            <div className="carousel-item  h-54 w-full">
                                <img src="https://i.ibb.co/DM3M8Ng/Visit-www-reallygreatsite-com-4.png" />
                            </div>
                            <div className="carousel-item mt-5 h-54 w-full">
                                <img src="https://i.ibb.co/7W6K8kB/Visit-www-reallygreatsite-com.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2'>

                {
                    products.map(product => <Product key={product.id} search={search} product={product}></Product>)
                }
            </div>
        </div>

    );
};

export default Products;