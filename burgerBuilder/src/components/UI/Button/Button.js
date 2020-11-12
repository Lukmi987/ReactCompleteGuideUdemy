import React from 'react';
import classes from './Button.css';

//classes[props.btnType] what we pass needs to be a string
const button = (props) => (
  <button
      className={[classes.Button, classes[props.btnType]].join('')}
      onClick={props.clicked}>{props.children}</button>
);

export default button;
