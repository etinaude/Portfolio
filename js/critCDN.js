var base = "https://res.cloudinary.com/etienne-naude/image/upload";
var mod = "f_auto,q_auto,c_scale";
var width = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

function setWidth(percent, mobile = 0) {
  if (mobile && width < 800) {
    percent = mobile;
  }
  var imgWidth = Math.round(width * (percent / 100));
  return imgWidth - (imgWidth % 10);
}

function addBackgroundImage(paramters) {
  var arr = paramters[0];
  var width = paramters[1];
  var mod = paramters[2];
  for (let i = 0; i < arr.length; i++) {
    var id;
    const e = arr[i];
    if (width < 800 && e.className.includes("cdn-mobile")) {
      id = "mobile-" + e.id;
    } else {
      id = e.id;
    }
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
  "q_auto,c_scale",
];
addBackgroundImage(large);
