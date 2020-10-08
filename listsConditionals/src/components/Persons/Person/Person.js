import React from 'react';
import styled from 'styled-components';

import './Person.css';

const person = ( props ) => {
  console.log('[Person.js] rendering ...');
    return (

          <div>
            <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
