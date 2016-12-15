var phoneReg = /^[09]{2}[0-9]{8}$/;
    addressReg = /[\u4E00-\u9FA5]/;
    emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

// 元 素
var $invoice = $('.invoice-num')
var $name = $('.name .input');
var $gender = $('.gender .input');
var $year = $('.sel_year');
var $month = $('.sel_month');
var $day = $('.sel_day');
var $phone = $('.phone .input');
var $address = $('#address');
var $email = $('.email .input');
var $agreebox = $('.form-agreebox');

$City = $('#formA1');
$Dist = $('#formA2');

var hashLong = window.location.hash.substring(1);
var hash = hashLong.split("?");

/* 驗 證 字 串 */
String.prototype.verify = function(kind){
    
    var val = this.toString();
    // 空值
    if(!val){ return 'null'; }

    if( kind == 'phone' ){
        if( !phoneReg.test(val) ) return 'mistake'; 
    }
    if( kind == 'address' ){
        // if( !addressReg.test(val) ) return 'mistake'; 
    }
    if( kind == 'email' ){
        if( !emailReg.test(val) ) return 'mistake'; 
    }

    return val;    
    
};

$('input').focus(function(){
  if($(this).hasClass('mistake')){
      $(this).val('').removeClass('mistake');
  }
  else{
    return;
  }
});

  
  // $('.sub-title').click(function(){
  //   console.log($City.val()+$Dist.val());
  // });

$(function () {

  if($.cookie('ifComplete') != 'yes'){
      location.replace('game.html');
  }
  $.cookie('ifComplete', null, { path: '/', expires: 5 });

  console.log('info');

  $('.xx').click(function(){
              popupClose($(this));
              
          });
  $('.share').click(function(){
        share();
  });

}); 


$('.send').click(function(){
	ga('send', 'event', 'home', 'click', 'send');
  // popup('winner');
  var name = $name.val().verify('name');
  var phone = $phone.val().verify('phone');
  var gender = $gender.val();
  var address = $address.val().verify('address');
  var email = $email.val().verify('email');
  var birthday = $year.val()+'/'+$month.val()+'/'+$day.val();
  var city = $City.val();
  var area = $Dist.val();
  var seven;

  // 表單值    
  if( name=='null' || phone=='null' || address=='null' ||
      name=='mistake' || phone=='mistake' || address=='mistake' || email=='mistake'){
      if( name=='null' || name=='mistake' ){ $name.addClass('mistake').val('請填寫姓名'); }
      if( phone=='null' || phone=='mistake' ){ $phone.addClass('mistake').val('請填寫正確格式'); }
      if( address=='null' || address=='mistake' ){ $address.addClass('mistake').val('請填寫正確格式'); }
      if( email=='null' || email=='mistake' ){ $email.addClass('mistake').val('請輸入正確email信箱'); }
      // if( invoice=='null' || invoice=='mistake' ){ $invoice.eq(0).addClass('mistake').val('請填寫正確格式'); }
      // console.log('填錯啦');
  }
  else{
      // 同意與否
      if(!$agreebox.prop('checked')){
          console.log('沒有同意');
          alert('請勾選同意活動辦法');
      }
      else{
          // var data = { phone: phone, city: $City.val(), address: address, email: email};
          // $.post('/api/user_data.php', data, function (data) {console.log(data); },'json');
          /////////////送出資料////////////
			$.ajax({
				type: "POST",
				url: "../ajax.php",
				cache: false,
				dataType: "text",
				data: "fullname=" + name + "&cell=" + phone + "&city=" + city + "&address=" + address + "&email=" + email + "&mpc=MOBILE&action=savedata",
				success: function (ajaxResult) {
					alert(ajaxResult.split("__##__")[1]);
					if (ajaxResult.split("__##__")[0] == "SUCCESS") {
						afterSend();
						$("#postid").val(ajaxResult.split("__##__")[2]);
						ga('send', 'pageview', 'info_done');
					}
				}
			});
      }
  }
});

function afterSend(){
  $('.info-zone')
  .fadeOut()
  .delay(500)
  .queue(function(){
      $('.fb-zone').fadeIn();
      $(this).dequeue();
  });
}


function share(){
	///////////////share/////////////////
    FB.ui({
        method: 'feed',
        link: 'http://nationa-pension.shanger.com.tw/',
        caption: '衛生福利部-幸福國保 樂遊寶島   網路闖關活動',
		description: '快來挑戰，600多個獎項等著你唷！',
    }, function(response){
        if (response === null) {
            
        } else {
			$.ajax({
				type: "POST",
				url: "../ajaxmsg.php",
				cache: false,
				dataType: "text",
				data: "id=" + $("#postid").val() + "&msgid=" + response.post_id,
				success: function (ajaxResult) {
					window.location.href = "index.html";
				}
			});
        }
    });
}