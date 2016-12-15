var ifMusicPlaying = 0;
var myAudioTag = document.getElementById('song');

$(function(){
	$('.nice-scroll')
	  .niceScroll({
	      cursorborder:'none',
	      cursorwidth: 15,
	      cursorcolor: "#666666",
	      cursorwidth: "5px",
	      background: '#ffffff',
	      scrollspeed: 80,
	      autohidemode: false,
	      horizrailenabled: false
	  });

  	$('.menu-btn').click(function(){
  		$('#main-nav').addClass('active');
  	});
  	$('#main-nav .xx').click(function(){
  		$('#main-nav').removeClass('active');
  	});

  	$('.mute-btn').click(function(){
  		if(ifMusicPlaying == 1){
  			myAudioTag.pause();
  			ifMusicPlaying = 0;
  			$(this).addClass('mute');
			ga('send', 'event', 'home', 'click', 'voice_onoff');
  		}
  		else if(ifMusicPlaying == 0){
  			myAudioTag.play();
  			ifMusicPlaying = 1;
  			$(this).removeClass('mute');
			ga('send', 'event', 'home', 'click', 'voice_onoff');

  		}
  	});

});

function popup(boxId)
       {
          $('.popup').has('#'+boxId).fadeIn(200);
          $('body,html').addClass('overflow-hidden');
       }

function popupClose($this)
       {
          $this.parents('.popup').fadeOut(200);
          $('body,html').removeClass('overflow-hidden');

       }