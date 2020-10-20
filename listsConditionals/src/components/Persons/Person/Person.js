import React, {Component} from 'react';
import styled from 'styled-components';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types'

import './Person.css';

 class Person extends Component {
   render() {
  console.log('[Person.js] rendering ...');
     return (
          <Aux>
             <p key="i1" onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old!</p>
             <p> {this.props.children}</p>
             <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
          </Aux>
         );
   }
}

Person.propTypes = {
  //on a click I expect to get a pointer to a func
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default Person;
