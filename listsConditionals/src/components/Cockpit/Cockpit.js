import React, {useEffect} from 'react';

//turn array of strings into one string, generic solution to manipulate dinamically
const classes = [];

//useEffect is the second most important React hook you can use next to useState because useEffect and now that sounds strange but useEffect basically combines the functionality or the use cases you can cover
// of all these class-based lifecycle hooks in one React hook here and both is called hook,

const cockpit = (props) => {

  if (props.persons.length <= 2){
    classes.push('red');
  }
  if(props.persons.length <= 1){
    classes.push('bold');
  }
  return (
    <div>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          onClick={props.toggle}>Toggle Persons
        </button>
    </div>
  );
};

export default cockpit;
