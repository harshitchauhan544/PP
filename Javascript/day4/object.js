const obj = {
    a : "one",
    b : "two",
    a : "three" // thi will override over previous value of a 
};

console.log(obj)

// adding a key to the object

obj.c = "four"

console.log(obj)

console.log(obj.d) // -> will give undefined

// const key = prompt("Enter key");
// use square brackets for dynamic accessing of object keys
// console.log(obj[key]);


// update a value in object
obj.c = "nine";

// delete a key 
delete obj.c;
console.log(obj)

