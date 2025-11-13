
self.addEventListener('install', event => {
  console.log('[Service Worker] Instalado');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activado');
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
