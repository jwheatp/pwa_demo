// ne pas toucher à ce fichier
// on va l'utiliser en boîte noire pour le moment
// et on verra ensemble un peu plus tard de quoi il s'agit :)

var cacheStorageKey = 'minimal-pwa-8'

var cacheList = [
  '/',
  "index.html",
  "style.css",
  "images/icon.png",
]

self.addEventListener('install', function(e) {
  console.log('Cache event!')
  e.waitUntil(
    caches.open(cacheStorageKey).then(function(cache) {
      console.log('Adding to Cache:', cacheList)
      return cache.addAll(cacheList)
    }).then(function() {
      console.log('Skip waiting!')
      return self.skipWaiting()
    })
  )
})
