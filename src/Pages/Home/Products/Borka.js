import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Borka1 from './Borka1';

const Borka = () => {
    const [products] = useProducts([]);
    return (
        <div>
            {
products.map(borka=><Borka1 borka={borka}></Borka1>)
            }
        </div>
    )
};

export default Borka;