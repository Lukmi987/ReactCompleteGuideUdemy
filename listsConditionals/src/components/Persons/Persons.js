import React, {Component} from 'react';

import Person from './Person/Person';
//we do not have jsx we can ommit => ()
class Persons extends Component {
  static getDerivedStateFromProps(props,state){
      console.log('[Persons.js] getDerivedStateFromProps');
      return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    //we have to return true or false if  react should continue
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
  }

  // run when we are done with all the updating
  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }

  render(){
    console.log('[Persons.js] rendering ..');
 return  this.props.persons.map((person, index) => {
  //We got our persons which we expect to receive on our props and then we still map persons into array of JSX elements
    return (<Person
      clicked={() => this.props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)} />
      )
    });
  }
};
  export default Persons;
