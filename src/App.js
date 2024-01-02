// ## Namaste React Course by Akshay Saini
// # Chapter 07 - Finding the Path

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import ParentComponent from "./Components/Practice";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartComponent from "./Components/CartComponent";
import FormComponent from "./Components/FormComponent";
import LocationContext from "./utils/LocationContext";
import useGeoLocation from "./Hooks/useGeoLocation";
import AddressContext from "./utils/AddressContext";
import useAddress from "./Hooks/useAddress";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component
const AppLayout = () => {
  const [location,setLocation] = useState({
    latitude:"",
    longitude:""
  });
  const [address,setAddress] = useState("");
  useEffect(()=>{
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
              latitude:latitude,
              longitude:longitude
          }
          );
          console.log(location)
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }

  },[])
  useEffect(()=>{
    const fetchAddress = async (latitude,longitude) => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        console.log(data);

        if (data?.display_name) {
          setAddress(data.display_name);
        } else {
          setAddress('Address not found');
        }
      } catch (error) {
        console.error('Error fetching address:', error);
        setAddress('Error fetching address');
      }
    };
    console.log("addess effect",location)
    fetchAddress(location?.latitude,location?.longitude);

  },[location])
  return (
    <Provider store={appStore}>

      <React.Fragment>
        <LocationContext.Provider value={location}>
          {console.log(useGeoLocation())}
          <AddressContext.Provider value={address}>
              <Header />
               <Outlet />
          {/* <Footer /> */}

          </AddressContext.Provider>

        </LocationContext.Provider>
    </React.Fragment>
    </Provider>
    
  );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element:<CartComponent/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 
