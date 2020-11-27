import { takeLatest } from 'redux-saga/effects';
import { processUserForm } from './processUserForm';
import {FETCH_USER_LIST, PROCESS_USER_FORM, REMOVE_USER} from "../../../constants/actionTypes";
import {fetchUserList} from "./fetchUserList";
import { removeUser } from "./removeUser";

//listen for CHANGE_COUNTER
const counterSagas = [
  takeLatest(PROCESS_USER_FORM, processUserForm),
  takeLatest(FETCH_USER_LIST, fetchUserList),
  takeLatest(REMOVE_USER, removeUser),
];

export default counterSagas;
