const data = [
    {
        name:"Harshit",
        email:"harshit@gmail.com",
        city:"Gzb"
    },
    {
        name:"Arpit",
        email:"arpit@gmail.com",
        city:"Delhi"
    },
    {
        name:"asdfg",
        email:"asdfg@gmail.com",
        city:"Noida"
    },
    {
        name:"Asmit",
        email:"asmit@gmail.com",
        city:"Delhi"
    }

]

const root = document.getElementById("root");

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
            
            <button onclick = deleteCard(event)>Delete</button>
        `;
        root.appendChild(card);
    })
}