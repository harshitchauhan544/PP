import React, { useState } from 'react'

function SignupPage() {
    const [sendingOtp,setSendingOtp] = useState(false);
    const [isOtpSent,setIsOtpSent] = useState(false);
    const [email,setEmail] = useState('')

    const handleForm = async (e)=> {

        try{
            setSendingOtp(true);
            e.preventDefault();

            const email = e.target.email.value;

            const resp = await fetch('http://localhost:2200/api/v1/auth/otp',{
                method: 'POST',
                body : JSON.stringify({email}),
                headers : {
                    "Content-type" : "application/json",
                },
            })
            const data = await resp.json();
            setEmail(email);
            console.log(data)
            setIsOtpSent(true);
        } catch (err) {
            console.log("Error Sending otp ", err.massage);
        } finally{
            setSendingOtp(false);
        }
    }


    if(isOtpSent){
        return (
            <div>
                <form>
                    <input value = {email} disabled></input>
                </form>
            </div>
        )
    }

  return (
    <>
        <div>
            <h1>SignupPage</h1>
            <form onSubmit={handleForm}>
                <input type="email" name="email" required />
                <button type="submit" disabled = {sendingOtp}>{sendingOtp ? "Sending" : "Send OTP"} </button>
            </form>

        </div>
    </>
  )
}

export default SignupPage