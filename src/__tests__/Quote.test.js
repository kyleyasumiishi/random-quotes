import React from "react";
import ReactDOM from 'react-dom';
import { render, cleanup } from "react-testing-library";
import "dom-testing-library/extend-expect";
import Quote from "../Quote";

// Automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("Quote Component", () => {
    it("contains a child <div> element with a corresponding id attribute of 'text'", () => {
        const { container } = render(<Quote id="text" />);
        const text = container.querySelector("#text");
        expect(text).toBeInstanceOf(HTMLDivElement);
        expect(text).toHaveAttribute('id', 'text');
    });
    it("contains a child <div> element with a corresponding id attribute of 'author'", () => {
        const { container } = render(<Quote />);
        const author = container.querySelector("#author");
        expect(author).toBeInstanceOf(HTMLDivElement);
        expect(author).toHaveAttribute('id', 'author');
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
    // props
});
