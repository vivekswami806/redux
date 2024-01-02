import React from "react";
import { Link } from "react-router-dom";
import AddtoCard from "./AddtoCard";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/action";

function Product({ items }) {
  let { id, brand, price, thumbnail, title } = items;
  let dispatch= useDispatch()
  return (
    <div style={{ display: "flex", alignItems:"center", justifyContent:"center",padding:"20px"}}>
      <div style={{display:"flex",  flexDirection:"column", justifyContent:"center", alignItems:"center", 
     boxShadow:"4px 4px pink",width:"100%"
    }}>
        <div style={{height:"10rem", width:"16rem",border:"solid 2px pink", display:"flex ", justifyContent:"center", alignItems:"center",
        background:"lightpink",
       }}>
          <Link to={`/singlepage/${id}`}>
          <img src={thumbnail} alt="" style={{height:"8rem",width:"12rem"}} />
          </Link>
        </div>
         <div style={{background:"lavender", width:"80%", display:"flex", flexDirection:"column", alignItems:"center"}}>
         <h3>Product ID: {id}</h3>
        <h6> Brand: {brand}</h6>
        <p> Title: {title}</p>
        <h1>Price: {price}</h1>
      
         </div>
  
         <div style={{background:"lavender", width:"74.3%",display:"flex" ,flexDirection:"column", alignItems:"center", padding:"10px"}}>
         <Link to={"/cartproduct"}>
          <button onClick={()=>{
            dispatch(addtocart(1,items))
          }}>Add to Cart</button>
         </Link>
         </div>
      </div>
    </div>
  );
}

export default Product;
