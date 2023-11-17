import { all } from "redux-saga/effects";

import authSaga from "./authSaga";
import coordinatesSaga from "./coordinatesSaga";

export default function* rootSaga() {
  yield all([...authSaga, ...coordinatesSaga]);
}
