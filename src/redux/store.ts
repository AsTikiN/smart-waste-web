import axios from "axios";
import logger from "redux-logger";
import { multiClientMiddleware } from "redux-axios-middleware";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import options from "./axiosConfig";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";

const clients = {
  default: {
    client: axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      responseType: "json",
    }),
  },
  imageHost: {
    client: axios.create({
      baseURL: "https://api.imgbb.com/1",
      responseType: "json",
    }),
  },
};

const makeStore: any = () => {
  const sagaMiddleware = createSagaMiddleware();
  const { persistStore, persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "root",
    // whitelist: ["auth", "app"],
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store: any = createStore<any, any, any, any>(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(multiClientMiddleware(clients, options), sagaMiddleware)),
  );

  store.__persistor = persistStore(store);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const store = makeStore();

export default store;
