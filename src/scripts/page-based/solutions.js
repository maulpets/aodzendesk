$(document).ready(function(){
		var windowSize = document.documentElement.clientWidth;
		var defaultTab;

		var tabSet;
		
		if( windowSize > 960)			
			tabSet = $('.openTab');
		else 
			tabSet = $('.openTabMobile');
			
		
		defaultTab = tabSet.attr("data-showTab");
		

		$('.tabContent-wrapper').removeClass('active');
		$('.tabLink').removeClass('active');

		//make tab active + show tab
		tabSet.addClass('active');
		$(defaultTab).addClass('active');


		
		
		
     
    var lineDrawing = anime({
      autoplay: false,
      targets: '#lineDrawing .lines path',
      strokeDashoffset: 0,
      delay: function(el, i) { return i * 25 },
      easing: 'easeInOutSine',
      duration: 2000,
      loop: false
    });
    
    function isInView(elem){
            return $(elem).offset().top - $(window).scrollTop() - 400 < $(elem).height();    
    }
    
        
    $(window).scroll(function(){
     
		var hasPlayed = $('#lineDrawing').hasClass( "active" );
		
        if (isInView($('#lineDrawing')) && hasPlayed == false){
          lineDrawing.play();
          $('#lineDrawing').addClass("active");  
        }
    });
		
	
});
