import React, { useState, useEffect } from 'react';
import { CONFIG } from '../../../../config/constant';
import Chart from 'react-google-charts';
import axios from 'axios';

function PieChart( { data, options } ) {

    //Original Data
        // width='100%'
        // height='300px'
        // chartType="PieChart"
        // loader={<div>Loading Chart</div>}
        // data={data}
        // data={[
        //     ['Task', 'Hours per Day'],
        //     ['Work', 11],
        //     ['Eat', 2],
        //     ['Commute', 2],
        //     ['Watch TV', 2],
        //     ['Sleep', 7],
        // ]}
        // options={{
        //     title: 'by Capitalization',
        //     pieHole: 0.4,
        //     colors: ['#1dc4e9', '#1de9b6', '#3ebfea', '#A389D4', '#899FD4']
        // }}
        // rootProps={{ 'data-testid': '3' }} 


    return <Chart
        width={options['width']}
        height={options['height']}
        chartType={options['chartType']}
        loader={options['loader']}
        data={data}
        options={{
            title: options['title'],
            pieHole: options['pieHole'],
            colors: options['colors']
        }}
        rootProps={options[rootProps]}
    />;

}

export default PieChart;