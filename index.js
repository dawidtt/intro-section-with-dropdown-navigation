function toogleMenu() {
  const wholeBody = document.querySelector("body");
  const menu = document.querySelector("#mobile-menu");
  wholeBody.classList.toggle("toogle-overflow");
  menu.classList.toggle("toogle-menu");
}
function toogleInnerMenu(n, path) {
  let innerMenu = document.querySelectorAll(path + " .open-sub-menu");
  let innerMenuArrow = document.querySelectorAll(path + " .btn");
  innerMenu[n].classList.toggle("toogle-inner-menu");
  innerMenuArrow[n].classList.toggle("up");
}
