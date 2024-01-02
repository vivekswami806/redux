import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {removeHandel} from "../redux/action/index"

function CartProduct() {
  let dispatch = useDispatch()
  let cart = useSelector((data) => {
    return data.SearchReducer.cartdata;
  });

  //   let {price , thumbnail,title,count}= cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({type:"totalcount"})
  }, [cart]);
  return (
    <div style={{}}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          border: "2px solid",
        }}
      >
        <span>Title</span>
        <span>Images</span>
        <span>Count</span>
        <span>Price</span>
    
      </div>

      {cart.map((items, i) => {
        return (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                border: "2px solid pink",
                borderRadius: "20px",
                alignItems:"center"
              }}
            >
              <h1>{items.title} </h1>
              <div>
                <img src={items.thumbnail} alt="" height={"100rem"} style={{borderRadius:"60%"}} />{" "}
              </div>
              <h1>{items.count} </h1>
              <h1> {items.count * items.price} </h1>
              <button style={{background:"red", width:"7rem",height:"2rem",borderRadius:"4rem", border:"0px"}}
               onClick={()=>{
              dispatch(removeHandel(items.id))
               }}
              > Remove Items </button>
            </div>
          </>
        );
      })}
      <Link to={"/"}>
        <button>Continue Shooping</button>
      </Link>
    </div>
  );
}

export default CartProduct;
