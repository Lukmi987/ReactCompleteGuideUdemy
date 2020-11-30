import { createSelector } from 'reselect';

export const getUsers = createSelector(
    (state) => state,
    (state) => state.users,
);

export const getUserForm = createSelector(
    getUsers,
    (users) => users.userForm,
);

export const getUserList = createSelector(
    getUsers,
    (users) => users.userList,
);

export const getSelectedUser = createSelector(
     getUsers,
    (users) => users.selectedUser,
);


