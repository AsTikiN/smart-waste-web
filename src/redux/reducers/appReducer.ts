import { NAVIGATE, UPDATE_LOADER } from "redux/actions/appActions";
import { Loaders } from "redux/types/loaders";
import { StoreType } from "redux/types/types";

export interface AppStateType {
  hydrated: boolean;
  navigationLink: { link: string } | null;
  loaders: Record<Loaders, boolean>;
}

export const appInitialState: AppStateType = {
  hydrated: false,
  navigationLink: null,
  loaders: Object.values(Loaders).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as Record<Loaders, boolean>),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appReducer = (state = appInitialState, action: any) => {
  switch (action.type) {
    case "persist/REHYDRATE": {
      return {
        ...state,
        hydrated: true,
      };
    }
    case NAVIGATE: {
      return {
        ...state,
        navigationLink: action.payload,
      };
    }
    case UPDATE_LOADER: {
      const { loader, status } = action.payload;
      return {
        ...state,
        loaders: { ...state.loaders, [loader]: status },
      };
    }
    default:
      return { ...state };
  }
};

export const getHydrated = (state: StoreType) => state.app.hydrated;
export const getNavigationLink = (state: StoreType) => state.app.navigationLink;
export const getLoaders = (state: StoreType) => state.app.loaders;

export default appReducer;
