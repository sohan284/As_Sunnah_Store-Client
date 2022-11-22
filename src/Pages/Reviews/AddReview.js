import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = ({ id }) => {
    const [reviews, setReview] = useState();
    const [user] = useAuthState(auth);
    console.log(user)
    useEffect(() => {
        fetch(`https://as-sunnah.herokuapp.com/review/${id}`)
            .then(res => res.json())
            .then(data => setReview(data))
        },[reviews])
    const handleSendFeedback = () => {
        const feedback = document.getElementById('feedback').value;
        const rating = document.getElementById('rating').value;
        const data = {
            id: id,
            name: user.displayName,
            img: user.photoURL,
            user: user.email,
            rating : rating,
            feedback: feedback
        }
        fetch(`https://as-sunnah.herokuapp.com/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Reviewed")
            })
        document.getElementById('feedback').value = '';
    }
    return (
        <div  className='container mx-auto my-8'>
            <div data-aos="zoom-in" className='w-[80%] mx-auto rounded'>
                <h1 className='font-extrabold my-2 text-md  text-primary'>Customer Reviews</h1>
            </div>
            <div data-aos="zoom-in" className='w-[80%] mx-auto rounded border border-green-700'>
            <div>
                        <div class="rating rating-sm">
                                <input type="radio"class="mask mask-star-2 bg-orange-400" />
                            </div>
                            <select  name="" className='text-lg font-bold text-orange-400'  id="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                <div className='w-full mx-auto h-24'>
                    <input
                        className='w-full customerReview font-semibold text-center h-full textarea-primary'
                        placeholder='Whats in your mind ??'
                        type="textarea"
                        id='feedback'
                    />
                    <div>
                        <hr className='w-[95%] mx-auto' />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button onClick={handleSendFeedback} className='btn mx-5 my-2 btn-sm button rounded-none'>Send Feedback</button>
                </div>
            </div>
            <div  className='grid gap-5 p-3'>
                {
                    reviews?.map(review => <div>
                        <div data-aos="fade-up" className=' shadow-xl border-2 p-3 w-[82%] mx-auto'>
                            <div className='flex items-center '>
                            <div class="mask mask-squircle w-8 h-8">
                                                <img src={review.img} alt="" />
                                                <img src="https://i.ibb.co/dgBLLmf/Png-Item-1468479.png" alt="" />
                                            </div>
                                <h1 className='font-bold text-sm mx-3'>{review.name}</h1>
                            </div>
                            <div className='flex my-3 font-semibold items-center text-orange-400 text-xl'>{review.rating}  <div class="rating ml-1 rating-sm">
                                <input required type="radio"class="mask mask-star-2 bg-orange-400" />
                            </div></div>
                            <p className='font-semibold text-primary text-sm'> Feedback:<br /> <span className='font-normal text-xs text-black ml-10'>{review.feedback}</span> </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};
export default AddReview;