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
        previousQuotes: [],
        backtrackCount: 0,
        currentQuote: null,
        newestRandom: null
      };
      this.newQuote = this.newQuote.bind(this);
      this.prevQuote = this.prevQuote.bind(this);
      this.nextQuote = this.nextQuote.bind(this);
  }

  componentWillMount() {
    if (!this.state.currentQuote) {
      this.setState({
        currentQuote: listOfQuotes[Math.floor(Math.random() * numQuotes)]
      });
    }
  }

  newQuote() {
    let isSameQuote = true;
    let quote;
    while (isSameQuote) {
      quote = listOfQuotes[Math.floor(Math.random() * numQuotes)];
      if (quote.text !== this.state.currentQuote.text) {
        isSameQuote = false;
      }
    }
    this.setState({
      previousQuotes: this.state.previousQuotes.concat([this.state.currentQuote]),
      currentQuote: quote,
      backtrackCount: 0
    });
  }

  prevQuote() {
    if (this.state.backtrackCount < this.state.previousQuotes.length) {
      if (this.state.previousQuotes.length > 0) {
        if (this.state.backtrackCount === 0) {
          this.setState({
            newestRandom: this.state.currentQuote
          });
        }
        let newBacktrackCount = this.state.backtrackCount + 1;
        this.setState({
          backtrackCount: newBacktrackCount,
          currentQuote: this.state.previousQuotes[this.state.previousQuotes.length - newBacktrackCount],
        });
      }
    }
  }

  nextQuote() {
    let newBacktrackCount = this.state.backtrackCount - 1;
    if (this.state.backtrackCount === 0) {
      this.newQuote();
    } else if (this.state.backtrackCount === 1) {
      this.setState({
         backtrackCount: newBacktrackCount,
         currentQuote: this.state.newestRandom
      });
    } else {
      this.setState({
        backtrackCount: newBacktrackCount,
        currentQuote: this.state.previousQuotes[this.state.previousQuotes.length - newBacktrackCount]
      });
    }
  }

  render() {
    const text = this.state.currentQuote["text"];
    const author = this.state.currentQuote["author"];

    return (
      <div id="quote-box" data-testid="quote-box">
       
        <div id="mobile">
          <nav className="mobile-nav">
            <Icon icon="left" onClick={this.prevQuote} />
            <Icon icon="twitter" className="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" text={text} author={author} />
            <Icon icon="right" onClick={this.nextQuote} />
          </nav>
          <div>
            <Quote className="quote" text={text} author={author} />
          </div>
          <div>
            <Button className="new-quote" onClick={this.newQuote} />
          </div>
        </div>

        <div id="desktop">
          <div class="leftCol">
            <Icon icon="left" onClick={this.prevQuote} />
          </div>
          <div class="middleCol">
            <div class="quote-area">
              <Quote className="quote" text={text} author={author} />
              <Icon icon="twitter" className="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" text={text} author={author} />
            </div>
            <div>
              <Button className="new-quote" onClick={this.newQuote} />
            </div>        
          </div>
          <div class="rightCol">
            <Icon icon="right" onClick={this.nextQuote} />
          </div>
        </div>

      </div>
    );
  }
}


export default App;
