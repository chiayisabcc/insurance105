var diceNum;
var diceInterval;
var tempCard;
var nowIndex = 0;
var disable = 0;
var _runTime = 1000;


$(document).ready(function(){

	$('.character-pick').click(function(){

		var characterId = $(this).attr('id').charAt(10);
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

    	$('.character').addClass('active');
    	diceNum = Math.floor(Math.random()*6+1);
    	diceNum = 1;
        diceInterval = setInterval("countDice()",_runTime);
        showCard();
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
	}
	// 小於等於0

	
}

function start(){

}

function gameOver(){
	clearInterval(diceInterval);
	disable = 0;
	popup('');
}

function drawChance(){
	var drawCard = Math.floor(Math.random()*5+1);
	$('#step-3-card .back img').attr('src','img/chance_'+drawCard+'.png');
	if(drawCard == 1 || drawCard == 3 || drawCard == 4){
		$('#step-3-card .card').addClass('forward-1');
	}
	else if(drawCard == 2 || drawCard == 5){
		$('#step-3-card .card').addClass('forward-2');
	}

	$('.forward-1').on('click',function(){
    	popupClose($('.cards'));
    	diceNum = 1;
    	diceInterval = setInterval("countDice()",_runTime);
    	setTimeout(function(){
    		showCard();
    	},_runTime*1);
    });
    $('.forward-2').on('click',function(){
    	popupClose($('.cards'));
    	diceNum = 2;
    	diceInterval = setInterval("countDice()",_runTime);
    	setTimeout(function(){
    		showCard();
    	},_runTime*2);
        
    });

}
function drawDestiny(){
	var drawCard = Math.floor(Math.random()*5+1);
	$('#step-7-card .back img').attr('src','img/destiny_'+drawCard+'.png');
	if(drawCard == 1 || drawCard == 4){
		$('#step-7-card .card').addClass('backward-1');
	}
	else if(drawCard == 2 || drawCard == 3 || drawCard == 5){
		$('#step-7-card .card').addClass('backward-2');
	}

	$('.backward-1').on('click',function(){
    	popupClose($('.cards'));
    	diceNum = -1;
    	diceInterval = setInterval("countDice()",_runTime);
    	setTimeout(function(){
    		showCard();
    	},_runTime*1);
    });
    $('.backward-2').on('click',function(){
    	popupClose($('.cards'));
    	diceNum = -2;
    	diceInterval = setInterval("countDice()",_runTime);
    	setTimeout(function(){
    		showCard();
    	},_runTime*2);
    });
}

function showCard(){
	setTimeout(function(){
        	popup('step-'+nowIndex+'-card');
        	$('#step-'+nowIndex+'-card .card')
        	.delay(1000)
        	.queue(function(){
        		$(this).toggleClass('card-flipped');
        	});
        },diceNum*_runTime+1000);
}