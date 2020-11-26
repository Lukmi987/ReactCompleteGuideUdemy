import { put } from 'redux-saga/effects';
import {SET_COUNTER_FORM} from "../../../constants/actionTypes";

export function* saveCounterForm(action) {
    const counterFormData = action.counterFormData;
    const preparedData = { ...counterFormData, version: 'verze 0'};

    yield put({ type: SET_COUNTER_FORM, action: preparedData });
}