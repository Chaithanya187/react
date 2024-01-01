import { useSelector } from "react-redux";
import { ItemsWrapper } from "./RestaurantMenu";

const CartComponent = ()=>{
    const items = useSelector((state)=>state.cart.items);
    return(
        <div className=" flex flex-col justify-center items-center gap-16">
            <div className=" text-4xl font-bold mt-4">
                <h2>Cart Items</h2>
            </div>
            <div>
                {items.map((item)=>(
                    <ItemsWrapper data={item}/>
                ))}  
            </div>
              
        </div>
    )
}

export default CartComponent;