self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ravenloft-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./rooms.js",
        "./floors/walls.html",
        "./floors/floor-2.html",
        "./floors/floor-1.html",
        "./floors/floor0.html",
        "./floors/floor1.html",
        "./floors/floor2.html",
        "./floors/floors3-7.html",
        "./floors/walls.webp",
        "./floors/floor-2.webp",
        "./floors/floor-1.webp",
        "./floors/floor0.webp",
        "./floors/floor1.webp",
        "./floors/floor2.webp",
        "./floors/floors3-7.webp",
        "./icons/icon-192.png",
        "./icons/icon-512.png"
      ]);
    })
  );
});
