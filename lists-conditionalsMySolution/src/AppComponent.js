import React from 'react';

const appComponent = (props) => {
  return(
    <div className="AppComponent">
      <input type="text" onChange={props.inputLength} />
      <p>{props.length}</p>
    </div>
  )
};

export default appComponent;
