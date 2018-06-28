import React, { Component } from 'react';
import Quote from "./Quote";
import Button from "./Button";
import Icon from "./Icon";
import quotes from "./quotes";
import './App.css';

class App extends Component {
  

  render() {
    const listOfQuotes = quotes['quotes'].toString();

    return (
      <div id="quote-box" data-testid="quote-box">
        <Quote id="quote" text="I love quotes" author="Kyle Yasumiishi" />
        <Button id="new-quote" />
        <Icon icon="twitter" id="tweet-quote" />
        <Icon icon="facebook" />
        <Icon icon="left" />
        <Icon icon="right" />
        <div>{listOfQuotes}</div>
      </div>
    );
  }
}

export default App;
