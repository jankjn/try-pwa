const CACHE_KEY = 'try-pwa-cache-v1'

const path = '/try-pwa'

async function cacheAssets() {
  const cache = await caches.open(CACHE_KEY)
  return cache.addAll([
    path + '/',
    path + '/main.js',
    path + '/style.css',
    path + '/creatures.css',
  ])
}

async function clearExpiredCache() {
  const cacheKeys = await caches.keys()
  const expiredKeys = cacheKeys.filter(key => key !== CACHE_KEY)
  return Promise.all(expiredKeys.map(key => caches.delete(key)))
}

self.addEventListener('install', evt => {
  console.log('[service worker install]cache assets')
  evt.waitUntil(cacheAssets())
})
self.addEventListener('activate', evt => {
  console.log('[service worker activate]clear expired cache')
  evt.waitUntil(clearExpiredCache())
})

self.addEventListener('fetch', evt => {
  evt.respondWith(
    /**
     * network fallback to cache
     */
    // fetch(evt.request)
    //   .catch(_ => caches.match(evt.request))
    /**
     * cache fallback to network
     */
    caches.match(evt.request)
      .then(response => response || fetch(evt.request))
  )
})
