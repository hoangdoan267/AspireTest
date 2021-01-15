import {put, take, takeLatest, call} from 'redux-saga/effects';
import {ActionTypes} from '../helper/Constants';
import axios from 'axios';

function fetchAccountInformation() {
  return axios({
    method: 'GET',
    url: 'https://api.jsonbin.io/b/6001cb9ef98f6e35d5fcf053/2',
  });
}

function* getAccountInformation() {
  try {
    const response = yield call(fetchAccountInformation);
    if (response.status === 200) {
      yield put({
        type: ActionTypes.UPDATE_CARD_INFORMATION,
        value: response.data.cardInformation,
      });
      yield put({
        type: ActionTypes.UPDATE_BALANCE,
        value: response.data.balance,
      });
    }
  } catch (error) {}
}

function* updateLimitPayment(value: number) {
  try {
    yield put({
      type: ActionTypes.UPDATE_LIMIT_PAYMENT,
      value,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateLimitPayment() {
  yield take(ActionTypes.UPDATE_LIMIT_PAYMENT, updateLimitPayment);
}

export function* watchGetAccountInformation() {
  yield takeLatest(ActionTypes.GET_ACCOUNT_INFORMATION, getAccountInformation);
}
