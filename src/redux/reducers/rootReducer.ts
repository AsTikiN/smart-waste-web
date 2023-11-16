import { combineReducers } from "redux";

import authReducer from "./authReducer";
import appReducer from "./appReducer";
import themeReducer from "./themeReducer";
import coordinatesReducer from "./coordinatesReducer";
import userReducer from "./userReducer";
import scanReducer from "./scanReducer";
import bucketReducer from "./bucketReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  app: appReducer,
  cords: coordinatesReducer,
  user: userReducer,
  scan: scanReducer,
  bucket: bucketReducer,
});

export default rootReducer;
