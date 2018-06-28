import React from "react";
import ReactDOM from 'react-dom';
import { render, cleanup } from "react-testing-library";
import { fireEvent } from "dom-testing-library";
import "dom-testing-library/extend-expect";
import Icon from "../Icon";

// forward, backwared, twitter, facebook

// takes as props an icon name (which it renders), an id, and an onclick function 

// Automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("Icon Component", () => {
    it("renders a <div> element with a className of 'icon'", () => {
        const { container } = render(<Icon />);
        const icon = container.querySelector(".icon");
        expect(icon).toBeInstanceOf(HTMLDivElement);
        expect(icon).toHaveClass('icon');
    });
    it("has an onClick method", () => {
        const onClick = jest.fn();
        const { container } = render(<Icon onClick={onClick} />);
        const icon = container.querySelector(".icon");
        icon.click()
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    it("has an id attribute equal to props.id", () => {
        const { container } = render(<Icon icon="twitter" id="tweet-quote" />);
        const icon = container.querySelector(".icon");
        expect(icon).toHaveAttribute('id', 'tweet-quote');
    });
    it("does not have an id attribute if props.id does not exist", () => {
        const { container } = render(<Icon icon="facebook" />);
        const icon = container.querySelector(".icon");
        expect(icon).not.toHaveAttribute('id');
    });
    it("contains a child Component", () => {
        const { container } = render(<Icon icon="twitter" />);
        const icon = container.querySelector(".icon");
        expect(icon.childElementCount) === 1;
    });
    // idid attribute equal to its props.id
});
