if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const c=e=>a(e,r),f={module:{uri:r},exports:t,require:c};s[r]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(i(...e),t)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts("/fallback-8e5b7798448a30a7.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/WhatsApp Image 2024-02-18 at 21.23.34.jpeg",revision:"77efdf8c688a4d0222e8ee15260456aa"},{url:"/_next/static/chunks/250-dbe6b8032abe7418.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/362-16da86c05333f456.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/51-0ec557cc6feba305.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/749-00f804f37b84fd09.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/_not-found-ef9f18c16850a683.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/admin/dashboard/page-6a6951f49ff5eea2.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/admin/page-be0899cf98816a5a.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/admin/wisata/page-0bc36472fdfc327f.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/dashboard/curug/page-b69656fe53053357.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/dashboard/gunung/page-45dd6c4c4f51d9df.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/dashboard/kebun/page-9b1e04175bca852a.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/dashboard/layout-e9561a06aef6bc05.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/dashboard/page-f4e2fab6e8604a37.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/layout-53f645851f130065.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/page-19a7bd22adb2e337.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/app/wisata/%5Bid%5D/page-4e7907a8485abbb9.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/fd9d1056-85aab0186376662d.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/main-8ee53fc4fb1378c2.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/main-app-ebc3423708dfee8e.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-091fc3591daf4844.js",revision:"xa1PnM84H6FxOOMZrLrYh"},{url:"/_next/static/css/4df78f2cd73d6b26.css",revision:"4df78f2cd73d6b26"},{url:"/_next/static/css/74975fbbb8300e68.css",revision:"74975fbbb8300e68"},{url:"/_next/static/css/b32b977ed8375e72.css",revision:"b32b977ed8375e72"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/xa1PnM84H6FxOOMZrLrYh/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/xa1PnM84H6FxOOMZrLrYh/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/fallback-8e5b7798448a30a7.js",revision:"cf180b3468fd7c9dd5b8590d0a33aad1"},{url:"/icon-152x152.png",revision:"bcaaa79d50a4c50d4009168d22dd0081"},{url:"/icon-192x192.png",revision:"5e57093e41ff311f8ab5f766f69d32e9"},{url:"/icon-256x256.png",revision:"cc94677c5abef3d4b5aa550fdc83a37a"},{url:"/icon-384x384.png",revision:"c82d8d6f5c96057c6467bda7c35a3464"},{url:"/icon-512x512.png",revision:"c991022b1826d4de5291ed3437d069f5"},{url:"/img/back.svg",revision:"30de2551274b3d837b620e3a1ba9d320"},{url:"/img/bg.svg",revision:"b2f478821c7284dd4155ae2be61dd0c3"},{url:"/img/logout.svg",revision:"3d3b7f3a41fc893de5a9a79df35333a0"},{url:"/img/manuk.jpg",revision:"4a03aee8ef15e1bee33f873fa06d0b41"},{url:"/img/maps.svg",revision:"3077c0b85969713928793d0703561dfb"},{url:"/img/rating.svg",revision:"0a5bf79f9a4fe2a668f1932bd841bd80"},{url:"/img/search.svg",revision:"85207c392c3db412c8e6a6456297bcd7"},{url:"/img/tiket.svg",revision:"9094da13333994b228e39ec8529fb058"},{url:"/manifest.json",revision:"aed274182847007d41517e115ab4ef2f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/wsb.png",revision:"2a0a2b01b3481d52bc9e7c5f0bc03c0f"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));
