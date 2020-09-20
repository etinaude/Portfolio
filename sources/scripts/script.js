function getWidth() {
  if (self.innerWidth) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

function get_images() {
  var base = "https://res.cloudinary.com/etienne-naude/image/upload";
  var width = `${Math.round(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  )}`;

  //Head shot
  var param = `w_${Math.round(width * 0.4)},f_auto,q_auto,c_scale`;
  document.getElementById(
    "headshot"
  ).src = `${base}/${param}/v1596330710/headshot2_kddrsi.png`;

  //scroll gif
  param = `w_${Math.round(width * 0.08)},q_auto`;
  document.getElementById(
    "scroll"
  ).src = `${base}/${param}/v1596335553/scroll2_c1v0r4.gif`;

  //project images
  param = `w_${Math.round(width / 3)},f_auto,q_auto,c_scale`;
  var projects = document.getElementsByClassName("project_pic");
  var img_url = "";
  for (var i = 0; i < projects.length; i++) {
    img_url = `${base}/${param}/${projects[i].id}`;
    //console.log(projects[i]);
    projects[i].src = img_url;
  }
  ///*
  /*
  console.log(getWidth());
  var msnry = new Masonry(document.querySelector(".Mgrid"), {
    columnWidth: 50,
    itemSelector: ".grid-item",
    gutter: -49,
  }); 
  document.getElementsByClassName("Mgrid")[0].style.margin = `0 0 0 10%`;
  console.log(
    "w",
    getWidth() % document.getElementsByClassName("grid-item")[0].clientWidth
  );*/
}

var body = document.body;
body.scrollHeight;
var html = document.documentElement;
function scroll() {
  if (window.innerHeight + window.scrollY >= body.clientHeight) {
    document.getElementById("scroll").style.display = "none";
  } else {
    document.getElementById("scroll").style.display = "flex";
  }
}

get_images();
