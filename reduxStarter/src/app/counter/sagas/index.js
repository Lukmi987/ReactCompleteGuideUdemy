import { takeLatest } from 'redux-saga/effects';
import { changeCounter } from './changeCounter';
import { saveCounterForm } from './saveCounterForm';

import { testEffect } from './testEffect';
import {CHANGE_COUNTER, SET_COUNTER_FORM, TEST_EFFECT} from "../../../constants/actionTypes";


//listen for CHANGE_COUNTER
const counterSagas = [
  takeLatest(CHANGE_COUNTER, changeCounter),
  takeLatest(TEST_EFFECT, testEffect),
  takeLatest(SET_COUNTER_FORM,saveCounterForm)
];

export default counterSagas;
