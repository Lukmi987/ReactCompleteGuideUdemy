import { put } from 'redux-saga/effects';
import {FETCH_USER_LIST, STORE_USER_FORM} from "../../../constants/actionTypes";
import axios from 'axios';

export function* processUserForm(action) {
    const counterFormData = action.counterFormData;
    const preparedData = { ...counterFormData, version: 'verze 0'};

    try {
        const response = yield axios.post('https://react-hooks-update-4307d.firebaseio.com/ingredients.json', preparedData);
        console.log(response);
        yield put({ type: STORE_USER_FORM, counterFormData: preparedData });
        yield put({type: FETCH_USER_LIST});
    } catch(e){
        console.log(e);
    }
}
