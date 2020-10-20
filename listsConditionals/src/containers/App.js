import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux'


class App extends Component {

  constructor(props){
    // it will execute the constructor of the component you're extending
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // for perfomance purpo.
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  //for fetching data from server for example
  componentDidUpdate() {
      console.log('[App.js] shouldComponentUpdate');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    //We call state synchronously here but it's not guaranteed to execute and finish immediately
    // the changeCounter is not guaranteed to be the latest state ,It could be older state
    //So better use prevState
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState,props) =>  {
    return {
      persons: persons,
      changeCounter: prevState.changeCounter + 1
    };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log('[App.js] render');
    let persons = null;

    if ( this.state.showPersons ) {
      persons =  <Persons
                    persons = {this.state.persons}
                    clicked = {this.deletePersonHandler}
                    changed = {this.nameChangedHandler}
                />;
    }


    return (
      // to use radium media queries we have to wrap the whole application with StyleRoot Component provided by Radium

      // <WithClass classes="App">
      <Aux>
        <p>{this.state.changeCounter}</p>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove cockpit</button>
      {this.state.showCockpit ?
              (<Cockpit personsLength={this.state.persons.length}
                  toggle = {this.togglePersonsHandler}
                  />
              ) :null }
        {persons}
      </Aux>


    );

  }
}

//injecting some extra functionality
export default withClass(App, classes.App);
