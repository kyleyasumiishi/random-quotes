import React, { Component } from 'react';
import Quote from "./Quote";
import Button from "./Button";
import Icon from "./Icon";
import quotes from "./quotes";
import './App.css';

const listOfQuotes = quotes['quotes'];
const numQuotes = listOfQuotes.length;

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentQuote: listOfQuotes[0]  // null
      };
  }

  render() {
    const text = this.state.currentQuote["text"];
    const author = this.state.currentQuote["author"];
    const length = text.length;

    return (
      <div id="quote-box" data-testid="quote-box">
        <Quote text={text} author={author} />
        This quote is {length} characters long!
        <Button id="new-quote" />
        <Icon icon="twitter" id="tweet-quote" />
        <Icon icon="facebook" />
        <Icon icon="left" />
        <Icon icon="right" />
      </div>
    );
  }
}


export default App;
