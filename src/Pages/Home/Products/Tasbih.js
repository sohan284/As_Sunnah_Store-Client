import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Tasbih1 from './Tasbih1';

const Tasbih = () => {
  const [products] = useProducts([]);
  return (
      <div>
         <h1 className='text-primary text-5xl font-bold ml-10'>Tasbih</h1>
          {
products.map(tasbih=><Tasbih1 tasbih={tasbih}></Tasbih1>)
          }
      </div>
  )
};

export default Tasbih;