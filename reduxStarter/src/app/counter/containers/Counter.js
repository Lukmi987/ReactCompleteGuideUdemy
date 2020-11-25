import { connect } from 'react-redux';
import { changeCounter, testEffect } from '../actions';
import { getCounter} from '../../../selectors/counterSelectors';
import Counter from '../components/Counter';

const mapStateToProps = state => ({
    counter: getCounter(state),
});

//my redux actions
const mapDispatchToProps = {
  changeCounter,
  testEffect,
};
 //if we have a container which only needs to dispatch actions but doesn't need the slice of the state we pass null as first arg to connect
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
