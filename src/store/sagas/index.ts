import { all } from 'redux-saga/effects';
import { userDetailSaga } from './userDetailSaga';
import { usersSaga } from './usersSaga';

export function* rootSaga() {
  yield all([
    usersSaga(),
    userDetailSaga()
  ]);
}
