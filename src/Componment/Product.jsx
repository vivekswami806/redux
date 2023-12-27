import React from "react";
import { Link } from "react-router-dom";

function Product({ items }) {
  let { id, brand, price, thumbnail, title } = items;
  return (
    <div style={{ display: "flex", alignItems:"center", justifyContent:"center",padding:"20px"}}>
      <div style={{display:"flex",  flexDirection:"column", justifyContent:"center", alignItems:"center", 
     boxShadow:"4px 4px pink"
    }}>
        <div style={{height:"10rem", width:"16rem",border:"solid 2px pink", display:"flex ", justifyContent:"center", alignItems:"center",
        background:"lightpink",
       }}>
          <Link to={`/singlepage/${id}`}>
          <img src={thumbnail} alt="" style={{height:"8rem"}} />
          </Link>
        </div>
         <div style={{background:"lavender", width:"100%"}}>
         <h3>Product ID: {id}</h3>
        <h2> Brand: {brand}</h2>
        <p> Title: {title}</p>
        <h1>Price: {price}</h1>
         </div>
      </div>
    </div>
  );
}

export default Product;
