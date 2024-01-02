import React, { useEffect, useState } from "react";
import { SingleFetch } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AddtoCard from "./AddtoCard";

function SinglePage() {
  let { id } = useParams();
  

  let dispatch = useDispatch();
  useEffect(() => {
    SingleFetch(dispatch, id);
  }, []);
  let mainData = useSelector((data) => {
    return data.fetchReducer.single;
  });

  let {
    title,
    description,
    price,
    images,
    discountPercentage,
    rating,
    stock,
    brand,
  } = mainData;

 let [imgUrl ,setimgUrl]= useState(images ? images[0]  : "" )

 function imgHandel(data){
  setimgUrl(data)
}

  return (
    <>
      {mainData.length == 0 ? (
        <h1>loading</h1>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns:"1fr 1fr 1fr", justifyContent:"space-around", alignItems:"center" }}>
          <div style={{background:"", marginLeft:"10rem"}}>
            {images.map((items, i) => {
              return <img src={items} alt="x"  style={{height:"10rem"}}
               onClick={()=>{
                imgHandel(items)
               }} />;
            })}
          </div>
              <div style={{background:"" ,borderRadius:"20%"}}>
                  <img src={imgUrl} alt="" height={"500rem"} width={"400rem"} style={{borderRadius:"20%"}}/>
              </div>
          <div style={{background:"",}}>
            <h1>BRAND: {brand} </h1>
            <h4>Title: {title} </h4>
            <p> Description:  {description} </p>
            <h3>Rating: {rating} </h3>
            <h2> Available: {stock} </h2>
            <h6> Today Offer: {discountPercentage} % </h6>
            <h1>PRICE: {price}$ </h1>
           
             <hr />
             <div>
              <AddtoCard mainData={mainData}/>
             </div>
          </div>
        
        </div>
      )}
    </>
  );
}

export default SinglePage;
