var base = "https://res.cloudinary.com/etienne-naude/image/upload";
var mod = "f_auto,q_auto,c_scale";
var width = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
var height = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

function setWidth(percent, mobile = 0) {
  if (mobile && width < 800) {
    percent = mobile;
  }
  var imgWidth = Math.round(width * (percent / 100));
  return imgWidth - (imgWidth % 10);
}

function setWidth(percent, mobile = 0) {
  if (mobile && height < 800) {
    percent = mobile;
  }
  var imgWidth = Math.round(height * (percent / 100));
  return imgWidth - (imgWidth % 10);
}

function addBackgroundImage(parameters) {
  var arr = parameters[0];
  var width = parameters[1];
  var height = parameters[3];
  var mod = parameters[2];
  for (let i = 0; i < arr.length; i++) {
    var id;
    const e = arr[i];
    if (width < 800 && e.className.includes("cdn-mobile")) {
      id = "mobile-" + e.id;
    } else {
      id = e.id;
    }
    e.style.backgroundImage = `url("${base}/w_${width},h${height},${mod}/${id}")`;
  }
}

function addForegroundImage(parameters) {
  var arr = parameters[0];
  var width = parameters[1];
  var mod = parameters[2];
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
  "q_100,c_scale",
  setHeight(50)
];
//medium images (55%)
var medium = [
  document.getElementsByClassName("cdn-medium-img"),
  setWidth(55, 150),
  mod,
  setHeight(55)
];
//small images (15%)
var small = [
  document.getElementsByClassName("cdn-small-img"),
  setWidth(15, 65),
  mod,
  setHeight(15)
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
