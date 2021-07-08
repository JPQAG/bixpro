//IMPORTS
///Library Imports
import React, {useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import {Row, Col, Card, Form, Button, OverlayTrigger, Tooltip, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import Select from 'react-select';
import chroma from 'chroma-js';
import ApexCharts from 'apexcharts';

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

//Functions
///Get data from binance
const getHistoricalPriceDataFromBinance = async ( symbol, interval, limit ) => {
    /**
     * Summary: Get data from Binance for historical price.
     * 
     * Description: Query Binance API for candles data return object of arrays containing data.
     * 
     * @symbol      {string}       trading pair symbol
     * @interval    {string}       interval e.g. "5m"
     * @limit       {Number}       Number of records
    //  * @startTime   {Number}       Start timestamp
    //  * @endTime     {Number}       End timestamp
     * 
     * RETURN       {array[objects]}
     */
    //Query Binance API
    const results = await client.candles({
        symbol: symbol,
        interval: interval,
        limit: limit
    });

    let returnData = [
    ];

    let dataMax = 0;
    let dataMin = 100000000000;

    for (let row in results){
        dataMax = (results[row].high > dataMax) ? results[row].high : dataMax;
        dataMin = (results[row].low < dataMin) ? results[row].low : dataMin;
        let dataSet = {};
        let newDate = new Date(results[row].openTime);
        dataSet['x'] = newDate;
        dataSet['y'] = parseFloat(results[row].open);
        returnData.push(dataSet);
    };

    return {
        data: returnData,
        min: dataMin,
        max: dataMax
    };
};

//Set Dataset and axes for chart
const setChartDataDataAndConfigurations = async ( pairSelection, tickIntervalSelection, tickQuantitySelection ) => {
    /**
     * Summary: Create data for chart.
     * 
     * Description: Pull API and create datasets as well as chart axes.
     * 
     * @PARAM       {ARRAY}     pairSelection = array of securitypairs.
     * @PARAM       {STRING}    tickIntervalSelection = interval for dataseries
     * @PARAM       {INT}       tickQuantitySelection = Number of data points of interval    
     */
    //Loop through pairs in pairselection array
    let dataSeriesArray = [];
    let yConfigArray = [];
    let oppositeBoolean = true;
    pairSelection.forEach(async (pair, i) => {
        let dataReturned = await getHistoricalPriceDataFromBinance( pair, tickIntervalSelection, tickQuantitySelection);
        ((i + 2) % 2 === 0) ? (oppositeBoolean = false) : (oppositeBoolean = true);
        dataSeriesArray.push({
            name: pair,
            type: 'line',
            data: dataReturned.data
        });
        yConfigArray.push({
            opposite: oppositeBoolean,
            title: {
                text: pair + ' Price'
            },
            min: dataReturned.min,
            max: dataReturned.max
        });        
    });

    return {
        dataSeriesArray: dataSeriesArray,
        yConfigArray: yConfigArray
    };
};

//Main
const ApexHistoricalPriceLineChart = () => {

    //Set constants
    const colourOptions = ['#1dc4e9', '#1de9b6', '#3ebfea', '#A389D4', '#899FD4'];
    const pairs = ['ETHUSDT', 'BTCUSDT', 'ETHBTC'];

    //Create Pair Options
    const pairOptions = [
        // { value: 'ETHBTC', label: 'ETH/BTC' }
    ];
    for (let i = 0; i < pairs.length; i++) {
        let array = {};
        array.value = pairs[i];
        array.label = pairs[i];
        array.color = colourOptions[i];
        pairOptions.push(array);
    }

    //Chart Data Configuration
    const chartTimePeriod = [
        '1H',
        '1D',
        '1W',
        '1M',
        '3M',
        '6M',
        '1Y',
        '3Y',
        '5Y'
    ];
    const chartDataInterval = [
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
    let defaultData = {
        width: '100%',
        height: 400,
        type: 'line',
        options: {
            stroke: {
                width: [4, 4]
            },
            colors: ['#1de9b6', '#1dc4e9'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: "vertical",
                    shadeIntensity: 0.25,
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 0.7,
                    stops: [50, 100]
                },
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: [{
                title: {
                    text: 'Price',
                },
                min: 100,
                max: 500000
            }, {
                opposite: true,
                title: {
                    text: 'Price',
                },
                min: 100,
                max: 500000
            }]
        },
        series: [{
            name: 'ETHUSDT',
            type: 'line',
            data: [{
                x: 100000,
                y: 200000
            },{
                x: 10000,
                y: 20000
            }],
        },{
            name: 'BTCUSDT',
            type: 'line',
            data: [{
                x: 100000,
                y: 200000
            },{
                x: 10000,
                y: 20000
            }],
        }]
    };

    //Chart Trading Pair Selector Configuration
    const colorStylesMulti = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? null
                    : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
                        : data.color,
                cursor: isDisabled ? 'not-allowed' : 'default',
            };
        },
        multiValue: (styles, { data }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: color.alpha(0.1).css(),
            };
        },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: data.color,
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: data.color,
            ':hover': {
                backgroundColor: data.color,
                color: 'white',
            },
        }),
    };

    //Chart Timeperiod selector Configuration
    const timeperiodButtonToolbarHandler = ( timeperiod ) => {
        setTimeperiod(timeperiod);
    };
    const timeperiodButtonToolbar = chartTimePeriod.map((variant, idx) => (
        <Button variant="outline-info" onClick={ timeperiodButtonToolbarHandler }>{variant}</Button>
    ));

    //State Configuration
    const [ pairSelection, setPairSelection ] = useState(['ETHUSDT']);
    const [ tickIntervalSelection, setTickIntervalSelection ] = useState("30m");
    const [ tickQuantitySelection, setTickerQuantitySelection ] = useState( 10 );
    const [ dataSeries, setDataSeries ] = useState(defaultData);
    const [ timeperiod, setTimeperiod ] = useState("1D")
    const [ startDate, setStartDate ] = useState(new Date());
    const [ endDate, setEndDate ] = useState(new Date() - 365);

    const getData = async () => {
        const chartConfig = await setChartDataDataAndConfigurations( pairSelection, tickIntervalSelection, tickQuantitySelection );
        setDataSeries({
            width: '100%',
            height: 400,
            type: 'line',
            options: {
                stroke: {
                    width: [4, 4]
                },
                colors: colourOptions,
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0.25,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 0.7,
                        stops: [50, 100]
                    },
                },
                xaxis: {
                    type: 'datetime',
                },
                yaxis: chartConfig.yConfigArray,
            },
            series: chartConfig.dataSeriesArray,
        });
    };

    useEffect(() => {
        useInterval()
        getData()
    });

    //Change Handlers
    const handleChangeStartDate = (date) => {
        setStartDate(date);
    };
    const handleChangeEndDate = (date) => {
        setEndDate(date);
    };



    //Render
    return (
        <React.Fragment>
            <Row>
                <Col xl={12} md={12}>
                    <Form inline>
                        <Col xl={6} md={12}>
                            <Form.Group className="mb-2">
                                <Form.Control plaintext readOnly defaultValue="Trading Pair:"/>
                            </Form.Group>
                            <Form.Group className="mb-2 mr-5">
                                <Select 
                                    closeMenuOnSelect={false}
                                    defaultValue={[pairOptions[0], pairOptions[1]]}
                                    isMulti
                                    options={pairOptions}
                                    styles={colorStylesMulti}
                                />
                            </Form.Group>
                        </Col>
                        <Col xl={6} md={12}>
                            <Form.Group className="mb-2">
                                <Form.Control plaintext readOnly defaultValue="Timeperiod:"/>
                            </Form.Group>
                            <Form.Group className="mb-2 mr-5">
                                <ButtonToolbar aria-label="Toolbar with button groups">
                                    <ButtonGroup className="mr-2" aria-label="First group" size="sm">
                                        { timeperiodButtonToolbar }
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Form.Group>
                        </Col>
                        {/* <Form.Group>
                            <DatePicker selected={startDate} onChange={handleChangeStartDate} className="form-control" />
                        </Form.Group>
                        <Form.Group>
                            <DatePicker selected={endDate} onChange={handleChangeEndDate} className="form-control" />
                        </Form.Group> */}
                    </Form>
                    <Chart {...dataSeries} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ApexHistoricalPriceLineChart;
