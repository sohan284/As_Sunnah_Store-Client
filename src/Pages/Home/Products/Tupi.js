import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Tupi1 from './Tupi1';

const Tupi = () => {
    const [products] = useProducts([]);
    return (
        <div>
             <h1 className='text-primary text-5xl font-bold ml-10'>Tupi</h1>
            {
products.map(tupi=><Tupi1 tupi={tupi}></Tupi1>)
            }
        </div>
    )
};

export default Tupi;