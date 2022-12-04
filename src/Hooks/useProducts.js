import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://assunnahstore.up.railway.app/product`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return [products, setProduct];
};

export default useProducts;