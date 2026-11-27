// Hors ligne / offline: Seiten und Dateien nach dem ersten Aufruf zwischenspeichern.
// Seite: zuerst Netz (neue Version), sonst Zwischenspeicher. Dateien mit Hash im Namen: zuerst Zwischenspeicher.
const CACHE = 'quiz-v1'
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', './manifest.webmanifest', './icon-192.png']))); self.skipWaiting() })
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()))
})
self.addEventListener('fetch', (e) => {
  const r = e.request
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return
  const store = (res) => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(r, cp)) } return res }
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(store).catch(() => caches.match('./', { ignoreSearch: true })))
  } else {
    e.respondWith(caches.match(r).then((hit) => hit || fetch(r).then(store)))
  }
})
