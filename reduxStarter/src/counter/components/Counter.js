import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../../constants/keys'

const Counter = ({counter, changeCounter}) => {
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
