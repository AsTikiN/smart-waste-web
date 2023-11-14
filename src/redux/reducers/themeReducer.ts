import { REHYDRATE } from "redux-persist";

import { ThemeVariants } from "../../theme/variants";
import { StoreType } from "../types/types";
import { UPDATE_THEME } from "../actions/themeActions";

export interface ThemeStateType {
  theme: ThemeVariants;
}

export const themeInitialState = {
  theme: ThemeVariants.light,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const themeReducer = (state = themeInitialState, action: any) => {
  switch (action.type) {
    case REHYDRATE: {
      const data = action.payload;
      if (data) {
        return {
          ...state,
          ...data.theme,
        };
      }
      return { ...state };
    }
    case UPDATE_THEME: {
      const { theme } = action.payload;
      return { ...state, theme };
    }
    default:
      return { ...state };
  }
};

export const getTheme = (state: StoreType) => state.theme.theme;

export default themeReducer;
