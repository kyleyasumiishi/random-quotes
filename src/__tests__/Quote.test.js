import React from "react";
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, cleanup } from "react-testing-library";
import "dom-testing-library/extend-expect";
import Quote from "../Quote";

// Automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

configure({ adapter: new Adapter() });

describe("Quote Component", () => {
  it("contains a child <div> element with a corresponding id attribute of 'text'", () => {
    const wrapper = shallow(<Quote />);
    const child = wrapper.props().children.filter(child => child.props.id === 'text')[0];
    expect(!!child).toBeTruthy();
    expect(child.type).toEqual('div');
    expect(child.props.id).toEqual('text'); 
  });
  it("contains a child <div> element with a corresponding id attribute of 'author'", () => {
    const wrapper = shallow(<Quote />);
    const child = wrapper.props().children.filter(child => child.props.id === 'author')[0];
    expect(!!child).toBeTruthy();
    expect(child.type).toEqual('div');
    expect(child.props.id).toEqual('author'); 
  });
  it("displays props.text within the text div", () => {
      const { container } = render(<Quote text="I love quotes" />);
      const text = container.querySelector("#text");
      expect(text).toHaveTextContent("I love quotes");
  });
  it("displays props.author within the author div", () => {
      const { container } = render(<Quote author="Kyle Yasumiishi" />);
      const author = container.querySelector("#author");
      expect(author).toHaveTextContent("Kyle Yasumiishi");
  });
});
// props

