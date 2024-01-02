self.addEventListener('install', (event) => {
  console.log('Service worker installed')
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './icons/favicon.ico',
        './icons/icon512_maskable.png',
        './icons/icon512_rounded.png',
        './sw.js',
        './pwa.js',
        './manifest.json',
        './styles.css',
        './script.js',
      ])
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
