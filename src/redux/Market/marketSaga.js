import { all, put, takeLatest, call } from "redux-saga/effects";
import {
  setLoading,
  setData,
  startGetData,
  setFilterLoading,
  setFilters,
  startGetFilters,
} from "./marketActions";
import { handleGetData, handleGetFilters } from "./marketHelpers";

function* getData({ payload }) {
  try {
    const data = yield handleGetData(payload);
    if (!data) {
      yield put(setLoading(false));
    } else {
      yield put(setData(data));
    }
  } catch (e) {
    console.log("error");
    yield put(setLoading(false));
  }
}

export function* onGetData() {
  yield takeLatest(startGetData.toString(), getData);
}

function* getFilters({ payload }) {
  try {
    const data = yield handleGetFilters();
    if (!data) {
      console.log("error");
      yield put(setFilterLoading(false));
    } else {
      yield put(setFilters(data));
    }
  } catch (e) {
    console.log("error");
    yield put(setFilterLoading(false));
  }
}

export function* onGetFilters() {
  yield takeLatest(startGetFilters.toString(), getFilters);
}

export default function* marketSagas() {
  yield all([call(onGetData), call(onGetFilters)]);
}
