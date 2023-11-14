import { BinsCoordinate, StoreType } from "../types/types";
import { successAction } from "lib/actionTypes";
import { GET_BINS_COORDINATES } from "redux/actions/coordinatesActions";

export interface CoordinateStateType {
  binsCoordinates: BinsCoordinate[];
}

export const coordinateInitialState = {
  binsCoordinates: [],
};

const coordinatesReducer = (state = coordinateInitialState, action: any) => {
  switch (action.type) {
    case successAction(GET_BINS_COORDINATES): {
      const binsCoordinates = action.payload.data;
      return { ...state, binsCoordinates };
    }
    default:
      return { ...state };
  }
};

export const getBinsCoordinates = (state: StoreType) => state.cords.binsCoordinates;

export default coordinatesReducer;
