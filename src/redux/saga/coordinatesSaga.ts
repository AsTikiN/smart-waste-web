import { failAction, successAction } from "lib/actionTypes";
import { toast } from "react-toastify";
import { put, takeEvery } from "redux-saga/effects";
import { navigateTo } from "redux/actions/appActions";
import { DROP_BUCKET_SERVER, setBucket } from "redux/actions/bucketActions";
import { GET_CATEGORIES_COORDINATES_SERVER } from "redux/actions/coordinatesActions";
import { Routes, pages } from "routes/types";

const coordinatesSaga = [
  takeEvery(successAction(GET_CATEGORIES_COORDINATES_SERVER), handleGetBinsSuccess),
  takeEvery(failAction(GET_CATEGORIES_COORDINATES_SERVER), handleGetBinsFail),

  takeEvery(successAction(DROP_BUCKET_SERVER), handleDropBucketSuccess),
  takeEvery(failAction(DROP_BUCKET_SERVER), handleDropBucketFail),
];

function* handleGetBinsSuccess() {
  yield put(navigateTo({ link: pages[Routes.map]() }));
}

function* handleGetBinsFail() {
  yield toast.error("Error while getting points");
}

function* handleDropBucketSuccess() {
  yield toast.success("Thanks. Bucket successfuly recycled");
  yield put(setBucket({ bucket: [] }));
}

function* handleDropBucketFail() {
  yield toast.error("Error while dropping bucket. Try again");
}

export default coordinatesSaga;
