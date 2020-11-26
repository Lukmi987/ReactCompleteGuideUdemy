import { put } from 'redux-saga/effects';
import { STORE_USER_LIST } from "../../../constants/actionTypes";
import axios from 'axios';
import {loadUserData} from "../../../helpers/userHelpers";

export function* fetchUserList() {

    try {
        const response = yield axios.get('https://react-hooks-update-4307d.firebaseio.com/ingredients.json');
        const responseData = response.data;
        if(responseData) {
            const entries = Object.entries(responseData);
            const users = entries.reduce(loadUserData, []);
            yield put({type: STORE_USER_LIST, userList: users});
        }
    } catch (e) {
        console.log(e)
    }
}




