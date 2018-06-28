import React, { Component } from 'react';
import Quote from "./Quote";
import Button from "./Button";
import Icon from "./Icon";
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="quote-box" data-testid="quote-box">
        <Quote text="I love quotes" author="Kyle Yasumiishi" />
        <Button />
        <Icon icon="twitter" />
        <Icon icon="facebook" />
        <Icon icon="left" />
        <Icon icon="right" />
      </div>
    );
  }
}

export default App;
