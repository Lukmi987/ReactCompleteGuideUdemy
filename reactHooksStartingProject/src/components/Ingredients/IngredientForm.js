import React,{ useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  //alway return an array with 2 elements, first the snapshot of current state and second we use to set a state
  const inputState = useState({title: '',amount:''});

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={inputState[0].title}
              onChange={event => {
                const newTitle=  event.target.value;
                inputState[1]( prevInputState => ({
                title: newTitle,
                amount: prevInputState.amount
              }))
            }}
               />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={inputState[0].amount}
              onChange={event => {
                const newAmount = event.target.value;
                //we are calling set state function and there we define  another nested function(updating func)
                //problem when we call from inner func something from outside func such as : event,
                //!! instead of creating a new event object for every keystroke it instead reuses the previous object and the consequence of this is that for the second keystroke
                // we still reuse that same object we had for first keystroke, ,we are reusing wrong event object
                inputState[1]( prevInputState => ({
                  amount:newAmount,
                  title: prevInputState.title
                }))}
              }
              />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
