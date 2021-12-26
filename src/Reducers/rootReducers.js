import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";

const rootReducers = combineReducers({
    userReducer : UserReducer
});

export default rootReducers;