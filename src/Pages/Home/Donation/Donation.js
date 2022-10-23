import React from 'react';
import Footer2 from '../../../Shared/Footer2';
import SunnahLogo from '../../../Shared/SunnahLogo';
import OldAgeHome from './OldAgeHome';
import Orphanage from './Orphanage';

const Donation = () => {
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr className='my-5' />
            <div className='grid lg:grid-cols-2 gap-8 mx-3 my-20'>
                <Orphanage></Orphanage>
                <OldAgeHome></OldAgeHome>
            </div>
            <hr className='my-5' />
            <Footer2></Footer2>
        </div>
    );
};

export default Donation;