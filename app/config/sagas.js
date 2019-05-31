import {
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CONVERSION_ERROR,
  CONVERSION_RESULT
} from "../actions/currencies";

import { takeEvery, call, put, select } from "redux-saga/effects";

export const getLatestRate = currency =>
  fetch(`http://fixer.handlebarlabs.com/latest?base=${currency}`);

const fetchLatestConversionRates = function*(action) {
  try {
    let { currency } = action;
    if (currency === undefined)
      currency = yield select(state => state.currencies.baseCurrency);
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();
    if (result.error)
      yield put({ type: CONVERSION_ERROR, error: result.error });
    else yield put({ type: CONVERSION_RESULT, result });
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, result });
  }
};

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
