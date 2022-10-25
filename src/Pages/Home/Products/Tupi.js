import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Tupi1 from './Tupi1';
import Loading from './../../../Shared/Loading';

const Tupi = () => {
    const [products] = useProducts([]);
    let loading ;
    if(products.length === 0){
      loading = <Loading></Loading>
    }
    return (
        <div>
             <h1 className='text-primary text-5xl font-bold ml-10'>Tupi</h1>
             {loading}
            {
products.map(tupi=><Tupi1 tupi={tupi}></Tupi1>)
            }
        </div>
    )
};

export default Tupi;