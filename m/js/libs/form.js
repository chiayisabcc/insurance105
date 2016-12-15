
/* 地址 */

var $City = $('#formA1');
var $Dist = $('#formA2');

var addressOption = ['基隆市', '台北市', '新北市', '桃園縣', '新竹縣', '新竹市', '苗栗縣', '台中市', '彰化縣', '雲林縣', '南投縣', '嘉義縣', '嘉義市', '台南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '金門縣', '連江縣'];

var addressDistrict = [];

//基隆市         

var District1 = ['仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'],

    //台北市         

    District2 = ['中正區', '大同區', '中山區', '萬華區', '信義區', '松山區', '大安區', '南港區', '北投區', '內湖區', '士林區', '文山區'],

    //新北市         

    District3 = ['板橋區', '新莊區', '泰山區', '林口區', '淡水區', '金山區', '八里區', '萬里區', '石門區', '三芝區', '瑞芳區', '汐止區', '平溪區', '貢寮區', '雙溪區', '深坑區', '石碇區', '新店區', '坪林區', '烏來區', '中和區', '永和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '蘆洲區', '五股區'],

    //桃園縣         

    District4 = ['桃園市', '中壢市', '平鎮市', '八德市', '楊梅市', '大溪鎮', '蘆竹鄉', '龍潭鄉', '龜山鄉', '大園鄉', '觀音鄉', '新屋鄉', '復興鄉'],

    //新竹縣         

    District5 = ['竹北市', '竹東鎮', '新埔鎮', '關西鎮', '新豐鄉', '峨眉鄉', '寶山鄉', '五峰鄉', '橫山鄉', '北埔鄉', '尖石鄉', '芎林鄉', '湖口鄉'],

    //新竹市         

    District6 = ['東區', '北區', '香山區'],

    //苗栗縣         

    District7 = ['苗栗市', '通霄鎮', '苑裡鎮', '竹南鎮', '頭份鎮', '後龍鎮', '卓蘭鎮', '西湖鄉', '頭屋鄉', '公館鄉', '銅鑼鄉', '三義鄉', '造橋鄉', '三灣鄉', '南庄鄉', '大湖鄉', '獅潭鄉', '泰安鄉'],

    //台中市         

    District8 = ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '東勢區', '石岡區', '新社區', '和平區', '神岡區', '潭子區', '大雅區', '大肚區', '龍井區', '沙鹿區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'],

    //彰化縣         

    District9 = ['彰化市', '員林鎮', '和美鎮', '鹿港鎮', '溪湖鎮', '二林鎮', '田中鎮', '北斗鎮', '花壇鄉', '芬園鄉', '大村鄉', '永靖鄉', '伸港鄉', '線西鄉', '福興鄉', '秀水鄉', '埔心鄉', '埔鹽鄉', '大城鄉', '芳苑鄉', '竹塘鄉', '社頭鄉', '二水鄉', '田尾鄉', '埤頭鄉', '溪州鄉'],

    //雲林縣         

    District10 = ['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '莿桐鄉', '林內鄉', '古坑鄉', '大埤鄉', '崙背鄉', '二崙鄉', '麥寮鄉', '臺西鄉', '東勢鄉', '褒忠鄉', '四湖鄉', '口湖鄉', '水林鄉', '元長鄉'],

    //南投縣         

    District11 = ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],

    //嘉義縣         

    District12 = ['太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山'],

    //嘉義市         

    District13 = ['東區', '西區'],

    //台南市         

    District14 = ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'],

    //高雄市         

    District15 = ['楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '小港區', '旗津區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '永安區', '燕巢區', '田寮區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '杉林區', '甲仙區', '六龜區', '茂林區', '桃源區', '那瑪夏'],

    //屏東縣         

    District16 = ['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '霧台鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉', '三地門'],

    //宜蘭縣         

    District17 = ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],

    //花蓮縣         

    District18 = ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '秀林鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '富里鄉', '卓溪鄉'],

    //台東縣         

    District19 = ['臺東市', '成功鎮', '關山鎮', '長濱鄉', '海端鄉', '池上鄉', '東河鄉', '鹿野鄉', '延平鄉', '卑南鄉', '金峰鄉', '大武鄉', '達仁鄉', '綠島鄉', '蘭嶼鄉', '太麻里'],

    //澎湖縣         

    District20 = ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],

    //金門縣         

    District21 = ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],

    //連江縣         

    District22 = ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'];

/*區碼*/

var addressZipcode = [];

//基隆市         

