import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import BusinessOpportunity from '../businessOpportunity/businessOpportunity';
import CustomerCard from '../customerCard/customerCard';

export default function ModalPage(props) {
    const { show, handleClose, data, handleSubmit } = props;

    let isAdd = false;
    if (!data) isAdd = true;

    const list = !isAdd ? data.salesOppotunities.map(val => <BusinessOpportunity key={val.id} val={val} />) : [];

    const onSubmit = data => handleSubmit(data);

    return (
        <Modal show={show} size="lg">
            <Modal.Header>
                <Modal.Title>{isAdd ? 'Add New Customer Detail' : data.firstName + ' ' + data.lastName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <CustomerCard data={data} isAdd={isAdd} onSubmit={onSubmit} />
                    </Col>
                    {!isAdd &&
                        <Col>
                            <h3>Business Opportunities</h3>
                            {list}
                        </Col>
                    }
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    );
}