## learn some pwa for fun ([demo](https://jankjn.github.io/try-pwa/))
### 什么是 PWA
[progress web apps](https://developers.google.com/web/progressive-web-apps/)
### 相关技术
#### 1. web app manifest（添加到首屏, 首屏图标与全屏展示，提供类似原生应用的体验）
```json
{
  "short_name": "AirHorner",
  "name": "Kinlan's AirHorner of Infamy",
  "icons": [
    {
      "src": "launcher-icon-4x.png",
      "type": "image/png",
      "sizes": "192x192"
    }
  ],
  "start_url": "index.html?launcher=true"
}
```
#### 2. [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)（缓存与推送)
为什么不用 appcache [Application Cache is a Douchebag](https://alistapart.com/article/application-cache-is-a-douchebag)

service worker 可以视为可编程的network proxy, 与cacheStorage 结合可以满足 offline cache 的需求

[service worker 生命周期](https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle): install, waiting, active

[缓存策略](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/): cache fallback to network, network fallback to cache, cache then network, race, etc.

缓存更新: 更新 cache key 或者使用特定缓存策略

service worker 支持接收 push 及展示 notifications [push-notifications](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/)

推送演示 [湾区日报](https://wanqu.co)

#### 3. 相关工具
offline cache: 
[sw-precache](https://github.com/GoogleChrome/sw-precache)
[sw-toolbox](https://github.com/GoogleChrome/sw-toolbox)
[webpack-offline-plugin](https://github.com/NekR/offline-plugin)

通知生成:
[notification generator](https://tests.peter.sh/notification-generator/)
