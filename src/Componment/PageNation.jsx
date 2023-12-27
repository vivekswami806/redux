import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchHandler } from "../redux/action";

function PageNation() {
  let [value, setvalue] = useState({ first: 0 });
  let dispatch = useDispatch();

  useEffect(() => {
    FetchHandler(dispatch, value);
  }, [value]);

  let buttons = useSelector((data) => {
    return data.fetchReducer.data;
  });

  let array = useSelector((data) => {
    return data.SearchReducer.search;
  });
  function incr() {
    let objvalue = { ...value, first: value.first + 10 };
    if (value.first == 30) {
      setvalue({ first: 30 });
    } else {
      setvalue(objvalue);
    }
  }
  function deccr() {
    let objvalue = { ...value, first: value.first - 10 };
    if (value.first == 0) {
      setvalue({ first: 0 });
    } else {
      setvalue(objvalue);
    }
  }

  function valuehandel(val) {
    let objvalue = { ...value, first: val };
    setvalue(objvalue);
  }

  return (
    <div>
      <button onClick={deccr} style={{border:"2px solid pink",borderRadius:"20px" , height:"2rem", width:"3rem", background:"purple"}}>pre </button>
      {buttons.map((_, i) => {
        return (
          <button style={{border:"2px solid pink",borderRadius:"20px" , height:"2rem", width:"3rem", background:"rebeccapurple"}}
            key={i}
            onClick={() => {
              valuehandel(i * 10);
            }}
          >
            {i + 1}
          </button>
        );
      })}
      <button onClick={incr} style={{border:"2px solid pink",borderRadius:"20px" , height:"2rem", width:"3rem", background:"rebeccapurple"}}>next </button>
    </div>
  );
}

export default PageNation;
