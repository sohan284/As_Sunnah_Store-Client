import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import useAdmin from '../Hooks/useAdmin';
import auth from './../firebase.init';
import {ShoppingCartIcon } from '@heroicons/react/24/solid';


const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigateToHome = () => {
    navigate('/');
  }
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  }
  return (
    <div data-aos="fade-down" className="navbar bg-base-100 mb-10">
      <div className="navbar-start">
        <img onClick={navigateToHome} className='w-48' src="https://i.ibb.co/GT1RTkC/amalan-sunnah-removebg-preview.png" alt="" />

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">

        </ul>
      </div>
      <div className="navbar-end">
        <div className='font-bold '><Link to={'/donation'}> <img className='w-12 lg:w-11 mr-2 border-2 bg-ghost hover:w-12 rounded-full' src="https://i.ibb.co/2WZdcV4/Group-21.png" alt="" /> </Link></div>
        {user ?
          <button onClick={logout}><img className='w-10 ml-2 hover:bg-black hidden hover:rounded-full ' src="https://i.ibb.co/3f3RZWY/logout.png" alt="" /></button> : <Link to={'/login'}>
            <button><img className='w-10  hover:bg-black hover:rounded-full ' src="https://i.ibb.co/nwCs3xs/login.png" alt="" /></button></Link>}
      </div>


      {user &&
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn-circle mt-1 avatar hidden lg:block">
            <div className="w-10 hover:w-[43px] rounded-full">
              <img src={user?.photoURL} alt="" /> <img src="https://i.ibb.co/dgBLLmf/Png-Item-1468479.png" alt="" />
            </div>
          </label>

          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex="0" className="menu menu-compact bg-slate-100 dropdown-content mt-3 p-2 shadow  rounded-box w-52">
            <li>
              <Link to={'/userprofile'}>
                <div className='font-semibold flex text-black'> <div className="h-4 w-5  mr-3 text-slate-500"> <svg className="h-5 w-5  mr-3 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>  </div>

                  Profile</div>
                
              </Link>
            </li>
            
           

            {!admin.admin &&
              <li>
                <Link to={'/cart'}>
                  <div className='flex font-semibold'>
                    <div className="h-5 w-5  mr-3 text-slate-500"> <ShoppingCartIcon className="h-5 w-5 mr-3 text-slate-500" /></div> Cart</div>

                </Link>
              </li>
            }
            {admin.admin &&
              (<li className='lg:hidden'>
                <Link to={'/addProduct'}>
                  <div className='font-semibold  flex justify-between'><div className="h-5 w-5  mr-3 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg></div>
                    Add Product
                  </div>
                </Link>
              </li>)
            }
            {admin.admin &&
              (<li className='lg:hidden'>
                <Link to={'/manageProduct'}>
                  <div className='font-semibold flex justify-between'> <div className="h-5 w-5  mr-3 text-slate-500"><svg className="h-4 w-5 mr-3 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg></div>

                    Manage Product
                  </div>
                </Link>
              </li>)
            }
            {admin.admin &&
              (<li className='lg:hidden'>
                <Link to={'/manageUsers'}>
                  <div className='font-semibold flex'><div className="h-4 w-5  mr-3 text-slate-500"><svg className="h-5 w-5 mr-3 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                  </svg></div>
                    Manage Users</div>
                </Link>
              </li>)
            }
             <li>
              <Link to={'/contactus'}>
                <div className='font-semibold flex text-black'> <div className="h-4 w-4  mr-3 text-slate-500"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div>

                  Contact Us</div>
                
              </Link>
            </li>


            <hr className='my-3' />
            <li onClick={logout}>
              <div className='text-[red] h-8'>
                <svg className='text-[red] h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>

                <div className='font-semibold py-3 text-[red]'>Logout</div>

              </div>
            </li>
          </ul>
        </div>}

    </div>
  );
};


export default Header;