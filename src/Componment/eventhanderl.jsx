import React, { useState } from "react";
import elentElement from "./elentElement";
  let elementArr = [
    {
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.dxomark.com%2Fwp-content%2Fuploads%2Fmedias%2Fpost-35617%2FClearly-White-Pixel-4-Front_Back.jpg&tbnid=OhbWdwYHKrnB3M&vet=12ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.dxomark.com%2Fgoogle-pixel-4-camera-review%2F&docid=4CeupYps89Y2OM&w=1100&h=825&q=pixel&ved=2ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0",
        name: "googpixal",
        price: 20000,
        id: 101
    },

    {
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.dxomark.com%2Fwp-content%2Fuploads%2Fmedias%2Fpost-35617%2FClearly-White-Pixel-4-Front_Back.jpg&tbnid=OhbWdwYHKrnB3M&vet=12ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.dxomark.com%2Fgoogle-pixel-4-camera-review%2F&docid=4CeupYps89Y2OM&w=1100&h=825&q=pixel&ved=2ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0",
        name: " applepixal",
        price: 20000,
        id: 101
    },
    {
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.dxomark.com%2Fwp-content%2Fuploads%2Fmedias%2Fpost-35617%2FClearly-White-Pixel-4-Front_Back.jpg&tbnid=OhbWdwYHKrnB3M&vet=12ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.dxomark.com%2Fgoogle-pixel-4-camera-review%2F&docid=4CeupYps89Y2OM&w=1100&h=825&q=pixel&ved=2ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0",
        name: "ixal",
        price: 20000,
        id: 101
    },
    {
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.dxomark.com%2Fwp-content%2Fuploads%2Fmedias%2Fpost-35617%2FClearly-White-Pixel-4-Front_Back.jpg&tbnid=OhbWdwYHKrnB3M&vet=12ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.dxomark.com%2Fgoogle-pixel-4-camera-review%2F&docid=4CeupYps89Y2OM&w=1100&h=825&q=pixel&ved=2ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0",
        name: "oopixal",
        price: 20000,
        id: 101
    },
    {
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.dxomark.com%2Fwp-content%2Fuploads%2Fmedias%2Fpost-35617%2FClearly-White-Pixel-4-Front_Back.jpg&tbnid=OhbWdwYHKrnB3M&vet=12ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.dxomark.com%2Fgoogle-pixel-4-camera-review%2F&docid=4CeupYps89Y2OM&w=1100&h=825&q=pixel&ved=2ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0",
        name: "xal",
        price: 20000,
        id: 101
    }, 
    {
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.dxomark.com%2Fwp-content%2Fuploads%2Fmedias%2Fpost-35617%2FClearly-White-Pixel-4-Front_Back.jpg&tbnid=OhbWdwYHKrnB3M&vet=12ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.dxomark.com%2Fgoogle-pixel-4-camera-review%2F&docid=4CeupYps89Y2OM&w=1100&h=825&q=pixel&ved=2ahUKEwi25_--q-OBAxXvaGwGHW1xDSQQMygDegQIARB0",
        name: "oglepixal",
        price: 20000,
        id: 101
    }
]
function Eventhanderler(){
       const [itemdata , setitemdata]=useState(elementArr);
       const [searchdata , setsearchdata]=useState("");
            
       function SearchHandler(e)
       {
           let filter= elementArr.filter(ele=>{
              return  ele.name.toLowerCase().includes(searchdata.toLowerCase())
            })
            setitemdata(filter)
       }
    return( <> 
        <div >
        <input type='text' name="name" onChange={(e)=>{setsearchdata(e.target.value)}} value={searchdata}/>
       <button id="search"  onClick={ ()=>{
        SearchHandler()
       }}> search</button>
       </div>
           
      {itemdata.map((data)=>{
            return(
                <>
                <div>
                <img src={data.img}/>
                <h1>{data.name}</h1>
                <h1>{data.price}</h1>
                <h1>{data.id}</h1>
               </div>
                </>
            )
       })}
  </>  )
}
export default Eventhanderler;