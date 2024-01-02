import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constants";

export const ItemsWrapper =({data})=>{
  const dispatch = useDispatch();
  const handleClick = (data)=>{
    console.log("data is",data)
    dispatch(addItems(data))
  }
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className=" flex  justify-between border-black-200 border-b-2">
      <div className="w-9/12 pl-4">
        <h3 className=" font-bold text-xl">{data?.name}</h3>
        <span className=" font-semibold">₹{data?.price /100 ? data?.price : data?.defaultPrice}</span>
        <p className=" lg:max-lg font-light">{data?.description}</p>
      </div>
      <div className="">
        <img src={IMG_CDN_URL+data?.imageId} height={100} width={100}/>
        <div className=" flex gap-6 border px-4 py-1 border-black mt-3">
          <button onClick={()=>{
            if(itemCount>0){
              setItemCount(itemCount-1)
              handleClick(data)
            }
          }}>-</button>
          <span>{itemCount}</span>
          <button onClick={()=>{
            setItemCount(itemCount+1);
            handleClick(data)
          }}>+</button>
        </div>
      </div>
        

    </div>
  )
}
const RestaurantCategory =({title, data})=>{
  const [show, setShow] = useState(false);
  const handleClick =()=>{
    setShow(!show);
  }
  return(
      <div className="w-9/12 m-auto ">
        <div className=" flex justify-between bg-slate-300 mb-2 rounded-full border-none cursor-pointer" onClick={handleClick}>
          <h3 className=" font-bold pl-4 text-2xl">{title}({data.length})</h3>
          <span className="pr-4">⬇️</span>
        </div>
        <div>
        {data.map((item) => {
          return show && <ItemsWrapper key={item?.card?.info?.id} data={item?.card?.info} />;
        })}
      </div>
      </div>
      
      )
}
import {MenuShimmer} from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import useGeoLocation from "../Hooks/useGeoLocation";
import LocationContext from "../utils/LocationContext";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  // const {latitude,longitude} = useGeoLocation();
  const {latitude,longitude} = useContext(LocationContext);
  console.log(useGeoLocation());
  useEffect(() => {
    getRestaurantInfo(latitude,longitude); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, [latitude,longitude]);

  async function getRestaurantInfo() {
    try {
      console.log(`${swiggy_menu_api_URL}lat=${latitude}&lng=${longitude}&restaurantId=` + resId)
      const response = await fetch(`${swiggy_menu_api_URL}lat=${latitude}&lng=${longitude}&restaurantId=` + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData = json?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)|| [];
      

      setMenuItems(menuItemsData);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="">
        <div className=" text-center">
          <h1 className=" font-bold text-2xl">{restaurant?.name}</h1>
        </div>
        <div>
          {menuItems.map((items,index)=>(
            <RestaurantCategory key={index} title={items?.title} data={items?.itemCards}/>
          ))}
        </div>
    </div>
  )
};

export default RestaurantMenu;
