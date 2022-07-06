import React, { useState } from 'react';
import ModalPage from '../Modal/modal';

export default function ModalButton(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const { data } = props;

    return (
        <>
            <button className="btn btn-primary" onClick={() => setShow(true)} style={{ fontSize: '5px' }}>View</button>
            <ModalPage show={show} handleClose={handleClose} data={data} />
        </>
    );
}