import React from "react";
import ReactDOM  from "react-dom/client";


//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
const container = React.createElement('div',{
    className:"title"
},
    React.createElement('h1',{},"this is a h1 tag"),
    React.createElement('h2',{},"this is a h2 tag"),
    React.createElement('h3',{},"this is a h3 tag"),
);


//Create the same element using JSX
const containerEle = (
  <div className="title">
    <h1>This a h1 tag</h1>
    <h2>This is a h2 tag</h2>
    <h3>This is a h3 tag</h3>
  </div>
);


//Create a functional component of the same with JSX
const ContainerComponent = () =>{
    return (
    <div className="title" key="title">
        <h1 key="h1">This a h1 tag</h1>
        <h2 key="h2">This is a h2 tag</h2>
        <h3 key="h3">This is a h3 tag</h3>
  </div>
    );
};


//Pass attributes into the tag in JSX

const HeaderComponent2=()=>{
    return (
        <div className="title" key="title">
            <h1 style={{backgroundColor:"red"}}>this is a h1</h1>
        </div>
    );

}

//Composition of Component(Add a component inside another)

const TitleComponent = ()=>{
    return <h1>TitleComponent</h1>
};

const MainComponent=()=>{
    return (
        <div className="main">
            <TitleComponent/>
        </div>
    )
};


//{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
const title = (<h1>this is a heading</h1>);

const TitleComponent2 = ({children})=>{
    return (
        <div className="titile">
            {children}
            <p>this is a demo illustration</p>
        </div>
    );
};

const MainTitleComponent = ()=>{
    return (
        <div title="main">
            <TitleComponent2/>
            {title}
            <h2>this is for adding an extra component</h2>
            <TitleComponent2>
                <p>extra component added</p>
            </TitleComponent2>
        </div>
    )
};


//header componet

const HeaderComponent = ()=>{
        return (
            <div className="headerComponent">
                <div className="left">
                    <img src="" alt="image"/>
                </div>
                <div className="center">
                   <input type="text" placeholder="Search your food"/>
                    <button>Search</button>
                </div>
                <div className="right">
                    <img src=""/>
                </div>
                

            </div>
        )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainTitleComponent/>);