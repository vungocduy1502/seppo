// component
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Animation aos
AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
});

// get components
const components = document.querySelectorAll(".js-component");

const loadComponent = async (c) => {
  const { name, ext } = c.dataset;
  const response = await fetch(`${name}.${ext}`);
  const html = await response.text();
  c.innerHTML = html;
};

[...components].forEach(loadComponent);
