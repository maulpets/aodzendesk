// IMPORT OTHER JS FILES HERE DUHH PAUL
// oh and the '_'
// ****************//
//      STYLES     //
// ****************//
import style from './styles/base.scss';


// ****************//
//      IMAGES     //
// ****************//
function importImages (r) {
  r.keys().forEach(r);
}
importImages(require.context('./images/', true, /\.(png|jpg)$/));


// *****************//
//     FUNCTIONS    //
// *****************//
import footer from './scripts/layout-based/page_footer';
// import searchBar from './scripts/layout-based/search_bar';
import materialize from './scripts/materialize/src/materialize.js';
import lazyLoad from './scripts/custom/lazyLoader.js';


// **********************//
// define lazyLoad items //
// **********************//
let image1 = new lazyLoad({
                  elemID: 'hotel',
                  path: './images/',
                  name: 'landing-page-banner',
                  type:'.jpg',
                  hideOn: '900-'
                });


// *********************************//
// initialize materialize functions //
// *********************************//
let elem = document.querySelector('.sidenav');
let instance = M.Sidenav.init(elem);







window.onload = function (){
  document.body.setAttribute('class', 'loaded');
  footer();
  image1.loadBg();

}
