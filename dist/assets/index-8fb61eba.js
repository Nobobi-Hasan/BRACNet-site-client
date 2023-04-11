(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))f(g);new MutationObserver(g=>{for(const k of g)if(k.type==="childList")for(const b of k.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&f(b)}).observe(document,{childList:!0,subtree:!0});function u(g){const k={};return g.integrity&&(k.integrity=g.integrity),g.referrerPolicy&&(k.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?k.credentials="include":g.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function f(g){if(g.ep)return;g.ep=!0;const k=u(g);fetch(g.href,k)}})();function wc(s,c){const u=Object.create(null),f=s.split(",");for(let g=0;g<f.length;g++)u[f[g]]=!0;return c?g=>!!u[g.toLowerCase()]:g=>!!u[g]}const BI="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",OI=wc(BI);function Ms(s){if(_e(s)){const c={};for(let u=0;u<s.length;u++){const f=s[u],g=lt(f)?jI(f):Ms(f);if(g)for(const k in g)c[k]=g[k]}return c}else{if(lt(s))return s;if(ot(s))return s}}const LI=/;(?![^(]*\))/g,RI=/:([^]+)/,zI=/\/\*.*?\*\//gs;function jI(s){const c={};return s.replace(zI,"").split(LI).forEach(u=>{if(u){const f=u.split(RI);f.length>1&&(c[f[0].trim()]=f[1].trim())}}),c}function In(s){let c="";if(lt(s))c=s;else if(_e(s))for(let u=0;u<s.length;u++){const f=In(s[u]);f&&(c+=f+" ")}else if(ot(s))for(const u in s)s[u]&&(c+=u+" ");return c.trim()}function FI(s){if(!s)return null;let{class:c,style:u}=s;return c&&!lt(c)&&(s.class=In(c)),u&&(s.style=Ms(u)),s}const VI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",UI=wc(VI);function H_(s){return!!s||s===""}function HI(s,c){if(s.length!==c.length)return!1;let u=!0;for(let f=0;u&&f<s.length;f++)u=Fo(s[f],c[f]);return u}function Fo(s,c){if(s===c)return!0;let u=Iw(s),f=Iw(c);if(u||f)return u&&f?s.getTime()===c.getTime():!1;if(u=_s(s),f=_s(c),u||f)return s===c;if(u=_e(s),f=_e(c),u||f)return u&&f?HI(s,c):!1;if(u=ot(s),f=ot(c),u||f){if(!u||!f)return!1;const g=Object.keys(s).length,k=Object.keys(c).length;if(g!==k)return!1;for(const b in s){const A=s.hasOwnProperty(b),w=c.hasOwnProperty(b);if(A&&!w||!A&&w||!Fo(s[b],c[b]))return!1}}return String(s)===String(c)}function _c(s,c){return s.findIndex(u=>Fo(u,c))}const Oo=s=>lt(s)?s:s==null?"":_e(s)||ot(s)&&(s.toString===q_||!Me(s.toString))?JSON.stringify(s,$_,2):String(s),$_=(s,c)=>c&&c.__v_isRef?$_(s,c.value):hr(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((u,[f,g])=>(u[`${f} =>`]=g,u),{})}:Si(c)?{[`Set(${c.size})`]:[...c.values()]}:ot(c)&&!_e(c)&&!W_(c)?String(c):c,nt={},ur=[],Nn=()=>{},$I=()=>!1,qI=/^on[^a-z]/,Is=s=>qI.test(s),Pu=s=>s.startsWith("onUpdate:"),bt=Object.assign,Bu=(s,c)=>{const u=s.indexOf(c);u>-1&&s.splice(u,1)},WI=Object.prototype.hasOwnProperty,qe=(s,c)=>WI.call(s,c),_e=Array.isArray,hr=s=>Er(s)==="[object Map]",Si=s=>Er(s)==="[object Set]",Iw=s=>Er(s)==="[object Date]",GI=s=>Er(s)==="[object RegExp]",Me=s=>typeof s=="function",lt=s=>typeof s=="string",_s=s=>typeof s=="symbol",ot=s=>s!==null&&typeof s=="object",Ou=s=>ot(s)&&Me(s.then)&&Me(s.catch),q_=Object.prototype.toString,Er=s=>q_.call(s),KI=s=>Er(s).slice(8,-1),W_=s=>Er(s)==="[object Object]",Lu=s=>lt(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,us=wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ac=s=>{const c=Object.create(null);return u=>c[u]||(c[u]=s(u))},YI=/-(\w)/g,Xt=Ac(s=>s.replace(YI,(c,u)=>u?u.toUpperCase():"")),QI=/\B([A-Z])/g,kn=Ac(s=>s.replace(QI,"-$1").toLowerCase()),Ns=Ac(s=>s.charAt(0).toUpperCase()+s.slice(1)),hs=Ac(s=>s?`on${Ns(s)}`:""),wr=(s,c)=>!Object.is(s,c),fr=(s,c)=>{for(let u=0;u<s.length;u++)s[u](c)},ac=(s,c,u)=>{Object.defineProperty(s,c,{configurable:!0,enumerable:!1,value:u})},cc=s=>{const c=parseFloat(s);return isNaN(c)?s:c},lc=s=>{const c=lt(s)?Number(s):NaN;return isNaN(c)?s:c};let Nw;const ZI=()=>Nw||(Nw=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let rn;class Ru{constructor(c=!1){this.detached=c,this._active=!0,this.effects=[],this.cleanups=[],this.parent=rn,!c&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}run(c){if(this._active){const u=rn;try{return rn=this,c()}finally{rn=u}}}on(){rn=this}off(){rn=this.parent}stop(c){if(this._active){let u,f;for(u=0,f=this.effects.length;u<f;u++)this.effects[u].stop();for(u=0,f=this.cleanups.length;u<f;u++)this.cleanups[u]();if(this.scopes)for(u=0,f=this.scopes.length;u<f;u++)this.scopes[u].stop(!0);if(!this.detached&&this.parent&&!c){const g=this.parent.scopes.pop();g&&g!==this&&(this.parent.scopes[this.index]=g,g.index=this.index)}this.parent=void 0,this._active=!1}}}function G_(s){return new Ru(s)}function K_(s,c=rn){c&&c.active&&c.effects.push(s)}function Y_(){return rn}function JI(s){rn&&rn.cleanups.push(s)}const zu=s=>{const c=new Set(s);return c.w=0,c.n=0,c},Q_=s=>(s.w&Vo)>0,Z_=s=>(s.n&Vo)>0,XI=({deps:s})=>{if(s.length)for(let c=0;c<s.length;c++)s[c].w|=Vo},e2=s=>{const{deps:c}=s;if(c.length){let u=0;for(let f=0;f<c.length;f++){const g=c[f];Q_(g)&&!Z_(g)?g.delete(s):c[u++]=g,g.w&=~Vo,g.n&=~Vo}c.length=u}},dc=new WeakMap;let ls=0,Vo=1;const au=30;let Tn;const _i=Symbol(""),cu=Symbol("");class Ps{constructor(c,u=null,f){this.fn=c,this.scheduler=u,this.active=!0,this.deps=[],this.parent=void 0,K_(this,f)}run(){if(!this.active)return this.fn();let c=Tn,u=zo;for(;c;){if(c===this)return;c=c.parent}try{return this.parent=Tn,Tn=this,zo=!0,Vo=1<<++ls,ls<=au?XI(this):Pw(this),this.fn()}finally{ls<=au&&e2(this),Vo=1<<--ls,Tn=this.parent,zo=u,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tn===this?this.deferStop=!0:this.active&&(Pw(this),this.onStop&&this.onStop(),this.active=!1)}}function Pw(s){const{deps:c}=s;if(c.length){for(let u=0;u<c.length;u++)c[u].delete(s);c.length=0}}function t2(s,c){s.effect&&(s=s.effect.fn);const u=new Ps(s);c&&(bt(u,c),c.scope&&K_(u,c.scope)),(!c||!c.lazy)&&u.run();const f=u.run.bind(u);return f.effect=u,f}function n2(s){s.effect.stop()}let zo=!0;const J_=[];function Dr(){J_.push(zo),zo=!1}function Tr(){const s=J_.pop();zo=s===void 0?!0:s}function en(s,c,u){if(zo&&Tn){let f=dc.get(s);f||dc.set(s,f=new Map);let g=f.get(u);g||f.set(u,g=zu()),X_(g)}}function X_(s,c){let u=!1;ls<=au?Z_(s)||(s.n|=Vo,u=!Q_(s)):u=!s.has(Tn),u&&(s.add(Tn),Tn.deps.push(s))}function go(s,c,u,f,g,k){const b=dc.get(s);if(!b)return;let A=[];if(c==="clear")A=[...b.values()];else if(u==="length"&&_e(s)){const w=Number(f);b.forEach((C,x)=>{(x==="length"||x>=w)&&A.push(C)})}else switch(u!==void 0&&A.push(b.get(u)),c){case"add":_e(s)?Lu(u)&&A.push(b.get("length")):(A.push(b.get(_i)),hr(s)&&A.push(b.get(cu)));break;case"delete":_e(s)||(A.push(b.get(_i)),hr(s)&&A.push(b.get(cu)));break;case"set":hr(s)&&A.push(b.get(_i));break}if(A.length===1)A[0]&&lu(A[0]);else{const w=[];for(const C of A)C&&w.push(...C);lu(zu(w))}}function lu(s,c){const u=_e(s)?s:[...s];for(const f of u)f.computed&&Bw(f);for(const f of u)f.computed||Bw(f)}function Bw(s,c){(s!==Tn||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}function o2(s,c){var u;return(u=dc.get(s))===null||u===void 0?void 0:u.get(c)}const i2=wc("__proto__,__v_isRef,__isVue"),eA=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(_s)),r2=Cc(),s2=Cc(!1,!0),a2=Cc(!0),c2=Cc(!0,!0),Ow=l2();function l2(){const s={};return["includes","indexOf","lastIndexOf"].forEach(c=>{s[c]=function(...u){const f=Fe(this);for(let k=0,b=this.length;k<b;k++)en(f,"get",k+"");const g=f[c](...u);return g===-1||g===!1?f[c](...u.map(Fe)):g}}),["push","pop","shift","unshift","splice"].forEach(c=>{s[c]=function(...u){Dr();const f=Fe(this)[c].apply(this,u);return Tr(),f}}),s}function d2(s){const c=Fe(this);return en(c,"has",s),c.hasOwnProperty(s)}function Cc(s=!1,c=!1){return function(f,g,k){if(g==="__v_isReactive")return!s;if(g==="__v_isReadonly")return s;if(g==="__v_isShallow")return c;if(g==="__v_raw"&&k===(s?c?aA:sA:c?rA:iA).get(f))return f;const b=_e(f);if(!s){if(b&&qe(Ow,g))return Reflect.get(Ow,g,k);if(g==="hasOwnProperty")return d2}const A=Reflect.get(f,g,k);return(_s(g)?eA.has(g):i2(g))||(s||en(f,"get",g),c)?A:Nt(A)?b&&Lu(g)?A:A.value:ot(A)?s?Fu(A):Sr(A):A}}const u2=tA(),h2=tA(!0);function tA(s=!1){return function(u,f,g,k){let b=u[f];if(xi(b)&&Nt(b)&&!Nt(g))return!1;if(!s&&(!As(g)&&!xi(g)&&(b=Fe(b),g=Fe(g)),!_e(u)&&Nt(b)&&!Nt(g)))return b.value=g,!0;const A=_e(u)&&Lu(f)?Number(f)<u.length:qe(u,f),w=Reflect.set(u,f,g,k);return u===Fe(k)&&(A?wr(g,b)&&go(u,"set",f,g):go(u,"add",f,g)),w}}function f2(s,c){const u=qe(s,c);s[c];const f=Reflect.deleteProperty(s,c);return f&&u&&go(s,"delete",c,void 0),f}function g2(s,c){const u=Reflect.has(s,c);return(!_s(c)||!eA.has(c))&&en(s,"has",c),u}function p2(s){return en(s,"iterate",_e(s)?"length":_i),Reflect.ownKeys(s)}const nA={get:r2,set:u2,deleteProperty:f2,has:g2,ownKeys:p2},oA={get:a2,set(s,c){return!0},deleteProperty(s,c){return!0}},m2=bt({},nA,{get:s2,set:h2}),b2=bt({},oA,{get:c2}),ju=s=>s,vc=s=>Reflect.getPrototypeOf(s);function Ua(s,c,u=!1,f=!1){s=s.__v_raw;const g=Fe(s),k=Fe(c);u||(c!==k&&en(g,"get",c),en(g,"get",k));const{has:b}=vc(g),A=f?ju:u?Uu:Cs;if(b.call(g,c))return A(s.get(c));if(b.call(g,k))return A(s.get(k));s!==g&&s.get(c)}function Ha(s,c=!1){const u=this.__v_raw,f=Fe(u),g=Fe(s);return c||(s!==g&&en(f,"has",s),en(f,"has",g)),s===g?u.has(s):u.has(s)||u.has(g)}function $a(s,c=!1){return s=s.__v_raw,!c&&en(Fe(s),"iterate",_i),Reflect.get(s,"size",s)}function Lw(s){s=Fe(s);const c=Fe(this);return vc(c).has.call(c,s)||(c.add(s),go(c,"add",s,s)),this}function Rw(s,c){c=Fe(c);const u=Fe(this),{has:f,get:g}=vc(u);let k=f.call(u,s);k||(s=Fe(s),k=f.call(u,s));const b=g.call(u,s);return u.set(s,c),k?wr(c,b)&&go(u,"set",s,c):go(u,"add",s,c),this}function zw(s){const c=Fe(this),{has:u,get:f}=vc(c);let g=u.call(c,s);g||(s=Fe(s),g=u.call(c,s)),f&&f.call(c,s);const k=c.delete(s);return g&&go(c,"delete",s,void 0),k}function jw(){const s=Fe(this),c=s.size!==0,u=s.clear();return c&&go(s,"clear",void 0,void 0),u}function qa(s,c){return function(f,g){const k=this,b=k.__v_raw,A=Fe(b),w=c?ju:s?Uu:Cs;return!s&&en(A,"iterate",_i),b.forEach((C,x)=>f.call(g,w(C),w(x),k))}}function Wa(s,c,u){return function(...f){const g=this.__v_raw,k=Fe(g),b=hr(k),A=s==="entries"||s===Symbol.iterator&&b,w=s==="keys"&&b,C=g[s](...f),x=u?ju:c?Uu:Cs;return!c&&en(k,"iterate",w?cu:_i),{next(){const{value:y,done:D}=C.next();return D?{value:y,done:D}:{value:A?[x(y[0]),x(y[1])]:x(y),done:D}},[Symbol.iterator](){return this}}}}function So(s){return function(...c){return s==="delete"?!1:this}}function k2(){const s={get(k){return Ua(this,k)},get size(){return $a(this)},has:Ha,add:Lw,set:Rw,delete:zw,clear:jw,forEach:qa(!1,!1)},c={get(k){return Ua(this,k,!1,!0)},get size(){return $a(this)},has:Ha,add:Lw,set:Rw,delete:zw,clear:jw,forEach:qa(!1,!0)},u={get(k){return Ua(this,k,!0)},get size(){return $a(this,!0)},has(k){return Ha.call(this,k,!0)},add:So("add"),set:So("set"),delete:So("delete"),clear:So("clear"),forEach:qa(!0,!1)},f={get(k){return Ua(this,k,!0,!0)},get size(){return $a(this,!0)},has(k){return Ha.call(this,k,!0)},add:So("add"),set:So("set"),delete:So("delete"),clear:So("clear"),forEach:qa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(k=>{s[k]=Wa(k,!1,!1),u[k]=Wa(k,!0,!1),c[k]=Wa(k,!1,!0),f[k]=Wa(k,!0,!0)}),[s,u,c,f]}const[w2,_2,A2,C2]=k2();function yc(s,c){const u=c?s?C2:A2:s?_2:w2;return(f,g,k)=>g==="__v_isReactive"?!s:g==="__v_isReadonly"?s:g==="__v_raw"?f:Reflect.get(qe(u,g)&&g in f?u:f,g,k)}const v2={get:yc(!1,!1)},y2={get:yc(!1,!0)},x2={get:yc(!0,!1)},E2={get:yc(!0,!0)},iA=new WeakMap,rA=new WeakMap,sA=new WeakMap,aA=new WeakMap;function D2(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function T2(s){return s.__v_skip||!Object.isExtensible(s)?0:D2(KI(s))}function Sr(s){return xi(s)?s:xc(s,!1,nA,v2,iA)}function cA(s){return xc(s,!1,m2,y2,rA)}function Fu(s){return xc(s,!0,oA,x2,sA)}function S2(s){return xc(s,!0,b2,E2,aA)}function xc(s,c,u,f,g){if(!ot(s)||s.__v_raw&&!(c&&s.__v_isReactive))return s;const k=g.get(s);if(k)return k;const b=T2(s);if(b===0)return s;const A=new Proxy(s,b===2?f:u);return g.set(s,A),A}function Ai(s){return xi(s)?Ai(s.__v_raw):!!(s&&s.__v_isReactive)}function xi(s){return!!(s&&s.__v_isReadonly)}function As(s){return!!(s&&s.__v_isShallow)}function Vu(s){return Ai(s)||xi(s)}function Fe(s){const c=s&&s.__v_raw;return c?Fe(c):s}function Ec(s){return ac(s,"__v_skip",!0),s}const Cs=s=>ot(s)?Sr(s):s,Uu=s=>ot(s)?Fu(s):s;function Hu(s){zo&&Tn&&(s=Fe(s),X_(s.dep||(s.dep=zu())))}function Dc(s,c){s=Fe(s);const u=s.dep;u&&lu(u)}function Nt(s){return!!(s&&s.__v_isRef===!0)}function gr(s){return dA(s,!1)}function lA(s){return dA(s,!0)}function dA(s,c){return Nt(s)?s:new M2(s,c)}class M2{constructor(c,u){this.__v_isShallow=u,this.dep=void 0,this.__v_isRef=!0,this._rawValue=u?c:Fe(c),this._value=u?c:Cs(c)}get value(){return Hu(this),this._value}set value(c){const u=this.__v_isShallow||As(c)||xi(c);c=u?c:Fe(c),wr(c,this._rawValue)&&(this._rawValue=c,this._value=u?c:Cs(c),Dc(this))}}function I2(s){Dc(s)}function Ci(s){return Nt(s)?s.value:s}const N2={get:(s,c,u)=>Ci(Reflect.get(s,c,u)),set:(s,c,u,f)=>{const g=s[c];return Nt(g)&&!Nt(u)?(g.value=u,!0):Reflect.set(s,c,u,f)}};function $u(s){return Ai(s)?s:new Proxy(s,N2)}class P2{constructor(c){this.dep=void 0,this.__v_isRef=!0;const{get:u,set:f}=c(()=>Hu(this),()=>Dc(this));this._get=u,this._set=f}get value(){return this._get()}set value(c){this._set(c)}}function B2(s){return new P2(s)}function O2(s){const c=_e(s)?new Array(s.length):{};for(const u in s)c[u]=uA(s,u);return c}class L2{constructor(c,u,f){this._object=c,this._key=u,this._defaultValue=f,this.__v_isRef=!0}get value(){const c=this._object[this._key];return c===void 0?this._defaultValue:c}set value(c){this._object[this._key]=c}get dep(){return o2(Fe(this._object),this._key)}}function uA(s,c,u){const f=s[c];return Nt(f)?f:new L2(s,c,u)}var hA;class R2{constructor(c,u,f,g){this._setter=u,this.dep=void 0,this.__v_isRef=!0,this[hA]=!1,this._dirty=!0,this.effect=new Ps(c,()=>{this._dirty||(this._dirty=!0,Dc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!g,this.__v_isReadonly=f}get value(){const c=Fe(this);return Hu(c),(c._dirty||!c._cacheable)&&(c._dirty=!1,c._value=c.effect.run()),c._value}set value(c){this._setter(c)}}hA="__v_isReadonly";function z2(s,c,u=!1){let f,g;const k=Me(s);return k?(f=s,g=Nn):(f=s.get,g=s.set),new R2(f,g,k||!g,u)}function j2(s,...c){}function F2(s,c){}function ho(s,c,u,f){let g;try{g=f?s(...f):s()}catch(k){Mi(k,c,u)}return g}function ln(s,c,u,f){if(Me(s)){const k=ho(s,c,u,f);return k&&Ou(k)&&k.catch(b=>{Mi(b,c,u)}),k}const g=[];for(let k=0;k<s.length;k++)g.push(ln(s[k],c,u,f));return g}function Mi(s,c,u,f=!0){const g=c?c.vnode:null;if(c){let k=c.parent;const b=c.proxy,A=u;for(;k;){const C=k.ec;if(C){for(let x=0;x<C.length;x++)if(C[x](s,b,A)===!1)return}k=k.parent}const w=c.appContext.config.errorHandler;if(w){ho(w,null,10,[s,b,A]);return}}V2(s,u,g,f)}function V2(s,c,u,f=!0){console.error(s)}let vs=!1,du=!1;const jt=[];let Qn=0;const pr=[];let lo=null,bi=0;const fA=Promise.resolve();let qu=null;function Tc(s){const c=qu||fA;return s?c.then(this?s.bind(this):s):c}function U2(s){let c=Qn+1,u=jt.length;for(;c<u;){const f=c+u>>>1;ys(jt[f])<s?c=f+1:u=f}return c}function Sc(s){(!jt.length||!jt.includes(s,vs&&s.allowRecurse?Qn+1:Qn))&&(s.id==null?jt.push(s):jt.splice(U2(s.id),0,s),gA())}function gA(){!vs&&!du&&(du=!0,qu=fA.then(pA))}function H2(s){const c=jt.indexOf(s);c>Qn&&jt.splice(c,1)}function Wu(s){_e(s)?pr.push(...s):(!lo||!lo.includes(s,s.allowRecurse?bi+1:bi))&&pr.push(s),gA()}function Fw(s,c=vs?Qn+1:0){for(;c<jt.length;c++){const u=jt[c];u&&u.pre&&(jt.splice(c,1),c--,u())}}function uc(s){if(pr.length){const c=[...new Set(pr)];if(pr.length=0,lo){lo.push(...c);return}for(lo=c,lo.sort((u,f)=>ys(u)-ys(f)),bi=0;bi<lo.length;bi++)lo[bi]();lo=null,bi=0}}const ys=s=>s.id==null?1/0:s.id,$2=(s,c)=>{const u=ys(s)-ys(c);if(u===0){if(s.pre&&!c.pre)return-1;if(c.pre&&!s.pre)return 1}return u};function pA(s){du=!1,vs=!0,jt.sort($2);const c=Nn;try{for(Qn=0;Qn<jt.length;Qn++){const u=jt[Qn];u&&u.active!==!1&&ho(u,null,14)}}finally{Qn=0,jt.length=0,uc(),vs=!1,qu=null,(jt.length||pr.length)&&pA()}}let lr,Ga=[];function mA(s,c){var u,f;lr=s,lr?(lr.enabled=!0,Ga.forEach(({event:g,args:k})=>lr.emit(g,...k)),Ga=[]):typeof window<"u"&&window.HTMLElement&&!(!((f=(u=window.navigator)===null||u===void 0?void 0:u.userAgent)===null||f===void 0)&&f.includes("jsdom"))?((c.__VUE_DEVTOOLS_HOOK_REPLAY__=c.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(k=>{mA(k,c)}),setTimeout(()=>{lr||(c.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ga=[])},3e3)):Ga=[]}function q2(s,c,...u){if(s.isUnmounted)return;const f=s.vnode.props||nt;let g=u;const k=c.startsWith("update:"),b=k&&c.slice(7);if(b&&b in f){const x=`${b==="modelValue"?"model":b}Modifiers`,{number:y,trim:D}=f[x]||nt;D&&(g=u.map(I=>lt(I)?I.trim():I)),y&&(g=u.map(cc))}let A,w=f[A=hs(c)]||f[A=hs(Xt(c))];!w&&k&&(w=f[A=hs(kn(c))]),w&&ln(w,s,6,g);const C=f[A+"Once"];if(C){if(!s.emitted)s.emitted={};else if(s.emitted[A])return;s.emitted[A]=!0,ln(C,s,6,g)}}function bA(s,c,u=!1){const f=c.emitsCache,g=f.get(s);if(g!==void 0)return g;const k=s.emits;let b={},A=!1;if(!Me(s)){const w=C=>{const x=bA(C,c,!0);x&&(A=!0,bt(b,x))};!u&&c.mixins.length&&c.mixins.forEach(w),s.extends&&w(s.extends),s.mixins&&s.mixins.forEach(w)}return!k&&!A?(ot(s)&&f.set(s,null),null):(_e(k)?k.forEach(w=>b[w]=null):bt(b,k),ot(s)&&f.set(s,b),b)}function Mc(s,c){return!s||!Is(c)?!1:(c=c.slice(2).replace(/Once$/,""),qe(s,c[0].toLowerCase()+c.slice(1))||qe(s,kn(c))||qe(s,c))}let Rt=null,Ic=null;function xs(s){const c=Rt;return Rt=s,Ic=s&&s.type.__scopeId||null,c}function Bs(s){Ic=s}function Os(){Ic=null}const W2=s=>Xn;function Xn(s,c=Rt,u){if(!c||s._n)return s;const f=(...g)=>{f._d&&bu(-1);const k=xs(c);let b;try{b=s(...g)}finally{xs(k),f._d&&bu(1)}return b};return f._n=!0,f._c=!0,f._d=!0,f}function ec(s){const{type:c,vnode:u,proxy:f,withProxy:g,props:k,propsOptions:[b],slots:A,attrs:w,emit:C,render:x,renderCache:y,data:D,setupState:I,ctx:j,inheritAttrs:H}=s;let ee,F;const O=xs(s);try{if(u.shapeFlag&4){const G=g||f;ee=sn(x.call(G,G,y,k,I,D,j)),F=w}else{const G=c;ee=sn(G.length>1?G(k,{attrs:w,slots:A,emit:C}):G(k,null)),F=c.props?w:K2(w)}}catch(G){ms.length=0,Mi(G,s,1),ee=Ee(Ft)}let V=ee;if(F&&H!==!1){const G=Object.keys(F),{shapeFlag:oe}=V;G.length&&oe&7&&(b&&G.some(Pu)&&(F=Y2(F,b)),V=eo(V,F))}return u.dirs&&(V=eo(V),V.dirs=V.dirs?V.dirs.concat(u.dirs):u.dirs),u.transition&&(V.transition=u.transition),ee=V,xs(O),ee}function G2(s){let c;for(let u=0;u<s.length;u++){const f=s[u];if(Uo(f)){if(f.type!==Ft||f.children==="v-if"){if(c)return;c=f}}else return}return c}const K2=s=>{let c;for(const u in s)(u==="class"||u==="style"||Is(u))&&((c||(c={}))[u]=s[u]);return c},Y2=(s,c)=>{const u={};for(const f in s)(!Pu(f)||!(f.slice(9)in c))&&(u[f]=s[f]);return u};function Q2(s,c,u){const{props:f,children:g,component:k}=s,{props:b,children:A,patchFlag:w}=c,C=k.emitsOptions;if(c.dirs||c.transition)return!0;if(u&&w>=0){if(w&1024)return!0;if(w&16)return f?Vw(f,b,C):!!b;if(w&8){const x=c.dynamicProps;for(let y=0;y<x.length;y++){const D=x[y];if(b[D]!==f[D]&&!Mc(C,D))return!0}}}else return(g||A)&&(!A||!A.$stable)?!0:f===b?!1:f?b?Vw(f,b,C):!0:!!b;return!1}function Vw(s,c,u){const f=Object.keys(c);if(f.length!==Object.keys(s).length)return!0;for(let g=0;g<f.length;g++){const k=f[g];if(c[k]!==s[k]&&!Mc(u,k))return!0}return!1}function Gu({vnode:s,parent:c},u){for(;c&&c.subTree===s;)(s=c.vnode).el=u,c=c.parent}const kA=s=>s.__isSuspense,Z2={name:"Suspense",__isSuspense:!0,process(s,c,u,f,g,k,b,A,w,C){s==null?X2(c,u,f,g,k,b,A,w,C):e5(s,c,u,f,g,b,A,w,C)},hydrate:t5,create:Ku,normalize:n5},J2=Z2;function Es(s,c){const u=s.props&&s.props[c];Me(u)&&u()}function X2(s,c,u,f,g,k,b,A,w){const{p:C,o:{createElement:x}}=w,y=x("div"),D=s.suspense=Ku(s,g,f,c,y,u,k,b,A,w);C(null,D.pendingBranch=s.ssContent,y,null,f,D,k,b),D.deps>0?(Es(s,"onPending"),Es(s,"onFallback"),C(null,s.ssFallback,c,u,f,null,k,b),mr(D,s.ssFallback)):D.resolve()}function e5(s,c,u,f,g,k,b,A,{p:w,um:C,o:{createElement:x}}){const y=c.suspense=s.suspense;y.vnode=c,c.el=s.el;const D=c.ssContent,I=c.ssFallback,{activeBranch:j,pendingBranch:H,isInFallback:ee,isHydrating:F}=y;if(H)y.pendingBranch=D,Sn(D,H)?(w(H,D,y.hiddenContainer,null,g,y,k,b,A),y.deps<=0?y.resolve():ee&&(w(j,I,u,f,g,null,k,b,A),mr(y,I))):(y.pendingId++,F?(y.isHydrating=!1,y.activeBranch=H):C(H,g,y),y.deps=0,y.effects.length=0,y.hiddenContainer=x("div"),ee?(w(null,D,y.hiddenContainer,null,g,y,k,b,A),y.deps<=0?y.resolve():(w(j,I,u,f,g,null,k,b,A),mr(y,I))):j&&Sn(D,j)?(w(j,D,u,f,g,y,k,b,A),y.resolve(!0)):(w(null,D,y.hiddenContainer,null,g,y,k,b,A),y.deps<=0&&y.resolve()));else if(j&&Sn(D,j))w(j,D,u,f,g,y,k,b,A),mr(y,D);else if(Es(c,"onPending"),y.pendingBranch=D,y.pendingId++,w(null,D,y.hiddenContainer,null,g,y,k,b,A),y.deps<=0)y.resolve();else{const{timeout:O,pendingId:V}=y;O>0?setTimeout(()=>{y.pendingId===V&&y.fallback(I)},O):O===0&&y.fallback(I)}}function Ku(s,c,u,f,g,k,b,A,w,C,x=!1){const{p:y,m:D,um:I,n:j,o:{parentNode:H,remove:ee}}=C,F=s.props?lc(s.props.timeout):void 0,O={vnode:s,parent:c,parentComponent:u,isSVG:b,container:f,hiddenContainer:g,anchor:k,deps:0,pendingId:0,timeout:typeof F=="number"?F:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:x,isUnmounted:!1,effects:[],resolve(V=!1){const{vnode:G,activeBranch:oe,pendingBranch:ge,pendingId:Q,effects:q,parentComponent:S,container:Z}=O;if(O.isHydrating)O.isHydrating=!1;else if(!V){const we=oe&&ge.transition&&ge.transition.mode==="out-in";we&&(oe.transition.afterLeave=()=>{Q===O.pendingId&&D(ge,Z,ke,0)});let{anchor:ke}=O;oe&&(ke=j(oe),I(oe,S,O,!0)),we||D(ge,Z,ke,0)}mr(O,ge),O.pendingBranch=null,O.isInFallback=!1;let me=O.parent,se=!1;for(;me;){if(me.pendingBranch){me.effects.push(...q),se=!0;break}me=me.parent}se||Wu(q),O.effects=[],Es(G,"onResolve")},fallback(V){if(!O.pendingBranch)return;const{vnode:G,activeBranch:oe,parentComponent:ge,container:Q,isSVG:q}=O;Es(G,"onFallback");const S=j(oe),Z=()=>{O.isInFallback&&(y(null,V,Q,S,ge,null,q,A,w),mr(O,V))},me=V.transition&&V.transition.mode==="out-in";me&&(oe.transition.afterLeave=Z),O.isInFallback=!0,I(oe,ge,null,!0),me||Z()},move(V,G,oe){O.activeBranch&&D(O.activeBranch,V,G,oe),O.container=V},next(){return O.activeBranch&&j(O.activeBranch)},registerDep(V,G){const oe=!!O.pendingBranch;oe&&O.deps++;const ge=V.vnode.el;V.asyncDep.catch(Q=>{Mi(Q,V,0)}).then(Q=>{if(V.isUnmounted||O.isUnmounted||O.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:q}=V;ku(V,Q,!1),ge&&(q.el=ge);const S=!ge&&V.subTree.el;G(V,q,H(ge||V.subTree.el),ge?null:j(V.subTree),O,b,w),S&&ee(S),Gu(V,q.el),oe&&--O.deps===0&&O.resolve()})},unmount(V,G){O.isUnmounted=!0,O.activeBranch&&I(O.activeBranch,u,V,G),O.pendingBranch&&I(O.pendingBranch,u,V,G)}};return O}function t5(s,c,u,f,g,k,b,A,w){const C=c.suspense=Ku(c,f,u,s.parentNode,document.createElement("div"),null,g,k,b,A,!0),x=w(s,C.pendingBranch=c.ssContent,u,C,k,b);return C.deps===0&&C.resolve(),x}function n5(s){const{shapeFlag:c,children:u}=s,f=c&32;s.ssContent=Uw(f?u.default:u),s.ssFallback=f?Uw(u.fallback):Ee(Ft)}function Uw(s){let c;if(Me(s)){const u=Ti&&s._c;u&&(s._d=!1,vt()),s=s(),u&&(s._d=!0,c=Jt,KA())}return _e(s)&&(s=G2(s)),s=sn(s),c&&!s.dynamicChildren&&(s.dynamicChildren=c.filter(u=>u!==s)),s}function wA(s,c){c&&c.pendingBranch?_e(s)?c.effects.push(...s):c.effects.push(s):Wu(s)}function mr(s,c){s.activeBranch=c;const{vnode:u,parentComponent:f}=s,g=u.el=c.el;f&&f.subTree===u&&(f.vnode.el=g,Gu(f,g))}function fs(s,c){if(mt){let u=mt.provides;const f=mt.parent&&mt.parent.provides;f===u&&(u=mt.provides=Object.create(f)),u[s]=c}}function Pn(s,c,u=!1){const f=mt||Rt;if(f){const g=f.parent==null?f.vnode.appContext&&f.vnode.appContext.provides:f.parent.provides;if(g&&s in g)return g[s];if(arguments.length>1)return u&&Me(c)?c.call(f.proxy):c}}function o5(s,c){return Ls(s,null,c)}function _A(s,c){return Ls(s,null,{flush:"post"})}function i5(s,c){return Ls(s,null,{flush:"sync"})}const Ka={};function br(s,c,u){return Ls(s,c,u)}function Ls(s,c,{immediate:u,deep:f,flush:g,onTrack:k,onTrigger:b}=nt){const A=Y_()===(mt==null?void 0:mt.scope)?mt:null;let w,C=!1,x=!1;if(Nt(s)?(w=()=>s.value,C=As(s)):Ai(s)?(w=()=>s,f=!0):_e(s)?(x=!0,C=s.some(V=>Ai(V)||As(V)),w=()=>s.map(V=>{if(Nt(V))return V.value;if(Ai(V))return wi(V);if(Me(V))return ho(V,A,2)})):Me(s)?c?w=()=>ho(s,A,2):w=()=>{if(!(A&&A.isUnmounted))return y&&y(),ln(s,A,3,[D])}:w=Nn,c&&f){const V=w;w=()=>wi(V())}let y,D=V=>{y=F.onStop=()=>{ho(V,A,4)}},I;if(Ar)if(D=Nn,c?u&&ln(c,A,3,[w(),x?[]:void 0,D]):w(),g==="sync"){const V=aC();I=V.__watcherHandles||(V.__watcherHandles=[])}else return Nn;let j=x?new Array(s.length).fill(Ka):Ka;const H=()=>{if(F.active)if(c){const V=F.run();(f||C||(x?V.some((G,oe)=>wr(G,j[oe])):wr(V,j)))&&(y&&y(),ln(c,A,3,[V,j===Ka?void 0:x&&j[0]===Ka?[]:j,D]),j=V)}else F.run()};H.allowRecurse=!!c;let ee;g==="sync"?ee=H:g==="post"?ee=()=>Lt(H,A&&A.suspense):(H.pre=!0,A&&(H.id=A.uid),ee=()=>Sc(H));const F=new Ps(w,ee);c?u?H():j=F.run():g==="post"?Lt(F.run.bind(F),A&&A.suspense):F.run();const O=()=>{F.stop(),A&&A.scope&&Bu(A.scope.effects,F)};return I&&I.push(O),O}function r5(s,c,u){const f=this.proxy,g=lt(s)?s.includes(".")?AA(f,s):()=>f[s]:s.bind(f,f);let k;Me(c)?k=c:(k=c.handler,u=c);const b=mt;Ho(this);const A=Ls(g,k.bind(f),u);return b?Ho(b):jo(),A}function AA(s,c){const u=c.split(".");return()=>{let f=s;for(let g=0;g<u.length&&f;g++)f=f[u[g]];return f}}function wi(s,c){if(!ot(s)||s.__v_skip||(c=c||new Set,c.has(s)))return s;if(c.add(s),Nt(s))wi(s.value,c);else if(_e(s))for(let u=0;u<s.length;u++)wi(s[u],c);else if(Si(s)||hr(s))s.forEach(u=>{wi(u,c)});else if(W_(s))for(const u in s)wi(s[u],c);return s}function Yu(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return js(()=>{s.isMounted=!0}),Oc(()=>{s.isUnmounting=!0}),s}const bn=[Function,Array],s5={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},setup(s,{slots:c}){const u=Wo(),f=Yu();let g;return()=>{const k=c.default&&Nc(c.default(),!0);if(!k||!k.length)return;let b=k[0];if(k.length>1){for(const H of k)if(H.type!==Ft){b=H;break}}const A=Fe(s),{mode:w}=A;if(f.isLeaving)return Wd(b);const C=Hw(b);if(!C)return Wd(b);const x=_r(C,A,f,u);Ei(C,x);const y=u.subTree,D=y&&Hw(y);let I=!1;const{getTransitionKey:j}=C.type;if(j){const H=j();g===void 0?g=H:H!==g&&(g=H,I=!0)}if(D&&D.type!==Ft&&(!Sn(C,D)||I)){const H=_r(D,A,f,u);if(Ei(D,H),w==="out-in")return f.isLeaving=!0,H.afterLeave=()=>{f.isLeaving=!1,u.update.active!==!1&&u.update()},Wd(b);w==="in-out"&&C.type!==Ft&&(H.delayLeave=(ee,F,O)=>{const V=CA(f,D);V[String(D.key)]=D,ee._leaveCb=()=>{F(),ee._leaveCb=void 0,delete x.delayedLeave},x.delayedLeave=O})}return b}}},Qu=s5;function CA(s,c){const{leavingVNodes:u}=s;let f=u.get(c.type);return f||(f=Object.create(null),u.set(c.type,f)),f}function _r(s,c,u,f){const{appear:g,mode:k,persisted:b=!1,onBeforeEnter:A,onEnter:w,onAfterEnter:C,onEnterCancelled:x,onBeforeLeave:y,onLeave:D,onAfterLeave:I,onLeaveCancelled:j,onBeforeAppear:H,onAppear:ee,onAfterAppear:F,onAppearCancelled:O}=c,V=String(s.key),G=CA(u,s),oe=(q,S)=>{q&&ln(q,f,9,S)},ge=(q,S)=>{const Z=S[1];oe(q,S),_e(q)?q.every(me=>me.length<=1)&&Z():q.length<=1&&Z()},Q={mode:k,persisted:b,beforeEnter(q){let S=A;if(!u.isMounted)if(g)S=H||A;else return;q._leaveCb&&q._leaveCb(!0);const Z=G[V];Z&&Sn(s,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),oe(S,[q])},enter(q){let S=w,Z=C,me=x;if(!u.isMounted)if(g)S=ee||w,Z=F||C,me=O||x;else return;let se=!1;const we=q._enterCb=ke=>{se||(se=!0,ke?oe(me,[q]):oe(Z,[q]),Q.delayedLeave&&Q.delayedLeave(),q._enterCb=void 0)};S?ge(S,[q,we]):we()},leave(q,S){const Z=String(s.key);if(q._enterCb&&q._enterCb(!0),u.isUnmounting)return S();oe(y,[q]);let me=!1;const se=q._leaveCb=we=>{me||(me=!0,S(),we?oe(j,[q]):oe(I,[q]),q._leaveCb=void 0,G[Z]===s&&delete G[Z])};G[Z]=s,D?ge(D,[q,se]):se()},clone(q){return _r(q,c,u,f)}};return Q}function Wd(s){if(zs(s))return s=eo(s),s.children=null,s}function Hw(s){return zs(s)?s.children?s.children[0]:void 0:s}function Ei(s,c){s.shapeFlag&6&&s.component?Ei(s.component.subTree,c):s.shapeFlag&128?(s.ssContent.transition=c.clone(s.ssContent),s.ssFallback.transition=c.clone(s.ssFallback)):s.transition=c}function Nc(s,c=!1,u){let f=[],g=0;for(let k=0;k<s.length;k++){let b=s[k];const A=u==null?b.key:String(u)+String(b.key!=null?b.key:k);b.type===xt?(b.patchFlag&128&&g++,f=f.concat(Nc(b.children,c,A))):(c||b.type!==Ft)&&f.push(A!=null?eo(b,{key:A}):b)}if(g>1)for(let k=0;k<f.length;k++)f[k].patchFlag=-2;return f}function Rs(s){return Me(s)?{setup:s,name:s.name}:s}const vi=s=>!!s.type.__asyncLoader;function a5(s){Me(s)&&(s={loader:s});const{loader:c,loadingComponent:u,errorComponent:f,delay:g=200,timeout:k,suspensible:b=!0,onError:A}=s;let w=null,C,x=0;const y=()=>(x++,w=null,D()),D=()=>{let I;return w||(I=w=c().catch(j=>{if(j=j instanceof Error?j:new Error(String(j)),A)return new Promise((H,ee)=>{A(j,()=>H(y()),()=>ee(j),x+1)});throw j}).then(j=>I!==w&&w?w:(j&&(j.__esModule||j[Symbol.toStringTag]==="Module")&&(j=j.default),C=j,j)))};return Rs({name:"AsyncComponentWrapper",__asyncLoader:D,get __asyncResolved(){return C},setup(){const I=mt;if(C)return()=>Gd(C,I);const j=O=>{w=null,Mi(O,I,13,!f)};if(b&&I.suspense||Ar)return D().then(O=>()=>Gd(O,I)).catch(O=>(j(O),()=>f?Ee(f,{error:O}):null));const H=gr(!1),ee=gr(),F=gr(!!g);return g&&setTimeout(()=>{F.value=!1},g),k!=null&&setTimeout(()=>{if(!H.value&&!ee.value){const O=new Error(`Async component timed out after ${k}ms.`);j(O),ee.value=O}},k),D().then(()=>{H.value=!0,I.parent&&zs(I.parent.vnode)&&Sc(I.parent.update)}).catch(O=>{j(O),ee.value=O}),()=>{if(H.value&&C)return Gd(C,I);if(ee.value&&f)return Ee(f,{error:ee.value});if(u&&!F.value)return Ee(u)}}})}function Gd(s,c){const{ref:u,props:f,children:g,ce:k}=c.vnode,b=Ee(s,f,g);return b.ref=u,b.ce=k,delete c.vnode.ce,b}const zs=s=>s.type.__isKeepAlive,c5={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:c}){const u=Wo(),f=u.ctx;if(!f.renderer)return()=>{const O=c.default&&c.default();return O&&O.length===1?O[0]:O};const g=new Map,k=new Set;let b=null;const A=u.suspense,{renderer:{p:w,m:C,um:x,o:{createElement:y}}}=f,D=y("div");f.activate=(O,V,G,oe,ge)=>{const Q=O.component;C(O,V,G,0,A),w(Q.vnode,O,V,G,Q,A,oe,O.slotScopeIds,ge),Lt(()=>{Q.isDeactivated=!1,Q.a&&fr(Q.a);const q=O.props&&O.props.onVnodeMounted;q&&Zt(q,Q.parent,O)},A)},f.deactivate=O=>{const V=O.component;C(O,D,null,1,A),Lt(()=>{V.da&&fr(V.da);const G=O.props&&O.props.onVnodeUnmounted;G&&Zt(G,V.parent,O),V.isDeactivated=!0},A)};function I(O){Kd(O),x(O,u,A,!0)}function j(O){g.forEach((V,G)=>{const oe=_u(V.type);oe&&(!O||!O(oe))&&H(G)})}function H(O){const V=g.get(O);!b||!Sn(V,b)?I(V):b&&Kd(b),g.delete(O),k.delete(O)}br(()=>[s.include,s.exclude],([O,V])=>{O&&j(G=>ds(O,G)),V&&j(G=>!ds(V,G))},{flush:"post",deep:!0});let ee=null;const F=()=>{ee!=null&&g.set(ee,Yd(u.subTree))};return js(F),Bc(F),Oc(()=>{g.forEach(O=>{const{subTree:V,suspense:G}=u,oe=Yd(V);if(O.type===oe.type&&O.key===oe.key){Kd(oe);const ge=oe.component.da;ge&&Lt(ge,G);return}I(O)})}),()=>{if(ee=null,!c.default)return null;const O=c.default(),V=O[0];if(O.length>1)return b=null,O;if(!Uo(V)||!(V.shapeFlag&4)&&!(V.shapeFlag&128))return b=null,V;let G=Yd(V);const oe=G.type,ge=_u(vi(G)?G.type.__asyncResolved||{}:oe),{include:Q,exclude:q,max:S}=s;if(Q&&(!ge||!ds(Q,ge))||q&&ge&&ds(q,ge))return b=G,V;const Z=G.key==null?oe:G.key,me=g.get(Z);return G.el&&(G=eo(G),V.shapeFlag&128&&(V.ssContent=G)),ee=Z,me?(G.el=me.el,G.component=me.component,G.transition&&Ei(G,G.transition),G.shapeFlag|=512,k.delete(Z),k.add(Z)):(k.add(Z),S&&k.size>parseInt(S,10)&&H(k.values().next().value)),G.shapeFlag|=256,b=G,kA(V.type)?V:G}}},l5=c5;function ds(s,c){return _e(s)?s.some(u=>ds(u,c)):lt(s)?s.split(",").includes(c):GI(s)?s.test(c):!1}function vA(s,c){xA(s,"a",c)}function yA(s,c){xA(s,"da",c)}function xA(s,c,u=mt){const f=s.__wdc||(s.__wdc=()=>{let g=u;for(;g;){if(g.isDeactivated)return;g=g.parent}return s()});if(Pc(c,f,u),u){let g=u.parent;for(;g&&g.parent;)zs(g.parent.vnode)&&d5(f,c,u,g),g=g.parent}}function d5(s,c,u,f){const g=Pc(c,s,f,!0);Lc(()=>{Bu(f[c],g)},u)}function Kd(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function Yd(s){return s.shapeFlag&128?s.ssContent:s}function Pc(s,c,u=mt,f=!1){if(u){const g=u[s]||(u[s]=[]),k=c.__weh||(c.__weh=(...b)=>{if(u.isUnmounted)return;Dr(),Ho(u);const A=ln(c,u,s,b);return jo(),Tr(),A});return f?g.unshift(k):g.push(k),k}}const po=s=>(c,u=mt)=>(!Ar||s==="sp")&&Pc(s,(...f)=>c(...f),u),EA=po("bm"),js=po("m"),DA=po("bu"),Bc=po("u"),Oc=po("bum"),Lc=po("um"),TA=po("sp"),SA=po("rtg"),MA=po("rtc");function IA(s,c=mt){Pc("ec",s,c)}function st(s,c){const u=Rt;if(u===null)return s;const f=zc(u)||u.proxy,g=s.dirs||(s.dirs=[]);for(let k=0;k<c.length;k++){let[b,A,w,C=nt]=c[k];b&&(Me(b)&&(b={mounted:b,updated:b}),b.deep&&wi(A),g.push({dir:b,instance:f,value:A,oldValue:void 0,arg:w,modifiers:C}))}return s}function Yn(s,c,u,f){const g=s.dirs,k=c&&c.dirs;for(let b=0;b<g.length;b++){const A=g[b];k&&(A.oldValue=k[b].value);let w=A.dir[f];w&&(Dr(),ln(w,u,8,[s.el,A,s,c]),Tr())}}const Zu="components",u5="directives";function Wt(s,c){return Ju(Zu,s,!0,c)||s}const NA=Symbol();function PA(s){return lt(s)?Ju(Zu,s,!1)||s:s||NA}function h5(s){return Ju(u5,s)}function Ju(s,c,u=!0,f=!1){const g=Rt||mt;if(g){const k=g.type;if(s===Zu){const A=_u(k,!1);if(A&&(A===c||A===Xt(c)||A===Ns(Xt(c))))return k}const b=$w(g[s]||k[s],c)||$w(g.appContext[s],c);return!b&&f?k:b}}function $w(s,c){return s&&(s[c]||s[Xt(c)]||s[Ns(Xt(c))])}function BA(s,c,u,f){let g;const k=u&&u[f];if(_e(s)||lt(s)){g=new Array(s.length);for(let b=0,A=s.length;b<A;b++)g[b]=c(s[b],b,void 0,k&&k[b])}else if(typeof s=="number"){g=new Array(s);for(let b=0;b<s;b++)g[b]=c(b+1,b,void 0,k&&k[b])}else if(ot(s))if(s[Symbol.iterator])g=Array.from(s,(b,A)=>c(b,A,void 0,k&&k[A]));else{const b=Object.keys(s);g=new Array(b.length);for(let A=0,w=b.length;A<w;A++){const C=b[A];g[A]=c(s[C],C,A,k&&k[A])}}else g=[];return u&&(u[f]=g),g}function f5(s,c){for(let u=0;u<c.length;u++){const f=c[u];if(_e(f))for(let g=0;g<f.length;g++)s[f[g].name]=f[g].fn;else f&&(s[f.name]=f.key?(...g)=>{const k=f.fn(...g);return k&&(k.key=f.key),k}:f.fn)}return s}function OA(s,c,u={},f,g){if(Rt.isCE||Rt.parent&&vi(Rt.parent)&&Rt.parent.isCE)return c!=="default"&&(u.name=c),Ee("slot",u,f&&f());let k=s[c];k&&k._c&&(k._d=!1),vt();const b=k&&LA(k(u)),A=Ds(xt,{key:u.key||b&&b.key||`_${c}`},b||(f?f():[]),b&&s._===1?64:-2);return!g&&A.scopeId&&(A.slotScopeIds=[A.scopeId+"-s"]),k&&k._c&&(k._d=!0),A}function LA(s){return s.some(c=>Uo(c)?!(c.type===Ft||c.type===xt&&!LA(c.children)):!0)?s:null}function g5(s,c){const u={};for(const f in s)u[c&&/[A-Z]/.test(f)?`on:${f}`:hs(f)]=s[f];return u}const uu=s=>s?tC(s)?zc(s)||s.proxy:uu(s.parent):null,gs=bt(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>uu(s.parent),$root:s=>uu(s.root),$emit:s=>s.emit,$options:s=>Xu(s),$forceUpdate:s=>s.f||(s.f=()=>Sc(s.update)),$nextTick:s=>s.n||(s.n=Tc.bind(s.proxy)),$watch:s=>r5.bind(s)}),Qd=(s,c)=>s!==nt&&!s.__isScriptSetup&&qe(s,c),hu={get({_:s},c){const{ctx:u,setupState:f,data:g,props:k,accessCache:b,type:A,appContext:w}=s;let C;if(c[0]!=="$"){const I=b[c];if(I!==void 0)switch(I){case 1:return f[c];case 2:return g[c];case 4:return u[c];case 3:return k[c]}else{if(Qd(f,c))return b[c]=1,f[c];if(g!==nt&&qe(g,c))return b[c]=2,g[c];if((C=s.propsOptions[0])&&qe(C,c))return b[c]=3,k[c];if(u!==nt&&qe(u,c))return b[c]=4,u[c];fu&&(b[c]=0)}}const x=gs[c];let y,D;if(x)return c==="$attrs"&&en(s,"get",c),x(s);if((y=A.__cssModules)&&(y=y[c]))return y;if(u!==nt&&qe(u,c))return b[c]=4,u[c];if(D=w.config.globalProperties,qe(D,c))return D[c]},set({_:s},c,u){const{data:f,setupState:g,ctx:k}=s;return Qd(g,c)?(g[c]=u,!0):f!==nt&&qe(f,c)?(f[c]=u,!0):qe(s.props,c)||c[0]==="$"&&c.slice(1)in s?!1:(k[c]=u,!0)},has({_:{data:s,setupState:c,accessCache:u,ctx:f,appContext:g,propsOptions:k}},b){let A;return!!u[b]||s!==nt&&qe(s,b)||Qd(c,b)||(A=k[0])&&qe(A,b)||qe(f,b)||qe(gs,b)||qe(g.config.globalProperties,b)},defineProperty(s,c,u){return u.get!=null?s._.accessCache[c]=0:qe(u,"value")&&this.set(s,c,u.value,null),Reflect.defineProperty(s,c,u)}},p5=bt({},hu,{get(s,c){if(c!==Symbol.unscopables)return hu.get(s,c,s)},has(s,c){return c[0]!=="_"&&!OI(c)}});let fu=!0;function m5(s){const c=Xu(s),u=s.proxy,f=s.ctx;fu=!1,c.beforeCreate&&qw(c.beforeCreate,s,"bc");const{data:g,computed:k,methods:b,watch:A,provide:w,inject:C,created:x,beforeMount:y,mounted:D,beforeUpdate:I,updated:j,activated:H,deactivated:ee,beforeDestroy:F,beforeUnmount:O,destroyed:V,unmounted:G,render:oe,renderTracked:ge,renderTriggered:Q,errorCaptured:q,serverPrefetch:S,expose:Z,inheritAttrs:me,components:se,directives:we,filters:ke}=c;if(C&&b5(C,f,null,s.appContext.config.unwrapInjectedRef),b)for(const ze in b){const Ne=b[ze];Me(Ne)&&(f[ze]=Ne.bind(u))}if(g){const ze=g.call(u,u);ot(ze)&&(s.data=Sr(ze))}if(fu=!0,k)for(const ze in k){const Ne=k[ze],zt=Me(Ne)?Ne.bind(u,u):Me(Ne.get)?Ne.get.bind(u,u):Nn,Be=!Me(Ne)&&Me(Ne.set)?Ne.set.bind(u):Nn,Pt=an({get:zt,set:Be});Object.defineProperty(f,ze,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:At=>Pt.value=At})}if(A)for(const ze in A)RA(A[ze],f,u,ze);if(w){const ze=Me(w)?w.call(u):w;Reflect.ownKeys(ze).forEach(Ne=>{fs(Ne,ze[Ne])})}x&&qw(x,s,"c");function De(ze,Ne){_e(Ne)?Ne.forEach(zt=>ze(zt.bind(u))):Ne&&ze(Ne.bind(u))}if(De(EA,y),De(js,D),De(DA,I),De(Bc,j),De(vA,H),De(yA,ee),De(IA,q),De(MA,ge),De(SA,Q),De(Oc,O),De(Lc,G),De(TA,S),_e(Z))if(Z.length){const ze=s.exposed||(s.exposed={});Z.forEach(Ne=>{Object.defineProperty(ze,Ne,{get:()=>u[Ne],set:zt=>u[Ne]=zt})})}else s.exposed||(s.exposed={});oe&&s.render===Nn&&(s.render=oe),me!=null&&(s.inheritAttrs=me),se&&(s.components=se),we&&(s.directives=we)}function b5(s,c,u=Nn,f=!1){_e(s)&&(s=gu(s));for(const g in s){const k=s[g];let b;ot(k)?"default"in k?b=Pn(k.from||g,k.default,!0):b=Pn(k.from||g):b=Pn(k),Nt(b)&&f?Object.defineProperty(c,g,{enumerable:!0,configurable:!0,get:()=>b.value,set:A=>b.value=A}):c[g]=b}}function qw(s,c,u){ln(_e(s)?s.map(f=>f.bind(c.proxy)):s.bind(c.proxy),c,u)}function RA(s,c,u,f){const g=f.includes(".")?AA(u,f):()=>u[f];if(lt(s)){const k=c[s];Me(k)&&br(g,k)}else if(Me(s))br(g,s.bind(u));else if(ot(s))if(_e(s))s.forEach(k=>RA(k,c,u,f));else{const k=Me(s.handler)?s.handler.bind(u):c[s.handler];Me(k)&&br(g,k,s)}}function Xu(s){const c=s.type,{mixins:u,extends:f}=c,{mixins:g,optionsCache:k,config:{optionMergeStrategies:b}}=s.appContext,A=k.get(c);let w;return A?w=A:!g.length&&!u&&!f?w=c:(w={},g.length&&g.forEach(C=>hc(w,C,b,!0)),hc(w,c,b)),ot(c)&&k.set(c,w),w}function hc(s,c,u,f=!1){const{mixins:g,extends:k}=c;k&&hc(s,k,u,!0),g&&g.forEach(b=>hc(s,b,u,!0));for(const b in c)if(!(f&&b==="expose")){const A=k5[b]||u&&u[b];s[b]=A?A(s[b],c[b]):c[b]}return s}const k5={data:Ww,props:mi,emits:mi,methods:mi,computed:mi,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:mi,directives:mi,watch:_5,provide:Ww,inject:w5};function Ww(s,c){return c?s?function(){return bt(Me(s)?s.call(this,this):s,Me(c)?c.call(this,this):c)}:c:s}function w5(s,c){return mi(gu(s),gu(c))}function gu(s){if(_e(s)){const c={};for(let u=0;u<s.length;u++)c[s[u]]=s[u];return c}return s}function $t(s,c){return s?[...new Set([].concat(s,c))]:c}function mi(s,c){return s?bt(bt(Object.create(null),s),c):c}function _5(s,c){if(!s)return c;if(!c)return s;const u=bt(Object.create(null),s);for(const f in c)u[f]=$t(s[f],c[f]);return u}function A5(s,c,u,f=!1){const g={},k={};ac(k,Rc,1),s.propsDefaults=Object.create(null),zA(s,c,g,k);for(const b in s.propsOptions[0])b in g||(g[b]=void 0);u?s.props=f?g:cA(g):s.type.props?s.props=g:s.props=k,s.attrs=k}function C5(s,c,u,f){const{props:g,attrs:k,vnode:{patchFlag:b}}=s,A=Fe(g),[w]=s.propsOptions;let C=!1;if((f||b>0)&&!(b&16)){if(b&8){const x=s.vnode.dynamicProps;for(let y=0;y<x.length;y++){let D=x[y];if(Mc(s.emitsOptions,D))continue;const I=c[D];if(w)if(qe(k,D))I!==k[D]&&(k[D]=I,C=!0);else{const j=Xt(D);g[j]=pu(w,A,j,I,s,!1)}else I!==k[D]&&(k[D]=I,C=!0)}}}else{zA(s,c,g,k)&&(C=!0);let x;for(const y in A)(!c||!qe(c,y)&&((x=kn(y))===y||!qe(c,x)))&&(w?u&&(u[y]!==void 0||u[x]!==void 0)&&(g[y]=pu(w,A,y,void 0,s,!0)):delete g[y]);if(k!==A)for(const y in k)(!c||!qe(c,y))&&(delete k[y],C=!0)}C&&go(s,"set","$attrs")}function zA(s,c,u,f){const[g,k]=s.propsOptions;let b=!1,A;if(c)for(let w in c){if(us(w))continue;const C=c[w];let x;g&&qe(g,x=Xt(w))?!k||!k.includes(x)?u[x]=C:(A||(A={}))[x]=C:Mc(s.emitsOptions,w)||(!(w in f)||C!==f[w])&&(f[w]=C,b=!0)}if(k){const w=Fe(u),C=A||nt;for(let x=0;x<k.length;x++){const y=k[x];u[y]=pu(g,w,y,C[y],s,!qe(C,y))}}return b}function pu(s,c,u,f,g,k){const b=s[u];if(b!=null){const A=qe(b,"default");if(A&&f===void 0){const w=b.default;if(b.type!==Function&&Me(w)){const{propsDefaults:C}=g;u in C?f=C[u]:(Ho(g),f=C[u]=w.call(null,c),jo())}else f=w}b[0]&&(k&&!A?f=!1:b[1]&&(f===""||f===kn(u))&&(f=!0))}return f}function jA(s,c,u=!1){const f=c.propsCache,g=f.get(s);if(g)return g;const k=s.props,b={},A=[];let w=!1;if(!Me(s)){const x=y=>{w=!0;const[D,I]=jA(y,c,!0);bt(b,D),I&&A.push(...I)};!u&&c.mixins.length&&c.mixins.forEach(x),s.extends&&x(s.extends),s.mixins&&s.mixins.forEach(x)}if(!k&&!w)return ot(s)&&f.set(s,ur),ur;if(_e(k))for(let x=0;x<k.length;x++){const y=Xt(k[x]);Gw(y)&&(b[y]=nt)}else if(k)for(const x in k){const y=Xt(x);if(Gw(y)){const D=k[x],I=b[y]=_e(D)||Me(D)?{type:D}:Object.assign({},D);if(I){const j=Qw(Boolean,I.type),H=Qw(String,I.type);I[0]=j>-1,I[1]=H<0||j<H,(j>-1||qe(I,"default"))&&A.push(y)}}}const C=[b,A];return ot(s)&&f.set(s,C),C}function Gw(s){return s[0]!=="$"}function Kw(s){const c=s&&s.toString().match(/^\s*(function|class) (\w+)/);return c?c[2]:s===null?"null":""}function Yw(s,c){return Kw(s)===Kw(c)}function Qw(s,c){return _e(c)?c.findIndex(u=>Yw(u,s)):Me(c)&&Yw(c,s)?0:-1}const FA=s=>s[0]==="_"||s==="$stable",eh=s=>_e(s)?s.map(sn):[sn(s)],v5=(s,c,u)=>{if(c._n)return c;const f=Xn((...g)=>eh(c(...g)),u);return f._c=!1,f},VA=(s,c,u)=>{const f=s._ctx;for(const g in s){if(FA(g))continue;const k=s[g];if(Me(k))c[g]=v5(g,k,f);else if(k!=null){const b=eh(k);c[g]=()=>b}}},UA=(s,c)=>{const u=eh(c);s.slots.default=()=>u},y5=(s,c)=>{if(s.vnode.shapeFlag&32){const u=c._;u?(s.slots=Fe(c),ac(c,"_",u)):VA(c,s.slots={})}else s.slots={},c&&UA(s,c);ac(s.slots,Rc,1)},x5=(s,c,u)=>{const{vnode:f,slots:g}=s;let k=!0,b=nt;if(f.shapeFlag&32){const A=c._;A?u&&A===1?k=!1:(bt(g,c),!u&&A===1&&delete g._):(k=!c.$stable,VA(c,g)),b=c}else c&&(UA(s,c),b={default:1});if(k)for(const A in g)!FA(A)&&!(A in b)&&delete g[A]};function HA(){return{app:null,config:{isNativeTag:$I,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let E5=0;function D5(s,c){return function(f,g=null){Me(f)||(f=Object.assign({},f)),g!=null&&!ot(g)&&(g=null);const k=HA(),b=new Set;let A=!1;const w=k.app={_uid:E5++,_component:f,_props:g,_container:null,_context:k,_instance:null,version:lC,get config(){return k.config},set config(C){},use(C,...x){return b.has(C)||(C&&Me(C.install)?(b.add(C),C.install(w,...x)):Me(C)&&(b.add(C),C(w,...x))),w},mixin(C){return k.mixins.includes(C)||k.mixins.push(C),w},component(C,x){return x?(k.components[C]=x,w):k.components[C]},directive(C,x){return x?(k.directives[C]=x,w):k.directives[C]},mount(C,x,y){if(!A){const D=Ee(f,g);return D.appContext=k,x&&c?c(D,C):s(D,C,y),A=!0,w._container=C,C.__vue_app__=w,zc(D.component)||D.component.proxy}},unmount(){A&&(s(null,w._container),delete w._container.__vue_app__)},provide(C,x){return k.provides[C]=x,w}};return w}}function fc(s,c,u,f,g=!1){if(_e(s)){s.forEach((D,I)=>fc(D,c&&(_e(c)?c[I]:c),u,f,g));return}if(vi(f)&&!g)return;const k=f.shapeFlag&4?zc(f.component)||f.component.proxy:f.el,b=g?null:k,{i:A,r:w}=s,C=c&&c.r,x=A.refs===nt?A.refs={}:A.refs,y=A.setupState;if(C!=null&&C!==w&&(lt(C)?(x[C]=null,qe(y,C)&&(y[C]=null)):Nt(C)&&(C.value=null)),Me(w))ho(w,A,12,[b,x]);else{const D=lt(w),I=Nt(w);if(D||I){const j=()=>{if(s.f){const H=D?qe(y,w)?y[w]:x[w]:w.value;g?_e(H)&&Bu(H,k):_e(H)?H.includes(k)||H.push(k):D?(x[w]=[k],qe(y,w)&&(y[w]=x[w])):(w.value=[k],s.k&&(x[s.k]=w.value))}else D?(x[w]=b,qe(y,w)&&(y[w]=b)):I&&(w.value=b,s.k&&(x[s.k]=b))};b?(j.id=-1,Lt(j,u)):j()}}}let Mo=!1;const Ya=s=>/svg/.test(s.namespaceURI)&&s.tagName!=="foreignObject",Qa=s=>s.nodeType===8;function T5(s){const{mt:c,p:u,o:{patchProp:f,createText:g,nextSibling:k,parentNode:b,remove:A,insert:w,createComment:C}}=s,x=(F,O)=>{if(!O.hasChildNodes()){u(null,F,O),uc(),O._vnode=F;return}Mo=!1,y(O.firstChild,F,null,null,null),uc(),O._vnode=F,Mo&&console.error("Hydration completed but contains mismatches.")},y=(F,O,V,G,oe,ge=!1)=>{const Q=Qa(F)&&F.data==="[",q=()=>H(F,O,V,G,oe,Q),{type:S,ref:Z,shapeFlag:me,patchFlag:se}=O;let we=F.nodeType;O.el=F,se===-2&&(ge=!1,O.dynamicChildren=null);let ke=null;switch(S){case Di:we!==3?O.children===""?(w(O.el=g(""),b(F),F),ke=F):ke=q():(F.data!==O.children&&(Mo=!0,F.data=O.children),ke=k(F));break;case Ft:we!==8||Q?ke=q():ke=k(F);break;case yi:if(Q&&(F=k(F),we=F.nodeType),we===1||we===3){ke=F;const Ye=!O.children.length;for(let De=0;De<O.staticCount;De++)Ye&&(O.children+=ke.nodeType===1?ke.outerHTML:ke.data),De===O.staticCount-1&&(O.anchor=ke),ke=k(ke);return Q?k(ke):ke}else q();break;case xt:Q?ke=j(F,O,V,G,oe,ge):ke=q();break;default:if(me&1)we!==1||O.type.toLowerCase()!==F.tagName.toLowerCase()?ke=q():ke=D(F,O,V,G,oe,ge);else if(me&6){O.slotScopeIds=oe;const Ye=b(F);if(c(O,Ye,null,V,G,Ya(Ye),ge),ke=Q?ee(F):k(F),ke&&Qa(ke)&&ke.data==="teleport end"&&(ke=k(ke)),vi(O)){let De;Q?(De=Ee(xt),De.anchor=ke?ke.previousSibling:Ye.lastChild):De=F.nodeType===3?to(""):Ee("div"),De.el=F,O.component.subTree=De}}else me&64?we!==8?ke=q():ke=O.type.hydrate(F,O,V,G,oe,ge,s,I):me&128&&(ke=O.type.hydrate(F,O,V,G,Ya(b(F)),oe,ge,s,y))}return Z!=null&&fc(Z,null,G,O),ke},D=(F,O,V,G,oe,ge)=>{ge=ge||!!O.dynamicChildren;const{type:Q,props:q,patchFlag:S,shapeFlag:Z,dirs:me}=O,se=Q==="input"&&me||Q==="option";if(se||S!==-1){if(me&&Yn(O,null,V,"created"),q)if(se||!ge||S&48)for(const ke in q)(se&&ke.endsWith("value")||Is(ke)&&!us(ke))&&f(F,ke,null,q[ke],!1,void 0,V);else q.onClick&&f(F,"onClick",null,q.onClick,!1,void 0,V);let we;if((we=q&&q.onVnodeBeforeMount)&&Zt(we,V,O),me&&Yn(O,null,V,"beforeMount"),((we=q&&q.onVnodeMounted)||me)&&wA(()=>{we&&Zt(we,V,O),me&&Yn(O,null,V,"mounted")},G),Z&16&&!(q&&(q.innerHTML||q.textContent))){let ke=I(F.firstChild,O,F,V,G,oe,ge);for(;ke;){Mo=!0;const Ye=ke;ke=ke.nextSibling,A(Ye)}}else Z&8&&F.textContent!==O.children&&(Mo=!0,F.textContent=O.children)}return F.nextSibling},I=(F,O,V,G,oe,ge,Q)=>{Q=Q||!!O.dynamicChildren;const q=O.children,S=q.length;for(let Z=0;Z<S;Z++){const me=Q?q[Z]:q[Z]=sn(q[Z]);if(F)F=y(F,me,G,oe,ge,Q);else{if(me.type===Di&&!me.children)continue;Mo=!0,u(null,me,V,null,G,oe,Ya(V),ge)}}return F},j=(F,O,V,G,oe,ge)=>{const{slotScopeIds:Q}=O;Q&&(oe=oe?oe.concat(Q):Q);const q=b(F),S=I(k(F),O,q,V,G,oe,ge);return S&&Qa(S)&&S.data==="]"?k(O.anchor=S):(Mo=!0,w(O.anchor=C("]"),q,S),S)},H=(F,O,V,G,oe,ge)=>{if(Mo=!0,O.el=null,ge){const S=ee(F);for(;;){const Z=k(F);if(Z&&Z!==S)A(Z);else break}}const Q=k(F),q=b(F);return A(F),u(null,O,q,Q,V,G,Ya(q),oe),Q},ee=F=>{let O=0;for(;F;)if(F=k(F),F&&Qa(F)&&(F.data==="["&&O++,F.data==="]")){if(O===0)return k(F);O--}return F};return[x,y]}const Lt=wA;function $A(s){return WA(s)}function qA(s){return WA(s,T5)}function WA(s,c){const u=ZI();u.__VUE__=!0;const{insert:f,remove:g,patchProp:k,createElement:b,createText:A,createComment:w,setText:C,setElementText:x,parentNode:y,nextSibling:D,setScopeId:I=Nn,insertStaticContent:j}=s,H=(P,L,$,U=null,J=null,le=null,be=!1,ce=null,fe=!!L.dynamicChildren)=>{if(P===L)return;P&&!Sn(P,L)&&(U=ie(P),At(P,J,le,!0),P=null),L.patchFlag===-2&&(fe=!1,L.dynamicChildren=null);const{type:ne,ref:Ae,shapeFlag:pe}=L;switch(ne){case Di:ee(P,L,$,U);break;case Ft:F(P,L,$,U);break;case yi:P==null&&O(L,$,U,be);break;case xt:se(P,L,$,U,J,le,be,ce,fe);break;default:pe&1?oe(P,L,$,U,J,le,be,ce,fe):pe&6?we(P,L,$,U,J,le,be,ce,fe):(pe&64||pe&128)&&ne.process(P,L,$,U,J,le,be,ce,fe,Te)}Ae!=null&&J&&fc(Ae,P&&P.ref,le,L||P,!L)},ee=(P,L,$,U)=>{if(P==null)f(L.el=A(L.children),$,U);else{const J=L.el=P.el;L.children!==P.children&&C(J,L.children)}},F=(P,L,$,U)=>{P==null?f(L.el=w(L.children||""),$,U):L.el=P.el},O=(P,L,$,U)=>{[P.el,P.anchor]=j(P.children,L,$,U,P.el,P.anchor)},V=({el:P,anchor:L},$,U)=>{let J;for(;P&&P!==L;)J=D(P),f(P,$,U),P=J;f(L,$,U)},G=({el:P,anchor:L})=>{let $;for(;P&&P!==L;)$=D(P),g(P),P=$;g(L)},oe=(P,L,$,U,J,le,be,ce,fe)=>{be=be||L.type==="svg",P==null?ge(L,$,U,J,le,be,ce,fe):S(P,L,J,le,be,ce,fe)},ge=(P,L,$,U,J,le,be,ce)=>{let fe,ne;const{type:Ae,props:pe,shapeFlag:he,transition:Ce,dirs:Ie}=P;if(fe=P.el=b(P.type,le,pe&&pe.is,pe),he&8?x(fe,P.children):he&16&&q(P.children,fe,null,U,J,le&&Ae!=="foreignObject",be,ce),Ie&&Yn(P,null,U,"created"),Q(fe,P,P.scopeId,be,U),pe){for(const Pe in pe)Pe!=="value"&&!us(Pe)&&k(fe,Pe,null,pe[Pe],le,P.children,U,J,te);"value"in pe&&k(fe,"value",null,pe.value),(ne=pe.onVnodeBeforeMount)&&Zt(ne,U,P)}Ie&&Yn(P,null,U,"beforeMount");const Oe=(!J||J&&!J.pendingBranch)&&Ce&&!Ce.persisted;Oe&&Ce.beforeEnter(fe),f(fe,L,$),((ne=pe&&pe.onVnodeMounted)||Oe||Ie)&&Lt(()=>{ne&&Zt(ne,U,P),Oe&&Ce.enter(fe),Ie&&Yn(P,null,U,"mounted")},J)},Q=(P,L,$,U,J)=>{if($&&I(P,$),U)for(let le=0;le<U.length;le++)I(P,U[le]);if(J){let le=J.subTree;if(L===le){const be=J.vnode;Q(P,be,be.scopeId,be.slotScopeIds,J.parent)}}},q=(P,L,$,U,J,le,be,ce,fe=0)=>{for(let ne=fe;ne<P.length;ne++){const Ae=P[ne]=ce?Lo(P[ne]):sn(P[ne]);H(null,Ae,L,$,U,J,le,be,ce)}},S=(P,L,$,U,J,le,be)=>{const ce=L.el=P.el;let{patchFlag:fe,dynamicChildren:ne,dirs:Ae}=L;fe|=P.patchFlag&16;const pe=P.props||nt,he=L.props||nt;let Ce;$&&gi($,!1),(Ce=he.onVnodeBeforeUpdate)&&Zt(Ce,$,L,P),Ae&&Yn(L,P,$,"beforeUpdate"),$&&gi($,!0);const Ie=J&&L.type!=="foreignObject";if(ne?Z(P.dynamicChildren,ne,ce,$,U,Ie,le):be||Ne(P,L,ce,null,$,U,Ie,le,!1),fe>0){if(fe&16)me(ce,L,pe,he,$,U,J);else if(fe&2&&pe.class!==he.class&&k(ce,"class",null,he.class,J),fe&4&&k(ce,"style",pe.style,he.style,J),fe&8){const Oe=L.dynamicProps;for(let Pe=0;Pe<Oe.length;Pe++){const dt=Oe[Pe],tn=pe[dt],bo=he[dt];(bo!==tn||dt==="value")&&k(ce,dt,tn,bo,J,P.children,$,U,te)}}fe&1&&P.children!==L.children&&x(ce,L.children)}else!be&&ne==null&&me(ce,L,pe,he,$,U,J);((Ce=he.onVnodeUpdated)||Ae)&&Lt(()=>{Ce&&Zt(Ce,$,L,P),Ae&&Yn(L,P,$,"updated")},U)},Z=(P,L,$,U,J,le,be)=>{for(let ce=0;ce<L.length;ce++){const fe=P[ce],ne=L[ce],Ae=fe.el&&(fe.type===xt||!Sn(fe,ne)||fe.shapeFlag&70)?y(fe.el):$;H(fe,ne,Ae,null,U,J,le,be,!0)}},me=(P,L,$,U,J,le,be)=>{if($!==U){if($!==nt)for(const ce in $)!us(ce)&&!(ce in U)&&k(P,ce,$[ce],null,be,L.children,J,le,te);for(const ce in U){if(us(ce))continue;const fe=U[ce],ne=$[ce];fe!==ne&&ce!=="value"&&k(P,ce,ne,fe,be,L.children,J,le,te)}"value"in U&&k(P,"value",$.value,U.value)}},se=(P,L,$,U,J,le,be,ce,fe)=>{const ne=L.el=P?P.el:A(""),Ae=L.anchor=P?P.anchor:A("");let{patchFlag:pe,dynamicChildren:he,slotScopeIds:Ce}=L;Ce&&(ce=ce?ce.concat(Ce):Ce),P==null?(f(ne,$,U),f(Ae,$,U),q(L.children,$,Ae,J,le,be,ce,fe)):pe>0&&pe&64&&he&&P.dynamicChildren?(Z(P.dynamicChildren,he,$,J,le,be,ce),(L.key!=null||J&&L===J.subTree)&&th(P,L,!0)):Ne(P,L,$,Ae,J,le,be,ce,fe)},we=(P,L,$,U,J,le,be,ce,fe)=>{L.slotScopeIds=ce,P==null?L.shapeFlag&512?J.ctx.activate(L,$,U,be,fe):ke(L,$,U,J,le,be,fe):Ye(P,L,fe)},ke=(P,L,$,U,J,le,be)=>{const ce=P.component=eC(P,U,J);if(zs(P)&&(ce.ctx.renderer=Te),nC(ce),ce.asyncDep){if(J&&J.registerDep(ce,De),!P.el){const fe=ce.subTree=Ee(Ft);F(null,fe,L,$)}return}De(ce,P,L,$,J,le,be)},Ye=(P,L,$)=>{const U=L.component=P.component;if(Q2(P,L,$))if(U.asyncDep&&!U.asyncResolved){ze(U,L,$);return}else U.next=L,H2(U.update),U.update();else L.el=P.el,U.vnode=L},De=(P,L,$,U,J,le,be)=>{const ce=()=>{if(P.isMounted){let{next:Ae,bu:pe,u:he,parent:Ce,vnode:Ie}=P,Oe=Ae,Pe;gi(P,!1),Ae?(Ae.el=Ie.el,ze(P,Ae,be)):Ae=Ie,pe&&fr(pe),(Pe=Ae.props&&Ae.props.onVnodeBeforeUpdate)&&Zt(Pe,Ce,Ae,Ie),gi(P,!0);const dt=ec(P),tn=P.subTree;P.subTree=dt,H(tn,dt,y(tn.el),ie(tn),P,J,le),Ae.el=dt.el,Oe===null&&Gu(P,dt.el),he&&Lt(he,J),(Pe=Ae.props&&Ae.props.onVnodeUpdated)&&Lt(()=>Zt(Pe,Ce,Ae,Ie),J)}else{let Ae;const{el:pe,props:he}=L,{bm:Ce,m:Ie,parent:Oe}=P,Pe=vi(L);if(gi(P,!1),Ce&&fr(Ce),!Pe&&(Ae=he&&he.onVnodeBeforeMount)&&Zt(Ae,Oe,L),gi(P,!0),pe&&ye){const dt=()=>{P.subTree=ec(P),ye(pe,P.subTree,P,J,null)};Pe?L.type.__asyncLoader().then(()=>!P.isUnmounted&&dt()):dt()}else{const dt=P.subTree=ec(P);H(null,dt,$,U,P,J,le),L.el=dt.el}if(Ie&&Lt(Ie,J),!Pe&&(Ae=he&&he.onVnodeMounted)){const dt=L;Lt(()=>Zt(Ae,Oe,dt),J)}(L.shapeFlag&256||Oe&&vi(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&P.a&&Lt(P.a,J),P.isMounted=!0,L=$=U=null}},fe=P.effect=new Ps(ce,()=>Sc(ne),P.scope),ne=P.update=()=>fe.run();ne.id=P.uid,gi(P,!0),ne()},ze=(P,L,$)=>{L.component=P;const U=P.vnode.props;P.vnode=L,P.next=null,C5(P,L.props,U,$),x5(P,L.children,$),Dr(),Fw(),Tr()},Ne=(P,L,$,U,J,le,be,ce,fe=!1)=>{const ne=P&&P.children,Ae=P?P.shapeFlag:0,pe=L.children,{patchFlag:he,shapeFlag:Ce}=L;if(he>0){if(he&128){Be(ne,pe,$,U,J,le,be,ce,fe);return}else if(he&256){zt(ne,pe,$,U,J,le,be,ce,fe);return}}Ce&8?(Ae&16&&te(ne,J,le),pe!==ne&&x($,pe)):Ae&16?Ce&16?Be(ne,pe,$,U,J,le,be,ce,fe):te(ne,J,le,!0):(Ae&8&&x($,""),Ce&16&&q(pe,$,U,J,le,be,ce,fe))},zt=(P,L,$,U,J,le,be,ce,fe)=>{P=P||ur,L=L||ur;const ne=P.length,Ae=L.length,pe=Math.min(ne,Ae);let he;for(he=0;he<pe;he++){const Ce=L[he]=fe?Lo(L[he]):sn(L[he]);H(P[he],Ce,$,null,J,le,be,ce,fe)}ne>Ae?te(P,J,le,!0,!1,pe):q(L,$,U,J,le,be,ce,fe,pe)},Be=(P,L,$,U,J,le,be,ce,fe)=>{let ne=0;const Ae=L.length;let pe=P.length-1,he=Ae-1;for(;ne<=pe&&ne<=he;){const Ce=P[ne],Ie=L[ne]=fe?Lo(L[ne]):sn(L[ne]);if(Sn(Ce,Ie))H(Ce,Ie,$,null,J,le,be,ce,fe);else break;ne++}for(;ne<=pe&&ne<=he;){const Ce=P[pe],Ie=L[he]=fe?Lo(L[he]):sn(L[he]);if(Sn(Ce,Ie))H(Ce,Ie,$,null,J,le,be,ce,fe);else break;pe--,he--}if(ne>pe){if(ne<=he){const Ce=he+1,Ie=Ce<Ae?L[Ce].el:U;for(;ne<=he;)H(null,L[ne]=fe?Lo(L[ne]):sn(L[ne]),$,Ie,J,le,be,ce,fe),ne++}}else if(ne>he)for(;ne<=pe;)At(P[ne],J,le,!0),ne++;else{const Ce=ne,Ie=ne,Oe=new Map;for(ne=Ie;ne<=he;ne++){const Vt=L[ne]=fe?Lo(L[ne]):sn(L[ne]);Vt.key!=null&&Oe.set(Vt.key,ne)}let Pe,dt=0;const tn=he-Ie+1;let bo=!1,ko=0;const Go=new Array(tn);for(ne=0;ne<tn;ne++)Go[ne]=0;for(ne=Ce;ne<=pe;ne++){const Vt=P[ne];if(dt>=tn){At(Vt,J,le,!0);continue}let dn;if(Vt.key!=null)dn=Oe.get(Vt.key);else for(Pe=Ie;Pe<=he;Pe++)if(Go[Pe-Ie]===0&&Sn(Vt,L[Pe])){dn=Pe;break}dn===void 0?At(Vt,J,le,!0):(Go[dn-Ie]=ne+1,dn>=ko?ko=dn:bo=!0,H(Vt,L[dn],$,null,J,le,be,ce,fe),dt++)}const Gs=bo?S5(Go):ur;for(Pe=Gs.length-1,ne=tn-1;ne>=0;ne--){const Vt=Ie+ne,dn=L[Vt],Ks=Vt+1<Ae?L[Vt+1].el:U;Go[ne]===0?H(null,dn,$,Ks,J,le,be,ce,fe):bo&&(Pe<0||ne!==Gs[Pe]?Pt(dn,$,Ks,2):Pe--)}}},Pt=(P,L,$,U,J=null)=>{const{el:le,type:be,transition:ce,children:fe,shapeFlag:ne}=P;if(ne&6){Pt(P.component.subTree,L,$,U);return}if(ne&128){P.suspense.move(L,$,U);return}if(ne&64){be.move(P,L,$,Te);return}if(be===xt){f(le,L,$);for(let pe=0;pe<fe.length;pe++)Pt(fe[pe],L,$,U);f(P.anchor,L,$);return}if(be===yi){V(P,L,$);return}if(U!==2&&ne&1&&ce)if(U===0)ce.beforeEnter(le),f(le,L,$),Lt(()=>ce.enter(le),J);else{const{leave:pe,delayLeave:he,afterLeave:Ce}=ce,Ie=()=>f(le,L,$),Oe=()=>{pe(le,()=>{Ie(),Ce&&Ce()})};he?he(le,Ie,Oe):Oe()}else f(le,L,$)},At=(P,L,$,U=!1,J=!1)=>{const{type:le,props:be,ref:ce,children:fe,dynamicChildren:ne,shapeFlag:Ae,patchFlag:pe,dirs:he}=P;if(ce!=null&&fc(ce,null,$,P,!0),Ae&256){L.ctx.deactivate(P);return}const Ce=Ae&1&&he,Ie=!vi(P);let Oe;if(Ie&&(Oe=be&&be.onVnodeBeforeUnmount)&&Zt(Oe,L,P),Ae&6)z(P.component,$,U);else{if(Ae&128){P.suspense.unmount($,U);return}Ce&&Yn(P,null,L,"beforeUnmount"),Ae&64?P.type.remove(P,L,$,J,Te,U):ne&&(le!==xt||pe>0&&pe&64)?te(ne,L,$,!1,!0):(le===xt&&pe&384||!J&&Ae&16)&&te(fe,L,$),U&&_n(P)}(Ie&&(Oe=be&&be.onVnodeUnmounted)||Ce)&&Lt(()=>{Oe&&Zt(Oe,L,P),Ce&&Yn(P,null,L,"unmounted")},$)},_n=P=>{const{type:L,el:$,anchor:U,transition:J}=P;if(L===xt){Ln($,U);return}if(L===yi){G(P);return}const le=()=>{g($),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(P.shapeFlag&1&&J&&!J.persisted){const{leave:be,delayLeave:ce}=J,fe=()=>be($,le);ce?ce(P.el,le,fe):fe()}else le()},Ln=(P,L)=>{let $;for(;P!==L;)$=D(P),g(P),P=$;g(L)},z=(P,L,$)=>{const{bum:U,scope:J,update:le,subTree:be,um:ce}=P;U&&fr(U),J.stop(),le&&(le.active=!1,At(be,P,L,$)),ce&&Lt(ce,L),Lt(()=>{P.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},te=(P,L,$,U=!1,J=!1,le=0)=>{for(let be=le;be<P.length;be++)At(P[be],L,$,U,J)},ie=P=>P.shapeFlag&6?ie(P.component.subTree):P.shapeFlag&128?P.suspense.next():D(P.anchor||P.el),ae=(P,L,$)=>{P==null?L._vnode&&At(L._vnode,null,null,!0):H(L._vnode||null,P,L,null,null,null,$),Fw(),uc(),L._vnode=P},Te={p:H,um:At,m:Pt,r:_n,mt:ke,mc:q,pc:Ne,pbc:Z,n:ie,o:s};let Ve,ye;return c&&([Ve,ye]=c(Te)),{render:ae,hydrate:Ve,createApp:D5(ae,Ve)}}function gi({effect:s,update:c},u){s.allowRecurse=c.allowRecurse=u}function th(s,c,u=!1){const f=s.children,g=c.children;if(_e(f)&&_e(g))for(let k=0;k<f.length;k++){const b=f[k];let A=g[k];A.shapeFlag&1&&!A.dynamicChildren&&((A.patchFlag<=0||A.patchFlag===32)&&(A=g[k]=Lo(g[k]),A.el=b.el),u||th(b,A)),A.type===Di&&(A.el=b.el)}}function S5(s){const c=s.slice(),u=[0];let f,g,k,b,A;const w=s.length;for(f=0;f<w;f++){const C=s[f];if(C!==0){if(g=u[u.length-1],s[g]<C){c[f]=g,u.push(f);continue}for(k=0,b=u.length-1;k<b;)A=k+b>>1,s[u[A]]<C?k=A+1:b=A;C<s[u[k]]&&(k>0&&(c[f]=u[k-1]),u[k]=f)}}for(k=u.length,b=u[k-1];k-- >0;)u[k]=b,b=c[b];return u}const M5=s=>s.__isTeleport,ps=s=>s&&(s.disabled||s.disabled===""),Zw=s=>typeof SVGElement<"u"&&s instanceof SVGElement,mu=(s,c)=>{const u=s&&s.to;return lt(u)?c?c(u):null:u},I5={__isTeleport:!0,process(s,c,u,f,g,k,b,A,w,C){const{mc:x,pc:y,pbc:D,o:{insert:I,querySelector:j,createText:H,createComment:ee}}=C,F=ps(c.props);let{shapeFlag:O,children:V,dynamicChildren:G}=c;if(s==null){const oe=c.el=H(""),ge=c.anchor=H("");I(oe,u,f),I(ge,u,f);const Q=c.target=mu(c.props,j),q=c.targetAnchor=H("");Q&&(I(q,Q),b=b||Zw(Q));const S=(Z,me)=>{O&16&&x(V,Z,me,g,k,b,A,w)};F?S(u,ge):Q&&S(Q,q)}else{c.el=s.el;const oe=c.anchor=s.anchor,ge=c.target=s.target,Q=c.targetAnchor=s.targetAnchor,q=ps(s.props),S=q?u:ge,Z=q?oe:Q;if(b=b||Zw(ge),G?(D(s.dynamicChildren,G,S,g,k,b,A),th(s,c,!0)):w||y(s,c,S,Z,g,k,b,A,!1),F)q||Za(c,u,oe,C,1);else if((c.props&&c.props.to)!==(s.props&&s.props.to)){const me=c.target=mu(c.props,j);me&&Za(c,me,null,C,0)}else q&&Za(c,ge,Q,C,1)}GA(c)},remove(s,c,u,f,{um:g,o:{remove:k}},b){const{shapeFlag:A,children:w,anchor:C,targetAnchor:x,target:y,props:D}=s;if(y&&k(x),(b||!ps(D))&&(k(C),A&16))for(let I=0;I<w.length;I++){const j=w[I];g(j,c,u,!0,!!j.dynamicChildren)}},move:Za,hydrate:N5};function Za(s,c,u,{o:{insert:f},m:g},k=2){k===0&&f(s.targetAnchor,c,u);const{el:b,anchor:A,shapeFlag:w,children:C,props:x}=s,y=k===2;if(y&&f(b,c,u),(!y||ps(x))&&w&16)for(let D=0;D<C.length;D++)g(C[D],c,u,2);y&&f(A,c,u)}function N5(s,c,u,f,g,k,{o:{nextSibling:b,parentNode:A,querySelector:w}},C){const x=c.target=mu(c.props,w);if(x){const y=x._lpa||x.firstChild;if(c.shapeFlag&16)if(ps(c.props))c.anchor=C(b(s),c,A(s),u,f,g,k),c.targetAnchor=y;else{c.anchor=b(s);let D=y;for(;D;)if(D=b(D),D&&D.nodeType===8&&D.data==="teleport anchor"){c.targetAnchor=D,x._lpa=c.targetAnchor&&b(c.targetAnchor);break}C(y,c,x,u,f,g,k)}GA(c)}return c.anchor&&b(c.anchor)}const P5=I5;function GA(s){const c=s.ctx;if(c&&c.ut){let u=s.children[0].el;for(;u!==s.targetAnchor;)u.nodeType===1&&u.setAttribute("data-v-owner",c.uid),u=u.nextSibling;c.ut()}}const xt=Symbol(void 0),Di=Symbol(void 0),Ft=Symbol(void 0),yi=Symbol(void 0),ms=[];let Jt=null;function vt(s=!1){ms.push(Jt=s?null:[])}function KA(){ms.pop(),Jt=ms[ms.length-1]||null}let Ti=1;function bu(s){Ti+=s}function YA(s){return s.dynamicChildren=Ti>0?Jt||ur:null,KA(),Ti>0&&Jt&&Jt.push(s),s}function Gt(s,c,u,f,g,k){return YA(N(s,c,u,f,g,k,!0))}function Ds(s,c,u,f,g){return YA(Ee(s,c,u,f,g,!0))}function Uo(s){return s?s.__v_isVNode===!0:!1}function Sn(s,c){return s.type===c.type&&s.key===c.key}function B5(s){}const Rc="__vInternal",QA=({key:s})=>s??null,tc=({ref:s,ref_key:c,ref_for:u})=>s!=null?lt(s)||Nt(s)||Me(s)?{i:Rt,r:s,k:c,f:!!u}:s:null;function N(s,c=null,u=null,f=0,g=null,k=s===xt?0:1,b=!1,A=!1){const w={__v_isVNode:!0,__v_skip:!0,type:s,props:c,key:c&&QA(c),ref:c&&tc(c),scopeId:Ic,slotScopeIds:null,children:u,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:k,patchFlag:f,dynamicProps:g,dynamicChildren:null,appContext:null,ctx:Rt};return A?(nh(w,u),k&128&&s.normalize(w)):u&&(w.shapeFlag|=lt(u)?8:16),Ti>0&&!b&&Jt&&(w.patchFlag>0||k&6)&&w.patchFlag!==32&&Jt.push(w),w}const Ee=O5;function O5(s,c=null,u=null,f=0,g=null,k=!1){if((!s||s===NA)&&(s=Ft),Uo(s)){const A=eo(s,c,!0);return u&&nh(A,u),Ti>0&&!k&&Jt&&(A.shapeFlag&6?Jt[Jt.indexOf(s)]=A:Jt.push(A)),A.patchFlag|=-2,A}if(H5(s)&&(s=s.__vccOpts),c){c=ZA(c);let{class:A,style:w}=c;A&&!lt(A)&&(c.class=In(A)),ot(w)&&(Vu(w)&&!_e(w)&&(w=bt({},w)),c.style=Ms(w))}const b=lt(s)?1:kA(s)?128:M5(s)?64:ot(s)?4:Me(s)?2:0;return N(s,c,u,f,g,b,k,!0)}function ZA(s){return s?Vu(s)||Rc in s?bt({},s):s:null}function eo(s,c,u=!1){const{props:f,ref:g,patchFlag:k,children:b}=s,A=c?XA(f||{},c):f;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:A,key:A&&QA(A),ref:c&&c.ref?u&&g?_e(g)?g.concat(tc(c)):[g,tc(c)]:tc(c):g,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:b,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:c&&s.type!==xt?k===-1?16:k|16:k,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&eo(s.ssContent),ssFallback:s.ssFallback&&eo(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function to(s=" ",c=0){return Ee(Di,null,s,c)}function JA(s,c){const u=Ee(yi,null,s);return u.staticCount=c,u}function L5(s="",c=!1){return c?(vt(),Ds(Ft,null,s)):Ee(Ft,null,s)}function sn(s){return s==null||typeof s=="boolean"?Ee(Ft):_e(s)?Ee(xt,null,s.slice()):typeof s=="object"?Lo(s):Ee(Di,null,String(s))}function Lo(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:eo(s)}function nh(s,c){let u=0;const{shapeFlag:f}=s;if(c==null)c=null;else if(_e(c))u=16;else if(typeof c=="object")if(f&65){const g=c.default;g&&(g._c&&(g._d=!1),nh(s,g()),g._c&&(g._d=!0));return}else{u=32;const g=c._;!g&&!(Rc in c)?c._ctx=Rt:g===3&&Rt&&(Rt.slots._===1?c._=1:(c._=2,s.patchFlag|=1024))}else Me(c)?(c={default:c,_ctx:Rt},u=32):(c=String(c),f&64?(u=16,c=[to(c)]):u=8);s.children=c,s.shapeFlag|=u}function XA(...s){const c={};for(let u=0;u<s.length;u++){const f=s[u];for(const g in f)if(g==="class")c.class!==f.class&&(c.class=In([c.class,f.class]));else if(g==="style")c.style=Ms([c.style,f.style]);else if(Is(g)){const k=c[g],b=f[g];b&&k!==b&&!(_e(k)&&k.includes(b))&&(c[g]=k?[].concat(k,b):b)}else g!==""&&(c[g]=f[g])}return c}function Zt(s,c,u,f=null){ln(s,c,7,[u,f])}const R5=HA();let z5=0;function eC(s,c,u){const f=s.type,g=(c?c.appContext:s.appContext)||R5,k={uid:z5++,vnode:s,type:f,parent:c,appContext:g,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(g.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jA(f,g),emitsOptions:bA(f,g),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:f.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:u,suspenseId:u?u.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return k.ctx={_:k},k.root=c?c.root:k,k.emit=q2.bind(null,k),s.ce&&s.ce(k),k}let mt=null;const Wo=()=>mt||Rt,Ho=s=>{mt=s,s.scope.on()},jo=()=>{mt&&mt.scope.off(),mt=null};function tC(s){return s.vnode.shapeFlag&4}let Ar=!1;function nC(s,c=!1){Ar=c;const{props:u,children:f}=s.vnode,g=tC(s);A5(s,u,g,c),y5(s,f);const k=g?j5(s,c):void 0;return Ar=!1,k}function j5(s,c){const u=s.type;s.accessCache=Object.create(null),s.proxy=Ec(new Proxy(s.ctx,hu));const{setup:f}=u;if(f){const g=s.setupContext=f.length>1?iC(s):null;Ho(s),Dr();const k=ho(f,s,0,[s.props,g]);if(Tr(),jo(),Ou(k)){if(k.then(jo,jo),c)return k.then(b=>{ku(s,b,c)}).catch(b=>{Mi(b,s,0)});s.asyncDep=k}else ku(s,k,c)}else oC(s,c)}function ku(s,c,u){Me(c)?s.type.__ssrInlineRender?s.ssrRender=c:s.render=c:ot(c)&&(s.setupState=$u(c)),oC(s,u)}let gc,wu;function F5(s){gc=s,wu=c=>{c.render._rc&&(c.withProxy=new Proxy(c.ctx,p5))}}const V5=()=>!gc;function oC(s,c,u){const f=s.type;if(!s.render){if(!c&&gc&&!f.render){const g=f.template||Xu(s).template;if(g){const{isCustomElement:k,compilerOptions:b}=s.appContext.config,{delimiters:A,compilerOptions:w}=f,C=bt(bt({isCustomElement:k,delimiters:A},b),w);f.render=gc(g,C)}}s.render=f.render||Nn,wu&&wu(s)}Ho(s),Dr(),m5(s),Tr(),jo()}function U5(s){return new Proxy(s.attrs,{get(c,u){return en(s,"get","$attrs"),c[u]}})}function iC(s){const c=f=>{s.exposed=f||{}};let u;return{get attrs(){return u||(u=U5(s))},slots:s.slots,emit:s.emit,expose:c}}function zc(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy($u(Ec(s.exposed)),{get(c,u){if(u in c)return c[u];if(u in gs)return gs[u](s)},has(c,u){return u in c||u in gs}}))}function _u(s,c=!0){return Me(s)?s.displayName||s.name:s.name||c&&s.__name}function H5(s){return Me(s)&&"__vccOpts"in s}const an=(s,c)=>z2(s,c,Ar);function $5(){return null}function q5(){return null}function W5(s){}function G5(s,c){return null}function K5(){return rC().slots}function Y5(){return rC().attrs}function rC(){const s=Wo();return s.setupContext||(s.setupContext=iC(s))}function Q5(s,c){const u=_e(s)?s.reduce((f,g)=>(f[g]={},f),{}):s;for(const f in c){const g=u[f];g?_e(g)||Me(g)?u[f]={type:g,default:c[f]}:g.default=c[f]:g===null&&(u[f]={default:c[f]})}return u}function Z5(s,c){const u={};for(const f in s)c.includes(f)||Object.defineProperty(u,f,{enumerable:!0,get:()=>s[f]});return u}function J5(s){const c=Wo();let u=s();return jo(),Ou(u)&&(u=u.catch(f=>{throw Ho(c),f})),[u,()=>Ho(c)]}function jc(s,c,u){const f=arguments.length;return f===2?ot(c)&&!_e(c)?Uo(c)?Ee(s,null,[c]):Ee(s,c):Ee(s,null,c):(f>3?u=Array.prototype.slice.call(arguments,2):f===3&&Uo(u)&&(u=[u]),Ee(s,c,u))}const sC=Symbol(""),aC=()=>Pn(sC);function X5(){}function eN(s,c,u,f){const g=u[f];if(g&&cC(g,s))return g;const k=c();return k.memo=s.slice(),u[f]=k}function cC(s,c){const u=s.memo;if(u.length!=c.length)return!1;for(let f=0;f<u.length;f++)if(wr(u[f],c[f]))return!1;return Ti>0&&Jt&&Jt.push(s),!0}const lC="3.2.47",tN={createComponentInstance:eC,setupComponent:nC,renderComponentRoot:ec,setCurrentRenderingInstance:xs,isVNode:Uo,normalizeVNode:sn},nN=tN,oN=null,iN=null,rN="http://www.w3.org/2000/svg",ki=typeof document<"u"?document:null,Jw=ki&&ki.createElement("template"),sN={insert:(s,c,u)=>{c.insertBefore(s,u||null)},remove:s=>{const c=s.parentNode;c&&c.removeChild(s)},createElement:(s,c,u,f)=>{const g=c?ki.createElementNS(rN,s):ki.createElement(s,u?{is:u}:void 0);return s==="select"&&f&&f.multiple!=null&&g.setAttribute("multiple",f.multiple),g},createText:s=>ki.createTextNode(s),createComment:s=>ki.createComment(s),setText:(s,c)=>{s.nodeValue=c},setElementText:(s,c)=>{s.textContent=c},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>ki.querySelector(s),setScopeId(s,c){s.setAttribute(c,"")},insertStaticContent(s,c,u,f,g,k){const b=u?u.previousSibling:c.lastChild;if(g&&(g===k||g.nextSibling))for(;c.insertBefore(g.cloneNode(!0),u),!(g===k||!(g=g.nextSibling)););else{Jw.innerHTML=f?`<svg>${s}</svg>`:s;const A=Jw.content;if(f){const w=A.firstChild;for(;w.firstChild;)A.appendChild(w.firstChild);A.removeChild(w)}c.insertBefore(A,u)}return[b?b.nextSibling:c.firstChild,u?u.previousSibling:c.lastChild]}};function aN(s,c,u){const f=s._vtc;f&&(c=(c?[c,...f]:[...f]).join(" ")),c==null?s.removeAttribute("class"):u?s.setAttribute("class",c):s.className=c}function cN(s,c,u){const f=s.style,g=lt(u);if(u&&!g){if(c&&!lt(c))for(const k in c)u[k]==null&&Au(f,k,"");for(const k in u)Au(f,k,u[k])}else{const k=f.display;g?c!==u&&(f.cssText=u):c&&s.removeAttribute("style"),"_vod"in s&&(f.display=k)}}const Xw=/\s*!important$/;function Au(s,c,u){if(_e(u))u.forEach(f=>Au(s,c,f));else if(u==null&&(u=""),c.startsWith("--"))s.setProperty(c,u);else{const f=lN(s,c);Xw.test(u)?s.setProperty(kn(f),u.replace(Xw,""),"important"):s[f]=u}}const e_=["Webkit","Moz","ms"],Zd={};function lN(s,c){const u=Zd[c];if(u)return u;let f=Xt(c);if(f!=="filter"&&f in s)return Zd[c]=f;f=Ns(f);for(let g=0;g<e_.length;g++){const k=e_[g]+f;if(k in s)return Zd[c]=k}return c}const t_="http://www.w3.org/1999/xlink";function dN(s,c,u,f,g){if(f&&c.startsWith("xlink:"))u==null?s.removeAttributeNS(t_,c.slice(6,c.length)):s.setAttributeNS(t_,c,u);else{const k=UI(c);u==null||k&&!H_(u)?s.removeAttribute(c):s.setAttribute(c,k?"":u)}}function uN(s,c,u,f,g,k,b){if(c==="innerHTML"||c==="textContent"){f&&b(f,g,k),s[c]=u??"";return}if(c==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=u;const w=u??"";(s.value!==w||s.tagName==="OPTION")&&(s.value=w),u==null&&s.removeAttribute(c);return}let A=!1;if(u===""||u==null){const w=typeof s[c];w==="boolean"?u=H_(u):u==null&&w==="string"?(u="",A=!0):w==="number"&&(u=0,A=!0)}try{s[c]=u}catch{}A&&s.removeAttribute(c)}function uo(s,c,u,f){s.addEventListener(c,u,f)}function hN(s,c,u,f){s.removeEventListener(c,u,f)}function fN(s,c,u,f,g=null){const k=s._vei||(s._vei={}),b=k[c];if(f&&b)b.value=f;else{const[A,w]=gN(c);if(f){const C=k[c]=bN(f,g);uo(s,A,C,w)}else b&&(hN(s,A,b,w),k[c]=void 0)}}const n_=/(?:Once|Passive|Capture)$/;function gN(s){let c;if(n_.test(s)){c={};let f;for(;f=s.match(n_);)s=s.slice(0,s.length-f[0].length),c[f[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):kn(s.slice(2)),c]}let Jd=0;const pN=Promise.resolve(),mN=()=>Jd||(pN.then(()=>Jd=0),Jd=Date.now());function bN(s,c){const u=f=>{if(!f._vts)f._vts=Date.now();else if(f._vts<=u.attached)return;ln(kN(f,u.value),c,5,[f])};return u.value=s,u.attached=mN(),u}function kN(s,c){if(_e(c)){const u=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{u.call(s),s._stopped=!0},c.map(f=>g=>!g._stopped&&f&&f(g))}else return c}const o_=/^on[a-z]/,wN=(s,c,u,f,g=!1,k,b,A,w)=>{c==="class"?aN(s,f,g):c==="style"?cN(s,u,f):Is(c)?Pu(c)||fN(s,c,u,f,b):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):_N(s,c,f,g))?uN(s,c,f,k,b,A,w):(c==="true-value"?s._trueValue=f:c==="false-value"&&(s._falseValue=f),dN(s,c,f,g))};function _N(s,c,u,f){return f?!!(c==="innerHTML"||c==="textContent"||c in s&&o_.test(c)&&Me(u)):c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&s.tagName==="INPUT"||c==="type"&&s.tagName==="TEXTAREA"||o_.test(c)&&lt(u)?!1:c in s}function dC(s,c){const u=Rs(s);class f extends Fc{constructor(k){super(u,k,c)}}return f.def=u,f}const AN=s=>dC(s,xC),CN=typeof HTMLElement<"u"?HTMLElement:class{};class Fc extends CN{constructor(c,u={},f){super(),this._def=c,this._props=u,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&f?f(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Tc(()=>{this._connected||(yu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let f=0;f<this.attributes.length;f++)this._setAttr(this.attributes[f].name);new MutationObserver(f=>{for(const g of f)this._setAttr(g.attributeName)}).observe(this,{attributes:!0});const c=(f,g=!1)=>{const{props:k,styles:b}=f;let A;if(k&&!_e(k))for(const w in k){const C=k[w];(C===Number||C&&C.type===Number)&&(w in this._props&&(this._props[w]=lc(this._props[w])),(A||(A=Object.create(null)))[Xt(w)]=!0)}this._numberProps=A,g&&this._resolveProps(f),this._applyStyles(b),this._update()},u=this._def.__asyncLoader;u?u().then(f=>c(f,!0)):c(this._def)}_resolveProps(c){const{props:u}=c,f=_e(u)?u:Object.keys(u||{});for(const g of Object.keys(this))g[0]!=="_"&&f.includes(g)&&this._setProp(g,this[g],!0,!1);for(const g of f.map(Xt))Object.defineProperty(this,g,{get(){return this._getProp(g)},set(k){this._setProp(g,k)}})}_setAttr(c){let u=this.getAttribute(c);const f=Xt(c);this._numberProps&&this._numberProps[f]&&(u=lc(u)),this._setProp(f,u,!1)}_getProp(c){return this._props[c]}_setProp(c,u,f=!0,g=!0){u!==this._props[c]&&(this._props[c]=u,g&&this._instance&&this._update(),f&&(u===!0?this.setAttribute(kn(c),""):typeof u=="string"||typeof u=="number"?this.setAttribute(kn(c),u+""):u||this.removeAttribute(kn(c))))}_update(){yu(this._createVNode(),this.shadowRoot)}_createVNode(){const c=Ee(this._def,bt({},this._props));return this._instance||(c.ce=u=>{this._instance=u,u.isCE=!0;const f=(k,b)=>{this.dispatchEvent(new CustomEvent(k,{detail:b}))};u.emit=(k,...b)=>{f(k,b),kn(k)!==k&&f(kn(k),b)};let g=this;for(;g=g&&(g.parentNode||g.host);)if(g instanceof Fc){u.parent=g._instance,u.provides=g._instance.provides;break}}),c}_applyStyles(c){c&&c.forEach(u=>{const f=document.createElement("style");f.textContent=u,this.shadowRoot.appendChild(f)})}}function vN(s="$style"){{const c=Wo();if(!c)return nt;const u=c.type.__cssModules;if(!u)return nt;const f=u[s];return f||nt}}function yN(s){const c=Wo();if(!c)return;const u=c.ut=(g=s(c.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${c.uid}"]`)).forEach(k=>vu(k,g))},f=()=>{const g=s(c.proxy);Cu(c.subTree,g),u(g)};_A(f),js(()=>{const g=new MutationObserver(f);g.observe(c.subTree.el.parentNode,{childList:!0}),Lc(()=>g.disconnect())})}function Cu(s,c){if(s.shapeFlag&128){const u=s.suspense;s=u.activeBranch,u.pendingBranch&&!u.isHydrating&&u.effects.push(()=>{Cu(u.activeBranch,c)})}for(;s.component;)s=s.component.subTree;if(s.shapeFlag&1&&s.el)vu(s.el,c);else if(s.type===xt)s.children.forEach(u=>Cu(u,c));else if(s.type===yi){let{el:u,anchor:f}=s;for(;u&&(vu(u,c),u!==f);)u=u.nextSibling}}function vu(s,c){if(s.nodeType===1){const u=s.style;for(const f in c)u.setProperty(`--${f}`,c[f])}}const Io="transition",is="animation",oh=(s,{slots:c})=>jc(Qu,hC(s),c);oh.displayName="Transition";const uC={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xN=oh.props=bt({},Qu.props,uC),pi=(s,c=[])=>{_e(s)?s.forEach(u=>u(...c)):s&&s(...c)},i_=s=>s?_e(s)?s.some(c=>c.length>1):s.length>1:!1;function hC(s){const c={};for(const se in s)se in uC||(c[se]=s[se]);if(s.css===!1)return c;const{name:u="v",type:f,duration:g,enterFromClass:k=`${u}-enter-from`,enterActiveClass:b=`${u}-enter-active`,enterToClass:A=`${u}-enter-to`,appearFromClass:w=k,appearActiveClass:C=b,appearToClass:x=A,leaveFromClass:y=`${u}-leave-from`,leaveActiveClass:D=`${u}-leave-active`,leaveToClass:I=`${u}-leave-to`}=s,j=EN(g),H=j&&j[0],ee=j&&j[1],{onBeforeEnter:F,onEnter:O,onEnterCancelled:V,onLeave:G,onLeaveCancelled:oe,onBeforeAppear:ge=F,onAppear:Q=O,onAppearCancelled:q=V}=c,S=(se,we,ke)=>{Bo(se,we?x:A),Bo(se,we?C:b),ke&&ke()},Z=(se,we)=>{se._isLeaving=!1,Bo(se,y),Bo(se,I),Bo(se,D),we&&we()},me=se=>(we,ke)=>{const Ye=se?Q:O,De=()=>S(we,se,ke);pi(Ye,[we,De]),r_(()=>{Bo(we,se?w:k),co(we,se?x:A),i_(Ye)||s_(we,f,H,De)})};return bt(c,{onBeforeEnter(se){pi(F,[se]),co(se,k),co(se,b)},onBeforeAppear(se){pi(ge,[se]),co(se,w),co(se,C)},onEnter:me(!1),onAppear:me(!0),onLeave(se,we){se._isLeaving=!0;const ke=()=>Z(se,we);co(se,y),gC(),co(se,D),r_(()=>{se._isLeaving&&(Bo(se,y),co(se,I),i_(G)||s_(se,f,ee,ke))}),pi(G,[se,ke])},onEnterCancelled(se){S(se,!1),pi(V,[se])},onAppearCancelled(se){S(se,!0),pi(q,[se])},onLeaveCancelled(se){Z(se),pi(oe,[se])}})}function EN(s){if(s==null)return null;if(ot(s))return[Xd(s.enter),Xd(s.leave)];{const c=Xd(s);return[c,c]}}function Xd(s){return lc(s)}function co(s,c){c.split(/\s+/).forEach(u=>u&&s.classList.add(u)),(s._vtc||(s._vtc=new Set)).add(c)}function Bo(s,c){c.split(/\s+/).forEach(f=>f&&s.classList.remove(f));const{_vtc:u}=s;u&&(u.delete(c),u.size||(s._vtc=void 0))}function r_(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let DN=0;function s_(s,c,u,f){const g=s._endId=++DN,k=()=>{g===s._endId&&f()};if(u)return setTimeout(k,u);const{type:b,timeout:A,propCount:w}=fC(s,c);if(!b)return f();const C=b+"end";let x=0;const y=()=>{s.removeEventListener(C,D),k()},D=I=>{I.target===s&&++x>=w&&y()};setTimeout(()=>{x<w&&y()},A+1),s.addEventListener(C,D)}function fC(s,c){const u=window.getComputedStyle(s),f=j=>(u[j]||"").split(", "),g=f(`${Io}Delay`),k=f(`${Io}Duration`),b=a_(g,k),A=f(`${is}Delay`),w=f(`${is}Duration`),C=a_(A,w);let x=null,y=0,D=0;c===Io?b>0&&(x=Io,y=b,D=k.length):c===is?C>0&&(x=is,y=C,D=w.length):(y=Math.max(b,C),x=y>0?b>C?Io:is:null,D=x?x===Io?k.length:w.length:0);const I=x===Io&&/\b(transform|all)(,|$)/.test(f(`${Io}Property`).toString());return{type:x,timeout:y,propCount:D,hasTransform:I}}function a_(s,c){for(;s.length<c.length;)s=s.concat(s);return Math.max(...c.map((u,f)=>c_(u)+c_(s[f])))}function c_(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function gC(){return document.body.offsetHeight}const pC=new WeakMap,mC=new WeakMap,bC={name:"TransitionGroup",props:bt({},xN,{tag:String,moveClass:String}),setup(s,{slots:c}){const u=Wo(),f=Yu();let g,k;return Bc(()=>{if(!g.length)return;const b=s.moveClass||`${s.name||"v"}-move`;if(!PN(g[0].el,u.vnode.el,b))return;g.forEach(MN),g.forEach(IN);const A=g.filter(NN);gC(),A.forEach(w=>{const C=w.el,x=C.style;co(C,b),x.transform=x.webkitTransform=x.transitionDuration="";const y=C._moveCb=D=>{D&&D.target!==C||(!D||/transform$/.test(D.propertyName))&&(C.removeEventListener("transitionend",y),C._moveCb=null,Bo(C,b))};C.addEventListener("transitionend",y)})}),()=>{const b=Fe(s),A=hC(b);let w=b.tag||xt;g=k,k=c.default?Nc(c.default()):[];for(let C=0;C<k.length;C++){const x=k[C];x.key!=null&&Ei(x,_r(x,A,f,u))}if(g)for(let C=0;C<g.length;C++){const x=g[C];Ei(x,_r(x,A,f,u)),pC.set(x,x.el.getBoundingClientRect())}return Ee(w,null,k)}}},TN=s=>delete s.mode;bC.props;const SN=bC;function MN(s){const c=s.el;c._moveCb&&c._moveCb(),c._enterCb&&c._enterCb()}function IN(s){mC.set(s,s.el.getBoundingClientRect())}function NN(s){const c=pC.get(s),u=mC.get(s),f=c.left-u.left,g=c.top-u.top;if(f||g){const k=s.el.style;return k.transform=k.webkitTransform=`translate(${f}px,${g}px)`,k.transitionDuration="0s",s}}function PN(s,c,u){const f=s.cloneNode();s._vtc&&s._vtc.forEach(b=>{b.split(/\s+/).forEach(A=>A&&f.classList.remove(A))}),u.split(/\s+/).forEach(b=>b&&f.classList.add(b)),f.style.display="none";const g=c.nodeType===1?c:c.parentNode;g.appendChild(f);const{hasTransform:k}=fC(f);return g.removeChild(f),k}const $o=s=>{const c=s.props["onUpdate:modelValue"]||!1;return _e(c)?u=>fr(c,u):c};function BN(s){s.target.composing=!0}function l_(s){const c=s.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const _t={created(s,{modifiers:{lazy:c,trim:u,number:f}},g){s._assign=$o(g);const k=f||g.props&&g.props.type==="number";uo(s,c?"change":"input",b=>{if(b.target.composing)return;let A=s.value;u&&(A=A.trim()),k&&(A=cc(A)),s._assign(A)}),u&&uo(s,"change",()=>{s.value=s.value.trim()}),c||(uo(s,"compositionstart",BN),uo(s,"compositionend",l_),uo(s,"change",l_))},mounted(s,{value:c}){s.value=c??""},beforeUpdate(s,{value:c,modifiers:{lazy:u,trim:f,number:g}},k){if(s._assign=$o(k),s.composing||document.activeElement===s&&s.type!=="range"&&(u||f&&s.value.trim()===c||(g||s.type==="number")&&cc(s.value)===c))return;const b=c??"";s.value!==b&&(s.value=b)}},ih={deep:!0,created(s,c,u){s._assign=$o(u),uo(s,"change",()=>{const f=s._modelValue,g=Cr(s),k=s.checked,b=s._assign;if(_e(f)){const A=_c(f,g),w=A!==-1;if(k&&!w)b(f.concat(g));else if(!k&&w){const C=[...f];C.splice(A,1),b(C)}}else if(Si(f)){const A=new Set(f);k?A.add(g):A.delete(g),b(A)}else b(kC(s,k))})},mounted:d_,beforeUpdate(s,c,u){s._assign=$o(u),d_(s,c,u)}};function d_(s,{value:c,oldValue:u},f){s._modelValue=c,_e(c)?s.checked=_c(c,f.props.value)>-1:Si(c)?s.checked=c.has(f.props.value):c!==u&&(s.checked=Fo(c,kC(s,!0)))}const rh={created(s,{value:c},u){s.checked=Fo(c,u.props.value),s._assign=$o(u),uo(s,"change",()=>{s._assign(Cr(s))})},beforeUpdate(s,{value:c,oldValue:u},f){s._assign=$o(f),c!==u&&(s.checked=Fo(c,f.props.value))}},Zn={deep:!0,created(s,{value:c,modifiers:{number:u}},f){const g=Si(c);uo(s,"change",()=>{const k=Array.prototype.filter.call(s.options,b=>b.selected).map(b=>u?cc(Cr(b)):Cr(b));s._assign(s.multiple?g?new Set(k):k:k[0])}),s._assign=$o(f)},mounted(s,{value:c}){u_(s,c)},beforeUpdate(s,c,u){s._assign=$o(u)},updated(s,{value:c}){u_(s,c)}};function u_(s,c){const u=s.multiple;if(!(u&&!_e(c)&&!Si(c))){for(let f=0,g=s.options.length;f<g;f++){const k=s.options[f],b=Cr(k);if(u)_e(c)?k.selected=_c(c,b)>-1:k.selected=c.has(b);else if(Fo(Cr(k),c)){s.selectedIndex!==f&&(s.selectedIndex=f);return}}!u&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function Cr(s){return"_value"in s?s._value:s.value}function kC(s,c){const u=c?"_trueValue":"_falseValue";return u in s?s[u]:c}const wC={created(s,c,u){Ja(s,c,u,null,"created")},mounted(s,c,u){Ja(s,c,u,null,"mounted")},beforeUpdate(s,c,u,f){Ja(s,c,u,f,"beforeUpdate")},updated(s,c,u,f){Ja(s,c,u,f,"updated")}};function _C(s,c){switch(s){case"SELECT":return Zn;case"TEXTAREA":return _t;default:switch(c){case"checkbox":return ih;case"radio":return rh;default:return _t}}}function Ja(s,c,u,f,g){const b=_C(s.tagName,u.props&&u.props.type)[g];b&&b(s,c,u,f)}function ON(){_t.getSSRProps=({value:s})=>({value:s}),rh.getSSRProps=({value:s},c)=>{if(c.props&&Fo(c.props.value,s))return{checked:!0}},ih.getSSRProps=({value:s},c)=>{if(_e(s)){if(c.props&&_c(s,c.props.value)>-1)return{checked:!0}}else if(Si(s)){if(c.props&&s.has(c.props.value))return{checked:!0}}else if(s)return{checked:!0}},wC.getSSRProps=(s,c)=>{if(typeof c.type!="string")return;const u=_C(c.type.toUpperCase(),c.props&&c.props.type);if(u.getSSRProps)return u.getSSRProps(s,c)}}const LN=["ctrl","shift","alt","meta"],RN={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,c)=>LN.some(u=>s[`${u}Key`]&&!c.includes(u))},Ii=(s,c)=>(u,...f)=>{for(let g=0;g<c.length;g++){const k=RN[c[g]];if(k&&k(u,c))return}return s(u,...f)},zN={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jN=(s,c)=>u=>{if(!("key"in u))return;const f=kn(u.key);if(c.some(g=>g===f||zN[g]===f))return s(u)},AC={beforeMount(s,{value:c},{transition:u}){s._vod=s.style.display==="none"?"":s.style.display,u&&c?u.beforeEnter(s):rs(s,c)},mounted(s,{value:c},{transition:u}){u&&c&&u.enter(s)},updated(s,{value:c,oldValue:u},{transition:f}){!c!=!u&&(f?c?(f.beforeEnter(s),rs(s,!0),f.enter(s)):f.leave(s,()=>{rs(s,!1)}):rs(s,c))},beforeUnmount(s,{value:c}){rs(s,c)}};function rs(s,c){s.style.display=c?s._vod:"none"}function FN(){AC.getSSRProps=({value:s})=>{if(!s)return{style:{display:"none"}}}}const CC=bt({patchProp:wN},sN);let bs,h_=!1;function vC(){return bs||(bs=$A(CC))}function yC(){return bs=h_?bs:qA(CC),h_=!0,bs}const yu=(...s)=>{vC().render(...s)},xC=(...s)=>{yC().hydrate(...s)},EC=(...s)=>{const c=vC().createApp(...s),{mount:u}=c;return c.mount=f=>{const g=DC(f);if(!g)return;const k=c._component;!Me(k)&&!k.render&&!k.template&&(k.template=g.innerHTML),g.innerHTML="";const b=u(g,!1,g instanceof SVGElement);return g instanceof Element&&(g.removeAttribute("v-cloak"),g.setAttribute("data-v-app","")),b},c},VN=(...s)=>{const c=yC().createApp(...s),{mount:u}=c;return c.mount=f=>{const g=DC(f);if(g)return u(g,!0,g instanceof SVGElement)},c};function DC(s){return lt(s)?document.querySelector(s):s}let f_=!1;const UN=()=>{f_||(f_=!0,ON(),FN())},HN=()=>{},$N=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Qu,Comment:Ft,EffectScope:Ru,Fragment:xt,KeepAlive:l5,ReactiveEffect:Ps,Static:yi,Suspense:J2,Teleport:P5,Text:Di,Transition:oh,TransitionGroup:SN,VueElement:Fc,assertNumber:F2,callWithAsyncErrorHandling:ln,callWithErrorHandling:ho,camelize:Xt,capitalize:Ns,cloneVNode:eo,compatUtils:iN,compile:HN,computed:an,createApp:EC,createBlock:Ds,createCommentVNode:L5,createElementBlock:Gt,createElementVNode:N,createHydrationRenderer:qA,createPropsRestProxy:Z5,createRenderer:$A,createSSRApp:VN,createSlots:f5,createStaticVNode:JA,createTextVNode:to,createVNode:Ee,customRef:B2,defineAsyncComponent:a5,defineComponent:Rs,defineCustomElement:dC,defineEmits:q5,defineExpose:W5,defineProps:$5,defineSSRCustomElement:AN,get devtools(){return lr},effect:t2,effectScope:G_,getCurrentInstance:Wo,getCurrentScope:Y_,getTransitionRawChildren:Nc,guardReactiveProps:ZA,h:jc,handleError:Mi,hydrate:xC,initCustomFormatter:X5,initDirectivesForSSR:UN,inject:Pn,isMemoSame:cC,isProxy:Vu,isReactive:Ai,isReadonly:xi,isRef:Nt,isRuntimeOnly:V5,isShallow:As,isVNode:Uo,markRaw:Ec,mergeDefaults:Q5,mergeProps:XA,nextTick:Tc,normalizeClass:In,normalizeProps:FI,normalizeStyle:Ms,onActivated:vA,onBeforeMount:EA,onBeforeUnmount:Oc,onBeforeUpdate:DA,onDeactivated:yA,onErrorCaptured:IA,onMounted:js,onRenderTracked:MA,onRenderTriggered:SA,onScopeDispose:JI,onServerPrefetch:TA,onUnmounted:Lc,onUpdated:Bc,openBlock:vt,popScopeId:Os,provide:fs,proxyRefs:$u,pushScopeId:Bs,queuePostFlushCb:Wu,reactive:Sr,readonly:Fu,ref:gr,registerRuntimeCompiler:F5,render:yu,renderList:BA,renderSlot:OA,resolveComponent:Wt,resolveDirective:h5,resolveDynamicComponent:PA,resolveFilter:oN,resolveTransitionHooks:_r,setBlockTracking:bu,setDevtoolsHook:mA,setTransitionHooks:Ei,shallowReactive:cA,shallowReadonly:S2,shallowRef:lA,ssrContextKey:sC,ssrUtils:nN,stop:n2,toDisplayString:Oo,toHandlerKey:hs,toHandlers:g5,toRaw:Fe,toRef:uA,toRefs:O2,transformVNodeArgs:B5,triggerRef:I2,unref:Ci,useAttrs:Y5,useCssModule:vN,useCssVars:yN,useSSRContext:aC,useSlots:K5,useTransitionState:Yu,vModelCheckbox:ih,vModelDynamic:wC,vModelRadio:rh,vModelSelect:Zn,vModelText:_t,vShow:AC,version:lC,warn:j2,watch:br,watchEffect:o5,watchPostEffect:_A,watchSyncEffect:i5,withAsyncContext:J5,withCtx:Xn,withDefaults:G5,withDirectives:st,withKeys:jN,withMemo:eN,withModifiers:Ii,withScopeId:W2},Symbol.toStringTag,{value:"Module"}));var qN=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const WN=Symbol();var g_;(function(s){s.direct="direct",s.patchObject="patch object",s.patchFunction="patch function"})(g_||(g_={}));function GN(){const s=G_(!0),c=s.run(()=>gr({}));let u=[],f=[];const g=Ec({install(k){g._a=k,k.provide(WN,g),k.config.globalProperties.$pinia=g,f.forEach(b=>u.push(b)),f=[]},use(k){return!this._a&&!qN?f.push(k):u.push(k),this},_p:u,_a:null,_e:s,_s:new Map,state:c});return g}const KN="/assets/dist/img/BracnetLogo.png";const wn=(s,c)=>{const u=s.__vccOpts||s;for(const[f,g]of c)u[f]=g;return u},YN={},Fs=s=>(Bs("data-v-6bddb75f"),s=s(),Os(),s),QN={class:"main-sidebar sidebar-dark-primary elevation-4"},ZN=Fs(()=>N("span",{class:"brand-link"},[N("img",{src:KN,alt:"BracnetLogo",class:"brand-image img-circle elevation-3",style:{opacity:"0.8"}}),N("span",{class:"brand-text font-weight-bold"},"BRACNet")],-1)),JN={class:"sidebar"},XN={class:"mt-2"},eP={class:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",id:"nav_ul"},tP={class:"nav-item"},nP=Fs(()=>N("i",{class:"nav-icon fas fa-home mr-2"},null,-1)),oP=Fs(()=>N("p",null,"Dashboard",-1)),iP={class:"nav-item"},rP=Fs(()=>N("i",{class:"nav-icon fas fa-plus mr-2"},null,-1)),sP=Fs(()=>N("p",null,"Add Job",-1));function aP(s,c,u,f,g,k){const b=Wt("router-link");return vt(),Gt("aside",QN,[ZN,N("div",JN,[N("nav",XN,[N("ul",eP,[N("li",tP,[Ee(b,{to:{name:"Home"},class:"nav-link"},{default:Xn(()=>[nP,oP]),_:1})]),N("li",iP,[Ee(b,{to:{name:"JobAdd"},class:"nav-link"},{default:Xn(()=>[rP,sP]),_:1})])])])])])}const cP=wn(YN,[["render",aP],["__scopeId","data-v-6bddb75f"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const dr=typeof window<"u";function lP(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const Je=Object.assign;function eu(s,c){const u={};for(const f in c){const g=c[f];u[f]=Bn(g)?g.map(s):s(g)}return u}const ks=()=>{},Bn=Array.isArray,dP=/\/$/,uP=s=>s.replace(dP,"");function tu(s,c,u="/"){let f,g={},k="",b="";const A=c.indexOf("#");let w=c.indexOf("?");return A<w&&A>=0&&(w=-1),w>-1&&(f=c.slice(0,w),k=c.slice(w+1,A>-1?A:c.length),g=s(k)),A>-1&&(f=f||c.slice(0,A),b=c.slice(A,c.length)),f=pP(f??c,u),{fullPath:f+(k&&"?")+k+b,path:f,query:g,hash:b}}function hP(s,c){const u=c.query?s(c.query):"";return c.path+(u&&"?")+u+(c.hash||"")}function p_(s,c){return!c||!s.toLowerCase().startsWith(c.toLowerCase())?s:s.slice(c.length)||"/"}function fP(s,c,u){const f=c.matched.length-1,g=u.matched.length-1;return f>-1&&f===g&&vr(c.matched[f],u.matched[g])&&TC(c.params,u.params)&&s(c.query)===s(u.query)&&c.hash===u.hash}function vr(s,c){return(s.aliasOf||s)===(c.aliasOf||c)}function TC(s,c){if(Object.keys(s).length!==Object.keys(c).length)return!1;for(const u in s)if(!gP(s[u],c[u]))return!1;return!0}function gP(s,c){return Bn(s)?m_(s,c):Bn(c)?m_(c,s):s===c}function m_(s,c){return Bn(c)?s.length===c.length&&s.every((u,f)=>u===c[f]):s.length===1&&s[0]===c}function pP(s,c){if(s.startsWith("/"))return s;if(!s)return c;const u=c.split("/"),f=s.split("/");let g=u.length-1,k,b;for(k=0;k<f.length;k++)if(b=f[k],b!==".")if(b==="..")g>1&&g--;else break;return u.slice(0,g).join("/")+"/"+f.slice(k-(k===f.length?1:0)).join("/")}var Ts;(function(s){s.pop="pop",s.push="push"})(Ts||(Ts={}));var ws;(function(s){s.back="back",s.forward="forward",s.unknown=""})(ws||(ws={}));function mP(s){if(!s)if(dr){const c=document.querySelector("base");s=c&&c.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),uP(s)}const bP=/^[^#]+#/;function kP(s,c){return s.replace(bP,"#")+c}function wP(s,c){const u=document.documentElement.getBoundingClientRect(),f=s.getBoundingClientRect();return{behavior:c.behavior,left:f.left-u.left-(c.left||0),top:f.top-u.top-(c.top||0)}}const Vc=()=>({left:window.pageXOffset,top:window.pageYOffset});function _P(s){let c;if("el"in s){const u=s.el,f=typeof u=="string"&&u.startsWith("#"),g=typeof u=="string"?f?document.getElementById(u.slice(1)):document.querySelector(u):u;if(!g)return;c=wP(g,s)}else c=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function b_(s,c){return(history.state?history.state.position-c:-1)+s}const xu=new Map;function AP(s,c){xu.set(s,c)}function CP(s){const c=xu.get(s);return xu.delete(s),c}let vP=()=>location.protocol+"//"+location.host;function SC(s,c){const{pathname:u,search:f,hash:g}=c,k=s.indexOf("#");if(k>-1){let A=g.includes(s.slice(k))?s.slice(k).length:1,w=g.slice(A);return w[0]!=="/"&&(w="/"+w),p_(w,"")}return p_(u,s)+f+g}function yP(s,c,u,f){let g=[],k=[],b=null;const A=({state:D})=>{const I=SC(s,location),j=u.value,H=c.value;let ee=0;if(D){if(u.value=I,c.value=D,b&&b===j){b=null;return}ee=H?D.position-H.position:0}else f(I);g.forEach(F=>{F(u.value,j,{delta:ee,type:Ts.pop,direction:ee?ee>0?ws.forward:ws.back:ws.unknown})})};function w(){b=u.value}function C(D){g.push(D);const I=()=>{const j=g.indexOf(D);j>-1&&g.splice(j,1)};return k.push(I),I}function x(){const{history:D}=window;D.state&&D.replaceState(Je({},D.state,{scroll:Vc()}),"")}function y(){for(const D of k)D();k=[],window.removeEventListener("popstate",A),window.removeEventListener("beforeunload",x)}return window.addEventListener("popstate",A),window.addEventListener("beforeunload",x),{pauseListeners:w,listen:C,destroy:y}}function k_(s,c,u,f=!1,g=!1){return{back:s,current:c,forward:u,replaced:f,position:window.history.length,scroll:g?Vc():null}}function xP(s){const{history:c,location:u}=window,f={value:SC(s,u)},g={value:c.state};g.value||k(f.value,{back:null,current:f.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function k(w,C,x){const y=s.indexOf("#"),D=y>-1?(u.host&&document.querySelector("base")?s:s.slice(y))+w:vP()+s+w;try{c[x?"replaceState":"pushState"](C,"",D),g.value=C}catch(I){console.error(I),u[x?"replace":"assign"](D)}}function b(w,C){const x=Je({},c.state,k_(g.value.back,w,g.value.forward,!0),C,{position:g.value.position});k(w,x,!0),f.value=w}function A(w,C){const x=Je({},g.value,c.state,{forward:w,scroll:Vc()});k(x.current,x,!0);const y=Je({},k_(f.value,w,null),{position:x.position+1},C);k(w,y,!1),f.value=w}return{location:f,state:g,push:A,replace:b}}function EP(s){s=mP(s);const c=xP(s),u=yP(s,c.state,c.location,c.replace);function f(k,b=!0){b||u.pauseListeners(),history.go(k)}const g=Je({location:"",base:s,go:f,createHref:kP.bind(null,s)},c,u);return Object.defineProperty(g,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(g,"state",{enumerable:!0,get:()=>c.state.value}),g}function DP(s){return typeof s=="string"||s&&typeof s=="object"}function MC(s){return typeof s=="string"||typeof s=="symbol"}const No={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},IC=Symbol("");var w_;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(w_||(w_={}));function yr(s,c){return Je(new Error,{type:s,[IC]:!0},c)}function ao(s,c){return s instanceof Error&&IC in s&&(c==null||!!(s.type&c))}const __="[^/]+?",TP={sensitive:!1,strict:!1,start:!0,end:!0},SP=/[.+*?^${}()[\]/\\]/g;function MP(s,c){const u=Je({},TP,c),f=[];let g=u.start?"^":"";const k=[];for(const C of s){const x=C.length?[]:[90];u.strict&&!C.length&&(g+="/");for(let y=0;y<C.length;y++){const D=C[y];let I=40+(u.sensitive?.25:0);if(D.type===0)y||(g+="/"),g+=D.value.replace(SP,"\\$&"),I+=40;else if(D.type===1){const{value:j,repeatable:H,optional:ee,regexp:F}=D;k.push({name:j,repeatable:H,optional:ee});const O=F||__;if(O!==__){I+=10;try{new RegExp(`(${O})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${j}" (${O}): `+G.message)}}let V=H?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;y||(V=ee&&C.length<2?`(?:/${V})`:"/"+V),ee&&(V+="?"),g+=V,I+=20,ee&&(I+=-8),H&&(I+=-20),O===".*"&&(I+=-50)}x.push(I)}f.push(x)}if(u.strict&&u.end){const C=f.length-1;f[C][f[C].length-1]+=.7000000000000001}u.strict||(g+="/?"),u.end?g+="$":u.strict&&(g+="(?:/|$)");const b=new RegExp(g,u.sensitive?"":"i");function A(C){const x=C.match(b),y={};if(!x)return null;for(let D=1;D<x.length;D++){const I=x[D]||"",j=k[D-1];y[j.name]=I&&j.repeatable?I.split("/"):I}return y}function w(C){let x="",y=!1;for(const D of s){(!y||!x.endsWith("/"))&&(x+="/"),y=!1;for(const I of D)if(I.type===0)x+=I.value;else if(I.type===1){const{value:j,repeatable:H,optional:ee}=I,F=j in C?C[j]:"";if(Bn(F)&&!H)throw new Error(`Provided param "${j}" is an array but it is not repeatable (* or + modifiers)`);const O=Bn(F)?F.join("/"):F;if(!O)if(ee)D.length<2&&(x.endsWith("/")?x=x.slice(0,-1):y=!0);else throw new Error(`Missing required param "${j}"`);x+=O}}return x||"/"}return{re:b,score:f,keys:k,parse:A,stringify:w}}function IP(s,c){let u=0;for(;u<s.length&&u<c.length;){const f=c[u]-s[u];if(f)return f;u++}return s.length<c.length?s.length===1&&s[0]===40+40?-1:1:s.length>c.length?c.length===1&&c[0]===40+40?1:-1:0}function NP(s,c){let u=0;const f=s.score,g=c.score;for(;u<f.length&&u<g.length;){const k=IP(f[u],g[u]);if(k)return k;u++}if(Math.abs(g.length-f.length)===1){if(A_(f))return 1;if(A_(g))return-1}return g.length-f.length}function A_(s){const c=s[s.length-1];return s.length>0&&c[c.length-1]<0}const PP={type:0,value:""},BP=/[a-zA-Z0-9_]/;function OP(s){if(!s)return[[]];if(s==="/")return[[PP]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function c(I){throw new Error(`ERR (${u})/"${C}": ${I}`)}let u=0,f=u;const g=[];let k;function b(){k&&g.push(k),k=[]}let A=0,w,C="",x="";function y(){C&&(u===0?k.push({type:0,value:C}):u===1||u===2||u===3?(k.length>1&&(w==="*"||w==="+")&&c(`A repeatable param (${C}) must be alone in its segment. eg: '/:ids+.`),k.push({type:1,value:C,regexp:x,repeatable:w==="*"||w==="+",optional:w==="*"||w==="?"})):c("Invalid state to consume buffer"),C="")}function D(){C+=w}for(;A<s.length;){if(w=s[A++],w==="\\"&&u!==2){f=u,u=4;continue}switch(u){case 0:w==="/"?(C&&y(),b()):w===":"?(y(),u=1):D();break;case 4:D(),u=f;break;case 1:w==="("?u=2:BP.test(w)?D():(y(),u=0,w!=="*"&&w!=="?"&&w!=="+"&&A--);break;case 2:w===")"?x[x.length-1]=="\\"?x=x.slice(0,-1)+w:u=3:x+=w;break;case 3:y(),u=0,w!=="*"&&w!=="?"&&w!=="+"&&A--,x="";break;default:c("Unknown state");break}}return u===2&&c(`Unfinished custom RegExp for param "${C}"`),y(),b(),g}function LP(s,c,u){const f=MP(OP(s.path),u),g=Je(f,{record:s,parent:c,children:[],alias:[]});return c&&!g.record.aliasOf==!c.record.aliasOf&&c.children.push(g),g}function RP(s,c){const u=[],f=new Map;c=y_({strict:!1,end:!0,sensitive:!1},c);function g(x){return f.get(x)}function k(x,y,D){const I=!D,j=zP(x);j.aliasOf=D&&D.record;const H=y_(c,x),ee=[j];if("alias"in x){const V=typeof x.alias=="string"?[x.alias]:x.alias;for(const G of V)ee.push(Je({},j,{components:D?D.record.components:j.components,path:G,aliasOf:D?D.record:j}))}let F,O;for(const V of ee){const{path:G}=V;if(y&&G[0]!=="/"){const oe=y.record.path,ge=oe[oe.length-1]==="/"?"":"/";V.path=y.record.path+(G&&ge+G)}if(F=LP(V,y,H),D?D.alias.push(F):(O=O||F,O!==F&&O.alias.push(F),I&&x.name&&!v_(F)&&b(x.name)),j.children){const oe=j.children;for(let ge=0;ge<oe.length;ge++)k(oe[ge],F,D&&D.children[ge])}D=D||F,(F.record.components&&Object.keys(F.record.components).length||F.record.name||F.record.redirect)&&w(F)}return O?()=>{b(O)}:ks}function b(x){if(MC(x)){const y=f.get(x);y&&(f.delete(x),u.splice(u.indexOf(y),1),y.children.forEach(b),y.alias.forEach(b))}else{const y=u.indexOf(x);y>-1&&(u.splice(y,1),x.record.name&&f.delete(x.record.name),x.children.forEach(b),x.alias.forEach(b))}}function A(){return u}function w(x){let y=0;for(;y<u.length&&NP(x,u[y])>=0&&(x.record.path!==u[y].record.path||!NC(x,u[y]));)y++;u.splice(y,0,x),x.record.name&&!v_(x)&&f.set(x.record.name,x)}function C(x,y){let D,I={},j,H;if("name"in x&&x.name){if(D=f.get(x.name),!D)throw yr(1,{location:x});H=D.record.name,I=Je(C_(y.params,D.keys.filter(O=>!O.optional).map(O=>O.name)),x.params&&C_(x.params,D.keys.map(O=>O.name))),j=D.stringify(I)}else if("path"in x)j=x.path,D=u.find(O=>O.re.test(j)),D&&(I=D.parse(j),H=D.record.name);else{if(D=y.name?f.get(y.name):u.find(O=>O.re.test(y.path)),!D)throw yr(1,{location:x,currentLocation:y});H=D.record.name,I=Je({},y.params,x.params),j=D.stringify(I)}const ee=[];let F=D;for(;F;)ee.unshift(F.record),F=F.parent;return{name:H,path:j,params:I,matched:ee,meta:FP(ee)}}return s.forEach(x=>k(x)),{addRoute:k,resolve:C,removeRoute:b,getRoutes:A,getRecordMatcher:g}}function C_(s,c){const u={};for(const f of c)f in s&&(u[f]=s[f]);return u}function zP(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:jP(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function jP(s){const c={},u=s.props||!1;if("component"in s)c.default=u;else for(const f in s.components)c[f]=typeof u=="boolean"?u:u[f];return c}function v_(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function FP(s){return s.reduce((c,u)=>Je(c,u.meta),{})}function y_(s,c){const u={};for(const f in s)u[f]=f in c?c[f]:s[f];return u}function NC(s,c){return c.children.some(u=>u===s||NC(s,u))}const PC=/#/g,VP=/&/g,UP=/\//g,HP=/=/g,$P=/\?/g,BC=/\+/g,qP=/%5B/g,WP=/%5D/g,OC=/%5E/g,GP=/%60/g,LC=/%7B/g,KP=/%7C/g,RC=/%7D/g,YP=/%20/g;function sh(s){return encodeURI(""+s).replace(KP,"|").replace(qP,"[").replace(WP,"]")}function QP(s){return sh(s).replace(LC,"{").replace(RC,"}").replace(OC,"^")}function Eu(s){return sh(s).replace(BC,"%2B").replace(YP,"+").replace(PC,"%23").replace(VP,"%26").replace(GP,"`").replace(LC,"{").replace(RC,"}").replace(OC,"^")}function ZP(s){return Eu(s).replace(HP,"%3D")}function JP(s){return sh(s).replace(PC,"%23").replace($P,"%3F")}function XP(s){return s==null?"":JP(s).replace(UP,"%2F")}function pc(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function eB(s){const c={};if(s===""||s==="?")return c;const f=(s[0]==="?"?s.slice(1):s).split("&");for(let g=0;g<f.length;++g){const k=f[g].replace(BC," "),b=k.indexOf("="),A=pc(b<0?k:k.slice(0,b)),w=b<0?null:pc(k.slice(b+1));if(A in c){let C=c[A];Bn(C)||(C=c[A]=[C]),C.push(w)}else c[A]=w}return c}function x_(s){let c="";for(let u in s){const f=s[u];if(u=ZP(u),f==null){f!==void 0&&(c+=(c.length?"&":"")+u);continue}(Bn(f)?f.map(k=>k&&Eu(k)):[f&&Eu(f)]).forEach(k=>{k!==void 0&&(c+=(c.length?"&":"")+u,k!=null&&(c+="="+k))})}return c}function tB(s){const c={};for(const u in s){const f=s[u];f!==void 0&&(c[u]=Bn(f)?f.map(g=>g==null?null:""+g):f==null?f:""+f)}return c}const nB=Symbol(""),E_=Symbol(""),Uc=Symbol(""),zC=Symbol(""),Du=Symbol("");function ss(){let s=[];function c(f){return s.push(f),()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)}}function u(){s=[]}return{add:c,list:()=>s,reset:u}}function Ro(s,c,u,f,g){const k=f&&(f.enterCallbacks[g]=f.enterCallbacks[g]||[]);return()=>new Promise((b,A)=>{const w=y=>{y===!1?A(yr(4,{from:u,to:c})):y instanceof Error?A(y):DP(y)?A(yr(2,{from:c,to:y})):(k&&f.enterCallbacks[g]===k&&typeof y=="function"&&k.push(y),b())},C=s.call(f&&f.instances[g],c,u,w);let x=Promise.resolve(C);s.length<3&&(x=x.then(w)),x.catch(y=>A(y))})}function nu(s,c,u,f){const g=[];for(const k of s)for(const b in k.components){let A=k.components[b];if(!(c!=="beforeRouteEnter"&&!k.instances[b]))if(oB(A)){const C=(A.__vccOpts||A)[c];C&&g.push(Ro(C,u,f,k,b))}else{let w=A();g.push(()=>w.then(C=>{if(!C)return Promise.reject(new Error(`Couldn't resolve component "${b}" at "${k.path}"`));const x=lP(C)?C.default:C;k.components[b]=x;const D=(x.__vccOpts||x)[c];return D&&Ro(D,u,f,k,b)()}))}}return g}function oB(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function D_(s){const c=Pn(Uc),u=Pn(zC),f=an(()=>c.resolve(Ci(s.to))),g=an(()=>{const{matched:w}=f.value,{length:C}=w,x=w[C-1],y=u.matched;if(!x||!y.length)return-1;const D=y.findIndex(vr.bind(null,x));if(D>-1)return D;const I=T_(w[C-2]);return C>1&&T_(x)===I&&y[y.length-1].path!==I?y.findIndex(vr.bind(null,w[C-2])):D}),k=an(()=>g.value>-1&&aB(u.params,f.value.params)),b=an(()=>g.value>-1&&g.value===u.matched.length-1&&TC(u.params,f.value.params));function A(w={}){return sB(w)?c[Ci(s.replace)?"replace":"push"](Ci(s.to)).catch(ks):Promise.resolve()}return{route:f,href:an(()=>f.value.href),isActive:k,isExactActive:b,navigate:A}}const iB=Rs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:D_,setup(s,{slots:c}){const u=Sr(D_(s)),{options:f}=Pn(Uc),g=an(()=>({[S_(s.activeClass,f.linkActiveClass,"router-link-active")]:u.isActive,[S_(s.exactActiveClass,f.linkExactActiveClass,"router-link-exact-active")]:u.isExactActive}));return()=>{const k=c.default&&c.default(u);return s.custom?k:jc("a",{"aria-current":u.isExactActive?s.ariaCurrentValue:null,href:u.href,onClick:u.navigate,class:g.value},k)}}}),rB=iB;function sB(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const c=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return s.preventDefault&&s.preventDefault(),!0}}function aB(s,c){for(const u in c){const f=c[u],g=s[u];if(typeof f=="string"){if(f!==g)return!1}else if(!Bn(g)||g.length!==f.length||f.some((k,b)=>k!==g[b]))return!1}return!0}function T_(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const S_=(s,c,u)=>s??c??u,cB=Rs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:c,slots:u}){const f=Pn(Du),g=an(()=>s.route||f.value),k=Pn(E_,0),b=an(()=>{let C=Ci(k);const{matched:x}=g.value;let y;for(;(y=x[C])&&!y.components;)C++;return C}),A=an(()=>g.value.matched[b.value]);fs(E_,an(()=>b.value+1)),fs(nB,A),fs(Du,g);const w=gr();return br(()=>[w.value,A.value,s.name],([C,x,y],[D,I,j])=>{x&&(x.instances[y]=C,I&&I!==x&&C&&C===D&&(x.leaveGuards.size||(x.leaveGuards=I.leaveGuards),x.updateGuards.size||(x.updateGuards=I.updateGuards))),C&&x&&(!I||!vr(x,I)||!D)&&(x.enterCallbacks[y]||[]).forEach(H=>H(C))},{flush:"post"}),()=>{const C=g.value,x=s.name,y=A.value,D=y&&y.components[x];if(!D)return M_(u.default,{Component:D,route:C});const I=y.props[x],j=I?I===!0?C.params:typeof I=="function"?I(C):I:null,ee=jc(D,Je({},j,c,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(y.instances[x]=null)},ref:w}));return M_(u.default,{Component:ee,route:C})||ee}}});function M_(s,c){if(!s)return null;const u=s(c);return u.length===1?u[0]:u}const lB=cB;function dB(s){const c=RP(s.routes,s),u=s.parseQuery||eB,f=s.stringifyQuery||x_,g=s.history,k=ss(),b=ss(),A=ss(),w=lA(No);let C=No;dr&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=eu.bind(null,z=>""+z),y=eu.bind(null,XP),D=eu.bind(null,pc);function I(z,te){let ie,ae;return MC(z)?(ie=c.getRecordMatcher(z),ae=te):ae=z,c.addRoute(ae,ie)}function j(z){const te=c.getRecordMatcher(z);te&&c.removeRoute(te)}function H(){return c.getRoutes().map(z=>z.record)}function ee(z){return!!c.getRecordMatcher(z)}function F(z,te){if(te=Je({},te||w.value),typeof z=="string"){const P=tu(u,z,te.path),L=c.resolve({path:P.path},te),$=g.createHref(P.fullPath);return Je(P,L,{params:D(L.params),hash:pc(P.hash),redirectedFrom:void 0,href:$})}let ie;if("path"in z)ie=Je({},z,{path:tu(u,z.path,te.path).path});else{const P=Je({},z.params);for(const L in P)P[L]==null&&delete P[L];ie=Je({},z,{params:y(z.params)}),te.params=y(te.params)}const ae=c.resolve(ie,te),Te=z.hash||"";ae.params=x(D(ae.params));const Ve=hP(f,Je({},z,{hash:QP(Te),path:ae.path})),ye=g.createHref(Ve);return Je({fullPath:Ve,hash:Te,query:f===x_?tB(z.query):z.query||{}},ae,{redirectedFrom:void 0,href:ye})}function O(z){return typeof z=="string"?tu(u,z,w.value.path):Je({},z)}function V(z,te){if(C!==z)return yr(8,{from:te,to:z})}function G(z){return Q(z)}function oe(z){return G(Je(O(z),{replace:!0}))}function ge(z){const te=z.matched[z.matched.length-1];if(te&&te.redirect){const{redirect:ie}=te;let ae=typeof ie=="function"?ie(z):ie;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=O(ae):{path:ae},ae.params={}),Je({query:z.query,hash:z.hash,params:"path"in ae?{}:z.params},ae)}}function Q(z,te){const ie=C=F(z),ae=w.value,Te=z.state,Ve=z.force,ye=z.replace===!0,P=ge(ie);if(P)return Q(Je(O(P),{state:typeof P=="object"?Je({},Te,P.state):Te,force:Ve,replace:ye}),te||ie);const L=ie;L.redirectedFrom=te;let $;return!Ve&&fP(f,ae,ie)&&($=yr(16,{to:L,from:ae}),Be(ae,ae,!0,!1)),($?Promise.resolve($):S(L,ae)).catch(U=>ao(U)?ao(U,2)?U:zt(U):ze(U,L,ae)).then(U=>{if(U){if(ao(U,2))return Q(Je({replace:ye},O(U.to),{state:typeof U.to=="object"?Je({},Te,U.to.state):Te,force:Ve}),te||L)}else U=me(L,ae,!0,ye,Te);return Z(L,ae,U),U})}function q(z,te){const ie=V(z,te);return ie?Promise.reject(ie):Promise.resolve()}function S(z,te){let ie;const[ae,Te,Ve]=uB(z,te);ie=nu(ae.reverse(),"beforeRouteLeave",z,te);for(const P of ae)P.leaveGuards.forEach(L=>{ie.push(Ro(L,z,te))});const ye=q.bind(null,z,te);return ie.push(ye),cr(ie).then(()=>{ie=[];for(const P of k.list())ie.push(Ro(P,z,te));return ie.push(ye),cr(ie)}).then(()=>{ie=nu(Te,"beforeRouteUpdate",z,te);for(const P of Te)P.updateGuards.forEach(L=>{ie.push(Ro(L,z,te))});return ie.push(ye),cr(ie)}).then(()=>{ie=[];for(const P of z.matched)if(P.beforeEnter&&!te.matched.includes(P))if(Bn(P.beforeEnter))for(const L of P.beforeEnter)ie.push(Ro(L,z,te));else ie.push(Ro(P.beforeEnter,z,te));return ie.push(ye),cr(ie)}).then(()=>(z.matched.forEach(P=>P.enterCallbacks={}),ie=nu(Ve,"beforeRouteEnter",z,te),ie.push(ye),cr(ie))).then(()=>{ie=[];for(const P of b.list())ie.push(Ro(P,z,te));return ie.push(ye),cr(ie)}).catch(P=>ao(P,8)?P:Promise.reject(P))}function Z(z,te,ie){for(const ae of A.list())ae(z,te,ie)}function me(z,te,ie,ae,Te){const Ve=V(z,te);if(Ve)return Ve;const ye=te===No,P=dr?history.state:{};ie&&(ae||ye?g.replace(z.fullPath,Je({scroll:ye&&P&&P.scroll},Te)):g.push(z.fullPath,Te)),w.value=z,Be(z,te,ie,ye),zt()}let se;function we(){se||(se=g.listen((z,te,ie)=>{if(!Ln.listening)return;const ae=F(z),Te=ge(ae);if(Te){Q(Je(Te,{replace:!0}),ae).catch(ks);return}C=ae;const Ve=w.value;dr&&AP(b_(Ve.fullPath,ie.delta),Vc()),S(ae,Ve).catch(ye=>ao(ye,12)?ye:ao(ye,2)?(Q(ye.to,ae).then(P=>{ao(P,20)&&!ie.delta&&ie.type===Ts.pop&&g.go(-1,!1)}).catch(ks),Promise.reject()):(ie.delta&&g.go(-ie.delta,!1),ze(ye,ae,Ve))).then(ye=>{ye=ye||me(ae,Ve,!1),ye&&(ie.delta&&!ao(ye,8)?g.go(-ie.delta,!1):ie.type===Ts.pop&&ao(ye,20)&&g.go(-1,!1)),Z(ae,Ve,ye)}).catch(ks)}))}let ke=ss(),Ye=ss(),De;function ze(z,te,ie){zt(z);const ae=Ye.list();return ae.length?ae.forEach(Te=>Te(z,te,ie)):console.error(z),Promise.reject(z)}function Ne(){return De&&w.value!==No?Promise.resolve():new Promise((z,te)=>{ke.add([z,te])})}function zt(z){return De||(De=!z,we(),ke.list().forEach(([te,ie])=>z?ie(z):te()),ke.reset()),z}function Be(z,te,ie,ae){const{scrollBehavior:Te}=s;if(!dr||!Te)return Promise.resolve();const Ve=!ie&&CP(b_(z.fullPath,0))||(ae||!ie)&&history.state&&history.state.scroll||null;return Tc().then(()=>Te(z,te,Ve)).then(ye=>ye&&_P(ye)).catch(ye=>ze(ye,z,te))}const Pt=z=>g.go(z);let At;const _n=new Set,Ln={currentRoute:w,listening:!0,addRoute:I,removeRoute:j,hasRoute:ee,getRoutes:H,resolve:F,options:s,push:G,replace:oe,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:k.add,beforeResolve:b.add,afterEach:A.add,onError:Ye.add,isReady:Ne,install(z){const te=this;z.component("RouterLink",rB),z.component("RouterView",lB),z.config.globalProperties.$router=te,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>Ci(w)}),dr&&!At&&w.value===No&&(At=!0,G(g.location).catch(Te=>{}));const ie={};for(const Te in No)ie[Te]=an(()=>w.value[Te]);z.provide(Uc,te),z.provide(zC,Sr(ie)),z.provide(Du,w);const ae=z.unmount;_n.add(z),z.unmount=function(){_n.delete(z),_n.size<1&&(C=No,se&&se(),se=null,w.value=No,At=!1,De=!1),ae()}}};return Ln}function cr(s){return s.reduce((c,u)=>c.then(()=>u()),Promise.resolve())}function uB(s,c){const u=[],f=[],g=[],k=Math.max(c.matched.length,s.matched.length);for(let b=0;b<k;b++){const A=c.matched[b];A&&(s.matched.find(C=>vr(C,A))?f.push(A):u.push(A));const w=s.matched[b];w&&(c.matched.find(C=>vr(C,w))||g.push(w))}return[u,f,g]}function Vs(){return Pn(Uc)}function jC(s,c){return function(){return s.apply(c,arguments)}}const{toString:FC}=Object.prototype,{getPrototypeOf:ah}=Object,ch=(s=>c=>{const u=FC.call(c);return s[u]||(s[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),mo=s=>(s=s.toLowerCase(),c=>ch(c)===s),Hc=s=>c=>typeof c===s,{isArray:Mr}=Array,Ss=Hc("undefined");function hB(s){return s!==null&&!Ss(s)&&s.constructor!==null&&!Ss(s.constructor)&&qo(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const VC=mo("ArrayBuffer");function fB(s){let c;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?c=ArrayBuffer.isView(s):c=s&&s.buffer&&VC(s.buffer),c}const gB=Hc("string"),qo=Hc("function"),UC=Hc("number"),lh=s=>s!==null&&typeof s=="object",pB=s=>s===!0||s===!1,nc=s=>{if(ch(s)!=="object")return!1;const c=ah(s);return(c===null||c===Object.prototype||Object.getPrototypeOf(c)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},mB=mo("Date"),bB=mo("File"),kB=mo("Blob"),wB=mo("FileList"),_B=s=>lh(s)&&qo(s.pipe),AB=s=>{const c="[object FormData]";return s&&(typeof FormData=="function"&&s instanceof FormData||FC.call(s)===c||qo(s.toString)&&s.toString()===c)},CB=mo("URLSearchParams"),vB=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Us(s,c,{allOwnKeys:u=!1}={}){if(s===null||typeof s>"u")return;let f,g;if(typeof s!="object"&&(s=[s]),Mr(s))for(f=0,g=s.length;f<g;f++)c.call(null,s[f],f,s);else{const k=u?Object.getOwnPropertyNames(s):Object.keys(s),b=k.length;let A;for(f=0;f<b;f++)A=k[f],c.call(null,s[A],A,s)}}function HC(s,c){c=c.toLowerCase();const u=Object.keys(s);let f=u.length,g;for(;f-- >0;)if(g=u[f],c===g.toLowerCase())return g;return null}const $C=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),qC=s=>!Ss(s)&&s!==$C;function Tu(){const{caseless:s}=qC(this)&&this||{},c={},u=(f,g)=>{const k=s&&HC(c,g)||g;nc(c[k])&&nc(f)?c[k]=Tu(c[k],f):nc(f)?c[k]=Tu({},f):Mr(f)?c[k]=f.slice():c[k]=f};for(let f=0,g=arguments.length;f<g;f++)arguments[f]&&Us(arguments[f],u);return c}const yB=(s,c,u,{allOwnKeys:f}={})=>(Us(c,(g,k)=>{u&&qo(g)?s[k]=jC(g,u):s[k]=g},{allOwnKeys:f}),s),xB=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),EB=(s,c,u,f)=>{s.prototype=Object.create(c.prototype,f),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:c.prototype}),u&&Object.assign(s.prototype,u)},DB=(s,c,u,f)=>{let g,k,b;const A={};if(c=c||{},s==null)return c;do{for(g=Object.getOwnPropertyNames(s),k=g.length;k-- >0;)b=g[k],(!f||f(b,s,c))&&!A[b]&&(c[b]=s[b],A[b]=!0);s=u!==!1&&ah(s)}while(s&&(!u||u(s,c))&&s!==Object.prototype);return c},TB=(s,c,u)=>{s=String(s),(u===void 0||u>s.length)&&(u=s.length),u-=c.length;const f=s.indexOf(c,u);return f!==-1&&f===u},SB=s=>{if(!s)return null;if(Mr(s))return s;let c=s.length;if(!UC(c))return null;const u=new Array(c);for(;c-- >0;)u[c]=s[c];return u},MB=(s=>c=>s&&c instanceof s)(typeof Uint8Array<"u"&&ah(Uint8Array)),IB=(s,c)=>{const f=(s&&s[Symbol.iterator]).call(s);let g;for(;(g=f.next())&&!g.done;){const k=g.value;c.call(s,k[0],k[1])}},NB=(s,c)=>{let u;const f=[];for(;(u=s.exec(c))!==null;)f.push(u);return f},PB=mo("HTMLFormElement"),BB=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,f,g){return f.toUpperCase()+g}),I_=(({hasOwnProperty:s})=>(c,u)=>s.call(c,u))(Object.prototype),OB=mo("RegExp"),WC=(s,c)=>{const u=Object.getOwnPropertyDescriptors(s),f={};Us(u,(g,k)=>{c(g,k,s)!==!1&&(f[k]=g)}),Object.defineProperties(s,f)},LB=s=>{WC(s,(c,u)=>{if(qo(s)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const f=s[u];if(qo(f)){if(c.enumerable=!1,"writable"in c){c.writable=!1;return}c.set||(c.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},RB=(s,c)=>{const u={},f=g=>{g.forEach(k=>{u[k]=!0})};return Mr(s)?f(s):f(String(s).split(c)),u},zB=()=>{},jB=(s,c)=>(s=+s,Number.isFinite(s)?s:c),ou="abcdefghijklmnopqrstuvwxyz",N_="0123456789",GC={DIGIT:N_,ALPHA:ou,ALPHA_DIGIT:ou+ou.toUpperCase()+N_},FB=(s=16,c=GC.ALPHA_DIGIT)=>{let u="";const{length:f}=c;for(;s--;)u+=c[Math.random()*f|0];return u};function VB(s){return!!(s&&qo(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator])}const UB=s=>{const c=new Array(10),u=(f,g)=>{if(lh(f)){if(c.indexOf(f)>=0)return;if(!("toJSON"in f)){c[g]=f;const k=Mr(f)?[]:{};return Us(f,(b,A)=>{const w=u(b,g+1);!Ss(w)&&(k[A]=w)}),c[g]=void 0,k}}return f};return u(s,0)},Y={isArray:Mr,isArrayBuffer:VC,isBuffer:hB,isFormData:AB,isArrayBufferView:fB,isString:gB,isNumber:UC,isBoolean:pB,isObject:lh,isPlainObject:nc,isUndefined:Ss,isDate:mB,isFile:bB,isBlob:kB,isRegExp:OB,isFunction:qo,isStream:_B,isURLSearchParams:CB,isTypedArray:MB,isFileList:wB,forEach:Us,merge:Tu,extend:yB,trim:vB,stripBOM:xB,inherits:EB,toFlatObject:DB,kindOf:ch,kindOfTest:mo,endsWith:TB,toArray:SB,forEachEntry:IB,matchAll:NB,isHTMLForm:PB,hasOwnProperty:I_,hasOwnProp:I_,reduceDescriptors:WC,freezeMethods:LB,toObjectSet:RB,toCamelCase:BB,noop:zB,toFiniteNumber:jB,findKey:HC,global:$C,isContextDefined:qC,ALPHABET:GC,generateString:FB,isSpecCompliantForm:VB,toJSONObject:UB};function We(s,c,u,f,g){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",c&&(this.code=c),u&&(this.config=u),f&&(this.request=f),g&&(this.response=g)}Y.inherits(We,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const KC=We.prototype,YC={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{YC[s]={value:s}});Object.defineProperties(We,YC);Object.defineProperty(KC,"isAxiosError",{value:!0});We.from=(s,c,u,f,g,k)=>{const b=Object.create(KC);return Y.toFlatObject(s,b,function(w){return w!==Error.prototype},A=>A!=="isAxiosError"),We.call(b,s.message,c,u,f,g),b.cause=s,b.name=s.name,k&&Object.assign(b,k),b};const HB=null;function Su(s){return Y.isPlainObject(s)||Y.isArray(s)}function QC(s){return Y.endsWith(s,"[]")?s.slice(0,-2):s}function P_(s,c,u){return s?s.concat(c).map(function(g,k){return g=QC(g),!u&&k?"["+g+"]":g}).join(u?".":""):c}function $B(s){return Y.isArray(s)&&!s.some(Su)}const qB=Y.toFlatObject(Y,{},null,function(c){return/^is[A-Z]/.test(c)});function $c(s,c,u){if(!Y.isObject(s))throw new TypeError("target must be an object");c=c||new FormData,u=Y.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(H,ee){return!Y.isUndefined(ee[H])});const f=u.metaTokens,g=u.visitor||x,k=u.dots,b=u.indexes,w=(u.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(c);if(!Y.isFunction(g))throw new TypeError("visitor must be a function");function C(j){if(j===null)return"";if(Y.isDate(j))return j.toISOString();if(!w&&Y.isBlob(j))throw new We("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(j)||Y.isTypedArray(j)?w&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function x(j,H,ee){let F=j;if(j&&!ee&&typeof j=="object"){if(Y.endsWith(H,"{}"))H=f?H:H.slice(0,-2),j=JSON.stringify(j);else if(Y.isArray(j)&&$B(j)||(Y.isFileList(j)||Y.endsWith(H,"[]"))&&(F=Y.toArray(j)))return H=QC(H),F.forEach(function(V,G){!(Y.isUndefined(V)||V===null)&&c.append(b===!0?P_([H],G,k):b===null?H:H+"[]",C(V))}),!1}return Su(j)?!0:(c.append(P_(ee,H,k),C(j)),!1)}const y=[],D=Object.assign(qB,{defaultVisitor:x,convertValue:C,isVisitable:Su});function I(j,H){if(!Y.isUndefined(j)){if(y.indexOf(j)!==-1)throw Error("Circular reference detected in "+H.join("."));y.push(j),Y.forEach(j,function(F,O){(!(Y.isUndefined(F)||F===null)&&g.call(c,F,Y.isString(O)?O.trim():O,H,D))===!0&&I(F,H?H.concat(O):[O])}),y.pop()}}if(!Y.isObject(s))throw new TypeError("data must be an object");return I(s),c}function B_(s){const c={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(f){return c[f]})}function dh(s,c){this._pairs=[],s&&$c(s,this,c)}const ZC=dh.prototype;ZC.append=function(c,u){this._pairs.push([c,u])};ZC.toString=function(c){const u=c?function(f){return c.call(this,f,B_)}:B_;return this._pairs.map(function(g){return u(g[0])+"="+u(g[1])},"").join("&")};function WB(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function JC(s,c,u){if(!c)return s;const f=u&&u.encode||WB,g=u&&u.serialize;let k;if(g?k=g(c,u):k=Y.isURLSearchParams(c)?c.toString():new dh(c,u).toString(f),k){const b=s.indexOf("#");b!==-1&&(s=s.slice(0,b)),s+=(s.indexOf("?")===-1?"?":"&")+k}return s}class GB{constructor(){this.handlers=[]}use(c,u,f){return this.handlers.push({fulfilled:c,rejected:u,synchronous:f?f.synchronous:!1,runWhen:f?f.runWhen:null}),this.handlers.length-1}eject(c){this.handlers[c]&&(this.handlers[c]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(c){Y.forEach(this.handlers,function(f){f!==null&&c(f)})}}const O_=GB,XC={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},KB=typeof URLSearchParams<"u"?URLSearchParams:dh,YB=typeof FormData<"u"?FormData:null,QB=typeof Blob<"u"?Blob:null,ZB=(()=>{let s;return typeof navigator<"u"&&((s=navigator.product)==="ReactNative"||s==="NativeScript"||s==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),JB=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Jn={isBrowser:!0,classes:{URLSearchParams:KB,FormData:YB,Blob:QB},isStandardBrowserEnv:ZB,isStandardBrowserWebWorkerEnv:JB,protocols:["http","https","file","blob","url","data"]};function XB(s,c){return $c(s,new Jn.classes.URLSearchParams,Object.assign({visitor:function(u,f,g,k){return Jn.isNode&&Y.isBuffer(u)?(this.append(f,u.toString("base64")),!1):k.defaultVisitor.apply(this,arguments)}},c))}function eO(s){return Y.matchAll(/\w+|\[(\w*)]/g,s).map(c=>c[0]==="[]"?"":c[1]||c[0])}function tO(s){const c={},u=Object.keys(s);let f;const g=u.length;let k;for(f=0;f<g;f++)k=u[f],c[k]=s[k];return c}function ev(s){function c(u,f,g,k){let b=u[k++];const A=Number.isFinite(+b),w=k>=u.length;return b=!b&&Y.isArray(g)?g.length:b,w?(Y.hasOwnProp(g,b)?g[b]=[g[b],f]:g[b]=f,!A):((!g[b]||!Y.isObject(g[b]))&&(g[b]=[]),c(u,f,g[b],k)&&Y.isArray(g[b])&&(g[b]=tO(g[b])),!A)}if(Y.isFormData(s)&&Y.isFunction(s.entries)){const u={};return Y.forEachEntry(s,(f,g)=>{c(eO(f),g,u,0)}),u}return null}const nO={"Content-Type":void 0};function oO(s,c,u){if(Y.isString(s))try{return(c||JSON.parse)(s),Y.trim(s)}catch(f){if(f.name!=="SyntaxError")throw f}return(u||JSON.stringify)(s)}const qc={transitional:XC,adapter:["xhr","http"],transformRequest:[function(c,u){const f=u.getContentType()||"",g=f.indexOf("application/json")>-1,k=Y.isObject(c);if(k&&Y.isHTMLForm(c)&&(c=new FormData(c)),Y.isFormData(c))return g&&g?JSON.stringify(ev(c)):c;if(Y.isArrayBuffer(c)||Y.isBuffer(c)||Y.isStream(c)||Y.isFile(c)||Y.isBlob(c))return c;if(Y.isArrayBufferView(c))return c.buffer;if(Y.isURLSearchParams(c))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),c.toString();let A;if(k){if(f.indexOf("application/x-www-form-urlencoded")>-1)return XB(c,this.formSerializer).toString();if((A=Y.isFileList(c))||f.indexOf("multipart/form-data")>-1){const w=this.env&&this.env.FormData;return $c(A?{"files[]":c}:c,w&&new w,this.formSerializer)}}return k||g?(u.setContentType("application/json",!1),oO(c)):c}],transformResponse:[function(c){const u=this.transitional||qc.transitional,f=u&&u.forcedJSONParsing,g=this.responseType==="json";if(c&&Y.isString(c)&&(f&&!this.responseType||g)){const b=!(u&&u.silentJSONParsing)&&g;try{return JSON.parse(c)}catch(A){if(b)throw A.name==="SyntaxError"?We.from(A,We.ERR_BAD_RESPONSE,this,null,this.response):A}}return c}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jn.classes.FormData,Blob:Jn.classes.Blob},validateStatus:function(c){return c>=200&&c<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Y.forEach(["delete","get","head"],function(c){qc.headers[c]={}});Y.forEach(["post","put","patch"],function(c){qc.headers[c]=Y.merge(nO)});const uh=qc,iO=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rO=s=>{const c={};let u,f,g;return s&&s.split(`
`).forEach(function(b){g=b.indexOf(":"),u=b.substring(0,g).trim().toLowerCase(),f=b.substring(g+1).trim(),!(!u||c[u]&&iO[u])&&(u==="set-cookie"?c[u]?c[u].push(f):c[u]=[f]:c[u]=c[u]?c[u]+", "+f:f)}),c},L_=Symbol("internals");function as(s){return s&&String(s).trim().toLowerCase()}function oc(s){return s===!1||s==null?s:Y.isArray(s)?s.map(oc):String(s)}function sO(s){const c=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let f;for(;f=u.exec(s);)c[f[1]]=f[2];return c}function aO(s){return/^[-_a-zA-Z]+$/.test(s.trim())}function iu(s,c,u,f,g){if(Y.isFunction(f))return f.call(this,c,u);if(g&&(c=u),!!Y.isString(c)){if(Y.isString(f))return c.indexOf(f)!==-1;if(Y.isRegExp(f))return f.test(c)}}function cO(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(c,u,f)=>u.toUpperCase()+f)}function lO(s,c){const u=Y.toCamelCase(" "+c);["get","set","has"].forEach(f=>{Object.defineProperty(s,f+u,{value:function(g,k,b){return this[f].call(this,c,g,k,b)},configurable:!0})})}class Wc{constructor(c){c&&this.set(c)}set(c,u,f){const g=this;function k(A,w,C){const x=as(w);if(!x)throw new Error("header name must be a non-empty string");const y=Y.findKey(g,x);(!y||g[y]===void 0||C===!0||C===void 0&&g[y]!==!1)&&(g[y||w]=oc(A))}const b=(A,w)=>Y.forEach(A,(C,x)=>k(C,x,w));return Y.isPlainObject(c)||c instanceof this.constructor?b(c,u):Y.isString(c)&&(c=c.trim())&&!aO(c)?b(rO(c),u):c!=null&&k(u,c,f),this}get(c,u){if(c=as(c),c){const f=Y.findKey(this,c);if(f){const g=this[f];if(!u)return g;if(u===!0)return sO(g);if(Y.isFunction(u))return u.call(this,g,f);if(Y.isRegExp(u))return u.exec(g);throw new TypeError("parser must be boolean|regexp|function")}}}has(c,u){if(c=as(c),c){const f=Y.findKey(this,c);return!!(f&&this[f]!==void 0&&(!u||iu(this,this[f],f,u)))}return!1}delete(c,u){const f=this;let g=!1;function k(b){if(b=as(b),b){const A=Y.findKey(f,b);A&&(!u||iu(f,f[A],A,u))&&(delete f[A],g=!0)}}return Y.isArray(c)?c.forEach(k):k(c),g}clear(c){const u=Object.keys(this);let f=u.length,g=!1;for(;f--;){const k=u[f];(!c||iu(this,this[k],k,c,!0))&&(delete this[k],g=!0)}return g}normalize(c){const u=this,f={};return Y.forEach(this,(g,k)=>{const b=Y.findKey(f,k);if(b){u[b]=oc(g),delete u[k];return}const A=c?cO(k):String(k).trim();A!==k&&delete u[k],u[A]=oc(g),f[A]=!0}),this}concat(...c){return this.constructor.concat(this,...c)}toJSON(c){const u=Object.create(null);return Y.forEach(this,(f,g)=>{f!=null&&f!==!1&&(u[g]=c&&Y.isArray(f)?f.join(", "):f)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([c,u])=>c+": "+u).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(c){return c instanceof this?c:new this(c)}static concat(c,...u){const f=new this(c);return u.forEach(g=>f.set(g)),f}static accessor(c){const f=(this[L_]=this[L_]={accessors:{}}).accessors,g=this.prototype;function k(b){const A=as(b);f[A]||(lO(g,b),f[A]=!0)}return Y.isArray(c)?c.forEach(k):k(c),this}}Wc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.freezeMethods(Wc.prototype);Y.freezeMethods(Wc);const fo=Wc;function ru(s,c){const u=this||uh,f=c||u,g=fo.from(f.headers);let k=f.data;return Y.forEach(s,function(A){k=A.call(u,k,g.normalize(),c?c.status:void 0)}),g.normalize(),k}function tv(s){return!!(s&&s.__CANCEL__)}function Hs(s,c,u){We.call(this,s??"canceled",We.ERR_CANCELED,c,u),this.name="CanceledError"}Y.inherits(Hs,We,{__CANCEL__:!0});function dO(s,c,u){const f=u.config.validateStatus;!u.status||!f||f(u.status)?s(u):c(new We("Request failed with status code "+u.status,[We.ERR_BAD_REQUEST,We.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}const uO=Jn.isStandardBrowserEnv?function(){return{write:function(u,f,g,k,b,A){const w=[];w.push(u+"="+encodeURIComponent(f)),Y.isNumber(g)&&w.push("expires="+new Date(g).toGMTString()),Y.isString(k)&&w.push("path="+k),Y.isString(b)&&w.push("domain="+b),A===!0&&w.push("secure"),document.cookie=w.join("; ")},read:function(u){const f=document.cookie.match(new RegExp("(^|;\\s*)("+u+")=([^;]*)"));return f?decodeURIComponent(f[3]):null},remove:function(u){this.write(u,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function hO(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function fO(s,c){return c?s.replace(/\/+$/,"")+"/"+c.replace(/^\/+/,""):s}function nv(s,c){return s&&!hO(c)?fO(s,c):c}const gO=Jn.isStandardBrowserEnv?function(){const c=/(msie|trident)/i.test(navigator.userAgent),u=document.createElement("a");let f;function g(k){let b=k;return c&&(u.setAttribute("href",b),b=u.href),u.setAttribute("href",b),{href:u.href,protocol:u.protocol?u.protocol.replace(/:$/,""):"",host:u.host,search:u.search?u.search.replace(/^\?/,""):"",hash:u.hash?u.hash.replace(/^#/,""):"",hostname:u.hostname,port:u.port,pathname:u.pathname.charAt(0)==="/"?u.pathname:"/"+u.pathname}}return f=g(window.location.href),function(b){const A=Y.isString(b)?g(b):b;return A.protocol===f.protocol&&A.host===f.host}}():function(){return function(){return!0}}();function pO(s){const c=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return c&&c[1]||""}function mO(s,c){s=s||10;const u=new Array(s),f=new Array(s);let g=0,k=0,b;return c=c!==void 0?c:1e3,function(w){const C=Date.now(),x=f[k];b||(b=C),u[g]=w,f[g]=C;let y=k,D=0;for(;y!==g;)D+=u[y++],y=y%s;if(g=(g+1)%s,g===k&&(k=(k+1)%s),C-b<c)return;const I=x&&C-x;return I?Math.round(D*1e3/I):void 0}}function R_(s,c){let u=0;const f=mO(50,250);return g=>{const k=g.loaded,b=g.lengthComputable?g.total:void 0,A=k-u,w=f(A),C=k<=b;u=k;const x={loaded:k,total:b,progress:b?k/b:void 0,bytes:A,rate:w||void 0,estimated:w&&b&&C?(b-k)/w:void 0,event:g};x[c?"download":"upload"]=!0,s(x)}}const bO=typeof XMLHttpRequest<"u",kO=bO&&function(s){return new Promise(function(u,f){let g=s.data;const k=fo.from(s.headers).normalize(),b=s.responseType;let A;function w(){s.cancelToken&&s.cancelToken.unsubscribe(A),s.signal&&s.signal.removeEventListener("abort",A)}Y.isFormData(g)&&(Jn.isStandardBrowserEnv||Jn.isStandardBrowserWebWorkerEnv)&&k.setContentType(!1);let C=new XMLHttpRequest;if(s.auth){const I=s.auth.username||"",j=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";k.set("Authorization","Basic "+btoa(I+":"+j))}const x=nv(s.baseURL,s.url);C.open(s.method.toUpperCase(),JC(x,s.params,s.paramsSerializer),!0),C.timeout=s.timeout;function y(){if(!C)return;const I=fo.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),H={data:!b||b==="text"||b==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:I,config:s,request:C};dO(function(F){u(F),w()},function(F){f(F),w()},H),C=null}if("onloadend"in C?C.onloadend=y:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(y)},C.onabort=function(){C&&(f(new We("Request aborted",We.ECONNABORTED,s,C)),C=null)},C.onerror=function(){f(new We("Network Error",We.ERR_NETWORK,s,C)),C=null},C.ontimeout=function(){let j=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const H=s.transitional||XC;s.timeoutErrorMessage&&(j=s.timeoutErrorMessage),f(new We(j,H.clarifyTimeoutError?We.ETIMEDOUT:We.ECONNABORTED,s,C)),C=null},Jn.isStandardBrowserEnv){const I=(s.withCredentials||gO(x))&&s.xsrfCookieName&&uO.read(s.xsrfCookieName);I&&k.set(s.xsrfHeaderName,I)}g===void 0&&k.setContentType(null),"setRequestHeader"in C&&Y.forEach(k.toJSON(),function(j,H){C.setRequestHeader(H,j)}),Y.isUndefined(s.withCredentials)||(C.withCredentials=!!s.withCredentials),b&&b!=="json"&&(C.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&C.addEventListener("progress",R_(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&C.upload&&C.upload.addEventListener("progress",R_(s.onUploadProgress)),(s.cancelToken||s.signal)&&(A=I=>{C&&(f(!I||I.type?new Hs(null,s,C):I),C.abort(),C=null)},s.cancelToken&&s.cancelToken.subscribe(A),s.signal&&(s.signal.aborted?A():s.signal.addEventListener("abort",A)));const D=pO(x);if(D&&Jn.protocols.indexOf(D)===-1){f(new We("Unsupported protocol "+D+":",We.ERR_BAD_REQUEST,s));return}C.send(g||null)})},ic={http:HB,xhr:kO};Y.forEach(ic,(s,c)=>{if(s){try{Object.defineProperty(s,"name",{value:c})}catch{}Object.defineProperty(s,"adapterName",{value:c})}});const wO={getAdapter:s=>{s=Y.isArray(s)?s:[s];const{length:c}=s;let u,f;for(let g=0;g<c&&(u=s[g],!(f=Y.isString(u)?ic[u.toLowerCase()]:u));g++);if(!f)throw f===!1?new We(`Adapter ${u} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(Y.hasOwnProp(ic,u)?`Adapter '${u}' is not available in the build`:`Unknown adapter '${u}'`);if(!Y.isFunction(f))throw new TypeError("adapter is not a function");return f},adapters:ic};function su(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Hs(null,s)}function z_(s){return su(s),s.headers=fo.from(s.headers),s.data=ru.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),wO.getAdapter(s.adapter||uh.adapter)(s).then(function(f){return su(s),f.data=ru.call(s,s.transformResponse,f),f.headers=fo.from(f.headers),f},function(f){return tv(f)||(su(s),f&&f.response&&(f.response.data=ru.call(s,s.transformResponse,f.response),f.response.headers=fo.from(f.response.headers))),Promise.reject(f)})}const j_=s=>s instanceof fo?s.toJSON():s;function xr(s,c){c=c||{};const u={};function f(C,x,y){return Y.isPlainObject(C)&&Y.isPlainObject(x)?Y.merge.call({caseless:y},C,x):Y.isPlainObject(x)?Y.merge({},x):Y.isArray(x)?x.slice():x}function g(C,x,y){if(Y.isUndefined(x)){if(!Y.isUndefined(C))return f(void 0,C,y)}else return f(C,x,y)}function k(C,x){if(!Y.isUndefined(x))return f(void 0,x)}function b(C,x){if(Y.isUndefined(x)){if(!Y.isUndefined(C))return f(void 0,C)}else return f(void 0,x)}function A(C,x,y){if(y in c)return f(C,x);if(y in s)return f(void 0,C)}const w={url:k,method:k,data:k,baseURL:b,transformRequest:b,transformResponse:b,paramsSerializer:b,timeout:b,timeoutMessage:b,withCredentials:b,adapter:b,responseType:b,xsrfCookieName:b,xsrfHeaderName:b,onUploadProgress:b,onDownloadProgress:b,decompress:b,maxContentLength:b,maxBodyLength:b,beforeRedirect:b,transport:b,httpAgent:b,httpsAgent:b,cancelToken:b,socketPath:b,responseEncoding:b,validateStatus:A,headers:(C,x)=>g(j_(C),j_(x),!0)};return Y.forEach(Object.keys(s).concat(Object.keys(c)),function(x){const y=w[x]||g,D=y(s[x],c[x],x);Y.isUndefined(D)&&y!==A||(u[x]=D)}),u}const ov="1.3.4",hh={};["object","boolean","number","function","string","symbol"].forEach((s,c)=>{hh[s]=function(f){return typeof f===s||"a"+(c<1?"n ":" ")+s}});const F_={};hh.transitional=function(c,u,f){function g(k,b){return"[Axios v"+ov+"] Transitional option '"+k+"'"+b+(f?". "+f:"")}return(k,b,A)=>{if(c===!1)throw new We(g(b," has been removed"+(u?" in "+u:"")),We.ERR_DEPRECATED);return u&&!F_[b]&&(F_[b]=!0,console.warn(g(b," has been deprecated since v"+u+" and will be removed in the near future"))),c?c(k,b,A):!0}};function _O(s,c,u){if(typeof s!="object")throw new We("options must be an object",We.ERR_BAD_OPTION_VALUE);const f=Object.keys(s);let g=f.length;for(;g-- >0;){const k=f[g],b=c[k];if(b){const A=s[k],w=A===void 0||b(A,k,s);if(w!==!0)throw new We("option "+k+" must be "+w,We.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new We("Unknown option "+k,We.ERR_BAD_OPTION)}}const Mu={assertOptions:_O,validators:hh},Po=Mu.validators;class mc{constructor(c){this.defaults=c,this.interceptors={request:new O_,response:new O_}}request(c,u){typeof c=="string"?(u=u||{},u.url=c):u=c||{},u=xr(this.defaults,u);const{transitional:f,paramsSerializer:g,headers:k}=u;f!==void 0&&Mu.assertOptions(f,{silentJSONParsing:Po.transitional(Po.boolean),forcedJSONParsing:Po.transitional(Po.boolean),clarifyTimeoutError:Po.transitional(Po.boolean)},!1),g!==void 0&&Mu.assertOptions(g,{encode:Po.function,serialize:Po.function},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase();let b;b=k&&Y.merge(k.common,k[u.method]),b&&Y.forEach(["delete","get","head","post","put","patch","common"],j=>{delete k[j]}),u.headers=fo.concat(b,k);const A=[];let w=!0;this.interceptors.request.forEach(function(H){typeof H.runWhen=="function"&&H.runWhen(u)===!1||(w=w&&H.synchronous,A.unshift(H.fulfilled,H.rejected))});const C=[];this.interceptors.response.forEach(function(H){C.push(H.fulfilled,H.rejected)});let x,y=0,D;if(!w){const j=[z_.bind(this),void 0];for(j.unshift.apply(j,A),j.push.apply(j,C),D=j.length,x=Promise.resolve(u);y<D;)x=x.then(j[y++],j[y++]);return x}D=A.length;let I=u;for(y=0;y<D;){const j=A[y++],H=A[y++];try{I=j(I)}catch(ee){H.call(this,ee);break}}try{x=z_.call(this,I)}catch(j){return Promise.reject(j)}for(y=0,D=C.length;y<D;)x=x.then(C[y++],C[y++]);return x}getUri(c){c=xr(this.defaults,c);const u=nv(c.baseURL,c.url);return JC(u,c.params,c.paramsSerializer)}}Y.forEach(["delete","get","head","options"],function(c){mc.prototype[c]=function(u,f){return this.request(xr(f||{},{method:c,url:u,data:(f||{}).data}))}});Y.forEach(["post","put","patch"],function(c){function u(f){return function(k,b,A){return this.request(xr(A||{},{method:c,headers:f?{"Content-Type":"multipart/form-data"}:{},url:k,data:b}))}}mc.prototype[c]=u(),mc.prototype[c+"Form"]=u(!0)});const rc=mc;class fh{constructor(c){if(typeof c!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(k){u=k});const f=this;this.promise.then(g=>{if(!f._listeners)return;let k=f._listeners.length;for(;k-- >0;)f._listeners[k](g);f._listeners=null}),this.promise.then=g=>{let k;const b=new Promise(A=>{f.subscribe(A),k=A}).then(g);return b.cancel=function(){f.unsubscribe(k)},b},c(function(k,b,A){f.reason||(f.reason=new Hs(k,b,A),u(f.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(c){if(this.reason){c(this.reason);return}this._listeners?this._listeners.push(c):this._listeners=[c]}unsubscribe(c){if(!this._listeners)return;const u=this._listeners.indexOf(c);u!==-1&&this._listeners.splice(u,1)}static source(){let c;return{token:new fh(function(g){c=g}),cancel:c}}}const AO=fh;function CO(s){return function(u){return s.apply(null,u)}}function vO(s){return Y.isObject(s)&&s.isAxiosError===!0}const Iu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Iu).forEach(([s,c])=>{Iu[c]=s});const yO=Iu;function iv(s){const c=new rc(s),u=jC(rc.prototype.request,c);return Y.extend(u,rc.prototype,c,{allOwnKeys:!0}),Y.extend(u,c,null,{allOwnKeys:!0}),u.create=function(g){return iv(xr(s,g))},u}const Et=iv(uh);Et.Axios=rc;Et.CanceledError=Hs;Et.CancelToken=AO;Et.isCancel=tv;Et.VERSION=ov;Et.toFormData=$c;Et.AxiosError=We;Et.Cancel=Et.CanceledError;Et.all=function(c){return Promise.all(c)};Et.spread=CO;Et.isAxiosError=vO;Et.mergeConfig=xr;Et.AxiosHeaders=fo;Et.formToJSON=s=>ev(Y.isHTMLForm(s)?new FormData(s):s);Et.HttpStatusCode=yO;Et.default=Et;const cn=Et,Mn={url:"http://localhost:8000/api/v1"};var xO={async validateUserLogin(s){try{return(await cn.post(Mn.url+"/login",s)).data}catch(c){console.log(c)}}},EO={async logout(){try{return(await cn.get(`${Mn.url}/logout`)).data}catch(s){console.log(s)}}},DO={async sendEmailToUser(s){return(await cn.post(`${Mn.url}/password-reset`,s)).data}},TO={async resetPasswordOnNewAccount(s){return(await cn.post(`${Mn.url}/reset-password`,s)).data}},SO={async changePassword(s){return(await cn.post(`${Mn.url}/admin/change-password`,s)).data}};const qt={validateUserLogin:s=>xO.validateUserLogin(s),saveUserDetailsToLocalStorage:s=>localStorage.setItem("user",JSON.stringify(s)),sendEmailToUser:s=>DO.sendEmailToUser(s),resetPasswordOnNewAccount:s=>TO.resetPasswordOnNewAccount(s),changePassword:s=>SO.changePassword(s),logout:()=>EO.logout(),loggedInUserId:()=>JSON.parse(localStorage.getItem("user")).id,loggedUserName:()=>JSON.parse(localStorage.getItem("user")).name,isAuthenticated:()=>!!JSON.parse(localStorage.getItem("user"))},MO="/assets/dist/img/avatar4.png",IO={data(){return{router:Vs(),profile:"",loggedUserName:""}},methods:{async logout(){(await qt.logout()).success&&(toastr.success("Logout successful"),localStorage.removeItem("user"),this.router.push({name:"Login"}))}},async mounted(){qt.loggedInUserId(),this.profile="Home",this.loggedUserName=await qt.loggedUserName()}},NO={class:"main-header navbar navbar-expand navbar-white navbar-light"},PO={class:"navbar-nav d-flex align-items-center",style:{gap:"20px"}},BO=N("li",{class:"nav-item"},[N("span",{class:"nav-link","data-widget":"pushmenu",role:"button"},[N("i",{class:"fas fa-bars"})])],-1),OO={class:"nav-item"},LO={class:"text-lg font-weight-bold"},RO={class:"navbar-nav ml-auto"},zO={class:"nav-item dropdown"},jO=N("span",{class:"nav-link d-flex justify-content-center align-items-center","data-toggle":"dropdown"},[N("img",{src:MO,alt:"AdminLTE Logo",class:"brand-image img-circle elevation-3",style:{width:"33px",cursor:"pointer"}})],-1),FO={class:"dropdown-menu dropdown-menu-md dropdown-menu-right"},VO=N("i",{class:"fas fa-key mr-2"},null,-1),UO=N("div",{class:"dropdown-divider"},null,-1),HO=N("i",{class:"fas fa-sign-out-alt mr-2"},null,-1);function $O(s,c,u,f,g,k){const b=Wt("router-link");return vt(),Gt("nav",NO,[N("ul",PO,[BO,N("li",OO,[N("span",LO,Oo(g.loggedUserName),1)])]),N("ul",RO,[N("li",zO,[jO,N("div",FO,[Ee(b,{class:"dropdown-item",to:{name:"ChangePassword"}},{default:Xn(()=>[VO,to(" Change Password ")]),_:1}),UO,N("span",{onClick:c[0]||(c[0]=A=>k.logout()),class:"dropdown-item",style:{cursor:"pointer"}},[HO,to(" Logout ")])])])])])}const qO=wn(IO,[["render",$O]]),WO={},GO={class:"main-footer"},KO=N("strong",null,"Copyright © 2023-2026 BRACNet.com.",-1);function YO(s,c,u,f,g,k){return vt(),Gt("footer",GO,[KO,to(" All rights reserved. ")])}const QO=wn(WO,[["render",YO]]),ZO={components:{AdminSidebar:cP,Navbar:qO,Footer:QO}};function JO(s,c,u,f,g,k){const b=Wt("Navbar"),A=Wt("AdminSidebar"),w=Wt("Footer");return vt(),Gt(xt,null,[Ee(b),Ee(A),OA(s.$slots,"default"),Ee(w)],64)}const XO=wn(ZO,[["render",JO]]);var V_={layoutGenerator(){return Vs().currentRoute.value.name=="Login"?"UnauthenticatedLayout":JSON.parse(localStorage.getItem("user"))?"AdminLayout":"UnauthenticatedLayout"},setAxiosToken:()=>{let s=JSON.parse(localStorage.getItem("user"));s&&(cn.defaults.headers.common.Authorization=`Bearer ${s.token}`)}};const e4={components:{AdminLayout:XO},methods:{layout(){return V_.setAxiosToken(),V_.layoutGenerator()}}};function t4(s,c,u,f,g,k){const b=Wt("router-view");return vt(),Ds(PA(k.layout()),null,{default:Xn(()=>[(vt(),Ds(b,{key:s.$route.path}))]),_:1})}const n4=wn(e4,[["render",t4]]),o4="modulepreload",i4=function(s){return"/"+s},U_={},r4=function(c,u,f){if(!u||u.length===0)return c();const g=document.getElementsByTagName("link");return Promise.all(u.map(k=>{if(k=i4(k),k in U_)return;U_[k]=!0;const b=k.endsWith(".css"),A=b?'[rel="stylesheet"]':"";if(!!f)for(let x=g.length-1;x>=0;x--){const y=g[x];if(y.href===k&&(!b||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${k}"]${A}`))return;const C=document.createElement("link");if(C.rel=b?"stylesheet":o4,b||(C.as="script",C.crossOrigin=""),C.href=k,document.head.appendChild(C),b)return new Promise((x,y)=>{C.addEventListener("load",x),C.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${k}`)))})})).then(()=>c())},s4={__name:"HomeView",setup(s){return(c,u)=>(vt(),Gt("main"))}};class a4{constructor(c,u){this.userID=c,this.password=u}}const c4={data(){return{loginModel:new a4,router:Vs()}},methods:{async handleForm(){let s=await qt.validateUserLogin(this.loginModel);s!=null&&s.success?(qt.saveUserDetailsToLocalStorage(s),toastr.success(s==null?void 0:s.message),this.router.push({name:"Home"})):toastr.error(s==null?void 0:s.message)}}},$s=s=>(Bs("data-v-ff3d0618"),s=s(),Os(),s),l4={class:"d-flex vh-100 justify-content-center align-items-center"},d4={class:"login-box"},u4={class:"card card-outline card-primary"},h4=$s(()=>N("div",{class:"card-header text-center"},[N("h2",{class:"h1",style:{"font-family":"sans-serif"}},"BRACNet")],-1)),f4={class:"card-body"},g4={class:"input-group mb-3"},p4=$s(()=>N("div",{class:"input-group-append"},[N("div",{class:"input-group-text"},[N("span",{class:"fas fa-envelope"})])],-1)),m4={class:"input-group mb-3"},b4=$s(()=>N("div",{class:"input-group-append"},[N("div",{class:"input-group-text"},[N("span",{class:"fas fa-lock"})])],-1)),k4=$s(()=>N("div",{class:"btn-block"},[N("div",null,[N("button",{type:"submit",class:"btn btn-primary btn-block"},"Sign In")])],-1)),w4={class:"row mt-3"},_4={class:"col-12 forgot-pass"},A4={class:"text-right"},C4={class:"mb-1"},v4=$s(()=>N("hr",null,null,-1));function y4(s,c,u,f,g,k){const b=Wt("router-link");return vt(),Gt("div",l4,[N("div",d4,[N("div",u4,[h4,N("div",f4,[N("form",{onSubmit:c[2]||(c[2]=Ii(A=>k.handleForm(),["prevent"]))},[N("div",g4,[st(N("input",{type:"text",class:"form-control",placeholder:"Email or Mobile","onUpdate:modelValue":c[0]||(c[0]=A=>g.loginModel.userID=A),required:""},null,512),[[_t,g.loginModel.userID]]),p4]),N("div",m4,[st(N("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":c[1]||(c[1]=A=>g.loginModel.password=A),required:""},null,512),[[_t,g.loginModel.password]]),b4]),k4,N("div",w4,[N("div",_4,[N("div",A4,[N("p",C4,[Ee(b,{to:{name:"Forgot Password"},class:""},{default:Xn(()=>[to(" forgot password? ")]),_:1})])])])])],32),v4])])])])}const x4=wn(c4,[["render",y4],["__scopeId","data-v-ff3d0618"]]);let E4=class{constructor(c){this.userID=c}};const D4={data(){return{forgotPasswordModel:new E4,router:Vs()}},methods:{async handleForm(){let s=await qt.sendEmailToUser(this.forgotPasswordModel);console.log(s),(s==null?void 0:s.success)==!1&&toastr.warning(s.message),(s==null?void 0:s.result)==!0&&(toastr.success("We have set you an email with reset link."),this.router.push({name:"Login"}))}}},qs=s=>(Bs("data-v-3c14c366"),s=s(),Os(),s),T4={class:"d-flex vh-100 justify-content-center align-items-center"},S4={class:"login-box"},M4={class:"card card-outline card-primary"},I4=qs(()=>N("div",{class:"card-header text-center"},[N("h2",{class:"h1",style:{"font-family":"sans-serif"}},"Forgot Password")],-1)),N4={class:"card-body"},P4={class:"input-group mb-3"},B4=qs(()=>N("div",{class:"input-group-append"},[N("div",{class:"input-group-text"},[N("span",{class:"fas fa-envelope"})])],-1)),O4=qs(()=>N("div",{class:"btn-block"},[N("div",null,[N("button",{type:"submit",class:"btn btn-primary btn-block"},"Continue")])],-1)),L4={class:"go-login"},R4=qs(()=>N("br",null,null,-1)),z4=qs(()=>N("hr",null,null,-1));function j4(s,c,u,f,g,k){const b=Wt("router-link");return vt(),Gt("div",T4,[N("div",S4,[N("div",M4,[I4,N("div",N4,[N("form",{onSubmit:c[1]||(c[1]=Ii(A=>k.handleForm(),["prevent"]))},[N("div",P4,[st(N("input",{type:"userID",class:"form-control",placeholder:"Enter email address","onUpdate:modelValue":c[0]||(c[0]=A=>g.forgotPasswordModel.userID=A)},null,512),[[_t,g.forgotPasswordModel.userID]]),B4]),O4,N("div",L4,[Ee(b,{to:{name:"Login"},class:""},{default:Xn(()=>[to(" Back to Login ")]),_:1})]),R4],32),z4])])])])}const F4=wn(D4,[["render",j4],["__scopeId","data-v-3c14c366"]]);class V4{constructor(c,u,f,g,k){this.otp=c,this.password=u,this.password_confirmation=f,this.token=k}}const U4={data(){return{resetPasswordModel:new V4,router:Vs()}},methods:{async handleForm(){let s=await qt.resetPasswordOnNewAccount(this.resetPasswordModel);s.success&&(toastr.success(s.message),this.router.push({name:"Login"}))}},mounted(){this.resetPasswordModel.token=this.$route.query.token}},H4={class:"d-flex vh-100 justify-content-center align-items-center"},$4={class:"login-box"},q4={class:"card card-outline card-primary"},W4=N("div",{class:"card-header text-center"},[N("h2",{class:"h1",style:{"font-family":"sans-serif"}},"Reset Password")],-1),G4={class:"card-body"},K4={class:"form-group"},Y4=N("label",{for:"password"},"New Password",-1),Q4=N("span",{class:"form-text small text-muted"},null,-1),Z4={class:"form-group"},J4=N("label",{for:"password_confirmation"},"Retype Password",-1),X4=N("span",{class:"form-text small text-muted"},null,-1),eL={class:"form-group"},tL=N("label",{for:"otp"},"OTP",-1),nL=N("span",{class:"form-text small text-muted"},null,-1),oL=N("div",{class:"btn-block"},[N("div",null,[N("button",{type:"submit",class:"btn btn-primary btn-block"},"Reset Password")])],-1);function iL(s,c,u,f,g,k){return vt(),Gt("div",H4,[N("div",$4,[N("div",q4,[W4,N("div",G4,[N("form",{class:"form",role:"form",autocomplete:"off",onSubmit:c[3]||(c[3]=Ii(b=>k.handleForm(),["prevent"]))},[N("div",K4,[Y4,st(N("input",{type:"password",id:"password",class:"form-control","onUpdate:modelValue":c[0]||(c[0]=b=>g.resetPasswordModel.password=b),required:""},null,512),[[_t,g.resetPasswordModel.password]]),Q4]),N("div",Z4,[J4,st(N("input",{type:"password",id:"password_confirmation",class:"form-control",required:"","onUpdate:modelValue":c[1]||(c[1]=b=>g.resetPasswordModel.password_confirmation=b)},null,512),[[_t,g.resetPasswordModel.password_confirmation]]),X4]),N("div",eL,[tL,st(N("input",{type:"text",id:"otp",class:"form-control",required:"",maxlength:"6",minlength:"6","onUpdate:modelValue":c[2]||(c[2]=b=>g.resetPasswordModel.otp=b)},null,512),[[_t,g.resetPasswordModel.otp]]),nL]),oL],32)])])])])}const rL=wn(U4,[["render",iL]]);class sL{constructor(c,u,f){this.currentPassword=c,this.newPassword=u,this.retypePassword=f}}const aL={data(){return{changePasswordModel:new sL}},methods:{async handleForm(){let s=await qt.changePassword(this.changePasswordModel);s.success?toastr.success(s.message):s.success==!1&&toastr.warning(s.message)}}},cL={class:"content-wrapper"},lL={class:"content"},dL={class:"container-fluid"},uL={class:"d-flex justify-content-center align-items-center",style:{height:"80vh"}},hL={class:"col-md-6"},fL=N("span",{class:"anchor",id:"formChangePassword"},null,-1),gL={class:"card card-outline-secondary"},pL=N("div",{class:"card-header"},[N("h3",{class:"mb-0"},"Change Password")],-1),mL={class:"card-body"},bL={class:"form-group"},kL=N("label",{for:"inputPasswordOld"},"Current Password",-1),wL={class:"form-group"},_L=N("label",{for:"inputPasswordNew"},"New Password",-1),AL=N("span",{class:"form-text small text-muted"},null,-1),CL={class:"form-group"},vL=N("label",{for:"inputPasswordNewVerify"},"Retype Password",-1),yL=N("span",{class:"form-text small text-muted"},null,-1),xL=N("div",{class:"btn-block"},[N("div",null,[N("button",{type:"submit",class:"btn btn-primary btn-block"},"Change Password")])],-1);function EL(s,c,u,f,g,k){return vt(),Gt("div",cL,[N("section",lL,[N("div",dL,[N("div",uL,[N("div",hL,[fL,N("div",gL,[pL,N("div",mL,[N("form",{class:"form",role:"form",autocomplete:"off",onSubmit:c[4]||(c[4]=Ii(b=>k.handleForm(),["prevent"]))},[N("div",bL,[kL,st(N("input",{type:"password",class:"form-control","onUpdate:modelValue":c[0]||(c[0]=b=>g.changePasswordModel.currentPassword=b),required:""},null,512),[[_t,g.changePasswordModel.currentPassword]])]),N("div",wL,[_L,st(N("input",{type:"password",class:"form-control","onUpdate:modelValue":c[1]||(c[1]=b=>g.changePasswordModel.newPassword=b),required:""},null,512),[[_t,g.changePasswordModel.newPassword]]),AL]),N("div",CL,[vL,st(N("input",{type:"password",class:"form-control",onFocusout:c[2]||(c[2]=(...b)=>s.matchPassword&&s.matchPassword(...b)),"onUpdate:modelValue":c[3]||(c[3]=b=>g.changePasswordModel.retypePassword=b),required:""},null,544),[[_t,g.changePasswordModel.retypePassword]]),yL]),xL],32)])])])])])])])}const DL=wn(aL,[["render",EL]]);var cs={async deactivateJob(s){try{return(await cn.delete(`${Mn.url}/admin/job/delete/${s}`)).data}catch(c){console.log(c)}},async getAllJobs(){var s=await cn.get(`${Mn.url}/admin/job`);return s=s.data.data,s},async storeNewJob(s){var c=await cn.post(`${Mn.url}/admin/job/store`,s);return c.data},async getJob(s){var c=await cn.get(`${Mn.url}/admin/job/${s}`);return c.data},async updateJob(s,c){var u=await cn.put(`${Mn.url}/admin/job/update/${c}`,s);return u.data}};const kr={deActivateJob:s=>cs.deactivateJob(s),getAllJobs:()=>cs.getAllJobs(),storeNewJob:s=>cs.storeNewJob(s),getJob:s=>cs.getJob(s),updateJob:(s,c)=>cs.updateJob(s,c)};var TL={async adminCardMetadata(){var s=await cn.get(`${Mn.url}/admin/metadata`);return s.data}};const SL={adminCardMetadata:()=>TL.adminCardMetadata()};const ML={components:{},data(){return{adminCardMetadata:{jobs:"Loading",activeJobs:"Loading",views:"Loading"},jobList:[],hasValue:"text-white-50"}},async mounted(){this.adminCardMetadata=await SL.adminCardMetadata(),this.hasValue="text-light",this.jobList=await kr.getAllJobs()},methods:{async deactivateJob(s){if(confirm("Do you want to deactivate this job? ")){let c=await kr.deActivateJob(s);c.success&&(this.jobList=await kr.getAllJobs(),toastr.info(c.message))}}}},On=s=>(Bs("data-v-93ba9d4b"),s=s(),Os(),s),IL={class:"content-wrapper"},NL={class:"content"},PL={class:"container-fluid"},BL={class:"row pt-4"},OL={class:"col-md-4"},LL={class:In("small-box bg-red overflow-hidden")},RL={class:"inner"},zL=On(()=>N("p",null,"Total Jobs",-1)),jL=On(()=>N("div",{class:"icon"},[N("i",{class:"fas fa-list"})],-1)),FL={class:"col-md-4"},VL={class:In("small-box bg-blue overflow-hidden")},UL={class:"inner"},HL=On(()=>N("p",null,"Active Jobs",-1)),$L=On(()=>N("div",{class:"icon"},[N("i",{class:"fas fa-play-circle"})],-1)),qL={class:"col-md-4"},WL={class:In("small-box bg-green overflow-hidden")},GL={class:"inner"},KL=On(()=>N("p",null,"Jobs Views",-1)),YL=On(()=>N("div",{class:"icon"},[N("i",{class:"fas fa-eye"})],-1)),QL={class:"row"},ZL={class:"col-12"},JL={class:"card"},XL=On(()=>N("div",{class:"card-header"},[N("div",{class:"d-flex justify-content-between"},[N("h3",{class:"card-title"},"Job List")])],-1)),eR={class:"card-body"},tR={id:"example1",class:"table table-sm table-striped table-head-fixed table-hover"},nR=On(()=>N("thead",null,[N("tr",null,[N("th",null,"ID"),N("th",null,"Title"),N("th",null,"Deadline"),N("th",null,"Action")])],-1)),oR={class:"btn-group dropright"},iR=On(()=>N("button",{type:"button",class:"btn btn-warning dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Action ",-1)),rR={class:"dropdown-menu"},sR=On(()=>N("a",{class:"dropdown-item",href:"#"},[N("i",{class:"fas fa-edit"}),to(" Edit")],-1)),aR=["onClick"],cR=On(()=>N("i",{class:"fas fa-trash"},null,-1));function lR(s,c,u,f,g,k){const b=Wt("ContentHeader"),A=Wt("router-link");return vt(),Gt("div",IL,[Ee(b,{title:"Dashboard"}),N("section",NL,[N("div",PL,[N("div",BL,[N("div",OL,[N("div",LL,[N("div",RL,[N("h3",{class:In(g.hasValue)},Oo(g.adminCardMetadata.jobs),3),zL]),jL])]),N("div",FL,[N("div",VL,[N("div",UL,[N("h3",{class:In(g.hasValue)},Oo(g.adminCardMetadata.activeJobs),3),HL]),$L])]),N("div",qL,[N("div",WL,[N("div",GL,[N("h3",{class:In(g.hasValue)},Oo(g.adminCardMetadata.views),3),KL]),YL])])]),N("div",QL,[N("div",ZL,[N("div",JL,[XL,N("div",eR,[N("table",tR,[nR,N("tbody",null,[(vt(!0),Gt(xt,null,BA(g.jobList,w=>(vt(),Gt("tr",{key:w.id},[N("td",null,Oo(w.id),1),N("td",null,Oo(w.title),1),N("td",null,Oo(w.application_deadline),1),N("td",null,[N("div",oR,[iR,N("div",rR,[Ee(A,{to:{name:"JobUpdate",params:{id:w.id}}},{default:Xn(()=>[sR]),_:2},1032,["to"]),N("a",{onClick:C=>k.deactivateJob(w.id),class:"dropdown-item",href:"#"},[cR,to("Delete")],8,aR)])])])]))),128))])])])])])])])])])}const dR=wn(ML,[["render",lR],["__scopeId","data-v-93ba9d4b"]]);var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function uR(s){if(s.__esModule)return s;var c=s.default;if(typeof c=="function"){var u=function f(){if(this instanceof f){var g=[null];g.push.apply(g,arguments);var k=Function.bind.apply(c,g);return new k}return c.apply(this,arguments)};u.prototype=c.prototype}else u={};return Object.defineProperty(u,"__esModule",{value:!0}),Object.keys(s).forEach(function(f){var g=Object.getOwnPropertyDescriptor(s,f);Object.defineProperty(u,f,g.get?g:{enumerable:!0,get:function(){return s[f]}})}),u}var bc={},hR={get exports(){return bc},set exports(s){bc=s}};(function(s,c){(function(u){const f=u.en=u.en||{};f.dictionary=Object.assign(f.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(u,f){s.exports=f()}(self,()=>(()=>{var u={3062:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const I=D},903:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const I=D},3143:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=D},4717:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const I=D},9315:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const I=D},8733:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const I=D},3508:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const I=D},2640:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const I=D},5083:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const I=D},4036:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const I=D},3773:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const I=D},3689:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const I=D},1905:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=D},9773:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const I=D},2347:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const I=D},7754:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const I=D},4564:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const I=D},4652:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const I=D},7442:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const I=D},9292:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=D},1613:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const I=D},6306:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const I=D},3881:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const I=D},6945:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const I=D},4906:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const I=D},5332:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const I=D},6781:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const I=D},5485:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=D},3949:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=D},7686:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=D},7339:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const I=D},9688:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=D},8847:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const I=D},6574:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const I=D},4879:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=D},3662:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const I=D},2577:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=D},1046:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=D},8793:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=D},4650:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const I=D},7676:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=D},5868:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=D},6764:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const I=D},9695:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const I=D},5542:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=D},3332:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const I=D},4793:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const I=D},3488:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=D},8506:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const I=D},4921:(b,A,w)=>{w.d(A,{Z:()=>I});var C=w(1799),x=w.n(C),y=w(2609),D=w.n(y)()(x());D.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const I=D},2609:b=>{b.exports=function(A){var w=[];return w.toString=function(){return this.map(function(C){var x=A(C);return C[2]?"@media ".concat(C[2]," {").concat(x,"}"):x}).join("")},w.i=function(C,x,y){typeof C=="string"&&(C=[[null,C,""]]);var D={};if(y)for(var I=0;I<this.length;I++){var j=this[I][0];j!=null&&(D[j]=!0)}for(var H=0;H<C.length;H++){var ee=[].concat(C[H]);y&&D[ee[0]]||(x&&(ee[2]?ee[2]="".concat(x," and ").concat(ee[2]):ee[2]=x),w.push(ee))}},w}},1799:b=>{function A(C,x){return function(y){if(Array.isArray(y))return y}(C)||function(y,D){var I=y&&(typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"]);if(I!=null){var j,H,ee=[],F=!0,O=!1;try{for(I=I.call(y);!(F=(j=I.next()).done)&&(ee.push(j.value),!D||ee.length!==D);F=!0);}catch(V){O=!0,H=V}finally{try{F||I.return==null||I.return()}finally{if(O)throw H}}return ee}}(C,x)||function(y,D){if(y){if(typeof y=="string")return w(y,D);var I=Object.prototype.toString.call(y).slice(8,-1);if(I==="Object"&&y.constructor&&(I=y.constructor.name),I==="Map"||I==="Set")return Array.from(y);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return w(y,D)}}(C,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function w(C,x){(x==null||x>C.length)&&(x=C.length);for(var y=0,D=new Array(x);y<x;y++)D[y]=C[y];return D}b.exports=function(C){var x=A(C,4),y=x[1],D=x[3];if(!D)return y;if(typeof btoa=="function"){var I=btoa(unescape(encodeURIComponent(JSON.stringify(D)))),j="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(I),H="/*# ".concat(j," */"),ee=D.sources.map(function(F){return"/*# sourceURL=".concat(D.sourceRoot||"").concat(F," */")});return[y].concat(ee).concat([H]).join(`
`)}return[y].join(`
`)}},6062:(b,A,w)=>{var C,x=function(){return C===void 0&&(C=!!(window&&document&&document.all&&!window.atob)),C},y=function(){var Q={};return function(q){if(Q[q]===void 0){var S=document.querySelector(q);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch{S=null}Q[q]=S}return Q[q]}}(),D=[];function I(Q){for(var q=-1,S=0;S<D.length;S++)if(D[S].identifier===Q){q=S;break}return q}function j(Q,q){for(var S={},Z=[],me=0;me<Q.length;me++){var se=Q[me],we=q.base?se[0]+q.base:se[0],ke=S[we]||0,Ye="".concat(we," ").concat(ke);S[we]=ke+1;var De=I(Ye),ze={css:se[1],media:se[2],sourceMap:se[3]};De!==-1?(D[De].references++,D[De].updater(ze)):D.push({identifier:Ye,updater:ge(ze,q),references:1}),Z.push(Ye)}return Z}function H(Q){var q=document.createElement("style"),S=Q.attributes||{};if(S.nonce===void 0){var Z=w.nc;Z&&(S.nonce=Z)}if(Object.keys(S).forEach(function(se){q.setAttribute(se,S[se])}),typeof Q.insert=="function")Q.insert(q);else{var me=y(Q.insert||"head");if(!me)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");me.appendChild(q)}return q}var ee,F=(ee=[],function(Q,q){return ee[Q]=q,ee.filter(Boolean).join(`
`)});function O(Q,q,S,Z){var me=S?"":Z.media?"@media ".concat(Z.media," {").concat(Z.css,"}"):Z.css;if(Q.styleSheet)Q.styleSheet.cssText=F(q,me);else{var se=document.createTextNode(me),we=Q.childNodes;we[q]&&Q.removeChild(we[q]),we.length?Q.insertBefore(se,we[q]):Q.appendChild(se)}}function V(Q,q,S){var Z=S.css,me=S.media,se=S.sourceMap;if(me?Q.setAttribute("media",me):Q.removeAttribute("media"),se&&typeof btoa<"u"&&(Z+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(se))))," */")),Q.styleSheet)Q.styleSheet.cssText=Z;else{for(;Q.firstChild;)Q.removeChild(Q.firstChild);Q.appendChild(document.createTextNode(Z))}}var G=null,oe=0;function ge(Q,q){var S,Z,me;if(q.singleton){var se=oe++;S=G||(G=H(q)),Z=O.bind(null,S,se,!1),me=O.bind(null,S,se,!0)}else S=H(q),Z=V.bind(null,S,q),me=function(){(function(we){if(we.parentNode===null)return!1;we.parentNode.removeChild(we)})(S)};return Z(Q),function(we){if(we){if(we.css===Q.css&&we.media===Q.media&&we.sourceMap===Q.sourceMap)return;Z(Q=we)}else me()}}b.exports=function(Q,q){(q=q||{}).singleton||typeof q.singleton=="boolean"||(q.singleton=x());var S=j(Q=Q||[],q);return function(Z){if(Z=Z||[],Object.prototype.toString.call(Z)==="[object Array]"){for(var me=0;me<S.length;me++){var se=I(S[me]);D[se].references--}for(var we=j(Z,q),ke=0;ke<S.length;ke++){var Ye=I(S[ke]);D[Ye].references===0&&(D[Ye].updater(),D.splice(Ye,1))}S=we}}}}},f={};function g(b){var A=f[b];if(A!==void 0)return A.exports;var w=f[b]={id:b,exports:{}};return u[b](w,w.exports,g),w.exports}g.n=b=>{var A=b&&b.__esModule?()=>b.default:()=>b;return g.d(A,{a:A}),A},g.d=(b,A)=>{for(var w in A)g.o(A,w)&&!g.o(b,w)&&Object.defineProperty(b,w,{enumerable:!0,get:A[w]})},g.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),g.o=(b,A)=>Object.prototype.hasOwnProperty.call(b,A),g.nc=void 0;var k={};return(()=>{function b({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!e())return;const a=typeof r.composedPath=="function"?r.composedPath():[],l=typeof n=="function"?n():n;for(const d of l)if(d.contains(r.target)||a.includes(d))return;t()})}function A(i){const e=i;e.set("_isCssTransitionsDisabled",!1),e.disableCssTransitions=()=>{e._isCssTransitionsDisabled=!0},e.enableCssTransitions=()=>{e._isCssTransitionsDisabled=!1},e.extendTemplate({attributes:{class:[e.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function w({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}g.d(k,{default:()=>qd});const C=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),x={isMac:D(C),isWindows:function(i){return i.indexOf("windows")>-1}(C),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(C),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(C),isiOS:function(i){return!!i.match(/iphone|ipad/i)||D(i)&&navigator.maxTouchPoints>0}(C),isAndroid:function(i){return i.indexOf("android")>-1}(C),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(C),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},y=x;function D(i){return i.indexOf("macintosh")>-1}function I(i,e,t,n){t=t||function(d,h){return d===h};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),r=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(d,h,p){const m=j(d,h,p);if(m===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const _=H(d,m),v=H(h,m),E=j(_,v,p),T=d.length-E,M=h.length-E;return{firstIndex:m,lastIndexOld:T,lastIndexNew:M}}(o,r,t);return n?function(d,h){const{firstIndex:p,lastIndexOld:m,lastIndexNew:_}=d;if(p===-1)return Array(h).fill("equal");let v=[];return p>0&&(v=v.concat(Array(p).fill("equal"))),_-p>0&&(v=v.concat(Array(_-p).fill("insert"))),m-p>0&&(v=v.concat(Array(m-p).fill("delete"))),_<h&&(v=v.concat(Array(h-_).fill("equal"))),v}(a,r.length):function(d,h){const p=[],{firstIndex:m,lastIndexOld:_,lastIndexNew:v}=h;return v-m>0&&p.push({index:m,type:"insert",values:d.slice(m,v)}),_-m>0&&p.push({index:m+(v-m),type:"delete",howMany:_-m}),p}(r,a)}function j(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function H(i,e){return i.slice(e).reverse()}function ee(i,e,t){t=t||function(T,M){return T===M};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return ee.fastDiff(i,e,t,!0);let r,a;if(o<n){const T=i;i=e,e=T,r="delete",a="insert"}else r="insert",a="delete";const l=i.length,d=e.length,h=d-l,p={},m={};function _(T){const M=(m[T-1]!==void 0?m[T-1]:-1)+1,B=m[T+1]!==void 0?m[T+1]:-1,R=M>B?-1:1;p[T+R]&&(p[T]=p[T+R].slice(0)),p[T]||(p[T]=[]),p[T].push(M>B?r:a);let K=Math.max(M,B),ue=K-T;for(;ue<l&&K<d&&t(i[ue],e[K]);)ue++,K++,p[T].push("equal");return K}let v,E=0;do{for(v=-E;v<h;v++)m[v]=_(v);for(v=h+E;v>h;v--)m[v]=_(v);m[h]=_(h),E++}while(m[h]!==d);return p[h].slice(1)}function F(i,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(r=>{if(r in i.prototype||typeof t=="function"&&(r=="length"||r=="name"||r=="prototype"))return;const a=Object.getOwnPropertyDescriptor(t,r);a.enumerable=!1,Object.defineProperty(i.prototype,r,a)})})}ee.fastDiff=I;const O=function(){return function i(){i.called=!0}};class V{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=O(),this.off=O()}}const G=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function oe(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+G[i>>0&255]+G[i>>8&255]+G[i>>16&255]+G[i>>24&255]+G[e>>0&255]+G[e>>8&255]+G[e>>16&255]+G[e>>24&255]+G[t>>0&255]+G[t>>8&255]+G[t>>16&255]+G[t>>24&255]+G[n>>0&255]+G[n>>8&255]+G[n>>16&255]+G[n>>24&255]}const ge={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function Q(i,e){const t=ge.get(e.priority);for(let n=0;n<i.length;n++)if(ge.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}const q="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class S extends Error{constructor(e,t,n){super(function(o,r){const a=new WeakSet,l=(p,m)=>{if(typeof m=="object"&&m!==null){if(a.has(m))return`[object ${m.constructor.name}]`;a.add(m)}return m},d=r?` ${JSON.stringify(r,l)}`:"",h=se(o);return o+d+h}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new S(e.message,t);throw n.stack=e.stack,n}}function Z(i,e){console.warn(...we(i,e))}function me(i,e){console.error(...we(i,e))}function se(i){return`
Read more: ${q}#error-${i}`}function we(i,e){const t=se(i);return e?[i,e,t]:[i,t]}const ke="36.0.1",Ye=typeof window=="object"?window:g.g;if(Ye.CKEDITOR_VERSION)throw new S("ckeditor-duplicated-modules",null);Ye.CKEDITOR_VERSION=ke;const De=Symbol("listeningTo"),ze=Symbol("emitterId"),Ne=Symbol("delegations"),zt=Be(Object);function Be(i){return i?class extends i{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let o=!1;this.listenTo(this,e,(r,...a)=>{o||(o=!0,r.off(),t.call(this,r,...a))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,o={}){let r,a;this[De]||(this[De]={});const l=this[De];At(e)||Pt(e);const d=At(e);(r=l[d])||(r=l[d]={emitter:e,callbacks:{}}),(a=r.callbacks[t])||(a=r.callbacks[t]=[]),a.push(n),function(h,p,m,_,v){p._addEventListener?p._addEventListener(m,_,v):h._addEventListener.call(p,m,_,v)}(this,e,t,n,o)}stopListening(e,t,n){const o=this[De];let r=e&&At(e);const a=o&&r?o[r]:void 0,l=a&&t?a.callbacks[t]:void 0;if(!(!o||e&&!a||t&&!l))if(n)ie(this,e,t,n),l.indexOf(n)!==-1&&(l.length===1?delete a.callbacks[t]:ie(this,e,t,n));else if(l){for(;n=l.pop();)ie(this,e,t,n);delete a.callbacks[t]}else if(a){for(t in a.callbacks)this.stopListening(e,t);delete o[r]}else{for(r in o)this.stopListening(o[r].emitter);delete this[De]}}fire(e,...t){try{const n=e instanceof V?e:new V(this,e),o=n.name;let r=z(this,o);if(n.path.push(this),r){const l=[n,...t];r=Array.from(r);for(let d=0;d<r.length&&(r[d].callback.apply(this,l),n.off.called&&(delete n.off.called,this._removeEventListener(o,r[d].callback)),!n.stop.called);d++);}const a=this[Ne];if(a){const l=a.get(o),d=a.get("*");l&&te(l,n,t),d&&te(d,n,t)}return n.return}catch(n){S.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[Ne]||(this[Ne]=new Map),e.forEach(o=>{const r=this[Ne].get(o);r?r.set(t,n):this[Ne].set(o,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[Ne])if(e)if(t){const n=this[Ne].get(e);n&&n.delete(t)}else this[Ne].delete(e);else this[Ne].clear()}_addEventListener(e,t,n){(function(a,l){const d=_n(a);if(d[l])return;let h=l,p=null;const m=[];for(;h!==""&&!d[h];)d[h]={callbacks:[],childEvents:[]},m.push(d[h]),p&&d[h].childEvents.push(p),p=h,h=h.substr(0,h.lastIndexOf(":"));if(h!==""){for(const _ of m)_.callbacks=d[h].callbacks.slice();d[h].childEvents.push(p)}})(this,e);const o=Ln(this,e),r={callback:t,priority:ge.get(n.priority)};for(const a of o)Q(a,r)}_removeEventListener(e,t){const n=Ln(this,e);for(const o of n)for(let r=0;r<o.length;r++)o[r].callback==t&&(o.splice(r,1),r--)}}:zt}function Pt(i,e){i[ze]||(i[ze]=e||oe())}function At(i){return i[ze]}function _n(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function Ln(i,e){const t=_n(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const r=Ln(i,t.childEvents[o]);n=n.concat(r)}return n}function z(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?z(i,e.substr(0,e.lastIndexOf(":"))):null}function te(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const r=new V(e.source,o);r.path=[...e.path],n.fire(r,...t)}}function ie(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Be[i]=zt.prototype[i]});const ae=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},Te=Symbol("observableProperties"),Ve=Symbol("boundObservables"),ye=Symbol("boundProperties"),P=Symbol("decoratedMethods"),L=Symbol("decoratedOriginal"),$=U(Be());function U(i){return i?class extends i{set(e,t){if(ae(e))return void Object.keys(e).forEach(o=>{this.set(o,e[o])},this);J(this);const n=this[Te];if(e in this&&!n.has(e))throw new S("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(o){const r=n.get(e);let a=this.fire(`set:${e}`,e,o,r);a===void 0&&(a=o),r===a&&n.has(e)||(n.set(e,a),this.fire(`change:${e}`,e,a,r))}}),this[e]=t}bind(...e){if(!e.length||!ce(e))throw new S("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new S("observable-bind-duplicate-properties",this);J(this);const t=this[ye];e.forEach(o=>{if(t.has(o))throw new S("observable-bind-rebind",this)});const n=new Map;return e.forEach(o=>{const r={property:o,to:[]};t.set(o,r),n.set(o,r)}),{to:le,toMany:be,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[Te])return;const t=this[ye],n=this[Ve];if(e.length){if(!ce(e))throw new S("observable-unbind-wrong-properties",this);e.forEach(o=>{const r=t.get(o);r&&(r.to.forEach(([a,l])=>{const d=n.get(a),h=d[l];h.delete(r),h.size||delete d[l],Object.keys(d).length||(n.delete(a),this.stopListening(a,"change"))}),t.delete(o))})}else n.forEach((o,r)=>{this.stopListening(r,"change")}),n.clear(),t.clear()}decorate(e){J(this);const t=this[e];if(!t)throw new S("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,o)=>{n.return=t.apply(this,o)}),this[e]=function(...n){return this.fire(e,n)},this[e][L]=t,this[P]||(this[P]=[]),this[P].push(e)}stopListening(e,t,n){if(!e&&this[P]){for(const o of this[P])this[o]=this[o][L];delete this[P]}super.stopListening(e,t,n)}}:$}function J(i){i[Te]||(Object.defineProperty(i,Te,{value:new Map}),Object.defineProperty(i,Ve,{value:new Map}),Object.defineProperty(i,ye,{value:new Map}))}function le(...i){const e=function(...r){if(!r.length)throw new S("observable-bind-to-parse-error",null);const a={to:[]};let l;return typeof r[r.length-1]=="function"&&(a.callback=r.pop()),r.forEach(d=>{if(typeof d=="string")l.properties.push(d);else{if(typeof d!="object")throw new S("observable-bind-to-parse-error",null);l={observable:d,properties:[]},a.to.push(l)}}),a}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new S("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new S("observable-bind-to-extra-callback",this);var o;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new S("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(r=>{const a=o[Ve];let l;a.get(r.observable)||o.listenTo(r.observable,"change",(d,h)=>{l=a.get(r.observable)[h],l&&l.forEach(p=>{fe(o,p.property)})})}),function(r){let a;r._bindings.forEach((l,d)=>{r._to.forEach(h=>{a=h.properties[l.callback?0:r._bindProperties.indexOf(d)],l.to.push([h.observable,a]),function(p,m,_,v){const E=p[Ve],T=E.get(_),M=T||{};M[v]||(M[v]=new Set),M[v].add(m),T||E.set(_,M)}(r._observable,l,h.observable,a)})})}(this),this._bindProperties.forEach(r=>{fe(this._observable,r)})}function be(i,e,t){if(this._bindings.size>1)throw new S("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(a=>[a,o]);return Array.prototype.concat.apply([],r)}(i,e),t)}function ce(i){return i.every(e=>typeof e=="string")}function fe(i,e){const t=i[ye].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{U[i]=$.prototype[i]});class ne{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Ae(i){let e=0;for(const t of i)e++;return e}function pe(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function he(i){return!(!i||!i[Symbol.iterator])}const Ce=typeof Xa=="object"&&Xa&&Xa.Object===Object&&Xa;var Ie=typeof self=="object"&&self&&self.Object===Object&&self;const Oe=Ce||Ie||Function("return this")(),Pe=Oe.Symbol;var dt=Object.prototype,tn=dt.hasOwnProperty,bo=dt.toString,ko=Pe?Pe.toStringTag:void 0;const Go=function(i){var e=tn.call(i,ko),t=i[ko];try{i[ko]=void 0;var n=!0}catch{}var o=bo.call(i);return n&&(e?i[ko]=t:delete i[ko]),o};var Gs=Object.prototype.toString;const Vt=function(i){return Gs.call(i)};var dn="[object Null]",Ks="[object Undefined]",gh=Pe?Pe.toStringTag:void 0;const wo=function(i){return i==null?i===void 0?Ks:dn:gh&&gh in Object(i)?Go(i):Vt(i)},Ut=Array.isArray,un=function(i){return i!=null&&typeof i=="object"};var lv="[object String]";const ph=function(i){return typeof i=="string"||!Ut(i)&&un(i)&&wo(i)==lv};function mh(i,e,t={},n=[]){const o=t&&t.xmlns,r=o?i.createElementNS(o,e):i.createElement(e);for(const a in t)r.setAttribute(a,t[a]);!ph(n)&&he(n)||(n=[n]);for(let a of n)ph(a)&&(a=i.createTextNode(a)),r.appendChild(a);return r}const bh=function(i,e){return function(t){return i(e(t))}},Gc=bh(Object.getPrototypeOf,Object);var dv="[object Object]",uv=Function.prototype,hv=Object.prototype,kh=uv.toString,fv=hv.hasOwnProperty,gv=kh.call(Object);const Kt=function(i){if(!un(i)||wo(i)!=dv)return!1;var e=Gc(i);if(e===null)return!0;var t=fv.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&kh.call(t)==gv},pv=function(){this.__data__=[],this.size=0},Ir=function(i,e){return i===e||i!=i&&e!=e},Ys=function(i,e){for(var t=i.length;t--;)if(Ir(i[t][0],e))return t;return-1};var mv=Array.prototype.splice;const bv=function(i){var e=this.__data__,t=Ys(e,i);return!(t<0)&&(t==e.length-1?e.pop():mv.call(e,t,1),--this.size,!0)},kv=function(i){var e=this.__data__,t=Ys(e,i);return t<0?void 0:e[t][1]},wv=function(i){return Ys(this.__data__,i)>-1},_v=function(i,e){var t=this.__data__,n=Ys(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function Ni(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ni.prototype.clear=pv,Ni.prototype.delete=bv,Ni.prototype.get=kv,Ni.prototype.has=wv,Ni.prototype.set=_v;const Qs=Ni,Av=function(){this.__data__=new Qs,this.size=0},Cv=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},vv=function(i){return this.__data__.get(i)},yv=function(i){return this.__data__.has(i)};var xv="[object AsyncFunction]",Ev="[object Function]",Dv="[object GeneratorFunction]",Tv="[object Proxy]";const Ko=function(i){if(!ae(i))return!1;var e=wo(i);return e==Ev||e==Dv||e==xv||e==Tv},Kc=Oe["__core-js_shared__"];var wh=function(){var i=/[^.]+$/.exec(Kc&&Kc.keys&&Kc.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Sv=function(i){return!!wh&&wh in i};var Mv=Function.prototype.toString;const Yo=function(i){if(i!=null){try{return Mv.call(i)}catch{}try{return i+""}catch{}}return""};var Iv=/^\[object .+?Constructor\]$/,Nv=Function.prototype,Pv=Object.prototype,Bv=Nv.toString,Ov=Pv.hasOwnProperty,Lv=RegExp("^"+Bv.call(Ov).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Rv=function(i){return!(!ae(i)||Sv(i))&&(Ko(i)?Lv:Iv).test(Yo(i))},zv=function(i,e){return i==null?void 0:i[e]},Qo=function(i,e){var t=zv(i,e);return Rv(t)?t:void 0},Nr=Qo(Oe,"Map"),Pr=Qo(Object,"create"),jv=function(){this.__data__=Pr?Pr(null):{},this.size=0},Fv=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var Vv="__lodash_hash_undefined__",Uv=Object.prototype.hasOwnProperty;const Hv=function(i){var e=this.__data__;if(Pr){var t=e[i];return t===Vv?void 0:t}return Uv.call(e,i)?e[i]:void 0};var $v=Object.prototype.hasOwnProperty;const qv=function(i){var e=this.__data__;return Pr?e[i]!==void 0:$v.call(e,i)};var Wv="__lodash_hash_undefined__";const Gv=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Pr&&e===void 0?Wv:e,this};function Pi(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Pi.prototype.clear=jv,Pi.prototype.delete=Fv,Pi.prototype.get=Hv,Pi.prototype.has=qv,Pi.prototype.set=Gv;const _h=Pi,Kv=function(){this.size=0,this.__data__={hash:new _h,map:new(Nr||Qs),string:new _h}},Yv=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},Zs=function(i,e){var t=i.__data__;return Yv(e)?t[typeof e=="string"?"string":"hash"]:t.map},Qv=function(i){var e=Zs(this,i).delete(i);return this.size-=e?1:0,e},Zv=function(i){return Zs(this,i).get(i)},Jv=function(i){return Zs(this,i).has(i)},Xv=function(i,e){var t=Zs(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function Bi(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Bi.prototype.clear=Kv,Bi.prototype.delete=Qv,Bi.prototype.get=Zv,Bi.prototype.has=Jv,Bi.prototype.set=Xv;const Js=Bi;var e0=200;const t0=function(i,e){var t=this.__data__;if(t instanceof Qs){var n=t.__data__;if(!Nr||n.length<e0-1)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new Js(n)}return t.set(i,e),this.size=t.size,this};function Oi(i){var e=this.__data__=new Qs(i);this.size=e.size}Oi.prototype.clear=Av,Oi.prototype.delete=Cv,Oi.prototype.get=vv,Oi.prototype.has=yv,Oi.prototype.set=t0;const Br=Oi,n0=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},Xs=function(){try{var i=Qo(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Yc=function(i,e,t){e=="__proto__"&&Xs?Xs(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var o0=Object.prototype.hasOwnProperty;const Qc=function(i,e,t){var n=i[e];o0.call(i,e)&&Ir(n,t)&&(t!==void 0||e in i)||Yc(i,e,t)},Li=function(i,e,t,n){var o=!t;t||(t={});for(var r=-1,a=e.length;++r<a;){var l=e[r],d=n?n(t[l],i[l],l,t,i):void 0;d===void 0&&(d=i[l]),o?Yc(t,l,d):Qc(t,l,d)}return t},i0=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n};var r0="[object Arguments]";const Ah=function(i){return un(i)&&wo(i)==r0};var Ch=Object.prototype,s0=Ch.hasOwnProperty,a0=Ch.propertyIsEnumerable;const Zc=Ah(function(){return arguments}())?Ah:function(i){return un(i)&&s0.call(i,"callee")&&!a0.call(i,"callee")},c0=function(){return!1};var vh=c&&!c.nodeType&&c,yh=vh&&!0&&s&&!s.nodeType&&s,xh=yh&&yh.exports===vh?Oe.Buffer:void 0;const Or=(xh?xh.isBuffer:void 0)||c0;var l0=9007199254740991,d0=/^(?:0|[1-9]\d*)$/;const Jc=function(i,e){var t=typeof i;return!!(e=e??l0)&&(t=="number"||t!="symbol"&&d0.test(i))&&i>-1&&i%1==0&&i<e};var u0=9007199254740991;const Eh=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=u0};var at={};at["[object Float32Array]"]=at["[object Float64Array]"]=at["[object Int8Array]"]=at["[object Int16Array]"]=at["[object Int32Array]"]=at["[object Uint8Array]"]=at["[object Uint8ClampedArray]"]=at["[object Uint16Array]"]=at["[object Uint32Array]"]=!0,at["[object Arguments]"]=at["[object Array]"]=at["[object ArrayBuffer]"]=at["[object Boolean]"]=at["[object DataView]"]=at["[object Date]"]=at["[object Error]"]=at["[object Function]"]=at["[object Map]"]=at["[object Number]"]=at["[object Object]"]=at["[object RegExp]"]=at["[object Set]"]=at["[object String]"]=at["[object WeakMap]"]=!1;const h0=function(i){return un(i)&&Eh(i.length)&&!!at[wo(i)]},Xc=function(i){return function(e){return i(e)}};var Dh=c&&!c.nodeType&&c,Lr=Dh&&!0&&s&&!s.nodeType&&s,el=Lr&&Lr.exports===Dh&&Ce.process;const Ri=function(){try{var i=Lr&&Lr.require&&Lr.require("util").types;return i||el&&el.binding&&el.binding("util")}catch{}}();var Th=Ri&&Ri.isTypedArray;const tl=Th?Xc(Th):h0;var f0=Object.prototype.hasOwnProperty;const Sh=function(i,e){var t=Ut(i),n=!t&&Zc(i),o=!t&&!n&&Or(i),r=!t&&!n&&!o&&tl(i),a=t||n||o||r,l=a?i0(i.length,String):[],d=l.length;for(var h in i)!e&&!f0.call(i,h)||a&&(h=="length"||o&&(h=="offset"||h=="parent")||r&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||Jc(h,d))||l.push(h);return l};var g0=Object.prototype;const nl=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||g0)},p0=bh(Object.keys,Object);var m0=Object.prototype.hasOwnProperty;const b0=function(i){if(!nl(i))return p0(i);var e=[];for(var t in Object(i))m0.call(i,t)&&t!="constructor"&&e.push(t);return e},ea=function(i){return i!=null&&Eh(i.length)&&!Ko(i)},ol=function(i){return ea(i)?Sh(i):b0(i)},k0=function(i,e){return i&&Li(e,ol(e),i)},w0=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var _0=Object.prototype.hasOwnProperty;const A0=function(i){if(!ae(i))return w0(i);var e=nl(i),t=[];for(var n in i)(n!="constructor"||!e&&_0.call(i,n))&&t.push(n);return t},zi=function(i){return ea(i)?Sh(i,!0):A0(i)},C0=function(i,e){return i&&Li(e,zi(e),i)};var Mh=c&&!c.nodeType&&c,Ih=Mh&&!0&&s&&!s.nodeType&&s,Nh=Ih&&Ih.exports===Mh?Oe.Buffer:void 0,Ph=Nh?Nh.allocUnsafe:void 0;const Bh=function(i,e){if(e)return i.slice();var t=i.length,n=Ph?Ph(t):new i.constructor(t);return i.copy(n),n},Oh=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},v0=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,r=[];++t<n;){var a=i[t];e(a,t,i)&&(r[o++]=a)}return r},Lh=function(){return[]};var y0=Object.prototype.propertyIsEnumerable,Rh=Object.getOwnPropertySymbols;const il=Rh?function(i){return i==null?[]:(i=Object(i),v0(Rh(i),function(e){return y0.call(i,e)}))}:Lh,x0=function(i,e){return Li(i,il(i),e)},zh=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},jh=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)zh(e,il(i)),i=Gc(i);return e}:Lh,E0=function(i,e){return Li(i,jh(i),e)},Fh=function(i,e,t){var n=e(i);return Ut(i)?n:zh(n,t(i))},rl=function(i){return Fh(i,ol,il)},D0=function(i){return Fh(i,zi,jh)},sl=Qo(Oe,"DataView"),al=Qo(Oe,"Promise"),cl=Qo(Oe,"Set"),ll=Qo(Oe,"WeakMap");var Vh="[object Map]",Uh="[object Promise]",Hh="[object Set]",$h="[object WeakMap]",qh="[object DataView]",T0=Yo(sl),S0=Yo(Nr),M0=Yo(al),I0=Yo(cl),N0=Yo(ll),Zo=wo;(sl&&Zo(new sl(new ArrayBuffer(1)))!=qh||Nr&&Zo(new Nr)!=Vh||al&&Zo(al.resolve())!=Uh||cl&&Zo(new cl)!=Hh||ll&&Zo(new ll)!=$h)&&(Zo=function(i){var e=wo(i),t=e=="[object Object]"?i.constructor:void 0,n=t?Yo(t):"";if(n)switch(n){case T0:return qh;case S0:return Vh;case M0:return Uh;case I0:return Hh;case N0:return $h}return e});const Rr=Zo;var P0=Object.prototype.hasOwnProperty;const B0=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&P0.call(i,"index")&&(t.index=i.index,t.input=i.input),t},ta=Oe.Uint8Array,dl=function(i){var e=new i.constructor(i.byteLength);return new ta(e).set(new ta(i)),e},O0=function(i,e){var t=e?dl(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var L0=/\w*$/;const R0=function(i){var e=new i.constructor(i.source,L0.exec(i));return e.lastIndex=i.lastIndex,e};var Wh=Pe?Pe.prototype:void 0,Gh=Wh?Wh.valueOf:void 0;const z0=function(i){return Gh?Object(Gh.call(i)):{}},Kh=function(i,e){var t=e?dl(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)};var j0="[object Boolean]",F0="[object Date]",V0="[object Map]",U0="[object Number]",H0="[object RegExp]",$0="[object Set]",q0="[object String]",W0="[object Symbol]",G0="[object ArrayBuffer]",K0="[object DataView]",Y0="[object Float32Array]",Q0="[object Float64Array]",Z0="[object Int8Array]",J0="[object Int16Array]",X0="[object Int32Array]",ey="[object Uint8Array]",ty="[object Uint8ClampedArray]",ny="[object Uint16Array]",oy="[object Uint32Array]";const iy=function(i,e,t){var n=i.constructor;switch(e){case G0:return dl(i);case j0:case F0:return new n(+i);case K0:return O0(i,t);case Y0:case Q0:case Z0:case J0:case X0:case ey:case ty:case ny:case oy:return Kh(i,t);case V0:return new n;case U0:case q0:return new n(i);case H0:return R0(i);case $0:return new n;case W0:return z0(i)}};var Yh=Object.create;const ry=function(){function i(){}return function(e){if(!ae(e))return{};if(Yh)return Yh(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),Qh=function(i){return typeof i.constructor!="function"||nl(i)?{}:ry(Gc(i))};var sy="[object Map]";const ay=function(i){return un(i)&&Rr(i)==sy};var Zh=Ri&&Ri.isMap;const cy=Zh?Xc(Zh):ay;var ly="[object Set]";const dy=function(i){return un(i)&&Rr(i)==ly};var Jh=Ri&&Ri.isSet;const uy=Jh?Xc(Jh):dy;var hy=1,fy=2,gy=4,Xh="[object Arguments]",ef="[object Function]",py="[object GeneratorFunction]",tf="[object Object]",it={};it[Xh]=it["[object Array]"]=it["[object ArrayBuffer]"]=it["[object DataView]"]=it["[object Boolean]"]=it["[object Date]"]=it["[object Float32Array]"]=it["[object Float64Array]"]=it["[object Int8Array]"]=it["[object Int16Array]"]=it["[object Int32Array]"]=it["[object Map]"]=it["[object Number]"]=it[tf]=it["[object RegExp]"]=it["[object Set]"]=it["[object String]"]=it["[object Symbol]"]=it["[object Uint8Array]"]=it["[object Uint8ClampedArray]"]=it["[object Uint16Array]"]=it["[object Uint32Array]"]=!0,it["[object Error]"]=it[ef]=it["[object WeakMap]"]=!1;const ul=function i(e,t,n,o,r,a){var l,d=t&hy,h=t&fy,p=t&gy;if(n&&(l=r?n(e,o,r,a):n(e)),l!==void 0)return l;if(!ae(e))return e;var m=Ut(e);if(m){if(l=B0(e),!d)return Oh(e,l)}else{var _=Rr(e),v=_==ef||_==py;if(Or(e))return Bh(e,d);if(_==tf||_==Xh||v&&!r){if(l=h||v?{}:Qh(e),!d)return h?E0(e,C0(l,e)):x0(e,k0(l,e))}else{if(!it[_])return r?e:{};l=iy(e,_,d)}}a||(a=new Br);var E=a.get(e);if(E)return E;a.set(e,l),uy(e)?e.forEach(function(M){l.add(i(M,t,n,M,e,a))}):cy(e)&&e.forEach(function(M,B){l.set(B,i(M,t,n,B,e,a))});var T=m?void 0:(p?h?D0:rl:h?zi:ol)(e);return n0(T||e,function(M,B){T&&(M=e[B=M]),Qc(l,B,i(M,t,n,B,e,a))}),l};var my=1,by=4;const nf=function(i,e){return ul(i,my|by,e=typeof e=="function"?e:void 0)},zr=function(i){return un(i)&&i.nodeType===1&&!Kt(i)};class of{constructor(e,t){this._config={},t&&this.define(rf(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(Kt(t))return void this._setObjectToTarget(e,t,o);const r=t.split(".");t=r.pop();for(const a of r)Kt(e[a])||(e[a]={}),e=e[a];if(Kt(n))return Kt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!Kt(e[o])){e=null;break}e=e[o]}return e?rf(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function rf(i){return nf(i,ky)}function ky(i){return zr(i)?i:void 0}function _o(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function na(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const sf=Jo(Be());function Jo(i){return i?class extends i{listenTo(e,t,n,o={}){if(_o(e)||na(e)){const r={capture:!!o.useCapture,passive:!!o.usePassive},a=this._getProxyEmitter(e,r)||new wy(e,r);this.listenTo(a,t,n,o)}else super.listenTo(e,t,n,o)}stopListening(e,t,n){if(_o(e)||na(e)){const o=this._getAllProxyEmitters(e);for(const r of o)this.stopListening(r,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,o){const r=n[De];return r&&r[o]?r[o].emitter:null}(this,af(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:sf}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Jo[i]=sf.prototype[i]});class wy extends Be(){constructor(e,t){super(),Pt(this,af(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),Be().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){Be().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function af(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=oe())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let hl;try{hl={window,document}}catch{hl={window:{},document:{}}}const Re=hl;function cf(i){const e=[];let t=i;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function ht(i){return Object.prototype.toString.call(i)=="[object Text]"}function oa(i){return Object.prototype.toString.apply(i)=="[object Range]"}function lf(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const df=["top","right","bottom","left","width","height"];class ft{constructor(e){const t=oa(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),hf(e)||t)if(t){const n=ft.getDomRangeRects(e);ia(this,ft.getBoundingRect(n))}else ia(this,e.getBoundingClientRect());else if(na(e)){const{innerWidth:n,innerHeight:o}=e;ia(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else ia(this,e)}clone(){return new ft(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new ft(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!uf(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!uf(n);){const o=new ft(n),r=t.getIntersection(o);if(!r)return null;r.getArea()<t.getArea()&&(t=r),n=n.parentNode}}return t}isEqual(e){for(const t of df)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(na(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const r=lf(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new ft(o));else{let o=e.startContainer;ht(o)&&(o=o.parentNode);const r=new ft(o.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new ft(t))}}function ia(i,e){for(const t of df)i[t]=e[t]}function uf(i){return!!hf(i)&&i===i.ownerDocument.body}function hf(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}class ct{constructor(e,t){ct._observerInstance||ct._createObserver(),this._element=e,this._callback=t,ct._addElementCallback(e,t),ct._observerInstance.observe(e)}destroy(){ct._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){ct._elementCallbacks||(ct._elementCallbacks=new Map);let n=ct._elementCallbacks.get(e);n||(n=new Set,ct._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=ct._getElementCallbacks(e);n&&(n.delete(t),n.size||(ct._elementCallbacks.delete(e),ct._observerInstance.unobserve(e))),ct._elementCallbacks&&!ct._elementCallbacks.size&&(ct._observerInstance=null,ct._elementCallbacks=null)}static _getElementCallbacks(e){return ct._elementCallbacks?ct._elementCallbacks.get(e):null}static _createObserver(){ct._observerInstance=new Re.window.ResizeObserver(e=>{for(const t of e){const n=ct._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function _y(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function fl(i){return e=>e+i}function ra(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function ff(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function ji(i){return i&&i.nodeType===Node.COMMENT_NODE}function Xo(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}function gf({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){Ko(e)&&(e=e()),Ko(n)&&(n=n());const a=function(_){return _&&_.parentNode?_.offsetParent===Re.document.body?null:_.offsetParent:null}(i),l=new ft(i),d=new ft(e);let h;const p=o&&function(_){_=Object.assign({top:0,bottom:0,left:0,right:0},_);const v=new ft(Re.window);return v.top+=_.top,v.height-=_.top,v.bottom-=_.bottom,v.height-=_.bottom,v}(r)||null,m={targetRect:d,elementRect:l,positionedElementAncestor:a,viewportRect:p};if(n||o){const _=n&&new ft(n).getVisible();Object.assign(m,{limiterRect:_,viewportRect:p}),h=function(v,E){const{elementRect:T}=E,M=T.getArea(),B=v.map(ue=>new gl(ue,E)).filter(ue=>!!ue.name);let R=0,K=null;for(const ue of B){const{limiterIntersectionArea:Se,viewportIntersectionArea:He}=ue;if(Se===M)return ue;const Ke=He**2+Se**2;Ke>R&&(R=Ke,K=ue)}return K}(t,m)||new gl(t[0],m)}else h=new gl(t[0],m);return h}function pf(i){const{scrollX:e,scrollY:t}=Re.window;return i.clone().moveBy(e,t)}ct._observerInstance=null,ct._elementCallbacks=null;class gl{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:r,name:a,config:l}=n;this.name=a,this.config=l,this._positioningFunctionCorrdinates={left:o,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=pf(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=pf(new ft(t)),o=lf(t);let r=0,a=0;r-=n.left,a-=n.top,r+=t.scrollLeft,a+=t.scrollTop,r-=o.left,a-=o.top,e.moveBy(r,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function mf(i){const e=i.parentNode;e&&e.removeChild(i)}function Ay(i,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),r=new ft(i).excludeScrollbarsAndBorders();if(![o,n].every(a=>r.contains(a))){let{scrollX:a,scrollY:l}=i;kf(o,r)?l-=r.top-e.top+t:bf(n,r)&&(l+=e.bottom-r.bottom+t),wf(e,r)?a-=r.left-e.left+t:_f(e,r)&&(a+=e.right-r.right+t),i.scrollTo(a,l)}}function Cy(i,e){const t=pl(i);let n,o;for(;i!=t.document.body;)o=e(),n=new ft(i).excludeScrollbarsAndBorders(),n.contains(o)||(kf(o,n)?i.scrollTop-=n.top-o.top:bf(o,n)&&(i.scrollTop+=o.bottom-n.bottom),wf(o,n)?i.scrollLeft-=n.left-o.left:_f(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function bf(i,e){return i.bottom>e.bottom}function kf(i,e){return i.top<e.top}function wf(i,e){return i.left<e.left}function _f(i,e){return i.right>e.right}function pl(i){return oa(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function vy(i){if(oa(i)){let e=i.commonAncestorContainer;return ht(e)&&(e=e.parentNode),e}return i.parentNode}function Af(i,e){const t=pl(i),n=new ft(i);if(t===e)return n;{let o=t;for(;o!=e;){const r=o.frameElement,a=new ft(r).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),o=o.parent}}return n}const yy={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},xy={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Ue=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)i[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),Ey=Object.fromEntries(Object.entries(Ue).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function Fi(i){let e;if(typeof i=="string"){if(e=Ue[i.toLowerCase()],!e)throw new S("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?Ue.alt:0)+(i.ctrlKey?Ue.ctrl:0)+(i.shiftKey?Ue.shift:0)+(i.metaKey?Ue.cmd:0);return e}function ml(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Fi(t.slice(0,-1));const n=Fi(t);return y.isMac&&n==Ue.ctrl?Ue.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Cf(i){let e=ml(i);return Object.entries(y.isMac?yy:xy).reduce((t,[n,o])=>(e&Ue[n]&&(e&=~Ue[n],t+=o),t),"")+(e?Ey[e]:"")}function bl(i,e){const t=e==="ltr";switch(i){case Ue.arrowleft:return t?"left":"right";case Ue.arrowright:return t?"right":"left";case Ue.arrowup:return"up";case Ue.arrowdown:return"down"}}function Dt(i){return Array.isArray(i)?i:[i]}function Dy(i,e,t=1){if(typeof t!="number")throw new S("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(Re.window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(Re.window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(d,h){return!!Re.window.CKEDITOR_TRANSLATIONS[d]&&!!Re.window.CKEDITOR_TRANSLATIONS[d].dictionary[h]}(i,o))return t!==1?e.plural:e.string;const r=Re.window.CKEDITOR_TRANSLATIONS[i].dictionary,a=Re.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(d=>d===1?0:1),l=r[o];return typeof l=="string"?l:l[Number(a(t))]}Re.window.CKEDITOR_TRANSLATIONS||(Re.window.CKEDITOR_TRANSLATIONS={});const Ty=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function vf(i){return Ty.includes(i)?"rtl":"ltr"}class Sy{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=vf(this.uiLanguage),this.contentLanguageDirection=vf(this.contentLanguage),this.t=(n,o)=>this._t(n,o)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Dt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(a,l)=>l<r.length?r[l]:a)}(Dy(this.uiLanguage,e,n),t)}}class An extends Be(){constructor(e={},t={}){super();const n=he(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new S("collection-add-item-invalid-index",this);let n=0;for(const o of e){const r=this._getItemIdBeforeAdding(o),a=t+n;this._items.splice(a,0,o),this._itemMap.set(r,o),this.fire("add",o,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new S("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new S("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,r,a)=>{const l=t._bindToCollection==this,d=t._bindToInternalToExternalMap.get(r);if(l&&d)this._bindToExternalToInternalMap.set(r,d),this._bindToInternalToExternalMap.set(d,r);else{const h=e(r);if(!h)return void this._skippedIndexesFromExternal.push(a);let p=a;for(const m of this._skippedIndexesFromExternal)a>m&&p--;for(const m of t._skippedIndexesFromExternal)p>=m&&p++;this._bindToExternalToInternalMap.set(r,h),this._bindToInternalToExternalMap.set(h,r),this.add(h,p);for(let m=0;m<t._skippedIndexesFromExternal.length;m++)p<=t._skippedIndexesFromExternal[m]&&t._skippedIndexesFromExternal[m]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,r,a)=>{const l=this._bindToExternalToInternalMap.get(r);l&&this.remove(l),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((d,h)=>(a<h&&d.push(h-1),a>h&&d.push(h),d),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new S("collection-add-invalid-id",this);if(this.get(n))throw new S("collection-add-item-already-exists",this)}else e[t]=n=oe();return n}_remove(e){let t,n,o,r=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),r=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],r=!o,o&&(n=o[a])):(o=e,n=o[a],t=this._items.indexOf(o),r=t==-1||!this._itemMap.get(n)),r)throw new S("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const l=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(l),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Ct(i){const e=i.next();return e.done?null:e.value}class hn extends Jo(U()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new S("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Rn{constructor(){this._listener=new(Jo())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Fi(n),n)})}set(e,t,n={}){const o=ml(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(a,l)=>{t(l,()=>{l.preventDefault(),l.stopPropagation(),a.stop()}),a.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+Fi(e),e)}destroy(){this._listener.stopListening()}}function zn(i){return he(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}const My=1e4;function yf(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function xf(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const Iy=function(){const i=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:‍${e})*`,"ug")}();function Ny(i,e){const t=String(i).matchAll(Iy);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class Ao extends An{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new S("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const r of e)o.delegate(r).to(t)}),this.on("remove",(n,o)=>{for(const r of e)o.stopDelegating(r,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}var Py=g(6062),ve=g.n(Py),Ef=g(4793),By={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Ef.Z,By),Ef.Z.locals;class je extends Jo(U()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new An,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Cn.bind(this,this)}createCollection(e){const t=new Ao(e);return this._viewCollections.add(t),t}registerChild(e){he(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){he(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Cn(e)}extendTemplate(e){Cn.extend(this.template,e)}render(){if(this.isRendered)throw new S("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class Cn extends Be(){constructor(e){super(),Object.assign(this,Mf(Sf(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new S("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)aa(n)?yield n:kl(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new Oy({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,r)=>new Df({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:r})}}static extend(e,t){if(e._isRendered)throw new S("template-extend-render",[this,e]);Bf(e,Mf(Sf(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new S("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),sa(this.text)?this._bindToObservable({schema:this.text,updater:Ly(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const o in this.attributes){const r=t.getAttribute(o),a=this.attributes[o];n&&(n.attributes[o]=r);const l=Of(a)?a[0].ns:null;if(sa(a)){const d=Of(a)?a[0].value:a;n&&Lf(o)&&d.unshift(r),this._bindToObservable({schema:d,updater:Ry(t,o,l),data:e})}else if(o=="style"&&typeof a[0]!="string")this._renderStyleAttribute(a[0],e);else{n&&r&&Lf(o)&&a.unshift(r);const d=a.map(h=>h&&h.value||h).reduce((h,p)=>h.concat(p),[]).reduce(Nf,"");Vi(d)||t.setAttributeNS(l,o,d)}}}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const r=e[o];sa(r)?this._bindToObservable({schema:[r],updater:zy(n,o),data:t}):n.style[o]=r}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let r=0;for(const a of this.children)if(wl(a)){if(!o){a.setParent(t);for(const l of a)n.appendChild(l.element)}}else if(aa(a))o||(a.isRendered||a.render(),n.appendChild(a.element));else if(_o(a))n.appendChild(a);else if(o){const l={children:[],bindings:[],attributes:{}};e.revertData.children.push(l),a._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:l})}else n.appendChild(a.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[r,a]=t.split("@");return o.activateDomEventListener(r,a,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;Tf(e,t,n);const r=e.filter(a=>!Vi(a)).filter(a=>a.observable).map(a=>a.activateAttributeListener(e,t,n));o&&o.bindings.push(r)}_revertTemplateFromNode(e,t){for(const o of t.bindings)for(const r of o)r();if(t.text)return void(e.textContent=t.text);const n=e;for(const o in t.attributes){const r=t.attributes[o];r===null?n.removeAttribute(o):n.setAttribute(o,r)}for(let o=0;o<t.children.length;++o)this._revertTemplateFromNode(n.childNodes[o],t.children[o])}}class jr{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>Tf(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,o),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,o)}}}class Oy extends jr{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const o=(r,a)=>{t&&!a.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class Df extends jr{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!Vi(super.getValue(e))&&(this.valueIfTrue||!0)}}function sa(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(sa):i instanceof jr)}function Tf(i,e,{node:t}){const n=function(r,a){return r.map(l=>l instanceof jr?l.getValue(a):l)}(i,t);let o;o=i.length==1&&i[0]instanceof Df?n[0]:n.reduce(Nf,""),Vi(o)?e.remove():e.set(o)}function Ly(i){return{set(e){i.textContent=e},remove(){i.textContent=""}}}function Ry(i,e,t){return{set(n){i.setAttributeNS(t,e,n)},remove(){i.removeAttributeNS(t,e)}}}function zy(i,e){return{set(t){i.style[e]=t},remove(){i.style[e]=null}}}function Sf(i){return nf(i,e=>{if(e&&(e instanceof jr||kl(e)||aa(e)||wl(e)))return e})}function Mf(i){if(typeof i=="string"?i=function(e){return{text:[e]}}(i):i.text&&function(e){e.text=Dt(e.text)}(i),i.on&&(i.eventListeners=function(e){for(const t in e)If(e,t);return e}(i.on),delete i.on),!i.text){i.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=Dt(t[n].value)),If(t,n)}(i.attributes);const e=[];if(i.children)if(wl(i.children))e.push(i.children);else for(const t of i.children)kl(t)||aa(t)||_o(t)?e.push(t):e.push(new Cn(t));i.children=e}return i}function If(i,e){i[e]=Dt(i[e])}function Nf(i,e){return Vi(e)?i:Vi(i)?e:`${i} ${e}`}function Pf(i,e){for(const t in e)i[t]?i[t].push(...e[t]):i[t]=e[t]}function Bf(i,e){if(e.attributes&&(i.attributes||(i.attributes={}),Pf(i.attributes,e.attributes)),e.eventListeners&&(i.eventListeners||(i.eventListeners={}),Pf(i.eventListeners,e.eventListeners)),e.text&&i.text.push(...e.text),e.children&&e.children.length){if(i.children.length!=e.children.length)throw new S("ui-template-extend-children-mismatch",i);let t=0;for(const n of e.children)Bf(i.children[t++],n)}}function Vi(i){return!i&&i!==0}function aa(i){return i instanceof je}function kl(i){return i instanceof Cn}function wl(i){return i instanceof Ao}function Of(i){return ae(i[0])&&i[0].ns}function Lf(i){return i=="class"||i=="style"}class jy extends Ao{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Cn({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=mh(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var Rf=g(6574),Fy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Rf.Z,Fy),Rf.Z.locals;class ei extends je{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",e.if("isColorInherited","ck-icon_inherit-color")],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:n,value:o}of Array.from(e.attributes))ei.presentationalAttributeNames.includes(n)&&this.element.setAttribute(n,o);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}ei.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var zf=g(4906),Vy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(zf.Z,Vy),zf.Z.locals;class rt extends je{constructor(e){super(e);const t=this.bindTemplate,n=oe();this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new ei,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const o={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",r=>!r),t.if("isVisible","ck-hidden",r=>!r),t.to("isOn",r=>r?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",r=>r||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,r=>!r),"aria-pressed":t.to("isOn",r=>!!this.isToggleable&&String(!!r)),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(r=>{this.isEnabled?this.fire("execute"):r.preventDefault()})}};y.isSafari&&(o.on.mousedown=t.to(r=>{this.focus(),r.preventDefault()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(e){const t=new je,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new je;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>Cf(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=Cf(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var jf=g(5332),Uy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(jf.Z,Uy),jf.Z.locals;class ca extends rt{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new je;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var Ff=g(6781),Hy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Ff.Z,Hy),Ff.Z.locals;class $y{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(_l(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new S("componentfactory-item-missing",this,{name:e});return this._components.get(_l(e)).callback(this.editor.locale)}has(e){return this._components.has(_l(e))}}function _l(i){return String(i).toLowerCase()}var Vf=g(5485),qy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Vf.Z,qy),Vf.Z.locals;class Ui extends je{constructor(e,t,n){super(e);const o=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new Rn,this.focusTracker=new hn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",r=>!r)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":o.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,n,o)=>{o&&(this.panelPosition==="auto"?this.panelView.position=Ui._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:o,northEast:r,northWest:a,southMiddleEast:l,southMiddleWest:d,northMiddleEast:h,northMiddleWest:p}=Ui.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,l,d,e,r,a,h,p,t]:[o,n,d,l,e,a,r,p,h,t]}}Ui.defaultPanelPositions={south:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),southMiddleEast:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/4,name:"sme"}),southMiddleWest:(i,e)=>({top:i.bottom,left:i.left-3*(e.width-i.width)/4,name:"smw"}),north:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/2,name:"n"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),northMiddleEast:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/4,name:"nme"}),northMiddleWest:(i,e)=>({top:i.top-e.height,left:i.left-3*(e.width-i.width)/4,name:"nmw"})},Ui._getOptimalPosition=gf;const Uf='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Wy extends rt{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new ei;return e.content=Uf,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var Hf=g(7686),Gy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Hf.Z,Gy),Hf.Z.locals;class Al extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Rn,this.focusTracker=new hn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new rt;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new rt,t=e.bindTemplate;return e.icon=Uf,e.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":t.to("isOn"),"aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class Ky extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():Z("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}class Hi{constructor(e){if(this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const o of n)e.keystrokeHandler.set(o,(r,a)=>{this[t](),a()})}}get first(){return this.focusables.find(Cl)||null}get last(){return this.focusables.filter(Cl).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const o=t.element===this.focusTracker.focusedElement;return o&&(e=n),o}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let o=(t+n+e)%n;do{const r=this.focusables.get(o);if(Cl(r))return r;o=(o+n+e)%n}while(o!==t);return null}}function Cl(i){return!(!i.focus||!Xo(i.element))}class $f extends je{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class Yy extends je{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function qf(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}class re extends U(){constructor(e){super(),this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Wf,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Wf),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Wf(i){i.return=!1,i.stop()}class Le extends U(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Gf,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Gf),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Gf(i){i.return=!1,i.stop()}class Kf extends Le{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){Q(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class Yf extends Be(){constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new S("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,r=this._context;(function E(T,M=new Set){T.forEach(B=>{d(B)&&(M.has(B)||(M.add(B),B.pluginName&&!o._availablePlugins.has(B.pluginName)&&o._availablePlugins.set(B.pluginName,B),B.requires&&E(B.requires,M)))})})(e),_(e);const a=[...function E(T,M=new Set){return T.map(B=>d(B)?B:o._availablePlugins.get(B)).reduce((B,R)=>M.has(R)?B:(M.add(R),R.requires&&(_(R.requires,R),E(R.requires,M).forEach(K=>B.add(K))),B.add(R)),new Set)}(e.filter(E=>!p(E,t)))];(function(E,T){for(const M of T){if(typeof M!="function")throw new S("plugincollection-replace-plugin-invalid-type",null,{pluginItem:M});const B=M.pluginName;if(!B)throw new S("plugincollection-replace-plugin-missing-name",null,{pluginItem:M});if(M.requires&&M.requires.length)throw new S("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:B});const R=o._availablePlugins.get(B);if(!R)throw new S("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:B});const K=E.indexOf(R);if(K===-1){if(o._contextPlugins.has(R))return;throw new S("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:B})}if(R.requires&&R.requires.length)throw new S("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:B});E.splice(K,1,M),o._availablePlugins.set(B,M)}})(a,n);const l=function(E){return E.map(T=>{let M=o._contextPlugins.get(T);return M=M||new T(r),o._add(T,M),M})}(a);return v(l,"init").then(()=>v(l,"afterInit")).then(()=>l);function d(E){return typeof E=="function"}function h(E){return d(E)&&E.isContextPlugin}function p(E,T){return T.some(M=>M===E||m(E)===M||m(M)===E)}function m(E){return d(E)?E.pluginName||E.name:E}function _(E,T=null){E.map(M=>d(M)?M:o._availablePlugins.get(M)||M).forEach(M=>{(function(B,R){if(!d(B))throw R?new S("plugincollection-soft-required",r,{missingPlugin:B,requiredBy:m(R)}):new S("plugincollection-plugin-not-found",r,{plugin:B})})(M,T),function(B,R){if(h(R)&&!h(B))throw new S("plugincollection-context-required",r,{plugin:m(B),requiredBy:m(R)})}(M,T),function(B,R){if(R&&p(B,t))throw new S("plugincollection-required",r,{plugin:m(B),requiredBy:m(R)})}(M,T)})}function v(E,T){return E.reduce((M,B)=>B[T]?o._contextPlugins.has(B)?M:M.then(B[T].bind(B)):M,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new S("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class Qy{constructor(e){this.config=new of(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new Yf(this,t);const n=this.config.get("language")||{};this.locale=new Sy({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new An,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new S("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new S("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new S("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class la extends U(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var Qf=g(4717),Zy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Qf.Z,Zy),Qf.Z.locals;const da=new WeakMap;function Zf(i){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=i,a=e.document;da.has(a)||(da.set(a,new Map),a.registerPostFixer(l=>vl(a,l)),a.on("change:isComposing",()=>{e.change(l=>vl(a,l))},{priority:"high"})),da.get(a).set(t,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?t:null}),e.change(l=>vl(a,l))}function Jy(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function vl(i,e){const t=da.get(i),n=[];let o=!1;for(const[r,a]of t)a.isDirectHost&&(n.push(r),Jf(e,r,a)&&(o=!0));for(const[r,a]of t){if(a.isDirectHost)continue;const l=Xy(r);l&&(n.includes(l)||(a.hostElement=l,Jf(e,r,a)&&(o=!0)))}return o}function Jf(i,e,t){const{text:n,isDirectHost:o,hostElement:r}=t;let a=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),a=!0),(o||e.childCount==1)&&function(l,d){if(!l.isAttached()||Array.from(l.getChildren()).some(_=>!_.is("uiElement")))return!1;const p=l.document,m=p.selection.anchor;return!(p.isComposing&&m&&m.parent===l||!d&&p.isFocused&&(!m||m.parent===l))}(r,t.keepOnFocus)?function(l,d){return!d.hasClass("ck-placeholder")&&(l.addClass("ck-placeholder",d),!0)}(i,r)&&(a=!0):Jy(i,r)&&(a=!0),a}function Xy(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class ti{is(){throw new Error("is() method is abstract")}}var e1=4;const Xf=function(i){return ul(i,e1)};class ni extends Be(ti){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new S("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=pe(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Xf(this);return delete e.parent,e}}ni.prototype.is=function(i){return i==="node"||i==="view:node"};class Xe extends ni{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Xe&&(this===e||this.data===e.data)}_clone(){return new Xe(this.document,this.data)}}Xe.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class jn extends ti{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new S("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new S("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}jn.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class Fn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=eg(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const r=eg(n,o);r&&t.push({element:n,pattern:o,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function eg(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return Kt(n)?(n.style!==void 0&&Z("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&Z("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),yl(n,r,a=>o.getAttribute(a))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(n,o){return yl(n,o.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(n,o){return yl(n,o.getStyleNames(!0),r=>o.getStyle(r))}(e.styles,i),!t.styles)?null:t}function yl(i,e,t){const n=function(a){return Array.isArray(a)?a.map(l=>Kt(l)?(l.key!==void 0&&l.value!==void 0||Z("matcher-pattern-missing-key-or-value",l),[l.key,l.value]):[l,!0]):Kt(a)?Object.entries(a):[[a,!0]]}(i),o=Array.from(e),r=[];if(n.forEach(([a,l])=>{o.forEach(d=>{(function(h,p){return h===!0||h===p||h instanceof RegExp&&p.match(h)})(a,d)&&function(h,p,m){if(h===!0)return!0;const _=m(p);return h===_||h instanceof RegExp&&!!String(_).match(h)}(l,d,t)&&r.push(d)})}),n.length&&!(r.length<n.length))return r}var t1="[object Symbol]";const ua=function(i){return typeof i=="symbol"||un(i)&&wo(i)==t1};var n1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o1=/^\w*$/;const i1=function(i,e){if(Ut(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!ua(i))||o1.test(i)||!n1.test(i)||e!=null&&i in Object(e)};var r1="Expected a function";function xl(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError(r1);var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],r=t.cache;if(r.has(o))return r.get(o);var a=i.apply(this,n);return t.cache=r.set(o,a)||r,a};return t.cache=new(xl.Cache||Js),t}xl.Cache=Js;const s1=xl;var a1=500,c1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l1=/\\(\\)?/g,d1=function(i){var e=s1(i,function(n){return t.size===a1&&t.clear(),n}),t=e.cache;return e}(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(c1,function(t,n,o,r){e.push(o?r.replace(l1,"$1"):n||t)}),e});const u1=d1,h1=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var f1=1/0,tg=Pe?Pe.prototype:void 0,ng=tg?tg.toString:void 0;const g1=function i(e){if(typeof e=="string")return e;if(Ut(e))return h1(e,i)+"";if(ua(e))return ng?ng.call(e):"";var t=e+"";return t=="0"&&1/e==-f1?"-0":t},El=function(i){return i==null?"":g1(i)},Dl=function(i,e){return Ut(i)?i:i1(i,e)?[i]:u1(El(i))},p1=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0};var m1=1/0;const Tl=function(i){if(typeof i=="string"||ua(i))return i;var e=i+"";return e=="0"&&1/i==-m1?"-0":e},og=function(i,e){for(var t=0,n=(e=Dl(e,i)).length;i!=null&&t<n;)i=i[Tl(e[t++])];return t&&t==n?i:void 0},ig=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+e];return r},b1=function(i,e){return e.length<2?i:og(i,ig(e,0,-1))},k1=function(i,e){return e=Dl(e,i),(i=b1(i,e))==null||delete i[Tl(p1(e))]},w1=function(i,e){return i==null||k1(i,e)},ha=function(i,e,t){var n=i==null?void 0:og(i,e);return n===void 0?t:n},Sl=function(i,e,t){(t!==void 0&&!Ir(i[e],t)||t===void 0&&!(e in i))&&Yc(i,e,t)},_1=function(i){return function(e,t,n){for(var o=-1,r=Object(e),a=n(e),l=a.length;l--;){var d=a[i?l:++o];if(t(r[d],d,r)===!1)break}return e}}(),A1=function(i){return un(i)&&ea(i)},Ml=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},C1=function(i){return Li(i,zi(i))},v1=function(i,e,t,n,o,r,a){var l=Ml(i,t),d=Ml(e,t),h=a.get(d);if(h)Sl(i,t,h);else{var p=r?r(l,d,t+"",i,e,a):void 0,m=p===void 0;if(m){var _=Ut(d),v=!_&&Or(d),E=!_&&!v&&tl(d);p=d,_||v||E?Ut(l)?p=l:A1(l)?p=Oh(l):v?(m=!1,p=Bh(d,!0)):E?(m=!1,p=Kh(d,!0)):p=[]:Kt(d)||Zc(d)?(p=l,Zc(l)?p=C1(l):ae(l)&&!Ko(l)||(p=Qh(d))):m=!1}m&&(a.set(d,p),o(p,d,n,r,a),a.delete(d)),Sl(i,t,p)}},y1=function i(e,t,n,o,r){e!==t&&_1(t,function(a,l){if(r||(r=new Br),ae(a))v1(e,t,l,n,i,o,r);else{var d=o?o(Ml(e,l),a,l+"",e,t,r):void 0;d===void 0&&(d=a),Sl(e,l,d)}},zi)},oi=function(i){return i},x1=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var rg=Math.max;const E1=function(i,e,t){return e=rg(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,r=rg(n.length-e,0),a=Array(r);++o<r;)a[o]=n[e+o];o=-1;for(var l=Array(e+1);++o<e;)l[o]=n[o];return l[e]=t(a),x1(i,this,l)}},D1=function(i){return function(){return i}},T1=Xs?function(i,e){return Xs(i,"toString",{configurable:!0,enumerable:!1,value:D1(e),writable:!0})}:oi;var S1=800,M1=16,I1=Date.now;const N1=function(i){var e=0,t=0;return function(){var n=I1(),o=M1-(n-t);if(t=n,o>0){if(++e>=S1)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(T1),P1=function(i,e){return N1(E1(i,e,oi),i+"")},B1=function(i,e,t){if(!ae(t))return!1;var n=typeof e;return!!(n=="number"?ea(t)&&Jc(e,t.length):n=="string"&&e in t)&&Ir(t[e],i)},sg=function(i){return P1(function(e,t){var n=-1,o=t.length,r=o>1?t[o-1]:void 0,a=o>2?t[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,a&&B1(t[0],t[1],a)&&(r=o<3?void 0:r,o=1),e=Object(e);++n<o;){var l=t[n];l&&i(e,l,n,r)}return e})},ag=sg(function(i,e,t){y1(i,e,t)}),O1=function(i,e,t,n){if(!ae(i))return i;for(var o=-1,r=(e=Dl(e,i)).length,a=r-1,l=i;l!=null&&++o<r;){var d=Tl(e[o]),h=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return i;if(o!=a){var p=l[d];(h=n?n(p,d,l):void 0)===void 0&&(h=ae(p)?p:Jc(e[o+1])?[]:{})}Qc(l,d,h),l=l[d]}return i},L1=function(i,e,t){return i==null?i:O1(i,e,t)};class R1{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,r=0,a=0,l=null;const d=new Map;if(n==="")return d;n.charAt(n.length-1)!=";"&&(n+=";");for(let h=0;h<n.length;h++){const p=n.charAt(h);if(o===null)switch(p){case":":l||(l=n.substr(r,h-r),a=h+1);break;case'"':case"'":o=p;break;case";":{const m=n.substr(a,h-a);l&&d.set(l.trim(),m.trim()),l=null,r=h+1;break}}else p===o&&(o=null)}return d}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(ae(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Il(e);w1(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!ae(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=ha(this._styles,n);o&&!Array.from(Object.keys(o)).length&&this.remove(n)}}class z1{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(ae(t))Nl(n,Il(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:r,value:a}=o(t);Nl(n,r,a)}else Nl(n,e,t)}getNormalized(e,t){if(!e)return ag({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return ha(t,n);const o=n(e,t);if(o)return o}return ha(t,Il(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Il(i){return i.replace("-",".")}function Nl(i,e,t){let n=t;ae(t)&&(n=ag({},ha(i,e),t)),L1(i,e,n)}class nn extends ni{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(r){const a=zn(r);for(const[l,d]of a)d===null?a.delete(l):typeof d!="string"&&a.set(l,String(d));return a}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");cg(this._classes,r),this._attrs.delete("class")}this._styles=new R1(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof nn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Fn(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,a){return typeof a=="string"?[new Xe(r,a)]:(he(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new Xe(r,l):l instanceof jn?new Xe(r,l.data):l))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?cg(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Dt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Dt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),Kt(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Dt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function cg(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}nn.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Fr extends nn{constructor(...e){super(...e),this.getFillerOffset=lg}}function lg(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}Fr.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class fa extends U(Fr){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}fa.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const dg=Symbol("rootName");class ug extends fa{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(dg)}set rootName(e){this._setCustomProperty(dg,e)}set _name(e){this.name=e}}ug.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class ii{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new S("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new S("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=de._createAt(e.startPosition):this.position=de._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof Xe){if(e.isAtEnd)return this.position=de._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof nn)return this.shallow?e.offset++:e=new de(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof Xe){if(this.singleCharacters)return e=new de(o,0),this.position=e,this._next();{let r,a=o.data.length;return o==this._boundaryEndParent?(a=this.boundaries.end.offset,r=new jn(o,0,a),e=de._createAfter(r)):(r=new jn(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",r,t,e,a)}}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new jn(n,e.offset,r);return e.offset+=r,this.position=e,this._formatReturnValue("text",a,t,e,r)}return e=de._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof Xe){if(e.isAtStart)return this.position=de._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof nn)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new de(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof Xe){if(this.singleCharacters)return e=new de(o,o.data.length),this.position=e,this._previous();{let r,a=o.data.length;if(o==this._boundaryStartParent){const l=this.boundaries.start.offset;r=new jn(o,l,o.data.length-l),a=r.data.length,e=de._createBefore(r)}else r=new jn(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",r,t,e,a)}}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const l=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-l}e.offset-=r;const a=new jn(n,e.offset,r);return this.position=e,this._formatReturnValue("text",a,t,e,r)}return e=de._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,r){return t instanceof jn&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=de._createAfter(t.textNode):(o=de._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=de._createBefore(t.textNode):(o=de._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:r}}}}class de extends ti{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof fa);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=de._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new ii(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=pe(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new ii(e)}clone(){return new de(this.parent,this.offset)}static _createAt(e,t){if(e instanceof de)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new S("view-createpositionat-offset-required",n)}return new de(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new de(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new S("view-position-after-root",e,{root:e});return new de(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new de(e.textNode,e.offsetInText);if(!e.parent)throw new S("view-position-before-root",e,{root:e});return new de(e.parent,e.index)}}de.prototype.is=function(i){return i==="position"||i==="view:position"};class xe extends ti{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new ii({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(ga,{direction:"backward"}),t=this.end.getLastMatchingPosition(ga);return e.parent.is("$text")&&e.isAtStart&&(e=de._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=de._createAfter(t.parent)),new xe(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(ga);if(e.isAfter(this.end)||e.isEqual(this.end))return new xe(e,e);let t=this.end.getLastMatchingPosition(ga,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new de(n,0)),o&&o.is("$text")&&(t=new de(o,o.data.length)),new xe(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new xe(this.start,e.start)),this.containsPosition(e.end)&&t.push(new xe(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new xe(t,n)}return null}getWalker(e={}){return e.boundaries=this,new ii(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new xe(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new ii(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new ii(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new de(e,t),new de(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(de._createBefore(e),t)}}function ga(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}xe.prototype.is=function(i){return i==="range"||i==="view:range"};class Vn extends Be(ti){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Ae(this.getRanges());if(t!=Ae(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof Vn||t instanceof Pl)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof xe)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof de)this._setRanges([new xe(t)]),this._setFakeOptions(o);else if(t instanceof ni){const r=!!o&&!!o.backward;let a;if(n===void 0)throw new S("view-selection-setto-required-second-parameter",this);a=n=="in"?xe._createIn(t):n=="on"?xe._createOn(t):new xe(de._createAt(t,n)),this._setRanges([a],r),this._setFakeOptions(o)}else{if(!he(t))throw new S("view-selection-setto-not-selectable",this);this._setRanges(t,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new S("view-selection-setfocus-no-ranges",this);const n=de._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new xe(n,o),!0):this._addRange(new xe(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof xe))throw new S("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new S("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new xe(e.start,e.end))}}Vn.prototype.is=function(i){return i==="selection"||i==="view:selection"};class Pl extends Be(ti){constructor(...e){super(),this._selection=new Vn,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Pl.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class $i extends V{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Bl=Symbol("bubbling contexts");function Ol(i){return class extends i{fire(e,...t){try{const n=e instanceof V?e:new V(this,e),o=Ll(this);if(!o.size)return;if(Vr(n,"capturing",this),qi(o,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),a=r?r.getContainedElement():null,l=!!a&&!!hg(o,a);let d=a||function(h){if(!h)return null;const p=h.start.parent,m=h.end.parent,_=p.getPath(),v=m.getPath();return _.length>v.length?p:m}(r);if(Vr(n,"atTarget",d),!l){if(qi(o,"$text",n,...t))return n.return;Vr(n,"bubbling",d)}for(;d;){if(d.is("rootElement")){if(qi(o,"$root",n,...t))return n.return}else if(d.is("element")&&qi(o,d.name,n,...t))return n.return;if(qi(o,d,n,...t))return n.return;d=d.parent,Vr(n,"bubbling",d)}return Vr(n,"bubbling",this),qi(o,"$document",n,...t),n.return}catch(n){S.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const o=Dt(n.context||"$document"),r=Ll(this);for(const a of o){let l=r.get(a);l||(l=new(Be()),r.set(a,l)),this.listenTo(l,e,t,n)}}_removeEventListener(e,t){const n=Ll(this);for(const o of n.values())this.stopListening(o,e,t)}}}{const i=Ol(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{Ol[e]=i.prototype[e]})}function Vr(i,e,t){i instanceof $i&&(i._eventPhase=e,i._currentTarget=t)}function qi(i,e,t,...n){const o=typeof e=="string"?i.get(e):hg(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function hg(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function Ll(i){return i[Bl]||(i[Bl]=new Map),i[Bl]}class pa extends Ol(U()){constructor(e){super(),this.selection=new Pl,this.roots=new An({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class ri extends nn{constructor(...e){super(...e),this.getFillerOffset=j1,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new S("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function j1(){if(Rl(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(Rl(i)>1)return null;i=i.parent}return!i||Rl(i)>1?null:this.childCount}function Rl(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}ri.DEFAULT_PRIORITY=10,ri.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class zl extends nn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=F1}_insertChild(e,t){if(t&&(t instanceof ni||Array.from(t).length>0))throw new S("view-emptyelement-cannot-add",[this,t]);return 0}}function F1(){return null}zl.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class ma extends nn{constructor(...e){super(...e),this.getFillerOffset=U1}_insertChild(e,t){if(t&&(t instanceof ni||Array.from(t).length>0))throw new S("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function V1(i){i.document.on("arrowKey",(e,t)=>function(n,o,r){if(o.keyCode==Ue.arrowright){const a=o.domTarget.ownerDocument.defaultView.getSelection(),l=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(l||o.shiftKey){const d=a.focusNode,h=a.focusOffset,p=r.domPositionToView(d,h);if(p===null)return;let m=!1;const _=p.getLastMatchingPosition(v=>(v.item.is("uiElement")&&(m=!0),!(!v.item.is("uiElement")&&!v.item.is("attributeElement"))));if(m){const v=r.viewPositionToDom(_);l?a.collapse(v.parent,v.offset):a.extend(v.parent,v.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function U1(){return null}ma.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class jl extends nn{constructor(...e){super(...e),this.getFillerOffset=H1}_insertChild(e,t){if(t&&(t instanceof ni||Array.from(t).length>0))throw new S("view-rawelement-cannot-add",[this,t]);return 0}render(){}}function H1(){return null}jl.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class si extends Be(ti){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t),this._customProperties=new Map}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,a){return typeof a=="string"?[new Xe(r,a)]:(he(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new Xe(r,l):l instanceof jn?new Xe(r,l.data):l))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}si.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class fg{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new si(this.document,e)}createText(e){return new Xe(this.document,e)}createAttributeElement(e,t,n={}){const o=new ri(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let r=null;Kt(n)?o=n:r=n;const a=new Fr(this.document,e,t,r);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const o=new fa(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new zl(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new ma(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const r=new jl(this.document,e,t);return n&&(r.render=n),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Kt(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof de?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new S("view-writer-break-non-container-element",this.document);if(!t.parent)throw new S("view-writer-break-root",this.document);if(e.isAtStart)return de._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(de._createAfter(t),n);const o=new xe(e,de._createAt(t,"end")),r=new de(n,0);this.move(o,r)}return de._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,l=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new de(a,l))}const o=n.getChild(t-1),r=n.getChild(t);if(!o||!r)return e;if(o.is("$text")&&r.is("$text"))return pg(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const a=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new de(o,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new S("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),r=o instanceof Xe?de._createAt(o,"end"):de._createAt(t,"end");return this.move(xe._createIn(n),de._createAt(t,"end")),this.remove(xe._createOn(n)),r}insert(e,t){mg(t=he(t)?[...t]:[t],this.document);const n=t.reduce((a,l)=>{const d=a[a.length-1],h=!l.is("uiElement");return d&&d.breakAttributes==h?d.nodes.push(l):a.push({breakAttributes:h,nodes:[l]}),a},[]);let o=null,r=e;for(const{nodes:a,breakAttributes:l}of n){const d=this._insertNodes(r,a,l);o||(o=d.start),r=d.end}return o?new xe(o,r):new xe(e)}remove(e){const t=e instanceof xe?e:xe._createOn(e);if(Ur(t,this.document),t.isCollapsed)return new si(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,a=o.offset-n.offset,l=r._removeChildren(n.offset,a);for(const h of l)this._removeFromClonedElementsGroup(h);const d=this.mergeAttributes(n);return t.start=d,t.end=d.clone(),new si(this.document,l)}clear(e,t){Ur(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let a;if(r.is("element")&&t.isSimilar(r))a=xe._createOn(r);else if(!o.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const l=r.getAncestors().find(d=>d.is("element")&&t.isSimilar(d));l&&(a=xe._createIn(l))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,r=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof ri))throw new S("view-writer-wrap-invalid-attribute",this.document);if(Ur(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(o=o.getLastMatchingPosition(a=>a.item.is("uiElement"))),o=this._wrapPosition(o,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new xe(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof ri))throw new S("view-writer-unwrap-invalid-attribute",this.document);if(Ur(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,a=this._unwrapChildren(r,n.offset,o.offset,t),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new xe(l,d)}rename(e,t){const n=new Fr(this.document,e,t.getAttributes());return this.insert(de._createAfter(t),n),this.move(xe._createIn(t),de._createAt(n,0)),this.remove(xe._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return de._createAt(e,t)}createPositionAfter(e){return de._createAfter(e)}createPositionBefore(e){return de._createBefore(e)}createRange(...e){return new xe(...e)}createRangeOn(e){return xe._createOn(e)}createRangeIn(e){return xe._createIn(e)}createSelection(...e){return new Vn(...e)}createSlot(e){if(!this._slotFactory)throw new S("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,r;if(o=n?Fl(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new S("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?Vl(e):e;const a=o._insertChild(r.offset,t);for(const p of t)this._addToClonedElementsGroup(p);const l=r.getShiftedBy(a),d=this.mergeAttributes(r);d.isEqual(r)||l.offset--;const h=this.mergeAttributes(l);return new xe(d,h)}_wrapChildren(e,t,n,o){let r=t;const a=[];for(;r<n;){const d=e.getChild(r),h=d.is("$text"),p=d.is("attributeElement");if(p&&this._wrapAttributeElement(o,d))a.push(new de(e,r));else if(h||!p||$1(o,d)){const m=o._clone();d._remove(),m._appendChild(d),e._insertChild(r,m),this._addToClonedElementsGroup(m),a.push(new de(e,r))}else this._wrapChildren(d,0,d.childCount,o);r++}let l=0;for(const d of a)d.offset-=l,d.offset!=t&&(this.mergeAttributes(d).isEqual(d)||(l++,n--));return xe._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let r=t;const a=[];for(;r<n;){const d=e.getChild(r);if(d.is("attributeElement"))if(d.isSimilar(o)){const h=d.getChildren(),p=d.childCount;d._remove(),e._insertChild(r,h),this._removeFromClonedElementsGroup(d),a.push(new de(e,r),new de(e,r+p)),r+=p,n+=p-1}else this._unwrapAttributeElement(o,d)?(a.push(new de(e,r),new de(e,r+1)),r++):(this._unwrapChildren(d,0,d.childCount,o),r++);else r++}let l=0;for(const d of a)d.offset-=l,!(d.offset==t||d.offset==n)&&(this.mergeAttributes(d).isEqual(d)||(l++,n--));return xe._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,a=this._wrapChildren(r,n.offset,o.offset,t),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new xe(l,d)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return gg(e.clone());e.parent.is("$text")&&(e=Vl(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new xe(e,e.getShiftedBy(1));this.wrap(o,t);const r=new de(n.parent,n.index);n._remove();const a=r.nodeBefore,l=r.nodeAfter;return a instanceof Xe&&l instanceof Xe?pg(a,l):gg(r)}_wrapAttributeElement(e,t){if(!bg(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!bg(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(Ur(e,this.document),e.isCollapsed){const d=this._breakAttributes(e.start,t);return new xe(d,d)}const r=this._breakAttributes(o,t),a=r.parent.childCount,l=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-a,new xe(l,r)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new S("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new S("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new S("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&Ul(o.parent)||Ul(o))return e.clone();if(o.is("$text"))return this._breakAttributes(Vl(e),t);if(n==o.childCount){const r=new de(o.parent,o.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new de(o.parent,o.index);return this._breakAttributes(r,t)}{const r=o.index+1,a=o._clone();o.parent._insertChild(r,a),this._addToClonedElementsGroup(a);const l=o.childCount-n,d=o._removeChildren(n,l);a._appendChild(d);const h=new de(o.parent,r);return this._breakAttributes(h,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Fl(i){let e=i.parent;for(;!Ul(e);){if(!e)return;e=e.parent}return e}function $1(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function gg(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new de(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new de(t,0):i}function Vl(i){if(i.offset==i.parent.data.length)return new de(i.parent.parent,i.parent.index+1);if(i.offset===0)return new de(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new Xe(i.root.document,e)),new de(i.parent.parent,i.parent.index+1)}function pg(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new de(i,t)}const q1=[Xe,ri,Fr,zl,jl,ma];function mg(i,e){for(const t of i){if(!q1.some(n=>t instanceof n))throw new S("view-writer-insert-invalid-node-type",e);t.is("$text")||mg(t.getChildren(),e)}}function Ul(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function Ur(i,e){const t=Fl(i.start),n=Fl(i.end);if(!t||!n||t!==n)throw new S("view-writer-invalid-range-container",e)}function bg(i,e){return i.id===null&&e.id===null}const kg=i=>i.createTextNode(" "),wg=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},_g=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Un=7,ba="⁠".repeat(Un);function on(i){return ht(i)&&i.data.substr(0,Un)===ba}function Hr(i){return i.data.length==Un&&on(i)}function Ag(i){return on(i)?i.data.slice(Un):i.data}function W1(i,e){if(e.keyCode==Ue.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;on(n)&&o<=Un&&t.collapse(n,0)}}}var Cg=g(9315),G1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Cg.Z,G1),Cg.Z.locals;class K1 extends U(){constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),y.isBlink&&!y.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new S("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!y.isAndroid)return;let e=null;const t=!(y.isBlink&&!y.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=de._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;on(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=vg(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),r=this._findReplaceActions(o,t,n);if(r.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const l of r)if(l==="replace"){const d=a.equal+a.insert,h=a.equal+a.delete,p=e.getChild(d);!p||p.is("uiElement")||p.is("rawElement")||this._updateElementMappings(p,t[h]),mf(n[d]),a.equal++}else a[l]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?de._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&ht(t.parent)&&on(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!on(e))throw new S("view-renderer-filler-was-lost",this);Hr(e)?e.remove():e.data=e.data.substr(Un),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const l=a.findAncestor(d=>d.hasAttribute("contenteditable"));return!l||l.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,r=e.nodeAfter;return!(o instanceof Xe||r instanceof Xe)&&(!y.isAndroid||!o&&!r)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let o=this.domConverter.viewToDom(e).data;const r=t.inlineFillerPosition;r&&r.parent==e.parent&&r.offset==e.index&&(o=ba+o),Eg(n,o)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),o=e.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(y.isAndroid){let m=null;for(const _ of Array.from(n.childNodes)){if(m&&ht(m)&&ht(_)){n.normalize();break}m=_}}const o=t.inlineFillerPosition,r=n.childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&vg(n.ownerDocument,a,o.offset);const l=this._diffNodeLists(r,a),d=y.isAndroid?this._findReplaceActions(l,r,a,{replaceText:!0}):l;let h=0;const p=new Set;for(const m of d)m==="delete"?(p.add(r[h]),mf(r[h])):m!=="equal"&&m!=="replace"||h++;h=0;for(const m of d)m==="insert"?(ff(n,h,a[h]),h++):m==="replace"?(Eg(r[h],a[h].data),h++):m==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[h])),h++);for(const m of p)m.parentNode||this.domConverter.unbindDomElement(m)}_diffNodeLists(e,t){return e=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(e,this._fakeSelectionContainer),ee(e,t,Y1.bind(null,this.domConverter))}_findReplaceActions(e,t,n,o={}){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],a=[],l=[];const d={equal:0,insert:0,delete:0};for(const h of e)h==="insert"?l.push(n[d.equal+d.insert]):h==="delete"?a.push(t[d.equal+d.delete]):(r=r.concat(ee(a,l,o.replaceText?xg:yg).map(p=>p==="equal"?"replace":p)),r.push("equal"),a=[],l=[]),d[h]++;return r.concat(ee(a,l,o.replaceText?xg:yg).map(h=>h==="equal"?"replace":h))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(y.isBlink&&!y.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&y.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const l=a.createElement("div");return l.className="ck-fake-selection-container",Object.assign(l.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),l.textContent=" ",l}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const o=t.getSelection(),r=t.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),y.isGecko&&function(r,a){const l=r.parent;if(l.nodeType!=Node.ELEMENT_NODE||r.offset!=l.childNodes.length-1)return;const d=l.childNodes[r.offset];d&&d.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function vg(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(ht(o))return o.data=ba+o.data,o;{const r=i.createTextNode(ba);return Array.isArray(e)?n.splice(t,0,r):ff(e,t,r),r}}function yg(i,e){return _o(i)&&_o(e)&&!ht(i)&&!ht(e)&&!ji(i)&&!ji(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function xg(i,e){return _o(i)&&_o(e)&&ht(i)&&ht(e)}function Y1(i,e,t){return e===t||(ht(e)&&ht(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function Eg(i,e){const t=i.data;if(t==e)return;const n=I(t,e);for(const o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}const Q1=_g(Re.document),Z1=kg(Re.document),J1=wg(Re.document),ka="data-ck-unsafe-attribute-",Dg="data-ck-unsafe-element";class wa{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Re.document:Re.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Fn,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Vn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const a=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),l=[];let d;for(;d=a.nextNode();)l.push(d);for(const h of l){for(const m of h.getAttributeNames())this.setDomElementAttribute(h,m,h.getAttribute(m));const p=h.tagName.toLowerCase();this._shouldRenameElement(p)&&(Mg(p),h.replaceWith(this._createReplacementDomElement(p,h)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(Mg(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);r||Z("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(ka+t)&&r&&e.removeAttribute(ka+t),e.setAttribute(r?t:ka+t,n)}removeDomElementAttribute(e,t){t!=Dg&&(e.removeAttribute(t),e.removeAttribute(ka+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const r of e.getChildren()){n===o&&(yield this._getBlockFiller());const a=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Ct(r.getAttributes());a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(a&&Z("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return on(n)&&(o+=Un),{parent:n,offset:o}}{let n,o,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const a=e.nodeBefore;if(o=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(a),!o)return null;n=o.parentNode,r=o.nextSibling}return ht(r)&&on(r)?{parent:r,offset:Un}:{parent:n,offset:o?ra(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(ji(e)&&t.skipComments)return null;if(ht(e)){if(Hr(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new Xe(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new si(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const r=e.attributes;if(r)for(let a=r.length,l=0;l<a;l++)o._setAttribute(r[l].name,r[l].value);if(this._isViewElementWithRawContent(o,t)||ji(e)){const a=ji(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",a),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const r of this.domChildrenToView(e,t))o._appendChild(r);return o}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],r=this.domToView(o,t);r!==null&&(yield r)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;ht(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const r=e.getRangeAt(o),a=this.domRangeToView(r);a&&n.push(a)}return new Vn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new xe(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,ra(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return de._createBefore(n);if(ht(e)){if(Hr(e))return this.domPositionToView(e.parentNode,ra(e));const o=this.findCorrespondingViewText(e);let r=t;return o?(on(e)&&(r-=Un,r=r<0?0:r),new de(o,r)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new de(o,0)}else{const o=e.childNodes[t-1];if(ht(o)&&Hr(o))return this.domPositionToView(o.parentNode,ra(o));const r=ht(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new de(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Hr(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const r=o.nextSibling;return r instanceof Xe?r:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const r=o.getChild(0);return r instanceof Xe?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=Re.window,r=[];Tg(t,a=>{const{scrollLeft:l,scrollTop:d}=a;r.push([l,d])}),t.focus(),Tg(t,a=>{const[l,d]=r.shift();a.scrollLeft=l,a.scrollTop=d}),Re.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(Q1):!(e.tagName!=="BR"||!Sg(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(J1)||function(t,n){return t.isEqualNode(Z1)&&Sg(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=cf(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return kg(this._domDocument);case"markedNbsp":return wg(this._domDocument);case"br":return _g(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(ht(e)&&on(e)&&t<Un||this.isElement(e)&&on(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(h,p){return cf(h).some(_=>_.tagName&&p.includes(_.tagName.toLowerCase()))}(e,this.preElements))return Ag(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),r=this._checkShouldLeftTrimDomText(e,n),a=this._checkShouldRightTrimDomText(e,o);r&&(t=t.replace(/^ /,"")),a&&(t=t.replace(/ $/,"")),t=Ag(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const l=o&&this.isElement(o)&&o.tagName!="BR",d=o&&ht(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||l||d)&&(t=t.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!on(e)}_getTouchingInlineViewNode(e,t){const n=new ii({startPosition:t?de._createAfter(e):de._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let r=!0,a=e;do if(!r&&a[n]?a=a[n]:a[o]?(a=a[o],r=!1):(a=a.parentNode,r=!0),!a||this._isBlockElement(a))return null;while(!ht(a)&&a.tagName!="BR"&&!this._isInlineObjectElement(a));return a}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(ji(e))return new ma(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new nn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Dg,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function Tg(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function Sg(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Mg(i){i==="script"&&Z("domconverter-unsafe-script-element-detected"),i==="style"&&Z("domconverter-unsafe-style-element-detected")}class Hn extends Jo(){constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Ig=sg(function(i,e){Li(e,zi(e),i)});class Wi{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Ig(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Co extends Hn{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Wi(this.view,t,n))}}class X1 extends Co{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Fi(this)}};this.fire(e.type,e,t)}}const Hl=function(){return Oe.Date.now()};var ex=/\s/;const tx=function(i){for(var e=i.length;e--&&ex.test(i.charAt(e)););return e};var nx=/^\s+/;const ox=function(i){return i&&i.slice(0,tx(i)+1).replace(nx,"")};var Ng=NaN,ix=/^[-+]0x[0-9a-f]+$/i,rx=/^0b[01]+$/i,sx=/^0o[0-7]+$/i,ax=parseInt;const Pg=function(i){if(typeof i=="number")return i;if(ua(i))return Ng;if(ae(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=ae(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=ox(i);var t=rx.test(i);return t||sx.test(i)?ax(i.slice(2),t?2:8):ix.test(i)?Ng:+i};var cx="Expected a function",lx=Math.max,dx=Math.min;const $r=function(i,e,t){var n,o,r,a,l,d,h=0,p=!1,m=!1,_=!0;if(typeof i!="function")throw new TypeError(cx);function v(R){var K=n,ue=o;return n=o=void 0,h=R,a=i.apply(ue,K)}function E(R){var K=R-d;return d===void 0||K>=e||K<0||m&&R-h>=r}function T(){var R=Hl();if(E(R))return M(R);l=setTimeout(T,function(K){var ue=e-(K-d);return m?dx(ue,r-(K-h)):ue}(R))}function M(R){return l=void 0,_&&n?v(R):(n=o=void 0,a)}function B(){var R=Hl(),K=E(R);if(n=arguments,o=this,d=R,K){if(l===void 0)return function(ue){return h=ue,l=setTimeout(T,e),p?v(ue):a}(d);if(m)return clearTimeout(l),l=setTimeout(T,e),v(d)}return l===void 0&&(l=setTimeout(T,e)),a}return e=Pg(e)||0,ae(t)&&(p=!!t.leading,r=(m="maxWait"in t)?lx(Pg(t.maxWait)||0,e):r,_="trailing"in t?!!t.trailing:_),B.cancel=function(){l!==void 0&&clearTimeout(l),h=0,n=d=o=l=void 0},B.flush=function(){return l===void 0?a:M(Hl())},B};class ux extends Hn{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=$r(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Vn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Ue.arrowleft&&e!=Ue.arrowup||n.setTo(n.getFirstPosition()),e!=Ue.arrowright&&e!=Ue.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}var hx="__lodash_hash_undefined__";const fx=function(i){return this.__data__.set(i,hx),this},gx=function(i){return this.__data__.has(i)};function _a(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new Js;++e<t;)this.add(i[e])}_a.prototype.add=_a.prototype.push=fx,_a.prototype.has=gx;const px=_a,mx=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},bx=function(i,e){return i.has(e)};var kx=1,wx=2;const Bg=function(i,e,t,n,o,r){var a=t&kx,l=i.length,d=e.length;if(l!=d&&!(a&&d>l))return!1;var h=r.get(i),p=r.get(e);if(h&&p)return h==e&&p==i;var m=-1,_=!0,v=t&wx?new px:void 0;for(r.set(i,e),r.set(e,i);++m<l;){var E=i[m],T=e[m];if(n)var M=a?n(T,E,m,e,i,r):n(E,T,m,i,e,r);if(M!==void 0){if(M)continue;_=!1;break}if(v){if(!mx(e,function(B,R){if(!bx(v,R)&&(E===B||o(E,B,t,n,r)))return v.push(R)})){_=!1;break}}else if(E!==T&&!o(E,T,t,n,r)){_=!1;break}}return r.delete(i),r.delete(e),_},_x=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},Ax=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var Cx=1,vx=2,yx="[object Boolean]",xx="[object Date]",Ex="[object Error]",Dx="[object Map]",Tx="[object Number]",Sx="[object RegExp]",Mx="[object Set]",Ix="[object String]",Nx="[object Symbol]",Px="[object ArrayBuffer]",Bx="[object DataView]",Og=Pe?Pe.prototype:void 0,$l=Og?Og.valueOf:void 0;const Ox=function(i,e,t,n,o,r,a){switch(t){case Bx:if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case Px:return!(i.byteLength!=e.byteLength||!r(new ta(i),new ta(e)));case yx:case xx:case Tx:return Ir(+i,+e);case Ex:return i.name==e.name&&i.message==e.message;case Sx:case Ix:return i==e+"";case Dx:var l=_x;case Mx:var d=n&Cx;if(l||(l=Ax),i.size!=e.size&&!d)return!1;var h=a.get(i);if(h)return h==e;n|=vx,a.set(i,e);var p=Bg(l(i),l(e),n,o,r,a);return a.delete(i),p;case Nx:if($l)return $l.call(i)==$l.call(e)}return!1};var Lx=1,Rx=Object.prototype.hasOwnProperty;const zx=function(i,e,t,n,o,r){var a=t&Lx,l=rl(i),d=l.length;if(d!=rl(e).length&&!a)return!1;for(var h=d;h--;){var p=l[h];if(!(a?p in e:Rx.call(e,p)))return!1}var m=r.get(i),_=r.get(e);if(m&&_)return m==e&&_==i;var v=!0;r.set(i,e),r.set(e,i);for(var E=a;++h<d;){var T=i[p=l[h]],M=e[p];if(n)var B=a?n(M,T,p,e,i,r):n(T,M,p,i,e,r);if(!(B===void 0?T===M||o(T,M,t,n,r):B)){v=!1;break}E||(E=p=="constructor")}if(v&&!E){var R=i.constructor,K=e.constructor;R==K||!("constructor"in i)||!("constructor"in e)||typeof R=="function"&&R instanceof R&&typeof K=="function"&&K instanceof K||(v=!1)}return r.delete(i),r.delete(e),v};var jx=1,Lg="[object Arguments]",Rg="[object Array]",Aa="[object Object]",zg=Object.prototype.hasOwnProperty;const Fx=function(i,e,t,n,o,r){var a=Ut(i),l=Ut(e),d=a?Rg:Rr(i),h=l?Rg:Rr(e),p=(d=d==Lg?Aa:d)==Aa,m=(h=h==Lg?Aa:h)==Aa,_=d==h;if(_&&Or(i)){if(!Or(e))return!1;a=!0,p=!1}if(_&&!p)return r||(r=new Br),a||tl(i)?Bg(i,e,t,n,o,r):Ox(i,e,d,t,n,o,r);if(!(t&jx)){var v=p&&zg.call(i,"__wrapped__"),E=m&&zg.call(e,"__wrapped__");if(v||E){var T=v?i.value():i,M=E?e.value():e;return r||(r=new Br),o(T,M,t,n,r)}}return!!_&&(r||(r=new Br),zx(i,e,t,n,o,r))},jg=function i(e,t,n,o,r){return e===t||(e==null||t==null||!un(e)&&!un(t)?e!=e&&t!=t:Fx(e,t,n,o,i,r))},Vx=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?jg(i,e,void 0,t):!!n};class Fg extends Hn{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,o=new Set;for(const a of e){const l=t.mapDomToView(a.target);l&&(l.is("uiElement")||l.is("rawElement")||a.type!=="childList"||this._isBogusBrMutation(a)||o.add(l))}for(const a of e){const l=t.mapDomToView(a.target);if((!l||!l.is("uiElement")&&!l.is("rawElement"))&&a.type==="characterData"){const d=t.findCorrespondingViewText(a.target);d&&!o.has(d.parent)?n.add(d):!d&&on(a.target)&&o.add(t.mapDomToView(a.target.parentNode))}}let r=!1;for(const a of n)r=!0,this.renderer.markToSync("text",a);for(const a of o){const l=t.mapViewToDom(a),d=Array.from(a.getChildren()),h=Array.from(t.domChildrenToView(l,{withChildren:!1}));Vx(d,h,Ux)||(r=!0,this.renderer.markToSync("children",a))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function Ux(i,e){if(!Array.isArray(i))return i===e||!(!i.is("$text")||!e.is("$text"))&&i.data===e.data}class ql extends Co{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,o)=>{const r=t.selection.editableElement;r!==null&&r!==o.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Hx extends Hn{constructor(e){super(e),this.mutationObserver=e.getObserver(Fg),this.focusObserver=e.getObserver(ql),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=$r(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=$r(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(o,r)=>{this.document.isComposing&&!y.isAndroid||(this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.focusObserver.flush(),this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class $x extends Co{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Vg{constructor(e,t={}){this._files=t.cacheFiles?Ug(e):null,this._native=e}get files(){return this._files||(this._files=Ug(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Ug(i){const e=Array.from(i.files||[]),t=Array.from(i.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class qx extends Co{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,o=n.document;let r=null,a=null,l=[];if(e.dataTransfer&&(r=new Vg(e.dataTransfer)),e.data!==null?a=e.data:r&&(a=r.getData("text/plain")),o.selection.isFake)l=Array.from(o.selection.getRanges());else if(t.length)l=t.map(d=>n.domConverter.domRangeToView(d));else if(y.isAndroid){const d=e.target.ownerDocument.defaultView.getSelection();l=Array.from(n.domConverter.domSelectionToView(d).getRanges())}if(y.isAndroid&&e.inputType=="insertCompositionText"&&a&&a.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(l[0].end)]});else if(e.inputType=="insertText"&&a&&a.includes(`
`)){const d=a.split(/\n{1,2}/g);let h=l;for(let p=0;p<d.length;p++){const m=d[p];m!=""&&(this.fire(e.type,e,{data:m,dataTransfer:r,targetRanges:h,inputType:e.inputType,isComposing:e.isComposing}),h=[o.selection.getFirstRange()]),p+1<d.length&&(this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:h}),h=[o.selection.getFirstRange()])}}else this.fire(e.type,e,{data:a,dataTransfer:r,targetRanges:l,inputType:e.inputType,isComposing:e.isComposing})}}class Wx extends Hn{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((o=n.keyCode)==Ue.arrowright||o==Ue.arrowleft||o==Ue.arrowup||o==Ue.arrowdown)){const r=new $i(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&t.stop()}var o})}observe(){}}class Gx extends Hn{constructor(e){super(e);const t=this.document;t.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=Ue.tab||o.ctrlKey)return;const r=new $i(t,"tab",t.selection.getFirstRange());t.fire(r,o),r.stop.called&&n.stop()})}observe(){}}class Kx extends U(){constructor(e){super(),this.document=new pa(e),this.domConverter=new wa(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new K1(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing").to(this.document,"isFocused","isSelecting","isComposing"),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new fg(this.document),this.addObserver(Fg),this.addObserver(ql),this.addObserver(Hx),this.addObserver(X1),this.addObserver(ux),this.addObserver($x),this.addObserver(Wx),this.addObserver(qx),this.addObserver(Gx),this.document.on("arrowKey",W1,{priority:"low"}),V1(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const o={};for(const{name:a,value:l}of Array.from(e.attributes))o[a]=l,a==="class"?this._writer.addClass(l.split(" "),n):this._writer.setAttribute(a,l,n);this._initialDomRootAttributes.set(e,o);const r=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(a,l)=>this._renderer.markToSync("children",l)),n.on("change:attributes",(a,l)=>this._renderer.markToSync("attributes",l)),n.on("change:text",(a,l)=>this._renderer.markToSync("text",l)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const a of this._observers.values())a.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:o})=>t.removeAttribute(o));const n=this._initialDomRootAttributes.get(t);for(const o in n)t.setAttribute(o,n[o]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,o]of this.domRoots)t.observe(o,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const o=pl(t);let r=o,a=null;for(;r;){let l;l=vy(r==o?t:a),Cy(l,()=>Af(t,r));const d=Af(t,r);if(Ay(r,d,n),r.parent!=r){if(a=r.frameElement,r=r.parent,!a)return}else r=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new S("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){S.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.getObserver(ql).flush(),this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return de._createAt(e,t)}createPositionAfter(e){return de._createAfter(e)}createPositionBefore(e){return de._createBefore(e)}createRange(...e){return new xe(...e)}createRangeOn(e){return xe._createOn(e)}createRangeIn(e){return xe._createIn(e)}createSelection(...e){return new Vn(...e)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class vo{is(){throw new Error("is() method is abstract")}}class Gi extends vo{constructor(e){super(),this.parent=null,this._attrs=zn(e)}get document(){return null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new S("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new S("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=pe(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}_clone(e){return new this.constructor(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=zn(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}Gi.prototype.is=function(i){return i==="node"||i==="model:node"};class qr{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new S("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new S("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof Gi))throw new S("model-nodelist-insertnodes-not-node",this);this._nodes=function(n,o,r,a){if(Math.max(o.length,n.length)>My)return n.slice(0,r).concat(o).concat(n.slice(r+a,n.length));{const l=Array.from(n);return l.splice(r,a,...o),l}}(this._nodes,Array.from(t),e,0)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class et extends Gi{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new et(this.data,this.getAttributes())}static fromJSON(e){return new et(e.data,e.attributes)}}et.prototype.is=function(i){return i==="$text"||i==="model:$text"||i==="text"||i==="model:text"||i==="node"||i==="model:node"};class vn extends vo{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.offsetSize)throw new S("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new S("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}vn.prototype.is=function(i){return i==="$textProxy"||i==="model:$textProxy"||i==="textProxy"||i==="model:textProxy"};class Qe extends Gi{constructor(e,t,n){super(t),this._children=new qr,this.name=e,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new Qe(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new et(o)]:(he(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new et(r):r instanceof vn?new et(r.data,r.getAttributes()):r))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}static fromJSON(e){let t;if(e.children){t=[];for(const n of e.children)n.name?t.push(Qe.fromJSON(n)):t.push(et.fromJSON(n))}return new Qe(e.name,e.attributes,t)}}Qe.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="model:element"):i==="element"||i==="model:element"||i==="node"||i==="model:node"};class $n{constructor(e){if(!e||!e.boundaries&&!e.startPosition)throw new S("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new S("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=X._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,o,r;do o=this.position,r=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const o=Wr(t,n),r=o||Hg(t,n,o);if(r instanceof Qe)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=r),this.position=t,ai("elementStart",r,e,t,1);if(r instanceof et){let a;if(this.singleCharacters)a=1;else{let h=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<h&&(h=this.boundaries.end.offset),a=h-t.offset}const l=t.offset-r.startOffset,d=new vn(r,l,a);return t.offset+=a,this.position=t,ai("text",d,e,t,a)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():ai("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const o=t.parent,r=Wr(t,o),a=r||$g(t,o,r);if(a instanceof Qe)return t.offset--,this.shallow?(this.position=t,ai("elementStart",a,e,t,1)):(t.path.push(a.maxOffset),this.position=t,this._visitedParent=a,this.ignoreElementEnd?this._previous():ai("elementEnd",a,e,t));if(a instanceof et){let l;if(this.singleCharacters)l=1;else{let p=a.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>p&&(p=this.boundaries.start.offset),l=t.offset-p}const d=t.offset-a.startOffset,h=new vn(a,d-l,l);return t.offset-=l,this.position=t,ai("text",h,e,t,l)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,ai("elementStart",n,e,t,1)}}function ai(i,e,t,n,o){return{done:!1,value:{type:i,item:e,previousPosition:t,nextPosition:n,length:o}}}class X extends vo{constructor(e,t,n="toNone"){if(super(),!e.is("element")&&!e.is("documentFragment"))throw new S("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new S("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new S("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new S("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Wr(this,this.parent)}get nodeAfter(){const e=this.parent;return Hg(this,e,Wr(this,e))}get nodeBefore(){const e=this.parent;return $g(this,e,Wr(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=pe(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new $n(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=pe(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){if(this.root!==e.root)return!1;const t=Math.min(this.path.length,e.path.length);for(let n=0;n<t;n++){const o=this.path[n]-e.path[n];if(o<-1||o>1)return!1;if(o===1)return qg(e,this,n);if(o===-1)return qg(this,e,n)}return this.path.length===e.path.length||(this.path.length>e.path.length?Wl(this.path,t):Wl(e.path,t))}hasSameParentAs(e){return this.root!==e.root?!1:pe(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=X._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?X._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=X._createAt(this);if(this.root!=e.root)return n;if(pe(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(pe(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;if(e.offset<=this.path[o]){if(e.offset+t>this.path[o])return null;n.path[o]-=t}}return n}_getTransformedByInsertion(e,t){const n=X._createAt(this);if(this.root!=e.root)return n;if(pe(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(pe(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;e.offset<=this.path[o]&&(n.path[o]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return X._createAt(this);const o=this._getTransformedByDeletion(e,n);return o===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):o._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,o=X._createAt(t);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-e.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof X)return new X(e.root,e.path,e.stickiness);{const o=e;if(t=="end")t=o.maxOffset;else{if(t=="before")return this._createBefore(o,n);if(t=="after")return this._createAfter(o,n);if(t!==0&&!t)throw new S("model-createpositionat-offset-required",[this,e])}if(!o.is("element")&&!o.is("documentFragment"))throw new S("model-position-parent-incorrect",[this,e]);const r=o.getPath();return r.push(t),new this(o.root,r,n)}}static _createAfter(e,t){if(!e.parent)throw new S("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new S("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new X(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new S("model-position-fromjson-no-root",t,{rootName:e.root});return new X(t.getRoot(e.root),e.path,e.stickiness)}}function Wr(i,e){const t=e.getChild(e.offsetToIndex(i.offset));return t&&t.is("$text")&&t.startOffset<i.offset?t:null}function Hg(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset))}function $g(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset)-1)}function qg(i,e,t){return t+1!==i.path.length&&!!Wl(e.path,t+1)&&!!function(n,o){let r=n.parent,a=n.path.length-1,l=0;for(;a>=o;){if(n.path[a]+l!==r.maxOffset)return!1;l=1,a--,r=r.parent}return!0}(i,t+1)}function Wl(i,e){for(;e<i.length;){if(i[e]!==0)return!1;e++}return!0}X.prototype.is=function(i){return i==="position"||i==="model:position"};class W extends vo{constructor(e,t){super(),this.start=X._createAt(e),this.end=t?X._createAt(t):X._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new $n({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return pe(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}containsItem(e){const t=X._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new W(this.start,e.start)),this.containsPosition(e.end)&&t.push(new W(e.end,this.end))):t.push(new W(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new W(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let o=this.start,r=this.end;return e.start.isBefore(o)&&(o=e.start),e.end.isAfter(r)&&(r=e.end),new W(o,r)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=X._createAt(this.start);let o=n.parent;for(;n.path.length>t+1;){const r=o.maxOffset-n.offset;r!==0&&e.push(new W(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],a=r-n.offset;a!==0&&e.push(new W(n,n.getShiftedBy(a))),n.offset=r,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new $n(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new $n(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new $n(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new W(this.start,this.end)]}getTransformedByOperations(e){const t=[new W(this.start,this.end)];for(const n of e)for(let o=0;o<t.length;o++){const r=t[o].getTransformedByOperation(n);t.splice(o,1,...r),o+=r.length-1}for(let n=0;n<t.length;n++){const o=t[n];for(let r=n+1;r<t.length;r++){const a=t[r];(o.containsRange(a)||a.containsRange(o)||o.isEqual(a))&&t.splice(r,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,o=e.howMany,r=e.targetPosition;return this._getTransformedByMove(n,r,o,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new W(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new W(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=X._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new W(t,n)):new W(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new W(this.start,e),new W(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const o=new W(this.start,this.end);return o.start=o.start._getTransformedByInsertion(e,t),o.end=o.end._getTransformedByInsertion(e,t),[o]}}_getTransformedByMove(e,t,n,o=!1){if(this.isCollapsed){const m=this.start._getTransformedByMove(e,t,n);return[new W(m)]}const r=W._createFromPositionAndShift(e,n),a=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!o&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const m=this.start._getTransformedByMove(e,t,n),_=this.end._getTransformedByMove(e,t,n);return[new W(m,_)]}let l;const d=this.getDifference(r);let h=null;const p=this.getIntersection(r);if(d.length==1?h=new W(d[0].start._getTransformedByDeletion(e,n),d[0].end._getTransformedByDeletion(e,n)):d.length==2&&(h=new W(this.start,this.end._getTransformedByDeletion(e,n))),l=h?h._getTransformedByInsertion(a,n,p!==null||o):[],p){const m=new W(p.start._getCombined(r.start,a),p.end._getCombined(r.start,a));l.length==2?l.splice(1,0,m):l.push(m)}return l}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),o=this.end._getTransformedByDeletion(e,t);return n==null&&o==null?null:(n==null&&(n=e),o==null&&(o=e),new W(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return new this(X._createAt(e,0),X._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(X._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new S("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((r,a)=>r.start.isAfter(a.start)?1:-1);const n=e.indexOf(t),o=new this(t.start,t.end);if(n>0)for(let r=n-1;e[r].end.isEqual(o.start);r++)o.start=X._createAt(e[r].start);for(let r=n+1;r<e.length&&e[r].start.isEqual(o.end);r++)o.end=X._createAt(e[r].end);return o}static fromJSON(e,t){return new this(X.fromJSON(e.start,t),X.fromJSON(e.end,t))}}W.prototype.is=function(i){return i==="range"||i==="model:range"};class Wg extends Be(){constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new S("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),o=this._viewToModelMapping.get(n),r=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=X._createAt(o,r)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const o of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(o);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const o=this._elementToMarkerNames.get(e)||new Set;o.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,o)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const o=this._elementToMarkerNames.get(e);o&&(o.delete(t),o.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new W(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new xe(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const o of t)if(o.is("attributeElement"))for(const r of o.getElementsWithSameId())n.add(r);else n.add(o);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let o=0;for(let r=0;r<t;r++)o+=this.getModelLength(e.getChild(r));return o}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,o=0,r=0,a=0;if(e.is("$text"))return new de(e,t);for(;r<t;)n=e.getChild(a),o=this.getModelLength(n),r+=o,a++;return r==t?this._moveViewPositionToTextNode(new de(e,a)):this.findPositionIn(n,t-(r-o))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof Xe?new de(t,t.data.length):n instanceof Xe?new de(n,0):e}}class Yx{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=Ca(t),e instanceof vn&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=Ca(t),e instanceof vn&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=Ca(t),e instanceof vn&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const o=n.get(t);return o===void 0?null:o}revert(e,t){t=Ca(t),e instanceof vn&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,o]of this._consumable)for(const[r,a]of o){const l=r.split(":")[0];a&&e==l&&t.push({event:r,item:n.name||n.description})}if(t.length)throw new S("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const o=n.get(e.endOffset);o&&(t=o.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,o=e.parent,r=Symbol("$textProxy:"+e.data);let a,l;return a=this._textProxyRegistry.get(t),a||(a=new Map,this._textProxyRegistry.set(t,a)),l=a.get(n),l||(l=new Map,a.set(n,l)),l.set(o,r),r}}function Ca(i){const e=i.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?i:e.length>1?e[0]+":"+e[1]:e[0]}class Gg extends Be(){constructor(e){super(),this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const o=this._createConversionApi(n,e.getRefreshedItems());for(const a of e.getMarkersToRemove())this._convertMarkerRemove(a.name,a.range,o);const r=this._reduceChanges(e.getChanges());for(const a of r)a.type==="insert"?this._convertInsert(W._createFromPositionAndShift(a.position,a.length),o):a.type==="reinsert"?this._convertReinsert(W._createFromPositionAndShift(a.position,a.length),o):a.type==="remove"?this._convertRemove(a.position,a.length,a.name,o):this._convertAttribute(a.range,a.attributeKey,a.attributeOldValue,a.attributeNewValue,o);for(const a of o.mapper.flushUnboundMarkerNames()){const l=t.get(a).getRange();this._convertMarkerRemove(a,l,o),this._convertMarkerAdd(a,l,o)}for(const a of e.getMarkersToAdd())this._convertMarkerAdd(a.name,a.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(e,t,n,o={}){const r=this._createConversionApi(n,void 0,o);this._convertInsert(e,r);for(const[a,l]of t)this._convertMarkerAdd(a,l,r);r.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const o=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),r=this._createConversionApi(n);if(this._addConsumablesForSelection(r.consumable,e,o),this.fire("selection",{selection:e},r),e.isCollapsed){for(const a of o){const l=a.getRange();if(!Qx(e.getFirstPosition(),a,r.mapper))continue;const d={item:e,markerName:a.name,markerRange:l};r.consumable.test(e,"addMarker:"+a.name)&&this.fire(`addMarker:${a.name}`,d,r)}for(const a of e.getAttributeKeys()){const l={item:e,range:e.getFirstRange(),attributeKey:a,attributeOldValue:null,attributeNewValue:e.getAttribute(a)};r.consumable.test(e,"attribute:"+l.attributeKey)&&this.fire(`attribute:${l.attributeKey}:$text`,l,r)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const o of Array.from(e.getWalker({shallow:!0})).map(Kg))this._testAndFire("insert",o,t)}_convertRemove(e,t,n,o){this.fire(`remove:${n}`,{position:e,length:t},o)}_convertAttribute(e,t,n,o,r){this._addConsumablesForRange(r.consumable,e,`attribute:${t}`);for(const a of e){const l={item:a.item,range:W._createFromPositionAndShift(a.previousPosition,a.length),attributeKey:t,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${t}`,l,r)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const o of n.map(Kg))this._testAndFire("insert",{...o,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const o=`addMarker:${e}`;if(n.consumable.add(t,o),this.fire(o,{markerName:e,markerRange:t},n),n.consumable.consume(t,o)){this._addConsumablesForRange(n.consumable,t,o);for(const r of t.getItems()){if(!n.consumable.test(r,o))continue;const a={item:r,range:W._createOn(r),markerName:e,markerRange:t};this.fire(o,a,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire(`removeMarker:${e}`,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const o=n.item;if(e.test(o,"insert")===null){e.add(o,"insert");for(const r of o.getAttributeKeys())e.add(o,"attribute:"+r)}}return e}_addConsumablesForRange(e,t,n){for(const o of t.getItems())e.add(o,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const o of n)e.add(t,"addMarker:"+o.name);for(const o of t.getAttributeKeys())e.add(t,"attribute:"+o);return e}_testAndFire(e,t,n){const o=function(d,h){const p=h.item.is("element")?h.item.name:"$text";return`${d}:${p}`}(e,t),r=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,a=this._firedEventsMap.get(n),l=a.get(r);if(l){if(l.has(o))return;l.add(o)}else a.set(r,new Set([o]));this.fire(o,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:W._createOn(e)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,t)}_createConversionApi(e,t=new Set,n={}){const o={...this._conversionApi,consumable:new Yx,writer:e,options:n,convertItem:r=>this._convertInsert(W._createOn(r),o),convertChildren:r=>this._convertInsert(W._createIn(r),o,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,o),canReuseView:r=>!t.has(o.mapper.toModelElement(r))};return this._firedEventsMap.set(o,new Map),o}}function Qx(i,e,t){const n=e.getRange(),o=Array.from(i.getAncestors());return o.shift(),o.reverse(),!o.some(r=>{if(n.containsItem(r))return!!t.toViewElement(r).getCustomProperty("addHighlight")})}function Kg(i){return{item:i.item,range:W._createFromPositionAndShift(i.previousPosition,i.length)}}class qn extends Be(vo){constructor(...e){super(),this._lastRangeBackward=!1,this._attrs=new Map,this._ranges=[],e.length&&this.setTo(...e)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new W(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new W(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new W(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]);else if(t instanceof qn)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof W)this._setRanges([t],!!o&&!!o.backward);else if(t instanceof X)this._setRanges([new W(t)]);else if(t instanceof Gi){const r=!!o&&!!o.backward;let a;if(n=="in")a=W._createIn(t);else if(n=="on")a=W._createOn(t);else{if(n===void 0)throw new S("model-selection-setto-required-second-parameter",[this,t]);a=new W(X._createAt(t,n))}this._setRanges([a],r)}else{if(!he(t))throw new S("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,o&&!!o.backward)}}_setRanges(e,t=!1){const n=Array.from(e),o=n.some(r=>{if(!(r instanceof W))throw new S("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(a=>!a.isEqual(r))});(n.length!==this._ranges.length||o)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0}))}setFocus(e,t){if(this.anchor===null)throw new S("model-selection-setfocus-no-ranges",[this,e]);const n=X._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new W(n,o)),this._lastRangeBackward=!0):(this._pushRange(new W(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=Qg(t.start,e);n&&Gl(n,t)&&(yield n);for(const r of t.getWalker()){const a=r.item;r.type=="elementEnd"&&Zx(a,e,t)&&(yield a)}const o=Qg(t.end,e);o&&!t.end.isTouching(X._createAt(o,0))&&Gl(o,t)&&(yield o)}}containsEntireContent(e=this.anchor.root){const t=X._createAt(e,0),n=X._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new W(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new S("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_replaceAllRanges(e){this._removeAllRanges();for(const t of e)this._pushRange(t)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Yg(i,e){return!e.has(i)&&(e.add(i),i.root.document.model.schema.isBlock(i)&&!!i.parent)}function Zx(i,e,t){return Yg(i,e)&&Gl(i,t)}function Qg(i,e){const t=i.parent.root.document.model.schema,n=i.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=n.find(a=>!o&&(o=t.isLimit(a),!o&&Yg(a,e)));return n.forEach(a=>e.add(a)),r}function Gl(i,e){const t=function(n){const o=n.root.document.model.schema;let r=n.parent;for(;r;){if(o.isBlock(r))return r;r=r.parent}}(i);return t?!e.containsRange(W._createOn(t),!0):!0}qn.prototype.is=function(i){return i==="selection"||i==="model:selection"};class yn extends Be(W){constructor(e,t){super(e,t),Jx.call(this)}detach(){this.stopListening()}toRange(){return new W(this.start,this.end)}static fromRange(e){return new yn(e.start,e.end)}}function Jx(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&Xx.call(this,t)},{priority:"low"})}function Xx(i){const e=this.getTransformedByOperation(i),t=W._createFromRanges(e),n=!t.isEqual(this),o=function(a,l){switch(l.type){case"insert":return a.containsPosition(l.position);case"move":case"remove":case"reinsert":case"merge":return a.containsPosition(l.sourcePosition)||a.start.isEqual(l.sourcePosition)||a.containsPosition(l.targetPosition);case"split":return a.containsPosition(l.splitPosition)||a.containsPosition(l.insertionPosition)}return!1}(this,i);let r=null;if(n){t.root.rootName=="$graveyard"&&(r=i.type=="remove"?i.sourcePosition:i.deletionPosition);const a=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",a,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}yn.prototype.is=function(i){return i==="liveRange"||i==="model:liveRange"||i=="range"||i==="model:range"};const Gr="selection:";class fn extends Be(vo){constructor(e){super(),this._selection=new eE(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(...e){this._selection.setTo(...e)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return Gr+e}static _isStoreAttributeKey(e){return e.startsWith(Gr)}}fn.prototype.is=function(i){return i==="selection"||i=="model:selection"||i=="documentSelection"||i=="model:documentSelection"};class eE extends qn{constructor(e){super(),this.markers=new An({idProperty:"name"}),this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this._model=e.model,this._document=e,this.listenTo(this._model,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(t,n,o,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(t,n)=>{(function(o,r){const a=o.document.differ;for(const l of a.getChanges()){if(l.type!="insert")continue;const d=l.position.parent;l.length===d.maxOffset&&o.enqueueChange(r,h=>{const p=Array.from(d.getAttributeKeys()).filter(m=>m.startsWith(Gr));for(const m of p)h.removeAttribute(m,d)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...e){super.setTo(...e),this._updateAttributes(!0),this.updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this.updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=oe();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new S("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this.updateMarkers()}_replaceAllRanges(e){this._validateSelectionRanges(e),super._replaceAllRanges(e)}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_validateSelectionRanges(e){for(const t of e)if(!this._document._validateSelectionRange(t))throw new S("document-selection-wrong-position",this,{range:t})}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=yn.fromRange(e);return t.on("change:range",(n,o,r)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const a=this._ranges.indexOf(t);this._ranges.splice(a,1),t.detach()}}),t}updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const o of this._model.markers){const r=o.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const a=o.getRange();for(const l of this.getRanges())a.containsRange(l,!l.isCollapsed)&&e.push(o)}const n=Array.from(this.markers);for(const o of e)this.markers.has(o)||(this.markers.add(o),t=!0);for(const o of Array.from(this.markers))e.includes(o)||(this.markers.remove(o),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const r=Array.from(this.markers),a=this.markers.has(e);if(t){let l=!1;for(const d of this.getRanges())if(t.containsRange(d,!d.isCollapsed)){l=!0;break}l&&!a?(this.markers.add(e),o=!0):!l&&a&&(this.markers.remove(e),o=!0)}else a&&(this.markers.remove(e),o=!0);o&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(e){const t=zn(this._getSurroundingAttributes()),n=zn(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,a]of this._attributePriority)a=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(t);const o=[];for(const[r,a]of this.getAttributes())n.has(r)&&n.get(r)===a||o.push(r);for(const[r]of n)this.hasAttribute(r)||o.push(r);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(e,t,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,o),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,o]of this.getAttributes())e.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of e)this._setAttribute(n,o,!1)&&t.add(n);return t}*getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(Gr)&&(yield[t.substr(Gr.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const o=e.textNode?e.textNode:e.nodeBefore,r=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=va(o)),n||(n=va(r)),!this.isGravityOverridden&&!n){let a=o;for(;a&&!t.isInline(a)&&!n;)a=a.previousSibling,n=va(a)}if(!n){let a=r;for(;a&&!t.isInline(a)&&!n;)a=a.nextSibling,n=va(a)}n||(n=this.getStoredAttributes())}else{const o=this.getFirstRange();for(const r of o){if(r.item.is("element")&&t.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function va(i){return i instanceof vn||i instanceof et?i.getAttributes():null}class Zg{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}var tE=1,nE=4;const ci=function(i){return ul(i,tE|nE)};class oE extends Zg{elementToElement(e){return this.add(function(t){const n=ep(t.model),o=Kr(t.view,"container");return n.attributes.length&&(n.children=!0),r=>{r.on(`insert:${n.name}`,function(a,l=rE){return(d,h,p)=>{if(!l(h.item,p.consumable,{preflight:!0}))return;const m=a(h.item,p,h);if(!m)return;l(h.item,p.consumable);const _=p.mapper.toViewPosition(h.range.start);p.mapper.bindElements(h.item,m),p.writer.insert(_,m),p.convertAttributes(h.item),rp(m,h.item.getChildren(),p,{reconversion:h.reconversion})}}(o,ip(n)),{priority:t.converterPriority||"normal"}),(n.children||n.attributes.length)&&r.on("reduceChanges",op(n),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){const n=ep(t.model),o=Kr(t.view,"container");return n.children=!0,r=>{if(r._conversionApi.schema.checkChild(n.name,"$text"))throw new S("conversion-element-to-structure-disallowed-text",r,{elementName:n.name});var a,l;r.on(`insert:${n.name}`,(a=o,l=ip(n),(d,h,p)=>{if(!l(h.item,p.consumable,{preflight:!0}))return;const m=new Map;p.writer._registerSlotFactory(function(E,T,M){return(B,R="children")=>{const K=B.createContainerElement("$slot");let ue=null;if(R==="children")ue=Array.from(E.getChildren());else{if(typeof R!="function")throw new S("conversion-slot-mode-unknown",M.dispatcher,{modeOrFilter:R});ue=Array.from(E.getChildren()).filter(Se=>R(Se))}return T.set(K,ue),K}}(h.item,m,p));const _=a(h.item,p,h);if(p.writer._clearSlotFactory(),!_)return;(function(E,T,M){const B=Array.from(T.values()).flat(),R=new Set(B);if(R.size!=B.length)throw new S("conversion-slot-filter-overlap",M.dispatcher,{element:E});if(R.size!=E.childCount)throw new S("conversion-slot-filter-incomplete",M.dispatcher,{element:E})})(h.item,m,p),l(h.item,p.consumable);const v=p.mapper.toViewPosition(h.range.start);p.mapper.bindElements(h.item,_),p.writer.insert(v,_),p.convertAttributes(h.item),function(E,T,M,B){M.mapper.on("modelToViewPosition",ue,{priority:"highest"});let R=null,K=null;for([R,K]of T)rp(E,K,M,B),M.writer.move(M.writer.createRangeIn(R),M.writer.createPositionBefore(R)),M.writer.remove(R);function ue(Se,He){const Ke=He.modelPosition.nodeAfter,yt=K.indexOf(Ke);yt<0||(He.viewPosition=He.mapper.findPositionIn(R,yt))}M.mapper.off("modelToViewPosition",ue)}(_,m,p,{reconversion:h.reconversion})}),{priority:t.converterPriority||"normal"}),r.on("reduceChanges",op(n),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){t=ci(t);let n=t.model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(const a of n.values)t.view[a]=Kr(t.view[a],"attribute");else t.view=Kr(t.view,"attribute");const r=tp(t);return a=>{a.on(o,function(l){return(d,h,p)=>{if(!p.consumable.test(h.item,d.name))return;const m=l(h.attributeOldValue,p,h),_=l(h.attributeNewValue,p,h);if(!m&&!_)return;p.consumable.consume(h.item,d.name);const v=p.writer,E=v.document.selection;if(h.item instanceof qn||h.item instanceof fn)v.wrap(E.getFirstRange(),_);else{let T=p.mapper.toViewRange(h.range);h.attributeOldValue!==null&&m&&(T=v.unwrap(T,m)),h.attributeNewValue!==null&&_&&v.wrap(T,_)}}}(r),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=ci(t);let n=t.model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(const a of n.values)t.view[a]=np(t.view[a]);else t.view=np(t.view);const r=tp(t);return a=>{var l;a.on(o,(l=r,(d,h,p)=>{if(!p.consumable.test(h.item,d.name))return;const m=l(h.attributeOldValue,p,h),_=l(h.attributeNewValue,p,h);if(!m&&!_)return;p.consumable.consume(h.item,d.name);const v=p.mapper.toViewElement(h.item),E=p.writer;if(!v)throw new S("conversion-attribute-to-attribute-on-text",p.dispatcher,h);if(h.attributeOldValue!==null&&m)if(m.key=="class"){const T=Dt(m.value);for(const M of T)E.removeClass(M,v)}else if(m.key=="style"){const T=Object.keys(m.value);for(const M of T)E.removeStyle(M,v)}else E.removeAttribute(m.key,v);if(h.attributeNewValue!==null&&_)if(_.key=="class"){const T=Dt(_.value);for(const M of T)E.addClass(M,v)}else if(_.key=="style"){const T=Object.keys(_.value);for(const M of T)E.setStyle(M,_.value[M],v)}else E.setAttribute(_.key,_.value,v)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){const n=Kr(t.view,"ui");return o=>{var r;o.on(`addMarker:${t.model}`,(r=n,(a,l,d)=>{l.isOpening=!0;const h=r(l,d);l.isOpening=!1;const p=r(l,d);if(!h||!p)return;const m=l.markerRange;if(m.isCollapsed&&!d.consumable.consume(m,a.name))return;for(const E of m)if(!d.consumable.consume(E.item,a.name))return;const _=d.mapper,v=d.writer;v.insert(_.toViewPosition(m.start),h),d.mapper.bindElementToMarker(h,l.markerName),m.isCollapsed||(v.insert(_.toViewPosition(m.end),p),d.mapper.bindElementToMarker(p,l.markerName)),a.stop()}),{priority:t.converterPriority||"normal"}),o.on(`removeMarker:${t.model}`,(a,l,d)=>{const h=d.mapper.markerNameToElements(l.markerName);if(h){for(const p of h)d.mapper.unbindElementFromMarkerName(p,l.markerName),d.writer.clear(d.writer.createRangeOn(p),p);d.writer.clearClonedElementsGroup(l.markerName),a.stop()}},{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var o;n.on(`addMarker:${t.model}`,(o=t.view,(r,a,l)=>{if(!a.item||!(a.item instanceof qn||a.item instanceof fn||a.item.is("$textProxy")))return;const d=Kl(o,a,l);if(!d||!l.consumable.consume(a.item,r.name))return;const h=l.writer,p=Jg(h,d),m=h.document.selection;if(a.item instanceof qn||a.item instanceof fn)h.wrap(m.getFirstRange(),p);else{const _=l.mapper.toViewRange(a.range),v=h.wrap(_,p);for(const E of v.getItems())if(E.is("attributeElement")&&E.isSimilar(p)){l.mapper.bindElementToMarker(E,a.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on(`addMarker:${t.model}`,function(r){return(a,l,d)=>{if(!l.item||!(l.item instanceof Qe))return;const h=Kl(r,l,d);if(!h||!d.consumable.test(l.item,a.name))return;const p=d.mapper.toViewElement(l.item);if(p&&p.getCustomProperty("addHighlight")){d.consumable.consume(l.item,a.name);for(const m of W._createIn(l.item))d.consumable.consume(m.item,a.name);p.getCustomProperty("addHighlight")(p,h,d.writer),d.mapper.bindElementToMarker(p,l.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on(`removeMarker:${t.model}`,function(r){return(a,l,d)=>{if(l.markerRange.isCollapsed)return;const h=Kl(r,l,d);if(!h)return;const p=Jg(d.writer,h),m=d.mapper.markerNameToElements(l.markerName);if(m){for(const _ of m)d.mapper.unbindElementFromMarkerName(_,l.markerName),_.is("attributeElement")?d.writer.unwrap(d.writer.createRangeOn(_),p):_.getCustomProperty("removeHighlight")(_,h.id,d.writer);d.writer.clearClonedElementsGroup(l.markerName),a.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){t=ci(t);const n=t.model;let o=t.view;return o||(o=r=>({group:n,name:r.substr(t.model.length+1)})),r=>{var a;r.on(`addMarker:${n}`,(a=o,(l,d,h)=>{const p=a(d.markerName,h);if(!p)return;const m=d.markerRange;h.consumable.consume(m,l.name)&&(Xg(m,!1,h,d,p),Xg(m,!0,h,d,p),l.stop())}),{priority:t.converterPriority||"normal"}),r.on(`removeMarker:${n}`,function(l){return(d,h,p)=>{const m=l(h.markerName,p);if(!m)return;const _=p.mapper.markerNameToElements(h.markerName);if(_){for(const E of _)p.mapper.unbindElementFromMarkerName(E,h.markerName),E.is("containerElement")?(v(`data-${m.group}-start-before`,E),v(`data-${m.group}-start-after`,E),v(`data-${m.group}-end-before`,E),v(`data-${m.group}-end-after`,E)):p.writer.clear(p.writer.createRangeOn(E),E);p.writer.clearClonedElementsGroup(h.markerName),d.stop()}function v(E,T){if(T.hasAttribute(E)){const M=new Set(T.getAttribute(E).split(","));M.delete(m.name),M.size==0?p.writer.removeAttribute(E,T):p.writer.setAttribute(E,Array.from(M).join(","),T)}}}}(o),{priority:t.converterPriority||"normal"})}}(e))}}function Jg(i,e){const t=i.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function Xg(i,e,t,n,o){const r=e?i.start:i.end,a=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,l=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(a||l){let d,h;e&&a||!e&&!l?(d=a,h=!0):(d=l,h=!1);const p=t.mapper.toViewElement(d);if(p)return void function(m,_,v,E,T,M){const B=`data-${M.group}-${_?"start":"end"}-${v?"before":"after"}`,R=m.hasAttribute(B)?m.getAttribute(B).split(","):[];R.unshift(M.name),E.writer.setAttribute(B,R.join(","),m),E.mapper.bindElementToMarker(m,T.markerName)}(p,e,h,t,n,o)}(function(d,h,p,m,_){const v=`${_.group}-${h?"start":"end"}`,E=_.name?{name:_.name}:null,T=p.writer.createUIElement(v,E);p.writer.insert(d,T),p.mapper.bindElementToMarker(T,m.markerName)})(t.mapper.toViewPosition(r),e,t,n,o)}function ep(i){return typeof i=="string"&&(i={name:i}),i.attributes?Array.isArray(i.attributes)||(i.attributes=[i.attributes]):i.attributes=[],i.children=!!i.children,i}function Kr(i,e){return typeof i=="function"?i:(t,n)=>function(o,r,a){typeof o=="string"&&(o={name:o});let l;const d=r.writer,h=Object.assign({},o.attributes);if(a=="container")l=d.createContainerElement(o.name,h);else if(a=="attribute"){const p={priority:o.priority||ri.DEFAULT_PRIORITY};l=d.createAttributeElement(o.name,h,p)}else l=d.createUIElement(o.name,h);if(o.styles){const p=Object.keys(o.styles);for(const m of p)d.setStyle(m,o.styles[m],l)}if(o.classes){const p=o.classes;if(typeof p=="string")d.addClass(p,l);else for(const m of p)d.addClass(m,l)}return l}(i,n,e)}function tp(i){return i.model.values?(e,t,n)=>{const o=i.view[e];return o?o(e,t,n):null}:i.view}function np(i){return typeof i=="string"?e=>({key:i,value:e}):typeof i=="object"?i.value?()=>i:e=>({key:i.key,value:e}):i}function Kl(i,e,t){const n=typeof i=="function"?i(e,t):i;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function op(i){const e=function(t){return(n,o)=>{if(!n.is("element",t.name))return!1;if(o.type=="attribute"){if(t.attributes.includes(o.attributeKey))return!0}else if(t.children)return!0;return!1}}(i);return(t,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const a=r.type=="attribute"?r.range.start.nodeAfter:r.position.parent;if(a&&e(a,r)){if(!n.reconvertedElements.has(a)){n.reconvertedElements.add(a);const l=X._createBefore(a);o.push({type:"remove",name:a.name,position:l,length:1},{type:"reinsert",name:a.name,position:l,length:1})}}else o.push(r)}n.changes=o}}function ip(i){return(e,t,n={})=>{const o=["insert"];for(const r of i.attributes)e.hasAttribute(r)&&o.push(`attribute:${r}`);return!!o.every(r=>t.test(e,r))&&(n.preflight||o.forEach(r=>t.consume(e,r)),!0)}}function rp(i,e,t,n){for(const o of e)iE(i.root,o,t,n)||t.convertItem(o)}function iE(i,e,t,n){const{writer:o,mapper:r}=t;if(!n.reconversion)return!1;const a=r.toViewElement(e);return!(!a||a.root==i)&&!!t.canReuseView(a)&&(o.move(o.createRangeOn(a),r.toViewPosition(X._createBefore(e))),!0)}function rE(i,e,{preflight:t}={}){return t?e.test(i,"insert"):e.consume(i,"insert")}function sp(i){const{schema:e,document:t}=i.model;for(const n of t.getRootNames()){const o=t.getRoot(n);if(o.isEmpty&&!e.checkChild(o,"$text")&&e.checkChild(o,"paragraph"))return i.insertElement("paragraph",o),!0}return!1}function ap(i,e,t){const n=t.createContext(i);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function cp(i,e){const t=e.createElement("paragraph");return e.insert(t,i),e.createPositionAt(t,0)}class sE extends Zg{elementToElement(e){return this.add(lp(e))}elementToAttribute(e){return this.add(function(t){t=ci(t),dp(t);const n=up(t,!1),o=Yl(t.view),r=o?`element:${o}`:"element";return a=>{a.on(r,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=ci(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});const a=r.view.key;let l;return a=="class"||a=="style"?l={[a=="class"?"classes":"styles"]:r.view.value}:l={attributes:{[a]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(l.name=r.view.name),r.view=l,a}(t)),dp(t,n);const o=up(t,!0);return r=>{r.on("element",o,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){const n=function(o){return(r,a)=>{const l=typeof o=="string"?o:o(r,a);return a.writer.createElement("$marker",{"data-name":l})}}(t.model);return lp({...t,model:n})}(e))}dataToMarker(e){return this.add(function(t){t=ci(t),t.model||(t.model=a=>a?t.view+":"+a:t.view);const n={view:t.view,model:t.model},o=Ql(hp(n,"start")),r=Ql(hp(n,"end"));return a=>{a.on(`element:${t.view}-start`,o,{priority:t.converterPriority||"normal"}),a.on(`element:${t.view}-end`,r,{priority:t.converterPriority||"normal"});const l=ge.get("low"),d=ge.get("highest"),h=ge.get(t.converterPriority)/d;a.on("element",function(p){return(m,_,v)=>{const E=`data-${p.view}`;function T(M,B){for(const R of B){const K=p.model(R,v),ue=v.writer.createElement("$marker",{"data-name":K});v.writer.insert(ue,M),_.modelCursor.isEqual(M)?_.modelCursor=_.modelCursor.getShiftedBy(1):_.modelCursor=_.modelCursor._getTransformedByInsertion(M,1),_.modelRange=_.modelRange._getTransformedByInsertion(M,1)[0]}}(v.consumable.test(_.viewItem,{attributes:E+"-end-after"})||v.consumable.test(_.viewItem,{attributes:E+"-start-after"})||v.consumable.test(_.viewItem,{attributes:E+"-end-before"})||v.consumable.test(_.viewItem,{attributes:E+"-start-before"}))&&(_.modelRange||Object.assign(_,v.convertChildren(_.viewItem,_.modelCursor)),v.consumable.consume(_.viewItem,{attributes:E+"-end-after"})&&T(_.modelRange.end,_.viewItem.getAttribute(E+"-end-after").split(",")),v.consumable.consume(_.viewItem,{attributes:E+"-start-after"})&&T(_.modelRange.end,_.viewItem.getAttribute(E+"-start-after").split(",")),v.consumable.consume(_.viewItem,{attributes:E+"-end-before"})&&T(_.modelRange.start,_.viewItem.getAttribute(E+"-end-before").split(",")),v.consumable.consume(_.viewItem,{attributes:E+"-start-before"})&&T(_.modelRange.start,_.viewItem.getAttribute(E+"-start-before").split(",")))}}(n),{priority:l+h})}}(e))}}function lp(i){const e=Ql(i=ci(i)),t=Yl(i.view),n=t?`element:${t}`:"element";return o=>{o.on(n,e,{priority:i.converterPriority||"normal"})}}function Yl(i){return typeof i=="string"?i:typeof i=="object"&&typeof i.name=="string"?i.name:null}function Ql(i){const e=new Fn(i.view);return(t,n,o)=>{const r=e.match(n.viewItem);if(!r)return;const a=r.match;if(a.name=!0,!o.consumable.test(n.viewItem,a))return;const l=function(d,h,p){return d instanceof Function?d(h,p):p.writer.createElement(d)}(i.model,n.viewItem,o);l&&o.safeInsert(l,n.modelCursor)&&(o.consumable.consume(n.viewItem,a),o.convertChildren(n.viewItem,l),o.updateConversionResult(l,n))}}function dp(i,e=null){const t=e===null||(r=>r.getAttribute(e)),n=typeof i.model!="object"?i.model:i.model.key,o=typeof i.model!="object"||i.model.value===void 0?t:i.model.value;i.model={key:n,value:o}}function up(i,e){const t=new Fn(i.view);return(n,o,r)=>{if(!o.modelRange&&e)return;const a=t.match(o.viewItem);if(!a||(function(p,m){const _=typeof p=="function"?p(m):p;return typeof _=="object"&&!Yl(_)?!1:!_.classes&&!_.attributes&&!_.styles}(i.view,o.viewItem)?a.match.name=!0:delete a.match.name,!r.consumable.test(o.viewItem,a.match)))return;const l=i.model.key,d=typeof i.model.value=="function"?i.model.value(o.viewItem,r):i.model.value;if(d===null)return;o.modelRange||Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor)),function(p,m,_,v){let E=!1;for(const T of Array.from(p.getItems({shallow:_})))v.schema.checkAttribute(T,m.key)&&(E=!0,T.hasAttribute(m.key)||v.writer.setAttribute(m.key,m.value,T));return E}(o.modelRange,{key:l,value:d},e,r)&&(r.consumable.test(o.viewItem,{name:!0})&&(a.match.name=!0),r.consumable.consume(o.viewItem,a.match))}}function hp(i,e){return{view:`${i.view}-${e}`,model:(t,n)=>{const o=t.getAttribute("name"),r=i.model(o,n);return n.writer.createElement("$marker",{"data-name":r})}}}class aE extends U(){constructor(e,t){super(),this.model=e,this.view=new Kx(t),this.mapper=new Wg,this.downcastDispatcher=new Gg({mapper:this.mapper,schema:e.schema});const n=this.model.document,o=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(a=>{this.downcastDispatcher.convertChanges(n.differ,r,a),this.downcastDispatcher.convertSelection(o,r,a)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(a,l){return(d,h)=>{const p=h.newSelection,m=[];for(const v of p.getRanges())m.push(l.toModelRange(v));const _=a.createSelection(m,{backward:p.isBackward});_.isEqual(a.document.selection)||a.change(v=>{v.setSelection(_)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(a,l,d)=>{if(!d.consumable.consume(l.item,a.name))return;const h=d.writer,p=d.mapper.toViewPosition(l.range.start),m=h.createText(l.item.data);h.insert(p,m)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(a,l,d)=>{d.convertAttributes(l.item),l.reconversion||!l.item.is("element")||l.item.isEmpty||d.convertChildren(l.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(a,l,d)=>{const h=d.mapper.toViewPosition(l.position),p=l.position.getShiftedBy(l.length),m=d.mapper.toViewPosition(p,{isPhantom:!0}),_=d.writer.createRange(h,m),v=d.writer.remove(_.getTrimmed());for(const E of d.writer.createRangeIn(v).getItems())d.mapper.unbindViewElement(E,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,l,d)=>{const h=d.writer,p=h.document.selection;for(const m of p.getRanges())m.isCollapsed&&m.end.parent.isAttached()&&d.writer.mergeAttributes(m.start);h.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(a,l,d)=>{const h=l.selection;if(h.isCollapsed||!d.consumable.consume(h,"selection"))return;const p=[];for(const m of h.getRanges())p.push(d.mapper.toViewRange(m));d.writer.setSelection(p,{backward:h.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,l,d)=>{const h=l.selection;if(!h.isCollapsed||!d.consumable.consume(h,"selection"))return;const p=d.writer,m=h.getFirstPosition(),_=d.mapper.toViewPosition(m),v=p.breakAttributes(_);p.setSelection(v)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(a=>{if(a.rootName=="$graveyard")return null;const l=new ug(this.view.document,a.name);return l.rootName=a.rootName,this.mapper.bindElements(a,l),l})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new S("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}class Yr{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new cE(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const a of n)a!="style"&&a!="class"&&t.attributes.push(a);const o=e.getClassNames();for(const a of o)t.classes.push(a);const r=e.getStyleNames();for(const a of r)t.styles.push(a);return t}static createFrom(e,t){if(t||(t=new Yr),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,Yr.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=Yr.createFrom(n,t);return t}}const ya=["attributes","classes","styles"];class cE{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t of ya)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t of ya)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t of ya)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t of ya)t in e&&this._revert(t,e[t])}_add(e,t){const n=Ut(t)?t:[t],o=this._consumables[e];for(const r of n){if(e==="attributes"&&(r==="class"||r==="style"))throw new S("viewconsumable-invalid-attribute",this);if(o.set(r,!0),e==="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(a,!0)}}_test(e,t){const n=Ut(t)?t:[t],o=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style"){const a=o.get(r);if(a===void 0)return null;if(!a)return!1}else{const a=r=="class"?"classes":"styles",l=this._test(a,[...this._consumables[a].keys()]);if(l!==!0)return l}return!0}_consume(e,t){const n=Ut(t)?t:[t],o=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style"){if(o.set(r,!1),e=="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(a,!1)}else{const a=r=="class"?"classes":"styles";this._consume(a,[...this._consumables[a].keys()])}}_revert(e,t){const n=Ut(t)?t:[t],o=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style")o.get(r)===!1&&o.set(r,!0);else{const a=r=="class"?"classes":"styles";this._revert(a,[...this._consumables[a].keys()])}}}class lE extends U(){constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new li(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new li(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new S("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new S("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:"is"in e&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t){if(e instanceof X){const n=e.nodeBefore,o=e.nodeAfter;if(!(n instanceof Qe))throw new S("schema-check-merge-no-element-before",this);if(!(o instanceof Qe))throw new S("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,o])=>{if(!o)return;const r=e(n,o);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,o])=>{const r=e(n,o);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof X?t=e.parent:t=(e instanceof W?[e]:Array.from(e.getRanges())).reduce((n,o)=>{const r=o.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new et("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const o of n)for(const r of o)if(this.checkAttribute(r.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new W(e);let n,o;const r=e.getAncestors().reverse().find(a=>this.isLimit(a))||e.root;t!="both"&&t!="backward"||(n=new $n({boundaries:W._createIn(r),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(o=new $n({boundaries:W._createIn(r),startPosition:e}));for(const a of function*(l,d){let h=!1;for(;!h;){if(h=!0,l){const p=l.next();p.done||(h=!1,yield{walker:l,value:p.value})}if(d){const p=d.next();p.done||(h=!1,yield{walker:d,value:p.value})}}}(n,o)){const l=a.walker==n?"elementEnd":"elementStart",d=a.value;if(d.type==l&&this.isObject(d.item))return W._createOn(d.item);if(this.checkChild(d.nextPosition,"$text"))return new W(d.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const o=n.model;for(const[r,a]of Object.entries(t))o.schema.checkAttribute(e,r)&&n.setAttribute(r,a,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))fp(this,n,t);else{const o=W._createIn(n).getPositions();for(const r of o)fp(this,r.nodeBefore||r.parent,t)}}getAttributesWithProperty(e,t,n){const o={};for(const[r,a]of e.getAttributes()){const l=this.getAttributeProperties(r);l[t]!==void 0&&(n!==void 0&&n!==l[t]||(o[r]=a))}return o}createContext(e){return new li(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const o of n)e[o]=dE(t[o],o);for(const o of n)uE(e,o);for(const o of n)hE(e,o);for(const o of n)fE(e,o);for(const o of n)gE(e,o),pE(e,o);for(const o of n)mE(e,o),bE(e,o),kE(e,o);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const o=t.getItem(n);if(e.allowIn.includes(o.name)){if(n==0)return!0;{const r=this.getDefinition(o);return this._checkContextMatch(r,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,o=e.start;for(const r of e.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(W._createIn(r),t)),this.checkAttribute(r,t)||(n.isEqual(o)||(yield new W(n,o)),n=X._createAfter(r)),o=X._createAfter(r);n.isEqual(o)||(yield new W(n,o))}}class li{constructor(e){if(e instanceof li)return e;let t;t=typeof e=="string"?[e]:Array.isArray(e)?e:e.getAncestors({includeSelf:!0}),this._items=t.map(_E)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new li([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function dE(i,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const r of n){const a=Object.keys(r).filter(l=>l.startsWith("is"));for(const l of a)o[l]=!!r[l]}}(i,t),di(i,t,"allowIn"),di(i,t,"allowContentOf"),di(i,t,"allowWhere"),di(i,t,"allowAttributes"),di(i,t,"allowAttributesOf"),di(i,t,"allowChildren"),di(i,t,"inheritTypesFrom"),function(n,o){for(const r of n){const a=r.inheritAllFrom;a&&(o.allowContentOf.push(a),o.allowWhere.push(a),o.allowAttributesOf.push(a),o.inheritTypesFrom.push(a))}}(i,t),t}function uE(i,e){const t=i[e];for(const n of t.allowChildren){const o=i[n];o&&o.allowIn.push(e)}t.allowChildren.length=0}function hE(i,e){for(const t of i[e].allowContentOf)i[t]&&wE(i,t).forEach(n=>{n.allowIn.push(e)});delete i[e].allowContentOf}function fE(i,e){for(const t of i[e].allowWhere){const n=i[t];if(n){const o=n.allowIn;i[e].allowIn.push(...o)}}delete i[e].allowWhere}function gE(i,e){for(const t of i[e].allowAttributesOf){const n=i[t];if(n){const o=n.allowAttributes;i[e].allowAttributes.push(...o)}}delete i[e].allowAttributesOf}function pE(i,e){const t=i[e];for(const n of t.inheritTypesFrom){const o=i[n];if(o){const r=Object.keys(o).filter(a=>a.startsWith("is"));for(const a of r)a in t||(t[a]=o[a])}}delete t.inheritTypesFrom}function mE(i,e){const t=i[e],n=t.allowIn.filter(o=>i[o]);t.allowIn=Array.from(new Set(n))}function bE(i,e){const t=i[e];for(const n of t.allowIn)i[n].allowChildren.push(e)}function kE(i,e){const t=i[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function di(i,e,t){for(const n of i){const o=n[t];typeof o=="string"?e[t].push(o):Array.isArray(o)&&e[t].push(...o)}}function wE(i,e){const t=i[e];return(n=i,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(t.name));var n}function _E(i){return typeof i=="string"||i.is("documentFragment")?{name:typeof i=="string"?i:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:i.is("element")?i.name:"$text",*getAttributeKeys(){yield*i.getAttributeKeys()},getAttribute:e=>i.getAttribute(e)}}function fp(i,e,t){for(const n of e.getAttributeKeys())i.checkAttribute(e,n)||t.removeAttribute(n,e)}class AE extends Be(){constructor(e){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...e,consumable:null,writer:null,store:null,convertItem:(t,n)=>this._convertItem(t,n),convertChildren:(t,n)=>this._convertChildren(t,n),safeInsert:(t,n)=>this._safeInsert(t,n),updateConversionResult:(t,n)=>this._updateConversionResult(t,n),splitToAllowedParent:(t,n)=>this._splitToAllowedParent(t,n),getSplitParts:t=>this._getSplitParts(t),keepEmptyElement:t=>this._keepEmptyElement(t)}}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(a,l){let d;for(const h of new li(a)){const p={};for(const _ of h.getAttributeKeys())p[_]=h.getAttribute(_);const m=l.createElement(h.name,p);d&&l.insert(m,d),d=X._createAt(m,0)}return d}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=Yr.createFrom(e),this.conversionApi.store={};const{modelRange:o}=this._convertItem(e,this._modelCursor),r=t.createDocumentFragment();if(o){this._removeEmptyElements();for(const a of Array.from(this._modelCursor.parent.getChildren()))t.append(a,r);r.markers=function(a,l){const d=new Set,h=new Map,p=W._createIn(a).getItems();for(const m of p)m.is("element","$marker")&&d.add(m);for(const m of d){const _=m.getAttribute("data-name"),v=l.createPositionBefore(m);h.has(_)?h.get(_).end=v.clone():h.set(_,new W(v.clone())),l.remove(m)}return h}(r,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(e,t){const n={viewItem:e,modelCursor:t,modelRange:null};if(e.is("element")?this.fire(`element:${e.name}`,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof W))throw new S("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:X._createAt(t,0);const o=new W(n);for(const r of Array.from(e.getChildren())){const a=this._convertItem(r,n);a.modelRange instanceof W&&(o.end=a.modelRange.end,n=a.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),o=this.conversionApi.writer;t.modelRange||(t.modelRange=o.createRange(o.createPositionBefore(e),o.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(e);t.modelCursor=r?o.createPositionAt(r,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:o}=this.conversionApi;let r=n.findAllowedParent(t,e);if(r){if(r===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return ap(t,e,n)?{position:cp(t,o)}:null;const a=this.conversionApi.writer.split(t,r),l=[];for(const h of a.range.getWalker())if(h.type=="elementEnd")l.push(h.item);else{const p=l.pop(),m=h.item;this._registerSplitPair(p,m)}const d=a.range.end.parent;return this._cursorParents.set(e,d),{position:a.position,cursorParent:d}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}class CE{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class vE{constructor(e){this.skipComments=!0,this.domParser=new DOMParser,this.domConverter=new wa(e,{renderingMode:"data"}),this.htmlWriter=new CE}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t,{skipComments:this.skipComments})}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),o=t.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class yE extends Be(){constructor(e,t){super(),this.model=e,this.mapper=new Wg,this.downcastDispatcher=new Gg({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,o,r)=>{if(!r.consumable.consume(o.item,n.name))return;const a=r.writer,l=r.mapper.toViewPosition(o.range.start),d=a.createText(o.item.data);a.insert(l,d)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,r)=>{r.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||r.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new AE({schema:e.schema}),this.viewDocument=new pa(t),this.stylesProcessor=t,this.htmlProcessor=new vE(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new fg(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:r,consumable:a,writer:l})=>{let d=o.modelCursor;if(!a.test(o.viewItem))return;if(!r.checkChild(d,"$text")){if(!ap(d,"$text",r)||o.viewItem.data.trim().length==0)return;const p=d.nodeBefore;d=cp(d,l),p&&p.is("element","$marker")&&(l.move(l.createRangeOn(p),d),d=l.createPositionAfter(p))}a.consume(o.viewItem);const h=l.createText(o.viewItem.data);l.insert(h,d),o.modelRange=l.createRange(d,d.getShiftedBy(h.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:a,modelCursor:l}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=a,o.modelCursor=l}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:a,modelCursor:l}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=a,o.modelCursor=l}},{priority:"lowest"}),U().prototype.decorate.call(this,"init"),U().prototype.decorate.call(this,"set"),U().prototype.decorate.call(this,"get"),U().prototype.decorate.call(this,"toView"),U().prototype.decorate.call(this,"toModel"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},sp)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new S("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const r=W._createIn(e),a=new si(n);this.mapper.bindElements(e,a);const l=e.is("documentFragment")?e.markers:function(d){const h=[],p=d.root.document;if(!p)return new Map;const m=W._createIn(d);for(const _ of p.model.markers){const v=_.getRange(),E=v.isCollapsed,T=v.start.isEqual(m.start)||v.end.isEqual(m.end);if(E&&T)h.push([_.name,v]);else{const M=m.getIntersection(v);M&&h.push([_.name,M])}}return h.sort(([_,v],[E,T])=>{if(v.end.compareWith(T.start)!=="after")return 1;if(v.start.compareWith(T.end)!=="before")return-1;switch(v.start.compareWith(T.start)){case"before":return 1;case"after":return-1;default:switch(v.end.compareWith(T.end)){case"before":return 1;case"after":return-1;default:return E.localeCompare(_)}}}),new Map(h)}(e);return this.downcastDispatcher.convert(r,l,o,t),a}init(e){if(this.model.document.version)throw new S("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new S("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(t)){const r=this.model.document.getRoot(o);n.insert(this.parse(t[o],r),r,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new S("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const a=this.model.document.getRoot(r);o.remove(o.createRangeIn(a)),o.insert(this.parse(n[r],a),a,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}class xE{constructor(e,t){this._helpers=new Map,this._downcast=Dt(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Dt(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new S("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new S("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of Zl(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of Zl(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of Zl(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new S("conversion-group-exists",this);const o=n?new oE(t):new sE(t);this._helpers.set(e,o)}}function*Zl(i){if(i.model.values)for(const e of i.model.values){const t={key:i.model.key,value:e},n=i.view[e],o=i.upcastAlso?i.upcastAlso[e]:void 0;yield*gp(t,n,o)}else yield*gp(i.model,i.view,i.upcastAlso)}function*gp(i,e,t){if(yield{model:i,view:e},t)for(const n of Dt(t))yield{model:i,view:n}}class gn{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e,t){return new this(e.baseVersion)}}function Jl(i,e){const t=mp(e),n=t.reduce((a,l)=>a+l.offsetSize,0),o=i.parent;Jr(i);const r=i.index;return o._insertChild(r,t),Zr(o,r+t.length),Zr(o,r),new W(i,i.getShiftedBy(n))}function pp(i){if(!i.isFlat)throw new S("operation-utils-remove-range-not-flat",this);const e=i.start.parent;Jr(i.start),Jr(i.end);const t=e._removeChildren(i.start.index,i.end.index-i.start.index);return Zr(e,i.start.index),t}function Qr(i,e){if(!i.isFlat)throw new S("operation-utils-move-range-not-flat",this);const t=pp(i);return Jl(e=e._getTransformedByDeletion(i.start,i.end.offset-i.start.offset),t)}function mp(i){const e=[];(function t(n){if(typeof n=="string")e.push(new et(n));else if(n instanceof vn)e.push(new et(n.data,n.getAttributes()));else if(n instanceof Gi)e.push(n);else if(he(n))for(const o of n)t(o)})(i);for(let t=1;t<e.length;t++){const n=e[t],o=e[t-1];n instanceof et&&o instanceof et&&bp(n,o)&&(e.splice(t-1,2,new et(o.data+n.data,o.getAttributes())),t--)}return e}function Zr(i,e){const t=i.getChild(e-1),n=i.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&bp(t,n)){const o=new et(t.data+n.data,t.getAttributes());i._removeChildren(e-1,2),i._insertChild(e-1,o)}}function Jr(i){const e=i.textNode,t=i.parent;if(e){const n=i.offset-e.startOffset,o=e.index;t._removeChildren(o,1);const r=new et(e.data.substr(0,n),e.getAttributes()),a=new et(e.data.substr(n),e.getAttributes());t._insertChild(o,[r,a])}}function bp(i,e){const t=i.getAttributes(),n=e.getAttributes();for(const o of t){if(o[1]!==e.getAttribute(o[0]))return!1;n.next()}return n.next().done}class Ge extends gn{constructor(e,t,n,o){super(o),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new Ge(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new Ge(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new S("move-operation-nodes-do-not-exist",this);if(e===t&&n<o&&o<n+this.howMany)throw new S("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&pe(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new S("move-operation-node-into-itself",this)}}_execute(){Qr(W._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=X.fromJSON(e.sourcePosition,t),o=X.fromJSON(e.targetPosition,t);return new this(n,e.howMany,o,e.baseVersion)}}class Tt extends gn{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new qr(mp(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new qr([...this.nodes].map(n=>n._clone(!0))),t=new Tt(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new X(e,[0]);return new Ge(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new S("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new qr([...e].map(t=>t._clone(!0))),Jl(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const r of e.nodes)r.name?n.push(Qe.fromJSON(r)):n.push(et.fromJSON(r));const o=new Tt(X.fromJSON(e.position,t),n,e.baseVersion);return o.shouldReceiveAttributes=e.shouldReceiveAttributes,o}}class Yt extends gn{constructor(e,t,n,o,r,a){super(a),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=o}get type(){return"marker"}clone(){return new Yt(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Yt(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new Yt(e.name,e.oldRange?W.fromJSON(e.oldRange,t):null,e.newRange?W.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}const kp=function(i,e){return jg(i,e)};class kt extends gn{constructor(e,t,n,o,r){super(r),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new kt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new kt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new S("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!kp(e.getAttribute(this.key),this.oldValue))throw new S("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new S("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){kp(this.oldValue,this.newValue)||function(e,t,n){Jr(e.start),Jr(e.end);for(const o of e.getItems({shallow:!0})){const r=o.is("$textProxy")?o.textNode:o;n!==null?r._setAttribute(t,n):r._removeAttribute(t),Zr(r.parent,r.index)}Zr(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new kt(W.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class St extends gn{get type(){return"noop"}clone(){return new St(this.baseVersion)}getReversed(){return new St(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class Qt extends gn{constructor(e,t,n,o){super(o),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new Qt(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Qt(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof Qe))throw new S("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new S("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new Qt(X.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class no extends gn{constructor(e,t,n,o,r){super(r),this.root=e,this.key=t,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new no(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new no(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new S("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new S("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new S("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new S("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new no(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class gt extends gn{constructor(e,t,n,o,r){super(r),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new X(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new W(this.sourcePosition,e)}clone(){return new gt(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new X(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new tt(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new S("merge-operation-source-position-invalid",this);if(!t.parent)throw new S("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new S("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;Qr(W._createIn(e),this.targetPosition),Qr(W._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=X.fromJSON(e.sourcePosition,t),o=X.fromJSON(e.targetPosition,t),r=X.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,o,r,e.baseVersion)}}class tt extends gn{constructor(e,t,n,o,r){super(r),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new X(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new W(this.splitPosition,e)}clone(){return new tt(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new X(e,[0]);return new gt(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new S("split-operation-position-invalid",this);if(!e.parent)throw new S("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new S("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new S("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)Qr(W._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();Jl(this.insertionPosition,t)}Qr(new W(X._createAt(e,this.splitPosition.offset),X._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new X(e.root,t,"toPrevious")}static fromJSON(e,t){const n=X.fromJSON(e.splitPosition,t),o=X.fromJSON(e.insertionPosition,t),r=e.graveyardPosition?X.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,o,r,e.baseVersion)}}const xn={};xn[kt.className]=kt,xn[Tt.className]=Tt,xn[Yt.className]=Yt,xn[Ge.className]=Ge,xn[St.className]=St,xn[gn.className]=gn,xn[Qt.className]=Qt,xn[no.className]=no,xn[tt.className]=tt,xn[gt.className]=gt;class EE{static fromJSON(e,t){return xn[e.__className].fromJSON(e,t)}}const Xl=new Map;function $e(i,e,t){let n=Xl.get(i);n||(n=new Map,Xl.set(i,n)),n.set(e,t)}function DE(i){return[i]}function wp(i,e,t={}){const n=function(o,r){const a=Xl.get(o);return a&&a.has(r)?a.get(r):DE}(i.constructor,e.constructor);try{return n(i=i.clone(),e,t)}catch(o){throw o}}function TE(i,e,t){i=i.slice(),e=e.slice();const n=new SE(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(i),n.setOriginalOperations(e);const o=n.originalOperations;if(i.length==0||e.length==0)return{operationsA:i,operationsB:e,originalOperations:o};const r=new WeakMap;for(const d of i)r.set(d,0);const a={nextBaseVersionA:i[i.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:i.length,originalOperationsBCount:e.length};let l=0;for(;l<i.length;){const d=i[l],h=r.get(d);if(h==e.length){l++;continue}const p=e[h],m=wp(d,p,n.getContext(d,p,!0)),_=wp(p,d,n.getContext(p,d,!1));n.updateRelation(d,p),n.setOriginalOperations(m,d),n.setOriginalOperations(_,p);for(const v of m)r.set(v,h+_.length);i.splice(l,1,...m),e.splice(h,1,..._)}if(t.padWithNoOps){const d=i.length-a.originalOperationsACount,h=e.length-a.originalOperationsBCount;Ap(i,h-d),Ap(e,d-h)}return _p(i,a.nextBaseVersionB),_p(e,a.nextBaseVersionA),{operationsA:i,operationsB:e,originalOperations:o}}class SE{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const o of e)this.originalOperations.set(o,n||o)}updateRelation(e,t){if(e instanceof Ge)t instanceof gt?e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter"):t instanceof Ge&&(e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter"));else if(e instanceof tt){if(t instanceof gt)e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");else if(t instanceof Ge)if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=W._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const o=n.end.offset-e.splitPosition.offset,r=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:o,offset:r})}}}else if(e instanceof gt)t instanceof gt?(e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement")):t instanceof tt&&e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource");else if(e instanceof Yt){const n=e.newRange;if(!n)return;if(t instanceof Ge){const o=W._createFromPositionAndShift(t.sourcePosition,t.howMany),r=o.containsPosition(n.start)||o.start.isEqual(n.start),a=o.containsPosition(n.end)||o.end.isEqual(n.end);!r&&!a||o.containsRange(n)||this._setRelation(e,t,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()})}else if(t instanceof gt){const o=n.start.isEqual(t.targetPosition),r=n.start.isEqual(t.deletionPosition),a=n.end.isEqual(t.deletionPosition),l=n.end.isEqual(t.sourcePosition);(o||r||a||l)&&this._setRelation(e,t,{wasInLeftElement:o,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:a,wasInRightElement:l})}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),o=this._history.getUndoneOperation(n);if(!o)return null;const r=this.originalOperations.get(e),a=this._relations.get(r);return a&&a.get(o)||null}_setRelation(e,t,n){const o=this.originalOperations.get(e),r=this.originalOperations.get(t);let a=this._relations.get(o);a||(a=new Map,this._relations.set(o,a)),a.set(r,n)}}function _p(i,e){for(const t of i)t.baseVersion=e++}function Ap(i,e){for(let t=0;t<e;t++)i.push(new St(0))}function Cp(i,e,t){const n=i.nodes.getNode(0).getAttribute(e);if(n==t)return null;const o=new W(i.position,i.position.getShiftedBy(i.howMany));return new kt(o,e,n,t,0)}function vp(i,e){return i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function Ki(i,e){const t=[];for(let n=0;n<i.length;n++){const o=i[n],r=new Ge(o.start,o.end.offset-o.start.offset,e,0);t.push(r);for(let a=n+1;a<i.length;a++)i[a]=i[a]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return t}$e(kt,kt,(i,e,t)=>{if(i.key===e.key&&i.range.start.hasSameParentAs(e.range.start)){const n=i.range.getDifference(e.range).map(r=>new kt(r,i.key,i.oldValue,i.newValue,0)),o=i.range.getIntersection(e.range);return o&&t.aIsStrong&&n.push(new kt(o,e.key,e.newValue,i.newValue,0)),n.length==0?[new St(0)]:n}return[i]}),$e(kt,Tt,(i,e)=>{if(i.range.start.hasSameParentAs(e.position)&&i.range.containsPosition(e.position)){const t=i.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new kt(n,i.key,i.oldValue,i.newValue,i.baseVersion));if(e.shouldReceiveAttributes){const n=Cp(e,i.key,i.oldValue);n&&t.unshift(n)}return t}return i.range=i.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[i]}),$e(kt,gt,(i,e)=>{const t=[];i.range.start.hasSameParentAs(e.deletionPosition)&&(i.range.containsPosition(e.deletionPosition)||i.range.start.isEqual(e.deletionPosition))&&t.push(W._createFromPositionAndShift(e.graveyardPosition,1));const n=i.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(o=>new kt(o,i.key,i.oldValue,i.newValue,i.baseVersion))}),$e(kt,Ge,(i,e)=>function(n,o){const r=W._createFromPositionAndShift(o.sourcePosition,o.howMany);let a=null,l=[];r.containsRange(n,!0)?a=n:n.start.hasSameParentAs(r.start)?(l=n.getDifference(r),a=n.getIntersection(r)):l=[n];const d=[];for(let h of l){h=h._getTransformedByDeletion(o.sourcePosition,o.howMany);const p=o.getMovedRangeStart(),m=h.start.hasSameParentAs(p),_=h._getTransformedByInsertion(p,o.howMany,m);d.push(..._)}return a&&d.push(a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),d}(i.range,e).map(n=>new kt(n,i.key,i.oldValue,i.newValue,i.baseVersion))),$e(kt,tt,(i,e)=>{if(i.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.range.end.offset++,[i];if(i.range.start.hasSameParentAs(e.splitPosition)&&i.range.containsPosition(e.splitPosition)){const t=i.clone();return t.range=new W(e.moveTargetPosition.clone(),i.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),i.range.end=e.splitPosition.clone(),i.range.end.stickiness="toPrevious",[i,t]}return i.range=i.range._getTransformedBySplitOperation(e),[i]}),$e(Tt,kt,(i,e)=>{const t=[i];if(i.shouldReceiveAttributes&&i.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(i.position)){const n=Cp(i,e.key,e.newValue);n&&t.push(n)}return t}),$e(Tt,Tt,(i,e,t)=>(i.position.isEqual(e.position)&&t.aIsStrong||(i.position=i.position._getTransformedByInsertOperation(e)),[i])),$e(Tt,Ge,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),$e(Tt,tt,(i,e)=>(i.position=i.position._getTransformedBySplitOperation(e),[i])),$e(Tt,gt,(i,e)=>(i.position=i.position._getTransformedByMergeOperation(e),[i])),$e(Yt,Tt,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByInsertOperation(e)[0]),i.newRange&&(i.newRange=i.newRange._getTransformedByInsertOperation(e)[0]),[i])),$e(Yt,Yt,(i,e,t)=>{if(i.name==e.name){if(!t.aIsStrong)return[new St(0)];i.oldRange=e.newRange?e.newRange.clone():null}return[i]}),$e(Yt,gt,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByMergeOperation(e)),i.newRange&&(i.newRange=i.newRange._getTransformedByMergeOperation(e)),[i])),$e(Yt,Ge,(i,e,t)=>{if(i.oldRange&&(i.oldRange=W._createFromRanges(i.oldRange._getTransformedByMoveOperation(e))),i.newRange){if(t.abRelation){const n=W._createFromRanges(i.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(i.newRange.start))return i.newRange.end=n.end,i.newRange.start.path=t.abRelation.path,[i];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(i.newRange.end))return i.newRange.start=n.start,i.newRange.end.path=t.abRelation.path,[i]}i.newRange=W._createFromRanges(i.newRange._getTransformedByMoveOperation(e))}return[i]}),$e(Yt,tt,(i,e,t)=>{if(i.oldRange&&(i.oldRange=i.oldRange._getTransformedBySplitOperation(e)),i.newRange){if(t.abRelation){const n=i.newRange._getTransformedBySplitOperation(e);return i.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?i.newRange.start=X._createAt(e.insertionPosition):i.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(i.newRange.start=X._createAt(e.moveTargetPosition)),i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?i.newRange.end=X._createAt(e.moveTargetPosition):i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?i.newRange.end=X._createAt(e.insertionPosition):i.newRange.end=n.end,[i]}i.newRange=i.newRange._getTransformedBySplitOperation(e)}return[i]}),$e(gt,Tt,(i,e)=>(i.sourcePosition.hasSameParentAs(e.position)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByInsertOperation(e),i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e),[i])),$e(gt,gt,(i,e,t)=>{if(i.sourcePosition.isEqual(e.sourcePosition)&&i.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),i.sourcePosition=new X(e.graveyardPosition.root,n),i.howMany=0,[i]}return[new St(0)]}if(i.sourcePosition.isEqual(e.sourcePosition)&&!i.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=i.targetPosition.root.rootName=="$graveyard",o=e.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const r=e.targetPosition._getTransformedByMergeOperation(e),a=i.targetPosition._getTransformedByMergeOperation(e);return[new Ge(r,i.howMany,a,0)]}return[new St(0)]}return i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMergeOperation(e),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),i.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),$e(gt,Ge,(i,e,t)=>{const n=W._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&i.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.sourcePosition)?[new St(0)]:(i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition.hasSameParentAs(e.sourcePosition)&&(i.howMany-=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMoveOperation(e),i.targetPosition=i.targetPosition._getTransformedByMoveOperation(e),i.graveyardPosition.isEqual(e.targetPosition)||(i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)),[i])}),$e(gt,tt,(i,e,t)=>{if(e.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),i.deletionPosition.isEqual(e.graveyardPosition)&&(i.howMany=e.howMany)),i.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,o=e.graveyardPosition&&i.deletionPosition.isEqual(e.graveyardPosition);if(n||o||t.abRelation=="mergeTargetNotMoved")return i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),[i]}if(i.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return i.howMany=0,i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i];if(t.abRelation=="mergeSameElement"||i.sourcePosition.offset>0)return i.sourcePosition=e.moveTargetPosition.clone(),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}return i.sourcePosition.hasSameParentAs(e.splitPosition)&&(i.howMany=e.splitPosition.offset),i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}),$e(Ge,Tt,(i,e)=>{const t=W._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByInsertOperation(e,!1)[0];return i.sourcePosition=t.start,i.howMany=t.end.offset-t.start.offset,i.targetPosition.isEqual(e.position)||(i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e)),[i]}),$e(Ge,Ge,(i,e,t)=>{const n=W._createFromPositionAndShift(i.sourcePosition,i.howMany),o=W._createFromPositionAndShift(e.sourcePosition,e.howMany);let r,a=t.aIsStrong,l=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?l=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(l=!1),r=i.targetPosition.isEqual(e.targetPosition)&&l?i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):i.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),vp(i,e)&&vp(e,i))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Ki([n],r);if(o.containsPosition(i.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),Ki([n],r);const d=pe(i.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(d=="prefix"||d=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Ki([n],r);i.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?i.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(a=!1):a=!0;const h=[],p=n.getDifference(o);for(const _ of p){_.start=_.start._getTransformedByDeletion(e.sourcePosition,e.howMany),_.end=_.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const v=pe(_.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",E=_._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,v);h.push(...E)}const m=n.getIntersection(o);return m!==null&&a&&(m.start=m.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),m.end=m.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),h.length===0?h.push(m):h.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?h.unshift(m):h.push(m):h.splice(1,0,m)),h.length===0?[new St(i.baseVersion)]:Ki(h,r)}),$e(Ge,tt,(i,e,t)=>{let n=i.targetPosition.clone();i.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=i.targetPosition._getTransformedBySplitOperation(e));const o=W._createFromPositionAndShift(i.sourcePosition,i.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.howMany++,i.targetPosition=n,[i];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let a=new W(e.splitPosition,o.end);return a=a._getTransformedBySplitOperation(e),Ki([new W(o.start,e.splitPosition),a],n)}i.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),i.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=i.targetPosition);const r=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const a=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);i.howMany>1&&a&&!t.aWasUndone&&r.push(W._createFromPositionAndShift(e.insertionPosition,1))}return Ki(r,n)}),$e(Ge,gt,(i,e,t)=>{const n=W._createFromPositionAndShift(i.sourcePosition,i.howMany);if(e.deletionPosition.hasSameParentAs(i.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(i.type!="remove"||t.forceWeakRemove){if(i.howMany==1)return t.bWasUndone?(i.sourcePosition=e.graveyardPosition.clone(),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]):[new St(0)]}else if(!t.aWasUndone){const r=[];let a=e.graveyardPosition.clone(),l=e.targetPosition._getTransformedByMergeOperation(e);i.howMany>1&&(r.push(new Ge(i.sourcePosition,i.howMany-1,i.targetPosition,0)),a=a._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1),l=l._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1));const d=e.deletionPosition._getCombined(i.sourcePosition,i.targetPosition),h=new Ge(a,1,d,0),p=h.getMovedRangeStart().path.slice();p.push(0);const m=new X(h.targetPosition.root,p);l=l._getTransformedByMove(a,d,1);const _=new Ge(l,e.howMany,m,0);return r.push(h),r.push(_),r}}const o=W._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByMergeOperation(e);return i.sourcePosition=o.start,i.howMany=o.end.offset-o.start.offset,i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]}),$e(Qt,Tt,(i,e)=>(i.position=i.position._getTransformedByInsertOperation(e),[i])),$e(Qt,gt,(i,e)=>i.position.isEqual(e.deletionPosition)?(i.position=e.graveyardPosition.clone(),i.position.stickiness="toNext",[i]):(i.position=i.position._getTransformedByMergeOperation(e),[i])),$e(Qt,Ge,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),$e(Qt,Qt,(i,e,t)=>{if(i.position.isEqual(e.position)){if(!t.aIsStrong)return[new St(0)];i.oldName=e.newName}return[i]}),$e(Qt,tt,(i,e)=>{if(pe(i.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new Qt(i.position.getShiftedBy(1),i.oldName,i.newName,0);return[i,t]}return i.position=i.position._getTransformedBySplitOperation(e),[i]}),$e(no,no,(i,e,t)=>{if(i.root===e.root&&i.key===e.key){if(!t.aIsStrong||i.newValue===e.newValue)return[new St(0)];i.oldValue=e.newValue}return[i]}),$e(tt,Tt,(i,e)=>(i.splitPosition.hasSameParentAs(e.position)&&i.splitPosition.offset<e.position.offset&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByInsertOperation(e),i.insertionPosition=i.insertionPosition._getTransformedByInsertOperation(e),[i])),$e(tt,gt,(i,e,t)=>{if(!i.graveyardPosition&&!t.bWasUndone&&i.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const o=new X(e.graveyardPosition.root,n),r=tt.getInsertionPosition(new X(e.graveyardPosition.root,n)),a=new tt(o,0,r,null,0);return i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),i.graveyardPosition=a.insertionPosition.clone(),i.graveyardPosition.stickiness="toNext",[a,i]}return i.splitPosition.hasSameParentAs(e.deletionPosition)&&!i.splitPosition.isAfter(e.deletionPosition)&&i.howMany--,i.splitPosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),$e(tt,Ge,(i,e,t)=>{const n=W._createFromPositionAndShift(e.sourcePosition,e.howMany);if(i.graveyardPosition){const r=n.start.isEqual(i.graveyardPosition)||n.containsPosition(i.graveyardPosition);if(!t.bWasUndone&&r){const a=i.splitPosition._getTransformedByMoveOperation(e),l=i.graveyardPosition._getTransformedByMoveOperation(e),d=l.path.slice();d.push(0);const h=new X(l.root,d);return[new Ge(a,i.howMany,h,0)]}i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)}const o=i.splitPosition.isEqual(e.targetPosition);if(o&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return i.howMany+=e.howMany,i.splitPosition=i.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),[i];if(o&&t.abRelation&&t.abRelation.howMany){const{howMany:r,offset:a}=t.abRelation;return i.howMany+=r,i.splitPosition=i.splitPosition.getShiftedBy(a),[i]}if(i.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.splitPosition)){const r=e.howMany-(i.splitPosition.offset-e.sourcePosition.offset);return i.howMany-=r,i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany),i.splitPosition=e.sourcePosition.clone(),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),[i]}return e.sourcePosition.isEqual(e.targetPosition)||(i.splitPosition.hasSameParentAs(e.sourcePosition)&&i.splitPosition.offset<=e.sourcePosition.offset&&(i.howMany-=e.howMany),i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany)),i.splitPosition.stickiness="toNone",i.splitPosition=i.splitPosition._getTransformedByMoveOperation(e),i.splitPosition.stickiness="toNext",i.graveyardPosition?i.insertionPosition=i.insertionPosition._getTransformedByMoveOperation(e):i.insertionPosition=tt.getInsertionPosition(i.splitPosition),[i]}),$e(tt,tt,(i,e,t)=>{if(i.splitPosition.isEqual(e.splitPosition)){if(!i.graveyardPosition&&!e.graveyardPosition)return[new St(0)];if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition))return[new St(0)];if(t.abRelation=="splitBefore")return i.howMany=0,i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e),[i]}if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition)){const n=i.splitPosition.root.rootName=="$graveyard",o=e.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const r=[];return e.howMany&&r.push(new Ge(e.moveTargetPosition,e.howMany,e.splitPosition,0)),i.howMany&&r.push(new Ge(i.splitPosition,i.howMany,i.moveTargetPosition,0)),r}return[new St(0)]}if(i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e)),i.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return i.howMany++,[i];if(e.splitPosition.isEqual(i.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const o=new X(e.insertionPosition.root,n);return[i,new Ge(i.insertionPosition,1,o,0)]}return i.splitPosition.hasSameParentAs(e.splitPosition)&&i.splitPosition.offset<e.splitPosition.offset&&(i.howMany-=e.howMany),i.splitPosition=i.splitPosition._getTransformedBySplitOperation(e),i.insertionPosition=tt.getInsertionPosition(i.splitPosition),[i]});class Bt extends Be(X){constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new S("model-liveposition-root-not-rootelement",e);ME.call(this)}detach(){this.stopListening()}toPosition(){return new X(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function ME(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&IE.call(this,t)},{priority:"low"})}function IE(i){const e=this.getTransformedByOperation(i);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}Bt.prototype.is=function(i){return i==="livePosition"||i==="model:livePosition"||i=="position"||i==="model:position"};class Yi{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},Z("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:o=!1,isTyping:r=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=o,this.isTyping=r}get type(){return Z("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class NE{constructor(e){this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set,this._markerCollection=e}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){const t=e;switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const n of t.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const n=this._isInInsertedElement(t.sourcePosition.parent),o=this._isInInsertedElement(t.targetPosition.parent);n||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),o||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const n=W._createFromPositionAndShift(t.position,1);for(const o of this._markerCollection.getMarkersIntersectingRange(n)){const r=o.getData();this.bufferMarkerChange(o.name,r,r)}break}case"split":{const n=t.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const n=t.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const o=t.graveyardPosition.parent;this._markInsert(o,t.graveyardPosition.offset,1);const r=t.targetPosition.parent;this._isInInsertedElement(r)||this._markInsert(r,t.targetPosition.offset,n.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const o=this._changedMarkers.get(e);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,o=!e.range&&t.range,r=e.range&&t.range&&!e.range.isEqual(t.range);if(n||o||r)return!0}}return!1}getChanges(e={}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((p,m)=>p.offset===m.offset?p.type!=m.type?p.type=="remove"?-1:1:0:p.offset<m.offset?-1:1),r=this._elementSnapshots.get(n),a=yp(n.getChildren()),l=PE(r.length,o);let d=0,h=0;for(const p of l)if(p==="i")t.push(this._getInsertDiff(n,d,a[d])),d++;else if(p==="r")t.push(this._getRemoveDiff(n,d,r[h])),h++;else if(p==="a"){const m=a[d].attributes,_=r[h].attributes;let v;if(a[d].name=="$text")v=new W(X._createAt(n,d),X._createAt(n,d+1));else{const E=n.offsetToIndex(d);v=new W(X._createAt(n,d),X._createAt(n.getChild(E),0))}t.push(...this._getAttributesDiff(v,_,m)),d++,h++}else d++,h++}t.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<t.length;n++){const r=t[o],a=t[n],l=r.type=="remove"&&a.type=="remove"&&r.name=="$text"&&a.name=="$text"&&r.position.isEqual(a.position),d=r.type=="insert"&&a.type=="insert"&&r.name=="$text"&&a.name=="$text"&&r.position.parent==a.position.parent&&r.position.offset+r.length==a.position.offset,h=r.type=="attribute"&&a.type=="attribute"&&r.position.parent==a.position.parent&&r.range.isFlat&&a.range.isFlat&&r.position.offset+r.length==a.position.offset&&r.attributeKey==a.attributeKey&&r.attributeOldValue==a.attributeOldValue&&r.attributeNewValue==a.attributeNewValue;l||d||h?(r.length++,h&&(r.range.end=r.range.end.getShiftedBy(1)),t[n]=null):o=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(BE),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=W._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(e,t,n){const o={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o)}_markRemove(e,t,n){const o={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,yp(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const o=e.offset+e.howMany,r=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<r&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<r){const a=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:o,howMany:a-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=e.howMany;else if(o<=r)if(e.offset<n.offset){const a=o-n.offset;n.offset=e.offset,n.howMany-=a,e.nodesToHandle-=a}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<r){const a=r-e.offset;n.howMany-=a,e.nodesToHandle-=a}}if(n.type=="remove"&&(o<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const a=o-n.offset;n.offset=e.offset,n.howMany-=a}else if(e.offset<r)if(o<=r){const a=n.howMany;n.howMany=e.offset-n.offset;const l=a-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:l,count:this._changeCount++})}else n.howMany-=r-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&o>n.offset){if(o>r){const a={type:"attribute",offset:r,howMany:o-r,count:this._changeCount++};this._handleChange(a,t),t.push(a)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<r&&(o>r?(e.nodesToHandle=o-r,e.offset=r):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&o>n.offset){const a={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(a,t),t.push(a),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&o<=r?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&o>=r&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:X._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:X._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const o=[];n=new Map(n);for(const[r,a]of t){const l=n.has(r)?n.get(r):null;l!==a&&o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:a,attributeNewValue:l,changeCount:this._changeCount++}),n.delete(r)}for(const[r,a]of n)o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:a,changeCount:this._changeCount++});return o}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),o=e.startOffset;if(n){for(const r of n)if(r.type=="insert"&&o>=r.offset&&o<r.offset+r.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const o=new W(X._createAt(e,t),X._createAt(e,t+n));for(const r of o.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function yp(i){const e=[];for(const t of i)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function PE(i,e){const t=[];let n=0,o=0;for(const r of e){if(r.offset>n){for(let a=0;a<r.offset-n;a++)t.push("e");o+=r.offset-n}if(r.type=="insert"){for(let a=0;a<r.howMany;a++)t.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let a=0;a<r.howMany;a++)t.push("r");n=r.offset,o+=r.howMany}else t.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,o+=r.howMany}if(o<i)for(let r=0;r<i-o-n;r++)t.push("e");return t}function BE(i){const e="position"in i&&i.position.root.rootName=="$graveyard",t="range"in i&&i.range.root.rootName=="$graveyard";return!e&&!t}class OE{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new S("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let o=t-1;for(const[l,d]of this._gaps)e>l&&e<d&&(e=d),o>l&&o<d&&(o=l-1);if(o<n.baseVersion||e>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(e);r===void 0&&(r=0);let a=this._baseVersionToOperationIndex.get(o);return a===void 0&&(a=this._operations.length-1),this._operations.slice(r,a+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class xa extends Qe{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}xa.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="model:rootElement"||i==="element"||i==="model:element"):i==="rootElement"||i==="model:rootElement"||i==="element"||i==="model:element"||i==="node"||i==="model:node"};const ed="$graveyard";class LE extends Be(){constructor(e){super(),this.model=e,this.history=new OE,this.selection=new fn(this),this.roots=new An({idProperty:"rootName"}),this.differ=new NE(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",ed),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,o,r,a)=>{const l={...n.getData(),range:r};this.differ.bufferMarkerChange(n.name,a,l),o===null&&n.on("change",(d,h)=>{const p=n.getData();this.differ.bufferMarkerChange(n.name,{...p,range:h},p)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(ed)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new S("model-document-createroot-name-exists",this,{name:t});const n=new xa(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=ed)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=Xf(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,o=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(o)||t.createRange(o)}_validateSelectionRange(e){return xp(e.start)&&xp(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function xp(i){const e=i.textNode;if(e){const t=e.data,n=i.offset-e.startOffset;return!yf(t,n)&&!xf(t,n)}return!0}class RE extends Be(){constructor(){super(...arguments),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof Qi?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,o=!1){const r=e instanceof Qi?e.name:e;if(r.includes(","))throw new S("markercollection-incorrect-marker-name",this);const a=this._markers.get(r);if(a){const h=a.getData(),p=a.getRange();let m=!1;return p.isEqual(t)||(a._attachLiveRange(yn.fromRange(t)),m=!0),n!=a.managedUsingOperations&&(a._managedUsingOperations=n,m=!0),typeof o=="boolean"&&o!=a.affectsData&&(a._affectsData=o,m=!0),m&&this.fire(`update:${r}`,a,p,t,h),a}const l=yn.fromRange(t),d=new Qi(r,l,n,o);return this._markers.set(r,d),this.fire(`update:${r}`,d,null,t,{...d.getData(),range:null}),d}_remove(e){const t=e instanceof Qi?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire(`update:${t}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof Qi?e.name:e,n=this._markers.get(t);if(!n)throw new S("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire(`update:${t}`,n,o,o,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}class Qi extends Be(vo){constructor(e,t,n,o){super(),this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new S("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new S("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new S("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new S("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new S("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Qi.prototype.is=function(i){return i==="marker"||i==="model:marker"};class zE extends gn{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new S("detach-operation-on-document-node",this)}_execute(){pp(W._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class oo extends vo{constructor(e){super(),this.markers=new Map,this._children=new qr,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(Qe.fromJSON(n)):t.push(et.fromJSON(n));return new oo(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new et(o)]:(he(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new et(r):r instanceof vn?new et(r.data,r.getAttributes()):r))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}}oo.prototype.is=function(i){return i==="documentFragment"||i==="model:documentFragment"};class jE{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new et(e,t)}createElement(e,t){return new Qe(e,t)}createDocumentFragment(){return new oo}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof et&&e.data=="")return;const o=X._createAt(t,n);if(e.parent){if(Tp(e.root,o.root))return void this.move(W._createOn(e),o);if(e.root.document)throw new S("model-writer-insert-forbidden-move",this);this.remove(e)}const r=o.root.document?o.root.document.version:null,a=new Tt(o,e,r);if(e instanceof et&&(a.shouldReceiveAttributes=!0),this.batch.addOperation(a),this.model.applyOperation(a),e instanceof oo)for(const[l,d]of e.markers){const h=X._createAt(d.root,0),p={range:new W(d.start._getCombined(h,o),d.end._getCombined(h,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(l)?this.updateMarker(l,p):this.addMarker(l,p)}}insertText(e,t,n,o){t instanceof oo||t instanceof Qe||t instanceof X?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,o)}insertElement(e,t,n,o){t instanceof oo||t instanceof Qe||t instanceof X?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,o)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof oo||t instanceof Qe?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof oo||t instanceof Qe?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof W){const o=n.getMinimalFlatRanges();for(const r of o)Ep(this,e,t,r)}else Dp(this,e,t,n)}setAttributes(e,t){for(const[n,o]of zn(e))this.setAttribute(n,o,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof W){const n=t.getMinimalFlatRanges();for(const o of n)Ep(this,e,null,o)}else Dp(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(e instanceof W)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof W))throw new S("writer-move-invalid-range",this);if(!e.isFlat)throw new S("writer-move-range-not-flat",this);const o=X._createAt(t,n);if(o.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!Tp(e.root,o.root))throw new S("writer-move-different-document",this);const r=e.root.document?e.root.document.version:null,a=new Ge(e.start,e.end.offset-e.start.offset,o,r);this.batch.addOperation(a),this.model.applyOperation(a)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof W?e:W._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),FE(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof Qe))throw new S("writer-merge-no-element-before",this);if(!(n instanceof Qe))throw new S("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(...e){return this.model.createSelection(...e)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(W._createIn(n),X._createAt(t,"end")),this.remove(n)}_merge(e){const t=X._createAt(e.nodeBefore,"end"),n=X._createAt(e.nodeAfter,0),o=e.root.document.graveyard,r=new X(o,[0]),a=e.root.document.version,l=new gt(n,e.nodeAfter.maxOffset,t,r,a);this.batch.addOperation(l),this.model.applyOperation(l)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Qe))throw new S("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,o=new Qt(X._createBefore(e),e.name,t,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(e,t){this._assertWriterUsedCorrectly();let n,o,r=e.parent;if(!r.parent)throw new S("writer-split-element-no-parent",this);if(t||(t=r.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new S("writer-split-invalid-limit-element",this);do{const a=r.root.document?r.root.document.version:null,l=r.maxOffset-e.offset,d=tt.getInsertionPosition(e),h=new tt(e,l,d,null,a);this.batch.addOperation(h),this.model.applyOperation(h),n||o||(n=r,o=e.parent.nextSibling),r=(e=this.createPositionAfter(e.parent)).parent}while(r!==t);return{position:e,range:new W(X._createAt(n,"end"),X._createAt(o,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new S("writer-wrap-range-not-flat",this);const n=t instanceof Qe?t:new Qe(t);if(n.childCount>0)throw new S("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new S("writer-wrap-element-attached",this);this.insert(n,e.start);const o=new W(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(o,X._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new S("writer-unwrap-element-no-parent",this);this.move(W._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new S("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,o=t.range,r=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new S("writer-addmarker-marker-exists",this);if(!o)throw new S("writer-addmarker-no-range",this);return n?(Xr(this,e,null,o,r),this.model.markers.get(e)):this.model.markers._set(e,o,n,r)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,o=this.model.markers.get(n);if(!o)throw new S("writer-updatemarker-marker-not-exists",this);if(!t)return Z("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const r=typeof t.usingOperation=="boolean",a=typeof t.affectsData=="boolean",l=a?t.affectsData:o.affectsData;if(!r&&!t.range&&!a)throw new S("writer-updatemarker-wrong-options",this);const d=o.getRange(),h=t.range?t.range:d;r&&t.usingOperation!==o.managedUsingOperations?t.usingOperation?Xr(this,n,null,h,l):(Xr(this,n,d,null,l),this.model.markers._set(n,h,void 0,l)):o.managedUsingOperations?Xr(this,n,d,h,l):this.model.markers._set(n,h,void 0,l)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new S("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);Xr(this,t,n.getRange(),null,n.affectsData)}setSelection(...e){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...e)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,o]of zn(e))this._setSelectionAttribute(n,o)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=fn._getStoreAttributeKey(e);this.setAttribute(o,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=fn._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new S("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let r=!1;if(e==="move"){const a=t;r=a.containsPosition(o.start)||a.start.isEqual(o.start)||a.containsPosition(o.end)||a.end.isEqual(o.end)}else{const a=t,l=a.nodeBefore,d=a.nodeAfter,h=o.start.parent==l&&o.start.isAtEnd,p=o.end.parent==d&&o.end.offset==0,m=o.end.nodeAfter==d,_=o.start.nodeAfter==d;r=h||p||m||_}r&&this.updateMarker(n.name,{range:o})}}}function Ep(i,e,t,n){const o=i.model,r=o.document;let a,l,d,h=n.start;for(const m of n.getWalker({shallow:!0}))d=m.item.getAttribute(e),a&&l!=d&&(l!=t&&p(),h=a),a=m.nextPosition,l=d;function p(){const m=new W(h,a),_=m.root.document?r.version:null,v=new kt(m,e,l,t,_);i.batch.addOperation(v),o.applyOperation(v)}a instanceof X&&a!=h&&l!=t&&p()}function Dp(i,e,t,n){const o=i.model,r=o.document,a=n.getAttribute(e);let l,d;if(a!=t){if(n.root===n){const h=n.document?r.version:null;d=new no(n,e,a,t,h)}else{l=new W(X._createBefore(n),i.createPositionAfter(n));const h=l.root.document?r.version:null;d=new kt(l,e,a,t,h)}i.batch.addOperation(d),o.applyOperation(d)}}function Xr(i,e,t,n,o){const r=i.model,a=r.document,l=new Yt(e,t,n,r.markers,!!o,a.version);i.batch.addOperation(l),r.applyOperation(l)}function FE(i,e,t,n){let o;if(i.root.document){const r=n.document,a=new X(r.graveyard,[0]);o=new Ge(i,e,a,r.version)}else o=new zE(i,e);t.addOperation(o),n.applyOperation(o)}function Tp(i,e){return i===e||i instanceof xa&&e instanceof xa}function VE(i){i.document.registerPostFixer(e=>function(t,n){const o=n.document.selection,r=n.schema,a=[];let l=!1;for(const d of o.getRanges()){const h=UE(d,r);h&&!h.isEqual(d)?(a.push(h),l=!0):a.push(d)}return l&&t.setSelection(function(d){const h=[...d],p=new Set;let m=1;for(;m<h.length;){const _=h[m],v=h.slice(0,m);for(const[E,T]of v.entries())if(!p.has(E)){if(_.isEqual(T))p.add(E);else if(_.isIntersecting(T)){p.add(E),p.add(m);const M=_.getJoined(T);h.push(M)}}m++}return h.filter((_,v)=>!p.has(v))}(a),{backward:o.isBackward}),!1}(e,i))}function UE(i,e){return i.isCollapsed?function(t,n){const o=t.start,r=n.getNearestSelectionRange(o);if(!r){const l=o.getAncestors().reverse().find(d=>n.isObject(d));return l?W._createOn(l):null}if(!r.isCollapsed)return r;const a=r.start;return o.isEqual(a)?null:new W(a)}(i,e):function(t,n){const{start:o,end:r}=t,a=n.checkChild(o,"$text"),l=n.checkChild(r,"$text"),d=n.getLimitElement(o),h=n.getLimitElement(r);if(d===h){if(a&&l)return null;if(function(_,v,E){const T=_.nodeAfter&&!E.isLimit(_.nodeAfter)||E.checkChild(_,"$text"),M=v.nodeBefore&&!E.isLimit(v.nodeBefore)||E.checkChild(v,"$text");return T||M}(o,r,n)){const _=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),v=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),E=_?_.start:o,T=v?v.end:r;return new W(E,T)}}const p=d&&!d.is("rootElement"),m=h&&!h.is("rootElement");if(p||m){const _=o.nodeAfter&&r.nodeBefore&&o.nodeAfter.parent===r.nodeBefore.parent,v=p&&(!_||!Mp(o.nodeAfter,n)),E=m&&(!_||!Mp(r.nodeBefore,n));let T=o,M=r;return v&&(T=X._createBefore(Sp(d,n))),E&&(M=X._createAfter(Sp(h,n))),new W(T,M)}return null}(i,e)}function Sp(i,e){let t=i,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function Mp(i,e){return i&&e.isSelectable(i)}function HE(i,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=i.schema;i.change(r=>{if(!t.doNotResetEntireContent&&function(h,p){const m=h.getLimitElement(p);if(!p.containsEntireContent(m))return!1;const _=p.getFirstRange();return _.start.parent==_.end.parent?!1:h.checkChild(m,"paragraph")}(o,e))return void function(h,p){const m=h.model.schema.getLimitElement(p);h.remove(h.createRangeIn(m)),Pp(h,h.createPositionAt(m,0),p)}(r,e);const a={};if(!t.doNotAutoparagraph){const h=e.getSelectedElement();h&&Object.assign(a,o.getAttributesWithProperty(h,"copyOnReplace",!0))}const[l,d]=function(h){const p=h.root.document.model,m=h.start;let _=h.end;if(p.hasContent(h,{ignoreMarkers:!0})){const v=function(E){const T=E.parent,M=T.root.document.model.schema,B=T.getAncestors({parentFirst:!0,includeSelf:!0});for(const R of B){if(M.isLimit(R))return null;if(M.isBlock(R))return R}}(_);if(v&&_.isTouching(p.createPositionAt(v,0))){const E=p.createSelection(h);p.modifySelection(E,{direction:"backward"});const T=E.getLastPosition(),M=p.createRange(T,_);p.hasContent(M,{ignoreMarkers:!0})||(_=T)}}return[Bt.fromPosition(m,"toPrevious"),Bt.fromPosition(_,"toNext")]}(n);l.isTouching(d)||r.remove(r.createRange(l,d)),t.leaveUnmerged||(function(h,p,m){const _=h.model;if(!td(h.model.schema,p,m))return;const[v,E]=function(T,M){const B=T.getAncestors(),R=M.getAncestors();let K=0;for(;B[K]&&B[K]==R[K];)K++;return[B[K],R[K]]}(p,m);!v||!E||(!_.hasContent(v,{ignoreMarkers:!0})&&_.hasContent(E,{ignoreMarkers:!0})?Np(h,p,m,v.parent):Ip(h,p,m,v.parent))}(r,l,d),o.removeDisallowedAttributes(l.parent.getChildren(),r)),Bp(r,e,l),!t.doNotAutoparagraph&&function(h,p){const m=h.checkChild(p,"$text"),_=h.checkChild(p,"paragraph");return!m&&_}(o,l)&&Pp(r,l,e,a),l.detach(),d.detach()})}function Ip(i,e,t,n){const o=e.parent,r=t.parent;if(o!=n&&r!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(r)).isEqual(e)||i.insert(r,e),i.merge(e);t.parent.isEmpty;){const a=t.parent;t=i.createPositionBefore(a),i.remove(a)}td(i.model.schema,e,t)&&Ip(i,e,t,n)}}function Np(i,e,t,n){const o=e.parent,r=t.parent;if(o!=n&&r!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(r)).isEqual(e)||i.insert(o,t);e.parent.isEmpty;){const a=e.parent;e=i.createPositionBefore(a),i.remove(a)}t=i.createPositionBefore(r),function(a,l){const d=l.nodeBefore,h=l.nodeAfter;d.name!=h.name&&a.rename(d,h.name),a.clearAttributes(d),a.setAttributes(Object.fromEntries(h.getAttributes()),d),a.merge(l)}(i,t),td(i.model.schema,e,t)&&Np(i,e,t,n)}}function td(i,e,t){const n=e.parent,o=t.parent;return n!=o&&!i.isLimit(n)&&!i.isLimit(o)&&function(r,a,l){const d=new W(r,a);for(const h of d.getWalker())if(l.isLimit(h.item))return!1;return!0}(e,t,i)}function Pp(i,e,t,n={}){const o=i.createElement("paragraph");i.model.schema.setAllowedAttributes(o,n,i),i.insert(o,e),Bp(i,t,i.createPositionAt(o,0))}function Bp(i,e,t){e instanceof fn?i.setSelection(t):e.setTo(t)}function Op(i,e){const t=[];Array.from(i.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(i.start)||n.start.isEqual(i.start))&&(n.end.isBefore(i.end)||n.end.isEqual(i.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const r=e.createRangeOn(o);o=o.parent,e.remove(r)}})}class $E{constructor(e,t,n){this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null,this._nodeToSelect=null,this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0)}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new S("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?W._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new W(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=Bt.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new S("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=e:this._nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=Bt.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Bt.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof Qe)||!this._canMergeLeft(e))return;const t=Bt._createBefore(e);t.stickiness="toNext";const n=Bt.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=Bt._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Bt._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof Qe)||!this._canMergeRight(e))return;const t=Bt._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new S("insertcontent-invalid-insertion-position",this);this.position=X._createAt(t.nodeBefore,"end");const n=Bt.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=Bt._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Bt._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof Qe&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof Qe&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function Lp(i,e,t="auto"){const n=i.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return t=="before"||t=="after"?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const o=Ct(i.getSelectedBlocks());if(!o)return e.createRange(i.focus);if(o.isEmpty)return e.createRange(e.createPositionAt(o,0));const r=e.createPositionAfter(o);return i.focus.isTouching(r)?e.createRange(r):e.createRange(e.createPositionBefore(o))}function qE(i,e,t,n,o={}){if(!i.schema.isObject(e))throw new S("insertobject-element-not-an-object",i,{object:e});let r;r=t?t instanceof qn||t instanceof fn?t:i.createSelection(t,n):i.document.selection;let a=r;o.findOptimalPosition&&i.schema.isBlock(e)&&(a=i.createSelection(Lp(r,i,o.findOptimalPosition)));const l=Ct(r.getSelectedBlocks()),d={};return l&&Object.assign(d,i.schema.getAttributesWithProperty(l,"copyOnReplace",!0)),i.change(h=>{a.isCollapsed||i.deleteContent(a,{doNotAutoparagraph:!0});let p=e;const m=a.anchor.parent;!i.schema.checkChild(m,e)&&i.schema.checkChild(m,"paragraph")&&i.schema.checkChild("paragraph",e)&&(p=h.createElement("paragraph"),h.insert(e,p)),i.schema.setAllowedAttributes(p,d,h);const _=i.insertContent(p,a);return _.isCollapsed||o.setSelection&&function(v,E,T,M){const B=v.model;if(T=="on")return void v.setSelection(E,"on");if(T!="after")throw new S("insertobject-invalid-place-parameter-value",B);let R=E.nextSibling;if(B.schema.isInline(E))return void v.setSelection(E,"after");!(R&&B.schema.checkChild(R,"$text"))&&B.schema.checkChild(E.parent,"paragraph")&&(R=v.createElement("paragraph"),B.schema.setAllowedAttributes(R,M,v),B.insertContent(R,v.createPositionAfter(E))),R&&v.setSelection(R,0)}(h,e,o.setSelection,d),_})}const WE=' ,.?!:;"-()';function GE(i,e){const{isForward:t,walker:n,unit:o,schema:r,treatEmojiAsSingleUnit:a}=i,{type:l,item:d,nextPosition:h}=e;if(l=="text")return i.unit==="word"?function(p,m){let _=p.position.textNode;for(_||(_=m?p.position.nodeAfter:p.position.nodeBefore);_&&_.is("$text");){const v=p.position.offset-_.startOffset;if(QE(_,v,m))_=m?p.position.nodeAfter:p.position.nodeBefore;else{if(YE(_.data,v,m))break;p.next()}}return p.position}(n,t):function(p,m,_){const v=p.position.textNode;if(v){const E=v.data;let T=p.position.offset-v.startOffset;for(;yf(E,T)||m=="character"&&xf(E,T)||_&&Ny(E,T);)p.next(),T=p.position.offset-v.startOffset}return p.position}(n,o,a);if(l==(t?"elementStart":"elementEnd")){if(r.isSelectable(d))return X._createAt(d,t?"after":"before");if(r.checkChild(h,"$text"))return h}else{if(r.isLimit(d))return void n.skip(()=>!0);if(r.checkChild(h,"$text"))return h}}function KE(i,e){const t=i.root,n=X._createAt(t,e?"end":0);return e?new W(i,n):new W(n,i)}function YE(i,e,t){const n=e+(t?0:-1);return WE.includes(i.charAt(n))}function QE(i,e,t){return e===(t?i.offsetSize:0)}class ZE extends U(){constructor(){super(),this.markers=new RE,this.document=new LE(this),this.schema=new lE,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),VE(this),this.document.registerPostFixer(sp)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Yi,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){S.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new Yi):e instanceof Yi||(e=new Yi(e)):e=new Yi,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){S.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(o,r,a,l){return o.change(d=>{let h;h=a?a instanceof qn||a instanceof fn?a:d.createSelection(a,l):o.document.selection,h.isCollapsed||o.deleteContent(h,{doNotAutoparagraph:!0});const p=new $E(o,d,h.anchor),m=[];let _;if(r.is("documentFragment")){if(r.markers.size){const T=[];for(const[M,B]of r.markers){const{start:R,end:K}=B,ue=R.isEqual(K);T.push({position:R,name:M,isCollapsed:ue},{position:K,name:M,isCollapsed:ue})}T.sort(({position:M},{position:B})=>M.isBefore(B)?1:-1);for(const{position:M,name:B,isCollapsed:R}of T){let K=null,ue=null;const Se=M.parent===r&&M.isAtStart,He=M.parent===r&&M.isAtEnd;Se||He?R&&(ue=Se?"start":"end"):(K=d.createElement("$marker"),d.insert(K,M)),m.push({name:B,element:K,collapsed:ue})}}_=r.getChildren()}else _=[r];p.handleNodes(_);let v=p.getSelectionRange();if(r.is("documentFragment")&&m.length){const T=v?yn.fromRange(v):null,M={};for(let B=m.length-1;B>=0;B--){const{name:R,element:K,collapsed:ue}=m[B],Se=!M[R];if(Se&&(M[R]=[]),K){const He=d.createPositionAt(K,"before");M[R].push(He),d.remove(K)}else{const He=p.getAffectedRange();if(!He){ue&&M[R].push(p.position);continue}ue?M[R].push(He[ue]):M[R].push(Se?He.start:He.end)}}for(const[B,[R,K]]of Object.entries(M))R&&K&&R.root===K.root&&d.addMarker(B,{usingOperation:!0,affectsData:!0,range:new W(R,K)});T&&(v=T.toRange(),T.detach())}v&&(h instanceof fn?d.setSelection(v):h.setTo(v));const E=p.getAffectedRange()||o.createRange(h.anchor);return p.destroy(),E})}(this,e,t,n)}insertObject(e,t,n,o){return qE(this,e,t,n,o)}deleteContent(e,t){HE(this,e,t)}modifySelection(e,t){(function(n,o,r={}){const a=n.schema,l=r.direction!="backward",d=r.unit?r.unit:"character",h=!!r.treatEmojiAsSingleUnit,p=o.focus,m=new $n({boundaries:KE(p,l),singleCharacters:!0,direction:l?"forward":"backward"}),_={walker:m,schema:a,isForward:l,unit:d,treatEmojiAsSingleUnit:h};let v;for(;v=m.next();){if(v.done)return;const E=GE(_,v.value);if(E)return void(o instanceof fn?n.change(T=>{T.setSelectionFocus(E)}):o.setFocus(E))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(o=>{const r=o.createDocumentFragment(),a=n.getFirstRange();if(!a||a.isCollapsed)return r;const l=a.start.root,d=a.start.getCommonPath(a.end),h=l.getNodeByPath(d);let p;p=a.start.parent==a.end.parent?a:o.createRange(o.createPositionAt(h,a.start.path[d.length]),o.createPositionAt(h,a.end.path[d.length]+1));const m=p.end.offset-p.start.offset;for(const _ of p.getItems({shallow:!0}))_.is("$textProxy")?o.appendText(_.data,_.getAttributes(),r):o.append(o.cloneElement(_,!0),r);if(p!=a){const _=a._getTransformedByMove(p.start,o.createPositionAt(r,0),m)[0],v=o.createRange(o.createPositionAt(r,0),_.start);Op(o.createRange(_.end,o.createPositionAt(r,"end")),o),Op(v,o)}return r})}(this,e)}hasContent(e,t={}){const n=e instanceof W?e:W._createIn(e);if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:r=!1}=t;if(!r){for(const a of this.markers.getMarkersIntersectingRange(n))if(a.affectsData)return!0}for(const a of n.getItems())if(this.schema.isContent(a)&&(!a.is("$textProxy")||!o||a.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new X(e,t,n)}createPositionAt(e,t){return X._createAt(e,t)}createPositionAfter(e){return X._createAfter(e)}createPositionBefore(e){return X._createBefore(e)}createRange(e,t){return new W(e,t)}createRangeIn(e){return W._createIn(e)}createRangeOn(e){return W._createOn(e)}createSelection(...e){return new qn(...e)}createBatch(e){return new Yi(e)}createOperationFromJSON(e){return EE.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new jE(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return e}}class JE extends Co{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class nd extends Co{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class Zi{constructor(e){this.document=e}createDocumentFragment(e){return new si(this.document,e)}createElement(e,t,n){return new nn(this.document,e,t,n)}createText(e){return new Xe(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const o=n.getChildIndex(e);return this.removeChildren(o,1,n),this.insertChild(o,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new nn(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Kt(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return de._createAt(e,t)}createPositionAfter(e){return de._createAfter(e)}createPositionBefore(e){return de._createBefore(e)}createRange(e,t){return new xe(e,t)}createRangeOn(e){return xe._createOn(e)}createRangeIn(e){return xe._createIn(e)}createSelection(...e){return new Vn(...e)}}class XE{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new S("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class eD extends Rn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const o=t;t=(r,a)=>{this.editor.execute(o),a()}}super.set(e,t,n)}}class tD extends U(){constructor(e={}){super();const t=this.constructor,n=e.language||t.defaultConfig&&t.defaultConfig.language;this._context=e.context||new Qy({language:n}),this._context._addEditor(this,!e.context);const o=Array.from(t.builtinPlugins||[]);this.config=new of(e,t.defaultConfig),this.config.define("plugins",o),this.config.define(this._context._getEditorConfig()),this.plugins=new Yf(this,o,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new XE,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new ZE;const r=new z1;this.data=new yE(this.model,r),this.editing=new aE(this.model,r),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new xE([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new eD(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new S("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new S("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new S("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],o=e.get("extraPlugins")||[],r=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(o),n,r)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(e,...t){try{return this.commands.execute(e,...t)}catch(n){S.rethrowUnexpectedError(n,this)}}focus(){this.editing.view.focus()}}function Ea(i){return class extends i{setData(e){this.data.set(e)}getData(e){return this.data.get(e)}}}{const i=Ea(Object);Ea.setData=i.prototype.setData,Ea.getData=i.prototype.getData}function od(i){return class extends i{updateSourceElement(e=this.data.get()){if(!this.sourceElement)throw new S("editor-missing-sourceelement",this);const t=this.config.get("updateSourceElementOnDestroy"),n=this.sourceElement instanceof HTMLTextAreaElement;_y(this.sourceElement,t||n?e:"")}}}od.updateSourceElement=od(Object).prototype.updateSourceElement;class Rp extends la{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new An({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new S("pendingactions-add-invalid-message",this);const t=new(U());return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const wt={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path clip-rule="evenodd" d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path clip-rule="evenodd" d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>'};var zp=g(5542),nD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(zp.Z,nD),zp.Z.locals;const{threeVerticalDots:jp}=wt,oD={alignLeft:wt.alignLeft,bold:wt.bold,importExport:wt.importExport,paragraph:wt.paragraph,plus:wt.plus,text:wt.text,threeVerticalDots:wt.threeVerticalDots};class id extends je{constructor(e,t){super(e);const n=this.bindTemplate,o=this.t;this.options=t||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new hn,this.keystrokes=new Rn,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new iD(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=e.uiLanguageDirection==="rtl";this._focusCycler=new Hi({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const a=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var l;this.options.shouldGroupWhenFull&&this.options.isFloating&&a.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:a,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(l=this,l.bindTemplate.to(d=>{d.target===l.element&&d.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new sD(this):new rD(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t,n){this.items.addMany(this._buildItemsFromConfig(e,t,n))}_buildItemsFromConfig(e,t,n){const o=qf(e),r=n||o.removeItems;return this._cleanItemsConfiguration(o.items,t,r).map(a=>ae(a)?this._createNestedToolbarDropdown(a,t,r):a==="|"?new $f:a==="-"?new Yy:t.create(a)).filter(a=>!!a)}_cleanItemsConfiguration(e,t,n){const o=e.filter((r,a,l)=>r==="|"||n.indexOf(r)===-1&&(r==="-"?!this.options.shouldGroupWhenFull||(Z("toolbarview-line-break-ignored-when-grouping-items",l),!1):!(!ae(r)&&!t.has(r))||(Z("toolbarview-item-unavailable",{item:r}),!1)));return this._cleanSeparatorsAndLineBreaks(o)}_cleanSeparatorsAndLineBreaks(e){const t=a=>a!=="-"&&a!=="|",n=e.length,o=e.findIndex(t);if(o===-1)return[];const r=n-e.slice().reverse().findIndex(t);return e.slice(o,r).filter((a,l,d)=>t(a)?!0:!(l>0&&d[l-1]===a))}_createNestedToolbarDropdown(e,t,n){let{label:o,icon:r,items:a,tooltip:l=!0,withText:d=!1}=e;if(a=this._cleanItemsConfiguration(a,t,n),!a.length)return null;const h=yo(this.locale);return o||Z("toolbarview-nested-toolbar-dropdown-missing-label",e),h.class="ck-toolbar__nested-toolbar-dropdown",h.buttonView.set({label:o,tooltip:l,withText:!!d}),r!==!1?h.buttonView.icon=oD[r]||r||jp:h.buttonView.withText=!0,rd(h,()=>h.toolbarView._buildItemsFromConfig(a,t,n)),h}}class iD extends je{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class rD{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class sD{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("change",this._updateFocusCycleableItems.bind(this)),e.children.on("change",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const o=n.index,r=Array.from(n.added);for(const a of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(a):this.ungroupedItems.remove(a);for(let a=o;a<o+r.length;a++){const l=r[a-o];a>this.ungroupedItems.length?this.groupedItems.add(l,a-this.ungroupedItems.length):this.ungroupedItems.add(l,a)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!Xo(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new ft(e.lastChild),o=new ft(e);if(!this.cachedPadding){const r=Re.window.getComputedStyle(e),a=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[a])}return t==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new ct(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new $f),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=yo(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",rd(n,this.groupedItems),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:jp}),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Fp=g(1046),aD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Fp.Z,aD),Fp.Z.locals;class cD extends je{constructor(e){super(e);const t=this.bindTemplate;this.items=this.createCollection(),this.focusTracker=new hn,this.keystrokes=new Rn,this._focusCycler=new Hi({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.set("ariaLabel",void 0),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"],"aria-label":t.to("ariaLabel")},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Vp extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",t.if("isVisible","ck-hidden",n=>!n)]},children:this.children})}focus(){this.children.first.focus()}}class lD extends je{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var Up=g(7339),dD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Up.Z,dD),Up.Z.locals;var Hp=g(3949),uD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Hp.Z,uD),Hp.Z.locals;function yo(i,e=Wy){const t=new e(i),n=new Ky(i),o=new Ui(i,t,n);return t.bind("isEnabled").to(o),t instanceof Al?t.arrowView.bind("isOn").to(o,"isOpen"):t.bind("isOn").to(o,"isOpen"),function(r){(function(a){a.on("render",()=>{b({emitter:a,activator:()=>a.isOpen,callback:()=>{a.isOpen=!1},contextElements:[a.element]})})})(r),function(a){a.on("execute",l=>{l.source instanceof ca||(a.isOpen=!1)})}(r),function(a){a.focusTracker.on("change:isFocused",(l,d,h)=>{a.isOpen&&!h&&(a.isOpen=!1)})}(r),function(a){a.keystrokes.set("arrowdown",(l,d)=>{a.isOpen&&(a.panelView.focus(),d())}),a.keystrokes.set("arrowup",(l,d)=>{a.isOpen&&(a.panelView.focusLast(),d())})}(r),function(a){a.on("change:isOpen",(l,d,h)=>{if(h)return;const p=a.panelView.element;p&&p.contains(Re.document.activeElement)&&a.buttonView.focus()})}(r),function(a){a.on("change:isOpen",(l,d,h)=>{h&&a.panelView.focus()},{priority:"low"})}(r)}(o),o}function rd(i,e,t={}){i.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),i.isOpen?$p(i,e,t):i.once("change:isOpen",()=>$p(i,e,t),{priority:"highest"}),t.enableActiveItemFocusOnDropdownOpen&&Gp(i,()=>i.toolbarView.items.find(n=>n.isOn))}function $p(i,e,t){const n=i.locale,o=n.t,r=i.toolbarView=new id(n),a=typeof e=="function"?e():e;r.ariaLabel=t.ariaLabel||o("Dropdown toolbar"),t.maxWidth&&(r.maxWidth=t.maxWidth),t.class&&(r.class=t.class),t.isCompact&&(r.isCompact=t.isCompact),t.isVertical&&(r.isVertical=!0),a instanceof Ao?r.items.bindTo(a).using(l=>l):r.items.addMany(a),i.panelView.children.add(r),r.items.delegate("execute").to(i)}function qp(i,e,t={}){i.isOpen?Wp(i,e,t):i.once("change:isOpen",()=>Wp(i,e,t),{priority:"highest"}),Gp(i,()=>i.listView.items.find(n=>n instanceof Vp&&n.children.first.isOn))}function Wp(i,e,t){const n=i.locale,o=i.listView=new cD(n),r=typeof e=="function"?e():e;o.ariaLabel=t.ariaLabel,o.items.bindTo(r).using(a=>{if(a.type==="separator")return new lD(n);if(a.type==="button"||a.type==="switchbutton"){const l=new Vp(n);let d;return d=a.type==="button"?new rt(n):new ca(n),d.bind(...Object.keys(a.model)).to(a.model),d.delegate("execute").to(l),l.children.add(d),l}return null}),i.panelView.children.add(o),o.items.delegate("execute").to(i)}function Gp(i,e){i.on("change:isOpen",()=>{if(!i.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():Z("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:ge.low-10})}var Kp=g(8793),hD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Kp.Z,hD),Kp.Z.locals;const Yp=fl("px"),Qp=Re.document.body;class Ht extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",Yp),left:t.to("left",Yp)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=Ht.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:Qp,fitInViewport:!0},e),o=Ht._getOptimalPosition(n),r=parseInt(o.left),a=parseInt(o.top),l=o.name,d=o.config||{},{withArrow:h=!0}=d;this.top=a,this.left=r,this.position=l,this.withArrow=h}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=sd(e.target),n=e.limiter?sd(e.limiter):Qp;this.listenTo(Re.document,"scroll",(o,r)=>{const a=r.target,l=t&&a.contains(t),d=n&&a.contains(n);!l&&!d&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(Re.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(Re.document,"scroll"),this.stopListening(Re.window,"resize")}}function sd(i){return zr(i)?i:oa(i)?i.commonAncestorContainer:typeof i=="function"?sd(i()):null}function Zp(i={}){const{sideOffset:e=Ht.arrowSideOffset,heightOffset:t=Ht.arrowHeightOffset,stickyVerticalOffset:n=Ht.stickyVerticalOffset,config:o}=i;return{northWestArrowSouthWest:(l,d)=>({top:r(l,d),left:l.left-e,name:"arrow_sw",...o&&{config:o}}),northWestArrowSouthMiddleWest:(l,d)=>({top:r(l,d),left:l.left-.25*d.width-e,name:"arrow_smw",...o&&{config:o}}),northWestArrowSouth:(l,d)=>({top:r(l,d),left:l.left-d.width/2,name:"arrow_s",...o&&{config:o}}),northWestArrowSouthMiddleEast:(l,d)=>({top:r(l,d),left:l.left-.75*d.width+e,name:"arrow_sme",...o&&{config:o}}),northWestArrowSouthEast:(l,d)=>({top:r(l,d),left:l.left-d.width+e,name:"arrow_se",...o&&{config:o}}),northArrowSouthWest:(l,d)=>({top:r(l,d),left:l.left+l.width/2-e,name:"arrow_sw",...o&&{config:o}}),northArrowSouthMiddleWest:(l,d)=>({top:r(l,d),left:l.left+l.width/2-.25*d.width-e,name:"arrow_smw",...o&&{config:o}}),northArrowSouth:(l,d)=>({top:r(l,d),left:l.left+l.width/2-d.width/2,name:"arrow_s",...o&&{config:o}}),northArrowSouthMiddleEast:(l,d)=>({top:r(l,d),left:l.left+l.width/2-.75*d.width+e,name:"arrow_sme",...o&&{config:o}}),northArrowSouthEast:(l,d)=>({top:r(l,d),left:l.left+l.width/2-d.width+e,name:"arrow_se",...o&&{config:o}}),northEastArrowSouthWest:(l,d)=>({top:r(l,d),left:l.right-e,name:"arrow_sw",...o&&{config:o}}),northEastArrowSouthMiddleWest:(l,d)=>({top:r(l,d),left:l.right-.25*d.width-e,name:"arrow_smw",...o&&{config:o}}),northEastArrowSouth:(l,d)=>({top:r(l,d),left:l.right-d.width/2,name:"arrow_s",...o&&{config:o}}),northEastArrowSouthMiddleEast:(l,d)=>({top:r(l,d),left:l.right-.75*d.width+e,name:"arrow_sme",...o&&{config:o}}),northEastArrowSouthEast:(l,d)=>({top:r(l,d),left:l.right-d.width+e,name:"arrow_se",...o&&{config:o}}),southWestArrowNorthWest:l=>({top:a(l),left:l.left-e,name:"arrow_nw",...o&&{config:o}}),southWestArrowNorthMiddleWest:(l,d)=>({top:a(l),left:l.left-.25*d.width-e,name:"arrow_nmw",...o&&{config:o}}),southWestArrowNorth:(l,d)=>({top:a(l),left:l.left-d.width/2,name:"arrow_n",...o&&{config:o}}),southWestArrowNorthMiddleEast:(l,d)=>({top:a(l),left:l.left-.75*d.width+e,name:"arrow_nme",...o&&{config:o}}),southWestArrowNorthEast:(l,d)=>({top:a(l),left:l.left-d.width+e,name:"arrow_ne",...o&&{config:o}}),southArrowNorthWest:l=>({top:a(l),left:l.left+l.width/2-e,name:"arrow_nw",...o&&{config:o}}),southArrowNorthMiddleWest:(l,d)=>({top:a(l),left:l.left+l.width/2-.25*d.width-e,name:"arrow_nmw",...o&&{config:o}}),southArrowNorth:(l,d)=>({top:a(l),left:l.left+l.width/2-d.width/2,name:"arrow_n",...o&&{config:o}}),southArrowNorthMiddleEast:(l,d)=>({top:a(l),left:l.left+l.width/2-.75*d.width+e,name:"arrow_nme",...o&&{config:o}}),southArrowNorthEast:(l,d)=>({top:a(l),left:l.left+l.width/2-d.width+e,name:"arrow_ne",...o&&{config:o}}),southEastArrowNorthWest:l=>({top:a(l),left:l.right-e,name:"arrow_nw",...o&&{config:o}}),southEastArrowNorthMiddleWest:(l,d)=>({top:a(l),left:l.right-.25*d.width-e,name:"arrow_nmw",...o&&{config:o}}),southEastArrowNorth:(l,d)=>({top:a(l),left:l.right-d.width/2,name:"arrow_n",...o&&{config:o}}),southEastArrowNorthMiddleEast:(l,d)=>({top:a(l),left:l.right-.75*d.width+e,name:"arrow_nme",...o&&{config:o}}),southEastArrowNorthEast:(l,d)=>({top:a(l),left:l.right-d.width+e,name:"arrow_ne",...o&&{config:o}}),westArrowEast:(l,d)=>({top:l.top+l.height/2-d.height/2,left:l.left-d.width-t,name:"arrow_e",...o&&{config:o}}),eastArrowWest:(l,d)=>({top:l.top+l.height/2-d.height/2,left:l.right+t,name:"arrow_w",...o&&{config:o}}),viewportStickyNorth:(l,d,h)=>l.getIntersection(h)?{top:h.top+n,left:l.left+l.width/2-d.width/2,name:"arrowless",config:{withArrow:!1,...o}}:null};function r(l,d){return l.top-d.height-t}function a(l){return l.bottom+t}}Ht.arrowSideOffset=25,Ht.arrowHeightOffset=10,Ht.stickyVerticalOffset=20,Ht._getOptimalPosition=gf,Ht.defaultPositions=Zp();var Jp=g(3332),fD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Jp.Z,fD),Jp.Z.locals;const Xp="ck-tooltip";class Mt extends Jo(){constructor(e){if(super(),Mt._editors.add(e),Mt._instance)return Mt._instance;Mt._instance=this,this.tooltipTextView=new je(e.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new Ht(e.locale),this.balloonPanelView.class=Xp,this.balloonPanelView.content.add(this.tooltipTextView),this._resizeObserver=null,this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=$r(this._pinTooltip,600),this.listenTo(Re.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Re.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Re.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Re.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Re.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(e){const t=e.ui.view&&e.ui.view.body;Mt._editors.delete(e),this.stopListening(e.ui),t&&t.has(this.balloonPanelView)&&t.remove(this.balloonPanelView),Mt._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),Mt._instance=null)}static getPositioningFunctions(e){const t=Mt.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[e]}_onEnterOrFocus(e,{target:t}){const n=ad(t);var o;n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,{text:(o=n).dataset.ckeTooltipText,position:o.dataset.ckeTooltipPosition||"s",cssClass:o.dataset.ckeTooltipClass||""}))}_onLeaveOrBlur(e,{target:t,relatedTarget:n}){if(e.name==="mouseleave"){if(!zr(t)||this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;const o=ad(t),r=ad(n);o&&o!==r&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(e,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(e,{text:t,position:n,cssClass:o}){const r=Ct(Mt._editors.values()).ui.view.body;r.has(this.balloonPanelView)||r.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:e,positions:Mt.getPositioningFunctions(n)}),this._resizeObserver=new ct(e,()=>{Xo(e)||this._unpinTooltip()}),this.balloonPanelView.class=[Xp,o].filter(a=>a).join(" ");for(const a of Mt._editors)this.listenTo(a.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=e,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const e of Mt._editors)this.stopListening(e.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver&&this._resizeObserver.destroy()}_updateTooltipPosition(){Xo(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:Mt.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}}function ad(i){return zr(i)?i.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}Mt.defaultBalloonPositions=Zp({heightOffset:5,sideOffset:13}),Mt._editors=new Set,Mt._instance=null;class gD extends U(){constructor(e){super(),this.editor=e,this.componentFactory=new $y(e),this.focusTracker=new hn,this.tooltipManager=new Mt(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.isReady=!1,this.once("ready",()=>{this.isReady=!0}),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,o;e.keystrokes.set("Alt+F10",(r,a)=>{const l=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(l)&&!Array.from(t.domRoots.values()).includes(l)&&(n=l);const d=this._getCurrentFocusedToolbarDefinition();d&&o||(o=this._getFocusableCandidateToolbarDefinitions());for(let h=0;h<o.length;h++){const p=o.shift();if(o.push(p),p!==d&&this._focusFocusableCandidateToolbar(p)){d&&d.options.afterBlur&&d.options.afterBlur();break}}a()}),e.keystrokes.set("Esc",(r,a)=>{const l=this._getCurrentFocusedToolbarDefinition();l&&(n?(n.focus(),n=null):e.editing.view.focus(),l.options.afterBlur&&l.options.afterBlur(),a())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:o}=t;(Xo(n.element)||o.beforeFocus)&&e.push(t)}return e.sort((t,n)=>em(t)-em(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!Xo(t.element)&&(t.focus(),!0)}}function em(i){const{toolbarView:e,options:t}=i;let n=10;return Xo(e.element)&&n--,t.isContextual&&n--,n}var tm=g(9688),pD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(tm.Z,pD),tm.Z.locals;class mD extends je{constructor(e){super(e),this.body=new jy(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var nm=g(3662),bD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(nm.Z,bD),nm.Z.locals;class om extends je{constructor(e){super(e),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${oe()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class kD extends mD{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new om;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class wD extends je{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(o=>{const r=e.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",r),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}e.isRenderingInProgress?function n(o){e.once("change:isRenderingInProgress",(r,a,l)=>{l?n(o):t(o)})}(this):t(this)}}class _D extends wD{constructor(e,t,n,o={}){super(e,t,n);const r=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var im=g(8847),AD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(im.Z,AD),im.Z.locals;var rm=g(4879),CD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(rm.Z,CD),rm.Z.locals;class vD extends je{constructor(e){super(e),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new hn,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class yD extends vD{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var sm=g(2577),xD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(sm.Z,xD),sm.Z.locals;class cd extends je{constructor(e,t){super(e);const n=`ck-labeled-field-view-${oe()}`,o=`ck-labeled-field-view-status-${oe()}`;this.fieldView=t(this,n,o),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(a,l)=>a||l);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",a=>!a),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){const t=new om(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new je(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function ld(i,e,t){const n=new yD(i.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(i,"isEnabled",o=>!o),n.bind("hasError").to(i,"errorText",o=>!!o),n.on("input",()=>{i.errorText=null}),i.bind("isEmpty","isFocused","placeholder").to(n),n}class dd extends la{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class am extends U(){constructor(e,t){super(),t&&Ig(this,t),e&&this.set(e)}}var cm=g(4650),ED={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(cm.Z,ED),cm.Z.locals;var lm=g(7676),DD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(lm.Z,DD),lm.Z.locals;const Da=fl("px");class Ta extends re{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=null,this._fakePanelsView=null}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new S("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new S("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new S("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Ht(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new TD(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,o])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new SD(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class TD extends je{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new hn,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new rt(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class SD extends je{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Da),left:n.to("left",Da),width:n.to("width",Da),height:n.to("height",Da)}},children:this.content}),this.on("change:numberOfPanels",(o,r,a,l)=>{a>l?this._addPanels(a-l):this._removePanels(l-a),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new je;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:o}=new ft(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:o})}}}var dm=g(5868),MD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(dm.Z,MD),dm.Z.locals;const es=fl("px");class ID extends je{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Cn({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?es(this._panelRect.height):null)}}}).render(),this._contentPanel=new Cn({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?es(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?es(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?es(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(Re.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:es(-Re.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var um=g(9695),ND={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(um.Z,ND),um.Z.locals;class PD extends gD{constructor(e,t){super(e),this.view=t,this._toolbarConfig=qf(e.config.get("toolbar")),this._elementReplacer=new ne}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,o=t.editing.view,r=n.editable,a=o.document.getRoot();r.name=a.rootName,n.render();const l=r.element;this.setEditableElement(r.name,l),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(l),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),o=e.sourceElement,r=e.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");r&&Zf({view:t,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var hm=g(3143),BD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(hm.Z,BD),hm.Z.locals;class OD extends kD{constructor(e,t,n={}){super(e),this.stickyPanel=new ID(e),this.toolbar=new id(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new _D(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class LD extends Ea(od(tD)){constructor(e,t={}){if(!Sa(e)&&t.initialData!==void 0)throw new S("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return Sa(r)?(a=r,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):r;var a}(e)),Sa(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new OD(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new PD(this,o),function(r){if(!Ko(r.updateSourceElement))throw new S("attachtoform-missing-elementapi-interface",r);const a=r.sourceElement;if(function(l){return!!l&&l.tagName.toLowerCase()==="textarea"}(a)&&a.form){let l;const d=a.form,h=()=>r.updateSourceElement();Ko(d.submit)&&(l=d.submit,d.submit=()=>{h(),l.apply(d)}),d.addEventListener("submit",h),r.on("destroy",()=>{d.removeEventListener("submit",h),l&&(d.submit=l)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const o=new this(e,t);n(o.initPlugins().then(()=>o.ui.init(Sa(e)?e:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}function Sa(i){return zr(i)}class ud extends Co{constructor(e){super(e);const t=this.document;function n(o){return(r,a)=>{a.preventDefault();const l=a.dropRange?[a.dropRange]:null,d=new V(t,o);t.fire(d,{dataTransfer:a.dataTransfer,method:r.name,targetRanges:l,target:a.target}),d.stop.called&&a.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",o={dataTransfer:new Vg(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(o.dropRange=function(r,a){const l=a.target.ownerDocument,d=a.clientX,h=a.clientY;let p;return l.caretRangeFromPoint&&l.caretRangeFromPoint(d,h)?p=l.caretRangeFromPoint(d,h):a.rangeParent&&(p=l.createRange(),p.setStart(a.rangeParent,a.rangeOffset),p.collapse(!0)),p?r.domConverter.domRangeToView(p):null}(this.view,e)),this.fire(e.type,e,o)}}const fm=["figcaption","li"];function gm(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const n of i.getChildren()){const o=gm(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(fm.includes(t.name)||fm.includes(n.name)?e+=`
`:e+=`

 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(s,c){(function(u,f){s.exports=f(_3)})(window,function(u){return function(f){var g={};function k(b){if(g[b])return g[b].exports;var A=g[b]={i:b,l:!1,exports:{}};return f[b].call(A.exports,A,A.exports,k),A.l=!0,A.exports}return k.m=f,k.c=g,k.d=function(b,A,w){k.o(b,A)||Object.defineProperty(b,A,{enumerable:!0,get:w})},k.r=function(b){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},k.t=function(b,A){if(1&A&&(b=k(b)),8&A||4&A&&typeof b=="object"&&b&&b.__esModule)return b;var w=Object.create(null);if(k.r(w),Object.defineProperty(w,"default",{enumerable:!0,value:b}),2&A&&typeof b!="string")for(var C in b)k.d(w,C,function(x){return b[x]}.bind(null,C));return w},k.n=function(b){var A=b&&b.__esModule?function(){return b.default}:function(){return b};return k.d(A,"a",A),A},k.o=function(b,A){return Object.prototype.hasOwnProperty.call(b,A)},k.p="",k(k.s=3)}([function(f,g){f.exports=u},function(f,g,k){(function(b){var A=typeof b=="object"&&b&&b.Object===Object&&b;g.a=A}).call(this,k(2))},function(f,g){var k;k=function(){return this}();try{k=k||new Function("return this")()}catch{typeof window=="object"&&(k=window)}f.exports=k},function(f,g,k){k.r(g);var b=k(0),A=k.n(b),w=function(z){var te=typeof z;return z!=null&&(te=="object"||te=="function")},C=k(1),x=typeof self=="object"&&self&&self.Object===Object&&self,y=C.a||x||Function("return this")(),D=function(){return y.Date.now()},I=/\s/,j=function(z){for(var te=z.length;te--&&I.test(z.charAt(te)););return te},H=/^\s+/,ee=function(z){return z&&z.slice(0,j(z)+1).replace(H,"")},F=y.Symbol,O=Object.prototype,V=O.hasOwnProperty,G=O.toString,oe=F?F.toStringTag:void 0,ge=function(z){var te=V.call(z,oe),ie=z[oe];try{z[oe]=void 0;var ae=!0}catch{}var Te=G.call(z);return ae&&(te?z[oe]=ie:delete z[oe]),Te},Q=Object.prototype.toString,q=function(z){return Q.call(z)},S=F?F.toStringTag:void 0,Z=function(z){return z==null?z===void 0?"[object Undefined]":"[object Null]":S&&S in Object(z)?ge(z):q(z)},me=function(z){return z!=null&&typeof z=="object"},se=function(z){return typeof z=="symbol"||me(z)&&Z(z)=="[object Symbol]"},we=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,Ye=/^0o[0-7]+$/i,De=parseInt,ze=function(z){if(typeof z=="number")return z;if(se(z))return NaN;if(w(z)){var te=typeof z.valueOf=="function"?z.valueOf():z;z=w(te)?te+"":te}if(typeof z!="string")return z===0?z:+z;z=ee(z);var ie=ke.test(z);return ie||Ye.test(z)?De(z.slice(2),ie?2:8):we.test(z)?NaN:+z},Ne=Math.max,zt=Math.min,Be=function(z,te,ie){var ae,Te,Ve,ye,P,L,$=0,U=!1,J=!1,le=!0;if(typeof z!="function")throw new TypeError("Expected a function");function be(he){var Ce=ae,Ie=Te;return ae=Te=void 0,$=he,ye=z.apply(Ie,Ce)}function ce(he){return $=he,P=setTimeout(ne,te),U?be(he):ye}function fe(he){var Ce=he-L;return L===void 0||Ce>=te||Ce<0||J&&he-$>=Ve}function ne(){var he=D();if(fe(he))return Ae(he);P=setTimeout(ne,function(Ce){var Ie=te-(Ce-L);return J?zt(Ie,Ve-(Ce-$)):Ie}(he))}function Ae(he){return P=void 0,le&&ae?be(he):(ae=Te=void 0,ye)}function pe(){var he=D(),Ce=fe(he);if(ae=arguments,Te=this,L=he,Ce){if(P===void 0)return ce(L);if(J)return clearTimeout(P),P=setTimeout(ne,te),be(L)}return P===void 0&&(P=setTimeout(ne,te)),ye}return te=ze(te)||0,w(ie)&&(U=!!ie.leading,Ve=(J="maxWait"in ie)?Ne(ze(ie.maxWait)||0,te):Ve,le="trailing"in ie?!!ie.trailing:le),pe.cancel=function(){P!==void 0&&clearTimeout(P),$=0,ae=L=Te=P=void 0},pe.flush=function(){return P===void 0?ye:Ae(D())},pe},Pt={name:"ckeditor",created(){const{CKEDITOR_VERSION:z}=window;if(z){const[te]=z.split(".").map(Number);te<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(b.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const z=Object.assign({},this.config);this.modelValue&&(z.initialData=this.modelValue),this.editor.create(this.$el,z).then(te=>{this.instance=Object(b.markRaw)(te),this.setUpEditorEvents(),this.modelValue!==z.initialData&&te.setData(this.modelValue),this.disabled&&te.enableReadOnlyMode("Integration Sample"),this.$emit("ready",te)}).catch(te=>{console.error(te)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(z){this.instance&&z!==this.lastEditorData&&this.instance.setData(z)},disabled(z){z?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const z=this.instance,te=Be(ie=>{const ae=this.lastEditorData=z.getData();this.$emit("update:modelValue",ae,ie,z),this.$emit("input",ae,ie,z)},300,{leading:!0});z.model.document.on("change:data",te),z.editing.view.document.on("focus",ie=>{this.$emit("focus",ie,z)}),z.editing.view.document.on("blur",ie=>{this.$emit("blur",ie,z)})}}};const At=A.a?A.a.version:b.version,[_n]=At.split(".").map(z=>parseInt(z,10));if(_n<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Ln={install(z){z.component("ckeditor",Pt)},component:Pt};g.default=Ln}]).default})})(w3);const A3=rv(Nu),Ws=EC(n4);Ws.use(GN());Ws.use(f3);Ws.use(sc,cn);Ws.use(A3);Ws.mount("#app");export{wn as _,N as a,Gt as c,vt as o};