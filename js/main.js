let bar = document.querySelector(".mobbar");
let toggler = document.querySelector(".mobmenu");
let moblink = document.querySelector(".moblink");
let downloads = document.querySelector(".downnw");
let dev = document.querySelector(".devnw");
let music = document.querySelector(".musicnw");
let downloadsdsk = document.querySelector(".downloads");
let devdsk = document.querySelector(".devices");
let musicdsk = document.querySelector(".music");
let homedsk = document.querySelector(".home");
let homepage = document.querySelector(".homepage");
let devpage = document.querySelector(".devicespage");
let ytbtn = document.querySelector(".youtube-btn");
let ytchn = document.querySelector(".yt-channel-page-embed");
let ytclosebtn = document.querySelector(".closebtn-yt");
let cntclosebtn = document.querySelector(".closebtn-cnt");
let contactbtn = document.querySelector(".contact-btn");
let contact = document.querySelector(".contact-form");
let biobtn = document.querySelector(".bio-btn");
let bio = document.querySelector(".biolink");
let bioclose = document.querySelector(".closebtn-bio");
let musicpg = document.querySelector(".musicpg")
let musicbtn = document.querySelector(".music")
let downloadpg = document.querySelector(".download")
let fm = document.querySelector(".toggler")
let navbar = document.querySelector(".navbar")
toggler.addEventListener("click", function () {
  bar.classList.toggle("open");
  moblink.classList.toggle("show");
  downloads.classList.toggle("show");
  dev.classList.toggle("show");
  music.classList.toggle("show");
});

homedsk.addEventListener("click",function () {
  homepage.classList.remove("hide");
  devpage.classList.remove("show");
  musicpg.classList.remove("show");
  downloadpg.classList.remove("show");
});

downloadsdsk.addEventListener("click",function () {
  homepage.classList.add("hide");
  devpage.classList.remove("show");
  musicpg.classList.remove("show");
  downloadpg.classList.add("show");
});

devdsk.addEventListener("click",function () {
  homepage.classList.add("hide");
  devpage.classList.add("show");
  musicpg.classList.remove("show");
  downloadpg.classList.remove("show");
});

ytbtn.addEventListener("click",function () {
  ytchn.classList.add("popopen");
});

ytclosebtn.addEventListener("click",function () {
  ytchn.classList.remove("popopen");
});

contactbtn.addEventListener("click",function () {
  contact.classList.add("popopen");
});

cntclosebtn.addEventListener("click",function () {
  contact.classList.remove("popopen");
});
biobtn.addEventListener("click",function () {
  bio.classList.add("popopen");
});

bioclose.addEventListener("click",function () {
  bio.classList.remove("popopen");
});
musicbtn.addEventListener("click",function () {
  homepage.classList.add("hide")
  musicpg.classList.add("show")
  devpage.classList.remove("show")
  downloads.classList.remove("show")
});
fm.addEventListener("click",function () {
  navbar.classList.toggle("opened")
  homedsk.classList.toggle("expanded")
  downloadsdsk.classList.toggle("expanded")
  devdsk.classList.toggle("expanded")
  musicdsk.classList.toggle("expanded")
  fm.classList.toggle("expanded")
});