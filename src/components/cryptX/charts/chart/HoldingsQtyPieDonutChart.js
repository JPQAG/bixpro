import React, { useState, useEffect } from 'react';
import { CONFIG } from '../../../../config/constant';
import Chart from 'react-google-charts';

//API Configuration
///Import for API Keys from Config
const secretKey = CONFIG.binance.secretKey;
const apiKey = CONFIG.binance.apiKey;
//Binance API
const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: apiKey,
  APISECRET: secretKey
});
binance.options({
  APIKEY: apiKey,
  APISECRET: secretKey,
  useServerTime: true,
  recvWindow: 5000, // Set a higher recvWindow to increase response timeout
  verbose: true, // Add extra output when subscribing to WebSockets, etc
  log: log => {
    console.log(log); // You can create your own logger here, or disable console output
  }
});

//Refactor Data Function
function objectParse(data) {
    let newData = [];
    for (const prop in data) {
      newData.push({
        symbol: prop,
        available: data[prop].available,
        onOrder: data[prop].onOrder,
        marketPrice: data[prop].marketPrice,
        marketValue: (data[prop].marketPrice * data[prop].available),
      })
    };
    return newData;
};

//Create Data for Pie Chart from data set
function createPieData(data) {
    const pieData = [
        ['Symbol', 'Quantity']
    ];

    for (const holding in data) {
        pieData.push([
            data[holding]['symbol'],
            parseFloat(data[holding]['available'])
        ]);
        console.log(pieData);
    };

    return pieData;
}

const HoldingsQtyPieDonutChart = () => {

    const [ holdings, setHoldings ] = useState('');

    const getHoldings = async () => {
        //Binance API
        console.info( await binance.futuresPrices() );
        let ticker = await binance.prices();
        // console.log("TICKER LIST", ticker);
        await binance.useServerTime();
        binance.balance((error, balances) => {
          if ( error ) return console.error(error);
          for (const holding in balances) {
            if (balances[holding]['available'] > -10) {
              const symbol = holding + "BUSD";
              balances[holding]['marketPrice'] = ticker[symbol];
            }
          };
          console.log("Final Balances", balances);
    
          setHoldings(balances)
          return ticker;
        });
    }

    useEffect(() => {
        getHoldings()
  
        const interval=setInterval(() => {
            getHoldings()
        }, 10000)
  
        return() => clearInterval(
            interval
            )
        }, []
    );

    const dataOne = objectParse(holdings);

    const filteredHoldingsTwo = dataOne.filter(holding => 
        holding.available > 0
    );

    const data = createPieData(filteredHoldingsTwo);

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
            title: 'by Quantity',
            pieHole: 0.4,
            colors: ['#1dc4e9', '#1de9b6', '#3ebfea', '#A389D4', '#899FD4']
        }}
        rootProps={{ 'data-testid': '3' }}
    />;
}

export default HoldingsQtyPieDonutChart;