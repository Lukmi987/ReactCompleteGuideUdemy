import { put, select } from 'redux-saga/effects';
import {FETCH_USER_LIST, STORE_USER_LIST} from "../../../constants/actionTypes";
import { getUserAuthInfo } from "../../../selectors/authSelectors";
import axios from 'axios';
import {deleteUser} from "../../../helpers/userHelpers";
import {getUserList} from "../../../selectors/usersSelectors";

export function* editUser(action) {
    const {id, fname, lname} = action.user;

    const preparedData = {fname, lname };
    console.log('v edit user saga', action);
    try {
          const userAuthInfo = yield select(getUserAuthInfo);
          const response = yield axios.put(`https://react-hooks-update-4307d.firebaseio.com/ingredients/${id}.json?auth=` + userAuthInfo.idToken, preparedData);
          yield put({type: FETCH_USER_LIST });
    } catch (e) {
        console.log(e)
    }
}

// function updateUser(userId, userList, fname, lname) {
//   const copyOfUserList = [...userList];
//
//   //console.log(copyOfUserList);
//   const index = copyOfUserList.findIndex(user => user.id === userId);
//   copyOfUserList[0].fname = fname;
//   copyOfUserList[0].lname = lname;
//
//   return copyOfUserList;
// }
