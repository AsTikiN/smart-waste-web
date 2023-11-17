import { failAction, successAction } from "lib/actionTypes";
import { toast } from "react-toastify";
import { put, takeEvery } from "redux-saga/effects";
import { navigateTo } from "redux/actions/appActions";
import { GET_CATEGORIES_COORDINATES_SERVER } from "redux/actions/coordinatesActions";
import { Routes, pages } from "routes/types";

const coordinatesSaga = [
  takeEvery(successAction(GET_CATEGORIES_COORDINATES_SERVER), handleGetBinsSuccess),
  takeEvery(failAction(GET_CATEGORIES_COORDINATES_SERVER), handleGetBinsFail),
];

function* handleGetBinsSuccess() {
  console.log("02002");
  yield put(navigateTo({ link: pages[Routes.map]() }));
}

function* handleGetBinsFail() {
  yield toast.error("Error while getting points");
}

export default coordinatesSaga;
