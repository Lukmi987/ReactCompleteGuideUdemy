import React, {useEffect} from 'react';

//turn array of strings into one string, generic solution to manipulate dinamically
const classes = [];

//useEffect is the second most important React hook you can use next to useState because useEffect  basically combines the functionality or the use cases you can cover
// of all these class-based lifecycle hooks in one React hook here and both is called hook,

//This is not a lifecycle hook, this is a React hook so basically a function you can add into one of your functional components.
const cockpit = (props) => {
  //as a default takes a func(without args) that will run for every render cycle
  useEffect(() => {
      console.log('Cockpit.js useEffect');
      //Http request
      //also runs when the component is created

  const timer = setTimeout(()=>{
        alert('Saved data to cloud!');
      },1000);
      // so now useEffect only execute when our persons component has changed }, [props.persons]);
      //when we pass an empty array it runs for a first time but never again

      //for clean up we can use return ()
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
  }, []);

  // no second argument it will run for every render cycle
  useEffect(()=>{
    return () => {
      console.log('Cockpit.js 2nd useEffect');
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

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
