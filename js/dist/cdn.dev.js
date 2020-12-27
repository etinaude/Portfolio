"use strict";

var base = "https://res.cloudinary.com/etienne-naude/image/upload";
var mod = "f_auto,q_auto,c_scale";
var width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

function setWidth(percent) {
  var mobile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (mobile && width < 800) {
    percent = mobile;
  }

  var imgWidth = Math.round(width * (percent / 100));
  return imgWidth - imgWidth % 10;
}

function addBackgroundImage(paramters) {
  var arr = paramters[0];
  var width = paramters[1];
  var mod = paramters[2];

  for (var i = 0; i < arr.length; i++) {
    var id;
    var e = arr[i];

    if (width < 800 && e.className.includes("cdn-mobile")) {
      id = "mobile-" + e.id;
    } else {
      id = e.id;
    }

    e.style.backgroundImage = "url(\"".concat(base, "/w_").concat(width, ",").concat(mod, "/").concat(id, "\")");
  }
}

function addForegroundImage(paramters) {
  var arr = paramters[0];
  var width = paramters[1];
  var mod = paramters[2];

  for (var i = 0; i < arr.length; i++) {
    var e = arr[i];
    var id = e.id;
    e.src = "".concat(base, "/w_").concat(width, ",").concat(mod, "/").concat(id);

    e.onerror = function (e) {
      console.log("ERROR", width + 10);
      e.src = "".concat(base, "/w_").concat(width + 10, ",").concat(mod, "/").concat(id);
      e.reload();
    };
  }
} //large images (100%)


var large = [document.getElementsByClassName("cdn-large-img"), setWidth(100), "q_auto,c_scale"]; //medium images (55%)

var medium = [document.getElementsByClassName("cdn-medium-img"), setWidth(55, 150), mod]; //small images (15%)

var small = [document.getElementsByClassName("cdn-small-img"), setWidth(15, 65), mod];
var icons = [document.getElementsByClassName("cdn-icon-img"), 45, mod];
var SmallIcons = [document.getElementsByClassName("cdn-icon-small-img"), 20, mod];
var linkIcons = [document.getElementsByClassName("cdn-icon-link-img"), 20, mod];
addBackgroundImage(large);
addBackgroundImage(medium);
addForegroundImage(small);
addForegroundImage(icons);
addForegroundImage(SmallIcons);
addForegroundImage(linkIcons);