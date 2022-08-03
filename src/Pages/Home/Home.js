import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from './../../Shared/Footer';
import Header from './../../Shared/Header';
import SearchContainer from './SearchContainer';

const Home = () => {
    const navigate = useNavigate();
    const [search,setSearch] = useState('');
    const handleSearch = event => {
        event.preventDefault();
        const value = document.getElementById('default-search').value;
        setSearch(value);
        if (value != 0) {
            
        }
        console.log(value)

    }
    return (
        <div>
            <Header></Header>
            <form className='flex justify-center'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" placeholder='What are you looking for.....' className="block p-4 pl-10 w-96 h-12 text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-primary dark:placeholder-gray-400  dark:focus:ring-blue-500 " required="" />

                    <button onClick={handleSearch} className="text-white button absolute right-1 bottom-1.5  hover:bg-primary focus:ring-4 focus:outline-none font-medium rounded-xl  text-sm px-4 py-2 dark:bg-primary hover:bg-green-800 dark:focus:ring-green-700">Search</button>
                </div>
            </form>
            <div className='mt-5'>
                <div className="drawer  drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4  text-white overflow-y-auto w-80 text-base-content">

                            <li className='text-primary bg-[#aad160] m-1 rounded-2xl uppercase font-extrabold'><Link to="QuranandHadith" >
                                <div className='flex w-full justify-between items-center'>
                                    <h1>Quran & Hadith </h1>
                                    <img className='w-14 h-14' src="https://i.ibb.co/Qd9ncCW/unnamed-removebg-preview.png" alt="" />
                                </div>
                            </Link></li>

                            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="panjabi" >
                                <div className='flex w-full justify-between items-center'>
                                    <h1>panjabi</h1>
                                    <img className='w-14 h-14' src="https://i.ibb.co/MRMbLmv/3-removebg-preview.png" alt="" />
                                </div>
                            </Link></li>

                            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="borka" >
                                <div className='flex w-full justify-between items-center'>
                                    <h1>borka & hijab</h1>
                                    <img className='w-16 h-14' src="https://i.ibb.co/q5tKj07/0f36025de334ebad71e905f053578b264d1d4b44-original-removebg-preview.png
" alt="" />
                                </div>
                            </Link></li>

                            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="tupi" >
                                <div className='flex w-full justify-between items-center'>
                                    <h1>tupi</h1>
                                    <img className='w-14 h-14' src="https://i.ibb.co/yp4ybnk/HTB1i-Lr-Lb-QIL1-Jj-SZFhq6y-DZFXa-Z-removebg-preview.png" alt="" />
                                </div>
                            </Link></li>

                            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="jainamaj" >
                                <div className='flex w-full justify-between items-center'>
                                    <h1>Jainamaj</h1>
                                    <img className='w-14 h-14' src="https://i.ibb.co/jRWPrCm/download-1-removebg-preview.png" alt="" />
                                </div>
                            </Link></li>

                            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="tasbih" >
                                <div className='flex w-full justify-between items-center'>
                                    <h1>tasbih</h1>
                                    <img className='w-14 h-14' src="https://i.ibb.co/0Mq1xFf/a573a954f-184492-removebg-preview.png" alt="" />
                                </div>
                            </Link></li>

                            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="attar" >
                                <div className='flex w-full justify-between items-center'>
                                    <h1>attar</h1>
                                    <img className='w-14 h-14' src="https://i.ibb.co/b5s7hxG/Ah0-Yj-EPSnv-Tcer-QESCbd-TCaee-ODH9-Sb-AOxj-BVUq-Q-removebg-preview.png" alt="" />
                                </div>
                            </Link></li>

                        </ul>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;