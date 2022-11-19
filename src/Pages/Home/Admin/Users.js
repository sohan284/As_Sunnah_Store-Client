import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SunnahLogo from '../../../Shared/SunnahLogo';
import Footer2 from './../../../Shared/Footer2';

const Users = () => {
    const [dUsers, setDuser] = useState();
    const [users,setUser] = useState()
    console.log(users)
    useEffect(() => {
        fetch(`https://as-sunnah.herokuapp.com/user`
            , {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [users])
    const makeAdmin = (email) =>{
        fetch(`https://as-sunnah.herokuapp.com/user/admin/${email}`,{
            method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }  
        })
        .then(res=>{
            if(res.status === 403){
                toast.error('Failed to Make admin');
            }
        }
           )
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Make Admin successfully')
            }
            
        })
    }
    const handleDeleteUser = (id) => {
        fetch(`https://as-sunnah.herokuapp.com/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = dUsers.filter(dUser => dUser._id !== id);
                    setDuser(remaining);
                    
                }

            })

    }
    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <div data-aos="zoom-in" class="overflow-x-auto my-10 container mx-auto rounded-lg border-2 shadow-lg w-full">
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
                        users?.map((user,index) => <tbody>
                            <tr>
                                <th>
                                    <label>
                                        <h1>{index + 1}</h1>
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="">
                                            <div class="mask mask-squircle w-10 h-10">
                                                <img src={user.photoURL} alt="" />
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
                                <td>{user.role !== 'admin' && <button  onClick={()=>makeAdmin(user.email)} class="btn btn-outline rounded-full btn-sm btn-success">make admin</button>}
                              </td>
                                <th>{user.role !== 'admin' && 
                                    <button onClick={() => handleDeleteUser(user._id)} class="btn btn-sm btn-outline rounded-full btn-error">Remove user</button>}
                                      {user.role == 'admin' && <button disabled class="btn btn-outline rounded-none btn-xs border-none btn-secondary w-full">Admin</button>}
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