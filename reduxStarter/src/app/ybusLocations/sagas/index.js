import { takeLatest } from 'redux-saga/effects';
import { fetchLocations } from "./fetchLocations";
import {FETCH_LOCATIONS} from "../../../constants/actionTypes";

const counterSagas = [
  takeLatest(FETCH_LOCATIONS, fetchLocations),
];

export default counterSagas;
