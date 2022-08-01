import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Tasbih1 from './Tasbih1';

const Tasbih = () => {
  const [products] = useProducts([]);
  return (
      <div>
          {
products.map(tasbih=><Tasbih1 tasbih={tasbih}></Tasbih1>)
          }
      </div>
  )
};

export default Tasbih;