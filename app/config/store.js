import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "../reducers/";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaWiddleware = createSagaMiddleware();
const middleware = [sagaWiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaWiddleware.run(rootSaga);

export default store;
