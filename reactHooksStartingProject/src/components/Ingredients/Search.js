import React, { useState, useEffect, useRef } from 'react';
import {loadIngredients} from '../../helpers/ingredientHelp';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { dispatch } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(()=>{
      //enteredFilter will be the old value 500ml ago, when we set the timer
      if(enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length
            ? `?orderBy="title"&equalTo="${enteredFilter}"`
            : '';
        fetch('https://react-hooks-update-4307d.firebaseio.com/ingredients.json' + query)
          .then(response => response.json())
          .then(responseData => {
            if(responseData) {
              const entries = Object.entries(responseData);
              const ingredients = entries.reduce(loadIngredients, []);
              dispatch({type:'SET', ingredients: ingredients});
              // dispatch({ type: 'SET', ingredients: filteredIngredients });
          }
        });
      }
    },500);
      //clean up old timer, unmount
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, dispatch]);

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
