import React from 'react';

import './IngredientList.css';

const IngredientList = ({ userIngredients, onRemoveItem }) => {
  // const {ingredients, onRemoveItem } = props;
  console.log('v search',userIngredients);
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>

        {userIngredients && userIngredients.map(ig => (
          <li key={ig.id} onClick={onRemoveItem.bind(this, ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
