import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';

// Create Data for Chart 
function createBarData(data) {
    const barData = [
        ['Symbol','24h Return (%)','Change from ATH (%)']
    ];

    for (const holding in data) {
        if (data[holding]['market_cap_rank'] < 11) {
            barData.push([
                data[holding]['symbol'].toUpperCase(),
                data[holding]['price_change_percentage_24h'],
                data[holding]['ath_change_percentage']
            ]);
        }
    }
    return barData;
}

const OneDayReturnBarChart = () => {

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
    
    const data = createBarData(filteredCoins);

    return <Chart
        width='100%'
        height='300px'
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        // data={[
        //     ['City', '2010 Population', '2000 Population'],
        //     ['New York City, NY', 8175000, 8008000],
        //     ['Los Angeles, CA', 3792000, 3694000],
        //     ['Chicago, IL', 2695000, 2896000],
        //     ['Houston, TX', 2099000, 1953000],
        //     ['Philadelphia, PA', 1526000, 1517000],
        // ]}
        data={data}
        options={{
            title: 'Price Performance',
            chartArea: { width: '50%' },
            isStacked: true,
            hAxis: {
                title: 'Percentage Change',
                minValue: 0,
            },
            vAxis: {
                title: 'Coin',
            },
            colors: ['#A389D4', '#04a9f5']
        }}
        rootProps={{ 'data-testid': '3' }}
    />;
}

export default OneDayReturnBarChart;