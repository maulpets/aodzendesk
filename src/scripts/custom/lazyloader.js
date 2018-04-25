/*************************
LAZY IMAGE LOADER :)
****************************/



$(document).ready(lazyLoaded);
$(window).resize(lazyLoaded);


//$( window ).on( "load",unlazyLoader);


function lazyLoaded(){
	//class .lazyBG is needed for background lazy loading
var x = $(".loadBG");
//class .lazyIMG is needed for background lazy loading
var y = $(".loadIMG");
var i;


//get the size of the window
var windowSize = document.documentElement.clientWidth;

//var imgLocation = "aodtest.infotronics.com/assets/Images/";
var imgSize = "_mobile";
var videoSize = "_mobile";

//set the imgSize based on width of window
if( windowSize > 1440){
	imgSize = "_l";
	videoSize = "_desktop";
} else if ( windowSize > 960){
    imgSize = "_m";
    videoSize = "_desktop";
} else if ( windowSize > 600){
    imgSize = "_s";
    videoSize = "_desktop";
}


//loop that sets all divs with .lazyBG to proper bg image
for (i = 0; i < x.length; i++) {
	//get items data-bg properties from HTML
    var loadThisBG = x[i].getAttribute("data-bg-location") + x[i].getAttribute("data-bg-name") + imgSize + x[i].getAttribute("data-bg-type");
	//console.log(loadThisBG);
	//console.log(x);
	var hideOnBG = x[i].getAttribute("data-bg-hideOn");

	if(hideOnBG !== null) {
		hideOnBG = hideOnBG.split('');
		var operator = hideOnBG.pop();
		hideOnBG = hideOnBG.join('');

		if(operator === '+' && hideOnBG > windowSize){
			//sets thee items background image to "loadThis"
			x[i].style.backgroundImage = 'url(' + loadThisBG + ')';
			}
		if(operator === '-' && hideOnBG < windowSize){
			x[i].style.backgroundImage = 'url(' + loadThisBG + ')';
		}
	}
	else{
		x[i].style.backgroundImage = 'url(' + loadThisBG + ')';
	}


}



//loop that finds all divs with .lazyIMG and inserts the image
for (i = 0; i < y.length; i++) {

	//get items data-img properties from HTML
   var loadThisIMG = y[i].getAttribute("data-img-location") + y[i].getAttribute("data-img-name") + imgSize + y[i].getAttribute("data-img-type");

	y[i].innerHTML ="";

	//elem to create img
	var elem = document.createElement("img");

	var hideOnIMG = y[i].getAttribute("data-img-hideOn");



	if(hideOnIMG !== null) {
		hideOnIMG = hideOnIMG.split('');
		var operator2 = hideOnIMG.pop();
		hideOnIMG = hideOnIMG.join('');

		if(operator2 === '+' && hideOnIMG > windowSize){

			//set source
			elem.src = loadThisIMG;
			//make the img thang
			y[i].appendChild(elem);
		}
		if(operator2 === '-' && hideOnIMG < windowSize){
			//set source
			elem.src = loadThisIMG;
			y[i].appendChild(elem);
		}
	}
	else{
		//set source
		elem.src = loadThisIMG;
		y[i].appendChild(elem);
	}
}

}




//LAZY LOADER AKA starts to load the big pictures further down the page AFTER initial load is done :)

//start function after WINDOw has "load"


