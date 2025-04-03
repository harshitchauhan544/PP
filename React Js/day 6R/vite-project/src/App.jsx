import {  useState } from "react";

const App = () => {

  const [userDetails,setUserDetails] = useState({
    name : "harshit",
    mail : "har23@abes.in",
    phone : "12345"
  });
  const [show,setShow] = useState(false);

  const handleShow = () => {
    // e.preventDefault;

    setShow(true);
  }
  console.log(userDetails);

  return (
    <>
      <section>
      
      </section>
      <section>
          {show === true ? (
            <div>
              {
                Object.entries(userDetails).map(([key,val])=>{
                  return (
                    <h3 key = {key}>{key} :: {val}</h3>
                  )
                })
              }
            </div>
          ) : (
            <form onSubmit={handleShow}>
              <div>
                <label>Name</label>
                <input 
                name= "userName" 
                placeholder="Type here..." 
                value={userDetails.name}
                onChange={(e) => {
                  const val = e.target.value;
                  const newObj = userDetails;
                  newObj.name = val;
                  setUserDetails({...newObj});
                }}
                 />
              </div>
              <div>
                <label>Email</label>
                <input 
                name = "userMail" 
                placeholder="Type here..."
                value={userDetails.mail}
                onChange={(e) => {
                  const val = e.target.value;
                  const newObj = userDetails;
                  newObj.mail = val;
                  setUserDetails({...newObj});
                }}
                />
              </div>
              <div>
                <label>Phone Number </label>
                <input 
                name = "phone" 
                placeholder="Type here..."
                value={userDetails.phone}
                onChange={(e) => {
                  const val = e.target.value;
                  const newObj = userDetails;
                  newObj.phone = val;
                  setUserDetails({...newObj});
                }}
                />
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