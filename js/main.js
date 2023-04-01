let bar = document.querySelector(".mobbar");
let toggler = document.querySelector(".mobmenu");
let moblink = document.querySelector(".moblink")
let downloads = document.querySelector(".downnw")
let dev = document.querySelector(".devnw")
let music = document.querySelector(".musicnw")
let downloadsdsk = document.querySelector(".downloads")
let devdsk = document.querySelector(".devices")
let musicdsk = document.querySelector(".music")
let homedsk = document.querySelector(".home")
let homepage = document.querySelector(".homepage")
let devpage = document.querySelector(".devicespage")
toggler.addEventListener("click", function () {
  bar.classList.toggle("open");
  moblink.classList.toggle("show")
  downloads.classList.toggle("show")
  dev.classList.toggle("show")
  music.classList.toggle("show")
});
homedsk.addEventListener("click",function () {
  homepage.classList.remove("hide")
  devpage.classList.remove("show")
})
downloadsdsk.addEventListener("click",function () {
  homepage.classList.add("hide")
})
devdsk.addEventListener("click",function () {
  homepage.classList.add("hide")
  devpage.classList.add("show")
})