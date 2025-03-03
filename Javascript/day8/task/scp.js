let data = [
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
        city:"Kanpur"
    }

]

const handleFormSubmit = (e) =>{
    // stop the default behaviour of submit form
    e.preventDefault();
    console.log(e);

    const isEmailExist = data.some((ele) =>{
        return ele.email == e.target.email.value;
    })

    if(isEmailExist){
        alert("already exixt");
        return;
    }

    const obj = {
        name : e.target.name.value,
        email : e.target.email.value,
        city : e.target.city.value

    }
    data.push(obj);

    console.log(data)
    
}