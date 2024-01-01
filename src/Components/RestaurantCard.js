import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="flex flex-col overflow-hidden m-3 p-3 w-60 rounded-sm hover:shadow-xl duration-300 font-poppins bg-white shadow-sm justify-center items-center h-[300px]">
      <div className="">
        <img src={IMG_CDN_URL + cloudinaryImageId}  height={220} width={250}/>
      </div>
      <div className=" flex flex-col">
      <h3 className=" text-lg font-montersart font-bold mt-3">{name}</h3>
      <h5 className=" text-sm">{cuisines.join(", ")}</h5>
      </div>
      <div className=" mt-3 flex gap-3">
        <span className="">{avgRatingString} <i className="fa-solid fa-star"></i></span>
        <span>{costForTwo}</span>
        <span>{sla?.slaString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
