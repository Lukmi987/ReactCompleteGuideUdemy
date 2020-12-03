import { createSelector } from 'reselect';

export const getLocations = createSelector(
  (state) => state,
  (state) => state.locations,
);


