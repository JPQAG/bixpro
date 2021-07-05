import React, { useState, useEffect } from 'react';
import { CONFIG } from '../../../../config/constant';
import Chart from 'react-google-charts';
import axios from 'axios';

//Create Data for Pie Chart from data set
function createPieData(data) {
    const pieData = [
        ['Symbol', 'Market Capitalization']
    ];

    for (const holding in data) {
        if (data[holding]['market_cap_rank'] < 11) {
            pieData.push([
                data[holding]['symbol'].toUpperCase(),
                data[holding]['market_cap']
            ]);
        }
    }

    return pieData;
}

function MarketsMarketCapPieDonutChart() {

    const [ coins, setCoins ] = useState([]);
    const [ search, setSearch ] = useState('');

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
        }, 60000)
    
        return() => clearInterval(
            interval
            )
        }, []
    );

    const handleChange = e => {
        setSearch(e.target.value)
    }
    
    const data = createPieData(filteredCoins);

    return <Chart
        width='100%'
        height='300px'
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        // data={[
        //     ['Task', 'Hours per Day'],
        //     ['Work', 11],
        //     ['Eat', 2],
        //     ['Commute', 2],
        //     ['Watch TV', 2],
        //     ['Sleep', 7],
        // ]}
        options={{
            title: 'by Capitalization',
            pieHole: 0.4,
            colors: ['#1dc4e9', '#1de9b6', '#3ebfea', '#A389D4', '#899FD4']
        }}
        rootProps={{ 'data-testid': '3' }}
    />;
}

export default MarketsMarketCapPieDonutChart;
