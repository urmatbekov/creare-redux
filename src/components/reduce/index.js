import {combineReducers} from "redux";
import ProductsReducer from "./products";

const reduce = combineReducers({
    products:ProductsReducer
})

export default reduce;