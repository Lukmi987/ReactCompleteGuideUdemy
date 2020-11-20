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

  const removeIngredientItem = ingredientId =>{
    fetch(`https://react-hooks-update-4307d.firebaseio.com/ingredients/${ingredientId}.json`,{
      method: 'DELETE',
    }).then(response => {
      setUserIngredients(prevIngredients => prevIngredients.filter((ingredient)=> ingredient.id !== ingredientId));
    })
  }

  return (
    <div className="App">
      <IngredientForm setUserIngredients={setUserIngredients} />

      <section>
        <Search onLoadIngredients={setUserIngredients}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientItem} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
