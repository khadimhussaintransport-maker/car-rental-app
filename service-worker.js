self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("car-rental-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "app.js"
      ]);
    })
  );
});
