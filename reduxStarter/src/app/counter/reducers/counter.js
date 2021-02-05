import {SET_COUNTER} from "../../../constants/actionTypes";

const initialState = 0;

export default (state = initialState, {type, counter}) => (
  type === SET_COUNTER ? counter : state
);
