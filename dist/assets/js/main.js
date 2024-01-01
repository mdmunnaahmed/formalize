"user strict";
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

// Sticky Menu
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("active", window.scrollY > 0);
  }
});

// Get the element
var toggler = document.getElementById("headerToggler");
var header = document.getElementById("responsiveHeader");
toggler.addEventListener("click", function () {
  header.classList.toggle("active");
});

// Faq Click Event
var faqHeaders = document.querySelectorAll(".faq-item .faq-title");

faqHeaders.forEach(function (header) {
  header.addEventListener("click", function (e) {
    var element = this.parentElement;

    if (element.classList.contains("open")) {
      element.classList.remove("open");
      element.querySelector(".faq-item .faq-content").classList.remove("open");
      element.querySelector(".faq-item .faq-content").style.display = "none";
    } else {
      element.classList.add("open");
      element.querySelector(".faq-item .faq-content").style.display = "block";

      // Close other open items
      var siblings = element.parentElement.children;
      for (var i = 0; i < siblings.length; i++) {
        if (siblings[i] !== element && siblings[i].classList.contains("open")) {
          siblings[i].classList.remove("open");
          siblings[i].querySelector(".faq-item .faq-content").style.display = "none";
        }
      }
    }
  });
});

// Slider Part
$(".client-review-slider").slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1500,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: false,
  nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
  prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
});