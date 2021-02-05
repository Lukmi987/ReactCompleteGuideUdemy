import React, { useEffect, useState } from 'react';
import CounterControl from '../../_common/components/CounterControl';
import CounterOutput from '../../_common/components/CounterOutput';
import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../../../constants/keys';
import useCounter from "./useCounter";
import {changeCounter} from "../actions";

const Counter = ({testEffect, changeCounter }) => {
  const {addCounter, counter, decrementCounter, incrementCounter, subtractCounter } = useCounter()

  // const [counter1, setCounter1] = useState(0);
  // console.log(counter1);

  useEffect(() => {
    testEffect();
  },[]);

  return (
      <div>
          <CounterOutput value={counter} />
          <CounterControl label={INCREMENT} clicked={() => {
              changeCounter("INCREMENT");
          }} />
        <CounterControl label={DECREMENT} clicked={() => {
              decrementCounter()
          }} />
        <CounterControl label={ADD} clicked={() => {
              addCounter()
          }} />
        <CounterControl label={SUBTRACT} clicked={() => {
              subtractCounter()
          }} />
          <hr />
      </div>
  );
}

export default Counter;
