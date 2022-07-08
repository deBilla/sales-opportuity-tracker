import React from 'react';
import SalesOpportunity from '../salesOpportunity';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe("Test - Component - <SalesOpportunity />", () => {
    let SALES_OPPORTUNITY_COMPONENT = (
        <SalesOpportunity val={{name: "dimuthu", status: "NEW", customerUuid: "jdkajhfklwj"}} />
    );

    it("Component renders", () => {
        shallow(SALES_OPPORTUNITY_COMPONENT);
    });
});