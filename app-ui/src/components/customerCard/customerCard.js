import React, { useState, useEffect } from 'react';
import { Form, Dropdown, Card, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Status = {
    ACTIVE: "Active",
    NONACTIVE: "Non-Active",
    LEAD: "Lead"
}

export default function CustomerCard(props) {
    const { data, isAdd, onSubmit, handleStatusChange } = props;
    const [drpVal, setDrpVal] = useState(data && data.status ? data.status : '');

    useEffect(() => {
        setDrpVal(data && data.status ? data.status : '')
    }, [data]);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: isAdd ? '' : data.firstName,
            lastName: isAdd ? '' : data.lastName,
            phoneNumber: isAdd ? '' : data.phoneNumber,
            addressLine1: isAdd ? '' : data.addressLine1,
            addressLine2: isAdd ? '' : data.addressLine2,
            postalCode: isAdd ? '' : data.postalCode,
            city: isAdd ? '' : data.city,
            state: isAdd ? '' : data.state,
            country: isAdd ? '' : data.country
        }
    });

    const handleDropdownChange = val => {
        setDrpVal(val);
        handleStatusChange(val, data.uuid);
    };

    return (<Card>
        <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Row>
                        <Col><Form.Control required readOnly={!isAdd} type="textarea" {...register("firstName")} /></Col>
                        <Col><Form.Control required readOnly={!isAdd} type="textarea" {...register("lastName")} /></Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control required readOnly={!isAdd} type="textarea" {...register("phoneNumber")} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Row>
                        <Col><Form.Control readOnly={!isAdd} type="textarea" {...register("addressLine1")} /></Col>
                        <Col><Form.Control readOnly={!isAdd} type="textarea" {...register("addressLine2")} /></Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control required readOnly={!isAdd} type="textarea" {...register("postalCode")} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control required readOnly={!isAdd} type="textarea" {...register("city")} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control required readOnly={!isAdd} type="textarea" {...register("state")} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control required readOnly={!isAdd} type="textarea" {...register("country")} />
                </Form.Group>
                <Row>
                    <Col>{!isAdd &&
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    {Status[drpVal]}
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item eventKey="ACTIVE" active>Active</Dropdown.Item>
                                    <Dropdown.Item eventKey="NONACTIVE" >Non Active</Dropdown.Item>
                                    <Dropdown.Item eventKey="LEAD" >Lead</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    }</Col>
                    <Col>
                        {isAdd &&
                            <Button type='submit' variant="primary">Submit</Button>
                        }
                    </Col>
                </Row>
            </Form>
        </Card.Body>
    </Card>);
}