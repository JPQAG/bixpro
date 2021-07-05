//IMPORTS
///Library Imports
import React, {useState, useEffect } from 'react';
import {Row, Col, Card, Form } from 'react-bootstrap';
import Chart from 'react-apexcharts';
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

const ApexHistoricalPriceLineChart = () => {

    let pairs = [
        "ETHUSDT",
        "BTCUSDT"
    ]

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
                }
            }, {
                opposite: true,
                title: {
                    text: 'Price',
                }
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
                x: 1,
                y: 2
            },{
                x: 1,
                y: 2
            }],
        }]
    };

    const [ dataSeries, setDataSeries ] = useState(defaultData);

    const getData = async () => {
        const dataLog = await getHistoricalPriceDataFromBinance( pairs[0], "30m", 50);
        console.log("DATALOG", dataLog.min);
        const dataLogTwo = await getHistoricalPriceDataFromBinance( [pairs[1]], "30m", 50);
        setDataSeries({
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
                        text: pairs[0] + ' Price',
                    },
                    min: dataLog.min,
                    max: dataLog.max
                }, {
                    opposite: true,
                    title: {
                        text: pairs[1]  + ' Price',
                    },
                    min: dataLogTwo.min,
                    max: dataLogTwo.max
                }]
            },
            series: [{
                name: pairs[0],
                type: 'line',
                data: dataLog.data,
            },{
                name: pairs[1],
                type: 'line',
                data: dataLogTwo.data,
            }]
        });
    };

    useEffect(() => {
        getData()
    });


    return (
        <React.Fragment>
            <Chart {...dataSeries} />
        </React.Fragment>
    );
};

export default ApexHistoricalPriceLineChart;
