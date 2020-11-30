import { put, select } from 'redux-saga/effects';
import {FETCH_USER_LIST, STORE_USER_LIST} from "../../../constants/actionTypes";
import axios from 'axios';
import {deleteUser} from "../../../helpers/userHelpers";
import {getUserList} from "../../../selectors/usersSelectors";
import {fetchUserList} from "./fetchUserList";

export function* removeUser(action) {
    const {userId} = action;
    try {
         const response = yield axios.delete(`https://react-hooks-update-4307d.firebaseio.com/ingredients/${userId}.json`);
         yield put({type: FETCH_USER_LIST});
         // const state =  yield select();
         //shallow copy not good, deep copy better
         //const userList = {...state.userList};
         //const updatedUserList= deleteUser(userId,state.userList);
    } catch (e) {
        console.log(e)
    }
}
