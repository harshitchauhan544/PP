// const array = ["a","b","c","d",3,4,5,6,6,6];

// const addItems = (arr) => {

//     const root = document.getElementById("items");
//     const list = document.createElement("ul");

//     arr.forEach(ele => {
//         const crr = document.createElement("li");
//         crr.innerText = ele;
//         list.appendChild(crr);
//     });

//     root.appendChild(list);
// };

// addItems(array);

// --------------------------------------

// ReactJS

// Making react object using React.createElement

// console.log(React);
// console.log(ReactDOM);

// domRoot holds the real parent element
// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);

// reactRoot is a virtual parent element 

// const li1 = React.createElement("li",
//      {
//         style : {
//             color : "blue",
//         },
//      },
//       "Item1") //--> type,options,children
// const li2 = React.createElement("li",
//      {
//         className : "text-big",
//      },
//       "Item2") //--> type,options,children
// const li3 = React.createElement("li", {}, "Item3") //--> type,options,children

// const ul = React.createElement("ul", {}, [li1,li2,li3]);

// reactRoot.render(ul);


// -----------

// making our own reactobjects

// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);


// const title = React.createElement("h1", {}, "Starting React");

// console.log("type of ", typeof title)
// console.log(title);

// // creating own react element
// // made by copying the title object from console
// const title2 = {
//     $$typeof : Symbol.for("react.element"),
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "children": "Starting React 2"
//     },
//     "_owner": null,
//     "_store": {}
// }

// reactRoot.render(title2);


// ---------------

// Using JSX

// we need to convert JSX to js using a transpiler

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

// const title2 = <h1> Hello from JSX </h1>
// reactRoot.render(title2);

// Or use 

const Title3 = () =>{
    return <h1> Hello from JSX as func </h1>
}
// reactRoot.render(title3());
// or 

reactRoot.render(<Title3 />);



