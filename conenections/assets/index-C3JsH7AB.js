(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const p={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return ve(this.context.count)},getNextContextId(){return ve(this.context.count++)}};function ve(e){const t=String(e),n=t.length-1;return p.context.id+(n?String.fromCharCode(96+n):"")+t}function X(e){p.context=e}const He=!1,Ke=(e,t)=>e===t,qe=Symbol("solid-track"),ne={equals:Ke};let Ne=We;const F=1,se=2,Oe={owned:null,cleanups:null,context:null,owner:null},de={};var C=null;let te=null,Ye=null,S=null,O=null,P=null,oe=0;function Z(e,t){const n=S,s=C,l=e.length===0,i=t===void 0?s:t,o=l?Oe:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=l?e:()=>e(()=>V(()=>z(o)));C=o,S=null;try{return U(r,!0)}finally{S=n,C=s}}function D(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.value)),Pe(n,l));return[je.bind(n),s]}function Ce(e,t,n){const s=fe(e,t,!0,F);J(s)}function B(e,t,n){const s=fe(e,t,!1,F);J(s)}function Le(e,t,n){Ne=nt;const s=fe(e,t,!1,F),l=Y&&xe(Y);l&&(s.suspense=l),s.user=!0,P?P.push(s):J(s)}function G(e,t,n){n=n?Object.assign({},ne,n):ne;const s=fe(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,J(s),je.bind(s)}function Je(e){return e&&typeof e=="object"&&"then"in e}function Te(e,t,n){let s,l,i;typeof t=="function"?(s=e,l=t,i={}):(s=!0,l=e,i=t||{});let o=null,r=de,f=null,u=!1,a="initialValue"in i,c=typeof s=="function"&&G(s);const $=new Set,[m,A]=(i.storage||D)(i.initialValue),[w,_]=D(void 0),[h,b]=D(void 0,{equals:!1}),[E,v]=D(a?"ready":"unresolved");p.context&&(f=p.getNextContextId(),i.ssrLoadFrom==="initial"?r=i.initialValue:p.load&&p.has(f)&&(r=p.load(f)));function d(x,y,g,L){return o===x&&(o=null,L!==void 0&&(a=!0),(x===r||y===r)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(L,{value:y})),r=de,k(y,g)),y}function k(x,y){U(()=>{y===void 0&&A(()=>x),v(y!==void 0?"errored":a?"ready":"unresolved"),_(y);for(const g of $.keys())g.decrement();$.clear()},!1)}function T(){const x=Y&&xe(Y),y=m(),g=w();if(g!==void 0&&!o)throw g;return S&&!S.user&&x&&Ce(()=>{h(),o&&(x.resolved&&te||$.has(x)||(x.increment(),$.add(x)))}),y}function M(x=!0){if(x!==!1&&u)return;u=!1;const y=c?c():s;if(y==null||y===!1){d(o,V(m));return}const g=r!==de?r:V(()=>l(y,{value:m(),refetching:x}));return Je(g)?(o=g,"value"in g?(g.status==="success"?d(o,g.value,void 0,y):d(o,void 0,he(g.value),y),g):(u=!0,queueMicrotask(()=>u=!1),U(()=>{v(a?"refreshing":"pending"),b()},!1),g.then(L=>d(g,L,void 0,y),L=>d(g,void 0,he(L),y)))):(d(o,g,void 0,y),g)}return Object.defineProperties(T,{state:{get:()=>E()},error:{get:()=>w()},loading:{get(){const x=E();return x==="pending"||x==="refreshing"}},latest:{get(){if(!a)return T();const x=w();if(x&&!o)throw x;return m()}}}),c?Ce(()=>M(!1)):M(!1),[T,{refetch:M,mutate:A}]}function V(e){if(S===null)return e();const t=S;S=null;try{return e()}finally{S=t}}function Me(e){return C===null||(C.cleanups===null?C.cleanups=[e]:C.cleanups.push(e)),e}function Qe(){return C}const[Et,kt]=D(!1);function Xe(e){P.push.apply(P,e),e.length=0}function De(e,t){const n=Symbol("context");return{id:n,Provider:st(n),defaultValue:e}}function xe(e){let t;return C&&C.context&&(t=C.context[e.id])!==void 0?t:e.defaultValue}function Ze(e){const t=G(e),n=G(()=>pe(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let Y;function ze(){return Y||(Y=De())}function je(){if(this.sources&&this.state)if(this.state===F)J(this);else{const e=O;O=null,U(()=>le(this),!1),O=e}if(S){const e=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(e)):(S.sources=[this],S.sourceSlots=[e]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return this.value}function Pe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&U(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],o=te&&te.running;o&&te.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?O.push(i):P.push(i),i.observers&&Ie(i)),o||(i.state=F)}if(O.length>1e6)throw O=[],new Error},!1)),t}function J(e){if(!e.fn)return;z(e);const t=oe;et(e,e.value,t)}function et(e,t,n){let s;const l=C,i=S;S=C=e;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=F,e.owned&&e.owned.forEach(z),e.owned=null),e.updatedAt=n+1,Ge(o)}finally{S=i,C=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Pe(e,s):e.value=s,e.updatedAt=n)}function fe(e,t,n,s=F,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:C,context:C?C.context:null,pure:n};return C===null||C!==Oe&&(C.owned?C.owned.push(i):C.owned=[i]),i}function ie(e){if(e.state===0)return;if(e.state===se)return le(e);if(e.suspense&&V(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<oe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===F)J(e);else if(e.state===se){const s=O;O=null,U(()=>le(e,t[0]),!1),O=s}}function U(e,t){if(O)return e();let n=!1;t||(O=[]),P?n=!0:P=[],oe++;try{const s=e();return tt(n),s}catch(s){n||(P=null),O=null,Ge(s)}}function tt(e){if(O&&(We(O),O=null),e)return;const t=P;P=null,t.length&&U(()=>Ne(t),!1)}function We(e){for(let t=0;t<e.length;t++)ie(e[t])}function nt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ie(s)}if(p.context){if(p.count){p.effects||(p.effects=[]),p.effects.push(...e.slice(0,n));return}X()}for(p.effects&&(p.done||!p.count)&&(e=[...p.effects,...e],n+=p.effects.length,delete p.effects),t=0;t<n;t++)ie(e[t])}function le(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const l=s.state;l===F?s!==t&&(!s.updatedAt||s.updatedAt<oe)&&ie(s):l===se&&le(s,t)}}}function Ie(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=se,n.pure?O.push(n):P.push(n),n.observers&&Ie(n))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),o=n.observerSlots.pop();s<l.length&&(i.sourceSlots[o]=s,l[s]=i,n.observerSlots[s]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)z(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function he(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ge(e,t=C){throw he(e)}function pe(e){if(typeof e=="function"&&!e.length)return pe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=pe(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function st(e,t){return function(s){let l;return B(()=>l=V(()=>(C.context={...C.context,[e]:s.value},Ze(()=>s.children))),void 0),l}}const it=Symbol("fallback");function $e(e){for(let t=0;t<e.length;t++)e[t]()}function lt(e,t,n={}){let s=[],l=[],i=[],o=0,r=t.length>1?[]:null;return Me(()=>$e(i)),()=>{let f=e()||[],u=f.length,a,c;return f[qe],V(()=>{let m,A,w,_,h,b,E,v,d;if(u===0)o!==0&&($e(i),i=[],s=[],l=[],o=0,r&&(r=[])),n.fallback&&(s=[it],l[0]=Z(k=>(i[0]=k,n.fallback())),o=1);else if(o===0){for(l=new Array(u),c=0;c<u;c++)s[c]=f[c],l[c]=Z($);o=u}else{for(w=new Array(u),_=new Array(u),r&&(h=new Array(u)),b=0,E=Math.min(o,u);b<E&&s[b]===f[b];b++);for(E=o-1,v=u-1;E>=b&&v>=b&&s[E]===f[v];E--,v--)w[v]=l[E],_[v]=i[E],r&&(h[v]=r[E]);for(m=new Map,A=new Array(v+1),c=v;c>=b;c--)d=f[c],a=m.get(d),A[c]=a===void 0?-1:a,m.set(d,c);for(a=b;a<=E;a++)d=s[a],c=m.get(d),c!==void 0&&c!==-1?(w[c]=l[a],_[c]=i[a],r&&(h[c]=r[a]),c=A[c],m.set(d,c)):i[a]();for(c=b;c<u;c++)c in w?(l[c]=w[c],i[c]=_[c],r&&(r[c]=h[c],r[c](c))):l[c]=Z($);l=l.slice(0,o=u),s=f.slice(0)}return l});function $(m){if(i[c]=m,r){const[A,w]=D(c);return r[c]=w,t(f[c],A)}return t(f[c])}}}function I(e,t){return V(()=>e(t||{}))}const rt=e=>`Stale read from <${e}>.`;function me(e){const t="fallback"in e&&{fallback:()=>e.fallback};return G(lt(()=>e.each,e.children,t||void 0))}function Se(e){const t=e.keyed,n=G(()=>e.when,void 0,void 0),s=t?n:G(n,void 0,{equals:(l,i)=>!l==!i});return G(()=>{const l=s();if(l){const i=e.children;return typeof i=="function"&&i.length>0?V(()=>i(t?l:()=>{if(!V(s))throw rt("Show");return n()})):i}return e.fallback},void 0,void 0)}const ot=De();function ft(e){let t=0,n,s,l,i,o;const[r,f]=D(!1),u=ze(),a={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:r,effects:[],resolved:!1},c=Qe();if(p.context&&p.load){const A=p.getContextId();let w=p.load(A);if(w&&(typeof w!="object"||w.status!=="success"?l=w:p.gather(A)),l&&l!=="$$f"){const[_,h]=D(void 0,{equals:!1});i=_,l.then(()=>{if(p.done)return h();p.gather(A),X(s),h(),X()},b=>{o=b,h()})}}const $=xe(ot);$&&(n=$.register(a.inFallback));let m;return Me(()=>m&&m()),I(u.Provider,{value:a,get children(){return G(()=>{if(o)throw o;if(s=p.context,i)return i(),i=void 0;s&&l==="$$f"&&X();const A=G(()=>e.children);return G(w=>{const _=a.inFallback(),{showContent:h=!0,showFallback:b=!0}=n?n():{};if((!_||l&&l!=="$$f")&&h)return a.resolved=!0,m&&m(),m=s=l=void 0,Xe(a.effects),A();if(b)return m?w:Z(E=>(m=E,s&&(X({id:s.id+"F",count:0}),s=void 0),e.fallback),c)})})}})}function ct(e,t,n){let s=n.length,l=t.length,i=s,o=0,r=0,f=t[l-1].nextSibling,u=null;for(;o<l||r<i;){if(t[o]===n[r]){o++,r++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===o){const a=i<s?r?n[r-1].nextSibling:n[i-r]:f;for(;r<i;)e.insertBefore(n[r++],a)}else if(i===r)for(;o<l;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[r]===t[l-1]){const a=t[--l].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--i],a),t[l]=n[i]}else{if(!u){u=new Map;let c=r;for(;c<i;)u.set(n[c],c++)}const a=u.get(t[o]);if(a!=null)if(r<a&&a<i){let c=o,$=1,m;for(;++c<l&&c<i&&!((m=u.get(t[c]))==null||m!==a+$);)$++;if($>a-r){const A=t[o];for(;r<a;)e.insertBefore(n[r++],A)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const Ae="_$DX_DELEGATE";function ut(e,t,n,s={}){let l;return Z(i=>{l=i,t===document?e():j(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function R(e,t,n,s){let l;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},o=()=>(l||(l=i())).cloneNode(!0);return o.cloneNode=o,o}function Be(e,t=window.document){const n=t[Ae]||(t[Ae]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,dt))}}function ge(e,t,n){ye(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function at(e,t){ye(e)||(t==null?e.removeAttribute("class"):e.className=t)}function q(e,t,n={}){const s=Object.keys(t||{}),l=Object.keys(n);let i,o;for(i=0,o=l.length;i<o;i++){const r=l[i];!r||r==="undefined"||t[r]||(_e(e,r,!1),delete n[r])}for(i=0,o=s.length;i<o;i++){const r=s[i],f=!!t[r];!r||r==="undefined"||n[r]===f||!f||(_e(e,r,!0),n[r]=f)}return n}function j(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return re(e,t,s,n);B(l=>re(e,t(),l,n),s)}function ye(e){return!!p.context&&!p.done&&(!e||e.isConnected)}function _e(e,t,n){const s=t.trim().split(/\s+/);for(let l=0,i=s.length;l<i;l++)e.classList.toggle(s[l],n)}function dt(e){if(p.registry&&p.events&&p.events.find(([f,u])=>u===e))return;let t=e.target;const n=`$$${e.type}`,s=e.target,l=e.currentTarget,i=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),o=()=>{const f=t[n];if(f&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?f.call(t,u,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},r=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),p.registry&&!p.done&&(p.done=_$HY.done=!0),e.composedPath){const f=e.composedPath();i(f[0]);for(let u=0;u<f.length-2&&(t=f[u],!!o());u++){if(t._$host){t=t._$host,r();break}if(t.parentNode===l)break}}else r();i(s)}function re(e,t,n,s,l){const i=ye(e);if(i){!n&&(n=[...e.childNodes]);let f=[];for(let u=0;u<n.length;u++){const a=n[u];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():f.push(a)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(i||o==="number"&&(t=t.toString(),t===n))return n;if(r){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=K(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(i)return n;n=K(e,n,s)}else{if(o==="function")return B(()=>{let f=t();for(;typeof f=="function";)f=f();n=re(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],u=n&&Array.isArray(n);if(we(f,t,n,l))return B(()=>n=re(e,f,n,s,!0)),()=>n;if(i){if(!f.length)return n;if(s===void 0)return n=[...e.childNodes];let a=f[0];if(a.parentNode!==e)return n;const c=[a];for(;(a=a.nextSibling)!==s;)c.push(a);return n=c}if(f.length===0){if(n=K(e,n,s),r)return n}else u?n.length===0?Ee(e,f,s):ct(e,n,f):(n&&K(e),Ee(e,f));n=f}else if(t.nodeType){if(i&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=K(e,n,s,t);K(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function we(e,t,n,s){let l=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],f=n&&n[e.length],u;if(!(r==null||r===!0||r===!1))if((u=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))l=we(e,r,f)||l;else if(u==="function")if(s){for(;typeof r=="function";)r=r();l=we(e,Array.isArray(r)?r:[r],Array.isArray(f)?f:[f])||l}else e.push(r),l=!0;else{const a=String(r);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return l}function Ee(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function K(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const f=r.parentNode===e;!i&&!o?f?e.replaceChild(l,r):e.insertBefore(l,n):f&&r.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}async function gt(){return await(await fetch("http://167.235.27.171:3001/api/games")).json()}async function ht(e){const t="http://167.235.27.171:3001/api/game/"+e;return await(await fetch(t)).json()}const Ve="conenections_data";function ke(e){window.localStorage.setItem(Ve,JSON.stringify(e))}function Fe(){return JSON.parse(window.localStorage.getItem(Ve))||{}}function pt(e){const[t,n,s]=e.split("-");return s+"-"+n+"-"+t}var mt=R('<div class="overflow-y-scroll flex-1">'),wt=R('<div class="w-full h-screen md:w-96 bg-white md:rounded-lg md:border-slate-200 md:border-1 mx-auto md:mt-2 pt-2 px-2 md:shadow-lg md:max-h-[calc(100vh-calc(var(--spacing)*4))] overflow-y-hidden flex flex-col"><div class=" mb-1 flex items-center justify-center pb-2"><div class=flex-1><img></div><div class="flex-4 text-3xl text-center"><div>Conenenene</div><div>nections</div></div><div class=flex-1><img>'),xt=R("<div>Loading games..."),yt=R('<div><div class="px-4 py-2 flex"><div class="flex-1 text-left pt-2"></div><div class="rounded-full bg-slate-50 text-black p-2 shadow-sm mr-1 w-[35px]"></div><div class="rounded-full bg-slate-50 text-black p-2 shadow-sm"><svg id=Layer_1 data-name="Layer 1"xmlns=http://www.w3.org/2000/svg viewBox="0 0 122.88 102.97"width=20px height=20px><path d=M4.82,69.68c-14.89-16,8-39.87,24.52-24.76,5.83,5.32,12.22,11,18.11,16.27L92.81,5.46c15.79-16.33,40.72,7.65,25.13,24.07l-57,68A17.49,17.49,0,0,1,48.26,103a16.94,16.94,0,0,1-11.58-4.39c-9.74-9.1-21.74-20.32-31.86-28.9Z>');function bt({gameId:e,setGameId:t}){const[n,{mutate:s,refetch:l}]=Te(gt),i=Fe(),o=6,r=Math.ceil(Math.random()*o);let f=Math.ceil(Math.random()*o);for(;f===r;)f=Math.ceil(Math.random()*o);return(()=>{var u=wt(),a=u.firstChild,c=a.firstChild,$=c.firstChild,m=c.nextSibling,A=m.nextSibling,w=A.firstChild;return j(u,I(ft,{fallback:()=>xt(),get children(){var _=mt();return j(_,I(me,{get each(){return n()},children:h=>(()=>{var b=yt(),E=b.firstChild,v=E.firstChild,d=v.nextSibling,k=d.nextSibling,T=k.firstChild,M=T.firstChild;return E.$$click=()=>t(h.id),j(v,()=>pt(h.date)),j(d,()=>i?.[h.id]?.guesses||0),B(x=>{var y={"btn rounded-lg  text-center my-2":!0,"border-1 border-slate-200":!i.hasOwnProperty(h.id),"bg-gray-300 hover:bg-gray-400":i?.[h.id]?.remainingWords.length,green:i?.[h.id]?.remainingWords.length===0&&i?.[h.id]?.guesses===i?.[h.id]?.completedCategories.length,yellow:i?.[h.id]?.remainingWords.length===0&&i?.[h.id]?.guesses>i?.[h.id]?.completedCategories.length&&i?.[h.id]?.guesses<=i?.[h.id]?.completedCategories.length*1.5,"bg-red-300 hover:bg-red-400":i?.[h.id]?.remainingWords.length===0&&i?.[h.id]?.guesses>i?.[h.id]?.completedCategories.length*1.5},g=i?.[h.id]?.remainingWords.length===0?"gray":"none";return x.e=q(b,y,x.e),g!==x.t&&ge(M,"fill",x.t=g),x},{e:void 0,t:void 0}),b})()})),_}}),null),B(_=>{var h=`/conenections/assets/img/${r}.webp`,b=`/conenections/assets/img/${f}.webp`;return h!==_.e&&ge($,"src",_.e=h),b!==_.t&&ge(w,"src",_.t=b),_},{e:void 0,t:void 0}),u})()}Be(["click"]);var vt=R('<div class="w-full h-screen md:w-96 bg-white md:rounded-lg md:border-slate-200 md:border-1 mx-auto md:mt-2 pt-2 px-2 md:shadow-lg md:max-h-[calc(100vh-calc(var(--spacing)*4))] overflow-y-scroll flex flex-col"><div class=" mb-1 flex items-center justify-center pb-2 "><button class="flex-1 p-2 h-full"><svg fill=#000000 width=30px height=30px viewBox="-64 0 512 512"xmlns=http://www.w3.org/2000/svg><path d="M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.014 32.014 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64z"></path></svg></button><div class="flex-4 text-3xl text-center"><div>Conenenene</div><div>nections</div></div><div><div class=text-2xl></div><div>Guesses</div></div></div><div class="flex-1 flex flex-col"><div class="w-full rounded-lg pb-2 text-center"></div><div><div style="display:grid;grid-template-columns:repeat(4, 1fr);column-gap:calc(var(--spacing) * 2);row-gap:calc(var(--spacing) * 2);"></div></div><div class="flex justify-between gap-1 mb-2"><button>Shuffle</button><button>Deselect</button><button>Guess'),Ct=R("<div><div></div><div>"),$t=R('<div style=aspect-ratio:1/1;overflow:hidden;justify-content:center;align-items:center;display:flex; class="rounded-lg bg-slate-200 cursor-pointer text-center p-2">');function St({gameId:e,setGameId:t}){const[n,{mutate:s,refetch:l}]=Te(e,ht),[i,o]=D([]),[r,f]=D([]),[u,a]=D([]),[c,$]=D("Loading game"),[m,A]=D(0);let w=Fe();const _=v=>{if(u().includes(v)){let d=[...u()];d.splice(d.indexOf(v),1),a(d)}else{if(u().length===4)return;a([...u(),v])}},h=v=>{if(u().length!==4)return;const d=m()+1;A(d);let k=!1,T=4;for(let M=0;M<n().categories.length;M++){const x=n().categories[M];let y=[...x.words.map(g=>g.word)];if(u().map(g=>g.word).forEach(g=>{y.includes(g)&&y.splice(y.indexOf(g),1)}),T=Math.min(T,y.length),y.length===0){const g=[...i(),x];o(g);let L=[...r()];x.words.forEach(ee=>{L.splice(L.indexOf(ee),1)}),f(L),a([]),$("Great guess!"),k=!0,w={...w,[e()]:{guesses:d,completedCategories:g,remainingWords:L}},ke(w),g.length===n().categories.length&&$("YOU WON!");break}k||($(`Not quite, ${T} off you pussy bitch`),w={...w,[e()]:{guesses:d,completedCategories:i(),remainingWords:r()}},ke(w))}};function b(v){let d=[...v];for(var k=d.length-1;k>0;k--){var T=Math.floor(Math.random()*(k+1)),M=d[k];d[k]=d[T],d[T]=M}return d}const E=()=>{o([]);const v=n().categories.map(d=>d.words).reduce((d,k)=>[...d,...k],[]);f(b(v)),$("Create four groups of four!"),w[e()]&&(A(w[e()].guesses),o(w[e()].completedCategories),f(b(w[e()].remainingWords)),w[e()].completedCategories.length===n().categories.length&&$("YOU WON!"))};return Le(()=>{n()&&E()}),(()=>{var v=vt(),d=v.firstChild,k=d.firstChild,T=k.nextSibling,M=T.nextSibling,x=M.firstChild,y=d.nextSibling,g=y.firstChild,L=g.nextSibling,ee=L.firstChild,Ue=L.nextSibling,ce=Ue.firstChild,ue=ce.nextSibling,be=ue.nextSibling;return k.$$click=()=>t(void 0),j(x,m),j(g,c),j(L,I(me,{get each(){return i()},children:N=>(()=>{var W=Ct(),H=W.firstChild,ae=H.nextSibling;return j(H,()=>N.category),j(ae,()=>N.words.map(Q=>Q.word).reduce((Q,Re)=>Q+", "+Re)),B(()=>at(W,`w-full rounded-lg mb-2 p-1 text-center ${N.color}`)),W})()}),ee),j(ee,I(me,{get each(){return r()},children:N=>(()=>{var W=$t();return W.$$click=()=>_(N),j(W,()=>N.word),B(H=>q(W,{"bg-slate-700 text-white":u().includes(N)},H)),W})()})),ce.$$click=()=>f(b(r())),ue.$$click=()=>a([]),be.$$click=h,B(N=>{var W={"flex-1 p-2 rounded-lg ml-2 text-white text-center h-full":!0,green:n()===void 0,green:n()&&m()<=n().categories.length,yellow:n()&&m()>n().categories.length&&m()<=n().categories.length*1.5,"bg-red-300":n()&&m()>n().categories.length*1.5},H={"btn mt-4 w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none":!0,"bg-gray-300":r().length===0,blue:r().length>0},ae={"btn mt-4 w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none":!0,"bg-gray-300":u().length<1,blue:u().length>0},Q={"btn mt-4 w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ":!0,"bg-gray-300":u().length!==4,blue:u().length===4};return N.e=q(M,W,N.e),N.t=q(ce,H,N.t),N.a=q(ue,ae,N.a),N.o=q(be,Q,N.o),N},{e:void 0,t:void 0,a:void 0,o:void 0}),v})()}Be(["click"]);function At(){const[e,t]=D(void 0);return Le(()=>console.log(e())),[I(Se,{get when(){return e()===void 0},get children(){return I(bt,{gameId:e,setGameId:t})}}),I(Se,{get when(){return e()},get children(){return I(St,{gameId:e,setGameId:t})}})]}const _t=document.getElementById("root");ut(()=>I(At,{}),_t);
