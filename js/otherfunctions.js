// $(function() {
//
//
// if($(window).width()>1000){
//
// /*child pages title animation*/
//
//             $(window).scroll(function(){
//                   var wScroll = $(this).scrollTop(),
//                   introHeadHeight = $('.introHead').height(),
//                   introHead = $('.introHead').offset().top,
//                   introFloatBottom = $('.introHeadFloat').offset().top + $('.introHeadFloat').height(),
//                   introHeadBottom = introHead + introHeadHeight;
//
//
//             if(introFloatBottom >= introHeadBottom){
//                   $('.introHead').css({
//                         'transform' : 'translate(0px, '+ (Math.min(wScroll/30, 12.5)) +'vw)'
//                   });
//             }
//
//
//
//             });
//
// }
//
//
//
// });



 $(function() {

       if($(window).width()>1000){

       /*child pages title animation*/

                   var wScroll = $(window).scrollTop(),
                   wHeight = $(window).height(),
                   wWidth = $(window).width();
                  //  introHeadHeight = $('.introHead').height(),
                  //  introHead = $('.introHead').offset().top,
                  //  introFloatBottom = $('.introHeadFloat').offset().top + $('.introHeadFloat').height(),
                  //  introHeadBottom = introHead + introHeadHeight;

                   if(wWidth/wHeight>1.5){
                         console.log("hahaha");
                         $('.introHead h2').css({
                               'top' : '28%'
                         });
                   }


                   $(window).scroll(function(){
                        var wScroll = $(this).scrollTop();
                        console.log(wScroll/200);
                        /*console.log(wHeight);
                        console.log(wWidth);*/
/*
                   if(introFloatBottom >= introHeadBottom){
                         $('.introHead').css({
                               'transform' : 'translate(0px, '+ (Math.min(wScroll/30, 12.5)) +'vw)'
                         });
                   }


*/


                  $('.introHead h2').css({
                       'top' : ''+ (Math.max(28,Math.min((wScroll/8)+25, 50))) +'%'
                  });


                  if(wWidth/wHeight>1.5){
                        /*console.log("hahah");*/
                        /*$('.introHead h2').css({
                              'top' : '25%'
                        });*/
                  }


                   });

       }


 });
