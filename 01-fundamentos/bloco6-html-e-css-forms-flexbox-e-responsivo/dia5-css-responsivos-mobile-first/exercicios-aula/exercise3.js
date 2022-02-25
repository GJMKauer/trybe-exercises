window.onscroll = function () {
  fixaNav();
};

let navbar = document.getElementById("navigation");
let sticky = navbar.offsetTop;

function fixaNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
