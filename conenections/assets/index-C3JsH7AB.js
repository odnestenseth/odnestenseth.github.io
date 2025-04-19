(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();const p={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return ve(this.context.count)},getNextContextId(){return ve(this.context.count++)}};function ve(e){const t=String(e),n=t.length-1;return p.context.id+(n?String.fromCharCode(96+n):"")+t}function z(e){p.context=e}const Ue=!1,Re=(e,t)=>e===t,He=Symbol("solid-track"),se={equals:Re};let Ee=De;const H=1,ie=2,Ne={owned:null,cleanups:null,context:null,owner:null},de={};var v=null;let ne=null,qe=null,A=null,P=null,I=null,fe=0;function ee(e,t){const n=A,i=v,l=e.length===0,s=t===void 0?i:t,o=l?Ne:{owned:null,cleanups:null,context:s?s.context:null,owner:s},r=l?e:()=>e(()=>R(()=>te(o)));v=o,A=null;try{return q(r,!0)}finally{A=n,v=i}}function W(e,t){t=t?Object.assign({},se,t):se;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=l=>(typeof l=="function"&&(l=l(n.value)),Pe(n,l));return[Me.bind(n),i]}function $e(e,t,n){const i=ue(e,t,!0,H);Z(i)}function G(e,t,n){const i=ue(e,t,!1,H);Z(i)}function Ke(e,t,n){Ee=tt;const i=ue(e,t,!1,H),l=X&&xe(X);l&&(i.suspense=l),i.user=!0,I?I.push(i):Z(i)}function U(e,t,n){n=n?Object.assign({},se,n):se;const i=ue(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Z(i),Me.bind(i)}function Ye(e){return e&&typeof e=="object"&&"then"in e}function Oe(e,t,n){let i,l,s;typeof t=="function"?(i=e,l=t,s={}):(i=!0,l=e,s=t||{});let o=null,r=de,c=null,u=!1,a="initialValue"in s,f=typeof i=="function"&&U(i);const S=new Set,[w,_]=(s.storage||W)(s.initialValue),[$,M]=W(void 0),[h,d]=W(void 0,{equals:!1}),[C,N]=W(a?"ready":"unresolved");p.context&&(c=p.getNextContextId(),s.ssrLoadFrom==="initial"?r=s.initialValue:p.load&&p.has(c)&&(r=p.load(c)));function O(m,g,b,E){return o===m&&(o=null,E!==void 0&&(a=!0),(m===r||g===r)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(E,{value:g})),r=de,T(g,b)),g}function T(m,g){q(()=>{g===void 0&&_(()=>m),N(g!==void 0?"errored":a?"ready":"unresolved"),M(g);for(const b of S.keys())b.decrement();S.clear()},!1)}function y(){const m=X&&xe(X),g=w(),b=$();if(b!==void 0&&!o)throw b;return A&&!A.user&&m&&$e(()=>{h(),o&&(m.resolved&&ne||S.has(m)||(m.increment(),S.add(m)))}),g}function k(m=!0){if(m!==!1&&u)return;u=!1;const g=f?f():i;if(g==null||g===!1){O(o,R(w));return}const b=r!==de?r:R(()=>l(g,{value:w(),refetching:m}));return Ye(b)?(o=b,"value"in b?(b.status==="success"?O(o,b.value,void 0,g):O(o,void 0,he(b.value),g),b):(u=!0,queueMicrotask(()=>u=!1),q(()=>{N(a?"refreshing":"pending"),d()},!1),b.then(E=>O(b,E,void 0,g),E=>O(b,void 0,he(E),g)))):(O(o,b,void 0,g),b)}return Object.defineProperties(y,{state:{get:()=>C()},error:{get:()=>$()},loading:{get(){const m=C();return m==="pending"||m==="refreshing"}},latest:{get(){if(!a)return y();const m=$();if(m&&!o)throw m;return w()}}}),f?$e(()=>k(!1)):k(!1),[y,{refetch:k,mutate:_}]}function R(e){if(A===null)return e();const t=A;A=null;try{return e()}finally{A=t}}function Te(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}function Je(){return v}const[Ot,Tt]=W(!1);function Qe(e){I.push.apply(I,e),e.length=0}function Le(e,t){const n=Symbol("context");return{id:n,Provider:nt(n),defaultValue:e}}function xe(e){let t;return v&&v.context&&(t=v.context[e.id])!==void 0?t:e.defaultValue}function Xe(e){const t=U(e),n=U(()=>pe(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}let X;function Ze(){return X||(X=Le())}function Me(){if(this.sources&&this.state)if(this.state===H)Z(this);else{const e=P;P=null,q(()=>re(this),!1),P=e}if(A){const e=this.observers?this.observers.length:0;A.sources?(A.sources.push(this),A.sourceSlots.push(e)):(A.sources=[this],A.sourceSlots=[e]),this.observers?(this.observers.push(A),this.observerSlots.push(A.sources.length-1)):(this.observers=[A],this.observerSlots=[A.sources.length-1])}return this.value}function Pe(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&q(()=>{for(let l=0;l<e.observers.length;l+=1){const s=e.observers[l],o=ne&&ne.running;o&&ne.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?P.push(s):I.push(s),s.observers&&We(s)),o||(s.state=H)}if(P.length>1e6)throw P=[],new Error},!1)),t}function Z(e){if(!e.fn)return;te(e);const t=fe;ze(e,e.value,t)}function ze(e,t,n){let i;const l=v,s=A;A=v=e;try{i=e.fn(t)}catch(o){return e.pure&&(e.state=H,e.owned&&e.owned.forEach(te),e.owned=null),e.updatedAt=n+1,je(o)}finally{A=s,v=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Pe(e,i):e.value=i,e.updatedAt=n)}function ue(e,t,n,i=H,l){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:v?v.context:null,pure:n};return v===null||v!==Ne&&(v.owned?v.owned.push(s):v.owned=[s]),s}function le(e){if(e.state===0)return;if(e.state===ie)return re(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<fe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===H)Z(e);else if(e.state===ie){const i=P;P=null,q(()=>re(e,t[0]),!1),P=i}}function q(e,t){if(P)return e();let n=!1;t||(P=[]),I?n=!0:I=[],fe++;try{const i=e();return et(n),i}catch(i){n||(I=null),P=null,je(i)}}function et(e){if(P&&(De(P),P=null),e)return;const t=I;I=null,t.length&&q(()=>Ee(t),!1)}function De(e){for(let t=0;t<e.length;t++)le(e[t])}function tt(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:le(i)}if(p.context){if(p.count){p.effects||(p.effects=[]),p.effects.push(...e.slice(0,n));return}z()}for(p.effects&&(p.done||!p.count)&&(e=[...p.effects,...e],n+=p.effects.length,delete p.effects),t=0;t<n;t++)le(e[t])}function re(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const l=i.state;l===H?i!==t&&(!i.updatedAt||i.updatedAt<fe)&&le(i):l===ie&&re(i,t)}}}function We(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ie,n.pure?P.push(n):I.push(n),n.observers&&We(n))}}function te(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const s=l.pop(),o=n.observerSlots.pop();i<l.length&&(s.sourceSlots[o]=i,l[i]=s,n.observerSlots[i]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)te(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)te(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function he(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function je(e,t=v){throw he(e)}function pe(e){if(typeof e=="function"&&!e.length)return pe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=pe(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function nt(e,t){return function(i){let l;return G(()=>l=R(()=>(v.context={...v.context,[e]:i.value},Xe(()=>i.children))),void 0),l}}const st=Symbol("fallback");function Ce(e){for(let t=0;t<e.length;t++)e[t]()}function it(e,t,n={}){let i=[],l=[],s=[],o=0,r=t.length>1?[]:null;return Te(()=>Ce(s)),()=>{let c=e()||[],u=c.length,a,f;return c[He],R(()=>{let w,_,$,M,h,d,C,N,O;if(u===0)o!==0&&(Ce(s),s=[],i=[],l=[],o=0,r&&(r=[])),n.fallback&&(i=[st],l[0]=ee(T=>(s[0]=T,n.fallback())),o=1);else if(o===0){for(l=new Array(u),f=0;f<u;f++)i[f]=c[f],l[f]=ee(S);o=u}else{for($=new Array(u),M=new Array(u),r&&(h=new Array(u)),d=0,C=Math.min(o,u);d<C&&i[d]===c[d];d++);for(C=o-1,N=u-1;C>=d&&N>=d&&i[C]===c[N];C--,N--)$[N]=l[C],M[N]=s[C],r&&(h[N]=r[C]);for(w=new Map,_=new Array(N+1),f=N;f>=d;f--)O=c[f],a=w.get(O),_[f]=a===void 0?-1:a,w.set(O,f);for(a=d;a<=C;a++)O=i[a],f=w.get(O),f!==void 0&&f!==-1?($[f]=l[a],M[f]=s[a],r&&(h[f]=r[a]),f=_[f],w.set(O,f)):s[a]();for(f=d;f<u;f++)f in $?(l[f]=$[f],s[f]=M[f],r&&(r[f]=h[f],r[f](f))):l[f]=ee(S);l=l.slice(0,o=u),i=c.slice(0)}return l});function S(w){if(s[f]=w,r){const[_,$]=W(f);return r[f]=$,t(c[f],_)}return t(c[f])}}}function F(e,t){return R(()=>e(t||{}))}const lt=e=>`Stale read from <${e}>.`;function we(e){const t="fallback"in e&&{fallback:()=>e.fallback};return U(it(()=>e.each,e.children,t||void 0))}function oe(e){const t=e.keyed,n=U(()=>e.when,void 0,void 0),i=t?n:U(n,void 0,{equals:(l,s)=>!l==!s});return U(()=>{const l=i();if(l){const s=e.children;return typeof s=="function"&&s.length>0?R(()=>s(t?l:()=>{if(!R(i))throw lt("Show");return n()})):s}return e.fallback},void 0,void 0)}const rt=Le();function ot(e){let t=0,n,i,l,s,o;const[r,c]=W(!1),u=Ze(),a={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:r,effects:[],resolved:!1},f=Je();if(p.context&&p.load){const _=p.getContextId();let $=p.load(_);if($&&(typeof $!="object"||$.status!=="success"?l=$:p.gather(_)),l&&l!=="$$f"){const[M,h]=W(void 0,{equals:!1});s=M,l.then(()=>{if(p.done)return h();p.gather(_),z(i),h(),z()},d=>{o=d,h()})}}const S=xe(rt);S&&(n=S.register(a.inFallback));let w;return Te(()=>w&&w()),F(u.Provider,{value:a,get children(){return U(()=>{if(o)throw o;if(i=p.context,s)return s(),s=void 0;i&&l==="$$f"&&z();const _=U(()=>e.children);return U($=>{const M=a.inFallback(),{showContent:h=!0,showFallback:d=!0}=n?n():{};if((!M||l&&l!=="$$f")&&h)return a.resolved=!0,w&&w(),w=i=l=void 0,Qe(a.effects),_();if(d)return w?$:ee(C=>(w=C,i&&(z({id:i.id+"F",count:0}),i=void 0),e.fallback),f)})})}})}function ct(e,t,n){let i=n.length,l=t.length,s=i,o=0,r=0,c=t[l-1].nextSibling,u=null;for(;o<l||r<s;){if(t[o]===n[r]){o++,r++;continue}for(;t[l-1]===n[s-1];)l--,s--;if(l===o){const a=s<i?r?n[r-1].nextSibling:n[s-r]:c;for(;r<s;)e.insertBefore(n[r++],a)}else if(s===r)for(;o<l;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[r]===t[l-1]){const a=t[--l].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--s],a),t[l]=n[s]}else{if(!u){u=new Map;let f=r;for(;f<s;)u.set(n[f],f++)}const a=u.get(t[o]);if(a!=null)if(r<a&&a<s){let f=o,S=1,w;for(;++f<l&&f<s&&!((w=u.get(t[f]))==null||w!==a+S);)S++;if(S>a-r){const _=t[o];for(;r<a;)e.insertBefore(n[r++],_)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const Se="_$DX_DELEGATE";function ft(e,t,n,i={}){let l;return ee(s=>{l=s,t===document?e():j(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{l(),t.textContent=""}}function B(e,t,n,i){let l;const s=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},o=()=>(l||(l=s())).cloneNode(!0);return o.cloneNode=o,o}function Ge(e,t=window.document){const n=t[Se]||(t[Se]=new Set);for(let i=0,l=e.length;i<l;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,at))}}function ge(e,t,n){ye(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function ut(e,t){ye(e)||(t==null?e.removeAttribute("class"):e.className=t)}function Q(e,t,n={}){const i=Object.keys(t||{}),l=Object.keys(n);let s,o;for(s=0,o=l.length;s<o;s++){const r=l[s];!r||r==="undefined"||t[r]||(Ae(e,r,!1),delete n[r])}for(s=0,o=i.length;s<o;s++){const r=i[s],c=!!t[r];!r||r==="undefined"||n[r]===c||!c||(Ae(e,r,!0),n[r]=c)}return n}function j(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return ce(e,t,i,n);G(l=>ce(e,t(),l,n),i)}function ye(e){return!!p.context&&!p.done&&(!e||e.isConnected)}function Ae(e,t,n){const i=t.trim().split(/\s+/);for(let l=0,s=i.length;l<s;l++)e.classList.toggle(i[l],n)}function at(e){if(p.registry&&p.events&&p.events.find(([c,u])=>u===e))return;let t=e.target;const n=`$$${e.type}`,i=e.target,l=e.currentTarget,s=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),o=()=>{const c=t[n];if(c&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?c.call(t,u,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},r=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),p.registry&&!p.done&&(p.done=_$HY.done=!0),e.composedPath){const c=e.composedPath();s(c[0]);for(let u=0;u<c.length-2&&(t=c[u],!!o());u++){if(t._$host){t=t._$host,r();break}if(t.parentNode===l)break}}else r();s(i)}function ce(e,t,n,i,l){const s=ye(e);if(s){!n&&(n=[...e.childNodes]);let c=[];for(let u=0;u<n.length;u++){const a=n[u];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():c.push(a)}n=c}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(s||o==="number"&&(t=t.toString(),t===n))return n;if(r){let c=n[0];c&&c.nodeType===3?c.data!==t&&(c.data=t):c=document.createTextNode(t),n=J(e,n,i,c)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(s)return n;n=J(e,n,i)}else{if(o==="function")return G(()=>{let c=t();for(;typeof c=="function";)c=c();n=ce(e,c,n,i)}),()=>n;if(Array.isArray(t)){const c=[],u=n&&Array.isArray(n);if(me(c,t,n,l))return G(()=>n=ce(e,c,n,i,!0)),()=>n;if(s){if(!c.length)return n;if(i===void 0)return n=[...e.childNodes];let a=c[0];if(a.parentNode!==e)return n;const f=[a];for(;(a=a.nextSibling)!==i;)f.push(a);return n=f}if(c.length===0){if(n=J(e,n,i),r)return n}else u?n.length===0?_e(e,c,i):ct(e,n,c):(n&&J(e),_e(e,c));n=c}else if(t.nodeType){if(s&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=J(e,n,i,t);J(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function me(e,t,n,i){let l=!1;for(let s=0,o=t.length;s<o;s++){let r=t[s],c=n&&n[e.length],u;if(!(r==null||r===!0||r===!1))if((u=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))l=me(e,r,c)||l;else if(u==="function")if(i){for(;typeof r=="function";)r=r();l=me(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||l}else e.push(r),l=!0;else{const a=String(r);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return l}function _e(e,t,n=null){for(let i=0,l=t.length;i<l;i++)e.insertBefore(t[i],n)}function J(e,t,n,i){if(n===void 0)return e.textContent="";const l=i||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const c=r.parentNode===e;!s&&!o?c?e.replaceChild(l,r):e.insertBefore(l,n):c&&r.remove()}else s=!0}}else e.insertBefore(l,n);return[l]}async function dt(){return await(await fetch("http://167.235.27.171:3001/api/games")).json()}async function gt(e){const t="http://167.235.27.171:3001/api/game/"+e;return await(await fetch(t)).json()}const Fe="conenections_data";function be(e){window.localStorage.setItem(Fe,JSON.stringify(e))}function Ie(){return JSON.parse(window.localStorage.getItem(Fe))||{}}function ht(e){const[t,n,i]=e.split("-");return i+"-"+n+"-"+t}var pt=B('<div class="overflow-y-scroll flex-1">'),wt=B('<div class="w-full h-screen md:w-96 bg-white md:rounded-lg md:border-slate-200 md:border-1 mx-auto md:mt-2 pt-2 px-2 md:shadow-lg md:max-h-[calc(100vh-calc(var(--spacing)*4))] overflow-y-hidden flex flex-col"><div class=" mb-1 pb-2 w-full"><div class="align-top w-1/4 inline-block"><img></div><div class="align-top w-2/4 inline-block text-3xl text-center px-5"><div>Conene</div><div>nections</div></div><div class="align-top w-1/4 inline-block"><img>'),mt=B("<div>Loading games..."),bt=B('<div><div class="px-4 py-2 flex"><div class="flex-1 text-left pt-2"></div><div class="rounded-full bg-slate-50 text-black p-2 shadow-sm mr-1 w-[35px]"></div><div class="rounded-full bg-slate-50 text-black p-2 shadow-sm"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 122.88 102.97"width=20px height=20px><path d=M4.82,69.68c-14.89-16,8-39.87,24.52-24.76,5.83,5.32,12.22,11,18.11,16.27L92.81,5.46c15.79-16.33,40.72,7.65,25.13,24.07l-57,68A17.49,17.49,0,0,1,48.26,103a16.94,16.94,0,0,1-11.58-4.39c-9.74-9.1-21.74-20.32-31.86-28.9Z>');function xt({gameId:e,setGameId:t}){const[n,{mutate:i,refetch:l}]=Oe(dt);let s=Ie();const o=6,r=Math.ceil(Math.random()*o);let c=Math.ceil(Math.random()*o);for(;c===r;)c=Math.ceil(Math.random()*o);const u=a=>{delete s[a],be(s)};return(()=>{var a=wt(),f=a.firstChild,S=f.firstChild,w=S.firstChild,_=S.nextSibling,$=_.nextSibling,M=$.firstChild;return j(a,F(ot,{fallback:()=>mt(),get children(){var h=pt();return j(h,F(we,{get each(){return n()},children:d=>(()=>{var C=bt(),N=C.firstChild,O=N.firstChild,T=O.nextSibling,y=T.nextSibling,k=y.firstChild,m=k.firstChild;return N.$$click=()=>t(d.id),j(O,()=>ht(d.date)),j(T,()=>s?.[d.id]?.guesses||0),k.$$dblclick=g=>{g.stopPropagation(),s?.[d.id]?.remainingWords?.length===0&&(u(d.id),t(d.id))},k.$$click=g=>g.stopPropagation(),G(g=>{var b={"btn rounded-lg  text-center my-2 cursor-pointer":!0,"border-1 border-slate-200":!s.hasOwnProperty(d.id),"bg-gray-300 hover:bg-gray-400":s?.[d.id]?.remainingWords.length,green:s?.[d.id]?.remainingWords.length===0&&s?.[d.id]?.guesses===s?.[d.id]?.completedCategories.length,yellow:s?.[d.id]?.remainingWords.length===0&&s?.[d.id]?.guesses>s?.[d.id]?.completedCategories.length&&s?.[d.id]?.guesses<=s?.[d.id]?.completedCategories.length*1.5,"bg-red-300 hover:bg-red-400":s?.[d.id]?.remainingWords.length===0&&s?.[d.id]?.guesses>s?.[d.id]?.completedCategories.length*1.5},E=s?.[d.id]?.remainingWords.length===0?"gray":"none";return g.e=Q(C,b,g.e),E!==g.t&&ge(m,"fill",g.t=E),g},{e:void 0,t:void 0}),C})()})),h}}),null),G(h=>{var d=`/conenections/assets/img/${r}.webp`,C=`/conenections/assets/img/${c}.webp`;return d!==h.e&&ge(w,"src",h.e=d),C!==h.t&&ge(M,"src",h.t=C),h},{e:void 0,t:void 0}),a})()}Ge(["click","dblclick"]);var yt=B('<button class="btn mt-4 w-full text-white font-medium rounded-lg text-sm px-5 py-3 focus:outline-none blue">Share'),vt=B("<button>Shuffle"),$t=B("<button>Deselect"),Ct=B("<button>Guess"),St=B('<div class="w-full h-screen md:w-96 bg-white md:rounded-lg md:border-slate-200 md:border-1 mx-auto md:mt-2 pt-2 px-2 md:shadow-lg md:max-h-[calc(100vh-calc(var(--spacing)*4))] overflow-y-scroll flex flex-col"><div class=" mb-1 pb-2 w-full"><div class="align-top w-1/4 inline-block p-2 rounded-lg text-white text-center h-full btn blue"><svg fill=#FFFFFF width=30px height=30px viewBox="-64 0 512 512"xmlns=http://www.w3.org/2000/svg class="mx-auto h-full"><path d="M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.014 32.014 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64z"></path></svg></div><div class="align-top w-2/4 inline-block text-3xl text-center px-5"><div>Conene</div><div>nections</div></div><div><div class=text-2xl></div><div>Guesses</div></div></div><div class="flex-1 flex flex-col"><div class="w-full rounded-lg pb-2 text-center"></div><div style="display:grid;grid-template-columns:repeat(4, 1fr);column-gap:calc(var(--spacing) * 2);row-gap:calc(var(--spacing) * 2);"class=flex-1></div><div class="flex justify-between gap-1 mb-2">'),At=B('<div style="grid-column-start:span 4"><div></div><div>'),_t=B('<div style=aspect-ratio:1/1;overflow:hidden;justify-content:center;align-items:center;display:flex; class="rounded-lg bg-slate-200 cursor-pointer text-center p-2">');const ke={yellow:"🟨",green:"🟩",blue:"🟦",purple:"🟪"};function kt({gameId:e,setGameId:t}){const[n,{mutate:i,refetch:l}]=Oe(e,gt),[s,o]=W([]),[r,c]=W([]),[u,a]=W([]),[f,S]=W("Loading game"),[w,_]=W(0),[$,M]=W("");let h=Ie();const d=T=>{if(u().includes(T)){let y=[...u()];y.splice(y.indexOf(T),1),a(y)}else{if(u().length===4)return;a([...u(),T])}},C=T=>{if(u().length!==4)return;const y=w()+1;_(y);let k=!1,m=4,g="";for(let b=0;b<n().categories.length;b++){const E=n().categories[b];let V=[...E.words.map(D=>D.word)];if(u().map(D=>D.word).forEach(D=>{V.includes(D)&&V.splice(V.indexOf(D),1)}),m=Math.min(m,V.length),V.length===0){g=ke[E.color].repeat(4)+`
`;const D=$()+g;M(D);const K=[...s(),E];o(K);let x=[...r()];E.words.forEach(L=>{x.splice(x.map(Y=>Y.word).indexOf(L.word),1)}),c(x),a([]),S("Great guess!"),k=!0,h={...h,[e()]:{guesses:y,completedCategories:K,remainingWords:x,guessStrings:D}},be(h),K.length===n().categories.length&&S("YOU WON!");break}}if(!k){g=u().map(E=>n().categories.find(V=>V.words.map(D=>D.word).includes(E.word)).color).map(E=>ke[E]).join("")+`
`;const b=$()+g;M(b),S(`Not quite, ${m} off you pussy bitch`),h={...h,[e()]:{guesses:y,completedCategories:s(),remainingWords:r(),guessStrings:b}},be(h)}};function N(T){let y=[...T];for(var k=y.length-1;k>0;k--){var m=Math.floor(Math.random()*(k+1)),g=y[k];y[k]=y[m],y[m]=g}return y}const O=()=>{o([]);const T=n().categories.map(y=>y.words).reduce((y,k)=>[...y,...k],[]);c(N(T)),S("Create four groups of four!"),h[e()]&&(_(h[e()].guesses),o(h[e()].completedCategories),c(N(h[e()].remainingWords)),M(h[e()].guessStrings),h[e()].completedCategories.length===n().categories.length&&S("YOU WON!"))};return Ke(()=>{n()&&O()}),(()=>{var T=St(),y=T.firstChild,k=y.firstChild,m=k.nextSibling,g=m.nextSibling,b=g.firstChild,E=y.nextSibling,V=E.firstChild,D=V.nextSibling,K=D.nextSibling;return k.$$click=()=>t(void 0),j(b,w),j(V,f),j(D,F(we,{get each(){return s()},children:x=>(()=>{var L=At(),Y=L.firstChild,Be=Y.nextSibling;return j(Y,()=>x.category),j(Be,()=>x.words.map(ae=>ae.word).reduce((ae,Ve)=>ae+" - "+Ve)),G(()=>ut(L,`w-full rounded-lg mb-2 p-1 text-center h-full ${x.color}`)),L})()}),null),j(D,F(we,{get each(){return r()},children:x=>(()=>{var L=_t();return L.$$click=()=>d(x),j(L,()=>x.word),G(Y=>Q(L,{"bg-slate-700 text-white":u().includes(x)},Y)),L})()}),null),j(K,F(oe,{get when(){return s().length===n()?.categories?.length},get children(){var x=yt();return x.$$click=L=>{navigator.clipboard.writeText($()),L.target.textContent="Guesses copied to clipboard"},x}}),null),j(K,F(oe,{get when(){return s().length!==n()?.categories?.length},get children(){return[(()=>{var x=vt();return x.$$click=()=>c(N(r())),G(L=>Q(x,{"btn mt-4 w-full text-white font-medium rounded-lg text-sm px-5 py-3 focus:outline-none":!0,"bg-gray-300":r().length===0,blue:r().length>0},L)),x})(),(()=>{var x=$t();return x.$$click=()=>a([]),G(L=>Q(x,{"btn mt-4 w-full text-white font-medium rounded-lg text-sm px-5 py-3 focus:outline-none":!0,"bg-gray-300":u().length<1,blue:u().length>0},L)),x})(),(()=>{var x=Ct();return x.$$click=C,G(L=>Q(x,{"btn mt-4 w-full text-white font-medium rounded-lg text-sm px-5 py-3 focus:outline-none ":!0,"bg-gray-300":u().length!==4,blue:u().length===4},L)),x})()]}}),null),G(x=>Q(g,{"align-top w-1/4 inline-block p-2 rounded-lg text-white text-center h-full":!0,green:n()===void 0,green:n()&&w()<=n().categories.length,yellow:n()&&w()>n().categories.length&&w()<=n().categories.length*1.5,"bg-red-300":n()&&w()>n().categories.length*1.5},x)),T})()}Ge(["click"]);function Et(){const[e,t]=W(void 0);return[F(oe,{get when(){return e()===void 0},get children(){return F(xt,{gameId:e,setGameId:t})}}),F(oe,{get when(){return e()},get children(){return F(kt,{gameId:e,setGameId:t})}})]}const Nt=document.getElementById("root");ft(()=>F(Et,{}),Nt);
