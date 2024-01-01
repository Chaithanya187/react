import React, { useEffect, useState } from 'react';

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        latitude:"",
        longitude:""
    });
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
    return location;
};

export default useGeoLocation;