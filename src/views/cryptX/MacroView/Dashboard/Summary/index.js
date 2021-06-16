import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import FullTable from '../../../../../components/cryptX/tables/React/AllHoldingsTable.js';
import BitcoinWalletValCard from "../../../../../components/cryptX/cards/BitcoinWalletVal.js";
import EthereumWalletValCard from "../../../../../components/cryptX/cards/EthereumWalletVal.js";
import TotalWalletValCard from "../../../../../components/cryptX/cards/TotalWalletVal.js";
import HoldingsQtyPieDonutChart from "../../../../../components/cryptX/charts/chart/HoldingsQtyPieDonutChart.js";
import HoldingsValPieDonutChart from "../../../../../components/cryptX/charts/chart/HoldingsValPieDonutChart.js";
import MarketsMarketCapPieDonutChart from '../../../../../components/cryptX/charts/chart/MarketsMarketCapPieDonutChart.js';
import OneDayReturnBarChart from '../../../../../components/cryptX/charts/chart/OneDayReturnBarChart.js';
import MarketsBubbleChart from '../../../../../components/cryptX/charts/chart/MarketsBubbleChart.js';
import MarketsPriceLineAreaChart from '../../../../../components/cryptX/charts/chart/MarketsPriceLineAreaChart.js';


// Imports for heatmap chart and Live line chart
import Chart from "react-apexcharts";
import { Row, Col, Card, ButtonToolbar, ToggleButtonGroup, ToggleButton, Table } from 'react-bootstrap';
import useInterval from 'react-useinterval';
import ApexCharts from 'apexcharts';
import ModuleNotification from '../../../../../components/Widgets/Statistic/Notification';
import heatMapChart1 from './chart/heat-map-chart-1'; 
import lineChart from "./chart/line-chart";
import { BarChart, Bar, LineChart, Line } from 'recharts';

const dataMarketsView = [
    { a: 10 },
    { a: 20 },
    { a: 10 },
    { a: 27 },
    { a: 10 },
    { a: 20 },
    { a: 15 }
  ];

const DashCrypto = () => {

    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={4}>
                    <BitcoinWalletValCard></BitcoinWalletValCard>
                </Col>
                <Col md={6} xl={4}>
                    <EthereumWalletValCard></EthereumWalletValCard>
                </Col>
                <Col md={6} xl={4}>
                    <TotalWalletValCard></TotalWalletValCard>
                </Col>
            </Row>
            <Row>
                <Col md={6} xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Portfolio Composition</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <HoldingsQtyPieDonutChart></HoldingsQtyPieDonutChart>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Portfolio Composition</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <HoldingsValPieDonutChart></HoldingsValPieDonutChart>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
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
            </Row>
            <Row>
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
        </React.Fragment>
    );
}

export default DashCrypto;