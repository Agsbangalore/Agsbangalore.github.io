//paste this code under the head tag or in a separate js file.
      // Wait for window load
      // $(window).load(function() {
      //       // Animate loader off screen
      //       $(".se-pre-con").fadeOut("slow");
      // });


$(function() {


//show video



// setTimeout(
//   function()
//   {
//     $(".videoOverlay").animate({
//           "opacity": "0"
//    });
//   }, 500);




//enablr video only for desktop

$(function(){

if($(window).width()<750){

      $('video').remove();

}


});








//Flexslider scripts

      (function() {

         // store the slider in a local variable
         var $window = $(window),
        flexslider = { vars:{} };

         // tiny helper function to add breakpoints
         function getGridSize() {
      return (window.innerWidth < 700) ? 3 :       //default (2) no. of columns below 600px window width *******
             (window.innerWidth < 1000) ? 4 : 6;   //default (3:4) no. of columns below 900px window width *******
         }


         $(window).on('load',function() {
         $('.flexslider.clientBox').flexslider({
        animation: "slide",
        animationSpeed: 200,
        animationLoop: true,
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




      $(window).on('load',function() {
      $('.flexslider').flexslider({
                  animation: "slide"
            });
      });

      (function() {
            $(".navBoxLeft").bind("click", function(){
                  $('.flex-prev').click();
            })
            $(".navBoxRight").bind("click", function(){
                  $('.flex-next').click();
            })
      }());




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
		$('html, body').animate({scrollTop: 0},800);
		return false;
	});




/*ACcordian JavaScript*/

$(function(){
      if($(window).width()<700){
            $('.offAdd').slideUp();
            $('.accord > h3').click(function(){
                        $(this).next().slideToggle(500);
                        $(this).toggleClass('active');
            });
      }
});





//opening and closing of navigation menu
(function() {
      $("#navButton").on("click", function(){
            $('.pageContent').toggleClass("pageOpen");
            $('#navButton').toggleClass("navOpen");
            $('.hamIcon').toggleClass('show');
            $('.closeIcon').toggleClass('show');

            //closing menu by clicking on the page
            $(".pageContent.pageOpen").on("click", function(){
                  $('.pageContent').removeClass("pageOpen");
                  $('#navButton').removeClass("navOpen");
                  $('.hamIcon').addClass('show');
                  $('.closeIcon').removeClass('show');
                  return false;
            })
            return false;
      })
}());




var imgPath = $('.contactSection').css('background-image');
imgPath = imgPath && imgPath.match(/url\((['"])?(.*?)\1\)/);
imgPath = imgPath && imgPath[2];
if (imgPath) {
   $('<img>').attr('src', imgPath).on('load',function(){
         $(this).remove();

         // [do something here...]
         $(".loadingPage").css({"display": "none"});
         console.log(imgPath);

      //animation on servicesBox section
         $(".servicesSection > div").addClass("servicesShow");

   });


}









});
