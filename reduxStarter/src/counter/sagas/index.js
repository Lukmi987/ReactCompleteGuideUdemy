import { takeLatest } from 'redux-saga/effects';
import {
  CHANGE_COUNTER,
} from '../../constants/actionTypes';
import { changeCounter } from './changeCounter';


//listen for CHANGE_COUNTER
const counterSagas = [
  takeLatest(CHANGE_COUNTER, changeCounter),
];

export default counterSagas;
