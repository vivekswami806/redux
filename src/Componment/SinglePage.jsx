import React, { useEffect } from "react";
import { SingleFetch } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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

  console.log(mainData);
  return (
    <>
      {mainData.length == 0 ? (
        <h1>loading</h1>
      ) : (
        <div style={{ display: "flex" }}>
          <div>
            {images.map((items, i) => {
              return <img src={items} alt="x" />;
            })}
          </div>

          <div>
            <h1>BRAND: {brand} </h1>
            <h1>Title: {title} </h1>
            <h1> Description: {description} </h1>
            <h1>Rating: {rating} </h1>
            <h1> Aviable: {stock} </h1>
            <h1> Today Offer: {discountPercentage} % </h1>
            <h1>PRICE: {price}$ </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default SinglePage;
