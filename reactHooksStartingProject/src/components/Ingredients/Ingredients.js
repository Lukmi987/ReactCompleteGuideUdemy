import React, {useState, useEffect, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  //only runs when userIngredients updates
  useEffect(()=>{
    //console.log('Rendering Ingreins', userIngredients);
  },[userIngredients]);

  //with useCallback it will never rerun, what we pass to Search component in new render cycle will be the old func
  const filteredIngredientsHandler = useCallback(filteredIngredients => {
      setUserIngredients(filteredIngredients);
  },[]);

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

  // const loadIngredients = (result, entry) => {
  //   const composedEntry = {
  //     id:entry[0],
  //     title: entry[1].title,
  //     amount: entry[1].amount
  //   };
  //     //  not a good way coz every cycle we create a new array(problem with big data), better push
  //   //return [...result, composedEntry];
  //
  //   //return result.push(composedEntry);
  // }

  const removeIngredientItem = ingredientId =>{
    setUserIngredients(prevIngredients => prevIngredients.filter((ingredient)=> ingredient.id !== ingredientId));
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={setUserIngredients}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientItem} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
