$(function() {


if($(window).width()>1000){

/*child pages title animation*/

            $(window).scroll(function(){
                  var wScroll = $(this).scrollTop(),
                  introTop = $('.introSection').offset().top,
                  windowHeight = $(window).height(),
                  introHeadHeight = $('.introHead').height(),
                  introHead = $('.introHead').offset().top,
                  introHeadBottom = $('.introHeadFloat').offset().top + $('.introHeadFloat').height();

                  /*console.log('windowHeight' + windowHeight);
                  console.log('introHeadBottom' + introHeadBottom);
                  console.log(wScroll+windowHeight);*/


                  if(((wScroll+windowHeight)>=introHeadBottom)&&
                  ((wScroll+windowHeight)<=introHeadBottom+($('.introHeadFloat').height()-145))){

                        $('.introHead').css({
                        'transform' : 'translate(0px, '+ (-50+((wScroll+windowHeight)-introHeadBottom)) +'px)'
                        });

                  }else if ((wScroll+windowHeight)>introHeadBottom) {

                        $('.introHead').css({
                        'transform' : 'translate(0px, 150px)'
                        });
                  }

            });

}









});


$(document).ready(function() {
	$('#nav').onePageNav();
});
