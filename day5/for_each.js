// for each loop in js 

const arr = [1,2,3,4]

// const pp = (a) => {
//     console.log(a)
// }

// const pp = (ele,idx) => {
//     console.log(ele + " " + idx)
// }

const pp = (ele,idx, c) => {  // c holds the whole array 
    console.log(ele + " " + idx + c)
}



arr.forEach(pp);