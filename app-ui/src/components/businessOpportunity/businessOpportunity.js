import React from 'react';
import { Dropdown, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import server from '../../config/server';
import axios from "axios";

export default function BusinessOpportunity(props) {
    const { val } = props;
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: val.name,
            customerUuid: val.customerUuid,
            status: val.status
        }
    });

    const handleUpload = (data) => {
        alert(JSON.stringify(data));
        createSalesOpportunity(data);
    };

    const createSalesOpportunity = data => {
        axios.post(server() + '/salesOpportunity', {
            ...data
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    const onSubmit = data => handleUpload(data);

    return (<Form onSubmit={handleSubmit(onSubmit)}><Card key={val.id}>
        <Card.Body>
            <Card.Title><Form.Control type="textarea" {...register("name")} /></Card.Title>
            <Row>
                <Col><Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        {val.status}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item active>
                            Another action
                        </Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown></Col>
                <Col><Button type='submit' variant='success'>Submit</Button></Col>
            </Row>
        </Card.Body>
    </Card></Form>);
}