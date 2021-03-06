////////
//IMPORTS
///Axios for api call
const axios = require('axios');
///PostgreSQL database connection
const Pool = require('pg').Pool
///Binance Data API
const Binance = require('binance-api-node').default

////////
//CONFIGURATION
///Binance
////Set Keys
const secretKey = 'Oybc02pQQScPaFEP6KjAyGeVLgXzjFBx90xGQ4pQRNXZMepsH6yR6jbHFYutmBXy';
const apiKey = 'wPzSIGZZACmKjwLNhDBOMq8yUKv9l0xQ9zTsijYpQ1HZDYYt0tYndpbJQATEk5ih';
////Initialise Public API client
const client = Binance();
///Initialise Authenticated API client
const client2 = Binance({ apiKey: apiKey, apisecret: secretKey });
///PostgresQL
////Initialise new Pool
const pool = new Pool({ user: 'postgres', host: 'localhost', database: 'postgres', password: 'JAnthony1994@', port: 5432 });

////////
//FUNCTIONS
///Check Rate Limits
const rateLimitChecker = async ( timestamp ) => {
  /**
   * Summary: Check Binance API Rate Limit. 
   * 
   * Description: Checks if approaching binance API rate limit and breaks if within 50 'weight.
   * 
   * @yield {char} weight remaining before limit is exceeded.
   * 
   * @return {char} true if limit not exceeded. False Otherwise.
   */
  //Retrieve current rate limits
  ///Get exchange info.
  const exchangeInfoBinance = await client.exchangeInfo();
  ///Get rateLimits from exchange info. Returns array of objects.
  const rateLimits = exchangeInfoBinance.rateLimits;
  //Create ratelimit variable
  let rateLimit = 0;
  ///Find request_weight object in array
  for (let i = 0; i < rateLimits.length; i++) {
    if (rateLimits[i].rateLimitType == "REQUEST_WEIGHT" && rateLimits[i].interval == "MINUTE") {
      rateLimit = (rateLimits[i].limit / rateLimits[i].intervalNum);
    };
  };
  //Retrieve How much has been used.
  ///Get info object
  const usedRequestsObject = await client.getInfo();
  //Find spot usedWeight1m
  let usedRequestsOneMinute = usedRequestsObject.spot.usedWeight1m;
  //Convert string to integer
  usedRequestsOneMinute = parseInt(usedRequestsOneMinute);
  //Calculate remaining weight to use
  const remainingWeight = rateLimit - usedRequestsOneMinute;
  //Get current time
  let dateNow = new Date();
  let timestampNow = dateNow.getTime();
  let timeSinceMinInterval = (timestampNow - timestamp);
  //Return result
  if (remainingWeight > 50) {
    return timestamp;
  } else {
    console.log(`CALL LIMIT REACHED....Backing off API for ${(60000 - timeSinceMinInterval)/1000} seconds....`)
    setTimeout(function(){
      return timestamp;
    }, (60000 - timeSinceMinInterval));
    console.log(`API Call Breach - waiting...`)
    return timestamp;
  };
};

///Get most Recent Trade id
const getRecentTradeID = async ( pair ) => {
  /**
   * Summary: Get most recent trade id of pair.
   * 
   * Description: Query API for most recent trade. Return id of this trade.
   * 
   * Paramaters:
   * @pair    {type}    char    String of trading pair.
   * 
   * Return:
   * @id      {type}    int     Integer of most recent trade.       
   */
  //Query trades history
  const tradesData = await client2.tradesHistory({ symbol: pair, limit: 2});
  //Take ID of latest Trade
  const latestTrade = tradesData[0]['id'];

  return latestTrade;
};

///SQL Query - get list of pairs that have historical trade data
const getPairsWithData = async () => {
  /**
   * Summary: Query Database to return list of securities with historical Trade Data.
   * 
   * Description: SQL Query to trades table in database that returns an array of strings.
   * 
   * @Return    {array}   Array of pairs that have historical trade data in database.
   */
  //Query the database
  pool.query(
    'SELECT DISTINCT pair FROM trades',
    (error, results) => {
      if (error) {
        return error;
      } else {
        console.log(results);
        return results.rows;
      };
    }
  );
};

//SQL Query - get number of rows in table
const getNumberOfRows = async ( ) => {
  /**
   * Summary: Get the number of rows in the database table.
   * 
   * Description: Query Database and count the number of rows in a table. Return this number.
   */
  //Query the database
  try {
    const res = await pool.query(
      `SELECT COUNT(*) FROM market_trades`
    );
  return res.rows[0].count;
  } catch (err) {
    console.log(`Error in fetching number of trades.`);
    return err.stack;
  };
};

