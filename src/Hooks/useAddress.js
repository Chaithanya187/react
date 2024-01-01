import { useEffect, useState } from "react";
import useGetLocation from "./useGeoLocation";


const useAddress = ()=>{
    const location = useGetLocation();
    const [address,setAddress] = useState('');
    console.log(location);

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
      
          fetchAddress(location?.latitude,location?.longitude);
    },[]);
    return address;
}

export default useAddress;