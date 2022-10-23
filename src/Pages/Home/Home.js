
import { Link, Outlet } from 'react-router-dom';
import Footer2 from '../../Shared/Footer2';
import React from 'react';
import Header from './../../Shared/Header';


const Home = () => {

    return (
        <div className=' mx-auto container'>
            <Header></Header>
            <div className='mt-5'>
                <div className="drawer  drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4  overflow-y-auto w-80 text-base-content">

                            <li data-aos="fade-up"
                                data-aos-duration="500" className=' categoriesBtn  m-1 rounded-lg uppercase font-extrabold'><Link to="QuranandHadith" >
                                    <div className='flex w-full justify-between items-center'>
                                        <h1>Quran & Hadith </h1>
                                        <img className='w-8 h-8' src="https://i.ibb.co/Qd9ncCW/unnamed-removebg-preview.png" alt="" />
                                    </div>
                                </Link></li>

                            <li data-aos="fade-up"
                                data-aos-duration="700" className='text-primary categoriesBtn bg-secondary m-1 rounded-lg uppercase font-extrabold'><Link to="panjabi" >
                                    <div className='flex w-full justify-between items-center'>
                                        <h1>panjabi</h1>
                                        <img className='w-8 h-8' src="https://i.ibb.co/MRMbLmv/3-removebg-preview.png" alt="" />
                                    </div>
                                </Link></li>

                            <li data-aos="fade-up"
                                data-aos-duration="900" className='text-primary categoriesBtn bg-secondary m-1 rounded-lg uppercase font-extrabold'><Link to="borka" >
                                    <div className='flex w-full justify-between items-center'>
                                        <h1>borka & hijab</h1>
                                        <img className='w-8 h-8' src="https://i.ibb.co/q5tKj07/0f36025de334ebad71e905f053578b264d1d4b44-original-removebg-preview.png
" alt="" />
                                    </div>
                                </Link></li>

                            <li data-aos="fade-up"
                                data-aos-duration="1100" className='text-primary categoriesBtn bg-secondary m-1 rounded-lg uppercase font-extrabold'><Link to="tupi" >
                                    <div className='flex w-full justify-between items-center'>
                                        <h1>tupi</h1>
                                        <img className='w-8 h-8' src="https://i.ibb.co/yp4ybnk/HTB1i-Lr-Lb-QIL1-Jj-SZFhq6y-DZFXa-Z-removebg-preview.png" alt="" />
                                    </div>
                                </Link></li>

                            <li data-aos="fade-up"
                                data-aos-duration="1300" className='text-primary categoriesBtn bg-secondary m-1 rounded-lg uppercase font-extrabold'><Link to="jainamaj" >
                                    <div className='flex w-full justify-between items-center'>
                                        <h1>Jainamaj</h1>
                                        <img className='w-8 h-8' src="https://i.ibb.co/jRWPrCm/download-1-removebg-preview.png" alt="" />
                                    </div>
                                </Link></li>

                            <li data-aos="fade-up"
                                data-aos-duration="1500" className='text-primary bg-secondary m-1 rounded-lg uppercase categoriesBtn font-extrabold'><Link to="tasbih" >
                                    <div className='flex w-full justify-between items-center'>
                                        <h1>tasbih</h1>
                                        <img className='w-8 h-8' src="https://i.ibb.co/0Mq1xFf/a573a954f-184492-removebg-preview.png" alt="" />
                                    </div>
                                </Link></li>

                            <li data-aos="fade-up"
                                data-aos-duration="1700" className='text-primary categoriesBtn bg-secondary m-1 rounded-lg uppercase font-extrabold'><Link to="attar" >
                                    <div className='flex w-full justify-between items-center'>
                                        <h1>attar</h1>
                                        <img className='w-8 h-8' src="https://i.ibb.co/b5s7hxG/Ah0-Yj-EPSnv-Tcer-QESCbd-TCaee-ODH9-Sb-AOxj-BVUq-Q-removebg-preview.png" alt="" />
                                    </div>
                                </Link></li>

                        </ul>

                    </div>
                </div>

            </div>
            <hr className='my-5' />
            <Footer2></Footer2>

        </div>
    );
};

export default Home;