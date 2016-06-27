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

























});
