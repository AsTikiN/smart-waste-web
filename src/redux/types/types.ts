import { AuthStateType } from "redux/reducers/authReducer";
import { ThemeStateType } from "../reducers/themeReducer";
import { AppStateType } from "../reducers/appReducer";
import { Loaders } from "./loaders";

export interface StoreType {
  auth: AuthStateType;
  theme: ThemeStateType;
  app: AppStateType;
}

export interface UpdateLoaderProps {
  loader: Loaders;
  status: boolean;
}
