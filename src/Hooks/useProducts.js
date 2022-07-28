import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[])
    return [products,setProduct];
};

export default useProducts;