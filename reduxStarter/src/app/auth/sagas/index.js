import { takeLatest } from 'redux-saga/effects';
import { loginUser } from "./loginUser";
import {LOGIN_USER} from "../../../constants/actionTypes";

//listen for CHANGE_COUNTER
const counterSagas = [
  takeLatest(LOGIN_USER, loginUser),
];

export default counterSagas;
