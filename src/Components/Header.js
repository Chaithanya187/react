import { useContext, useEffect, useState } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link, useLocation } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
import { useDispatch, useSelector } from "react-redux";
import useAddress from "../Hooks/useAddress";
import useGeoLocation from "../Hooks/useGeoLocation";
import AddressContext from "../utils/AddressContext";
import LocationContext from "../utils/LocationContext";
import LoginComponent from "./Login";
import { removeUser } from "../utils/userSlice";

// Title component for display logo
const Title = () => (
  
  <a href="/">
    <img
      className=" ml-4"
      src={FoodFireLogo}
      alt="Food Fire Logo"
      title="Food Fire Logo"
      width={100}
      height={100}
    />
  </a>
);
// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const navigate = useNavigate();
  const items = useSelector((state)=>state.cart.items)
  const address = useContext(AddressContext);
  const [showLogin, setShowLogin] = useState(false);
  const user = useSelector((state)=>state.user);
  const [islogin,setIsLogin] = useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{

  },[islogin])

  return (
    <div className=" flex justify-between items-center  shadow-lg z-10 w-full bg-slate-50 relative">
      <div className=" flex items-center">
        <Title />
        <span className="font-poppins text-xs text-orange-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px]">{address}</span>
      </div>
      
      <div>
        <ul className=" flex list-none pr-14 font-semibold text-gray-700 ">
          <li className="p-3 mr-10 hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className=" p-3 mr-10 hover:text-black">
            <Link to="/about">About</Link>
          </li>

          <li className=" p-3 mr-10 hover:text-black">
            <Link to="/contact">Contact</Link>
          </li>
          <li className=" p-3 mr-10 hover:text-black">
            <Link to="/cart">cart({items.length})</Link>
          </li>
          <li className=" p-3 mr-10 hover:text-black">
          {islogin ? (
            <>
            <span className=" text-orange-500">{user[0]?.name} </span>
              <button
                onClick={() => {
                  setIsLogin(false);
                  dispatch(removeUser());
                }}
              >
                Logout
              </button>
            </>
            
            ) : (
              <button onClick={() => setShowLogin(!showLogin)}>
                Login
              </button>
            )}
            {useOnline() ? (
              <span className="text-green-600 text-sm">●</span>
            ) : (
              <span className="text-red-500 text-sm">●</span>
            )}
          </li>
        </ul>
      </div>
      {showLogin && <LoginComponent setIsLogin={setIsLogin}/>}
    </div>
  );
};

export default Header;
