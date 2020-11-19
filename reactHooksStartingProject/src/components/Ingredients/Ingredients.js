import React, {useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  //gets executed right after every component render cycle
  useEffect(()=>{
    fetch('https://react-hooks-update-4307d.firebaseio.com/ingredients.json')
      .then(response => response.json())
      .then(responseData => {
        const entries = Object.entries(responseData);
        const loadedIngredients = entries.reduce(loadIngredients,[]);
        setUserIngredients(loadedIngredients);
      });
  },[]);

  //only runs when userIngredients updates
  useEffect(()=>{
    console.log('Rendering Ingreins', userIngredients);
  },[userIngredients]);

  const filteredIngredientsHandler = filteredIngredients => {
      setUserIngredients(filteredIngredients);
  }

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

  const loadIngredients = (result, entry) => {
    const composedEntry = {
      id:entry[0],
      title: entry[1].title,
      amount: entry[1].amount
    };
    return [...result, composedEntry];
  }

  const removeIngredientItem = ingredientId =>{
    setUserIngredients(prevIngredients => prevIngredients.filter((ingredient)=> ingredient.id !== ingredientId));
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search  />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientItem} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
