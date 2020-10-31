import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
  <div className={classes.BuildControl}>
    <p>Current Price: {props.price.toFixed(2)}</p>
    {controls.map(el => (
      <BuildControl key={el.label}
        label={el.label}
        added={()=> props.ingredientAdded(el.type)}
        removed={()=> props.ingredientRemoved(el.type)}
        disabled = {props.disableLess[el.type]}
         />
    ))}
    <button className={classes.OrderButton}
            disabled={!props.purchasble}>ORDER NOW</button>
  </div>
)

export default buildControls;
