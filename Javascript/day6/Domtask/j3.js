const mappings = {
    "Invitation" : "You are Invited",
    "Reminder" : "You are Reminder",
    "Notice" : "You are Notice",
    "Message" : "You are Message",
}



const parentElement = document.querySelector("div")

const newElement =  document.createElement("div");

Object.entries(mappings).forEach( (ele) => {
    const newDiv = document.createElement("div")
    newDiv.innerText = ele[1]
    newElement.appendChild(newDiv);
})

parentElement.appendChild(newElement)