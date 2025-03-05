
// Ways to import React

// CommonJS Format (mostly used in old node/express apps)
// module.exports = temp;
// const temp = require("././")

// ES Modules (all modern apps)
// export temp;
// import temp from "././";

import ReactDOM from "react-dom/client";
import React from "react";

const domRoot = document.getElementById('parent');
const reactRoot = ReactDOM.createRoot(domRoot);

// start with uppercase letter for naming - React Components

const Card = ({username}) => {
    // console.log(abc)
    // const { username} = abc;
    // console.log(username)
    return (
        <div>
            <h3>Hello {username}!</h3>
            <p>Be fast </p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card username="Harshit"></Card>
            <Card username="Raj"></Card>
            <Card username="Mj"></Card>

            {/* Avoid this way as the arguments may not be passed as objects  */}
            {/* because we need to explicitly define parameters as objects  */}
            {/* {Card("Again Harshit")} */}
            {/* {Card({username : "Akshita"})} */}
            
        </div>
        // React.createElement("h1",{}, "hello from app !")
    );
    // use parentheses with return to avoid errors
};

console.log("hello");


reactRoot.render(<App />);
// OR
// reactRoot.render(App());