import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cathandel, SearchHandler, SortingHandler } from "../redux/action";
import Product from "./Product";
import PageNation from "./PageNation";

function SearchHandle() {
  let dispatch = useDispatch();
  let DummyData = useSelector((data) => {
    return data.SearchReducer.search;
  });
  let mainData = useSelector((data) => {
    return data.fetchReducer.data;
  });
  let totalcount = useSelector((data)=>{
    return data.SearchReducer.totalCount
  })
  let Cat = mainData.map((e) => {
    return e.category;
  });
  let cat2 = ["all", ...new Set(Cat)];

  return (
    <div style={{ padding: "0", margin: "0" , display:"grid" }}>
      <div
        style={{
          background: "pink",
          padding: "30px",
          position: "fixed",
          width: "95.5%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <span> Category:</span>
            <select
              name=""
              id=""
              style={{
                border: "1px solid blue",
                fontFamily: "sans-serif",
                height: "auto",
                width: "9rem",
                padding: "3px",
              }}
              onChange={(e) => {
                dispatch(cathandel(e, mainData));
              }}
            >
              {cat2.map((items, i) => {
                return (
                  <option key={i} style={{}}>
                    {items}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            type="text"
            placeholder="Search items "
            style={{ border: "solid 2px pink" }}
            onChange={(e) => {
              dispatch(SearchHandler(e, mainData));
            }}
          />
          <div>
            Sort: 
            <select
              name=""
              id=""
              style={{ border: "2px solid yellow", width: "12rem" }}
              onChange={(e) => {
                dispatch(SortingHandler(e, mainData));
              }}
            >
              <option value="A_Z">A-Z</option>
              <option value="Z_A">Z-A</option>
              <option value="H_L">Low-High</option>
              <option value="L_H">High-Low</option>
            </select>
          </div>
          <div>
            Total Cart : {totalcount}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          backgroundColor: "yellow",
          padding: "30px",
          marginTop: "2rem",
        }}
      >
        {!DummyData ? (
          <h1>Fetching</h1>
        ) : (
          DummyData.map((items, i) => {
            return (
              <>
                <div key={i} style={{ border: "2px soild" }}>
                  <Product items={items}></Product>
                </div>
              </>
            );
          })
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          zIndex: "1",
          background: "yellow",
          padding: "20px",
        }}
      >
        <PageNation />
      </div>
    </div>
  );
}

export default SearchHandle;
