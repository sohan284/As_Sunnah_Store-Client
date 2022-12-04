import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders,setOrder] = useState()

    useEffect(() => {
        fetch(`https://assunnahstore.up.railway.app/order`)
            .then(res => res.json())
            .then(data => setOrder(data))
    })

    const handleDeleteOrder = (id) => {
        console.log(id);
        fetch(`https://assunnahstore.up.railway.app/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrder(remaining);
                    
                }

            })

    }
    return (
        <div>
            
            <div>
            <div>
            <div data-aos="zoom-in" class="overflow-x-auto container mt-5 mx-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-slate-100' ></th>
                            <th className='bg-slate-100'>Product</th>
                            <th className='bg-slate-100'>User</th>
                            <th className='bg-slate-100'>Address</th>
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
                                            <h1 className='ml-2 font-semibold text-xs'>{o.name.slice(0,15)}... ( x {o?.orderQuantity || 1} )</h1>  
                                           </div>
                                        </div>)
                                    }

                                </td>
                                <td>
                                    <div class="flex flex-col items-center space-x-3">
                                        <p className='font-semibold'>{order.name}</p>
                                        <p className='text-xs'>({order.user}),</p>
                                        <p className='text-xs'>{order.number},</p>
                                        
                                       
                                    </div>
                                </td>
                                <td>
                                <div class="flex flex-col items-center space-x-3">
                                        <p className='font-semibold text-sm'>{order.Address},</p>
                                        <p className='font-semibold text-sm'>{order.district},</p>
                                        <p className='font-semibold text-sm'>{order.country}</p>
                                    </div>
                                </td>
                               
                                <td>
                                    <h1 className='text-red-600 font-semibold text-sm'>{order.Payable}TK</h1>
                              </td>
                                <th>
                                <div className='flex flex-col'>
                                <button   class="btn btn-outline rounded-full btn-xs btn-success">Delivered</button>

                                <button onClick={() => handleDeleteOrder(order._id)}  class="btn btn-outline rounded-full mt-2 btn-xs btn-error">Remove Order</button>
 
                                </div>
                                </th>
                            </tr>
                            <br />
                        </tbody>)
                    }
                </table>
            </div>
        </div>
            </div>
        </div>
    );
};

export default AllOrders;