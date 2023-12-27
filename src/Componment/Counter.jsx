import React, { useState } from 'react'

function CounterAdding() {
  let [add, setadding]=useState()
  function adding(){
       let add= add + 3
       setadding(add)
  }

  return (
    <>
    <input type="number"/>
     <button onClick={adding}>+3</button>
     <button>*3</button>
     <button>-3</button>
     <button>/3</button>

     <h1>{add}</h1>
    </>
  )
}

export default CounterAdding;