function unlazyLoader(){


//class .lazyBG is needed for background lazy loading
var x = document.getElementsByClassName("lazyBG");
//class .lazyIMG is needed for background lazy loading
var y = document.getElementsByClassName("lazyIMG");
var z = document.getElementsByClassName("lazyVID");
var i;


//get the size of the window
var windowSize = document.documentElement.clientWidth;


//var imgLocation = "aodtest.infotronics.com/assets/Images/";
var imgSize = "_mobile";
var videoSize = "_mobile";

//set the imgSize based on width of window
if( windowSize > 1440){
	imgSize = "_l";
	videoSize = "_desktop";
} else if ( windowSize > 960){
    imgSize = "_m";
    videoSize = "_desktop";
} else if ( windowSize > 600){
    imgSize = "_s";
    videoSize = "_desktop";
}



//loop that sets all divs with .lazyBG to proper bg image
for (i = 0; i < x.length; i++) {
	//get items data-bg properties from HTML
    var loadThisBG = x[i].getAttribute("data-bg-location") + x[i].getAttribute("data-bg-name") + imgSize + x[i].getAttribute("data-bg-type");
	//console.log(loadThisBG);
	//console.log(x);
	var hideOnBG = x[i].getAttribute("data-bg-hideOn");

	if(hideOnBG !== null) {
		hideOnBG = hideOnBG.split('');
		var operator = hideOnBG.pop();
		hideOnBG = hideOnBG.join('');

		if(operator === '+' && hideOnBG > windowSize){
			//sets thee items background image to "loadThis"
			x[i].style.backgroundImage = 'url(' + loadThisBG + ')';
			}
		if(operator === '-' && hideOnBG < windowSize){
			x[i].style.backgroundImage = 'url(' + loadThisBG + ')';
		}
	}
	else{
		x[i].style.backgroundImage = 'url(' + loadThisBG + ')';
	}


}



//loop that finds all divs with .lazyIMG and inserts the image
for (i = 0; i < y.length; i++) {

	//get items data-img properties from HTML
   var loadThisIMG = y[i].getAttribute("data-img-location") + y[i].getAttribute("data-img-name") + imgSize +  y[i].getAttribute("data-img-type");

	//elem to create img
	var elem = document.createElement("img");


	var hideOnIMG = y[i].getAttribute("data-img-hideOn");

	if(hideOnIMG !== null) {
		hideOnIMG = hideOnIMG.split('');
		var operator2 = hideOnIMG.pop();
		hideOnIMG = hideOnIMG.join('');

		if(operator2 === '+' && hideOnIMG > windowSize){
			//set source
			elem.src = loadThisIMG;
			//make the img thang
			y[i].appendChild(elem);
		}
		if(operator2 === '-' && hideOnIMG < windowSize){
			//set source
			elem.src = loadThisIMG;
			y[i].appendChild(elem);
		}
	}
	else{
		//set source
		elem.src = loadThisIMG;
		y[i].appendChild(elem);
	}

}

//loop that finds all divs with .lazyVID and inserts the image
for (i = 0; i < z.length; i++) {


	//get items data-img properties from HTML
   var loadThisVID = z[i].getAttribute("data-vid-location") + z[i].getAttribute("data-vid-name") + videoSize + z[i].getAttribute("data-vid-type");

	//elem to create img
	var elem = document.createElement("video");


	var autoplay = z[i].getAttribute("data-vid-autoplay");

	var looping = z[i].getAttribute("data-vid-loop");


	var hideOnVID = z[i].getAttribute("data-video-hideOn");




	if(hideOnVID !== null) {
		hideOnVID = hideOnVID.split('');
		var operator2 = hideOnVID.pop();
		hideOnVID = hideOnVID.join('');

		if(operator2 === '+' && hideOnVID > windowSize){
			//set source
			elem.src = loadThisVID;
			//make the img thang
			z[i].appendChild(elem);

			elem.autoplay = autoplay;
			elem.loop = looping;
			if( windowSize < 960){
				elem.setAttribute("playsinline",null);
				elem.muted = true;
			}
		}
		if(operator2 === '-' && hideOnVID < windowSize){
			//set source
			elem.src = loadThisVID;
			z[i].appendChild(elem);

			elem.autoplay = autoplay;
			elem.loop = looping;
			if( windowSize < 960){
				elem.setAttribute("playsinline",null);
				elem.muted = true;
			}
		}
	}
	else{
		//set source
		elem.src = loadThisVID;
		z[i].appendChild(elem);
		elem.autoplay = autoplay;
		elem.loop = looping;
			if( windowSize < 960){
				elem.setAttribute("playsinline",null);
				elem.muted = true;
			}
	}

}
 }
