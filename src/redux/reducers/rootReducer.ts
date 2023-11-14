import { combineReducers } from "redux";

import authReducer from "./authReducer";
import appReducer from "./appReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  app: appReducer,
});

export default rootReducer;
