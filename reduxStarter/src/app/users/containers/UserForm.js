import { connect } from 'react-redux';
import { getCounterForm } from '../../../selectors/counterSelectors';
import { processUserForm } from '../actions';
import UserForm from "../components/UserForm";

const mapStateToProps = state => ({
    counterForm: getCounterForm(state)
});

const mapDispatchToProps = {
    processUserForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);