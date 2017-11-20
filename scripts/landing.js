var animatePoints = function() {

     var points = document.getElementsByClassName('point');

     var RevealPoint = function(number){
       points[number].style.opacity = 1;
       points[number].style.transform = "scaleX(1) translateY(0)";
       points[number].style.msTransform = "scaleX(1) translateY(0)";
       points[number].style.WebkitTransform = "scaleX(1) translateY(0)";
     }

     for var i =0; i < points.length; i++) {
       RevealPoint(i);
     }

 };
