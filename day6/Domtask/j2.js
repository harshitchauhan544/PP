// Adding a child element to another root element

const mappings = {
    "Invitation" : "You are Invited",
    "Reminder" : "You are Reminder",
    "Notice" : "You are Notice",
    "Message" : "You are Message",
}

// holds a preexisting parent element
const parentElement = document.querySelector("div")

console.log(parentElement)

// holds a newly created 
const newElement =  document.createElement("div");

newElement.innerText = "Hello"

parentElement.appendChild(newElement)



