import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
 salad: 0.7,
 tomato: 0.5,
 cheese: 1,
 meat: 0.8,
 bacon: 2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      tomato: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasble: false,
    purchasing: false
  };

  updatePurchaseState(ingredients){
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

    purchaseHandler = () =>{
      /* if method defined like(purchaseHandler ()) then  syntax below will not work correctly if the method is triggred trough event, due to the
      way 'this' work in  JS it will not refer to the class,  !! compare to the removeIgredient(set up method as properties where we assigned arrow functions)*/
      this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
      this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
      alert('You continue');
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
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
              <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              ingredientAdded = {this.addIngredient}
              ingredientRemoved={this.removeIngredient}
              disableLess = {disabledInfo}
              purchasble={this.state.purchasble}
              price = {this.state.totalPrice}
              ordered = {this.purchaseHandler}
              />

          </Aux>
      );
    }
}

export default BurgerBuilder;
