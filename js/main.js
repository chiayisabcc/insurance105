var ifMusicPlaying = 1;
var myAudioTag = document.getElementById('song');

$(function(){
	$('.nice-scroll')
	  .niceScroll({
	      cursorborder:'none',
	      cursorwidth: 20,
	      cursorcolor: "rgb(189, 189, 189)",
	      cursorwidth: "15px",
	      background: '#ffffff',
	      scrollspeed: 80,
	      autohidemode: false,
	      horizrailenabled: false
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