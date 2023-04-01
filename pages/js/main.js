let bar = document.querySelector(".mobbar");
let toggler = document.querySelector(".mobmenu");
let moblink = document.querySelector(".moblink")
let downloads = document.querySelector(".downnw")
let dev = document.querySelector(".devnw")
let music = document.querySelector(".musicnw")
toggler.addEventListener("click", function () {
  bar.classList.toggle("open");
  moblink.classList.toggle("show")
  downloads.classList.toggle("show")
  dev.classList.toggle("show")
  music.classList.toggle("show")
});