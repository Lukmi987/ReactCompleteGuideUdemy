import { put, select } from 'redux-saga/effects';
import { getUserAuthInfo } from "../../../selectors/authSelectors";
import {SET_AUTH_INFO} from "../../../constants/actionTypes";

export function* logOut() {
    const res =yield select(getUserAuthInfo);
    const updateUserAuthInfo = {...res}
    localStorage.removeItem('token');
    updateUserAuthInfo.idToken = null;
    updateUserAuthInfo.userId = null;
    yield put({type: SET_AUTH_INFO, loginAuthInfo: updateUserAuthInfo });
}

