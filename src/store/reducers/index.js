import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import authReducer from "./auth";
import streamsReducer from "./streams";

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  streams: streamsReducer,
});
