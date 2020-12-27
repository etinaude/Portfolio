"use strict";

var CSS = ["fonts/flaticon/font/flaticon.css", "fonts/icomoon/style.css"];

var loadDeferredStyles = function loadDeferredStyles() {
  var addStylesNode = document.getElementById("deferred-styles");
  var replacement = document.createElement("div");
  replacement.innerHTML = addStylesNode.textContent;
  document.body.appendChild(replacement);
  addStylesNode.parentElement.removeChild(addStylesNode);
};

var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
if (raf) raf(function () {
  window.setTimeout(loadDeferredStyles, 0);
});else window.addEventListener("load", loadDeferredStyles);