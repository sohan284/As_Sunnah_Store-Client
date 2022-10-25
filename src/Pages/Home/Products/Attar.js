import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Attar1 from './Attar1';
import Loading from '../../../Shared/Loading';
const Attar = () => {
    const [products] = useProducts([]);
    let loading ;
    if(products.length === 0){
      loading = <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-primary text-5xl font-bold ml-10'>Attar</h1>
            {loading}
            {
                products.map(attar => <Attar1 attar={attar}></Attar1>)
            }
        </div>
    )
};

export default Attar;