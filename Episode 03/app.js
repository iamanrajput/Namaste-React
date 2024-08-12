import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Namaste React 🚀"
// );

const jsxHeading = <h1 className="head">Namaste React using JSX🚀</h1>;

//React Functional Component
const HeadingComponent = () => {
    return <h1>Namaste from Funtional Component</h1>;
};

//OR
const HeadingComponent2 = () => (
    <h1 className="heading">Namaste from Funtional Component</h1>
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);

// rendering a functional component
root.render(<HeadingComponent/>);