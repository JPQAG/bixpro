import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { CONFIG } from '../../../config/constant';

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

//Currency Formatter
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
  
  
const TotalWalletValCard = () => {
    const [ TotalWalletVal, setTotalWalletVal ] = useState('');
    const [ holdings, setHoldings ] = useState('');

    const getHoldings = async () => {
        //Binance API
        let ticker = await binance.prices();
        // console.log("TICKER LIST", ticker);
        await binance.useServerTime();
        binance.balance((error, balances) => {
          if ( error ) return console.error(error);
          let totalWalletValuation = 0;
          for (const holding in balances) {
            if (balances[holding]['available'] > -10) {
              const symbol = holding + "BUSD";
              balances[holding]['marketPrice'] = ticker[symbol];
              if (holding === "ETH") {
                  setTotalWalletVal(
                      formatter.format(balances[holding]['marketPrice'] * balances[holding]['available'])
                    )
              };
            };
            if (balances[holding]['available'] > 0) {
                totalWalletValuation += (balances[holding]['marketPrice'] * balances[holding]['available']);
            }
            console.log('Total Wallet Val: ' + totalWalletValuation)
          };
          setTotalWalletVal(
              formatter.format(totalWalletValuation)
            );
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

    const data = dataOne;

    return (
        <React.Fragment>
            <Card className='bg-c-blue bitcoin-wallet'>
                <Card.Body>
                    <h5 className="text-white mb-2">Total Wallet</h5>
                    <h2 className="text-white mb-3 f-w-300">{TotalWalletVal}</h2>
                    <span className="text-white d-block">Pricing by Binance</span>
                    <i className="fab fa-bitcoin f-70 text-white"/>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default TotalWalletValCard;