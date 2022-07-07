import React from 'react';
import { Dropdown, Card } from 'react-bootstrap';

export default function BusinessOpportunity(props) {
    const { val, key } = props;

    return (<Card key={key}>
        <Card.Body>
            <Card.Title>{val.name}</Card.Title>
            <Dropdown>
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
            </Dropdown>
        </Card.Body>
    </Card>);
}