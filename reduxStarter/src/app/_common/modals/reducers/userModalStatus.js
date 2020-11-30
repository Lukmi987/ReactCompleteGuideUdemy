import {SET_USER_MODAL_STATUS} from "../../../../constants/actionTypes";

const initialState = false;

export default (state = initialState, action) => (
    action.type === SET_USER_MODAL_STATUS ? action.status : state
);