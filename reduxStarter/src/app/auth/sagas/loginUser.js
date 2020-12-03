import { put, select } from 'redux-saga/effects';
import axios from 'axios';

export function* loginUser(action) {
    const { email, pwd, isSignup } = action.user;
    const preparedData = {email, password: pwd, returnSecureToken: true };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDHgyJbZWnZHfyECzhyd8ncmPNWevtSDJg';
    
    if (!isSignup) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDHgyJbZWnZHfyECzhyd8ncmPNWevtSDJg';
    }
    try {
          const response = yield axios.post(url,preparedData);
      } catch (e) {
        console.log(e);
        //dispatch(authFail())
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
