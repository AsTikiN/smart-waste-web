import { successAction } from "lib/actionTypes";
import { GET_USER_DATA_SERVER } from "redux/actions/userActions";
import { StoreType, User } from "redux/types/types";

export interface UserStateType {
  userData: User | null;
}

export const userInitialState: UserStateType = {
  userData: null,
};

const userReducer = (state = userInitialState, action: any) => {
  switch (action.type) {
    case successAction(GET_USER_DATA_SERVER): {
      const user = action.payload.data;
      return { ...state, userData: user };
    }
    default:
      return { ...state };
  }
};

export const getUserData = (store: StoreType) => store.user.userData;

export default userReducer;
