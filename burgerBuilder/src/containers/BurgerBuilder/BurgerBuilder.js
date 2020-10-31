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
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasble: false
  };

  updatePurchaseState(ingredients){

console.log(Object.keys(ingredients).map(key => {
  return 1
}));
    const sum = Object.keys(ingredients)
        .map(igKey => {
          return ingredients[igKey]; // I return array of values
        }) // now we turn it to signle number, sum
        .reduce((accum,el) => {
          return accum + el;
        },0);
        this.setState({purchasble:sum > 0 });
  }

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
      //due to setState working we might get updated state , so we pass new one
      this.updatePurchaseState(updatedIngredients);
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
        this.updatePurchaseState(updatedIngredients);
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
              purchasble={this.state.purchasble}
              price = {this.state.totalPrice}
              />

          </Aux>
      );
    }
}

export default BurgerBuilder;
