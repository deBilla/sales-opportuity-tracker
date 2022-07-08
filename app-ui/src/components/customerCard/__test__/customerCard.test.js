import React from 'react';
import CustomerCard from '../customerCard';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

/**
 * @jest-environment jsdom
 */
let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const onSubmit = jest.fn();
const handleStatusChange = jest.fn();

it("Renders all the fields", () => {
    act(() => {
        render(<CustomerCard data={undefined} isAdd={true} onSubmit={onSubmit} handleStatusChange={handleStatusChange}/>, container);
    });

    expect(container.textContent).toBe("NamePhone NumberAddressPostal CodeCityStateCountrySubmit");
});