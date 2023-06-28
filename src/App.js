import './App.css';
import Signup from './components/signup';
import Newform from './components/Newform';
import Model from './components/MODEL';
import Events from './components/events';
import { useState } from 'react'; //usestate triggers the revaluation of reactdom
// reactDOM compare two trees of jsx and obtains the new changes , know that html codes are trees

function Box(props){  // props is the element passed through index.js 
  // rember always function names or react components  should be starting with caps
  let [state , change] = useState("memory loss");
  let [name,statename] = useState ('nithin');
  let [hide, sethide] = useState(true);
  let [showtodo,settodo]=useState(false);
  let [showmodel,setshowmodel] = useState(false);
  let [showsignup,setsignup] = useState(false);
  let [changecolor,setcolor] = useState(false);
  let a = 0;
  let b1 = ()=> {statename('nithin');change('memory loss');a=0;}
  let b2 = ()=>{statename('what is your name again ?');change("memory gain");a=1;}
  let click=()=>{
  if(a==0)    return (b2());
  if(a==1)    return(b1());
  }
  let [events,setevents] = useState([]);
  const addEvent =( event)=>{
    setevents((prevEvents)=>{
     return [...prevEvents,event];
    });
  }
  let eventhandle = (id) =>{
    setevents(events.filter((event)=>{
      return id !== event.id ;
    }))
    console.log(id);
  }
  
  return (
    <>
     <h1 id="mid">{props.abc}</h1> 
    <div id="mid">
    <h1>My name is {name}</h1>
    <button onClick={click}>{state}</button>
    </div>
        {showtodo && (<Newform settodo={settodo} addEvent={addEvent}/>)}
        <div id="disc">
        <button onClick={()=>settodo(true)}> Add task to To-do</button> 
        </div>
        <div id="disc">
        {!hide && (<button  onClick={()=>{sethide(true)}}>Show detailes</button>)}
        {hide && (<button  onClick={()=>{sethide(false)}}>hide detailes</button>)} 
        </div>
     {hide && <Events events={events} eventhandle={eventhandle}/>}
     {/* you can pass different events here are reuse the code */}
     {showmodel && (<Model>
     <h2>welcome to the website</h2>
     <p> <a>Check out</a> this new page i created</p>
      {/* you can add any images also */}
      <button onClick={()=>{setshowmodel(false)}}>close</button>
     </Model>)}
     <div id ="disc">
      <br/>
       <button  onClick={()=>setshowmodel(true)}>click here for pop-up add</button>
       </div>
       {showsignup && (
        <Signup  setsignup={setsignup} changecolor={changecolor} setcolor={setcolor} >
        </Signup>
        )}

        <div id="signup"> 
         <button onClick={()=>setsignup(true)} style={{backgroundColor : "red"}} > SIGNUP OR LOGIN</button>
        {/*use double {} inline css, thi is jsx css or css in js and instead of - , use camelcase*/}
      </div>
        
    </>
  );
}
export default Box;
 