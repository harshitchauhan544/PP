// console.dir(document.children[0]) // -->    represents html
// console.dir(document.children[0].children[1]) // -->    represents body
// console.dir(document.children[0].children[1].children[0]) // -->    represents h1

// document.children[0].children[1].children[0].style.color = "red";
// document.children[0].children[1].children[1].style.backgroundColor = "pink";
// document.children[0].children[1].children[1].children[0].style.color = "blue";


// store all the children into an array
// const r = Array.from(document.children[0].children[1].children[1].children)
// // console.log(typeof r)
// // console.log(r)


// traversing over all child
// const clr = [ "red", "yellow" , "beige", "green", "blue"];
// let ind = 0;
// r.forEach(ele => {
//     console.log(clr[ind]);
//     ele.style.color = clr[ind];
//     ind++;
// });


// using querySelector
const r = Array.from(document.querySelectorAll("div div"))

// traversing over all child
const clr = [ "red", "yellow" , "green", "blue"];
const mappings = {
    "Invitation" : "You are Invited",
    "Reminder" : "You are Reminder",
    "Notice" : "You are Notice",
    "Message" : "You are Message",
}
let ind = 0;
r.forEach(ele => {
    // console.log(clr[ind]);
    // console.log(ele)
    ele.style.color = clr[ind];
    const c = ele.children[0].innerText
    console.log(c)
    // console.log(mappings.)
    ele.children[1].innerText = mappings[c]
    ind++;
});
