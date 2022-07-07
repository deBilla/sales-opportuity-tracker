import React, { useState, useEffect } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import BusinessOpportunity from '../businessOpportunity/businessOpportunity';
import CustomerCard from '../customerCard/customerCard';

export default function ModalPage(props) {
    const { show, handleClose, data, handleSubmit } = props;

    let isAdd = false;
    if (!data) isAdd = true;

    const [list, setList] = useState(data && data.salesOppotunities.length > 0 ? [...data.salesOppotunities] : []);

    useEffect(() => {
        setList(data && data.salesOppotunities.length > 0 ? [...data.salesOppotunities] : [])
    }, [data]);

    const onSubmit = data => handleSubmit(data);
    const addBusinessOpportunity = () => {
        const newItem = {
            name: "dimuthu",
            status: "New",
            customerUuid: data.uuid
        }

        const newItems = [...list, newItem];

        setList(newItems);
    };

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
                            <Row>
                                <Col><h3>Sales Opportunities</h3></Col>
                                <Col>
                                    <Button variant="primary" onClick={addBusinessOpportunity}>
                                        Add
                                    </Button>
                                </Col>
                            </Row>
                            {list.map((val, index) => (
                                <BusinessOpportunity key={index} val={val} />
                            ))}
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