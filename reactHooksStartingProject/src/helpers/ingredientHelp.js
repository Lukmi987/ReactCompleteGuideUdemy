export const loadIngredients = (result, entry) => {
  const composedEntry = {
    id:entry[0],
    title: entry[1].title,
    amount: entry[1].amount
  };
  result.push(composedEntry);
  console.log('sssss',result.push(composedEntry));
  return result;
}

export const addIngredientHandler = (ingredient,setUserIngredients) => {
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
