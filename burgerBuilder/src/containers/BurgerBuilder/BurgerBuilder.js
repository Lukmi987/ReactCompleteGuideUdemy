import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
 salad: 0.7,
 cheese: 1,
 meat: 0.8,
 bacon: 2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 1
    },
    totalPrice: 4
  };

   addIngredient = (type) => {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;

      const updatedIngredients = {
        ...this.state.ingredients
      };

      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldTotalPrice = this.state.totalPrice;
      const newPrice = oldTotalPrice + priceAddition;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredient = (type) => {
      const oldCount = this.state.ingredients[type];
      if(oldCount >= 0){
        const updatedCount = oldCount - 1;

        const updatedIngredients = {
          ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newPrice = oldTotalPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
      }
    }

    render (){
        //creating a copy in an immuteable way , result {salad: true, meat: false}
      const disabledInfo = {
        ...this.state.ingredients
      };
      for(let key in disabledInfo){
        disabledInfo[key] =disabledInfo[key] <= 0 //return true or false
      }

      return (
          <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              ingredientAdded = {this.addIngredient}
              ingredientRemoved={this.removeIngredient}
              disableLess = {disabledInfo}
              />
            {console.log(this.addIngredient)}
          </Aux>
      );
    }
}

export default BurgerBuilder;
