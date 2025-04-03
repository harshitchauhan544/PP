import {  useState } from "react";

const App = () => {

  const [name,setName] = useState("Harshit");
  const [mail,setMail] = useState("abc");
  const [show,setShow] = useState(false);

  const handleShow = () => {
    if(name.length < 2){
      alert("Invalid name");
    }else{
      setShow(true);
    }
  }

  const removeShow = () => {
    
      setShow(false);
    
  }
  
  return (
    <>
      <section>
      <div>
        <label>Name</label>
        <input placeholder="Type here..." value={name} onChange={(e)=> setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input placeholder="Type here..." value={mail} onChange={(e)=> setMail(e.target.value)} />
      </div>
      <button onClick={handleShow}>Submit</button>
      <button onClick={removeShow}>Remove</button>
      </section>
      <section>
          {show === true ? (
            <div>
              <h2>Name : {name}</h2>
              <h4>Mail :{mail}</h4>
            </div>
          ) : (
            <div>Submit! to see</div>
          )
        }
         
        
      </section>
    </>
  )
}

export default App;