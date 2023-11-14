// import { REHYDRATE } from "../actions/appActions";
import { successAction } from "lib/actionTypes";
import {
  CLEAR_AUTH_DATA,
  CONFIRM_RESET_PASSWORD,
  CONFIRM_EMAIL_SERVER,
  LOGIN_USER_SERVER,
  LOGOUT,
  SEND_RECOVERY_LINK,
  SET_IS_UPDATING_USER_INFO,
  UPDATE_IS_AUTHORIZED,
  LOGIN_USER_WITH_GOOGLE,
  AUTH_WHOP,
  CREATE_USER_SERVER,
} from "../actions/authActions";
import { StoreType } from "redux/types/types";
import { REHYDRATE } from "redux-persist";

export interface AuthStateType {
  isAuthorized: boolean;
  token: null | string;
}

const authInitialState: AuthStateType = {
  isAuthorized: false,
  token: null,
};

const authReducer = (state = authInitialState, action: any) => {
  switch (action.type) {
    case "persist/REHYDRATE": {
      const { isAuthorized, token } = action.payload.auth || {};
      return { ...state, token, isAuthorized };
    }
    case successAction(CREATE_USER_SERVER): {
      const { accessToken } = action.payload.data;
      return { ...state, token: accessToken, isAuthorized: true };
    }
    case successAction(LOGIN_USER_SERVER): {
      const { accessToken } = action.payload.data;
      return { ...state, token: accessToken, isAuthorized: true };
    }
    default: {
      return { ...state };
    }
  }
};

export const getIsAuthorized = (state: StoreType) => state.auth.isAuthorized;
export const getToken = (state: StoreType) => state.auth.token;

export default authReducer;
