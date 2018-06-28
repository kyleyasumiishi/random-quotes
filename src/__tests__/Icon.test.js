import React from "react";
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from "../Icon";

configure({ adapter: new Adapter() });

// forward, backwared, twitter, facebook

// takes as props an icon name (which it renders), an id, and an onclick function 

describe("Icon Component", () => {
  it("renders a <div> element with a className of 'icon'", () => {
    const wrapper = shallow(<Icon />);
    const icon = wrapper.find('div');
    expect(icon.exists()).toBeTruthy();
    expect(icon.props().className).toEqual('icon');
  });
  it("has an onClick method", () => {
    const fakeFunction = jest.fn();
    const wrapper = shallow(<Icon onClick={fakeFunction} />);
    const icon = wrapper.find('div');
    icon.simulate('click');
    expect(fakeFunction).toHaveBeenCalledTimes(1);
  });
  it("has an id attribute equal to props.id", () => {
    const wrapper = shallow(<Icon id="tweet-quote"/>);
    const icon = wrapper.find('div');
    expect(icon.props().id).toEqual("tweet-quote");
  });
  it("does not have an id attribute if props.id is undefined", () => {
    const wrapper = shallow(<Icon />);
    const icon = wrapper.find('div');
    expect(!icon.props().id).toBeTruthy();
  });
  it("contains a child component if props.icon is defined", () => {
    const wrapper = shallow(<Icon icon="twitter" />);
    const icon = wrapper.find('div');
    expect(icon.children().length).toEqual(1);
  });
  it("does not contain a child component if props.icon is undefined", () => {
    const wrapper = shallow(<Icon />);
    const icon = wrapper.find('div');
    expect(icon.children().length).toEqual(0);
  });
});
