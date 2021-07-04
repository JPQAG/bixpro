import React, {useState, useEffect } from 'react';
import {Row, Col, Card, Table, Tab, Nav, Form, InputGroup, FormControl } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import matchSorter from 'match-sorter';

//Get Mock Header Data
import dataTable from '../../../../data/FullTableData';

import makeData from '../../../../data/tableData';
import ModuleNotification from '../../../Widgets/Statistic/Notification';
import FullTableData from '../../../../data/FullTableData';
import axios from 'axios';



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

    console.log(dataTable);

  
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
    () => dataTable,
    []
  )

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

  const data = filteredCoins

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
  