import React from 'react'

function Product({items}) {
    let {id,brand,price,thumbnail,title}=items
  return (
    <div>
        <div>
            <div>
                <img src={thumbnail} alt="" />
                 </div>  
            <h3>{id}</h3>
            <h2>{brand}</h2>
            <p>{title}</p>
            <h1>{price}</h1>  
        </div>
    </div>
  )
}

export default Product