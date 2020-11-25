import {SET_COUNTER} from "../../../constants/actionTypes";

const initialState = 0;

export default (state = initialState, action) => (
  action.type === SET_COUNTER ? action.counter : state
);
