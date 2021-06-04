import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AmChartStatistics1 from "./chart/AmChartStatistics1";
import AmChartStatistics8 from "./chart/AmChartStatistics8";
import AmChartWorldUser from "./chart/AmChartWorldUser";

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
    const [data, setData] = useState([]);
    const [latestDate, setLatestDate] = useState(new Date('11 Feb 2017 GMT').getTime());

    const dataProvider = (baseval) => {
        const yrange = {min: 10, max: 90};
        const newDate = latestDate + 86400000;
        const newData = {
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        };

        setLatestDate(newDate);

        const latestData = [
            ...data,
            newData
        ];

        const newSeries = [{
            ...lineChart.series,
            data: latestData
        }];

        setData(latestData);

        ApexCharts.exec(`line-chart`, 'updateSeries' , newSeries);
    };

    useEffect(() => {
        let i = 0;
        let baseval = new Date('11 Feb 2017 GMT').getTime();
        const count = 10;
        const yrange = {min: 10, max: 90};

        let newData = [];
        let newDate;

        while (i < count) {
            const x = baseval;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            newData = [...newData, {x, y}];
            newDate = baseval;
            baseval += 86400000;
            i++;
        }
        setLatestDate(newDate);
        setData(newData);
    }, [setLatestDate, setData]);

    useInterval(dataProvider, 2000, latestDate);

    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={4}>
                    <Card className='theme-bg bitcoin-wallet'>
                        <Card.Body>
                            <h5 className="text-white mb-2">Bitcoin Wallet</h5>
                            <h2 className="text-white mb-3 f-w-300">$1,450,302</h2>
                            <span className="text-white d-block">Pricing by Binance</span>
                            <i className="fab fa-bitcoin f-70 text-white"/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className='theme-bg2 bitcoin-wallet'>
                        <Card.Body>
                            <h5 className="text-white mb-2">Ethereum Wallet</h5>
                            <h2 className="text-white mb-3 f-w-300">$2,435,101</h2>
                            <span className="text-white d-block">Pricing by Binance</span>
                            <i className="fas fa-dollar-sign f-70 text-white"/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={4}>
                    <Card className='bg-c-blue bitcoin-wallet'>
                        <Card.Body>
                            <h5 className="text-white mb-2">Dogecoin Wallet</h5>
                            <h2 className="text-white mb-3 f-w-300">$7,501</h2>
                            <span className="text-white d-block">Pricing by Binance</span>
                            <i className="fa fa-database f-70 text-white"/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Intraday Market Pricing</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...heatMapChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Live Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...lineChart} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8} md={6}>
                    <Card className='note-bar'>
                        <Card.Header>
                            <Card.Title as='h5'>Notifications</Card.Title>
                        </Card.Header>
                        <Card.Body className='p-0'>
                            <Link to='#' className="media friendlist-box">
                                <div className="mr-3 photo-table">
                                    <i className="fa fa-bell f-30"/>
                                </div>
                                <div className="media-body">
                                    <h6>Bloomberg Article: Have Ether Prices Become Overheared After Their Latest Gains?</h6>
                                    <span className="f-12 float-right text-muted">12.56</span>
                                    <p className="text-muted m-0">Read more...</p>
                                </div>
                            </Link>
                            <Link to='#' className="media friendlist-box border-top">
                                <div className="mr-3 photo-table">
                                    <i className="fa fa-bell f-30"/>
                                </div>
                                <div className="media-body">
                                    <h6>Forum Post: Ethereum is the best.</h6>
                                    <span className="f-12 float-right text-muted">12.36</span>
                                    <p className="text-muted m-0">Literally the best...</p>
                                </div>
                            </Link>
                            <Link to='#' className="media friendlist-box border-top">
                                <div className="mr-3 photo-table">
                                    <i className="fa fa-bell f-30"/>
                                </div>
                                <div className="media-body">
                                    <h6>Coinbase: Ethereum is worth $7</h6>
                                    <span className="f-12 float-right text-muted">11.45</span>
                                    <p className="text-muted m-0">Sell now...</p>
                                </div>
                            </Link>
                            <div className="media friendlist-box border-top">
                                <div className="mr-3 photo-table">
                                    <i className="fa fa-bell f-30"/>
                                </div>
                                <div className="media-body">
                                    <h6>TRADE ALERT: Limit Order Filled</h6>
                                    <span className="f-12 float-right text-muted">9.39</span>
                                    <p className="text-muted m-0">20 ETH Bought at $12.00</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Markets</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="media">
                                <div className="photo-table">
                                    <h6 className="text-muted">Dash/USD<span className="text-c-green ml-3">2.56%</span></h6>
                                    <h6>1,0452 <span className="ml-2"> USD</span></h6>
                                </div>
                                <div className="media-body">
                                    <span className='float-right'>
                                        <LineChart width={100} height={40} data={dataMarketsView}>
                                            <Line dataKey="a" dot={false} stroke="#1DE3BE" strokeWidth={3} />
                                        </LineChart>
                                    </span>
                                </div>
                            </div>
                            <div className="media mt-4">
                                <div className="photo-table">
                                    <h6 className="text-muted">ETH/USD<span className="text-c-red ml-3">-0.87%</span></h6>
                                    <h6>0,0157<span className="ml-2"> USD</span></h6>
                                </div>
                                <div className="media-body">
                                    <span className='float-right'>
                                        <LineChart width={100} height={40} data={dataMarketsView}>
                                            <Line dataKey="a" dot={false} stroke="#FF4962" strokeWidth={3} />
                                        </LineChart>
                                    </span>
                                </div>
                            </div>
                            <div className="media mt-4">
                                <div className="photo-table">
                                    <h6 className="text-muted">ZEC/USD<span className="text-c-purple ml-3">1.56%</span></h6>
                                    <h6>2,0764<span className="ml-2"> USD</span></h6>
                                </div>
                                <div className="media-body">
                                    <span className='float-right'>
                                        <LineChart width={100} height={40} data={dataMarketsView}>
                                            <Line dataKey="a" dot={false} stroke="#8C9CD4" strokeWidth={3} />
                                        </LineChart>
                                    </span>
                                </div>
                            </div>
                            <div className="media mt-4">
                                <div className="photo-table">
                                    <h6 className="text-muted">BTC/USD<span className="text-c-green ml-3">2.56%</span></h6>
                                    <h6>1,0452<span className="ml-2"> USD</span></h6>
                                </div>
                                <div className="media-body">
                                    <span className='float-right'>
                                        <LineChart width={100} height={40} data={dataMarketsView}>
                                            <Line dataKey="a" dot={false} stroke="#1DE3BE" strokeWidth={3} />
                                        </LineChart>
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Holdings</Card.Title>
                            <span className="d-block m-t-5">Current portfolio holdings.</span>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Quantity</th>
                                    <th>Ticker</th>
                                    <th>Security</th>
                                    <th>Market Price</th>
                                    <th>Valuation</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>249</td>
                                    <td>BTC</td>
                                    <td>Bitcoin</td>
                                    <td>USD44,394</td>
                                    <td>$1,450,302</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                    <td>112</td>
                                    <td>ETH</td>
                                    <td>Ethereum</td>
                                    <td>USD12,759</td>
                                    <td>$1,004,302</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                    <td>40</td>
                                    <td>DOGE</td>
                                    <td>Dogecoin</td>
                                    <td>USD34,890</td>
                                    <td>$450,302</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default DashCrypto;