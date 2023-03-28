import{S as Ne,i as Fe,s as Pe,k as v,q as L,a as k,e as Se,l as g,m as D,r as x,h as u,c as S,n as T,b as R,F as a,u as Ae,L as _e,y as Le,D as xe,z as Oe,A as Be,K as we,g as De,d as Je,B as We,Q as He}from"../chunks/index.c7640428.js";function Re(N){let i,w,C,r,d;return{c(){i=v("meta"),w=k(),C=v("meta"),r=k(),d=v("meta"),this.h()},l(h){i=g(h,"META",{name:!0,content:!0}),w=S(h),C=g(h,"META",{name:!0,content:!0}),r=S(h),d=g(h,"META",{name:!0,content:!0}),this.h()},h(){T(i,"name","description"),T(i,"content","Jordan Carson, AI ML Engineer in NYC."),T(C,"name","og:title"),T(C,"content","Jordan Carson"),T(d,"name","og:description"),T(d,"content","Jordan Carson, AI ML Engineer in NYC.")},m(h,E){R(h,i,E),R(h,w,E),R(h,C,E),R(h,r,E),R(h,d,E)},d(h){h&&u(i),h&&u(w),h&&u(C),h&&u(r),h&&u(d)}}}function Ue(N){let i,w,C,r,d,h,E,O,J,U,G,P,o=N[1]&&Re();return{c(){i=v("title"),w=L(N[0]),C=k(),r=v("meta"),d=k(),h=v("meta"),E=k(),O=v("meta"),J=k(),U=v("meta"),G=k(),o&&o.c(),P=Se(),this.h()},l(n){i=g(n,"TITLE",{});var _=D(i);w=x(_,N[0]),_.forEach(u),C=S(n),r=g(n,"META",{name:!0,content:!0,class:!0}),d=S(n),h=g(n,"META",{name:!0,content:!0}),E=S(n),O=g(n,"META",{name:!0,content:!0}),J=S(n),U=g(n,"META",{name:!0,content:!0}),G=S(n),o&&o.l(n),P=Se(),this.h()},h(){T(r,"name","title"),T(r,"content",N[0]),T(r,"class","text-left"),T(h,"name","keywords"),T(h,"content",`Python, Artificial Intelligence, Machine Learning, JavaScript, TypeScript, Blog, Blogger,
	Jordan, Carson, Jordan Carson, NYC, New York, United States`),T(O,"name","author"),T(O,"content","Jordan Carson"),T(U,"name","copyright"),T(U,"content","Jordan Carson")},m(n,_){R(n,i,_),a(i,w),R(n,C,_),R(n,r,_),R(n,d,_),R(n,h,_),R(n,E,_),R(n,O,_),R(n,J,_),R(n,U,_),R(n,G,_),o&&o.m(n,_),R(n,P,_)},p(n,[_]){_&1&&Ae(w,n[0]),_&1&&T(r,"content",n[0]),n[1]?o||(o=Re(),o.c(),o.m(P.parentNode,P)):o&&(o.d(1),o=null)},i:_e,o:_e,d(n){n&&u(i),n&&u(C),n&&u(r),n&&u(d),n&&u(h),n&&u(E),n&&u(O),n&&u(J),n&&u(U),n&&u(G),o&&o.d(n),n&&u(P)}}}function Ve(N,i,w){let{title:C=""}=i,{details:r=!0}=i;return N.$$set=d=>{"title"in d&&w(0,C=d.title),"details"in d&&w(1,r=d.details)},[C,r]}class ze extends Ne{constructor(i){super(),Fe(this,i,Ve,Ue,Pe,{title:0,details:1})}}var Ee={};(function N(i,w,C,r){var d=!!(i.Worker&&i.Blob&&i.Promise&&i.OffscreenCanvas&&i.OffscreenCanvasRenderingContext2D&&i.HTMLCanvasElement&&i.HTMLCanvasElement.prototype.transferControlToOffscreen&&i.URL&&i.URL.createObjectURL);function h(){}function E(t){var e=w.exports.Promise,f=e!==void 0?e:i.Promise;return typeof f=="function"?new f(t):(t(h,h),null)}var O=function(){var t=Math.floor(16.666666666666668),e,f,s={},p=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(m){var l=Math.random();return s[l]=requestAnimationFrame(function c(y){p===y||p+t-1<y?(p=y,delete s[l],m()):s[l]=requestAnimationFrame(c)}),l},f=function(m){s[m]&&cancelAnimationFrame(s[m])}):(e=function(m){return setTimeout(m,t)},f=function(m){return clearTimeout(m)}),{frame:e,cancel:f}}(),J=function(){var t,e,f={};function s(p){function m(l,c){p.postMessage({options:l||{},callback:c})}p.init=function(c){var y=c.transferControlToOffscreen();p.postMessage({canvas:y},[y])},p.fire=function(c,y,H){if(e)return m(c,null),e;var b=Math.random().toString(36).slice(2);return e=E(function(A){function F(M){M.data.callback===b&&(delete f[b],p.removeEventListener("message",F),e=null,H(),A())}p.addEventListener("message",F),m(c,b),f[b]=F.bind(null,{data:{callback:b}})}),e},p.reset=function(){p.postMessage({reset:!0});for(var c in f)f[c](),delete f[c]}}return function(){if(t)return t;if(!C&&d){var p=["var CONFETTI, SIZE = {}, module = {};","("+N.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([p])))}catch(m){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",m),null}s(t)}return t}}(),U={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function G(t,e){return e?e(t):t}function P(t){return t!=null}function o(t,e,f){return G(t&&P(t[e])?t[e]:U[e],f)}function n(t){return t<0?0:Math.floor(t)}function _(t,e){return Math.floor(Math.random()*(e-t))+t}function Q(t){return parseInt(t,16)}function oe(t){return t.map(ee)}function ee(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:Q(e.substring(0,2)),g:Q(e.substring(2,4)),b:Q(e.substring(4,6))}}function le(t){var e=o(t,"origin",Object);return e.x=o(e,"x",Number),e.y=o(e,"y",Number),e}function se(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function ce(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function ue(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function W(t,e,f,s,p,m,l,c,y){t.save(),t.translate(e,f),t.rotate(m),t.scale(s,p),t.arc(0,0,1,l,c,y),t.restore()}function de(t){var e=t.angle*(Math.PI/180),f=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*f-Math.random()*f),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar}}function fe(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var f=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,p=e.y+e.random*e.tiltSin,m=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-f)+")",t.beginPath(),e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(m-s)*e.ovalScalar,Math.abs(l-p)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):W(t,e.x,e.y,Math.abs(m-s)*e.ovalScalar,Math.abs(l-p)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var c=Math.PI/2*3,y=4*e.scalar,H=8*e.scalar,b=e.x,A=e.y,F=5,M=Math.PI/F;F--;)b=e.x+Math.cos(c)*H,A=e.y+Math.sin(c)*H,t.lineTo(b,A),c+=M,b=e.x+Math.cos(c)*y,A=e.y+Math.sin(c)*y,t.lineTo(b,A),c+=M;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(p)),t.lineTo(Math.floor(m),Math.floor(l)),t.lineTo(Math.floor(s),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function te(t,e,f,s,p){var m=e.slice(),l=t.getContext("2d"),c,y,H=E(function(b){function A(){c=y=null,l.clearRect(0,0,s.width,s.height),p(),b()}function F(){C&&!(s.width===r.width&&s.height===r.height)&&(s.width=t.width=r.width,s.height=t.height=r.height),!s.width&&!s.height&&(f(t),s.width=t.width,s.height=t.height),l.clearRect(0,0,s.width,s.height),m=m.filter(function(M){return fe(l,M)}),m.length?c=O.frame(F):A()}c=O.frame(F),y=A});return{addFettis:function(b){return m=m.concat(b),H},canvas:t,promise:H,reset:function(){c&&O.cancel(c),y&&y()}}}function ae(t,e){var f=!t,s=!!o(e||{},"resize"),p=o(e,"disableForReducedMotion",Boolean),m=d&&!!o(e||{},"useWorker"),l=m?J():null,c=f?se:ce,y=t&&l?!!t.__confetti_initialized:!1,H=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,b;function A(M,q,ne){for(var V=o(M,"particleCount",n),$=o(M,"angle",Number),K=o(M,"spread",Number),z=o(M,"startVelocity",Number),he=o(M,"decay",Number),ge=o(M,"gravity",Number),B=o(M,"drift",Number),j=o(M,"colors",oe),I=o(M,"ticks",Number),Y=o(M,"shapes"),Ce=o(M,"scalar"),me=le(M),pe=V,ie=[],Z=t.width*me.x,ye=t.height*me.y;pe--;)ie.push(de({x:Z,y:ye,angle:$,spread:K,startVelocity:z,color:j[pe%j.length],shape:Y[_(0,Y.length)],ticks:I,decay:he,gravity:ge,drift:B,scalar:Ce}));return b?b.addFettis(ie):(b=te(t,ie,c,q,ne),b.promise)}function F(M){var q=p||o(M,"disableForReducedMotion",Boolean),ne=o(M,"zIndex",Number);if(q&&H)return E(function(z){z()});f&&b?t=b.canvas:f&&!t&&(t=ue(ne),document.body.appendChild(t)),s&&!y&&c(t);var V={width:t.width,height:t.height};l&&!y&&l.init(t),y=!0,l&&(t.__confetti_initialized=!0);function $(){if(l){var z={getBoundingClientRect:function(){if(!f)return t.getBoundingClientRect()}};c(z),l.postMessage({resize:{width:z.width,height:z.height}});return}V.width=V.height=null}function K(){b=null,s&&i.removeEventListener("resize",$),f&&t&&(document.body.removeChild(t),t=null,y=!1)}return s&&i.addEventListener("resize",$,!1),l?l.fire(M,V,K):A(M,V,K)}return F.reset=function(){l&&l.reset(),b&&b.reset()},F}var re;function X(){return re||(re=ae(null,{useWorker:!0,resize:!0})),re}w.exports=function(){return X().apply(this,arguments)},w.exports.reset=function(){X().reset()},w.exports.create=ae})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Ee,!1);const ve=Ee.exports;Ee.exports.create;function Ye(N){let i,w,C,r,d,h,E,O,J,U,G,P,o,n,_,Q,oe,ee,le,se,ce,ue,W,de,fe,te,ae,re,X,t,e,f,s,p,m,l,c,y,H,b,A,F,M,q,ne,V,$,K,z,he,ge;return w=new ze({props:{title:"Jordan Carson",details:!0}}),{c(){i=v("link"),Le(w.$$.fragment),C=k(),r=v("section"),d=v("h1"),h=L(`Hi, I'm Jordan
		`),E=v("strong"),O=k(),J=v("div"),U=L("👋"),G=k(),P=v("strong"),o=k(),n=v("br"),_=k(),Q=v("br"),oe=k(),ee=v("p"),le=L("Mastering in AI and Computational Mathematics at Johns Hopkins University."),se=k(),ce=v("br"),ue=k(),W=v("p"),de=v("br"),fe=L(`
			Proud City Carnivore. Enjoy `),te=v("strong"),ae=L("blogging"),re=L(" about data and "),X=v("strong"),t=L("food"),e=L(`. Sometimes creating visual essays with data.
			`),f=v("br"),s=k(),p=v("br"),m=k(),l=v("p"),c=L("Lifelong learner, "),y=v("strong"),H=L("open-source enthusiast"),b=L(", mainly working on ...this website"),A=k(),F=v("br"),M=k(),q=v("p"),ne=L("Also a huge "),V=v("strong"),$=L("skiier"),K=L("."),this.h()},l(B){const j=xe("svelte-np8q6v",document.head);i=g(j,"LINK",{href:!0,rel:!0}),Oe(w.$$.fragment,j),j.forEach(u),C=S(B),r=g(B,"SECTION",{class:!0});var I=D(r);d=g(I,"H1",{class:!0});var Y=D(d);h=x(Y,`Hi, I'm Jordan
		`),E=g(Y,"STRONG",{});var Ce=D(E);Ce.forEach(u),O=S(Y),J=g(Y,"DIV",{class:!0});var me=D(J);U=x(me,"👋"),me.forEach(u),G=S(Y),P=g(Y,"STRONG",{});var pe=D(P);pe.forEach(u),o=S(Y),n=g(Y,"BR",{}),Y.forEach(u),_=S(I),Q=g(I,"BR",{}),oe=S(I),ee=g(I,"P",{});var ie=D(ee);le=x(ie,"Mastering in AI and Computational Mathematics at Johns Hopkins University."),ie.forEach(u),se=S(I),ce=g(I,"BR",{}),ue=S(I),W=g(I,"P",{});var Z=D(W);de=g(Z,"BR",{}),fe=x(Z,`
			Proud City Carnivore. Enjoy `),te=g(Z,"STRONG",{});var ye=D(te);ae=x(ye,"blogging"),ye.forEach(u),re=x(Z," about data and "),X=g(Z,"STRONG",{});var Te=D(X);t=x(Te,"food"),Te.forEach(u),e=x(Z,`. Sometimes creating visual essays with data.
			`),f=g(Z,"BR",{}),Z.forEach(u),s=S(I),p=g(I,"BR",{}),m=S(I),l=g(I,"P",{});var be=D(l);c=x(be,"Lifelong learner, "),y=g(be,"STRONG",{});var Ie=D(y);H=x(Ie,"open-source enthusiast"),Ie.forEach(u),b=x(be,", mainly working on ...this website"),be.forEach(u),A=S(I),F=g(I,"BR",{}),M=S(I),q=g(I,"P",{});var Me=D(q);ne=x(Me,"Also a huge "),V=g(Me,"STRONG",{});var ke=D(V);$=x(ke,"skiier"),ke.forEach(u),K=x(Me,"."),Me.forEach(u),I.forEach(u),this.h()},h(){T(i,"href","https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"),T(i,"rel","stylesheet"),T(J,"class","wave svelte-17siydg"),T(d,"class","font-light text-5xl text-center svelte-17siydg"),T(r,"class","svelte-17siydg")},m(B,j){a(document.head,i),Be(w,document.head,null),R(B,C,j),R(B,r,j),a(r,d),a(d,h),a(d,E),a(d,O),a(d,J),a(J,U),a(d,G),a(d,P),a(d,o),a(d,n),a(r,_),a(r,Q),a(r,oe),a(r,ee),a(ee,le),a(r,se),a(r,ce),a(r,ue),a(r,W),a(W,de),a(W,fe),a(W,te),a(te,ae),a(W,re),a(W,X),a(X,t),a(W,e),a(W,f),a(r,s),a(r,p),a(r,m),a(r,l),a(l,c),a(l,y),a(y,H),a(l,b),a(r,A),a(r,F),a(r,M),a(r,q),a(q,ne),a(q,V),a(V,$),a(q,K),z=!0,he||(ge=[we(E,"mouseover",N[0]),we(E,"focus",N[0]),we(P,"mouseover",N[0]),we(P,"focus",N[0])],he=!0)},p:_e,i(B){z||(De(w.$$.fragment,B),z=!0)},o(B){Je(w.$$.fragment,B),z=!1},d(B){u(i),We(w),B&&u(C),B&&u(r),he=!1,He(ge)}}}function qe(N){let i=0;function w(C){if(i+1111>Date.now())return;i=Date.now();const r={disableForReducedMotion:!0,origin:{x:C.x/window.innerWidth,y:(C.y-1)/window.innerHeight}};ve({...r,spread:26,startVelocity:55,particleCount:Math.floor(200*.25)}),ve({...r,spread:60,particleCount:Math.floor(200*.2)}),ve({...r,spread:100,decay:.91,scalar:.8,particleCount:Math.floor(200*.35)}),ve({...r,spread:120,startVelocity:25,decay:.92,scalar:1.2,particleCount:Math.floor(200*.1)}),ve({...r,spread:120,startVelocity:45,particleCount:Math.floor(200*.1)})}return[w]}class Ze extends Ne{constructor(i){super(),Fe(this,i,qe,Ye,Pe,{})}}export{Ze as default};