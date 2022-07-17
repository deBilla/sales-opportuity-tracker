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

const SALES_OPPORTUNITY_URL = server() + "/salesOpportunity/";

export default function SalesOpportunity(props) {
    const { val } = props;
    const [drpVal, setDrpVal] = useState(val && val.status ? val.status : '');

    useEffect(() => {
        setDrpVal(val && val.status ? val.status : '')
    }, [val]);

    const handleDropdownChange = salesOpportunity => {
        alert(salesOpportunity)
        setDrpVal(salesOpportunity);
        editStatus(salesOpportunity, val.id);
    };

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: val.name,
            customerUuid: val.customerUuid,
            status: val.status
        }
    });

    const handleUpload = (salesOpportunity) => {
        alert(JSON.stringify(salesOpportunity));
        createSalesOpportunity(salesOpportunity);
    };

    const createSalesOpportunity = salesOpportunity => {
        axios.post(SALES_OPPORTUNITY_URL, {
            ...salesOpportunity
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    const editStatus = (salesOpportunity, id) => {
        axios.patch(SALES_OPPORTUNITY_URL + id, {
            salesOpportunity
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    const onSubmit = salesOpportunity => handleUpload(salesOpportunity);

    return (<Form onSubmit={handleSubmit(onSubmit)}><Card key={val.id}>
        <Card.Body>
            <Card.Title><Form.Control required readOnly={val && val.name && val.name.length > 0} type="textarea" {...register("name")} /></Card.Title>
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