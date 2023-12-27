import React, { useState } from 'react'
function Backghndelbtn() {
  let [randomColor, setrandomColor]=useState("");
  function Bcolor(){
   let  colorCode = `#${ Math.floor(Math.random()*1111111)}`;
   setrandomColor(colorCode) 
  }

 
console.log(randomColor);
  return (
   <>
   <div style={{ height: "200px", width: "100%", border:"2px solid", backgroundColor:`${randomColor}`}}>
            </div>
     <input type="button" className='submit' style={{
      height:"30px",
      width:"5rem",
      margin:"200px",
      border: "0px solid aqua",
      borderRadius: "3px",  
      backgroundColor:"red"
    }} value={"color Change "}  onClick={Bcolor}/>
    
   </>
  )
}

export default Backghndelbtn