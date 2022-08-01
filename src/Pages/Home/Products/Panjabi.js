import React from 'react';
import Panjabi1 from './Panjabi1';
import useProducts from './../../../Hooks/useProducts';

const Panjabi = () => {
    const [products] = useProducts([]);
    return (
        <div>
            {
products.map(panjabi=><Panjabi1 panjabi={panjabi}></Panjabi1>)
            }
        </div>
    );
};

export default Panjabi;