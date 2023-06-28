import './Newform.css'
import React, { useState } from 'react'

export default function Newform({settodo,addEvent}) {
  const [title,setTitle] = useState('');
  const [date,setDate] =  useState('');
  const [location,setLocation] = useState('india');
  const resetForm = () =>{
    setTitle('');
    setDate('');
    setLocation('india');
  }
  const handleSubmit= (e)=>{
    e.preventDefault();
    const event={
      title :title,
      date:date,
      location:location,
      id:Math.floor(Math.random()*10000)
    }
    addEvent(event);
    resetForm();
    settodo(false);
  }
  return (
    <div className="signup-back"> 
      <div className="signup-front">
       <form className='new-form' onSubmit={handleSubmit}>
          <label> 
            <span>Enter your event:</span>
            <input 
            type="text"
            onChange={(e)=>setTitle(e.target.value)}    
            value={title}></input>
          </label>
          <label>
            <span>enter the date: </span>
            <input type="date"     
            onChange={(e)=>setDate(e.target.value)}       
            value={date}></input>
          </label>
          <label>
            <span> Event Location : </span>
            <select onChange={(e)=>setLocation(e.target.value)}>
             <option value="India">India</option>
             <option value="United Kingdom">United Kingdom</option>
             <option value="Bangladesh">Bangladesh</option>
             <option value="Sri Lanka">Sri Lanka</option>
             <option></option>
            </select>
          </label>
          <button>Submit</button> 
       </form>
       <button onClick={()=>settodo(false)}>Close</button>
       <span> </span>  
        <button onClick={resetForm}>Clear</button>
     </div>
    </div>
  )
}
