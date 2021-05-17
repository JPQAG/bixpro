import React, {useState, useEffect } from 'react';
import {Row, Col, Card, Table, Tab, Nav, Form, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AmChartEarnings1 from "./chart/AmChartEarnings1";
import AmChartYearlySummary from "./chart/AmChartYearlySummary";

import shape5 from '../../../assets/images/widget/shape5.png';
import axios from 'axios';

import Coin from './coin';

const DashEcommerce = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    
    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    
    
    

    const getCoins = async () => {
        axios
            .get(
                url
            )
            .then(res => {
                setCoins(res.data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getCoins()

        const interval=setInterval(() => {
            getCoins()
        }, 1000)

        return() => clearInterval(
            interval
            )
        }//, []
    );

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (
        <React.Fragment>
            <Row>
                <Col xl={12} md={6}>
                    <Card className='code-table'>
                        <Card.Header>
                            <Card.Title as='h5'>Cryptocurrencies</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Filter</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl onChange={handleChange} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                            <Table responsive hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Symbol</th>
                                    <th>Price</th>
                                    <th>24 Price Change</th>
                                    <th>24 Price Change (%)</th>
                                    <th>All Time High (ATH)</th>
                                    <th>Change from ATH</th>
                                    <th>Market Capitalization</th>
                                    <th>Updated</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredCoins.map(coin => {
                                    return (
                                        <Coin 
                                            key={coin.id}
                                            symbol={coin.symbol}
                                            name={coin.name}
                                            image={coin.image}
                                            current_price={coin.current_price}
                                            market_cap={coin.market_cap}
                                            market_cap_rank={coin.market_cap_rank}
                                            fully_diluted_valuation={coin.fully_diluted_valuation}
                                            total_volume={coin.total_volume}
                                            high_24={coin.high_24}
                                            low_24={coin.low_24}
                                            price_change_24h={coin.price_change_24h}
                                            price_change_percentage_24h={coin.price_change_percentage_24h}
                                            total_supply={coin.total_supply}
                                            max_supply={coin.max_supply}
                                            ath={coin.ath}
                                            ath_change_percentage={coin.ath_change_percentage}
                                            ath_date={coin.ath_date}
                                            last_updated={coin.last_updated}                                            
                                        />
                                    )
                                })}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DashEcommerce;