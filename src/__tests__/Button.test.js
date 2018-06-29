import React from "react";
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from "../Button";
import App from "../App";

configure({ adapter: new Adapter() });

describe("Button Component", () => {
  it("renders a <button> element with a corresponding id attribute of 'new-quote", () => {
    const wrapper = shallow(<Button id="new-quote" />);
    const button = wrapper.find('button');
    expect(button.exists()).toBeTruthy();
    expect(button.props().id).toEqual('new-quote');
  });
  it("has an onClick method", () => {
    const fakeFunction = jest.fn();
    const wrapper = shallow(<Button onClick={fakeFunction} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(fakeFunction).toHaveBeenCalledTimes(1);
  });
});


// how to test a method

// if button is clicked, a random quote will appear (what if it's the same quote as previously)