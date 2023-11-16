import { successAction } from "lib/actionTypes";
import { REHYDRATE } from "redux-persist";
import {
  ADD_TO_BUCKET,
  GET_ALL_BUCKET_ITEMS_SERVER,
  REMOVE_FROM_BUCKET,
  SET_BUCKET,
} from "redux/actions/bucketActions";
import { BucketItem, BucketItemVariant, StoreType } from "redux/types/types";

export interface BucketStateType {
  bucket: BucketItem[];
  bucketItemVariants: BucketItemVariant[];
}

export const bucketInitialState: BucketStateType = {
  bucket: [],
  bucketItemVariants: [],
};

const bucketReducer = (state = bucketInitialState, action: any) => {
  switch (action.type) {
    case REHYDRATE: {
      const { bucket, bucketItemVariants } = action.payload?.bucket || {};
      return { ...state, bucket: bucket || [], bucketItemVariants: bucketItemVariants || [] };
    }
    case ADD_TO_BUCKET: {
      const item = action.payload.bucketItem;
      return { ...state, bucket: [...state.bucket, item] };
    }
    case REMOVE_FROM_BUCKET: {
      const item = action.payload.bucketItem;
      return { ...state };
    }
    case SET_BUCKET: {
      const bucket = action.payload.bucket;
      return { ...state, bucket };
    }
    case successAction(GET_ALL_BUCKET_ITEMS_SERVER): {
      const bucketItemVariants = action.payload.data.items;
      return { ...state, bucketItemVariants };
    }
    default:
      return { ...state };
  }
};

export const getBucket = (store: StoreType) => store.bucket.bucket;
export const getBucketItemVariants = (store: StoreType) => store.bucket.bucketItemVariants;

export default bucketReducer;
