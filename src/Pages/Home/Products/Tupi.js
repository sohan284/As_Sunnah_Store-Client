import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Tupi1 from './Tupi1';

const Tupi = () => {
    const [products] = useProducts([]);
    return (
        <div>
            {
products.map(tupi=><Tupi1 tupi={tupi}></Tupi1>)
            }
        </div>
    )
};

export default Tupi;