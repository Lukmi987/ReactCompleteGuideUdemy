import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    fetch('https://react-hooks-update-4307d.firebaseio.com/ingredients.json',{
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {'Content_type': 'application/json'}
    }).then(response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients => [
         ...prevIngredients,
         {id: responseData.name, ...ingredient}
       ]);
    })
  }

  const removeIngredientItem = ingredientId =>{
    setUserIngredients(prevIngredients => prevIngredients.filter((ingredient)=> ingredient.id !== ingredientId));
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientItem} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
