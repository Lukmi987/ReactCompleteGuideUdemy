import { all } from 'redux-saga/effects';
import counterSagas from "./app/counter/sagas";

export default function* rootSaga() {
  yield all([
    ...counterSagas, 
  ]);
}