var zipcode1 = ['200', '201', '202', '203', '204', '205', '206'],

    //台北市         

    zipcode2 = ['100', '103', '104', '108', '110', '105', '106', '115', '112', '114', '111', '116'],

    //新北市         

    zipcode3 = ['220', '242', '243', '244', '251', '208', '249', '207', '253', '252', '224', '221', '226', '228', '227', '222', '223', '231', '232', '233', '235', '234', '236', '237', '238', '239', '241', '247', '248'],

    //桃園縣         

    zipcode4 = ['330', '320', '324', '334', '326', '335', '338', '325', '333', '337', '328', '327', '336'],

    //新竹縣         

    zipcode5 = ['302', '310', '305', '306', '304', '315', '308', '311', '312', '314', '313', '307', '303'],

    //新竹市         

    zipcode6 = ['300', '300', '300'],

    //苗栗縣         

    zipcode7 = ['360', '357', '358', '350', '351', '356', '369', '368', '362', '363', '366', '367', '361', '352', '353', '364', '354', '365'],

    //台中市         

    zipcode8 = ['400', '401', '402', '403', '404', '405', '406', '408', '411', '412', '413', '414', '420', '421', '423', '422', '426', '424', '429', '427', '428', '432', '434', '433', '435', '436', '437', '438', '439'],

    //彰化縣         

    zipcode9 = ['500', '510', '508', '505', '514', '526', '520', '521', '503', '502', '515', '512', '509', '507', '506', '504', '513', '516', '527', '528', '525', '511', '530', '522', '523', '524'],

    //雲林縣         

    zipcode10 = ['640', '630', '632', '648', '633', '654', '647', '643', '646', '631', '637', '649', '638', '636', '635', '634', '654', '653', '652', '655'],

    //南投縣         

    zipcode11 = ['540', '545', '542', '557', '552', '551', '558', '541', '555', '544', '553', '556', '546'],

    //嘉義縣         

    zipcode12 = ['612', '613', '628', '622', '621', '623', '616', '615', '614', '624', '611', '608', '606', '604', '603', '602', '607', '605'],

    //嘉義市         

    zipcode13 = ['600', '600'],

    //台南市         

    zipcode14 = ['700', '701', '702', '704', '708', '709', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725', '726', '727', '730', '731', '732', '733', '734', '735', '736', '737', '741', '742', '743', '744', '745'],

    //高雄市         

    zipcode15 = ['811', '813', '804', '807', '803', '801', '800', '802', '806', '812', '805', '830', '831', '833', '832', '814', '840', '815', '820', '821', '825', '826', '827', '828', '824', '823', '822', '852', '829', '842', '843', '845', '846', '847', '844', '851', '848', '849'],

    //屏東縣         

    zipcode16 = ['900', '920', '928', '946', '913', '908', '909', '904', '905', '907', '906', '923', '912', '911', '925', '940', '932', '924', '927', '926', '931', '929', '944', '947', '941', '902', '903', '921', '922', '942', '943', '945', '901'],

    //宜蘭縣         

    zipcode17 = ['260', '265', '270', '261', '262', '263', '64', '269', '268', '266', '267', '272'],

    //花蓮縣         

    zipcode18 = ['970', '975', '981', '971', '973', '974', '972', '976', '977', '978', '979', '983', '982'],

    //台東縣         

    zipcode19 = ['950', '961', '956', '962', '957', '958', '959', '955', '953', '954', '964', '965', '966', '951', '952', '963'],

    //澎湖縣         

    zipcode20 = ['880', '885', '884', '881', '882', '883'],

    //金門縣         

    zipcode21 = ['893', '891', '890', '892', '894', '896'],

    //連江縣         

    zipcode22 = ['209', '210', '211', '212'];

addressDistrict.push(District1);

addressDistrict.push(District2);

addressDistrict.push(District3);

addressDistrict.push(District4);

addressDistrict.push(District5);

addressDistrict.push(District6);

addressDistrict.push(District7);

addressDistrict.push(District8);

addressDistrict.push(District9);

addressDistrict.push(District10);

addressDistrict.push(District11);

addressDistrict.push(District12);

addressDistrict.push(District13);

addressDistrict.push(District14);

addressDistrict.push(District15);

addressDistrict.push(District16);

addressDistrict.push(District17);

addressDistrict.push(District18);

addressDistrict.push(District19);

addressDistrict.push(District20);

addressDistrict.push(District21);

addressDistrict.push(District22);

addressZipcode.push(zipcode1);

addressZipcode.push(zipcode2);

addressZipcode.push(zipcode3);

addressZipcode.push(zipcode4);

addressZipcode.push(zipcode5);

addressZipcode.push(zipcode6);

addressZipcode.push(zipcode7);

addressZipcode.push(zipcode8);

addressZipcode.push(zipcode9);

addressZipcode.push(zipcode10);

addressZipcode.push(zipcode11);

addressZipcode.push(zipcode12);

addressZipcode.push(zipcode13);

addressZipcode.push(zipcode14);

addressZipcode.push(zipcode15);

addressZipcode.push(zipcode16);

addressZipcode.push(zipcode17);

addressZipcode.push(zipcode18);

addressZipcode.push(zipcode19);

addressZipcode.push(zipcode20);

addressZipcode.push(zipcode21);

addressZipcode.push(zipcode22);



function FormDistrict() {

    for (var a = 0; a < addressOption.length; a++) {

        var formACity = document.getElementById('formA1');

        var option = document.createElement("option");

        option.innerHTML = addressOption[a];

        formACity.appendChild(option);

    }

    // for (var d = 0; d < addressDistrict[0].length; d++) {

    //     var formAZone = document.getElementById('formA2');

    //     var option = document.createElement("option");

    //     option.innerHTML = addressDistrict[0][d];

    //     formAZone.appendChild(option);

    // }

}

FormDistrict();

$('#formA1')[0].selectedIndex = 1;
// 設初始選項

function FormDistrictOption() {

    var addD = $('#formA1').val();

    if (addD == '基隆市') {

        var aD = 0;

        FormDistrictSelect(aD);

    }

    if (addD == '台北市') {

        var aD = 1;

        FormDistrictSelect(aD);

    }

    if (addD == '新北市') {

        var aD = 2;

        FormDistrictSelect(aD);

    }

    if (addD == '桃園縣') {

        var aD = 3;

        FormDistrictSelect(aD);

    }

    if (addD == '新竹縣') {

        var aD = 4;

        FormDistrictSelect(aD);

    }

    if (addD == '新竹市') {

        var aD = 5;

        FormDistrictSelect(aD);

    }

    if (addD == '苗栗縣') {

        var aD = 6;

        FormDistrictSelect(aD);

    }

    if (addD == '台中市') {

        var aD = 7;

        FormDistrictSelect(aD);

    }

    if (addD == '彰化縣') {

        var aD = 8;

        FormDistrictSelect(aD);

    }

    if (addD == '雲林縣') {

        var aD = 9;

        FormDistrictSelect(aD);

    }

    if (addD == '南投縣') {

        var aD = 10;

        FormDistrictSelect(aD);

    }

    if (addD == '嘉義縣') {

        var aD = 11;

        FormDistrictSelect(aD);

    }

    if (addD == '嘉義市') {

        var aD = 12;

        FormDistrictSelect(aD);

    }

    if (addD == '台南市') {

        var aD = 13;

        FormDistrictSelect(aD);

    }

    if (addD == '高雄市') {

        var aD = 14;

        FormDistrictSelect(aD);

    }

    if (addD == '屏東縣') {

        var aD = 15;

        FormDistrictSelect(aD);

    }

    if (addD == '宜蘭縣') {

        var aD = 16;

        FormDistrictSelect(aD);

    }

    if (addD == '花蓮縣') {

        var aD = 17;

        FormDistrictSelect(aD);

    }

    if (addD == '台東縣') {

        var aD = 18;

        FormDistrictSelect(aD);

    }

    if (addD == '澎湖縣') {

        var aD = 19;

        FormDistrictSelect(aD);

    }

    if (addD == '金門縣') {

        var aD = 20;

        FormDistrictSelect(aD);

    }

    if (addD == '連江縣') {

        var aD = 21;

        FormDistrictSelect(aD);

    }

}



// function FormDistrictSelect(aD) {

//     var formDistrict = document.getElementById('formA2');

//     formDistrict.innerHTML = "";

//     var Districtlength = addressDistrict[aD].length;

//     for (var D = 0; D < Districtlength; D++) {

//         var option = document.createElement("option");

//         option.innerHTML = addressDistrict[aD][D];

//         formDistrict.appendChild(option);

//     }

// }

$("#formA1").change(function() {

    FormDistrictOption()

    // $('.input-address').removeClass('mistake').val($('#formA1').val()+$('#formA2').val());

}).trigger("change");

$('#formA2').change(function(){

    // $('.input-address').removeClass('mistake').val($('#formA1').val()+$('#formA2').val());
});

// function DistAppend(){

//     var selectCity = $City.val(),
//         cid = City.indexOf(selectCity),
//         selectDist = Dist[cid];

//         $Dist.empty();

//     for(var d=0;d<selectDist.length;d++){
//         $Dist.append('<option>'+selectDist[d]+'</option>')
//     }

// }

// for(var c=0;c<City.length;c++){
//     $City.append('<option>'+City[c]+'</option>');
// }

// $City.change(function(){
//     DistAppend();
// }).trigger('change');



























































