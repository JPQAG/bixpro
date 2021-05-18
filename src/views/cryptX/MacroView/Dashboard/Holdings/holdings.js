import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Tab, Nav, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';

const DashHoldings = () => {

    return (
        <React.Fragment>
            <Row>
                <Col xl={12} md={6}>
                    <Card className='code-table'>
                        <Card.Header>
                            <Card.Title as='h5'>Portfolio Holdings</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Filter</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="input-Group-sizing-sm" />
                            </InputGroup>
                            <Table response hover>
                                <thead>
                                    <tr>
                                        <th>First Column</th>
                                        <th>Second Column</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>First Data</td>
                                        <td>Second Data</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )

    



}

export default DashHoldings;