import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import Footer2 from '../../../Shared/Footer2';
import SunnahLogo from '../../../Shared/SunnahLogo';

const Payment = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr />
           <div className='bg-slate-200 w-80 h-80 mb-20 mt-10 flex rounded-lg justify-center container mx-auto'>
            <div className='flex flex-col'>
                <div className='flex justify-center my-5 h-[40%]'>
                <img className=' rounded' src="https://i.ibb.co/Qdxg2P9/unnamed.png" alt="" />
                </div>
            <h1 className='font-bold mx-5 mt-5 pl-1 text-[10px]'>Bkash Number</h1>
            <PhoneInput
                        className='mb-3 mx-5'
                        country={'bd'}
                        value={value}
                    />
                    <button className='btn button btn-sm my-2 mx-5'>Verify</button>
            </div>
           </div>
           <Footer2></Footer2>
        </div>
    );
};

export default Payment;