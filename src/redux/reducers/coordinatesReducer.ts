import { BinsCoordinate, StoreType } from "../types/types";
import { successAction } from "lib/actionTypes";
import { GET_BINS_COORDINATES, GET_CATEGORIES_COORDINATES_SERVER } from "redux/actions/coordinatesActions";

export interface CoordinateStateType {
  binsCoordinates: BinsCoordinate[];
}

export const coordinateInitialState = {
  binsCoordinates: [],
};

const coordinatesReducer = (state = coordinateInitialState, action: any) => {
  console.log("actions", action.type);
  switch (action.type) {
    case successAction(GET_BINS_COORDINATES): {
      const binsCoordinates = action.payload.data;
      return { ...state, binsCoordinates };
    }
    case successAction(GET_CATEGORIES_COORDINATES_SERVER): {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export const getBinsCoordinates = (state: StoreType) => state.cords.binsCoordinates;

export default coordinatesReducer;
