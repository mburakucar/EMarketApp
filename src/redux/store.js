import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from "./reducers";

let sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  sagaMiddleware,
];

export default configureStore({
  reducer: reducers,
  middleware,
});

sagaMiddleware.run(rootSaga);
