import React, {useState, useEffect } from 'react';
import {Row, Col, Card, Table, Tab, Nav, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AmChartEarnings1 from "./chart/AmChartEarnings1";
import AmChartYearlySummary from "./chart/AmChartYearlySummary";

import shape5 from '../../../../../assets/images/widget/shape5.png';
import axios from 'axios';

import Coin from './coin';

import FullTable from '../../../../../components/cryptX/tables/React/AllCoinsTable';

const DashEcommerce = () => {

    return (
        <React.Fragment>
            <Row>
                <Col xl={12} md={10} >
                    <FullTable></FullTable>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default DashEcommerce;