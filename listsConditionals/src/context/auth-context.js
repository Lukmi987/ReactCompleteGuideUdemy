import React from 'react';

{/* the good way how to pass directly props from A to B and to using unneccesary compononents */}

//context is globally available js object,array,string,number ..(we decide where is it available),
// without using props, behind the scenes
const authContext = React.createContext({
  authenticated: false,
  //an empty anonymous func
  login: () => {}
});

//it can be used as component and it should wrap all the parts of your application that need access to this context
export default authContext;
