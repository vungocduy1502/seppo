function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
AOS.init({
  duration: 1200,
});

// $(document).ready(function () {
//   $("#owl-demo").owlCarousel({
//     navigation: true, // Show next and prev buttons

//     slideSpeed: 300,
//     paginationSpeed: 400,

//     items: 2,
//     itemsDesktop: false,
//     itemsDesktopSmall: false,
//     itemsTablet: false,
//     itemsMobile: false,
//   });
// });

// get components
const components = document.querySelectorAll(".js-component");

const loadComponent = async (c) => {
  const { name, ext } = c.dataset;
  const response = await fetch(`${name}.${ext}`);
  const html = await response.text();
  c.innerHTML = html;
};

[...components].forEach(loadComponent);
