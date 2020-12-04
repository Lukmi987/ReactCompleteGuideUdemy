import { createSelector } from 'reselect';

export const getUserAuthInfo = createSelector(
  (state) => state,
  (state) => state.authentication.userAuthInfo,
);




