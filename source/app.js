/**
 * Created by magic_000 on 14/11/2017.
 */
import Highcharts from 'highcharts';
var chartData={
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 5, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
};

Highcharts.chart("container-chart", chartData);


console.log("okok run");

