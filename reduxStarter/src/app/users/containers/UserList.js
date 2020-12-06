import { connect } from 'react-redux';
import { getUserList } from '../../../selectors/usersSelectors';
import { getUserAuthInfo } from "../../../selectors/authSelectors";
import {fetchUserList, removeUser, editUser, setSelectedUser } from '../actions';
import {setUserModalStatus} from "../../_common/modals/actions";
import UserList from "../components/UserList";

const mapStateToProps = state => ({
    userList: getUserList(state),
    userAuthInfo: getUserAuthInfo(state),
});

const mapDispatchToProps = {
    fetchUserList,
    removeUser,
    editUser,
    setUserModalStatus,
    setSelectedUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
