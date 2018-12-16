import { combineReducers } from "redux";
import authReducer from "./authreducer";
import errorReducer from "./errorreducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
