import { connect } from 'react-redux';
import { getExpireTime } from '../../../selectors/counterSelectors';
import {logOut, processLoginForm} from '../actions';
import AuthForm from "../components/AuthForm";

const mapStateToProps = state => ({
   // expiresToken: getExpireTime(state)
});

const mapDispatchToProps = {
    processLoginForm,
    logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);