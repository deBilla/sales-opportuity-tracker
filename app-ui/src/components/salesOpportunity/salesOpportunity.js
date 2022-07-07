import React, { useEffect, useState } from 'react';
import { Dropdown, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import server from '../../config/server';
import axios from "axios";

const Status = {
    NEW: "New",
    CLOSEDWON: "Closed Won",
    CLOSEDLOST: "Closed Lost"
}

export default function SalesOpportunity(props) {
    const { val } = props;
    const [drpVal, setDrpVal] = useState(val && val.status ? val.status : '');

    useEffect(() => {
        setDrpVal(val && val.status ? val.status : '')
    }, [val]);

    const handleDropdownChange = data => {
        alert(data)
        setDrpVal(data);
        editStatus(data, val.id);
    };

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

    const editStatus = data => {
        axios.patch(server() + '/salesOpportunity/' + val.id, {
            data
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    const onSubmit = data => handleUpload(data);

    return (<Form onSubmit={handleSubmit(onSubmit)}><Card key={val.id}>
        <Card.Body>
            <Card.Title><Form.Control type="textarea" {...register("name")} /></Card.Title>
            <Row>
                <Col><Dropdown onSelect={handleDropdownChange}>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        {Status[drpVal]}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item eventKey="NEW" active>New</Dropdown.Item>
                        <Dropdown.Item eventKey="CLOSEDWON">Closed won</Dropdown.Item>
                        <Dropdown.Item eventKey="CLOSEDLOST">Closed lost</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown></Col>
                <Col><Button type='submit' variant='success'>Submit</Button></Col>
            </Row>
        </Card.Body>
    </Card></Form>);
}