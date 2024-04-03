/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw Hn(e)},Hn=function(n){return new Error("Firebase Database ("+Yh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Vm=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},kr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new $m;const d=r<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),h!==64){const g=l<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jh=function(n){const e=Xh(n);return kr.encodeByteArray(e,!0)},Ks=function(n){return Jh(n).replace(/\./g,"")},Gs=function(n){try{return kr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){return Zh(void 0,n)}function Zh(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!qm(t)||(n[t]=Zh(n[t],e[t]));return n}function qm(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=()=>ed().__FIREBASE_DEFAULTS__,Hm=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wm=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gs(n[1]);return e&&JSON.parse(e)},$a=()=>{try{return jm()||Hm()||Wm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},td=n=>{var e,t;return(t=(e=$a())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},br=n=>{const e=td(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},nd=()=>{var n;return(n=$a())===null||n===void 0?void 0:n.config},id=n=>{var e;return(e=$a())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ks(JSON.stringify(t)),Ks(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function zm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Km(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rd(){return Yh.NODE_ADMIN===!0}function ja(){try{return typeof indexedDB=="object"}catch{return!1}}function Gm(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="FirebaseError";class rt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Qm,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ym(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new rt(s,a,i)}}function Ym(n,e){return n.replace(Xm,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Xm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n){return JSON.parse(n)}function he(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=bi(Gs(r[0])||""),t=bi(Gs(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Jm=function(n){const e=od(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Zm=function(n){const e=od(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function On(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Wo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qs(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Ys(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Pl(r)&&Pl(o)){if(!Ys(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Pl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function pi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function t_(n,e){const t=new n_(n,e);return t.subscribe.bind(t)}class n_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");i_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=mo),s.error===void 0&&(s.error=mo),s.complete===void 0&&(s.complete=mo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function mo(){}function s_(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,_(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Rr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=1e3,c_=2,l_=4*60*60*1e3,u_=.5;function h_(n,e=a_,t=c_){const i=e*Math.pow(t,n),s=Math.round(u_*i*(Math.random()-.5)*2);return Math.min(l_,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n){return n&&n._delegate?n._delegate:n}class Le{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Yt;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(p_(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:f_(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function f_(n){return n===Bt?void 0:n}function p_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new d_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const m_={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},__=M.INFO,y_={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},v_=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=y_[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ji{constructor(e){this.name=e,this._logLevel=__,this._logHandler=v_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const w_=(n,e)=>e.some(t=>n instanceof t);let Ml,xl;function E_(){return Ml||(Ml=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T_(){return xl||(xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ad=new WeakMap,zo=new WeakMap,cd=new WeakMap,_o=new WeakMap,Ha=new WeakMap;function I_(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(At(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ad.set(t,n)}).catch(()=>{}),Ha.set(e,n),e}function C_(n){if(zo.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});zo.set(n,e)}let Ko={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return At(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function S_(n){Ko=n(Ko)}function A_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(yo(this),e,...t);return cd.set(i,e.sort?e.sort():[e]),At(i)}:T_().includes(n)?function(...e){return n.apply(yo(this),e),At(ad.get(this))}:function(...e){return At(n.apply(yo(this),e))}}function k_(n){return typeof n=="function"?A_(n):(n instanceof IDBTransaction&&C_(n),w_(n,E_())?new Proxy(n,Ko):n)}function At(n){if(n instanceof IDBRequest)return I_(n);if(_o.has(n))return _o.get(n);const e=k_(n);return e!==n&&(_o.set(n,e),Ha.set(e,n)),e}const yo=n=>Ha.get(n);function b_(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=At(o);return i&&o.addEventListener("upgradeneeded",c=>{i(At(o.result),c.oldVersion,c.newVersion,At(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const R_=["get","getKey","getAll","getAllKeys","count"],N_=["put","add","delete","clear"],vo=new Map;function Ll(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vo.get(e))return vo.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=N_.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||R_.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return vo.set(e,r),r}S_(n=>({...n,get:(e,t,i)=>Ll(e,t)||n.get(e,t,i),has:(e,t)=>!!Ll(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(O_(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function O_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Go="@firebase/app",Fl="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Ji("@firebase/app"),P_="@firebase/app-compat",M_="@firebase/analytics-compat",x_="@firebase/analytics",L_="@firebase/app-check-compat",F_="@firebase/app-check",U_="@firebase/auth",V_="@firebase/auth-compat",$_="@firebase/database",B_="@firebase/database-compat",q_="@firebase/functions",j_="@firebase/functions-compat",H_="@firebase/installations",W_="@firebase/installations-compat",z_="@firebase/messaging",K_="@firebase/messaging-compat",G_="@firebase/performance",Q_="@firebase/performance-compat",Y_="@firebase/remote-config",X_="@firebase/remote-config-compat",J_="@firebase/storage",Z_="@firebase/storage-compat",ey="@firebase/firestore",ty="@firebase/firestore-compat",ny="firebase",iy="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="[DEFAULT]",sy={[Go]:"fire-core",[P_]:"fire-core-compat",[x_]:"fire-analytics",[M_]:"fire-analytics-compat",[F_]:"fire-app-check",[L_]:"fire-app-check-compat",[U_]:"fire-auth",[V_]:"fire-auth-compat",[$_]:"fire-rtdb",[B_]:"fire-rtdb-compat",[q_]:"fire-fn",[j_]:"fire-fn-compat",[H_]:"fire-iid",[W_]:"fire-iid-compat",[z_]:"fire-fcm",[K_]:"fire-fcm-compat",[G_]:"fire-perf",[Q_]:"fire-perf-compat",[Y_]:"fire-rc",[X_]:"fire-rc-compat",[J_]:"fire-gcs",[Z_]:"fire-gcs-compat",[ey]:"fire-fst",[ty]:"fire-fst-compat","fire-js":"fire-js",[ny]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Map,Yo=new Map;function ry(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function He(n){const e=n.name;if(Yo.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Yo.set(e,n);for(const t of Xs.values())ry(t,n);return!0}function Mt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kt=new Wn("app","Firebase",oy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=iy;function ld(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Qo,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw kt.create("bad-app-name",{appName:String(s)});if(t||(t=nd()),!t)throw kt.create("no-options");const r=Xs.get(s);if(r){if(Ys(t,r.options)&&Ys(i,r.config))return r;throw kt.create("duplicate-app",{appName:s})}const o=new g_(s);for(const c of Yo.values())o.addComponent(c);const a=new ay(t,i,o);return Xs.set(s,a),a}function Kn(n=Qo){const e=Xs.get(n);if(!e&&n===Qo&&nd())return ld();if(!e)throw kt.create("no-app",{appName:n});return e}function Ae(n,e,t){var i;let s=(i=sy[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}He(new Le(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="firebase-heartbeat-database",ly=1,Ri="firebase-heartbeat-store";let wo=null;function ud(){return wo||(wo=b_(cy,ly,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ri)}}}).catch(n=>{throw kt.create("idb-open",{originalErrorMessage:n.message})})),wo}async function uy(n){try{return await(await ud()).transaction(Ri).objectStore(Ri).get(hd(n))}catch(e){if(e instanceof rt)Xt.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function Ul(n,e){try{const i=(await ud()).transaction(Ri,"readwrite");await i.objectStore(Ri).put(e,hd(n)),await i.done}catch(t){if(t instanceof rt)Xt.warn(t.message);else{const i=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(i.message)}}}function hd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=1024,dy=30*24*60*60*1e3;class fy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gy(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=dy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vl(),{heartbeatsToSend:t,unsentEntries:i}=py(this._heartbeatsCache.heartbeats),s=Ks(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Vl(){return new Date().toISOString().substring(0,10)}function py(n,e=hy){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),$l(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),$l(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class gy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ja()?Gm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $l(n){return Ks(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n){He(new Le("platform-logger",e=>new D_(e),"PRIVATE")),He(new Le("heartbeat",e=>new fy(e),"PRIVATE")),Ae(Go,Fl,n),Ae(Go,Fl,"esm2017"),Ae("fire-js","")}my("");var _y="firebase",yy="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae(_y,yy,"app");function Wa(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function dd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vy=dd,fd=new Wn("auth","Firebase",dd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Ji("@firebase/auth");function wy(n,...e){Js.logLevel<=M.WARN&&Js.warn(`Auth (${xt}): ${n}`,...e)}function Vs(n,...e){Js.logLevel<=M.ERROR&&Js.error(`Auth (${xt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,...e){throw za(n,...e)}function Je(n,...e){return za(n,...e)}function Ey(n,e,t){const i=Object.assign(Object.assign({},vy()),{[e]:t});return new Wn("auth","Firebase",i).create(e,{appName:n.name})}function za(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return fd.create(n,...e)}function C(n,e,...t){if(!n)throw za(e,...t)}function at(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vs(e),new Error(e)}function ft(n,e){n||at(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ty(){return Bl()==="http:"||Bl()==="https:"}function Bl(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ty()||zm()||"connection"in navigator)?navigator.onLine:!0}function Cy(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=qa()||sd()}get(){return Iy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Zi(3e4,6e4);function es(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Gn(n,e,t,i,s={}){return gd(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=zn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),pd.fetch()(md(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function gd(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Sy),e);try{const s=new ky(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Cs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cs(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Cs(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Cs(n,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ey(n,u,l);We(n,u)}}catch(s){if(s instanceof rt)throw s;We(n,"network-request-failed",{message:String(s)})}}async function Nr(n,e,t,i,s={}){const r=await Gn(n,e,t,i,s);return"mfaPendingCredential"in r&&We(n,"multi-factor-auth-required",{_serverResponse:r}),r}function md(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Ka(n.config,s):`${n.config.apiScheme}://${s}`}class ky{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Je(this.auth,"network-request-failed")),Ay.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Je(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(n,e){return Gn(n,"POST","/v1/accounts:delete",e)}async function Ry(n,e){return Gn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ny(n,e=!1){const t=Y(n),i=await t.getIdToken(e),s=Ga(i);C(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:wi(Eo(s.auth_time)),issuedAtTime:wi(Eo(s.iat)),expirationTime:wi(Eo(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Eo(n){return Number(n)*1e3}function Ga(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Vs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gs(t);return s?JSON.parse(s):(Vs("Failed to decode base64 JWT payload"),null)}catch(s){return Vs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dy(n){const e=Ga(n);return C(e,"internal-error"),C(typeof e.exp!="undefined","internal-error"),C(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof rt&&Oy(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Oy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Ni(n,Ry(t,{idToken:i}));C(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ly(r.providerUserInfo):[],a=xy(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _d(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function My(n){const e=Y(n);await Zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xy(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ly(n){return n.map(e=>{var{providerId:t}=e,i=Wa(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(n,e){const t=await gd(n,{},async()=>{const i=zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=md(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pd.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken!="undefined","internal-error"),C(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Dy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Fy(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Di;return i&&(C(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(C(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(C(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,e){C(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Kt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Py(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _d(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ni(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ny(this,e)}reload(){return My(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Zs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ni(this,by(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,c,l,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=t.createdAt)!==null&&l!==void 0?l:void 0,$=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:q,isAnonymous:Oe,providerData:Ue,stsTokenManager:Vt}=t;C(U&&Vt,e,"internal-error");const $t=Di.fromJSON(this.name,Vt);C(typeof U=="string",e,"internal-error"),wt(h,e.name),wt(d,e.name),C(typeof q=="boolean",e,"internal-error"),C(typeof Oe=="boolean",e,"internal-error"),wt(f,e.name),wt(g,e.name),wt(E,e.name),wt(v,e.name),wt(L,e.name),wt($,e.name);const dn=new Kt({uid:U,auth:e,email:d,emailVerified:q,displayName:h,isAnonymous:Oe,photoURL:g,phoneNumber:f,tenantId:E,stsTokenManager:$t,createdAt:L,lastLoginAt:$});return Ue&&Array.isArray(Ue)&&(dn.providerData=Ue.map(Um=>Object.assign({},Um))),v&&(dn._redirectEventId=v),dn}static async _fromIdTokenResponse(e,t,i=!1){const s=new Di;s.updateFromServerResponse(t);const r=new Kt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Zs(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new Map;function ct(n){ft(n instanceof Function,"Expected a class definition");let e=ql.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ql.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yd.type="NONE";const jl=yd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n,e,t){return`firebase:${n}:${e}:${t}`}class Tn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=$s(this.userKey,s.apiKey,r),this.fullPersistenceKey=$s("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Tn(ct(jl),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||ct(jl);const o=$s(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=Kt._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Tn(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Tn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Id(e))return"Blackberry";if(Cd(e))return"Webos";if(Qa(e))return"Safari";if((e.includes("chrome/")||wd(e))&&!e.includes("edge/"))return"Chrome";if(Td(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vd(n=Ie()){return/firefox\//i.test(n)}function Qa(n=Ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wd(n=Ie()){return/crios\//i.test(n)}function Ed(n=Ie()){return/iemobile/i.test(n)}function Td(n=Ie()){return/android/i.test(n)}function Id(n=Ie()){return/blackberry/i.test(n)}function Cd(n=Ie()){return/webos/i.test(n)}function Dr(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Uy(n=Ie()){var e;return Dr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vy(){return Km()&&document.documentMode===10}function Sd(n=Ie()){return Dr(n)||Td(n)||Cd(n)||Id(n)||/windows phone/i.test(n)||Ed(n)}function $y(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n,e=[]){let t;switch(n){case"Browser":t=Hl(Ie());break;case"Worker":t=`${Hl(Ie())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xt}/${i}`}async function kd(n,e){return Gn(n,"GET","/v2/recaptchaConfig",es(n,e))}function Wl(n){return n!==void 0&&n.enterprise!==void 0}class bd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Rd(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Je("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",By().appendChild(i)})}function qy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const jy="https://www.google.com/recaptcha/enterprise.js?render=",Hy="recaptcha-enterprise",Wy="NO_RECAPTCHA";class Nd{constructor(e){this.type=Hy,this.auth=ts(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{kd(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new bd(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Wl(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(Wy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Wl(window.grecaptcha))s(a,r,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rd(jy+a).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function zl(n,e,t,i=!1){const s=new Nd(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kl(this),this.idTokenSubscription=new Kl(this),this.beforeStateQueue=new zy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ct(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Y(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}async initializeRecaptchaConfig(){const e=await kd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new bd(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Nd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ct(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return C(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ad(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ts(n){return Y(n)}class Kl{constructor(e){this.auth=e,this.observer=null,this.addObserver=t_(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(n,e){const t=Mt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Ys(r,e!=null?e:{}))return s;We(s,"already-initialized")}return t.initialize({options:e})}function Qy(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Yy(n,e,t){const i=ts(n);C(i._canInitEmulator,i,"emulator-config-failed"),C(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Dd(e),{host:o,port:a}=Xy(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Jy()}function Dd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Xy(n){const e=Dd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Gl(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Gl(o)}}}function Gl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,t){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}async function Zy(n,e){return Gn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(n,e){return Nr(n,"POST","/v1/accounts:signInWithPassword",es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(n,e){return Nr(n,"POST","/v1/accounts:signInWithEmailLink",es(n,e))}async function tv(n,e){return Nr(n,"POST","/v1/accounts:signInWithEmailLink",es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Ya{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Oi(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Oi(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await zl(e,i,"signInWithPassword");return To(e,s)}else return To(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await zl(e,i,"signInWithPassword");return To(e,r)}else return Promise.reject(s)});case"emailLink":return ev(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Zy(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tv(e,{idToken:t,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n,e){return Nr(n,"POST","/v1/accounts:signInWithIdp",es(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="http://localhost";class Jt extends Ya{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Wa(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Jt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return In(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,In(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,In(e,t)}buildRequest(){const e={requestUri:nv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sv(n){const e=fi(pi(n)).link,t=e?fi(pi(e)).deep_link_id:null,i=fi(pi(n)).deep_link_id;return(i?fi(pi(i)).link:null)||i||t||e||n}class Xa{constructor(e){var t,i,s,r,o,a;const c=fi(pi(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=iv((s=c.mode)!==null&&s!==void 0?s:null);C(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=sv(e);try{return new Xa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(e,t){return Oi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Xa.parseLink(t);return C(i,"argument-error"),Oi._fromEmailAndCode(e,i.code,i.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ns{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Tt.credential(t,i)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ns{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends ns{constructor(){super("twitter.com")}static credential(e,t){return Jt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ct.credential(t,i)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Kt._fromIdTokenResponse(e,i,s),o=Ql(i);return new Pn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ql(i);return new Pn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends rt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,er.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new er(e,t,i,s)}}function Pd(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?er._fromErrorAndOperation(n,r,e,i):r})}async function rv(n,e,t=!1){const i=await Ni(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Pn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Ni(n,Pd(i,s,e,n),t);C(r.idToken,i,"internal-error");const o=Ga(r.idToken);C(o,i,"internal-error");const{sub:a}=o;return C(n.uid===a,i,"user-mismatch"),Pn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&We(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(n,e,t=!1){const i="signIn",s=await Pd(n,i,e),r=await Pn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function av(n,e){return Md(ts(n),e)}function Mk(n,e,t){return av(Y(n),Qn.credential(e,t))}function cv(n,e,t,i){return Y(n).onIdTokenChanged(e,t,i)}function lv(n,e,t){return Y(n).beforeAuthStateChanged(e,t)}function xk(n,e,t,i){return Y(n).onAuthStateChanged(e,t,i)}function Lk(n){return Y(n).signOut()}const tr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tr,"1"),this.storage.removeItem(tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(){const n=Ie();return Qa(n)||Dr(n)}const hv=1e3,dv=10;class Ld extends xd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uv()&&$y(),this.fallbackToPolling=Sd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Vy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dv):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ld.type="LOCAL";const fv=Ld;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends xd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fd.type="SESSION";const Ud=Fd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Or(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await pv(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Or.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Ja("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function mv(n){Ze().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){return typeof Ze().WorkerGlobalScope!="undefined"&&typeof Ze().importScripts=="function"}async function _v(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function vv(){return Vd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="firebaseLocalStorageDb",wv=1,nr="firebaseLocalStorage",Bd="fbase_key";class is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pr(n,e){return n.transaction([nr],e?"readwrite":"readonly").objectStore(nr)}function Ev(){const n=indexedDB.deleteDatabase($d);return new is(n).toPromise()}function Jo(){const n=indexedDB.open($d,wv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(nr,{keyPath:Bd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(nr)?e(i):(i.close(),await Ev(),e(await Jo()))})})}async function Yl(n,e,t){const i=Pr(n,!0).put({[Bd]:e,value:t});return new is(i).toPromise()}async function Tv(n,e){const t=Pr(n,!1).get(e),i=await new is(t).toPromise();return i===void 0?null:i.value}function Xl(n,e){const t=Pr(n,!0).delete(e);return new is(t).toPromise()}const Iv=800,Cv=3;class qd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Cv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Or._getInstance(vv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _v(),!this.activeServiceWorker)return;this.sender=new gv(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jo();return await Yl(e,tr,"1"),await Xl(e,tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Yl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Tv(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Pr(s,!1).getAll();return new is(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Iv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qd.type="LOCAL";const Sv=qd;new Zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n,e){return e?ct(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Ya{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,t){return In(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kv(n){return Md(n.auth,new Za(n),n.bypassAuthState)}function bv(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),ov(t,new Za(n),n.bypassAuthState)}async function Rv(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),rv(t,new Za(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kv;case"linkViaPopup":case"linkViaRedirect":return Rv;case"reauthViaPopup":case"reauthViaRedirect":return bv;default:We(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new Zi(2e3,1e4);class _n extends jd{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nv.get())};e()}}_n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="pendingRedirect",Bs=new Map;class Ov extends jd{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Bs.get(this.auth._key());if(!e){try{const i=await Pv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Bs.set(this.auth._key(),e)}return this.bypassAuthState||Bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pv(n,e){const t=Lv(e),i=xv(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Mv(n,e){Bs.set(n._key(),e)}function xv(n){return ct(n._redirectPersistence)}function Lv(n){return $s(Dv,n.config.apiKey,n.name)}async function Fv(n,e,t=!1){const i=ts(n),s=Av(i,e),o=await new Ov(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=10*60*1e3;class Vv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$v(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Hd(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jl(e))}saveEventToCache(e){this.cachedEventUids.add(Jl(e)),this.lastProcessedEventTime=Date.now()}}function Jl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $v(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(n,e={}){return Gn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jv=/^https?/;async function Hv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bv(n);for(const t of e)try{if(Wv(t))return}catch{}We(n,"unauthorized-domain")}function Wv(n){const e=Xo(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!jv.test(t))return!1;if(qv.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=new Zi(3e4,6e4);function Zl(){const n=Ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kv(n){return new Promise((e,t)=>{var i,s,r;function o(){Zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zl(),t(Je(n,"network-request-failed"))},timeout:zv.get()})}if(!((s=(i=Ze().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ze().gapi)===null||r===void 0)&&r.load)o();else{const a=qy("iframefcb");return Ze()[a]=()=>{gapi.load?o():t(Je(n,"network-request-failed"))},Rd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw qs=null,e})}let qs=null;function Gv(n){return qs=qs||Kv(n),qs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=new Zi(5e3,15e3),Yv="__/auth/iframe",Xv="emulator/auth/iframe",Jv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ew(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ka(e,Xv):`https://${n.config.authDomain}/${Yv}`,i={apiKey:e.apiKey,appName:n.name,v:xt},s=Zv.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${zn(i).slice(1)}`}async function tw(n){const e=await Gv(n),t=Ze().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:ew(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jv,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Je(n,"network-request-failed"),a=Ze().setTimeout(()=>{r(o)},Qv.get());function c(){Ze().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iw=500,sw=600,rw="_blank",ow="http://localhost";class eu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aw(n,e,t,i=iw,s=sw){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nw),{width:i.toString(),height:s.toString(),top:r,left:o}),l=Ie().toLowerCase();t&&(a=wd(l)?rw:t),vd(l)&&(e=e||ow,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(Uy(l)&&a!=="_self")return cw(e||"",a),new eu(null);const h=window.open(e||"",a,u);C(h,n,"popup-blocked");try{h.focus()}catch{}return new eu(h)}function cw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="__/auth/handler",uw="emulator/auth/handler",hw=encodeURIComponent("fac");async function tu(n,e,t,i,s,r){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:xt,eventId:s};if(e instanceof Od){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Wo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ns){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${hw}=${encodeURIComponent(c)}`:"";return`${dw(n)}?${zn(a).slice(1)}${l}`}function dw({config:n}){return n.emulator?Ka(n,uw):`https://${n.authDomain}/${lw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="webStorageSupport";class fw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ud,this._completeRedirectFn=Fv,this._overrideRedirectResult=Mv}async _openPopup(e,t,i,s){var r;ft((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await tu(e,t,i,Xo(),s);return aw(e,o,Ja())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await tu(e,t,i,Xo(),s);return mv(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ft(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await tw(e),i=new Vv(e);return t.register("authEvent",s=>(C(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Io,{type:Io},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Io];o!==void 0&&t(!!o),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sd()||Qa()||Dr()}}const pw=fw;var nu="@firebase/auth",iu="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _w(n){He(new Le("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ad(n)},l=new Ky(i,s,r,c);return Qy(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),He(new Le("auth-internal",e=>{const t=ts(e.getProvider("auth").getImmediate());return(i=>new gw(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(nu,iu,mw(n)),Ae(nu,iu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=5*60,vw=id("authIdTokenMaxAge")||yw;let su=null;const ww=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>vw)return;const s=t==null?void 0:t.token;su!==s&&(su=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ew(n=Kn()){const e=Mt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Gy(n,{popupRedirectResolver:pw,persistence:[Sv,fv,Ud]}),i=id("authTokenSyncURL");if(i){const r=ww(i);lv(t,r,()=>r(t.currentUser)),cv(t,o=>r(o))}const s=td("auth");return s&&Yy(t,`http://${s}`),t}_w("Browser");var Tw=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,ec=ec||{},A=Tw||self;function Mr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function ss(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Iw(n){return Object.prototype.hasOwnProperty.call(n,Co)&&n[Co]||(n[Co]=++Cw)}var Co="closure_uid_"+(1e9*Math.random()>>>0),Cw=0;function Sw(n,e,t){return n.call.apply(n.bind,arguments)}function Aw(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function we(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?we=Sw:we=Aw,we.apply(null,arguments)}function Ss(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function ce(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Lt(){this.s=this.s,this.o=this.o}var kw=0;Lt.prototype.s=!1;Lt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kw!=0)&&Iw(this)};Lt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wd=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function tc(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function ru(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(Mr(i)){const s=n.length||0,r=i.length||0;n.length=s+r;for(let o=0;o<r;o++)n[s+o]=i[o]}else n.push(i)}}function Ee(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var bw=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",()=>{},e),A.removeEventListener("test",()=>{},e)}catch{}return n}();function Pi(n){return/^[\s\xa0]*$/.test(n)}function xr(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function Ge(n){return xr().indexOf(n)!=-1}function nc(n){return nc[" "](n),n}nc[" "]=function(){};function Rw(n,e){var t=EE;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Nw=Ge("Opera"),Mn=Ge("Trident")||Ge("MSIE"),zd=Ge("Edge"),Zo=zd||Mn,Kd=Ge("Gecko")&&!(xr().toLowerCase().indexOf("webkit")!=-1&&!Ge("Edge"))&&!(Ge("Trident")||Ge("MSIE"))&&!Ge("Edge"),Dw=xr().toLowerCase().indexOf("webkit")!=-1&&!Ge("Edge");function Gd(){var n=A.document;return n?n.documentMode:void 0}var ea;e:{var So="",Ao=function(){var n=xr();if(Kd)return/rv:([^\);]+)(\)|;)/.exec(n);if(zd)return/Edge\/([\d\.]+)/.exec(n);if(Mn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Dw)return/WebKit\/(\S+)/.exec(n);if(Nw)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ao&&(So=Ao?Ao[1]:""),Mn){var ko=Gd();if(ko!=null&&ko>parseFloat(So)){ea=String(ko);break e}}ea=So}var ta;if(A.document&&Mn){var ou=Gd();ta=ou||parseInt(ea,10)||void 0}else ta=void 0;var Ow=ta;function Mi(n,e){if(Ee.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Kd){e:{try{nc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Pw[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Mi.$.h.call(this)}}ce(Mi,Ee);var Pw={2:"touch",3:"pen",4:"mouse"};Mi.prototype.h=function(){Mi.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var rs="closure_listenable_"+(1e6*Math.random()|0),Mw=0;function xw(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=s,this.key=++Mw,this.fa=this.ia=!1}function Lr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ic(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function Lw(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Qd(n){const e={};for(const t in n)e[t]=n[t];return e}const au="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yd(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<au.length;r++)t=au[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function Fr(n){this.src=n,this.g={},this.h=0}Fr.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=ia(n,e,i,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new xw(e,this.src,r,!!i,s),e.ia=t,n.push(e)),e};function na(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Wd(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Lr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ia(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==i)return s}return-1}var sc="closure_lm_"+(1e6*Math.random()|0),bo={};function Xd(n,e,t,i,s){if(i&&i.once)return Zd(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Xd(n,e[r],t,i,s);return null}return t=ac(t),n&&n[rs]?n.O(e,t,ss(i)?!!i.capture:!!i,s):Jd(n,e,t,!1,i,s)}function Jd(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=ss(s)?!!s.capture:!!s,a=oc(n);if(a||(n[sc]=a=new Fr(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=Fw(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)bw||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(tf(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Fw(){function n(t){return e.call(n.src,n.listener,t)}const e=Uw;return n}function Zd(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Zd(n,e[r],t,i,s);return null}return t=ac(t),n&&n[rs]?n.P(e,t,ss(i)?!!i.capture:!!i,s):Jd(n,e,t,!0,i,s)}function ef(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)ef(n,e[r],t,i,s);else i=ss(i)?!!i.capture:!!i,t=ac(t),n&&n[rs]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=ia(r,t,i,s),-1<t&&(Lr(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=oc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ia(e,t,i,s)),(t=-1<n?e[n]:null)&&rc(t))}function rc(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[rs])na(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(tf(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=oc(e))?(na(t,n),t.h==0&&(t.src=null,e[sc]=null)):Lr(n)}}}function tf(n){return n in bo?bo[n]:bo[n]="on"+n}function Uw(n,e){if(n.fa)n=!0;else{e=new Mi(e,this);var t=n.listener,i=n.la||n.src;n.ia&&rc(n),n=t.call(i,e)}return n}function oc(n){return n=n[sc],n instanceof Fr?n:null}var Ro="__closure_events_fn_"+(1e9*Math.random()>>>0);function ac(n){return typeof n=="function"?n:(n[Ro]||(n[Ro]=function(e){return n.handleEvent(e)}),n[Ro])}function ae(){Lt.call(this),this.i=new Fr(this),this.S=this,this.J=null}ce(ae,Lt);ae.prototype[rs]=!0;ae.prototype.removeEventListener=function(n,e,t,i){ef(this,n,e,t,i)};function de(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new Ee(e,n);else if(e instanceof Ee)e.target=e.target||n;else{var s=e;e=new Ee(i,n),Yd(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=As(o,i,!0,e)&&s}if(o=e.g=n,s=As(o,i,!0,e)&&s,s=As(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=As(o,i,!1,e)&&s}ae.prototype.N=function(){if(ae.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Lr(t[i]);delete n.g[e],n.h--}}this.J=null};ae.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};ae.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function As(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&na(n.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var cc=A.JSON.stringify;class Vw{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function $w(){var n=lc;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Bw{constructor(){this.h=this.g=null}add(e,t){const i=nf.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var nf=new Vw(()=>new qw,n=>n.reset());class qw{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function jw(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Hw(n){A.setTimeout(()=>{throw n},0)}let xi,Li=!1,lc=new Bw,sf=()=>{const n=A.Promise.resolve(void 0);xi=()=>{n.then(Ww)}};var Ww=()=>{for(var n;n=$w();){try{n.h.call(n.g)}catch(t){Hw(t)}var e=nf;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Li=!1};function Ur(n,e){ae.call(this),this.h=n||1,this.g=e||A,this.j=we(this.qb,this),this.l=Date.now()}ce(Ur,ae);y=Ur.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),de(this,"tick"),this.ga&&(uc(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function uc(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}y.N=function(){Ur.$.N.call(this),uc(this),delete this.g};function hc(n,e,t){if(typeof n=="function")t&&(n=we(n,t));else if(n&&typeof n.handleEvent=="function")n=we(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function rf(n){n.g=hc(()=>{n.g=null,n.i&&(n.i=!1,rf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class zw extends Lt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rf(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(n){Lt.call(this),this.h=n,this.g={}}ce(Fi,Lt);var cu=[];function of(n,e,t,i){Array.isArray(t)||(t&&(cu[0]=t.toString()),t=cu);for(var s=0;s<t.length;s++){var r=Xd(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function af(n){ic(n.g,function(e,t){this.g.hasOwnProperty(t)&&rc(e)},n),n.g={}}Fi.prototype.N=function(){Fi.$.N.call(this),af(this)};Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vr(){this.g=!0}Vr.prototype.Ea=function(){this.g=!1};function Kw(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function Gw(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function yn(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Yw(n,t)+(i?" "+i:"")})}function Qw(n,e){n.info(function(){return"TIMEOUT: "+e})}Vr.prototype.info=function(){};function Yw(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return cc(t)}catch{return e}}var an={},lu=null;function $r(){return lu=lu||new ae}an.Ta="serverreachability";function cf(n){Ee.call(this,an.Ta,n)}ce(cf,Ee);function Ui(n){const e=$r();de(e,new cf(e))}an.STAT_EVENT="statevent";function lf(n,e){Ee.call(this,an.STAT_EVENT,n),this.stat=e}ce(lf,Ee);function Se(n){const e=$r();de(e,new lf(e,n))}an.Ua="timingevent";function uf(n,e){Ee.call(this,an.Ua,n),this.size=e}ce(uf,Ee);function os(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var Br={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},hf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dc(){}dc.prototype.h=null;function uu(n){return n.h||(n.h=n.i())}function df(){}var as={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fc(){Ee.call(this,"d")}ce(fc,Ee);function pc(){Ee.call(this,"c")}ce(pc,Ee);var sa;function qr(){}ce(qr,dc);qr.prototype.g=function(){return new XMLHttpRequest};qr.prototype.i=function(){return{}};sa=new qr;function cs(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new Fi(this),this.P=Xw,n=Zo?125:void 0,this.V=new Ur(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ff}function ff(){this.i=null,this.g="",this.h=!1}var Xw=45e3,ra={},ir={};y=cs.prototype;y.setTimeout=function(n){this.P=n};function oa(n,e,t){n.L=1,n.v=Hr(pt(e)),n.s=t,n.S=!0,pf(n,null)}function pf(n,e){n.G=Date.now(),ls(n),n.A=pt(n.v);var t=n.A,i=n.W;Array.isArray(i)||(i=[String(i)]),Tf(t.i,"t",i),n.C=0,t=n.l.J,n.h=new ff,n.g=jf(n.l,t?e:null,!n.s),0<n.O&&(n.M=new zw(we(n.Pa,n,n.g),n.O)),of(n.U,n.g,"readystatechange",n.nb),e=n.I?Qd(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Ui(),Kw(n.j,n.u,n.A,n.m,n.W,n.s)}y.nb=function(n){n=n.target;const e=this.M;e&&Qe(n)==3?e.l():this.Pa(n)};y.Pa=function(n){try{if(n==this.g)e:{const u=Qe(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Zo||this.g&&(this.h.h||this.g.ja()||pu(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ui(3):Ui(2)),jr(this);var t=this.g.da();this.ca=t;t:if(gf(this)){var i=pu(this.g);n="";var s=i.length,r=Qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){jt(this),Ei(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,Gw(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pi(a)){var l=a;break t}}l=null}if(t=l)yn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aa(this,t);else{this.i=!1,this.o=3,Se(12),jt(this),Ei(this);break e}}this.S?(mf(this,u,o),Zo&&this.i&&u==3&&(of(this.U,this.V,"tick",this.mb),this.V.start())):(yn(this.j,this.m,o,null),aa(this,o)),u==4&&jt(this),this.i&&!this.J&&(u==4?Vf(this.l,this):(this.i=!1,ls(this)))}else yE(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Se(12)):(this.o=0,Se(13)),jt(this),Ei(this)}}}catch{}finally{}};function gf(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function mf(n,e,t){let i=!0,s;for(;!n.J&&n.C<t.length;)if(s=Jw(n,t),s==ir){e==4&&(n.o=4,Se(14),i=!1),yn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==ra){n.o=4,Se(15),yn(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else yn(n.j,n.m,s,null),aa(n,s);gf(n)&&s!=ir&&s!=ra&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Se(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),wc(e),e.M=!0,Se(11))):(yn(n.j,n.m,t,"[Invalid Chunked Response]"),jt(n),Ei(n))}y.mb=function(){if(this.g){var n=Qe(this.g),e=this.g.ja();this.C<e.length&&(jr(this),mf(this,n,e),this.i&&n!=4&&ls(this))}};function Jw(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?ir:(t=Number(e.substring(t,i)),isNaN(t)?ra:(i+=1,i+t>e.length?ir:(e=e.slice(i,i+t),n.C=i+t,e)))}y.cancel=function(){this.J=!0,jt(this)};function ls(n){n.Y=Date.now()+n.P,_f(n,n.P)}function _f(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=os(we(n.lb,n),e)}function jr(n){n.B&&(A.clearTimeout(n.B),n.B=null)}y.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Qw(this.j,this.A),this.L!=2&&(Ui(),Se(17)),jt(this),this.o=2,Ei(this)):_f(this,this.Y-n)};function Ei(n){n.l.H==0||n.J||Vf(n.l,n)}function jt(n){jr(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,uc(n.V),af(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function aa(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||ca(t.i,n))){if(!n.K&&ca(t.i,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)or(t),Kr(t);else break e;vc(t),Se(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=os(we(t.ib,t),6e3));if(1>=Sf(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Ht(t,11)}else if((n.K||t.g==n)&&or(t),!Pi(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.L=i,t.l.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(gc(r,r.h),r.h=null))}if(i.F){const E=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(i.Da=E,W(i.I,i.F,E))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=qf(i,i.J?i.pa:null,i.Y),o.K){Af(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(jr(a),ls(a)),i.g=o}else Ff(i);0<t.j.length&&Gr(t)}else l[0]!="stop"&&l[0]!="close"||Ht(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ht(t,7):yc(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}Ui(4)}catch{}}function Zw(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Mr(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function eE(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(Mr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function yf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Mr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=eE(n),i=Zw(n),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}var vf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tE(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Gt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Gt){this.h=n.h,sr(this,n.j),this.s=n.s,this.g=n.g,rr(this,n.m),this.l=n.l;var e=n.i,t=new Vi;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),hu(this,t),this.o=n.o}else n&&(e=String(n).match(vf))?(this.h=!1,sr(this,e[1]||"",!0),this.s=gi(e[2]||""),this.g=gi(e[3]||"",!0),rr(this,e[4]),this.l=gi(e[5]||"",!0),hu(this,e[6]||"",!0),this.o=gi(e[7]||"")):(this.h=!1,this.i=new Vi(null,this.h))}Gt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(mi(e,du,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(mi(e,du,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(mi(t,t.charAt(0)=="/"?sE:iE,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",mi(t,oE)),n.join("")};function pt(n){return new Gt(n)}function sr(n,e,t){n.j=t?gi(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function rr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function hu(n,e,t){e instanceof Vi?(n.i=e,aE(n.i,n.h)):(t||(e=mi(e,rE)),n.i=new Vi(e,n.h))}function W(n,e,t){n.i.set(e,t)}function Hr(n){return W(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function gi(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function mi(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,nE),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function nE(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var du=/[#\/\?@]/g,iE=/[#\?:]/g,sE=/[#\?]/g,rE=/[#\?@]/g,oE=/#/g;function Vi(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Ft(n){n.g||(n.g=new Map,n.h=0,n.i&&tE(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}y=Vi.prototype;y.add=function(n,e){Ft(this),this.i=null,n=Yn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function wf(n,e){Ft(n),e=Yn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Ef(n,e){return Ft(n),e=Yn(n,e),n.g.has(e)}y.forEach=function(n,e){Ft(this),this.g.forEach(function(t,i){t.forEach(function(s){n.call(e,s,i,this)},this)},this)};y.ta=function(){Ft(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const s=n[i];for(let r=0;r<s.length;r++)t.push(e[i])}return t};y.Z=function(n){Ft(this);let e=[];if(typeof n=="string")Ef(this,n)&&(e=e.concat(this.g.get(Yn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};y.set=function(n,e){return Ft(this),this.i=null,n=Yn(this,n),Ef(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};y.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Tf(n,e,t){wf(n,e),0<t.length&&(n.i=null,n.g.set(Yn(n,e),tc(t)),n.h+=t.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),n.push(s)}}return this.i=n.join("&")};function Yn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function aE(n,e){e&&!n.j&&(Ft(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(wf(this,i),Tf(this,s,t))},n)),n.j=e}var cE=class{constructor(n,e){this.g=n,this.map=e}};function If(n){this.l=n||lE,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lE=10;function Cf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Sf(n){return n.h?1:n.g?n.g.size:0}function ca(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function gc(n,e){n.g?n.g.add(e):n.h=e}function Af(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}If.prototype.cancel=function(){if(this.i=kf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function kf(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return tc(n.i)}var uE=class{stringify(n){return A.JSON.stringify(n,void 0)}parse(n){return A.JSON.parse(n,void 0)}};function hE(){this.g=new uE}function dE(n,e,t){const i=t||"";try{yf(n,function(s,r){let o=s;ss(s)&&(o=cc(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function fE(n,e){const t=new Vr;if(A.Image){const i=new Image;i.onload=Ss(ks,t,i,"TestLoadImage: loaded",!0,e),i.onerror=Ss(ks,t,i,"TestLoadImage: error",!1,e),i.onabort=Ss(ks,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ss(ks,t,i,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function ks(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function us(n){this.l=n.fc||null,this.j=n.ob||!1}ce(us,dc);us.prototype.g=function(){return new Wr(this.l,this.j)};us.prototype.i=function(n){return function(){return n}}({});function Wr(n,e){ae.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=mc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ce(Wr,ae);var mc=0;y=Wr.prototype;y.open=function(n,e){if(this.readyState!=mc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,$i(this)};y.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||A).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=mc};y.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bf(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function bf(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}y.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?hs(this):$i(this),this.readyState==3&&bf(this)}};y.Za=function(n){this.g&&(this.response=this.responseText=n,hs(this))};y.Ya=function(n){this.g&&(this.response=n,hs(this))};y.ka=function(){this.g&&hs(this)};function hs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,$i(n)}y.setRequestHeader=function(n,e){this.v.append(n,e)};y.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function $i(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var pE=A.JSON.parse;function X(n){ae.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rf,this.L=this.M=!1}ce(X,ae);var Rf="",gE=/^https?$/i,mE=["POST","PUT"];y=X.prototype;y.Oa=function(n){this.M=n};y.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sa.g(),this.C=this.u?uu(this.u):uu(sa),this.g.onreadystatechange=we(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){fu(this,r);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)t.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())t.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),s=A.FormData&&n instanceof A.FormData,!(0<=Wd(mE,e))||i||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Of(this),0<this.B&&((this.L=_E(this.g))?(this.g.timeout=this.B,this.g.ontimeout=we(this.ua,this)):this.A=hc(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){fu(this,r)}};function _E(n){return Mn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}y.ua=function(){typeof ec!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,de(this,"timeout"),this.abort(8))};function fu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Nf(n),zr(n)}function Nf(n){n.F||(n.F=!0,de(n,"complete"),de(n,"error"))}y.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,de(this,"complete"),de(this,"abort"),zr(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zr(this,!0)),X.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Df(this):this.kb())};y.kb=function(){Df(this)};function Df(n){if(n.h&&typeof ec!="undefined"&&(!n.C[1]||Qe(n)!=4||n.da()!=2)){if(n.v&&Qe(n)==4)hc(n.La,0,n);else if(de(n,"readystatechange"),Qe(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var s=String(n.I).match(vf)[1]||null;!s&&A.self&&A.self.location&&(s=A.self.location.protocol.slice(0,-1)),i=!gE.test(s?s.toLowerCase():"")}t=i}if(t)de(n,"complete"),de(n,"success");else{n.m=6;try{var r=2<Qe(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",Nf(n)}}finally{zr(n)}}}}function zr(n,e){if(n.g){Of(n);const t=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||de(n,"ready");try{t.onreadystatechange=i}catch{}}}function Of(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}y.isActive=function(){return!!this.g};function Qe(n){return n.g?n.g.readyState:0}y.da=function(){try{return 2<Qe(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),pE(e)}};function pu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Rf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function yE(n){const e={};n=(n.g&&2<=Qe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(Pi(n[i]))continue;var t=jw(n[i]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[s]||[];e[s]=r,r.push(t)}Lw(e,function(i){return i.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pf(n){let e="";return ic(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function _c(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=Pf(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):W(n,e,t))}function ai(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Mf(n){this.Ga=0,this.j=[],this.l=new Vr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ai("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ai("baseRetryDelayMs",5e3,n),this.hb=ai("retryDelaySeedMs",1e4,n),this.eb=ai("forwardChannelMaxRetries",2,n),this.xa=ai("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new If(n&&n.concurrentRequestLimit),this.Ja=new hE,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Mf.prototype;y.ra=8;y.H=1;function yc(n){if(xf(n),n.H==3){var e=n.W++,t=pt(n.I);if(W(t,"SID",n.K),W(t,"RID",e),W(t,"TYPE","terminate"),ds(n,t),e=new cs(n,n.l,e),e.L=2,e.v=Hr(pt(t)),t=!1,A.navigator&&A.navigator.sendBeacon)try{t=A.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&A.Image&&(new Image().src=e.v,t=!0),t||(e.g=jf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ls(e)}Bf(n)}function Kr(n){n.g&&(wc(n),n.g.cancel(),n.g=null)}function xf(n){Kr(n),n.u&&(A.clearTimeout(n.u),n.u=null),or(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function Gr(n){if(!Cf(n.i)&&!n.m){n.m=!0;var e=n.Na;xi||sf(),Li||(xi(),Li=!0),lc.add(e,n),n.C=0}}function vE(n,e){return Sf(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=os(we(n.Na,n,e),$f(n,n.C)),n.C++,!0)}y.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new cs(this,this.l,n);let r=this.s;if(this.U&&(r?(r=Qd(r),Yd(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var i=this.j[t];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Lf(this,s,e),t=pt(this.I),W(t,"RID",n),W(t,"CVER",22),this.F&&W(t,"X-HTTP-Session-Id",this.F),ds(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(Pf(r)))+"&"+e:this.o&&_c(t,this.o,r)),gc(this.i,s),this.bb&&W(t,"TYPE","init"),this.P?(W(t,"$req",e),W(t,"SID","null"),s.aa=!0,oa(s,t,null)):oa(s,t,e),this.H=2}}else this.H==3&&(n?gu(this,n):this.j.length==0||Cf(this.i)||gu(this))};function gu(n,e){var t;e?t=e.m:t=n.W++;const i=pt(n.I);W(i,"SID",n.K),W(i,"RID",t),W(i,"AID",n.V),ds(n,i),n.o&&n.s&&_c(i,n.o,n.s),t=new cs(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Lf(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),gc(n.i,t),oa(t,i,e)}function ds(n,e){n.na&&ic(n.na,function(t,i){W(e,i,t)}),n.h&&yf({},function(t,i){W(e,i,t)})}function Lf(n,e,t){t=Math.min(n.j.length,t);var i=n.h?we(n.h.Va,n.h,n):null;e:{var s=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{dE(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,i}function Ff(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;xi||sf(),Li||(xi(),Li=!0),lc.add(e,n),n.A=0}}function vc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=os(we(n.Ma,n),$f(n,n.A)),n.A++,!0)}y.Ma=function(){if(this.u=null,Uf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=os(we(this.jb,this),n)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Se(10),Kr(this),Uf(this))};function wc(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function Uf(n){n.g=new cs(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=pt(n.wa);W(e,"RID","rpc"),W(e,"SID",n.K),W(e,"AID",n.V),W(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&W(e,"TO",n.qa),W(e,"TYPE","xmlhttp"),ds(n,e),n.o&&n.s&&_c(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Hr(pt(e)),t.s=null,t.S=!0,pf(t,n)}y.ib=function(){this.v!=null&&(this.v=null,Kr(this),vc(this),Se(19))};function or(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function Vf(n,e){var t=null;if(n.g==e){or(n),wc(n),n.g=null;var i=2}else if(ca(n.i,e))t=e.F,Af(n.i,e),i=1;else return;if(n.H!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=n.C;i=$r(),de(i,new uf(i,t)),Gr(n)}else Ff(n);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&vE(n,e)||i==2&&vc(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Ht(n,5);break;case 4:Ht(n,10);break;case 3:Ht(n,6);break;default:Ht(n,2)}}}function $f(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Ht(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var i=we(n.pb,n);t||(t=new Gt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||sr(t,"https"),Hr(t)),fE(t.toString(),i)}else Se(2);n.H=0,n.h&&n.h.za(e),Bf(n),xf(n)}y.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Se(2)):(this.l.info("Failed to ping google.com"),Se(1))};function Bf(n){if(n.H=0,n.ma=[],n.h){const e=kf(n.i);(e.length!=0||n.j.length!=0)&&(ru(n.ma,e),ru(n.ma,n.j),n.i.i.length=0,tc(n.j),n.j.length=0),n.h.ya()}}function qf(n,e,t){var i=t instanceof Gt?pt(t):new Gt(t);if(i.g!="")e&&(i.g=e+"."+i.g),rr(i,i.m);else{var s=A.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Gt(null);i&&sr(r,i),e&&(r.g=e),s&&rr(r,s),t&&(r.l=t),i=r}return t=n.F,e=n.Da,t&&e&&W(i,t,e),W(i,"VER",n.ra),ds(n,i),i}function jf(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new X(new us({ob:!0})):new X(n.va),e.Oa(n.J),e}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function Hf(){}y=Hf.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function ar(){if(Mn&&!(10<=Number(Ow)))throw Error("Environmental error: no available transport.")}ar.prototype.g=function(n,e){return new De(n,e)};function De(n,e){ae.call(this),this.g=new Mf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Pi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pi(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Xn(this)}ce(De,ae);De.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Se(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=qf(n,null,n.Y),Gr(n)};De.prototype.close=function(){yc(this.g)};De.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=cc(n),n=t);e.j.push(new cE(e.fb++,n)),e.H==3&&Gr(e)};De.prototype.N=function(){this.g.h=null,delete this.j,yc(this.g),delete this.g,De.$.N.call(this)};function Wf(n){fc.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ce(Wf,fc);function zf(){pc.call(this),this.status=1}ce(zf,pc);function Xn(n){this.g=n}ce(Xn,Hf);Xn.prototype.Ba=function(){de(this.g,"a")};Xn.prototype.Aa=function(n){de(this.g,new Wf(n))};Xn.prototype.za=function(n){de(this.g,new zf)};Xn.prototype.ya=function(){de(this.g,"b")};function wE(){this.blockSize=-1}function ze(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ce(ze,wE);ze.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function No(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)i[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var r=n.g[3],o=e+(r^t&(s^r))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(t^s))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^r)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~r))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+r&4294967295}ze.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=t;)No(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(i[s++]=n.charCodeAt(r++),s==this.blockSize){No(this,i),s=0;break}}else for(;r<e;)if(i[s++]=n[r++],s==this.blockSize){No(this,i),s=0;break}}this.h=s,this.i+=e};ze.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function V(n,e){this.h=e;for(var t=[],i=!0,s=n.length-1;0<=s;s--){var r=n[s]|0;i&&r==e||(t[s]=r,i=!1)}this.g=t}var EE={};function Ec(n){return-128<=n&&128>n?Rw(n,function(e){return new V([e|0],0>e?-1:0)}):new V([n|0],0>n?-1:0)}function Ye(n){if(isNaN(n)||!isFinite(n))return Cn;if(0>n)return ue(Ye(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=la;return new V(e,0)}function Kf(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ue(Kf(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ye(Math.pow(e,8)),i=Cn,s=0;s<n.length;s+=8){var r=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+r),e);8>r?(r=Ye(Math.pow(e,r)),i=i.R(r).add(Ye(o))):(i=i.R(t),i=i.add(Ye(o)))}return i}var la=4294967296,Cn=Ec(0),ua=Ec(1),mu=Ec(16777216);y=V.prototype;y.ea=function(){if(Pe(this))return-ue(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:la+i)*e,e*=la}return n};y.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(lt(this))return"0";if(Pe(this))return"-"+ue(this).toString(n);for(var e=Ye(Math.pow(n,6)),t=this,i="";;){var s=lr(t,e).g;t=cr(t,s.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,lt(t))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};y.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function lt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Pe(n){return n.h==-1}y.X=function(n){return n=cr(this,n),Pe(n)?-1:lt(n)?0:1};function ue(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new V(t,~n.h).add(ua)}y.abs=function(){return Pe(this)?ue(this):this};y.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(n.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,t[s]=o<<16|r}return new V(t,t[t.length-1]&-2147483648?-1:0)};function cr(n,e){return n.add(ue(e))}y.R=function(n){if(lt(this)||lt(n))return Cn;if(Pe(this))return Pe(n)?ue(this).R(ue(n)):ue(ue(this).R(n));if(Pe(n))return ue(this.R(ue(n)));if(0>this.X(mu)&&0>n.X(mu))return Ye(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<n.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;t[2*i+2*s]+=o*c,bs(t,2*i+2*s),t[2*i+2*s+1]+=r*c,bs(t,2*i+2*s+1),t[2*i+2*s+1]+=o*a,bs(t,2*i+2*s+1),t[2*i+2*s+2]+=r*a,bs(t,2*i+2*s+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new V(t,0)};function bs(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function ci(n,e){this.g=n,this.h=e}function lr(n,e){if(lt(e))throw Error("division by zero");if(lt(n))return new ci(Cn,Cn);if(Pe(n))return e=lr(ue(n),e),new ci(ue(e.g),ue(e.h));if(Pe(e))return e=lr(n,ue(e)),new ci(ue(e.g),e.h);if(30<n.g.length){if(Pe(n)||Pe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=ua,i=e;0>=i.X(n);)t=_u(t),i=_u(i);var s=fn(t,1),r=fn(i,1);for(i=fn(i,2),t=fn(t,2);!lt(i);){var o=r.add(i);0>=o.X(n)&&(s=s.add(t),r=o),i=fn(i,1),t=fn(t,1)}return e=cr(n,s.R(e)),new ci(s,e)}for(s=Cn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Ye(t),o=r.R(e);Pe(o)||0<o.X(n);)t-=i,r=Ye(t),o=r.R(e);lt(r)&&(r=ua),s=s.add(r),n=cr(n,o)}return new ci(s,n)}y.gb=function(n){return lr(this,n).h};y.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new V(t,this.h&n.h)};y.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new V(t,this.h|n.h)};y.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new V(t,this.h^n.h)};function _u(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new V(t,n.h)}function fn(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,s=[],r=0;r<i;r++)s[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new V(s,n.h)}ar.prototype.createWebChannel=ar.prototype.g;De.prototype.send=De.prototype.u;De.prototype.open=De.prototype.m;De.prototype.close=De.prototype.close;Br.NO_ERROR=0;Br.TIMEOUT=8;Br.HTTP_ERROR=6;hf.COMPLETE="complete";df.EventType=as;as.OPEN="a";as.CLOSE="b";as.ERROR="c";as.MESSAGE="d";ae.prototype.listen=ae.prototype.O;X.prototype.listenOnce=X.prototype.P;X.prototype.getLastError=X.prototype.Sa;X.prototype.getLastErrorCode=X.prototype.Ia;X.prototype.getStatus=X.prototype.da;X.prototype.getResponseJson=X.prototype.Wa;X.prototype.getResponseText=X.prototype.ja;X.prototype.send=X.prototype.ha;X.prototype.setWithCredentials=X.prototype.Oa;ze.prototype.digest=ze.prototype.l;ze.prototype.reset=ze.prototype.reset;ze.prototype.update=ze.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=Ye;V.fromString=Kf;var TE=function(){return new ar},IE=function(){return $r()},Do=Br,CE=hf,SE=an,yu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},AE=us,Rs=df,kE=X,bE=ze,Sn=V;const vu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pe.UNAUTHENTICATED=new pe(null),pe.GOOGLE_CREDENTIALS=new pe("google-credentials-uid"),pe.FIRST_PARTY=new pe("first-party-uid"),pe.MOCK_USER=new pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Ji("@firebase/firestore");function wu(){return Zt.logLevel}function T(n,...e){if(Zt.logLevel<=M.DEBUG){const t=e.map(Tc);Zt.debug(`Firestore (${Jn}): ${n}`,...t)}}function gt(n,...e){if(Zt.logLevel<=M.ERROR){const t=e.map(Tc);Zt.error(`Firestore (${Jn}): ${n}`,...t)}}function xn(n,...e){if(Zt.logLevel<=M.WARN){const t=e.map(Tc);Zt.warn(`Firestore (${Jn}): ${n}`,...t)}}function Tc(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n="Unexpected state"){const e=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: `+n;throw gt(e),new Error(e)}function K(n,e){n||S()}function b(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(pe.UNAUTHENTICATED))}shutdown(){}}class NE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class DE{constructor(e){this.t=e,this.currentUser=pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let r=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ht,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ht)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(K(typeof i.accessToken=="string"),new Gf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new pe(e)}}class OE{constructor(e,t,i){this.h=e,this.l=t,this.m=i,this.type="FirstParty",this.user=pe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class PE{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new OE(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ME{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xE{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const i=r=>{r.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.T=t.token,new ME(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=LE(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function x(n,e){return n<e?-1:n>e?1:0}function Ln(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new te(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.timestamp=e}static fromTimestamp(e){return new k(e)}static min(){return new k(new te(0,0))}static max(){return new k(new te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,i){t===void 0?t=0:t>e.length&&S(),i===void 0?i=e.length-t:i>e.length-t&&S(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class z extends Bi{construct(e,t,i){return new z(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new w(p.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new z(t)}static emptyPath(){return new z([])}}const FE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends Bi{construct(e,t,i){return new ye(e,t,i)}static isValidIdentifier(e){return FE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ye(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new w(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new w(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new w(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ye(t)}static emptyPath(){return new ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(z.fromString(e))}static fromName(e){return new I(z.fromString(e).popFirst(5))}static empty(){return new I(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new z(e.slice()))}}function UE(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=k.fromTimestamp(i===1e9?new te(t+1,0):new te(t,i));return new Nt(s,I.empty(),e)}function VE(n){return new Nt(n.readTime,n.key,-1)}class Nt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Nt(k.min(),I.empty(),-1)}static max(){return new Nt(k.max(),I.empty(),-1)}}function $E(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:x(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==BE)throw n;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,i)=>{t(e)})}static reject(e){return new m((t,i)=>{i(e)})}static waitFor(e){return new m((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},c=>i(c))}),o=!0,r===s&&t()})}static or(e){let t=m.resolve(!1);for(const i of e)t=t.next(s=>s?m.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new m((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,t){return new m((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function ps(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>t.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ic.ct=-1;function Qr(n){return n==null}function ur(n){return n===0&&1/n==-1/0}function jE(n){return typeof n=="number"&&Number.isInteger(n)&&!ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.comparator=e,this.root=t||le.EMPTY}insert(e,t){return new Q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,le.BLACK,null,null))}remove(e){return new Q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ns(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ns(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ns(this.root,e,this.comparator,!0)}}class Ns{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class le{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:le.RED,this.left=s!=null?s:le.EMPTY,this.right=r!=null?r:le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new le(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return le.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}le.EMPTY=null,le.RED=!0,le.BLACK=!1;le.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(n,e,t,i,s){return this}insert(n,e,t){return new le(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new Q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tu(this.data.getIterator())}getIteratorFrom(e){return new Tu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class Tu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new $e([])}unionWith(e){let t=new Te(ye.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new $e(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new Xf("Invalid base64 string: "+s):s}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const HE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(n){if(K(!!n),typeof n=="string"){let e=0;const t=HE.exec(n);if(K(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Sc(n){const e=n.mapValue.fields.__previous_value__;return Cc(e)?Sc(e):e}function qi(n){const e=Dt(n.mapValue.fields.__local_write_time__.timestampValue);return new te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,t,i,s,r,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ji{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ji("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ji&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cc(n)?4:zE(n)?9007199254740991:10:S()}function it(n,e){if(n===e)return!0;const t=tn(n);if(t!==tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qi(n).isEqual(qi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Dt(i.timestampValue),o=Dt(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return en(i.bytesValue).isEqual(en(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Z(i.geoPointValue.latitude)===Z(s.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Z(i.integerValue)===Z(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Z(i.doubleValue),o=Z(s.doubleValue);return r===o?ur(r)===ur(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return Ln(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Eu(r)!==Eu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!it(r[a],o[a])))return!1;return!0}(n,e);default:return S()}}function Hi(n,e){return(n.values||[]).find(t=>it(t,e))!==void 0}function Fn(n,e){if(n===e)return 0;const t=tn(n),i=tn(e);if(t!==i)return x(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return x(n.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Z(s.integerValue||s.doubleValue),a=Z(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Iu(n.timestampValue,e.timestampValue);case 4:return Iu(qi(n),qi(e));case 5:return x(n.stringValue,e.stringValue);case 6:return function(s,r){const o=en(s),a=en(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=x(o[c],a[c]);if(l!==0)return l}return x(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,r){const o=x(Z(s.latitude),Z(r.latitude));return o!==0?o:x(Z(s.longitude),Z(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Fn(o[c],a[c]);if(l)return l}return x(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Ds.mapValue&&r===Ds.mapValue)return 0;if(s===Ds.mapValue)return 1;if(r===Ds.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=x(a[u],l[u]);if(h!==0)return h;const d=Fn(o[a[u]],c[l[u]]);if(d!==0)return d}return x(a.length,l.length)}(n.mapValue,e.mapValue);default:throw S()}}function Iu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return x(n,e);const t=Dt(n),i=Dt(e),s=x(t.seconds,i.seconds);return s!==0?s:x(t.nanos,i.nanos)}function Un(n){return ha(n)}function ha(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=Dt(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?en(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=ha(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${ha(i.fields[a])}`;return r+"}"}(n.mapValue):S();var e,t}function Cu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function da(n){return!!n&&"integerValue"in n}function Ac(n){return!!n&&"arrayValue"in n}function Su(n){return!!n&&"nullValue"in n}function Au(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function js(n){return!!n&&"mapValue"in n}function Ti(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zn(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ti(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ti(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!js(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(t)}setAll(e){let t=ye.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=Ti(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());js(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];js(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Zn(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Me(Ti(this.value))}}function Jf(n){const e=[];return Zn(n.fields,(t,i)=>{const s=new ye([t]);if(js(i)){const r=Jf(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new $e(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t,i,s,r,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ge(e,0,k.min(),k.min(),k.min(),Me.empty(),0)}static newFoundDocument(e,t,i,s){return new ge(e,1,t,k.min(),i,s,0)}static newNoDocument(e,t){return new ge(e,2,t,k.min(),k.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,k.min(),k.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){this.position=e,this.inclusive=t}}function ku(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=I.comparator(I.fromName(o.referenceValue),t.key):i=Fn(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function bu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t="asc"){this.field=e,this.dir=t}}function KE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{}class ee extends Zf{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new QE(e,t,i):t==="array-contains"?new JE(e,i):t==="in"?new ZE(e,i):t==="not-in"?new eT(e,i):t==="array-contains-any"?new tT(e,i):new ee(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new YE(e,i):new XE(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fn(t,this.value)):t!==null&&tn(this.value)===tn(t)&&this.matchesComparison(Fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ke extends Zf{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ke(e,t)}matches(e){return ep(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ep(n){return n.op==="and"}function tp(n){return GE(n)&&ep(n)}function GE(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function fa(n){if(n instanceof ee)return n.field.canonicalString()+n.op.toString()+Un(n.value);if(tp(n))return n.filters.map(e=>fa(e)).join(",");{const e=n.filters.map(t=>fa(t)).join(",");return`${n.op}(${e})`}}function np(n,e){return n instanceof ee?function(t,i){return i instanceof ee&&t.op===i.op&&t.field.isEqual(i.field)&&it(t.value,i.value)}(n,e):n instanceof Ke?function(t,i){return i instanceof Ke&&t.op===i.op&&t.filters.length===i.filters.length?t.filters.reduce((s,r,o)=>s&&np(r,i.filters[o]),!0):!1}(n,e):void S()}function ip(n){return n instanceof ee?function(e){return`${e.field.canonicalString()} ${e.op} ${Un(e.value)}`}(n):n instanceof Ke?function(e){return e.op.toString()+" {"+e.getFilters().map(ip).join(" ,")+"}"}(n):"Filter"}class QE extends ee{constructor(e,t,i){super(e,t,i),this.key=I.fromName(i.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class YE extends ee{constructor(e,t){super(e,"in",t),this.keys=sp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class XE extends ee{constructor(e,t){super(e,"not-in",t),this.keys=sp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>I.fromName(i.referenceValue))}class JE extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ac(t)&&Hi(t.arrayValue,this.value)}}class ZE extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hi(this.value.arrayValue,t)}}class eT extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Hi(this.value.arrayValue,t)}}class tT extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ac(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Hi(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Ru(n,e=null,t=[],i=[],s=null,r=null,o=null){return new nT(n,e,t,i,s,r,o)}function kc(n){const e=b(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>fa(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Qr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Un(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Un(i)).join(",")),e.dt=t}return e.dt}function bc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!KE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!np(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bu(n.startAt,e.startAt)&&bu(n.endAt,e.endAt)}function pa(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function iT(n,e,t,i,s,r,o,a){return new ei(n,e,t,i,s,r,o,a)}function Yr(n){return new ei(n)}function Nu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Rc(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Xr(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function rp(n){return n.collectionGroup!==null}function kn(n){const e=b(n);if(e.wt===null){e.wt=[];const t=Xr(e),i=Rc(e);if(t!==null&&i===null)t.isKeyField()||e.wt.push(new An(t)),e.wt.push(new An(ye.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new An(ye.keyField(),r))}}}return e.wt}function mt(n){const e=b(n);if(!e._t)if(e.limitType==="F")e._t=Ru(e.path,e.collectionGroup,kn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of kn(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new An(r.field,o))}const i=e.endAt?new hr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new hr(e.startAt.position,e.startAt.inclusive):null;e._t=Ru(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e._t}function ga(n,e){e.getFirstInequalityField(),Xr(n);const t=n.filters.concat([e]);return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ma(n,e,t){return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Jr(n,e){return bc(mt(n),mt(e))&&n.limitType===e.limitType}function op(n){return`${kc(mt(n))}|lt:${n.limitType}`}function _a(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(i=>ip(i)).join(", ")}]`),Qr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Un(i)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Un(i)).join(",")),`Target(${t})`}(mt(n))}; limitType=${n.limitType})`}function Zr(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):I.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of kn(t))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!function(s,r,o){const a=ku(s,r,o);return s.inclusive?a<=0:a<0}(t.startAt,kn(t),i)||t.endAt&&!function(s,r,o){const a=ku(s,r,o);return s.inclusive?a>=0:a>0}(t.endAt,kn(t),i))}(n,e)}function sT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ap(n){return(e,t)=>{let i=!1;for(const s of kn(n)){const r=rT(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function rT(n,e,t){const i=n.field.isKeyField()?I.comparator(e.key,t.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Fn(a,c):S()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return S()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zn(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Yf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=new Q(I.comparator);function _t(){return oT}const cp=new Q(I.comparator);function _i(...n){let e=cp;for(const t of n)e=e.insert(t.key,t);return e}function lp(n){let e=cp;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Wt(){return Ii()}function up(){return Ii()}function Ii(){return new ti(n=>n.toString(),(n,e)=>n.isEqual(e))}const aT=new Q(I.comparator),cT=new Te(I.comparator);function R(...n){let e=cT;for(const t of n)e=e.add(t);return e}const lT=new Te(x);function uT(){return lT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(e)?"-0":e}}function dp(n){return{integerValue:""+n}}function hT(n,e){return jE(e)?dp(e):hp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this._=void 0}}function dT(n,e,t){return n instanceof Wi?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Cc(s)&&(s=Sc(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):n instanceof zi?pp(n,e):n instanceof Ki?gp(n,e):function(i,s){const r=fp(i,s),o=Du(r)+Du(i.gt);return da(r)&&da(i.gt)?dp(o):hp(i.serializer,o)}(n,e)}function fT(n,e,t){return n instanceof zi?pp(n,e):n instanceof Ki?gp(n,e):t}function fp(n,e){return n instanceof dr?da(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class Wi extends eo{}class zi extends eo{constructor(e){super(),this.elements=e}}function pp(n,e){const t=mp(e);for(const i of n.elements)t.some(s=>it(s,i))||t.push(i);return{arrayValue:{values:t}}}class Ki extends eo{constructor(e){super(),this.elements=e}}function gp(n,e){let t=mp(e);for(const i of n.elements)t=t.filter(s=>!it(s,i));return{arrayValue:{values:t}}}class dr extends eo{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Du(n){return Z(n.integerValue||n.doubleValue)}function mp(n){return Ac(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,t){this.field=e,this.transform=t}}function gT(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof zi&&i instanceof zi||t instanceof Ki&&i instanceof Ki?Ln(t.elements,i.elements,it):t instanceof dr&&i instanceof dr?it(t.gt,i.gt):t instanceof Wi&&i instanceof Wi}(n.transform,e.transform)}class mT{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class to{}function _p(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Nc(n.key,et.none()):new gs(n.key,n.data,et.none());{const t=n.data,i=Me.empty();let s=new Te(ye.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new cn(n.key,i,new $e(s.toArray()),et.none())}}function _T(n,e,t){n instanceof gs?function(i,s,r){const o=i.value.clone(),a=Pu(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof cn?function(i,s,r){if(!Hs(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Pu(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(yp(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Ci(n,e,t,i){return n instanceof gs?function(s,r,o,a){if(!Hs(s.precondition,r))return o;const c=s.value.clone(),l=Mu(s.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof cn?function(s,r,o,a){if(!Hs(s.precondition,r))return o;const c=Mu(s.fieldTransforms,a,r),l=r.data;return l.setAll(yp(s)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(n,e,t,i):function(s,r,o){return Hs(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function yT(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=fp(i.transform,s||null);r!=null&&(t===null&&(t=Me.empty()),t.set(i.field,r))}return t||null}function Ou(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&Ln(t,i,(s,r)=>gT(s,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gs extends to{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cn extends to{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function yp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Pu(n,e,t){const i=new Map;K(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,fT(o,a,t[s]))}return i}function Mu(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,dT(r,o,e))}return i}class Nc extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vT extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&_T(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ci(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ci(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=up();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(s.key)?null:a;const c=_p(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(k.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),R())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,(t,i)=>Ou(t,i))&&Ln(this.baseMutations,e.baseMutations,(t,i)=>Ou(t,i))}}class Dc{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){K(e.mutations.length===i.length);let s=aT;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Dc(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,D;function IT(n){switch(n){default:return S();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function vp(n){if(n===void 0)return gt("GRPC error has no .code"),p.UNKNOWN;switch(n){case J.OK:return p.OK;case J.CANCELLED:return p.CANCELLED;case J.UNKNOWN:return p.UNKNOWN;case J.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case J.INTERNAL:return p.INTERNAL;case J.UNAVAILABLE:return p.UNAVAILABLE;case J.UNAUTHENTICATED:return p.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case J.NOT_FOUND:return p.NOT_FOUND;case J.ALREADY_EXISTS:return p.ALREADY_EXISTS;case J.PERMISSION_DENIED:return p.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case J.ABORTED:return p.ABORTED;case J.OUT_OF_RANGE:return p.OUT_OF_RANGE;case J.UNIMPLEMENTED:return p.UNIMPLEMENTED;case J.DATA_LOSS:return p.DATA_LOSS;default:return S()}}(D=J||(J={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Os}static getOrCreateInstance(){return Os===null&&(Os=new Oc),Os}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Os=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=new Sn([4294967295,4294967295],0);function xu(n){const e=CT().encode(n),t=new bE;return t.update(e),new Uint8Array(t.digest())}function Lu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Sn([t,i],0),new Sn([s,r],0)]}class Pc{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new yi(`Invalid padding: ${t}`);if(i<0)throw new yi(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new yi(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Sn.fromNumber(this.It)}Et(e,t,i){let s=e.add(t.multiply(Sn.fromNumber(i)));return s.compare(ST)===1&&(s=new Sn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=xu(e),[i,s]=Lu(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);if(!this.At(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Pc(r,s,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=xu(e),[i,s]=Lu(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,ms.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new no(k.min(),s,new Q(x),_t(),R())}}class ms{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ms(i,t,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,i,s){this.Pt=e,this.removedTargetIds=t,this.key=i,this.bt=s}}class wp{constructor(e,t){this.targetId=e,this.Vt=t}}class Ep{constructor(e,t,i=Ce.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Fu{constructor(){this.St=0,this.Dt=Vu(),this.Ct=Ce.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=R(),t=R(),i=R();return this.Dt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:S()}}),new ms(this.Ct,this.xt,e,t,i)}Ft(){this.Nt=!1,this.Dt=Vu()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class AT{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=_t(),this.zt=Uu(),this.Wt=new Q(x)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const i=this.Zt(t);switch(e.state){case 0:this.te(t)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(t);break;case 3:this.te(t)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),i.$t(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((i,s)=>{this.te(s)&&t(s)})}ne(e){var t;const i=e.targetId,s=e.Vt.count,r=this.se(i);if(r){const o=r.target;if(pa(o))if(s===0){const a=new I(o.path);this.Yt(i,a,ge.newNoDocument(a,k.min()))}else K(s===1);else{const a=this.ie(i);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(i);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,l)}(t=Oc.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,g,E,v,L;const $={localCacheCount:u,existenceFilterCount:h.count},U=h.unchangedNames;return U&&($.bloomFilter={applied:l===0,hashCount:(d=U==null?void 0:U.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(E=(g=(f=U==null?void 0:U.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&E!==void 0?E:0,padding:(L=(v=U==null?void 0:U.bits)===null||v===void 0?void 0:v.padding)!==null&&L!==void 0?L:0}),$}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let c,l;try{c=en(r).toUint8Array()}catch(u){if(u instanceof Xf)return xn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Pc(c,o,a)}catch(u){return xn(u instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:s!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const i=this.Gt.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.vt(a)||(this.Yt(e,r,null),s++)}),s}ce(e){const t=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&pa(a.target)){const c=new I(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,ge.newNoDocument(c,e))}r.Mt&&(t.set(o,r.Ot()),r.Ft())}});let i=R();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const s=new no(e,t,this.Wt,this.jt,i);return this.jt=_t(),this.zt=Uu(),this.Wt=new Q(x),s}Jt(e,t){if(!this.te(e))return;const i=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,i),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,i){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,t)?s.Bt(t,1):s.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),i&&(this.jt=this.jt.insert(t,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Fu,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Te(x),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||T("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Fu),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Uu(){return new Q(I.comparator)}function Vu(){return new Q(I.comparator)}const kT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RT=(()=>({and:"AND",or:"OR"}))();class NT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ya(n,e){return n.useProto3Json||Qr(e)?e:{value:e}}function fr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function DT(n,e){return fr(n,e.toTimestamp())}function tt(n){return K(!!n),k.fromTimestamp(function(e){const t=Dt(e);return new te(t.seconds,t.nanos)}(n))}function Mc(n,e){return function(t){return new z(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Ip(n){const e=z.fromString(n);return K(kp(e)),e}function va(n,e){return Mc(n.databaseId,e.path)}function Oo(n,e){const t=Ip(e);if(t.get(1)!==n.databaseId.projectId)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(Cp(t))}function wa(n,e){return Mc(n.databaseId,e)}function OT(n){const e=Ip(n);return e.length===4?z.emptyPath():Cp(e)}function Ea(n){return new z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Cp(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $u(n,e,t){return{name:va(n,e),fields:t.value.mapValue.fields}}function PT(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?(K(l===void 0||typeof l=="string"),Ce.fromBase64String(l||"")):(K(l===void 0||l instanceof Uint8Array),Ce.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?p.UNKNOWN:vp(c.code);return new w(l,c.message||"")}(o);t=new Ep(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Oo(n,i.document.name),r=tt(i.document.updateTime),o=i.document.createTime?tt(i.document.createTime):k.min(),a=new Me({mapValue:{fields:i.document.fields}}),c=ge.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];t=new Ws(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Oo(n,i.document),r=i.readTime?tt(i.readTime):k.min(),o=ge.newNoDocument(s,r),a=i.removedTargetIds||[];t=new Ws([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Oo(n,i.document),r=i.removedTargetIds||[];t=new Ws([],r,s,null)}else{if(!("filter"in e))return S();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new TT(s,r),a=i.targetId;t=new wp(a,o)}}return t}function MT(n,e){let t;if(e instanceof gs)t={update:$u(n,e.key,e.value)};else if(e instanceof Nc)t={delete:va(n,e.key)};else if(e instanceof cn)t={update:$u(n,e.key,e.data),updateMask:jT(e.fieldMask)};else{if(!(e instanceof vT))return S();t={verify:va(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Wi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ki)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof dr)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw S()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:DT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:S()}(n,e.precondition)),t}function xT(n,e){return n&&n.length>0?(K(e!==void 0),n.map(t=>function(i,s){let r=i.updateTime?tt(i.updateTime):tt(s);return r.isEqual(k.min())&&(r=tt(s)),new mT(r,i.transformResults||[])}(t,e))):[]}function LT(n,e){return{documents:[wa(n,e.path)]}}function FT(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=wa(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=wa(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return Ap(Ke.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:gn(u.field),direction:$T(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=ya(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function UT(n){let e=OT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){K(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=Sp(u);return h instanceof Ke&&tp(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new An(mn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Qr(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new hr(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new hr(d,h)}(t.endAt)),iT(e,s,o,r,a,"F",c,l)}function VT(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sp(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=mn(e.unaryFilter.field);return ee.create(t,"==",{doubleValue:NaN});case"IS_NULL":const i=mn(e.unaryFilter.field);return ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mn(e.unaryFilter.field);return ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=mn(e.unaryFilter.field);return ee.create(r,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(n):n.fieldFilter!==void 0?function(e){return ee.create(mn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ke.create(e.compositeFilter.filters.map(t=>Sp(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(n):S()}function $T(n){return kT[n]}function BT(n){return bT[n]}function qT(n){return RT[n]}function gn(n){return{fieldPath:n.canonicalString()}}function mn(n){return ye.fromServerFormat(n.fieldPath)}function Ap(n){return n instanceof ee?function(e){if(e.op==="=="){if(Au(e.value))return{unaryFilter:{field:gn(e.field),op:"IS_NAN"}};if(Su(e.value))return{unaryFilter:{field:gn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Au(e.value))return{unaryFilter:{field:gn(e.field),op:"IS_NOT_NAN"}};if(Su(e.value))return{unaryFilter:{field:gn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(e.field),op:BT(e.op),value:e.value}}}(n):n instanceof Ke?function(e){const t=e.getFilters().map(i=>Ap(i));return t.length===1?t[0]:{compositeFilter:{op:qT(e.op),filters:t}}}(n):S()}function jT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,i,s,r=k.min(),o=k.min(),a=Ce.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.fe=e}}function WT(n){const e=UT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ma(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.rn=new KT}addToCollectionParentIndex(e,t){return this.rn.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Nt.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Nt.min())}updateCollectionGroup(e,t,i){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class KT{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Te(z.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Te(z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Vn(0)}static Mn(){return new Vn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.changes=new ti(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?m.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Ci(i.mutation,s,$e.empty(),te.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,R()).next(()=>i))}getLocalViewOfDocuments(e,t,i=R()){const s=Wt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=_i();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=Wt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,R()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,s){let r=_t();const o=Ii(),a=Ii();return t.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof cn)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ci(u.mutation,l,u.mutation.getFieldMask(),te.now())):o.set(l.key,$e.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new QT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=Ii();let s=new Q((o,a)=>o-a),r=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=i.get(c)||$e.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||R()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=up();u.forEach(d=>{if(!r.has(d)){const f=_p(t.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return m.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return I.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):m.resolve(Wt());let a=-1,c=r;return o.next(l=>m.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?m.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,R())).next(u=>({batchId:a,changes:lp(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(i=>{let s=_i();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const s=t.collectionGroup;let r=_i();return this.indexManager.getCollectionParents(e,s).next(o=>m.forEach(o,a=>{const c=function(l,u){return new ei(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,s))).next(r=>{s.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ge.newInvalidDocument(l)))});let o=_i();return r.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Ci(l.mutation,c,$e.empty(),te.now()),Zr(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return m.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var i;return this.cs.set(t.id,{id:(i=t).id,version:i.version,createTime:tt(i.createTime)}),m.resolve()}getNamedQuery(e,t){return m.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(i){return{name:i.name,query:WT(i.bundledQuery),readTime:tt(i.readTime)}}(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.overlays=new Q(I.comparator),this.ls=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Wt();return m.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.we(e,t,r)}),m.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(i)),m.resolve()}getOverlaysForCollection(e,t,i){const s=Wt(),r=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return m.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Q((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=Wt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Wt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return m.resolve(a)}we(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new ET(t,i));let r=this.ls.get(t);r===void 0&&(r=R(),this.ls.set(t,r)),this.ls.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.fs=new Te(se.ds),this.ws=new Te(se._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const i=new se(e,t);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.ys(new se(e,t))}ps(e,t){e.forEach(i=>this.removeReference(i,t))}Is(e){const t=new I(new z([])),i=new se(t,e),s=new se(t,e+1),r=[];return this.ws.forEachInRange([i,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new I(new z([])),i=new se(t,e),s=new se(t,e+1);let r=R();return this.ws.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new se(e,0),i=this.fs.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class se{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return I.comparator(e.key,t.key)||x(e.As,t.As)}static _s(e,t){return x(e.As,t.As)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Te(se.ds)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wT(r,t,i,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new se(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.bs(i),r=s<0?0:s;return m.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new se(t,0),s=new se(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const a=this.Ps(o.As);r.push(a)}),m.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Te(x);return t.forEach(s=>{const r=new se(s,0),o=new se(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{i=i.add(a.As)})}),m.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;I.isDocumentKey(r)||(r=r.child(""));const o=new se(new I(r),0);let a=new Te(x);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),m.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){K(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return m.forEach(t.mutations,s=>{const r=new se(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,t){const i=new se(t,0),s=this.Rs.firstAfterOrEqual(i);return m.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.Ds=e,this.docs=new Q(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ds(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return m.resolve(i?i.document.mutableCopy():ge.newInvalidDocument(t))}getEntries(e,t){let i=_t();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ge.newInvalidDocument(s))}),m.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=_t();const o=t.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||$E(VE(u),i)<=0||(s.has(u.key)||Zr(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return m.resolve(r)}getAllFromCollectionGroup(e,t,i,s){S()}Cs(e,t){return m.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new tI(this)}getSize(e){return m.resolve(this.size)}}class tI extends GT{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),m.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.persistence=e,this.xs=new ti(t=>kc(t),bc),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Ns=0,this.ks=new xc,this.targetCount=0,this.Ms=Vn.kn()}forEachTarget(e,t){return this.xs.forEach((i,s)=>t(s)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Ns&&(this.Ns=t),m.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Vn(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Fn(t),m.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),m.waitFor(r).next(()=>s)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const i=this.xs.get(t)||null;return m.resolve(i)}addMatchingKeys(e,t,i){return this.ks.gs(t,i),m.resolve()}removeMatchingKeys(e,t,i){this.ks.ps(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),m.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),m.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ks.Es(t);return m.resolve(i)}containsKey(e,t){return m.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t){this.$s={},this.overlays={},this.Os=new Ic(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new nI(this),this.indexManager=new zT,this.remoteDocumentCache=function(i){return new eI(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new HT(t),this.qs=new XT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new JT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.$s[e.toKey()];return i||(i=new ZT(t,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,i){T("MemoryPersistence","Starting transaction:",e);const s=new sI(this.Os.next());return this.referenceDelegate.Us(),i(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(e,t){return m.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,t)))}}class sI extends qE{constructor(e){super(),this.currentSequenceNumber=e}}class Lc{constructor(e){this.persistence=e,this.Qs=new xc,this.js=null}static zs(e){return new Lc(e)}get Ws(){if(this.js)return this.js;throw S()}addReference(e,t,i){return this.Qs.addReference(i,t),this.Ws.delete(i.toString()),m.resolve()}removeReference(e,t,i){return this.Qs.removeReference(i,t),this.Ws.add(i.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),m.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ws,i=>{const s=I.fromPath(i);return this.Hs(e,s).next(r=>{r||t.removeEntry(s,k.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(i=>{i?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return m.or([()=>m.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Fi=i,this.Bi=s}static Li(e,t){let i=R(),s=R();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Fc(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,i,s){return this.Ki(e,t).next(r=>r||this.Gi(e,t,s,i)).next(r=>r||this.Qi(e,t))}Ki(e,t){if(Nu(t))return m.resolve(null);let i=mt(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ma(t,null,"F"),i=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=R(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.ji(t,a);return this.zi(t,l,o,c.readTime)?this.Ki(e,ma(t,null,"F")):this.Wi(e,l,t,c)}))})))}Gi(e,t,i,s){return Nu(t)||s.isEqual(k.min())?this.Qi(e,t):this.Ui.getDocuments(e,i).next(r=>{const o=this.ji(t,r);return this.zi(t,o,i,s)?this.Qi(e,t):(wu()<=M.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_a(t)),this.Wi(e,o,t,UE(s,-1)))})}ji(e,t){let i=new Te(ap(e));return t.forEach((s,r)=>{Zr(e,r)&&(i=i.add(r))}),i}zi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,t){return wu()<=M.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",_a(t)),this.Ui.getDocumentsMatchingQuery(e,t,Nt.min())}Wi(e,t,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t,i,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new Q(x),this.Yi=new ti(r=>kc(r),bc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YT(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function aI(n,e,t,i){return new oI(n,e,t,i)}async function bp(n,e){const t=b(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.tr(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=R();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(i,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function cI(n,e){const t=b(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=m.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(g=>{const E=c.docVersions.get(f);K(E!==null),g.version.compareTo(E)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Rp(n){const e=b(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function lI(n,e){const t=b(n),i=e.snapshotVersion;let s=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});s=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ce.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(g,E,v){return g.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,f,u)&&a.push(t.Bs.updateTargetData(r,f))});let c=_t(),l=R();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(uI(r,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!i.isEqual(k.min())){const u=t.Bs.getLastRemoteSnapshotVersion(r).next(h=>t.Bs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return m.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.Ji=s,r))}function uI(n,e,t){let i=R(),s=R();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=_t();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(k.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:s}})}function hI(n,e){const t=b(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function dI(n,e){const t=b(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Bs.getTargetData(i,e).next(r=>r?(s=r,m.resolve(s)):t.Bs.allocateTargetId(i).next(o=>(s=new St(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Bs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(i.targetId,i),t.Yi.set(e,i.targetId)),i})}async function Ta(n,e,t){const i=b(n),s=i.Ji.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ps(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function Bu(n,e,t){const i=b(n);let s=k.min(),r=R();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=b(a),h=u.Yi.get(l);return h!==void 0?m.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(i,o,mt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,t?s:k.min(),t?r:R())).next(a=>(fI(i,sT(e),a),{documents:a,ir:r})))}function fI(n,e,t){let i=n.Xi.get(e)||k.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.Xi.set(e,i)}class qu{constructor(){this.activeTargetIds=uT()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pI{constructor(){this.Hr=new qu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,i){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new qu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps=null;function Po(){return Ps===null?Ps=268435456+Math.round(2147483648*Math.random()):Ps++,"0x"+Ps.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="WebChannelConnection";class yI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,i,s,r){const o=Po(),a=this.To(e,t);T("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.Eo(c,s,r),this.Ao(e,a,c,i).then(l=>(T("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw xn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}vo(e,t,i,s,r,o){return this.Io(e,t,i,s,r)}Eo(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}To(e,t){const i=mI[e];return`${this.mo}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,i,s){const r=Po();return new Promise((o,a)=>{const c=new kE;c.setWithCredentials(!0),c.listenOnce(CE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Do.NO_ERROR:const u=c.getResponseJson();T(fe,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Do.TIMEOUT:T(fe,`RPC '${e}' ${r} timed out`),a(new w(p.DEADLINE_EXCEEDED,"Request time out"));break;case Do.HTTP_ERROR:const h=c.getStatus();if(T(fe,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(v)>=0?v:p.UNKNOWN}(f.status);a(new w(g,f.message))}else a(new w(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(p.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{T(fe,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);T(fe,`RPC '${e}' ${r} sending request:`,s),c.send(t,"POST",l,i,15)})}Ro(e,t,i){const s=Po(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TE(),a=IE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new AE({})),this.Eo(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const u=r.join("");T(fe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new _I({ro:v=>{f?T(fe,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(T(fe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),T(fe,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},oo:()=>h.close()}),E=(v,L,$)=>{v.listen(L,U=>{try{$(U)}catch(q){setTimeout(()=>{throw q},0)}})};return E(h,Rs.EventType.OPEN,()=>{f||T(fe,`RPC '${e}' stream ${s} transport opened.`)}),E(h,Rs.EventType.CLOSE,()=>{f||(f=!0,T(fe,`RPC '${e}' stream ${s} transport closed`),g.wo())}),E(h,Rs.EventType.ERROR,v=>{f||(f=!0,xn(fe,`RPC '${e}' stream ${s} transport errored:`,v),g.wo(new w(p.UNAVAILABLE,"The operation could not be completed")))}),E(h,Rs.EventType.MESSAGE,v=>{var L;if(!f){const $=v.data[0];K(!!$);const U=$,q=U.error||((L=U[0])===null||L===void 0?void 0:L.error);if(q){T(fe,`RPC '${e}' stream ${s} received error:`,q);const Oe=q.status;let Ue=function($t){const dn=J[$t];if(dn!==void 0)return vp(dn)}(Oe),Vt=q.message;Ue===void 0&&(Ue=p.INTERNAL,Vt="Unknown error status: "+Oe+" with message "+q.message),f=!0,g.wo(new w(Ue,Vt)),h.close()}else T(fe,`RPC '${e}' stream ${s} received:`,$),g._o($)}}),E(a,SE.STAT_EVENT,v=>{v.stat===yu.PROXY?T(fe,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===yu.NOPROXY&&T(fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function Mo(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){return new NT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,t-i);s>0&&T("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t,i,s,r,o,a,c){this.ii=e,this.$o=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Np(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(gt(t.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===t&&this.Zo(i,s)},i=>{e(()=>{const s=new w(p.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,t){const i=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return T("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vI extends Dp{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=PT(this.serializer,e),i=function(s){if(!("targetChange"in s))return k.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?k.min():r.readTime?tt(r.readTime):k.min()}(e);return this.listener.nu(t,i)}su(e){const t={};t.database=Ea(this.serializer),t.addTarget=function(s,r){let o;const a=r.target;if(o=pa(a)?{documents:LT(s,a)}:{query:FT(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Tp(s,r.resumeToken);const c=ya(s,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(k.min())>0){o.readTime=fr(s,r.snapshotVersion.toTimestamp());const c=ya(s,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const i=VT(this.serializer,e);i&&(t.labels=i),this.Wo(t)}iu(e){const t={};t.database=Ea(this.serializer),t.removeTarget=e,this.Wo(t)}}class wI extends Dp{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=xT(e.writeResults,e.commitTime),i=tt(e.commitTime);return this.listener.cu(i,t)}return K(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ea(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>MT(this.serializer,i))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(p.UNKNOWN,s.toString())})}vo(e,t,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,t,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(p.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class TI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(gt(t),this.mu=!1):T("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{ln(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c.vu.add(4),await _s(c),c.bu.set("Unknown"),c.vu.delete(4),await so(c)}(this))})}),this.bu=new TI(i,s)}}async function so(n){if(ln(n))for(const e of n.Ru)await e(!0)}async function _s(n){for(const e of n.Ru)await e(!1)}function Op(n,e){const t=b(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),$c(t)?Vc(t):ni(t).Ko()&&Uc(t,e))}function Pp(n,e){const t=b(n),i=ni(t);t.Au.delete(e),i.Ko()&&Mp(t,e),t.Au.size===0&&(i.Ko()?i.jo():ln(t)&&t.bu.set("Unknown"))}function Uc(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(k.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ni(n).su(e)}function Mp(n,e){n.Vu.qt(e),ni(n).iu(e)}function Vc(n){n.Vu=new AT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),ni(n).start(),n.bu.gu()}function $c(n){return ln(n)&&!ni(n).Uo()&&n.Au.size>0}function ln(n){return b(n).vu.size===0}function xp(n){n.Vu=void 0}async function CI(n){n.Au.forEach((e,t)=>{Uc(n,e)})}async function SI(n,e){xp(n),$c(n)?(n.bu.Iu(e),Vc(n)):n.bu.set("Unknown")}async function AI(n,e,t){if(n.bu.set("Online"),e instanceof Ep&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Au.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Au.delete(o),i.Vu.removeTarget(o))}(n,e)}catch(i){T("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await pr(n,i)}else if(e instanceof Ws?n.Vu.Ht(e):e instanceof wp?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(k.min()))try{const i=await Rp(n.localStore);t.compareTo(i)>=0&&await function(s,r){const o=s.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Au.get(c);l&&s.Au.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const l=s.Au.get(a);if(!l)return;s.Au.set(a,l.withResumeToken(Ce.EMPTY_BYTE_STRING,l.snapshotVersion)),Mp(s,a);const u=new St(l.target,a,c,l.sequenceNumber);Uc(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){T("RemoteStore","Failed to raise snapshot:",i),await pr(n,i)}}async function pr(n,e,t){if(!ps(e))throw e;n.vu.add(1),await _s(n),n.bu.set("Offline"),t||(t=()=>Rp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await so(n)})}function Lp(n,e){return e().catch(t=>pr(n,t,e))}async function ro(n){const e=b(n),t=Ot(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;kI(e);)try{const s=await hI(e.localStore,i);if(s===null){e.Eu.length===0&&t.jo();break}i=s.batchId,bI(e,s)}catch(s){await pr(e,s)}Fp(e)&&Up(e)}function kI(n){return ln(n)&&n.Eu.length<10}function bI(n,e){n.Eu.push(e);const t=Ot(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function Fp(n){return ln(n)&&!Ot(n).Uo()&&n.Eu.length>0}function Up(n){Ot(n).start()}async function RI(n){Ot(n).hu()}async function NI(n){const e=Ot(n);for(const t of n.Eu)e.uu(t.mutations)}async function DI(n,e,t){const i=n.Eu.shift(),s=Dc.from(i,e,t);await Lp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ro(n)}async function OI(n,e){e&&Ot(n).ou&&await async function(t,i){if(s=i.code,IT(s)&&s!==p.ABORTED){const r=t.Eu.shift();Ot(t).Qo(),await Lp(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,i)),await ro(t)}var s}(n,e),Fp(n)&&Up(n)}async function Hu(n,e){const t=b(n);t.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const i=ln(t);t.vu.add(3),await _s(t),i&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await so(t)}async function PI(n,e){const t=b(n);e?(t.vu.delete(2),await so(t)):e||(t.vu.add(2),await _s(t),t.bu.set("Unknown"))}function ni(n){return n.Su||(n.Su=function(e,t,i){const s=b(e);return s.fu(),new vI(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{uo:CI.bind(null,n),ao:SI.bind(null,n),nu:AI.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),$c(n)?Vc(n):n.bu.set("Unknown")):(await n.Su.stop(),xp(n))})),n.Su}function Ot(n){return n.Du||(n.Du=function(e,t,i){const s=b(e);return s.fu(),new wI(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{uo:RI.bind(null,n),ao:OI.bind(null,n),au:NI.bind(null,n),cu:DI.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await ro(n)):(await n.Du.stop(),n.Eu.length>0&&(T("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new Bc(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qc(n,e){if(gt("AsyncQueue",`${e}: ${n}`),ps(n))return new w(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.comparator=e?(t,i)=>e(t,i)||I.comparator(t.key,i.key):(t,i)=>I.comparator(t.key,i.key),this.keyedMap=_i(),this.sortedSet=new Q(this.comparator)}static emptySet(e){return new bn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new bn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.Cu=new Q(I.comparator)}track(e){const t=e.doc.key,i=this.Cu.get(t);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(t):e.type===1&&i.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):S():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,i)=>{e.push(i)}),e}}class $n{constructor(e,t,i,s,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new $n(e,t,bn.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.Nu=void 0,this.listeners=[]}}class xI{constructor(){this.queries=new ti(e=>op(e),Jr),this.onlineState="Unknown",this.ku=new Set}}async function jc(n,e){const t=b(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new MI),s)try{r.Nu=await t.onListen(i)}catch(o){const a=qc(o,`Initialization of query '${_a(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.Mu(t.onlineState),r.Nu&&e.$u(r.Nu)&&Wc(t)}async function Hc(n,e){const t=b(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function LI(n,e){const t=b(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.$u(s)&&(i=!0);o.Nu=s}}i&&Wc(t)}function FI(n,e,t){const i=b(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function Wc(n){n.ku.forEach(e=>{e.next()})}class zc{constructor(e,t,i){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new $n(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.key=e}}class $p{constructor(e){this.key=e}}class UI{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=R(),this.mutatedKeys=R(),this.tc=ap(e),this.ec=new bn(this.tc)}get nc(){return this.Yu}sc(e,t){const i=t?t.ic:new Wu,s=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Zr(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),E=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==E&&(i.track({type:3,doc:f}),v=!0):this.rc(d,f)||(i.track({type:2,doc:f}),v=!0,(c&&this.tc(f,c)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),v=!0):d&&!f&&(i.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(f?(o=o.add(f),r=E?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{ec:o,ic:i,zi:a,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((l,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(i);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new $n(this.query,e.ec,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Wu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=R(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const t=[];return e.forEach(i=>{this.Zu.has(i)||t.push(new $p(i))}),this.Zu.forEach(i=>{e.has(i)||t.push(new Vp(i))}),t}hc(e){this.Yu=e.ir,this.Zu=R();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return $n.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class VI{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class $I{constructor(e){this.key=e,this.fc=!1}}class BI{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ti(a=>op(a),Jr),this._c=new Map,this.mc=new Set,this.gc=new Q(I.comparator),this.yc=new Map,this.Ic=new xc,this.Tc={},this.Ec=new Map,this.Ac=Vn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function qI(n,e){const t=JI(n);let i,s;const r=t.wc.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const o=await dI(t.localStore,mt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await jI(t,e,i,a==="current",o.resumeToken),t.isPrimaryClient&&Op(t.remoteStore,o)}return s}async function jI(n,e,t,i,s){n.Rc=(h,d,f)=>async function(g,E,v,L){let $=E.view.sc(v);$.zi&&($=await Bu(g.localStore,E.query,!1).then(({documents:Oe})=>E.view.sc(Oe,$)));const U=L&&L.targetChanges.get(E.targetId),q=E.view.applyChanges($,g.isPrimaryClient,U);return Ku(g,E.targetId,q.cc),q.snapshot}(n,h,d,f);const r=await Bu(n.localStore,e,!0),o=new UI(e,r.ir),a=o.sc(r.documents),c=ms.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);Ku(n,t,l.cc);const u=new VI(e,t,o);return n.wc.set(e,u),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),l.snapshot}async function HI(n,e){const t=b(n),i=t.wc.get(e),s=t._c.get(i.targetId);if(s.length>1)return t._c.set(i.targetId,s.filter(r=>!Jr(r,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await Ta(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),Pp(t.remoteStore,i.targetId),Ia(t,i.targetId)}).catch(fs)):(Ia(t,i.targetId),await Ta(t.localStore,i.targetId,!0))}async function WI(n,e,t){const i=ZI(n);try{const s=await function(r,o){const a=b(r),c=te.now(),l=o.reduce((d,f)=>d.add(f.key),R());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=_t(),g=R();return a.Zi.getEntries(d,l).next(E=>{f=E,f.forEach((v,L)=>{L.isValidDocument()||(g=g.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(E=>{u=E;const v=[];for(const L of o){const $=yT(L,u.get(L.key).overlayedDocument);$!=null&&v.push(new cn(L.key,$,Jf($.value.mapValue),et.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(E=>{h=E;const v=E.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,E.batchId,v)})}).then(()=>({batchId:h.batchId,changes:lp(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new Q(x)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(i,s.batchId,t),await ys(i,s.changes),await ro(i.remoteStore)}catch(s){const r=qc(s,"Failed to persist write");t.reject(r)}}async function Bp(n,e){const t=b(n);try{const i=await lI(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.yc.get(r);o&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?K(o.fc):s.removedDocuments.size>0&&(K(o.fc),o.fc=!1))}),await ys(t,i,e)}catch(i){await fs(i)}}function zu(n,e,t){const i=b(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=b(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Wc(a)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function zI(n,e,t){const i=b(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.yc.get(e),r=s&&s.key;if(r){let o=new Q(I.comparator);o=o.insert(r,ge.newNoDocument(r,k.min()));const a=R().add(r),c=new no(k.min(),new Map,new Q(x),o,a);await Bp(i,c),i.gc=i.gc.remove(r),i.yc.delete(e),Kc(i)}else await Ta(i.localStore,e,!1).then(()=>Ia(i,e,t)).catch(fs)}async function KI(n,e){const t=b(n),i=e.batch.batchId;try{const s=await cI(t.localStore,e);jp(t,i,null),qp(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ys(t,s)}catch(s){await fs(s)}}async function GI(n,e,t){const i=b(n);try{const s=await function(r,o){const a=b(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(K(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);jp(i,e,t),qp(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ys(i,s)}catch(s){await fs(s)}}function qp(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function jp(n,e,t){const i=b(n);let s=i.Tc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}function Ia(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n._c.get(e))n.wc.delete(i),t&&n.dc.Pc(i,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(i=>{n.Ic.containsKey(i)||Hp(n,i)})}function Hp(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(Pp(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),Kc(n))}function Ku(n,e,t){for(const i of t)i instanceof Vp?(n.Ic.addReference(i.key,e),QI(n,i)):i instanceof $p?(T("SyncEngine","Document no longer in limbo: "+i.key),n.Ic.removeReference(i.key,e),n.Ic.containsKey(i.key)||Hp(n,i.key)):S()}function QI(n,e){const t=e.key,i=t.path.canonicalString();n.gc.get(t)||n.mc.has(i)||(T("SyncEngine","New document in limbo: "+t),n.mc.add(i),Kc(n))}function Kc(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new I(z.fromString(e)),i=n.Ac.next();n.yc.set(i,new $I(t)),n.gc=n.gc.insert(t,i),Op(n.remoteStore,new St(mt(Yr(t.path)),i,"TargetPurposeLimboResolution",Ic.ct))}}async function ys(n,e,t){const i=b(n),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,c)=>{o.push(i.Rc(c,e,t).then(l=>{if((l||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Fc.Li(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.dc.nu(s),await async function(a,c){const l=b(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>m.forEach(c,h=>m.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>m.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ps(u))throw u;T("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,g)}}}(i.localStore,r))}async function YI(n,e){const t=b(n);if(!t.currentUser.isEqual(e)){T("SyncEngine","User change. New user:",e.toKey());const i=await bp(t.localStore,e);t.currentUser=e,function(s,r){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new w(p.CANCELLED,r))})}),s.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ys(t,i.er)}}function XI(n,e){const t=b(n),i=t.yc.get(e);if(i&&i.fc)return R().add(i.key);{let s=R();const r=t._c.get(e);if(!r)return s;for(const o of r){const a=t.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function JI(n){const e=b(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zI.bind(null,e),e.dc.nu=LI.bind(null,e.eventManager),e.dc.Pc=FI.bind(null,e.eventManager),e}function ZI(n){const e=b(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GI.bind(null,e),e}class Gu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=io(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return aI(this.persistence,new rI,e.initialUser,this.serializer)}createPersistence(e){return new iI(Lc.zs,this.serializer)}createSharedClientState(e){return new pI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class e0{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>zu(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=YI.bind(null,this.syncEngine),await PI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new xI}createDatastore(e){const t=io(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new yI(s));var s;return function(r,o,a,c){return new EI(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>zu(this.syncEngine,a,0),o=ju.D()?new ju:new gI,new II(t,i,s,r,o);var t,i,s,r,o}createSyncEngine(e,t){return function(i,s,r,o,a,c,l){const u=new BI(i,s,r,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);T("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await _s(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=pe.UNAUTHENTICATED,this.clientId=Qf.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{T("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(T("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=qc(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function xo(n,e){n.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await bp(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Qu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await i0(n);T("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>Hu(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Hu(e.remoteStore,r)),n._onlineComponents=e}function n0(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function i0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!n0(t))throw t;xn("Error using user provided cache. Falling back to memory cache: "+t),await xo(n,new Gu)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await xo(n,new Gu);return n._offlineComponents}async function Wp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await Qu(n,n._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await Qu(n,new e0))),n._onlineComponents}function s0(n){return Wp(n).then(e=>e.syncEngine)}async function gr(n){const e=await Wp(n),t=e.eventManager;return t.onListen=qI.bind(null,e.syncEngine),t.onUnlisten=HI.bind(null,e.syncEngine),t}function r0(n,e,t={}){const i=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new Gc({next:h=>{r.enqueueAndForget(()=>Hc(s,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new w(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new w(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new zc(Yr(o.path),l,{includeMetadataChanges:!0,Ku:!0});return jc(s,u)}(await gr(n),n.asyncQueue,e,t,i)),i.promise}function o0(n,e,t={}){const i=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new Gc({next:h=>{r.enqueueAndForget(()=>Hc(s,u)),h.fromCache&&a.source==="server"?c.reject(new w(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new zc(o,l,{includeMetadataChanges:!0,Ku:!0});return jc(s,u)}(await gr(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n,e,t){if(!t)throw new w(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function a0(n,e,t,i){if(e===!0&&i===!0)throw new w(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Xu(n){if(!I.isDocumentKey(n))throw new w(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ju(n){if(I.isDocumentKey(n))throw new w(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":S()}function nt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new w(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oo(n);throw new w(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new w(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}a0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zp((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,i}}class ao{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zu(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new RE;switch(t.type){case"firstParty":return new PE(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new w(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Yu.get(e);t&&(T("ComponentProvider","Removing Datastore"),Yu.delete(e),t.terminate())}(this),Promise.resolve()}}function c0(n,e,t,i={}){var s;const r=(n=nt(n,ao))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=pe.MOCK_USER;else{a=Ba(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new w(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new pe(l)}n._authCredentials=new NE(new Gf(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class Ut{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ut(this.firestore,e,this._query)}}class bt extends Ut{constructor(e,t,i){super(e,t,Yr(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new I(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function Fk(n,e,...t){if(n=Y(n),Kp("collection","path",e),n instanceof ao){const i=z.fromString(e,...t);return Ju(i),new bt(n,null,i)}{if(!(n instanceof Re||n instanceof bt))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(z.fromString(e,...t));return Ju(i),new bt(n.firestore,null,i)}}function l0(n,e,...t){if(n=Y(n),arguments.length===1&&(e=Qf.A()),Kp("doc","path",e),n instanceof ao){const i=z.fromString(e,...t);return Xu(i),new Re(n,null,new I(i))}{if(!(n instanceof Re||n instanceof bt))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(z.fromString(e,...t));return Xu(i),new Re(n.firestore,n instanceof bt?n.converter:null,new I(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Np(this,"async_queue_retry"),this.Xc=()=>{const t=Mo();t&&T("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Mo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Mo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new ht;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ps(e))throw e;T("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw gt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=t,t}enqueueAfterDelay(e,t,i){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const s=Bc.createAndSchedule(this,e,t,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&S()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function eh(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of t)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class nn extends ao{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new u0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gp(this),this._firestoreClient.terminate()}}function h0(n,e){const t=typeof n=="object"?n:Kn(),i=typeof n=="string"?n:e||"(default)",s=Mt(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=br("firestore");r&&c0(s,...r)}return s}function co(n){return n._firestoreClient||Gp(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Gp(n){var e,t,i;const s=n._freezeSettings(),r=function(o,a,c,l){return new WE(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,zp(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new t0(n._authCredentials,n._appCheckCredentials,n._queue,r),((t=s.cache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((i=s.cache)===null||i===void 0?void 0:i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bn(Ce.fromBase64String(e))}catch(t){throw new w(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bn(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new w(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new w(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new w(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=/^__.*__$/;class f0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new gs(e,this.data,t,this.fieldTransforms)}}function Qp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Jc{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:i,la:!1});return s.fa(e),s}da(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:i,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return mr(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Qp(this.ca)&&d0.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class p0{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||io(e)}ya(e,t,i,s=!1){return new Jc({ca:e,methodName:t,ga:i,path:ye.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yp(n){const e=n._freezeSettings(),t=io(n._databaseId);return new p0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function g0(n,e,t,i,s,r={}){const o=n.ya(r.merge||r.mergeFields?2:0,e,t,s);Zp("Data must be an object, but it was:",o,i);const a=Xp(i,o);let c,l;if(r.merge)c=new $e(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=_0(e,h,t);if(!o.contains(d))throw new w(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);v0(u,d)||u.push(d)}c=new $e(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new f0(new Me(a),c,l)}class Zc extends Yc{_toFieldTransform(e){return new pT(e.path,new Wi)}isEqual(e){return e instanceof Zc}}function m0(n,e,t,i=!1){return el(t,n.ya(i?4:3,e))}function el(n,e){if(Jp(n=Y(n)))return Zp("Unsupported field value:",e,n),Xp(n,e);if(n instanceof Yc)return function(t,i){if(!Qp(i.ca))throw i._a(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,i){const s=[];let r=0;for(const o of t){let a=el(o,i.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=Y(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return hT(i.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=te.fromDate(t);return{timestampValue:fr(i.serializer,s)}}if(t instanceof te){const s=new te(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:fr(i.serializer,s)}}if(t instanceof Xc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Bn)return{bytesValue:Tp(i.serializer,t._byteString)};if(t instanceof Re){const s=i.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw i._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mc(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i._a(`Unsupported field value: ${oo(t)}`)}(n,e)}function Xp(n,e){const t={};return Yf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zn(n,(i,s)=>{const r=el(s,e.ha(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function Jp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof te||n instanceof Xc||n instanceof Bn||n instanceof Re||n instanceof Yc)}function Zp(n,e,t){if(!Jp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=oo(t);throw i==="an object"?e._a(n+" a custom object"):e._a(n+" "+i)}}function _0(n,e,t){if((e=Y(e))instanceof Qc)return e._internalPath;if(typeof e=="string")return eg(n,e);throw mr("Field path arguments must be of type string or ",n,!1,void 0,t)}const y0=new RegExp("[~\\*/\\[\\]]");function eg(n,e,t){if(e.search(y0)>=0)throw mr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qc(...e.split("."))._internalPath}catch{throw mr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function mr(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new w(p.INVALID_ARGUMENT,a+n+c)}function v0(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new w0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class w0 extends tg{data(){return super.data()}}function tl(n,e){return typeof e=="string"?eg(n,e):e instanceof Qc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new w(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nl{}class ig extends nl{}function Uk(n,e,...t){let i=[];e instanceof nl&&i.push(e),i=i.concat(t),function(s){const r=s.filter(a=>a instanceof sl).length,o=s.filter(a=>a instanceof il).length;if(r>1||r>0&&o>0)throw new w(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class il extends ig{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new il(e,t,i)}_apply(e){const t=this._parse(e);return sg(e._query,t),new Ut(e.firestore,e.converter,ga(e._query,t))}_parse(e){const t=Yp(e.firestore);return function(s,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){nh(u,l);const d=[];for(const f of u)d.push(th(a,s,f));h={arrayValue:{values:d}}}else h=th(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||nh(u,l),h=m0(o,r,u,l==="in"||l==="not-in");return ee.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class sl extends nl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sl(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)sg(r,a),r=ga(r,a)}(e._query,t),new Ut(e.firestore,e.converter,ga(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class rl extends ig{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new rl(e,t)}_apply(e){const t=function(i,s,r){if(i.startAt!==null)throw new w(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new w(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new An(s,r);return function(a,c){if(Rc(a)===null){const l=Xr(a);l!==null&&rg(a,l,c.field)}}(i,o),o}(e._query,this._field,this._direction);return new Ut(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new ei(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Vk(n,e="asc"){const t=e,i=tl("orderBy",n);return rl._create(i,t)}function th(n,e,t){if(typeof(t=Y(t))=="string"){if(t==="")throw new w(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rp(e)&&t.indexOf("/")!==-1)throw new w(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(z.fromString(t));if(!I.isDocumentKey(i))throw new w(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Cu(n,new I(i))}if(t instanceof Re)return Cu(n,t._key);throw new w(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oo(t)}.`)}function nh(n,e){if(!Array.isArray(n)||n.length===0)throw new w(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sg(n,e){if(e.isInequality()){const i=Xr(n),s=e.field;if(i!==null&&!i.isEqual(s))throw new w(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=Rc(n);r!==null&&rg(n,s,r)}const t=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new w(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new w(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function rg(n,e,t){if(!t.isEqual(e))throw new w(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class E0{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Zn(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new Xc(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Sc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(qi(e));default:return null}}convertTimestamp(e){const t=Dt(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=z.fromString(e);K(kp(i));const s=new ji(i.get(1),i.get(3)),r=new I(i.popFirst(5));return s.isEqual(t)||gt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class og extends tg{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(tl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class zs extends og{data(e={}){return super.data(e)}}class ag{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new vi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new zs(this._firestore,this._userDataWriter,i.key,i,new vi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new w(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new zs(i._firestore,i._userDataWriter,o.doc.key,o.doc,new vi(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new zs(i._firestore,i._userDataWriter,o.doc.key,o.doc,new vi(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:I0(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function I0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(n){n=nt(n,Re);const e=nt(n.firestore,nn);return r0(co(e),n._key).then(t=>lg(e,n,t))}class ol extends E0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function Bk(n){n=nt(n,Ut);const e=nt(n.firestore,nn),t=co(e),i=new ol(e);return ng(n._query),o0(t,n._query).then(s=>new ag(e,i,n,s))}function qk(n){return cg(nt(n.firestore,nn),[new Nc(n._key,et.none())])}function jk(n,e){const t=nt(n.firestore,nn),i=l0(n),s=T0(n.converter,e);return cg(t,[g0(Yp(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,et.exists(!1))]).then(()=>i)}function Hk(n,...e){var t,i,s;n=Y(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||eh(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(eh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(n instanceof Re)l=nt(n.firestore,nn),u=Yr(n._key.path),c={next:h=>{e[o]&&e[o](lg(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=nt(n,Ut);l=nt(h.firestore,nn),u=h._query;const d=new ol(l);c={next:f=>{e[o]&&e[o](new ag(l,d,h,f))},error:e[o+1],complete:e[o+2]},ng(n._query)}return function(h,d,f,g){const E=new Gc(g),v=new zc(d,E,f);return h.asyncQueue.enqueueAndForget(async()=>jc(await gr(h),v)),()=>{E.Dc(),h.asyncQueue.enqueueAndForget(async()=>Hc(await gr(h),v))}}(co(l),u,a,c)}function cg(n,e){return function(t,i){const s=new ht;return t.asyncQueue.enqueueAndForget(async()=>WI(await s0(t),i,s)),s.promise}(co(n),e)}function lg(n,e,t){const i=t.docs.get(e._key),s=new ol(n);return new og(n,s,e._key,i,new vi(t.hasPendingWrites,t.fromCache),e.converter)}function Wk(){return new Zc("serverTimestamp")}(function(n,e=!0){(function(t){Jn=t})(xt),He(new Le("firestore",(t,{instanceIdentifier:i,options:s})=>{const r=t.getProvider("app").getImmediate(),o=new nn(new DE(t.getProvider("auth-internal")),new xE(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ji(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Ae(vu,"3.13.0",n),Ae(vu,"3.13.0","esm2017")})();const ih="@firebase/database",sh="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ug="";function C0(n){ug=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:bi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new S0(e)}}catch{}return new A0},zt=hg("localStorage"),Ca=hg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Ji("@firebase/database"),k0=function(){let n=1;return function(){return n++}}(),dg=function(n){const e=r_(n),t=new e_;t.update(e);const i=t.digest();return kr.encodeByteArray(i)},vs=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=vs.apply(null,i):typeof i=="object"?e+=he(i):e+=i,e+=" "}return e};let Qt=null,rh=!0;const b0=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Rn.logLevel=M.VERBOSE,Qt=Rn.log.bind(Rn),e&&Ca.set("logging_enabled",!0)):typeof n=="function"?Qt=n:(Qt=null,Ca.remove("logging_enabled"))},me=function(...n){if(rh===!0&&(rh=!1,Qt===null&&Ca.get("logging_enabled")===!0&&b0(!0)),Qt){const e=vs.apply(null,n);Qt(e)}},ws=function(n){return function(...e){me(n,...e)}},Sa=function(...n){const e="FIREBASE INTERNAL ERROR: "+vs(...n);Rn.error(e)},yt=function(...n){const e=`FIREBASE FATAL ERROR: ${vs(...n)}`;throw Rn.error(e),new Error(e)},Ne=function(...n){const e="FIREBASE WARNING: "+vs(...n);Rn.warn(e)},R0=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fg=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},N0=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},qn="[MIN_NAME]",sn="[MAX_NAME]",ii=function(n,e){if(n===e)return 0;if(n===qn||e===sn)return-1;if(e===qn||n===sn)return 1;{const t=oh(n),i=oh(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},D0=function(n,e){return n===e?0:n<e?-1:1},li=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+he(e))},al=function(n){if(typeof n!="object"||n===null)return he(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=he(e[i]),t+=":",t+=al(n[e[i]]);return t+="}",t},pg=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Fe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const gg=function(n){_(!fg(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},O0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},P0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},M0=new RegExp("^-?(0*)\\d{1,10}$"),x0=-2147483648,L0=2147483647,oh=function(n){if(M0.test(n)){const e=Number(n);if(e>=x0&&e<=L0)return e}return null},Es=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ne("Exception was thrown by user callback.",t),e},Math.floor(0))}},F0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Si=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ne(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ne(e)}}class Nn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="5",mg="v",_g="s",yg="r",vg="f",wg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Eg="ls",Tg="p",Aa="ac",Ig="websocket",Cg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t,i,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function $0(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ag(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let i;if(e===Ig)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Cg)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$0(n)&&(t.ns=n.namespace);const s=[];return Fe(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.counters_={}}incrementCounter(e,t=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Bm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo={},Fo={};function ll(n){const e=n.toString();return Lo[e]||(Lo[e]=new B0),Lo[e]}function q0(n,e){const t=n.toString();return Fo[t]||(Fo[t]=e()),Fo[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Es(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="start",H0="close",W0="pLPCommand",z0="pRTLPCB",kg="id",bg="pw",Rg="ser",K0="cb",G0="seg",Q0="ts",Y0="d",X0="dframe",Ng=1870,Dg=30,J0=Ng-Dg,Z0=25e3,eC=3e4;class vn{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ws(e),this.stats_=ll(t),this.urlFn=c=>(this.appCheckToken&&(c[Aa]=this.appCheckToken),Ag(t,Cg,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new j0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eC)),N0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ul((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ah)this.id=a,this.password=c;else if(o===H0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ah]="t",i[Rg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[K0]=this.scriptTagHolder.uniqueCallbackIdentifier),i[mg]=cl,this.transportSessionId&&(i[_g]=this.transportSessionId),this.lastSessionId&&(i[Eg]=this.lastSessionId),this.applicationId&&(i[Tg]=this.applicationId),this.appCheckToken&&(i[Aa]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&wg.test(location.hostname)&&(i[yg]=vg);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vn.forceAllow_=!0}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){return vn.forceAllow_?!0:!vn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!O0()&&!P0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=he(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Jh(t),s=pg(i,J0);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[X0]="t",i[kg]=e,i[bg]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=he(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ul{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=k0(),window[W0+this.uniqueCallbackIdentifier]=e,window[z0+this.uniqueCallbackIdentifier]=t,this.myIFrame=ul.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){me("frame writing exception"),a.stack&&me(a.stack),me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||me("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kg]=this.myID,e[bg]=this.myPW,e[Rg]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dg+i.length<=Ng;){const o=this.pendingSegs.shift();i=i+"&"+G0+s+"="+o.seg+"&"+Q0+s+"="+o.ts+"&"+Y0+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Z0)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=16384,nC=45e3;let _r=null;typeof MozWebSocket!="undefined"?_r=MozWebSocket:typeof WebSocket!="undefined"&&(_r=WebSocket);class Ve{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ws(this.connId),this.stats_=ll(t),this.connURL=Ve.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[mg]=cl,typeof location!="undefined"&&location.hostname&&wg.test(location.hostname)&&(o[yg]=vg),t&&(o[_g]=t),i&&(o[Eg]=i),s&&(o[Aa]=s),r&&(o[Tg]=r),Ag(e,Ig,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let i;rd(),this.mySock=new _r(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ve.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&_r!==null&&!Ve.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=bi(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=he(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=pg(t,tC);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ve.responsesRequiredToBeHealthy=2;Ve.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vn,Ve]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ve&&Ve.isAvailable();let i=t&&!Ve.previouslyFailed();if(e.webSocketOnly&&(t||Ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ve];else{const s=this.transports_=[];for(const r of Gi.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Gi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=6e4,sC=5e3,rC=10*1024,oC=100*1024,Uo="t",ch="d",aC="s",lh="r",cC="e",uh="o",hh="a",dh="n",fh="p",lC="h";class uC{constructor(e,t,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ws("c:"+this.id+":"),this.transportManager_=new Gi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Si(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Uo in e){const t=e[Uo];t===hh?this.upgradeIfSecondaryHealthy_():t===lh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===uh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=li("t",e),i=li("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=li("t",e),i=li("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=li(Uo,e);if(ch in e){const i=e[ch];if(t===lC){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===dh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===aC?this.onConnectionShutdown_(i):t===lh?this.onReset_(i):t===cC?Sa("Server Error: "+i):t===uh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sa("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),cl!==i&&Ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Si(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Si(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Pg{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!qa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yr}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=32,gh=768;class G{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function B(){return new G("")}function O(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Pt(n){return n.pieces_.length-n.pieceNum_}function H(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new G(n.pieces_,e)}function Mg(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function hC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function xg(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Lg(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new G(e,0)}function oe(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof G)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new G(t,0)}function N(n){return n.pieceNum_>=n.pieces_.length}function xe(n,e){const t=O(n),i=O(e);if(t===null)return e;if(t===i)return xe(H(n),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Fg(n,e){if(Pt(n)!==Pt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Be(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Pt(n)>Pt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class dC{constructor(e,t){this.errorPrefix_=t,this.parts_=xg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Rr(this.parts_[i]);Ug(this)}}function fC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Rr(e),Ug(n)}function pC(n){const e=n.parts_.pop();n.byteLength_-=Rr(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ug(n){if(n.byteLength_>gh)throw new Error(n.errorPrefix_+"has a key path longer than "+gh+" bytes ("+n.byteLength_+").");if(n.parts_.length>ph)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ph+") or object contains a cycle "+qt(n))}function qt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Pg{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new hl}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=1e3,gC=60*5*1e3,mh=30*1e3,mC=1.3,_C=3e4,yC="server_kill",_h=3;class dt extends Og{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=dt.nextPersistentConnectionId_++,this.log_=ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ui,this.maxReconnectDelay_=gC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!rd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(he(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Yt,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;dt.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&vt(e,"w")){const i=On(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Jm(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Sa("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_C&&(this.reconnectDelay_=ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?me("getToken() completed but was canceled"):(me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new uC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{Ne(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(yC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ne(h),c())}}}interrupt(e){me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wo(this.interruptReasons_)&&(this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>al(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new G(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){me("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_h&&(this.reconnectDelay_=mh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){me("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_h&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ug.replace(/\./g,"-")]=1,qa()?e["framework.cordova"]=1:sd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yr.getInstance().currentlyOnline();return Wo(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new P(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new P(qn,e),s=new P(qn,t);return this.compare(i,s)!==0}minPost(){return P.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms;class Vg extends lo{static get __EMPTY_NODE(){return Ms}static set __EMPTY_NODE(e){Ms=e}compare(e,t){return ii(e.name,t.name)}isDefinedOn(e){throw Hn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return P.MIN}maxPost(){return new P(sn,Ms)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new P(e,Ms)}toString(){return".key"}}const Dn=new Vg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class re{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:re.RED,this.left=s!=null?s:ke.EMPTY_NODE,this.right=r!=null?r:ke.EMPTY_NODE}copy(e,t,i,s,r){return new re(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}re.RED=!0;re.BLACK=!1;class vC{copy(e,t,i,s,r){return this}insert(e,t,i){return new re(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ke{constructor(e,t=ke.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ke(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,re.BLACK,null,null))}remove(e){return new ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,re.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new xs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new xs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new xs(this.root_,null,this.comparator_,!0,e)}}ke.EMPTY_NODE=new vC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(n,e){return ii(n.name,e.name)}function dl(n,e){return ii(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;function EC(n){ka=n}const $g=function(n){return typeof n=="number"?"number:"+gg(n):"string:"+n},Bg=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else _(n===ka||n.isEmpty(),"priority of unexpected type.");_(n===ka||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh;class ie{constructor(e,t=ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bg(this.priorityNode_)}static set __childrenNodeConstructor(e){yh=e}static get __childrenNodeConstructor(){return yh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return N(e)?this:O(e)===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=O(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$g(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=gg(this.value_):e+=this.value_,this.lazyHash_=dg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ie.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ie.VALUE_TYPE_ORDER.indexOf(t),r=ie.VALUE_TYPE_ORDER.indexOf(i);return _(s>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qg,jg;function TC(n){qg=n}function IC(n){jg=n}class CC extends lo{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ii(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return P.MIN}maxPost(){return new P(sn,new ie("[PRIORITY-POST]",jg))}makePost(e,t){const i=qg(e);return new P(t,new ie("[PRIORITY-POST]",i))}toString(){return".priority"}}const ve=new CC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=Math.log(2);class AC{constructor(e){const t=r=>parseInt(Math.log(r)/SC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vr=function(n,e,t,i){n.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new re(d,h.node,re.BLACK,null,null);{const f=parseInt(u/2,10)+c,g=s(c,f),E=s(f+1,l);return h=n[f],d=t?t(h):h,new re(d,h.node,re.BLACK,g,E)}},r=function(c){let l=null,u=null,h=n.length;const d=function(g,E){const v=h-g,L=h;h-=g;const $=s(v+1,L),U=n[v],q=t?t(U):U;f(new re(q,U.node,E,null,$))},f=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const E=c.nextBitIsOne(),v=Math.pow(2,c.count-(g+1));E?d(v,re.BLACK):(d(v,re.BLACK),d(v,re.RED))}return u},o=new AC(n.length),a=r(o);return new ke(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo;const pn={};class ut{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(pn&&ve,"ChildrenNode.ts has not been loaded"),Vo=Vo||new ut({".priority":pn},{".priority":ve}),Vo}get(e){const t=On(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ke?t:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Dn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(P.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=vr(i,e.getCompare()):a=pn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new ut(u,l)}addToIndexes(e,t){const i=Qs(this.indexes_,(s,r)=>{const o=On(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),s===pn)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(P.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),vr(a,o.getCompare())}else return pn;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new P(e.name,a))),c.insert(e,e.node)}});return new ut(i,this.indexSet_)}removeFromIndexes(e,t){const i=Qs(this.indexes_,s=>{if(s===pn)return s;{const r=t.get(e.name);return r?s.remove(new P(e.name,r)):s}});return new ut(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;class F{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Bg(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return hi||(hi=new F(new ke(dl),null,ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hi}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?hi:t}}getChild(e){const t=O(e);return t===null?this:this.getImmediateChild(t).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new P(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?hi:this.priorityNode_;return new F(s,o,r)}}updateChild(e,t){const i=O(e);if(i===null)return t;{_(O(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(H(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(ve,(o,a)=>{t[o]=a.val(e),i++,r&&F.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$g(this.getPriority().val())+":"),this.forEachChild(ve,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":dg(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new P(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new P(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new P(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,P.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,P.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===Dn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Dn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ve),s=t.getIterator(ve);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kC extends F{constructor(){super(new ke(dl),F.EMPTY_NODE,ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Ts=new kC;Object.defineProperties(P,{MIN:{value:new P(qn,F.EMPTY_NODE)},MAX:{value:new P(sn,Ts)}});Vg.__EMPTY_NODE=F.EMPTY_NODE;ie.__childrenNodeConstructor=F;EC(Ts);IC(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=!0;function _e(n,e=null){if(n===null)return F.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ie(t,_e(e))}if(!(n instanceof Array)&&bC){const t=[];let i=!1;if(Fe(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=_e(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new P(o,c)))}}),t.length===0)return F.EMPTY_NODE;const r=vr(t,wC,o=>o.name,dl);if(i){const o=vr(t,ve.getCompare());return new F(r,_e(e),new ut({".priority":o},{".priority":ve}))}else return new F(r,_e(e),ut.Default)}else{let t=F.EMPTY_NODE;return Fe(n,(i,s)=>{if(vt(n,i)&&i.substring(0,1)!=="."){const r=_e(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(_e(e))}}TC(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC extends lo{constructor(e){super(),this.indexPath_=e,_(!N(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ii(e.name,t.name):r}makePost(e,t){const i=_e(e),s=F.EMPTY_NODE.updateChild(this.indexPath_,i);return new P(t,s)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new P(sn,e)}toString(){return xg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC extends lo{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ii(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return P.MIN}maxPost(){return P.MAX}makePost(e,t){const i=_e(e);return new P(t,i)}toString(){return".value"}}const DC=new NC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(n){return{type:"value",snapshotNode:n}}function PC(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function MC(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function vh(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function xC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qn}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new fl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ve?t="$priority":n.index_===DC?t="$value":n.index_===Dn?t="$key":(_(n.index_ instanceof RC,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=he(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=he(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+he(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=he(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+he(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Eh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ve&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Og{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ws("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=wr.getListenId_(e,i),a={};this.listens_[o]=a;const c=wh(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),On(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,t){const i=wr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=wh(e._queryParams),i=e._path.toString(),s=new Yt;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=bi(a.responseText)}catch{Ne("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Ne("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return{value:null,children:new Map}}function Hg(n,e,t){if(N(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=O(e);n.children.has(i)||n.children.set(i,Er());const s=n.children.get(i);e=H(e),Hg(s,e,t)}}function ba(n,e,t){n.value!==null?t(e,n.value):FC(n,(i,s)=>{const r=new G(e.toString()+"/"+i);ba(s,r,t)})}function FC(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Fe(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=10*1e3,VC=30*1e3,$C=5*60*1e3;class BC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new UC(e);const i=Th+(VC-Th)*Math.random();Si(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Fe(e,(s,r)=>{r>0&&vt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Si(this.reportStats_.bind(this),Math.floor(Math.random()*2*$C))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Wg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kg(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Xe.ACK_USER_WRITE,this.source=Wg()}operationForChild(e){if(N(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new G(e));return new Tr(B(),t,this.revert)}}else return _(O(this.path)===e,"operationForChild called for unrelated child."),new Tr(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Xe.OVERWRITE}operationForChild(e){return N(this.path)?new rn(this.source,B(),this.snap.getImmediateChild(e)):new rn(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Xe.MERGE}operationForChild(e){if(N(this.path)){const t=this.children.subtree(new G(e));return t.isEmpty()?null:t.value?new rn(this.source,B(),t.value):new Qi(this.source,B(),t)}else return _(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qi(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(N(e))return this.isFullyInitialized()&&!this.filtered_;const t=O(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function qC(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xC(o.childName,o.snapshotNode))}),di(n,s,"child_removed",e,i,t),di(n,s,"child_added",e,i,t),di(n,s,"child_moved",r,i,t),di(n,s,"child_changed",e,i,t),di(n,s,"value",e,i,t),s}function di(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>HC(n,a,c)),o.forEach(a=>{const c=jC(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function jC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function HC(n,e,t){if(e.childName==null||t.childName==null)throw Hn("Should only compare child_ events.");const i=new P(e.childName,e.snapshotNode),s=new P(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e){return{eventCache:n,serverCache:e}}function Ai(n,e,t,i){return Gg(new pl(e,t,i),n.serverCache)}function Qg(n,e,t,i){return Gg(n.eventCache,new pl(e,t,i))}function Ra(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function on(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;const WC=()=>($o||($o=new ke(D0)),$o);class j{constructor(e,t=WC()){this.value=e,this.children=t}static fromObject(e){let t=new j(null);return Fe(e,(i,s)=>{t=t.set(new G(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:B(),value:this.value};if(N(e))return null;{const i=O(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(H(e),t);return r!=null?{path:oe(new G(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(N(e))return this;{const t=O(e),i=this.children.get(t);return i!==null?i.subtree(H(e)):new j(null)}}set(e,t){if(N(e))return new j(t,this.children);{const i=O(e),r=(this.children.get(i)||new j(null)).set(H(e),t),o=this.children.insert(i,r);return new j(this.value,o)}}remove(e){if(N(e))return this.children.isEmpty()?new j(null):new j(null,this.children);{const t=O(e),i=this.children.get(t);if(i){const s=i.remove(H(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new j(null):new j(this.value,r)}else return this}}get(e){if(N(e))return this.value;{const t=O(e),i=this.children.get(t);return i?i.get(H(e)):null}}setTree(e,t){if(N(e))return t;{const i=O(e),r=(this.children.get(i)||new j(null)).setTree(H(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new j(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(oe(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,B(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(N(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(H(e),oe(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,B(),t)}foreachOnPath_(e,t,i){if(N(e))return this;{this.value&&i(t,this.value);const s=O(e),r=this.children.get(s);return r?r.foreachOnPath_(H(e),oe(t,s),i):new j(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(oe(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.writeTree_=e}static empty(){return new je(new j(null))}}function ki(n,e,t){if(N(e))return new je(new j(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=xe(s,e);return r=r.updateChild(o,t),new je(n.writeTree_.set(s,r))}else{const s=new j(t),r=n.writeTree_.setTree(e,s);return new je(r)}}}function Ih(n,e,t){let i=n;return Fe(t,(s,r)=>{i=ki(i,oe(e,s),r)}),i}function Ch(n,e){if(N(e))return je.empty();{const t=n.writeTree_.setTree(e,new j(null));return new je(t)}}function Na(n,e){return un(n,e)!=null}function un(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(xe(t.path,e)):null}function Sh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ve,(i,s)=>{e.push(new P(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new P(i,s.value))}),e}function Rt(n,e){if(N(e))return n;{const t=un(n,e);return t!=null?new je(new j(t)):new je(n.writeTree_.subtree(e))}}function Da(n){return n.writeTree_.isEmpty()}function jn(n,e){return Yg(B(),n.writeTree_,e)}function Yg(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Yg(oe(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(oe(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e){return nm(e,n)}function zC(n,e,t,i,s){_(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ki(n.visibleWrites,e,t)),n.lastWriteId=i}function KC(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function GC(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&QC(a,i.path)?s=!1:Be(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return YC(n),!0;if(i.snap)n.visibleWrites=Ch(n.visibleWrites,i.path);else{const a=i.children;Fe(a,c=>{n.visibleWrites=Ch(n.visibleWrites,oe(i.path,c))})}return!0}else return!1}function QC(n,e){if(n.snap)return Be(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Be(oe(n.path,t),e))return!0;return!1}function YC(n){n.visibleWrites=Jg(n.allWrites,XC,B()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function XC(n){return n.visible}function Jg(n,e,t){let i=je.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Be(t,o)?(a=xe(t,o),i=ki(i,a,r.snap)):Be(o,t)&&(a=xe(o,t),i=ki(i,B(),r.snap.getChild(a)));else if(r.children){if(Be(t,o))a=xe(t,o),i=Ih(i,a,r.children);else if(Be(o,t))if(a=xe(o,t),N(a))i=Ih(i,B(),r.children);else{const c=On(r.children,O(a));if(c){const l=c.getChild(H(a));i=ki(i,B(),l)}}}else throw Hn("WriteRecord should have .snap or .children")}}return i}function Zg(n,e,t,i,s){if(!i&&!s){const r=un(n.visibleWrites,e);if(r!=null)return r;{const o=Rt(n.visibleWrites,e);if(Da(o))return t;if(t==null&&!Na(o,B()))return null;{const a=t||F.EMPTY_NODE;return jn(o,a)}}}else{const r=Rt(n.visibleWrites,e);if(!s&&Da(r))return t;if(!s&&t==null&&!Na(r,B()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(Be(l.path,e)||Be(e,l.path))},a=Jg(n.allWrites,o,e),c=t||F.EMPTY_NODE;return jn(a,c)}}}function JC(n,e,t){let i=F.EMPTY_NODE;const s=un(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ve,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Rt(n.visibleWrites,e);return t.forEachChild(ve,(o,a)=>{const c=jn(Rt(r,new G(o)),a);i=i.updateImmediateChild(o,c)}),Sh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Rt(n.visibleWrites,e);return Sh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function ZC(n,e,t,i,s){_(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=oe(e,t);if(Na(n.visibleWrites,r))return null;{const o=Rt(n.visibleWrites,r);return Da(o)?s.getChild(t):jn(o,s.getChild(t))}}function eS(n,e,t,i){const s=oe(e,t),r=un(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Rt(n.visibleWrites,s);return jn(o,i.getNode().getImmediateChild(t))}else return null}function tS(n,e){return un(n.visibleWrites,e)}function nS(n,e,t,i,s,r,o){let a;const c=Rt(n.visibleWrites,e),l=un(c,B());if(l!=null)a=l;else if(t!=null)a=jn(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function iS(){return{visibleWrites:je.empty(),allWrites:[],lastWriteId:-1}}function Oa(n,e,t,i){return Zg(n.writeTree,n.treePath,e,t,i)}function em(n,e){return JC(n.writeTree,n.treePath,e)}function Ah(n,e,t,i){return ZC(n.writeTree,n.treePath,e,t,i)}function Ir(n,e){return tS(n.writeTree,oe(n.treePath,e))}function sS(n,e,t,i,s,r){return nS(n.writeTree,n.treePath,e,t,i,s,r)}function gl(n,e,t){return eS(n.writeTree,n.treePath,e,t)}function tm(n,e){return nm(oe(n.treePath,e),n.writeTree)}function nm(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,vh(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,MC(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,PC(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,vh(i,e.snapshotNode,s.oldSnap));else throw Hn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const im=new oS;class ml{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new pl(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gl(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=sS(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}function aS(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function cS(n,e,t,i,s){const r=new rS;let o,a;if(t.type===Xe.OVERWRITE){const l=t;l.source.fromUser?o=Pa(n,e,l.path,l.snap,i,s,r):(_(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!N(l.path),o=Cr(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===Xe.MERGE){const l=t;l.source.fromUser?o=uS(n,e,l.path,l.children,i,s,r):(_(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ma(n,e,l.path,l.children,i,s,a,r))}else if(t.type===Xe.ACK_USER_WRITE){const l=t;l.revert?o=fS(n,e,l.path,i,s,r):o=hS(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===Xe.LISTEN_COMPLETE)o=dS(n,e,t.path,i,r);else throw Hn("Unknown operation type: "+t.type);const c=r.getChanges();return lS(e,o,c),{viewCache:o,changes:c}}function lS(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ra(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(OC(Ra(e)))}}function sm(n,e,t,i,s,r){const o=e.eventCache;if(Ir(i,t)!=null)return e;{let a,c;if(N(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=on(e),u=l instanceof F?l:F.EMPTY_NODE,h=em(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Oa(i,on(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=O(t);if(l===".priority"){_(Pt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Ah(i,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=H(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Ah(i,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=gl(i,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return Ai(e,a,o.isFullyInitialized()||N(t),n.filter.filtersNodes())}}function Cr(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(N(t))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=O(t);if(!c.isCompleteForPath(t)&&Pt(t)>1)return e;const g=H(t),v=c.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?l=u.updatePriority(c.getNode(),v):l=u.updateChild(c.getNode(),f,v,g,im,null)}const h=Qg(e,l,c.isFullyInitialized()||N(t),u.filtersNodes()),d=new ml(s,h,r);return sm(n,h,t,s,d,a)}function Pa(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const u=new ml(s,e,r);if(N(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Ai(e,l,!0,n.filter.filtersNodes());else{const h=O(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=Ai(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=H(t),f=a.getNode().getImmediateChild(h);let g;if(N(d))g=i;else{const E=u.getCompleteChild(h);E!=null?Mg(d)===".priority"&&E.getChild(Lg(d)).isEmpty()?g=E:g=E.updateChild(d,i):g=F.EMPTY_NODE}if(f.equals(g))c=e;else{const E=n.filter.updateChild(a.getNode(),h,g,d,u,o);c=Ai(e,E,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function kh(n,e){return n.eventCache.isCompleteForChild(e)}function uS(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=oe(t,c);kh(e,O(u))&&(a=Pa(n,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=oe(t,c);kh(e,O(u))||(a=Pa(n,a,u,l,s,r,o))}),a}function bh(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ma(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;N(t)?l=i:l=new j(null).setTree(t,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=bh(n,f,d);c=Cr(n,c,new G(h),g,s,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),E=bh(n,g,d);c=Cr(n,c,new G(h),E,s,r,o,a)}}),c}function hS(n,e,t,i,s,r,o){if(Ir(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(N(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Cr(n,e,t,c.getNode().getChild(t),s,r,a,o);if(N(t)){let l=new j(null);return c.getNode().forEachChild(Dn,(u,h)=>{l=l.set(new G(u),h)}),Ma(n,e,t,l,s,r,a,o)}else return e}else{let l=new j(null);return i.foreach((u,h)=>{const d=oe(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Ma(n,e,t,l,s,r,a,o)}}function dS(n,e,t,i,s){const r=e.serverCache,o=Qg(e,r.getNode(),r.isFullyInitialized()||N(t),r.isFiltered());return sm(n,o,t,i,im,s)}function fS(n,e,t,i,s,r){let o;if(Ir(i,t)!=null)return e;{const a=new ml(i,e,s),c=e.eventCache.getNode();let l;if(N(t)||O(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Oa(i,on(e));else{const h=e.serverCache.getNode();_(h instanceof F,"serverChildren would be complete if leaf node"),u=em(i,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=O(t);let h=gl(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,H(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,F.EMPTY_NODE,H(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Oa(i,on(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ir(i,B())!=null,Ai(e,l,o,n.filter.filtersNodes())}}function pS(n,e){const t=on(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!N(e)&&!t.getImmediateChild(O(e)).isEmpty())?t.getChild(e):null}function Rh(n,e,t,i){e.type===Xe.MERGE&&e.source.queryId!==null&&(_(on(n.viewCache_),"We should always have a full cache before handling merges"),_(Ra(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=cS(n.processor_,s,e,t,i);return aS(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,gS(n,r.changes,r.viewCache.eventCache.getNode(),null)}function gS(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return qC(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh;function mS(n){_(!Nh,"__referenceConstructor has already been defined"),Nh=n}function _l(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return _(r!=null,"SyncTree gave us an op for an invalid query."),Rh(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Rh(o,e,t,i));return r}}function yl(n,e){let t=null;for(const i of n.views.values())t=t||pS(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh;function _S(n){_(!Dh,"__referenceConstructor has already been defined"),Dh=n}class Oh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=iS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yS(n,e,t,i,s){return zC(n.pendingWriteTree_,e,t,i,s),s?ho(n,new rn(Wg(),e,t)):[]}function wn(n,e,t=!1){const i=KC(n.pendingWriteTree_,e);if(GC(n.pendingWriteTree_,e)){let r=new j(null);return i.snap!=null?r=r.set(B(),!0):Fe(i.children,o=>{r=r.set(new G(o),!0)}),ho(n,new Tr(i.path,r,t))}else return[]}function uo(n,e,t){return ho(n,new rn(zg(),e,t))}function vS(n,e,t){const i=j.fromObject(t);return ho(n,new Qi(zg(),e,i))}function wS(n,e,t,i){const s=cm(n,i);if(s!=null){const r=lm(s),o=r.path,a=r.queryId,c=xe(o,e),l=new rn(Kg(a),c,t);return um(n,o,l)}else return[]}function ES(n,e,t,i){const s=cm(n,i);if(s){const r=lm(s),o=r.path,a=r.queryId,c=xe(o,e),l=j.fromObject(t),u=new Qi(Kg(a),c,l);return um(n,o,u)}else return[]}function rm(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=xe(o,e),l=yl(a,c);if(l)return l});return Zg(s,e,r,t,!0)}function ho(n,e){return om(e,n.syncPointTree_,null,Xg(n.pendingWriteTree_,B()))}function om(n,e,t,i){if(N(n.path))return am(n,e,t,i);{const s=e.get(B());t==null&&s!=null&&(t=yl(s,B()));let r=[];const o=O(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=tm(i,o);r=r.concat(om(a,c,l,u))}return s&&(r=r.concat(_l(s,n,i,t))),r}}function am(n,e,t,i){const s=e.get(B());t==null&&s!=null&&(t=yl(s,B()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=tm(i,o),u=n.operationForChild(o);u&&(r=r.concat(am(u,a,c,l)))}),s&&(r=r.concat(_l(s,n,i,t))),r}function cm(n,e){return n.tagToQueryMap.get(e)}function lm(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new G(n.substr(0,e))}}function um(n,e,t){const i=n.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const s=Xg(n.pendingWriteTree_,e);return _l(i,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new vl(t)}node(){return this.node_}}class wl{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=oe(this.path_,e);return new wl(this.syncTree_,t)}node(){return rm(this.syncTree_,this.path_)}}const TS=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ph=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return IS(n[".sv"],e,t);if(typeof n[".sv"]=="object")return CS(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},IS=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},CS=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const s=e.node();if(_(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},SS=function(n,e,t,i){return El(e,new wl(t,n),i)},AS=function(n,e,t){return El(n,new vl(e),t)};function El(n,e,t){const i=n.getPriority().val(),s=Ph(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ph(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ie(a,_e(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ie(s))),o.forEachChild(ve,(a,c)=>{const l=El(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Il(n,e){let t=e instanceof G?e:new G(e),i=n,s=O(t);for(;s!==null;){const r=On(i.node.children,s)||{children:{},childCount:0};i=new Tl(s,i,r),t=H(t),s=O(t)}return i}function si(n){return n.node.value}function hm(n,e){n.node.value=e,xa(n)}function dm(n){return n.node.childCount>0}function kS(n){return si(n)===void 0&&!dm(n)}function fo(n,e){Fe(n.node.children,(t,i)=>{e(new Tl(t,n,i))})}function fm(n,e,t,i){t&&!i&&e(n),fo(n,s=>{fm(s,e,!0,i)}),t&&i&&e(n)}function bS(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Is(n){return new G(n.parent===null?n.name:Is(n.parent)+"/"+n.name)}function xa(n){n.parent!==null&&RS(n.parent,n.name,n)}function RS(n,e,t){const i=kS(t),s=vt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,xa(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,xa(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=/[\[\].#$\/\u0000-\u001F\u007F]/,DS=/[\[\].#$\u0000-\u001F\u007F]/,Bo=10*1024*1024,pm=function(n){return typeof n=="string"&&n.length!==0&&!NS.test(n)},OS=function(n){return typeof n=="string"&&n.length!==0&&!DS.test(n)},PS=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),OS(n)},gm=function(n,e,t){const i=t instanceof G?new dC(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+qt(i));if(typeof e=="function")throw new Error(n+"contains a function "+qt(i)+" with contents = "+e.toString());if(fg(e))throw new Error(n+"contains "+e.toString()+" "+qt(i));if(typeof e=="string"&&e.length>Bo/3&&Rr(e)>Bo)throw new Error(n+"contains a string greater than "+Bo+" utf8 bytes "+qt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Fe(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!pm(o)))throw new Error(n+" contains an invalid key ("+o+") "+qt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fC(i,o),gm(n,a,i),pC(i)}),s&&r)throw new Error(n+' contains ".value" child '+qt(i)+" in addition to actual children.")}},MS=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!PS(t))throw new Error(s_(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function LS(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Fg(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function hn(n,e,t){LS(n,t),FS(n,i=>Be(i,e)||Be(e,i))}function FS(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(US(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function US(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Qt&&me("event: "+t.toString()),Es(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="repo_interrupt",$S=25;class BS{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Er(),this.transactionQueueTree_=new Tl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qS(n,e,t){if(n.stats_=ll(n.repoInfo_),n.forceRestClient_||F0())n.server_=new wr(n.repoInfo_,(i,s,r,o)=>{Mh(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>xh(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new dt(n.repoInfo_,e,(i,s,r,o)=>{Mh(n,i,s,r,o)},i=>{xh(n,i)},i=>{HS(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=q0(n.repoInfo_,()=>new BC(n.stats_,n.server_)),n.infoData_=new LC,n.infoSyncTree_=new Oh({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=uo(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cl(n,"connected",!1),n.serverSyncTree_=new Oh({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);hn(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function jS(n){const t=n.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function mm(n){return TS({timestamp:jS(n)})}function Mh(n,e,t,i,s){n.dataUpdateCount++;const r=new G(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=Qs(t,l=>_e(l));o=ES(n.serverSyncTree_,r,c,s)}else{const c=_e(t);o=wS(n.serverSyncTree_,r,c,s)}else if(i){const c=Qs(t,l=>_e(l));o=vS(n.serverSyncTree_,r,c)}else{const c=_e(t);o=uo(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Al(n,r)),hn(n.eventQueue_,a,o)}function xh(n,e){Cl(n,"connected",e),e===!1&&zS(n)}function HS(n,e){Fe(e,(t,i)=>{Cl(n,t,i)})}function Cl(n,e,t){const i=new G("/.info/"+e),s=_e(t);n.infoData_.updateSnapshot(i,s);const r=uo(n.infoSyncTree_,i,s);hn(n.eventQueue_,i,r)}function WS(n){return n.nextWriteId_++}function zS(n){_m(n,"onDisconnectEvents");const e=mm(n),t=Er();ba(n.onDisconnect_,B(),(s,r)=>{const o=SS(s,r,n.serverSyncTree_,e);Hg(t,s,o)});let i=[];ba(t,B(),(s,r)=>{i=i.concat(uo(n.serverSyncTree_,s,r));const o=YS(n,s);Al(n,o)}),n.onDisconnect_=Er(),hn(n.eventQueue_,B(),i)}function KS(n){n.persistentConnection_&&n.persistentConnection_.interrupt(VS)}function _m(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),me(t,...e)}function ym(n,e,t){return rm(n.serverSyncTree_,e,t)||F.EMPTY_NODE}function Sl(n,e=n.transactionQueueTree_){if(e||po(n,e),si(e)){const t=wm(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&GS(n,Is(e),t)}else dm(e)&&fo(e,t=>{Sl(n,t)})}function GS(n,e,t){const i=t.map(l=>l.currentWriteId),s=ym(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const u=t[l];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=xe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{_m(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(wn(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();po(n,Il(n.transactionQueueTree_,e)),Sl(n,n.transactionQueueTree_),hn(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Es(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ne("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}Al(n,e)}},o)}function Al(n,e){const t=vm(n,e),i=Is(t),s=wm(n,t);return QS(n,s,i),i}function QS(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=xe(t,c.path);let u=!1,h;if(_(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(wn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=$S)u=!0,h="maxretry",s=s.concat(wn(n.serverSyncTree_,c.currentWriteId,!0));else{const d=ym(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){gm("transaction failed: Data returned ",f,c.path);let g=_e(f);typeof f=="object"&&f!=null&&vt(f,".priority")||(g=g.updatePriority(d.getPriority()));const v=c.currentWriteId,L=mm(n),$=AS(g,d,L);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=$,c.currentWriteId=WS(n),o.splice(o.indexOf(v),1),s=s.concat(yS(n.serverSyncTree_,c.path,$,c.currentWriteId,c.applyLocally)),s=s.concat(wn(n.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(wn(n.serverSyncTree_,c.currentWriteId,!0))}hn(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}po(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Es(i[a]);Sl(n,n.transactionQueueTree_)}function vm(n,e){let t,i=n.transactionQueueTree_;for(t=O(e);t!==null&&si(i)===void 0;)i=Il(i,t),e=H(e),t=O(e);return i}function wm(n,e){const t=[];return Em(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Em(n,e,t){const i=si(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);fo(e,s=>{Em(n,s,t)})}function po(n,e){const t=si(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,hm(e,t.length>0?t:void 0)}fo(e,i=>{po(n,i)})}function YS(n,e){const t=Is(vm(n,e)),i=Il(n.transactionQueueTree_,e);return bS(i,s=>{qo(n,s)}),qo(n,i),fm(i,s=>{qo(n,s)}),t}function qo(n,e){const t=si(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(wn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?hm(e,void 0):t.length=r+1,hn(n.eventQueue_,Is(e),s);for(let o=0;o<i.length;o++)Es(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function JS(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ne(`Invalid query segment '${t}' in query '${n}'`)}return e}const Lh=function(n,e){const t=ZS(n),i=t.namespace;t.domain==="firebase.com"&&yt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||R0();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Sg(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new G(t.pathString)}},ZS=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=XS(n.substring(u,h)));const d=JS(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return N(this._path)?null:Mg(this._path)}get ref(){return new ri(this._repo,this._path)}get _queryIdentifier(){const e=Eh(this._queryParams),t=al(e);return t==="{}"?"default":t}get _queryObject(){return Eh(this._queryParams)}isEqual(e){if(e=Y(e),!(e instanceof kl))return!1;const t=this._repo===e._repo,i=Fg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+hC(this._path)}}class ri extends kl{constructor(e,t){super(e,t,new fl,!1)}get parent(){const e=Lg(this._path);return e===null?null:new ri(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}mS(ri);_S(ri);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="FIREBASE_DATABASE_EMULATOR_HOST",La={};let tA=!1;function nA(n,e,t,i){n.repoInfo_=new Sg(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function iA(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),me("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Lh(r,s),a=o.repoInfo,c,l;typeof process!="undefined"&&process.env&&(l=process.env[eA]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Lh(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new Nn(Nn.OWNER):new V0(n.name,n.options,e);MS("Invalid Firebase Database URL",o),N(o.path)||yt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=rA(a,n,u,new U0(n.name,t));return new oA(h,n)}function sA(n,e){const t=La[e];(!t||t[n.key]!==n)&&yt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),KS(n),delete t[n.key]}function rA(n,e,t,i){let s=La[e.name];s||(s={},La[e.name]=s);let r=s[n.toURLString()];return r&&yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new BS(n,tA,t,i),s[n.toURLString()]=r,r}class oA{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ri(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yt("Cannot call "+e+" on a deleted database.")}}function aA(n=Kn(),e){const t=Mt(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=br("database");i&&cA(t,...i)}return t}function cA(n,e,t,i={}){n=Y(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&yt("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Nn(Nn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Ba(i.mockUserToken,n.app.options.projectId);r=new Nn(o)}nA(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){C0(xt),He(new Le("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return iA(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ae(ih,sh,n),Ae(ih,sh,"esm2017")}dt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};dt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};lA();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="firebasestorage.googleapis.com",uA="storageBucket",hA=2*60*1e3,dA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends rt{constructor(e,t,i=0){super(jo(e),`Firebase Storage: ${t} (${jo(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var st;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(st||(st={}));function jo(n){return"storage/"+n}function fA(){const n="An unknown error occurred, please check the error payload for server response.";return new ot(st.UNKNOWN,n)}function pA(){return new ot(st.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gA(){return new ot(st.CANCELED,"User canceled the upload/download.")}function mA(n){return new ot(st.INVALID_URL,"Invalid URL '"+n+"'.")}function _A(n){return new ot(st.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Fh(n){return new ot(st.INVALID_ARGUMENT,n)}function Im(){return new ot(st.APP_DELETED,"The Firebase app was deleted.")}function yA(n){return new ot(st.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=qe.makeFromUrl(e,t)}catch{return new qe(e,"")}if(i.path==="")return i;throw _A(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(q){q.path_=decodeURIComponent(q.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},E=t===Tm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,v="([^?#]*)",L=new RegExp(`^https?://${E}/${s}/${v}`,"i"),U=[{regex:a,indices:c,postModify:r},{regex:f,indices:g,postModify:l},{regex:L,indices:{bucket:1,path:2},postModify:l}];for(let q=0;q<U.length;q++){const Oe=U[q],Ue=Oe.regex.exec(e);if(Ue){const Vt=Ue[Oe.indices.bucket];let $t=Ue[Oe.indices.path];$t||($t=""),i=new qe(Vt,$t),Oe.postModify(i);break}}if(i==null)throw mA(e);return i}}class vA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(n,e,t){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,n(f,c())},v)}function d(){r&&clearTimeout(r)}function f(v,...L){if(l){d();return}if(v){d(),u.call(null,v,...L);return}if(c()||o){d(),u.call(null,v,...L);return}i<64&&(i*=2);let U;a===1?(a=2,U=0):U=(i+Math.random())*1e3,h(U)}let g=!1;function E(v){g||(g=!0,d(),!l&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,E(!0)},t),E}function EA(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(n){return n!==void 0}function Uh(n,e,t,i){if(i<e)throw Fh(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Fh(`Invalid value for '${n}'. Expected ${t} or less.`)}function IA(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Sr||(Sr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,t,i,s,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ls(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Sr.NO_ERROR,c=r.getStatus();if(!a||CA(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Sr.ABORT;i(!1,new Ls(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Ls(l,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());TA(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=fA();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Im():gA();o(c)}else{const c=pA();o(c)}};this.canceled_?t(!1,new Ls(!1,null,!0)):this.backoffId_=wA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&EA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ls{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function AA(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function kA(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function bA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function RA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function NA(n,e,t,i,s,r,o=!0){const a=IA(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return bA(l,e),AA(l,t),kA(l,r),RA(l,i),new SA(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function OA(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){this._service=e,t instanceof qe?this._location=t:this._location=qe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ar(e,t)}get root(){const e=new qe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return OA(this._location.path)}get storage(){return this._service}get parent(){const e=DA(this._location.path);if(e===null)return null;const t=new qe(this._location.bucket,e);return new Ar(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw yA(e)}}function Vh(n,e){const t=e==null?void 0:e[uA];return t==null?null:qe.makeFromBucketSpec(t,n)}function PA(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:Ba(s,n.app.options.projectId))}class MA{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Tm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hA,this._maxUploadRetryTime=dA,this._requests=new Set,s!=null?this._bucket=qe.makeFromBucketSpec(s,this._host):this._bucket=Vh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qe.makeFromBucketSpec(this._url,e):this._bucket=Vh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Uh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Uh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ar(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new vA(Im());{const o=NA(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const $h="@firebase/storage",Bh="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="storage";function xA(n=Kn(),e){n=Y(n);const i=Mt(n,Cm).getImmediate({identifier:e}),s=br("storage");return s&&LA(i,...s),i}function LA(n,e,t,i={}){PA(n,e,t,i)}function FA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new MA(t,i,s,e,xt)}function UA(){He(new Le(Cm,FA,"PUBLIC").setMultipleInstances(!0)),Ae($h,Bh,""),Ae($h,Bh,"esm2017")}UA();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,t,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||t.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="us-central1";class $A{constructor(e,t,i,s,r=Fa,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new VA(t,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=Fa}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function BA(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}const qh="@firebase/functions",jh="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="auth-internal",jA="app-check-internal",HA="messaging-internal";function WA(n,e){const t=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(qA),a=i.getProvider(HA),c=i.getProvider(jA);return new $A(r,o,a,c,s,n)};He(new Le(Sm,t,"PUBLIC").setMultipleInstances(!0)),Ae(qh,jh,e),Ae(qh,jh,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n=Kn(),e=Fa){const i=Mt(Y(n),Sm).getImmediate({identifier:e}),s=br("functions");return s&&KA(i,...s),i}function KA(n,e,t){BA(Y(n),e,t)}WA(fetch.bind(self));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Map,Am={activated:!1,tokenObservers:[]},GA={initialized:!1,enabled:!1};function ne(n){return Ua.get(n)||Object.assign({},Am)}function QA(n,e){return Ua.set(n,e),Ua.get(n)}function go(){return GA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="https://content-firebaseappcheck.googleapis.com/v1",YA="exchangeRecaptchaV3Token",XA="exchangeDebugToken",Hh={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},JA=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,t,i,s,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Yt,await ek(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Yt,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function ek(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},be=new Wn("appCheck","AppCheck",tk);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n=!1){var e;return n?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function bl(n){if(!ne(n).activated)throw be.create("use-before-activation",{appName:n.name})}function bm(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),i=Math.floor((e-t*3600*24)/3600),s=Math.floor((e-t*3600*24-i*3600)/60),r=e-t*3600*24-i*3600-s*60;let o="";return t&&(o+=Fs(t)+"d:"),i&&(o+=Fs(i)+"h:"),o+=Fs(s)+"m:"+Fs(r)+"s",o}function Fs(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl({url:n,body:e},t){const i={"Content-Type":"application/json"},s=t.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&(i["X-Firebase-Client"]=h)}const r={method:"POST",body:JSON.stringify(e),headers:i};let o;try{o=await fetch(n,r)}catch(h){throw be.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(o.status!==200)throw be.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(h){throw be.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw be.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=Number(c[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+l,issuedAtTimeMillis:u}}function nk(n,e){const{projectId:t,appId:i,apiKey:s}=n.options;return{url:`${km}/projects/${t}/apps/${i}:${YA}?key=${s}`,body:{recaptcha_v3_token:e}}}function Rm(n,e){const{projectId:t,appId:i,apiKey:s}=n.options;return{url:`${km}/projects/${t}/apps/${i}:${XA}?key=${s}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="firebase-app-check-database",sk=1,Yi="firebase-app-check-store",Nm="debug-token";let Us=null;function Dm(){return Us||(Us=new Promise((n,e)=>{try{const t=indexedDB.open(ik,sk);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;e(be.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},t.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Yi,{keyPath:"compositeKey"})}}}catch(t){e(be.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Us)}function rk(n){return Pm(Mm(n))}function ok(n,e){return Om(Mm(n),e)}function ak(n){return Om(Nm,n)}function ck(){return Pm(Nm)}async function Om(n,e){const i=(await Dm()).transaction(Yi,"readwrite"),r=i.objectStore(Yi).put({compositeKey:n,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var l;a(be.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}async function Pm(n){const t=(await Dm()).transaction(Yi,"readonly"),s=t.objectStore(Yi).get(n);return new Promise((r,o)=>{s.onsuccess=a=>{const c=a.target.result;r(c?c.value:void 0)},t.onerror=a=>{var c;o(be.create("storage-get",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function Mm(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Ji("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(n){if(ja()){let e;try{e=await rk(n)}catch(t){Xi.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function Ho(n,e){return ja()?ok(n,e).catch(t=>{Xi.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function uk(){let n;try{n=await ck()}catch{}if(n)return n;{const e=o_();return ak(e).catch(t=>Xi.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return go().enabled}async function Dl(){const n=go();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function hk(){const n=ed(),e=go();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Yt;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(uk())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={error:"UNKNOWN_ERROR"};function fk(n){return kr.encodeString(JSON.stringify(n),!1)}async function Va(n,e=!1){const t=n.app;bl(t);const i=ne(t);let s=i.token,r;if(s&&!En(s)&&(i.token=void 0,s=void 0),!s){const c=await i.cachedTokenPromise;c&&(En(c)?s=c:await Ho(t,void 0))}if(!e&&s&&En(s))return{token:s.token};let o=!1;if(Nl()){i.exchangeTokenPromise||(i.exchangeTokenPromise=Rl(Rm(t,await Dl()),n.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),o=!0);const c=await i.exchangeTokenPromise;return await Ho(t,c),i.token=c,{token:c.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await ne(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Xi.warn(c.message):Xi.error(c),r=c}let a;return s?r?En(s)?a={token:s.token,internalError:r}:a=Kh(r):(a={token:s.token},i.token=s,await Ho(t,s)):a=Kh(r),o&&Fm(t,a),a}async function pk(n){const e=n.app;bl(e);const{provider:t}=ne(e);if(Nl()){const i=await Dl(),{token:s}=await Rl(Rm(e,i),n.heartbeatServiceProvider);return{token:s}}else{const{token:i}=await t.getToken();return{token:i}}}function xm(n,e,t,i){const{app:s}=n,r=ne(s),o={next:t,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&En(r.token)){const a=r.token;Promise.resolve().then(()=>{t({token:a.token}),zh(n)}).catch(()=>{})}r.cachedTokenPromise.then(()=>zh(n))}function Lm(n,e){const t=ne(n),i=t.tokenObservers.filter(s=>s.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function zh(n){const{app:e}=n,t=ne(e);let i=t.tokenRefresher;i||(i=gk(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function gk(n){const{app:e}=n;return new ZA(async()=>{const t=ne(e);let i;if(t.token?i=await Va(n,!0):i=await Va(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const t=ne(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Hh.RETRIAL_MIN_WAIT,Hh.RETRIAL_MAX_WAIT)}function Fm(n,e){const t=ne(n).tokenObservers;for(const i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function En(n){return n.expireTimeMillis-Date.now()>0}function Kh(n){return{token:fk(dk),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=ne(this.app);for(const t of e)Lm(this.app,t.next);return Promise.resolve()}}function _k(n,e){return new mk(n,e)}function yk(n){return{getToken:e=>Va(n,e),getLimitedUseToken:()=>pk(n),addTokenListener:e=>xm(n,"INTERNAL",e),removeTokenListener:e=>Lm(n.app,e)}}const vk="@firebase/app-check",wk="0.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="https://www.google.com/recaptcha/api.js";function Tk(n,e){const t=new Yt,i=ne(n);i.reCAPTCHAState={initialized:t};const s=Ik(n),r=Wh(!1);return r?Gh(n,e,r,s,t):Ak(()=>{const o=Wh(!1);if(!o)throw new Error("no recaptcha");Gh(n,e,o,s,t)}),t.promise}function Gh(n,e,t,i,s){t.ready(()=>{Sk(n,e,t,i),s.resolve(t)})}function Ik(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function Ck(n){bl(n);const t=await ne(n).reCAPTCHAState.initialized.promise;return new Promise((i,s)=>{const r=ne(n).reCAPTCHAState;t.ready(()=>{i(t.execute(r.widgetId,{action:"fire_app_check"}))})})}function Sk(n,e,t,i){const s=t.render(i,{sitekey:e,size:"invisible",callback:()=>{ne(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{ne(n).reCAPTCHAState.succeeded=!1}}),r=ne(n);r.reCAPTCHAState=Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:s})}function Ak(n){const e=document.createElement("script");e.src=Ek,e.onload=n,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,i;bk(this._throttleData);const s=await Ck(this._app).catch(o=>{throw be.create("recaptcha-error")});if(!(!((e=ne(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw be.create("recaptcha-error");let r;try{r=await Rl(nk(this._app,s),this._heartbeatServiceProvider)}catch(o){throw!((t=o.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=kk(Number((i=o.customData)===null||i===void 0?void 0:i.httpStatus),this._throttleData),be.create("throttled",{time:bm(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Mt(e,"heartbeat"),Tk(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Ol?this._siteKey===e._siteKey:!1}}function kk(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+JA,httpStatus:n};{const t=e?e.backoffCount:0,i=h_(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+i,httpStatus:n}}}function bk(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw be.create("throttled",{time:bm(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(n=Kn(),e){n=Y(n);const t=Mt(n,"app-check");if(go().initialized||hk(),Nl()&&Dl().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(r.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&r.provider.isEqual(e.provider))return s;throw be.create("already-initialized",{appName:n.name})}const i=t.initialize({options:e});return Nk(n,e.provider,e.isTokenAutoRefreshEnabled),ne(n).isTokenAutoRefreshEnabled&&xm(i,"INTERNAL",()=>{}),i}function Nk(n,e,t){const i=QA(n,Object.assign({},Am));i.activated=!0,i.provider=e,i.cachedTokenPromise=lk(n).then(s=>(s&&En(s)&&(i.token=s,Fm(n,{token:s.token})),s)),i.isTokenAutoRefreshEnabled=t===void 0?n.automaticDataCollectionEnabled:t,i.provider.initialize(n)}const Dk="app-check",Qh="app-check-internal";function Ok(){He(new Le(Dk,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return _k(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Qh).initialize()})),He(new Le(Qh,n=>{const e=n.getProvider("app-check").getImmediate();return yk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ae(vk,wk)}Ok();const Pk={projectId:"stein-unlimited",appId:"1:460714151837:web:c6f2fd892e9e5d8dbc6974",databaseURL:"https://stein-unlimited-default-rtdb.firebaseio.com",storageBucket:"stein-unlimited.appspot.com",apiKey:"AIzaSyCDldAeOZ4qveUC0cSEGj8uEXrPYjbdeB0",authDomain:"stein-unlimited.firebaseapp.com",messagingSenderId:"460714151837",measurementId:"G-708WJQEYVL"},oi=ld(Pk),zk=Ew(oi),Kk=h0(oi);xA(oi);aA(oi);zA(oi);Rk(oi,{provider:new Ol("6LepK2MjAAAAAA3mBOwOhYA-Om7SoxO7bNsRq0pv"),isTokenAutoRefreshEnabled:!0});export{Wk as G,Hk as I,Uk as R,Fk as _,$k as a,zk as b,Lk as c,Bk as d,Kk as f,l0 as g,xk as o,jk as p,Mk as s,Vk as x,qk as y};
