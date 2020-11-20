import React, {useState, useEffect, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error, setError] = useState();

  //only runs when userIngredients updates
  useEffect(()=>{
    //console.log('Rendering Ingreins', userIngredients);
  },[userIngredients]);

  //with useCallback it will never rerun, what we pass to Search component in new render cycle will be the old func
  const filteredIngredientsHandler = useCallback(filteredIngredients => {
      setUserIngredients(filteredIngredients);
  },[]);

  const removeIngredientItem = ingredientId =>{
    setIsLoading(true);
    fetch(`https://react-hooks-update-4307d.firebaseio.com/ingredients/${ingredientId}.json`,{
      method: 'DELETE',
    }).then(response => {
    setIsLoading(false);
      setUserIngredients(prevIngredients => prevIngredients.filter((ingredient)=> ingredient.id !== ingredientId));
    }).catch(error => {
      //not 2 render cycles, react will batch it ,will run in one batch
      setError('Something went wrong!');
      setIsLoading(false);
    });
  }

  const clearError = () => {
    setError(null);
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm setUserIngredients={setUserIngredients} setIsLoading={setIsLoading} isLoading={isLoading} />

      <section>
        <Search onLoadIngredients={setUserIngredients}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientItem} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
