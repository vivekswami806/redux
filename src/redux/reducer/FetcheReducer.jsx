import { error,fetched,loading ,single} from "../action/actionType";

const initalvalue ={
    loading:false,
    data:[],
    error:"",
    single:[]
}

export function fetchReducer(state=initalvalue,action){
      switch(action.type){
        case loading:
            return{...state ,loading:true}
            case fetched:
                return{...state,loading:false,data:action.payload}
                case error:
                    return {...state,loading:false,error:action.payload}
                    case "single":
                       
                        return {...state,loading:false,single:action.payload}
                    default:
                        return state
      }
      
}