import {all, fork} from 'redux-saga/effects';
import {
  watchUpdateLimitPayment,
  watchGetAccountInformation,
} from './accountSaga';

export function* rootSaga() {
  yield all([fork(watchGetAccountInformation), fork(watchUpdateLimitPayment)]);
}
