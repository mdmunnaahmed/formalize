"user strict";

// Sticky Menu
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

$(function () {
    $(".selectpicker").selectpicker();
});
