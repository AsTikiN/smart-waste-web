import { combineReducers } from "redux";

import authReducer from "./authReducer";
import appReducer from "./appReducer";
import themeReducer from "./themeReducer";
import coordinatesReducer from "./coordinatesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  app: appReducer,
  cords: coordinatesReducer,
});

export default rootReducer;
