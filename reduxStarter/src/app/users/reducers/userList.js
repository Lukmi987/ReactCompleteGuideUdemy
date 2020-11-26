import { STORE_USER_LIST} from "../../../constants/actionTypes";

const initialState = [];

export default (state = initialState, action) => (
    action.type === STORE_USER_LIST ? action.userList : state
);

