const array = ["a","b","c",3]
console.log(array)
console.log(array.length)

array.push("apple")

console.log(array)
console.log(array[2])

// creates holes in array -- if index is greater than array length
array[6] = "44"
console.log(array)


// delete

delete array[3] // a hole is created at this index

delete array[10] // -> nothing happens
console.log(array)