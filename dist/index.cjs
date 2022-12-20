"use strict";var t=require("fs"),e=require("axios"),r=require("socks-proxy-agent"),a=require("https-proxy-agent"),n=require("async-retry");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach(function(r){if("default"!==r){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}}),e.default=t,e}var s=/*#__PURE__*/o(t),u=/*#__PURE__*/o(e),h=/*#__PURE__*/o(r),l=/*#__PURE__*/o(a),c=/*#__PURE__*/o(n),p=0;function f(t){return"__private_"+p+++"_"+t}function d(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}const g=new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi),w="Mozilla/5.0 (X11; Linux x86_64; rv:108.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36";var y=/*#__PURE__*/f("opts"),m=/*#__PURE__*/f("httpsAgent"),v=/*#__PURE__*/f("processImage"),b=/*#__PURE__*/f("getImageProcessingLibrary"),x=/*#__PURE__*/f("imageToBuffer"),_=/*#__PURE__*/f("signV1"),E=/*#__PURE__*/f("uuid"),O=/*#__PURE__*/f("encode");async function P(t,e){var r;const a=await d(this,b)[b]();if("sharp"in a&&"function"==typeof a.sharp){const r=a.sharp(t),n=await r.metadata(),o=n.width||0,i=n.height||0;let s=0,u=0,h=o,l=i;const c=o>i;return"COMPARED"===e&&(s=c?19:27,u=c?23:30,h=o-s-(c?22:30),l=i-u-(c?202:213)),"SINGLE"===e&&(s=c?507:27,u=c?23:544,h=o-s-(c?22:30),l=i-u-(c?202:213)),await r.extract({left:s,top:u,width:h,height:l}).png().toBuffer()}if("jimp"in a&&"function"==typeof(null==(r=a.jimp)?void 0:r.read)){const r=await a.jimp.read(t),n=r.getWidth()||0,o=r.getHeight()||0;let i=0,s=0,u=n,h=o;const l=n>o;return"COMPARED"===e&&(i=l?19:27,s=l?23:30,u=n-i-(l?22:30),h=o-s-(l?202:213)),"SINGLE"===e&&(i=l?507:27,s=l?23:544,u=n-i-(l?22:30),h=o-s-(l?202:213)),await r.crop(i,s,u,h).getBufferAsync(a.jimp.MIME_PNG)}throw new Error("No image processing library available, please install jimp or sharp as a dependency")}async function A(){const[t,e]=await Promise.all([(async()=>await Promise.resolve().then(function(){/*#__PURE__*/return i(require("jimp"))}).catch(()=>{}))(),(async()=>await Promise.resolve().then(function(){/*#__PURE__*/return i(require("sharp"))}).catch(()=>{}))()]),r=(null==e?void 0:e.default)||e;if(r)return{sharp:r};const a=(null==t?void 0:t.default)||t;if(a)return{jimp:a};throw new Error("No image processing library available, please install jimp or sharp as a dependency")}async function j(t){let e;if("string"==typeof t)if(t.match(g))try{e=await c.default(async e=>{var r,a,n,o,i;const s=await u.default.request({method:"GET",url:t,headers:{"User-Agent":w},responseType:"arraybuffer",...(null!=(r=d(this,y)[y].proxy)&&null!=(a=r.url)&&a.startsWith("http")||null!=(n=d(this,y)[y].proxy)&&null!=(o=n.url)&&o.startsWith("sock"))&&null!=(i=d(this,y)[y].proxy)&&i.image?{httpsAgent:d(this,m)[m]}:{}});if(403!==s.status){if(!s.data)throw new Error("No data");return s.data}e(new Error("Unauthorized to access image"))},{...d(this,y)[y]})}catch(t){throw new Error(`Unable to download media: ${t.message.toString()}`)}else try{await s.default.promises.access(t,s.default.promises.constants.F_OK),e=await s.default.promises.readFile(t)}catch{e=Buffer.from(t,"base64")}else e=t;return e}function q(t){const e=JSON.stringify(t);return d(this,O)[O](`https://h5.tu.qq.com${(t=>{const e=encodeURIComponent(t).match(/%[89ABab]/g);return t.length+(e?e.length:0)})(e)}HQ31X02e`)}function S(){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return`${t()}${t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}function I(t){function e(t,e,a,n,o,i,s){return r(e&a|~e&n,t,e,o,i,s)}function r(t,e,r,a,n,o){return i((s=i(i(e,t),i(a,o)))<<(u=n)|s>>>32-u,r);var s,u}function a(t,e,a,n,o,i,s){return r(a^(e|~n),t,e,o,i,s)}function n(t,e,a,n,o,i,s){return r(e^a^n,t,e,o,i,s)}function o(t,e,a,n,o,i,s){return r(e&n|a&~n,t,e,o,i,s)}function i(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}return function(t){var e,r,a="0123456789abcdef",n="";for(r=0;r<t.length;r+=1)e=t.charCodeAt(r),n+=a.charAt(e>>>4&15)+a.charAt(15&e);return n}(function(t){var e,r="",a=32*t.length;for(e=0;e<a;e+=8)r+=String.fromCharCode(t[e>>5]>>>e%32&255);return r}(function(t,r){var s,u,h,l,c;t[r>>5]|=128<<r%32,t[14+(r+64>>>9<<4)]=r;var p=1732584193,f=-271733879,d=-1732584194,g=271733878;for(s=0;s<t.length;s+=16)u=p,h=f,l=d,c=g,p=e(p,f,d,g,t[s],7,-680876936),g=e(g,p,f,d,t[s+1],12,-389564586),d=e(d,g,p,f,t[s+2],17,606105819),f=e(f,d,g,p,t[s+3],22,-1044525330),p=e(p,f,d,g,t[s+4],7,-176418897),g=e(g,p,f,d,t[s+5],12,1200080426),d=e(d,g,p,f,t[s+6],17,-1473231341),f=e(f,d,g,p,t[s+7],22,-45705983),p=e(p,f,d,g,t[s+8],7,1770035416),g=e(g,p,f,d,t[s+9],12,-1958414417),d=e(d,g,p,f,t[s+10],17,-42063),f=e(f,d,g,p,t[s+11],22,-1990404162),p=e(p,f,d,g,t[s+12],7,1804603682),g=e(g,p,f,d,t[s+13],12,-40341101),d=e(d,g,p,f,t[s+14],17,-1502002290),p=o(p,f=e(f,d,g,p,t[s+15],22,1236535329),d,g,t[s+1],5,-165796510),g=o(g,p,f,d,t[s+6],9,-1069501632),d=o(d,g,p,f,t[s+11],14,643717713),f=o(f,d,g,p,t[s],20,-373897302),p=o(p,f,d,g,t[s+5],5,-701558691),g=o(g,p,f,d,t[s+10],9,38016083),d=o(d,g,p,f,t[s+15],14,-660478335),f=o(f,d,g,p,t[s+4],20,-405537848),p=o(p,f,d,g,t[s+9],5,568446438),g=o(g,p,f,d,t[s+14],9,-1019803690),d=o(d,g,p,f,t[s+3],14,-187363961),f=o(f,d,g,p,t[s+8],20,1163531501),p=o(p,f,d,g,t[s+13],5,-1444681467),g=o(g,p,f,d,t[s+2],9,-51403784),d=o(d,g,p,f,t[s+7],14,1735328473),p=n(p,f=o(f,d,g,p,t[s+12],20,-1926607734),d,g,t[s+5],4,-378558),g=n(g,p,f,d,t[s+8],11,-2022574463),d=n(d,g,p,f,t[s+11],16,1839030562),f=n(f,d,g,p,t[s+14],23,-35309556),p=n(p,f,d,g,t[s+1],4,-1530992060),g=n(g,p,f,d,t[s+4],11,1272893353),d=n(d,g,p,f,t[s+7],16,-155497632),f=n(f,d,g,p,t[s+10],23,-1094730640),p=n(p,f,d,g,t[s+13],4,681279174),g=n(g,p,f,d,t[s],11,-358537222),d=n(d,g,p,f,t[s+3],16,-722521979),f=n(f,d,g,p,t[s+6],23,76029189),p=n(p,f,d,g,t[s+9],4,-640364487),g=n(g,p,f,d,t[s+12],11,-421815835),d=n(d,g,p,f,t[s+15],16,530742520),p=a(p,f=n(f,d,g,p,t[s+2],23,-995338651),d,g,t[s],6,-198630844),g=a(g,p,f,d,t[s+7],10,1126891415),d=a(d,g,p,f,t[s+14],15,-1416354905),f=a(f,d,g,p,t[s+5],21,-57434055),p=a(p,f,d,g,t[s+12],6,1700485571),g=a(g,p,f,d,t[s+3],10,-1894986606),d=a(d,g,p,f,t[s+10],15,-1051523),f=a(f,d,g,p,t[s+1],21,-2054922799),p=a(p,f,d,g,t[s+8],6,1873313359),g=a(g,p,f,d,t[s+15],10,-30611744),d=a(d,g,p,f,t[s+6],15,-1560198380),f=a(f,d,g,p,t[s+13],21,1309151649),p=a(p,f,d,g,t[s+4],6,-145523070),g=a(g,p,f,d,t[s+11],10,-1120210379),d=a(d,g,p,f,t[s+2],15,718787259),f=a(f,d,g,p,t[s+9],21,-343485551),p=i(p,u),f=i(f,h),d=i(d,l),g=i(g,c);return[p,f,d,g]}(function(t){var e,r=[];for(r[(t.length>>2)-1]=void 0,e=0;e<r.length;e+=1)r[e]=0;var a=8*t.length;for(e=0;e<a;e+=8)r[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return r}(s=decodeURIComponent(encodeURIComponent(t))),8*s.length)));var s}module.exports=class{constructor(t={retries:10,factor:1}){var e;Object.defineProperty(this,O,{value:I}),Object.defineProperty(this,E,{value:S}),Object.defineProperty(this,_,{value:q}),Object.defineProperty(this,x,{value:j}),Object.defineProperty(this,b,{value:A}),Object.defineProperty(this,v,{value:P}),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),null!=(e=t.proxy)&&e.url&&(/^socks/.test(t.proxy.url)?d(this,m)[m]=new h.default.SocksProxyAgent(t.proxy.url):d(this,m)[m]=new l.default.HttpsProxyAgent(t.proxy.url),d(this,m)[m].timeout=3e4),d(this,y)[y]=t}async waifu2x(t,e,r){const[a]=await Promise.all([(async()=>await Promise.resolve().then(function(){/*#__PURE__*/return i(require("form-data"))}).catch(()=>{}))()]);if(!a)throw new Error("To use this function, please install form-data as a dependency");const n=(null==a?void 0:a.default)||a,o=await d(this,v)[v](await d(this,x)[x](t)),s=new n;s.append("denoise",String("MEDIUM"===e?1:"HIGH"===e?2:0)),s.append("scale",String(!!r)),s.append("file",o,d(this,O)[O](o.subarray(0,50))+".png");let h={hash:d(this,O)[O]("arugaz")};try{h=await c.default(async t=>{var e,r,a,n;const o=await u.default.request({method:"POST",url:"https://api.alcaamado.es/api/v1/waifu2x/convert",data:s,headers:{"User-Agent":w,Origin:"https://waifu2x.pro",Referer:"https://waifu2x.pro/",...s.getHeaders()},timeout:3e4,...null!=(e=d(this,y)[y].proxy)&&null!=(r=e.url)&&r.startsWith("http")||null!=(a=d(this,y)[y].proxy)&&null!=(n=a.url)&&n.startsWith("sock")?{httpsAgent:d(this,m)[m]}:{}});if(403!==o.status){if(!o.data)throw new Error("No data");if(!o.data.hash)throw new Error("Got no image");return o.data}t(new Error("Unauthorized to access waifu2x"))},{...d(this,y)[y]})}catch(t){throw new Error(`Unable to upload the photo: ${"string"==typeof t?t:t.message.toString()}`)}const l="https://api.alcaamado.es/api/v2/waifu2x/get?hash="+h.hash+"&type=png";return await d(this,x)[x](l)}async ai2d(t,e){var r;const a=await d(this,v)[v](await d(this,x)[x](t)),n={busiId:null!=(r=d(this,y)[y].proxy)&&r.chinese?"ai_painting_anime_entry":"different_dimension_me_img_entry",images:[a.toString("base64")],extra:JSON.stringify({face_rects:[],version:2,language:"en",platform:"web",data_report:{parent_trace_id:d(this,E)[E](),root_channel:"",level:0}})};let o={img_urls:[a.toString("base64")]};try{o=await c.default(async t=>{var e,r,a,o;const i=await u.default.request({method:"POST",url:"https://ai.tu.qq.com/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process",data:n,headers:{"Content-Type":"application/json",Origin:"https://h5.tu.qq.com",Referer:"https://h5.tu.qq.com/","User-Agent":w,"x-sign-value":d(this,_)[_](n),"x-sign-version":"v1"},timeout:3e4,...null!=(e=d(this,y)[y].proxy)&&null!=(r=e.url)&&r.startsWith("http")||null!=(a=d(this,y)[y].proxy)&&null!=(o=a.url)&&o.startsWith("sock")?{httpsAgent:d(this,m)[m]}:{}}),s=null==i?void 0:i.data;if(!s)throw new Error("No data");if("VOLUMN_LIMIT"===s.msg)throw new Error("QQ rate limit caught");if("IMG_ILLEGAL"!==s.msg)if(1001!==s.code)if(-2100!==s.code){if(2119!==s.code&&-2111!==s.code){if(!s.extra)throw new Error("Got no data from QQ "+JSON.stringify(s));return JSON.parse(s.extra)}t(new Error("Auth failed, the Chinese website has blocked this ip address."))}else t(new Error("Unable to upload the photo: Try another photo."));else t(new Error("Unable to upload the photo: Face not found. Try another photo."));else t(new Error("Unable to upload the photo: Couldn't pass the censorship. Try another photo."))},{...d(this,y)[y]})}catch(t){throw new Error(`Unable to upload the photo: ${"string"==typeof t?t:t.message.toString()}`)}const i=await d(this,x)[x](o.img_urls[1]||o.img_urls[0]);return e?await d(this,v)[v](i,e):i}};