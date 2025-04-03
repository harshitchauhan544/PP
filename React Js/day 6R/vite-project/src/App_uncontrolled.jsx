import {  useState } from "react";

const App = () => {

  const [name,setName] = useState("Harshit");
  const [mail,setMail] = useState("abc");
  const [show,setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    console.log(e);
    // setShow(true);

    // if(e.target.userName.value)

    if(e.target.userName.value.length < 2){
      alert("invalid Name");
    }else{
      setMail(e.target.userMail.value);
      setName(e.target.userName.value);
      setShow(true);
    }
  }

  return (
    <>
      <section>
      
      </section>
      <section>
          {show === true ? (
            <div>
              <h2>Name : {name}</h2>
              <h4>Mail :{mail}</h4>
            </div>
          ) : (
            <form onSubmit={handleShow}>
              <div>
                <label>Name</label>
                <input name= "userName" placeholder="Type here..."  />
              </div>
              <div>
                <label>Email</label>
                <input name = "userMail" placeholder="Type here..."   />
              </div>
              <button >Submit</button>
              
            </form>
          )
        }
         
        
      </section>
    </>
  )
}

export default App;