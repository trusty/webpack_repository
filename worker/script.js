!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1);addEventListener("fetch",e=>{e.respondWith(async function(e){const t=await r.fetchWeather("austin"),n=`\n    ${t.location.city}, ${t.location.region}<br>\n    ${t.item.condition.temp} ${t.item.condition.text}\n  `.trim();return new Response(n,{headers:{"Content-Type":"text/html"}})}(e.request))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchWeather=void 0,t.fetchWeather=async function(e,t="f"){const n=`https://query.yahooapis.com/v1/public/yql?q=select *\n  from weather.forecast\n  where u='${t}'\n    AND woeid in (\n      select woeid from geo.places(1)\n      where text="${e}"\n  )&format=json`.split("\n").join(" ").replace(/\s/g,"%20"),r=await fetch(n);if(r.status>=400)throw new Error("Bad response from server");const o=await r.json();return o.query.results&&o.query.results.channel}}]);