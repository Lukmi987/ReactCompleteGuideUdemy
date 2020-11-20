import React, {useReducer, useState, useEffect, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

//Automatically gets 2 funcs passed by react
const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
    console.log('v set', action.ingredient);
     return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
    throw new Error('Should not get there!');
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  //const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error, setError] = useState();
console.log('my my',userIngredients);
  //only runs when userIngredients updates
  useEffect(()=>{
    //console.log('Rendering Ingreins', userIngredients);
  },[userIngredients]);

  //with useCallback it will never rerun, what we pass to Search component in new render cycle will be the old func
  // const filteredIngredientsHandler = useCallback(filteredIngredients => {
  //     setUserIngredients(filteredIngredients);
  // },[]);

  const removeIngredientItem = ingredientId =>{
    setIsLoading(true);
    fetch(`https://react-hooks-update-4307d.firebaseio.com/ingredients/${ingredientId}.json`,{
      method: 'DELETE',
    }).then(response => {
      // setUserIngredients(prevIngredients => prevIngredients.filter((ingredient)=> ingredient.id !== ingredientId));
      dispatch({type:'DELETE',id:ingredientId});
    }).catch(error => {
      //not 2 render cycles, react will batch it ,will run in one batch
      setError('Something went wrong!');
    }).finally(()=>{
      setIsLoading(false);
    }
    );
  }

  const clearError = () => {
    setError(null);
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm setIsLoading={setIsLoading} isLoading={isLoading} dispatch={dispatch} />

      <section>
        <Search dispatch={dispatch}/>

        <IngredientList userIngredients={userIngredients} onRemoveItem={removeIngredientItem} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
