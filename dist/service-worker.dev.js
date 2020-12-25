"use strict";

var cacheVersion = 2;
var currentCache = {
  offline: "offline-cache" + cacheVersion
};
var offlineUrl = "./offline/offline-page.html";
(void 0).addEventListener("install", function (event) {
  event.waitUntil(caches.open(currentCache.offline).then(function (cache) {
    return cache.addAll(["./offline/icon.svg", "./offline/offline.svg", "./offline/offline.css", offlineUrl]);
  }));
});
(void 0).addEventListener("fetch", function (event) {
  if (event.request.mode === "navigate" || event.request.method === "GET" && event.request.headers.get("accept").includes("text/html")) {
    event.respondWith(fetch(event.request.url)["catch"](function (error) {
      return caches.match(offlineUrl);
    }));
  } else {
    event.respondWith(caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }));
  }
});