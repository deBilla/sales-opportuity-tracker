import React from 'react';
import ModalButton from '../modalBtn';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe("Test - Component - <ModalButton />", () => {
    let MODAL_BUTTON_COMPONENT = (
        <ModalButton isAdd={true} />
    );

    it("Component renders", () => {
        shallow(MODAL_BUTTON_COMPONENT);
    });
});