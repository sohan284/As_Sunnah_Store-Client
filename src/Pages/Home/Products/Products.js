import React, { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import Product from './Product';
const Products = () => {
    const [products,setProduct] = useState([]);
    const [search, setSearch] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [page,setPage] = useState()
    const [size ,setSize] =useState(10);
    useEffect(() => {
        fetch(`https://as-sunnah.herokuapp.com/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data =>setProduct(data))

    }, [page , size])
    useEffect(() => {
        fetch(`https://as-sunnah.herokuapp.com/productCount`)
            .then(res => res.json())
            .then(data =>{
                const count = data.count;
                const pages = Math.ceil(count/10);
                setPageCount(pages);
            })

    }, [])
    const handleSearch = event => {
        event.preventDefault();
        const value = document.getElementById('default-search').value;
        setSearch(value);
        document.getElementById('default-search').value = '';
    }
    let loading;
    if (products.length === 0) {
        loading = <div data-aos="zoom-in" className='flex justify-center mt-10 items-center'>
            <BounceLoader
                color="#6fc205"
                size={100}
            />
        </div>
    }

    return (
        <div>
            <form className='flex justify-center absolute lg:top-24 top-[120px] left-[20%] lg:left-[40%]'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div data-aos="zoom-in" className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" placeholder='What are you looking for.....' className="block p-2 pl-10 w-72 lg:w-96 lg:h-10 h-8 text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-primary dark:placeholder-gray-400  dark:focus:ring-blue-500 " required="" />

                    <button onClick={handleSearch} className="text-white button absolute right-1 top-1  bottom-1 lg:bottom-1.5   focus:ring-4 focus:outline-none font-medium rounded-full  text-sm lg:px-5 px-3  dark:bg-primary hover:bg-green-800 dark:focus:ring-green-700">Search</button>
                </div>
            </form>
            <div data-aos="zoom-in" class=" shadow-xl shadow-green-200 mx-3">
                <img className='w-full rounded-lg   shadow-xl' src="https://i.ibb.co/hD4nHKs/banner-islamic-financing.png" alt="Burger" />
            </div>
            {loading}
            <div className='grid lg:grid-cols-2 sm:grid-cols-2 mt-3'>

                {
                    products.map(product => <Product key={product.id} search={search} product={product}></Product>)
                }

            </div>
            <div className='pagination mt-5 grid grid-cols-12 bg-slate-200'>
            {
                        [...Array(pageCount).keys()]
                        .map(number => <div className=''>
                            <button
                            className={page=== number ? 'selected': ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>
                        </div>)
                    }
                <select className='bg-slate-200' name="" id="" onChange={e => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                </select>
            </div>

        </div>

    );
};

export default Products;