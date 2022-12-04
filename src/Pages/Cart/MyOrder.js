import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Footer2 from './../../Shared/Footer2';
import SunnahLogo from './../../Shared/SunnahLogo';

const MyOrder = () => {
    const [orders,setOrder] = useState()
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://assunnahstore.up.railway.app/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    })
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr className='my-3'/>
            <div>
            <div>
            <div data-aos="zoom-in" class="overflow-x-auto container mt-5 mx-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-slate-100' ></th>
                            <th className='bg-slate-100'>Product</th>
                            <th className='bg-slate-100'>Address</th>
                            <th className='bg-slate-100'>Number</th>
                            <th className='bg-slate-100'>Amount</th>
                            <th className='bg-slate-100'></th>
                        </tr>
                    </thead>
                    {
                        orders?.map((order,index) => <tbody>
                            <tr>
                                <th>
                                    <label>
                                        <h1>{index + 1}</h1>
                                    </label>
                                </th>
                                <td>
                                    {
                                        order?.order?.map(o => <div>
                                           <div className='flex items-center my-3'>
                                           <img className='w-10 rounded-full' src={o.img} alt="" />
                                            <h1 className='ml-2 font-semibold text-xs'>{o.name} ( x{o.orderQuantity || 1} )</h1>  
                                           </div>
                                        </div>)
                                    }

                                </td>
                                <td>
                                    <div class="flex items-center space-x-3">
                                               {order.Address},{order.district},{order.country}
                                    </div>
                                </td>
                                <td>
                                    {order.number}
                                    <br />
                                </td>
                                <td>
                                    <h1 className='text-red-600 font-semibold'>{order.Payable}TK</h1>
                              </td>
                                <th>
                                </th>
                            </tr>
                            <br />
                        </tbody>)
                    }
                </table>
            </div>
        </div>
            </div>
            <Footer2></Footer2>
        </div>
    );
};

export default MyOrder;