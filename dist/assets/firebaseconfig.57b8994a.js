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
 */const Ad={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(n,e){if(!n)throw ii(e)},ii=function(n){return new Error("Firebase Database ("+Ad.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Rd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Xg=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],c=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},js={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,c=o?n[r+1]:0,l=r+2<n.length,h=l?n[r+2]:0,f=s>>2,_=(s&3)<<4|c>>4;let m=(c&15)<<2|h>>6,R=h&63;l||(R=64,o||(m=64)),i.push(t[f],t[_],t[m],t[R])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const _=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||c==null||h==null||_==null)throw new Jg;const m=s<<2|c>>4;if(i.push(m),h!==64){const R=c<<4&240|h>>2;if(i.push(R),_!==64){const S=h<<6&192|_;i.push(S)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cd=function(n){const e=Rd(n);return js.encodeByteArray(e,!0)},_s=function(n){return Cd(n).replace(/\./g,"")},gs=function(n){try{return js.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zg(n){return Sd(void 0,n)}function Sd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!em(t)||(n[t]=Sd(n[t],e[t]));return n}function em(n){return n!=="__proto__"}/**
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
 */function bd(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tm=()=>bd().__FIREBASE_DEFAULTS__,nm=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},im=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gs(n[1]);return e&&JSON.parse(e)},Ws=()=>{try{return tm()||nm()||im()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pd=n=>{var e,t;return(t=(e=Ws())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},$s=n=>{const e=Pd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},kd=()=>{var n;return(n=Ws())===null||n===void 0?void 0:n.config},Nd=n=>{var e;return(e=Ws())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class dn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Ga(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[_s(JSON.stringify(t)),_s(JSON.stringify(o)),c].join(".")}/**
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
 */function Se(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ka(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function rm(){var n;const e=(n=Ws())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function om(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Od(){return Ad.NODE_ADMIN===!0}function am(){return!rm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qa(){try{return typeof indexedDB=="object"}catch{return!1}}function cm(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const lm="FirebaseError";class _t extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=lm,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?um(s,i):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new _t(r,c,i)}}function um(n,e){return n.replace(hm,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const hm=/\{\$([^}]+)}/g;/**
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
 */function nr(n){return JSON.parse(n)}function Ae(n){return JSON.stringify(n)}/**
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
 */const Md=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=nr(gs(s[0])||""),t=nr(gs(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},dm=function(n){const e=Md(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},fm=function(n){const e=Md(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Nt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function zn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ca(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ms(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function ys(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(mu(s)&&mu(o)){if(!ys(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function mu(n){return n!==null&&typeof n=="object"}/**
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
 */function si(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ji(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Wi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class pm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)i[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)i[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const m=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(m<<1|m>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],c=this.chain_[3],l=this.chain_[4],h,f;for(let _=0;_<80;_++){_<40?_<20?(h=c^s&(o^c),f=1518500249):(h=s^o^c,f=1859775393):_<60?(h=s&o|c&(s|o),f=2400959708):(h=s^o^c,f=3395469782);const m=(r<<5|r>>>27)+h+l+f+i[_]&4294967295;l=c,c=o,o=(s<<30|s>>>2)&4294967295,s=r,r=m}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function _m(n,e){const t=new gm(n,e);return t.subscribe.bind(t)}class gm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");mm(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=jo),r.error===void 0&&(r.error=jo),r.complete===void 0&&(r.complete=jo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function jo(){}function ym(n,e){return`${n} failed: ${e} argument `}/**
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
 */const vm=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,O(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Hs=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Em=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})};/**
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
 */const Tm=1e3,Im=2,wm=4*60*60*1e3,Am=.5;function Rm(n,e=Tm,t=Im){const i=e*Math.pow(t,n),r=Math.round(Am*i*(Math.random()-.5)*2);return Math.min(wm,i+r)}/**
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
 */function he(n){return n&&n._delegate?n._delegate:n}class Qe{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class Cm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new dn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bm(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);i===c&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sm(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sm(n){return n===on?void 0:n}function bm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const km={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Nm=$.INFO,Dm={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Om=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Dm[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yr{constructor(e){this.name=e,this._logLevel=Nm,this._logHandler=Om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?km[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Mm=(n,e)=>e.some(t=>n instanceof t);let yu,vu;function xm(){return yu||(yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lm(){return vu||(vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xd=new WeakMap,la=new WeakMap,Ld=new WeakMap,Wo=new WeakMap,Ya=new WeakMap;function Vm(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(jt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xd.set(t,n)}).catch(()=>{}),Ya.set(e,n),e}function Fm(n){if(la.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});la.set(n,e)}let ua={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return la.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ld.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Um(n){ua=n(ua)}function Bm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call($o(this),e,...t);return Ld.set(i,e.sort?e.sort():[e]),jt(i)}:Lm().includes(n)?function(...e){return n.apply($o(this),e),jt(xd.get(this))}:function(...e){return jt(n.apply($o(this),e))}}function qm(n){return typeof n=="function"?Bm(n):(n instanceof IDBTransaction&&Fm(n),Mm(n,xm())?new Proxy(n,ua):n)}function jt(n){if(n instanceof IDBRequest)return Vm(n);if(Wo.has(n))return Wo.get(n);const e=qm(n);return e!==n&&(Wo.set(n,e),Ya.set(e,n)),e}const $o=n=>Ya.get(n);function jm(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),c=jt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(jt(o.result),l.oldVersion,l.newVersion,jt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Wm=["get","getKey","getAll","getAllKeys","count"],$m=["put","add","delete","clear"],Ho=new Map;function Eu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ho.get(e))return Ho.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=$m.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Wm.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,r?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&l.done]))[0]};return Ho.set(e,s),s}Um(n=>({...n,get:(e,t,i)=>Eu(e,t)||n.get(e,t,i),has:(e,t)=>!!Eu(e,t)||n.has(e,t)}));/**
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
 */class Hm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zm(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function zm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",Tu="0.10.5";/**
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
 */const fn=new yr("@firebase/app"),Gm="@firebase/app-compat",Km="@firebase/analytics-compat",Qm="@firebase/analytics",Ym="@firebase/app-check-compat",Xm="@firebase/app-check",Jm="@firebase/auth",Zm="@firebase/auth-compat",ey="@firebase/database",ty="@firebase/database-compat",ny="@firebase/functions",iy="@firebase/functions-compat",ry="@firebase/installations",sy="@firebase/installations-compat",oy="@firebase/messaging",ay="@firebase/messaging-compat",cy="@firebase/performance",ly="@firebase/performance-compat",uy="@firebase/remote-config",hy="@firebase/remote-config-compat",dy="@firebase/storage",fy="@firebase/storage-compat",py="@firebase/firestore",_y="@firebase/vertexai-preview",gy="@firebase/firestore-compat",my="firebase",yy="10.12.2";/**
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
 */const da="[DEFAULT]",vy={[ha]:"fire-core",[Gm]:"fire-core-compat",[Qm]:"fire-analytics",[Km]:"fire-analytics-compat",[Xm]:"fire-app-check",[Ym]:"fire-app-check-compat",[Jm]:"fire-auth",[Zm]:"fire-auth-compat",[ey]:"fire-rtdb",[ty]:"fire-rtdb-compat",[ny]:"fire-fn",[iy]:"fire-fn-compat",[ry]:"fire-iid",[sy]:"fire-iid-compat",[oy]:"fire-fcm",[ay]:"fire-fcm-compat",[cy]:"fire-perf",[ly]:"fire-perf-compat",[uy]:"fire-rc",[hy]:"fire-rc-compat",[dy]:"fire-gcs",[fy]:"fire-gcs-compat",[py]:"fire-fst",[gy]:"fire-fst-compat",[_y]:"fire-vertex","fire-js":"fire-js",[my]:"fire-js-all"};/**
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
 */const vs=new Map,Ey=new Map,fa=new Map;function Iu(n,e){try{n.container.addComponent(e)}catch(t){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function it(n){const e=n.name;if(fa.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,n);for(const t of vs.values())Iu(t,n);for(const t of Ey.values())Iu(t,n);return!0}function Xt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Et(n){return n.settings!==void 0}/**
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
 */const Ty={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Wt=new ri("app","Firebase",Ty);/**
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
 */class Iy{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Jt=yy;function Vd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:da,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Wt.create("bad-app-name",{appName:String(r)});if(t||(t=kd()),!t)throw Wt.create("no-options");const s=vs.get(r);if(s){if(ys(t,s.options)&&ys(i,s.config))return s;throw Wt.create("duplicate-app",{appName:r})}const o=new Pm(r);for(const l of fa.values())o.addComponent(l);const c=new Iy(t,i,o);return vs.set(r,c),c}function oi(n=da){const e=vs.get(n);if(!e&&n===da&&kd())return Vd();if(!e)throw Wt.create("no-app",{appName:n});return e}function qe(n,e,t){var i;let r=(i=vy[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(c.join(" "));return}it(new Qe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const wy="firebase-heartbeat-database",Ay=1,ir="firebase-heartbeat-store";let zo=null;function Fd(){return zo||(zo=jm(wy,Ay,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ir)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),zo}async function Ry(n){try{const t=(await Fd()).transaction(ir),i=await t.objectStore(ir).get(Ud(n));return await t.done,i}catch(e){if(e instanceof _t)fn.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(t.message)}}}async function wu(n,e){try{const i=(await Fd()).transaction(ir,"readwrite");await i.objectStore(ir).put(e,Ud(n)),await i.done}catch(t){if(t instanceof _t)fn.warn(t.message);else{const i=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});fn.warn(i.message)}}}function Ud(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Cy=1024,Sy=30*24*60*60*1e3;class by{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ky(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Au();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Sy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Au(),{heartbeatsToSend:i,unsentEntries:r}=Py(this._heartbeatsCache.heartbeats),s=_s(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Au(){return new Date().toISOString().substring(0,10)}function Py(n,e=Cy){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Ru(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ru(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ky{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qa()?cm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ry(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return wu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return wu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ru(n){return _s(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ny(n){it(new Qe("platform-logger",e=>new Hm(e),"PRIVATE")),it(new Qe("heartbeat",e=>new by(e),"PRIVATE")),qe(ha,Tu,n),qe(ha,Tu,"esm2017"),qe("fire-js","")}Ny("");var Dy="firebase",Oy="10.12.2";/**
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
 */qe(Dy,Oy,"app");function Xa(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Bd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const My=Bd,qd=new ri("auth","Firebase",Bd());/**
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
 */const Es=new yr("@firebase/auth");function xy(n,...e){Es.logLevel<=$.WARN&&Es.warn(`Auth (${Jt}): ${n}`,...e)}function os(n,...e){Es.logLevel<=$.ERROR&&Es.error(`Auth (${Jt}): ${n}`,...e)}/**
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
 */function rt(n,...e){throw Ja(n,...e)}function at(n,...e){return Ja(n,...e)}function jd(n,e,t){const i=Object.assign(Object.assign({},My()),{[e]:t});return new ri("auth","Firebase",i).create(e,{appName:n.name})}function $t(n){return jd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ja(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return qd.create(n,...e)}function V(n,e,...t){if(!n)throw Ja(e,...t)}function Tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw os(e),new Error(e)}function St(n,e){n||Tt(e)}/**
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
 */function pa(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ly(){return Cu()==="http:"||Cu()==="https:"}function Cu(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Vy(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ly()||sm()||"connection"in navigator)?navigator.onLine:!0}function Fy(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class vr{constructor(e,t){this.shortDelay=e,this.longDelay=t,St(t>e,"Short delay should be less than long delay!"),this.isMobile=Ka()||Dd()}get(){return Vy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Za(n,e){St(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wd{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const By=new vr(3e4,6e4);function In(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Zt(n,e,t,i,r={}){return $d(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const c=si(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Wd.fetch()(Hd(n,n.config.apiHost,t,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function $d(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Uy),e);try{const r=new jy(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yr(n,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jd(n,f,h);rt(n,f)}}catch(r){if(r instanceof _t)throw r;rt(n,"network-request-failed",{message:String(r)})}}async function zs(n,e,t,i,r={}){const s=await Zt(n,e,t,i,r);return"mfaPendingCredential"in s&&rt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Hd(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Za(n.config,r):`${n.config.apiScheme}://${r}`}function qy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(at(this.auth,"network-request-failed")),By.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=at(n,e,i);return r.customData._tokenResponse=t,r}function Su(n){return n!==void 0&&n.enterprise!==void 0}class Wy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $y(n,e){return Zt(n,"GET","/v2/recaptchaConfig",In(n,e))}/**
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
 */async function Hy(n,e){return Zt(n,"POST","/v1/accounts:delete",e)}async function zd(n,e){return Zt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ki(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zy(n,e=!1){const t=he(n),i=await t.getIdToken(e),r=ec(i);V(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ki(Go(r.auth_time)),issuedAtTime:Ki(Go(r.iat)),expirationTime:Ki(Go(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Go(n){return Number(n)*1e3}function ec(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return os("JWT malformed, contained fewer than 3 sections"),null;try{const r=gs(t);return r?JSON.parse(r):(os("Failed to decode base64 JWT payload"),null)}catch(r){return os("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function bu(n){const e=ec(n);return V(e,"internal-error"),V(typeof e.exp!="undefined","internal-error"),V(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rr(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof _t&&Gy(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Gy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ky{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _a{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ts(n){var e;const t=n.auth,i=await n.getIdToken(),r=await rr(n,zd(t,{idToken:i}));V(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Gd(s.providerUserInfo):[],c=Yy(n.providerData,o),l=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new _a(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function Qy(n){const e=he(n);await Ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yy(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Gd(n){return n.map(e=>{var{providerId:t}=e,i=Xa(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Xy(n,e){const t=await $d(n,{},async()=>{const i=si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=Hd(n,r,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Wd.fetch()(o,{method:"POST",headers:c,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Jy(n,e){return Zt(n,"POST","/v2/accounts:revokeToken",In(n,e))}/**
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
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken!="undefined","internal-error"),V(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):bu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){V(e.length!==0,"internal-error");const t=bu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Xy(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Un;return i&&(V(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
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
 */function Lt(n,e){V(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class It{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Xa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ky(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _a(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return V(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zy(this,e)}reload(){return Qy(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ts(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await rr(this,Hy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,c,l,h,f;const _=(i=t.displayName)!==null&&i!==void 0?i:void 0,m=(r=t.email)!==null&&r!==void 0?r:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,B=(h=t.createdAt)!==null&&h!==void 0?h:void 0,W=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:Te,providerData:ie,stsTokenManager:T}=t;V(j&&T,e,"internal-error");const g=Un.fromJSON(this.name,T);V(typeof j=="string",e,"internal-error"),Lt(_,e.name),Lt(m,e.name),V(typeof z=="boolean",e,"internal-error"),V(typeof Te=="boolean",e,"internal-error"),Lt(R,e.name),Lt(S,e.name),Lt(D,e.name),Lt(P,e.name),Lt(B,e.name),Lt(W,e.name);const v=new It({uid:j,auth:e,email:m,emailVerified:z,displayName:_,isAnonymous:Te,photoURL:S,phoneNumber:R,tenantId:D,stsTokenManager:g,createdAt:B,lastLoginAt:W});return ie&&Array.isArray(ie)&&(v.providerData=ie.map(E=>Object.assign({},E))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,i=!1){const r=new Un;r.updateFromServerResponse(t);const s=new It({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ts(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];V(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Gd(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),c=new Un;c.updateFromIdToken(i);const l=new It({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new _a(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
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
 */const Pu=new Map;function wt(n){St(n instanceof Function,"Expected a class definition");let e=Pu.get(n);return e?(St(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pu.set(n,e),e)}/**
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
 */class Kd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kd.type="NONE";const ku=Kd;/**
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
 */function as(n,e,t){return`firebase:${n}:${e}:${t}`}class Bn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=as(this.userKey,r.apiKey,s),this.fullPersistenceKey=as("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Bn(wt(ku),e,i);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=r[0]||wt(ku);const o=as(i,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const _=It._fromJSON(e,f);h!==s&&(c=_),s=h;break}}catch{}const l=r.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bn(s,e,i):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Bn(s,e,i))}}/**
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
 */function Nu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zd(e))return"Blackberry";if(ef(e))return"Webos";if(tc(e))return"Safari";if((e.includes("chrome/")||Yd(e))&&!e.includes("edge/"))return"Chrome";if(Jd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Qd(n=Se()){return/firefox\//i.test(n)}function tc(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yd(n=Se()){return/crios\//i.test(n)}function Xd(n=Se()){return/iemobile/i.test(n)}function Jd(n=Se()){return/android/i.test(n)}function Zd(n=Se()){return/blackberry/i.test(n)}function ef(n=Se()){return/webos/i.test(n)}function Gs(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Zy(n=Se()){var e;return Gs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ev(){return om()&&document.documentMode===10}function tf(n=Se()){return Gs(n)||Jd(n)||ef(n)||Zd(n)||/windows phone/i.test(n)||Xd(n)}function tv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function nf(n,e=[]){let t;switch(n){case"Browser":t=Nu(Se());break;case"Worker":t=`${Nu(Se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jt}/${i}`}/**
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
 */class nv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function iv(n,e={}){return Zt(n,"GET","/v2/passwordPolicy",In(n,e))}/**
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
 */const rv=6;class sv{constructor(e){var t,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:rv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ov{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Du(this),this.idTokenSubscription=new Du(this),this.beforeStateQueue=new nv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wt(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zd(this,{idToken:e}),i=await It._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l==null?void 0:l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ts(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject($t(this));const t=e?he(e):null;return t&&V(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iv(this),t=new sv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Jy(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wt(e)||this._popupRedirectResolver;V(t,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ai(n){return he(n)}class Du{constructor(e){this.auth=e,this.observer=null,this.addObserver=_m(t=>this.observer=t)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ks={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function av(n){Ks=n}function rf(n){return Ks.loadJS(n)}function cv(){return Ks.recaptchaEnterpriseScript}function lv(){return Ks.gapiScript}function uv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const hv="recaptcha-enterprise",dv="NO_RECAPTCHA";class fv{constructor(e){this.type=hv,this.auth=ai(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{$y(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Wy(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function r(s,o,c){const l=window.grecaptcha;Su(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(dv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(c=>{if(!t&&Su(window.grecaptcha))r(c,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=cv();l.length!==0&&(l+=c),rf(l).then(()=>{r(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Ou(n,e,t,i=!1){const r=new fv(n);let s;try{s=await r.verify(t)}catch{s=await r.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mu(n,e,t,i){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ou(n,e,t,t==="getOobCode");return i(n,s)}else return i(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ou(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(s)})}/**
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
 */function pv(n,e){const t=Xt(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(ys(s,e!=null?e:{}))return r;rt(r,"already-initialized")}return t.initialize({options:e})}function _v(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(wt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gv(n,e,t){const i=ai(n);V(i._canInitEmulator,i,"emulator-config-failed"),V(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=sf(e),{host:o,port:c}=mv(e),l=c===null?"":`:${c}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||yv()}function sf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mv(n){const e=sf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:xu(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:xu(o)}}}function xu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function yv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class nc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,t){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function vv(n,e){return Zt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ev(n,e){return zs(n,"POST","/v1/accounts:signInWithPassword",In(n,e))}/**
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
 */async function Tv(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}async function Iv(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}/**
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
 */class sr extends nc{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new sr(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new sr(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mu(e,t,"signInWithPassword",Ev);case"emailLink":return Tv(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mu(e,i,"signUpPassword",vv);case"emailLink":return Iv(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qn(n,e){return zs(n,"POST","/v1/accounts:signInWithIdp",In(n,e))}/**
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
 */const wv="http://localhost";class pn extends nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Xa(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new pn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return qn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,qn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qn(e,t)}buildRequest(){const e={requestUri:wv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=si(t)}return e}}/**
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
 */function Av(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rv(n){const e=ji(Wi(n)).link,t=e?ji(Wi(e)).deep_link_id:null,i=ji(Wi(n)).deep_link_id;return(i?ji(Wi(i)).link:null)||i||t||e||n}class ic{constructor(e){var t,i,r,s,o,c;const l=ji(Wi(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(i=l.oobCode)!==null&&i!==void 0?i:null,_=Av((r=l.mode)!==null&&r!==void 0?r:null);V(h&&f&&_,"argument-error"),this.apiKey=h,this.operation=_,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Rv(e);try{return new ic(t)}catch{return null}}}/**
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
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,t){return sr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ic.parseLink(t);return V(i,"argument-error"),sr._fromEmailAndCode(e,i.code,i.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class of{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Er extends of{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vt extends Er{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
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
 */class Ft extends Er{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ft.credential(t,i)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
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
 */class Ut extends Er{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Bt extends Er{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Bt.credential(t,i)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
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
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await It._fromIdTokenResponse(e,i,r),o=Lu(i);return new Gn({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Lu(i);return new Gn({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Lu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Is extends _t{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Is.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Is(e,t,i,r)}}function af(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Is._fromErrorAndOperation(n,s,e,i):s})}async function Cv(n,e,t=!1){const i=await rr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gn._forOperation(n,"link",i)}/**
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
 */async function Sv(n,e,t=!1){const{auth:i}=n;if(Et(i.app))return Promise.reject($t(i));const r="reauthenticate";try{const s=await rr(n,af(i,r,e,n),t);V(s.idToken,i,"internal-error");const o=ec(s.idToken);V(o,i,"internal-error");const{sub:c}=o;return V(n.uid===c,i,"user-mismatch"),Gn._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(i,"user-mismatch"),s}}/**
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
 */async function cf(n,e,t=!1){if(Et(n.app))return Promise.reject($t(n));const i="signIn",r=await af(n,i,e),s=await Gn._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function bv(n,e){return cf(ai(n),e)}/**
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
 */async function Pv(n){const e=ai(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function tS(n,e,t){return Et(n.app)?Promise.reject($t(n)):bv(he(n),ci.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Pv(n),i})}function kv(n,e,t,i){return he(n).onIdTokenChanged(e,t,i)}function Nv(n,e,t){return he(n).beforeAuthStateChanged(e,t)}function nS(n,e,t,i){return he(n).onAuthStateChanged(e,t,i)}function iS(n){return he(n).signOut()}const ws="__sak";/**
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
 */class lf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dv(){const n=Se();return tc(n)||Gs(n)}const Ov=1e3,Mv=10;class uf extends lf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dv()&&tv(),this.fallbackToPolling=tf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);ev()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Mv):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Ov)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uf.type="LOCAL";const xv=uf;/**
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
 */class hf extends lf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hf.type="SESSION";const df=hf;/**
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
 */function Lv(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Qs(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const c=Array.from(o).map(async h=>h(t.origin,s)),l=await Lv(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
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
 */function rc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Vv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const h=rc("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(_){const m=_;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(m.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ct(){return window}function Fv(n){ct().location.href=n}/**
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
 */function ff(){return typeof ct().WorkerGlobalScope!="undefined"&&typeof ct().importScripts=="function"}async function Uv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qv(){return ff()?self:null}/**
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
 */const pf="firebaseLocalStorageDb",jv=1,As="firebaseLocalStorage",_f="fbase_key";class Tr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ys(n,e){return n.transaction([As],e?"readwrite":"readonly").objectStore(As)}function Wv(){const n=indexedDB.deleteDatabase(pf);return new Tr(n).toPromise()}function ga(){const n=indexedDB.open(pf,jv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(As,{keyPath:_f})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(As)?e(i):(i.close(),await Wv(),e(await ga()))})})}async function Vu(n,e,t){const i=Ys(n,!0).put({[_f]:e,value:t});return new Tr(i).toPromise()}async function $v(n,e){const t=Ys(n,!1).get(e),i=await new Tr(t).toPromise();return i===void 0?null:i.value}function Fu(n,e){const t=Ys(n,!0).delete(e);return new Tr(t).toPromise()}const Hv=800,zv=3;class gf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ga(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>zv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ff()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(qv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Uv(),!this.activeServiceWorker)return;this.sender=new Vv(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ga();return await Vu(e,ws,"1"),await Fu(e,ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vu(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>$v(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Ys(r,!1).getAll();return new Tr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gf.type="LOCAL";const Gv=gf;new vr(3e4,6e4);/**
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
 */function Kv(n,e){return e?wt(e):(V(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sc extends nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qv(n){return cf(n.auth,new sc(n),n.bypassAuthState)}function Yv(n){const{auth:e,user:t}=n;return V(t,e,"internal-error"),Sv(t,new sc(n),n.bypassAuthState)}async function Xv(n){const{auth:e,user:t}=n;return V(t,e,"internal-error"),Cv(t,new sc(n),n.bypassAuthState)}/**
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
 */class mf{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qv;case"linkViaPopup":case"linkViaRedirect":return Xv;case"reauthViaPopup":case"reauthViaRedirect":return Yv;default:rt(this.auth,"internal-error")}}resolve(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jv=new vr(2e3,1e4);class xn extends mf{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const e=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jv.get())};e()}}xn.currentPopupAction=null;/**
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
 */const Zv="pendingRedirect",cs=new Map;class eE extends mf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const i=await tE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tE(n,e){const t=rE(e),i=iE(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function nE(n,e){cs.set(n._key(),e)}function iE(n){return wt(n._redirectPersistence)}function rE(n){return as(Zv,n.config.apiKey,n.name)}async function sE(n,e,t=!1){if(Et(n.app))return Promise.reject($t(n));const i=ai(n),r=Kv(i,e),o=await new eE(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const oE=10*60*1e3;class aE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!yf(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(at(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uu(e))}saveEventToCache(e){this.cachedEventUids.add(Uu(e)),this.lastProcessedEventTime=Date.now()}}function Uu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yf(n);default:return!1}}/**
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
 */async function lE(n,e={}){return Zt(n,"GET","/v1/projects",e)}/**
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
 */const uE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hE=/^https?/;async function dE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await lE(n);for(const t of e)try{if(fE(t))return}catch{}rt(n,"unauthorized-domain")}function fE(n){const e=pa(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!hE.test(t))return!1;if(uE.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const pE=new vr(3e4,6e4);function Bu(){const n=ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _E(n){return new Promise((e,t)=>{var i,r,s;function o(){Bu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bu(),t(at(n,"network-request-failed"))},timeout:pE.get()})}if(!((r=(i=ct().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ct().gapi)===null||s===void 0)&&s.load)o();else{const c=uv("iframefcb");return ct()[c]=()=>{gapi.load?o():t(at(n,"network-request-failed"))},rf(`${lv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ls=null,e})}let ls=null;function gE(n){return ls=ls||_E(n),ls}/**
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
 */const mE=new vr(5e3,15e3),yE="__/auth/iframe",vE="emulator/auth/iframe",EE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IE(n){const e=n.config;V(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Za(e,vE):`https://${n.config.authDomain}/${yE}`,i={apiKey:e.apiKey,appName:n.name,v:Jt},r=TE.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${si(i).slice(1)}`}async function wE(n){const e=await gE(n),t=ct().gapi;return V(t,n,"internal-error"),e.open({where:document.body,url:IE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EE,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=at(n,"network-request-failed"),c=ct().setTimeout(()=>{s(o)},mE.get());function l(){ct().clearTimeout(c),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const AE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RE=500,CE=600,SE="_blank",bE="http://localhost";class qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PE(n,e,t,i=RE,r=CE){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},AE),{width:i.toString(),height:r.toString(),top:s,left:o}),h=Se().toLowerCase();t&&(c=Yd(h)?SE:t),Qd(h)&&(e=e||bE,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[R,S])=>`${m}${R}=${S},`,"");if(Zy(h)&&c!=="_self")return kE(e||"",c),new qu(null);const _=window.open(e||"",c,f);V(_,n,"popup-blocked");try{_.focus()}catch{}return new qu(_)}function kE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const NE="__/auth/handler",DE="emulator/auth/handler",OE=encodeURIComponent("fac");async function ju(n,e,t,i,r,s){V(n.config.authDomain,n,"auth-domain-config-required"),V(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Jt,eventId:r};if(e instanceof of){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ca(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries(s||{}))o[f]=_}if(e instanceof Er){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${OE}=${encodeURIComponent(l)}`:"";return`${ME(n)}?${si(c).slice(1)}${h}`}function ME({config:n}){return n.emulator?Za(n,DE):`https://${n.authDomain}/${NE}`}/**
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
 */const Ko="webStorageSupport";class xE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=df,this._completeRedirectFn=sE,this._overrideRedirectResult=nE}async _openPopup(e,t,i,r){var s;St((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ju(e,t,i,pa(),r);return PE(e,o,rc())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await ju(e,t,i,pa(),r);return Fv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(St(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await wE(e),i=new aE(e);return t.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ko,{type:Ko},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Ko];o!==void 0&&t(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tf()||tc()||Gs()}}const LE=xE;var Wu="@firebase/auth",$u="1.7.4";/**
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
 */class VE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UE(n){it(new Qe("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nf(n)},h=new ov(i,r,s,l);return _v(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),it(new Qe("auth-internal",e=>{const t=ai(e.getProvider("auth").getImmediate());return(i=>new VE(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(Wu,$u,FE(n)),qe(Wu,$u,"esm2017")}/**
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
 */const BE=5*60,qE=Nd("authIdTokenMaxAge")||BE;let Hu=null;const jE=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>qE)return;const r=t==null?void 0:t.token;Hu!==r&&(Hu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function WE(n=oi()){const e=Xt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=pv(n,{popupRedirectResolver:LE,persistence:[Gv,xv,df]}),i=Nd("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=jE(s.toString());Nv(t,o,()=>o(t.currentUser)),kv(t,c=>o(c))}}const r=Pd("auth");return r&&gv(t,`http://${r}`),t}function $E(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}av({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=at("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",$E().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UE("Browser");var zu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var un,vf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function v(){}v.prototype=g.prototype,T.D=g.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,I,A){for(var y=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)y[mt-2]=arguments[mt];return g.prototype[I].apply(E,y)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)E[I]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(I=0;16>I;++I)E[I]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=T.g[0],v=T.g[1],I=T.g[2];var A=T.g[3],y=g+(A^v&(I^A))+E[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=A+(I^g&(v^I))+E[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(v^A&(g^v))+E[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(g^I&(A^g))+E[3]+3250441966&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(A^v&(I^A))+E[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(I^g&(v^I))+E[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(v^A&(g^v))+E[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(g^I&(A^g))+E[7]+4249261313&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(A^v&(I^A))+E[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(I^g&(v^I))+E[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(v^A&(g^v))+E[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(g^I&(A^g))+E[11]+2304563134&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(A^v&(I^A))+E[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(I^g&(v^I))+E[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(v^A&(g^v))+E[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(g^I&(A^g))+E[15]+1236535329&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(I^A&(v^I))+E[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(g^v))+E[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(A^g))+E[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(I^A))+E[0]+3921069994&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(v^I))+E[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(g^v))+E[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(A^g))+E[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(I^A))+E[4]+3889429448&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(v^I))+E[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(g^v))+E[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(A^g))+E[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(I^A))+E[8]+1163531501&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(v^I))+E[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(g^v))+E[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(A^g))+E[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(I^A))+E[12]+2368359562&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(v^I^A)+E[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^I)+E[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^v)+E[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^g)+E[14]+4259657740&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(v^I^A)+E[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^I)+E[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^v)+E[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^g)+E[10]+3200236656&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(v^I^A)+E[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^I)+E[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^v)+E[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^g)+E[6]+76029189&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(v^I^A)+E[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^I)+E[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^v)+E[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^g)+E[2]+3299628645&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(I^(v|~A))+E[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~I))+E[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~v))+E[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~g))+E[5]+4237533241&4294967295,v=I+(y<<21&4294967295|y>>>11),y=g+(I^(v|~A))+E[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~I))+E[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~v))+E[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~g))+E[1]+2240044497&4294967295,v=I+(y<<21&4294967295|y>>>11),y=g+(I^(v|~A))+E[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~I))+E[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~v))+E[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~g))+E[13]+1309151649&4294967295,v=I+(y<<21&4294967295|y>>>11),y=g+(I^(v|~A))+E[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~I))+E[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~v))+E[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}i.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var v=g-this.blockSize,E=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=v;)r(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<g;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){r(this,E),I=0;break}}else for(;A<g;)if(E[I++]=T[A++],I==this.blockSize){r(this,E),I=0;break}}this.h=I,this.o+=g},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var v=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=v&255,v/=256;for(this.u(T),T=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)T[v++]=this.g[g]>>>E&255;return T};function s(T,g){var v=c;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=g(T)}function o(T,g){this.h=g;for(var v=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==g||(v[I]=A,E=!1)}this.g=v}var c={};function l(T){return-128<=T&&128>T?s(T,function(g){return new o([g|0],0>g?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return _;if(0>T)return P(h(-T));for(var g=[],v=1,E=0;T>=v;E++)g[E]=T/v|0,v*=4294967296;return new o(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return P(f(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),E=_,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),y=parseInt(T.substring(I,I+A),g);8>A?(A=h(Math.pow(g,A)),E=E.j(A).add(h(y))):(E=E.j(v),E=E.add(h(y)))}return E}var _=l(0),m=l(1),R=l(16777216);n=o.prototype,n.m=function(){if(D(this))return-P(this).m();for(var T=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(D(this))return"-"+P(this).toString(T);for(var g=h(Math.pow(T,6)),v=this,E="";;){var I=z(v,g).g;v=B(v,I.j(g));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=I,S(v))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=B(this,T),D(T)?-1:S(T)?0:1};function P(T){for(var g=T.g.length,v=[],E=0;E<g;E++)v[E]=~T.g[E];return new o(v,~T.h).add(m)}n.abs=function(){return D(this)?P(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0,I=0;I<=g;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=y>>>16,A&=65535,y&=65535,v[I]=y<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(T,g){return T.add(P(g))}n.j=function(T){if(S(this)||S(T))return _;if(D(this))return D(T)?P(this).j(P(T)):P(P(this).j(T));if(D(T))return P(this.j(P(T)));if(0>this.l(R)&&0>T.l(R))return h(this.m()*T.m());for(var g=this.g.length+T.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,y=this.i(E)&65535,mt=T.i(I)>>>16,yi=T.i(I)&65535;v[2*E+2*I]+=y*yi,W(v,2*E+2*I),v[2*E+2*I+1]+=A*yi,W(v,2*E+2*I+1),v[2*E+2*I+1]+=y*mt,W(v,2*E+2*I+1),v[2*E+2*I+2]+=A*mt,W(v,2*E+2*I+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new o(v,0)};function W(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function j(T,g){this.g=T,this.h=g}function z(T,g){if(S(g))throw Error("division by zero");if(S(T))return new j(_,_);if(D(T))return g=z(P(T),g),new j(P(g.g),P(g.h));if(D(g))return g=z(T,P(g)),new j(P(g.g),g.h);if(30<T.g.length){if(D(T)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=g;0>=E.l(T);)v=Te(v),E=Te(E);var I=ie(v,1),A=ie(E,1);for(E=ie(E,2),v=ie(v,2);!S(E);){var y=A.add(E);0>=y.l(T)&&(I=I.add(v),A=y),E=ie(E,1),v=ie(v,1)}return g=B(T,I.j(g)),new j(I,g)}for(I=_;0<=T.l(g);){for(v=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(v),y=A.j(g);D(y)||0<y.l(T);)v-=E,A=h(v),y=A.j(g);S(A)&&(A=m),I=I.add(A),T=B(T,y)}return new j(I,T)}n.A=function(T){return z(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&T.i(E);return new o(v,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|T.i(E);return new o(v,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^T.i(E);return new o(v,this.h^T.h)};function Te(T){for(var g=T.g.length+1,v=[],E=0;E<g;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(v,T.h)}function ie(T,g){var v=g>>5;g%=32;for(var E=T.g.length-v,I=[],A=0;A<E;A++)I[A]=0<g?T.i(A+v)>>>g|T.i(A+v+1)<<32-g:T.i(A+v);return new o(I,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,vf=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,un=o}).apply(typeof zu!="undefined"?zu:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Xr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ef,Tf,$i,If,us,ma,wf,Af,Rf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xr=="object"&&Xr];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=t(this);function r(a,u){if(u)e:{var d=i;a=a.split(".");for(var p=0;p<a.length-1;p++){var w=a[p];if(!(w in d))break e;d=d[w]}a=a[a.length-1],p=d[a],u=u(p),u!=p&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var d=0,p=!1,w={next:function(){if(!p&&d<a.length){var C=d++;return{value:u(C,a[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}r("Array.prototype.values",function(a){return a||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function _(a,u,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,p),a.apply(u,w)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,m.apply(null,arguments)}function R(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,w,C){for(var N=Array(arguments.length-2),te=2;te<arguments.length;te++)N[te-2]=arguments[te];return u.prototype[w].apply(p,N)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=a[p];return d}return[]}function P(a,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(l(p)){const w=a.length||0,C=p.length||0;a.length=w+C;for(let N=0;N<C;N++)a[w+N]=p[N]}else a.push(p)}}class B{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var Te=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ie(a,u,d){for(const p in a)u.call(d,a[p],p,a)}function T(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let d,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(d in p)a[d]=p[d];for(let C=0;C<v.length;C++)d=v[C],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function I(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function y(){var a=mo;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class mt{constructor(){this.h=this.g=null}add(u,d){const p=yi.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var yi=new B(()=>new mg,a=>a.reset());class mg{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let vi,Ei=!1,mo=new mt,gl=()=>{const a=c.Promise.resolve(void 0);vi=()=>{a.then(yg)}};var yg=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){A(d)}var u=yi;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Ei=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var vg=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Ti(a,u){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(Te){e:{try{z(u.nodeName);var w=!0;break e}catch{}w=!1}w||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Eg[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ti.aa.h.call(this)}}S(Ti,be);var Eg={2:"touch",3:"pen",4:"mouse"};Ti.prototype.h=function(){Ti.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ii="closure_listenable_"+(1e6*Math.random()|0),Tg=0;function Ig(a,u,d,p,w){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=w,this.key=++Tg,this.da=this.fa=!1}function Or(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mr(a){this.src=a,this.g={},this.h=0}Mr.prototype.add=function(a,u,d,p,w){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var N=vo(a,u,p,w);return-1<N?(u=a[N],d||(u.fa=!1)):(u=new Ig(u,this.src,C,!!p,w),u.fa=d,a.push(u)),u};function yo(a,u){var d=u.type;if(d in a.g){var p=a.g[d],w=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=w)&&Array.prototype.splice.call(p,w,1),C&&(Or(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function vo(a,u,d,p){for(var w=0;w<a.length;++w){var C=a[w];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return w}return-1}var Eo="closure_lm_"+(1e6*Math.random()|0),To={};function ml(a,u,d,p,w){if(p&&p.once)return vl(a,u,d,p,w);if(Array.isArray(u)){for(var C=0;C<u.length;C++)ml(a,u[C],d,p,w);return null}return d=Ro(d),a&&a[Ii]?a.K(u,d,h(p)?!!p.capture:!!p,w):yl(a,u,d,!1,p,w)}function yl(a,u,d,p,w,C){if(!u)throw Error("Invalid event type");var N=h(w)?!!w.capture:!!w,te=wo(a);if(te||(a[Eo]=te=new Mr(a)),d=te.add(u,d,p,N,C),d.proxy)return d;if(p=wg(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)vg||(w=N),w===void 0&&(w=!1),a.addEventListener(u.toString(),p,w);else if(a.attachEvent)a.attachEvent(Tl(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function wg(){function a(d){return u.call(a.src,a.listener,d)}const u=Ag;return a}function vl(a,u,d,p,w){if(Array.isArray(u)){for(var C=0;C<u.length;C++)vl(a,u[C],d,p,w);return null}return d=Ro(d),a&&a[Ii]?a.L(u,d,h(p)?!!p.capture:!!p,w):yl(a,u,d,!0,p,w)}function El(a,u,d,p,w){if(Array.isArray(u))for(var C=0;C<u.length;C++)El(a,u[C],d,p,w);else p=h(p)?!!p.capture:!!p,d=Ro(d),a&&a[Ii]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],d=vo(C,d,p,w),-1<d&&(Or(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=wo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=vo(u,d,p,w)),(d=-1<a?u[a]:null)&&Io(d))}function Io(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ii])yo(u.i,a);else{var d=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(d,p,a.capture):u.detachEvent?u.detachEvent(Tl(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=wo(u))?(yo(d,a),d.h==0&&(d.src=null,u[Eo]=null)):Or(a)}}}function Tl(a){return a in To?To[a]:To[a]="on"+a}function Ag(a,u){if(a.da)a=!0;else{u=new Ti(u,this);var d=a.listener,p=a.ha||a.src;a.fa&&Io(a),a=d.call(p,u)}return a}function wo(a){return a=a[Eo],a instanceof Mr?a:null}var Ao="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ro(a){return typeof a=="function"?a:(a[Ao]||(a[Ao]=function(u){return a.handleEvent(u)}),a[Ao])}function Pe(){Dt.call(this),this.i=new Mr(this),this.M=this,this.F=null}S(Pe,Dt),Pe.prototype[Ii]=!0,Pe.prototype.removeEventListener=function(a,u,d,p){El(this,a,u,d,p)};function Ue(a,u){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new be(u,a);else if(u instanceof be)u.target=u.target||a;else{var w=u;u=new be(p,a),E(u,w)}if(w=!0,d)for(var C=d.length-1;0<=C;C--){var N=u.g=d[C];w=xr(N,p,!0,u)&&w}if(N=u.g=a,w=xr(N,p,!0,u)&&w,w=xr(N,p,!1,u)&&w,d)for(C=0;C<d.length;C++)N=u.g=d[C],w=xr(N,p,!1,u)&&w}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],p=0;p<d.length;p++)Or(d[p]);delete a.g[u],a.h--}}this.F=null},Pe.prototype.K=function(a,u,d,p){return this.i.add(String(a),u,!1,d,p)},Pe.prototype.L=function(a,u,d,p){return this.i.add(String(a),u,!0,d,p)};function xr(a,u,d,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,C=0;C<u.length;++C){var N=u[C];if(N&&!N.da&&N.capture==d){var te=N.listener,Ie=N.ha||N.src;N.fa&&yo(a.i,N),w=te.call(Ie,p)!==!1&&w}}return w&&!p.defaultPrevented}function Il(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function wl(a){a.g=Il(()=>{a.g=null,a.i&&(a.i=!1,wl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Rg extends Dt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:wl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(a){Dt.call(this),this.h=a,this.g={}}S(wi,Dt);var Al=[];function Rl(a){ie(a.g,function(u,d){this.g.hasOwnProperty(d)&&Io(u)},a),a.g={}}wi.prototype.N=function(){wi.aa.N.call(this),Rl(this)},wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Co=c.JSON.stringify,Cg=c.JSON.parse,Sg=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function So(){}So.prototype.h=null;function Cl(a){return a.h||(a.h=a.i())}function Sl(){}var Ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bo(){be.call(this,"d")}S(bo,be);function Po(){be.call(this,"c")}S(Po,be);var tn={},bl=null;function Lr(){return bl=bl||new Pe}tn.La="serverreachability";function Pl(a){be.call(this,tn.La,a)}S(Pl,be);function Ri(a){const u=Lr();Ue(u,new Pl(u))}tn.STAT_EVENT="statevent";function kl(a,u){be.call(this,tn.STAT_EVENT,a),this.stat=u}S(kl,be);function Be(a){const u=Lr();Ue(u,new kl(u,a))}tn.Ma="timingevent";function Nl(a,u){be.call(this,tn.Ma,a),this.size=u}S(Nl,be);function Ci(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Si(){this.g=!0}Si.prototype.xa=function(){this.g=!1};function bg(a,u,d,p,w,C){a.info(function(){if(a.g)if(C)for(var N="",te=C.split("&"),Ie=0;Ie<te.length;Ie++){var X=te[Ie].split("=");if(1<X.length){var ke=X[0];X=X[1];var Ne=ke.split("_");N=2<=Ne.length&&Ne[1]=="type"?N+(ke+"="+X+"&"):N+(ke+"=redacted&")}}else N=null;else N=C;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+u+`
`+d+`
`+N})}function Pg(a,u,d,p,w,C,N){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+u+`
`+d+`
`+C+" "+N})}function Sn(a,u,d,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ng(a,d)+(p?" "+p:"")})}function kg(a,u){a.info(function(){return"TIMEOUT: "+u})}Si.prototype.info=function(){};function Ng(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var w=p[1];if(Array.isArray(w)&&!(1>w.length)){var C=w[0];if(C!="noop"&&C!="stop"&&C!="close")for(var N=1;N<w.length;N++)w[N]=""}}}}return Co(d)}catch{return u}}var Vr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ko;function Fr(){}S(Fr,So),Fr.prototype.g=function(){return new XMLHttpRequest},Fr.prototype.i=function(){return{}},ko=new Fr;function Ot(a,u,d,p){this.j=a,this.i=u,this.l=d,this.R=p||1,this.U=new wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ol}function Ol(){this.i=null,this.g="",this.h=!1}var Ml={},No={};function Do(a,u,d){a.L=1,a.v=jr(yt(u)),a.m=d,a.P=!0,xl(a,null)}function xl(a,u){a.F=Date.now(),Ur(a),a.A=yt(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Ql(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Ol,a.g=fu(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Rg(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,p=a.ca;var w="readystatechange";Array.isArray(w)||(w&&(Al[0]=w.toString()),w=Al);for(var C=0;C<w.length;C++){var N=ml(d,w[C],p||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ri(),bg(a.i,a.u,a.A,a.l,a.R,a.m)}Ot.prototype.ca=function(a){a=a.target;const u=this.M;u&&vt(a)==3?u.j():this.Y(a)},Ot.prototype.Y=function(a){try{if(a==this.g)e:{const Ne=vt(this.g);var u=this.g.Ba();const kn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||nu(this.g)))){this.J||Ne!=4||u==7||(u==8||0>=kn?Ri(3):Ri(2)),Oo(this);var d=this.g.Z();this.X=d;t:if(Ll(this)){var p=nu(this.g);a="";var w=p.length,C=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){nn(this),bi(this);var N="";break t}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(C&&u==w-1)});p.length=0,this.h.g+=a,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=d==200,Pg(this.i,this.u,this.A,this.l,this.R,Ne,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,Ie=this.g;if((te=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(te)){var X=te;break t}}X=null}if(d=X)Sn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mo(this,d);else{this.o=!1,this.s=3,Be(12),nn(this),bi(this);break e}}if(this.P){d=!0;let Xe;for(;!this.J&&this.C<N.length;)if(Xe=Dg(this,N),Xe==No){Ne==4&&(this.s=4,Be(14),d=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==Ml){this.s=4,Be(15),Sn(this.i,this.l,N,"[Invalid Chunk]"),d=!1;break}else Sn(this.i,this.l,Xe,null),Mo(this,Xe);if(Ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||N.length!=0||this.h.h||(this.s=1,Be(16),d=!1),this.o=this.o&&d,!d)Sn(this.i,this.l,N,"[Invalid Chunked Response]"),nn(this),bi(this);else if(0<N.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Bo(ke),ke.M=!0,Be(11))}}else Sn(this.i,this.l,N,null),Mo(this,N);Ne==4&&nn(this),this.o&&!this.J&&(Ne==4?lu(this.j,this):(this.o=!1,Ur(this)))}else Qg(this.g),d==400&&0<N.indexOf("Unknown SID")?(this.s=3,Be(12)):(this.s=0,Be(13)),nn(this),bi(this)}}}catch{}finally{}};function Ll(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Dg(a,u){var d=a.C,p=u.indexOf(`
`,d);return p==-1?No:(d=Number(u.substring(d,p)),isNaN(d)?Ml:(p+=1,p+d>u.length?No:(u=u.slice(p,p+d),a.C=p+d,u)))}Ot.prototype.cancel=function(){this.J=!0,nn(this)};function Ur(a){a.S=Date.now()+a.I,Vl(a,a.I)}function Vl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ci(m(a.ba,a),u)}function Oo(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ot.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(kg(this.i,this.A),this.L!=2&&(Ri(),Be(17)),nn(this),this.s=2,bi(this)):Vl(this,this.S-a)};function bi(a){a.j.G==0||a.J||lu(a.j,a)}function nn(a){Oo(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Rl(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Mo(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||xo(d.h,a))){if(!a.K&&xo(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Gr(d),Hr(d);else break e;Uo(d),Be(18)}}else d.za=w[1],0<d.za-d.T&&37500>w[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ci(m(d.Za,d),6e3));if(1>=Bl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else sn(d,11)}else if((a.K||d.g==a)&&Gr(d),!W(u))for(w=d.Da.g.parse(u),u=0;u<w.length;u++){let X=w[u];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];const ke=X[3];ke!=null&&(d.la=ke,d.j.info("VER="+d.la));const Ne=X[4];Ne!=null&&(d.Aa=Ne,d.j.info("SVER="+d.Aa));const kn=X[5];kn!=null&&typeof kn=="number"&&0<kn&&(p=1.5*kn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Xe=a.g;if(Xe){const Qr=Xe.g?Xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qr){var C=p.h;C.g||Qr.indexOf("spdy")==-1&&Qr.indexOf("quic")==-1&&Qr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Lo(C,C.h),C.h=null))}if(p.D){const qo=Xe.g?Xe.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(p.ya=qo,re(p.I,p.D,qo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var N=a;if(p.qa=du(p,p.J?p.ia:null,p.W),N.K){ql(p.h,N);var te=N,Ie=p.L;Ie&&(te.I=Ie),te.B&&(Oo(te),Ur(te)),p.g=N}else au(p);0<d.i.length&&zr(d)}else X[0]!="stop"&&X[0]!="close"||sn(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?sn(d,7):Fo(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}Ri(4)}catch{}}var Og=class{constructor(a,u){this.g=a,this.map=u}};function Fl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ul(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bl(a){return a.h?1:a.g?a.g.size:0}function xo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Lo(a,u){a.g?a.g.add(u):a.h=u}function ql(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Fl.prototype.cancel=function(){if(this.i=jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function Mg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map!="undefined"&&a instanceof Map||typeof Set!="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,p=0;p<d;p++)u.push(a[p]);return u}u=[],d=0;for(p in a)u[d++]=a[p];return u}function xg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map!="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!="undefined"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const p in a)u[d++]=p;return u}}}function Wl(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=xg(a),p=Mg(a),w=p.length,C=0;C<w;C++)u.call(void 0,p[C],d&&d[C],a)}var $l=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lg(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),w=null;if(0<=p){var C=a[d].substring(0,p);w=a[d].substring(p+1)}else C=a[d];u(C,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function rn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof rn){this.h=a.h,Br(this,a.j),this.o=a.o,this.g=a.g,qr(this,a.s),this.l=a.l;var u=a.i,d=new Ni;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Hl(this,d),this.m=a.m}else a&&(u=String(a).match($l))?(this.h=!1,Br(this,u[1]||"",!0),this.o=Pi(u[2]||""),this.g=Pi(u[3]||"",!0),qr(this,u[4]),this.l=Pi(u[5]||"",!0),Hl(this,u[6]||"",!0),this.m=Pi(u[7]||"")):(this.h=!1,this.i=new Ni(null,this.h))}rn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ki(u,zl,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ki(u,zl,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ki(d,d.charAt(0)=="/"?Ug:Fg,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ki(d,qg)),a.join("")};function yt(a){return new rn(a)}function Br(a,u,d){a.j=d?Pi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function qr(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Hl(a,u,d){u instanceof Ni?(a.i=u,jg(a.i,a.h)):(d||(u=ki(u,Bg)),a.i=new Ni(u,a.h))}function re(a,u,d){a.i.set(u,d)}function jr(a){return re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Pi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ki(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Vg),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Vg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zl=/[#\/\?@]/g,Fg=/[#\?:]/g,Ug=/[#\?]/g,Bg=/[#\?@]/g,qg=/#/g;function Ni(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Mt(a){a.g||(a.g=new Map,a.h=0,a.i&&Lg(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ni.prototype,n.add=function(a,u){Mt(this),this.i=null,a=bn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Gl(a,u){Mt(a),u=bn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Kl(a,u){return Mt(a),u=bn(a,u),a.g.has(u)}n.forEach=function(a,u){Mt(this),this.g.forEach(function(d,p){d.forEach(function(w){a.call(u,w,p,this)},this)},this)},n.na=function(){Mt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const w=a[p];for(let C=0;C<w.length;C++)d.push(u[p])}return d},n.V=function(a){Mt(this);let u=[];if(typeof a=="string")Kl(this,a)&&(u=u.concat(this.g.get(bn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},n.set=function(a,u){return Mt(this),this.i=null,a=bn(this,a),Kl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Ql(a,u,d){Gl(a,u),0<d.length&&(a.i=null,a.g.set(bn(a,u),D(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const C=encodeURIComponent(String(p)),N=this.V(p);for(p=0;p<N.length;p++){var w=C;N[p]!==""&&(w+="="+encodeURIComponent(String(N[p]))),a.push(w)}}return this.i=a.join("&")};function bn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function jg(a,u){u&&!a.j&&(Mt(a),a.i=null,a.g.forEach(function(d,p){var w=p.toLowerCase();p!=w&&(Gl(this,p),Ql(this,w,d))},a)),a.j=u}function Wg(a,u){const d=new Si;if(c.Image){const p=new Image;p.onload=R(xt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=R(xt,d,"TestLoadImage: error",!1,u,p),p.onabort=R(xt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(xt,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function $g(a,u){const d=new Si,p=new AbortController,w=setTimeout(()=>{p.abort(),xt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(C=>{clearTimeout(w),C.ok?xt(d,"TestPingServer: ok",!0,u):xt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),xt(d,"TestPingServer: error",!1,u)})}function xt(a,u,d,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(d)}catch{}}function Hg(){this.g=new Sg}function zg(a,u,d){const p=d||"";try{Wl(a,function(w,C){let N=w;h(w)&&(N=Co(w)),u.push(p+C+"="+encodeURIComponent(N))})}catch(w){throw u.push(p+"type="+encodeURIComponent("_badmap")),w}}function Di(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Di,So),Di.prototype.g=function(){return new Wr(this.l,this.j)},Di.prototype.i=function(a){return function(){return a}}({});function Wr(a,u){Pe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Wr,Pe),n=Wr.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Mi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Mi(this)),this.g&&(this.readyState=3,Mi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Oi(this):Mi(this),this.readyState==3&&Yl(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Oi(this))},n.Qa=function(a){this.g&&(this.response=a,Oi(this))},n.ga=function(){this.g&&Oi(this)};function Oi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Mi(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Mi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xl(a){let u="";return ie(a,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Vo(a,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Xl(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):re(a,u,d))}function ue(a){Pe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ue,Pe);var Gg=/^https?$/i,Kg=["POST","PUT"];n=ue.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ko.g(),this.v=this.o?Cl(this.o):Cl(ko),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){Jl(this,C);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)d.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),w=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Kg,u,void 0))||p||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,N]of d)this.g.setRequestHeader(C,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tu(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){Jl(this,C)}};function Jl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Zl(a),$r(a)}function Zl(a){a.A||(a.A=!0,Ue(a,"complete"),Ue(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ue(this,"complete"),Ue(this,"abort"),$r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$r(this,!0)),ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?eu(this):this.bb())},n.bb=function(){eu(this)};function eu(a){if(a.h&&typeof o!="undefined"&&(!a.v[1]||vt(a)!=4||a.Z()!=2)){if(a.u&&vt(a)==4)Il(a.Ea,0,a);else if(Ue(a,"readystatechange"),vt(a)==4){a.h=!1;try{const N=a.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=N===0){var w=String(a.D).match($l)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),p=!Gg.test(w?w.toLowerCase():"")}d=p}if(d)Ue(a,"complete"),Ue(a,"success");else{a.m=6;try{var C=2<vt(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",Zl(a)}}finally{$r(a)}}}}function $r(a,u){if(a.g){tu(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Ue(a,"ready");try{d.onreadystatechange=p}catch{}}}function tu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function vt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Cg(u)}};function nu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Qg(a){const u={};a=(a.g&&2<=vt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(W(a[p]))continue;var d=I(a[p]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[w]||[];u[w]=C,C.push(d)}T(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xi(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function iu(a){this.Aa=0,this.i=[],this.j=new Si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xi("baseRetryDelayMs",5e3,a),this.cb=xi("retryDelaySeedMs",1e4,a),this.Wa=xi("forwardChannelMaxRetries",2,a),this.wa=xi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Fl(a&&a.concurrentRequestLimit),this.Da=new Hg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=iu.prototype,n.la=8,n.G=1,n.connect=function(a,u,d,p){Be(0),this.W=a,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=du(this,null,this.W),zr(this)};function Fo(a){if(ru(a),a.G==3){var u=a.U++,d=yt(a.I);if(re(d,"SID",a.K),re(d,"RID",u),re(d,"TYPE","terminate"),Li(a,d),u=new Ot(a,a.j,u),u.L=2,u.v=jr(yt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=fu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ur(u)}hu(a)}function Hr(a){a.g&&(Bo(a),a.g.cancel(),a.g=null)}function ru(a){Hr(a),a.u&&(c.clearTimeout(a.u),a.u=null),Gr(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function zr(a){if(!Ul(a.h)&&!a.s){a.s=!0;var u=a.Ga;vi||gl(),Ei||(vi(),Ei=!0),mo.add(u,a),a.B=0}}function Yg(a,u){return Bl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ci(m(a.Ga,a,u),uu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const w=new Ot(this,this.j,a);let C=this.o;if(this.S&&(C?(C=g(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(w.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ou(this,w,u),d=yt(this.I),re(d,"RID",a),re(d,"CVER",22),this.D&&re(d,"X-HTTP-Session-Id",this.D),Li(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Xl(C)))+"&"+u:this.m&&Vo(d,this.m,C)),Lo(this.h,w),this.Ua&&re(d,"TYPE","init"),this.P?(re(d,"$req",u),re(d,"SID","null"),w.T=!0,Do(w,d,null)):Do(w,d,u),this.G=2}}else this.G==3&&(a?su(this,a):this.i.length==0||Ul(this.h)||su(this))};function su(a,u){var d;u?d=u.l:d=a.U++;const p=yt(a.I);re(p,"SID",a.K),re(p,"RID",d),re(p,"AID",a.T),Li(a,p),a.m&&a.o&&Vo(p,a.m,a.o),d=new Ot(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ou(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Lo(a.h,d),Do(d,p,u)}function Li(a,u){a.H&&ie(a.H,function(d,p){re(u,p,d)}),a.l&&Wl({},function(d,p){re(u,p,d)})}function ou(a,u,d){d=Math.min(a.i.length,d);var p=a.l?m(a.l.Na,a.l,a):null;e:{var w=a.i;let C=-1;for(;;){const N=["count="+d];C==-1?0<d?(C=w[0].g,N.push("ofs="+C)):C=0:N.push("ofs="+C);let te=!0;for(let Ie=0;Ie<d;Ie++){let X=w[Ie].g;const ke=w[Ie].map;if(X-=C,0>X)C=Math.max(0,w[Ie].g-100),te=!1;else try{zg(ke,N,"req"+X+"_")}catch{p&&p(ke)}}if(te){p=N.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,p}function au(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;vi||gl(),Ei||(vi(),Ei=!0),mo.add(u,a),a.v=0}}function Uo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ci(m(a.Fa,a),uu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ci(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Be(10),Hr(this),cu(this))};function Bo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function cu(a){a.g=new Ot(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=yt(a.qa);re(u,"RID","rpc"),re(u,"SID",a.K),re(u,"AID",a.T),re(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&re(u,"TO",a.ja),re(u,"TYPE","xmlhttp"),Li(a,u),a.m&&a.o&&Vo(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=jr(yt(u)),d.m=null,d.P=!0,xl(d,a)}n.Za=function(){this.C!=null&&(this.C=null,Hr(this),Uo(this),Be(19))};function Gr(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function lu(a,u){var d=null;if(a.g==u){Gr(a),Bo(a),a.g=null;var p=2}else if(xo(a.h,u))d=u.D,ql(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var w=a.B;p=Lr(),Ue(p,new Nl(p,d)),zr(a)}else au(a);else if(w=u.s,w==3||w==0&&0<u.X||!(p==1&&Yg(a,u)||p==2&&Uo(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),w){case 1:sn(a,5);break;case 4:sn(a,10);break;case 3:sn(a,6);break;default:sn(a,2)}}}function uu(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function sn(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),p=a.Xa;const w=!p;p=new rn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Br(p,"https"),jr(p),w?Wg(p.toString(),d):$g(p.toString(),d)}else Be(2);a.G=0,a.l&&a.l.sa(u),hu(a),ru(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function hu(a){if(a.G=0,a.ka=[],a.l){const u=jl(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ka,u),P(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function du(a,u,d){var p=d instanceof rn?yt(d):new rn(d);if(p.g!="")u&&(p.g=u+"."+p.g),qr(p,p.s);else{var w=c.location;p=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var C=new rn(null);p&&Br(C,p),u&&(C.g=u),w&&qr(C,w),d&&(C.l=d),p=C}return d=a.D,u=a.ya,d&&u&&re(p,d,u),re(p,"VER",a.la),Li(a,p),p}function fu(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ue(new Di({eb:d})):new ue(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pu(){}n=pu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Kr(){}Kr.prototype.g=function(a,u){return new He(a,u)};function He(a,u){Pe.call(this),this.g=new iu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!W(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Pn(this)}S(He,Pe),He.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){Fo(this.g)},He.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Co(a),a=d);u.i.push(new Og(u.Ya++,a)),u.G==3&&zr(u)},He.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,He.aa.N.call(this)};function _u(a){bo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(_u,bo);function gu(){Po.call(this),this.status=1}S(gu,Po);function Pn(a){this.g=a}S(Pn,pu),Pn.prototype.ua=function(){Ue(this.g,"a")},Pn.prototype.ta=function(a){Ue(this.g,new _u(a))},Pn.prototype.sa=function(a){Ue(this.g,new gu)},Pn.prototype.ra=function(){Ue(this.g,"b")},Kr.prototype.createWebChannel=Kr.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,Rf=function(){return new Kr},Af=function(){return Lr()},wf=tn,ma={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vr.NO_ERROR=0,Vr.TIMEOUT=8,Vr.HTTP_ERROR=6,us=Vr,Dl.COMPLETE="complete",If=Dl,Sl.EventType=Ai,Ai.OPEN="a",Ai.CLOSE="b",Ai.ERROR="c",Ai.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,$i=Sl,Tf=Di,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,Ef=ue}).apply(typeof Xr!="undefined"?Xr:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const Gu="@firebase/firestore";/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let li="10.12.1";/**
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
 */const _n=new yr("@firebase/firestore");function Vi(){return _n.logLevel}function x(n,...e){if(_n.logLevel<=$.DEBUG){const t=e.map(oc);_n.debug(`Firestore (${li}): ${n}`,...t)}}function bt(n,...e){if(_n.logLevel<=$.ERROR){const t=e.map(oc);_n.error(`Firestore (${li}): ${n}`,...t)}}function Kn(n,...e){if(_n.logLevel<=$.WARN){const t=e.map(oc);_n.warn(`Firestore (${li}): ${n}`,...t)}}function oc(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function F(n="Unexpected state"){const e=`FIRESTORE (${li}) INTERNAL ASSERTION FAILED: `+n;throw bt(e),new Error(e)}function ne(n,e){n||F()}function q(n,e){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Cf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class zE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class GE{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const r=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let s=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},c=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ne(typeof i.accessToken=="string"),new Cf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new Oe(e)}}class KE{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QE{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new KE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string"),this.R=t.token,new YE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JE(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Sf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=JE(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%e.length))}return i}}function J(n,e){return n<e?-1:n>e?1:0}function Qn(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
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
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _e(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new _e(0,0))}static max(){return new U(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class or{constructor(e,t,i){t===void 0?t=0:t>e.length&&F(),i===void 0?i=e.length-t:i>e.length-t&&F(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=e.get(r),o=t.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ae extends or{construct(e,t,i){return new ae(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new M(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const ZE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends or{construct(e,t,i){return new Re(e,t,i)}static isValidIdentifier(e){return ZE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new M(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else c==="`"?(o=!o,r++):c!=="."||o?(i+=c,r++):(s(),r++)}if(s(),o)throw new M(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ae.fromString(e))}static fromName(e){return new L(ae.fromString(e).popFirst(5))}static empty(){return new L(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ae(e.slice()))}}function eT(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=U.fromTimestamp(i===1e9?new _e(t+1,0):new _e(t,i));return new Gt(r,L.empty(),e)}function tT(n){return new Gt(n.readTime,n.key,-1)}class Gt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Gt(U.min(),L.empty(),-1)}static max(){return new Gt(U.max(),L.empty(),-1)}}function nT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
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
 */const iT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ir(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==iT)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,i)=>{t(e)})}static reject(e){return new k((t,i)=>{i(e)})}static waitFor(e){return new k((t,i)=>{let r=0,s=0,o=!1;e.forEach(c=>{++r,c.next(()=>{++s,o&&s===r&&t()},l=>i(l))}),o=!0,s===r&&t()})}static or(e){let t=k.resolve(!1);for(const i of e)t=t.next(r=>r?k.resolve(r):i());return t}static forEach(e,t){const i=[];return e.forEach((r,s)=>{i.push(t.call(this,r,s))}),this.waitFor(i)}static mapArray(e,t){return new k((i,r)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===s&&i(o)},f=>r(f))}})}static doWhile(e,t){return new k((i,r)=>{const s=()=>{e()===!0?t().next(()=>{s()},r):i()};s()})}}function sT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ac{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ac.oe=-1;function Xs(n){return n==null}function Rs(n){return n===0&&1/n==-1/0}function oT(n){return typeof n=="number"&&Number.isInteger(n)&&!Rs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ku(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ui(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jr(this.root,e,this.comparator,!0)}}class Jr{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i!=null?i:we.RED,this.left=r!=null?r:we.EMPTY,this.right=s!=null?s:we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,s){return new we(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return we.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,i,r,s){return this}insert(e,t,i){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qu(this.data.getIterator())}getIteratorFrom(e){return new Qu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class Qu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ze{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new Ce(Re.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qn(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Pf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new Pf("Invalid base64 string: "+s):s}}(e);return new Fe(t)}static fromUint8Array(e){const t=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new Fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const aT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(n){if(ne(!!n),typeof n=="string"){let e=0;const t=aT.exec(n);if(ne(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gn(n){return typeof n=="string"?Fe.fromBase64String(n):Fe.fromUint8Array(n)}/**
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
 */function cc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function lc(n){const e=n.mapValue.fields.__previous_value__;return cc(e)?lc(e):e}function ar(n){const e=Kt(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class cT{constructor(e,t,i,r,s,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class cr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new cr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?cc(n)?4:lT(n)?9007199254740991:10:F()}function ft(n,e){if(n===e)return!0;const t=mn(n);if(t!==mn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ar(n).isEqual(ar(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Kt(r.timestampValue),c=Kt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return gn(r.bytesValue).isEqual(gn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return fe(r.geoPointValue.latitude)===fe(s.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return fe(r.integerValue)===fe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=fe(r.doubleValue),c=fe(s.doubleValue);return o===c?Rs(o)===Rs(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Qn(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:return function(r,s){const o=r.mapValue.fields||{},c=s.mapValue.fields||{};if(Ku(o)!==Ku(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!ft(o[l],c[l])))return!1;return!0}(n,e);default:return F()}}function lr(n,e){return(n.values||[]).find(t=>ft(t,e))!==void 0}function Yn(n,e){if(n===e)return 0;const t=mn(n),i=mn(e);if(t!==i)return J(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=fe(s.integerValue||s.doubleValue),l=fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Yu(n.timestampValue,e.timestampValue);case 4:return Yu(ar(n),ar(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(s,o){const c=gn(s),l=gn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=J(c[h],l[h]);if(f!==0)return f}return J(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=J(fe(s.latitude),fe(o.latitude));return c!==0?c:J(fe(s.longitude),fe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const c=s.values||[],l=o.values||[];for(let h=0;h<c.length&&h<l.length;++h){const f=Yn(c[h],l[h]);if(f)return f}return J(c.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Zr.mapValue&&o===Zr.mapValue)return 0;if(s===Zr.mapValue)return 1;if(o===Zr.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let _=0;_<l.length&&_<f.length;++_){const m=J(l[_],f[_]);if(m!==0)return m;const R=Yn(c[l[_]],h[f[_]]);if(R!==0)return R}return J(l.length,f.length)}(n.mapValue,e.mapValue);default:throw F()}}function Yu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Kt(n),i=Kt(e),r=J(t.seconds,i.seconds);return r!==0?r:J(t.nanos,i.nanos)}function Xn(n){return ya(n)}function ya(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Kt(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return gn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",r=!0;for(const s of t.values||[])r?r=!1:i+=",",i+=ya(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${ya(t.fields[o])}`;return r+"}"}(n.mapValue):F()}function Xu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function va(n){return!!n&&"integerValue"in n}function uc(n){return!!n&&"arrayValue"in n}function Ju(n){return!!n&&"nullValue"in n}function Zu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hs(n){return!!n&&"mapValue"in n}function Qi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ui(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Qi(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function lT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!hs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qi(t)}setAll(e){let t=Re.emptyPath(),i={},r=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,r),i={},r=[],t=c.popLast()}o?i[c.lastSegment()]=Qi(o):r.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());hs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];hs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){ui(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Ge(Qi(this.value))}}function kf(n){const e=[];return ui(n.fields,(t,i)=>{const r=new Re([t]);if(hs(i)){const s=kf(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Ze(e)}/**
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
 */class Me{constructor(e,t,i,r,s,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Me(e,0,U.min(),U.min(),U.min(),Ge.empty(),0)}static newFoundDocument(e,t,i,r){return new Me(e,1,t,U.min(),i,r,0)}static newNoDocument(e,t){return new Me(e,2,t,U.min(),U.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,U.min(),U.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cs{constructor(e,t){this.position=e,this.inclusive=t}}function eh(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){const s=e[r],o=n.position[r];if(s.field.isKeyField()?i=L.comparator(L.fromName(o.referenceValue),t.key):i=Yn(o,t.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function th(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ur{constructor(e,t="asc"){this.field=e,this.dir=t}}function uT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Nf{}class pe extends Nf{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new dT(e,t,i):t==="array-contains"?new _T(e,i):t==="in"?new gT(e,i):t==="not-in"?new mT(e,i):t==="array-contains-any"?new yT(e,i):new pe(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new fT(e,i):new pT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Yn(t,this.value)):t!==null&&mn(this.value)===mn(t)&&this.matchesComparison(Yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class st extends Nf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new st(e,t)}matches(e){return Df(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Df(n){return n.op==="and"}function Of(n){return hT(n)&&Df(n)}function hT(n){for(const e of n.filters)if(e instanceof st)return!1;return!0}function Ea(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(Of(n))return n.filters.map(e=>Ea(e)).join(",");{const e=n.filters.map(t=>Ea(t)).join(",");return`${n.op}(${e})`}}function Mf(n,e){return n instanceof pe?function(i,r){return r instanceof pe&&i.op===r.op&&i.field.isEqual(r.field)&&ft(i.value,r.value)}(n,e):n instanceof st?function(i,r){return r instanceof st&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,c)=>s&&Mf(o,r.filters[c]),!0):!1}(n,e):void F()}function xf(n){return n instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof st?function(t){return t.op.toString()+" {"+t.getFilters().map(xf).join(" ,")+"}"}(n):"Filter"}class dT extends pe{constructor(e,t,i){super(e,t,i),this.key=L.fromName(i.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class fT extends pe{constructor(e,t){super(e,"in",t),this.keys=Lf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class pT extends pe{constructor(e,t){super(e,"not-in",t),this.keys=Lf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Lf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>L.fromName(i.referenceValue))}class _T extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return uc(t)&&lr(t.arrayValue,this.value)}}class gT extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&lr(this.value.arrayValue,t)}}class mT extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!lr(this.value.arrayValue,t)}}class yT extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!uc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>lr(this.value.arrayValue,i))}}/**
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
 */class vT{constructor(e,t=null,i=[],r=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}}function nh(n,e=null,t=[],i=[],r=null,s=null,o=null){return new vT(n,e,t,i,r,s,o)}function hc(n){const e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Ea(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Xs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Xn(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Xn(i)).join(",")),e.ue=t}return e.ue}function dc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!uT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Mf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!th(n.startAt,e.startAt)&&th(n.endAt,e.endAt)}function Ta(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class hi{constructor(e,t=null,i=[],r=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ET(n,e,t,i,r,s,o,c){return new hi(n,e,t,i,r,s,o,c)}function Js(n){return new hi(n)}function ih(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vf(n){return n.collectionGroup!==null}function Yi(n){const e=q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ce(Re.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ur(s,i))}),t.has(Re.keyField().canonicalString())||e.ce.push(new ur(Re.keyField(),i))}return e.ce}function lt(n){const e=q(n);return e.le||(e.le=TT(e,Yi(n))),e.le}function TT(n,e){if(n.limitType==="F")return nh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new ur(r.field,s)});const t=n.endAt?new Cs(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Cs(n.startAt.position,n.startAt.inclusive):null;return nh(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ia(n,e){const t=n.filters.concat([e]);return new hi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wa(n,e,t){return new hi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Zs(n,e){return dc(lt(n),lt(e))&&n.limitType===e.limitType}function Ff(n){return`${hc(lt(n))}|lt:${n.limitType}`}function Dn(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(r=>xf(r)).join(", ")}]`),Xs(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(r=>Xn(r)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(r=>Xn(r)).join(",")),`Target(${i})`}(lt(n))}; limitType=${n.limitType})`}function eo(n,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):L.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,e)&&function(i,r){for(const s of Yi(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(i,r){return!(i.startAt&&!function(o,c,l){const h=eh(o,c,l);return o.inclusive?h<=0:h<0}(i.startAt,Yi(i),r)||i.endAt&&!function(o,c,l){const h=eh(o,c,l);return o.inclusive?h>=0:h>0}(i.endAt,Yi(i),r))}(n,e)}function IT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Uf(n){return(e,t)=>{let i=!1;for(const r of Yi(n)){const s=wT(r,e,t);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function wT(n,e,t){const i=n.field.isKeyField()?L.comparator(e.key,t.key):function(s,o,c){const l=o.data.field(s),h=c.data.field(s);return l!==null&&h!==null?Yn(l,h):F()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return F()}}/**
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
 */class di{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(t,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return bf(this.inner)}size(){return this.innerSize}}/**
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
 */const AT=new le(L.comparator);function Pt(){return AT}const Bf=new le(L.comparator);function Hi(...n){let e=Bf;for(const t of n)e=e.insert(t.key,t);return e}function qf(n){let e=Bf;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function cn(){return Xi()}function jf(){return Xi()}function Xi(){return new di(n=>n.toString(),(n,e)=>n.isEqual(e))}const RT=new le(L.comparator),CT=new Ce(L.comparator);function H(...n){let e=CT;for(const t of n)e=e.add(t);return e}const ST=new Ce(J);function bT(){return ST}/**
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
 */function Wf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function $f(n){return{integerValue:""+n}}function PT(n,e){return oT(e)?$f(e):Wf(n,e)}/**
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
 */class to{constructor(){this._=void 0}}function kT(n,e,t){return n instanceof hr?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&cc(s)&&(s=lc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof dr?zf(n,e):n instanceof fr?Gf(n,e):function(r,s){const o=Hf(r,s),c=rh(o)+rh(r.Pe);return va(o)&&va(r.Pe)?$f(c):Wf(r.serializer,c)}(n,e)}function NT(n,e,t){return n instanceof dr?zf(n,e):n instanceof fr?Gf(n,e):t}function Hf(n,e){return n instanceof Ss?function(i){return va(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class hr extends to{}class dr extends to{constructor(e){super(),this.elements=e}}function zf(n,e){const t=Kf(e);for(const i of n.elements)t.some(r=>ft(r,i))||t.push(i);return{arrayValue:{values:t}}}class fr extends to{constructor(e){super(),this.elements=e}}function Gf(n,e){let t=Kf(e);for(const i of n.elements)t=t.filter(r=>!ft(r,i));return{arrayValue:{values:t}}}class Ss extends to{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function rh(n){return fe(n.integerValue||n.doubleValue)}function Kf(n){return uc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class DT{constructor(e,t){this.field=e,this.transform=t}}function OT(n,e){return n.field.isEqual(e.field)&&function(i,r){return i instanceof dr&&r instanceof dr||i instanceof fr&&r instanceof fr?Qn(i.elements,r.elements,ft):i instanceof Ss&&r instanceof Ss?ft(i.Pe,r.Pe):i instanceof hr&&r instanceof hr}(n.transform,e.transform)}class MT{constructor(e,t){this.version=e,this.transformResults=t}}class ut{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ds(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class no{}function Qf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fc(n.key,ut.none()):new Ar(n.key,n.data,ut.none());{const t=n.data,i=Ge.empty();let r=new Ce(Re.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new wn(n.key,i,new Ze(r.toArray()),ut.none())}}function xT(n,e,t){n instanceof Ar?function(r,s,o){const c=r.value.clone(),l=oh(r.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof wn?function(r,s,o){if(!ds(r.precondition,s))return void s.convertToUnknownDocument(o.version);const c=oh(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Yf(r)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ji(n,e,t,i){return n instanceof Ar?function(s,o,c,l){if(!ds(s.precondition,o))return c;const h=s.value.clone(),f=ah(s.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,i):n instanceof wn?function(s,o,c,l){if(!ds(s.precondition,o))return c;const h=ah(s.fieldTransforms,l,o),f=o.data;return f.setAll(Yf(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(_=>_.field))}(n,e,t,i):function(s,o,c){return ds(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function LT(n,e){let t=null;for(const i of n.fieldTransforms){const r=e.data.field(i.field),s=Hf(i.transform,r||null);s!=null&&(t===null&&(t=Ge.empty()),t.set(i.field,s))}return t||null}function sh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Qn(i,r,(s,o)=>OT(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ar extends no{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class wn extends no{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Yf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function oh(n,e,t){const i=new Map;ne(n.length===t.length);for(let r=0;r<t.length;r++){const s=n[r],o=s.transform,c=e.data.field(s.field);i.set(s.field,NT(o,c,t[r]))}return i}function ah(n,e,t){const i=new Map;for(const r of n){const s=r.transform,o=t.data.field(r.field);i.set(r.field,kT(s,o,e))}return i}class fc extends no{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VT extends no{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FT{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&xT(s,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ji(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ji(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=jf();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(r.key)?null:c;const l=Qf(o,c);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&Qn(this.mutations,e.mutations,(t,i)=>sh(t,i))&&Qn(this.baseMutations,e.baseMutations,(t,i)=>sh(t,i))}}class pc{constructor(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}static from(e,t,i){ne(e.mutations.length===i.length);let r=function(){return RT}();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new pc(e,t,i,r)}}/**
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
 */class UT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class BT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,K;function qT(n){switch(n){default:return F();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Xf(n){if(n===void 0)return bt("GRPC error has no .code"),b.UNKNOWN;switch(n){case de.OK:return b.OK;case de.CANCELLED:return b.CANCELLED;case de.UNKNOWN:return b.UNKNOWN;case de.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case de.INTERNAL:return b.INTERNAL;case de.UNAVAILABLE:return b.UNAVAILABLE;case de.UNAUTHENTICATED:return b.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case de.NOT_FOUND:return b.NOT_FOUND;case de.ALREADY_EXISTS:return b.ALREADY_EXISTS;case de.PERMISSION_DENIED:return b.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case de.ABORTED:return b.ABORTED;case de.OUT_OF_RANGE:return b.OUT_OF_RANGE;case de.UNIMPLEMENTED:return b.UNIMPLEMENTED;case de.DATA_LOSS:return b.DATA_LOSS;default:return F()}}(K=de||(de={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jT(){return new TextEncoder}/**
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
 */const WT=new un([4294967295,4294967295],0);function ch(n){const e=jT().encode(n),t=new vf;return t.update(e),new Uint8Array(t.digest())}function lh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new un([t,i],0),new un([r,s],0)]}class _c{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new zi(`Invalid padding: ${t}`);if(i<0)throw new zi(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new zi(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new zi(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=un.fromNumber(this.Ie)}Ee(e,t,i){let r=e.add(t.multiply(un.fromNumber(i)));return r.compare(WT)===1&&(r=new un([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ch(e),[i,r]=lh(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(e,t,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _c(s,r,t);return i.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=ch(e),[i,r]=lh(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class io{constructor(e,t,i,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,Rr.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new io(U.min(),r,new le(J),Pt(),H())}}class Rr{constructor(e,t,i,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Rr(i,t,H(),H(),H())}}/**
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
 */class fs{constructor(e,t,i,r){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=r}}class Jf{constructor(e,t){this.targetId=e,this.me=t}}class Zf{constructor(e,t,i=Fe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class uh{constructor(){this.fe=0,this.ge=dh(),this.pe=Fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=H(),t=H(),i=H();return this.ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:F()}}),new Rr(this.pe,this.ye,e,t,i)}ve(){this.we=!1,this.ge=dh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $T{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pt(),this.qe=hh(),this.Qe=new le(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,r)=>{this.ze(r)&&t(r)})}He(e){const t=e.targetId,i=e.me.count,r=this.Je(t);if(r){const s=r.target;if(Ta(s))if(i===0){const o=new L(s.path);this.Ue(t,o,Me.newNoDocument(o,U.min()))}else ne(i===1);else{const o=this.Ye(t);if(o!==i){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=t;let o,c;try{o=gn(i).toUint8Array()}catch(l){if(l instanceof Pf)return Kn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new _c(o,r,s)}catch(l){return Kn(l instanceof zi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let r=0;return i.forEach(s=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),r++)}),r}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const c=this.Je(o);if(c){if(s.current&&Ta(c.target)){const l=new L(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Me.newNoDocument(l,e))}s.be&&(t.set(o,s.Ce()),s.ve())}});let i=H();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const r=new io(e,t,this.Qe,this.ke,i);return this.ke=Pt(),this.qe=hh(),this.Qe=new le(J),r}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new uh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ce(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new uh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function hh(){return new le(L.comparator)}function dh(){return new le(L.comparator)}const HT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),GT=(()=>({and:"AND",or:"OR"}))();class KT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Aa(n,e){return n.useProto3Json||Xs(e)?e:{value:e}}function bs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ep(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function QT(n,e){return bs(n,e.toTimestamp())}function ht(n){return ne(!!n),U.fromTimestamp(function(t){const i=Kt(t);return new _e(i.seconds,i.nanos)}(n))}function gc(n,e){return Ra(n,e).canonicalString()}function Ra(n,e){const t=function(r){return new ae(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function tp(n){const e=ae.fromString(n);return ne(op(e)),e}function Ca(n,e){return gc(n.databaseId,e.path)}function Qo(n,e){const t=tp(e);if(t.get(1)!==n.databaseId.projectId)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(ip(t))}function np(n,e){return gc(n.databaseId,e)}function YT(n){const e=tp(n);return e.length===4?ae.emptyPath():ip(e)}function Sa(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ip(n){return ne(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function fh(n,e,t){return{name:Ca(n,e),fields:t.value.mapValue.fields}}function XT(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ne(f===void 0||typeof f=="string"),Fe.fromBase64String(f||"")):(ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Fe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?b.UNKNOWN:Xf(h.code);return new M(f,h.message||"")}(o);t=new Zf(i,r,s,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Qo(n,i.document.name),s=ht(i.document.updateTime),o=i.document.createTime?ht(i.document.createTime):U.min(),c=new Ge({mapValue:{fields:i.document.fields}}),l=Me.newFoundDocument(r,s,o,c),h=i.targetIds||[],f=i.removedTargetIds||[];t=new fs(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Qo(n,i.document),s=i.readTime?ht(i.readTime):U.min(),o=Me.newNoDocument(r,s),c=i.removedTargetIds||[];t=new fs([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Qo(n,i.document),s=i.removedTargetIds||[];t=new fs([],s,r,null)}else{if(!("filter"in e))return F();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new BT(r,s),c=i.targetId;t=new Jf(c,o)}}return t}function JT(n,e){let t;if(e instanceof Ar)t={update:fh(n,e.key,e.value)};else if(e instanceof fc)t={delete:Ca(n,e.key)};else if(e instanceof wn)t={update:fh(n,e.key,e.data),updateMask:aI(e.fieldMask)};else{if(!(e instanceof VT))return F();t={verify:Ca(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const c=o.transform;if(c instanceof hr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof dr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ss)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw F()}(0,i))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:QT(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(n,e.precondition)),t}function ZT(n,e){return n&&n.length>0?(ne(e!==void 0),n.map(t=>function(r,s){let o=r.updateTime?ht(r.updateTime):ht(s);return o.isEqual(U.min())&&(o=ht(s)),new MT(o,r.transformResults||[])}(t,e))):[]}function eI(n,e){return{documents:[np(n,e.path)]}}function tI(n,e){const t={structuredQuery:{}},i=e.path;let r;e.collectionGroup!==null?(r=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=np(n,r);const s=function(h){if(h.length!==0)return sp(st.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:On(m.field),direction:rI(m.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Aa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:r}}function nI(n){let e=YT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let r=null;if(i>0){ne(i===1);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(_){const m=rp(_);return m instanceof st&&Of(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(_){return _.map(m=>function(S){return new ur(Mn(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(_){let m;return m=typeof _=="object"?_.value:_,Xs(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(_){const m=!!_.before,R=_.values||[];return new Cs(R,m)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const m=!_.before,R=_.values||[];return new Cs(R,m)}(t.endAt)),ET(e,r,o,s,c,"F",l,h)}function iI(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Mn(t.unaryFilter.field);return pe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Mn(t.unaryFilter.field);return pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mn(t.unaryFilter.field);return pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mn(t.unaryFilter.field);return pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return pe.create(Mn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return st.create(t.compositeFilter.filters.map(i=>rp(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function rI(n){return HT[n]}function sI(n){return zT[n]}function oI(n){return GT[n]}function On(n){return{fieldPath:n.canonicalString()}}function Mn(n){return Re.fromServerFormat(n.fieldPath)}function sp(n){return n instanceof pe?function(t){if(t.op==="=="){if(Zu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NAN"}};if(Ju(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NOT_NAN"}};if(Ju(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:On(t.field),op:sI(t.op),value:t.value}}}(n):n instanceof st?function(t){const i=t.getFilters().map(r=>sp(r));return i.length===1?i[0]:{compositeFilter:{op:oI(t.op),filters:i}}}(n):F()}function aI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function op(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class qt{constructor(e,t,i,r,s=U.min(),o=U.min(),c=Fe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cI{constructor(e){this.ct=e}}function lI(n){const e=nI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wa(e,e.limit,"L"):e}/**
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
 */class uI{constructor(){this._n=new hI}addToCollectionParentIndex(e,t){return this._n.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Gt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Gt.min())}updateCollectionGroup(e,t,i){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class hI{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new Ce(ae.comparator),s=!r.has(i);return this.index[t]=r.add(i),s}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Ce(ae.comparator)).toArray()}}/**
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
 */class Jn{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Jn(0)}static Ln(){return new Jn(-1)}}/**
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
 */class dI{constructor(){this.changes=new di(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?k.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class pI{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&Ji(i.mutation,r,Ze.empty(),_e.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,H()).next(()=>i))}getLocalViewOfDocuments(e,t,i=H()){const r=cn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(s=>{let o=Hi();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=cn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,H()))}populateOverlays(e,t,i){const r=[];return i.forEach(s=>{t.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,i,r){let s=Pt();const o=Xi(),c=function(){return Xi()}();return t.forEach((l,h)=>{const f=i.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof wn)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ji(f.mutation,h,f.mutation.getFieldMask(),_e.now())):o.set(h.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var _;return c.set(h,new fI(f,(_=o.get(h))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const i=Xi();let r=new le((o,c)=>o-c),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=i.get(l)||Ze.empty();f=c.applyToLocalView(h,f),i.set(l,f);const _=(r.get(c.batchId)||H()).add(l);r=r.insert(c.batchId,_)})}).next(()=>{const o=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,_=jf();f.forEach(m=>{if(!s.has(m)){const R=Qf(t.get(m),i.get(m));R!==null&&_.set(m,R),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,_))}return k.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,r){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,r):this.getDocumentsMatchingCollectionQuery(e,t,i,r)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-s.size):k.resolve(cn());let c=-1,l=s;return o.next(h=>k.forEach(h,(f,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),s.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,H())).next(f=>({batchId:c,changes:qf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(i=>{let r=Hi();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i,r){const s=t.collectionGroup;let o=Hi();return this.indexManager.getCollectionParents(e,s).next(c=>k.forEach(c,l=>{const h=function(_,m){return new hi(m,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,i,r).next(f=>{f.forEach((_,m)=>{o=o.insert(_,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,s,r))).next(o=>{s.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Me.newInvalidDocument(f)))});let c=Hi();return o.forEach((l,h)=>{const f=s.get(l);f!==void 0&&Ji(f.mutation,h,Ze.empty(),_e.now()),eo(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class _I{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return k.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:ht(r.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(r){return{name:r.name,query:lI(r.bundledQuery),readTime:ht(r.readTime)}}(t)),k.resolve()}}/**
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
 */class gI{constructor(){this.overlays=new le(L.comparator),this.hr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const i=cn();return k.forEach(t,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,s)=>{this.ht(e,t,s)}),k.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.hr.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(i)),k.resolve()}getOverlaysForCollection(e,t,i){const r=cn(),s=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return k.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let s=new le((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let f=s.get(h.largestBatchId);f===null&&(f=cn(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=cn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=r)););return k.resolve(c)}ht(e,t,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.hr.get(r.largestBatchId).delete(i.key);this.hr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new UT(t,i));let s=this.hr.get(t);s===void 0&&(s=H(),this.hr.set(t,s)),this.hr.set(t,s.add(i.key))}}/**
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
 */class mc{constructor(){this.Pr=new Ce(ye.Ir),this.Tr=new Ce(ye.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const i=new ye(e,t);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Ar(new ye(e,t))}Rr(e,t){e.forEach(i=>this.removeReference(i,t))}Vr(e){const t=new L(new ae([])),i=new ye(t,e),r=new ye(t,e+1),s=[];return this.Tr.forEachInRange([i,r],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new L(new ae([])),i=new ye(t,e),r=new ye(t,e+1);let s=H();return this.Tr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ye(e,0),i=this.Pr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ye{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return L.comparator(e.key,t.key)||J(e.pr,t.pr)}static Er(e,t){return J(e.pr,t.pr)||L.comparator(e.key,t.key)}}/**
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
 */class mI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Ce(ye.Ir)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FT(s,t,i,r);this.mutationQueue.push(o);for(const c of r)this.wr=this.wr.add(new ye(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.br(i),s=r<0?0:r;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ye(t,0),r=new ye(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([i,r],o=>{const c=this.Sr(o.pr);s.push(c)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ce(J);return t.forEach(r=>{const s=new ye(r,0),o=new ye(r,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],c=>{i=i.add(c.pr)})}),k.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let s=i;L.isDocumentKey(s)||(s=s.child(""));const o=new ye(new L(s),0);let c=new Ce(J);return this.wr.forEachWhile(l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===r&&(c=c.add(l.pr)),!0)},o),k.resolve(this.Dr(c))}Dr(e){const t=[];return e.forEach(i=>{const r=this.Sr(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ne(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return k.forEach(t.mutations,r=>{const s=new ye(r.key,t.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=i})}Mn(e){}containsKey(e,t){const i=new ye(t,0),r=this.wr.firstAfterOrEqual(i);return k.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class yI{constructor(e){this.vr=e,this.docs=function(){return new le(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.vr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return k.resolve(i?i.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let i=Pt();return t.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Me.newInvalidDocument(r))}),k.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let s=Pt();const o=t.path,c=new L(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||nT(tT(f),i)<=0||(r.has(f.key)||eo(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,t,i,r){F()}Fr(e,t){return k.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new vI(this)}getSize(e){return k.resolve(this.size)}}class vI extends dI{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(i)}),k.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class EI{constructor(e){this.persistence=e,this.Mr=new di(t=>hc(t),dc),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new mc,this.targetCount=0,this.Lr=Jn.Nn()}forEachTarget(e,t){return this.Mr.forEach((i,r)=>t(r)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Or&&(this.Or=t),k.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.qn(t),k.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,i){let r=0;const s=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),k.waitFor(s).next(()=>r)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const i=this.Mr.get(t)||null;return k.resolve(i)}addMatchingKeys(e,t,i){return this.Nr.dr(t,i),k.resolve()}removeMatchingKeys(e,t,i){this.Nr.Rr(t,i);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Nr.gr(t);return k.resolve(i)}containsKey(e,t){return k.resolve(this.Nr.containsKey(t))}}/**
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
 */class TI{constructor(e,t){this.Br={},this.overlays={},this.kr=new ac(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new EI(this),this.indexManager=new uI,this.remoteDocumentCache=function(r){return new yI(r)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new cI(t),this.$r=new _I(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Br[e.toKey()];return i||(i=new mI(t,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,i){x("MemoryPersistence","Starting transaction:",e);const r=new II(this.kr.next());return this.referenceDelegate.Ur(),i(r).next(s=>this.referenceDelegate.Wr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Gr(e,t){return k.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,t)))}}class II extends rT{constructor(e){super(),this.currentSequenceNumber=e}}class yc{constructor(e){this.persistence=e,this.zr=new mc,this.jr=null}static Hr(e){return new yc(e)}get Jr(){if(this.jr)return this.jr;throw F()}addReference(e,t,i){return this.zr.addReference(i,t),this.Jr.delete(i.toString()),k.resolve()}removeReference(e,t,i){return this.zr.removeReference(i,t),this.Jr.add(i.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),k.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(r=>this.Jr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(s=>this.Jr.add(s.toString()))}).next(()=>i.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Jr,i=>{const r=L.fromPath(i);return this.Yr(e,r).next(s=>{s||t.removeEntry(r,U.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(i=>{i?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return k.or([()=>k.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class vc{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.qi=i,this.Qi=r}static Ki(e,t){let i=H(),r=H();for(const s of t.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new vc(e,t.fromCache,i,r)}}/**
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
 */class wI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AI{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return am()?8:sT(Se())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,i,r){const s={result:null};return this.ji(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,t,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new wI;return this.Ji(e,t,o).next(c=>{if(s.result=c,this.Ui)return this.Yi(e,t,o,c.size)})}).next(()=>s.result)}Yi(e,t,i,r){return i.documentReadCount<this.Wi?(Vi()<=$.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),k.resolve()):(Vi()<=$.DEBUG&&x("QueryEngine","Query:",Dn(t),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Gi*r?(Vi()<=$.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lt(t))):k.resolve())}ji(e,t){if(ih(t))return k.resolve(null);let i=lt(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=wa(t,null,"F"),i=lt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=H(...s);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,i).next(l=>{const h=this.Zi(t,c);return this.Xi(t,h,o,l.readTime)?this.ji(e,wa(t,null,"F")):this.es(e,h,t,l)}))})))}Hi(e,t,i,r){return ih(t)||r.isEqual(U.min())?k.resolve(null):this.zi.getDocuments(e,i).next(s=>{const o=this.Zi(t,s);return this.Xi(t,o,i,r)?k.resolve(null):(Vi()<=$.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dn(t)),this.es(e,o,t,eT(r,-1)).next(c=>c))})}Zi(e,t){let i=new Ce(Uf(e));return t.forEach((r,s)=>{eo(e,s)&&(i=i.add(s))}),i}Xi(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ji(e,t,i){return Vi()<=$.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Dn(t)),this.zi.getDocumentsMatchingQuery(e,t,Gt.min(),i)}es(e,t,i,r){return this.zi.getDocumentsMatchingQuery(e,i,r).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class RI{constructor(e,t,i,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new le(J),this.rs=new di(s=>hc(s),dc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(i)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pI(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function CI(n,e,t,i){return new RI(n,e,t,i)}async function ap(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,t._s(e),t.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],c=[];let l=H();for(const h of r){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(i,l).next(h=>({us:h,removedBatchIds:o,addedBatchIds:c}))})})}function SI(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const _=h.batch,m=_.keys();let R=k.resolve();return m.forEach(S=>{R=R.next(()=>f.getEntry(l,S)).next(D=>{const P=h.docVersions.get(S);ne(P!==null),D.version.compareTo(P)<0&&(_.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,_))}(t,i,e,s).next(()=>s.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let l=H();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(i,r))})}function cp(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function bI(n,e){const t=q(n),i=e.snapshotVersion;let r=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.os.newChangeBuffer({trackRemovals:!0});r=t.ns;const c=[];e.targetChanges.forEach((f,_)=>{const m=r.get(_);if(!m)return;c.push(t.Qr.removeMatchingKeys(s,f.removedDocuments,_).next(()=>t.Qr.addMatchingKeys(s,f.addedDocuments,_)));let R=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(_)!==null?R=R.withResumeToken(Fe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,i)),r=r.insert(_,R),function(D,P,B){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,R,f)&&c.push(t.Qr.updateTargetData(s,R))});let l=Pt(),h=H();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(PI(s,o,e.documentUpdates).next(f=>{l=f.cs,h=f.ls})),!i.isEqual(U.min())){const f=t.Qr.getLastRemoteSnapshotVersion(s).next(_=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,i));c.push(f)}return k.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(t.ns=r,s))}function PI(n,e,t){let i=H(),r=H();return t.forEach(s=>i=i.add(s)),e.getEntries(n,i).next(s=>{let o=Pt();return t.forEach((c,l)=>{const h=s.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{cs:o,ls:r}})}function kI(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function NI(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.Qr.getTargetData(i,e).next(s=>s?(r=s,k.resolve(r)):t.Qr.allocateTargetId(i).next(o=>(r=new qt(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Qr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=t.ns.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.ns=t.ns.insert(i.targetId,i),t.rs.set(e,i.targetId)),i})}async function ba(n,e,t){const i=q(n),r=i.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!wr(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ns=i.ns.remove(e),i.rs.delete(r.target)}function ph(n,e,t){const i=q(n);let r=U.min(),s=H();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const _=q(l),m=_.rs.get(f);return m!==void 0?k.resolve(_.ns.get(m)):_.Qr.getTargetData(h,f)}(i,o,lt(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>i.ts.getDocumentsMatchingQuery(o,e,t?r:U.min(),t?s:H())).next(c=>(DI(i,IT(e),c),{documents:c,hs:s})))}function DI(n,e,t){let i=n.ss.get(e)||U.min();t.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.ss.set(e,i)}class _h{constructor(){this.activeTargetIds=bT()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OI{constructor(){this.no=new _h,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,i){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new _h,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MI{io(e){}shutdown(){}}/**
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
 */class gh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let es=null;function Yo(){return es===null?es=function(){return 268435456+Math.round(2147483648*Math.random())}():es++,"0x"+es.toString(16)}/**
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
 */const xI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class LI{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const De="WebChannelConnection";class VI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+t.host,this.So=`projects/${r}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Do(){return!1}Co(t,i,r,s,o){const c=Yo(),l=this.vo(t,i.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${c}:`,l,r);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,o),this.Mo(t,l,h,r).then(f=>(x("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Kn("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",r),f})}xo(t,i,r,s,o,c){return this.Co(t,i,r,s,o)}Fo(t,i,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+li}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}vo(t,i){const r=xI[t];return`${this.wo}/v1/${i}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,i,r){const s=Yo();return new Promise((o,c)=>{const l=new Ef;l.setWithCredentials(!0),l.listenOnce(If.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case us.NO_ERROR:const f=l.getResponseJson();x(De,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case us.TIMEOUT:x(De,`RPC '${e}' ${s} timed out`),c(new M(b.DEADLINE_EXCEEDED,"Request time out"));break;case us.HTTP_ERROR:const _=l.getStatus();if(x(De,`RPC '${e}' ${s} failed with status:`,_,"response text:",l.getResponseText()),_>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const R=m==null?void 0:m.error;if(R&&R.status&&R.message){const S=function(P){const B=P.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(B)>=0?B:b.UNKNOWN}(R.status);c(new M(S,R.message))}else c(new M(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new M(b.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{x(De,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(r);x(De,`RPC '${e}' ${s} sending request:`,r),l.send(t,"POST",h,i,15)})}Oo(e,t,i){const r=Yo(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rf(),c=Af(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Tf({})),this.Fo(l.initMessageHeaders,t,i),l.encodeInitMessageHeaders=!0;const f=s.join("");x(De,`Creating RPC '${e}' stream ${r}: ${f}`,l);const _=o.createWebChannel(f,l);let m=!1,R=!1;const S=new LI({lo:P=>{R?x(De,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(m||(x(De,`Opening RPC '${e}' stream ${r} transport.`),_.open(),m=!0),x(De,`RPC '${e}' stream ${r} sending:`,P),_.send(P))},ho:()=>_.close()}),D=(P,B,W)=>{P.listen(B,j=>{try{W(j)}catch(z){setTimeout(()=>{throw z},0)}})};return D(_,$i.EventType.OPEN,()=>{R||(x(De,`RPC '${e}' stream ${r} transport opened.`),S.mo())}),D(_,$i.EventType.CLOSE,()=>{R||(R=!0,x(De,`RPC '${e}' stream ${r} transport closed`),S.po())}),D(_,$i.EventType.ERROR,P=>{R||(R=!0,Kn(De,`RPC '${e}' stream ${r} transport errored:`,P),S.po(new M(b.UNAVAILABLE,"The operation could not be completed")))}),D(_,$i.EventType.MESSAGE,P=>{var B;if(!R){const W=P.data[0];ne(!!W);const j=W,z=j.error||((B=j[0])===null||B===void 0?void 0:B.error);if(z){x(De,`RPC '${e}' stream ${r} received error:`,z);const Te=z.status;let ie=function(v){const E=de[v];if(E!==void 0)return Xf(E)}(Te),T=z.message;ie===void 0&&(ie=b.INTERNAL,T="Unknown error status: "+Te+" with message "+z.message),R=!0,S.po(new M(ie,T)),_.close()}else x(De,`RPC '${e}' stream ${r} received:`,W),S.yo(W)}}),D(c,wf.STAT_EVENT,P=>{P.stat===ma.PROXY?x(De,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===ma.NOPROXY&&x(De,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function Xo(){return typeof document!="undefined"?document:null}/**
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
 */function ro(n){return new KT(n,!0)}/**
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
 */class lp{constructor(e,t,i=1e3,r=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=i,this.Lo=r,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),r=Math.max(0,t-i);r>0&&x("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class up{constructor(e,t,i,r,s,o,c,l){this.oi=e,this.Go=i,this.zo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new lp(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(bt(t.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.jo===t&&this.u_(i,r)},i=>{e(()=>{const r=new M(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(r)})})}u_(e,t){const i=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(r=>{i(()=>this.c_(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FI extends up{constructor(e,t,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=XT(this.serializer,e),i=function(s){if(!("targetChange"in s))return U.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?ht(o.readTime):U.min()}(e);return this.listener.h_(t,i)}P_(e){const t={};t.database=Sa(this.serializer),t.addTarget=function(s,o){let c;const l=o.target;if(c=Ta(l)?{documents:eI(s,l)}:{query:tI(s,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ep(s,o.resumeToken);const h=Aa(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(U.min())>0){c.readTime=bs(s,o.snapshotVersion.toTimestamp());const h=Aa(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const i=iI(this.serializer,e);i&&(t.labels=i),this.i_(t)}I_(e){const t={};t.database=Sa(this.serializer),t.removeTarget=e,this.i_(t)}}class UI extends up{constructor(e,t,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=ZT(e.writeResults,e.commitTime),i=ht(e.commitTime);return this.listener.A_(i,t)}return ne(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Sa(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>JT(this.serializer,i))};this.i_(t)}}/**
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
 */class BI extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.m_=!1}f_(){if(this.m_)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,i,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Ra(t,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(b.UNKNOWN,s.toString())})}xo(e,t,i,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,Ra(t,i),r,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(b.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class qI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(bt(t),this.y_=!1):x("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class jI{constructor(e,t,i,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{i.enqueueAndForget(async()=>{An(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=q(l);h.M_.add(4),await Cr(h),h.N_.set("Unknown"),h.M_.delete(4),await so(h)}(this))})}),this.N_=new qI(i,r)}}async function so(n){if(An(n))for(const e of n.x_)await e(!0)}async function Cr(n){for(const e of n.x_)await e(!1)}function hp(n,e){const t=q(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),wc(t)?Ic(t):fi(t).Xo()&&Tc(t,e))}function Ec(n,e){const t=q(n),i=fi(t);t.F_.delete(e),i.Xo()&&dp(t,e),t.F_.size===0&&(i.Xo()?i.n_():An(t)&&t.N_.set("Unknown"))}function Tc(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fi(n).P_(e)}function dp(n,e){n.L_.xe(e),fi(n).I_(e)}function Ic(n){n.L_=new $T({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),fi(n).start(),n.N_.w_()}function wc(n){return An(n)&&!fi(n).Zo()&&n.F_.size>0}function An(n){return q(n).M_.size===0}function fp(n){n.L_=void 0}async function WI(n){n.N_.set("Online")}async function $I(n){n.F_.forEach((e,t)=>{Tc(n,e)})}async function HI(n,e){fp(n),wc(n)?(n.N_.D_(e),Ic(n)):n.N_.set("Unknown")}async function zI(n,e,t){if(n.N_.set("Online"),e instanceof Zf&&e.state===2&&e.cause)try{await async function(r,s){const o=s.cause;for(const c of s.targetIds)r.F_.has(c)&&(await r.remoteSyncer.rejectListen(c,o),r.F_.delete(c),r.L_.removeTarget(c))}(n,e)}catch(i){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ps(n,i)}else if(e instanceof fs?n.L_.Ke(e):e instanceof Jf?n.L_.He(e):n.L_.We(e),!t.isEqual(U.min()))try{const i=await cp(n.localStore);t.compareTo(i)>=0&&await function(s,o){const c=s.L_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.F_.get(h);f&&s.F_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=s.F_.get(l);if(!f)return;s.F_.set(l,f.withResumeToken(Fe.EMPTY_BYTE_STRING,f.snapshotVersion)),dp(s,l);const _=new qt(f.target,l,h,f.sequenceNumber);Tc(s,_)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(i){x("RemoteStore","Failed to raise snapshot:",i),await Ps(n,i)}}async function Ps(n,e,t){if(!wr(e))throw e;n.M_.add(1),await Cr(n),n.N_.set("Offline"),t||(t=()=>cp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await so(n)})}function pp(n,e){return e().catch(t=>Ps(n,t,e))}async function oo(n){const e=q(n),t=Qt(e);let i=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;GI(e);)try{const r=await kI(e.localStore,i);if(r===null){e.v_.length===0&&t.n_();break}i=r.batchId,KI(e,r)}catch(r){await Ps(e,r)}_p(e)&&gp(e)}function GI(n){return An(n)&&n.v_.length<10}function KI(n,e){n.v_.push(e);const t=Qt(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function _p(n){return An(n)&&!Qt(n).Zo()&&n.v_.length>0}function gp(n){Qt(n).start()}async function QI(n){Qt(n).V_()}async function YI(n){const e=Qt(n);for(const t of n.v_)e.d_(t.mutations)}async function XI(n,e,t){const i=n.v_.shift(),r=pc.from(i,e,t);await pp(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await oo(n)}async function JI(n,e){e&&Qt(n).E_&&await async function(i,r){if(function(o){return qT(o)&&o!==b.ABORTED}(r.code)){const s=i.v_.shift();Qt(i).t_(),await pp(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await oo(i)}}(n,e),_p(n)&&gp(n)}async function mh(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const i=An(t);t.M_.add(3),await Cr(t),i&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await so(t)}async function ZI(n,e){const t=q(n);e?(t.M_.delete(2),await so(t)):e||(t.M_.add(2),await Cr(t),t.N_.set("Unknown"))}function fi(n){return n.B_||(n.B_=function(t,i,r){const s=q(t);return s.f_(),new FI(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Po:WI.bind(null,n),To:$I.bind(null,n),Ao:HI.bind(null,n),h_:zI.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),wc(n)?Ic(n):n.N_.set("Unknown")):(await n.B_.stop(),fp(n))})),n.B_}function Qt(n){return n.k_||(n.k_=function(t,i,r){const s=q(t);return s.f_(),new UI(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:QI.bind(null,n),Ao:JI.bind(null,n),R_:YI.bind(null,n),A_:XI.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await oo(n)):(await n.k_.stop(),n.v_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class Ac{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,c=new Ac(e,t,o,r,s);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rc(n,e){if(bt("AsyncQueue",`${e}: ${n}`),wr(n))return new M(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class jn{constructor(e){this.comparator=e?(t,i)=>e(t,i)||L.comparator(t.key,i.key):(t,i)=>L.comparator(t.key,i.key),this.keyedMap=Hi(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new jn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new jn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class yh{constructor(){this.q_=new le(L.comparator)}track(e){const t=e.doc.key,i=this.q_.get(t);i?e.type!==0&&i.type===3?this.q_=this.q_.insert(t,e):e.type===3&&i.type!==1?this.q_=this.q_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.q_=this.q_.remove(t):e.type===1&&i.type===2?this.q_=this.q_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):F():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Zn{constructor(e,t,i,r,s,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,r,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Zn(e,t,jn.emptySet(t),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class ew{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class tw{constructor(){this.queries=new di(e=>Ff(e),Zs),this.onlineState="Unknown",this.z_=new Set}}async function Cc(n,e){const t=q(n);let i=3;const r=e.query;let s=t.queries.get(r);s?!s.W_()&&e.G_()&&(i=2):(s=new ew,i=e.G_()?0:1);try{switch(i){case 0:s.K_=await t.onListen(r,!0);break;case 1:s.K_=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const c=Rc(o,`Initialization of query '${Dn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&bc(t)}async function Sc(n,e){const t=q(n),i=e.query;let r=3;const s=t.queries.get(i);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?r=e.G_()?0:1:!s.W_()&&e.G_()&&(r=2))}switch(r){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function nw(n,e){const t=q(n);let i=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const c of o.U_)c.H_(r)&&(i=!0);o.K_=r}}i&&bc(t)}function iw(n,e,t){const i=q(n),r=i.queries.get(e);if(r)for(const s of r.U_)s.onError(t);i.queries.delete(e)}function bc(n){n.z_.forEach(e=>{e.next()})}var Pa,vh;(vh=Pa||(Pa={})).J_="default",vh.Cache="cache";class Pc{constructor(e,t,i){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=i||{}}H_(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Zn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const i=t!=="Offline";return(!this.options.ra||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Pa.Cache}}/**
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
 */class mp{constructor(e){this.key=e}}class yp{constructor(e){this.key=e}}class rw{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=H(),this.mutatedKeys=H(),this.Ia=Uf(e),this.Ta=new jn(this.Ia)}get Ea(){return this.la}da(e,t){const i=t?t.Aa:new yh,r=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,c=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,_)=>{const m=r.get(f),R=eo(this.query,_)?_:null,S=!!m&&this.mutatedKeys.has(m.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;m&&R?m.data.isEqual(R.data)?S!==D&&(i.track({type:3,doc:R}),P=!0):this.Ra(m,R)||(i.track({type:2,doc:R}),P=!0,(l&&this.Ia(R,l)>0||h&&this.Ia(R,h)<0)&&(c=!0)):!m&&R?(i.track({type:0,doc:R}),P=!0):m&&!R&&(i.track({type:1,doc:m}),P=!0,(l||h)&&(c=!0)),P&&(R?(o=o.add(R),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),i.track({type:1,doc:f})}return{Ta:o,Aa:i,Xi:c,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,r){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,_)=>function(R,S){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return D(R)-D(S)}(f.type,_.type)||this.Ia(f.doc,_.doc)),this.Va(i),r=r!=null&&r;const c=t&&!r?this.ma():[],l=this.Pa.size===0&&this.current&&!r?1:0,h=l!==this.ha;return this.ha=l,o.length!==0||h?{snapshot:new Zn(this.query,e.Ta,s,o,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new yh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=H(),this.Ta.forEach(i=>{this.ga(i.key)&&(this.Pa=this.Pa.add(i.key))});const t=[];return e.forEach(i=>{this.Pa.has(i)||t.push(new yp(i))}),this.Pa.forEach(i=>{e.has(i)||t.push(new mp(i))}),t}pa(e){this.la=e.hs,this.Pa=H();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Zn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class sw{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ow{constructor(e){this.key=e,this.wa=!1}}class aw{constructor(e,t,i,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new di(c=>Ff(c),Zs),this.Da=new Map,this.Ca=new Set,this.va=new le(L.comparator),this.Fa=new Map,this.Ma=new mc,this.xa={},this.Oa=new Map,this.Na=Jn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function cw(n,e,t=!0){const i=Ap(n);let r;const s=i.ba.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ya()):r=await vp(i,e,t,!0),r}async function lw(n,e){const t=Ap(n);await vp(t,e,!0,!1)}async function vp(n,e,t,i){const r=await NI(n.localStore,lt(e)),s=r.targetId,o=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let c;return i&&(c=await uw(n,e,s,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&hp(n.remoteStore,r),c}async function uw(n,e,t,i,r){n.Ba=(_,m,R)=>async function(D,P,B,W){let j=P.view.da(B);j.Xi&&(j=await ph(D.localStore,P.query,!1).then(({documents:T})=>P.view.da(T,j)));const z=W&&W.targetChanges.get(P.targetId),Te=W&&W.targetMismatches.get(P.targetId)!=null,ie=P.view.applyChanges(j,D.isPrimaryClient,z,Te);return Th(D,P.targetId,ie.fa),ie.snapshot}(n,_,m,R);const s=await ph(n.localStore,e,!0),o=new rw(e,s.hs),c=o.da(s.documents),l=Rr.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),h=o.applyChanges(c,n.isPrimaryClient,l);Th(n,t,h.fa);const f=new sw(e,t,o);return n.ba.set(e,f),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),h.snapshot}async function hw(n,e,t){const i=q(n),r=i.ba.get(e),s=i.Da.get(r.targetId);if(s.length>1)return i.Da.set(r.targetId,s.filter(o=>!Zs(o,e))),void i.ba.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await ba(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),t&&Ec(i.remoteStore,r.targetId),ka(i,r.targetId)}).catch(Ir)):(ka(i,r.targetId),await ba(i.localStore,r.targetId,!0))}async function dw(n,e){const t=q(n),i=t.ba.get(e),r=t.Da.get(i.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ec(t.remoteStore,i.targetId))}async function fw(n,e,t){const i=Ew(n);try{const r=await function(o,c){const l=q(o),h=_e.now(),f=c.reduce((R,S)=>R.add(S.key),H());let _,m;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=Pt(),D=H();return l.os.getEntries(R,f).next(P=>{S=P,S.forEach((B,W)=>{W.isValidDocument()||(D=D.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,S)).next(P=>{_=P;const B=[];for(const W of c){const j=LT(W,_.get(W.key).overlayedDocument);j!=null&&B.push(new wn(W.key,j,kf(j.value.mapValue),ut.exists(!0)))}return l.mutationQueue.addMutationBatch(R,h,B,c)}).next(P=>{m=P;const B=P.applyToLocalDocumentSet(_,D);return l.documentOverlayCache.saveOverlays(R,P.batchId,B)})}).then(()=>({batchId:m.batchId,changes:qf(_)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(o,c,l){let h=o.xa[o.currentUser.toKey()];h||(h=new le(J)),h=h.insert(c,l),o.xa[o.currentUser.toKey()]=h}(i,r.batchId,t),await Sr(i,r.changes),await oo(i.remoteStore)}catch(r){const s=Rc(r,"Failed to persist write");t.reject(s)}}async function Ep(n,e){const t=q(n);try{const i=await bI(t.localStore,e);e.targetChanges.forEach((r,s)=>{const o=t.Fa.get(s);o&&(ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.wa=!0:r.modifiedDocuments.size>0?ne(o.wa):r.removedDocuments.size>0&&(ne(o.wa),o.wa=!1))}),await Sr(t,i,e)}catch(i){await Ir(i)}}function Eh(n,e,t){const i=q(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const r=[];i.ba.forEach((s,o)=>{const c=o.view.j_(e);c.snapshot&&r.push(c.snapshot)}),function(o,c){const l=q(o);l.onlineState=c;let h=!1;l.queries.forEach((f,_)=>{for(const m of _.U_)m.j_(c)&&(h=!0)}),h&&bc(l)}(i.eventManager,e),r.length&&i.Sa.h_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function pw(n,e,t){const i=q(n);i.sharedClientState.updateQueryState(e,"rejected",t);const r=i.Fa.get(e),s=r&&r.key;if(s){let o=new le(L.comparator);o=o.insert(s,Me.newNoDocument(s,U.min()));const c=H().add(s),l=new io(U.min(),new Map,new le(J),o,c);await Ep(i,l),i.va=i.va.remove(s),i.Fa.delete(e),kc(i)}else await ba(i.localStore,e,!1).then(()=>ka(i,e,t)).catch(Ir)}async function _w(n,e){const t=q(n),i=e.batch.batchId;try{const r=await SI(t.localStore,e);Ip(t,i,null),Tp(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Sr(t,r)}catch(r){await Ir(r)}}async function gw(n,e,t){const i=q(n);try{const r=await function(o,c){const l=q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(_=>(ne(_!==null),f=_.keys(),l.mutationQueue.removeMutationBatch(h,_))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(i.localStore,e);Ip(i,e,t),Tp(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Sr(i,r)}catch(r){await Ir(r)}}function Tp(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Ip(n,e,t){const i=q(n);let r=i.xa[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(t?s.reject(t):s.resolve(),r=r.remove(e)),i.xa[i.currentUser.toKey()]=r}}function ka(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Da.get(e))n.ba.delete(i),t&&n.Sa.ka(i,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(i=>{n.Ma.containsKey(i)||wp(n,i)})}function wp(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(Ec(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),kc(n))}function Th(n,e,t){for(const i of t)i instanceof mp?(n.Ma.addReference(i.key,e),mw(n,i)):i instanceof yp?(x("SyncEngine","Document no longer in limbo: "+i.key),n.Ma.removeReference(i.key,e),n.Ma.containsKey(i.key)||wp(n,i.key)):F()}function mw(n,e){const t=e.key,i=t.path.canonicalString();n.va.get(t)||n.Ca.has(i)||(x("SyncEngine","New document in limbo: "+t),n.Ca.add(i),kc(n))}function kc(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new L(ae.fromString(e)),i=n.Na.next();n.Fa.set(i,new ow(t)),n.va=n.va.insert(t,i),hp(n.remoteStore,new qt(lt(Js(t.path)),i,"TargetPurposeLimboResolution",ac.oe))}}async function Sr(n,e,t){const i=q(n),r=[],s=[],o=[];i.ba.isEmpty()||(i.ba.forEach((c,l)=>{o.push(i.Ba(l,e,t).then(h=>{if((h||t)&&i.isPrimaryClient){const f=h&&!h.fromCache;i.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(h){r.push(h);const f=vc.Ki(l.targetId,h);s.push(f)}}))}),await Promise.all(o),i.Sa.h_(r),await async function(l,h){const f=q(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>k.forEach(h,m=>k.forEach(m.qi,R=>f.persistence.referenceDelegate.addReference(_,m.targetId,R)).next(()=>k.forEach(m.Qi,R=>f.persistence.referenceDelegate.removeReference(_,m.targetId,R)))))}catch(_){if(!wr(_))throw _;x("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const m=_.targetId;if(!_.fromCache){const R=f.ns.get(m),S=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(S);f.ns=f.ns.insert(m,D)}}}(i.localStore,s))}async function yw(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const i=await ap(t.localStore,e);t.currentUser=e,function(s,o){s.Oa.forEach(c=>{c.forEach(l=>{l.reject(new M(b.CANCELLED,o))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Sr(t,i.us)}}function vw(n,e){const t=q(n),i=t.Fa.get(e);if(i&&i.wa)return H().add(i.key);{let r=H();const s=t.Da.get(e);if(!s)return r;for(const o of s){const c=t.ba.get(o);r=r.unionWith(c.view.Ea)}return r}}function Ap(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ep.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pw.bind(null,e),e.Sa.h_=nw.bind(null,e.eventManager),e.Sa.ka=iw.bind(null,e.eventManager),e}function Ew(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_w.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gw.bind(null,e),e}class Ih{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ro(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return CI(this.persistence,new AI,e.initialUser,this.serializer)}createPersistence(e){return new TI(yc.Hr,this.serializer)}createSharedClientState(e){return new OI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Eh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=yw.bind(null,this.syncEngine),await ZI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tw}()}createDatastore(e){const t=ro(e.databaseInfo.databaseId),i=function(s){return new VI(s)}(e.databaseInfo);return function(s,o,c,l){return new BI(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,r,s,o,c){return new jI(i,r,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Eh(this.syncEngine,t,0),function(){return gh.D()?new gh:new MI}())}createSyncEngine(e,t){return function(r,s,o,c,l,h,f){const _=new aw(r,s,o,c,l,h);return f&&(_.La=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(i){const r=q(i);x("RemoteStore","RemoteStore shutting down."),r.M_.add(5),await Cr(r),r.O_.shutdown(),r.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class Nc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Iw{constructor(e,t,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=Oe.UNAUTHENTICATED,this.clientId=Sf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Rc(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Jo(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await ap(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Aw(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>mh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>mh(e.remoteStore,r)),n._onlineComponents=e}function ww(n){return n.name==="FirebaseError"?n.code===b.FAILED_PRECONDITION||n.code===b.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Aw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!ww(t))throw t;Kn("Error using user provided cache. Falling back to memory cache: "+t),await Jo(n,new Ih)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Jo(n,new Ih);return n._offlineComponents}async function Rp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await wh(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await wh(n,new Tw))),n._onlineComponents}function Rw(n){return Rp(n).then(e=>e.syncEngine)}async function ks(n){const e=await Rp(n),t=e.eventManager;return t.onListen=cw.bind(null,e.syncEngine),t.onUnlisten=hw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=lw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dw.bind(null,e.syncEngine),t}function Cw(n,e,t={}){const i=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const f=new Nc({next:m=>{o.enqueueAndForget(()=>Sc(s,_));const R=m.docs.has(c);!R&&m.fromCache?h.reject(new M(b.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&m.fromCache&&l&&l.source==="server"?h.reject(new M(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new Pc(Js(c.path),f,{includeMetadataChanges:!0,ra:!0});return Cc(s,_)}(await ks(n),n.asyncQueue,e,t,i)),i.promise}function Sw(n,e,t={}){const i=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const f=new Nc({next:m=>{o.enqueueAndForget(()=>Sc(s,_)),m.fromCache&&l.source==="server"?h.reject(new M(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new Pc(c,f,{includeMetadataChanges:!0,ra:!0});return Cc(s,_)}(await ks(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function Cp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ah=new Map;/**
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
 */function Sp(n,e,t){if(!t)throw new M(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function bw(n,e,t,i){if(e===!0&&i===!0)throw new M(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Rh(n){if(!L.isDocumentKey(n))throw new M(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ch(n){if(L.isDocumentKey(n))throw new M(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ao(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ao(n);throw new M(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Sh{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new M(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cp((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class co{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sh(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new HE;switch(i.type){case"firstParty":return new QE(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new M(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Ah.get(t);i&&(x("ComponentProvider","Removing Datastore"),Ah.delete(t),i.terminate())}(this),Promise.resolve()}}function Pw(n,e,t,i={}){var r;const s=(n=dt(n,co))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let c,l;if(typeof i.mockUserToken=="string")c=i.mockUserToken,l=Oe.MOCK_USER;else{c=Ga(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new M(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Oe(h)}n._authCredentials=new zE(new Cf(c,l))}}/**
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
 */class en{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new en(this.firestore,e,this._query)}}class $e{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class Ht extends en{constructor(e,t,i){super(e,t,Js(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new L(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function aS(n,e,...t){if(n=he(n),Sp("collection","path",e),n instanceof co){const i=ae.fromString(e,...t);return Ch(i),new Ht(n,null,i)}{if(!(n instanceof $e||n instanceof Ht))throw new M(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ae.fromString(e,...t));return Ch(i),new Ht(n.firestore,null,i)}}function kw(n,e,...t){if(n=he(n),arguments.length===1&&(e=Sf.newId()),Sp("doc","path",e),n instanceof co){const i=ae.fromString(e,...t);return Rh(i),new $e(n,null,new L(i))}{if(!(n instanceof $e||n instanceof Ht))throw new M(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ae.fromString(e,...t));return Rh(i),new $e(n.firestore,n instanceof Ht?n.converter:null,new L(i))}}/**
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
 */class Nw{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new lp(this,"async_queue_retry"),this.hu=()=>{const t=Xo();t&&x("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Xo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Xo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Rt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!wr(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(i=>{this.au=i,this.uu=!1;const r=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(i);throw bt("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.uu=!1,i))));return this.iu=t,t}enqueueAfterDelay(e,t,i){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const r=Ac.createAndSchedule(this,e,t,i,s=>this.Eu(s));return this._u.push(r),r}Pu(){this.au&&F()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function bh(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const r=t;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class yn extends co{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=function(){return new Nw}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bp(this),this._firestoreClient.terminate()}}function Dw(n,e){const t=typeof n=="object"?n:oi(),i=typeof n=="string"?n:e||"(default)",r=Xt(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=$s("firestore");s&&Pw(r,...s)}return r}function lo(n){return n._firestoreClient||bp(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function bp(n){var e,t,i;const r=n._freezeSettings(),s=function(c,l,h,f){return new cT(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Cp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._firestoreClient=new Iw(n._authCredentials,n._appCheckCredentials,n._queue,s),((t=r.localCache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((i=r.localCache)===null||i===void 0?void 0:i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ei(Fe.fromBase64String(e))}catch(t){throw new M(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ei(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Dc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Oc{constructor(e){this._methodName=e}}/**
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
 */class Mc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */const Ow=/^__.*__$/;class Mw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ar(e,this.data,t,this.fieldTransforms)}}function Pp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class xc{constructor(e,t,i,r,s,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.gu({path:i,yu:!1});return r.wu(e),r}Su(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.gu({path:i,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ns(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Pp(this.fu)&&Ow.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class xw{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||ro(e)}Fu(e,t,i,r=!1){return new xc({fu:e,methodName:t,vu:i,path:Re.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kp(n){const e=n._freezeSettings(),t=ro(n._databaseId);return new xw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Lw(n,e,t,i,r,s={}){const o=n.Fu(s.merge||s.mergeFields?2:0,e,t,r);Op("Data must be an object, but it was:",o,i);const c=Np(i,o);let l,h;if(s.merge)l=new Ze(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const _ of s.mergeFields){const m=Fw(e,_,t);if(!o.contains(m))throw new M(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Bw(f,m)||f.push(m)}l=new Ze(f),h=o.fieldTransforms.filter(_=>l.covers(_.field))}else l=null,h=o.fieldTransforms;return new Mw(new Ge(c),l,h)}class Lc extends Oc{_toFieldTransform(e){return new DT(e.path,new hr)}isEqual(e){return e instanceof Lc}}function Vw(n,e,t,i=!1){return Vc(t,n.Fu(i?4:3,e))}function Vc(n,e){if(Dp(n=he(n)))return Op("Unsupported field value:",e,n),Np(n,e);if(n instanceof Oc)return function(i,r){if(!Pp(r.fu))throw r.Du(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Du(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const c of i){let l=Vc(c,r.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(i,r){if((i=he(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return PT(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=_e.fromDate(i);return{timestampValue:bs(r.serializer,s)}}if(i instanceof _e){const s=new _e(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:bs(r.serializer,s)}}if(i instanceof Mc)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ei)return{bytesValue:ep(r.serializer,i._byteString)};if(i instanceof $e){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gc(i.firestore._databaseId||r.databaseId,i._key.path)}}throw r.Du(`Unsupported field value: ${ao(i)}`)}(n,e)}function Np(n,e){const t={};return bf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(n,(i,r)=>{const s=Vc(r,e.pu(i));s!=null&&(t[i]=s)}),{mapValue:{fields:t}}}function Dp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof Mc||n instanceof ei||n instanceof $e||n instanceof Oc)}function Op(n,e,t){if(!Dp(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const i=ao(t);throw i==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+i)}}function Fw(n,e,t){if((e=he(e))instanceof Dc)return e._internalPath;if(typeof e=="string")return Mp(n,e);throw Ns("Field path arguments must be of type string or ",n,!1,void 0,t)}const Uw=new RegExp("[~\\*/\\[\\]]");function Mp(n,e,t){if(e.search(Uw)>=0)throw Ns(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Dc(...e.split("."))._internalPath}catch{throw Ns(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ns(n,e,t,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new M(b.INVALID_ARGUMENT,c+n+l)}function Bw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class xp{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qw extends xp{data(){return super.data()}}function Fc(n,e){return typeof e=="string"?Mp(n,e):e instanceof Dc?e._internalPath:e._delegate._internalPath}/**
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
 */function Lp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uc{}class Vp extends Uc{}function cS(n,e,...t){let i=[];e instanceof Uc&&i.push(e),i=i.concat(t),function(s){const o=s.filter(l=>l instanceof qc).length,c=s.filter(l=>l instanceof Bc).length;if(o>1||o>0&&c>0)throw new M(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class Bc extends Vp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Bc(e,t,i)}_apply(e){const t=this._parse(e);return Fp(e._query,t),new en(e.firestore,e.converter,Ia(e._query,t))}_parse(e){const t=kp(e.firestore);return function(s,o,c,l,h,f,_){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new M(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){kh(_,f);const R=[];for(const S of _)R.push(Ph(l,s,S));m={arrayValue:{values:R}}}else m=Ph(l,s,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||kh(_,f),m=Vw(c,o,_,f==="in"||f==="not-in");return pe.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class qc extends Uc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qc(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:st.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let o=r;const c=s.getFlattenedFilters();for(const l of c)Fp(o,l),o=Ia(o,l)}(e._query,t),new en(e.firestore,e.converter,Ia(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jc extends Vp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new jc(e,t)}_apply(e){const t=function(r,s,o){if(r.startAt!==null)throw new M(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ur(s,o)}(e._query,this._field,this._direction);return new en(e.firestore,e.converter,function(r,s){const o=r.explicitOrderBy.concat([s]);return new hi(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function lS(n,e="asc"){const t=e,i=Fc("orderBy",n);return jc._create(i,t)}function Ph(n,e,t){if(typeof(t=he(t))=="string"){if(t==="")throw new M(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vf(e)&&t.indexOf("/")!==-1)throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ae.fromString(t));if(!L.isDocumentKey(i))throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Xu(n,new L(i))}if(t instanceof $e)return Xu(n,t._key);throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ao(t)}.`)}function kh(n,e){if(!Array.isArray(n)||n.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fp(n,e){const t=function(r,s){for(const o of r)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class jw{convertValue(e,t="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ui(e,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertGeoPoint(e){return new Mc(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=lc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ar(e));default:return null}}convertTimestamp(e){const t=Kt(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ae.fromString(e);ne(op(i));const r=new cr(i.get(1),i.get(3)),s=new L(i.popFirst(5));return r.isEqual(t)||bt(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Ww(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class Gi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Up extends xp{constructor(e,t,i,r,s,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Fc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class ps extends Up{data(e={}){return super.data(e)}}class Bp{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Gi(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ps(this._firestore,this._userDataWriter,i.key,i,new Gi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(c=>{const l=new ps(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Gi(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new ps(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Gi(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:$w(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function $w(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function uS(n){n=dt(n,$e);const e=dt(n.firestore,yn);return Cw(lo(e),n._key).then(t=>jp(e,n,t))}class Wc extends jw{constructor(e){super(),this.firestore=e}convertBytes(e){return new ei(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}function hS(n){n=dt(n,en);const e=dt(n.firestore,yn),t=lo(e),i=new Wc(e);return Lp(n._query),Sw(t,n._query).then(r=>new Bp(e,i,n,r))}function dS(n){return qp(dt(n.firestore,yn),[new fc(n._key,ut.none())])}function fS(n,e){const t=dt(n.firestore,yn),i=kw(n),r=Ww(n.converter,e);return qp(t,[Lw(kp(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,ut.exists(!1))]).then(()=>i)}function pS(n,...e){var t,i,r;n=he(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||bh(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(bh(e[o])){const _=e[o];e[o]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[o+1]=(i=_.error)===null||i===void 0?void 0:i.bind(_),e[o+2]=(r=_.complete)===null||r===void 0?void 0:r.bind(_)}let l,h,f;if(n instanceof $e)h=dt(n.firestore,yn),f=Js(n._key.path),l={next:_=>{e[o]&&e[o](jp(h,n,_))},error:e[o+1],complete:e[o+2]};else{const _=dt(n,en);h=dt(_.firestore,yn),f=_._query;const m=new Wc(h);l={next:R=>{e[o]&&e[o](new Bp(h,m,_,R))},error:e[o+1],complete:e[o+2]},Lp(n._query)}return function(m,R,S,D){const P=new Nc(D),B=new Pc(R,P,S);return m.asyncQueue.enqueueAndForget(async()=>Cc(await ks(m),B)),()=>{P.$a(),m.asyncQueue.enqueueAndForget(async()=>Sc(await ks(m),B))}}(lo(h),f,c,l)}function qp(n,e){return function(i,r){const s=new Rt;return i.asyncQueue.enqueueAndForget(async()=>fw(await Rw(i),r,s)),s.promise}(lo(n),e)}function jp(n,e,t){const i=t.docs.get(e._key),r=new Wc(n);return new Up(n,r,e._key,i,new Gi(t.hasPendingWrites,t.fromCache),e.converter)}function _S(){return new Lc("serverTimestamp")}(function(e,t=!0){(function(r){li=r})(Jt),it(new Qe("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),c=new yn(new GE(i.getProvider("auth-internal")),new XE(i.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new M(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(h.options.projectId,f)}(o,r),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),qe(Gu,"4.6.3",e),qe(Gu,"4.6.3","esm2017")})();const Nh="@firebase/database",Dh="1.0.5";/**
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
 */let Wp="";function Hw(n){Wp=n}/**
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
 */class zw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:nr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Gw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Nt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const $p=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zw(e)}}catch{}return new Gw},ln=$p("localStorage"),Na=$p("sessionStorage");/**
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
 */const Wn=new yr("@firebase/database"),Kw=function(){let n=1;return function(){return n++}}(),Hp=function(n){const e=vm(n),t=new pm;t.update(e);const i=t.digest();return js.encodeByteArray(i)},br=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=br.apply(null,i):typeof i=="object"?e+=Ae(i):e+=i,e+=" "}return e};let hn=null,Oh=!0;const Qw=function(n,e){O(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Wn.logLevel=$.VERBOSE,hn=Wn.log.bind(Wn),e&&Na.set("logging_enabled",!0)):typeof n=="function"?hn=n:(hn=null,Na.remove("logging_enabled"))},xe=function(...n){if(Oh===!0&&(Oh=!1,hn===null&&Na.get("logging_enabled")===!0&&Qw(!0)),hn){const e=br.apply(null,n);hn(e)}},Pr=function(n){return function(...e){xe(n,...e)}},Da=function(...n){const e="FIREBASE INTERNAL ERROR: "+br(...n);Wn.error(e)},kt=function(...n){const e=`FIREBASE FATAL ERROR: ${br(...n)}`;throw Wn.error(e),new Error(e)},ze=function(...n){const e="FIREBASE WARNING: "+br(...n);Wn.warn(e)},Yw=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zp=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Xw=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ti="[MIN_NAME]",vn="[MAX_NAME]",pi=function(n,e){if(n===e)return 0;if(n===ti||e===vn)return-1;if(e===ti||n===vn)return 1;{const t=Mh(n),i=Mh(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Jw=function(n,e){return n===e?0:n<e?-1:1},Fi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ae(e))},$c=function(n){if(typeof n!="object"||n===null)return Ae(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Ae(e[i]),t+=":",t+=$c(n[e[i]]);return t+="}",t},Gp=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function Ye(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Kp=function(n){O(!zp(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,c,l;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=c+i,o=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const h=[];for(l=t;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(r?1:0),h.reverse();const f=h.join("");let _="";for(l=0;l<64;l+=8){let m=parseInt(f.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),_=_+m}return _.toLowerCase()},Zw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tA=new RegExp("^-?(0*)\\d{1,10}$"),nA=-2147483648,iA=2147483647,Mh=function(n){if(tA.test(n)){const e=Number(n);if(e>=nA&&e<=iA)return e}return null},kr=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ze("Exception was thrown by user callback.",t),e},Math.floor(0))}},rA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class sA{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class oA{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class $n{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$n.OWNER="owner";/**
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
 */const Hc="5",Qp="v",Yp="s",Xp="r",Jp="f",Zp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,e_="ls",t_="p",Oa="ac",n_="websocket",i_="long_polling";/**
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
 */class r_{constructor(e,t,i,r,s=!1,o="",c=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function aA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function s_(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let i;if(e===n_)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===i_)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aA(n)&&(t.ns=n.namespace);const r=[];return Ye(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class cA{constructor(){this.counters_={}}incrementCounter(e,t=1){Nt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Zg(this.counters_)}}/**
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
 */const Zo={},ea={};function zc(n){const e=n.toString();return Zo[e]||(Zo[e]=new cA),Zo[e]}function lA(n,e){const t=n.toString();return ea[t]||(ea[t]=e()),ea[t]}/**
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
 */class uA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&kr(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const xh="start",hA="close",dA="pLPCommand",fA="pRTLPCB",o_="id",a_="pw",c_="ser",pA="cb",_A="seg",gA="ts",mA="d",yA="dframe",l_=1870,u_=30,vA=l_-u_,EA=25e3,TA=3e4;class Ln{constructor(e,t,i,r,s,o,c){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pr(e),this.stats_=zc(t),this.urlFn=l=>(this.appCheckToken&&(l[Oa]=this.appCheckToken),s_(t,i_,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new uA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TA)),Xw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gc((...s)=>{const[o,c,l,h,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xh)this.id=c,this.password=l;else if(o===hA)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,c]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const i={};i[xh]="t",i[c_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[pA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Qp]=Hc,this.transportSessionId&&(i[Yp]=this.transportSessionId),this.lastSessionId&&(i[e_]=this.lastSessionId),this.applicationId&&(i[t_]=this.applicationId),this.appCheckToken&&(i[Oa]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Zp.test(location.hostname)&&(i[Xp]=Jp);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ln.forceAllow_=!0}static forceDisallow(){Ln.forceDisallow_=!0}static isAvailable(){return Ln.forceAllow_?!0:!Ln.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Zw()&&!eA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Cd(t),r=Gp(i,vA);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[yA]="t",i[o_]=e,i[a_]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ae(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Gc{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Kw(),window[dA+this.uniqueCallbackIdentifier]=e,window[fA+this.uniqueCallbackIdentifier]=t,this.myIFrame=Gc.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const c=document.domain;s='<script>document.domain="'+c+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){xe("frame writing exception"),c.stack&&xe(c.stack),xe(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[o_]=this.myID,e[a_]=this.myPW,e[c_]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+u_+i.length<=l_;){const o=this.pendingSegs.shift();i=i+"&"+_A+r+"="+o.seg+"&"+gA+r+"="+o.ts+"&"+mA+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(EA)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const IA=16384,wA=45e3;let Ds=null;typeof MozWebSocket!="undefined"?Ds=MozWebSocket:typeof WebSocket!="undefined"&&(Ds=WebSocket);class Je{constructor(e,t,i,r,s,o,c){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pr(this.connId),this.stats_=zc(t),this.connURL=Je.connectionURL_(t,o,c,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){const o={};return o[Qp]=Hc,typeof location!="undefined"&&location.hostname&&Zp.test(location.hostname)&&(o[Xp]=Jp),t&&(o[Yp]=t),i&&(o[e_]=i),r&&(o[Oa]=r),s&&(o[t_]=s),s_(e,n_,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ln.set("previous_websocket_failure",!0);try{let i;Od(),this.mySock=new Ds(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ds!==null&&!Je.forceDisallow_}static previouslyFailed(){return ln.isInMemoryStorage||ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=nr(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Gp(t,IA);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Je.responsesRequiredToBeHealthy=2;Je.healthyTimeout=3e4;/**
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
 */class pr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ln,Je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Je&&Je.isAvailable();let i=t&&!Je.previouslyFailed();if(e.webSocketOnly&&(t||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Je];else{const r=this.transports_=[];for(const s of pr.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);pr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pr.globalTransportInitialized_=!1;/**
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
 */const AA=6e4,RA=5e3,CA=10*1024,SA=100*1024,ta="t",Lh="d",bA="s",Vh="r",PA="e",Fh="o",Uh="a",Bh="n",qh="p",kA="h";class NA{constructor(e,t,i,r,s,o,c,l,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pr("c:"+this.id+":"),this.transportManager_=new pr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ta in e){const t=e[ta];t===Uh?this.upgradeIfSecondaryHealthy_():t===Vh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Fi("t",e),i=Fi("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Fi("t",e),i=Fi("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Fi(ta,e);if(Lh in e){const i=e[Lh];if(t===kA){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Bh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===bA?this.onConnectionShutdown_(i):t===Vh?this.onReset_(i):t===PA?Da("Server Error: "+i):t===Fh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Da("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Hc!==i&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class h_{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class d_{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Os extends d_{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ka()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Os}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jh=32,Wh=768;class ce{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ee(){return new ce("")}function Q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Yt(n){return n.pieces_.length-n.pieceNum_}function oe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ce(n.pieces_,e)}function f_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function DA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function p_(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function __(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ce(e,0)}function Ee(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ce)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new ce(t,0)}function G(n){return n.pieceNum_>=n.pieces_.length}function Ke(n,e){const t=Q(n),i=Q(e);if(t===null)return e;if(t===i)return Ke(oe(n),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function g_(n,e){if(Yt(n)!==Yt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function et(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Yt(n)>Yt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class OA{constructor(e,t){this.errorPrefix_=t,this.parts_=p_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Hs(this.parts_[i]);m_(this)}}function MA(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Hs(e),m_(n)}function xA(n){const e=n.parts_.pop();n.byteLength_-=Hs(e),n.parts_.length>0&&(n.byteLength_-=1)}function m_(n){if(n.byteLength_>Wh)throw new Error(n.errorPrefix_+"has a key path longer than "+Wh+" bytes ("+n.byteLength_+").");if(n.parts_.length>jh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jh+") or object contains a cycle "+an(n))}function an(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Kc extends d_{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Kc}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ui=1e3,LA=60*5*1e3,$h=30*1e3,VA=1.3,FA=3e4,UA="server_kill",Hh=3;class Ct extends h_{constructor(e,t,i,r,s,o,c,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=Ct.nextPersistentConnectionId_++,this.log_=Pr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ui,this.maxReconnectDelay_=LA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Od())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Os.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(Ae(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new dn,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const c=o.d;o.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const c={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,c=>{const l=c.d,h=c.s;Ct.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",c),h!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(h,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Nt(e,"w")){const i=zn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$h)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=dm(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Da("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FA&&(this.reconnectDelay_=Ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ct.nextConnectionId_++,s=this.lastSessionId;let o=!1,c=null;const l=function(){c?c.close():(o=!0,i())},h=function(_){O(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(_)};this.realtime_={close:l,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=m&&m.token,c=new NA(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,R=>{ze(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(UA)},s))}catch(_){this.log_("Failed to get token: "+_),o||(this.repoInfo_.nodeAdmin&&ze(_),l())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ca(this.interruptReasons_)&&(this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>$c(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new ce(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){xe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hh&&(this.reconnectDelay_=$h,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){xe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Wp.replace(/\./g,"-")]=1,Ka()?e["framework.cordova"]=1:Dd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Os.getInstance().currentlyOnline();return ca(this.interruptReasons_)&&e}}Ct.nextPersistentConnectionId_=0;Ct.nextConnectionId_=0;/**
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
 */class Y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Y(e,t)}}/**
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
 */class uo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Y(ti,e),r=new Y(ti,t);return this.compare(i,r)!==0}minPost(){return Y.MIN}}/**
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
 */let ts;class y_ extends uo{static get __EMPTY_NODE(){return ts}static set __EMPTY_NODE(e){ts=e}compare(e,t){return pi(e.name,t.name)}isDefinedOn(e){throw ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Y.MIN}maxPost(){return new Y(vn,ts)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,ts)}toString(){return".key"}}const Hn=new y_;/**
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
 */class ns{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i!=null?i:ve.RED,this.left=r!=null?r:je.EMPTY_NODE,this.right=s!=null?s:je.EMPTY_NODE}copy(e,t,i,r,s){return new ve(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class BA{copy(e,t,i,r,s){return this}insert(e,t,i){return new ve(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(e,t=je.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new je(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ns(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ns(this.root_,null,this.comparator_,!0,e)}}je.EMPTY_NODE=new BA;/**
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
 */function qA(n,e){return pi(n.name,e.name)}function Qc(n,e){return pi(n,e)}/**
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
 */let Ma;function jA(n){Ma=n}const v_=function(n){return typeof n=="number"?"number:"+Kp(n):"string:"+n},E_=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nt(e,".sv"),"Priority must be a string or number.")}else O(n===Ma||n.isEmpty(),"priority of unexpected type.");O(n===Ma||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let zh;class me{constructor(e,t=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),E_(this.priorityNode_)}static set __childrenNodeConstructor(e){zh=e}static get __childrenNodeConstructor(){return zh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:Q(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Q(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(O(i!==".priority"||Yt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+v_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Kp(this.value_):e+=this.value_,this.lazyHash_=Hp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=me.VALUE_TYPE_ORDER.indexOf(t),s=me.VALUE_TYPE_ORDER.indexOf(i);return O(r>=0,"Unknown leaf type: "+t),O(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let T_,I_;function WA(n){T_=n}function $A(n){I_=n}class HA extends uo{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?pi(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(vn,new me("[PRIORITY-POST]",I_))}makePost(e,t){const i=T_(e);return new Y(t,new me("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ve=new HA;/**
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
 */const zA=Math.log(2);class GA{constructor(e){const t=s=>parseInt(Math.log(s)/zA,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ms=function(n,e,t,i){n.sort(e);const r=function(l,h){const f=h-l;let _,m;if(f===0)return null;if(f===1)return _=n[l],m=t?t(_):_,new ve(m,_.node,ve.BLACK,null,null);{const R=parseInt(f/2,10)+l,S=r(l,R),D=r(R+1,h);return _=n[R],m=t?t(_):_,new ve(m,_.node,ve.BLACK,S,D)}},s=function(l){let h=null,f=null,_=n.length;const m=function(S,D){const P=_-S,B=_;_-=S;const W=r(P+1,B),j=n[P],z=t?t(j):j;R(new ve(z,j.node,D,null,W))},R=function(S){h?(h.left=S,h=S):(f=S,h=S)};for(let S=0;S<l.count;++S){const D=l.nextBitIsOne(),P=Math.pow(2,l.count-(S+1));D?m(P,ve.BLACK):(m(P,ve.BLACK),m(P,ve.RED))}return f},o=new GA(n.length),c=s(o);return new je(i||e,c)};/**
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
 */let na;const Nn={};class At{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return O(Nn&&Ve,"ChildrenNode.ts has not been loaded"),na=na||new At({".priority":Nn},{".priority":Ve}),na}get(e){const t=zn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof je?t:null}hasIndex(e){return Nt(this.indexSet_,e.toString())}addIndex(e,t){O(e!==Hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(Y.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let c;r?c=Ms(i,e.getCompare()):c=Nn;const l=e.toString(),h=Object.assign({},this.indexSet_);h[l]=e;const f=Object.assign({},this.indexes_);return f[l]=c,new At(f,h)}addToIndexes(e,t){const i=ms(this.indexes_,(r,s)=>{const o=zn(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),r===Nn)if(o.isDefinedOn(e.node)){const c=[],l=t.getIterator(Y.Wrap);let h=l.getNext();for(;h;)h.name!==e.name&&c.push(h),h=l.getNext();return c.push(e),Ms(c,o.getCompare())}else return Nn;else{const c=t.get(e.name);let l=r;return c&&(l=l.remove(new Y(e.name,c))),l.insert(e,e.node)}});return new At(i,this.indexSet_)}removeFromIndexes(e,t){const i=ms(this.indexes_,r=>{if(r===Nn)return r;{const s=t.get(e.name);return s?r.remove(new Y(e.name,s)):r}});return new At(i,this.indexSet_)}}/**
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
 */let Bi;class Z{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&E_(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bi||(Bi=new Z(new je(Qc),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bi}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Bi:t}}getChild(e){const t=Q(e);return t===null?this:this.getImmediateChild(t).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Y(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Bi:this.priorityNode_;return new Z(r,o,s)}}updateChild(e,t){const i=Q(e);if(i===null)return t;{O(Q(e)!==".priority"||Yt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(oe(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(Ve,(o,c)=>{t[o]=c.val(e),i++,s&&Z.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const c in t)o[c]=t[c];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+v_(this.getPriority().val())+":"),this.forEachChild(Ve,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Hp(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Y(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Y(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nr?-1:0}withIndex(e){if(e===Hn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Ve),r=t.getIterator(Ve);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hn?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KA extends Z{constructor(){super(new je(Qc),Z.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const Nr=new KA;Object.defineProperties(Y,{MIN:{value:new Y(ti,Z.EMPTY_NODE)},MAX:{value:new Y(vn,Nr)}});y_.__EMPTY_NODE=Z.EMPTY_NODE;me.__childrenNodeConstructor=Z;jA(Nr);$A(Nr);/**
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
 */const QA=!0;function Le(n,e=null){if(n===null)return Z.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new me(t,Le(e))}if(!(n instanceof Array)&&QA){const t=[];let i=!1;if(Ye(n,(o,c)=>{if(o.substring(0,1)!=="."){const l=Le(c);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new Y(o,l)))}}),t.length===0)return Z.EMPTY_NODE;const s=Ms(t,qA,o=>o.name,Qc);if(i){const o=Ms(t,Ve.getCompare());return new Z(s,Le(e),new At({".priority":o},{".priority":Ve}))}else return new Z(s,Le(e),At.Default)}else{let t=Z.EMPTY_NODE;return Ye(n,(i,r)=>{if(Nt(n,i)&&i.substring(0,1)!=="."){const s=Le(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(Le(e))}}WA(Le);/**
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
 */class YA extends uo{constructor(e){super(),this.indexPath_=e,O(!G(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?pi(e.name,t.name):s}makePost(e,t){const i=Le(e),r=Z.EMPTY_NODE.updateChild(this.indexPath_,i);return new Y(t,r)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,Nr);return new Y(vn,e)}toString(){return p_(this.indexPath_,0).join("/")}}/**
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
 */class XA extends uo{compare(e,t){const i=e.node.compareTo(t.node);return i===0?pi(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,t){const i=Le(e);return new Y(t,i)}toString(){return".value"}}const JA=new XA;/**
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
 */function ZA(n){return{type:"value",snapshotNode:n}}function eR(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function tR(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Gh(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function nR(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Yc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ti}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new Yc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ve?t="$priority":n.index_===JA?t="$value":n.index_===Hn?t="$key":(O(n.index_ instanceof YA,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ae(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Ae(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Ae(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Ae(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Ae(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Qh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ve&&(e.i=n.index_.toString()),e}/**
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
 */class xs extends h_{constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Pr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=xs.getListenId_(e,i),c={};this.listens_[o]=c;const l=Kh(e._queryParams);this.restRequest_(s+".json",l,(h,f)=>{let _=f;if(h===404&&(_=null,h=null),h===null&&this.onDataUpdate_(s,_,!1,i),zn(this.listens_,o)===c){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",r(m,null)}})}unlisten(e,t){const i=xs.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Kh(e._queryParams),i=e._path.toString(),r=new dn;return this.restRequest_(i+".json",t,(s,o)=>{let c=o;s===404&&(c=null,s=null),s===null?(this.onDataUpdate_(i,c,!1,null),r.resolve(c)):r.reject(new Error(c))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+si(t);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(i&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=nr(c.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+c.responseText)}i(null,l)}else c.status!==401&&c.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+c.status),i(c.status);i=null}},c.open("GET",o,!0),c.send()})}}/**
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
 */class iR{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ls(){return{value:null,children:new Map}}function w_(n,e,t){if(G(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Q(e);n.children.has(i)||n.children.set(i,Ls());const r=n.children.get(i);e=oe(e),w_(r,e,t)}}function xa(n,e,t){n.value!==null?t(e,n.value):rR(n,(i,r)=>{const s=new ce(e.toString()+"/"+i);xa(r,s,t)})}function rR(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class sR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ye(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
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
 */const Yh=10*1e3,oR=30*1e3,aR=5*60*1e3;class cR{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new sR(e);const i=Yh+(oR-Yh)*Math.random();Zi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ye(e,(r,s)=>{s>0&&Nt(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),Zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*aR))}}/**
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
 */var ot;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function A_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function R_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function C_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Vs{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ot.ACK_USER_WRITE,this.source=A_()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ce(e));return new Vs(ee(),t,this.revert)}}else return O(Q(this.path)===e,"operationForChild called for unrelated child."),new Vs(oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class En{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ot.OVERWRITE}operationForChild(e){return G(this.path)?new En(this.source,ee(),this.snap.getImmediateChild(e)):new En(this.source,oe(this.path),this.snap)}}/**
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
 */class _r{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ot.MERGE}operationForChild(e){if(G(this.path)){const t=this.children.subtree(new ce(e));return t.isEmpty()?null:t.value?new En(this.source,ee(),t.value):new _r(this.source,ee(),t)}else return O(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _r(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Xc{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const t=Q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function lR(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(nR(o.childName,o.snapshotNode))}),qi(n,r,"child_removed",e,i,t),qi(n,r,"child_added",e,i,t),qi(n,r,"child_moved",s,i,t),qi(n,r,"child_changed",e,i,t),qi(n,r,"value",e,i,t),r}function qi(n,e,t,i,r,s){const o=i.filter(c=>c.type===t);o.sort((c,l)=>hR(n,c,l)),o.forEach(c=>{const l=uR(n,c,s);r.forEach(h=>{h.respondsTo(c.type)&&e.push(h.createEvent(l,n.query_))})})}function uR(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function hR(n,e,t){if(e.childName==null||t.childName==null)throw ii("Should only compare child_ events.");const i=new Y(e.childName,e.snapshotNode),r=new Y(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
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
 */function S_(n,e){return{eventCache:n,serverCache:e}}function er(n,e,t,i){return S_(new Xc(e,t,i),n.serverCache)}function b_(n,e,t,i){return S_(n.eventCache,new Xc(e,t,i))}function La(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Tn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ia;const dR=()=>(ia||(ia=new je(Jw)),ia);class se{constructor(e,t=dR()){this.value=e,this.children=t}static fromObject(e){let t=new se(null);return Ye(e,(i,r)=>{t=t.set(new ce(i),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ee(),value:this.value};if(G(e))return null;{const i=Q(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(oe(e),t);return s!=null?{path:Ee(new ce(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const t=Q(e),i=this.children.get(t);return i!==null?i.subtree(oe(e)):new se(null)}}set(e,t){if(G(e))return new se(t,this.children);{const i=Q(e),s=(this.children.get(i)||new se(null)).set(oe(e),t),o=this.children.insert(i,s);return new se(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const t=Q(e),i=this.children.get(t);if(i){const r=i.remove(oe(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new se(null):new se(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const t=Q(e),i=this.children.get(t);return i?i.get(oe(e)):null}}setTree(e,t){if(G(e))return t;{const i=Q(e),s=(this.children.get(i)||new se(null)).setTree(oe(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new se(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Ee(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ee(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(G(e))return null;{const s=Q(e),o=this.children.get(s);return o?o.findOnPath_(oe(e),Ee(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ee(),t)}foreachOnPath_(e,t,i){if(G(e))return this;{this.value&&i(t,this.value);const r=Q(e),s=this.children.get(r);return s?s.foreachOnPath_(oe(e),Ee(t,r),i):new se(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(Ee(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class nt{constructor(e){this.writeTree_=e}static empty(){return new nt(new se(null))}}function tr(n,e,t){if(G(e))return new nt(new se(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Ke(r,e);return s=s.updateChild(o,t),new nt(n.writeTree_.set(r,s))}else{const r=new se(t),s=n.writeTree_.setTree(e,r);return new nt(s)}}}function Xh(n,e,t){let i=n;return Ye(t,(r,s)=>{i=tr(i,Ee(e,r),s)}),i}function Jh(n,e){if(G(e))return nt.empty();{const t=n.writeTree_.setTree(e,new se(null));return new nt(t)}}function Va(n,e){return Rn(n,e)!=null}function Rn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ke(t.path,e)):null}function Zh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ve,(i,r)=>{e.push(new Y(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Y(i,r.value))}),e}function zt(n,e){if(G(e))return n;{const t=Rn(n,e);return t!=null?new nt(new se(t)):new nt(n.writeTree_.subtree(e))}}function Fa(n){return n.writeTree_.isEmpty()}function ni(n,e){return P_(ee(),n.writeTree_,e)}function P_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=P_(Ee(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Ee(n,".priority"),i)),t}}/**
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
 */function k_(n,e){return x_(e,n)}function fR(n,e,t,i,r){O(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=tr(n.visibleWrites,e,t)),n.lastWriteId=i}function pR(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function _R(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const c=n.allWrites[o];c.visible&&(o>=t&&gR(c,i.path)?r=!1:et(i.path,c.path)&&(s=!0)),o--}if(r){if(s)return mR(n),!0;if(i.snap)n.visibleWrites=Jh(n.visibleWrites,i.path);else{const c=i.children;Ye(c,l=>{n.visibleWrites=Jh(n.visibleWrites,Ee(i.path,l))})}return!0}else return!1}function gR(n,e){if(n.snap)return et(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&et(Ee(n.path,t),e))return!0;return!1}function mR(n){n.visibleWrites=N_(n.allWrites,yR,ee()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function yR(n){return n.visible}function N_(n,e,t){let i=nt.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let c;if(s.snap)et(t,o)?(c=Ke(t,o),i=tr(i,c,s.snap)):et(o,t)&&(c=Ke(o,t),i=tr(i,ee(),s.snap.getChild(c)));else if(s.children){if(et(t,o))c=Ke(t,o),i=Xh(i,c,s.children);else if(et(o,t))if(c=Ke(o,t),G(c))i=Xh(i,ee(),s.children);else{const l=zn(s.children,Q(c));if(l){const h=l.getChild(oe(c));i=tr(i,ee(),h)}}}else throw ii("WriteRecord should have .snap or .children")}}return i}function D_(n,e,t,i,r){if(!i&&!r){const s=Rn(n.visibleWrites,e);if(s!=null)return s;{const o=zt(n.visibleWrites,e);if(Fa(o))return t;if(t==null&&!Va(o,ee()))return null;{const c=t||Z.EMPTY_NODE;return ni(o,c)}}}else{const s=zt(n.visibleWrites,e);if(!r&&Fa(s))return t;if(!r&&t==null&&!Va(s,ee()))return null;{const o=function(h){return(h.visible||r)&&(!i||!~i.indexOf(h.writeId))&&(et(h.path,e)||et(e,h.path))},c=N_(n.allWrites,o,e),l=t||Z.EMPTY_NODE;return ni(c,l)}}}function vR(n,e,t){let i=Z.EMPTY_NODE;const r=Rn(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ve,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=zt(n.visibleWrites,e);return t.forEachChild(Ve,(o,c)=>{const l=ni(zt(s,new ce(o)),c);i=i.updateImmediateChild(o,l)}),Zh(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=zt(n.visibleWrites,e);return Zh(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function ER(n,e,t,i,r){O(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(e,t);if(Va(n.visibleWrites,s))return null;{const o=zt(n.visibleWrites,s);return Fa(o)?r.getChild(t):ni(o,r.getChild(t))}}function TR(n,e,t,i){const r=Ee(e,t),s=Rn(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=zt(n.visibleWrites,r);return ni(o,i.getNode().getImmediateChild(t))}else return null}function IR(n,e){return Rn(n.visibleWrites,e)}function wR(n,e,t,i,r,s,o){let c;const l=zt(n.visibleWrites,e),h=Rn(l,ee());if(h!=null)c=h;else if(t!=null)c=ni(l,t);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const f=[],_=o.getCompare(),m=s?c.getReverseIteratorFrom(i,o):c.getIteratorFrom(i,o);let R=m.getNext();for(;R&&f.length<r;)_(R,i)!==0&&f.push(R),R=m.getNext();return f}else return[]}function AR(){return{visibleWrites:nt.empty(),allWrites:[],lastWriteId:-1}}function Ua(n,e,t,i){return D_(n.writeTree,n.treePath,e,t,i)}function O_(n,e){return vR(n.writeTree,n.treePath,e)}function ed(n,e,t,i){return ER(n.writeTree,n.treePath,e,t,i)}function Fs(n,e){return IR(n.writeTree,Ee(n.treePath,e))}function RR(n,e,t,i,r,s){return wR(n.writeTree,n.treePath,e,t,i,r,s)}function Jc(n,e,t){return TR(n.writeTree,n.treePath,e,t)}function M_(n,e){return x_(Ee(n.treePath,e),n.writeTree)}function x_(n,e){return{treePath:n,writeTree:e}}/**
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
 */class CR{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,Gh(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,tR(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,eR(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,Gh(i,e.snapshotNode,r.oldSnap));else throw ii("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class SR{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const L_=new SR;class Zc{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Xc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jc(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tn(this.viewCache_),s=RR(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}function bR(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function PR(n,e,t,i,r){const s=new CR;let o,c;if(t.type===ot.OVERWRITE){const h=t;h.source.fromUser?o=Ba(n,e,h.path,h.snap,i,r,s):(O(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered()&&!G(h.path),o=Us(n,e,h.path,h.snap,i,r,c,s))}else if(t.type===ot.MERGE){const h=t;h.source.fromUser?o=NR(n,e,h.path,h.children,i,r,s):(O(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered(),o=qa(n,e,h.path,h.children,i,r,c,s))}else if(t.type===ot.ACK_USER_WRITE){const h=t;h.revert?o=MR(n,e,h.path,i,r,s):o=DR(n,e,h.path,h.affectedTree,i,r,s)}else if(t.type===ot.LISTEN_COMPLETE)o=OR(n,e,t.path,i,s);else throw ii("Unknown operation type: "+t.type);const l=s.getChanges();return kR(e,o,l),{viewCache:o,changes:l}}function kR(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=La(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(ZA(La(e)))}}function V_(n,e,t,i,r,s){const o=e.eventCache;if(Fs(i,t)!=null)return e;{let c,l;if(G(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Tn(e),f=h instanceof Z?h:Z.EMPTY_NODE,_=O_(i,f);c=n.filter.updateFullNode(e.eventCache.getNode(),_,s)}else{const h=Ua(i,Tn(e));c=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=Q(t);if(h===".priority"){O(Yt(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const _=ed(i,t,f,l);_!=null?c=n.filter.updatePriority(f,_):c=o.getNode()}else{const f=oe(t);let _;if(o.isCompleteForChild(h)){l=e.serverCache.getNode();const m=ed(i,t,o.getNode(),l);m!=null?_=o.getNode().getImmediateChild(h).updateChild(f,m):_=o.getNode().getImmediateChild(h)}else _=Jc(i,h,e.serverCache);_!=null?c=n.filter.updateChild(o.getNode(),h,_,f,r,s):c=o.getNode()}}return er(e,c,o.isFullyInitialized()||G(t),n.filter.filtersNodes())}}function Us(n,e,t,i,r,s,o,c){const l=e.serverCache;let h;const f=o?n.filter:n.filter.getIndexedFilter();if(G(t))h=f.updateFullNode(l.getNode(),i,null);else if(f.filtersNodes()&&!l.isFiltered()){const R=l.getNode().updateChild(t,i);h=f.updateFullNode(l.getNode(),R,null)}else{const R=Q(t);if(!l.isCompleteForPath(t)&&Yt(t)>1)return e;const S=oe(t),P=l.getNode().getImmediateChild(R).updateChild(S,i);R===".priority"?h=f.updatePriority(l.getNode(),P):h=f.updateChild(l.getNode(),R,P,S,L_,null)}const _=b_(e,h,l.isFullyInitialized()||G(t),f.filtersNodes()),m=new Zc(r,_,s);return V_(n,_,t,r,m,c)}function Ba(n,e,t,i,r,s,o){const c=e.eventCache;let l,h;const f=new Zc(r,e,s);if(G(t))h=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=er(e,h,!0,n.filter.filtersNodes());else{const _=Q(t);if(_===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),i),l=er(e,h,c.isFullyInitialized(),c.isFiltered());else{const m=oe(t),R=c.getNode().getImmediateChild(_);let S;if(G(m))S=i;else{const D=f.getCompleteChild(_);D!=null?f_(m)===".priority"&&D.getChild(__(m)).isEmpty()?S=D:S=D.updateChild(m,i):S=Z.EMPTY_NODE}if(R.equals(S))l=e;else{const D=n.filter.updateChild(c.getNode(),_,S,m,f,o);l=er(e,D,c.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function td(n,e){return n.eventCache.isCompleteForChild(e)}function NR(n,e,t,i,r,s,o){let c=e;return i.foreach((l,h)=>{const f=Ee(t,l);td(e,Q(f))&&(c=Ba(n,c,f,h,r,s,o))}),i.foreach((l,h)=>{const f=Ee(t,l);td(e,Q(f))||(c=Ba(n,c,f,h,r,s,o))}),c}function nd(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function qa(n,e,t,i,r,s,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,h;G(t)?h=i:h=new se(null).setTree(t,i);const f=e.serverCache.getNode();return h.children.inorderTraversal((_,m)=>{if(f.hasChild(_)){const R=e.serverCache.getNode().getImmediateChild(_),S=nd(n,R,m);l=Us(n,l,new ce(_),S,r,s,o,c)}}),h.children.inorderTraversal((_,m)=>{const R=!e.serverCache.isCompleteForChild(_)&&m.value===null;if(!f.hasChild(_)&&!R){const S=e.serverCache.getNode().getImmediateChild(_),D=nd(n,S,m);l=Us(n,l,new ce(_),D,r,s,o,c)}}),l}function DR(n,e,t,i,r,s,o){if(Fs(r,t)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(G(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Us(n,e,t,l.getNode().getChild(t),r,s,c,o);if(G(t)){let h=new se(null);return l.getNode().forEachChild(Hn,(f,_)=>{h=h.set(new ce(f),_)}),qa(n,e,t,h,r,s,c,o)}else return e}else{let h=new se(null);return i.foreach((f,_)=>{const m=Ee(t,f);l.isCompleteForPath(m)&&(h=h.set(f,l.getNode().getChild(m)))}),qa(n,e,t,h,r,s,c,o)}}function OR(n,e,t,i,r){const s=e.serverCache,o=b_(e,s.getNode(),s.isFullyInitialized()||G(t),s.isFiltered());return V_(n,o,t,i,L_,r)}function MR(n,e,t,i,r,s){let o;if(Fs(i,t)!=null)return e;{const c=new Zc(i,e,r),l=e.eventCache.getNode();let h;if(G(t)||Q(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Ua(i,Tn(e));else{const _=e.serverCache.getNode();O(_ instanceof Z,"serverChildren would be complete if leaf node"),f=O_(i,_)}f=f,h=n.filter.updateFullNode(l,f,s)}else{const f=Q(t);let _=Jc(i,f,e.serverCache);_==null&&e.serverCache.isCompleteForChild(f)&&(_=l.getImmediateChild(f)),_!=null?h=n.filter.updateChild(l,f,_,oe(t),c,s):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(l,f,Z.EMPTY_NODE,oe(t),c,s):h=l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ua(i,Tn(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||Fs(i,ee())!=null,er(e,h,o,n.filter.filtersNodes())}}function xR(n,e){const t=Tn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!G(e)&&!t.getImmediateChild(Q(e)).isEmpty())?t.getChild(e):null}function id(n,e,t,i){e.type===ot.MERGE&&e.source.queryId!==null&&(O(Tn(n.viewCache_),"We should always have a full cache before handling merges"),O(La(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=PR(n.processor_,r,e,t,i);return bR(n.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,LR(n,s.changes,s.viewCache.eventCache.getNode(),null)}function LR(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return lR(n.eventGenerator_,e,t,r)}/**
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
 */let rd;function VR(n){O(!rd,"__referenceConstructor has already been defined"),rd=n}function el(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return O(s!=null,"SyncTree gave us an op for an invalid query."),id(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(id(o,e,t,i));return s}}function tl(n,e){let t=null;for(const i of n.views.values())t=t||xR(i,e);return t}/**
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
 */let sd;function FR(n){O(!sd,"__referenceConstructor has already been defined"),sd=n}class od{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=AR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function UR(n,e,t,i,r){return fR(n.pendingWriteTree_,e,t,i,r),r?fo(n,new En(A_(),e,t)):[]}function Vn(n,e,t=!1){const i=pR(n.pendingWriteTree_,e);if(_R(n.pendingWriteTree_,e)){let s=new se(null);return i.snap!=null?s=s.set(ee(),!0):Ye(i.children,o=>{s=s.set(new ce(o),!0)}),fo(n,new Vs(i.path,s,t))}else return[]}function ho(n,e,t){return fo(n,new En(R_(),e,t))}function BR(n,e,t){const i=se.fromObject(t);return fo(n,new _r(R_(),e,i))}function qR(n,e,t,i){const r=q_(n,i);if(r!=null){const s=j_(r),o=s.path,c=s.queryId,l=Ke(o,e),h=new En(C_(c),l,t);return W_(n,o,h)}else return[]}function jR(n,e,t,i){const r=q_(n,i);if(r){const s=j_(r),o=s.path,c=s.queryId,l=Ke(o,e),h=se.fromObject(t),f=new _r(C_(c),l,h);return W_(n,o,f)}else return[]}function F_(n,e,t){const r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,c)=>{const l=Ke(o,e),h=tl(c,l);if(h)return h});return D_(r,e,s,t,!0)}function fo(n,e){return U_(e,n.syncPointTree_,null,k_(n.pendingWriteTree_,ee()))}function U_(n,e,t,i){if(G(n.path))return B_(n,e,t,i);{const r=e.get(ee());t==null&&r!=null&&(t=tl(r,ee()));let s=[];const o=Q(n.path),c=n.operationForChild(o),l=e.children.get(o);if(l&&c){const h=t?t.getImmediateChild(o):null,f=M_(i,o);s=s.concat(U_(c,l,h,f))}return r&&(s=s.concat(el(r,n,i,t))),s}}function B_(n,e,t,i){const r=e.get(ee());t==null&&r!=null&&(t=tl(r,ee()));let s=[];return e.children.inorderTraversal((o,c)=>{const l=t?t.getImmediateChild(o):null,h=M_(i,o),f=n.operationForChild(o);f&&(s=s.concat(B_(f,c,l,h)))}),r&&(s=s.concat(el(r,n,i,t))),s}function q_(n,e){return n.tagToQueryMap.get(e)}function j_(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ce(n.substr(0,e))}}function W_(n,e,t){const i=n.syncPointTree_.get(e);O(i,"Missing sync point for query tag that we're tracking");const r=k_(n.pendingWriteTree_,e);return el(i,t,r,null)}/**
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
 */class nl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new nl(t)}node(){return this.node_}}class il{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ee(this.path_,e);return new il(this.syncTree_,t)}node(){return F_(this.syncTree_,this.path_)}}const WR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ad=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return $R(n[".sv"],e,t);if(typeof n[".sv"]=="object")return HR(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},$R=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},HR=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&O(!1,"Unexpected increment value: "+i);const r=e.node();if(O(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},zR=function(n,e,t,i){return rl(e,new il(t,n),i)},GR=function(n,e,t){return rl(n,new nl(e),t)};function rl(n,e,t){const i=n.getPriority().val(),r=ad(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,c=ad(o.getValue(),e,t);return c!==o.getValue()||r!==o.getPriority().val()?new me(c,Le(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new me(r))),o.forEachChild(Ve,(c,l)=>{const h=rl(l,e.getImmediateChild(c),t);h!==l&&(s=s.updateImmediateChild(c,h))}),s}}/**
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
 */class sl{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ol(n,e){let t=e instanceof ce?e:new ce(e),i=n,r=Q(t);for(;r!==null;){const s=zn(i.node.children,r)||{children:{},childCount:0};i=new sl(r,i,s),t=oe(t),r=Q(t)}return i}function _i(n){return n.node.value}function $_(n,e){n.node.value=e,ja(n)}function H_(n){return n.node.childCount>0}function KR(n){return _i(n)===void 0&&!H_(n)}function po(n,e){Ye(n.node.children,(t,i)=>{e(new sl(t,n,i))})}function z_(n,e,t,i){t&&!i&&e(n),po(n,r=>{z_(r,e,!0,i)}),t&&i&&e(n)}function QR(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Dr(n){return new ce(n.parent===null?n.name:Dr(n.parent)+"/"+n.name)}function ja(n){n.parent!==null&&YR(n.parent,n.name,n)}function YR(n,e,t){const i=KR(t),r=Nt(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,ja(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,ja(n))}/**
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
 */const XR=/[\[\].#$\/\u0000-\u001F\u007F]/,JR=/[\[\].#$\u0000-\u001F\u007F]/,ra=10*1024*1024,G_=function(n){return typeof n=="string"&&n.length!==0&&!XR.test(n)},ZR=function(n){return typeof n=="string"&&n.length!==0&&!JR.test(n)},eC=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ZR(n)},K_=function(n,e,t){const i=t instanceof ce?new OA(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+an(i));if(typeof e=="function")throw new Error(n+"contains a function "+an(i)+" with contents = "+e.toString());if(zp(e))throw new Error(n+"contains "+e.toString()+" "+an(i));if(typeof e=="string"&&e.length>ra/3&&Hs(e)>ra)throw new Error(n+"contains a string greater than "+ra+" utf8 bytes "+an(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Ye(e,(o,c)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!G_(o)))throw new Error(n+" contains an invalid key ("+o+") "+an(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MA(i,o),K_(n,c,i),xA(i)}),r&&s)throw new Error(n+' contains ".value" child '+an(i)+" in addition to actual children.")}},tC=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!G_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!eC(t))throw new Error(ym(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class nC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function iC(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!g_(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function Cn(n,e,t){iC(n,t),rC(n,i=>et(i,e)||et(e,i))}function rC(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(sC(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function sC(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();hn&&xe("event: "+t.toString()),kr(i)}}}/**
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
 */const oC="repo_interrupt",aC=25;class cC{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ls(),this.transactionQueueTree_=new sl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lC(n,e,t){if(n.stats_=zc(n.repoInfo_),n.forceRestClient_||rA())n.server_=new xs(n.repoInfo_,(i,r,s,o)=>{cd(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ld(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ct(n.repoInfo_,e,(i,r,s,o)=>{cd(n,i,r,s,o)},i=>{ld(n,i)},i=>{hC(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=lA(n.repoInfo_,()=>new cR(n.stats_,n.server_)),n.infoData_=new iR,n.infoSyncTree_=new od({startListening:(i,r,s,o)=>{let c=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(c=ho(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),al(n,"connected",!1),n.serverSyncTree_=new od({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(c,l)=>{const h=o(c,l);Cn(n.eventQueue_,i._path,h)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function uC(n){const t=n.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Q_(n){return WR({timestamp:uC(n)})}function cd(n,e,t,i,r){n.dataUpdateCount++;const s=new ce(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const l=ms(t,h=>Le(h));o=jR(n.serverSyncTree_,s,l,r)}else{const l=Le(t);o=qR(n.serverSyncTree_,s,l,r)}else if(i){const l=ms(t,h=>Le(h));o=BR(n.serverSyncTree_,s,l)}else{const l=Le(t);o=ho(n.serverSyncTree_,s,l)}let c=s;o.length>0&&(c=ll(n,s)),Cn(n.eventQueue_,c,o)}function ld(n,e){al(n,"connected",e),e===!1&&fC(n)}function hC(n,e){Ye(e,(t,i)=>{al(n,t,i)})}function al(n,e,t){const i=new ce("/.info/"+e),r=Le(t);n.infoData_.updateSnapshot(i,r);const s=ho(n.infoSyncTree_,i,r);Cn(n.eventQueue_,i,s)}function dC(n){return n.nextWriteId_++}function fC(n){Y_(n,"onDisconnectEvents");const e=Q_(n),t=Ls();xa(n.onDisconnect_,ee(),(r,s)=>{const o=zR(r,s,n.serverSyncTree_,e);w_(t,r,o)});let i=[];xa(t,ee(),(r,s)=>{i=i.concat(ho(n.serverSyncTree_,r,s));const o=mC(n,r);ll(n,o)}),n.onDisconnect_=Ls(),Cn(n.eventQueue_,ee(),i)}function pC(n){n.persistentConnection_&&n.persistentConnection_.interrupt(oC)}function Y_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),xe(t,...e)}function X_(n,e,t){return F_(n.serverSyncTree_,e,t)||Z.EMPTY_NODE}function cl(n,e=n.transactionQueueTree_){if(e||_o(n,e),_i(e)){const t=Z_(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&_C(n,Dr(e),t)}else H_(e)&&po(e,t=>{cl(n,t)})}function _C(n,e,t){const i=t.map(h=>h.currentWriteId),r=X_(n,e,i);let s=r;const o=r.hash();for(let h=0;h<t.length;h++){const f=t[h];O(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const _=Ke(e,f.path);s=s.updateChild(_,f.currentOutputSnapshotRaw)}const c=s.val(!0),l=e;n.server_.put(l.toString(),c,h=>{Y_(n,"transaction put response",{path:l.toString(),status:h});let f=[];if(h==="ok"){const _=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(Vn(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&_.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();_o(n,ol(n.transactionQueueTree_,e)),cl(n,n.transactionQueueTree_),Cn(n.eventQueue_,e,f);for(let m=0;m<_.length;m++)kr(_[m])}else{if(h==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{ze("transaction at "+l.toString()+" failed: "+h);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=h}ll(n,e)}},o)}function ll(n,e){const t=J_(n,e),i=Dr(t),r=Z_(n,t);return gC(n,r,i),i}function gC(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],h=Ke(t,l.path);let f=!1,_;if(O(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,_=l.abortReason,r=r.concat(Vn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=aC)f=!0,_="maxretry",r=r.concat(Vn(n.serverSyncTree_,l.currentWriteId,!0));else{const m=X_(n,l.path,o);l.currentInputSnapshot=m;const R=e[c].update(m.val());if(R!==void 0){K_("transaction failed: Data returned ",R,l.path);let S=Le(R);typeof R=="object"&&R!=null&&Nt(R,".priority")||(S=S.updatePriority(m.getPriority()));const P=l.currentWriteId,B=Q_(n),W=GR(S,m,B);l.currentOutputSnapshotRaw=S,l.currentOutputSnapshotResolved=W,l.currentWriteId=dC(n),o.splice(o.indexOf(P),1),r=r.concat(UR(n.serverSyncTree_,l.path,W,l.currentWriteId,l.applyLocally)),r=r.concat(Vn(n.serverSyncTree_,P,!0))}else f=!0,_="nodata",r=r.concat(Vn(n.serverSyncTree_,l.currentWriteId,!0))}Cn(n.eventQueue_,t,r),r=[],f&&(e[c].status=2,function(m){setTimeout(m,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(_==="nodata"?i.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):i.push(()=>e[c].onComplete(new Error(_),!1,null))))}_o(n,n.transactionQueueTree_);for(let c=0;c<i.length;c++)kr(i[c]);cl(n,n.transactionQueueTree_)}function J_(n,e){let t,i=n.transactionQueueTree_;for(t=Q(e);t!==null&&_i(i)===void 0;)i=ol(i,t),e=oe(e),t=Q(e);return i}function Z_(n,e){const t=[];return eg(n,e,t),t.sort((i,r)=>i.order-r.order),t}function eg(n,e,t){const i=_i(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);po(e,r=>{eg(n,r,t)})}function _o(n,e){const t=_i(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,$_(e,t.length>0?t:void 0)}po(e,i=>{_o(n,i)})}function mC(n,e){const t=Dr(J_(n,e)),i=ol(n.transactionQueueTree_,e);return QR(i,r=>{sa(n,r)}),sa(n,i),z_(i,r=>{sa(n,r)}),t}function sa(n,e){const t=_i(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(O(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Vn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?$_(e,void 0):t.length=s+1,Cn(n.eventQueue_,Dr(e),r);for(let o=0;o<i.length;o++)kr(i[o])}}/**
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
 */function yC(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function vC(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ze(`Invalid query segment '${t}' in query '${n}'`)}return e}const ud=function(n,e){const t=EC(n),i=t.namespace;t.domain==="firebase.com"&&kt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Yw();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new r_(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new ce(t.pathString)}},EC=function(n){let e="",t="",i="",r="",s="",o=!0,c="https",l=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(c=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),e=n.substring(0,Math.min(f,_)),f<_&&(r=yC(n.substring(f,_)));const m=vC(n.substring(Math.min(n.length,_)));h=e.indexOf(":"),h>=0?(o=c==="https"||c==="wss",l=parseInt(e.substring(h+1),10)):h=e.length;const R=e.slice(0,h);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const S=e.indexOf(".");i=e.substring(0,S).toLowerCase(),t=e.substring(S+1),s=i}"ns"in m&&(s=m.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:c,pathString:r,namespace:s}};/**
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
 */class ul{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return G(this._path)?null:f_(this._path)}get ref(){return new gi(this._repo,this._path)}get _queryIdentifier(){const e=Qh(this._queryParams),t=$c(e);return t==="{}"?"default":t}get _queryObject(){return Qh(this._queryParams)}isEqual(e){if(e=he(e),!(e instanceof ul))return!1;const t=this._repo===e._repo,i=g_(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+DA(this._path)}}class gi extends ul{constructor(e,t){super(e,t,new Yc,!1)}get parent(){const e=__(this._path);return e===null?null:new gi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}VR(gi);FR(gi);/**
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
 */const TC="FIREBASE_DATABASE_EMULATOR_HOST",Wa={};let IC=!1;function wC(n,e,t,i){n.repoInfo_=new r_(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function AC(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ud(s,r),c=o.repoInfo,l,h;typeof process!="undefined"&&process.env&&(h=process.env[TC]),h?(l=!0,s=`http://${h}?ns=${c.namespace}`,o=ud(s,r),c=o.repoInfo):l=!o.repoInfo.secure;const f=r&&l?new $n($n.OWNER):new oA(n.name,n.options,e);tC("Invalid Firebase Database URL",o),G(o.path)||kt("Database URL must point to the root of a Firebase Database (not including a child path).");const _=CC(c,n,f,new sA(n.name,t));return new SC(_,n)}function RC(n,e){const t=Wa[e];(!t||t[n.key]!==n)&&kt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),pC(n),delete t[n.key]}function CC(n,e,t,i){let r=Wa[e.name];r||(r={},Wa[e.name]=r);let s=r[n.toURLString()];return s&&kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new cC(n,IC,t,i),r[n.toURLString()]=s,s}class SC{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gi(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kt("Cannot call "+e+" on a deleted database.")}}function bC(n=oi(),e){const t=Xt(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=$s("database");i&&PC(t,...i)}return t}function PC(n,e,t,i={}){n=he(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&kt("Cannot call useEmulator() after instance has already been initialized.");const r=n._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new $n($n.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Ga(i.mockUserToken,n.app.options.projectId);s=new $n(o)}wC(r,e,t,s)}/**
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
 */function kC(n){Hw(Jt),it(new Qe("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return AC(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),qe(Nh,Dh,n),qe(Nh,Dh,"esm2017")}Ct.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ct.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};kC();/**
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
 */const tg="firebasestorage.googleapis.com",NC="storageBucket",DC=2*60*1e3,OC=10*60*1e3;/**
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
 */class gt extends _t{constructor(e,t,i=0){super(oa(e),`Firebase Storage: ${t} (${oa(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return oa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pt||(pt={}));function oa(n){return"storage/"+n}function MC(){const n="An unknown error occurred, please check the error payload for server response.";return new gt(pt.UNKNOWN,n)}function xC(){return new gt(pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LC(){return new gt(pt.CANCELED,"User canceled the upload/download.")}function VC(n){return new gt(pt.INVALID_URL,"Invalid URL '"+n+"'.")}function FC(n){return new gt(pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function hd(n){return new gt(pt.INVALID_ARGUMENT,n)}function ng(){return new gt(pt.APP_DELETED,"The Firebase app was deleted.")}function UC(n){return new gt(pt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class tt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=tt.makeFromUrl(e,t)}catch{return new tt(e,"")}if(i.path==="")return i;throw FC(e)}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function h(z){z.path_=decodeURIComponent(z.path)}const f="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",R=new RegExp(`^https?://${_}/${f}/b/${r}/o${m}`,"i"),S={bucket:1,path:3},D=t===tg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",B=new RegExp(`^https?://${D}/${r}/${P}`,"i"),j=[{regex:c,indices:l,postModify:s},{regex:R,indices:S,postModify:h},{regex:B,indices:{bucket:1,path:2},postModify:h}];for(let z=0;z<j.length;z++){const Te=j[z],ie=Te.regex.exec(e);if(ie){const T=ie[Te.indices.bucket];let g=ie[Te.indices.path];g||(g=""),i=new tt(T,g),Te.postModify(i);break}}if(i==null)throw VC(e);return i}}class BC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function qC(n,e,t){let i=1,r=null,s=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...P){h||(h=!0,e.apply(null,P))}function _(P){r=setTimeout(()=>{r=null,n(R,l())},P)}function m(){s&&clearTimeout(s)}function R(P,...B){if(h){m();return}if(P){m(),f.call(null,P,...B);return}if(l()||o){m(),f.call(null,P,...B);return}i<64&&(i*=2);let j;c===1?(c=2,j=0):j=(i+Math.random())*1e3,_(j)}let S=!1;function D(P){S||(S=!0,m(),!h&&(r!==null?(P||(c=2),clearTimeout(r),_(0)):P||(c=1)))}return _(0),s=setTimeout(()=>{o=!0,D(!0)},t),D}function jC(n){n(!1)}/**
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
 */function WC(n){return n!==void 0}function dd(n,e,t,i){if(i<e)throw hd(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw hd(`Invalid value for '${n}'. Expected ${t} or less.`)}function $C(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const r=e(i)+"="+e(n[i]);t=t+r+"&"}return t=t.slice(0,-1),t}/**
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
 */var Bs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Bs||(Bs={}));/**
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
 */function HC(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||r||s}/**
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
 */class zC{constructor(e,t,i,r,s,o,c,l,h,f,_,m=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=_,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,S)=>{this.resolve_=R,this.reject_=S,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new is(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===Bs.NO_ERROR,l=s.getStatus();if(!c||HC(l,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Bs.ABORT;i(!1,new is(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new is(h,s))})},t=(i,r)=>{const s=this.resolve_,o=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());WC(l)?s(l):s()}catch(l){o(l)}else if(c!==null){const l=MC();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(r.canceled){const l=this.appDelete_?ng():LC();o(l)}else{const l=xC();o(l)}};this.canceled_?t(!1,new is(!1,null,!0)):this.backoffId_=qC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class is{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function GC(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function KC(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function QC(n,e){e&&(n["X-Firebase-GMPID"]=e)}function YC(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function XC(n,e,t,i,r,s,o=!0){const c=$C(n.urlParams),l=n.url+c,h=Object.assign({},n.headers);return QC(h,e),GC(h,t),KC(h,s),YC(h,i),new zC(l,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
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
 */function JC(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ZC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class qs{constructor(e,t){this._service=e,t instanceof tt?this._location=t:this._location=tt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new qs(e,t)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ZC(this._location.path)}get storage(){return this._service}get parent(){const e=JC(this._location.path);if(e===null)return null;const t=new tt(this._location.bucket,e);return new qs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw UC(e)}}function fd(n,e){const t=e==null?void 0:e[NC];return t==null?null:tt.makeFromBucketSpec(t,n)}function e0(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:Ga(r,n.app.options.projectId))}class t0{constructor(e,t,i,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=tg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DC,this._maxUploadRetryTime=OC,this._requests=new Set,r!=null?this._bucket=tt.makeFromBucketSpec(r,this._host):this._bucket=fd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=fd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qs(this,e)}_makeRequest(e,t,i,r,s=!0){if(this._deleted)return new BC(ng());{const o=XC(e,this._appId,i,r,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const pd="@firebase/storage",_d="0.12.5";/**
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
 */const ig="storage";function n0(n=oi(),e){n=he(n);const i=Xt(n,ig).getImmediate({identifier:e}),r=$s("storage");return r&&i0(i,...r),i}function i0(n,e,t,i={}){e0(n,e,t,i)}function r0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new t0(t,i,r,e,Jt)}function s0(){it(new Qe(ig,r0,"PUBLIC").setMultipleInstances(!0)),qe(pd,_d,""),qe(pd,_d,"esm2017")}s0();/**
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
 */const rg="functions";/**
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
 */class o0{constructor(e,t,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||t.get().then(r=>this.messaging=r,()=>{}),this.appCheck||i.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),r=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:r}}}/**
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
 */const $a="us-central1";class a0{constructor(e,t,i,r,s=$a,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new o0(t,i,r),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(s);this.customDomain=c.origin,this.region=$a}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function c0(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}const gd="@firebase/functions",md="0.11.5";/**
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
 */const l0="auth-internal",u0="app-check-internal",h0="messaging-internal";function d0(n,e){const t=(i,{instanceIdentifier:r})=>{const s=i.getProvider("app").getImmediate(),o=i.getProvider(l0),c=i.getProvider(h0),l=i.getProvider(u0);return new a0(s,o,c,l,r,n)};it(new Qe(rg,t,"PUBLIC").setMultipleInstances(!0)),qe(gd,md,e),qe(gd,md,"esm2017")}/**
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
 */function f0(n=oi(),e=$a){const i=Xt(he(n),rg).getImmediate({identifier:e}),r=$s("functions");return r&&p0(i,...r),i}function p0(n,e,t){c0(he(n),e,t)}d0(fetch.bind(self));/**
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
 */const Ha=new Map,sg={activated:!1,tokenObservers:[]},_0={initialized:!1,enabled:!1};function ge(n){return Ha.get(n)||Object.assign({},sg)}function g0(n,e){return Ha.set(n,e),Ha.get(n)}function go(){return _0}/**
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
 */const og="https://content-firebaseappcheck.googleapis.com/v1",m0="exchangeRecaptchaV3Token",y0="exchangeDebugToken",yd={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},v0=24*60*60*1e3;/**
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
 */class E0{constructor(e,t,i,r,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new dn,this.pending.promise.catch(t=>{}),await T0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new dn,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function T0(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const I0={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},We=new ri("appCheck","AppCheck",I0);/**
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
 */function vd(n=!1){var e;return n?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function hl(n){if(!ge(n).activated)throw We.create("use-before-activation",{appName:n.name})}function ag(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),i=Math.floor((e-t*3600*24)/3600),r=Math.floor((e-t*3600*24-i*3600)/60),s=e-t*3600*24-i*3600-r*60;let o="";return t&&(o+=rs(t)+"d:"),i&&(o+=rs(i)+"h:"),o+=rs(r)+"m:"+rs(s)+"s",o}function rs(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
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
 */async function dl({url:n,body:e},t){const i={"Content-Type":"application/json"},r=t.getImmediate({optional:!0});if(r){const _=await r.getHeartbeatsHeader();_&&(i["X-Firebase-Client"]=_)}const s={method:"POST",body:JSON.stringify(e),headers:i};let o;try{o=await fetch(n,s)}catch(_){throw We.create("fetch-network-error",{originalErrorMessage:_==null?void 0:_.message})}if(o.status!==200)throw We.create("fetch-status-error",{httpStatus:o.status});let c;try{c=await o.json()}catch(_){throw We.create("fetch-parse-error",{originalErrorMessage:_==null?void 0:_.message})}const l=c.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw We.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const h=Number(l[1])*1e3,f=Date.now();return{token:c.token,expireTimeMillis:f+h,issuedAtTimeMillis:f}}function w0(n,e){const{projectId:t,appId:i,apiKey:r}=n.options;return{url:`${og}/projects/${t}/apps/${i}:${m0}?key=${r}`,body:{recaptcha_v3_token:e}}}function cg(n,e){const{projectId:t,appId:i,apiKey:r}=n.options;return{url:`${og}/projects/${t}/apps/${i}:${y0}?key=${r}`,body:{debug_token:e}}}/**
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
 */const A0="firebase-app-check-database",R0=1,gr="firebase-app-check-store",lg="debug-token";let ss=null;function ug(){return ss||(ss=new Promise((n,e)=>{try{const t=indexedDB.open(A0,R0);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var r;e(We.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},t.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(gr,{keyPath:"compositeKey"})}}}catch(t){e(We.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),ss)}function C0(n){return dg(fg(n))}function S0(n,e){return hg(fg(n),e)}function b0(n){return hg(lg,n)}function P0(){return dg(lg)}async function hg(n,e){const i=(await ug()).transaction(gr,"readwrite"),s=i.objectStore(gr).put({compositeKey:n,value:e});return new Promise((o,c)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var h;c(We.create("storage-set",{originalErrorMessage:(h=l.target.error)===null||h===void 0?void 0:h.message}))}})}async function dg(n){const t=(await ug()).transaction(gr,"readonly"),r=t.objectStore(gr).get(n);return new Promise((s,o)=>{r.onsuccess=c=>{const l=c.target.result;s(l?l.value:void 0)},t.onerror=c=>{var l;o(We.create("storage-get",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function fg(n){return`${n.options.appId}-${n.name}`}/**
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
 */const mr=new yr("@firebase/app-check");/**
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
 */async function k0(n){if(Qa()){let e;try{e=await C0(n)}catch(t){mr.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function aa(n,e){return Qa()?S0(n,e).catch(t=>{mr.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function N0(){let n;try{n=await P0()}catch{}if(n)return n;{const e=Em();return b0(e).catch(t=>mr.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
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
 */function fl(){return go().enabled}async function pl(){const n=go();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function D0(){const n=bd(),e=go();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new dn;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(N0())}/**
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
 */const O0={error:"UNKNOWN_ERROR"};function M0(n){return js.encodeString(JSON.stringify(n),!1)}async function za(n,e=!1){const t=n.app;hl(t);const i=ge(t);let r=i.token,s;if(r&&!Fn(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(Fn(l)?r=l:await aa(t,void 0))}if(!e&&r&&Fn(r))return{token:r.token};let o=!1;if(fl()){i.exchangeTokenPromise||(i.exchangeTokenPromise=dl(cg(t,await pl()),n.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),o=!0);const l=await i.exchangeTokenPromise;return await aa(t,l),i.token=l,{token:l.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await ge(t).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?mr.warn(l.message):mr.error(l),s=l}let c;return r?s?Fn(r)?c={token:r.token,internalError:s}:c=Td(s):(c={token:r.token},i.token=r,await aa(t,r)):c=Td(s),o&&gg(t,c),c}async function x0(n){const e=n.app;hl(e);const{provider:t}=ge(e);if(fl()){const i=await pl(),{token:r}=await dl(cg(e,i),n.heartbeatServiceProvider);return{token:r}}else{const{token:i}=await t.getToken();return{token:i}}}function pg(n,e,t,i){const{app:r}=n,s=ge(r),o={next:t,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Fn(s.token)){const c=s.token;Promise.resolve().then(()=>{t({token:c.token}),Ed(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Ed(n))}function _g(n,e){const t=ge(n),i=t.tokenObservers.filter(r=>r.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function Ed(n){const{app:e}=n,t=ge(e);let i=t.tokenRefresher;i||(i=L0(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function L0(n){const{app:e}=n;return new E0(async()=>{const t=ge(e);let i;if(t.token?i=await za(n,!0):i=await za(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const t=ge(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},yd.RETRIAL_MIN_WAIT,yd.RETRIAL_MAX_WAIT)}function gg(n,e){const t=ge(n).tokenObservers;for(const i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Fn(n){return n.expireTimeMillis-Date.now()>0}function Td(n){return{token:M0(O0),error:n}}/**
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
 */class V0{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=ge(this.app);for(const t of e)_g(this.app,t.next);return Promise.resolve()}}function F0(n,e){return new V0(n,e)}function U0(n){return{getToken:e=>za(n,e),getLimitedUseToken:()=>x0(n),addTokenListener:e=>pg(n,"INTERNAL",e),removeTokenListener:e=>_g(n.app,e)}}const B0="@firebase/app-check",q0="0.8.4";/**
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
 */const j0="https://www.google.com/recaptcha/api.js";function W0(n,e){const t=new dn,i=ge(n);i.reCAPTCHAState={initialized:t};const r=$0(n),s=vd(!1);return s?Id(n,e,s,r,t):G0(()=>{const o=vd(!1);if(!o)throw new Error("no recaptcha");Id(n,e,o,r,t)}),t.promise}function Id(n,e,t,i,r){t.ready(()=>{z0(n,e,t,i),r.resolve(t)})}function $0(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function H0(n){hl(n);const t=await ge(n).reCAPTCHAState.initialized.promise;return new Promise((i,r)=>{const s=ge(n).reCAPTCHAState;t.ready(()=>{i(t.execute(s.widgetId,{action:"fire_app_check"}))})})}function z0(n,e,t,i){const r=t.render(i,{sitekey:e,size:"invisible",callback:()=>{ge(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{ge(n).reCAPTCHAState.succeeded=!1}}),s=ge(n);s.reCAPTCHAState=Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:r})}function G0(n){const e=document.createElement("script");e.src=j0,e.onload=n,document.head.appendChild(e)}/**
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
 */class _l{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,i;Q0(this._throttleData);const r=await H0(this._app).catch(o=>{throw We.create("recaptcha-error")});if(!(!((e=ge(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw We.create("recaptcha-error");let s;try{s=await dl(w0(this._app,r),this._heartbeatServiceProvider)}catch(o){throw!((t=o.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=K0(Number((i=o.customData)===null||i===void 0?void 0:i.httpStatus),this._throttleData),We.create("throttled",{time:ag(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=Xt(e,"heartbeat"),W0(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof _l?this._siteKey===e._siteKey:!1}}function K0(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+v0,httpStatus:n};{const t=e?e.backoffCount:0,i=Rm(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+i,httpStatus:n}}}function Q0(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw We.create("throttled",{time:ag(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
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
 */function Y0(n=oi(),e){n=he(n);const t=Xt(n,"app-check");if(go().initialized||D0(),fl()&&pl().then(r=>console.log(`App Check debug token: ${r}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(s.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&s.provider.isEqual(e.provider))return r;throw We.create("already-initialized",{appName:n.name})}const i=t.initialize({options:e});return X0(n,e.provider,e.isTokenAutoRefreshEnabled),ge(n).isTokenAutoRefreshEnabled&&pg(i,"INTERNAL",()=>{}),i}function X0(n,e,t){const i=g0(n,Object.assign({},sg));i.activated=!0,i.provider=e,i.cachedTokenPromise=k0(n).then(r=>(r&&Fn(r)&&(i.token=r,gg(n,{token:r.token})),r)),i.isTokenAutoRefreshEnabled=t===void 0?n.automaticDataCollectionEnabled:t,i.provider.initialize(n)}const J0="app-check",wd="app-check-internal";function Z0(){it(new Qe(J0,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return F0(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(wd).initialize()})),it(new Qe(wd,n=>{const e=n.getProvider("app-check").getImmediate();return U0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),qe(B0,q0)}Z0();const eS={projectId:"stein-unlimited",appId:"1:460714151837:web:c6f2fd892e9e5d8dbc6974",databaseURL:"https://stein-unlimited-default-rtdb.firebaseio.com",storageBucket:"stein-unlimited.appspot.com",apiKey:"AIzaSyCDldAeOZ4qveUC0cSEGj8uEXrPYjbdeB0",authDomain:"stein-unlimited.firebaseapp.com",messagingSenderId:"460714151837",measurementId:"G-708WJQEYVL"},mi=Vd(eS),gS=WE(mi),mS=Dw(mi);n0(mi);bC(mi);f0(mi);Y0(mi,{provider:new _l("6LepK2MjAAAAAA3mBOwOhYA-Om7SoxO7bNsRq0pv"),isTokenAutoRefreshEnabled:!0});export{gS as a,iS as b,aS as c,kw as d,lS as e,mS as f,uS as g,pS as h,fS as i,_S as j,dS as k,hS as l,nS as o,cS as q,tS as s};
