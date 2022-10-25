import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Jainamaj1 from './Jainamaj1';
import Loading from './../../../Shared/Loading';


const Jainamaj = () => {
    const [products] = useProducts([]);
    let loading ;
    if(products.length === 0){
      loading = <Loading></Loading>
    }
    return (
        <div>
             <h1 className='text-primary text-5xl font-bold ml-10'>Jainamaj</h1>
             {loading}
            {
products.map(jainamaj=><Jainamaj1 jainamaj={jainamaj}></Jainamaj1>)
            }
        </div>
    )
  
  
};

export default Jainamaj;