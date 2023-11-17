import { AuthStateType } from "redux/reducers/authReducer";
import { ThemeStateType } from "../reducers/themeReducer";
import { AppStateType } from "../reducers/appReducer";
import { Loaders } from "./loaders";
import { CoordinateStateType } from "redux/reducers/coordinatesReducer";
import { UserStateType } from "redux/reducers/userReducer";
import { ScanStateType } from "redux/reducers/scanReducer";
import { BucketStateType } from "redux/reducers/bucketReducer";

export interface StoreType {
  auth: AuthStateType;
  theme: ThemeStateType;
  app: AppStateType;
  cords: CoordinateStateType;
  user: UserStateType;
  scan: ScanStateType;
  bucket: BucketStateType;
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
  categories: { slug: string; emoji: string; name: string }[];
}

export interface UpdateStatusProps {
  status: boolean;
}

export interface CreateUserServerProps {
  username: string;
  email: string;
  password: string;
}

export interface User {
  email: string;
  id: string;
  username: string;
}

export interface BucketItem {
  id: string;
  name: string;
  count: number;
}

export interface BucketItemVariant {
  id: string | number;
  name: string;
  categories: { slug: string }[];
}

export interface ScanImageProps {
  Photo: File;
}

export interface AddToBucketProps {
  bucketItem: BucketItem;
}

export interface setBucketProps {
  bucket: BucketItem[];
}

export interface DropBucketProps {
  items: { id: number; count: number }[];
}
