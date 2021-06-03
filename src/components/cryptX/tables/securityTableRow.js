import React from 'react';

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

const SecurityTableRow = ( {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    fully_diluted_valuation,
    total_volume,
    high_24,
    low_24,
    price_change_24h,
    price_change_percentage_24h,
    total_supply,
    max_supply,
    ath,
    ath_change_percentage,
    ath_date,
    last_updated
}) => {
    return (
        <tr>
            <td>
                <h6 className="mb-1">{market_cap_rank}</h6>
            </td>
            {/* <td>
                <h6 className="m-b-0"><img src={image} alt='crypto'/></h6>
            </td> */}
            <td>
                <h6 className="mb-1">{name}</h6>
            </td>
            <td>
                <h6 className="m-b-0">{symbol.toUpperCase()}</h6>
            </td>
            <td>
                <h6 className="m-b-0">{formatter.format(current_price)}</h6>
            </td>
            <td>
                <h6 className="m-b-0">{formatter.format(price_change_24h)}</h6>
            </td>
            <td>
                <h6 className="m-b-0">{price_change_percentage_24h.toFixed(2) + '%'}</h6>
            </td>
            <td>
                <h6 className="m-b-0">{formatter.format(ath)}</h6>
            </td>
            <td>
                <h6 className="m-b-0">{ath_change_percentage.toFixed(2) + '%'}</h6>
            </td>
            
            <td>
                <h6 className="m-b-0">{formatter.format(market_cap)}</h6>
            </td>
            <td>
                <h6 className="m-b-0">{last_updated}</h6>
            </td>
        </tr>
    )
};

export default SecurityTableRow;