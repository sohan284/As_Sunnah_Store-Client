import React from 'react';
import Panjabi1 from './Panjabi1';
import useProducts from './../../../Hooks/useProducts';
import Loading from './../../../Shared/Loading';

const Panjabi = () => {
    const [products] = useProducts([]);
    let loading ;
    if(products.length === 0){
      loading = <Loading></Loading>
    }
    return (
        <div>
             <h1 className='text-primary text-5xl font-bold ml-10'>Panjabi</h1>
             {loading}
            {
products.map(panjabi=><Panjabi1 key={panjabi.id} panjabi={panjabi}></Panjabi1>)
            }
        </div>
    );
};

export default Panjabi;