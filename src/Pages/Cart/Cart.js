import React, { useEffect, useState } from 'react';
import SunnahLogo from '../../Shared/SunnahLogo';

const Cart = () => {
    const [items, setItem] = useState();
    useEffect(() => {
        fetch(`https://as-sunnah.herokuapp.com/cart`)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [])
    const handleDelete = () => {

    }
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {
        items?.map((item)=>(
            <div>
                <tr>
                <img width={'80px'} src={item.img} alt="" />
                    <th>{item.name}</th>
                    <th>{item.price}</th>
                </tr>
            </div>
        ))

    }
   
  </table>
</div>
            </div>
            
        </div>
    );
};

export default Cart;