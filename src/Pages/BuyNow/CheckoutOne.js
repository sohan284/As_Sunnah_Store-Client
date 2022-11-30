import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SunnahLogo from '../../Shared/SunnahLogo';


const CheckoutOne = ({ amount }) => {
    const { productId } = useParams();
    const [user] = useAuthState(auth);
    const [value, setValue] = useState();
    const [address,setAddress] = useState();
    const [district, setDistrict] = useState();
    const [country, setCountry] = useState();
    const [number, setNumber] = useState();
    const [delivery, setDelivery] = useState();
    const [item,setItem] = useState();
    const navigate = useNavigate();
    let totalAmount = 0;

  
    useEffect(() => {
        fetch(`https://as-sunnah.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    })

    const handlePlaceOrder = event =>{
        event.preventDefault()
        const data = {
            name: user.displayName,
            user: user.email,
            Address : address,
            district : district,
            country : country,
            number : number ,
            Payable : item.price,
            order :[item]
        }
        const url = `https://as-sunnah.herokuapp.com/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Ordered Successful")
                navigate('/')
            })
    }
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr />
            <div data-aos="zoom-in" className='my-5 mx-auto bg-slate-100  border-slate-200    shadow-xl border container'>
                <h2 className='text-center text-2xl text-primary my-5 font-bold'>Shipping and Billing</h2>
                <form onSubmit={handlePlaceOrder} className='flex flex-col mx-5 my-5'>

                    <h1 className='font-bold pl-1 text-[10px]'>Address</h1>
                    <input className='mb-2 shadow-lg border rounded-md p-1'
                        name='Name'
                        type="Name"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        placeholder='Address'
                    />
                    <h1 className='font-bold pl-1 text-[10px]'>District</h1>
                    <select     required onClick={(e) => { setDistrict(e.target.value) }} className='my-2 shadow-lg border rounded-md p-1'  >
                        <option value="Bagerhat">Bagerhat</option>
                        <option value="Bandarban">Bandarban</option>
                        <option value="Barguna">Barguna</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Bhola">Bhola</option>
                        <option value="Bogra">Bogra</option>
                        <option value="Brahmanbaria">Brahmanbaria</option>
                        <option value="Chandpur">Chandpur</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Chuadanga">Chuadanga</option>
                        <option value="Comilla">Comilla</option>
                        <option value="Cox'sBazar">Cox'sBazar</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Dinajpur">Dinajpur</option>
                        <option value="Faridpur">Faridpur</option>
                        <option value="Feni">Feni</option>
                        <option value="Gaibandha">Gaibandha</option>
                        <option value="Gazipur">Gazipur</option>
                        <option value="Gopalganj">Gopalganj</option>
                        <option value="Habiganj">Habiganj</option>
                        <option value="Jaipurhat">Jaipurhat</option>
                        <option value="Jamalpur">Jamalpur</option>
                        <option value="Jessore">Jessore</option>
                        <option value="Jhalokati">Jhalokati</option>
                        <option value="Jhenaidah">Jhenaidah</option>
                        <option value="Khagrachari">Khagrachari</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Kishoreganj">Kishoreganj</option>
                        <option value="Kurigram">Kurigram</option>
                        <option value="Kushtia">Kushtia</option>
                        <option value="Lakshmipur">Lakshmipur</option>
                        <option value="Lalmonirhat">Lalmonirhat</option>
                        <option value="Madaripur">Madaripur</option>
                        <option value="Magura">Magura</option>
                        <option value="Manikganj">Manikganj</option>
                        <option value="Maulvibazar">Maulvibazar</option>
                        <option value="Meherpur">Meherpur</option>
                        <option value="Munshiganj">Munshiganj</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Naogaon">Naogaon</option>
                        <option value="Narail">Narail</option>
                        <option value="Narayanganj">Narayanganj</option>
                        <option value="Narsingdi">Narsingdi</option>
                        <option value="Natore">Natore</option>
                        <option value="Nawabganj">Nawabganj</option>
                        <option value="Netrokona">Netrokona</option>
                        <option value="Nilphamari">Nilphamari</option>
                        <option value="Noakhali">Noakhali</option>
                        <option value="Pabna">Pabna</option>
                        <option value="Panchagarh">Panchagarh</option>
                        <option value="Patuakhali">Patuakhali</option>
                        <option value="Pirojpur">Pirojpur</option>
                        <option value="Rajbari">Rajbari</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Rangamati">Rangamati</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Satkhira">Satkhira</option>
                        <option value="Shariatpur">Shariatpur</option>
                        <option value="Sherpur">Sherpur</option>
                        <option value="Sirajganj">Sirajganj</option>
                        <option value="Sunamganj">Sunamganj</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Tangail">Tangail</option>
                        <option value="Thakurgaon">Thakurgaon</option>
                    </select>
                    <h1 className='font-bold pl-1 text-[10px]'>Country</h1>
                    <select  onClick={(e) => { setCountry(e.target.value) }} className='my-2 shadow-lg border rounded-md p-1'  >
                        <option value="Bangladesh">Bangladesh</option>
                    </select>
                    <h1 className='font-bold pl-1 text-[10px]'>Phone</h1>

                    <PhoneInput
                        className='mb-3'
                        country={'bd'}
                        value={value}
                     onChange={setNumber}
                    />
                   <h1 className='font-bold pl-1 text-[10px]'>Your Order</h1>

                   <div className='grid gap-5 grid-cols-3 lg:grid-cols-5 my-2 bg-gray-200 rounded p-1'>
                 
                        <div>
                            <div className=' w-56'>
                            <div className='flex items-center'>
                            <img className='w-10 rounded-full' src={item?.img} alt="" />
                            <h1 className='font-semibold ml-2 text-xs'>{item?.name}...</h1>
                            </div>
                          
                                               
                            </div>
                            
                        </div>
                   
                   </div>
                   <div className='flex text-red-500 font-semibold'>
                        <h1 className='my-1'>Total Payable Amount :</h1> 
                        <h2 className='ml-5 my-1'>{item?.price}TK</h2>
                    </div>
                    <h1 className='font-bold pl-1  text-[10px]'>Payment Method</h1>
                    <select     required onClick={(e) => { setDelivery(e.target.value) }} className='my-2 shadow-lg border rounded-md p-1'  >
                        <option value="Cash on Delivery">Cash on Delivery</option>
                    </select>
                    <button className='button btn btn-sm my-3'>PLACE ORDER</button>
                </form>

            </div>
        </div>
    );
};

export default CheckoutOne;