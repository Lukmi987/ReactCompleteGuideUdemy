import {SET_AUTH_INFO, UNSET_LOGGED_USER } from "../../../constants/actionTypes";

const initialState = null;

export default (state = initialState, action) => (
    action.type === SET_AUTH_INFO ? action.loginAuthInfo : state
);


//They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
//kazdy reducer je property ve storu,
//co kdyz chci delat vice akci s jednou property ve storu ? pro kazdou akci budu delat nov
// export const unsetAuthInfo =  (state = null,) => (
//     action.type === 'UNSET_LOGGED_USER' ? action.loginAuthInfo : state
// );

// A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function. Some common kinds of side effects are things like:
//
//     Logging a value to the console
// Saving a file
// Setting an async timer
// Making an AJAX HTTP request
// Modifying some state that exists outside of a function, or mutating arguments to a function