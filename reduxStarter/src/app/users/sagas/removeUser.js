import { put, select } from 'redux-saga/effects';
import {STORE_USER_LIST} from "../../../constants/actionTypes";
import axios from 'axios';
import {deleteUser} from "../../../helpers/userHelpers";
import {getUserList} from "../../../selectors/usersSelector";

export function* removeUser(action) {
    const {userId} = action;

    try {
         const response = yield axios.delete(`https://react-hooks-update-4307d.firebaseio.com/ingredients/${userId}.json`);
         const state =  yield select()
         const updatedUserList= deleteUser(userId,state.userList);
         yield put({type: STORE_USER_LIST, userList: updatedUserList});
        // const responseData = response.data;
        // if(responseData) {
        //     const entries = Object.entries(responseData);
        //     const users = entries.reduce(loadUserData, []);
        //     yield put({type: STORE_USER_LIST, userList: users});
        // }
    } catch (e) {
        console.log(e)
    }
}