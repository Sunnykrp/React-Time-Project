import { useState } from "react";
const Challenge6=()=>
{
   let newTime=new Date().toLocaleTimeString();
   const[ctime,setCtime]=useState(newTime);
   function TimeUp()
   {
      let newCTime=new Date().toLocaleTimeString();
       setCtime(newCTime);
   };
setInterval(TimeUp,1000);    
   return(
    <>
       <h1>{newTime}</h1>
    </>
   );        
}
export default Challenge6;