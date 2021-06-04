const chartData = {
    height: 350,
    type: 'heatmap',
    options: {
        dataLabels: {
            enabled: false
        },
        colors: ['#00FF00'],
        title: {
            text: 'Market HeatMap'
        },
    },
    series: [
        {
            name: 'BTC',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'ETH',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'LTC',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'ADA',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'DOT',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'DOGE',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'BCH',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'XLM',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'BNB',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        }
    ]
}
export default chartData;

function generateDatasehratheat(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        series.push({
            x: '0' + (i + 1).toString() + ':00',
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
    }
    return series;
}