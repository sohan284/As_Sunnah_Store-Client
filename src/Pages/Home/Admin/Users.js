import React, { useEffect, useState } from 'react';
import SunnahLogo from '../../../Shared/SunnahLogo';
import Footer2 from './../../../Shared/Footer2';

const Users = () => {
    // const { data: users, isLoading } = useQuery('users', () => fetch(`http://as-sunnah.herokuapp.com/user`,{
    //     method: 'GET',
    //     headers:{
    //         authorization:`Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()))
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const [users,setUser] = useState()
    useEffect(()=>{
        fetch(`http://as-sunnah.herokuapp.com/user`
    ,{
        method: 'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
            <SunnahLogo></SunnahLogo>
                    <div class="overflow-x-auto my-5 container mx-auto rounded-lg border-2 shadow-lg w-full">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                users?.map( (user,index)=><tbody>
                                    <tr>
                                        <th>
                                            <label>
                                                <h1>{index+1}</h1>
                                            </label>
                                        </th>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="">
                                                    <div class="mask mask-squircle w-10 h-10">
                                                      <img src={user.photoURL}  alt="" />
                                                        <img src="https://i.ibb.co/dgBLLmf/Png-Item-1468479.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.email}
                                            <br />    
                                        </td>
                                        <td><button class="btn btn-outline rounded-full btn-sm btn-success">make admin</button></td>
                                        <th>
                                        <button class="btn btn-sm btn-outline rounded-full px-5 btn-error">Delete</button>
                                        </th>
                                    </tr>
                                    <br />
    
                                </tbody>)
                            }
                            
                        </table>
                    </div>
                
            <Footer2></Footer2>
        </div>
    );
};

export default Users;