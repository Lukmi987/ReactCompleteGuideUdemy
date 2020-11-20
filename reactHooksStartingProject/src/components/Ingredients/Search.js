import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');

  useEffect(() => {
    const query =
      enteredFilter.length === 0
        ? ''
        : `?orderBy="title"&equalTo="${enteredFilter}"`;
      console.log(query);
    fetch('https://react-hooks-update-4307d.firebaseio.com/ingredients.json' + query)
      .then(response => response.json())
      .then(responseData => {
        const entries = Object.entries(responseData);
        const ingredients = entries.reduce((result,entry) => {
          const composedEntry = {
            id:entry[0],
            title: entry[1].title,
            amount: entry[1].amount
          };
          result.push(composedEntry);
          return result;
        },[]);
        onLoadIngredients(ingredients);
      });
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
