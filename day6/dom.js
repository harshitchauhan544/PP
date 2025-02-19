// console.log(document)
// return the whole document 
// console.dir(document)
// returns the document as key value pairs

// "console.log" is used to print a value to the browser console in a standard format, while "console.dir" is used to display a detailed, hierarchical view of an object's properties,


// console.dir(window)

// document is given by window i.e. document is originally window.documents

// Node vs element

// finding / searching the element

// 1- using Id
// document.getElementById()  // --> returns NULL / Element

// const ele = document.getElementById("txt1"); // gives NULL , as this id is not present
// console.log(ele)

// const e2 = document.getElementById("text1") // returns the whole element
// // console.dir(e2) // gives the key value pairs 
// console.log(e2)

// // interacting with the element
// e2.style.color = 'red';

// 2- using Class
// document.getElementsByClassName()

// const e1 = document.getElementsByClassName("c1") 
// console.dir(e1); // return collection of size 0

// const e2 = document.getElementsByClassName("c2")
// console.dir(e2); // return collection of size n, n is no. of elements with class c2

// 3- using tagName
// document.getElementsByTagName()

// const e1 = document.getElementsByTagName("span") 
// console.dir(e1); // returns not defined

// const e2 = document.getElementsByTagName("div") 
// console.dir(e2); // return collection of size 0

// 4- query selector
// document.querySelector()

// it takes class with " . " , and id with " # "

// const e1 = document.querySelector("#apple") 
// console.dir(e1); // returns null

// const e2 = document.querySelector(".c2") 
// console.dir(e2); // returns first element that matches the description

// 5- querySelectorAll
// document.querySelectorAll()

const e1 = document.querySelectorAll("#apple") 
console.dir(e1); // returns NodeList of size 0

const e2 = document.querySelectorAll(".c2") 
console.dir(e2); // returns Nodelist of size n(no. of elements matching descriptions)