const Header = [
    {
      Header: 'Security Information',
      columns: [
        {
          Header: '#',
          accessor: 'market_cap_rank',
        },
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Symbol',
          accessor: 'symbol',
          Cell: ({ value }) => value.toUpperCase(),
        },
      ],
    },
    {
      Header: 'Market Pricing Info',
      columns: [
        {
          Header: 'Current Price',
          accessor: 'current_price',
          Cell: ({ value }) => new Intl.NumberFormat('en-US',
          {
            style: 'currency',
            currency: 'USD'
          }
          ).format( value ),
        },
        {
          Header: '24h Price Change',
          accessor: 'price_change_24h',
          Cell: ({ value }) => new Intl.NumberFormat('en-US',
          {
            style: 'currency',
            currency: 'USD'
          }
          ).format( value ),
        },
        {
          Header: '24h Price Change (%)',
          accessor: 'price_change_percentage_24h',
          Cell: ({ value }) => value.toFixed(2) + '%',
        },
        {
          Header: 'All Time High (ATH)',
          accessor: 'ath',
          Cell: ({ value }) => new Intl.NumberFormat('en-US',
          {
            style: 'currency',
            currency: 'USD'
          }
          ).format( value ),
        },
        {
          Header: 'Change From ATH',
          accessor: 'ath_change_percentage',
          Cell: ({ value }) => value.toFixed(2) + '%',
        },
        {
          Header: 'Market Capitalization',
          accessor: 'market_cap',
          Cell: ({ value }) => new Intl.NumberFormat('en-US',
          {
            style: 'currency',
            currency: 'USD'
          }
          ).format( value ),
        }
      ],
    },
  ]

export default Header