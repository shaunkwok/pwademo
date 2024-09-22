self.addEventListener('install', async event => {
    console.log('Service Worker 安装中...');
    const cache = await caches.open('pwa-demo-cache');
    const urlsToCache = [
        '/',
        '/styles/main.css',
        '/scripts/main.js',
        '/fav.png'
    ];
  
    event.waitUntil(
        cache.addAll(urlsToCache)
            .then(() => {
                console.log('Service Worker 所有资源已缓存');
            })
    );
});