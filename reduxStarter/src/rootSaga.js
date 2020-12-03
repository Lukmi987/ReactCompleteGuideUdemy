import { all } from 'redux-saga/effects';
import counterSagas from "./app/counter/sagas";
import usersSagas from "./app/users/sagas";
import authSagas from "./app/auth/sagas";
import locationsSagas from "./app/ybusLocations/sagas"

export default function* rootSaga() {
  yield all([
    ...counterSagas,
    ...usersSagas,
    ...authSagas,
    ...locationsSagas,
  ]);
}
