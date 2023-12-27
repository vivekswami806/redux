import React, { useState } from 'react'
import "./style/colorcounter.css"
let bgcolor=["red","blue","pink","yellow","green","#214514","black","orange","grey","darkgrey","#123211","#112122"]
function ColorCounter() {
         let [color,setcolor] = useState("")
          let colorHandler=(data)=>{
              setcolor(data)            
          }
  return (
    <>
    <div className='mainContainer' style={{backgroundColor:color}} >      
    </div>
    <div className='conatiner'>   
        {bgcolor.map((data,i)=>{
              return(
                <div style={{ margin:"10px"}} >
                  <button key={i} style={{backgroundColor:data,height:"200px", width:"200px"}}
                    onClick={()=>
                      colorHandler(data)
                    }>
                    
                  </button>
                 
                </div>
              )
        })}    
    </div>
    </>
  )
}

export default ColorCounter