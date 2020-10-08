import React from 'react';

import Person from './Person/Person';
//we do not have jsx we can ommit => ()
const persons = (props) =>  {
    console.log('[Persons.js] rendering ..');
 return props.persons.map((person, index) => {
  //We got our persons which we expect to receive on our props and then we still map persons into array of JSX elements

    return <Person
      clicked={() => props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={(event) => props.changed(event, person.id)} />
  });
};
  export default persons;
