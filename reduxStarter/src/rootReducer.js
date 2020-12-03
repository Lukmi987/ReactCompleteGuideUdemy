import { combineReducers } from 'redux';

import counter from './app/counter/reducers/counter';
import userForm from './app/users/reducers/userForm';
import userList from "./app/users/reducers/userList";
import userModalStatus from "./app/_common/modals/reducers/userModalStatus";
import selectedUser from "./app/users/reducers/selectedUser";
import locations from "./app/ybusLocations/reducers/locations";

//define how the store is going to look like

const users = combineReducers({
    userForm,
    userList,
    selectedUser,
});

const modals = combineReducers({
    userModalStatus,
});

const rootReducer = combineReducers({
  counter,
  users,
  modals,
  locations,
});

export default rootReducer;
