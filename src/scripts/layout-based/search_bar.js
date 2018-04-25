//opens and closes search tray / changes icon on click
export default function searchBar() {
const openSearch = document.getElementById('searchLink');
const navi = document.getElementById('navigation');
const searchBar = document.getElementById('searchBar');
const searchIcon = document.getElementById("searchIcon");

openSearch.addEventListener("click", () => {

  if (!searchBar.classList.contains('open')){
    searchBar.classList.add('open');
    navi.classList.add('searching');
    searchIcon.textContent = "keyboard_arrow_up";
  }
    else {
      searchBar.classList.remove('open');
      navi.classList.remove('searching');
      searchIcon.textContent = "search";
  }
});
}
