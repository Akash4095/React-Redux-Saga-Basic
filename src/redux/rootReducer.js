// root reducer
import { combineReducers } from "redux";
import cartData from './reducers'
import productData from "./productReducer";

const rootReducer = combineReducers({
    cartData,
    productData
})

export default rootReducer




