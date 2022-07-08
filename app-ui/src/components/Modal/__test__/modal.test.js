import React from 'react';
import ModalPage from '../modal';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe("Test - Component - <ModalPage />", () => {
    let MODAL_PAGE_COMPONENT = (
        <ModalPage isAdd={true} />
    );

    it("Component renders", () => {
        shallow(MODAL_PAGE_COMPONENT);
    });
});