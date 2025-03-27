import { useState } from "react";
// import Input_form from "./components/input_form";

const AppForm = () => {
  const [flag,setflag] = useState(true);
  const handleClick = ()=>{
    setflag(!flag)
  }

  // instead of if-else 
  // use ternary operator
  if(flag === true){
    
    return(
      <section>
        <div>Hello</div>
        <button onClick={handleClick}>Click</button>
      </section>
    )
  }
  else{
    return(
      <section>
        <div>Hi</div>
        <button onClick={handleClick}>Click</button>
      </section>

    )
  }
}

export default AppForm;

// import { useState } from "react";

// const AppForm = () => {
//     // let name = "Harshit"
//     const [monitor,remote] = useState("Mohan");

//     console.log(monitor);

//     const handleChange = (e) => {
//       // name = e.target.value;
//       // // console.log(e.target.value);
//       // console.log(name);
//       setTimeout( () =>{
//         console.log(e.target.value);
//         // remote(e.target.value.toUpperCase()); // noted! but not updated
//         // for setTImeOut
//         if(e.nativeEvent.inputType === "deleteContentBackward"){
//           remote(e.target.value.substring(0,e.target.value.length - 1)); 
//         }else{
//           remote(e.target.value.toUpperCase() + e.nativeEvent.data.toUpperCase()); 
//         }
//       },2000);
//       console.log("updated", monitor);
//     }
//     return (
//       <div>
//         <p>Name</p>
//         <input type ="text" value={monitor} placeholder="Please enter here .." onChange={handleChange} />
//         <h3>Hello {monitor} !</h3>
//       </div>
//     )
// }

// export default AppForm;