import React from 'react';
import { Form, Dropdown, Card } from 'react-bootstrap';

export default function CustomerCard(props) {
    const { data, isAdd } = props;

    return (<Card>
        <Card.Body>
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
                                <Dropdown.Item active>
                                    Another action
                                </Dropdown.Item>
                                <Dropdown.Item >Another action</Dropdown.Item>
                                <Dropdown.Item >Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                }
            </Form>
        </Card.Body>
    </Card>);
}