import React, {Component} from 'react';

//Now, error boundary is a so-called higher order component it's a component which simply wraps a component with the goal of handling any errors that component
//might throw,

//So basically only use them if you have some code you know that it may fail,
  //don't wrap any other code because if normal code fails, you as a developer probably made a mistake during development,
  //only use error boundaries for cases where you know that it might fail and you can't control that.

class ErrorBoundary extends Component{
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error,info) => {
    this.setState({hasError: true, errorMessage: error});
  }

  render() {

      if(this.state.hasError){
        return <h1>{this.state.errorMessage}</h1>
      } else {
        //props childers is this.props.children is whatever we wrap inside of error boundary
          return this.props.children;
      }
  }
}

export default ErrorBoundary;
