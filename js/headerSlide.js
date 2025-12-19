let lastScrollTop = 0;
const headerWrap = document.querySelector(".headerContent");

window.addEventListener(
  "scroll",
  function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // 스크롤을 아래로 내릴 때
      headerWrap.style.transition = "transform 0.3s ease";
      headerWrap.style.transform = "translateY(-100%)";
    } else {
      // 스크롤을 위로 올릴 때
      headerWrap.style.transition = "transform 0.3s ease";
      headerWrap.style.transform = "translateY(0)";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  },
  false
);
