import { all, call } from "redux-saga/effects";

import marketSaga from "./Market/marketSaga";

export default function* rootSaga() {
  yield all([call(marketSaga)]);
}
