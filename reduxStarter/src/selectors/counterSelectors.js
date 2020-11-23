import { createSelector } from 'reselect';

export const getCounter = createSelector(
  (state) => state,
  (state) => state.counter,
);