//SQL Query - get number of rows in table for pair
const getNumberOfRowsForPair = async ( pair ) => {
  /**
   * Summary: Get Number of rows in the market trades database table.
   * 
   * Description: Query database and return the number of rows in the database market trades table for a particular security. Return the count.
   * 
   * @PARAM   {varchar}   pair = pair to filter by.
   */
  try {
    const res = await pool.query(
      `SELECT COUNT(*) FROM market_trades WHERE pair = $1`,
      [ pair ]
    );
    return res.rows[0].count;
  } catch (err) {
    console.log('Error in fetching number of trades for this pair');
    return err.stack;
  }
};

//SQL Query - get latest exchange_trade_id in database
const getLatestDatabaseTrade = async ( pair ) => {
  /**
   * Summary: Get the ID of the latest trade in the database for a pair.
   * 
   * Description: Query the database and return the max value for the id in market_trades;
   * 
   * @PARAM   {varchar}     pair = pair that will filter the database table;
   */
   try {
    const res = await pool.query(
      `SELECT MAX(exchange_trade_id) FROM market_trades WHERE pair = $1`,
      [ pair ]
    );
    return res.rows[0].max;
  } catch (err) {
    console.log('Error in fetching most recent trade in database for this pair.');
    return err.stack;
  }
};

////////
//MAIN
///Update Trade Data
const updateTradesTable = async () => {
  /**
   * Summary: Update trades table in postgreSQL database.
   * 
   * Description: Loop through a list of securities and update their historical trading price in database.
   * 
   * No Parameters.
   * 
   * @Yield An updated Database Table
   */

  //Initiate
  console.log('Starting update of market_trades Table...');
  let currentTime = new Date();
  let timestamp = currentTime.getTime();
  console.log(`Timestamp: ${timestamp}`);

  //Get Number of rows before updating table
  let numberOfRowsTotal = await getNumberOfRows();
  console.log(`Number of total Trades in database at START: ${numberOfRowsTotal}`);

  //Set pairs and base securities that will be passed in
  const tradesPair = [ 'ETH', 'BTC' ];
  const base = "USDT";

  let numberOfTrades = 0;

  //Loop through security list
  for (let i = 0; i < tradesPair.length; i++) {
    
    //Check for rate limits
    timestamp =  await rateLimitChecker( timestamp );
    
    //Set iterating symbol to update its data
    let tradePairSymbol = tradesPair[i] + base;
    console.log(`Updating table for pair: ${tradePairSymbol}`);

    //Pre-run checks
    ///Number of Trades in database before updating
    let numberOfTrades = await getNumberOfRowsForPair(tradePairSymbol);
    console.log(`Number of trades for ${tradePairSymbol}: ${numberOfTrades}`);
    //Get latest trade in database for pair.
    const latestDatabaseTrade = await getLatestDatabaseTrade(tradePairSymbol);
    console.log(`Latest trade in the database for ${tradePairSymbol}: ${latestDatabaseTrade}`);
    //Get most recent trade id
    const latestTrade = await getRecentTradeID(tradePairSymbol);
    console.log(`Most recent trade on market is: ${latestTrade}`);

    //loop through historical trades in lots of 500 starting from latest Trade ID.
    for (let j = latestTrade; j > latestDatabaseTrade; j = j - 500) {
      //Check for rate limits
      timestamp =  await rateLimitChecker( timestamp );

      //Get 500 Trades from the interating id
      let latestTradesData = await client2.tradesHistory({ symbol: tradePairSymbol, fromId: j });

      //Loop through the 500 trades and add to the database
      for (let k = 0; k < latestTradesData.length; k++) {
        const tradeData = latestTradesData[k];
        pool.query(
          'INSERT INTO market_trades (exchange_trade_id, pair, exchange_ID, price, base_asset, quote_asset, quantity, datetime) VALUES ($1, $2, $3, $4, $5, $6, $7, to_timestamp($8))',
          [
            tradeData['id'].toString(),
            tradePairSymbol,
            'BINANCE',
            parseFloat(tradeData['price']),
            tradesPair[i],
            base,
            parseFloat(tradeData['qty']),
            (tradeData['time'] / 1000)
          ],
          (error, results) => {
            if (error) {
              console.log(error);
            };
          }
        )
      };
    };

    //Get Number of rows for security after updating table
    //Get Number of rows before updating table
    let numberOfRowsTotal = await getNumberOfRowsForPair( tradePairSymbol );
    console.log(`Number of total Trades in database for ${tradePairSymbol} at END: ${numberOfRowsTotal}`);
  };

  //Get Number of rows after updating table
  numberOfRowsTotal = await getNumberOfRows();
  console.log(`Number of total Trades in database at END: ${numberOfRowsTotal}`);
  
  console.log('Table Update Completed');
};

// updateTradesTable();

///Update securities data
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

// updateTradesTable();

// // Data fetch interval
// const interval = setInterval(() => {
//   // updateSecuritiesTable()
//   updateTradesTable()
// }, 5000);


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