let data = [
    {
        id : "ab1",
        name:"Harshit",
        email:"harshit@gmail.com",
        city:"Gzb"
    },
    {
        id : "ab2",
        name:"Arpit",
        email:"arpit@gmail.com",
        city:"Delhi"
    },
    {
        id : "ab3",
        name:"asdfg",
        email:"asdfg@gmail.com",
        city:"Noida"
    },
    {
        id : "ab4",
        name:"Asmit",
        email:"asmit@gmail.com",
        city:"Kanpur"
    }

]

const root = document.getElementById("root");

const showcards = () => {
    data.forEach( (ele) =>{
        // creating a div
        const card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML = ` 
            <h4>${ele.name}</h4>
            <p>${ele.city}</p> 
            
            <button onclick = deleteCard(event,'${ele.id}')>Delete</button>
        `;
        // ^^^ added a deletecard function
        // adding it to a parent div(element) 
        root.appendChild(card);
    });

};

showcards();

// deleting cards

// deleting just the card
// const deleteCard = (e) =>{
//     // deleting parent because card is parent of button element
//     e.target.parentElement.remove();
// };

// delete using splice 

// deleting the entry from data too
// const deleteCard = (e,sid) =>{
//     // deleting parent because card is parent of button element
//     console.log(sid);
//     const newData = data.filter((ele) =>{
//         if(ele.id != sid) return true;
//         return false;
//     });
//     data = newData;
//     e.target.parentElement.remove();
// };

// another way to delete

const deleteCard = (e,sid) =>{
    const idx = data.findIndex( (elem) => elem.id == sid);
    data.splice(idx,1);
    e.target.parentElement.remove();
};

const addCard = (ev) =>{

    const scity = ev.target.value;
    const newData = data.filter((ele) =>{
        if(ele.city == scity) return true;
        return false;
    });

    newData.forEach((ele) =>{
        const card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML = ` 
            <h4>${ele.name}</h4>
            <p>${ele.city}</p> 
            
            <button onclick = deleteCard(event,'${ele.id}')>Delete</button>
        `;
        root.appendChild(card);
    })
}


