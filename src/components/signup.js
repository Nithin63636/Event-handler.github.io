import React, { useState , useRef } from "react";
import './signup.css'
export default function Signup({changecolor,setsignup,setcolor}) {
  const [email,setemail] =useState('');
  //const [password,setPassword] =useState('');
  const password = useRef(); // using useRef
  const submithandle = (e)=>{
  e.preventDefault();
   const set= {
    email: email,
    password : password.current.value, // referencing, works fine now
    id : Math.floor(Math.random()*10000)
   }
   console.log(set);
   reset();
   setsignup(false);
  }
 const reset = ()=>{
 setemail('');
 password.current.value =""; // updating to null value
 }
  return (
    <div className="signup-back">
        <div className="signup-front">
            <form onSubmit={submithandle}> 
                <label> 
                <p>Enter you email : 
                   <input type="email" placeholder="your email" onChange={(e)=>setemail(e.target.value)} value={email} />
                </p>
                </label>
               <label>
                <p>
                 <span>Password : </span>
                  <input type="password" ref={password}></input>
                </p>
              </label>
               <button style={{  background: changecolor? "red" : "rgb(119, 210, 119)",}}>Submit</button> <span> </span>
               <button onClick={()=>{setsignup(false); setcolor(false)}} 
              style={{  background: changecolor? "red" : "rgb(119, 210, 119)",}}>
              close</button>
            </form>
            <button onClick={()=>setcolor(true)} >change-color & style</button>
        </div>
        {/* you can dynamically chnage ClassName like ClassName={changecolor ? "mid" : "disc"} */}
     </div>
  )
}

