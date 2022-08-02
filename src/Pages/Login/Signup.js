import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');

    }
    const navigateToHome = () => {
        navigate('/');
    }
    return (
        <div>
            <div className='flex justify-center'>
                <img onClick={navigateToHome} className='w-48 ml-5' src="https://i.ibb.co/GT1RTkC/amalan-sunnah-removebg-preview.png" alt="" />
            </div>
            <div className='flex justify-center '>
                <div>
                    <div className='border rounded p-8 mt-5 shadow-lg'>
                        <div>
                            <h1 className='text-3xl  font-bold mb-7'>Create Account</h1>

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
                        </div>
                        <div className=" my-8" ><small>Already have an account? <span><a className='font-semibold text-[blue] lgin' onClick={handleLogin} href="">Log-In</a></span></small> </div>
                    </div>
                    <div className="divider my-3" ><small>OR</small></div>
                    <button onClick={() => signInWithGoogle()} className=' shadow-lg w-full rounded p-1 font-semibold cBtn'>
                        <div className='flex justify-center items-center'>
                            <div><img className='w-10' src="https://i.ibb.co/Qj5082F/images-removebg-preview.png" alt="" /></div>
                            <div className='font-bold'>Continue With Google</div>
                        </div></button>
                    <hr className='my-7' />
                    <p className='text-center text-xs '>Copyright © {new Date().getFullYear()} - As Sunnah Store reserved</p>

                </div>

            </div>
        </div>

    );
};

export default Signup;