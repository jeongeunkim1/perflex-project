document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function (accordion) {
    var header = accordion.querySelector(".accordionHeader");
    header.addEventListener("click", function () {
      if (accordion.classList.contains("open")) {
        accordion.classList.remove("open");
        accordion.querySelector(".accordionContent").style.display = "none";
      } else {
        accordion.classList.add("open");
        accordion.querySelector(".accordionContent").style.display = "block";
      }
    });
  });
});
