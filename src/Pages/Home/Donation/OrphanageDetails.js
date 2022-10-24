import React from 'react';
import Footer from '../../../Shared/Footer';
import SunnahLogo from './../../../Shared/SunnahLogo';

const OrphanageDetails = () => {
    return (
        <div  className='container mx-auto'>
            <SunnahLogo></SunnahLogo>
            <hr className='my-5' />
            <div data-aos="zoom-in">
                <h1 className='text-center mt-10 text-4xl font-bold p-3'>Help Build An Orphanage In Bangladesh</h1>

                <p className='my-5 p-3'>
                    Bangladesh is one of the most poorest and densely populated places in the world with a population of 160+ million. 30+% of this population are children aged between 0-15 years with a significant number living below the poverty line. A huge proportion of these children are orphaned without at least 1 parent, meaning they have to earn money to support themselves and their families.

                    Orphans and street children are often thrown in jail for petty crimes, or they are abused and subjected to the most atrocious violence.
                    This is coupled with the fact that the majority of orphanages are overcrowded and do not have the capacity to support these children.
                    We are seeking to build a scalable orphanage centre in Bangladesh which will initially house 25 orphans. We have already secured land and commenced work and need your support to complete the construction. Our orphanage will provide shelter, food and education to some of the most vulnerable children in society.

                    Caring for orphans is a significant part of Islam. Orphans are mentioned 22 times in the Qur’an; their mistreatment is a serious sin while nurturing and sponsoring them is an immensely valuable good deed. Indeed our Prophet (SAW) said ‘The best house among the Muslims is the house in which orphans are well-treated.

                    The worst house among the Muslims is the house in which orphans are ill-treated’. [Bukhari]

                    Invest in your akhira by donating generously. Even if it is a small contribution it will make a BIG difference. Please share with family and friends.
                    <br />
                    <span className='font-semibold'>"May Allah reward you"</span>
                </p>
                <div className='flex justify-center my-5'>
                <button className='btn button'>Donate Now</button>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 p-3'>
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="500" src="https://i.ibb.co/jvfD927/bidyanondo-project-images-38.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="700" src="https://i.ibb.co/zmR5XCp/bidyanondo-project-images-39.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="900" src="https://i.ibb.co/Jjd8Sn9/bidyanondo-project-images-40.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="1100" src="https://i.ibb.co/YXdScyQ/bidyanondo-project-images-41.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="1300" src="https://i.ibb.co/vvztxZC/bidyanondo-project-images-42.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="1500" src="https://i.ibb.co/dBGn75J/bidyanondo-project-images-43.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="1700" src="https://i.ibb.co/6NvWNLy/bidyanondo-project-images-48.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="1900" src="https://i.ibb.co/HxJLG8L/bidyanondo-project-images-44.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="2100" src="https://i.ibb.co/wKBsYzZ/bidyanondo-project-images-50.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="2300" src="https://i.ibb.co/7SJL1Qg/bidyanondo-project-images-35.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="2500" src="https://i.ibb.co/CBNy2VK/bidyanondo-project-images-46.jpg" alt="" />
                    <img className='rounded' data-aos="zoom-in" data-aos-duration="2700" src="https://i.ibb.co/qk1Cct3/bidyanondo-project-images-49.jpg" alt="" />
                </div>
            </div>
            <hr className='my-5' />
           <Footer></Footer>


        </div>
    );
};

export default OrphanageDetails;