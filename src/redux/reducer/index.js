import {combineReducers} from "redux";
import { fetchReducer } from "./FetcheReducer";
import SearchReducer from "./SearchReducer";

export let rootReducer = combineReducers({
    fetchReducer,
    SearchReducer,
})