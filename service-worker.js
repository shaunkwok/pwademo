self.addEventListener('install', function(event) {  
  // 缓存一些文件  
  event.waitUntil(  
    caches.open('my-cache-name').then(function(cache) {  
      return cache.addAll([  
        '/styles/main.css',  
        '/scripts/main.js',  
      ]);  
    })  
  );  
});  
  
self.addEventListener('fetch', function(event) {  
  // 拦截和处理网络请求的逻辑  
  event.respondWith(  
    caches.match(event.request).then(function(response) {  
      // 缓存中有请求的资源时，直接返回缓存中的资源  
      return response || fetch(event.request);  
    })  
  );  
});