import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SunnahLogo from '../../Shared/SunnahLogo';
import Footer2 from './../../Shared/Footer2';
import TotalAmount from './TotalAmount';

const Cart = () => {
    const [items, setItem] = useState();
    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(`https://as-sunnah.herokuapp.com/cart/${user?.email}`)
            .then(res => res.json())
            .then(data => setItem(data))
    })
    const handleDeleteCart = (id) => {
        fetch(`https://as-sunnah.herokuapp.com/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = items.filter(cartItem => cartItem._id !== id);
                    setItem(remaining);
                    
                }

            })

    }

    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr className='my-5 mb-20' />
            <div className='flex justify-center container mx-auto'>
                <div className=' rounded-xl shadow-2xl mx-5'>
                    <div data-aos="zoom-in" className='flex justify-between shadow-lg rounded-t-lg bg-secondary p-3 font-semibold text-xl'>
                        <h1 className='pr-20'>Shopping Cart</h1>
                        <h1>{items?.length} Items</h1>
                    </div>

                    {
                        items?.map(item => <div data-aos="zoom-in" key={item?.id}>
                        
                            <div className='grid hover:bg-accent shadow-lg p-1 rounded grid-cols-2 my-3 gap-5'>
                                    <div className='flex lg:flex-row flex-col  my-1 px-5'>
                                        <img className='w-16 h-16 mr-5' src={item.img} alt="" />
                                        <div className='pt-2'>
                                            <h4 className='text-xs font-semibold'>{item.name}</h4>
                                            <h4 className='text-[11px] text-[gray] mt-2'>{item?.brand_name}</h4>
                                            <h4 className='text-[11px] text-[gray]'>{item?.place_origin}</h4>

                                        </div>
                                    </div>
                                    <div className=' grid grid-cols-3 gap-2 pt-4'>
                                        <p className=' font-semibold'>{item.price} x {item.orderQuantity}</p>
                                        
                                        <p className='text-[tomato] font-semibold'>{item.price * item.orderQuantity}/=</p>
                                        <div>
                                        <h4 onClick={() => handleDeleteCart(item._id)} className='btn w-10 btn-ghost h-10  btn-circle btn-sm  border-none  '> <img className='h-5' src="https://i.ibb.co/W2Cwq37/erase-delete-remove-wipe-out-512.webp" alt="" /> </h4>
                                        </div>
                                       
                                    </div>
                                </div>  
                            <hr />
                            
                        </div>)
                    }

                </div>
                
            </div>
            <TotalAmount></TotalAmount>
            <hr className='my-5 mt-20' />
            <Footer2></Footer2>

        </div>
    );
};

export default Cart;