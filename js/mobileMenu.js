document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menuButton");
  const mobileMenu = document.querySelector(".mobileMenu");
  const closeIconWrap = document.querySelector(".closeIconWrap");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("open"); // 모바일 메뉴가 열려 있으면 닫고, 닫혀 있으면 엽니다.
  });

  // 클로즈 아이콘을 누르면 메뉴가 닫힙니다.
  closeIconWrap.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
  });
});
