// const f1 = () => {
//     if(true){
//         var a = 4;
//     }
//     console.log(a)
// }

// f1()
// console.log(a) // --> cannot access here as var has functional Scope


const f1 = (a,b)=>{ // 1- First memory is allocated for this
    let ans = (a+b)%10;

    const display = (a) =>{ // 3- Memory is allocated for this function
        console.log(a); // 5- command is executed 
    }

    display(ans); // 4- 
} 

f1(8,3); // 2- The function call is made