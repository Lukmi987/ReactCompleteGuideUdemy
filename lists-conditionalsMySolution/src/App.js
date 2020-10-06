import React, { Component } from 'react';
import './App.css';
import AppComponent from './AppComponent';
import ValidationComponent from './ValidationComponent';
import Char from './Char';

class App extends Component {

state = {
  userInput: '',
  lengthText: 0,
  chars: [
    {id:'skjk', name: 'Luk'},
    {id:'ssffd', name: 'Pol'},
    {id:'fff', name: 'Rus'}
  ]
}


inpputChangedHandler = (event) => {
    // const copyState = [...this.state];
    console.log(event.target.value.length);
    this.setState({userInput: event.target.value});
}

deleteCharBox = (index) => {
  //array of characters we make a copy
  const chars = [...this.state.userInput];
  chars.splice(index,1);
  //updated Text, converts back to text again
  const updatedChars = chars.join('');
  this.setState({userInput: updatedChars});
}

render() {
  //map does not touch the original array it gives the new array
  //text are not really javascript arrays, to turn them to array we use split('')
const charsList = this.state.userInput.split('').map((char,index) => {
        return <Char char={char} key={index}
          click={() => this.deleteCharBox(index)}
          />;
      });


    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      <hr />

      <input type="text" onChange={this.inpputChangedHandler} value={this.state.userInput} />
      <p>{this.state.userInput}</p>
      <ValidationComponent inputLength={this.state.userInput.length}/>
      {charsList}
      </div>
    );
  }
}

export default App;
