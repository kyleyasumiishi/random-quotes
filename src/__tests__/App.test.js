import React from "react";
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
  // it("contains a newQuote method that is called when the button is clicked", () => {
  //   const wrapper = shallow(<App />);
  //   console.log(wrapper.instance());
  // });
})
