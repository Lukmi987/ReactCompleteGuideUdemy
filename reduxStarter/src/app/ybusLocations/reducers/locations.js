import { SET_LOCATIONS } from "../../../constants/actionTypes";

const initialState = null;

export default (state = initialState, action) => (
    action.type === SET_LOCATIONS ? action.locations : state
);

