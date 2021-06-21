import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Tab, Nav, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import BitcoinWalletValCard from "../../../../../components/cryptX/cards/BitcoinWalletVal.js";
import EthereumWalletValCard from "../../../../../components/cryptX/cards/EthereumWalletVal.js";
import TotalWalletValCard from "../../../../../components/cryptX/cards/TotalWalletVal.js";
import HoldingsQtyPieDonutChart from "../../../../../components/cryptX/charts/chart/HoldingsQtyPieDonutChart.js";
import HoldingsValPieDonutChart from "../../../../../components/cryptX/charts/chart/HoldingsValPieDonutChart.js";

import axios from 'axios';

const DashHoldings = () => {

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
        </React.Fragment>
    )

    



}

export default DashHoldings;