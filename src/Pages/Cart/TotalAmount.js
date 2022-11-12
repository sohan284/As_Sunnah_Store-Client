import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const TotalAmount = () => {
    const [setAmount] = useState();
    
    const [user] = useAuthState(auth);

    useEffect(()=>{
        fetch(`https://as-sunnah.herokuapp.com/cart/${user?.email}`)
            .then(res => res.json())
            .then(data => setAmount(data))
    })
    
   
    return (
        <div>
         
            {/* {
              amounts?.map(amount=> <Checkout amount={amount} key={amount.id}></Checkout>
              )  
            } */}
        </div>
    );
};

export default TotalAmount;