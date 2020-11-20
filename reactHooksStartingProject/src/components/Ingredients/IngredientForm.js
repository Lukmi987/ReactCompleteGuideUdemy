import React,{ useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import {addIngredientHandler} from '../../helpers/ingredientHelp';
import LoadingIndicater from '../UI/LoadingIndicator';

const IngredientForm = React.memo(({setUserIngredients,setIsLoading,isLoading}) => {
  //alway return an array with 2 elements, first the snapshot of current state and second we use to set a state
  //array destructuring
  //use state only can be used on a root level , not in the function and if conditions
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    addIngredientHandler({title: enteredTitle, amount: enteredAmount}, setUserIngredients,setIsLoading);
    // ...
  };

  const handleInputChange = (e) => {
    setEnteredTitle(e.target.value);
  }


  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={enteredTitle}
              onChange={handleInputChange}
               />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={enteredAmount}
              onChange={event => {
                setEnteredAmount(event.target.value);
                }
              }
              />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {isLoading && <LoadingIndicater />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
