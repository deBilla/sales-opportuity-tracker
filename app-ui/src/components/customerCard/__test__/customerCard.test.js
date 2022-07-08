import React from 'react';
import CustomerCard from '../customerCard';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe("Test - Component - <CustomerCard />", () => {
    let CUSTOMER_COMPONENT = (
        <CustomerCard isAdd={true} />
    );

    it("Component renders", () => {
        shallow(CUSTOMER_COMPONENT);
    });
});