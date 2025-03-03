// Synchronous code

console.log("start")

const handleInnerCall = () =>{
    console.log("Step Y");
};

const handleCall = () =>{
    console.log("Step M");

    handleInnerCall();

    console.log("Step N");
};

handleCall();

console.log("end")

