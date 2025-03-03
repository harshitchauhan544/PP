

console.log("start")

const handleInnerCall = () =>{
    console.log("Step Y");
};

const handleCall = () =>{
    console.log("Step M");

    handleInnerCall();
    // setTimeout(handleInnerCall,2000);

    console.log("Step N");
};

// document.querySelector("body").addEventListener("click" , handleCall);
setTimeout(handleCall,0)



console.log("end")

