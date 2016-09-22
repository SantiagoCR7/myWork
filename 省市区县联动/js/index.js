var arrProvince = [
    {id: "0", name: "请选择"},
    {id: "1", name: "江苏省"},
    {id: "2", name: "浙江省"},
    {id: "3", name: "河北省"}
];

var arrCity = [
    //江苏
    {id: "1-1", name: "南京", fid: "1"},
    {id: "1-2", name: "无锡", fid: "1"},
    {id: "1-3", name: "苏州", fid: "1"},
    {id: "1-4", name: "徐州", fid: "1"},
    {id: "1-5", name: "常州", fid: "1"},
    {id: "1-6", name: "南通", fid: "1"},
    {id: "1-7", name: "连云港", fid: "1"},
    {id: "1-8", name: "淮安", fid: "1"},
    {id: "1-9", name: "盐城", fid: "1"},
    {id: "1-10", name: "扬州", fid: "1"},
    {id: "1-11", name: "镇江", fid: "1"},
    {id: "1-12", name: "泰州", fid: "1"},
    {id: "1-13", name: "宿迁", fid: "1"},
    //浙江
    {id: "2-1", name: "杭州", fid: "2"},
    {id: "2-2", name: "嘉兴", fid: "2"},
    {id: "2-3", name: "绍兴", fid: "2"},
    //河北
    {id: "3-1", name: "衡水市", fid: "3"}
];

var arrCountry = [
    //南京
    {id: "1-1-1", name: "鼓楼区", fid: "1-1"},
    {id: "1-1-2", name: "江宁区", fid: "1-1"},
    {id: "1-1-3", name: "玄武区", fid: "1-1"},
    {id: "1-1-4", name: "白下区", fid: "1-1"},
    {id: "1-1-5", name: "秦淮区", fid: "1-1"},
    {id: "1-1-6", name: "建邺区", fid: "1-1"},
    {id: "1-1-7", name: "下关区", fid: "1-1"},
    {id: "1-1-8", name: "浦口区", fid: "1-1"},
    {id: "1-1-9", name: "栖霞区", fid: "1-1"},
    {id: "1-1-10", name: "雨花台区", fid: "1-1"},
    {id: "1-1-11", name: "六合区", fid: "1-1"},
    {id: "1-1-12", name: "溧水区", fid: "1-1"},
    {id: "1-1-13", name: "高淳县", fid: "1-1"},
    //无锡
    {id: "1-2-1", name: "南长区", fid: "1-2"},
    {id: "1-2-2", name: "锡山区", fid: "1-2"},
    {id: "1-2-3", name: "崇安区", fid: "1-2"},
    {id: "1-2-4", name: "北塘区", fid: "1-2"},
    {id: "1-2-5", name: "惠山区", fid: "1-2"},
    {id: "1-2-6", name: "滨湖区", fid: "1-2"},
    {id: "1-2-7", name: "江阴市", fid: "1-2"},
    {id: "1-2-8", name: "宜兴市", fid: "1-2"},
    //苏州
    {id: "1-3-1", name: "平江区", fid: "1-3"},
    {id: "1-3-2", name: "沧浪区", fid: "1-3"},
    {id: "1-3-3", name: "金阊区", fid: "1-3"},
    {id: "1-3-4", name: "虎丘区", fid: "1-3"},
    {id: "1-3-5", name: "吴中区", fid: "1-3"},
    {id: "1-3-6", name: "相城区", fid: "1-3"},
    {id: "1-3-7", name: "常熟市", fid: "1-3"},
    {id: "1-3-8", name: "昆山市", fid: "1-3"},
    {id: "1-3-9", name: "张家港市", fid: "1-3"},
    {id: "1-3-10", name: "吴江市", fid: "1-3"},
    {id: "1-3-11", name: "太仓市", fid: "1-3"},
    //徐州
    {id: "1-4-1", name: "鼓楼区", fid: "1-4"},
    {id: "1-4-2", name: "云龙区", fid: "1-4"},
    {id: "1-4-3", name: "九里区", fid: "1-4"},
    {id: "1-4-4", name: "贾汪区", fid: "1-4"},
    {id: "1-4-5", name: "泉山区", fid: "1-4"},
    {id: "1-4-6", name: "丰县", fid: "1-4"},
    {id: "1-4-7", name: "沛县", fid: "1-4"},
    {id: "1-4-8", name: "铜山县", fid: "1-4"},
    {id: "1-4-9", name: "雎宁县", fid: "1-4"},
    {id: "1-4-10", name: "新沂市", fid: "1-4"},
    {id: "1-4-11", name: "邳州市", fid: "1-4"},
    //常州
    {id: "1-5-1", name: "天宁区", fid: "1-5"},
    {id: "1-5-2", name: "钟楼区", fid: "1-5"},
    {id: "1-5-3", name: "戚墅堰区", fid: "1-5"},
    {id: "1-5-4", name: "新北区", fid: "1-5"},
    {id: "1-5-5", name: "武进区", fid: "1-5"},
    {id: "1-5-6", name: "溧阳市", fid: "1-5"},
    {id: "1-5-7", name: "金坛市", fid: "1-5"},
    //南通
    {id: "1-6-1", name: "崇川区", fid: "1-6"},
    {id: "1-6-2", name: "港闸区", fid: "1-6"},
    {id: "1-6-3", name: "海安县", fid: "1-6"},
    {id: "1-6-4", name: "如东县", fid: "1-6"},
    {id: "1-6-5", name: "启东市", fid: "1-6"},
    {id: "1-6-6", name: "如皋市", fid: "1-6"},
    {id: "1-6-7", name: "通州市", fid: "1-6"},
    {id: "1-6-8", name: "海门市", fid: "1-6"},
    //杭州
    {id: "2-1-1", name: "上城区", fid: "2-1"},
    {id: "2-1-2", name: "滨江区", fid: "2-1"},
    //嘉兴
    {id: "2-2-1", name: "南湖区", fid: "2-2"},
    {id: "2-2-2", name: "秀洲区", fid: "2-2"},
    //绍兴
    {id: "2-3-1", name: "绍兴县", fid: "2-3"},
    {id: "2-3-2", name: "越城区", fid: "2-3"},
    //衡水
    {id: "3-1-1", name: "饶阳县", fid: "3-1"}
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
        if (item2.fid == cityCtrl.value) {
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
