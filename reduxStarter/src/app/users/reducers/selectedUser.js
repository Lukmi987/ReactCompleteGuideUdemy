import { SET_SELECTED_USER } from "../../../constants/actionTypes";

const initialState = null;

export default (state = initialState, action) => (
    action.type === SET_SELECTED_USER ? action.user : state
);

