import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Borka1 from './Borka1';
import Loading from './../../../Shared/Loading';

const Borka = () => {
    const [products] = useProducts([]);
    let loading ;
    if(products.length === 0){
      loading = <Loading></Loading>
    }
    return (
        <div>
             <h1 className='text-primary text-5xl font-bold ml-10'>Borka</h1>
             {loading}
            {
products.map(borka=><Borka1 borka={borka}></Borka1>)
            }
        </div>
    )
};

export default Borka;