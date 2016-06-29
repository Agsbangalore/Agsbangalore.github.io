//paste this code under the head tag or in a separate js file.
      // Wait for window load
      $(window).load(function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");;
      });


$(function() {


      (function() {

         // store the slider in a local variable
         var $window = $(window),
        flexslider = { vars:{} };

         // tiny helper function to add breakpoints
         function getGridSize() {
      return (window.innerWidth < 700) ? 3 :       //default (2) no. of columns below 600px window width *******
             (window.innerWidth < 1000) ? 4 : 6;   //default (3:4) no. of columns below 900px window width *******
         }


         $window.load(function() {
      $('.flexslider.clientBox').flexslider({
        animation: "slide",
        animationSpeed: 400,
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 0,                          //default itemMargin: 5 ******
        minItems: getGridSize(), // use function to pull in initial value
        maxItems: getGridSize(), // use function to pull in initial value
        start: function(slider){
          $('body').removeClass('loading');
          flexslider = slider;
        }
      });
         });

         // check grid size on resize event
         $window.resize(function() {
      var gridSize = getGridSize();

      flexslider.vars.minItems = gridSize;
      flexslider.vars.maxItems = gridSize;
         });
      }());




      $(window).load(function() {
      $('.flexslider').flexslider();
      });



      	//Check to see if the window is top if not then display button
      	$(window).scroll(function(){
      		if ($(this).scrollTop() > 100) {
      			$('.scrollToTop').fadeIn();
      		} else {
      			$('.scrollToTop').fadeOut();
      		}
      	});


      	//Click event to scroll to top
      	$('.scrollToTop').click(function(){
      		$('html, body').animate({scrollTop : 0},800);
      		return false;
      	});






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
            /*console.log((wScroll+windowHeight)-introHeadBottom);*/

            $('.introHead').css({
            'transform' : 'translate(0px, '+ (-50+((wScroll+windowHeight)-introHeadBottom)) +'px)'
            });

      }else if ((wScroll+windowHeight)>introHeadBottom) {

            $('.introHead').css({
            'transform' : 'translate(0px, 150px)'
            });
      }
/*
            $('.introHead').animate({
            'top' : '0px'
            });


      }*/


      /*var diff = (introTop-20) - wScroll;

      console.log(introTop);
      if (wScroll > (introTop-introHeadHeight)) {
            console.log('hahahaha');
            $('.introHead').css({
            'top' : '-'+ diff +'%'
            });
      }*/
});









});
