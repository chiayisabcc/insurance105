var diceNum;
var diceInterval,rollInterval,rollStopInterval;
var tempCard;
var nowIndex = 0;
var disable = 0;
var disablePick = 0;
var _runTime = 1000;
var _rollTime = 100;
var rollTime;
var rollCounter = 0;
var tempCounter = 1;
var roundCounter = 1;
var tooBig = 0;



$(document).ready(function(){

	$('.character-pick').click(function(){
		var characterId = $(this).attr('id').charAt(10);
		ga('send', 'event', 'home', 'click', characterId);
		$('.character img').attr('src','img/character_'+characterId+'.png');
		$('.pick-zone')
		.fadeOut()
		.delay(500)
		.queue(function(){
			$('.game-zone').fadeIn();
			$(this).dequeue();
		});
	});

    $('.turntable').click(function(){

    	if(disable == 1){
    		return 0;
    	}
    	disable = 1;
    	// 防止連按

    	
    	diceNum = Math.floor(Math.random()*6+1);
    	// diceNum = 3;
    	if(diceNum > 4){
    		tooBig = 1;
    	}
    	if(roundCounter == 2 && tooBig ==1){
    		diceNum = Math.floor(Math.random()*3+1);
    	}
    	// 控制不太快結束

		ga('send', 'event', 'home', 'click', 'go');
		
    	toRoll();
    	roundCounter++;
        
    });


    $('.right').click(function(){
    	popupClose($('.cards'));
    	popup('right');
    	$('.game-zone')
    	.append(
    		$('<div/>')
			.addClass('step-'+nowIndex+' good')
			.append(
					$('<img/>')
					.attr('src','img/good.png')
				)
			);
    	$('.turntable img').attr('src','img/turntable.png');

    });
    $('.wrong').click(function(){
    	tempCard = $(this).parents('.cards').attr('id');
    	popupClose($('.cards'));
    	popup('wrong');
    });
    $('#right .xx').click(function(){
    	popupClose($('.results'));
    });
    $('#wrong .xx').click(function(){
    	popupClose($('.results'));
    	popup(tempCard);
    });
});

function toRoll(){

	tempCounter = 1;
	rollTime = _rollTime;
	 rollInterval = setInterval("roll()",_rollTime);
}
function roll(){
	$('.turntable img').attr('src','img/turntable_'+tempCounter+'.png');
	tempCounter++;
	rollTime = rollTime * 1.1;
	if(tempCounter == 7){
		rollCounter++;
		tempCounter = 1;
	}
	if(rollCounter == 2){
		clearInterval(rollInterval);
		rollCounter = 0;
		toRollStop();
	}
}
// 轉兩圈

function toRollStop(){
	tempCounter = 1;
	rollStopInterval = setInterval("rollStop()",rollTime);
}
function rollStop(){
	$('.turntable img').attr('src','img/turntable_'+tempCounter+'.png');
	if(tempCounter == diceNum){
		clearInterval(rollStopInterval);
		rollEnd();
	}
	tempCounter++;
	rollTime = rollTime * 1.3;
}
// 停在骰子數字

function rollEnd(){
	$('.character').addClass('active');
	diceInterval = setInterval("countDice()",_runTime);
	showCard();
}

function countDice(){
	// alert(nowIndex);

	if(diceNum > 0){
		diceNum--;
		nowIndex++;
		$('.character').removeClass('step-'+(nowIndex-1));
		$('.character').addClass('step-'+nowIndex);
		if(nowIndex == 10){
			gameOver();
		}

	}
	else if(diceNum < 0){
		diceNum++;
		nowIndex--;
		$('.character').removeClass('step-'+(nowIndex+1));
		$('.character').addClass('step-'+nowIndex);
		if(nowIndex == 0){
			clearInterval(diceInterval);
			disable = 0;
			$('.character').removeClass('active');
		}
	}

	if(nowIndex ==3){
		drawChance();
	}
	else if(nowIndex ==7){
		drawDestiny();
	}
	// 機會命運

	if(diceNum==0){
		clearInterval(diceInterval);
		disable = 0;
		$('.character').removeClass('active');
	}
	// 小於等於0

	
}

