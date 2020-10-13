import React, {PureComponent} from 'react';
// PureComponent just a normal component that already implements shouldComponentUpdate with a complete props check
import Person from './Person/Person';
//we do not have jsx we can ommit => ()
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props,state){
  //     console.log('[Persons.js] getDerivedStateFromProps');
  //     return state;
  // }


/// !! When we update in input field updating process start here coz we pass here the updated state a lifecycle begin
  // shouldComponentUpdate(nextProps, nextState){
  //   //we have to return true or false if  react should continue
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   //what it compares are pointers actually , that's why we should defined changes dynamically creating copies, coz objects and arrays are referenced type in JS
  //   if (nextProps.persons !== this.props.persons){
  //     return true;
  //   }else{
  //       return false;
  //     }
  //
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    // snapshot is a data package which we then recieve in componentDidUpdate, to save some state before the update such as scroll position
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot'};
  }

  // run when we are done with all the updating, when we need to fetch a new data from the server
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidMount');
    console.log(snapshot);
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
