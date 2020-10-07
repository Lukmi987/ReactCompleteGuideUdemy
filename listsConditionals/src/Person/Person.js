import React from 'react';
import styled from 'styled-components';


// import './Person.css';

// Every method from styled will return react component , just save result our method call
const StyleDiv = styled.div`
           width: 60%;
           margin: 16px auto;
           border: 1px solid #eee;
           box-shadow: 0 2px 3px #ccc;
           padding: 16px;
           text-align: center;
         `;

const person = ( props ) => {
  const rnd = Math.random();
    if(rnd > 0.7) {
      throw new Error('Something went wrong');
    }
    
    return (
          <StyleDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyleDiv>
    )
};

export default person;
