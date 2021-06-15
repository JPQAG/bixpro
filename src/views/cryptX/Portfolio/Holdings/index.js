import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FullTable from '../../../../components/cryptX/tables/React/AllHoldingsTable.js';
import PieDonutChart from "../../../../components/cryptX/charts/chart/PieDonutChart.js";

const Markets = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12} md={10} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Holdings Breakdown</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieDonutChart></PieDonutChart>
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
