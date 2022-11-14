import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from './../firebase.init';

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
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

        <div className="navbar-end absolute  top-[93px]">
          <label tabIndex="1" htmlFor="dashboard-sidebar" className="lg:hidden">
            <img className='w-24 hover:w-[100px]' src="https://i.ibb.co/NWnWHg1/shop-removebg-preview.png" alt="" />
          </label>
        </div>
        <img onClick={navigateToHome} className='w-48' src="https://i.ibb.co/GT1RTkC/amalan-sunnah-removebg-preview.png" alt="" />

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">

        </ul>
      </div>
      <div className="navbar-end">
        <div className='font-bold '><Link to={'/donation'}> <img className='w-16 lg:w-16 hover:w-[67px] rounded-full' src="https://i.ibb.co/ZKMnRx4/donate-700-227300705-removebg-preview.png" alt="" /> </Link></div>
        {user ?
          <button onClick={logout}><img className='w-10 ml-2 hover:bg-black hidden hover:rounded-full ' src="https://i.ibb.co/3f3RZWY/logout.png" alt="" /></button> : <Link to={'/login'}>
            <button><img className='w-10  hover:bg-black hover:rounded-full ' src="https://i.ibb.co/nwCs3xs/login.png" alt="" /></button></Link>}
      </div>
      {user &&
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn-circle mt-1 avatar hidden lg:block">
            <div className="w-10 hover:w-[43px] rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </label>

          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
         
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to={'/userprofile'}>
                <div className='font-bold  text-black'> Profile </div>
                <img className='w-6 rounded-full lg:hidden' src={user?.photoURL} alt="" />
              </Link>
            </li>
            <li>
              <Link to={'/cart'}>
                <div className='font-bold '>Cart </div>
                <img className='w-6' src="https://i.ibb.co/mCPjZ7m/20460508-removebg-preview.png" alt="" />
              </Link>
            </li>
            <li>
              <Link to={'/users'}>
                <div className='font-bold '>All Users</div>
               </Link>
            </li>
            <hr className='my-3' />
            <li onClick={logout}>
                <div>
                <div className='font-extrabold text-[red]'>Logout</div>
                <img className='w-6  hover:rounded-full ' src="https://i.ibb.co/3f3RZWY/logout.png" alt="" />
                </div> 
            </li>
          </ul>
        </div>}
    </div>
  );
};


export default Header;