function start(){

}

function gameOver(){
	clearInterval(diceInterval);
	disable = 0;
	popup('complete');
	$.cookie('ifComplete', 'yes', { path:'/', expires: 5 });  
}

function drawChance(){
	$('.to-pick-card').show().removeClass('card-flipped');
	disablePick = 0;
	var drawCard = Math.floor(Math.random()*5+1);
	$('#step-3-card .back img').attr('src','img/chance_'+drawCard+'.png');
	if(drawCard == 1 || drawCard == 3 || drawCard == 4){
		$('#step-3-card .card').addClass('forward-1');
	}
	else if(drawCard == 2 || drawCard == 5){
		$('#step-3-card .card').addClass('forward-2');
	}

	$('.forward-1').on('click',function(){

		if(disablePick == 1){
			return 0;
		}
		disablePick = 1;
		// 防止連按

		$(this)
		.siblings('.to-pick-card')
		.fadeOut();
		$(this)
		.toggleClass('card-flipped')
		.delay(5000)
		.queue(function(){
			popupClose($('.cards'));
			diceNum = 1;
			diceInterval = setInterval("countDice()",_runTime);
			setTimeout(function(){
				showCard();
			},_runTime*1);
		});
    });
    $('.forward-2').on('click',function(){

    	if(disablePick == 1){
    		return 0;
    	}
    	disablePick = 1;
    	// 防止連按

    	$(this)
		.siblings('.to-pick-card')
		.fadeOut();
		$(this)
    	.toggleClass('card-flipped')
    	.delay(5000)
    	.queue(function(){
    		popupClose($('.cards'));
    		diceNum = 2;
    		diceInterval = setInterval("countDice()",_runTime);
    		setTimeout(function(){
    			showCard();
    		},_runTime*2);
    	});
    });

}
function drawDestiny(){
	$('.to-pick-card').show();
	disablePick = 0;
	var drawCard = Math.floor(Math.random()*5+1);
	$('#step-7-card .back img').attr('src','img/destiny_'+drawCard+'.png');
	if(drawCard == 1 || drawCard == 4){
		$('#step-7-card .card').addClass('backward-1');
	}
	else if(drawCard == 2 || drawCard == 3 || drawCard == 5){
		$('#step-7-card .card').addClass('backward-2');
	}

	$('.backward-1').on('click',function(){

    	if(disablePick == 1){
    		return 0;
    	}
    	disablePick = 1;
    	// 防止連按

		$(this)
		.siblings('.to-pick-card')
		.fadeOut();
		$(this)
		.toggleClass('card-flipped')
		.delay(5000)
		.queue(function(){
			popupClose($('.cards'));
			diceNum = -1;
			diceInterval = setInterval("countDice()",_runTime);
			setTimeout(function(){
				showCard();
			},_runTime*1);
		});
    });
    $('.backward-2').on('click',function(){

    	if(disablePick == 1){
    		return 0;
    	}
    	disablePick = 1;
    	// 防止連按

    	$(this)
		.siblings('.to-pick-card')
		.fadeOut();
		$(this)
    	.toggleClass('card-flipped')
    	.delay(5000)
    	.queue(function(){
    		popupClose($('.cards'));
    		diceNum = -2;
    		diceInterval = setInterval("countDice()",_runTime);
    		setTimeout(function(){
    			showCard();
    		},_runTime*2);
    	});
    });
}

function showCard(){
	setTimeout(function(){
			if(nowIndex == 3 || nowIndex ==7){
				popup('step-'+nowIndex+'-card');
			}
			else{
				popup('step-'+nowIndex+'-card');
				$('#step-'+nowIndex+'-card .card')
				.delay(1000)
				.queue(function(){
					$(this).toggleClass('card-flipped');
				});
			}
        },diceNum*_runTime+1000);
}