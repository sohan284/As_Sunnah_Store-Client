import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div>
         <div data-aos="zoom-in" className='flex justify-center mt-36 items-center'>
        <BounceLoader
          color="#6fc205"
          size={100}
        />
      </div>
        </div>
    );
};

export default Loading;