import { takeLatest } from 'redux-saga/effects';
import { processUserForm } from './processUserForm';
import {FETCH_USER_LIST, PROCESS_USER_FORM} from "../../../constants/actionTypes";
import {fetchUserList} from "./fetchUserList";

//listen for CHANGE_COUNTER
const counterSagas = [
  takeLatest(PROCESS_USER_FORM, processUserForm),
  takeLatest(FETCH_USER_LIST, fetchUserList),
];

export default counterSagas;
