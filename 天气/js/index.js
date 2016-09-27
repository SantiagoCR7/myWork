function doSearch() {
    getWeather(document.querySelector('#cityName').value);
}


function getWeather(cityName) {
    $.ajax({
        url: "http://apis.baidu.com/apistore/weatherservice/recentweathers",
        data: {cityname: cityName},
        method: "get",
        headers: {
            apikey: '44cd30652d255d172d2da4f863562781'
        },
        dataType: 'json',
        success: function (res) {

            var arrForecast = res.retData.forecast;
            console.log(arrForecast);

            var arrHistory = res.retData.history;
            console.log(arrHistory);

            var arrToday = res.retData.today;
            console.log(arrToday);

            var arr = [];
            arr.push(arrToday);

            for (var i = 0; i < arrForecast.length; i++) {
                arr.push(arrForecast[i]);
            }

            for (var i = 0; i < arrHistory.length; i++) {
                arr.push(arrHistory[i]);
            }

            var html = template('table', {list: arr});
            document.querySelector('#content').innerHTML = html;
        },
        error: function (err) {
            console.log(err);
        }
    })
}
