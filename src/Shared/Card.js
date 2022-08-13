import React from 'react';

const Card = ({img,name,rating,price,discount,handleBuyNow,_id}) => {
    return (
        <div>
        <div className="card card-side productCard ">
          <figure> <img className='w-28' src={img} alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title  text-base">{name.slice(0,33)}</h2>
            <h3 className=' font-semibold text-[#ff6117] text-xs'><span className='text-[#a1a1a1] text-sm'>{discount}</span>  BDT {price}</h3>
            {/* <h3 className='text-xs'><small>{size}</small> </h3> */}
            <h4 className='text-[orange]'>{rating}</h4>
            <div className="card-actions justify-end">
            <button onClick={()=>handleBuyNow(_id)} className="px-4 text-xs p-2 w-[80%] font-bold rounded uppercase exploreButton btn-primary ">Explore More</button>
           </div>  
          </div>
        </div>
      </div>
    );
};

export default Card;