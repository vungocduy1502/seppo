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

// google map
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
