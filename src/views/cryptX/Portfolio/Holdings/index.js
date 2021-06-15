import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FullTable from '../../../../components/cryptX/tables/React/AllHoldingsTable.js';
import HoldingsQtyPieDonutChart from "../../../../components/cryptX/charts/chart/HoldingsQtyPieDonutChart.js";
import HoldingsValPieDonutChart from "../../../../components/cryptX/charts/chart/HoldingsValPieDonutChart.js";

const Markets = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={6} md={10} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Portfolio Composition by Quantity</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <HoldingsQtyPieDonutChart></HoldingsQtyPieDonutChart>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} md={10} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Portfolio Composition by Valuation</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <HoldingsValPieDonutChart></HoldingsValPieDonutChart>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12} md={10} >
                    <FullTable></FullTable>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Markets;
