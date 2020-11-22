import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr />
                <button>Store Result</button>
                <ul>
                  <li></li>
                </ul>
            </div>
        );
    }
}
//it store a func which expects the state stored in redux as the input a rturns a js object which is a map of prop names and slices
// of the state stored in redux
const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
}

//what kind of actions i want to dispatch in this container
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddCounter: () => dispatch({type: 'ADD', val: 5}),
    onSubCounter: () => dispatch({type: 'SUBTRUCT', val: 5}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})
  };
}

 //if we have a container which only needs to dispatch actions but doesn't need the slice of the state we pass null as first arg to connect
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
