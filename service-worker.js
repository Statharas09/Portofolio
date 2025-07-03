self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('portfolio-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'style.css',
        'app.js',
        'favicon.ico'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});