import { successAction } from "lib/actionTypes";
import { GET_USER_DATA_SERVER, GET_USER_QUESTS_SERVER } from "redux/actions/userActions";
import { Quest, StoreType, User } from "redux/types/types";

export interface UserStateType {
  userData: User | null;
  quests: Quest[];
}

export const userInitialState: UserStateType = {
  userData: null,
  quests: [],
};

const userReducer = (state = userInitialState, action: any) => {
  switch (action.type) {
    case successAction(GET_USER_DATA_SERVER): {
      const user = action.payload.data;
      return { ...state, userData: user };
    }
    case successAction(GET_USER_QUESTS_SERVER): {
      const quests = action.payload.data.quests;
      return { ...state, quests };
    }
    default:
      return { ...state };
  }
};

export const getUserData = (store: StoreType) => store.user.userData;
export const getQuests = (store: StoreType) => store.user.quests;

export default userReducer;
