import { combineReducers } from 'redux';

import counter from './app/counter/reducers/counter';
import userForm from './app/users/reducers/userForm';
import userList from "./app/users/reducers/userList";
import userModalStatus from "./app/_common/modals/reducers/userModalStatus";
import selectedUser from "./app/users/reducers/selectedUser";
import locations from "./app/ybusLocations/reducers/locations";
import userAuthInfo from "./app/auth/reducers/auth";


//define how the store is going to look like

const users = combineReducers({
    userForm,
    userList,
    selectedUser,
});

const modals = combineReducers({
    userModalStatus,
});

const authentication = combineReducers({
    userAuthInfo,
})


const rootReducer = combineReducers({
  counter,
  users,
  modals,
  locations,
  authentication,
});

export default rootReducer;
