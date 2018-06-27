var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  if(scroll_pos > 0){
    document.getElementById("header-category").classList.remove('hidden');
  }
  else {
    document.getElementById("header-category").classList.add('hidden');
  }
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;

  }

});
