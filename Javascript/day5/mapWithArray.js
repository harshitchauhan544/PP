const arr = [10,0,40];


// using map
const new_arr = arr.map( (ele) => {
    return ele*2;
})

console.log(new_arr)

// using for each

const ansArr = [];

arr.forEach( (ele) => {
    ansArr.push(ele*2);
})

console.log(ansArr)

