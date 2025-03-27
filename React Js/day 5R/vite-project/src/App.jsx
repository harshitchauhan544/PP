import { useEffect, useState } from "react";
import Card from "./components/Card";

const AppPage = () => {

  // const getData = () => {
  //   const pr1 = fetch("https://dummyjson.com/products");
  //   // pr1.then((res)=>{

  //   //   console.log("Response",res);

  //   //   const pr2 = res.json();
  //   //   // pr2.then((data)=>{
  //   //   //   console.log(data)
  //   //   // })

  //   //   // or
  //   //   return pr2;

  //   // })
  //   //or
  //   pr1.then((res) => res.json())
  //   .catch((err)=>{
  //     console.log("Error Ocurred :", err);
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  // }

  // or

  const [data,setData] = useState({});
  const [crrPage,setCrrPage] = useState(0);

  // console.log(data);

  // async function getData() {
  const getData = async () => {
    try{
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${crrPage}`);

      const api_data = await response.json();

      // setData(api_data.products[0].title);
      // this will not give infinite loop
      // as string is primitive, can be compared and no change observed , so rendering stopped
      // but object is not primitive, so address is comapred that is new for each call

      // so , this falls in infinite loop
      setData(api_data);

      console.log("data : ",data);

    }catch(err){
      console.log("Error : ",err.message);
    }finally{
      console.log("Completed this task (right OR wrong)!")
    }
  }

  // getData();

  // to avoid infinite loop
  // useEffect
  useEffect(()=>{
    getData()
  },[crrPage])

  console.log(data)
  // useEffect has two parameters
  // function, dependancy array
  // dependance array -> absent -> not much effect
  // dependancy array -> empty  -> will only run the sideeffect once
  // dependancy array -> element -> if any change in an element of dependancy array render

  const totalPages = Math.ceil(data.total / data.limit);
  const pages = [];
  for(let i=0;i<totalPages;i++){
    pages.push(i+1);
  }


  

  return (
    <>
      <h1>Hello</h1>
      <p>Something..</p>
      <hr></hr>
      {/* <h4>{data.products[0].title}</h4> */}
      {/* {optional Chaining} */}
      {/* {conditional rendering} */}
      {/* {nullish coalescing operator} */}

      {/* <h4>{data.products?.[0].title}</h4> */}
      <select onChange={(e) => {setCrrPage(e.target.value)}}>
        {pages.map((pageNumber) => {
          return <option>{pageNumber}</option>
        })}
      </select>
      <Card c_data = {data}/>


    </>
  )
}

export default AppPage;

// import React from "react";

// const AppPage = () => {
//   return (
//     // <div>
//     //   <h1>Hello</h1>
//     //   <p>Something</p>
//     // </div>

//     // or
//     // react fragment
//     // extra div is removed
//     // <React.Fragment>
//     //     <h1>Hello</h1>
//     //     <p>Something</p>
//     // </React.Fragment>

//     // or
//     <>
//        <h1>Hello</h1>
//        <p>Something</p>
//     </>
//   )
// };

// export default AppPage;

// // Document Fragment ??
