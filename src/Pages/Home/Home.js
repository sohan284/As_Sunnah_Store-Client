import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
       <div className='mt-5'>
        <div>
<div>
</div>
        </div>
         <div class="drawer  drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <Outlet></Outlet>
          
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4  text-white overflow-y-auto w-80 text-base-content">
            
            <li className='text-primary bg-[#aad160] m-1 rounded-2xl uppercase font-extrabold'><Link to="QuranandHadith" > 
            <div className='flex w-full justify-between items-center'>
            <h1>Quran & Hadith </h1>
                <img className='w-14 h-14' src="https://i.ibb.co/Qd9ncCW/unnamed-removebg-preview.png" alt="" />
                </div>
            </Link></li>

            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="panjabi" > 
            <div className='flex w-full justify-between items-center'>
            <h1>panjabi</h1>
                <img className='w-14 h-14' src="https://i.ibb.co/MRMbLmv/3-removebg-preview.png" alt="" />
                </div>
            </Link></li>

            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="borka" > 
            <div className='flex w-full justify-between items-center'>
            <h1>borka & hijab</h1>
                <img className='w-16 h-14' src="https://i.ibb.co/q5tKj07/0f36025de334ebad71e905f053578b264d1d4b44-original-removebg-preview.png
" alt="" />
                </div>
            </Link></li>

            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="tupi" > 
            <div className='flex w-full justify-between items-center'>
            <h1>tupi</h1>
                <img className='w-14 h-14' src="https://i.ibb.co/yp4ybnk/HTB1i-Lr-Lb-QIL1-Jj-SZFhq6y-DZFXa-Z-removebg-preview.png" alt="" />
                </div>
            </Link></li>
            
            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="jainamaj" > 
            <div className='flex w-full justify-between items-center'>
            <h1>Jainamaj</h1>
                <img className='w-14 h-14' src="https://i.ibb.co/jRWPrCm/download-1-removebg-preview.png" alt="" />
                </div>
            </Link></li>

            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="tasbih" > 
            <div className='flex w-full justify-between items-center'>
            <h1>tasbih</h1>
                <img className='w-14 h-14' src="https://i.ibb.co/0Mq1xFf/a573a954f-184492-removebg-preview.png" alt="" />
                </div>
            </Link></li>

            <li className='text-primary bg-secondary m-1 rounded-2xl uppercase font-extrabold'><Link to="attar" > 
            <div className='flex w-full justify-between items-center'>
            <h1>attar</h1>
                <img className='w-14 h-14' src="https://i.ibb.co/b5s7hxG/Ah0-Yj-EPSnv-Tcer-QESCbd-TCaee-ODH9-Sb-AOxj-BVUq-Q-removebg-preview.png" alt="" />
                </div>
            </Link></li>

          </ul>
        
        </div>
      </div>
       </div>
    );
};

export default Home;