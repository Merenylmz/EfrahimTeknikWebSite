import { combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import categoryReducer from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import messageReducer from "./reducers/messageReducer";

export const reducers = combineReducers({
    products: productsReducer,
    categories: categoryReducer,
    auth: authReducer,
    messages: messageReducer
});