import React from 'react'
import { useState } from 'react'

function C1ounter() {
   const [count,setcount]=useState(0)
   const [color,setcolor]= useState("red")

   function counter(){
            setcount(count-1)
            
            if(count== -5){
                setcolor("blue")
            }
   }

  return (
    <div>C1ounter
        <button onClick={counter}> 
                click
        </button>
        <div style={{backgroundColor:color, height:"30vh", width:"10rem"}}></div>

        <h1> {count}</h1>
    </div>
  )
}

export default C1ounter