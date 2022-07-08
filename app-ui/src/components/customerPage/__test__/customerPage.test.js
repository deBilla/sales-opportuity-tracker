import React from 'react';
import CustomerPage from '../customerPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe("Test - Component - <CustomerPage />", () => {
    let CUSTOMER_PAGE_COMPONENT = (
        <CustomerPage isAdd={true} />
    );

    it("Component renders", () => {
        shallow(CUSTOMER_PAGE_COMPONENT);
    });
});