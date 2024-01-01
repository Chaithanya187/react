import { createContext, useContext, useState } from "react"


const userContextDetails = createContext(null);

const ParentComponent =()=>{
    const [userDetails, setUserDetails] = useState({
        name:"chaithanya",
        role:"Backend Dev"
    });
    const [count,setCount] = useState(1);
    return (
        <userContextDetails.Provider value={[userDetails,count,setCount]}>
            <div>
            <div>This is a parent component</div>
            <ChildComponent userDetails={userDetails}/>
        </div>
        </userContextDetails.Provider>
        
        
    )
}

const ChildComponent = (props)=>{
    return(
        <div>
            <div>this is a child component</div>
            <SubChildComponent userDetails={props.userDetails}/>

        </div>

    )
}

const SubChildComponent =(props)=>{
// const user = useContext(userContextDetails);
const [user,count,setCount] = useContext(userContextDetails);
    return(
        <div>
            name:{user.name}<br/>
            role:{user.role}
            <button className=" px-4 py-4 border rounded-full hover:bg-black hover:text-white" onClick={()=>{
                setCount(count+1)
            }}>click me</button>{count}
        </div>
    )
}

export default ParentComponent;