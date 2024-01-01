import { createContext } from "react";

const LocationContext = createContext({
    latitude:"",
    longitude:""
});

export default LocationContext;