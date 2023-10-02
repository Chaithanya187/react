
import React from "react";
import ReactDOM  from "react-dom/client";

// const heading1 = React.createElement('h1',{
//     id:"title",
// },"heading 1 from parcel");

// const heading2 = React.createElement('h2',{},"heading2");
// const conatiner = React.createElement('div',{
//     id:"container",
    
// },[heading1,heading2]);

const text = (
    <p>hii this is a paragraph</p>
);

const HeaderComponent =()=>{
    return (
    <div>
        {console.log("chaithanya")}
        <h1>hii this is chaithanya trying to learn react</h1>
        <h2>hii this is a h2</h2>
    </div>
    );
}
// console.log(conatiner);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>);