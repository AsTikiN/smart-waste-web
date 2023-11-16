import { successAction } from "lib/actionTypes";
import { SCAN_IMAGE_SERVER } from "redux/actions/scanActions";
import { StoreType, User } from "redux/types/types";

export interface ScanStateType {
  scanData: any;
}

export const scanInitialState: ScanStateType = {
  scanData: null,
};

const scanReducer = (state = scanInitialState, action: any) => {
  switch (action.type) {
    case successAction(SCAN_IMAGE_SERVER): {
      const scanData = action.payload.data;
      return { ...state, scanData };
    }
    default:
      return { ...state };
  }
};

export const getScanData = (store: StoreType) => store.scan.scanData;

export default scanReducer;
