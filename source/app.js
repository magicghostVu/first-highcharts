/**
 * Created by magic_000 on 14/11/2017.
 */
import Highcharts from 'highcharts';
import {dataTest} from './test_data';

//console.log(DateTime.now().toString());

//dataTest.forEach(e=>console.log(e));


// giả sử đang xét item chống bomb


// sắp xếp theo ngày tăng dần
dataTest.sort(function (a, b) {
    return (a.timeStampStartDay - b.timeStampStartDay);
});

//console.log(dataTest);
// todo: phải tạo ra categories theo ngày
var arrDateCategories = dataTest.map(function (e, i) {
    let dateTime = new Date(e.timeStampStartDay * 1000);
    return dateTime.getDate() + "/" + dateTime.getMonth();
});

//console.log(arrDateCategories);

let dataForChart = [];


let objectData = {
    "0": [],
    "1": [],
    "2": []
};

dataTest.forEach((e, i) => {
    let mapNumTimeBuy = e.mapNumTimeBuy;
    let arrKey =Object.keys(mapNumTimeBuy);
    arrKey.forEach((_e, _i)=>{
      objectData[_e].push(mapNumTimeBuy[_e]);
    })

});


let arrKeyObjectData= Object.keys(objectData);
let sumArr=[];

arrKeyObjectData.forEach((key, _i)=>{
    let arr= objectData[key];
    var sum=0;

    for (var i=0; i<arr.length; ++i){
        sum+= arr[i];
    }
    sumArr.push(sum);

});





console.log(objectData);
console.log(sumArr);

var chartData = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Số vật phẩm chống bomb đã mua'
    },
    xAxis: {
        // mục này phải là theo ngày
        categories: ['20/11', '21/11', '22/11']
    },
    yAxis: {
        title: {
            text: 'Using anti-bomb item'
        }
    },
    series: [{
        name: 'Mua lần 1',
        data: [1, 5.5, 4.7]
    }, {
        name: 'Mua lần 2',
        data: [5, 7, 3]
    }, {
        name: "Mua lần 3",
        data: [2, 4, 6]
    },
        {
            name: "Tổng",
            data: [8, 16.5, 13.5]
        }
    ]
};


Highcharts.chart("container-chart", chartData);


console.log("okok run");

