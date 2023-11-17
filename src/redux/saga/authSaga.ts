import { failAction, successAction } from "lib/actionTypes";
import { toast } from "react-toastify";
import { put, takeEvery } from "redux-saga/effects";
import { navigateTo } from "redux/actions/appActions";
import { CREATE_USER_SERVER, LOGIN_USER_SERVER } from "redux/actions/authActions";
import { Routes, pages } from "routes/types";

const authSaga = [
  takeEvery(successAction(LOGIN_USER_SERVER), handleLoginSuccess),
  takeEvery(failAction(LOGIN_USER_SERVER), handleLoginFail),

  takeEvery(successAction(CREATE_USER_SERVER), handleRegisterSuccess),
  takeEvery(failAction(CREATE_USER_SERVER), handleRegisterFail),
];

function* handleLoginSuccess() {
  yield toast.success("Successful login");
  yield put(navigateTo({ link: pages[Routes.profile]() }));
}

function* handleLoginFail() {
  yield toast.error("Error while login");
}

function* handleRegisterSuccess() {
  yield toast.success("Successful login");
  yield put(navigateTo({ link: pages[Routes.profile]() }));
}

function* handleRegisterFail() {
  yield toast.error("Error while login");
}

export default authSaga;
