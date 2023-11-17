import { Loaders } from "redux/types/loaders";

export const GET_BINS_COORDINATES = "GET_BINS_COORDINATES";
export const GET_CATEGORIES_COORDINATES_SERVER = "GET_CATEGORIES_COORDINATES_SERVER";

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

export const getCategoriesCoordinatesServer = (categories: string[]) => ({
  type: GET_CATEGORIES_COORDINATES_SERVER,
  payload: {
    request: {
      method: "GET",
      url: `points?${categories.join("&")}`,
    },
    loader: Loaders.coordinatedBind,
  },
});
