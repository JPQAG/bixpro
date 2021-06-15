import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FullTable from '../../../../components/cryptX/tables/React/AllHoldingsTable.js';
import HoldingsQtyPieDonutChart from "../../../../components/cryptX/charts/chart/HoldingsQtyPieDonutChart.js";
import HoldingsValPieDonutChart from "../../../../components/cryptX/charts/chart/HoldingsValPieDonutChart.js";
import BitcoinWalletValCard from "../../../../components/cryptX/cards/BitcoinWalletVal.js"
import EthereumWalletValCard from "../../../../components/cryptX/cards/EthereumWalletVal.js"
import TotalWalletValCard from "../../../../components/cryptX/cards/TotalWalletVal.js"

const Holdings = () => {



    return (
        <React.Fragment>
            <Row>
                <Col xl={4} md={6} >
                    <BitcoinWalletValCard></BitcoinWalletValCard>
                </Col>
                <Col md={6} xl={4}>
                    <EthereumWalletValCard></EthereumWalletValCard>
                </Col>
                <Col md={12} xl={4}>
                    <TotalWalletValCard></TotalWalletValCard>
                </Col>
                <Col xl={6} md={10} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Portfolio Composition</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <HoldingsQtyPieDonutChart></HoldingsQtyPieDonutChart>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} md={10} >
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Portfolio Composition</Card.Title>
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

export default Holdings;
