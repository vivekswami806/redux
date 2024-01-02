import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addtocart } from '../redux/action';

function AddtoCard({mainData}) {
    let dispatch = useDispatch()
    
    let [count, setCount]= useState(1)
    function incrementhandel(){
        setCount(count+1)
    }
    function decrementhandel(){
        if(count>1)
        setCount(count-1)
    }
  return (
    <div>
        <Link to={"/cartproduct"}>
        <button onClick={()=>{
            dispatch(addtocart(count,mainData))
        }}>
            Add To Cart
        </button>
        </Link>
  <div>
  <button onClick={incrementhandel}>+</button>{count} <button onClick={decrementhandel}>-</button>

  </div>
    </div>
  )
}

export default AddtoCard