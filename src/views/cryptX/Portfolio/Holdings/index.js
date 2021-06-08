import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Tab, Nav, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { CONFIG } from '../../../../config/constant';

console.log('HELLO');

const secretKey = CONFIG.binance.secretKey;
const apiKey = CONFIG.binance.apiKey;
const Binance = require('node-binance-api');
const binance = new Binance().options({
    APIKEY: apiKey,
    APISECRET: secretKey
});

binance.options({
    APIKEY: CONFIG.binance.secretKey,
    APISECRET: CONFIG.binance.apiKey,
    useServerTime: true,
    recvWindow: 60000, // Set a higher recvWindow to increase response timeout
    verbose: true, // Add extra output when subscribing to WebSockets, etc
    log: log => {
      console.log(log); // You can create your own logger here, or disable console output
    }
});

const baseURL = "https://api.binance.com";
const query = '/api/v3/time';
const url = baseURL + query;

const Holdings = () => {
    binance.prices('BNBBTC', (error, ticker) => {
        console.info("Price of BNB: ", ticker.BNBBTC);
    });

    const [holdings, setHoldings] = useState([]);

    const getHoldings = async () => {
        
        setHoldings(
            binance.balance((error, balances) => {
                if ( error ) return console.error(error);
                console.info("balances()", balances);
                console.info("ETH balance: ", balances.ETH.available);
            })
        );
        console.log('SetHoldings Complete');


        let ticker = await binance.prices();
        console.info(`Price of BNB: ${ticker.BNBUSDT}`);
        console.log('price of Bitcoin: ' + ticker.BTCUSDT);

        await binance.useServerTime();
        binance.balance((error, balances) => {
            if ( error ) return console.error(error);
            console.info("balances()", balances);
            console.info("ETH balance: ", balances.ETH.available);
          });
    }

    useEffect(() => {
        getHoldings()

        const interval=setInterval(() => {
            getHoldings()
        }, 1000)

        return() => clearInterval(
            interval
        )}, []
    );
    
    return (
        <React.Fragment>
            <Row>
                <Col xl={12} md={6}>
                    <Card className='code-table'>
                        <Card.Header>
                            <Card.Title as='h5'>Portfolio Holdings Now</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Filter</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="input-Group-sizing-sm" />
                            </InputGroup>
                            { holdings }
                            <Table response hover>
                                <thead>
                                    <tr>
                                        <th>First Column</th>
                                        <th>Second Column</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>First Data</td>
                                        <td>Second Data</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Holdings;