const axios = require('axios');
import { CONFIG } from '../src/config/constant.js';

//PostgreSQL database connection
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'JAnthony1994@',
  port: 5432,
});

//Binance Data API setup
const Binance = require('binance-api-node').default;
///Public Data Client
const client = Binance();
///Authenticated Client
const client2 = Binance({
  apiKey: CONFIG.binance.secretKey,
  apisecret: CONFIG.binance.apiKey,
});

//Update Trade Data
const updateTradesTable = async () => {
  console.log('Starting update of Trades Table...');
  const exchangeInfo = await client.exchangeInfo();
  // for (let i = 0; i < 50; i++) {
  //   const pairObject = exchangeInfo.symbols[i];
  //   const pairSymbol = pairObject.symbol;
  //   // console.log(pairSymbol);
  // };

  const tradesPair = 'ETHBTC';

  //Get most recent trade id
  const tradesData = await client2.tradesHistory(
    { 
      symbol: tradesPair,
      limit: 1
    }
  );
  const latestTrade = tradesData[0]['id'];
  console.log( typeof latestTrade);
  //Pull 500 trades before this id
  //Loop through and add these trades to database if not there already
  //SUbtract 500 from most recent trade id and do this again

  for (let i = latestTrade; i > (latestTrade - 500000); i = i - 500) {
    console.log(i);
    let latestTradesData = await client2.tradesHistory({ symbol: tradesPair, fromId: i});

    for (let j = 0; j < latestTradesData.length; j++) {
      const tradeData = latestTradesData[j];
      pool.query(
        'INSERT INTO trades (id, pair, exchange, price, qty, base_asset, quote_asset, datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [
          tradeData['id'],
          tradesPair,
          'Binance',
          tradeData['price'],
          tradeData['qty'],
          'ETH',
          'BTC',
          tradeData['time']
        ],
        (error, results) => {
          if (error) {
            // console.log(error.details);
          };
        }
      )
    }
  };


}

//Update securities data
const updateSecuritiesTable = async () => {
  console.log('Starting update of securities table...');

  let updateStatus = {
    'Errors': 0,
    'SymbolsAdded': 0
  };

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  
  let securitiesTableData = '';
  
  pool.query('SELECT * FROM securities', (error, results) => {
    if (error) {
      throw error
    };
    securitiesTableData = results.rows[0];
  });

  axios 
    .get(
      url
    )
    .then(res => {
      for (let i = 0; i < 50; i++){
        
        let row = res.data[i];
        let id = row['id']
        let code = row['symbol'];
        let name = row['name'];

        pool.query('INSERT INTO securities (id, code, name) VALUES ($1, $2, $3)', [id, code, name], (error, results) => {
          if (error) {
            updateStatus.Errors = updateStatus.Errors + 1;
          } else {
            updateStatus.SymbolsAdded = updateStatus.SymbolsAdded + 1;
          }
        });
      };
    })
    .catch(
      error => console.log(error)
  );

};

updateTradesTable();

//Data fetch interval
// const interval = setInterval(() => {
//   // updateSecuritiesTable()
//   updateTradesTable()
// }, 60000);


// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM users WHERE id = 1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const createUser = (request, response) => {
//   const { name, email } = request.body

//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }




// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// }