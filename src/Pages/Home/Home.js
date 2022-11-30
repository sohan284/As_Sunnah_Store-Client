
import { Link, Outlet } from 'react-router-dom';
import Footer2 from '../../Shared/Footer2';
import React from 'react';
import Header from './../../Shared/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';


const Home = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

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
                        {!admin.admin &&
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

                        }
                        {admin.admin &&
                            <ul className="menu p-4  overflow-y-auto w-80 text-base-content">

                                <li data-aos="fade-up"
                                    data-aos-duration="500" className=' categoriesBtn  m-1 rounded-lg uppercase font-extrabold'><Link to="/" >
                                        <div className='flex w-full justify-between items-center'>
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                                            <h1>All Products</h1>
                                        </div>
                                    </Link></li>

                                <li data-aos="fade-up"
                                    data-aos-duration="500" className=' categoriesBtn  m-1 rounded-lg uppercase font-extrabold'><Link to="/allOrders" >
                                        <div className='flex w-full justify-between items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                            </svg>

                                            <h1>All Orders</h1>
                                        </div>
                                    </Link></li>

                                <li data-aos="fade-up"
                                    data-aos-duration="700" className='text-primary categoriesBtn bg-secondary m-1 rounded-lg uppercase font-extrabold'><Link to="/addProduct" >
                                        <div className='flex w-full justify-between items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <h1>Add Products</h1>
                                        </div>
                                    </Link></li>
                                <li data-aos="fade-up"
                                    data-aos-duration="900" className='text-primary categoriesBtn bg-secondary m-1 rounded-lg uppercase font-extrabold'><Link to="/manageProduct" >
                                        <div className='flex w-full justify-between items-center'>
                                            <svg className="h-4 w-5 mr-3 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            <h1>Manage Product</h1>
                                        </div>
                                    </Link></li>
                                <li data-aos="fade-up"
                                    data-aos-duration="1100" className='text-primary categoriesBtn bg-secondary m-1 rounded-lg uppercase font-extrabold'><Link to="/manageUsers" >
                                        <div className='flex w-full justify-between items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                            </svg>

                                            <h1>Manage Users</h1>
                                        </div>
                                    </Link></li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
            <hr className='my-5' />
            <Footer2></Footer2>

        </div>
    );
};

export default Home;