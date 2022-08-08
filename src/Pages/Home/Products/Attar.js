import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Attar1 from './Attar1';
const Attar = () => {
    const [products] = useProducts([]);
    return (
        <div>
            <h1 className='text-primary text-5xl font-bold ml-10'>Attar</h1>
            {
                products.map(attar => <Attar1 attar={attar}></Attar1>)
            }
        </div>
    )
};

export default Attar;