import { AuthStateType } from "redux/reducers/authReducer";
import { ThemeStateType } from "../reducers/themeReducer";
import { AppStateType } from "../reducers/appReducer";
import { Loaders } from "./loaders";
import { CoordinateStateType } from "redux/reducers/coordinatesReducer";

export interface StoreType {
  auth: AuthStateType;
  theme: ThemeStateType;
  app: AppStateType;
  cords: CoordinateStateType;
}

export interface UpdateLoaderProps {
  loader: Loaders;
  status: boolean;
}

export interface BinsCoordinate {
  id: string;
  lat: number;
  lng: number;
  name: string;
  address: string;
}

export interface UpdateStatusProps {
  status: boolean;
}

export interface CreateUserServerProps {
  username: string;
  email: string;
  password: string;
}
