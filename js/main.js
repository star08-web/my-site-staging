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
let dldesc = document.querySelector(".downloads-desc")
let devdesc = document.querySelector(".devices-desc")
let musicdesc = document.querySelector(".music-desc")
let sitename = document.querySelector(".home-desc")
let copymsgbox = document.querySelector(".cpalertmsgbox")
let copymsgboxhide = document.querySelector(".cpalert-hide")
let ytif = document.getElementById("yt-iframe")
let summerif = document.getElementById("summer-iframe")
let lfdif = document.getElementById("lfd-iframe")
var expandedstatus = "std"
var env = "development"
function minimize(){
  if (expandedstatus !== "std"){
    navbar.classList.remove("opened")
    fm.classList.remove("expanded")
    homedsk.classList.remove("expanded")
    downloadsdsk.classList.remove("expanded")
    devdsk.classList.remove("expanded")
    musicdsk.classList.remove("expanded")
    dldesc.classList.remove("show")
    devdesc.classList.remove("show")
    sitename.classList.remove("show")
    musicdesc.classList.remove("show")
    expandedstatus = "std"
    if (env == "development"){
      console.log("Log: Minimizing Navbar")
    } else {
      // do nothing
    }
  } else {
    if (env == "development"){
      console.log("Log: Navbar is alredy minimized... ignoring")
    } else {
      // do nothing
    }
  }
}
function controlyt(action){
  if (action === "Stop"){
    ytif.src = "about:blank"
  } else {
    ytif.src = "https://www.youtube-nocookie.com/embed/videoseries?list=PLEC99ANh92hGqPra9LpK2GJXY0dsFtm2B"
  }
}
toggler.addEventListener("click", function () {
  bar.classList.toggle("open");
  moblink.classList.toggle("show");
  downloads.classList.toggle("show");
  dev.classList.toggle("show");
  music.classList.toggle("show");
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
copymsgboxhide.addEventListener("click",function () {
  copymsgbox.classList.remove("show")
});
fm.addEventListener("click",function () {
  navbar.classList.toggle("opened")
  homedsk.classList.toggle("expanded")
  downloadsdsk.classList.toggle("expanded")
  devdsk.classList.toggle("expanded")
  musicdsk.classList.toggle("expanded")
  fm.classList.toggle("expanded")
  dldesc.classList.toggle("show")
  devdesc.classList.toggle("show")
  sitename.classList.toggle("show")
  musicdesc.classList.toggle("show")
  if (expandedstatus == "std"){
    expandedstatus = "expanded"
  } else {
    expandedstatus = "std"
  }
  if (env == "development"){
    console.log(expandedstatus)
  } else {
    // do nothing
  }
});
homedsk.addEventListener("click",function () {
  homepage.classList.remove("hide");
  devpage.classList.remove("show");
  musicpg.classList.remove("show");
  downloadpg.classList.remove("show");
  summerif.src = "about:blank"
  lfdif.src = "about:blank"
  minimize()
});

downloadsdsk.addEventListener("click",function () {
  homepage.classList.add("hide");
  devpage.classList.remove("show");
  musicpg.classList.remove("show");
  downloadpg.classList.add("show");
  summerif.src = "about:blank"
  lfdif.src = "about:blank"
  minimize()
});

devdsk.addEventListener("click",function () {
  homepage.classList.add("hide");
  devpage.classList.add("show");
  musicpg.classList.remove("show");
  downloadpg.classList.remove("show");
  summerif.src = "about:blank"
  lfdif.src = "about:blank"
  minimize()
});
musicbtn.addEventListener("click",function () {
  homepage.classList.add("hide")
  musicpg.classList.add("show")
  devpage.classList.remove("show")
  downloadpg.classList.remove("show")
  summerif.src = "https://lnkfi.re/alxsummer/widget"
  lfdif.src = "https://lnkfi.re/alxlofidream/widget"
  minimize()
});
  var hashtag = window.location.hash; // Get the current hashtag
  switch (hashtag) {
  case '#home':
    homepage.classList.remove("hide");
    devpage.classList.remove("show");
    musicpg.classList.remove("show");
    downloadpg.classList.remove("show");
    minimize()
    break;
  case '#downloads':
    homepage.classList.add("hide");
    devpage.classList.remove("show");
    musicpg.classList.remove("show");
    downloadpg.classList.add("show");
    minimize()
    break;
  case '#devices':
      homepage.classList.add("hide");
      devpage.classList.add("show");
      musicpg.classList.remove("show");
      downloadpg.classList.remove("show");
      minimize()
      break;
  case '#music':
    homepage.classList.add("hide")
    musicpg.classList.add("show")
    devpage.classList.remove("show")
    downloadpg.classList.remove("show")
    minimize()
    break;
    default:
      homepage.classList.remove("hide");
      devpage.classList.remove("show");
      musicpg.classList.remove("show");
      downloadpg.classList.remove("show");
      minimize()
      break;
}
function copyToClipboard(link) {
  var tempInput = document.createElement("input");
  tempInput.value = link;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  copymsgbox.classList.add("show");
  function hidecopymsgbox(){
    copymsgbox.classList.remove("show");
  }
  setTimeout(hidecopymsgbox, 5000);
}
