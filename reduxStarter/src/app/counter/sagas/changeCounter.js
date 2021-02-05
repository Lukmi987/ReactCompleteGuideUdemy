import { put, select } from 'redux-saga/effects';
import {getCounter} from "../../../selectors/counterSelectors";
import {ADD, DECREMENT, INCREMENT, SUBTRACT} from "../../../constants/keys";
import {SET_COUNTER} from "../../../constants/actionTypes";


export function* changeCounter(action) {
  console.log('action',action)

  const currentCounter = yield select(getCounter);
  let result;

    if(action.operationType === INCREMENT) {
      result = currentCounter + 1;
    }
    if(action.operationType === DECREMENT) {
      result = currentCounter - 1;
    }
    if(action.operationType === ADD) {
      result = currentCounter + 5;
    }
    if(action.operationType === SUBTRACT) {
      result = currentCounter - 5;
    }

    yield put({ type: SET_COUNTER, counter: result });

  // second call  yield changeTest();
}

// export function* changeTest(action) {
//   const operationType = action.operationType;
//   const currentCounter = yield select(getCounter);
//   let result;
//
//     if(action.operationType === INCREMENT) {
//       result = currentCounter + 1;
//     }
//     if(action.operationType === DECREMENT) {
//       result = currentCounter - 1;
//     }
//     if(action.operationType === ADD) {
//       result = currentCounter + 5;
//     }
//     if(action.operationType === SUBTRACT) {
//       result = currentCounter - 5;
//     }
//
//     yield put({ type: SET_COUNTER, counter: result });
// }
