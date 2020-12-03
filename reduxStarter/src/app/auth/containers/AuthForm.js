import { connect } from 'react-redux';
import { getCounterForm } from '../../../selectors/counterSelectors';
import { processLoginForm } from '../actions';
import AuthForm from "../components/AuthForm";

const mapStateToProps = state => ({
    counterForm: getCounterForm(state)
});

const mapDispatchToProps = {
    processLoginForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);