import { connect } from 'react-redux';
import { getCounterForm } from '../../../selectors/counterSelectors';
import {saveCounterForm} from '../actions';
import CounterForm from "../components/CounterForm";

const mapStateToProps = state => ({
    counterForm: getCounterForm(state)
});

const mapDispatchToProps = {
    saveCounterForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterForm);