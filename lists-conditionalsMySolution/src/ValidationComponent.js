import React from 'react'

const validationComponent = (props) => {

    let validationMessage = 'Text long enough';
    if(props.input <= 5){
      validationMessage = 'Text short enough';
    }
return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
}

export default validationComponent;
