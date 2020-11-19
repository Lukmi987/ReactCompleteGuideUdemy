import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    //taking all elements of the old array and make a new array with new element
    setUserIngredients(prevIngredients => [
       ...prevIngredients,
       // ...ingredient takes all key /value pairs of the object and adds them as key/value as a new object
       {id: Math.random().toString(), ...ingredient}]);
  }
  console.log(userIngredients);
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
