import React from 'react';

//higher order Component
const withClass = props => (
  <div className={props.classes}>{props.children}</div>
);

export default withClass;
