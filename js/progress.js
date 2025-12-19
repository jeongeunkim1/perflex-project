document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelector(".progressBar");
  const progressTooltip = document.getElementById("progressTooltip");

  let progress = 0;
  const interval = setInterval(() => {
    if (progress <= 100) {
      progressBar.style.width = `${progress}%`;
      progressTooltip.innerHTML = `${progress}%`;
      progressTooltip.style.left = `${progress}%`; // Adjust tooltip position to end of progress bar
      progress += 1;
    } else {
      clearInterval(interval);
    }
  }, 100); // Adjusting speed
});
