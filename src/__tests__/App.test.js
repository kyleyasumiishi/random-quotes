import React from "react";
import ReactDOM from 'react-dom';
import App from '../App';
import quotes from "../quotes";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from "module";

const listOfQuotes = quotes['quotes'];
const numQuotes = listOfQuotes.length;

configure({ adapter: new Adapter() });

describe("App Component", () => {
  it("renders a <div> element", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.type()).toEqual('div');
  });
  it("has an id attribute of 'quote-box'", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').props().id).toEqual('quote-box');
  });

  describe("newQuote method", () => {
    it("updates 'currentQuote'", () => {
      const wrapper = shallow(<App />);
      // Methods
      const newQuote = wrapper.instance().newQuote;
      // Test Logic
      const oldQ = wrapper.instance().state.currentQuote;
      newQuote();
      const newQ = wrapper.instance().state.currentQuote;
      expect(oldQ.id !== newQ.id).toBeTruthy();
    });
    it("updates 'previousQuotes' array with previous quote", () => {
      const wrapper = shallow(<App />);
      // Methods
      const newQuote = wrapper.instance().newQuote;
      // Test Logic
      const oldQ = wrapper.instance().state.currentQuote;
      newQuote();
      const previousQuotes = wrapper.instance().state.previousQuotes;
      expect(previousQuotes[previousQuotes.length - 1]["text"] === oldQ.text).toBeTruthy();
    });
    it("sets 'backtrackCount' to 0", () => {
      const wrapper = shallow(<App />);
      // Methods
      const newQuote = wrapper.instance().newQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      newQuote();
      prevQuote();
      expect(wrapper.instance().state.backtrackCount === 1).toBeTruthy();
      newQuote();
      expect(wrapper.instance().state.backtrackCount === 0).toBeTruthy();
    });
  });

  describe("prevQuote method", () => {
    it("does not do anthing if 'backtrackCount' >= length of 'previousQuotes'", () => {
      const wrapper = shallow(<App />);
      // Methods
      const newQuote = wrapper.instance().newQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      newQuote();
      prevQuote();
      const targetQuote = wrapper.instance().state.currentQuote;
      prevQuote();
      expect(wrapper.instance().state.currentQuote.id === targetQuote.id).toBeTruthy();
      prevQuote();
      expect(wrapper.instance().state.currentQuote.id === targetQuote.id).toBeTruthy();
    });
    it("Appends 'currentQuote' object to 'previousQuotes' array if 'backtrackCount' is 0", () => {
      const wrapper = shallow(<App />);
      // Methods
      const newQuote = wrapper.instance().newQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      newQuote();
      const mostRecentQuote = wrapper.instance().state.currentQuote;
      prevQuote();
      expect(wrapper.instance().state.newestRandom.id === mostRecentQuote.id).toBeTruthy();
    });
    it("increases 'backtrackCount' by 1", () => {
      const wrapper = shallow(<App />);
      // Methods
      const newQuote = wrapper.instance().newQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      const prevBacktrackCount = wrapper.instance().state.backtrackCount;
      newQuote();
      prevQuote();
      expect(wrapper.instance().state.backtrackCount === prevBacktrackCount + 1).toBeTruthy();
    });
    it("updates 'currentQuote' to last element of 'previousQuotes' if array is non-empty and 'backtrackCount' is 0", () => {
      const wrapper = shallow(<App />);
      // Methods
      const newQuote = wrapper.instance().newQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      newQuote();
      const previousQuotes = wrapper.instance().state.previousQuotes;
      const previousQuote = previousQuotes[previousQuotes.length - 1];
      prevQuote();
      expect(wrapper.instance().state.currentQuote.id === previousQuote.id).toBeTruthy();
    });
    it("does not update 'currentQuote' if 'previousQuotes' is empty array", () => {
      const wrapper = shallow(<App />);
      // Methods
      const currentQuote = wrapper.instance().state.currentQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      wrapper.setState({currentQuote: listOfQuotes[0]});
      prevQuote();
      expect(wrapper.instance().state.currentQuote.id === currentQuote.id).toBeTruthy();
    });
    it("updates 'currentQuote' with the object in 'previousQuotes' at the index position from the end of the array, specified by 'backtrackCount'", () => {
      /*
      This test adds 5 quotes to the 'previousQuotes' array (the 'currentQuote' is the 6th). Then it backtracks 3 quotes to confirm that the new 'currentQuote' is the 3rd object in 'previousQuotes' (i.e., backtracking 3 quotes starting from the 6th should lead to the 3rd quote).
      */
      const wrapper = shallow(<App />);
      // Methods
      const newQuote = wrapper.instance().newQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      for (let i = 0; i < 5; i++) {
        newQuote();
      }
      for (let i = 0; i < 3; i++) {
        prevQuote();
      }
      const backtrackCount = wrapper.instance().state.backtrackCount;
      const previousQuotes = wrapper.instance().state.previousQuotes;
      const targetQuote = previousQuotes[previousQuotes.length - backtrackCount];
      expect(wrapper.instance().state.currentQuote.id === targetQuote.id).toBeTruthy();
    });
  });

  describe("nextQuote method", () => {
    it("calls newQuote method if 'backtrackCount' is 0", () => {
      const spy = jest.spyOn(App.prototype, 'newQuote');
      const wrapper = shallow(<App />);
      const nextQuote = wrapper.instance().nextQuote;
      nextQuote();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockReset();
      spy.mockRestore();
    });
    it("decrements 'backtrackCount' by 1 if 'backtrackCount' > 0", () => {
      /*
      This test adds 5 quotes to the 'previousQuotes' array. Then it backtracks 3 quotes, each time incrementing 'backtrackCount' by 1, to confirm that calling the 'nextQuote' method once decrements 'backtrackCount' by 1.
      */
      const wrapper = shallow(<App />);
      // Methods
      const nextQuote = wrapper.instance().nextQuote;
      const newQuote = wrapper.instance().newQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      for (let i = 0; i < 5; i++) {
        newQuote();
      }
      const previousQuotes = wrapper.instance().state.previousQuotes;
      for (let i = 0; i < 3; i++) {
        prevQuote();
      }
      const prevBacktrackCount = wrapper.instance().state.backtrackCount;
      nextQuote();
      expect(wrapper.instance().state.backtrackCount === prevBacktrackCount - 1).toBeTruthy();
    });
    it("updates 'currentQuote' with the object in 'previousQuotes' at the index position from the end of the array specified by 'backtrackCount' (if 'backtrackCount > 1)", () => {
      const wrapper = shallow(<App />);
      // Methods
      const nextQuote = wrapper.instance().nextQuote;
      const newQuote = wrapper.instance().newQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      for (let i = 0; i < 5; i++) {
        newQuote();
      }
      const previousQuotes = wrapper.instance().state.previousQuotes;
      for (let i = 0; i < 3; i++) {
        prevQuote();
      }
      nextQuote();
      expect(wrapper.instance().state.currentQuote.id === previousQuotes[previousQuotes.length - wrapper.instance().state.backtrackCount].id).toBeTruthy();
    });
    it("sets 'currentQuote' to 'newestRandom' if 'backtrackCount' === 1", () => {
      const wrapper = shallow(<App />);
      // Methods
      const nextQuote = wrapper.instance().nextQuote;
      const newQuote = wrapper.instance().newQuote;
      const prevQuote = wrapper.instance().prevQuote;
      // Test Logic
      newQuote();
      prevQuote();
      nextQuote();
      expect(wrapper.instance().state.currentQuote.id === wrapper.instance().state.newestRandom.id).toBeTruthy();
    });
  });
})

