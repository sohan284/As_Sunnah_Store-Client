import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Jainamaj from './Jainamaj';
import Product from './Product';

const Products = () => {
    const [products,setProduct] = useProducts([]);
    return (
        <div className='grid lg:grid-cols-2'>
            {
                products.map(product=><Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;