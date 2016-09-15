$(function() {


if($(window).width()>1000){

/*child pages title animation*/

            $(window).scroll(function(){
                  var wScroll = $(this).scrollTop(),
                  introHeadHeight = $('.introHead').height(),
                  introHead = $('.introHead').offset().top,
                  introFloatBottom = $('.introHeadFloat').offset().top + $('.introHeadFloat').height(),
                  introHeadBottom = introHead + introHeadHeight;


            if(introFloatBottom >= introHeadBottom){
                  $('.introHead').css({
                        'transform' : 'translate(0px, '+ (Math.min(wScroll/30, 12.5)) +'vw)'
                  });
            }



            });

}









});
