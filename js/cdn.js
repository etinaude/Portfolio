var base = "https://res.cloudinary.com/etienne-naude/image/upload";
var mod = "f_auto,q_auto,c_scale";

function setWidth(percent) {
  var width = Math.round(
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ) *
      (percent / 100)
  );
  return width - (width % 10);
}

function addBackgroundImage(paramters) {
  var arr = paramters[0];
  var width = paramters[1];
  var mod = paramters[2];
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    var id = e.id;
    e.style.backgroundImage = `url("${base}/w_${width},${mod}/${id}")`;
  }
}

function addForegroundImage(paramters) {
  var arr = paramters[0];
  var width = paramters[1];
  var mod = paramters[2];
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    var id = e.id;
    e.src = `${base}/w_${width},${mod}/${id}`;
    e.onerror = function (e) {
      console.log("ERROR", width + 10);
      e.src = `${base}/w_${width + 10},${mod}/${id}`;
      e.reload();
    };
  }
}

//large images (100%)
var large = [
  document.getElementsByClassName("cdn-large-img"),
  setWidth(100),
  mod,
];
//medium images (55%)
var medium = [
  document.getElementsByClassName("cdn-medium-img"),
  setWidth(55),
  mod,
];
//small images (15%)
var small = [
  document.getElementsByClassName("cdn-small-img"),
  setWidth(15),
  mod,
];

var icons = [document.getElementsByClassName("cdn-icon-img"), 45, mod];
var SmallIcons = [
  document.getElementsByClassName("cdn-icon-small-img"),
  20,
  mod,
];
var linkIcons = [document.getElementsByClassName("cdn-icon-link-img"), 20, mod];

addBackgroundImage(large);
addBackgroundImage(medium);
addForegroundImage(small);
addForegroundImage(icons);
addForegroundImage(SmallIcons);
addForegroundImage(linkIcons);
