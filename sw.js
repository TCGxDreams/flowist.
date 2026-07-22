// ═══ Service Worker — Offline Support ═══
const CACHE_NAME = 'flowist-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/src/style.css',
  '/src/app.js',
  '/src/config.js',
  '/favicon.svg',
  '/manifest.webmanifest',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
];

// Install — cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — stale-while-revalidate for local assets
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Only intercept requests for local assets
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      const fetchPromise = fetch(e.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return networkResponse;
        })
        .catch(err => {
          console.warn('SW fetch failed:', err);
        });

      return cachedResponse || fetchPromise;
    })
  );
});
