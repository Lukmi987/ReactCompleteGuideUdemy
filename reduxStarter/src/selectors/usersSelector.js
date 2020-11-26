import { createSelector } from 'reselect';

export const getUserList = createSelector(
    (state) => state,
    (state) => state.userList,
);