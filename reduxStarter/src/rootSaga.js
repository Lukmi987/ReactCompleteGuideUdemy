import { all } from 'redux-saga/effects';
import counterSagas from "./app/counter/sagas";
import usersSagas from "./app/users/sagas";

export default function* rootSaga() {
  yield all([
    ...counterSagas,
    ...usersSagas,
  ]);
}
