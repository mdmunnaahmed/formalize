"user strict";

// Sticky Menu
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

// Get the element
var toggler = document.getElementById("headerToggler");
var header = document.getElementById("responsiveHeader");
var overlay = document.getElementById("overlay");
var closeHeader = document.getElementById("closeHeader");
toggler.addEventListener("click", function () {
  header.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", function () {
  header.classList.remove("active");
  overlay.classList.remove("active");
});
closeHeader.addEventListener("click", function () {
  header.classList.remove("active");
  overlay.classList.remove("active");
});

// On Scroll image Fade in transition js
function isInViewport(element, offset) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top + offset <= windowHeight && rect.bottom - offset >= 0;
}

function handleScroll() {
  var images = document.querySelectorAll(".fadeIn");

  images.forEach(function (image) {
    if (isInViewport(image, 100)) {
      setTimeout(function () {
        image.classList.add("fadeInAnimation");
      }, 150);
    }
  });

  var fadeUp = document.querySelectorAll(".fadeUp");
  fadeUp.forEach(function (item) {
    var delay = parseInt(item.getAttribute("data-animation-delay")) || 0;
    if (isInViewport(item, 100)) {
      setTimeout(function () {
        item.classList.add("fadeUpAnimation");
      }, delay);
    }
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();
