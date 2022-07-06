import React from 'react';
import { Modal, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';

export default function ModalPage(props) {
    const { show, handleClose, data, isAdd } = props;

    return (
        <Modal show={show} >
            <Modal.Header>
                <Modal.Title>{isAdd ? 'Add New Customer Detail' : 'Details for: ' + data.firstName + ' ' + data.lastName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control readOnly={!isAdd} type="textarea" defaultValue={data.firstName + ' ' + data.lastName} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control readOnly={!isAdd} type="textarea" defaultValue={data.phoneNumber} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control readOnly={!isAdd} type="textarea" defaultValue={data.addressLine1 + ', ' + data.addressLine2} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control readOnly={!isAdd} type="textarea" defaultValue={data.city} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control readOnly={!isAdd} type="textarea" defaultValue={data.state} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Control readOnly={!isAdd} type="textarea" defaultValue={data.country} />
                    </Form.Group>
                    {!isAdd &&
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    {data.status}
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-1" active>
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Save</Button>
            </Modal.Footer>
        </Modal >
    );
}