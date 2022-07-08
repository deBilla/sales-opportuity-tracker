import React from 'react';
import CustomerPage from '../customerPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { QueryClient, QueryClientProvider } from "react-query";

Enzyme.configure({ adapter: new Adapter() });

const queryClient = new QueryClient();

describe("Test - Component - <CustomerPage />", () => {
    let CUSTOMER_PAGE_COMPONENT = (
        <QueryClientProvider client={queryClient}>
            <CustomerPage isAdd={true} />
        </QueryClientProvider>
    );

    it("Component renders", () => {
        shallow(CUSTOMER_PAGE_COMPONENT).dive();
    });
});