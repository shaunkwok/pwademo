console.log('service-worker.js loaded');
// self.addEventListener('install', async event => {
//     console.log('Service Worker 安装中...');
//     const cache = await caches.open('pwa-demo-cache');
//     const urlsToCache = [
//         '/',
//         '/styles/main.css',
//         '/scripts/main.js',
//         '/fav.png'
//     ];
  
//     event.waitUntil(
//         cache.addAll(urlsToCache)
//             .then(() => {
//                 console.log('Service Worker 所有资源已缓存');
//             })
//     );
// });

self.addEventListener('install', function(event) {  
  event.waitUntil(  
    caches.open('pwa-demo-cache').then(function(cache) {  
      return cache.addAll([  
        '/',
        '/styles/main.css',
        '/scripts/main.js'
      ]);  
    })  
  );  
});