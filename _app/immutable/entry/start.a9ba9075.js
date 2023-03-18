import{o as Fe,t as se}from"../chunks/index.4b4f7035.js";import{w as ke}from"../chunks/index.8de33e46.js";function at(e,a){return e==="/"||a==="ignore"?e:a==="never"?e.endsWith("/")?e.slice(0,-1):e:a==="always"&&!e.endsWith("/")?e+"/":e}function rt(e){return e.split("%25").map(decodeURI).join("%25")}function ot(e){for(const a in e)e[a]=decodeURIComponent(e[a]);return e}const it=["href","pathname","search","searchParams","toString","toJSON"];function st(e,a){const i=new URL(e);for(const s of it){let f=i[s];Object.defineProperty(i,s,{get(){return a(),f},enumerable:!0,configurable:!0})}return lt(i),i}function lt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ct="/__data.json";function ft(e){return e.replace(/\/$/,"")+ct}var Ye;const B=((Ye=globalThis.__sveltekit_fk8juc)==null?void 0:Ye.base)??"";var We;const ut=((We=globalThis.__sveltekit_fk8juc)==null?void 0:We.assets)??B,dt="1679168143607",Xe="sveltekit:snapshot",Ze="sveltekit:scroll",V="sveltekit:index",fe={tap:1,hover:2,viewport:3,eager:4,off:-1};function Me(e){let a=e.baseURI;if(!a){const i=e.getElementsByTagName("base");a=i.length?i[0].href:e.URL}return a}function Q(){return{x:pageXOffset,y:pageYOffset}}function le(e,a){return e.getAttribute(`data-sveltekit-${a}`)}const Ge={...fe,"":fe.hover};function Qe(e){let a=e.assignedSlot??e.parentNode;return(a==null?void 0:a.nodeType)===11&&(a=a.host),a}function He(e,a){for(;e&&e!==a;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Qe(e)}}function we(e,a){let i;try{i=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,f=!i||!!s||Ee(i,a)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:i,external:f,target:s}}function ce(e){let a=null,i=null,s=null,f=null,u=e;for(;u&&u!==document.documentElement;)i===null&&(i=le(u,"preload-code")),s===null&&(s=le(u,"preload-data")),a===null&&(a=le(u,"noscroll")),f===null&&(f=le(u,"reload")),u=Qe(u);return{preload_code:Ge[i??"off"],preload_data:Ge[s??"off"],noscroll:a==="off"?!1:a===""?!0:null,reload:f==="off"?!1:f===""?!0:null}}function Be(e){const a=ke(e);let i=!0;function s(){i=!0,a.update(v=>v)}function f(v){i=!1,a.set(v)}function u(v){let d;return a.subscribe(m=>{(d===void 0||i&&m!==d)&&v(d=m)})}return{notify:s,set:f,subscribe:u}}function ht(){const{set:e,subscribe:a}=ke(!1);let i;async function s(){clearTimeout(i);const f=await fetch(`${ut}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(f.ok){const v=(await f.json()).version!==dt;return v&&(e(!0),clearTimeout(i)),v}else throw new Error(`Version check failed: ${f.status}`)}return{subscribe:a,check:s}}function Ee(e,a){return e.origin!==location.origin||!e.pathname.startsWith(a)}function et(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Je(e,a){const i=JSON.stringify(a);try{sessionStorage[e]=i}catch{}}function pt(...e){let a=5381;for(const i of e)if(typeof i=="string"){let s=i.length;for(;s;)a=a*33^i.charCodeAt(--s)}else if(ArrayBuffer.isView(i)){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let f=s.length;for(;f;)a=a*33^s[--f]}else throw new TypeError("value must be a string or TypedArray");return(a>>>0).toString(36)}const ue=window.fetch;window.fetch=(e,a)=>((e instanceof Request?e.method:(a==null?void 0:a.method)||"GET")!=="GET"&&te.delete(Se(e)),ue(e,a));const te=new Map;function gt(e,a){const i=Se(e,a),s=document.querySelector(i);if(s!=null&&s.textContent){const{body:f,...u}=JSON.parse(s.textContent),v=s.getAttribute("data-ttl");return v&&te.set(i,{body:f,init:u,ttl:1e3*Number(v)}),Promise.resolve(new Response(f,u))}return ue(e,a)}function mt(e,a,i){if(te.size>0){const s=Se(e,i),f=te.get(s);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(f.body,f.init);te.delete(s)}}return ue(a,i)}function Se(e,a){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(a!=null&&a.headers||a!=null&&a.body){const f=[];a.headers&&f.push([...new Headers(a.headers)].join(",")),a.body&&(typeof a.body=="string"||ArrayBuffer.isView(a.body))&&f.push(a.body),s+=`[data-hash="${pt(...f)}"]`}return s}const yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function wt(e){const a=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${bt(e).map(s=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(f)return a.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return a.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const v=s.split(/\[(.+?)\](?!\])/);return"/"+v.map((m,w)=>{if(w%2){if(m.startsWith("x+"))return _e(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return _e(String.fromCharCode(...m.slice(2).split("-").map(L=>parseInt(L,16))));const p=yt.exec(m);if(!p)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,I,E,U]=p;return a.push({name:E,matcher:U,optional:!!$,rest:!!I,chained:I?w===1&&v[0]==="":!1}),I?"(.*?)":$?"([^/]*)?":"([^/]+?)"}return _e(m)}).join("")}).join("")}/?$`),params:a}}function _t(e){return!/^\([^)]+\)$/.test(e)}function bt(e){return e.slice(1).split("/").filter(_t)}function vt(e,a,i){const s={},f=e.slice(1);let u=0;for(let v=0;v<a.length;v+=1){const d=a[v],m=f[v-u];if(d.chained&&d.rest&&u){s[d.name]=f.slice(v-u,v+1).filter(w=>w).join("/"),u=0;continue}if(m===void 0){d.rest&&(s[d.name]="");continue}if(!d.matcher||i[d.matcher](m)){s[d.name]=m;const w=a[v+1],p=f[v+1];w&&!w.rest&&w.optional&&p&&(u=0);continue}if(d.optional&&d.chained){u++;continue}return}if(!u)return s}function _e(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Et({nodes:e,server_loads:a,dictionary:i,matchers:s}){const f=new Set(a);return Object.entries(i).map(([d,[m,w,p]])=>{const{pattern:$,params:I}=wt(d),E={id:d,exec:U=>{const L=$.exec(U);if(L)return vt(L,I,s)},errors:[1,...p||[]].map(U=>e[U]),layouts:[0,...w||[]].map(v),leaf:u(m)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function u(d){const m=d<0;return m&&(d=~d),[m,e[d]]}function v(d){return d===void 0?d:[f.has(d),e[d]]}}let ee=class{constructor(a,i){this.status=a,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${a}`}}toString(){return JSON.stringify(this.body)}},Ke=class{constructor(a,i){this.status=a,this.location=i}};function kt(e){e.client}const F={url:Be({}),page:Be({}),navigating:ke(null),updated:ht()};async function St(e){var a;for(const i in e)if(typeof((a=e[i])==null?void 0:a.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([s,f])=>[s,await f])));return e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Rt=-1,At=-2,Lt=-3,It=-4,Ut=-5,Ot=-6;function Pt(e,a){if(typeof e=="number")return f(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const i=e,s=Array(i.length);function f(u,v=!1){if(u===Rt)return;if(u===Lt)return NaN;if(u===It)return 1/0;if(u===Ut)return-1/0;if(u===Ot)return-0;if(v)throw new Error("Invalid input");if(u in s)return s[u];const d=i[u];if(!d||typeof d!="object")s[u]=d;else if(Array.isArray(d))if(typeof d[0]=="string"){const m=d[0],w=a==null?void 0:a[m];if(w)return s[u]=w(f(d[1]));switch(m){case"Date":s[u]=new Date(d[1]);break;case"Set":const p=new Set;s[u]=p;for(let E=1;E<d.length;E+=1)p.add(f(d[E]));break;case"Map":const $=new Map;s[u]=$;for(let E=1;E<d.length;E+=2)$.set(f(d[E]),f(d[E+1]));break;case"RegExp":s[u]=new RegExp(d[1],d[2]);break;case"Object":s[u]=Object(d[1]);break;case"BigInt":s[u]=BigInt(d[1]);break;case"null":const I=Object.create(null);s[u]=I;for(let E=1;E<d.length;E+=2)I[d[E]]=f(d[E+1]);break;default:throw new Error(`Unknown type ${m}`)}}else{const m=new Array(d.length);s[u]=m;for(let w=0;w<d.length;w+=1){const p=d[w];p!==At&&(m[w]=f(p))}}else{const m={};s[u]=m;for(const w in d){const p=d[w];m[w]=f(p)}}return s[u]}return f(0)}function jt(e){return e.filter(a=>a!=null)}const J=et(Ze)??{},Z=et(Xe)??{};function be(e){J[e]=Q()}function Nt(e,a){var Ce;const i=Et(e),s=e.nodes[0],f=e.nodes[1];s(),f();const u=document.documentElement,v=[],d=[];let m=null;const w={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},$=!1,I=!1,E=!0,U=!1,L=!1,K=!1,M=!1,q,N=(Ce=history.state)==null?void 0:Ce[V];N||(N=Date.now(),history.replaceState({...history.state,[V]:N},"",location.href));const de=J[N];de&&(history.scrollRestoration="manual",scrollTo(de.x,de.y));let G,Re,ne;async function Ae(){ne=ne||Promise.resolve(),await ne,ne=null;const n=new URL(location.href),t=Y(n,!0);m=null,await Pe(t,n,[])}function Le(n){d.some(t=>t==null?void 0:t.snapshot)&&(Z[n]=d.map(t=>{var o;return(o=t==null?void 0:t.snapshot)==null?void 0:o.capture()}))}function Ie(n){var t;(t=Z[n])==null||t.forEach((o,r)=>{var c,l;(l=(c=d[r])==null?void 0:c.snapshot)==null||l.restore(o)})}function Ue(){be(N),Je(Ze,J),Le(N),Je(Xe,Z)}async function he(n,{noScroll:t=!1,replaceState:o=!1,keepFocus:r=!1,state:c={},invalidateAll:l=!1},g,h){return typeof n=="string"&&(n=new URL(n,Me(document))),ie({url:n,scroll:t?Q():null,keepfocus:r,redirect_chain:g,details:{state:c,replaceState:o},nav_token:h,accepted:()=>{l&&(M=!0)},blocked:()=>{},type:"goto"})}async function Oe(n){return m={id:n.id,promise:Te(n).then(t=>(t.type==="loaded"&&t.state.error&&(m=null),t))},m.promise}async function ae(...n){const o=i.filter(r=>n.some(c=>r.exec(c))).map(r=>Promise.all([...r.layouts,r.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(o)}async function Pe(n,t,o,r,c,l={},g){var _,y,A;Re=l;let h=n&&await Te(n);if(h||(h=await De(t,{id:null},await X(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)),t=(n==null?void 0:n.url)||t,Re!==l)return!1;if(h.type==="redirect")if(o.length>10||o.includes(t.pathname))h=await re({status:500,error:await X(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return he(new URL(h.location,t).href,{},[...o,t.pathname],l),!1;else((_=h.props.page)==null?void 0:_.status)>=400&&await F.updated.check()&&await W(t);if(v.length=0,M=!1,U=!0,r&&(be(r),Le(r)),(y=h.props.page)!=null&&y.url&&h.props.page.url.pathname!==t.pathname&&(t.pathname=(A=h.props.page)==null?void 0:A.url.pathname),c&&c.details){const{details:S}=c,O=S.replaceState?0:1;if(S.state[V]=N+=O,history[S.replaceState?"replaceState":"pushState"](S.state,"",t),!S.replaceState){let R=N+1;for(;Z[R]||J[R];)delete Z[R],delete J[R],R+=1}}if(m=null,I?(p=h.state,h.props.page&&(h.props.page.url=t),q.$set(h.props)):je(h),c){const{scroll:S,keepfocus:O}=c,{activeElement:R}=document;if(await se(),E){const P=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));S?scrollTo(S.x,S.y):P?P.scrollIntoView():scrollTo(0,0)}const b=document.activeElement!==R&&document.activeElement!==document.body;!O&&!b&&await ve()}else await se();E=!0,h.props.page&&(G=h.props.page),g&&g(),U=!1}function je(n){var r;p=n.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),G=n.props.page,q=new e.root({target:a,props:{...n.props,stores:F,components:d},hydrate:!0}),Ie(N);const o={from:null,to:{params:p.params,route:{id:((r=p.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};w.after_navigate.forEach(c=>c(o)),I=!0}async function z({url:n,params:t,branch:o,status:r,error:c,route:l,form:g}){let h="never";for(const R of o)(R==null?void 0:R.slash)!==void 0&&(h=R.slash);n.pathname=at(n.pathname,h),n.search=n.search;const _={type:"loaded",state:{url:n,params:t,branch:o,error:c,route:l},props:{constructors:jt(o).map(R=>R.node.component)}};g!==void 0&&(_.props.form=g);let y={},A=!G,S=0;for(let R=0;R<Math.max(o.length,p.branch.length);R+=1){const b=o[R],P=p.branch[R];(b==null?void 0:b.data)!==(P==null?void 0:P.data)&&(A=!0),b&&(y={...y,...b.data},A&&(_.props[`data_${S}`]=y),S+=1)}return(!p.url||n.href!==p.url.href||p.error!==c||g!==void 0&&g!==G.form||A)&&(_.props.page={error:c,params:t,route:{id:(l==null?void 0:l.id)??null},status:r,url:new URL(n),form:g??null,data:A?y:G.data}),_}async function pe({loader:n,parent:t,url:o,params:r,route:c,server_data_node:l}){var y,A,S;let g=null;const h={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},_=await n();if((y=_.universal)!=null&&y.load){let O=function(...b){for(const P of b){const{href:D}=new URL(P,o);h.dependencies.add(D)}};const R={route:{get id(){return h.route=!0,c.id}},params:new Proxy(r,{get:(b,P)=>(h.params.add(P),b[P])}),data:(l==null?void 0:l.data)??null,url:st(o,()=>{h.url=!0}),async fetch(b,P){let D;b instanceof Request?(D=b.url,P={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...P}):D=b;const C=new URL(D,o);return O(C.href),C.origin===o.origin&&(D=C.href.slice(o.origin.length)),I?mt(D,C.href,P):gt(D,P)},setHeaders:()=>{},depends:O,parent(){return h.parent=!0,t()}};g=await _.universal.load.call(null,R)??null,g=g?await St(g):null}return{node:_,loader:n,server:l,universal:(A=_.universal)!=null&&A.load?{type:"data",data:g,uses:h}:null,data:g??(l==null?void 0:l.data)??null,slash:((S=_.universal)==null?void 0:S.trailingSlash)??(l==null?void 0:l.slash)}}function Ne(n,t,o,r,c){if(M)return!0;if(!r)return!1;if(r.parent&&n||r.route&&t||r.url&&o)return!0;for(const l of r.params)if(c[l]!==p.params[l])return!0;for(const l of r.dependencies)if(v.some(g=>g(new URL(l))))return!0;return!1}function ge(n,t){return(n==null?void 0:n.type)==="data"?n:(n==null?void 0:n.type)==="skip"?t??null:null}async function Te({id:n,invalidating:t,url:o,params:r,route:c}){if((m==null?void 0:m.id)===n)return m.promise;const{errors:l,layouts:g,leaf:h}=c,_=[...g,h];l.forEach(k=>k==null?void 0:k().catch(()=>{})),_.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const A=p.url?n!==p.url.pathname+p.url.search:!1,S=p.route?c.id!==p.route.id:!1;let O=!1;const R=_.map((k,x)=>{var H;const j=p.branch[x],T=!!(k!=null&&k[0])&&((j==null?void 0:j.loader)!==k[1]||Ne(O,S,A,(H=j.server)==null?void 0:H.uses,r));return T&&(O=!0),T});if(R.some(Boolean)){try{y=await ze(o,R)}catch(k){return re({status:k instanceof ee?k.status:500,error:await X(k,{url:o,params:r,route:{id:c.id}}),url:o,route:c})}if(y.type==="redirect")return y}const b=y==null?void 0:y.nodes;let P=!1;const D=_.map(async(k,x)=>{var me;if(!k)return;const j=p.branch[x],T=b==null?void 0:b[x];if((!T||T.type==="skip")&&k[1]===(j==null?void 0:j.loader)&&!Ne(P,S,A,(me=j.universal)==null?void 0:me.uses,r))return j;if(P=!0,(T==null?void 0:T.type)==="error")throw T;return pe({loader:k[1],url:o,params:r,route:c,parent:async()=>{var qe;const Ve={};for(let ye=0;ye<x;ye+=1)Object.assign(Ve,(qe=await D[ye])==null?void 0:qe.data);return Ve},server_data_node:ge(T===void 0&&k[0]?{type:"skip"}:T??null,k[0]?j==null?void 0:j.server:void 0)})});for(const k of D)k.catch(()=>{});const C=[];for(let k=0;k<_.length;k+=1)if(_[k])try{C.push(await D[k])}catch(x){if(x instanceof Ke)return{type:"redirect",location:x.location};let j=500,T;if(b!=null&&b.includes(x))j=x.status??j,T=x.error;else if(x instanceof ee)j=x.status,T=x.body;else{if(await F.updated.check())return await W(o);T=await X(x,{params:r,url:o,route:{id:c.id}})}const H=await $e(k,C,l);return H?await z({url:o,params:r,branch:C.slice(0,H.idx).concat(H.node),status:j,error:T,route:c}):await De(o,{id:c.id},T,j)}else C.push(void 0);return await z({url:o,params:r,branch:C,status:200,error:null,route:c,form:t?void 0:null})}async function $e(n,t,o){for(;n--;)if(o[n]){let r=n;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await o[n](),loader:o[n],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:n,error:t,url:o,route:r}){const c={};let l=null;if(e.server_loads[0]===0)try{const y=await ze(o,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;l=y.nodes[0]??null}catch{(o.origin!==location.origin||o.pathname!==location.pathname||$)&&await W(o)}const h=await pe({loader:s,url:o,params:c,route:r,parent:()=>Promise.resolve({}),server_data_node:ge(l)}),_={node:await f(),loader:f,universal:null,server:null,data:null};return await z({url:o,params:c,branch:[h,_],status:n,error:t,route:null})}function Y(n,t){if(Ee(n,B))return;const o=oe(n);for(const r of i){const c=r.exec(o);if(c)return{id:n.pathname+n.search,invalidating:t,route:r,params:ot(c),url:n}}}function oe(n){return rt(n.pathname.slice(B.length)||"/")}function xe({url:n,type:t,intent:o,delta:r}){var h,_;let c=!1;const l={from:{params:p.params,route:{id:((h=p.route)==null?void 0:h.id)??null},url:p.url},to:{params:(o==null?void 0:o.params)??null,route:{id:((_=o==null?void 0:o.route)==null?void 0:_.id)??null},url:n},willUnload:!o,type:t};r!==void 0&&(l.delta=r);const g={...l,cancel:()=>{c=!0}};return L||w.before_navigate.forEach(y=>y(g)),c?null:l}async function ie({url:n,scroll:t,keepfocus:o,redirect_chain:r,details:c,type:l,delta:g,nav_token:h,accepted:_,blocked:y}){const A=Y(n,!1),S=xe({url:n,type:l,delta:g,intent:A});if(!S){y();return}const O=N;_(),L=!0,I&&F.navigating.set(S),await Pe(A,n,r,O,{scroll:t,keepfocus:o,details:c},h,()=>{L=!1,w.after_navigate.forEach(R=>R(S)),F.navigating.set(null)})}async function De(n,t,o,r){return n.origin===location.origin&&n.pathname===location.pathname&&!$?await re({status:r,error:o,url:n,route:t}):await W(n)}function W(n){return location.href=n.href,new Promise(()=>{})}function nt(){let n;u.addEventListener("mousemove",l=>{const g=l.target;clearTimeout(n),n=setTimeout(()=>{r(g,2)},20)});function t(l){r(l.composedPath()[0],1)}u.addEventListener("mousedown",t),u.addEventListener("touchstart",t,{passive:!0});const o=new IntersectionObserver(l=>{for(const g of l)g.isIntersecting&&(ae(oe(new URL(g.target.href))),o.unobserve(g.target))},{threshold:0});function r(l,g){const h=He(l,u);if(!h)return;const{url:_,external:y}=we(h,B);if(y)return;const A=ce(h);if(!A.reload)if(g<=A.preload_data){const S=Y(_,!1);S&&Oe(S)}else g<=A.preload_code&&ae(oe(_))}function c(){o.disconnect();for(const l of u.querySelectorAll("a")){const{url:g,external:h}=we(l,B);if(h)continue;const _=ce(l);_.reload||(_.preload_code===fe.viewport&&o.observe(l),_.preload_code===fe.eager&&ae(oe(g)))}}w.after_navigate.push(c),c()}function X(n,t){return n instanceof ee?n.body:e.hooks.handleError({error:n,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:n=>{Fe(()=>(w.after_navigate.push(n),()=>{const t=w.after_navigate.indexOf(n);w.after_navigate.splice(t,1)}))},before_navigate:n=>{Fe(()=>(w.before_navigate.push(n),()=>{const t=w.before_navigate.indexOf(n);w.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(U||!I)&&(E=!1)},goto:(n,t={})=>he(n,t,[]),invalidate:n=>{if(typeof n=="function")v.push(n);else{const{href:t}=new URL(n,location.href);v.push(o=>o.href===t)}return Ae()},invalidateAll:()=>(M=!0,Ae()),preload_data:async n=>{const t=new URL(n,Me(document)),o=Y(t,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Oe(o)},preload_code:ae,apply_action:async n=>{if(n.type==="error"){const t=new URL(location.href),{branch:o,route:r}=p;if(!r)return;const c=await $e(p.branch.length,o,r.errors);if(c){const l=await z({url:t,params:p.params,branch:o.slice(0,c.idx).concat(c.node),status:n.status??500,error:n.error,route:r});p=l.state,q.$set(l.props),se().then(ve)}}else n.type==="redirect"?he(n.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...G,form:n.data,status:n.status}}),await se(),q.$set({form:n.data}),n.type==="success"&&ve())},_start_router:()=>{var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var r;let o=!1;if(Ue(),!L){const c={from:{params:p.params,route:{id:((r=p.route)==null?void 0:r.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>o=!0};w.before_navigate.forEach(l=>l(c))}o?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ue()}),(n=navigator.connection)!=null&&n.saveData||nt(),u.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const o=He(t.composedPath()[0],u);if(!o)return;const{url:r,external:c,target:l}=we(o,B);if(!r)return;if(l==="_parent"||l==="_top"){if(window.parent!==window)return}else if(l&&l!=="_self")return;const g=ce(o);if(!(o instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:"))return;if(c||g.reload){xe({url:r,type:"link"})?L=!0:t.preventDefault();return}const[_,y]=r.href.split("#");if(y!==void 0&&_===location.href.split("#")[0]){K=!0,be(N),p.url=r,F.page.set({...G,url:r}),F.page.notify();return}ie({url:r,scroll:g.noscroll?Q():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:r.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),u.addEventListener("submit",t=>{if(t.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formMethod)||o.method)!=="get")return;const l=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||o.action);if(Ee(l,B))return;const g=t.target,{noscroll:h,reload:_}=ce(g);if(_)return;t.preventDefault(),t.stopPropagation();const y=new FormData(g),A=r==null?void 0:r.getAttribute("name");A&&y.append(A,(r==null?void 0:r.getAttribute("value"))??""),l.search=new URLSearchParams(y).toString(),ie({url:l,scroll:h?Q():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var o;if((o=t.state)!=null&&o[V]){if(t.state[V]===N)return;const r=J[t.state[V]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){J[N]=Q(),N=t.state[V],scrollTo(r.x,r.y);return}const c=t.state[V]-N;let l=!1;await ie({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=t.state[V]},blocked:()=>{history.go(-c),l=!0},type:"popstate",delta:c}),l||Ie(N)}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[V]:++N},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&F.navigating.set(null)})},_hydrate:async({status:n=200,error:t,node_ids:o,params:r,route:c,data:l,form:g})=>{$=!0;const h=new URL(location.href);({params:r={},route:c={id:null}}=Y(h,!1)||{});let _;try{const y=o.map(async(A,S)=>{const O=l[S];return O!=null&&O.uses&&(O.uses=tt(O.uses)),pe({loader:e.nodes[A],url:h,params:r,route:c,parent:async()=>{const R={};for(let b=0;b<S;b+=1)Object.assign(R,(await y[b]).data);return R},server_data_node:ge(O)})});_=await z({url:h,params:r,branch:await Promise.all(y),status:n,error:t,form:g,route:i.find(({id:A})=>A===c.id)??null})}catch(y){if(y instanceof Ke){await W(new URL(y.location,location.href));return}_=await re({status:y instanceof ee?y.status:500,error:await X(y,{url:h,params:r,route:c}),url:h,route:c})}je(_)}}}async function ze(e,a){const i=new URL(e);i.pathname=ft(e.pathname),i.searchParams.append("x-sveltekit-invalidated",a.map(f=>f?"1":"").join("_"));const s=await ue(i.href);if(!s.ok)throw new ee(s.status,await s.json());return new Promise(async f=>{var p;const u=new Map,v=s.body.getReader(),d=new TextDecoder;function m($){return Pt($,{Promise:I=>new Promise((E,U)=>{u.set(I,{fulfil:E,reject:U})})})}let w="";for(;;){const{done:$,value:I}=await v.read();if($&&!w)break;for(w+=!I&&w?`
`:d.decode(I);;){const E=w.indexOf(`
`);if(E===-1)break;const U=JSON.parse(w.slice(0,E));if(w=w.slice(E+1),U.type==="redirect")return f(U);if(U.type==="data")(p=U.nodes)==null||p.forEach(L=>{(L==null?void 0:L.type)==="data"&&(L.uses=tt(L.uses),L.data=m(L.data))}),f(U);else if(U.type==="chunk"){const{id:L,data:K,error:M}=U,q=u.get(L);u.delete(L),M?q.reject(m(M)):q.fulfil(m(K))}}}})}function tt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function ve(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const a=document.body,i=a.getAttribute("tabindex");return a.tabIndex=-1,a.focus({preventScroll:!0}),i!==null?a.setAttribute("tabindex",i):a.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var f;s((f=getSelection())==null?void 0:f.removeAllRanges())})})}}async function Ct(e,a,i){const s=Nt(e,a);kt({client:s}),i?await s._hydrate(i):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Ct as start};
