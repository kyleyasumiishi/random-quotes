import React from "react";
import ReactDOM from 'react-dom';
import App from '../App';
import quotes from "../quotes";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
    it("changes the state's current quote object to a different quote", () => {
      const wrapper = shallow(<App />);
      const newQuote = wrapper.instance().newQuote;
      const oldQuoteId = wrapper.instance().state.currentQuote.id;
      newQuote();
      const newQuoteId = wrapper.instance().state.currentQuote.id;
      expect(oldQuoteId !== newQuoteId).toBeTruthy();
    });
  })
})
