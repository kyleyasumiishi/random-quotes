import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from "../Button";

configure({ adapter: new Adapter() });

describe("Button Component", () => {
  it("renders a <button> element with a corresponding className attribute of 'new-quote", () => {
    const wrapper = shallow(<Button className="new-quote" />);
    const button = wrapper.find('button');
    expect(button.exists()).toBeTruthy();
    expect(button.props().className).toEqual('new-quote');
  });
  it("has an onClick method", () => {
    const fakeFunction = jest.fn();
    const wrapper = shallow(<Button onClick={fakeFunction} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(fakeFunction).toHaveBeenCalledTimes(1);
  });
});
