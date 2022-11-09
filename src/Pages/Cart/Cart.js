import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';
import SunnahLogo from '../../Shared/SunnahLogo';

const Cart = () => {
    const [product]= useProducts()
    const [items, setItem] = useState();
    const [user] = useAuthState(auth);
    console.log(user);

    useEffect(() => {
        fetch(`http://as-sunnah.herokuapp.com/cart/${user?.email}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const handleDeleteCart = (id) => {
        // const availableQuantity = product.quantity + orderQuantity;
        // const updateQuantity = { availableQuantity };
        // console.log(id,updateQuantity)

        // fetch(`https://as-sunnah.herokuapp.com/product/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': "application/json"
        //     },
        //     body: JSON.stringify(updateQuantity)
        // })

        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        fetch(`http://as-sunnah.herokuapp.com/cart/${id}`, {
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
                <div className=' rounded-xl shadow-2xl '>
                    <div data-aos="zoom-in" className='flex justify-between rounded-t-lg bg-secondary p-3 font-semibold text-xl'>
                        <h1>Shopping Cart</h1>
                        <h1>{items?.length} Items</h1>
                    </div>

                    {
                        items?.map(item => <div data-aos="zoom-in" key={item?.id}>
                        
                            <div className='grid p-1 rounded grid-cols-2 my-3 gap-5'>
                                    <div className='flex lg:flex-row flex-col  my-1 px-5'>
                                        <img className='w-20 h-20 mr-5' src={item.img} alt="" />
                                        <div>
                                            <h4 className='text-xs font-semibold'>{item.name}</h4>
                                            <h4 className='text-xs text-accent mt-2'>{item?.brand_name}</h4>
                                            <h4 className='text-xs text-accent'>{item?.place_origin}</h4>

                                        </div>
                                    </div>
                                    <div className=' grid grid-cols-3 gap-2 pt-5'>
                                        <p className=' fon'>{item.price} x {item.orderQuantity}</p>
                                        
                                        <p className='text-[tomato] font-semibold'>{item.price * item.orderQuantity}/=</p>
                                        <div className=''>
                                        <h4 onClick={() => handleDeleteCart(item._id)} className='btn w-10  bg-transparent btn-ghost h-10  btn-circle btn-sm  border-none  '> <img className='h-5' src="https://i.ibb.co/W2Cwq37/erase-delete-remove-wipe-out-512.webp" alt="" /> </h4>
                                        </div>
                                       
                                    </div>
                                    
                                </div>  
                            <hr />

                        </div>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Cart;