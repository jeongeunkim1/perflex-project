document.addEventListener("DOMContentLoaded", function () {
  const clientsWrap = document.querySelector(".clientsWrap");
  const clientsContents = document.querySelectorAll(".clientsContent");
  const clientLogosWidth = document.querySelector(".clientsContent img").offsetWidth;

  function autoScroll(clientsContent) {
    clientsContent.scrollLeft += 1;
    if (clientsContent.scrollLeft >= clientLogosWidth) {
      clientsContent.scrollLeft = 0;
      clientsContent.appendChild(clientsContent.firstElementChild);
    }
  }

  clientsContents.forEach(function (clientsContent, index) {
    setInterval(function () {
      autoScroll(clientsContent);
    }, (index + 1) * 2000); // 각각의 슬라이드마다 다른 속도를 적용할 수 있습니다.
  });
});
