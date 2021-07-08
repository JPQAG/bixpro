//IMPORTS 
///Settings/Configuration Imports
import { CONFIG } from '../../../../config/constant';
///Library Imports
import React, {useState, useEffect } from 'react';
import {Row, Col, Card, Form } from 'react-bootstrap';
import Select from 'react-select';
import Chart from 'react-google-charts';
import NumberFormat from 'react-number-format'; 
///Data/API Imports
import axios from 'axios';
import Binance from 'binance-api-node';

//CONFIGURATION
///Binance
////Set Keys
const secretKey = 'Oybc02pQQScPaFEP6KjAyGeVLgXzjFBx90xGQ4pQRNXZMepsH6yR6jbHFYutmBXy';
const apiKey = 'wPzSIGZZACmKjwLNhDBOMq8yUKv9l0xQ9zTsijYpQ1HZDYYt0tYndpbJQATEk5ih';
////Initialise Public API client
const client = Binance();
///Initialise Authenticated API client
const client2 = Binance({ apiKey: apiKey, apisecret: secretKey });


//FUNCTIONS
//Get data from binance
const getHistoricalPriceDataFromBinance = async ( symbol, interval, limit ) => {
    /**
     * Summary = Get Data from Binance for historical price.
     * 
     * Description: Query Binance API for candles data.
     * 
     * @symbol      {string}       trading pair symbol
     * @interval    {string}       interval e.g. "5m"
     * @limit       {Number}       Number of records
     * @startTime   {Number}       Start timestamp
     * @endTime     {Number}       End timestamp
     * 
     * RETURN       {array[objects]}
     */
    //Query Binance API
    const results = await client.candles({
        symbol: symbol,
        interval: interval,
        limit: limit,
        // startTime: startTime,
        // endTime: endTime
    });
    
    const columns = [
        'Date',
        `${symbol} Price`
    ];

    let lineData = [
        columns
    ];

    for (let row in results) {
        let array = [];
        let newDate = new Date(results[row].openTime);
        array.push(newDate);
        array.push(parseFloat(results[row].open));
        lineData.push(array);
    };
    return lineData;
};

const MarketsPriceLineAreaChart = () => {

    const [ priceDataFour, setPriceDataFour ] = useState([]);
    const [ pairSelection, setPairSelection ] = useState('');
    const [ intervalSelection, setIntervalSelection ] = useState('');
    const [ periodSelection, setPeriodSelection ] = useState();
    
    const pairOptions = [
        { value: 'ETHUSDT', label: 'ETH/USDT' },
        { value: 'BTCUSDT', label: 'BTC/USDT' },
        { value: 'ETHBTC', label: 'ETH/BTC' }
    ];

    const intervalOptions = [
        { value: '1m', label: '1m'},
        { value: '3m', label: '3m'},
        { value: '5m', label: '5m'},
        { value: '15m', label: '15m'},
        { value: '30m', label: '30m'},
        { value: '1h', label: '1h'},
        { value: '2h', label: '2h'},
        { value: '4h', label: '4h'},
        { value: '6h', label: '6h'},
        { value: '8h', label: '8h'},
        { value: '12h', label: '12h'},
        { value: '1d', label: '1d'},
        { value: '3d', label: '3d'},
        { value: '1w', label: '1w'},
        { value: '1M', label: '1M'}
    ];

    const periodOptions = [
    ];

    const defaultOptions = [
        "ETHUSDT",
        "1m",
        365
    ];

    for (let i = 10; i < 1000; i = i + 10){
        let number = i;
        periodOptions.push(
            { value: number, label: number}
        );
    };
    
    const getPriceDataFour = async () => {
        const dataLog = await getHistoricalPriceDataFromBinance(
            pairSelection ? pairSelection : "ETHUSDT",
            intervalSelection ? intervalSelection : '1d',
            periodSelection ? periodSelection: 365
        );
        setPriceDataFour(dataLog);
    };

    useEffect(() => {
        getPriceDataFour()
    });

    const data = priceDataFour;

    return (
        <React.Fragment>
            <Row>
                <Col xl={2} md={10} >
                    <Form.Group>
                        <Form.Label>
                           Pair:
                        </Form.Label>
                        <Select 
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue={defaultOptions[0]}
                            name="pairs"
                            options={pairOptions}
                            onChange={(e)=>{setPairSelection(e.value)}}
                        />
                    </Form.Group>
                </Col>
                <Col xl={2} md={10} >
                    <Form.Group>
                        <Form.Label>
                           Interval:
                        </Form.Label>
                        <Select 
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue={defaultOptions[1]}
                            name="intervals"
                            options={intervalOptions}
                            onChange={(e)=>{setIntervalSelection(e.value)}}
                        />
                    </Form.Group>
                </Col>
                <Col xl={2} md={10} >
                    <Form.Group>
                        <Form.Label>
                           Period:
                        </Form.Label>
                        <Select 
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue={defaultOptions[2]}
                            name="intervals"
                            options={periodOptions}
                            onChange={(e)=>{setPeriodSelection(e.value)}}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Card>
                <Chart
                    width='100%'
                    height='300px'
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    // data={[
                    //     ['Year', 'Sales', 'Expenses'],
                    //     ['2013', 1000, 400],
                    //     ['2014', 1170, 460],
                    //     ['2015', 660, 1120],
                    //     ['2016', 1030, 540],
                    // ]}
                    data={ data }
                    options={{
                        hAxis: { title: 'Date/Time', titleTextStyle: { color: '#333' } },
                        vAxis: { minValue: 0 },
                        colors: ['#1de9b6', '#1dc4e9']
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </Card>
        </React.Fragment>
    );
}

export default MarketsPriceLineAreaChart;