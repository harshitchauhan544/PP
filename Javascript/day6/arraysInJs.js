// indexOf function in array

const arr = [ {'id1' : 1}, {'id2' : 2}]

const brr = [ 1,2,3,4]

console.log(arr.indexOf({'id1' : 1}))
// cannot search non- primitive elements
// Even if value of the object being searched is present in the array , but the address is diffrent

console.log(brr.indexOf(3))
// can search primitive elements