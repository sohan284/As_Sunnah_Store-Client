import { useEffect, useState } from 'react';

const useToken = user => {
    const [token ,setToken] = useState('');

    useEffect(()=>{
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = {email : email , name : name};
        console.log(user)
        if(email){
            fetch(`https://as-sunnah.herokuapp.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                setToken(data);
            })
        }

    },[user]);
    return [token]
}
export default useToken;