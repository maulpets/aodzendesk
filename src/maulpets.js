// ****************//
//      STYLES     //
// ****************//
import style from './styles/style.scss';

// ****************//
//      IMAGES     //
// ****************//
// function importImages (r) {
//   r.keys().forEach(r);
// }
// importImages(require.context('./images/', true, /\.(png|jpg)$/));


// *****************//
//     FUNCTIONS    //
// *****************//
import headerScroll from './scripts/custom/navigationScroll.js';
import includeHTML from './scripts/custom/includeHTML.js';
// import zendesk from './scripts/zendesk.js';
// import lazyLoad from './scripts/custom/lazyLoader.js';
// import materialize from './scripts/materialize/src/materialize.min.js';

// **********************//
// define lazyLoad items //
// **********************//
// let image1 = new lazyLoad({
//                   elemID: 'hotel',
//                   path: './images/',
//                   name: 'landing-page-banner',
//                   type:'.jpg',
//                   hideOn: '900-'
//                 });





// *********************************//
// initialize materialize functions //
// *********************************//


// function init(){
//   var options = {
//     "hover": true,
//     "coverTrigger": false
//   }
//
//   document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.dropdown-trigger1');
//    var instances = M.Dropdown.init(elems, options);
//    console.log("fired");
//   });
//
//   document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.dropdown-trigger2');
//    var instances = M.Dropdown.init(elems, options);
//   });
//
//   document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.dropdown-trigger3');
//    var instances = M.Dropdown.init(elems, options);
//   });
//
//   document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.dropdown-trigger4');
//    var instances = M.Dropdown.init(elems, options);
//   });
//
//   document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.dropdown-trigger5');
//    var instances = M.Dropdown.init(elems, options);
//   });
//
// }
function fuckPaul(){
  var options = {
    "hover": true,
    "coverTrigger": false
  }

  // document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.dropdown-trigger1');
   var instances = M.Dropdown.init(elems, options);
   console.log("fired")
  // });

  // document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.dropdown-trigger2');
   var instances = M.Dropdown.init(elems, options);
  // });

  // document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.dropdown-trigger3');
   var instances = M.Dropdown.init(elems, options);
  // });

  // document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.dropdown-trigger4');
   var instances = M.Dropdown.init(elems, options);
  // });

  // document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.dropdown-trigger5');
   var instances = M.Dropdown.init(elems, options);
  // });
}




window.onload = function(){

  includeHTML(fuckPaul)

  const query = document.getElementById("query");
  const searchBar = document.getElementById("top-search-bar");
    query.addEventListener("focus", function( event ) {
      searchBar.classList.add('searching');
    }, true);

    query.addEventListener("blur", function( event ) {
      searchBar.classList.remove('searching');
    }, true);





  document.body.setAttribute('class', 'loaded');
  // image1.loadBg();



}
