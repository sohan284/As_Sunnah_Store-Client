import React, { useEffect, useState } from 'react';


const useCartItems = () => {
    const [items,setItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/cart`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return [items,setItem];
};


export default useCartItems;