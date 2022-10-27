import React from 'react';

const ShoppingCart = ({ item }) => {
    const { name, img, type, disc, size,_id, price, discount } = item;
    const increase = event => {
        const val = document.getElementById('item_quantity').value;
        const intVal = parseInt(val);

        if (intVal >= 0) {
            const increaseQuantity = parseInt(val) + 1;
            document.getElementById('item_quantity').value = parseInt(increaseQuantity);

        }

    }
    const decrease = () => {
        const val = document.getElementById('item_quantity').value;
        if (val > 0) {
            const increaseQuantity = parseInt(val) - 1;
            document.getElementById('item_quantity').value = parseInt(increaseQuantity);
        }

    }
    const handleDeleteCart = id =>{
        fetch(`http://as-sunnah.herokuapp.com/cart/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div>
            <div className='grid grid-cols-2 my-3'>
                <div className='flex  my-1 px-5'>
                    <img className='w-20 mr-5' src={img} alt="" />
                    <div>
                        <h4 className='text-xs font-semibold'>{name}</h4>
                        <h4 className='text-xs text-accent mt-2'>{disc.brand_name}</h4>
                        <h4 className='text-xs text-accent'>{disc.place_origin}</h4>

                    </div>
                </div>
                <div className='ml-10 grid grid-cols-3'>
                    <p className='text-[#ff2600b9] font-semibold'>{price}Tk</p>
                    <div className='flex'>
                        <h1 onClick={decrease} className='bg-transparent btn btn-ghost btn-circle btn-sm border-none font-bold text-black text-xl'>－</h1>
                        <input name='quantity' className='border-2 text-center rounded w-8 h-8' type='text' defaultValue={0} id="item_quantity" />
                        <h1 onClick={increase} className='bg-transparent btn btn-ghost btn-circle btn-sm border-none font-bold text-black text-xl'>＋</h1>
                    </div>
                    <h4 onClick={() => handleDeleteCart(_id)} className='btn'> Delete</h4>
                    
                </div>
            </div>
            
        </div>

    );
};

export default ShoppingCart;