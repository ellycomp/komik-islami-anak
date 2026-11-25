const C='komik-islami-v10';
const A=['/','/index.html','/beranda/index.html','/perpustakaan/index.html','/detail_komik/index.html','/pembaca_komik/index.html','/favorit_riwayat/index.html','/login_administrator/index.html','/dashboard_administrator/index.html','/manifest.webmanifest','/app.js','/icons/icon-192.svg','/icons/icon-512.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(cache=>cache.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==C).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
 const url=new URL(e.request.url);
 const isPage=e.request.mode==='navigate'||url.pathname.endsWith('.html')||url.pathname==='/';
 e.respondWith(caches.open(C).then(async cache=>{
   if(isPage){
     try{const fresh=await fetch(e.request,{cache:'no-store'});if(fresh.ok)cache.put(e.request,fresh.clone());return fresh;}
     catch(err){return (await cache.match(e.request))||(await cache.match('/index.html'));}
   }
   const saved=await cache.match(e.request);
   if(saved)return saved;
   try{const fresh=await fetch(e.request);if(fresh.ok)cache.put(e.request,fresh.clone());return fresh;}
   catch(err){return cache.match('/index.html');}
 }));
});