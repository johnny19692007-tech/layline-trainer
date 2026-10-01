// Offline cache. Change VERSION whenever you upload a new index.html.
const VERSION='layline-v13';
const FILES=[
  './','./index.html','./manifest.webmanifest',
  './icons/apple-touch-icon.png','./icons/icon-192.png','./icons/icon-512.png',
  './fonts/barlow-condensed-latin-500-normal.woff2',
  './fonts/barlow-condensed-latin-600-normal.woff2',
  './fonts/barlow-condensed-latin-700-normal.woff2',
  './fonts/barlow-latin-400-normal.woff2',
  './fonts/barlow-latin-500-normal.woff2',
  './fonts/barlow-latin-600-normal.woff2',
  './fonts/barlow-latin-700-normal.woff2'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(r=>{
    if(r.ok){const copy=r.clone();caches.open(VERSION).then(c=>c.put(e.request,copy));}return r;
  }).catch(()=>caches.match('./index.html'))));
});
