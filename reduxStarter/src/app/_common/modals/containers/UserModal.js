import { connect } from 'react-redux';
import { setUserModalStatus } from '../actions';
import UserModal from "../components/UserModal";
import {getUserModalStatus} from "../../../../selectors/modalSelectors";
import {getSelectedUser} from "../../../../selectors/usersSelectors";
import {editUser} from "../../../users/actions";

const mapStateToProps = state => ({
    status: getUserModalStatus(state),
    selectedUser: getSelectedUser(state),
});

const mapDispatchToProps = {
    setUserModalStatus,
    editUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
