import { fetchReducer } from "./FetcheReducer";

let initalvalue = { search: [] };
 function SearchReducer(state = initalvalue, action) {
  switch (action.type) {
    case "DEFAULTE":
    // console.log(action.payload,"iam reducerdata ");
    return {...state, search: action.payload}
    case "searching":
      let data = [...action.payload.x];
      let inpvalue = action.payload.value.trim();
      let upadted = data.filter((e) => {
        return e.title.toUpperCase().includes(inpvalue.toUpperCase());
      });
      return { ...state, search: upadted };

    case "sorting":
      let data1 = [...action.payload.x];
      let value = action.payload.value;
      function sortingValue(a, b) {
        if (value == "H_L") {
          return a.price - b.price;
        }
        if (value == "L_H") {
          return b.price - a.price;
        }
        if (value == "A_Z") {
          return a.brand.toUpperCase().localeCompare(b.brand.toUpperCase());
        }
        if (value == "Z_A") {
          return b.brand.toUpperCase().localeCompare(a.brand.toUpperCase());
        }
      }
      let updated = data1.sort(sortingValue);      
      return { ...state, search: updated };
     case "category":
        let catAction=[...action.payload.x]
        let catvalue=action.payload.value  ;
          catAction = catAction.filter((items)=>{
              if(catvalue === items.category){
                return items
              }
              else if(catvalue==="all"){
                      return items
              }
          })
          return {...state, search:catAction}
    default:
      return state;
  }
}

export default SearchReducer
