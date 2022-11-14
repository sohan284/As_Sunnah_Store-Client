import { useEffect, useState } from 'react';

const useToken = user => {
    const [token ,setToken] = useState('');

    useEffect(()=>{
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const photoURL = user?.user?.photoURL;
        const currentUser = {email : email , name : name , photoURL : photoURL };
        console.log(user)
        if(email){
            fetch(`http://as-sunnah.herokuapp.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data.token);
                const accessToken = data.token
                localStorage.setItem('accessToken',accessToken);
                setToken(data);
            })
        }

    },[user]);
    return [token]
}
export default useToken;