import {STORE_USER_FORM} from "../../../constants/actionTypes";

const initialState = null;

export default (state = initialState, action) => (
    action.type === STORE_USER_FORM ? action.counterFormData : state
);

