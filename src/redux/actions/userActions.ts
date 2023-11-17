import { Loaders } from "redux/types/loaders";

export const GET_USER_DATA_SERVER = "GET_USER_DATA_SERVER";
export const GET_USER_QUESTS_SERVER = "GET_USER_QUESTS_SERVER";

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

export const getUserQuestsServer = () => ({
  type: GET_USER_QUESTS_SERVER,
  payload: {
    request: {
      method: "GET",
      url: "/self/quests",
    },
    loader: Loaders.quests,
  },
});
