import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import CounterControl from '../../_common/components/CounterControl';
import CounterOutput from '../../_common/components/CounterOutput';
import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../../../constants/keys';
import { changeCounter} from '../actions';
import useCounter from "./useCounter";

const Counter = ({testEffect }) => {
  const {addCounter, counter, decrementCounter, incrementCounter, subtractCounter} = useCounter()

  // const [counter1, setCounter1] = useState(0);
  // console.log(counter1);

  useEffect(() => {
    testEffect();
  },[]);

  return (
      <div>
          <CounterOutput value={counter} />
          <CounterControl label={INCREMENT} clicked={() => {
              incrementCounter()
          }} />
        <CounterControl label={DECREMENT} clicked={() => {
              dispatch(changeCounter(DECREMENT))
          }} />
        <CounterControl label={ADD} clicked={() => {
              dispatch(changeCounter(ADD))
          }} />
        <CounterControl label={SUBTRACT} clicked={() => {
              dispatch(changeCounter(SUBTRACT))
          }} />
          <hr />

      </div>
  );
}

export default Counter;
