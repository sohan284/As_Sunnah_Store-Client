import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import SunnahLogo from '../../Shared/SunnahLogo';
import Footer2 from '../../Shared/Footer2';

const UserProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <div className='text-center  w-72 rounded-xl border mx-auto mt-12 shadow-2xl'>
                <h1 className='mt-5 text-3xl font-bold text-primary '>Profile</h1>
                <div className='font-bold text-secondary justify-center flex mt-5 '>
                    <img className='w-28 rounded-full' src={user.photoURL} alt="" />
                </div>
                <div className='w-96 mx-auto'>
                    <h1 className=' font-semibold  mt-5 w-80 p-2 mx-auto flex flex-col text-start'> <span className='text-primary font-bold'> Name : </span> {user.displayName}</h1>
                    <h1 className=' font-semibold  w-80 p-2 mx-auto flex flex-col text-start'> <span className='text-primary font-bold'> Email : </span> {user.email}</h1>
                    <h1 className=' font-semibold  w-80 p-2 mx-auto flex justify-between'> <span className='text-primary font-bold'> Phone : </span> {user.phoneNumber}</h1>
                </div>
            </div>
            <hr className='my-7' />
            <Footer2></Footer2>

        </div>
    );
};

export default UserProfile;