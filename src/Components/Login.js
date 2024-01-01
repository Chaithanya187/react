const LoginComponent = (props) => {
  return (
    <div className=" h-full bg-black/40 absolute top-0 left-0">
      <div className="overflow-auto h-screen w-[40vw] min-w-[300px] border-2 bg-white fixed top-0 right-0 flex flex-col p-2 translate-x-0  transition-all duration-300 z-10">
      <button class="w-fit  p-7 flex  flex-col items-end" onClick={()=>{
        props.setShowLogin(false);

      }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg></button>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
      </div>

    </div>
  );
};

export default LoginComponent;
