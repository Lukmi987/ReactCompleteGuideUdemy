import React From 'react';
//Aux an empty wrapper using a special childre property, which react reserve for us
// and children will always refer between opening and closing tag of your component
const aux = props => props.children;

export default aux;
