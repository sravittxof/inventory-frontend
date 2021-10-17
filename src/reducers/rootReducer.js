import { combineReducers } from "redux";
import skuReducer from "./skuReducer";
import lotReducer from "./lotReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    skus: skuReducer,
    lots: lotReducer,
    orders: orderReducer,
    users: userReducer,
})