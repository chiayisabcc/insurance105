$(function(){
    init();
});

function init(){
    $('.map')
    .addClass('active')
    .delay(300)
    .queue(function(){
      $('.logo').addClass('active');
      $(this).dequeue();
    })
    .delay(300)
    .queue(function(){
      $('.doll').addClass('active');
      $(this).dequeue();
    })
    .delay(1000)
    .queue(function(){
      $('.start').addClass('active');
      $(this).dequeue();
    })
    .delay(300)
    .queue(function(){
      $('.menu-btn').addClass('active');
      $(this).dequeue();
    });
}