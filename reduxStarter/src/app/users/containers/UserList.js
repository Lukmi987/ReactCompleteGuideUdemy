import { connect } from 'react-redux';
import { getUserList } from '../../../selectors/usersSelector';
import {fetchUserList, removeUser} from '../actions';
import UserList from "../components/UserList";

const mapStateToProps = state => ({
    userList: getUserList(state)
});

const mapDispatchToProps = {
    fetchUserList,
    removeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);