import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Jainamaj1 from './Jainamaj1';


const Jainamaj = () => {
    const [products] = useProducts([]);
    return (
        <div>
             <h1 className='text-primary text-5xl font-bold ml-10'>Jainamaj</h1>
            {
products.map(jainamaj=><Jainamaj1 jainamaj={jainamaj}></Jainamaj1>)
            }
        </div>
    )
  
  
};

export default Jainamaj;