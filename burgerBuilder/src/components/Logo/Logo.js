import React from 'react';
//burgerLogo will receive the path of the image where webpack will copy it to,the path where webpack stored the optimized and copied image
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger"/>
  </div>
);

export default logo;
