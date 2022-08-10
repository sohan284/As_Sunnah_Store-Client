import React from 'react';
import Panjabi1 from './Panjabi1';
import useProducts from './../../../Hooks/useProducts';

const Panjabi = () => {
    const [products] = useProducts([]);
    return (
        <div>
             <h1 className='text-primary text-5xl font-bold ml-10'>Panjabi</h1>
            {
products.map(panjabi=><Panjabi1 key={panjabi.id} panjabi={panjabi}></Panjabi1>)
            }
        </div>
    );
};

export default Panjabi;