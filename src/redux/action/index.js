import { error, fetched, loading ,defaulte} from "./actionType";
import axios from "axios"; 

async function FetchHandler(dispatch , value) {
  console.log(value.first," i am value");
  // let skipValue = value && value.first !== undefined ? value.first : 0;
       let url =`https://dummyjson.com/products?skip=${value.first}&limit=${10}`   
      //  let url =`https://dummyjson.com/products`   

      try {
      //   let data= await fetch(url).then((data)=>{
      //     return data.json() }).then((items)=>{
      //       return items
      //     })
      //     console.log(data);
         
     let res= await axios.get(url)
    let data = await res.data.products
   
    dispatch({ type: loading });
    dispatch({ type: fetched, payload: data });
    dispatch({ type: defaulte , payload: data });
  } catch (err) {
    dispatch({ type: error, payload: err });
  }
 
}
function SearchHandler(e, x) {
  let { value } = e.target;
  return { type: "searching", payload: { value, x } };
}
function SortingHandler(e, x) {
  let { value } = e.target;
  return { type: "sorting", payload: { value, x } };
}
function cathandel(e, x) {
  let { value } = e.target;
  return { type: "category", payload: { value, x } };
}


export { FetchHandler, SearchHandler, SortingHandler,cathandel };
