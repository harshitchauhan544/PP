// Event Listener
// changeColor() function is called on clicking the button
// clicking is an event  
function changeColor(){
    const body = document.querySelector('body');

    body.style.backgroundColor = getRandomColor();

}

// a function that returns a random color 
const getRandomColor = () =>{
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}


const obj = [
        {
            name:"Harshit",
            email:"harshit@gmail.com",
            city:"Ghaziabad"
        },
        {
            name:"Arpit",
            email:"arpit@gmail.com",
            city:"Jalaun"
        },
        {
            name:"asdfg",
            email:"asdfg@gmail.com",
            city:"Indirapuram"
        },
        {
            name:"Asmit",
            email:"asmit@gmail.com",
            city:"Kanpur"
        }
    
    ]

// adding 4 divs



