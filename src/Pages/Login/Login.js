import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleSignup = () => {
        navigate('/signup');

    }
    const navigateToHome = () => {
        navigate('/');
    }
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
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
                            <h1 className='text-3xl  font-bold mb-7'>Log-In</h1>

                            <h6 className='text-sm font-semibold '>Your Email</h6>
                            <input className='w-72 formInput' 
                            type="email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='Email'
                            />

                            <h6 className='text-sm font-semibold mt-5'>Password</h6>
                            <input className='w-72 formInput' 
                            type="password"
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder='Password' />
                            <br />
                            <button onClick={()=>signInWithEmailAndPassword(email,password)} className='w-72 button text-white font-bold rounded p-1 mt-5'> Login</button>

                        </div>
                    </div>
                    <div className="divider my-8" ><small>New to Sunnah Store ?</small></div>
                    <button onClick={handleSignup} className=' shadow-lg w-full p-1  cBtn rounded'>Create Your account</button>
                    <hr className='my-7' />
                    <p className='text-center text-xs '>Copyright © {new Date().getFullYear()} - As Sunnah Store reserved</p>

                </div>

            </div>
        </div>
    );
};

export default Login;