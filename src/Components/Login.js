import { useState } from "react";
import FormInputComponent from "./FormInputComponent";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LoginComponent = (props) => {
  const [visible,setVisible] = useState(true);
  const [formFields,setFormFields] = useState({
    name:'',
    password:''
  });
  const dispatch = useDispatch();
  const handleFormChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const FormHandler =()=>{ 
    dispatch(addUser(formFields))
  }
  
  return (
    <div className={`h-screen absolute bg-white top-0 right-0 w-[30vw] ${visible? 'block':'hidden'}`}>
      <button className=" mt-10 ml-3" onClick={()=>{
        setVisible(false);
      }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg></button>
      <div className=" flex flex-col mx-4 my-4">
        <FormInputComponent name="name" type="text" placeholder="fullname" onChange={handleFormChange}/>
        <FormInputComponent name="password" type="password" placeholder="password" onChange={handleFormChange}/>
      </div>
      <button onClick={()=>{
        FormHandler();
        setVisible(false)
        props.setIsLogin(true)
      }}  className=" mx-4 my-4 border px-3 py-1 bg-orange-500 ">Submit</button>
    </div>
  );
};

export default LoginComponent;
