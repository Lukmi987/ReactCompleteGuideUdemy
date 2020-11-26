import { combineReducers } from 'redux';

import counter from './app/counter/reducers/counter';
import userForm from './app/users/reducers/userForm';
import userList from "./app/users/reducers/userList";

//define how the store is going to look like
const rootReducer = combineReducers({
  counter,
  userForm,
  userList,
});

export default rootReducer;
