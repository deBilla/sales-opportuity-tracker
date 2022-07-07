import React, { useState } from 'react';
import ModalPage from '../Modal/modal';

export default function ModalButton(props) {
    const { data, btnName, handleUpload } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleSubmit = data => {
        handleUpload(data);
        setShow(false);
    };

    return (
        <>
            <button className="btn btn-primary" onClick={() => setShow(true)} style={{ fontSize: '5px' }}>{btnName ? btnName : 'View'}</button>
            <ModalPage show={show} handleClose={handleClose} data={data} handleSubmit={handleSubmit} />
        </>
    );
}