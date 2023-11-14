import { Loaders } from "redux/types/loaders";

export const GET_BINS_COORDINATES = "GET_BINS_COORDINATES";

export const getBinsCoordinatesServer = () => ({
  type: GET_BINS_COORDINATES,
  payload: {
    request: {
      method: "GET",
      url: "points",
    },
    loader: Loaders.bins,
  },
});
