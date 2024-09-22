self.addEventListener('install', async event => {  
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
                console.log('所有资源已缓存');  
            })  
    );  
});