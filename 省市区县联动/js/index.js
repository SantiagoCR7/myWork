var arrProvince = [
    {id: "0", name: "请选择"},
    {id: "1", name: "江苏省"},
    {id: "2", name: "浙江省"}
];

var arrCity = [
    {id: "1-1", name: "南京", fid: "1"},
    {id: "1-2", name: "无锡", fid: "1"},
    {id: "1-3", name: "苏州", fid: "1"},
    {id: "2-1", name: "杭州", fid: "2"},
    {id: "2-2", name: "嘉兴", fid: "2"},
    {id: "2-3", name: "绍兴", fid: "2"}
];

var arrCountry = [
    {id: "1-1-1", name: "鼓楼区", fid: "1-1"},
    {id: "1-1-2", name: "江宁区", fid: "1-1"},
    {id: "1-2-1", name: "南长区", fid: "1-2"},
    {id: "1-2-2", name: "锡山区", fid: "1-2"},
    {id: "1-3-1", name: "平江区", fid: "1-3"},
    {id: "1-3-2", name: "吴中区", fid: "1-3"},
    {id: "2-1-1", name: "上城区", fid: "2-1"},
    {id: "2-1-2", name: "滨江区", fid: "2-1"},
    {id: "2-2-1", name: "南湖区", fid: "2-2"},
    {id: "2-2-2", name: "秀洲区", fid: "2-2"},
    {id: "2-3-1", name: "绍兴县", fid: "2-3"},
    {id: "2-3-2", name: "越城区", fid: "2-3"}
];


var proCtrl = document.querySelector('#province');

initCtrlPro();
function initCtrlPro() {
    var strHtml = '';
    arrProvince.forEach(function (item) {
        strHtml += '<option value="' + item.id + '">' + item.name + '</option>';
    });
    proCtrl.innerHTML = strHtml;
}

//省份下拉框改变
function proChange() {
    var result = arrCity.filter(function (item) {
        if (item.fid == proCtrl.value) {
            return item;
        }
    });
    initCtrlCity(result);

    var result2 = arrCountry.filter(function (item2) {
        if (item2.fid == cityCtrl.value){
            return item2;
        }
    });
    initCtrlCountry(result2);
}

var cityCtrl = document.querySelector('#city');
function initCtrlCity(data) {
    var strHtml = '';
    if (data.length == 0) {
        data.push({id: "0", name: "请选择"});
    }
    data.forEach(function (item) {
        strHtml += '<option value="' + item.id + '">' + item.name + '</option>';
    });
    cityCtrl.innerHTML = strHtml;
}

// 市下拉框改变
function cityChange() {
    var result = arrCountry.filter(function (item) {
        if (item.fid == cityCtrl.value) {
            return item;
        }
    });
    initCtrlCountry(result);
}


var countryCtrl = document.querySelector('#country');
function initCtrlCountry(data) {
    var strHtml = '';
    if (data.length == 0) {
        data.push({id: "0", name: "请选择"});
    }
    data.forEach(function (item) {
        strHtml += '<option value="' + item.id + '">' + item.name + '</option>';
    });
    countryCtrl.innerHTML = strHtml;
}

