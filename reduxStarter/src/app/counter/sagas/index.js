import { takeLatest } from 'redux-saga/effects';
import { changeCounter } from './changeCounter';
import { testEffect } from './testEffect';
import {CHANGE_COUNTER, TEST_EFFECT} from "../../../constants/actionTypes";

//listen for CHANGE_COUNTER
const counterSagas = [
  takeLatest(CHANGE_COUNTER, changeCounter),
  takeLatest(TEST_EFFECT, testEffect),
];

export default counterSagas;
