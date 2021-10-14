import { combineReducers } from "redux";
import skuReducer from "./SkuReducer";
//import orderReducer from "./OrderReducer";
//import userReducer from "./UserReducer";

export const rootReducer = combineReducers({
    skus: skuReducer,
    //users: userReducer,
    //orders: orderReducer
})