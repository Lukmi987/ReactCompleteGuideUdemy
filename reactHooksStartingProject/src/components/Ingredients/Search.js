import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(()=>{
      //enteredFilter will be the old value 500ml ago, when we set the timer
      if(enteredFilter === inputRef.current.value) {
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
      }

    },500);
      //clean up old timer
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
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
