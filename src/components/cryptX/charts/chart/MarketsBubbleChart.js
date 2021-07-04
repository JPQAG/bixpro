import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';

//Create Data for Chart
function createBubbleData(data) {
    const bubbleData = [
        ['Symbol', 'Total Volume (Millions)', '24h Return (%)', 'Coin', 'Market Capitalisation']
    ];

    for (const holding in data) {
        if (data[holding]['market_cap_rank'] < 11) {
            bubbleData.push([
                data[holding]['symbol'].toUpperCase(),
                (data[holding]['total_volume'] / 1000000),
                data[holding]['price_change_percentage_24h'],
                data[holding]['symbol'].toUpperCase(),
                data[holding]['market_cap']
            ]);
            // console.log('Bubble Data', bubbleData);
        }
    }
    return bubbleData;
}

const MarketsBubbleChart = () => {

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
  
        console.log(coins)
  
        return() => clearInterval(
            interval
            )
        }, []
    );

    const handleChange = e => {
        setSearch(e.target.value)
    }
    
    const data = createBubbleData(filteredCoins);

    console.log("Here is bubble the data", data);


    return <Chart
        width='100%'
        height='600px'
        chartType="BubbleChart"
        loader={<div>Loading Chart</div>}
        // data={[
        //     ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
        //     ['CAN', 80.66, 1.67, 'North America', 33739900],
        //     ['DEU', 79.84, 1.36, 'Europe', 81902307],
        //     ['DNK', 78.6, 1.84, 'Europe', 5523095],
        //     ['EGY', 72.73, 2.78, 'Middle East', 79716203],
        //     ['GBR', 80.05, 2, 'Europe', 61801570],
        //     ['IRN', 72.49, 1.7, 'Middle East', 73137148],
        //     ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
        //     ['ISR', 81.55, 2.96, 'Middle East', 7485600],
        //     ['RUS', 68.6, 1.54, 'Europe', 141850000],
        //     ['USA', 78.09, 2.05, 'North America', 307007000],
        // ]}
        data={data}
        options={{
            title:
            'Daily Return, Traded Volume and Market Capitalization (Bubble Size)',
            hAxis: { title: 'Total Traded Volume (Millions)' },
            vAxis: { title: 'Price Change 24 (%)' },
            bubble: { textStyle: { fontSize: 10 } },
            colors: ['#1dc4e9', '#1de9b6', '#3ebfea', '#A389D4', '#899FD4']
        }}
        rootProps={{ 'data-testid': '4' }}
    />;
}

export default MarketsBubbleChart;