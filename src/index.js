require("babel-polyfill");
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
import materialize from './scripts/materialize/src/materialize.min.js';

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


  document.addEventListener('DOMContentLoaded',() => {
    //get all the places we want to inject html & loop thru them
    Array.from(document.querySelectorAll('.html-container'))
    .forEach((container) => {
      //get the url stored as an attribute on the dom element
      const htmlURL = container.getAttribute("include-html")
      //request the HTML from the htmlURL
      includeHTML(htmlURL)
      .then((responseHTML) => {
         container.innerHTML = responseHTML

         const options = {
          "hover": true,
          "coverTrigger": false
         }

         Array.from(container.querySelectorAll('.dropdown-trigger'))
         .forEach((elems) => {const instances = M.Dropdown.init(elems, options)})
       })
    })
  })

  Array.from(document.getElementsByClassName('dropdown-trigger'))
   .forEach((elems) => {
     const options = {
       "hover": true,
       "coverTrigger": false
     }
     const instances = M.Dropdown.init(elems, options)
    })







window.onload = function(){

  //search input field
  const query = document.getElementById("query")
  const searchBar = document.getElementById("top-search-bar")

  query.addEventListener("focus",(event) => searchBar.classList.add('searching'), true);
  query.addEventListener("blur", (event) => searchBar.classList.remove('searching'), true);






  document.body.setAttribute('class', 'loaded');
  // image1.loadBg();
}
