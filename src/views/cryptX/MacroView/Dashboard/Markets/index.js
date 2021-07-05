import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import { Row, Col, Card, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import useInterval from 'react-useinterval';
import ApexCharts from 'apexcharts';
import { NavLink } from 'react-router-dom';
import FullTable from '../../../../../components/cryptX/tables/React/AllCoinsTable';
import MarketsMarketCapPieDonutChart from '../../../../../components/cryptX/charts/chart/MarketsMarketCapPieDonutChart.js';
import OneDayReturnBarChart from '../../../../../components/cryptX/charts/chart/OneDayReturnBarChart.js';
import MarketsBubbleChart from '../../../../../components/cryptX/charts/chart/MarketsBubbleChart.js';
import MarketsPriceLineAreaChart from '../../../../../components/cryptX/charts/chart/MarketsPriceLineAreaChart.js';
// import HistoricalPriceChartApex from '../../../../../components/cryptX/charts/chart/HistoricalPriceChartApex.js';

import Select from 'react-select';

import axios from 'axios';

const Markets = () => {

    return (
        <React.Fragment>
            <Row>
                <Col xl={12} md={10} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Market Performance</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <MarketsPriceLineAreaChart></MarketsPriceLineAreaChart>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} md={10} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Market Composition</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <MarketsMarketCapPieDonutChart></MarketsMarketCapPieDonutChart>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} md={10} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Market Performance</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <OneDayReturnBarChart></OneDayReturnBarChart>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12} md={20} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Charting the Market</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <MarketsBubbleChart></MarketsBubbleChart>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12} md={10} >
                    <FullTable></FullTable>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Markets;
