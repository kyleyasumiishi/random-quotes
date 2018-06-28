import React from "react";
import ReactDOM from 'react-dom';
import { render, cleanup } from "react-testing-library";
import "dom-testing-library/extend-expect";
import App from '../App';

// Automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("App Component", () => {
    it("renders a <div> element", () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("quote-box")).toBeInstanceOf(HTMLDivElement);
    });
    it("has an id attribute of 'quote-box'", () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("quote-box")).toHaveAttribute('id', 'quote-box');
    });
});
