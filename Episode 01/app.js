/*
* <div id = "parent">
*   <div id = "child">
*       <h1>I'm h1 tag</h1>
*       <h2>I'm h2 tag</h2>
*   </div>
*   <div id = "child2">
*       <h1>I'm h1 tag</h1>
*       <h2>I'm h2 tag</h2>
*   </div>
*</div>

* code to write this in React is 👇
*/

const parent = React.createElement("div" , {id : "parent"}, [
    React.createElement("div" , {id : "child"},[
        React.createElement("h1" , {}, "I'm an h1 tag"),
        React.createElement("h2" , {}, "I'm an h2 tag"),
    ]),
    React.createElement("div" , {id : "child2"},[
        React.createElement("h1" , {}, "I'm an h1 tag"),
        React.createElement("h2" , {}, "I'm an h2 tag"),
    ]),
])



console.log(parent);  //object
// const heading = React.createElement("h1" , {} , "Hello! from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);