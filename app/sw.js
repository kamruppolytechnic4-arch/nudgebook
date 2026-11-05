/* Nudgebook offline cache: the app opens with no internet.
   Network first (so updates arrive), cache as the fallback. */
var CACHE = 'nudgebook-v1';
var FILES = ['./', './index.html', './manifest.webmanifest', '../config.js', '../icon.svg', '../icon-192.png'];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var u = new URL(e.request.url);
  if(e.request.method !== 'GET' || u.origin !== location.origin) return;  // never touch payment checks
  e.respondWith(fetch(e.request).then(function(r){
    var copy = r.clone();
    caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
    return r;
  }).catch(function(){ return caches.match(e.request); }));
});
