import { takeLatest } from 'redux-saga/effects';
import { loginUser } from "./loginUser";
import { logOut } from "./logOut";
import {LOG_USER_OUT, LOGIN_USER} from "../../../constants/actionTypes";

//listen for CHANGE_COUNTER
const counterSagas = [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(LOG_USER_OUT, logOut),
];

export default counterSagas;
