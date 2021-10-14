import { combineReducers } from "redux";
import skuReducer from "./skuReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    skus: skuReducer,
    orders: orderReducer,
    users: userReducer,
})