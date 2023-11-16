import { Loaders } from "redux/types/loaders";

export const GET_USER_DATA_SERVER = "GET_USER_DATA_SERVER";

export const getUserDataServer = () => ({
  type: GET_USER_DATA_SERVER,
  payload: {
    request: {
      method: "GET",
      url: "/self",
    },
    loader: Loaders.self,
  },
});
