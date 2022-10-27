import React, { useEffect, useState } from 'react';
import SunnahLogo from '../../Shared/SunnahLogo';
import ShoppingCart from './ShoppingCart';

const Cart = () => {
    const [items, setItem] = useState();
    useEffect(() => {
        fetch(`http://as-sunnah.herokuapp.com/cart`)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [])

    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr className='my-5 mb-20' />
            <div className='flex justify-center container mx-auto'>
                <div>
                    <div className='flex justify-between font-semibold text-xl'>
                        <h1>Shopping Cart</h1>
                        <h1>{items?.length} Items</h1>
                    </div>
                    <hr className='my-3' />
                    
                    {
                        items?.map((item) => (<ShoppingCart key={item.id} item={item}></ShoppingCart>))
                    }
                    <hr className='my-5'/>
                </div>
                

            </div>
          
        </div>
    );
};

export default Cart;