import React from 'react';

const Tasbih1 = ({tasbih}) => {
    const {name,price,img,size,rating,discount,p_id} = tasbih;
    if(tasbih.p_id === 66 ){
    return (
      <div>
          <div className="card card-side productCard m-1 p-1">
            
        <figure> <img className='w-56' src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <h3 className=' font-semibold text-[red] text-xl'><span className='text-[#a1a1a1] text-sm'>{discount}</span>  BDT {price}</h3>
          <h3 className='text-xs'>{size}</h3>
          <h4 className='text-[orange]'>{rating}</h4>
          <div className="card-actions justify-end">
            <button className="btn button btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
      </div>
    );
    }
};

export default Tasbih1;