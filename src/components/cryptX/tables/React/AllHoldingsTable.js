//IMPORTS
//Module Imports
import React, {useState, useEffect } from 'react';
import {Row, Col, Card, Table, Tab, Nav, Form, InputGroup, FormControl } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import axios from 'axios';
import { CONFIG } from '../../../../config/constant';
import dataTable from '../../../../data/FullTableData';

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
}

//Table Component
function TableFull({ columns, data }) {
    const {
          getTableProps, 
          getTableBodyProps, 
          headerGroups, 
          rows, 
          prepareRow, 
          setFilter
        } = useTable(
      {
        columns,
        data,
      },
      useFilters,
      useSortBy
    );

    const [ filterInput, setFilterInput ] = useState("");

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("name", value);
        setFilterInput(value);
    };
  
    // We don't want to render all 2000 rows for this example, so cap
    // it at 20 for this use case
    const firstPageRows = rows

    return (
      <>
        <BTable striped bordered hover responsive {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <span className='feather icon-arrow-down text-muted float-right mt-1' />
                          : <span className='feather icon-arrow-up text-muted float-right mt-1' />
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map(
              (row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                  </tr>
                )}
            )}
          </tbody>
        </BTable>
      </>
    )
}
  
function App() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Security Information',
        columns: [
          {
            Header: 'Symbol',
            accessor: 'symbol',
          },
          {
            Header: 'Quantity Held',
            accessor: 'available',
          },
          {
            Header: 'Quantity On Order',
            accessor: 'onOrder',
          },
          {
            Header: 'Market Price',
            accessor: 'marketPrice',
            Cell: ({ value }) => new Intl.NumberFormat('en-US',
            {
              style: 'currency',
              currency: 'USD'
            }
            ).format( value ),
          },
          {
            Header: 'Market Value',
            accessor: 'marketValue',
            Cell: ({ value }) => new Intl.NumberFormat('en-US',
            {
              style: 'currency',
              currency: 'USD'
            }
            ).format( value ),
          },
        ],
      }, 
    ],
    []
  )

  const [ search, setSearch ] = useState('');
  const [ holdings, setHoldings ] = useState('');
  

  const getHoldings = async () => {
    //Binance API
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

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const dataOne = objectParse(holdings);

  const filteredHoldings = dataOne.filter(holding => 
    holding.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const filteredHoldingsTwo = filteredHoldings.filter(holding => 
    holding.available > 0);

  const data = filteredHoldingsTwo;

  return (
      <React.Fragment>
        <Row>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Cryptocurrencies</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Filter</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl onChange={handleChange} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                        <TableFull columns={columns} data={data} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </React.Fragment>
  )
}
  
export default App
  