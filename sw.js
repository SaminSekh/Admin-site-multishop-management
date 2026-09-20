const CACHE_NAME = 'shop-menu-v3';
const ASSETS = [
    './',
    './css/style.css',
    './js/supabase-config.js',
    './js/shop-products.js',
    './manifest.json',
    './assets/logo.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
