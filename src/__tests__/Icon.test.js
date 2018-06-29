import React from "react";
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from "../Icon";

configure({ adapter: new Adapter() });

// forward, backwared, twitter, facebook

// takes as props an icon name (which it renders), an id, and an onclick function 

describe("Icon Component", () => {
  it("renders an <anchor> element", () => {
    const wrapper = shallow(<Icon />);
    const icon = wrapper.find('a');
    expect(icon.exists()).toBeTruthy();
  });
  it("has an onClick method", () => {
    const fakeFunction = jest.fn();
    const wrapper = shallow(<Icon onClick={fakeFunction} />);
    const icon = wrapper.find('a');
    icon.simulate('click');
    expect(fakeFunction).toHaveBeenCalledTimes(1);
  });
  it("has an className attribute equal to props.className", () => {
    const wrapper = shallow(<Icon className="tweet-quote"/>);
    const icon = wrapper.find('a');
    expect(icon.props().className).toEqual("tweet-quote");
  });
  it("does not have an id attribute if props.id is undefined", () => {
    const wrapper = shallow(<Icon />);
    const icon = wrapper.find('a');
    expect(!icon.props().id).toBeTruthy();
  });
  it("does not have a href attribute if props.href is undefined", () => {
    const wrapper = shallow(<Icon />);
    const icon = wrapper.find('a');
    expect(!icon.props().href).toBeTruthy();
  });
  it("contains a child component if props.icon is defined", () => {
    const wrapper = shallow(<Icon icon="twitter" />);
    const icon = wrapper.find('a');
    expect(icon.children().length).toEqual(1);
  });
  it("does not contain a child component if props.icon is undefined", () => {
    const wrapper = shallow(<Icon />);
    const icon = wrapper.find('a');
    expect(icon.children().length).toEqual(0);
  });
});
