import React from "react";
import ReactDOM from 'react-dom';
import { render, cleanup } from "react-testing-library";
import "dom-testing-library/extend-expect";
import Button from "../Button";

// Automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("Button Component", () => {
    it("renders a <button> element with a corresponding id attribute of 'new-quote'", () => {
        const { container } = render(<Button id="new-quote" />);
        const button = container.querySelector("#new-quote");
        expect(button).toBeInstanceOf(HTMLButtonElement);
        expect(button).toHaveAttribute('id', 'new-quote');
    });
});