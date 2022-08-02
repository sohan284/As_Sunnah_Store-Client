import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from './../firebase.init';

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const navigateToHome = () =>{
        navigate('/');

    }
    const handleLogin =()=>{
      navigate('/login');
    }
    const logout = () =>{
      signOut(auth);
    }
    const handleSearch = event =>{
      event.preventDefault();
      const value = document.getElementById('default-search').value;
      console.log(value);
    }
    return (
        <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <img onClick={navigateToHome} className='w-48 ml-5' src="https://i.ibb.co/GT1RTkC/amalan-sunnah-removebg-preview.png" alt="" />
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>Home</a></li>         
<form onSubmit={handleSearch}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input  type="search" id="default-search" placeholder='What are you looking for.....' class="block  p-4 pl-10 w-96 text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-primary dark:placeholder-gray-400  dark:focus:ring-blue-500 " required=""/>
        
        <button type="submit" class="text-white button absolute right-2.5  bottom-2.5  hover:bg-primary focus:ring-4 focus:outline-none font-medium rounded-xl  text-sm px-4 py-2 dark:bg-primary hover:bg-green-800 dark:focus:ring-green-700">Search</button>
    </div>
</form>         
          </ul>
        </div>
        <div class="navbar-end">
          { user &&
           <button className='font-bold text-secondary'><Link to={'/dashboard'}> <img className='w-10 mx-3 rounded-full' src={user.photoURL} alt="" /> </Link></button>}
           
           {user?
           <button onClick={logout}><img className='w-10  hover:bg-black hover:rounded-full ' src="https://i.ibb.co/3f3RZWY/logout.png" alt="" /></button> : <Link to={'/login'}>
            <button><img className='w-10  hover:bg-black hover:rounded-full ' src="https://i.ibb.co/nwCs3xs/login.png" alt="" /></button></Link>}
        </div>
      </div>
    );
};


export default Header;