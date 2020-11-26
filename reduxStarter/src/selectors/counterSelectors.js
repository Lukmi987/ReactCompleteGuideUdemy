import { createSelector } from 'reselect';

export const getCounter = createSelector(
  (state) => state,
  (state) => state.counter,
);

export const getCounterForm = createSelector(
    (state) => state,
    (state) => state.counterForm,
);

