import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SunnahLogo from '../../Shared/SunnahLogo';
import Footer2 from './../../Shared/Footer2';

const Cart = () => {
    const [items, setItem] = useState();
    const [user] = useAuthState(auth);
    let totalAmount = 0;

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
    if (items) {
        for (const item of items) {
            const productTotal = item.price * item.orderQuantity;
            totalAmount = totalAmount + productTotal;
        }
    }
    console.log(totalAmount)

    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr className='my-5 mb-20' />
            <div className='flex justify-center container mx-auto'>
                <div className=' rounded-xl shadow-2xl mx-5'>
                    <div data-aos="zoom-in" className='flex justify-between shadow-lg rounded-t-lg bg-secondary p-1 font-semibold text-xl'>
                        <h1 className='pr-20'>Shopping Cart</h1>
                        <h1>{items?.length} Items</h1>
                    </div>
                    <table data-aos="zoom-in" class="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th></th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            items?.map((item, index) => <tbody>
                                <tr>
                                    <th className='bg-slate-50'>
                                        <label>
                                            <h1>{index + 1}</h1>
                                        </label>
                                    </th>
                                    <td className='bg-slate-50'>
                                        <div class="flex items-center space-x-3">
                                            <div class="">
                                                <div class="mask mask-squircle w-10 h-10">
                                                    <img src={item.img} alt="" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td className='bg-slate-50'>
                                        {item.name}
                                        <br />
                                    </td>
                                    <td className='bg-slate-50'>
                                        <p className=' font-semibold'>{item.price} x {item.orderQuantity}</p>
                                    </td>

                                    <td className='bg-slate-50'>
                                        <p className='text-[tomato] font-semibold'>{item.price * item.orderQuantity}</p>
                                    </td>
                                    <th className='bg-slate-50'>  <div className='flex justify-center'>
                                        <h4 onClick={() => handleDeleteCart(item._id)} className='btn w-10 btn-ghost h-10  btn-circle btn-sm  border-none  '> <img className='h-5' src="https://i.ibb.co/W2Cwq37/erase-delete-remove-wipe-out-512.webp" alt="" /> </h4>
                                    </div>
                                    </th>
                                </tr>
                                
                                <hr />
                            </tbody>)
                        }
                     
                        <tbody className='border-t-4'>
                            
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='font-bold text-xl'>Total</td>
                       <td className=''>
                         <div>
                         <p className='text-[#f74e30] text-xl font-bold font-serif'><h1>= {totalAmount}</h1></p>
                        </div>
                        </td>
                       <td>
                         <button className='btn btn-sm rounded-full button'>Proceed Checkout</button>
                        </td>
                        </tbody>
                        
                    </table>
                  


                </div>

            </div>

            <hr className='my-5 mt-20' />
            <Footer2></Footer2>

        </div>
    );
};

export default Cart;