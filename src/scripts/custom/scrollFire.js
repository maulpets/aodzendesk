
var modifier = 200;
window.onload = function (){
   var v = document.getElementById("videoPlayer");
    v.addEventListener('mouseover', function() { this.controls = true; }, false);
    v.addEventListener('mouseout', function() { this.controls = false; }, false);

   scrollFire();

   var screenWidth = document.clientWidth;

   if(screenWidth < 600){
     v.muted = true;
     v.playsinline = true;
     modifier = -400;
   }

}

function scrollFire(){

	 var last_known_scroll_position = 0;
	 var ticking = false;
	 var videoElem = document.getElementById("videoPlayer");
	 var toTop = getDistanceFromTop(videoElem) + modifier;
	 var triggered = false;

	 function fireAction(scroll_pos) {
		 // do something with the scroll position\
		 distance = toTop - scroll_pos;
		 if(distance < window.innerHeight){
			 videoElem.play();
			 triggered = true;
			 console.log(distance);

		 }


	 }


	 window.addEventListener('scroll', function(e) {

		 last_known_scroll_position = window.scrollY;

		 if (!ticking && !triggered) {

			 window.requestAnimationFrame(function() {
				 fireAction(last_known_scroll_position);
				 ticking = false;
			 });

			 ticking = true;

		 }

	 });


	 function getDistanceFromTop(element) {
			var yPos = 0;
			console.log(element);
			while(element) {
					yPos += (element.offsetTop);
					element = element.offsetParent;
			}
			return yPos;
	}
}
