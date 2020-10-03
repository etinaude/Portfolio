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

function addImage(paramters) {
  var arr = paramters[0];
  var width = paramters[1];
  var mod = paramters[2];
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    var id = e.id;
    e.style.backgroundImage = `url("${base}/w_${width},${mod}/${id}")`;
  }
}

function addSmallImage(paramters) {
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
addImage(large);
addImage(medium);
addSmallImage(small);
