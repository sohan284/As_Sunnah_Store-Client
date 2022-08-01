import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Jainamaj from './Jainamaj';
import Product from './Product';

const Products = () => {
    const [products,setProduct] = useProducts([]);
    return (
        <div>
             <div className='flex banner  justify-evenly'>
            <div>
                <div class="h-96 carousel w-full  mx-auto carousel-vertical  rounded-box">
            <div>
            <div class="carousel-item h-54 w-full">
    <img src="https://i.ibb.co/sJ7RSfq/Visit-www-reallygreatsite-com-1.png" />
  </div>  
            <div class="carousel-item mt-5 h-54 w-full">
    <img  src="https://i.ibb.co/9ZPgmvj/Visit-www-reallygreatsite-com-3.png" />
  </div>  
            </div>
</div>
</div>
            <div>
            <div class="h-96 carousel w-full  mx-auto carousel-vertical  rounded-box">
            <div>
            <div class="carousel-item  h-54 w-full">
    <img  src="https://i.ibb.co/DM3M8Ng/Visit-www-reallygreatsite-com-4.png" />
  </div>  
            <div class="carousel-item mt-5 h-54 w-full">
    <img  src="https://i.ibb.co/7W6K8kB/Visit-www-reallygreatsite-com.jpg" />
  </div>  
            </div>
</div>
            </div>
        </div>

        <div className='grid lg:grid-cols-2'>
            
            {
                products.map(product=><Product product={product}></Product>)
            }
        </div>
        </div>
        
    );
};

export default Products;