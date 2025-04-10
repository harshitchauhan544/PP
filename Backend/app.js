console.log("IN app");

let count = 0;
const sum = (...arr) => {

    count++;
    console.log(count);
    const ans = arr.reduce((acc,e) => {
        return acc+e;
    },0)

    return ans;
}

module.exports = sum;
















// // const fs = require("node:fs");

// // fs.writeFileSync("./test.txt","Hello World!");



// // const f1 = ()=>{
// //     console.log(arguments);
// //     console.log(typeof arguments);
// //     // let ans = 0;
// //     // for(let i=0;i<arguments.length;i++){
// //     //     ans += arguments[i];
// //     // }
// //     // // arguments.forEach( (e) =>{ ans += e});
// //     // return ans
// // }

// const f1 = (...arr) => {
//     console.log(arr);
//     console.log(typeof arr);
//     let res  = 0;
//     for(let i = 0; i<arr.length;i++){
//         res += arr[i];
//     }
//     // console.log(res);
//     return res;
// }

// // console.log(f1(1,2,3,4,5));
// const ans = f1(1,2,3,4,5);
// console.log(ans);