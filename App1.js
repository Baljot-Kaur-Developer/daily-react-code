import React from "react";
import ReactDOM from "react-dom/client";
// react.createlement code for heading3

// const heading3 = React.createElement("h3",{
//     id : "heading-3",
// },"Baljot Kaur React");
// console.log(heading3);

// jsx code to for heading3 (react element)
const heading3 = ( 
    <>
    <h1 key= 'h1'>Baljot Kaur line 1</h1>
<h3 id="haeding-3" key='h3'>Baljot Kaur React</h3>
</>
);

// functional component for heading 4 
const Heading4 = ()=> {
    return (
<h4 key='h4'>Akshay Saini React</h4>
    )
};
// example of react.craete element () code 
// const heading4 = React.createElement("h4",{
//     id : "heading-4",
// },"Akshay Saini React");

// example of react.craete element () code  for container div
// const container = React.createElement("div",
// {
//     id : "container",
// },
// [heading3, heading4]
// );

//functional component code of container
const Container = () => {
    return (
    <div>
    {heading3}
    <Heading4/>
    </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);