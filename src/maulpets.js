// IMPORT OTHER JS FILES HERE DUHH PAUL
// oh and the '_'
// *****************
//      STYLES
// *****************
import style from './styles/base.scss';
// import './custom/lazyloader.js';
// import './layout-based/search_bar.js';
// import './layout-based/navi_bar.js';


// *****************
//      IMAGES
// *****************
import logo_circles from './images/logos/AOD_Circles.svg';
import aod_icon from './images/aod_icon.png';
import aod_iconx144 from './images/aod_icon_144x144.png';
import favicon from './images/favicon.png';

import banner_l from './images/landing-page-banner_l.jpg';
import banner_m from './images/landing-page-banner_m.jpg';
import banner_s from './images/landing-page-banner_s.jpg';
import banner_mobile from './images/landing-page-banner_mobile.jpg';

// *****************
//      ICONS
// *****************
import icon_video from './images/icons/video.svg';
import icon_research from '../images/icons/research.svg';
import icon_whitepaper from '../images/icons/whitepaper.svg';


// *****************
//     FUNCTIONS
// *****************
import footer from './scripts/layout-based/page_footer';
import searchBar from './scripts/layout-based/search_bar';

window.onload = function (){
  footer();
  document.body.setAttribute('class', 'loaded');

}
