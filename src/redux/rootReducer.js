import { combineReducers } from "redux";

import filterReducer from "./filters/reducer";
import todoReducer from "./todo/reducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    filterReducer: filterReducer
})
export default rootReducer;