import { put, select } from 'redux-saga/effects';
import {STORE_USER_LIST} from "../../../constants/actionTypes";
import axios from 'axios';
import {deleteUser} from "../../../helpers/userHelpers";
import {getUserList} from "../../../selectors/usersSelector";

export function* editUser(action) {
    const {userId, fname, lname} = action;

    const preparedData = {fname, lname };

    try {
        //  const response = yield axios.put(`https://react-hooks-update-4307d.firebaseio.com/ingredients/${userId}.json`, preparedData);
          const state =  yield select();
          const updatedUserList= updateUser(userId,state.userList, fname, lname);
          yield put({type: STORE_USER_LIST, userList: updatedUserList});

    } catch (e) {
        console.log(e)
    }
}

function updateUser(userId, userList, fname, lname) {
  const copyOfUserList = [...userList];

  //console.log(copyOfUserList);
  const index = copyOfUserList.findIndex(user => user.id === userId);
  copyOfUserList[0].fname = fname;
  copyOfUserList[0].lname = lname;

  return copyOfUserList;
}
