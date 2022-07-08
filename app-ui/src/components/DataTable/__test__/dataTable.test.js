import React from 'react';
import DataTable from '../dataTable';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe("Test - Component - <DataTable />", () => {
    let DATA_TABLE_COMPONENT = (
        <DataTable isAdd={true} />
    );

    it("Component renders", () => {
        shallow(DATA_TABLE_COMPONENT);
    });
});