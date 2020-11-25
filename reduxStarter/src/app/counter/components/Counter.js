import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../_common/components/CounterControl';
import CounterOutput from '../../_common/components/CounterOutput';
import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../../../constants/keys'

const Counter = ({counter, changeCounter, testEffect }) => {

  // const [counter1, setCounter1] = useState(0);
  // console.log(counter1);

  useEffect(() => {
    testEffect();
  },[]);

  return (
      <div>
          <CounterOutput value={counter} />
          <CounterControl label={INCREMENT} clicked={() => {
              changeCounter(INCREMENT)
          }} />
        <CounterControl label={DECREMENT} clicked={() => {
              changeCounter(DECREMENT)
          }} />
        <CounterControl label={ADD} clicked={() => {
              changeCounter(ADD)
          }} />
        <CounterControl label={SUBTRACT} clicked={() => {
              changeCounter(SUBTRACT)
          }} />
          <hr />

      </div>
  );
}

export default Counter;
