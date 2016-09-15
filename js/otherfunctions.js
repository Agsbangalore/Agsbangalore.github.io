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

                  // console.log("wScroll "+wScroll);
                  // console.log("introTop "+introTop);
                  // console.log("windowHeight "+windowHeight);
                  // console.log("introHeadHeight "+introHeadHeight);
                  // console.log("introHead "+introHead);
                  // console.log("introHeadBottom "+introHeadBottom);
                  // console.log("==================");

                  if(((wScroll+windowHeight)>=introHeadBottom+1)&&
                  ((wScroll+windowHeight)<=introHeadBottom+((introHeadHeight)/3))){

                        $('.introHead').css({
                        'transform' : 'translate(0px, '+ (-12.5+((wScroll+windowHeight)-introHeadBottom))/8 +'vw)'
                        });

                  }else if ((wScroll+windowHeight)>introHeadBottom) {

                        $('.introHead').css({
                        'transform' : 'translate(0px, 12.5vw)'
                        });
                  }

            });

}









});
