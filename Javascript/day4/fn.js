// Functions

// function declaration

// print("Harshit ")
// function print(a){
//     console.log(a);
// }

// ------------------   print("Harshit ")
// display(4) ----- > error

// --> CONS
// can be declared multiple times
// can be called before declaration



// function assignment

// const f1 = function display(a){
//     console.log(a);
// }

// f1(4)

// Anonymous Function
// const f1 = function (a){
//     console.log(a);
// }
// f1(4)

// // Arrow Function
// const f2 = (a) =>{
//     console.log(a);
// }

// f2(5)

// Type 1
// function sum(a,b){
//     return (a+b)%10;
// }

// console.log(sum(6,7));

// Type 2
// const f1 = function sum(a,b){
//     return (a+b)%10;
// }

// console.log(f1(6,7));

// Type 3
// const f1 = function (a,b){
//     return (a+b)%10;
// }

// console.log(f1(8,7));

// Type 4
// const f1 = (a,b) =>{
//     return (a+b)%10;
// }

// console.log(f1(8,7));

// Even Short

const f2 = (a,b) => (a + b) % 10;
console.log(f2(8,7));

