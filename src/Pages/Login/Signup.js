import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import SunnahLogo from './../../Shared/SunnahLogo';
import { BounceLoader } from 'react-spinners';
import Footer2 from '../../Shared/Footer2';

const Signup = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const location = useLocation();
    const [password, setPassword] = useState('');
    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');

    }
    if (user) {
       navigate(from,{replace:true})
      }
      if (error) {
        errorMessage = <p className='text-[red] font-semibold my-3 text-sm'>Error: {error?.message}</p>
      }
      if (loading) {
     return <div className='flex justify-center h-screen items-center'>
        <BounceLoader
          color="#6fc205"
          size={100}
        />
      </div>
      }
    return (
        <div>
           <SunnahLogo></SunnahLogo>
            <div className='flex justify-center '>
                <div>
                    <div className='border rounded p-8 mt-5 shadow-lg'>
                        <div>
                            <h1 className='text-3xl  font-bold mb-5'>Create Account</h1>

                            <h6 className='text-sm font-semibold '>Your Name</h6>
                            <input className='w-72 formInput' 
                            type="text"
                            value={name} 
                            onChange={(e)=>setName(e.target.value)}
                            placeholder='Name' />
                           
                            <h6 className='text-sm font-semibold mt-5'>Email</h6>
                            <input className='w-72 formInput' 
                            type="text"
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='Email' />
                            
                            <h6 className='text-sm font-semibold mt-5'>Password</h6>
                            <input className='w-72 formInput' 
                            type="password"
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder='Password' />

                            <h6 className='text-sm font-semibold mt-5'>Re-enter Password</h6>
                            <input className='w-72 formInput' type="password" placeholder='re-password' />
                            <br />
                            <button onClick={()=>createUserWithEmailAndPassword(email,password)} className='w-72 button text-white font-bold rounded p-1 mt-5'>Signup</button>
                            {errorMessage}
                        </div>
                        <div className=" mt-5" ><small>Already have an account? <span onClick={handleLogin} className='font-semibold text-[blue] lgin' > Log-In</span></small> </div>
                       
                    </div>
                    
                    <div className="divider my-3" ><small>OR</small></div>
                    <button onClick={() => signInWithGoogle()} className=' shadow-lg w-full rounded p-1 font-semibold cBtn'>
                        <div className='flex justify-center items-center'>
                            <div><img className='w-10' src="https://i.ibb.co/Qj5082F/images-removebg-preview.png" alt="" /></div>
                            <div className='font-bold'>Continue With Google</div>
                        </div></button>
                    <hr className='my-7' />
                   <Footer2></Footer2>

                </div>

            </div>
        </div>

    );
};

export default Signup;