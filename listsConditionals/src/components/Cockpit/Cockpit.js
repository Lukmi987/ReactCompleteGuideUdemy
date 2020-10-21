import React, {useEffect, useRef} from 'react';

//turn array of strings into one string, generic solution to manipulate dinamically
const classes = [];

//useEffect is the second most important React hook you can use next to useState because useEffect  basically combines the functionality or the use cases you can cover
// of all these class-based lifecycle hooks in one React hook here and both is called hook,

//This is not a lifecycle hook, this is a React hook so basically a function you can add into one of your functional components.
const cockpit = (props) => {

  //set up our reference
  const toggleBtnRef = useRef(null);

  //as a default takes a func(without args) that will run after every render cycle
  useEffect(() => {
      console.log('Cockpit.js useEffect');
      //Http request
      //also runs when the component is created

      // setTimeout(()=>{
      //   alert('Saved data to cloud!');
      // },1000);


      toggleBtnRef.current.click();

      // so now useEffect only execute when our persons component has changed }, [props.persons]);
      //when we pass an empty array it runs for a first time but never again

      //for clean up we can use return ()
      return () => {
        // clearTimeout(timer);
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

  // now we get the data that will not change with every keystroke
  if (props.personsLength <= 2){
    classes.push('red');
  }
  if(props.personsLength <= 1){
    classes.push('bold');
  }
  return (
    <div>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          ref={toggleBtnRef}
          onClick={props.toggle}>Toggle Persons
        </button>
        <button onClick={props.login}>Log in
        </button>
    </div>
  );
};

//React memo good for optimalization , to wrap functio compon that might not need to update with every change in the parent component with it,
// !!! but if children always needs to update it is unneccesare code to run
export default React.memo(cockpit);
