import {SET_COUNTER_FORM} from "../../../constants/actionTypes";

const initialState = null;

export default (state = initialState, action) => (
    action.type === SET_COUNTER_FORM ? action.counterFormData : state
);

