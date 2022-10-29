import useCartItems from '../../Hooks/useCartItems';
import SunnahLogo from '../../Shared/SunnahLogo';

const Cart = () => {
    const [items, setItem] = useCartItems();

    const increase = event => {
        const val = document.getElementById('item_quantity').value;
        const intVal = parseInt(val);

        if (intVal >= 0) {
            const increaseQuantity = parseInt(val) + 1;
            document.getElementById('item_quantity').value = parseInt(increaseQuantity);

        }

    }
    const decrease = () => {
        const val = document.getElementById('item_quantity').value;
        if (val > 0) {
            const increaseQuantity = parseInt(val) - 1;
            document.getElementById('item_quantity').value = parseInt(increaseQuantity);
        }

    }

    const handleDeleteCart = (id) => {
        // const procced = window.confirm("are you sure??")

        fetch(`http://as-sunnah.herokuapp.com/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = items.filter(cartItem => cartItem._id !== id);
                    setItem(remaining);
                    console.log(remaining);
                }

            })

    }

    return (
        <div>
            <SunnahLogo></SunnahLogo>
            <hr className='my-5 mb-20' />
            <div  className='flex  justify-center container mx-auto'>
                <div className='border-2 rounded-xl'>
                    <div data-aos="zoom-in" className='flex justify-between rounded-t-lg bg-secondary p-3 font-semibold text-xl'>
                        <h1>Shopping Cart</h1>
                        <h1>{items?.length} Items</h1>
                    </div>
                    
                    {
                        items.map(item => <div data-aos="zoom-in" key={item.id}> 
                                <div className='grid p-1 rounded grid-cols-2 my-3'>
                                    <div className='flex  my-1 px-5'>
                                        <img className='w-20 h-20 mr-5' src={item.img} alt="" />
                                        <div>
                                            <h4 className='text-xs font-semibold'>{item.name}</h4>
                                            <h4 className='text-xs text-accent mt-2'>{item.disc.brand_name}</h4>
                                            <h4 className='text-xs text-accent'>{item.disc.place_origin}</h4>

                                        </div>
                                    </div>
                                    <div className=' grid  lg:grid-cols-4 gap-2'>
                                        <p className='text-[#ff2600b9] font-semibold'>{item.price}Tk</p>
                                        <div className='flex'>
                                            <h1 onClick={decrease} className='bg-transparent btn btn-ghost btn-circle btn-sm border-none font-bold text-black text-xl'>－</h1>
                                            <input name='quantity' className='border-2 text-center rounded w-8 h-8' type='text' defaultValue={0} id="item_quantity" />
                                            <h1 onClick={increase} className='bg-transparent btn btn-ghost btn-circle btn-sm border-none font-bold text-black text-xl'>＋</h1>
                                        </div>
                                        <h4 onClick={() => handleDeleteCart(item._id)} className='btn w-10 btn-error h-10  btn-circle btn-sm bg-[#cecece] border-none  '> <img className='h-8' src="https://i.ibb.co/dD23k5K/delete.png" alt="" /> </h4>
                                    </div>
                                    
                                </div>  
                                <hr />  
                                                      
                        </div>)
                    }
                    
                </div>

            </div>

        </div>
    );
};

export default Cart;