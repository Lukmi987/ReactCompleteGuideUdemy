import {createSelector} from "reselect";

export const getModals = createSelector(
    (state) => state,
    (state) => state.modals,
);

export const getUserModalStatus = createSelector(
    getModals,
    (modals) => modals.userModalStatus,
);