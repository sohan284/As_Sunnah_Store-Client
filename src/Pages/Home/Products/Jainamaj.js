import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Jainamaj1 from './Jainamaj1';


const Jainamaj = () => {
    const [products] = useProducts([]);
    return (
        <div>
            {
products.map(jainamaj=><Jainamaj1 jainamaj={jainamaj}></Jainamaj1>)
            }
        </div>
    )
  
  
};

export default Jainamaj;