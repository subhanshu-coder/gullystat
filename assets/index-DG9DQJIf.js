(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var hh={exports:{}},Uo={};var $v;function RS(){if($v)return Uo;$v=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var e_;function CS(){return e_||(e_=1,hh.exports=RS()),hh.exports}var E=CS(),dh={exports:{}},ot={};var t_;function wS(){if(t_)return ot;t_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function _(P,Q,he){this.props=P,this.context=Q,this.refs=y,this.updater=he||b}_.prototype.isReactComponent={},_.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=_.prototype;function U(P,Q,he){this.props=P,this.context=Q,this.refs=y,this.updater=he||b}var N=U.prototype=new L;N.constructor=U,T(N,_.prototype),N.isPureReactComponent=!0;var I=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function w(P,Q,he){var Me=he.ref;return{$$typeof:r,type:P,key:Q,ref:Me!==void 0?Me:null,props:he}}function D(P,Q){return w(P.type,Q,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function J(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(he){return Q[he]})}var oe=/\/+/g;function pe(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):Q.toString(36)}function le(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(F,F):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,Q,he,Me,Ce){var ne=typeof P;(ne==="undefined"||ne==="boolean")&&(P=null);var fe=!1;if(P===null)fe=!0;else switch(ne){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(P.$$typeof){case r:case e:fe=!0;break;case v:return fe=P._init,B(fe(P._payload),Q,he,Me,Ce)}}if(fe)return Ce=Ce(P),fe=Me===""?"."+pe(P,0):Me,I(Ce)?(he="",fe!=null&&(he=fe.replace(oe,"$&/")+"/"),B(Ce,Q,he,"",function(Xe){return Xe})):Ce!=null&&(V(Ce)&&(Ce=D(Ce,he+(Ce.key==null||P&&P.key===Ce.key?"":(""+Ce.key).replace(oe,"$&/")+"/")+fe)),Q.push(Ce)),1;fe=0;var we=Me===""?".":Me+":";if(I(P))for(var Ie=0;Ie<P.length;Ie++)Me=P[Ie],ne=we+pe(Me,Ie),fe+=B(Me,Q,he,ne,Ce);else if(Ie=M(P),typeof Ie=="function")for(P=Ie.call(P),Ie=0;!(Me=P.next()).done;)Me=Me.value,ne=we+pe(Me,Ie++),fe+=B(Me,Q,he,ne,Ce);else if(ne==="object"){if(typeof P.then=="function")return B(le(P),Q,he,Me,Ce);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(P,Q,he){if(P==null)return P;var Me=[],Ce=0;return B(P,Me,"","",function(ne){return Q.call(he,ne,Ce++)}),Me}function q(P){if(P._status===-1){var Q=P._result;Q=Q(),Q.then(function(he){(P._status===0||P._status===-1)&&(P._status=1,P._result=he)},function(he){(P._status===0||P._status===-1)&&(P._status=2,P._result=he)}),P._status===-1&&(P._status=0,P._result=Q)}if(P._status===1)return P._result.default;throw P._result}var ye=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Te={map:K,forEach:function(P,Q,he){K(P,function(){Q.apply(this,arguments)},he)},count:function(P){var Q=0;return K(P,function(){Q++}),Q},toArray:function(P){return K(P,function(Q){return Q})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ot.Activity=g,ot.Children=Te,ot.Component=_,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=U,ot.StrictMode=s,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ot.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},ot.cache=function(P){return function(){return P.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(P,Q,he){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Me=T({},P.props),Ce=P.key;if(Q!=null)for(ne in Q.key!==void 0&&(Ce=""+Q.key),Q)!X.call(Q,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Q.ref===void 0||(Me[ne]=Q[ne]);var ne=arguments.length-2;if(ne===1)Me.children=he;else if(1<ne){for(var fe=Array(ne),we=0;we<ne;we++)fe[we]=arguments[we+2];Me.children=fe}return w(P.type,Ce,Me)},ot.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ot.createElement=function(P,Q,he){var Me,Ce={},ne=null;if(Q!=null)for(Me in Q.key!==void 0&&(ne=""+Q.key),Q)X.call(Q,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Ce[Me]=Q[Me]);var fe=arguments.length-2;if(fe===1)Ce.children=he;else if(1<fe){for(var we=Array(fe),Ie=0;Ie<fe;Ie++)we[Ie]=arguments[Ie+2];Ce.children=we}if(P&&P.defaultProps)for(Me in fe=P.defaultProps,fe)Ce[Me]===void 0&&(Ce[Me]=fe[Me]);return w(P,ne,Ce)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(P){return{$$typeof:d,render:P}},ot.isValidElement=V,ot.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:q}},ot.memo=function(P,Q){return{$$typeof:p,type:P,compare:Q===void 0?null:Q}},ot.startTransition=function(P){var Q=z.T,he={};z.T=he;try{var Me=P(),Ce=z.S;Ce!==null&&Ce(he,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(F,ye)}catch(ne){ye(ne)}finally{Q!==null&&he.types!==null&&(Q.types=he.types),z.T=Q}},ot.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ot.use=function(P){return z.H.use(P)},ot.useActionState=function(P,Q,he){return z.H.useActionState(P,Q,he)},ot.useCallback=function(P,Q){return z.H.useCallback(P,Q)},ot.useContext=function(P){return z.H.useContext(P)},ot.useDebugValue=function(){},ot.useDeferredValue=function(P,Q){return z.H.useDeferredValue(P,Q)},ot.useEffect=function(P,Q){return z.H.useEffect(P,Q)},ot.useEffectEvent=function(P){return z.H.useEffectEvent(P)},ot.useId=function(){return z.H.useId()},ot.useImperativeHandle=function(P,Q,he){return z.H.useImperativeHandle(P,Q,he)},ot.useInsertionEffect=function(P,Q){return z.H.useInsertionEffect(P,Q)},ot.useLayoutEffect=function(P,Q){return z.H.useLayoutEffect(P,Q)},ot.useMemo=function(P,Q){return z.H.useMemo(P,Q)},ot.useOptimistic=function(P,Q){return z.H.useOptimistic(P,Q)},ot.useReducer=function(P,Q,he){return z.H.useReducer(P,Q,he)},ot.useRef=function(P){return z.H.useRef(P)},ot.useState=function(P){return z.H.useState(P)},ot.useSyncExternalStore=function(P,Q,he){return z.H.useSyncExternalStore(P,Q,he)},ot.useTransition=function(){return z.H.useTransition()},ot.version="19.2.4",ot}var n_;function Yd(){return n_||(n_=1,dh.exports=wS()),dh.exports}var ue=Yd(),ph={exports:{}},Lo={},mh={exports:{}},gh={};var i_;function DS(){return i_||(i_=1,(function(r){function e(B,K){var q=B.length;B.push(K);e:for(;0<q;){var ye=q-1>>>1,Te=B[ye];if(0<l(Te,K))B[ye]=K,B[q]=Te,q=ye;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var K=B[0],q=B.pop();if(q!==K){B[0]=q;e:for(var ye=0,Te=B.length,P=Te>>>1;ye<P;){var Q=2*(ye+1)-1,he=B[Q],Me=Q+1,Ce=B[Me];if(0>l(he,q))Me<Te&&0>l(Ce,he)?(B[ye]=Ce,B[Me]=q,ye=Me):(B[ye]=he,B[Q]=q,ye=Q);else if(Me<Te&&0>l(Ce,q))B[ye]=Ce,B[Me]=q,ye=Me;else break e}}return K}function l(B,K){var q=B.sortIndex-K.sortIndex;return q!==0?q:B.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,M=!1,b=!1,T=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=B)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function I(B){if(T=!1,N(B),!b)if(i(m)!==null)b=!0,F||(F=!0,J());else{var K=i(p);K!==null&&le(I,K.startTime-B)}}var F=!1,z=-1,X=5,w=-1;function D(){return y?!0:!(r.unstable_now()-w<X)}function V(){if(y=!1,F){var B=r.unstable_now();w=B;var K=!0;try{e:{b=!1,T&&(T=!1,L(z),z=-1),M=!0;var q=x;try{t:{for(N(B),g=i(m);g!==null&&!(g.expirationTime>B&&D());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,x=g.priorityLevel;var Te=ye(g.expirationTime<=B);if(B=r.unstable_now(),typeof Te=="function"){g.callback=Te,N(B),K=!0;break t}g===i(m)&&s(m),N(B)}else s(m);g=i(m)}if(g!==null)K=!0;else{var P=i(p);P!==null&&le(I,P.startTime-B),K=!1}}break e}finally{g=null,x=q,M=!1}K=void 0}}finally{K?J():F=!1}}}var J;if(typeof U=="function")J=function(){U(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,pe=oe.port2;oe.port1.onmessage=V,J=function(){pe.postMessage(null)}}else J=function(){_(V,0)};function le(B,K){z=_(function(){B(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(B){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var q=x;x=K;try{return B()}finally{x=q}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=x;x=B;try{return K()}finally{x=q}},r.unstable_scheduleCallback=function(B,K,q){var ye=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ye+q:ye):q=ye,B){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=q+Te,B={id:v++,callback:K,priorityLevel:B,startTime:q,expirationTime:Te,sortIndex:-1},q>ye?(B.sortIndex=q,e(p,B),i(m)===null&&B===i(p)&&(T?(L(z),z=-1):T=!0,le(I,q-ye))):(B.sortIndex=Te,e(m,B),b||M||(b=!0,F||(F=!0,J()))),B},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(B){var K=x;return function(){var q=x;x=K;try{return B.apply(this,arguments)}finally{x=q}}}})(gh)),gh}var a_;function NS(){return a_||(a_=1,mh.exports=DS()),mh.exports}var vh={exports:{}},wn={};var s_;function US(){if(s_)return wn;s_=1;var r=Yd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},wn.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.2.4",wn}var r_;function LS(){if(r_)return vh.exports;r_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vh.exports=US(),vh.exports}var o_;function OS(){if(o_)return Lo;o_=1;var r=NS(),e=Yd(),i=LS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=h;break}if(R===o){S=!0,o=u,a=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===a){S=!0,a=h,o=u;break}if(R===o){S=!0,o=h,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var le=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ye=[],Te=-1;function P(t){return{current:t}}function Q(t){0>Te||(t.current=ye[Te],ye[Te]=null,Te--)}function he(t,n){Te++,ye[Te]=t.current,t.current=n}var Me=P(null),Ce=P(null),ne=P(null),fe=P(null);function we(t,n){switch(he(ne,n),he(Ce,t),he(Me,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Mv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Mv(n),t=Ev(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Me),he(Me,t)}function Ie(){Q(Me),Q(Ce),Q(ne)}function Xe(t){t.memoizedState!==null&&he(fe,t);var n=Me.current,a=Ev(n,t.type);n!==a&&(he(Ce,t),he(Me,a))}function lt(t){Ce.current===t&&(Q(Me),Q(Ce)),fe.current===t&&(Q(fe),Co._currentValue=q)}var $t,G;function mt(t){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",G=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+t+G}var at=!1;function tt(t,n){if(!t||at)return"";at=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ce){var ae=ce}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ce){ae=ce}t.call(_e.prototype)}}else{try{throw Error()}catch(ce){ae=ce}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ce){if(ce&&ae&&typeof ce.stack=="string")return[ce.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var H=S.split(`
`),te=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===te.length)for(o=H.length-1,u=te.length-1;1<=o&&0<=u&&H[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==te[u]){var me=`
`+H[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{at=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mt(a):""}function Ve(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return mt("Activity");default:return""}}function Vt(t){try{var n="",a=null;do n+=Ve(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var We=Object.prototype.hasOwnProperty,rt=r.unstable_scheduleCallback,en=r.unstable_cancelCallback,Zt=r.unstable_shouldYield,O=r.unstable_requestPaint,A=r.unstable_now,ie=r.unstable_getCurrentPriorityLevel,ge=r.unstable_ImmediatePriority,Ee=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,De=r.unstable_IdlePriority,Ye=r.log,Ze=r.unstable_setDisableYieldValue,Ae=null,Ne=null;function Qe(t){if(typeof Ye=="function"&&Ze(t),Ne&&typeof Ne.setStrictMode=="function")try{Ne.setStrictMode(Ae,t)}catch{}}var Be=Math.clz32?Math.clz32:j,Le=Math.log,ct=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Le(t)/ct|0)|0}var Re=256,Ue=262144,Fe=4194304;function be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=be(o):(S&=R,S!==0?u=be(S):a||(a=R&~t,a!==0&&(u=be(a))))):(R=o&~h,R!==0?u=be(R):S!==0?u=be(S):a||(a=o&~t,a!==0&&(u=be(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function At(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ln(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function si(t,n,a,o,u,h){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=S&~a;0<a;){var me=31-Be(a),_e=1<<me;R[me]=0,H[me]=-1;var ae=te[me];if(ae!==null)for(te[me]=null,me=0;me<ae.length;me++){var ce=ae[me];ce!==null&&(ce.lane&=-536870913)}a&=~_e}o!==0&&Gr(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~n))}function Gr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ri(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Us(t,n){var a=n&-n;return a=(a&42)!==0?1:Ls(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ls(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Os(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ja(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Wv(t.type))}function Vr(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var qn=Math.random().toString(36).slice(2),on="__reactFiber$"+qn,Sn="__reactProps$"+qn,ga="__reactContainer$"+qn,kr="__reactEvents$"+qn,su="__reactListeners$"+qn,ru="__reactHandles$"+qn,sl="__reactResources$"+qn,$a="__reactMarker$"+qn;function C(t){delete t[on],delete t[Sn],delete t[kr],delete t[su],delete t[ru]}function W(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ga]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Dv(t);t!==null;){if(a=t[on])return a;t=Dv(t)}return n}t=a,a=t.parentNode}return null}function se(t){if(t=t[on]||t[ga]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function re(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Z(t){var n=t[sl];return n||(n=t[sl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Se(t){t[$a]=!0}var Oe=new Set,ke={};function ze(t,n){Je(t,n),Je(t+"Capture",n)}function Je(t,n){for(ke[t]=n,t=0;t<n.length;t++)Oe.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},pt={};function Ut(t){return We.call(pt,t)?!0:We.call($e,t)?!1:it.test(t)?pt[t]=!0:($e[t]=!0,!1)}function kt(t,n,a){if(Ut(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Lt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function gt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Mn(t){if(!t._valueTracker){var n=Xt(t)?"checked":"value";t._valueTracker=Rt(t,n,""+t[n])}}function Vi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Xt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var es=/[\n"\\]/g;function xt(t){return t.replace(es,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(t,n,a,o,u,h,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+je(n)):t.value!==""+je(n)&&(t.value=""+je(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?dn(t,S,je(n)):a!=null?dn(t,S,je(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+je(R):t.removeAttribute("name")}function On(t,n,a,o,u,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Mn(t);return}a=a!=null?""+je(a):"",n=n!=null?""+je(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Mn(t)}function dn(t,n,a){n==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function an(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ps(t,n,a){if(n!=null&&(n=""+je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+je(a):""}function Ci(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(le(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=je(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Mn(t)}function zs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Mx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function yp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&xp(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&xp(t,h,n[h])}function ou(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ex=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(t){return bx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var lu=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bs=null,Is=null;function Sp(t){var n=se(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Cn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Sn]||null;if(!u)throw Error(s(90));Cn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Vi(o)}break e;case"textarea":Ps(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&an(t,!!a.multiple,n,!1)}}}var uu=!1;function Mp(t,n,a){if(uu)return t(n,a);uu=!0;try{var o=t(n);return o}finally{if(uu=!1,(Bs!==null||Is!==null)&&(ql(),Bs&&(n=Bs,t=Is,Is=Bs=null,Sp(n),t)))for(n=0;n<t.length;n++)Sp(t[n])}}function jr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(ji)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){fu=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{fu=!1}var va=null,hu=null,ol=null;function Ep(){if(ol)return ol;var t,n=hu,a=n.length,o,u="value"in va?va.value:va.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return ol=u.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function bp(){return!1}function Bn(t){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cl:bp,this.isPropagationStopped=bp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Bn(ts),Wr=g({},ts,{view:0,detail:0}),Tx=Bn(Wr),du,pu,qr,fl=g({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(du=t.screenX-qr.screenX,pu=t.screenY-qr.screenY):pu=du=0,qr=t),du)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),Tp=Bn(fl),Ax=g({},fl,{dataTransfer:0}),Rx=Bn(Ax),Cx=g({},Wr,{relatedTarget:0}),mu=Bn(Cx),wx=g({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=Bn(wx),Nx=g({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ux=Bn(Nx),Lx=g({},ts,{data:0}),Ap=Bn(Lx),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=zx[t])?!!n[t]:!1}function gu(){return Bx}var Ix=g({},Wr,{key:function(t){if(t.key){var n=Ox[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fx=Bn(Ix),Hx=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=Bn(Hx),Gx=g({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Vx=Bn(Gx),kx=g({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=Bn(kx),Xx=g({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wx=Bn(Xx),qx=g({},ts,{newState:0,oldState:0}),Yx=Bn(qx),Zx=[9,13,27,32],vu=ji&&"CompositionEvent"in window,Yr=null;ji&&"documentMode"in document&&(Yr=document.documentMode);var Kx=ji&&"TextEvent"in window&&!Yr,Cp=ji&&(!vu||Yr&&8<Yr&&11>=Yr),wp=" ",Dp=!1;function Np(t,n){switch(t){case"keyup":return Zx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function Qx(t,n){switch(t){case"compositionend":return Up(n);case"keypress":return n.which!==32?null:(Dp=!0,wp);case"textInput":return t=n.data,t===wp&&Dp?null:t;default:return null}}function Jx(t,n){if(Fs)return t==="compositionend"||!vu&&Np(t,n)?(t=Ep(),ol=hu=va=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$x[t.type]:n==="textarea"}function Op(t,n,a,o){Bs?Is?Is.push(o):Is=[o]:Bs=o,n=ec(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Zr=null,Kr=null;function ey(t){gv(t,0)}function hl(t){var n=re(t);if(Vi(n))return t}function Pp(t,n){if(t==="change")return n}var zp=!1;if(ji){var _u;if(ji){var xu="oninput"in document;if(!xu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),xu=typeof Bp.oninput=="function"}_u=xu}else _u=!1;zp=_u&&(!document.documentMode||9<document.documentMode)}function Ip(){Zr&&(Zr.detachEvent("onpropertychange",Fp),Kr=Zr=null)}function Fp(t){if(t.propertyName==="value"&&hl(Kr)){var n=[];Op(n,Kr,t,cu(t)),Mp(ey,n)}}function ty(t,n,a){t==="focusin"?(Ip(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",Fp)):t==="focusout"&&Ip()}function ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(Kr)}function iy(t,n){if(t==="click")return hl(n)}function ay(t,n){if(t==="input"||t==="change")return hl(n)}function sy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:sy;function Qr(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!We.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,n){var a=Hp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_n(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_n(t.document)}return n}function yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ry=ji&&"documentMode"in document&&11>=document.documentMode,Hs=null,Su=null,Jr=null,Mu=!1;function jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Hs==null||Hs!==_n(o)||(o=Hs,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jr&&Qr(Jr,o)||(Jr=o,o=ec(Su,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Hs)))}function ns(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gs={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},Eu={},Xp={};ji&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function is(t){if(Eu[t])return Eu[t];if(!Gs[t])return t;var n=Gs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xp)return Eu[t]=n[a];return t}var Wp=is("animationend"),qp=is("animationiteration"),Yp=is("animationstart"),oy=is("transitionrun"),ly=is("transitionstart"),cy=is("transitioncancel"),Zp=is("transitionend"),Kp=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function vi(t,n){Kp.set(t,n),ze(n,[t])}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Vs=0,Tu=0;function pl(){for(var t=Vs,n=Tu=Vs=0;n<t;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var h=ri[n];if(ri[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&Qp(a,u,h)}}function ml(t,n,a,o){ri[Vs++]=t,ri[Vs++]=n,ri[Vs++]=a,ri[Vs++]=o,Tu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Au(t,n,a,o){return ml(t,n,a,o),gl(t)}function as(t,n){return ml(t,null,null,n),gl(t)}function Qp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Be(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function gl(t){if(50<So)throw So=0,zf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ks={};function uy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new uy(t,n,a,o)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function vl(t,n,a,o,u,h){var S=0;if(o=t,typeof t=="function")Ru(t)&&(S=1);else if(typeof t=="string")S=mS(t,a,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Zn(31,a,n,u),t.elementType=w,t.lanes=h,t;case T:return ss(a.children,u,h,n);case y:S=8,u|=24;break;case _:return t=Zn(12,a,n,u|2),t.elementType=_,t.lanes=h,t;case I:return t=Zn(13,a,n,u),t.elementType=I,t.lanes=h,t;case F:return t=Zn(19,a,n,u),t.elementType=F,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:S=10;break e;case L:S=9;break e;case N:S=11;break e;case z:S=14;break e;case X:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Zn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function ss(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function Cu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function $p(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function wu(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var em=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=em.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Vt(n)},em.set(t,n),n)}return{value:t,source:n,stack:Vt(n)}}var js=[],Xs=0,_l=null,$r=0,li=[],ci=0,_a=null,wi=1,Di="";function Wi(t,n){js[Xs++]=$r,js[Xs++]=_l,_l=t,$r=n}function tm(t,n,a){li[ci++]=wi,li[ci++]=Di,li[ci++]=_a,_a=t;var o=wi;t=Di;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var h=32-Be(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,wi=1<<32-Be(n)+u|a<<u|o,Di=h+t}else wi=1<<h|a<<u|o,Di=t}function Du(t){t.return!==null&&(Wi(t,1),tm(t,1,0))}function Nu(t){for(;t===_l;)_l=js[--Xs],js[Xs]=null,$r=js[--Xs],js[Xs]=null;for(;t===_a;)_a=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null,wi=li[--ci],li[ci]=null}function nm(t,n){li[ci++]=wi,li[ci++]=Di,li[ci++]=_a,wi=n.id,Di=n.overflow,_a=t}var En=null,Wt=null,Mt=!1,xa=null,ui=!1,Uu=Error(s(519));function ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(oi(n,t)),Uu}function im(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[Sn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)_t(Eo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ci(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||yv(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||ya(t,!0)}function am(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:En=En.return}}function Ws(t){if(t!==En)return!1;if(!Mt)return am(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Qf(t.type,t.memoizedProps)),a=!a),a&&Wt&&ya(t),am(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Wt=wv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Wt=wv(t)}else n===27?(n=Wt,Oa(t.type)?(t=nh,nh=null,Wt=t):Wt=n):Wt=En?hi(t.stateNode.nextSibling):null;return!0}function rs(){Wt=En=null,Mt=!1}function Lu(){var t=xa;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),xa=null),t}function eo(t){xa===null?xa=[t]:xa.push(t)}var Ou=P(null),os=null,qi=null;function Sa(t,n,a){he(Ou,n._currentValue),n._currentValue=a}function Yi(t){t._currentValue=Ou.current,Q(Ou)}function Pu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function zu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),Pu(h.return,a,t),o||(S=null);break e}h=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Pu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function qs(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;Yn(u.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(u===fe.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&zu(n,t,a,o),n.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ls(t){os=t,qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return sm(os,t)}function yl(t,n){return os===null&&ls(t),sm(t,n)}function sm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(t===null)throw Error(s(308));qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else qi=qi.next=n;return a}var fy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hy=r.unstable_scheduleCallback,dy=r.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new fy,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&hy(dy,function(){t.controller.abort()})}var no=null,Iu=0,Ys=0,Zs=null;function py(t,n){if(no===null){var a=no=[];Iu=0,Ys=Vf(),Zs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then(rm,rm),n}function rm(){if(--Iu===0&&no!==null){Zs!==null&&(Zs.status="fulfilled");var t=no;no=null,Ys=0,Zs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function my(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var om=B.S;B.S=function(t,n){jg=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&py(t,n),om!==null&&om(t,n)};var cs=P(null);function Fu(){var t=cs.current;return t!==null?t:jt.pooledCache}function Sl(t,n){n===null?he(cs,cs.current):he(cs,n.pool)}function lm(){var t=Fu();return t===null?null:{parent:ln._currentValue,pool:t}}var Ks=Error(s(460)),Hu=Error(s(474)),Ml=Error(s(542)),El={then:function(){}};function cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function um(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hm(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hm(t),t}throw fs=n,Ks}}function us(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fs=a,Ks):a}}var fs=null;function fm(){if(fs===null)throw Error(s(459));var t=fs;return fs=null,t}function hm(t){if(t===Ks||t===Ml)throw Error(s(483))}var Qs=null,io=0;function bl(t){var n=io;return io+=1,Qs===null&&(Qs=[]),um(Qs,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function dm(t){function n(Y,k){if(t){var ee=Y.deletions;ee===null?(Y.deletions=[k],Y.flags|=16):ee.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Xi(Y,k),Y.index=0,Y.sibling=null,Y}function h(Y,k,ee){return Y.index=ee,t?(ee=Y.alternate,ee!==null?(ee=ee.index,ee<k?(Y.flags|=67108866,k):ee):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function S(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,k,ee,ve){return k===null||k.tag!==6?(k=Cu(ee,Y.mode,ve),k.return=Y,k):(k=u(k,ee),k.return=Y,k)}function H(Y,k,ee,ve){var et=ee.type;return et===T?me(Y,k,ee.props.children,ve,ee.key):k!==null&&(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===X&&us(et)===k.type)?(k=u(k,ee.props),ao(k,ee),k.return=Y,k):(k=vl(ee.type,ee.key,ee.props,null,Y.mode,ve),ao(k,ee),k.return=Y,k)}function te(Y,k,ee,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=wu(ee,Y.mode,ve),k.return=Y,k):(k=u(k,ee.children||[]),k.return=Y,k)}function me(Y,k,ee,ve,et){return k===null||k.tag!==7?(k=ss(ee,Y.mode,ve,et),k.return=Y,k):(k=u(k,ee),k.return=Y,k)}function _e(Y,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Cu(""+k,Y.mode,ee),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return ee=vl(k.type,k.key,k.props,null,Y.mode,ee),ao(ee,k),ee.return=Y,ee;case b:return k=wu(k,Y.mode,ee),k.return=Y,k;case X:return k=us(k),_e(Y,k,ee)}if(le(k)||J(k))return k=ss(k,Y.mode,ee,null),k.return=Y,k;if(typeof k.then=="function")return _e(Y,bl(k),ee);if(k.$$typeof===U)return _e(Y,yl(Y,k),ee);Tl(Y,k)}return null}function ae(Y,k,ee,ve){var et=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return et!==null?null:R(Y,k,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===et?H(Y,k,ee,ve):null;case b:return ee.key===et?te(Y,k,ee,ve):null;case X:return ee=us(ee),ae(Y,k,ee,ve)}if(le(ee)||J(ee))return et!==null?null:me(Y,k,ee,ve,null);if(typeof ee.then=="function")return ae(Y,k,bl(ee),ve);if(ee.$$typeof===U)return ae(Y,k,yl(Y,ee),ve);Tl(Y,ee)}return null}function ce(Y,k,ee,ve,et){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Y=Y.get(ee)||null,R(k,Y,""+ve,et);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return Y=Y.get(ve.key===null?ee:ve.key)||null,H(k,Y,ve,et);case b:return Y=Y.get(ve.key===null?ee:ve.key)||null,te(k,Y,ve,et);case X:return ve=us(ve),ce(Y,k,ee,ve,et)}if(le(ve)||J(ve))return Y=Y.get(ee)||null,me(k,Y,ve,et,null);if(typeof ve.then=="function")return ce(Y,k,ee,bl(ve),et);if(ve.$$typeof===U)return ce(Y,k,ee,yl(k,ve),et);Tl(k,ve)}return null}function Ge(Y,k,ee,ve){for(var et=null,Ct=null,qe=k,ft=k=0,St=null;qe!==null&&ft<ee.length;ft++){qe.index>ft?(St=qe,qe=null):St=qe.sibling;var wt=ae(Y,qe,ee[ft],ve);if(wt===null){qe===null&&(qe=St);break}t&&qe&&wt.alternate===null&&n(Y,qe),k=h(wt,k,ft),Ct===null?et=wt:Ct.sibling=wt,Ct=wt,qe=St}if(ft===ee.length)return a(Y,qe),Mt&&Wi(Y,ft),et;if(qe===null){for(;ft<ee.length;ft++)qe=_e(Y,ee[ft],ve),qe!==null&&(k=h(qe,k,ft),Ct===null?et=qe:Ct.sibling=qe,Ct=qe);return Mt&&Wi(Y,ft),et}for(qe=o(qe);ft<ee.length;ft++)St=ce(qe,Y,ft,ee[ft],ve),St!==null&&(t&&St.alternate!==null&&qe.delete(St.key===null?ft:St.key),k=h(St,k,ft),Ct===null?et=St:Ct.sibling=St,Ct=St);return t&&qe.forEach(function(Fa){return n(Y,Fa)}),Mt&&Wi(Y,ft),et}function nt(Y,k,ee,ve){if(ee==null)throw Error(s(151));for(var et=null,Ct=null,qe=k,ft=k=0,St=null,wt=ee.next();qe!==null&&!wt.done;ft++,wt=ee.next()){qe.index>ft?(St=qe,qe=null):St=qe.sibling;var Fa=ae(Y,qe,wt.value,ve);if(Fa===null){qe===null&&(qe=St);break}t&&qe&&Fa.alternate===null&&n(Y,qe),k=h(Fa,k,ft),Ct===null?et=Fa:Ct.sibling=Fa,Ct=Fa,qe=St}if(wt.done)return a(Y,qe),Mt&&Wi(Y,ft),et;if(qe===null){for(;!wt.done;ft++,wt=ee.next())wt=_e(Y,wt.value,ve),wt!==null&&(k=h(wt,k,ft),Ct===null?et=wt:Ct.sibling=wt,Ct=wt);return Mt&&Wi(Y,ft),et}for(qe=o(qe);!wt.done;ft++,wt=ee.next())wt=ce(qe,Y,ft,wt.value,ve),wt!==null&&(t&&wt.alternate!==null&&qe.delete(wt.key===null?ft:wt.key),k=h(wt,k,ft),Ct===null?et=wt:Ct.sibling=wt,Ct=wt);return t&&qe.forEach(function(AS){return n(Y,AS)}),Mt&&Wi(Y,ft),et}function Ft(Y,k,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===T&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var et=ee.key;k!==null;){if(k.key===et){if(et=ee.type,et===T){if(k.tag===7){a(Y,k.sibling),ve=u(k,ee.props.children),ve.return=Y,Y=ve;break e}}else if(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===X&&us(et)===k.type){a(Y,k.sibling),ve=u(k,ee.props),ao(ve,ee),ve.return=Y,Y=ve;break e}a(Y,k);break}else n(Y,k);k=k.sibling}ee.type===T?(ve=ss(ee.props.children,Y.mode,ve,ee.key),ve.return=Y,Y=ve):(ve=vl(ee.type,ee.key,ee.props,null,Y.mode,ve),ao(ve,ee),ve.return=Y,Y=ve)}return S(Y);case b:e:{for(et=ee.key;k!==null;){if(k.key===et)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){a(Y,k.sibling),ve=u(k,ee.children||[]),ve.return=Y,Y=ve;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}ve=wu(ee,Y.mode,ve),ve.return=Y,Y=ve}return S(Y);case X:return ee=us(ee),Ft(Y,k,ee,ve)}if(le(ee))return Ge(Y,k,ee,ve);if(J(ee)){if(et=J(ee),typeof et!="function")throw Error(s(150));return ee=et.call(ee),nt(Y,k,ee,ve)}if(typeof ee.then=="function")return Ft(Y,k,bl(ee),ve);if(ee.$$typeof===U)return Ft(Y,k,yl(Y,ee),ve);Tl(Y,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(a(Y,k.sibling),ve=u(k,ee),ve.return=Y,Y=ve):(a(Y,k),ve=Cu(ee,Y.mode,ve),ve.return=Y,Y=ve),S(Y)):a(Y,k)}return function(Y,k,ee,ve){try{io=0;var et=Ft(Y,k,ee,ve);return Qs=null,et}catch(qe){if(qe===Ks||qe===Ml)throw qe;var Ct=Zn(29,qe,null,Y.mode);return Ct.lanes=ve,Ct.return=Y,Ct}}}var hs=dm(!0),pm=dm(!1),Ma=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gl(t),Qp(t,null,a),n}return ml(t,o,n,a),gl(t)}function so(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ri(t,a)}}function ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ju=!1;function ro(){if(ju){var t=Zs;if(t!==null)throw t}}function oo(t,n,a,o){ju=!1;var u=t.updateQueue;Ma=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,te=H.next;H.next=null,S===null?h=te:S.next=te,S=H;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==S&&(R===null?me.firstBaseUpdate=te:R.next=te,me.lastBaseUpdate=H))}if(h!==null){var _e=u.baseState;S=0,me=te=H=null,R=h;do{var ae=R.lane&-536870913,ce=ae!==R.lane;if(ce?(yt&ae)===ae:(o&ae)===ae){ae!==0&&ae===Ys&&(ju=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ge=t,nt=R;ae=n;var Ft=a;switch(nt.tag){case 1:if(Ge=nt.payload,typeof Ge=="function"){_e=Ge.call(Ft,_e,ae);break e}_e=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=nt.payload,ae=typeof Ge=="function"?Ge.call(Ft,_e,ae):Ge,ae==null)break e;_e=g({},_e,ae);break e;case 2:Ma=!0}}ae=R.callback,ae!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[ae]:ce.push(ae))}else ce={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(te=me=ce,H=_e):me=me.next=ce,S|=ae;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);me===null&&(H=_e),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=me,h===null&&(u.shared.lanes=0),wa|=S,t.lanes=S,t.memoizedState=_e}}function mm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function gm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)mm(a[t],n)}var Js=P(null),Al=P(0);function vm(t,n){t=ia,he(Al,t),he(Js,n),ia=t|n.baseLanes}function Xu(){he(Al,ia),he(Js,Js.current)}function Wu(){ia=Al.current,Q(Js),Q(Al)}var Kn=P(null),fi=null;function Ta(t){var n=t.alternate;he(sn,sn.current&1),he(Kn,t),fi===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(fi=t)}function qu(t){he(sn,sn.current),he(Kn,t),fi===null&&(fi=t)}function _m(t){t.tag===22?(he(sn,sn.current),he(Kn,t),fi===null&&(fi=t)):Aa()}function Aa(){he(sn,sn.current),he(Kn,Kn.current)}function Qn(t){Q(Kn),fi===t&&(fi=null),Q(sn)}var sn=P(0);function Rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||eh(a)||th(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,ut=null,Bt=null,cn=null,Cl=!1,$s=!1,ds=!1,wl=0,lo=0,er=null,gy=0;function tn(){throw Error(s(321))}function Yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Zu(t,n,a,o,u,h){return Zi=h,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?tg:ff,ds=!1,h=a(o,u),ds=!1,$s&&(h=ym(n,a,o,u)),xm(t),h}function xm(t){B.H=fo;var n=Bt!==null&&Bt.next!==null;if(Zi=0,cn=Bt=ut=null,Cl=!1,lo=0,er=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&xl(t)&&(un=!0))}function ym(t,n,a,o){ut=t;var u=0;do{if($s&&(er=null),lo=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,cn=Bt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=ng,h=n(a,o)}while($s);return h}function vy(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(ut.flags|=1024),n}function Ku(){var t=wl!==0;return wl=0,t}function Qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ju(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}Zi=0,cn=Bt=ut=null,$s=!1,lo=wl=0,er=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ut.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(Bt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=cn===null?ut.memoizedState:cn.next;if(n!==null)cn=n,Bt=t;else{if(t===null)throw ut.alternate===null?Error(s(467)):Error(s(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},cn===null?ut.memoizedState=cn=t:cn=cn.next=t}return cn}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,er===null&&(er=[]),t=um(er,t,n),n=ut,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?tg:ff),t}function Nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===U)return bn(t)}throw Error(s(438,String(t)))}function $u(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=rn();return ef(n,Bt,t)}function ef(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var R=S=null,H=null,te=n,me=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(yt&_e)===_e:(Zi&_e)===_e){var ae=te.revertLane;if(ae===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===Ys&&(me=!0);else if((Zi&ae)===ae){te=te.next,ae===Ys&&(me=!0);continue}else _e={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=_e,S=h):H=H.next=_e,ut.lanes|=ae,wa|=ae;_e=te.action,ds&&a(h,_e),h=te.hasEagerState?te.eagerState:a(h,_e)}else ae={lane:_e,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=ae,S=h):H=H.next=ae,ut.lanes|=_e,wa|=_e;te=te.next}while(te!==null&&te!==n);if(H===null?S=h:H.next=R,!Yn(h,t.memoizedState)&&(un=!0,me&&(a=Zs,a!==null)))throw a;t.memoizedState=h,t.baseState=S,t.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function tf(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=t(h,S.action),S=S.next;while(S!==u);Yn(h,n.memoizedState)||(un=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Sm(t,n,a){var o=ut,u=rn(),h=Mt;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Yn((Bt||u).memoizedState,a);if(S&&(u.memoizedState=a,un=!0),u=u.queue,sf(bm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,tr(9,{destroy:void 0},Em.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));h||(Zi&127)!==0||Mm(o,n,a)}return a}function Mm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Dl(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Em(t,n,a,o){n.value=a,n.getSnapshot=o,Tm(n)&&Am(t)}function bm(t,n,a){return a(function(){Tm(n)&&Am(t)})}function Tm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Am(t){var n=as(t,2);n!==null&&Vn(n,t,2)}function nf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),ds){Qe(!0);try{a()}finally{Qe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function Rm(t,n,a,o){return t.baseState=a,ef(t,Bt,typeof o=="function"?o:Ki)}function _y(t,n,a,o,u){if(Pl(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Cm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Cm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=B.T,S={};B.T=S;try{var R=a(u,o),H=B.S;H!==null&&H(S,R),wm(t,n,R)}catch(te){af(t,n,te)}finally{h!==null&&S.types!==null&&(h.types=S.types),B.T=h}}else try{h=a(u,o),wm(t,n,h)}catch(te){af(t,n,te)}}function wm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Dm(t,n,o)},function(o){return af(t,n,o)}):Dm(t,n,a)}function Dm(t,n,a){n.status="fulfilled",n.value=a,Nm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Cm(t,a)))}function af(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==o)}t.action=null}function Nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Um(t,n){return n}function Lm(t,n){if(Mt){var a=jt.formState;if(a!==null){e:{var o=ut;if(Mt){if(Wt){t:{for(var u=Wt,h=ui;u.nodeType!==8;){if(!h){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Wt=hi(u.nextSibling),o=u.data==="F!";break e}}ya(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:n},a.queue=o,a=Jm.bind(null,ut,o),o.dispatch=a,o=nf(!1),h=uf.bind(null,ut,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=_y.bind(null,ut,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Om(t){var n=rn();return Pm(n,Bt,t)}function Pm(t,n,a){if(n=ef(t,n,Um)[0],t=Ul(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(S){throw S===Ks?Ml:S}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,tr(9,{destroy:void 0},xy.bind(null,u,a),null)),[o,h,t]}function xy(t,n){t.action=n}function zm(t){var n=rn(),a=Bt;if(a!==null)return Pm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function tr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Dl(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Bm(){return rn().memoizedState}function Ll(t,n,a,o){var u=Pn();ut.flags|=t,u.memoizedState=tr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ol(t,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;Bt!==null&&o!==null&&Yu(o,Bt.memoizedState.deps)?u.memoizedState=tr(n,h,a,o):(ut.flags|=t,u.memoizedState=tr(1|n,h,a,o))}function Im(t,n){Ll(8390656,8,t,n)}function sf(t,n){Ol(2048,8,t,n)}function yy(t){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Dl(),ut.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Fm(t){var n=rn().memoizedState;return yy({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Hm(t,n){return Ol(4,2,t,n)}function Gm(t,n){return Ol(4,4,t,n)}function Vm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function km(t,n,a){a=a!=null?a.concat([t]):null,Ol(4,4,Vm.bind(null,n,t),a)}function rf(){}function jm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Xm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=t(),ds){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o}function of(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Wg(),ut.lanes|=t,wa|=t,a)}function Wm(t,n,a,o){return Yn(a,n)?a:Js.current!==null?(t=of(t,a,o),Yn(t,n)||(un=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(yt&261930)===0?(un=!0,t.memoizedState=a):(t=Wg(),ut.lanes|=t,wa|=t,n)}function qm(t,n,a,o,u){var h=K.p;K.p=h!==0&&8>h?h:8;var S=B.T,R={};B.T=R,uf(t,!1,n,a);try{var H=u(),te=B.S;if(te!==null&&te(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=my(H,o);uo(t,n,me,ei(t))}else uo(t,n,o,ei(t))}catch(_e){uo(t,n,{then:function(){},status:"rejected",reason:_e},ei())}finally{K.p=h,S!==null&&R.types!==null&&(S.types=R.types),B.T=S}}function Sy(){}function lf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Ym(t).queue;qm(t,u,n,q,a===null?Sy:function(){return Zm(t),a(o)})}function Ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zm(t){var n=Ym(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},ei())}function cf(){return bn(Co)}function Km(){return rn().memoizedState}function Qm(){return rn().memoizedState}function My(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Ea(a);var o=ba(n,t,a);o!==null&&(Vn(o,n,a),so(o,n,a)),n={cache:Bu()},t.payload=n;return}n=n.return}}function Ey(t,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?$m(n,a):(a=Au(t,n,a,o),a!==null&&(Vn(a,t,o),eg(a,n,o)))}function Jm(t,n,a){var o=ei();uo(t,n,a,o)}function uo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))$m(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,R=h(S,a);if(u.hasEagerState=!0,u.eagerState=R,Yn(R,S))return ml(t,n,u,0),jt===null&&pl(),!1}catch{}if(a=Au(t,n,u,o),a!==null)return Vn(a,t,o),eg(a,n,o),!0}return!1}function uf(t,n,a,o){if(o={lane:2,revertLane:Vf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(s(479))}else n=Au(t,a,o,2),n!==null&&Vn(n,t,2)}function Pl(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function $m(t,n){$s=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function eg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ri(t,a)}}var fo={readContext:bn,use:Nl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};fo.useEffectEvent=tn;var tg={readContext:bn,use:Nl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Im,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,Vm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(ds){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(ds){Qe(!0);try{a(n)}finally{Qe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ey.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=nf(t);var n=t.queue,a=Jm.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(t,n){var a=Pn();return of(a,t,n)},useTransition:function(){var t=nf(!1);return t=qm.bind(null,ut,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ut,u=Pn();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(yt&127)!==0||Mm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Im(bm.bind(null,o,h,t),[t]),o.flags|=2048,tr(9,{destroy:void 0},Em.bind(null,o,h,a,n),null),a},useId:function(){var t=Pn(),n=jt.identifierPrefix;if(Mt){var a=Di,o=wi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:cf,useFormState:Lm,useActionState:Lm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:$u,useCacheRefresh:function(){return Pn().memoizedState=My.bind(null,ut)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ff={readContext:bn,use:Nl,useCallback:jm,useContext:bn,useEffect:sf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:Ul,useRef:Bm,useState:function(){return Ul(Ki)},useDebugValue:rf,useDeferredValue:function(t,n){var a=rn();return Wm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=Ul(Ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:cf,useFormState:Om,useActionState:Om,useOptimistic:function(t,n){var a=rn();return Rm(a,Bt,t,n)},useMemoCache:$u,useCacheRefresh:Qm};ff.useEffectEvent=Fm;var ng={readContext:bn,use:Nl,useCallback:jm,useContext:bn,useEffect:sf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:tf,useRef:Bm,useState:function(){return tf(Ki)},useDebugValue:rf,useDeferredValue:function(t,n){var a=rn();return Bt===null?of(a,t,n):Wm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=tf(Ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:cf,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=rn();return Bt!==null?Rm(a,Bt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Qm};ng.useEffectEvent=Fm;function hf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var df={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Ea(o);u.payload=n,a!=null&&(u.callback=a),n=ba(t,u,o),n!==null&&(Vn(n,t,o),so(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Ea(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ba(t,u,o),n!==null&&(Vn(n,t,o),so(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=ba(t,o,a),n!==null&&(Vn(n,t,a),so(n,t,a))}};function ig(t,n,a,o,u,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,o)||!Qr(u,h):!0}function ag(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&df.enqueueReplaceState(n,n.state,null)}function ps(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function sg(t){dl(t)}function rg(t){console.error(t)}function og(t){dl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function lg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pf(t,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function cg(t){return t=Ea(t),t.tag=3,t}function ug(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){lg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){lg(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function by(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Yl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(t,o,u)),!1;case 22:return a.flags|=65536,o===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(t,o,u)),!1}throw Error(s(435,a.tag))}return Ff(t,o,u),Yl(),!1}if(Mt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(t=Error(s(422),{cause:o}),eo(oi(t,a)))):(o!==Uu&&(n=Error(s(423),{cause:o}),eo(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=pf(t.stateNode,o,u),ku(t,u),nn!==4&&(nn=2)),!1;var h=Error(s(520),{cause:o});if(h=oi(h,a),yo===null?yo=[h]:yo.push(h),nn!==4&&(nn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=pf(a.stateNode,o,t),ku(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Da===null||!Da.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=cg(u),ug(u,t,a,o),ku(a,u),!1}a=a.return}while(a!==null);return!1}var mf=Error(s(461)),un=!1;function Tn(t,n,a,o){n.child=t===null?pm(n,null,a,o):hs(n,t.child,a,o)}function fg(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return ls(n),o=Zu(t,n,a,S,h,u),R=Ku(),t!==null&&!un?(Qu(t,n,u),Qi(t,n,u)):(Mt&&R&&Du(n),n.flags|=1,Tn(t,n,o,u),n.child)}function hg(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Ru(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,dg(t,n,h,o,u)):(t=vl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Ef(t,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(S,o)&&t.ref===n.ref)return Qi(t,n,u)}return n.flags|=1,t=Xi(h,o),t.ref=n.ref,t.return=n,n.child=t}function dg(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(Qr(h,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=h,Ef(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Qi(t,n,u)}return gf(t,n,a,o,u)}function pg(t,n,a,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return mg(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(n,h!==null?h.cachePool:null),h!==null?vm(n,h):Xu(),_m(n);else return o=n.lanes=536870912,mg(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Sl(n,h.cachePool),vm(n,h),Aa(),n.memoizedState=null):(t!==null&&Sl(n,null),Xu(),Aa());return Tn(t,n,u,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function mg(t,n,a,o,u){var h=Fu();return h=h===null?null:{parent:ln._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Sl(n,null),Xu(),_m(n),t!==null&&qs(t,n,o,!0),n.childLanes=u,null}function Bl(t,n){return n=Fl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function gg(t,n,a){return hs(n,t.child,null,a),t=Bl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function Ty(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=Bl(n,o),n.lanes=536870912,ho(null,t);if(qu(n),(t=Wt)?(t=Cv(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,En=n,Wt=null)):t=null,t===null)throw ya(n);return n.lanes=536870912,null}return Bl(n,o)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=gg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||qs(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=jt,o!==null&&(S=Us(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,as(t,S),Vn(o,t,S),mf;Yl(),n=gg(t,n,a)}else t=h.treeContext,Wt=hi(S.nextSibling),En=n,Mt=!0,xa=null,ui=!1,t!==null&&nm(n,t),n=Bl(n,o),n.flags|=4096;return n}return t=Xi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function gf(t,n,a,o,u){return ls(n),a=Zu(t,n,a,o,void 0,u),o=Ku(),t!==null&&!un?(Qu(t,n,u),Qi(t,n,u)):(Mt&&o&&Du(n),n.flags|=1,Tn(t,n,a,u),n.child)}function vg(t,n,a,o,u,h){return ls(n),n.updateQueue=null,a=ym(n,o,a,u),xm(t),o=Ku(),t!==null&&!un?(Qu(t,n,h),Qi(t,n,h)):(Mt&&o&&Du(n),n.flags|=1,Tn(t,n,a,h),n.child)}function _g(t,n,a,o,u){if(ls(n),n.stateNode===null){var h=ks,S=a.contextType;typeof S=="object"&&S!==null&&(h=bn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=df,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Gu(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?bn(S):ks,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(hf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&df.enqueueReplaceState(h,h.state,null),oo(n,o,h,u),ro(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,H=ps(a,R);h.props=H;var te=h.context,me=a.contextType;S=ks,typeof me=="object"&&me!==null&&(S=bn(me));var _e=a.getDerivedStateFromProps;me=typeof _e=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||te!==S)&&ag(n,h,o,S),Ma=!1;var ae=n.memoizedState;h.state=ae,oo(n,o,h,u),ro(),te=n.memoizedState,R||ae!==te||Ma?(typeof _e=="function"&&(hf(n,a,_e,o),te=n.memoizedState),(H=Ma||ig(n,a,H,o,ae,te,S))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),h.props=o,h.state=te,h.context=S,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Vu(t,n),S=n.memoizedProps,me=ps(a,S),h.props=me,_e=n.pendingProps,ae=h.context,te=a.contextType,H=ks,typeof te=="object"&&te!==null&&(H=bn(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==_e||ae!==H)&&ag(n,h,o,H),Ma=!1,ae=n.memoizedState,h.state=ae,oo(n,o,h,u),ro();var ce=n.memoizedState;S!==_e||ae!==ce||Ma||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof R=="function"&&(hf(n,a,R,o),ce=n.memoizedState),(me=Ma||ig(n,a,me,o,ae,ce,H)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(te||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ce,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ce,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),h.props=o,h.state=ce,h.context=H,o=me):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Il(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=hs(n,t.child,null,u),n.child=hs(n,null,a,u)):Tn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=Qi(t,n,u),t}function xg(t,n,a,o){return rs(),n.flags|=256,Tn(t,n,a,o),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(t){return{baseLanes:t,cachePool:lm()}}function xf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function yg(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?Ta(n):Aa(),(t=Wt)?(t=Cv(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,En=n,Wt=null)):t=null,t===null)throw ya(n);return th(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Aa(),u=n.mode,R=Fl({mode:"hidden",children:R},u),o=ss(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=_f(a),o.childLanes=xf(t,S,a),n.memoizedState=vf,ho(null,o)):(Ta(n),yf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(h)n.flags&256?(Ta(n),n.flags&=-257,n=Sf(t,n,a)):n.memoizedState!==null?(Aa(),n.child=t.child,n.flags|=128,n=null):(Aa(),R=o.fallback,u=n.mode,o=Fl({mode:"visible",children:o.children},u),R=ss(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,hs(n,t.child,null,a),o=n.child,o.memoizedState=_f(a),o.childLanes=xf(t,S,a),n.memoizedState=vf,n=ho(null,o));else if(Ta(n),th(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var te=S.dgst;S=te,o=Error(s(419)),o.stack="",o.digest=S,eo({value:o,source:null,stack:null}),n=Sf(t,n,a)}else if(un||qs(t,n,a,!1),S=(a&t.childLanes)!==0,un||S){if(S=jt,S!==null&&(o=Us(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,as(t,o),Vn(S,t,o),mf;eh(R)||Yl(),n=Sf(t,n,a)}else eh(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Wt=hi(R.nextSibling),En=n,Mt=!0,xa=null,ui=!1,t!==null&&nm(n,t),n=yf(n,o.children),n.flags|=4096);return n}return u?(Aa(),R=o.fallback,u=n.mode,H=t.child,te=H.sibling,o=Xi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,te!==null?R=Xi(te,R):(R=ss(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,ho(null,o),o=n.child,R=t.child.memoizedState,R===null?R=_f(a):(u=R.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=lm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=xf(t,S,a),n.memoizedState=vf,ho(t.child,o)):(Ta(n),a=t.child,t=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function yf(t,n){return n=Fl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Fl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function Sf(t,n,a){return hs(n,t.child,null,a),t=yf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Sg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Pu(t.return,n,a)}function Mf(t,n,a,o,u,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function Mg(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=sn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,he(sn,S),Tn(t,n,o,a),o=Mt?$r:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,a,n);else if(t.tag===19)Sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Rl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Mf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Rl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Mf(n,!0,a,null,h,o);break;case"together":Mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Xi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Xi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function Ay(t,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),Sa(n,ln,t.memoizedState.cache),rs();break;case 27:case 5:Xe(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?yg(t,n,a):(Ta(n),t=Qi(t,n,a),t!==null?t.sibling:null);Ta(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qs(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Mg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),he(sn,sn.current),o)break;return null;case 22:return n.lanes=0,pg(t,n,a,n.pendingProps);case 24:Sa(n,ln,t.memoizedState.cache)}return Qi(t,n,a)}function Eg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Ef(t,a)&&(n.flags&128)===0)return un=!1,Ay(t,n,a);un=(t.flags&131072)!==0}else un=!1,Mt&&(n.flags&1048576)!==0&&tm(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=us(n.elementType),n.type=t,typeof t=="function")Ru(t)?(o=ps(t,o),n.tag=1,n=_g(null,n,t,o,a)):(n.tag=0,n=gf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=fg(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=hg(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(s(306,n,""))}}return n;case 0:return gf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ps(o,n.pendingProps),_g(t,n,o,u,a);case 3:e:{if(we(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Vu(t,n),oo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Sa(n,ln,o),o!==h.cache&&zu(n,[ln],a,!0),ro(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=xg(t,n,o,a);break e}else if(o!==u){u=oi(Error(s(424)),n),eo(u),n=xg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Wt=hi(t.firstChild),En=n,Mt=!0,xa=null,ui=!0,a=pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(rs(),o===u){n=Qi(t,n,a);break e}Tn(t,n,o,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=Ov(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=tc(ne.current).createElement(a),o[on]=n,o[Sn]=t,An(o,a,t),Se(o),n.stateNode=o):n.memoizedState=Ov(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xe(n),t===null&&Mt&&(o=n.stateNode=Nv(n.type,n.pendingProps,ne.current),En=n,ui=!0,u=Wt,Oa(n.type)?(nh=u,Wt=hi(o.firstChild)):Wt=u),Tn(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=Wt)&&(o=nS(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,En=n,Wt=hi(o.firstChild),ui=!1,u=!0):u=!1),u||ya(n)),Xe(n),u=n.type,h=n.pendingProps,S=t!==null?t.memoizedProps:null,o=h.children,Qf(u,h)?o=null:S!==null&&Qf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(t,n,vy,null,null,a),Co._currentValue=u),Il(t,n),Tn(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=Wt)&&(a=iS(a,n.pendingProps,ui),a!==null?(n.stateNode=a,En=n,Wt=null,t=!0):t=!1),t||ya(n)),null;case 13:return yg(t,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=hs(n,null,o,a):Tn(t,n,o,a),n.child;case 11:return fg(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),Tn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ls(n),u=bn(u),o=o(u),n.flags|=1,Tn(t,n,o,a),n.child;case 14:return hg(t,n,n.type,n.pendingProps,a);case 15:return dg(t,n,n.type,n.pendingProps,a);case 19:return Mg(t,n,a);case 31:return Ty(t,n,a);case 22:return pg(t,n,a,n.pendingProps);case 24:return ls(n),o=bn(ln),t===null?(u=Fu(),u===null&&(u=jt,h=Bu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Gu(n),Sa(n,ln,u)):((t.lanes&a)!==0&&(Vu(t,n),oo(n,null,null,a),ro()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,ln,o)):(o=h.cache,Sa(n,ln,o),o!==u.cache&&zu(n,[ln],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ji(t){t.flags|=4}function bf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Kg())t.flags|=8192;else throw fs=El,Hu}else t.flags&=-16777217}function bg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Fv(n))if(Kg())t.flags|=8192;else throw fs=El,Hu}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ot():536870912,t.lanes|=n,sr|=n)}function po(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ry(t,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(ln),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),qt(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(Ji(n),h!==null?(qt(n),bg(n,h)):(qt(n),bf(n,u,null,o,a))):h?h!==t.memoizedState?(Ji(n),qt(n),bg(n,h)):(qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ji(n),qt(n),bf(n,u,t,o,a)),null;case 27:if(lt(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qt(n),null}t=Me.current,Ws(n)?im(n):(t=Nv(u,o,a),n.stateNode=t,Ji(n))}return qt(n),null;case 5:if(lt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qt(n),null}if(h=Me.current,Ws(n))im(n);else{var S=tc(ne.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[on]=n,h[Sn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;e:switch(An(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ji(n)}}return qt(n),bf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||yv(t.nodeValue,a)),t||ya(n,!0)}else t=tc(t).createTextNode(o),t[on]=n,n.stateNode=t}return qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Ws(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),t=!1}else a=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ws(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),u=!1}else u=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),qt(n),null);case 4:return Ie(),t===null&&Wf(n.stateNode.containerInfo),qt(n),null;case 10:return Yi(n.type),qt(n),null;case 19:if(Q(sn),o=n.memoizedState,o===null)return qt(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)po(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Rl(t),h!==null){for(n.flags|=128,po(o,!1),t=h.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jp(a,t),a=a.sibling;return he(sn,sn.current&1|2),Mt&&Wi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&A()>Xl&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304)}else{if(!u)if(t=Rl(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Mt)return qt(n),null}else 2*A()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=A(),t.sibling=null,a=sn.current,he(sn,u?a&1|2:a&1),Mt&&Wi(n,o.treeForkCount),t):(qt(n),null);case 22:case 23:return Qn(n),Wu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(ln),qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Cy(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Yi(ln),Ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(sn),null;case 4:return Ie(),null;case 10:return Yi(n.type),null;case 22:case 23:return Qn(n),Wu(),t!==null&&Q(cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Yi(ln),null;case 25:return null;default:return null}}function Tg(t,n){switch(Nu(n),n.tag){case 3:Yi(ln),Ie();break;case 26:case 27:case 5:lt(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:Q(sn);break;case 10:Yi(n.type);break;case 22:case 23:Qn(n),Wu(),t!==null&&Q(cs);break;case 24:Yi(ln)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){zt(n,n.return,R)}}function Ra(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var H=a,te=R;try{te()}catch(me){zt(u,H,me)}}}o=o.next}while(o!==h)}}catch(me){zt(n,n.return,me)}}function Ag(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gm(n,a)}catch(o){zt(t,t.return,o)}}}function Rg(t,n,a){a.props=ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function Ni(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function Cg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function Tf(t,n,a){try{var o=t.stateNode;Ky(o,t.type,a,n),o[Sn]=n}catch(u){zt(t,t.return,u)}}function wg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Oa(t.type)||t.tag===4}function Af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Oa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Rf(t,n,a),t=t.sibling;t!==null;)Rf(t,n,a),t=t.sibling}function Gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function Dg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[on]=t,n[Sn]=a}catch(h){zt(t,t.return,h)}}var $i=!1,fn=!1,Cf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,xn=null;function wy(t,n){if(t=t.containerInfo,Zf=lc,t=kp(t),yu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var S=0,R=-1,H=-1,te=0,me=0,_e=t,ae=null;t:for(;;){for(var ce;_e!==a||u!==0&&_e.nodeType!==3||(R=S+u),_e!==h||o!==0&&_e.nodeType!==3||(H=S+o),_e.nodeType===3&&(S+=_e.nodeValue.length),(ce=_e.firstChild)!==null;)ae=_e,_e=ce;for(;;){if(_e===t)break t;if(ae===a&&++te===u&&(R=S),ae===h&&++me===o&&(H=S),(ce=_e.nextSibling)!==null)break;_e=ae,ae=_e.parentNode}_e=ce}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:t,selectionRange:a},lc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ge=ps(a.type,u);t=o.getSnapshotBeforeUpdate(Ge,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){zt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)$f(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$f(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function Ug(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),o&4&&mo(5,a);break;case 1:if(ta(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){zt(a,a.return,S)}else{var u=ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){zt(a,a.return,S)}}o&64&&Ag(a),o&512&&go(a,a.return);break;case 3:if(ta(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gm(t,n)}catch(S){zt(a,a.return,S)}}break;case 27:n===null&&o&4&&Dg(a);case 26:case 5:ta(t,a),n===null&&o&4&&Cg(a),o&512&&go(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),o&4&&Pg(t,a);break;case 13:ta(t,a),o&4&&zg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Iy.bind(null,a),aS(t,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||fn,u=$i;var h=fn;$i=o,(fn=n)&&!h?na(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),$i=u,fn=h}break;case 30:break;default:ta(t,a)}}function Lg(t){var n=t.alternate;n!==null&&(t.alternate=null,Lg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&C(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,In=!1;function ea(t,n,a){for(a=a.child;a!==null;)Og(t,n,a),a=a.sibling}function Og(t,n,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:fn||Ni(a,n),ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ni(a,n);var o=Yt,u=In;Oa(a.type)&&(Yt=a.stateNode,In=!1),ea(t,n,a),To(a.stateNode),Yt=o,In=u;break;case 5:fn||Ni(a,n);case 6:if(o=Yt,u=In,Yt=null,ea(t,n,a),Yt=o,In=u,Yt!==null)if(In)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(a.stateNode)}catch(h){zt(a,n,h)}else try{Yt.removeChild(a.stateNode)}catch(h){zt(a,n,h)}break;case 18:Yt!==null&&(In?(t=Yt,Av(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),dr(t)):Av(Yt,a.stateNode));break;case 4:o=Yt,u=In,Yt=a.stateNode.containerInfo,In=!0,ea(t,n,a),Yt=o,In=u;break;case 0:case 11:case 14:case 15:Ra(2,a,n),fn||Ra(4,a,n),ea(t,n,a);break;case 1:fn||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Rg(a,n,o)),ea(t,n,a);break;case 21:ea(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ea(t,n,a),fn=o;break;default:ea(t,n,a)}}function Pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{dr(t)}catch(a){zt(n,n.return,a)}}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{dr(t)}catch(a){zt(n,n.return,a)}}function Dy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ng),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ng),n;default:throw Error(s(435,t.tag))}}function Vl(t,n){var a=Dy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Fy.bind(null,t,o);o.then(u,u)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(Oa(R.type)){Yt=R.stateNode,In=!1;break e}break;case 5:Yt=R.stateNode,In=!1;break e;case 3:case 4:Yt=R.stateNode.containerInfo,In=!0;break e}R=R.return}if(Yt===null)throw Error(s(160));Og(h,S,u),Yt=null,In=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bg(n,t),n=n.sibling}var _i=null;function Bg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),o&4&&(Ra(3,t,t.return),mo(3,t),Ra(5,t,t.return));break;case 1:Fn(n,t),Hn(t),o&512&&(fn||a===null||Ni(a,a.return)),o&64&&$i&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(Fn(n,t),Hn(t),o&512&&(fn||a===null||Ni(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[$a]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),An(h,o,a),h[on]=t,Se(h),o=h;break e;case"link":var S=Bv("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break t}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;case"meta":if(S=Bv("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break t}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[on]=t,Se(h),o=h}t.stateNode=o}else Iv(u,t.type,t.stateNode);else t.stateNode=zv(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Iv(u,t.type,t.stateNode):zv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Tf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),o&512&&(fn||a===null||Ni(a,a.return)),a!==null&&o&4&&Tf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),o&512&&(fn||a===null||Ni(a,a.return)),t.flags&32){u=t.stateNode;try{zs(u,"")}catch(Ge){zt(t,t.return,Ge)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Tf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Cf=!0);break;case 6:if(Fn(n,t),Hn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ge){zt(t,t.return,Ge)}}break;case 3:if(ac=null,u=_i,_i=nc(n.containerInfo),Fn(n,t),_i=u,Hn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(Ge){zt(t,t.return,Ge)}Cf&&(Cf=!1,Ig(t));break;case 4:o=_i,_i=nc(t.stateNode.containerInfo),Fn(n,t),Hn(t),_i=o;break;case 12:Fn(n,t),Hn(t);break;case 31:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=A()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=$i,me=fn;if($i=te||u,fn=me||H,Fn(n,t),fn=me,$i=te,Hn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||$i||fn||ms(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=H.stateNode;var _e=H.memoizedProps.style,ae=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ge){zt(H,H.return,Ge)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ge){zt(H,H.return,Ge)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?Rv(ce,!0):Rv(H.stateNode,!1)}catch(Ge){zt(H,H.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vl(t,a))));break;case 19:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(wg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Af(t);Gl(t,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(zs(S,""),a.flags&=-33);var R=Af(t);Gl(t,R,S);break;case 3:case 4:var H=a.stateNode.containerInfo,te=Af(t);Rf(t,te,H);break;default:throw Error(s(161))}}catch(me){zt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ig(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ug(t,n.alternate,n),n=n.sibling}function ms(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),ms(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rg(n,n.return,a),ms(n);break;case 27:To(n.stateNode);case 26:case 5:Ni(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:na(u,h,a),mo(4,h);break;case 1:if(na(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){zt(o,o.return,te)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)mm(H[u],R)}catch(te){zt(o,o.return,te)}}a&&S&64&&Ag(h),go(h,h.return);break;case 27:Dg(h);case 26:case 5:na(u,h,a),a&&o===null&&S&4&&Cg(h),go(h,h.return);break;case 12:na(u,h,a);break;case 31:na(u,h,a),a&&S&4&&Pg(u,h);break;case 13:na(u,h,a),a&&S&4&&zg(u,h);break;case 22:h.memoizedState===null&&na(u,h,a),go(h,h.return);break;case 30:break;default:na(u,h,a)}n=n.sibling}}function wf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Df(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function xi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fg(t,n,a,o),n=n.sibling}function Fg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,o),u&2048&&mo(9,n);break;case 1:xi(t,n,a,o);break;case 3:xi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){xi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){zt(n,n.return,H)}}else xi(t,n,a,o);break;case 31:xi(t,n,a,o);break;case 13:xi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?xi(t,n,a,o):vo(t,n):h._visibility&2?xi(t,n,a,o):(h._visibility|=2,nr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&wf(S,n);break;case 24:xi(t,n,a,o),u&2048&&Df(n.alternate,n);break;default:xi(t,n,a,o)}}function nr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,S=n,R=a,H=o,te=S.flags;switch(S.tag){case 0:case 11:case 15:nr(h,S,R,H,u),mo(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?nr(h,S,R,H,u):vo(h,S):(me._visibility|=2,nr(h,S,R,H,u)),u&&te&2048&&wf(S.alternate,S);break;case 24:nr(h,S,R,H,u),u&&te&2048&&Df(S.alternate,S);break;default:nr(h,S,R,H,u)}n=n.sibling}}function vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&wf(o.alternate,o);break;case 24:vo(a,o),u&2048&&Df(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var _o=8192;function ir(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)Hg(t,n,a),t=t.sibling}function Hg(t,n,a){switch(t.tag){case 26:ir(t,n,a),t.flags&_o&&t.memoizedState!==null&&gS(a,_i,t.memoizedState,t.memoizedProps);break;case 5:ir(t,n,a);break;case 3:case 4:var o=_i;_i=nc(t.stateNode.containerInfo),ir(t,n,a),_i=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=_o,_o=16777216,ir(t,n,a),_o=o):ir(t,n,a));break;default:ir(t,n,a)}}function Gg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,kg(o,t)}Gg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vg(t),t=t.sibling}function Vg(t){switch(t.tag){case 0:case 11:case 15:xo(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:xo(t);break;case 12:xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,kl(t)):xo(t);break;default:xo(t)}}function kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,kg(o,t)}Gg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}t=t.sibling}}function kg(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var u=o.sibling,h=o.return;if(Lg(o),o===a){xn=null;break e}if(u!==null){u.return=h,xn=u;break e}xn=h}}}var Ny={getCacheForType:function(t){var n=bn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(ln).controller.signal}},Uy=typeof WeakMap=="function"?WeakMap:Map,Nt=0,jt=null,vt=null,yt=0,Pt=0,Jn=null,Ca=!1,ar=!1,Nf=!1,ia=0,nn=0,wa=0,gs=0,Uf=0,$n=0,sr=0,yo=null,Gn=null,Lf=!1,jl=0,jg=0,Xl=1/0,Wl=null,Da=null,pn=0,Na=null,rr=null,aa=0,Of=0,Pf=null,Xg=null,So=0,zf=null;function ei(){return(Nt&2)!==0&&yt!==0?yt&-yt:B.T!==null?Vf():Ja()}function Wg(){if($n===0)if((yt&536870912)===0||Mt){var t=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Vn(t,n,a){(t===jt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(or(t,0),Ua(t,yt,$n,!1)),Ln(t,a),((Nt&2)===0||t!==jt)&&(t===jt&&((Nt&2)===0&&(gs|=a),nn===4&&Ua(t,yt,$n,!1)),Ui(t))}function qg(t,n,a){if((Nt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?Py(t,n):If(t,n,!0),h=o;do{if(u===0){ar&&!o&&Ua(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Ly(a)){u=If(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;u=yo;var H=R.current.memoizedState.isDehydrated;if(H&&(or(R,S).flags|=256),S=If(R,S,!1),S!==2){if(Nf&&!H){R.errorRecoveryDisabledLanes|=h,gs|=h,u=4;break e}h=Gn,Gn=u,h!==null&&(Gn===null?Gn=h:Gn.push.apply(Gn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){or(t,0),Ua(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,$n,!Ca);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-A(),10<u)){if(Ua(o,n,$n,!Ca),xe(o,0,!0)!==0)break e;aa=n,o.timeoutHandle=bv(Yg.bind(null,o,a,Gn,Wl,Lf,n,$n,gs,sr,Ca,h,"Throttled",-0,0),u);break e}Yg(o,a,Gn,Wl,Lf,n,$n,gs,sr,Ca,h,null,-0,0)}}break}while(!0);Ui(t)}function Yg(t,n,a,o,u,h,S,R,H,te,me,_e,ae,ce){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},Hg(n,h,_e);var Ge=(h&62914560)===h?jl-A():(h&4194048)===h?jg-A():0;if(Ge=vS(_e,Ge),Ge!==null){aa=h,t.cancelPendingCommit=Ge(nv.bind(null,t,n,h,a,o,u,S,R,H,me,_e,null,ae,ce)),Ua(t,h,S,!te);return}}nv(t,n,h,a,o,u,S,R,H)}function Ly(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Yn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(t,n,a,o){n&=~Uf,n&=~gs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Be(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&Gr(t,a,n)}function ql(){return(Nt&6)===0?(Mo(0),!1):!0}function Bf(){if(vt!==null){if(Pt===0)var t=vt.return;else t=vt,qi=os=null,Ju(t),Qs=null,io=0,t=vt;for(;t!==null;)Tg(t.alternate,t),t=t.return;vt=null}}function or(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$y(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,Bf(),jt=t,vt=a=Xi(t.current,null),yt=n,Pt=0,Jn=null,Ca=!1,ar=He(t,n),Nf=!1,sr=$n=Uf=gs=wa=nn=0,Gn=yo=null,Lf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),h=1<<u;n|=t[u],o&=~h}return ia=n,pl(),a}function Zg(t,n){ut=null,B.H=fo,n===Ks||n===Ml?(n=fm(),Pt=3):n===Hu?(n=fm(),Pt=4):Pt=n===mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,vt===null&&(nn=1,zl(t,oi(n,t.current)))}function Kg(){var t=Kn.current;return t===null?!0:(yt&4194048)===yt?fi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===fi:!1}function Qg(){var t=B.H;return B.H=fo,t===null?fo:t}function Jg(){var t=B.A;return B.A=Ny,t}function Yl(){nn=4,Ca||(yt&4194048)!==yt&&Kn.current!==null||(ar=!0),(wa&134217727)===0&&(gs&134217727)===0||jt===null||Ua(jt,yt,$n,!1)}function If(t,n,a){var o=Nt;Nt|=2;var u=Qg(),h=Jg();(jt!==t||yt!==n)&&(Wl=null,or(t,n)),n=!1;var S=nn;e:do try{if(Pt!==0&&vt!==null){var R=vt,H=Jn;switch(Pt){case 8:Bf(),S=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var te=Pt;if(Pt=0,Jn=null,lr(t,R,H,te),a&&ar){S=0;break e}break;default:te=Pt,Pt=0,Jn=null,lr(t,R,H,te)}}Oy(),S=nn;break}catch(me){Zg(t,me)}while(!0);return n&&t.shellSuspendCounter++,qi=os=null,Nt=o,B.H=u,B.A=h,vt===null&&(jt=null,yt=0,pl()),S}function Oy(){for(;vt!==null;)$g(vt)}function Py(t,n){var a=Nt;Nt|=2;var o=Qg(),u=Jg();jt!==t||yt!==n?(Wl=null,Xl=A()+500,or(t,n)):ar=He(t,n);e:do try{if(Pt!==0&&vt!==null){n=vt;var h=Jn;t:switch(Pt){case 1:Pt=0,Jn=null,lr(t,n,h,1);break;case 2:case 9:if(cm(h)){Pt=0,Jn=null,ev(n);break}n=function(){Pt!==2&&Pt!==9||jt!==t||(Pt=7),Ui(t)},h.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:cm(h)?(Pt=0,Jn=null,ev(n)):(Pt=0,Jn=null,lr(t,n,h,7));break;case 5:var S=null;switch(vt.tag){case 26:S=vt.memoizedState;case 5:case 27:var R=vt;if(S?Fv(S):R.stateNode.complete){Pt=0,Jn=null;var H=R.sibling;if(H!==null)vt=H;else{var te=R.return;te!==null?(vt=te,Zl(te)):vt=null}break t}}Pt=0,Jn=null,lr(t,n,h,5);break;case 6:Pt=0,Jn=null,lr(t,n,h,6);break;case 8:Bf(),nn=6;break e;default:throw Error(s(462))}}zy();break}catch(me){Zg(t,me)}while(!0);return qi=os=null,B.H=o,B.A=u,Nt=a,vt!==null?0:(jt=null,yt=0,pl(),nn)}function zy(){for(;vt!==null&&!Zt();)$g(vt)}function $g(t){var n=Eg(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Zl(t):vt=n}function ev(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=vg(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=vg(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Ju(n);default:Tg(a,n),n=vt=Jp(n,ia),n=Eg(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Zl(t):vt=n}function lr(t,n,a,o){qi=os=null,Ju(n),Qs=null,io=0;var u=n.return;try{if(by(t,u,n,a,yt)){nn=1,zl(t,oi(a,t.current)),vt=null;return}}catch(h){if(u!==null)throw vt=u,h;nn=1,zl(t,oi(a,t.current)),vt=null;return}n.flags&32768?(Mt||o===1?t=!0:ar||(yt&536870912)!==0?t=!1:(Ca=t=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),tv(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){tv(n,Ca);return}t=n.return;var a=Ry(n.alternate,n,ia);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);nn===0&&(nn=5)}function tv(t,n){do{var a=Cy(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);nn=6,vt=null}function nv(t,n,a,o,u,h,S,R,H){t.cancelPendingCommit=null;do Kl();while(pn!==0);if((Nt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Tu,si(t,a,h,S,R,H),t===jt&&(vt=jt=null,yt=0),rr=n,Na=t,aa=a,Of=h,Pf=u,Xg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hy(de,function(){return ov(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=K.p,K.p=2,S=Nt,Nt|=4;try{wy(t,n,a)}finally{Nt=S,K.p=u,B.T=o}}pn=1,iv(),av(),sv()}}function iv(){if(pn===1){pn=0;var t=Na,n=rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Nt;Nt|=4;try{Bg(n,t);var h=Kf,S=kp(t.containerInfo),R=h.focusedElem,H=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&Vp(R.ownerDocument.documentElement,R)){if(H!==null&&yu(R)){var te=H.start,me=H.end;if(me===void 0&&(me=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(me,R.value.length);else{var _e=R.ownerDocument||document,ae=_e&&_e.defaultView||window;if(ae.getSelection){var ce=ae.getSelection(),Ge=R.textContent.length,nt=Math.min(H.start,Ge),Ft=H.end===void 0?nt:Math.min(H.end,Ge);!ce.extend&&nt>Ft&&(S=Ft,Ft=nt,nt=S);var Y=Gp(R,nt),k=Gp(R,Ft);if(Y&&k&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var ee=_e.createRange();ee.setStart(Y.node,Y.offset),ce.removeAllRanges(),nt>Ft?(ce.addRange(ee),ce.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),ce.addRange(ee))}}}}for(_e=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&_e.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var ve=_e[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}lc=!!Zf,Kf=Zf=null}finally{Nt=u,K.p=o,B.T=a}}t.current=n,pn=2}}function av(){if(pn===2){pn=0;var t=Na,n=rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Nt;Nt|=4;try{Ug(t,n.alternate,n)}finally{Nt=u,K.p=o,B.T=a}}pn=3}}function sv(){if(pn===4||pn===3){pn=0,O();var t=Na,n=rr,a=aa,o=Xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,rr=Na=null,rv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Da=null),Os(a),n=n.stateNode,Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=K.p,K.p=2,B.T=null;try{for(var h=t.onRecoverableError,S=0;S<o.length;S++){var R=o[S];h(R.value,{componentStack:R.stack})}}finally{B.T=n,K.p=u}}(aa&3)!==0&&Kl(),Ui(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===zf?So++:(So=0,zf=t):So=0,Mo(0)}}function rv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Kl(){return iv(),av(),sv(),ov()}function ov(){if(pn!==5)return!1;var t=Na,n=Of;Of=0;var a=Os(aa),o=B.T,u=K.p;try{K.p=32>a?32:a,B.T=null,a=Pf,Pf=null;var h=Na,S=aa;if(pn=0,rr=Na=null,aa=0,(Nt&6)!==0)throw Error(s(331));var R=Nt;if(Nt|=4,Vg(h.current),Fg(h,h.current,S,a),Nt=R,Mo(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(Ae,h)}catch{}return!0}finally{K.p=u,B.T=o,rv(t,n)}}function lv(t,n,a){n=oi(a,n),n=pf(t.stateNode,n,2),t=ba(t,n,2),t!==null&&(Ln(t,2),Ui(t))}function zt(t,n,a){if(t.tag===3)lv(t,t,a);else for(;n!==null;){if(n.tag===3){lv(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){t=oi(a,t),a=cg(2),o=ba(n,a,2),o!==null&&(ug(a,o,n,t),Ln(o,2),Ui(o));break}}n=n.return}}function Ff(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Uy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nf=!0,u.add(a),t=By.bind(null,t,n,a),n.then(t,t))}function By(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(yt&a)===a&&(nn===4||nn===3&&(yt&62914560)===yt&&300>A()-jl?(Nt&2)===0&&or(t,0):Uf|=a,sr===yt&&(sr=0)),Ui(t)}function cv(t,n){n===0&&(n=Ot()),t=as(t,n),t!==null&&(Ln(t,n),Ui(t))}function Iy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cv(t,a)}function Fy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),cv(t,a)}function Hy(t,n){return rt(t,n)}var Ql=null,cr=null,Hf=!1,Jl=!1,Gf=!1,La=0;function Ui(t){t!==cr&&t.next===null&&(cr===null?Ql=cr=t:cr=cr.next=t),Jl=!0,Hf||(Hf=!0,Vy())}function Mo(t,n){if(!Gf&&Jl){Gf=!0;do for(var a=!1,o=Ql;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Be(42|t)+1)-1,h&=u&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,dv(o,h))}else h=yt,h=xe(o,o===jt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||He(o,h)||(a=!0,dv(o,h));o=o.next}while(a);Gf=!1}}function Gy(){uv()}function uv(){Jl=Hf=!1;var t=0;La!==0&&Jy()&&(t=La);for(var n=A(),a=null,o=Ql;o!==null;){var u=o.next,h=fv(o,n);h===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(cr=a)):(a=o,(t!==0||(h&3)!==0)&&(Jl=!0)),o=u}pn!==0&&pn!==5||Mo(t),La!==0&&(La=0)}function fv(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Be(h),R=1<<S,H=u[S];H===-1?((R&a)===0||(R&o)!==0)&&(u[S]=st(R,n)):H<=n&&(t.expiredLanes|=R),h&=~R}if(n=jt,a=yt,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&en(o),Os(a)){case 2:case 8:a=Ee;break;case 32:a=de;break;case 268435456:a=De;break;default:a=de}return o=hv.bind(null,t),a=rt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&en(o),t.callbackPriority=2,t.callbackNode=null,2}function hv(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var o=yt;return o=xe(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(qg(t,o,n),fv(t,A()),t.callbackNode!=null&&t.callbackNode===a?hv.bind(null,t):null)}function dv(t,n){if(Kl())return null;qg(t,n,!0)}function Vy(){eS(function(){(Nt&6)!==0?rt(ge,Gy):uv()})}function Vf(){if(La===0){var t=Ys;t===0&&(t=Re,Re<<=1,(Re&261888)===0&&(Re=256)),La=t}return La}function pv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rl(""+t)}function mv(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ky(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=pv((u[Sn]||null).action),S=o.submitter;S&&(n=(n=S[Sn]||null)?pv(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var R=new ul("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(La!==0){var H=S?mv(u,S):new FormData(u);lf(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(R.preventDefault(),H=S?mv(u,S):new FormData(u),lf(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var kf=0;kf<bu.length;kf++){var jf=bu[kf],jy=jf.toLowerCase(),Xy=jf[0].toUpperCase()+jf.slice(1);vi(jy,"on"+Xy)}vi(Wp,"onAnimationEnd"),vi(qp,"onAnimationIteration"),vi(Yp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(oy,"onTransitionRun"),vi(ly,"onTransitionStart"),vi(cy,"onTransitionCancel"),vi(Zp,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function gv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],H=R.instance,te=R.currentTarget;if(R=R.listener,H!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=te;try{h(u)}catch(me){dl(me)}u.currentTarget=null,h=H}else for(S=0;S<o.length;S++){if(R=o[S],H=R.instance,te=R.currentTarget,R=R.listener,H!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=te;try{h(u)}catch(me){dl(me)}u.currentTarget=null,h=H}}}}function _t(t,n){var a=n[kr];a===void 0&&(a=n[kr]=new Set);var o=t+"__bubble";a.has(o)||(vv(n,t,2,!1),a.add(o))}function Xf(t,n,a){var o=0;n&&(o|=4),vv(a,t,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Wf(t){if(!t[$l]){t[$l]=!0,Oe.forEach(function(a){a!=="selectionchange"&&(Wy.has(a)||Xf(a,!1,t),Xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$l]||(n[$l]=!0,Xf("selectionchange",!1,n))}}function vv(t,n,a,o){switch(Wv(n)){case 2:var u=yS;break;case 8:u=SS;break;default:u=oh}a=u.bind(null,n,a,t),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function qf(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=W(R),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=h=S;continue e}R=R.parentNode}}o=o.return}Mp(function(){var te=h,me=cu(a),_e=[];e:{var ae=Kp.get(t);if(ae!==void 0){var ce=ul,Ge=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":ce=Fx;break;case"focusin":Ge="focus",ce=mu;break;case"focusout":Ge="blur",ce=mu;break;case"beforeblur":case"afterblur":ce=mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Vx;break;case Wp:case qp:case Yp:ce=Dx;break;case Zp:ce=jx;break;case"scroll":case"scrollend":ce=Tx;break;case"wheel":ce=Wx;break;case"copy":case"cut":case"paste":ce=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Rp;break;case"toggle":case"beforetoggle":ce=Yx}var nt=(n&4)!==0,Ft=!nt&&(t==="scroll"||t==="scrollend"),Y=nt?ae!==null?ae+"Capture":null:ae;nt=[];for(var k=te,ee;k!==null;){var ve=k;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||Y===null||(ve=jr(k,Y),ve!=null&&nt.push(bo(k,ve,ee))),Ft)break;k=k.return}0<nt.length&&(ae=new ce(ae,Ge,null,a,me),_e.push({event:ae,listeners:nt}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",ae&&a!==lu&&(Ge=a.relatedTarget||a.fromElement)&&(W(Ge)||Ge[ga]))break e;if((ce||ae)&&(ae=me.window===me?me:(ae=me.ownerDocument)?ae.defaultView||ae.parentWindow:window,ce?(Ge=a.relatedTarget||a.toElement,ce=te,Ge=Ge?W(Ge):null,Ge!==null&&(Ft=c(Ge),nt=Ge.tag,Ge!==Ft||nt!==5&&nt!==27&&nt!==6)&&(Ge=null)):(ce=null,Ge=te),ce!==Ge)){if(nt=Tp,ve="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Rp,ve="onPointerLeave",Y="onPointerEnter",k="pointer"),Ft=ce==null?ae:re(ce),ee=Ge==null?ae:re(Ge),ae=new nt(ve,k+"leave",ce,a,me),ae.target=Ft,ae.relatedTarget=ee,ve=null,W(me)===te&&(nt=new nt(Y,k+"enter",Ge,a,me),nt.target=ee,nt.relatedTarget=Ft,ve=nt),Ft=ve,ce&&Ge)t:{for(nt=qy,Y=ce,k=Ge,ee=0,ve=Y;ve;ve=nt(ve))ee++;ve=0;for(var et=k;et;et=nt(et))ve++;for(;0<ee-ve;)Y=nt(Y),ee--;for(;0<ve-ee;)k=nt(k),ve--;for(;ee--;){if(Y===k||k!==null&&Y===k.alternate){nt=Y;break t}Y=nt(Y),k=nt(k)}nt=null}else nt=null;ce!==null&&_v(_e,ae,ce,nt,!1),Ge!==null&&Ft!==null&&_v(_e,Ft,Ge,nt,!0)}}e:{if(ae=te?re(te):window,ce=ae.nodeName&&ae.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ae.type==="file")var Ct=Pp;else if(Lp(ae))if(zp)Ct=ay;else{Ct=ny;var qe=ty}else ce=ae.nodeName,!ce||ce.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&ou(te.elementType)&&(Ct=Pp):Ct=iy;if(Ct&&(Ct=Ct(t,te))){Op(_e,Ct,a,me);break e}qe&&qe(t,ae,te),t==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&dn(ae,"number",ae.value)}switch(qe=te?re(te):window,t){case"focusin":(Lp(qe)||qe.contentEditable==="true")&&(Hs=qe,Su=te,Jr=null);break;case"focusout":Jr=Su=Hs=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,jp(_e,a,me);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":jp(_e,a,me)}var ft;if(vu)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Fs?Np(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Cp&&a.locale!=="ko"&&(Fs||St!=="onCompositionStart"?St==="onCompositionEnd"&&Fs&&(ft=Ep()):(va=me,hu="value"in va?va.value:va.textContent,Fs=!0)),qe=ec(te,St),0<qe.length&&(St=new Ap(St,t,null,a,me),_e.push({event:St,listeners:qe}),ft?St.data=ft:(ft=Up(a),ft!==null&&(St.data=ft)))),(ft=Kx?Qx(t,a):Jx(t,a))&&(St=ec(te,"onBeforeInput"),0<St.length&&(qe=new Ap("onBeforeInput","beforeinput",null,a,me),_e.push({event:qe,listeners:St}),qe.data=ft)),ky(_e,t,te,a,me)}gv(_e,n)})}function bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ec(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=jr(t,a),u!=null&&o.unshift(bo(t,u,h)),u=jr(t,n),u!=null&&o.push(bo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function qy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _v(t,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var R=a,H=R.alternate,te=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||te===null||(H=te,u?(te=jr(a,h),te!=null&&S.unshift(bo(a,te,H))):u||(te=jr(a,h),te!=null&&S.push(bo(a,te,H)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Yy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function xv(t){return(typeof t=="string"?t:""+t).replace(Yy,`
`).replace(Zy,"")}function yv(t,n){return n=xv(n),xv(t)===n}function It(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zs(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zs(t,""+o);break;case"className":Lt(t,"class",o);break;case"tabIndex":Lt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Lt(t,a,o);break;case"style":yp(t,o,h);break;case"data":if(n!=="object"){Lt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&It(t,n,"name",u.name,u,null),It(t,n,"formEncType",u.formEncType,u,null),It(t,n,"formMethod",u.formMethod,u,null),It(t,n,"formTarget",u.formTarget,u,null)):(It(t,n,"encType",u.encType,u,null),It(t,n,"method",u.method,u,null),It(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ki);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=rl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),kt(t,"popover",o);break;case"xlinkActuate":gt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":gt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":gt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":gt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":gt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":gt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":gt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":gt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":gt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":kt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ex.get(a)||a,kt(t,a,o))}}function Yf(t,n,a,o,u,h){switch(a){case"style":yp(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?zs(t,o):(typeof o=="number"||typeof o=="bigint")&&zs(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ke.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):kt(t,a,o)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:It(t,n,h,S,a,null)}}u&&It(t,n,"srcSet",a.srcSet,a,null),o&&It(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var R=h=S=u=null,H=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":S=me;break;case"checked":H=me;break;case"defaultChecked":te=me;break;case"value":h=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:It(t,n,o,me,a,null)}}On(t,h,R,H,te,S,u,!1);return;case"select":_t("invalid",t),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:It(t,n,u,R,a,null)}n=h,a=S,t.multiple=!!o,n!=null?an(t,!!o,n,!1):a!=null&&an(t,!!o,a,!0);return;case"textarea":_t("invalid",t),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:It(t,n,S,R,a,null)}Ci(t,o,u,h);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":It(t,n,H,o,a,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)_t(Eo[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:It(t,n,te,o,a,null)}return;default:if(ou(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Yf(t,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&It(t,n,R,o,a,null))}function Ky(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,R=null,H=null,te=null,me=null;for(ce in a){var _e=a[ce];if(a.hasOwnProperty(ce)&&_e!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=_e;default:o.hasOwnProperty(ce)||It(t,n,ce,null,o,_e)}}for(var ae in o){var ce=o[ae];if(_e=a[ae],o.hasOwnProperty(ae)&&(ce!=null||_e!=null))switch(ae){case"type":h=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":me=ce;break;case"value":S=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==_e&&It(t,n,ae,ce,o,_e)}}Cn(t,S,R,H,te,me,h,u);return;case"select":ce=S=R=ae=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ce=H;default:o.hasOwnProperty(h)||It(t,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":ae=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==H&&It(t,n,u,h,o,H)}n=R,a=S,o=ce,ae!=null?an(t,!!a,ae,!1):!!o!=!!a&&(n!=null?an(t,!!a,n,!0):an(t,!!a,a?[]:"",!1));return;case"textarea":ce=ae=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:It(t,n,R,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":ae=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&It(t,n,S,u,o,h)}Ps(t,ae,ce);return;case"option":for(var Ge in a)ae=a[Ge],a.hasOwnProperty(Ge)&&ae!=null&&!o.hasOwnProperty(Ge)&&(Ge==="selected"?t.selected=!1:It(t,n,Ge,null,o,ae));for(H in o)ae=o[H],ce=a[H],o.hasOwnProperty(H)&&ae!==ce&&(ae!=null||ce!=null)&&(H==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":It(t,n,H,ae,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ae=a[nt],a.hasOwnProperty(nt)&&ae!=null&&!o.hasOwnProperty(nt)&&It(t,n,nt,null,o,ae);for(te in o)if(ae=o[te],ce=a[te],o.hasOwnProperty(te)&&ae!==ce&&(ae!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:It(t,n,te,ae,o,ce)}return;default:if(ou(n)){for(var Ft in a)ae=a[Ft],a.hasOwnProperty(Ft)&&ae!==void 0&&!o.hasOwnProperty(Ft)&&Yf(t,n,Ft,void 0,o,ae);for(me in o)ae=o[me],ce=a[me],!o.hasOwnProperty(me)||ae===ce||ae===void 0&&ce===void 0||Yf(t,n,me,ae,o,ce);return}}for(var Y in a)ae=a[Y],a.hasOwnProperty(Y)&&ae!=null&&!o.hasOwnProperty(Y)&&It(t,n,Y,null,o,ae);for(_e in o)ae=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||ae===ce||ae==null&&ce==null||It(t,n,_e,ae,o,ce)}function Sv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,R=u.duration;if(h&&R&&Sv(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],te=H.startTime;if(te>R)break;var me=H.transferSize,_e=H.initiatorType;me&&Sv(_e)&&(H=H.responseEnd,S+=me*(H<R?1:(R-te)/(H-te)))}if(--o,n+=8*(h+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zf=null,Kf=null;function tc(t){return t.nodeType===9?t:t.ownerDocument}function Mv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ev(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function Jy(){var t=window.event;return t&&t.type==="popstate"?t===Jf?!1:(Jf=t,!0):(Jf=null,!1)}var bv=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(t){return Tv.resolve(null).then(t).catch(tS)}:bv;function tS(t){setTimeout(function(){throw t})}function Oa(t){return t==="head"}function Av(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),dr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")To(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,To(a);for(var h=a.firstChild;h;){var S=h.nextSibling,R=h.nodeName;h[$a]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&To(t.ownerDocument.body);a=u}while(a);dr(n)}function Rv(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function $f(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[$a])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function iS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function Cv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function eh(t){return t.data==="$?"||t.data==="$~"}function th(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function aS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var nh=null;function wv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Dv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Nv(t,n,a){switch(n=tc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);C(t)}var di=new Map,Uv=new Set;function nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=K.d;K.d={f:sS,r:rS,D:oS,C:lS,L:cS,m:uS,X:hS,S:fS,M:dS};function sS(){var t=sa.f(),n=ql();return t||n}function rS(t){var n=se(t);n!==null&&n.tag===5&&n.type==="form"?Zm(n):sa.r(t)}var ur=typeof document>"u"?null:document;function Lv(t,n,a){var o=ur;if(o&&typeof n=="string"&&n){var u=xt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Uv.has(u)||(Uv.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",t),Se(n),o.head.appendChild(n)))}}function oS(t){sa.D(t),Lv("dns-prefetch",t,null)}function lS(t,n){sa.C(t,n),Lv("preconnect",t,n)}function cS(t,n,a){sa.L(t,n,a);var o=ur;if(o&&t&&n){var u='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xt(a.imageSizes)+'"]')):u+='[href="'+xt(t)+'"]';var h=u;switch(n){case"style":h=fr(t);break;case"script":h=hr(t)}di.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),di.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(h))||n==="script"&&o.querySelector(Ro(h))||(n=o.createElement("link"),An(n,"link",t),Se(n),o.head.appendChild(n)))}}function uS(t,n){sa.m(t,n);var a=ur;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xt(o)+'"][href="'+xt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=hr(t)}if(!di.has(h)&&(t=g({rel:"modulepreload",href:t},n),di.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(h)))return}o=a.createElement("link"),An(o,"link",t),Se(o),a.head.appendChild(o)}}}function fS(t,n,a){sa.S(t,n,a);var o=ur;if(o&&t){var u=Z(o).hoistableStyles,h=fr(t);n=n||"default";var S=u.get(h);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Ao(h)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=di.get(h))&&ih(t,a);var H=S=o.createElement("link");Se(H),An(H,"link",t),H._p=new Promise(function(te,me){H.onload=te,H.onerror=me}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ic(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(h,S)}}}function hS(t,n){sa.X(t,n);var a=ur;if(a&&t){var o=Z(a).hoistableScripts,u=hr(t),h=o.get(u);h||(h=a.querySelector(Ro(u)),h||(t=g({src:t,async:!0},n),(n=di.get(u))&&ah(t,n),h=a.createElement("script"),Se(h),An(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function dS(t,n){sa.M(t,n);var a=ur;if(a&&t){var o=Z(a).hoistableScripts,u=hr(t),h=o.get(u);h||(h=a.querySelector(Ro(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=di.get(u))&&ah(t,n),h=a.createElement("script"),Se(h),An(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Ov(t,n,a,o){var u=(u=ne.current)?nc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=Z(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fr(a.href);var h=Z(u).hoistableStyles,S=h.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=u.querySelector(Ao(t)))&&!h._p&&(S.instance=h,S.state.loading=5),di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(t,a),h||pS(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=Z(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function fr(t){return'href="'+xt(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function Pv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function pS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),Se(n),t.head.appendChild(n))}function hr(t){return'[src="'+xt(t)+'"]'}function Ro(t){return"script[async]"+t}function zv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+xt(a.href)+'"]');if(o)return n.instance=o,Se(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Se(o),An(o,"style",u),ic(o,a.precedence,t),n.instance=o;case"stylesheet":u=fr(a.href);var h=t.querySelector(Ao(u));if(h)return n.state.loading|=4,n.instance=h,Se(h),h;o=Pv(a),(u=di.get(u))&&ih(o,u),h=(t.ownerDocument||t).createElement("link"),Se(h);var S=h;return S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),An(h,"link",o),n.state.loading|=4,ic(h,a.precedence,t),n.instance=h;case"script":return h=hr(a.src),(u=t.querySelector(Ro(h)))?(n.instance=u,Se(u),u):(o=a,(u=di.get(h))&&(o=g({},a),ah(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Se(u),An(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,t));return n.instance}function ic(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ih(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ac=null;function Bv(t,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[$a]||h[on]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=t+S;var R=o.get(S);R?R.push(h):o.set(S,[h])}}return o}function Iv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=fr(o.href),h=n.querySelector(Ao(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,Se(h);return}h=n.ownerDocument||n,o=Pv(o),(u=di.get(u))&&ih(o,u),h=h.createElement("link"),Se(h);var S=h;S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),An(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sh=0;function vS(t,n){return t.stylesheets&&t.count===0&&oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&sh===0&&(sh=62500*Qy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>sh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var rc=null;function oc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,rc=new Map,n.forEach(_S,t),rc=null,sc.call(t))}function _S(t,n){if(!(n.state.loading&4)){var a=rc.get(t);if(a)var o=a.get(null);else{a=new Map,rc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function xS(t,n,a,o,u,h,S,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Hv(t,n,a,o,u,h,S,R,H,te,me,_e){return t=new xS(t,n,a,S,H,te,me,_e,R),n=1,h===!0&&(n|=24),h=Zn(3,null,null,n),t.current=h,h.stateNode=t,n=Bu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Gu(h),t}function Gv(t){return t?(t=ks,t):ks}function Vv(t,n,a,o,u,h){u=Gv(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ba(t,o,n),a!==null&&(Vn(a,t,n),so(a,t,n))}function kv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function rh(t,n){kv(t,n),(t=t.alternate)&&kv(t,n)}function jv(t){if(t.tag===13||t.tag===31){var n=as(t,67108864);n!==null&&Vn(n,t,67108864),rh(t,67108864)}}function Xv(t){if(t.tag===13||t.tag===31){var n=ei();n=Ls(n);var a=as(t,n);a!==null&&Vn(a,t,n),rh(t,n)}}var lc=!0;function yS(t,n,a,o){var u=B.T;B.T=null;var h=K.p;try{K.p=2,oh(t,n,a,o)}finally{K.p=h,B.T=u}}function SS(t,n,a,o){var u=B.T;B.T=null;var h=K.p;try{K.p=8,oh(t,n,a,o)}finally{K.p=h,B.T=u}}function oh(t,n,a,o){if(lc){var u=lh(o);if(u===null)qf(t,n,o,cc,a),qv(t,o);else if(ES(u,t,n,a,o))o.stopPropagation();else if(qv(t,o),n&4&&-1<MS.indexOf(t)){for(;u!==null;){var h=se(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=be(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var H=1<<31-Be(S);R.entanglements[1]|=H,S&=~H}Ui(h),(Nt&6)===0&&(Xl=A()+500,Mo(0))}}break;case 31:case 13:R=as(h,2),R!==null&&Vn(R,h,2),ql(),rh(h,2)}if(h=lh(o),h===null&&qf(t,n,o,cc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else qf(t,n,o,null,a)}}function lh(t){return t=cu(t),ch(t)}var cc=null;function ch(t){if(cc=null,t=W(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cc=t,null}function Wv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case ge:return 2;case Ee:return 8;case de:case Ke:return 32;case De:return 268435456;default:return 32}default:return 32}}var uh=!1,Pa=null,za=null,Ba=null,wo=new Map,Do=new Map,Ia=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qv(t,n){switch(t){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function No(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=se(n),n!==null&&jv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ES(t,n,a,o,u){switch(n){case"focusin":return Pa=No(Pa,t,n,a,o,u),!0;case"dragenter":return za=No(za,t,n,a,o,u),!0;case"mouseover":return Ba=No(Ba,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return wo.set(h,No(wo.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Do.set(h,No(Do.get(h)||null,t,n,a,o,u)),!0}return!1}function Yv(t){var n=W(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Vr(t.priority,function(){Xv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Vr(t.priority,function(){Xv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=lh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);lu=o,a.target.dispatchEvent(o),lu=null}else return n=se(a),n!==null&&jv(n),t.blockedOn=a,!1;n.shift()}return!0}function Zv(t,n,a){uc(t)&&a.delete(n)}function bS(){uh=!1,Pa!==null&&uc(Pa)&&(Pa=null),za!==null&&uc(za)&&(za=null),Ba!==null&&uc(Ba)&&(Ba=null),wo.forEach(Zv),Do.forEach(Zv)}function fc(t,n){t.blockedOn===n&&(t.blockedOn=null,uh||(uh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bS)))}var hc=null;function Kv(t){hc!==t&&(hc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ch(o||a)===null)continue;break}var h=se(a);h!==null&&(t.splice(n,3),n-=3,lf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function dr(t){function n(H){return fc(H,t)}Pa!==null&&fc(Pa,t),za!==null&&fc(za,t),Ba!==null&&fc(Ba,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<Ia.length;a++){var o=Ia[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)Yv(a),a.blockedOn===null&&Ia.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[Sn]||null;if(typeof h=="function")S||Kv(a);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[Sn]||null)R=S.formAction;else if(ch(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Kv(a)}}}function Qv(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function fh(t){this._internalRoot=t}dc.prototype.render=fh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ei();Vv(a,o,t,n,null,null)},dc.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vv(t.current,2,null,t,null,null),ql(),n[ga]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ja();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,t),a===0&&Yv(t)}};var Jv=e.version;if(Jv!=="19.2.4")throw Error(s(527,Jv,"19.2.4"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var TS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Ae=pc.inject(TS),Ne=pc}catch{}}return Lo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=sg,h=rg,S=og;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Hv(t,1,!1,null,null,a,o,null,u,h,S,Qv),t[ga]=n.current,Wf(t),new fh(n)},Lo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=sg,S=rg,R=og,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Hv(t,1,!0,n,a??null,o,u,H,h,S,R,Qv),n.context=Gv(null),a=n.current,o=ei(),o=Ls(o),u=Ea(o),u.callback=null,ba(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Ui(n),t[ga]=n.current,Wf(t),new dc(n)},Lo.version="19.2.4",Lo}var l_;function PS(){if(l_)return ph.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ph.exports=OS(),ph.exports}var zS=PS();var c_="popstate";function u_(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function BS(r={}){function e(s,l){let c=l.state?.masked,{pathname:f,search:d,hash:m}=c||s.location;return id("",{pathname:f,search:d,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function i(s,l){return typeof l=="string"?l:jo(l)}return FS(e,i,null,r)}function Kt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Fi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IS(){return Math.random().toString(36).substring(2,10)}function f_(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function id(r,e,i=null,s,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?zr(e):e,state:i,key:e&&e.key||s||IS(),unstable_mask:l}}function jo({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function zr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function FS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,d="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){d="POP";let y=v(),_=y==null?null:y-p;p=y,m&&m({action:d,location:T.location,delta:_})}function x(y,_){d="PUSH";let L=u_(y)?y:id(T.location,y,_);p=v()+1;let U=f_(L,p),N=T.createHref(L.unstable_mask||L);try{f.pushState(U,"",N)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(N)}c&&m&&m({action:d,location:T.location,delta:1})}function M(y,_){d="REPLACE";let L=u_(y)?y:id(T.location,y,_);p=v();let U=f_(L,p),N=T.createHref(L.unstable_mask||L);f.replaceState(U,"",N),c&&m&&m({action:d,location:T.location,delta:0})}function b(y){return HS(y)}let T={get action(){return d},get location(){return r(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(c_,g),m=y,()=>{l.removeEventListener(c_,g),m=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let _=b(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(y){return f.go(y)}};return T}function HS(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Kt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:jo(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function E0(r,e,i="/"){return GS(r,e,i,!1)}function GS(r,e,i,s){let l=typeof e=="string"?zr(e):e,c=pa(l.pathname||"/",i);if(c==null)return null;let f=b0(r);VS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=$S(c);d=QS(f[m],p,s)}return d}function b0(r,e=[],i=[],s="",l=!1){let c=(f,d,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&m)return;Kt(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let g=Bi([s,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(Kt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),b0(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:ZS(g,f.index),routesMeta:x})};return r.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of T0(f.path))c(f,d,!0,m)}),e}function T0(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=T0(s.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>r.startsWith("/")&&m===""?"/":m)}function VS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:KS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var kS=/^:[\w-]+$/,jS=3,XS=2,WS=1,qS=10,YS=-2,h_=r=>r==="*";function ZS(r,e){let i=r.split("/"),s=i.length;return i.some(h_)&&(s+=YS),e&&(s+=XS),i.filter(l=>!h_(l)).reduce((l,c)=>l+(kS.test(c)?jS:c===""?WS:qS),s)}function KS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function QS(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let d=0;d<s.length;++d){let m=s[d],p=d===s.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=qc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=qc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Bi([c,g.pathname]),pathnameBase:iM(Bi([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=Bi([c,g.pathnameBase]))}return f}function qc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=JS(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let b=d[x]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=d[x];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function JS(r,e=!1,i=!0){Fi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m,p,v)=>{if(s.push({paramName:d,isOptional:m!=null}),m){let g=v.charAt(p+f.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function $S(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function pa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var eM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function tM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?zr(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=d_(i.substring(1),"/"):c=d_(i,e)):c=e,{pathname:c,search:aM(s),hash:sM(l)}}function d_(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function _h(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function A0(r){let e=nM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Zd(r,e,i,s=!1){let l;typeof r=="string"?l=zr(r):(l={...r},Kt(!l.pathname||!l.pathname.includes("?"),_h("?","pathname","search",l)),Kt(!l.pathname||!l.pathname.includes("#"),_h("#","pathname","hash",l)),Kt(!l.search||!l.search.includes("#"),_h("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}d=g>=0?e[g]:"/"}let m=tM(l,d),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var Bi=r=>r.join("/").replace(/\/\/+/g,"/"),iM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),aM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,sM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,rM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function oM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function lM(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var R0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function C0(r,e){let i=r;if(typeof i!="string"||!eM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(R0)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),d=pa(f.pathname,e);f.origin===c.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{Fi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var w0=["POST","PUT","PATCH","DELETE"];new Set(w0);var cM=["GET",...w0];new Set(cM);var Br=ue.createContext(null);Br.displayName="DataRouter";var eu=ue.createContext(null);eu.displayName="DataRouterState";var uM=ue.createContext(!1),D0=ue.createContext({isTransitioning:!1});D0.displayName="ViewTransition";var fM=ue.createContext(new Map);fM.displayName="Fetchers";var hM=ue.createContext(null);hM.displayName="Await";var gi=ue.createContext(null);gi.displayName="Navigation";var Ko=ue.createContext(null);Ko.displayName="Location";var ma=ue.createContext({outlet:null,matches:[],isDataRoute:!1});ma.displayName="Route";var Kd=ue.createContext(null);Kd.displayName="RouteError";var N0="REACT_ROUTER_ERROR",dM="REDIRECT",pM="ROUTE_ERROR_RESPONSE";function mM(r){if(r.startsWith(`${N0}:${dM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function gM(r){if(r.startsWith(`${N0}:${pM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new rM(e.status,e.statusText,e.data)}catch{}}function vM(r,{relative:e}={}){Kt(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=ue.useContext(gi),{hash:l,pathname:c,search:f}=$o(r,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:Bi([i,c])),s.createHref({pathname:d,search:f,hash:l})}function Qo(){return ue.useContext(Ko)!=null}function Ai(){return Kt(Qo(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(Ko).location}var U0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function L0(r){ue.useContext(gi).static||ue.useLayoutEffect(r)}function Jo(){let{isDataRoute:r}=ue.useContext(ma);return r?DM():_M()}function _M(){Kt(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let r=ue.useContext(Br),{basename:e,navigator:i}=ue.useContext(gi),{matches:s}=ue.useContext(ma),{pathname:l}=Ai(),c=JSON.stringify(A0(s)),f=ue.useRef(!1);return L0(()=>{f.current=!0}),ue.useCallback((m,p={})=>{if(Fi(f.current,U0),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=Zd(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Bi([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,r])}ue.createContext(null);function $o(r,{relative:e}={}){let{matches:i}=ue.useContext(ma),{pathname:s}=Ai(),l=JSON.stringify(A0(i));return ue.useMemo(()=>Zd(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function xM(r,e){return O0(r,e)}function O0(r,e,i){Kt(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=ue.useContext(gi),{matches:l}=ue.useContext(ma),c=l[l.length-1],f=c?c.params:{},d=c?c.pathname:"/",m=c?c.pathnameBase:"/",p=c&&c.route;{let y=p&&p.path||"";z0(d,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let v=Ai(),g;if(e){let y=typeof e=="string"?zr(e):e;Kt(m==="/"||y.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${y.pathname}" was given in the \`location\` prop.`),g=y}else g=v;let x=g.pathname||"/",M=x;if(m!=="/"){let y=m.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=E0(r,{pathname:M});Fi(p||b!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Fi(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=bM(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Bi([m,s.encodeLocation?s.encodeLocation(y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?m:Bi([m,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),l,i);return e&&T?ue.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...g},navigationType:"POP"}},T):T}function yM(){let r=wM(),e=oM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:c},"ErrorBoundary")," or"," ",ue.createElement("code",{style:c},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),i?ue.createElement("pre",{style:l},i):null,f)}var SM=ue.createElement(yM,null),P0=class extends ue.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=gM(r.digest);i&&(r=i)}let e=r!==void 0?ue.createElement(ma.Provider,{value:this.props.routeContext},ue.createElement(Kd.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ue.createElement(MM,{error:r},e):e}};P0.contextType=uM;var xh=new WeakMap;function MM({children:r,error:e}){let{basename:i}=ue.useContext(gi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=mM(e.digest);if(s){let l=xh.get(e);if(l)throw l;let c=C0(s.location,i);if(R0&&!xh.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw xh.set(e,f),f}return ue.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function EM({routeContext:r,match:e,children:i}){let s=ue.useContext(Br);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(ma.Provider,{value:r},i)}function bM(r,e=[],i){let s=i?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let l=r,c=s?.errors;if(c!=null){let v=l.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);Kt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let f=!1,d=-1;if(i&&s){f=s.renderFallback;for(let v=0;v<l.length;v++){let g=l[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=v),g.route.id){let{loaderData:x,errors:M}=s,b=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){i.isStatic&&(f=!0),d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}}let m=i?.onError,p=s&&m?(v,g)=>{m(v,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:lM(s.matches),errorInfo:g})}:void 0;return l.reduceRight((v,g,x)=>{let M,b=!1,T=null,y=null;s&&(M=c&&g.route.id?c[g.route.id]:void 0,T=g.route.errorElement||SM,f&&(d<0&&x===0?(z0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):d===x&&(b=!0,y=g.route.hydrateFallbackElement||null)));let _=e.concat(l.slice(0,x+1)),L=()=>{let U;return M?U=T:b?U=y:g.route.Component?U=ue.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=v,ue.createElement(EM,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:s!=null},children:U})};return s&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?ue.createElement(P0,{location:s.location,revalidation:s.revalidation,component:T,error:M,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):L()},null)}function Qd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TM(r){let e=ue.useContext(Br);return Kt(e,Qd(r)),e}function AM(r){let e=ue.useContext(eu);return Kt(e,Qd(r)),e}function RM(r){let e=ue.useContext(ma);return Kt(e,Qd(r)),e}function Jd(r){let e=RM(r),i=e.matches[e.matches.length-1];return Kt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function CM(){return Jd("useRouteId")}function wM(){let r=ue.useContext(Kd),e=AM("useRouteError"),i=Jd("useRouteError");return r!==void 0?r:e.errors?.[i]}function DM(){let{router:r}=TM("useNavigate"),e=Jd("useNavigate"),i=ue.useRef(!1);return L0(()=>{i.current=!0}),ue.useCallback(async(l,c={})=>{Fi(i.current,U0),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var p_={};function z0(r,e,i){!e&&!p_[r]&&(p_[r]=!0,Fi(!1,i))}ue.memo(NM);function NM({routes:r,future:e,state:i,isStatic:s,onError:l}){return O0(r,void 0,{state:i,isStatic:s,onError:l})}function Un(r){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function UM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Kt(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),m=ue.useMemo(()=>({basename:d,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[d,l,c,f]);typeof i=="string"&&(i=zr(i));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:M="default",unstable_mask:b}=i,T=ue.useMemo(()=>{let y=pa(p,d);return y==null?null:{location:{pathname:y,search:v,hash:g,state:x,key:M,unstable_mask:b},navigationType:s}},[d,p,v,g,x,M,s,b]);return Fi(T!=null,`<Router basename="${d}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:ue.createElement(gi.Provider,{value:m},ue.createElement(Ko.Provider,{children:e,value:T}))}function LM({children:r,location:e}){return xM(ad(r),e)}function ad(r,e=[]){let i=[];return ue.Children.forEach(r,(s,l)=>{if(!ue.isValidElement(s))return;let c=[...e,l];if(s.type===ue.Fragment){i.push.apply(i,ad(s.props.children,c));return}Kt(s.type===Un,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=ad(s.props.children,c)),i.push(f)}),i}var Hc="get",Gc="application/x-www-form-urlencoded";function tu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function OM(r){return tu(r)&&r.tagName.toLowerCase()==="button"}function PM(r){return tu(r)&&r.tagName.toLowerCase()==="form"}function zM(r){return tu(r)&&r.tagName.toLowerCase()==="input"}function BM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function IM(r,e){return r.button===0&&(!e||e==="_self")&&!BM(r)}var mc=null;function FM(){if(mc===null)try{new FormData(document.createElement("form"),0),mc=!1}catch{mc=!0}return mc}var HM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yh(r){return r!=null&&!HM.has(r)?(Fi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gc}"`),null):r}function GM(r,e){let i,s,l,c,f;if(PM(r)){let d=r.getAttribute("action");s=d?pa(d,e):null,i=r.getAttribute("method")||Hc,l=yh(r.getAttribute("enctype"))||Gc,c=new FormData(r)}else if(OM(r)||zM(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||d.getAttribute("action");if(s=m?pa(m,e):null,i=r.getAttribute("formmethod")||d.getAttribute("method")||Hc,l=yh(r.getAttribute("formenctype"))||yh(d.getAttribute("enctype"))||Gc,c=new FormData(d,r),!FM()){let{name:p,type:v,value:g}=r;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(tu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Hc,s=null,l=Gc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $d(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function VM(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&pa(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function kM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function XM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await kM(c,i);return f.links?f.links():[]}return[]}));return ZM(s.flat(1).filter(jM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function m_(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let v=s.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function WM(r,e,{includeHydrateFallback:i}={}){return qM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function qM(r){return[...new Set(r)]}function YM(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function ZM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(YM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function B0(){let r=ue.useContext(Br);return $d(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function KM(){let r=ue.useContext(eu);return $d(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ep=ue.createContext(void 0);ep.displayName="FrameworkContext";function I0(){let r=ue.useContext(ep);return $d(r,"You must render this element inside a <HydratedRouter> element"),r}function QM(r,e){let i=ue.useContext(ep),[s,l]=ue.useState(!1),[c,f]=ue.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=ue.useRef(null);ue.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let T=_=>{_.forEach(L=>{f(L.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[r]),ue.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:Oo(d,M),onBlur:Oo(m,b),onMouseEnter:Oo(p,M),onMouseLeave:Oo(v,b),onTouchStart:Oo(g,M)}]:[!1,x,{}]}function Oo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function JM({page:r,...e}){let{router:i}=B0(),s=ue.useMemo(()=>E0(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?ue.createElement(eE,{page:r,matches:s,...e}):null}function $M(r){let{manifest:e,routeModules:i}=I0(),[s,l]=ue.useState([]);return ue.useEffect(()=>{let c=!1;return XM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function eE({page:r,matches:e,...i}){let s=Ai(),{future:l,manifest:c,routeModules:f}=I0(),{basename:d}=B0(),{loaderData:m,matches:p}=KM(),v=ue.useMemo(()=>m_(r,e,p,c,s,"data"),[r,e,p,c,s]),g=ue.useMemo(()=>m_(r,e,p,c,s,"assets"),[r,e,p,c,s]),x=ue.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let T=new Set,y=!1;if(e.forEach(L=>{let U=c.routes[L.route.id];!U||!U.hasLoader||(!v.some(N=>N.route.id===L.route.id)&&L.route.id in m&&f[L.route.id]?.shouldRevalidate||U.hasClientLoader?y=!0:T.add(L.route.id))}),T.size===0)return[];let _=VM(r,d,l.unstable_trailingSlashAwareDataRequests,"data");return y&&T.size>0&&_.searchParams.set("_routes",e.filter(L=>T.has(L.route.id)).map(L=>L.route.id).join(",")),[_.pathname+_.search]},[d,l.unstable_trailingSlashAwareDataRequests,m,s,c,v,e,r,f]),M=ue.useMemo(()=>WM(g,c),[g,c]),b=$M(g);return ue.createElement(ue.Fragment,null,x.map(T=>ue.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),M.map(T=>ue.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),b.map(({key:T,link:y})=>ue.createElement("link",{key:T,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function tE(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var nE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nE&&(window.__reactRouterVersion="7.13.1")}catch{}function iE({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=ue.useRef();l.current==null&&(l.current=BS({window:s,v5Compat:!0}));let c=l.current,[f,d]=ue.useState({action:c.action,location:c.location}),m=ue.useCallback(p=>{i===!1?d(p):ue.startTransition(()=>d(p))},[i]);return ue.useLayoutEffect(()=>c.listen(m),[c,m]),ue.createElement(UM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var F0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,H0=ue.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,unstable_mask:d,state:m,target:p,to:v,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:M,...b},T){let{basename:y,navigator:_,unstable_useTransitions:L}=ue.useContext(gi),U=typeof v=="string"&&F0.test(v),N=C0(v,y);v=N.to;let I=vM(v,{relative:l}),F=Ai(),z=null;if(d){let le=Zd(d,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);y!=="/"&&(le.pathname=le.pathname==="/"?y:Bi([y,le.pathname])),z=_.createHref(le)}let[X,w,D]=QM(s,b),V=oE(v,{replace:f,unstable_mask:d,state:m,target:p,preventScrollReset:g,relative:l,viewTransition:x,unstable_defaultShouldRevalidate:M,unstable_useTransitions:L});function J(le){e&&e(le),le.defaultPrevented||V(le)}let oe=!(N.isExternal||c),pe=ue.createElement("a",{...b,...D,href:(oe?z:void 0)||N.absoluteURL||I,onClick:oe?J:e,ref:tE(T,w),target:p,"data-discover":!U&&i==="render"?"true":void 0});return X&&!U?ue.createElement(ue.Fragment,null,pe,ue.createElement(JM,{page:I})):pe});H0.displayName="Link";var aE=ue.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},v){let g=$o(f,{relative:p.relative}),x=Ai(),M=ue.useContext(eu),{navigator:b,basename:T}=ue.useContext(gi),y=M!=null&&hE(g)&&d===!0,_=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,L=x.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&T&&(U=pa(U,T)||U);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=L===_||!l&&L.startsWith(_)&&L.charAt(N)==="/",F=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),z={isActive:I,isPending:F,isTransitioning:y},X=I?e:void 0,w;typeof s=="function"?w=s(z):w=[s,I?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(z):c;return ue.createElement(H0,{...p,"aria-current":X,className:w,ref:v,style:D,to:f,viewTransition:d},typeof m=="function"?m(z):m)});aE.displayName="NavLink";var sE=ue.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=Hc,action:d,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},b)=>{let{unstable_useTransitions:T}=ue.useContext(gi),y=uE(),_=fE(d,{relative:p}),L=f.toLowerCase()==="get"?"get":"post",U=typeof d=="string"&&F0.test(d),N=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let F=I.nativeEvent.submitter,z=F?.getAttribute("formmethod")||f,X=()=>y(F||I.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});T&&i!==!1?ue.startTransition(()=>X()):X()};return ue.createElement("form",{ref:b,method:L,action:_,onSubmit:s?m:N,...M,"data-discover":!U&&r==="render"?"true":void 0})});sE.displayName="Form";function rE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G0(r){let e=ue.useContext(Br);return Kt(e,rE(r)),e}function oE(r,{target:e,replace:i,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:m,unstable_useTransitions:p}={}){let v=Jo(),g=Ai(),x=$o(r,{relative:f});return ue.useCallback(M=>{if(IM(M,e)){M.preventDefault();let b=i!==void 0?i:jo(g)===jo(x),T=()=>v(r,{replace:b,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:m});p?ue.startTransition(()=>T()):T()}},[g,v,x,i,s,l,e,r,c,f,d,m,p])}var lE=0,cE=()=>`__${String(++lE)}__`;function uE(){let{router:r}=G0("useSubmit"),{basename:e}=ue.useContext(gi),i=CM(),s=r.fetch,l=r.navigate;return ue.useCallback(async(c,f={})=>{let{action:d,method:m,encType:p,formData:v,body:g}=GM(c,e);if(f.navigate===!1){let x=f.fetcherKey||cE();await s(x,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function fE(r,{relative:e}={}){let{basename:i}=ue.useContext(gi),s=ue.useContext(ma);Kt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...$o(r||".",{relative:e})},f=Ai();if(r==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(v=>v==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();c.search=v?`?${v}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Bi([i,c.pathname])),jo(c)}function hE(r,{relative:e}={}){let i=ue.useContext(D0);Kt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=G0("useViewTransitionState"),l=$o(r,{relative:e});if(!i.isTransitioning)return!1;let c=pa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=pa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return qc(l.pathname,f)!=null||qc(l.pathname,c)!=null}const tp="/gullystat/assets/logo-B69as7Ir.png",g_=[{id:"live",emoji:"🏏",tag:"Core",title:"Live Ball-by-Ball Scoring",desc:"Log every delivery in seconds. Real-time run rates, required rates, partnership tracker, wagonwheel, and full fall-of-wickets — all updating live as you play.",bullets:["Ball-by-ball entry","Live RRR calculator","Partnership tracker","Fall of wickets log"],accent:"#f0c840"},{id:"formats",emoji:"🎮",tag:"Game Modes",title:"6 Game Formats",desc:"Hundrum (100-ball), Overum (custom overs), Solo challenges, Team vs Team, Ghost Mode battles, and tournament brackets. Every variant your mohalla plays.",bullets:["Hundrum · 100-ball format","Overum · set your own overs","Solo challenge mode","Team vs Team + tournaments"],accent:"#60c8f0"},{id:"ai",emoji:"🤖",tag:"AI",title:"AI Match Reports",desc:"After every match GullyStat writes a full broadcast-style report — star performers, momentum shifts, turning points, and man of the match. Share it instantly.",bullets:["Auto-generated after every match","Star performer highlights","Momentum shift analysis","One-tap share as image"],accent:"#a78bfa"},{id:"stats",emoji:"📊",tag:"Analytics",title:"Deep Player Stats",desc:"Career averages, strike rates, economy, milestones, and form graphs — tracked separately per format. Watch your journey from gully rookie to mohalla legend.",bullets:["Batting + bowling averages","Format-split career stats","Milestone tracking (50s, 100s)","Form graph over last 10 matches"],accent:"#34d399"},{id:"ghost",emoji:"👻",tag:"Ghost Mode",title:"Ghost Profile",desc:'Play in the shadows. Build a reputation without revealing your identity. Appear on leaderboards as "???" — then reveal yourself when the time is right.',bullets:["Anonymous identity",'Leaderboard slot shows "???"',"Reveal yourself anytime","Build the mystery"],accent:"#f87171"},{id:"social",emoji:"🏆",tag:"Social",title:"Leaderboards & H2H",desc:"Mohalla-level leaderboards, head-to-head records, rivalry scores. Know exactly who you own and who owns you — with receipts.",bullets:["Mohalla leaderboards","Head-to-head records","Rivalry tracking","Season & all-time rankings"],accent:"#fbbf24"}];function Sh({topColor:r,bottomColor:e,speed:i="7s"}){const m=()=>E.jsxs("svg",{viewBox:"0 0 1440 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"bw-svg",children:[E.jsx("rect",{x:"-1",y:72,width:1442,height:29,fill:e}),Array.from({length:12},(p,v)=>E.jsx("circle",{cx:v*120+60,cy:72,r:60,fill:e},v))]});return E.jsx("div",{className:"bw-wrap",style:{background:r},children:E.jsxs("div",{className:"bw-track",style:{animationDuration:i},children:[E.jsx(m,{}),E.jsx(m,{})]})})}const dE=["4","W","1","6","1","2"],pE=[{name:"Rahul S",star:!0,r:67,b:44,sr:152},{name:"Suresh K",star:!1,r:38,b:22,sr:172}],mE=[{v:"9",l:"Fours",gold:!0},{v:"5",l:"Sixes",gold:!0},{v:"8",l:"Wkts",red:!0},{v:"48",l:"P'ship"}],gE=[{v:"9.3",l:"Run Rate"},{v:"30.7",l:"Req Rate",red:!0},{v:"152",l:"Str Rate"}],vE=[{ball:"6",type:"s",text:"18.4 — Rahul smashes over long-on! Massive six!"},{ball:"W",type:"w",text:"17.2 — Caught at mid-off! Arjun out for 28"},{ball:"4",type:"f",text:"17.1 — Driven through covers, races away!"}],_E=[{l:"P'ship",v:"48 runs"},{l:"Bndrys",v:"9×4  5×6"},{l:"Econ",v:"Vikram 6.0"}],xE=r=>r==="W"?"pb pb-w":r==="6"?"pb pb-s":r==="4"?"pb pb-f":"pb pb-n",yE=r=>r==="s"?"ct ct-s":r==="w"?"ct ct-w":"ct ct-f";function SE(){return E.jsx("div",{className:"phone",children:E.jsxs("div",{className:"phone-shell",children:[E.jsx("div",{className:"ph-btn ph-vol1"}),E.jsx("div",{className:"ph-btn ph-vol2"}),E.jsx("div",{className:"ph-btn ph-pwr"}),E.jsxs("div",{className:"phone-screen",children:[E.jsx("div",{className:"ph-island"}),E.jsxs("div",{className:"ph-status",children:[E.jsx("span",{className:"ph-time",children:"9:41"}),E.jsxs("div",{className:"ph-icons",children:[E.jsxs("svg",{width:"11",height:"8",viewBox:"0 0 12 8",fill:"none",children:[E.jsx("rect",{x:"0",y:"4",width:"2",height:"4",rx:"0.5",fill:"rgba(242,237,228,0.55)"}),E.jsx("rect",{x:"3",y:"2.5",width:"2",height:"5.5",rx:"0.5",fill:"rgba(242,237,228,0.65)"}),E.jsx("rect",{x:"6",y:"1",width:"2",height:"7",rx:"0.5",fill:"rgba(242,237,228,0.80)"}),E.jsx("rect",{x:"9",y:"0",width:"2",height:"8",rx:"0.5",fill:"rgba(242,237,228,1)"})]}),E.jsxs("div",{className:"ph-batt",children:[E.jsx("div",{className:"ph-batt-fill"}),E.jsx("div",{className:"ph-batt-tip"})]})]})]}),E.jsxs("div",{className:"ph-header",children:[E.jsxs("div",{className:"ph-header-left",children:[E.jsx("span",{className:"ph-appname",children:"GullyStat"}),E.jsx("span",{className:"ph-appsub",children:"Live Match"})]}),E.jsxs("div",{className:"ph-live-pill",children:[E.jsx("span",{className:"ph-live-dot"}),E.jsx("span",{children:"LIVE"})]})]}),E.jsxs("div",{className:"ph-block",children:[E.jsx("div",{className:"ph-lbl",children:"📋 Scorecard · Overum 20"}),E.jsxs("div",{className:"ph-teams",children:[E.jsxs("div",{className:"ph-team",children:[E.jsx("span",{className:"ph-tname",children:"Team A"}),E.jsxs("span",{className:"ph-runs",children:["187",E.jsx("em",{children:"/6"})]}),E.jsx("span",{className:"ph-ov",children:"20.0 ov · CRR 7.7"})]}),E.jsx("div",{className:"ph-vs-col",children:E.jsx("span",{className:"ph-vs",children:"VS"})}),E.jsxs("div",{className:"ph-team ph-team-r",children:[E.jsx("span",{className:"ph-tname",children:"Team B"}),E.jsxs("span",{className:"ph-runs ph-batting",children:["142",E.jsx("em",{children:"/8"})]}),E.jsx("span",{className:"ph-ov",children:"18.3 ov · batting"})]})]}),E.jsx("div",{className:"ph-chase",children:"⚡ Need 46 off 9 · RRR 30.67"})]}),E.jsxs("div",{className:"ph-row2",children:[E.jsxs("div",{className:"ph-block ph-batting-block",children:[E.jsx("div",{className:"ph-lbl",children:"🏏 Batting"}),pE.map((r,e)=>E.jsxs("div",{className:"ph-batter",children:[E.jsxs("span",{className:"ph-bname",children:[r.name,r.star&&E.jsx("span",{className:"ph-star",children:" ★"})]}),E.jsxs("div",{className:"ph-bstats",children:[E.jsx("span",{className:"ph-brun",children:r.r}),E.jsxs("span",{className:"ph-bball",children:["(",r.b,")"]}),E.jsxs("span",{className:"ph-bsr",children:["SR ",r.sr]})]})]},e)),E.jsx("div",{className:"ph-divider"}),E.jsxs("div",{className:"ph-batter",children:[E.jsxs("span",{className:"ph-bname ph-bowler",children:["Vikram P ",E.jsx("span",{className:"ph-bowl-tag",children:"bowl"})]}),E.jsxs("div",{className:"ph-bstats",children:[E.jsx("span",{className:"ph-brun",children:"2"}),E.jsx("span",{className:"ph-bball",children:"/18 (3)"})]})]})]}),E.jsxs("div",{className:"ph-right-col",children:[E.jsxs("div",{className:"ph-block ph-balls-block",children:[E.jsx("div",{className:"ph-lbl",children:"🎯 Last 6"}),E.jsx("div",{className:"ph-balls",children:dE.map((r,e)=>E.jsx("span",{className:xE(r),children:r},e))})]}),E.jsxs("div",{className:"ph-block ph-grid-block",children:[E.jsx("div",{className:"ph-lbl",children:"📊 Stats"}),E.jsx("div",{className:"ph-g4",children:mE.map((r,e)=>E.jsxs("div",{className:"ph-gs",children:[E.jsx("span",{className:"ph-gv"+(r.gold?" ph-gold":r.red?" ph-red":""),children:r.v}),E.jsx("span",{className:"ph-gl",children:r.l})]},e))}),E.jsx("div",{className:"ph-g3",children:gE.map((r,e)=>E.jsxs("div",{className:"ph-gs",children:[E.jsx("span",{className:"ph-gv"+(r.red?" ph-red":""),children:r.v}),E.jsx("span",{className:"ph-gl",children:r.l})]},e))})]})]})]}),E.jsxs("div",{className:"ph-block ph-comm-block",children:[E.jsx("div",{className:"ph-lbl",children:"🎙️ Commentary"}),vE.map((r,e)=>E.jsxs("div",{className:"ph-comm",children:[E.jsx("span",{className:yE(r.type),children:r.ball}),E.jsx("span",{className:"ph-comm-text",children:r.text})]},e))]}),E.jsxs("div",{className:"ph-bottom-row",children:[E.jsxs("div",{className:"ph-block ph-report-block",children:[E.jsx("div",{className:"ph-lbl",children:"🤖 AI Report"}),E.jsx("p",{className:"ph-report-p",children:"Rahul's 67★ keeps chase alive. RRR 30.67 near impossible — 2 wkts left."}),E.jsxs("div",{className:"ph-rtags",children:[E.jsx("span",{className:"ph-rtag",children:"Rahul 67★"}),E.jsx("span",{className:"ph-rtag ph-rtag-r",children:"Vikram 2/18"})]})]}),E.jsxs("div",{className:"ph-block ph-summary-block",children:[E.jsx("div",{className:"ph-lbl",children:"📝 Summary"}),_E.map((r,e)=>E.jsxs("div",{className:"ph-sum-row",children:[E.jsx("span",{className:"ph-sum-l",children:r.l}),E.jsx("span",{className:"ph-sum-v",children:r.v})]},e))]})]}),E.jsx("div",{className:"ph-nav",children:[{ic:"🏠",l:"Home"},{ic:"📊",l:"Stats"},{ic:"🏏",l:"Live"},{ic:"🏆",l:"Board"},{ic:"👤",l:"Profile"}].map((r,e)=>E.jsxs("div",{className:"ph-nav-item"+(e===2?" ph-nav-active":""),children:[E.jsx("span",{className:"ph-nav-ic",children:r.ic}),E.jsx("span",{className:"ph-nav-l",children:r.l})]},e))})]})]})})}function ME(){const r=Jo(),e=ue.useRef(null),[i,s]=ue.useState(!1),[l,c]=ue.useState(!1),[f,d]=ue.useState("live"),m=g_.find(g=>g.id===f);ue.useEffect(()=>{const g=e.current;if(!g)return;const x=()=>c(g.scrollTop>500);return g.addEventListener("scroll",x,{passive:!0}),()=>g.removeEventListener("scroll",x)},[]);const p=g=>{const x=e.current,M=document.getElementById(g);!x||!M||(x.scrollTo({top:M.offsetTop-70,behavior:"smooth"}),s(!1))},v=()=>{e.current?.scrollTo({top:0,behavior:"smooth"})};return E.jsx("div",{className:"landing-root",ref:e,children:E.jsxs("div",{className:"landing-content",children:[E.jsxs("nav",{className:"top-nav",children:[E.jsxs("div",{className:"nav-inner",children:[E.jsxs("div",{className:"nav-brand",onClick:v,children:[E.jsx("img",{src:tp,alt:"GullyStat",className:"nav-logo"}),E.jsx("span",{className:"nav-name",children:"GULLYSTAT"})]}),E.jsx("div",{className:"nav-links",children:[{label:"Features",id:"features"},{label:"Formats",id:"formats"},{label:"About",id:"about"}].map(g=>E.jsx("button",{className:"nav-link",onClick:()=>p(g.id),children:g.label},g.id))}),E.jsxs("div",{className:"nav-cta-d",children:[E.jsx("button",{className:"nav-login",onClick:()=>r("/login"),children:"Login"}),E.jsx("button",{className:"nav-launch",onClick:()=>r("/dashboard"),children:"🏏 Launch App"})]}),E.jsxs("button",{className:`nav-burger ${i?"open":""}`,onClick:()=>s(g=>!g),children:[E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{})]})]}),i&&E.jsxs("div",{className:"nav-mob-drop",children:[[{label:"Features",id:"features"},{label:"Formats",id:"formats"},{label:"About",id:"about"}].map(g=>E.jsx("button",{className:"nav-mob-link",onClick:()=>p(g.id),children:g.label},g.id)),E.jsx("div",{className:"nav-mob-sep"}),E.jsx("button",{className:"nav-mob-launch",onClick:()=>{r("/dashboard"),s(!1)},children:"🏏 Launch App"})]})]}),E.jsxs("button",{className:`back-top ${l?"visible":""}`,onClick:v,children:[E.jsx("span",{children:"↑"}),E.jsx("span",{children:"TOP"})]}),E.jsxs("section",{className:"sec-hero",id:"hero",children:[E.jsx("div",{className:"hero-bg-grad"}),E.jsx("div",{className:"hero-bg-dots"}),E.jsx("div",{className:"hero-bg-vignette"}),E.jsxs("div",{className:"hero-wrap",children:[E.jsxs("div",{className:"hero-left",children:[E.jsxs("div",{className:"hero-badge",children:[E.jsx("span",{className:"hero-dot"}),"LOCAL CRICKET · PROFESSIONAL ANALYTICS"]}),E.jsxs("h1",{className:"hero-h1",children:["Your gully.",E.jsx("br",{}),"Your stats.",E.jsx("br",{}),E.jsx("span",{className:"hero-accent",children:"Your legacy."})]}),E.jsxs("p",{className:"hero-sub",children:["What Cricinfo does for internationals —",E.jsx("br",{}),"GullyStat does for your mohalla."]}),E.jsx("div",{className:"hero-tags",children:["Hundrum · 100-ball","Overum · Custom","Live Scoring","AI Reports","Ghost Mode","Leaderboards"].map(g=>E.jsx("span",{className:"hero-tag",children:g},g))}),E.jsxs("div",{className:"hero-btns",children:[E.jsx("button",{className:"btn-gold",onClick:()=>r("/dashboard"),children:"🏏 Start Tracking"}),E.jsx("button",{className:"btn-ghost",onClick:()=>p("features"),children:"See Features ↓"})]}),E.jsx("div",{className:"hero-stats",children:[{v:"6",l:"Game Modes"},{v:"100+",l:"Matches"},{v:"AI",l:"Reports"},{v:"👻",l:"Ghost Mode"}].map((g,x)=>E.jsxs("div",{className:"hstat",children:[E.jsx("span",{className:"hstat-v",children:g.v}),E.jsx("span",{className:"hstat-l",children:g.l})]},x))})]}),E.jsxs("div",{className:"hero-right",children:[E.jsx("div",{className:"phone-glow"}),E.jsx(SE,{}),E.jsx("div",{className:"phone-tag",children:"📱 Available on Mobile"})]})]}),E.jsxs("div",{className:"scroll-hint",onClick:()=>p("features"),children:[E.jsx("span",{className:"scroll-hint-text",children:"scroll down"}),E.jsx("span",{className:"scroll-hint-arrow",children:"↓"})]}),E.jsx(Sh,{topColor:"#07110a",bottomColor:"#0d1f3c",speed:"7s"})]}),E.jsx("section",{className:"sec-features",id:"features",children:E.jsxs("div",{className:"sec-inner",children:[E.jsx("div",{className:"sec-eyebrow",children:"CORE FEATURES"}),E.jsxs("h2",{className:"sec-title",children:["What GullyStat",E.jsx("br",{}),E.jsx("span",{className:"sec-accent",children:"gives you"})]}),E.jsx("p",{className:"sec-sub",children:"Every feature designed for how gully cricket is actually played — loud, local, and legendary."}),E.jsxs("div",{className:"ft-explorer",children:[E.jsx("div",{className:"ft-tabs",children:g_.map(g=>E.jsxs("button",{className:"ft-tab"+(f===g.id?" ft-tab-on":""),onClick:()=>d(g.id),style:f===g.id?{"--ac":g.accent}:{},children:[E.jsx("span",{className:"ft-tab-em",children:g.emoji}),E.jsx("span",{className:"ft-tab-name",children:g.title})]},g.id))}),E.jsxs("div",{className:"ft-detail",style:{"--ac":m.accent},children:[E.jsx("div",{className:"ft-detail-tag",children:m.tag}),E.jsxs("div",{className:"ft-detail-top",children:[E.jsx("span",{className:"ft-detail-em",children:m.emoji}),E.jsx("h3",{className:"ft-detail-title",children:m.title})]}),E.jsx("p",{className:"ft-detail-desc",children:m.desc}),E.jsx("ul",{className:"ft-bullets",children:m.bullets.map((g,x)=>E.jsxs("li",{className:"ft-bullet",children:[E.jsx("span",{className:"ft-bullet-dot",style:{background:m.accent,boxShadow:`0 0 6px ${m.accent}`}}),g]},x))}),E.jsx("button",{className:"ft-detail-cta",style:{color:m.accent,borderColor:m.accent+"44",background:m.accent+"12"},onClick:()=>r("/dashboard"),children:"Try it now →"})]})]})]})}),E.jsx(Sh,{topColor:"#0d1f3c",bottomColor:"#160d2e",speed:"5s"}),E.jsx("section",{className:"sec-formats",id:"formats",children:E.jsxs("div",{className:"sec-inner",children:[E.jsx("div",{className:"sec-eyebrow",children:"GAME MODES"}),E.jsxs("h2",{className:"sec-title",children:["Play your",E.jsx("br",{}),E.jsx("span",{className:"sec-accent",children:"way"})]}),E.jsx("p",{className:"sec-sub",children:"6 formats for every kind of gully cricket. Pick your game."}),E.jsx("div",{className:"fmt-grid",children:[{name:"Hundrum",tag:"100-BALL",color:"#3b82f6",desc:"No overs, just 100 balls. Every delivery counts. Explosive, chaotic, addictive."},{name:"Overum",tag:"CUSTOM OVERS",color:"#f0c840",desc:"You set the rules. 5 overs, 10, 20 — your match, your terms."},{name:"Solo",tag:"CHALLENGE",color:"#34d399",desc:"Set a target, bat alone against a ghost score. No team needed."},{name:"Ghost",tag:"ANONYMOUS",color:"#a78bfa",desc:"Your stats are real. Your identity is hidden. Be the phantom of the mohalla."},{name:"Team",tag:"CLASSIC",color:"#f87171",desc:"Full squad vs squad. Complete scorecard, batting & bowling stats."},{name:"Tourney",tag:"BRACKET",color:"#fbbf24",desc:"Mohalla championship mode. Knockout brackets, group stages, finals."}].map((g,x)=>E.jsxs("div",{className:"fmt-card",style:{"--fc":g.color},children:[E.jsxs("div",{className:"fmt-num",children:["0",x+1]}),E.jsx("div",{className:"fmt-pill",style:{color:g.color,background:g.color+"18",border:`1px solid ${g.color}44`},children:g.name}),E.jsx("div",{className:"fmt-tag",children:g.tag}),E.jsx("p",{className:"fmt-desc",children:g.desc})]},x))})]})}),E.jsx(Sh,{topColor:"#160d2e",bottomColor:"#040c06",speed:"9s"}),E.jsx("section",{className:"sec-cta",id:"about",children:E.jsxs("div",{className:"cta-inner",children:[E.jsxs("div",{className:"cta-left",children:[E.jsx("div",{className:"sec-eyebrow",children:"FREE · NO SETUP · JUST CRICKET"}),E.jsxs("h2",{className:"sec-title",children:["Ready to track",E.jsx("br",{}),E.jsx("span",{className:"cta-accent",children:"your legacy?"})]}),E.jsx("p",{className:"sec-sub",children:"Join mohallas across India scoring every gully match like it's an international."}),E.jsxs("div",{className:"cta-btns",children:[E.jsx("button",{className:"btn-gold lg",onClick:()=>r("/dashboard"),children:"🏏 Start Tracking — Free"}),E.jsx("button",{className:"btn-ghost",onClick:v,children:"↑ Back to Top"})]})]}),E.jsx("div",{className:"cta-checklist",children:[{e:"🏏",t:"Live ball-by-ball scoring"},{e:"🤖",t:"AI match reports after every game"},{e:"📊",t:"Career stats tracked per format"},{e:"👻",t:"Ghost mode — play anonymous"},{e:"🏆",t:"Mohalla leaderboards"},{e:"⚔️",t:"Head-to-head records & rivalries"}].map((g,x)=>E.jsxs("div",{className:"cta-check",children:[E.jsx("span",{className:"cta-check-em",children:g.e}),g.t]},x))})]})})]})})}const EE=[{icon:"🏏",label:"Matches",value:"47",sub:"+3 this week",color:"#39ff14"},{icon:"📊",label:"Avg",value:"38.2",sub:"↑ 4.1 pts",color:"#f0c840"},{icon:"⚡",label:"Strike Rate",value:"142",sub:"T20 format",color:"#60c8f0"},{icon:"🎯",label:"Wickets",value:"23",sub:"Econ 6.8",color:"#a78bfa"}],bE=[{id:1,teams:["Street Kings","Mohalla XI"],score:["148/6","142/9"],overs:"20",result:"W",date:"Today",format:"Overum"},{id:2,teams:["Gully Boys","Night Owls"],score:["98/4","99/2"],overs:"10",result:"L",date:"Yesterday",format:"Hundrum"},{id:3,teams:["Elite XI","Street Kings"],score:["210/3","187/8"],overs:"20",result:"W",date:"3 days ago",format:"Overum"}],TE=[{rank:1,name:"Virat G.",avg:62.4,emoji:"🥇"},{rank:2,name:"Rohit S.",avg:58.1,emoji:"🥈"},{rank:3,name:"You",avg:38.2,emoji:"⭐",you:!0},{rank:4,name:"Hardik P.",avg:34.7,emoji:"▪️"}];function AE(){const r=Jo(),[e,i]=ue.useState(!1);return ue.useEffect(()=>{setTimeout(()=>i(!0),50)},[]),E.jsxs("div",{className:`dash ${e?"visible":""}`,children:[E.jsxs("div",{className:"dash-welcome",children:[E.jsxs("div",{className:"dash-welcome-left",children:[E.jsx("div",{className:"dash-tag",children:"⚡ MATCH READY"}),E.jsxs("h1",{className:"dash-heading",children:["Welcome back,",E.jsx("br",{}),E.jsx("span",{className:"dash-name",children:"Gully Legend"})]}),E.jsx("p",{className:"dash-sub",children:"Your next match is waiting. Track it live, own the stats."}),E.jsxs("div",{className:"dash-actions",children:[E.jsx("button",{className:"dash-btn-primary",onClick:()=>r("/start-match"),children:"🏏 Start New Match"}),E.jsx("button",{className:"dash-btn-ghost",onClick:()=>r("/live-scorer"),children:"📡 Live Scorer"})]})]}),E.jsx("div",{className:"dash-welcome-right",children:E.jsx("div",{className:"dash-cricket-ball",children:E.jsx("div",{className:"ball-inner",children:"🏏"})})})]}),E.jsx("div",{className:"dash-stats",children:EE.map((s,l)=>E.jsxs("div",{className:"stat-card",style:{"--sc":s.color,animationDelay:`${.05+l*.08}s`},children:[E.jsx("div",{className:"stat-icon",children:s.icon}),E.jsx("div",{className:"stat-value",children:s.value}),E.jsx("div",{className:"stat-label",children:s.label}),E.jsx("div",{className:"stat-sub",children:s.sub}),E.jsx("div",{className:"stat-bar",children:E.jsx("div",{className:"stat-bar-fill",style:{width:`${60+l*10}%`,background:s.color}})})]},l))}),E.jsxs("div",{className:"dash-cols",children:[E.jsxs("div",{className:"dash-panel",style:{animationDelay:"0.25s"},children:[E.jsxs("div",{className:"panel-header",children:[E.jsx("span",{className:"panel-title",children:"Recent Matches"}),E.jsx("button",{className:"panel-link",onClick:()=>r("/scorecard"),children:"View all →"})]}),E.jsx("div",{className:"match-list",children:bE.map((s,l)=>E.jsxs("div",{className:"match-row",style:{animationDelay:`${.3+l*.07}s`},children:[E.jsx("div",{className:`match-result ${s.result==="W"?"win":"loss"}`,children:s.result}),E.jsxs("div",{className:"match-info",children:[E.jsxs("div",{className:"match-teams",children:[s.teams[0]," ",E.jsx("span",{children:"vs"})," ",s.teams[1]]}),E.jsxs("div",{className:"match-meta",children:[s.format," · ",s.overs," overs · ",s.date]})]}),E.jsxs("div",{className:"match-scores",children:[E.jsx("span",{className:"match-score-a",children:s.score[0]}),E.jsx("span",{className:"match-score-sep",children:":"}),E.jsx("span",{className:"match-score-b",children:s.score[1]})]})]},s.id))})]}),E.jsxs("div",{className:"dash-panel",style:{animationDelay:"0.3s"},children:[E.jsxs("div",{className:"panel-header",children:[E.jsx("span",{className:"panel-title",children:"🏆 Leaderboard"}),E.jsx("button",{className:"panel-link",onClick:()=>r("/leaderboard"),children:"Full board →"})]}),E.jsx("div",{className:"lb-list",children:TE.map((s,l)=>E.jsxs("div",{className:`lb-row ${s.you?"lb-you":""}`,style:{animationDelay:`${.35+l*.06}s`},children:[E.jsx("span",{className:"lb-rank",children:s.emoji}),E.jsxs("span",{className:"lb-name",children:[s.name,s.you&&E.jsx("span",{className:"lb-you-tag",children:" YOU"})]}),E.jsx("span",{className:"lb-avg",children:s.avg}),E.jsx("div",{className:"lb-bar-wrap",children:E.jsx("div",{className:"lb-bar",style:{width:`${s.avg/70*100}%`}})})]},l))})]})]}),E.jsx("div",{className:"dash-quick",children:[{icon:"⚡",label:"Challenges",path:"/challenges",color:"#f0c840"},{icon:"⚔️",label:"Head to Head",path:"/head-to-head",color:"#f87171"},{icon:"🥇",label:"Tournaments",path:"/tournaments",color:"#60c8f0"},{icon:"👻",label:"Ghost Profile",path:"/ghost-profile",color:"#a78bfa"},{icon:"🎖️",label:"My Badges",path:"/badges",color:"#34d399"},{icon:"📊",label:"My Stats",path:"/player/me",color:"#39ff14"}].map((s,l)=>E.jsxs("button",{className:"quick-card",style:{"--qc":s.color,animationDelay:`${.4+l*.05}s`},onClick:()=>r(s.path),children:[E.jsx("span",{className:"quick-icon",children:s.icon}),E.jsx("span",{className:"quick-label",children:s.label}),E.jsx("span",{className:"quick-arrow",children:"→"})]},l))})]})}function RE(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"StartMatch Page"})}function CE(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"LiveScorer Page"})}function v_(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Scorecard Page"})}function __(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"PlayerProfile Page"})}function wE(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Leaderboard Page"})}function DE(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Challenges Page"})}function NE(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Badges Page"})}function UE(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"HeadToHead Page"})}function LE(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Tournaments Page"})}function OE(){return E.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"GhostProfile Page"})}const x_=["+1","+2","+4","+6","W!","OUT!","FOUR!","SIX!","NB","WD","★","🏏"],y_=["#f0c840","#f8d860","#34d399","#60c8f0","#a78bfa","#f87171","#fbbf24"];let PE=0;const Mh=()=>++PE;function zE(){const[r,e]=ue.useState([]),i=ue.useCallback(s=>{s.target.tagName.toLowerCase();const l=s.clientX,c=s.clientY,f=y_[Math.floor(Math.random()*y_.length)],d=x_[Math.floor(Math.random()*x_.length)],p={id:Mh(),type:"number",x:l,y:c,label:d,color:f,dx:(Math.random()-.5)*30,dy:-(60+Math.random()*50)},v={id:Mh(),type:"ring",x:l,y:c,color:f},g=Array.from({length:5},(M,b)=>{const T=b/5*Math.PI*2+Math.random()*.4,y=35+Math.random()*45;return{id:Mh(),type:"dot",x:l,y:c,dx:Math.cos(T)*y,dy:Math.sin(T)*y,color:f,size:3+Math.random()*4}});e(M=>[...M,p,v,...g]);const x=[p.id,v.id,...g.map(M=>M.id)];setTimeout(()=>{e(M=>M.filter(b=>!x.includes(b.id)))},900)},[]);return ue.useEffect(()=>(window.addEventListener("click",i),()=>window.removeEventListener("click",i)),[i]),E.jsx("div",{className:"click-overlay","aria-hidden":"true",children:r.map(s=>s.type==="number"?E.jsx("span",{className:"click-number",style:{left:s.x,top:s.y,color:s.color,"--dx":`${s.dx}px`,"--dy":`${s.dy}px`,textShadow:`0 0 12px ${s.color}88, 0 0 28px ${s.color}44`},children:s.label},s.id):s.type==="ring"?E.jsx("span",{className:"click-ring",style:{left:s.x,top:s.y,borderColor:s.color,boxShadow:`0 0 8px ${s.color}66`}},s.id):s.type==="dot"?E.jsx("span",{className:"click-dot",style:{left:s.x,top:s.y,width:s.size,height:s.size,background:s.color,"--dx":`${s.dx}px`,"--dy":`${s.dy}px`,boxShadow:`0 0 6px ${s.color}`}},s.id):null)})}const np="180",BE=0,S_=1,IE=2,V0=1,k0=2,fa=3,Ka=0,jn=1,Oi=2,Ya=0,wr=1,M_=2,E_=3,b_=4,FE=5,As=100,HE=101,GE=102,VE=103,kE=104,jE=200,XE=201,WE=202,qE=203,sd=204,rd=205,YE=206,ZE=207,KE=208,QE=209,JE=210,$E=211,eb=212,tb=213,nb=214,od=0,ld=1,cd=2,Nr=3,ud=4,fd=5,hd=6,dd=7,ip=0,ib=1,ab=2,Za=0,sb=1,rb=2,ob=3,j0=4,lb=5,cb=6,ub=7,X0=300,Ur=301,Lr=302,pd=303,md=304,nu=306,gd=1e3,Cs=1001,vd=1002,Ti=1003,fb=1004,gc=1005,Pi=1006,Eh=1007,ws=1008,Hi=1009,W0=1010,q0=1011,Xo=1012,ap=1013,Ds=1014,ha=1015,el=1016,sp=1017,rp=1018,Wo=1020,Y0=35902,Z0=35899,K0=1021,Q0=1022,bi=1023,qo=1026,Yo=1027,J0=1028,op=1029,$0=1030,lp=1031,cp=1033,Vc=33776,kc=33777,jc=33778,Xc=33779,_d=35840,xd=35841,yd=35842,Sd=35843,Md=36196,Ed=37492,bd=37496,Td=37808,Ad=37809,Rd=37810,Cd=37811,wd=37812,Dd=37813,Nd=37814,Ud=37815,Ld=37816,Od=37817,Pd=37818,zd=37819,Bd=37820,Id=37821,Fd=36492,Hd=36494,Gd=36495,Vd=36283,kd=36284,jd=36285,Xd=36286,hb=3200,db=3201,ex=0,pb=1,Wa="",mi="srgb",Or="srgb-linear",Yc="linear",Ht="srgb",pr=7680,T_=519,mb=512,gb=513,vb=514,tx=515,_b=516,xb=517,yb=518,Sb=519,A_=35044,R_="300 es",zi=2e3,Zc=2001;class Ir{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=Math.PI/180,Wd=180/Math.PI;function tl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function Mb(r,e){return(r%e+e)%e}function Th(r,e,i){return(1-i)*r+i*e}function Po(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,i=0){Tt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3];const x=c[f+0],M=c[f+1],b=c[f+2],T=c[f+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=T;return}if(g!==T||m!==x||p!==M||v!==b){let y=1-d;const _=m*x+p*M+v*b+g*T,L=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const I=Math.sqrt(U),F=Math.atan2(I,_*L);y=Math.sin(y*F)/I,d=Math.sin(d*F)/I}const N=d*L;if(m=m*y+x*N,p=p*y+M*N,v=v*y+b*N,g=g*y+T*N,y===1-d){const I=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=I,p*=I,v*=I,g*=I}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[f],x=c[f+1],M=c[f+2],b=c[f+3];return e[i]=d*b+v*g+m*M-p*x,e[i+1]=m*b+v*x+p*g-d*M,e[i+2]=p*b+v*M+d*x-m*g,e[i+3]=v*b-d*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(c/2),x=m(s/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*b,this._y=p*M*g-x*v*b,this._z=p*v*b+x*M*g,this._w=p*v*g-x*M*b;break;case"YXZ":this._x=x*v*g+p*M*b,this._y=p*M*g-x*v*b,this._z=p*v*b-x*M*g,this._w=p*v*g+x*M*b;break;case"ZXY":this._x=x*v*g-p*M*b,this._y=p*M*g+x*v*b,this._z=p*v*b+x*M*g,this._w=p*v*g-x*M*b;break;case"ZYX":this._x=x*v*g-p*M*b,this._y=p*M*g+x*v*b,this._z=p*v*b-x*M*g,this._w=p*v*g+x*M*b;break;case"YZX":this._x=x*v*g+p*M*b,this._y=p*M*g+x*v*b,this._z=p*v*b-x*M*g,this._w=p*v*g-x*M*b;break;case"XZY":this._x=x*v*g-p*M*b,this._y=p*M*g-x*v*b,this._z=p*v*b+x*M*g,this._w=p*v*g+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=s+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*d+l*p-c*m,this._y=l*v+f*m+c*d-s*p,this._z=c*v+f*p+s*m-l*d,this._w=f*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=f*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(C_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(C_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*s),v=2*(d*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-d*v,this.y=s+m*v+d*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ah.copy(this).projectOnVector(e),this.sub(Ah)}reflect(e){return this.sub(Ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new $,C_=new nl;class ht{constructor(e,i,s,l,c,f,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p)}set(e,i,s,l,c,f,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],x=s[2],M=s[5],b=s[8],T=l[0],y=l[3],_=l[6],L=l[1],U=l[4],N=l[7],I=l[2],F=l[5],z=l[8];return c[0]=f*T+d*L+m*I,c[3]=f*y+d*U+m*F,c[6]=f*_+d*N+m*z,c[1]=p*T+v*L+g*I,c[4]=p*y+v*U+g*F,c[7]=p*_+v*N+g*z,c[2]=x*T+M*L+b*I,c[5]=x*y+M*U+b*F,c[8]=x*_+M*N+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*d*p-s*c*v+s*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*f-d*p,x=d*m-v*c,M=p*c-f*m,b=i*g+s*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=g*T,e[1]=(l*p-v*s)*T,e[2]=(d*s-l*f)*T,e[3]=x*T,e[4]=(v*i-l*m)*T,e[5]=(l*c-d*i)*T,e[6]=M*T,e[7]=(s*m-p*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Rh.makeScale(e,i)),this}rotate(e){return this.premultiply(Rh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Rh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new ht;function nx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Eb(){const r=Kc("canvas");return r.style.display="block",r}const w_={};function Zo(r){r in w_||(w_[r]=!0,console.warn(r))}function bb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const D_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tb(){const r={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Or]:{primaries:e,whitePoint:s,transfer:Yc,toXYZ:D_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Ht,toXYZ:D_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const Dt=Tb();function da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Dr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let mr;class Ab{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{mr===void 0&&(mr=Kc("canvas")),mr.width=e.width,mr.height=e.height;const l=mr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Kc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=da(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(da(i[s]/255)*255):i[s]=da(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rb=0;class up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Ch(l[f].image)):c.push(Ch(l[f]))}else c=Ch(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ab.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cb=0;const wh=new $;class Xn extends Ir{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Cs,l=Cs,c=Pi,f=ws,d=bi,m=Hi,p=Xn.DEFAULT_ANISOTROPY,v=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=tl(),this.name="",this.source=new up(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Cs:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Cs:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=X0;Xn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,i=0,s=0,l=1){Gt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],b=m[9],T=m[2],y=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,N=(M+1)/2,I=(_+1)/2,F=(v+x)/4,z=(g+T)/4,X=(b+y)/4;return U>N&&U>I?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=F/s,c=z/s):N>I?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=F/l,c=X/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=X/c),this.set(s,l,c,i),this}let L=Math.sqrt((y-b)*(y-b)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(g-T)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wb extends Ir{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new Gt(0,0,e,i),this.scissorTest=!1,this.viewport=new Gt(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Xn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new up(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends wb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class ix extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Db extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,yi):yi.fromBufferAttribute(c,f),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),_c.subVectors(this.max,zo),gr.subVectors(e.a,zo),vr.subVectors(e.b,zo),_r.subVectors(e.c,zo),Ha.subVectors(vr,gr),Ga.subVectors(_r,vr),vs.subVectors(gr,_r);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-vs.z,vs.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,vs.z,0,-vs.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-vs.y,vs.x,0];return!Dh(i,gr,vr,_r,_c)||(i=[1,0,0,0,1,0,0,0,1],!Dh(i,gr,vr,_r,_c))?!1:(xc.crossVectors(Ha,Ga),i=[xc.x,xc.y,xc.z],Dh(i,gr,vr,_r,_c))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new $,new $,new $,new $,new $,new $,new $,new $],yi=new $,vc=new il,gr=new $,vr=new $,_r=new $,Ha=new $,Ga=new $,vs=new $,zo=new $,_c=new $,xc=new $,_s=new $;function Dh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){_s.fromArray(r,c);const d=l.x*Math.abs(_s.x)+l.y*Math.abs(_s.y)+l.z*Math.abs(_s.z),m=e.dot(_s),p=i.dot(_s),v=s.dot(_s);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Nb=new il,Bo=new $,Nh=new $;class iu{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Nb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Nh)),this.expandByPoint(Bo.copy(e.center).sub(Nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new $,Uh=new $,yc=new $,Va=new $,Lh=new $,Sc=new $,Oh=new $;class ax{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Uh.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(Uh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(yc),d=Va.dot(this.direction),m=-Va.dot(yc),p=Va.lengthSq(),v=Math.abs(1-f*f);let g,x,M,b;if(v>0)if(g=f*m-d,x=f*d-m,b=c*v,g>=0)if(x>=-b)if(x<=b){const T=1/v;g*=T,x*=T,M=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Uh).addScaledVector(yc,x),M}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const s=oa.dot(this.direction),l=oa.dot(oa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,s,l,c){Lh.subVectors(i,e),Sc.subVectors(s,e),Oh.crossVectors(Lh,Sc);let f=this.direction.dot(Oh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Va.subVectors(this.origin,e);const m=d*this.direction.dot(Sc.crossVectors(Va,Sc));if(m<0)return null;const p=d*this.direction.dot(Lh.cross(Va));if(p<0||m+p>f)return null;const v=-d*Va.dot(Oh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,i,s,l,c,f,d,m,p,v,g,x,M,b,T,y){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p,v,g,x,M,b,T,y)}set(e,i,s,l,c,f,d,m,p,v,g,x,M,b,T,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=b,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),f=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,M=f*g,b=d*v,T=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*v,M=m*g,b=p*v,T=p*g;i[0]=x+T*d,i[4]=b*d-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=M*d-b,i[6]=T+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*v,M=m*g,b=p*v,T=p*g;i[0]=x-T*d,i[4]=-f*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=f*v,i[9]=T-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*v,M=f*g,b=d*v,T=d*g;i[0]=m*v,i[4]=b*p-M,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,b=d*m,T=d*p;i[0]=m*v,i[4]=T-x*g,i[8]=b*g+M,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*g+b,i[10]=x-T*g}else if(e.order==="XZY"){const x=f*m,M=f*p,b=d*m,T=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+T,i[5]=f*v,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*v,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ub,e,Lb)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ka.crossVectors(s,ti),ka.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ka.crossVectors(s,ti)),ka.normalize(),Mc.crossVectors(ti,ka),l[0]=ka.x,l[4]=Mc.x,l[8]=ti.x,l[1]=ka.y,l[5]=Mc.y,l[9]=ti.y,l[2]=ka.z,l[6]=Mc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],x=s[9],M=s[13],b=s[2],T=s[6],y=s[10],_=s[14],L=s[3],U=s[7],N=s[11],I=s[15],F=l[0],z=l[4],X=l[8],w=l[12],D=l[1],V=l[5],J=l[9],oe=l[13],pe=l[2],le=l[6],B=l[10],K=l[14],q=l[3],ye=l[7],Te=l[11],P=l[15];return c[0]=f*F+d*D+m*pe+p*q,c[4]=f*z+d*V+m*le+p*ye,c[8]=f*X+d*J+m*B+p*Te,c[12]=f*w+d*oe+m*K+p*P,c[1]=v*F+g*D+x*pe+M*q,c[5]=v*z+g*V+x*le+M*ye,c[9]=v*X+g*J+x*B+M*Te,c[13]=v*w+g*oe+x*K+M*P,c[2]=b*F+T*D+y*pe+_*q,c[6]=b*z+T*V+y*le+_*ye,c[10]=b*X+T*J+y*B+_*Te,c[14]=b*w+T*oe+y*K+_*P,c[3]=L*F+U*D+N*pe+I*q,c[7]=L*z+U*V+N*le+I*ye,c[11]=L*X+U*J+N*B+I*Te,c[15]=L*w+U*oe+N*K+I*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],M=e[14],b=e[3],T=e[7],y=e[11],_=e[15];return b*(+c*m*g-l*p*g-c*d*x+s*p*x+l*d*M-s*m*M)+T*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*v-c*m*v)+y*(+i*p*g-i*d*M-c*f*g+s*f*M+c*d*v-s*p*v)+_*(-l*d*v-i*m*g+i*d*x+l*f*g-s*f*x+s*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],M=e[11],b=e[12],T=e[13],y=e[14],_=e[15],L=g*y*p-T*x*p+T*m*M-d*y*M-g*m*_+d*x*_,U=b*x*p-v*y*p-b*m*M+f*y*M+v*m*_-f*x*_,N=v*T*p-b*g*p+b*d*M-f*T*M-v*d*_+f*g*_,I=b*g*m-v*T*m-b*d*x+f*T*x+v*d*y-f*g*y,F=i*L+s*U+l*N+c*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=L*z,e[1]=(T*x*c-g*y*c-T*l*M+s*y*M+g*l*_-s*x*_)*z,e[2]=(d*y*c-T*m*c+T*l*p-s*y*p-d*l*_+s*m*_)*z,e[3]=(g*m*c-d*x*c-g*l*p+s*x*p+d*l*M-s*m*M)*z,e[4]=U*z,e[5]=(v*y*c-b*x*c+b*l*M-i*y*M-v*l*_+i*x*_)*z,e[6]=(b*m*c-f*y*c-b*l*p+i*y*p+f*l*_-i*m*_)*z,e[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*M+i*m*M)*z,e[8]=N*z,e[9]=(b*g*c-v*T*c-b*s*M+i*T*M+v*s*_-i*g*_)*z,e[10]=(f*T*c-b*d*c+b*s*p-i*T*p-f*s*_+i*d*_)*z,e[11]=(v*d*c-f*g*c-v*s*p+i*g*p+f*s*M-i*d*M)*z,e[12]=I*z,e[13]=(v*T*l-b*g*l+b*s*x-i*T*x-v*s*y+i*g*y)*z,e[14]=(b*d*l-f*T*l-b*s*m+i*T*m+f*s*y-i*d*y)*z,e[15]=(f*g*l-v*d*l+v*s*m-i*g*m-f*s*x+i*d*x)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,d=e.y,m=e.z,p=c*f,v=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*f,0,p*m-l*d,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,v=f+f,g=d+d,x=c*p,M=c*v,b=c*g,T=f*v,y=f*g,_=d*g,L=m*p,U=m*v,N=m*g,I=s.x,F=s.y,z=s.z;return l[0]=(1-(T+_))*I,l[1]=(M+N)*I,l[2]=(b-U)*I,l[3]=0,l[4]=(M-N)*F,l[5]=(1-(x+_))*F,l[6]=(y+L)*F,l[7]=0,l[8]=(b+U)*z,l[9]=(y-L)*z,l[10]=(1-(x+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=xr.set(l[0],l[1],l[2]).length();const f=xr.set(l[4],l[5],l[6]).length(),d=xr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/c,v=1/f,g=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,i.setFromRotationMatrix(Si),s.x=c,s.y=f,s.z=d,this}makePerspective(e,i,s,l,c,f,d=zi,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(d===zi)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===Zc)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,d=zi,m=!1){const p=this.elements,v=2/(i-e),g=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(d===zi)b=-2/(f-c),T=-(f+c)/(f-c);else if(d===Zc)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const xr=new $,Si=new Qt,Ub=new $(0,0,0),Lb=new $(1,1,1),ka=new $,Mc=new $,ti=new $,U_=new Qt,L_=new nl;class Gi{constructor(e=0,i=0,s=0,l=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return U_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(U_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return L_.setFromEuler(this),this.setFromQuaternion(L_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class sx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ob=0;const O_=new $,yr=new nl,la=new Qt,Ec=new $,Io=new $,Pb=new $,zb=new nl,P_=new $(1,0,0),z_=new $(0,1,0),B_=new $(0,0,1),I_={type:"added"},Bb={type:"removed"},Sr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Rn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new $,i=new Gi,s=new nl,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ht}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(P_,e)}rotateY(e){return this.rotateOnAxis(z_,e)}rotateZ(e){return this.rotateOnAxis(B_,e)}translateOnAxis(e,i){return O_.copy(e).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(P_,e)}translateY(e){return this.translateOnAxis(z_,e)}translateZ(e){return this.translateOnAxis(B_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ec.copy(e):Ec.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Io,Ec,this.up):la.lookAt(Ec,Io,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(la),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I_),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Bb),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I_),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,Pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,zb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),b=f(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new $(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new $,ca=new $,zh=new $,ua=new $,Mr=new $,Er=new $,F_=new $,Bh=new $,Ih=new $,Fh=new $,Hh=new Gt,Gh=new Gt,Vh=new Gt;class Ei{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Mi.subVectors(l,i),ca.subVectors(s,i),zh.subVectors(e,i);const f=Mi.dot(Mi),d=Mi.dot(ca),m=Mi.dot(zh),p=ca.dot(ca),v=ca.dot(zh),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-d*v)*x,b=(f*v-d*m)*x;return c.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,s,l,c,f,d,m){return this.getBarycoord(e,i,s,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(f,ua.y),m.addScaledVector(d,ua.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(e,i),Gh.fromBufferAttribute(e,s),Vh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Hh,c.x),f.addScaledVector(Gh,c.y),f.addScaledVector(Vh,c.z),f}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),ca.subVectors(e,i),Mi.cross(ca).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Mi.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,d;Mr.subVectors(l,s),Er.subVectors(c,s),Bh.subVectors(e,s);const m=Mr.dot(Bh),p=Er.dot(Bh);if(m<=0&&p<=0)return i.copy(s);Ih.subVectors(e,l);const v=Mr.dot(Ih),g=Er.dot(Ih);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Mr,f);Fh.subVectors(e,c);const M=Mr.dot(Fh),b=Er.dot(Fh);if(b>=0&&M<=b)return i.copy(c);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Er,d);const y=v*b-M*g;if(y<=0&&g-v>=0&&M-b>=0)return F_.subVectors(c,l),d=(g-v)/(g-v+(M-b)),i.copy(l).addScaledVector(F_,d);const _=1/(y+T+x);return f=T*_,d=x*_,i.copy(s).addScaledVector(Mr,f).addScaledVector(Er,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},bc={h:0,s:0,l:0};function kh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class bt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Dt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Dt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Dt.workingColorSpace){if(e=Mb(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=kh(f,c,e+1/3),this.g=kh(f,c,e),this.b=kh(f,c,e-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=rx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Dt.workingToColorSpace(Nn.copy(this),e),Math.round(Et(Nn.r*255,0,255))*65536+Math.round(Et(Nn.g*255,0,255))*256+Math.round(Et(Nn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Dt.workingColorSpace){Dt.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=mi){Dt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,s=Nn.g,l=Nn.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(bc);const s=Th(ja.h,bc.h,i),l=Th(ja.s,bc.s,i),c=Th(ja.l,bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new bt;bt.NAMES=rx;let Ib=0;class Fr extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=wr,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=rd,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==Ka&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sd&&(s.blendSrc=this.blendSrc),this.blendDst!==rd&&(s.blendDst=this.blendDst),this.blendEquation!==As&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ko extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new $,Tc=new Tt;let Fb=0;class Ii{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=A_,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(e),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Po(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A_&&(e.usage=this.usage),e}}class ox extends Ii{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class lx extends Ii{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Jt extends Ii{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Hb=0;const pi=new Qt,jh=new Rn,br=new $,ni=new il,Fo=new il,yn=new $;class Wn extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nx(e)?lx:ox)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Jt(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ni.min,Fo.min),ni.expandByPoint(yn),yn.addVectors(ni.max,Fo.max),ni.expandByPoint(yn)):(ni.expandByPoint(Fo.min),ni.expandByPoint(Fo.max))}ni.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)yn.fromBufferAttribute(d,p),m&&(br.fromBufferAttribute(e,p),yn.add(br)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new $,m[X]=new $;const p=new $,v=new $,g=new $,x=new Tt,M=new Tt,b=new Tt,T=new $,y=new $;function _(X,w,D){p.fromBufferAttribute(s,X),v.fromBufferAttribute(s,w),g.fromBufferAttribute(s,D),x.fromBufferAttribute(c,X),M.fromBufferAttribute(c,w),b.fromBufferAttribute(c,D),v.sub(p),g.sub(p),M.sub(x),b.sub(x);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(T.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(V),d[X].add(T),d[w].add(T),d[D].add(T),m[X].add(y),m[w].add(y),m[D].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,w=L.length;X<w;++X){const D=L[X],V=D.start,J=D.count;for(let oe=V,pe=V+J;oe<pe;oe+=3)_(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const U=new $,N=new $,I=new $,F=new $;function z(X){I.fromBufferAttribute(l,X),F.copy(I);const w=d[X];U.copy(w),U.sub(I.multiplyScalar(I.dot(w))).normalize(),N.crossVectors(F,w);const V=N.dot(m[X])<0?-1:1;f.setXYZW(X,U.x,U.y,U.z,V)}for(let X=0,w=L.length;X<w;++X){const D=L[X],V=D.start,J=D.count;for(let oe=V,pe=V+J;oe<pe;oe+=3)z(e.getX(oe+0)),z(e.getX(oe+1)),z(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new $,c=new $,f=new $,d=new $,m=new $,p=new $,v=new $,g=new $;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let M=0,b=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*v;for(let _=0;_<v;_++)x[b++]=p[M++]}return new Ii(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=e(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H_=new Qt,xs=new ax,Ac=new iu,G_=new $,Rc=new $,Cc=new $,wc=new $,Xh=new $,Dc=new $,V_=new $,Nc=new $;class mn extends Rn{constructor(e=new Wn,i=new ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(Xh.fromBufferAttribute(g,e),f?Dc.addScaledVector(Xh,v):Dc.addScaledVector(Xh.sub(i),v))}i.add(Dc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(c),xs.copy(e.ray).recast(e.near),!(Ac.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Ac,G_)===null||xs.origin.distanceToSquared(G_)>(e.far-e.near)**2))&&(H_.copy(c).invert(),xs.copy(e.ray).applyMatrix4(H_),!(s.boundingBox!==null&&xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,xs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],_=f[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let N=L,I=U;N<I;N+=3){const F=d.getX(N),z=d.getX(N+1),X=d.getX(N+2);l=Uc(this,_,e,s,p,v,g,F,z,X),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=b,_=T;y<_;y+=3){const L=d.getX(y),U=d.getX(y+1),N=d.getX(y+2);l=Uc(this,f,e,s,p,v,g,L,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],_=f[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let N=L,I=U;N<I;N+=3){const F=N,z=N+1,X=N+2;l=Uc(this,_,e,s,p,v,g,F,z,X),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=b,_=T;y<_;y+=3){const L=y,U=y+1,N=y+2;l=Uc(this,f,e,s,p,v,g,L,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Gb(r,e,i,s,l,c,f,d){let m;if(e.side===jn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,e.side===Ka,d),m===null)return null;Nc.copy(d),Nc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Nc);return p<i.near||p>i.far?null:{distance:p,point:Nc.clone(),object:r}}function Uc(r,e,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Rc),r.getVertexPosition(m,Cc),r.getVertexPosition(p,wc);const v=Gb(r,e,i,s,Rc,Cc,wc,V_);if(v){const g=new $;Ei.getBarycoord(V_,Rc,Cc,wc,g),l&&(v.uv=Ei.getInterpolatedAttribute(l,d,m,p,g,new Tt)),c&&(v.uv1=Ei.getInterpolatedAttribute(c,d,m,p,g,new Tt)),f&&(v.normal=Ei.getInterpolatedAttribute(f,d,m,p,g,new $),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new $,materialIndex:0};Ei.getNormal(Rc,Cc,wc,x.normal),v.face=x,v.barycoord=g}return v}class al extends Wn{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;b("z","y","x",-1,-1,s,i,e,f,c,0),b("z","y","x",1,-1,s,i,-e,f,c,1),b("x","z","y",1,1,e,s,i,l,f,2),b("x","z","y",1,-1,e,s,-i,l,f,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(g,2));function b(T,y,_,L,U,N,I,F,z,X,w){const D=N/z,V=I/X,J=N/2,oe=I/2,pe=F/2,le=z+1,B=X+1;let K=0,q=0;const ye=new $;for(let Te=0;Te<B;Te++){const P=Te*V-oe;for(let Q=0;Q<le;Q++){const he=Q*D-J;ye[T]=he*L,ye[y]=P*U,ye[_]=pe,p.push(ye.x,ye.y,ye.z),ye[T]=0,ye[y]=0,ye[_]=F>0?1:-1,v.push(ye.x,ye.y,ye.z),g.push(Q/z),g.push(1-Te/X),K+=1}}for(let Te=0;Te<X;Te++)for(let P=0;P<z;P++){const Q=x+P+le*Te,he=x+P+le*(Te+1),Me=x+(P+1)+le*(Te+1),Ce=x+(P+1)+le*Te;m.push(Q,he,Ce),m.push(he,Me,Ce),q+=6}d.addGroup(M,q,w),M+=q,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function zn(r){const e={};for(let i=0;i<r.length;i++){const s=Pr(r[i]);for(const l in s)e[l]=s[l]}return e}function Vb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function cx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const kb={clone:Pr,merge:zn};var jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jb,this.fragmentShader=Xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Vb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ux extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new $,k_=new Tt,j_=new Tt;class ai extends ux{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Wd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,i){return this.getViewBounds(e,k_,j_),i.subVectors(j_,k_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,Ar=1;class Wb extends Rn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(Tr,Ar,e,i);l.layers=this.layers,this.add(l);const c=new ai(Tr,Ar,e,i);c.layers=this.layers,this.add(c);const f=new ai(Tr,Ar,e,i);f.layers=this.layers,this.add(f);const d=new ai(Tr,Ar,e,i);d.layers=this.layers,this.add(d);const m=new ai(Tr,Ar,e,i);m.layers=this.layers,this.add(m);const p=new ai(Tr,Ar,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,x,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class fx extends Xn{constructor(e=[],i=Ur,s,l,c,f,d,m,p,v){super(e,i,s,l,c,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qb extends Ns{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new fx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new al(5,5,5),c=new Qa({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:Ya});c.uniforms.tEquirect.value=i;const f=new mn(l,c),d=i.minFilter;return i.minFilter===ws&&(i.minFilter=Pi),new Wb(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class Lc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yb={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const y=i.getJointPose(T,s),_=this._getHandJoint(p,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Yb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Lc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class fp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(e),this.density=i}clone(){return new fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zb extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const qh=new $,Kb=new $,Qb=new ht;class bs{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=qh.subVectors(s,i).cross(Kb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(qh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Qb.getNormalMatrix(e),l=this.coplanarPoint(qh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new iu,Jb=new Tt(.5,.5),Oc=new $;class hp{constructor(e=new bs,i=new bs,s=new bs,l=new bs,c=new bs,f=new bs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=zi,s=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],b=c[8],T=c[9],y=c[10],_=c[11],L=c[12],U=c[13],N=c[14],I=c[15];if(l[0].setComponents(p-f,M-v,_-b,I-L).normalize(),l[1].setComponents(p+f,M+v,_+b,I+L).normalize(),l[2].setComponents(p+d,M+g,_+T,I+U).normalize(),l[3].setComponents(p-d,M-g,_-T,I-U).normalize(),s)l[4].setComponents(m,x,y,N).normalize(),l[5].setComponents(p-m,M-x,_-y,I-N).normalize();else if(l[4].setComponents(p-m,M-x,_-y,I-N).normalize(),i===zi)l[5].setComponents(p+m,M+x,_+y,I+N).normalize();else if(i===Zc)l[5].setComponents(m,x,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const i=Jb.distanceTo(e.center);return ys.radius=.7071067811865476+i,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?e.max.x:e.min.x,Oc.y=l.normal.y>0?e.max.y:e.min.y,Oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hx extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qc=new $,Jc=new $,X_=new Qt,Ho=new ax,Pc=new iu,Yh=new $,W_=new $;class $b extends Rn{constructor(e=new Wn,i=new hx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Qc.fromBufferAttribute(i,l-1),Jc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Qc.distanceTo(Jc);e.setAttribute("lineDistance",new Jt(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,e.ray.intersectsSphere(Pc)===!1)return;X_.copy(l).invert(),Ho.copy(e.ray).applyMatrix4(X_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const M=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=p){const _=v.getX(T),L=v.getX(T+1),U=zc(this,e,Ho,m,_,L,T);U&&i.push(U)}if(this.isLineLoop){const T=v.getX(b-1),y=v.getX(M),_=zc(this,e,Ho,m,T,y,b-1);_&&i.push(_)}}else{const M=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=p){const _=zc(this,e,Ho,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=zc(this,e,Ho,m,b-1,M,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function zc(r,e,i,s,l,c,f){const d=r.geometry.attributes.position;if(Qc.fromBufferAttribute(d,l),Jc.fromBufferAttribute(d,c),i.distanceSqToSegment(Qc,Jc,Yh,W_)>s)return;Yh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Yh);if(!(p<e.near||p>e.far))return{distance:p,point:W_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class dx extends Xn{constructor(e,i,s=Ds,l,c,f,d=Ti,m=Ti,p,v=qo,g=1){if(v!==qo&&v!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,f,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class px extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dp extends Wn{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],f=[],d=[],m=[],p=new $,v=new Tt;f.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let g=0,x=3;g<=i;g++,x+=3){const M=s+g/i*l;p.x=e*Math.cos(M),p.y=e*Math.sin(M),f.push(p.x,p.y,p.z),d.push(0,0,1),v.x=(f[x]/e+1)/2,v.y=(f[x+1]/e+1)/2,m.push(v.x,v.y)}for(let g=1;g<=i;g++)c.push(g,g+1,0);this.setIndex(c),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $c extends Wn{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],x=[],M=[];let b=0;const T=[],y=s/2;let _=0;L(),f===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(M,2));function L(){const N=new $,I=new $;let F=0;const z=(i-e)/s;for(let X=0;X<=c;X++){const w=[],D=X/c,V=D*(i-e)+e;for(let J=0;J<=l;J++){const oe=J/l,pe=oe*m+d,le=Math.sin(pe),B=Math.cos(pe);I.x=V*le,I.y=-D*s+y,I.z=V*B,g.push(I.x,I.y,I.z),N.set(le,z,B).normalize(),x.push(N.x,N.y,N.z),M.push(oe,1-D),w.push(b++)}T.push(w)}for(let X=0;X<l;X++)for(let w=0;w<c;w++){const D=T[w][X],V=T[w+1][X],J=T[w+1][X+1],oe=T[w][X+1];(e>0||w!==0)&&(v.push(D,V,oe),F+=3),(i>0||w!==c-1)&&(v.push(V,J,oe),F+=3)}p.addGroup(_,F,0),_+=F}function U(N){const I=b,F=new Tt,z=new $;let X=0;const w=N===!0?e:i,D=N===!0?1:-1;for(let J=1;J<=l;J++)g.push(0,y*D,0),x.push(0,D,0),M.push(.5,.5),b++;const V=b;for(let J=0;J<=l;J++){const pe=J/l*m+d,le=Math.cos(pe),B=Math.sin(pe);z.x=w*B,z.y=y*D,z.z=w*le,g.push(z.x,z.y,z.z),x.push(0,D,0),F.x=le*.5+.5,F.y=B*.5*D+.5,M.push(F.x,F.y),b++}for(let J=0;J<l;J++){const oe=I+J,pe=V+J;N===!0?v.push(pe,pe+1,oe):v.push(pe+1,pe,oe),X+=3}p.addGroup(_,X,N===!0?1:2),_+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qa extends Wn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=e/d,x=i/m,M=[],b=[],T=[],y=[];for(let _=0;_<v;_++){const L=_*x-f;for(let U=0;U<p;U++){const N=U*g-c;b.push(N,-L,0),T.push(0,0,1),y.push(U/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const U=L+p*_,N=L+p*(_+1),I=L+1+p*(_+1),F=L+1+p*_;M.push(U,N,F),M.push(N,I,F)}this.setIndex(M),this.setAttribute("position",new Jt(b,3)),this.setAttribute("normal",new Jt(T,3)),this.setAttribute("uv",new Jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class pp extends Wn{constructor(e=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],v=[];let g=e;const x=(i-e)/l,M=new $,b=new Tt;for(let T=0;T<=l;T++){for(let y=0;y<=s;y++){const _=c+y/s*f;M.x=g*Math.cos(_),M.y=g*Math.sin(_),m.push(M.x,M.y,M.z),p.push(0,0,1),b.x=(M.x/i+1)/2,b.y=(M.y/i+1)/2,v.push(b.x,b.y)}g+=x}for(let T=0;T<l;T++){const y=T*(s+1);for(let _=0;_<s;_++){const L=_+y,U=L,N=L+s+1,I=L+s+2,F=L+1;d.push(U,N,F),d.push(N,I,F)}}this.setIndex(d),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mp extends Wn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const v=[],g=new $,x=new $,M=[],b=[],T=[],y=[];for(let _=0;_<=s;_++){const L=[],U=_/s;let N=0;_===0&&f===0?N=.5/i:_===s&&m===Math.PI&&(N=-.5/i);for(let I=0;I<=i;I++){const F=I/i;g.x=-e*Math.cos(l+F*c)*Math.sin(f+U*d),g.y=e*Math.cos(f+U*d),g.z=e*Math.sin(l+F*c)*Math.sin(f+U*d),b.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),y.push(F+N,1-U),L.push(p++)}v.push(L)}for(let _=0;_<s;_++)for(let L=0;L<i;L++){const U=v[_][L+1],N=v[_][L],I=v[_+1][L],F=v[_+1][L+1];(_!==0||f>0)&&M.push(U,N,F),(_!==s-1||m<Math.PI)&&M.push(N,I,F)}this.setIndex(M),this.setAttribute("position",new Jt(b,3)),this.setAttribute("normal",new Jt(T,3)),this.setAttribute("uv",new Jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gp extends Wn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],d=[],m=[],p=[],v=new $,g=new $,x=new $;for(let M=0;M<=s;M++)for(let b=0;b<=l;b++){const T=b/l*c,y=M/s*Math.PI*2;g.x=(e+i*Math.cos(y))*Math.cos(T),g.y=(e+i*Math.cos(y))*Math.sin(T),g.z=i*Math.sin(y),d.push(g.x,g.y,g.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),x.subVectors(g,v).normalize(),m.push(x.x,x.y,x.z),p.push(b/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let b=1;b<=l;b++){const T=(l+1)*M+b-1,y=(l+1)*(M-1)+b-1,_=(l+1)*(M-1)+b,L=(l+1)*M+b;f.push(T,y,L),f.push(y,_,L)}this.setIndex(f),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ss extends Fr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ex,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eT extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tT extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vp extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Zh=new Qt,q_=new $,Y_=new $;class mx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;q_.setFromMatrixPosition(e.matrixWorld),i.position.copy(q_),Y_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Y_),i.updateMatrixWorld(),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Z_=new Qt,Go=new $,Kh=new $;class nT extends mx{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,c=e.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Go.setFromMatrixPosition(e.matrixWorld),s.position.copy(Go),Kh.copy(s.position),Kh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Kh),s.updateMatrixWorld(),l.makeTranslation(-Go.x,-Go.y,-Go.z),Z_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Z_,s.coordinateSystem,s.reversedDepth)}}class iT extends vp{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new nT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gx extends ux{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class aT extends mx{constructor(){super(new gx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K_ extends vp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new aT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sT extends vp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class rT extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Q_(r,e,i,s){const l=oT(s);switch(i){case K0:return r*e;case J0:return r*e/l.components*l.byteLength;case op:return r*e/l.components*l.byteLength;case $0:return r*e*2/l.components*l.byteLength;case lp:return r*e*2/l.components*l.byteLength;case Q0:return r*e*3/l.components*l.byteLength;case bi:return r*e*4/l.components*l.byteLength;case cp:return r*e*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jc:case Xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xd:case Sd:return Math.max(r,16)*Math.max(e,8)/4;case _d:case yd:return Math.max(r,8)*Math.max(e,8)/2;case Md:case Ed:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Id:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fd:case Hd:case Gd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Vd:case kd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case jd:case Xd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oT(r){switch(r){case Hi:case W0:return{byteLength:1,components:1};case Xo:case q0:case el:return{byteLength:2,components:1};case sp:case rp:return{byteLength:2,components:4};case Ds:case ap:case ha:return{byteLength:4,components:1};case Y0:case Z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);function vx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function lT(r){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,v);else{g.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<g.length;M++){const b=g[x],T=g[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,g[x]=T)}g.length=x+1;for(let M=0,b=g.length;M<b;M++){const T=g[M];r.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var cT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_T=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ST=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ET=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FT="gl_FragColor = linearToOutputTexel( gl_FragColor );",HT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:cT,alphahash_pars_fragment:uT,alphamap_fragment:fT,alphamap_pars_fragment:hT,alphatest_fragment:dT,alphatest_pars_fragment:pT,aomap_fragment:mT,aomap_pars_fragment:gT,batching_pars_vertex:vT,batching_vertex:_T,begin_vertex:xT,beginnormal_vertex:yT,bsdfs:ST,iridescence_fragment:MT,bumpmap_pars_fragment:ET,clipping_planes_fragment:bT,clipping_planes_pars_fragment:TT,clipping_planes_pars_vertex:AT,clipping_planes_vertex:RT,color_fragment:CT,color_pars_fragment:wT,color_pars_vertex:DT,color_vertex:NT,common:UT,cube_uv_reflection_fragment:LT,defaultnormal_vertex:OT,displacementmap_pars_vertex:PT,displacementmap_vertex:zT,emissivemap_fragment:BT,emissivemap_pars_fragment:IT,colorspace_fragment:FT,colorspace_pars_fragment:HT,envmap_fragment:GT,envmap_common_pars_fragment:VT,envmap_pars_fragment:kT,envmap_pars_vertex:jT,envmap_physical_pars_fragment:t1,envmap_vertex:XT,fog_vertex:WT,fog_pars_vertex:qT,fog_fragment:YT,fog_pars_fragment:ZT,gradientmap_pars_fragment:KT,lightmap_pars_fragment:QT,lights_lambert_fragment:JT,lights_lambert_pars_fragment:$T,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:a1,lights_phong_pars_fragment:s1,lights_physical_fragment:r1,lights_physical_pars_fragment:o1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:d1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:v1,map_particle_pars_fragment:_1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:y1,morphinstance_vertex:S1,morphcolor_vertex:M1,morphnormal_vertex:E1,morphtarget_pars_vertex:b1,morphtarget_vertex:T1,normal_fragment_begin:A1,normal_fragment_maps:R1,normal_pars_fragment:C1,normal_pars_vertex:w1,normal_vertex:D1,normalmap_pars_fragment:N1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:L1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:P1,opaque_fragment:z1,packing:B1,premultiplied_alpha_fragment:I1,project_vertex:F1,dithering_fragment:H1,dithering_pars_fragment:G1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:j1,shadowmap_pars_vertex:X1,shadowmap_vertex:W1,shadowmask_pars_fragment:q1,skinbase_vertex:Y1,skinning_pars_vertex:Z1,skinning_vertex:K1,skinnormal_vertex:Q1,specularmap_fragment:J1,specularmap_pars_fragment:$1,tonemapping_fragment:eA,tonemapping_pars_fragment:tA,transmission_fragment:nA,transmission_pars_fragment:iA,uv_pars_fragment:aA,uv_pars_vertex:sA,uv_vertex:rA,worldpos_vertex:oA,background_vert:lA,background_frag:cA,backgroundCube_vert:uA,backgroundCube_frag:fA,cube_vert:hA,cube_frag:dA,depth_vert:pA,depth_frag:mA,distanceRGBA_vert:gA,distanceRGBA_frag:vA,equirect_vert:_A,equirect_frag:xA,linedashed_vert:yA,linedashed_frag:SA,meshbasic_vert:MA,meshbasic_frag:EA,meshlambert_vert:bA,meshlambert_frag:TA,meshmatcap_vert:AA,meshmatcap_frag:RA,meshnormal_vert:CA,meshnormal_frag:wA,meshphong_vert:DA,meshphong_frag:NA,meshphysical_vert:UA,meshphysical_frag:LA,meshtoon_vert:OA,meshtoon_frag:PA,points_vert:zA,points_frag:BA,shadow_vert:IA,shadow_frag:FA,sprite_vert:HA,sprite_frag:GA},Pe={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Li={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Li.physical={uniforms:zn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Bc={r:0,b:0,g:0},Ms=new Gi,VA=new Qt;function kA(r,e,i,s,l,c,f){const d=new bt(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function b(U){let N=U.isScene===!0?U.background:null;return N&&N.isTexture&&(N=(U.backgroundBlurriness>0?i:e).get(N)),N}function T(U){let N=!1;const I=b(U);I===null?_(d,m):I&&I.isColor&&(_(I,1),N=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(U,N){const I=b(N);I&&(I.isCubeTexture||I.mapping===nu)?(v===void 0&&(v=new mn(new al(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:Pr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ms.copy(N.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(VA.makeRotationFromEuler(Ms)),v.material.toneMapped=Dt.getTransfer(I.colorSpace)!==Ht,(g!==I||x!==I.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,g=I,x=I.version,M=r.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new mn(new qa(2,2),new Qa({name:"BackgroundMaterial",uniforms:Pr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||x!==I.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=I,x=I.version,M=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,N){U.getRGB(Bc,cx(r)),s.buffers.color.setClear(Bc.r,Bc.g,Bc.b,N,f)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,N=1){d.set(U),m=N,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:T,addToRenderList:y,dispose:L}}function jA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(D,V,J,oe,pe){let le=!1;const B=g(oe,J,V);c!==B&&(c=B,p(c.object)),le=M(D,oe,J,pe),le&&b(D,oe,J,pe),pe!==null&&e.update(pe,r.ELEMENT_ARRAY_BUFFER),(le||f)&&(f=!1,N(D,V,J,oe),pe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function v(D){return r.deleteVertexArray(D)}function g(D,V,J){const oe=J.wireframe===!0;let pe=s[D.id];pe===void 0&&(pe={},s[D.id]=pe);let le=pe[V.id];le===void 0&&(le={},pe[V.id]=le);let B=le[oe];return B===void 0&&(B=x(m()),le[oe]=B),B}function x(D){const V=[],J=[],oe=[];for(let pe=0;pe<i;pe++)V[pe]=0,J[pe]=0,oe[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:oe,object:D,attributes:{},index:null}}function M(D,V,J,oe){const pe=c.attributes,le=V.attributes;let B=0;const K=J.getAttributes();for(const q in K)if(K[q].location>=0){const Te=pe[q];let P=le[q];if(P===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),Te===void 0||Te.attribute!==P||P&&Te.data!==P.data)return!0;B++}return c.attributesNum!==B||c.index!==oe}function b(D,V,J,oe){const pe={},le=V.attributes;let B=0;const K=J.getAttributes();for(const q in K)if(K[q].location>=0){let Te=le[q];Te===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Te=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Te=D.instanceColor));const P={};P.attribute=Te,Te&&Te.data&&(P.data=Te.data),pe[q]=P,B++}c.attributes=pe,c.attributesNum=B,c.index=oe}function T(){const D=c.newAttributes;for(let V=0,J=D.length;V<J;V++)D[V]=0}function y(D){_(D,0)}function _(D,V){const J=c.newAttributes,oe=c.enabledAttributes,pe=c.attributeDivisors;J[D]=1,oe[D]===0&&(r.enableVertexAttribArray(D),oe[D]=1),pe[D]!==V&&(r.vertexAttribDivisor(D,V),pe[D]=V)}function L(){const D=c.newAttributes,V=c.enabledAttributes;for(let J=0,oe=V.length;J<oe;J++)V[J]!==D[J]&&(r.disableVertexAttribArray(J),V[J]=0)}function U(D,V,J,oe,pe,le,B){B===!0?r.vertexAttribIPointer(D,V,J,pe,le):r.vertexAttribPointer(D,V,J,oe,pe,le)}function N(D,V,J,oe){T();const pe=oe.attributes,le=J.getAttributes(),B=V.defaultAttributeValues;for(const K in le){const q=le[K];if(q.location>=0){let ye=pe[K];if(ye===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),ye!==void 0){const Te=ye.normalized,P=ye.itemSize,Q=e.get(ye);if(Q===void 0)continue;const he=Q.buffer,Me=Q.type,Ce=Q.bytesPerElement,ne=Me===r.INT||Me===r.UNSIGNED_INT||ye.gpuType===ap;if(ye.isInterleavedBufferAttribute){const fe=ye.data,we=fe.stride,Ie=ye.offset;if(fe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<q.locationSize;Xe++)_(q.location+Xe,fe.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Xe=0;Xe<q.locationSize;Xe++)y(q.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,he);for(let Xe=0;Xe<q.locationSize;Xe++)U(q.location+Xe,P/q.locationSize,Me,Te,we*Ce,(Ie+P/q.locationSize*Xe)*Ce,ne)}else{if(ye.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)_(q.location+fe,ye.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let fe=0;fe<q.locationSize;fe++)y(q.location+fe);r.bindBuffer(r.ARRAY_BUFFER,he);for(let fe=0;fe<q.locationSize;fe++)U(q.location+fe,P/q.locationSize,Me,Te,P*Ce,P/q.locationSize*fe*Ce,ne)}}else if(B!==void 0){const Te=B[K];if(Te!==void 0)switch(Te.length){case 2:r.vertexAttrib2fv(q.location,Te);break;case 3:r.vertexAttrib3fv(q.location,Te);break;case 4:r.vertexAttrib4fv(q.location,Te);break;default:r.vertexAttrib1fv(q.location,Te)}}}}L()}function I(){X();for(const D in s){const V=s[D];for(const J in V){const oe=V[J];for(const pe in oe)v(oe[pe].object),delete oe[pe];delete V[J]}delete s[D]}}function F(D){if(s[D.id]===void 0)return;const V=s[D.id];for(const J in V){const oe=V[J];for(const pe in oe)v(oe[pe].object),delete oe[pe];delete V[J]}delete s[D.id]}function z(D){for(const V in s){const J=s[V];if(J[D.id]===void 0)continue;const oe=J[D.id];for(const pe in oe)v(oe[pe].object),delete oe[pe];delete J[D.id]}}function X(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:y,disableUnusedAttributes:L}}function XA(r,e,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function f(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];i.update(M,s,1)}function m(p,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],v[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,g);let b=0;for(let T=0;T<g;T++)b+=v[T]*x[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function WA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==bi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const X=z===el&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Hi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ha&&!X)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=b>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:N,vertexTextures:I,maxSamples:F}}function qA(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new bs,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||s!==0||l;return l=x,s=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,M){const b=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,_=r.get(g);if(!l||b===null||b.length===0||c&&!y)c?v(null):p();else{const L=c?0:s,U=L*4;let N=_.clippingState||null;m.value=N,N=v(b,x,U,M);for(let I=0;I!==U;++I)N[I]=i[I];_.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,x,M,b){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=m.value,b!==!0||y===null){const _=M+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,N=M;U!==T;++U,N+=4)f.copy(g[U]).applyMatrix4(L,d),f.normal.toArray(y,N),y[N+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function YA(r){let e=new WeakMap;function i(f,d){return d===pd?f.mapping=Ur:d===md&&(f.mapping=Lr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===pd||d===md)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new qb(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Cr=4,J_=[.125,.215,.35,.446,.526,.582],Rs=20,Qh=new gx,$_=new bt;let Jh=null,$h=0,ed=0,td=!1;const Ts=(1+Math.sqrt(5))/2,Rr=1/Ts,e0=[new $(-Ts,Rr,0),new $(Ts,Rr,0),new $(-Rr,0,Ts),new $(Rr,0,Ts),new $(0,Ts,-Rr),new $(0,Ts,Rr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],ZA=new $;class t0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=ZA}=c;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,$h,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ur||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:el,format:bi,colorSpace:Or,depthBuffer:!1},l=n0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KA(c)),this._blurMaterial=QA(c,e,i)}return l}_compileMaterial(e){const i=new mn(this._lodPlanes[0],e);this._renderer.compile(i,Qh)}_sceneToCubeUV(e,i,s,l,c){const m=new ai(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor($_),g.toneMapping=Za,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new ko({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),y=new mn(new al,T);let _=!1;const L=e.background;L?L.isColor&&(T.color.copy(L),e.background=null,_=!0):(T.color.copy($_),_=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):N===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const I=this._cubeSize;Ic(l,N*I,U>2?I:0,I,I),g.setRenderTarget(l),_&&g.render(y,m),g.render(e,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=M,g.autoClear=x,e.background=L}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ur||e.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new mn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Ic(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Qh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=e0[(l-c-1)%e0.length];this._blur(e,c-1,c,f,d)}i.autoClear=s}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new mn(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rs-1),T=c/b,y=isFinite(c)?1+Math.floor(v*T):Rs;y>Rs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rs}`);const _=[];let L=0;for(let z=0;z<Rs;++z){const X=z/T,w=Math.exp(-X*X/2);_.push(w),z===0?L+=w:z<y&&(L+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-s;const N=this._sizeLods[l],I=3*N*(l>U-Cr?l-U+Cr:0),F=4*(this._cubeSize-N);Ic(i,I,F,3*N,2*N),m.setRenderTarget(i),m.render(g,Qh)}}function KA(r){const e=[],i=[],s=[];let l=r;const c=r-Cr+1+J_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>r-Cr?m=J_[f-r+Cr-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,T=3,y=2,_=1,L=new Float32Array(T*b*M),U=new Float32Array(y*b*M),N=new Float32Array(_*b*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,X=F>2?0:-1,w=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];L.set(w,T*b*F),U.set(x,y*b*F);const D=[F,F,F,F,F,F];N.set(D,_*b*F)}const I=new Wn;I.setAttribute("position",new Ii(L,T)),I.setAttribute("uv",new Ii(U,y)),I.setAttribute("faceIndex",new Ii(N,_)),e.push(I),l>Cr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function n0(r,e,i){const s=new Ns(r,e,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ic(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function QA(r,e,i){const s=new Float32Array(Rs),l=new $(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function i0(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function a0(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function _p(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JA(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===pd||m===md,v=m===Ur||m===Lr;if(p||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new t0(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new t0(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function $A(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function eR(r,e,i,s){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,b=g.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let U=0,N=L.length;U<N;U+=3){const I=L[U+0],F=L[U+1],z=L[U+2];x.push(I,F,F,z,z,I)}}else if(b!==void 0){const L=b.array;T=b.version;for(let U=0,N=L.length/3-1;U<N;U+=3){const I=U+0,F=U+1,z=U+2;x.push(I,F,F,z,z,I)}}else return;const y=new(nx(x)?lx:ox)(x,1);y.version=T;const _=c.get(g);_&&e.remove(_),c.set(g,y)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function tR(r,e,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*f),i.update(M,s,1)}function p(x,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,x*f,b),i.update(M,s,b))}function v(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function g(x,M,b,T){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/f,M[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,T,0,b);let _=0;for(let L=0;L<b;L++)_+=M[L]*T[L];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function nR(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function iR(r,e,i){const s=new WeakMap,l=new Gt;function c(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let D=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),T===!0&&(N=2),y===!0&&(N=3);let I=d.attributes.position.count*N,F=1;I>e.maxTextureSize&&(F=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const z=new Float32Array(I*F*4*g),X=new ix(z,I,F,g);X.type=ha,X.needsUpdate=!0;const w=N*4;for(let V=0;V<g;V++){const J=_[V],oe=L[V],pe=U[V],le=I*F*4*V;for(let B=0;B<J.count;B++){const K=B*w;b===!0&&(l.fromBufferAttribute(J,B),z[le+K+0]=l.x,z[le+K+1]=l.y,z[le+K+2]=l.z,z[le+K+3]=0),T===!0&&(l.fromBufferAttribute(oe,B),z[le+K+4]=l.x,z[le+K+5]=l.y,z[le+K+6]=l.z,z[le+K+7]=0),y===!0&&(l.fromBufferAttribute(pe,B),z[le+K+8]=l.x,z[le+K+9]=l.y,z[le+K+10]=l.z,z[le+K+11]=pe.itemSize===4?l.w:1)}}x={count:g,texture:X,size:new Tt(I,F)},s.set(d,x),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function aR(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const _x=new Xn,s0=new dx(1,1),xx=new ix,yx=new Db,Sx=new fx,r0=[],o0=[],l0=new Float32Array(16),c0=new Float32Array(9),u0=new Float32Array(4);function Hr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=r0[l];if(c===void 0&&(c=new Float32Array(l),r0[l]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,r[f].toArray(c,d)}return c}function gn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function vn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function au(r,e){let i=o0[e];i===void 0&&(i=new Int32Array(e),o0[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function sR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function rR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2fv(this.addr,e),vn(i,e)}}function oR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;r.uniform3fv(this.addr,e),vn(i,e)}}function lR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4fv(this.addr,e),vn(i,e)}}function cR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;u0.set(s),r.uniformMatrix2fv(this.addr,!1,u0),vn(i,s)}}function uR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;c0.set(s),r.uniformMatrix3fv(this.addr,!1,c0),vn(i,s)}}function fR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;l0.set(s),r.uniformMatrix4fv(this.addr,!1,l0),vn(i,s)}}function hR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function dR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2iv(this.addr,e),vn(i,e)}}function pR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3iv(this.addr,e),vn(i,e)}}function mR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4iv(this.addr,e),vn(i,e)}}function gR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function vR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2uiv(this.addr,e),vn(i,e)}}function _R(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3uiv(this.addr,e),vn(i,e)}}function xR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4uiv(this.addr,e),vn(i,e)}}function yR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(s0.compareFunction=tx,c=s0):c=_x,i.setTexture2D(e||c,l)}function SR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||yx,l)}function MR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Sx,l)}function ER(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||xx,l)}function bR(r){switch(r){case 5126:return sR;case 35664:return rR;case 35665:return oR;case 35666:return lR;case 35674:return cR;case 35675:return uR;case 35676:return fR;case 5124:case 35670:return hR;case 35667:case 35671:return dR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return vR;case 36295:return _R;case 36296:return xR;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return ER}}function TR(r,e){r.uniform1fv(this.addr,e)}function AR(r,e){const i=Hr(e,this.size,2);r.uniform2fv(this.addr,i)}function RR(r,e){const i=Hr(e,this.size,3);r.uniform3fv(this.addr,i)}function CR(r,e){const i=Hr(e,this.size,4);r.uniform4fv(this.addr,i)}function wR(r,e){const i=Hr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function DR(r,e){const i=Hr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function NR(r,e){const i=Hr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function UR(r,e){r.uniform1iv(this.addr,e)}function LR(r,e){r.uniform2iv(this.addr,e)}function OR(r,e){r.uniform3iv(this.addr,e)}function PR(r,e){r.uniform4iv(this.addr,e)}function zR(r,e){r.uniform1uiv(this.addr,e)}function BR(r,e){r.uniform2uiv(this.addr,e)}function IR(r,e){r.uniform3uiv(this.addr,e)}function FR(r,e){r.uniform4uiv(this.addr,e)}function HR(r,e,i){const s=this.cache,l=e.length,c=au(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||_x,c[f])}function GR(r,e,i){const s=this.cache,l=e.length,c=au(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||yx,c[f])}function VR(r,e,i){const s=this.cache,l=e.length,c=au(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Sx,c[f])}function kR(r,e,i){const s=this.cache,l=e.length,c=au(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||xx,c[f])}function jR(r){switch(r){case 5126:return TR;case 35664:return AR;case 35665:return RR;case 35666:return CR;case 35674:return wR;case 35675:return DR;case 35676:return NR;case 5124:case 35670:return UR;case 35667:case 35671:return LR;case 35668:case 35672:return OR;case 35669:case 35673:return PR;case 5125:return zR;case 36294:return BR;case 36295:return IR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return kR}}class XR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=bR(i.type)}}class WR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jR(i.type)}}class qR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function f0(r,e){r.seq.push(e),r.map[e.id]=e}function YR(r,e,i){const s=r.name,l=s.length;for(nd.lastIndex=0;;){const c=nd.exec(s),f=nd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){f0(i,p===void 0?new XR(d,r,e):new WR(d,r,e));break}else{let g=i.map[d];g===void 0&&(g=new qR(d),f0(i,g)),i=g}}}class Wc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);YR(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function h0(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const ZR=37297;let KR=0;function QR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const d0=new ht;function JR(r){Dt._getMatrix(d0,Dt.workingColorSpace,r);const e=`mat3( ${d0.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(r)){case Yc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function p0(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+QR(r.getShaderSource(e),d)}else return c}function $R(r,e){const i=JR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function eC(r,e){let i;switch(e){case sb:i="Linear";break;case rb:i="Reinhard";break;case ob:i="Cineon";break;case j0:i="ACESFilmic";break;case cb:i="AgX";break;case ub:i="Neutral";break;case lb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new $;function tC(){Dt.getLuminanceCoefficients(Fc);const r=Fc.x.toFixed(4),e=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function iC(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function aC(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:d}}return i}function Vo(r){return r!==""}function m0(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sC=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(r){return r.replace(sC,oC)}const rC=new Map;function oC(r,e){let i=dt[e];if(i===void 0){const s=rC.get(e);if(s!==void 0)i=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return qd(i)}const lC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(r){return r.replace(lC,cC)}function cC(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===V0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===k0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===fa&&(e="SHADOWMAP_TYPE_VSM"),e}function fC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Lr:e="ENVMAP_TYPE_CUBE";break;case nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hC(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Lr&&(e="ENVMAP_MODE_REFRACTION"),e}function dC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ip:e="ENVMAP_BLENDING_MULTIPLY";break;case ib:e="ENVMAP_BLENDING_MIX";break;case ab:e="ENVMAP_BLENDING_ADD";break}return e}function pC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function mC(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=uC(i),p=fC(i),v=hC(i),g=dC(i),x=pC(i),M=nC(i),b=iC(c),T=l.createProgram();let y,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(y=[_0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[_0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?dt.tonemapping_pars_fragment:"",i.toneMapping!==Za?eC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,$R("linearToOutputTexel",i.outputColorSpace),tC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),f=qd(f),f=m0(f,i),f=g0(f,i),d=qd(d),d=m0(d,i),d=g0(d,i),f=v0(f),d=v0(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=L+y+f,N=L+_+d,I=h0(l,l.VERTEX_SHADER,U),F=h0(l,l.FRAGMENT_SHADER,N);l.attachShader(T,I),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(V){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(T)||"",oe=l.getShaderInfoLog(I)||"",pe=l.getShaderInfoLog(F)||"",le=J.trim(),B=oe.trim(),K=pe.trim();let q=!0,ye=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,I,F);else{const Te=p0(l,I,"vertex"),P=p0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+Te+`
`+P)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(B===""||K==="")&&(ye=!1);ye&&(V.diagnostics={runnable:q,programLog:le,vertexShader:{log:B,prefix:y},fragmentShader:{log:K,prefix:_}})}l.deleteShader(I),l.deleteShader(F),X=new Wc(l,T),w=aC(l,T)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,ZR)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=KR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=F,this}let gC=0;class vC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new _C(e),i.set(e,s)),s}}class _C{constructor(e){this.id=gC++,this.code=e,this.usedTimes=0}}function xC(r,e,i,s,l,c,f){const d=new sx,m=new vC,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,D,V,J,oe){const pe=J.fog,le=oe.geometry,B=w.isMeshStandardMaterial?J.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||B),q=K&&K.mapping===nu?K.image.height:null,ye=b[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Te=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,P=Te!==void 0?Te.length:0;let Q=0;le.morphAttributes.position!==void 0&&(Q=1),le.morphAttributes.normal!==void 0&&(Q=2),le.morphAttributes.color!==void 0&&(Q=3);let he,Me,Ce,ne;if(ye){const At=Li[ye];he=At.vertexShader,Me=At.fragmentShader}else he=w.vertexShader,Me=w.fragmentShader,m.update(w),Ce=m.getVertexShaderID(w),ne=m.getFragmentShaderID(w);const fe=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Ie=oe.isInstancedMesh===!0,Xe=oe.isBatchedMesh===!0,lt=!!w.map,$t=!!w.matcap,G=!!K,mt=!!w.aoMap,at=!!w.lightMap,tt=!!w.bumpMap,Ve=!!w.normalMap,Vt=!!w.displacementMap,We=!!w.emissiveMap,rt=!!w.metalnessMap,en=!!w.roughnessMap,Zt=w.anisotropy>0,O=w.clearcoat>0,A=w.dispersion>0,ie=w.iridescence>0,ge=w.sheen>0,Ee=w.transmission>0,de=Zt&&!!w.anisotropyMap,Ke=O&&!!w.clearcoatMap,De=O&&!!w.clearcoatNormalMap,Ye=O&&!!w.clearcoatRoughnessMap,Ze=ie&&!!w.iridescenceMap,Ae=ie&&!!w.iridescenceThicknessMap,Ne=ge&&!!w.sheenColorMap,Qe=ge&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Le=!!w.specularColorMap,ct=!!w.specularIntensityMap,j=Ee&&!!w.transmissionMap,Re=Ee&&!!w.thicknessMap,Ue=!!w.gradientMap,Fe=!!w.alphaMap,be=w.alphaTest>0,xe=!!w.alphaHash,He=!!w.extensions;let st=Za;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(st=r.toneMapping);const Ot={shaderID:ye,shaderType:w.type,shaderName:w.name,vertexShader:he,fragmentShader:Me,defines:w.defines,customVertexShaderID:Ce,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Xe,batchingColor:Xe&&oe._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&oe.instanceColor!==null,instancingMorph:Ie&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Or,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:$t,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:q,aoMap:mt,lightMap:at,bumpMap:tt,normalMap:Ve,displacementMap:x&&Vt,emissiveMap:We,normalMapObjectSpace:Ve&&w.normalMapType===pb,normalMapTangentSpace:Ve&&w.normalMapType===ex,metalnessMap:rt,roughnessMap:en,anisotropy:Zt,anisotropyMap:de,clearcoat:O,clearcoatMap:Ke,clearcoatNormalMap:De,clearcoatRoughnessMap:Ye,dispersion:A,iridescence:ie,iridescenceMap:Ze,iridescenceThicknessMap:Ae,sheen:ge,sheenColorMap:Ne,sheenRoughnessMap:Qe,specularMap:Be,specularColorMap:Le,specularIntensityMap:ct,transmission:Ee,transmissionMap:j,thicknessMap:Re,gradientMap:Ue,opaque:w.transparent===!1&&w.blending===wr&&w.alphaToCoverage===!1,alphaMap:Fe,alphaTest:be,alphaHash:xe,combine:w.combine,mapUv:lt&&T(w.map.channel),aoMapUv:mt&&T(w.aoMap.channel),lightMapUv:at&&T(w.lightMap.channel),bumpMapUv:tt&&T(w.bumpMap.channel),normalMapUv:Ve&&T(w.normalMap.channel),displacementMapUv:Vt&&T(w.displacementMap.channel),emissiveMapUv:We&&T(w.emissiveMap.channel),metalnessMapUv:rt&&T(w.metalnessMap.channel),roughnessMapUv:en&&T(w.roughnessMap.channel),anisotropyMapUv:de&&T(w.anisotropyMap.channel),clearcoatMapUv:Ke&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&T(w.sheenRoughnessMap.channel),specularMapUv:Be&&T(w.specularMap.channel),specularColorMapUv:Le&&T(w.specularColorMap.channel),specularIntensityMapUv:ct&&T(w.specularIntensityMap.channel),transmissionMapUv:j&&T(w.transmissionMap.channel),thicknessMapUv:Re&&T(w.thicknessMap.channel),alphaMapUv:Fe&&T(w.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ve||Zt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!le.attributes.uv&&(lt||Fe),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:we,skinning:oe.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:We&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oi,flipSided:w.side===jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||Xe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function _(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)D.push(V),D.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(L(D,w),U(D,w),D.push(r.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function L(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function U(w,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),w.push(d.mask)}function N(w){const D=b[w.type];let V;if(D){const J=Li[D];V=kb.clone(J.uniforms)}else V=w.uniforms;return V}function I(w,D){let V;for(let J=0,oe=v.length;J<oe;J++){const pe=v[J];if(pe.cacheKey===D){V=pe,++V.usedTimes;break}}return V===void 0&&(V=new mC(r,D,w,c),v.push(V)),V}function F(w){if(--w.usedTimes===0){const D=v.indexOf(w);v[D]=v[v.length-1],v.pop(),w.destroy()}}function z(w){m.remove(w)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:N,acquireProgram:I,releaseProgram:F,releaseShaderCache:z,programs:v,dispose:X}}function yC(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function SC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function x0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function y0(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,x,M,b,T,y){let _=r[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:b,renderOrder:g.renderOrder,z:T,group:y},r[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=T,_.group=y),e++,_}function d(g,x,M,b,T,y){const _=f(g,x,M,b,T,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,x,M,b,T,y){const _=f(g,x,M,b,T,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||SC),s.length>1&&s.sort(x||x0),l.length>1&&l.sort(x||x0)}function v(){for(let g=e,x=r.length;g<x;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function MC(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new y0,r.set(s,[f])):l>=c.length?(f=new y0,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function EC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new bt};break;case"SpotLight":i={position:new $,direction:new $,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function bC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let TC=0;function AC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function RC(r){const e=new EC,i=bC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,c=new Qt,f=new Qt;function d(p){let v=0,g=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,T=0,y=0,_=0,L=0,U=0,N=0,I=0,F=0,z=0;p.sort(AC);for(let w=0,D=p.length;w<D;w++){const V=p[w],J=V.color,oe=V.intensity,pe=V.distance,le=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=J.r*oe,g+=J.g*oe,x+=J.b*oe;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],oe);z++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=le,s.directionalShadowMatrix[M]=V.shadow.matrix,L++}s.directional[M]=B,M++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(J).multiplyScalar(oe),B.distance=pe,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[T]=B;const K=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,K.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[T]=K.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.spotShadow[T]=q,s.spotShadowMap[T]=le,N++}T++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(J).multiplyScalar(oe),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=B,y++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const K=V.shadow,q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,s.pointShadow[b]=q,s.pointShadowMap[b]=le,s.pointShadowMatrix[b]=V.shadow.matrix,U++}s.point[b]=B,b++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(oe),B.groundColor.copy(V.groundColor).multiplyScalar(oe),s.hemi[_]=B,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==M||X.pointLength!==b||X.spotLength!==T||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==L||X.numPointShadows!==U||X.numSpotShadows!==N||X.numSpotMaps!==I||X.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=N+I-F,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,X.directionalLength=M,X.pointLength=b,X.spotLength=T,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=L,X.numPointShadows=U,X.numSpotShadows=N,X.numSpotMaps=I,X.numLightProbes=z,s.version=TC++)}function m(p,v){let g=0,x=0,M=0,b=0,T=0;const y=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const U=p[_];if(U.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),g++}else if(U.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const N=s.point[x];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const N=s.hemi[T];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:s}}function S0(r){const e=new RC(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function CC(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new S0(r),e.set(l,[d])):c>=f.length?(d=new S0(r),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const wC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NC(r,e,i){let s=new hp;const l=new Tt,c=new Tt,f=new Gt,d=new eT({depthPacking:db}),m=new tT,p={},v=i.maxTextureSize,g={[Ka]:jn,[jn]:Ka,[Oi]:Oi},x=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:wC,fragmentShader:DC}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Wn;b.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new mn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=V0;let _=this.type;this.render=function(F,z,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const w=r.getRenderTarget(),D=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Ya),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const oe=_!==fa&&this.type===fa,pe=_===fa&&this.type!==fa;for(let le=0,B=F.length;le<B;le++){const K=F[le],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const ye=q.getFrameExtents();if(l.multiply(ye),c.copy(q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ye.x),l.x=c.x*ye.x,q.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ye.y),l.y=c.y*ye.y,q.mapSize.y=c.y)),q.map===null||oe===!0||pe===!0){const P=this.type!==fa?{minFilter:Ti,magFilter:Ti}:{};q.map!==null&&q.map.dispose(),q.map=new Ns(l.x,l.y,P),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const Te=q.getViewportCount();for(let P=0;P<Te;P++){const Q=q.getViewport(P);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),J.viewport(f),q.updateMatrices(K,P),s=q.getFrustum(),N(z,X,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===fa&&L(q,X),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(w,D,V)};function L(F,z){const X=e.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ns(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(z,null,X,x,T,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(z,null,X,M,T,null)}function U(F,z,X,w){let D=null;const V=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)D=V;else if(D=X.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=D.uuid,oe=z.uuid;let pe=p[J];pe===void 0&&(pe={},p[J]=pe);let le=pe[oe];le===void 0&&(le=D.clone(),pe[oe]=le,z.addEventListener("dispose",I)),D=le}if(D.visible=z.visible,D.wireframe=z.wireframe,w===fa?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:g[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,X.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const J=r.properties.get(D);J.light=X}return D}function N(F,z,X,w,D){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===fa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const oe=e.update(F),pe=F.material;if(Array.isArray(pe)){const le=oe.groups;for(let B=0,K=le.length;B<K;B++){const q=le[B],ye=pe[q.materialIndex];if(ye&&ye.visible){const Te=U(F,ye,w,D);F.onBeforeShadow(r,F,z,X,oe,Te,q),r.renderBufferDirect(X,null,oe,Te,F,q),F.onAfterShadow(r,F,z,X,oe,Te,q)}}}else if(pe.visible){const le=U(F,pe,w,D);F.onBeforeShadow(r,F,z,X,oe,le,null),r.renderBufferDirect(X,null,oe,le,F,null),F.onAfterShadow(r,F,z,X,oe,le,null)}}const J=F.children;for(let oe=0,pe=J.length;oe<pe;oe++)N(J[oe],z,X,w,D)}function I(F){F.target.removeEventListener("dispose",I);for(const X in p){const w=p[X],D=F.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const UC={[od]:ld,[cd]:hd,[ud]:dd,[Nr]:fd,[ld]:od,[hd]:cd,[dd]:ud,[fd]:Nr};function LC(r,e){function i(){let j=!1;const Re=new Gt;let Ue=null;const Fe=new Gt(0,0,0,0);return{setMask:function(be){Ue!==be&&!j&&(r.colorMask(be,be,be,be),Ue=be)},setLocked:function(be){j=be},setClear:function(be,xe,He,st,Ot){Ot===!0&&(be*=st,xe*=st,He*=st),Re.set(be,xe,He,st),Fe.equals(Re)===!1&&(r.clearColor(be,xe,He,st),Fe.copy(Re))},reset:function(){j=!1,Ue=null,Fe.set(-1,0,0,0)}}}function s(){let j=!1,Re=!1,Ue=null,Fe=null,be=null;return{setReversed:function(xe){if(Re!==xe){const He=e.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Re=xe;const st=be;be=null,this.setClear(st)}},getReversed:function(){return Re},setTest:function(xe){xe?fe(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(xe){Ue!==xe&&!j&&(r.depthMask(xe),Ue=xe)},setFunc:function(xe){if(Re&&(xe=UC[xe]),Fe!==xe){switch(xe){case od:r.depthFunc(r.NEVER);break;case ld:r.depthFunc(r.ALWAYS);break;case cd:r.depthFunc(r.LESS);break;case Nr:r.depthFunc(r.LEQUAL);break;case ud:r.depthFunc(r.EQUAL);break;case fd:r.depthFunc(r.GEQUAL);break;case hd:r.depthFunc(r.GREATER);break;case dd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=xe}},setLocked:function(xe){j=xe},setClear:function(xe){be!==xe&&(Re&&(xe=1-xe),r.clearDepth(xe),be=xe)},reset:function(){j=!1,Ue=null,Fe=null,be=null,Re=!1}}}function l(){let j=!1,Re=null,Ue=null,Fe=null,be=null,xe=null,He=null,st=null,Ot=null;return{setTest:function(At){j||(At?fe(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(At){Re!==At&&!j&&(r.stencilMask(At),Re=At)},setFunc:function(At,Ln,si){(Ue!==At||Fe!==Ln||be!==si)&&(r.stencilFunc(At,Ln,si),Ue=At,Fe=Ln,be=si)},setOp:function(At,Ln,si){(xe!==At||He!==Ln||st!==si)&&(r.stencilOp(At,Ln,si),xe=At,He=Ln,st=si)},setLocked:function(At){j=At},setClear:function(At){Ot!==At&&(r.clearStencil(At),Ot=At)},reset:function(){j=!1,Re=null,Ue=null,Fe=null,be=null,xe=null,He=null,st=null,Ot=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,_=null,L=null,U=null,N=null,I=null,F=null,z=new bt(0,0,0),X=0,w=!1,D=null,V=null,J=null,oe=null,pe=null;const le=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=K>=2);let ye=null,Te={};const P=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),he=new Gt().fromArray(P),Me=new Gt().fromArray(Q);function Ce(j,Re,Ue,Fe){const be=new Uint8Array(4),xe=r.createTexture();r.bindTexture(j,xe),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<Ue;He++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(Re+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return xe}const ne={};ne[r.TEXTURE_2D]=Ce(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),fe(r.DEPTH_TEST),f.setFunc(Nr),tt(!1),Ve(S_),fe(r.CULL_FACE),mt(Ya);function fe(j){v[j]!==!0&&(r.enable(j),v[j]=!0)}function we(j){v[j]!==!1&&(r.disable(j),v[j]=!1)}function Ie(j,Re){return g[j]!==Re?(r.bindFramebuffer(j,Re),g[j]=Re,j===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),j===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Xe(j,Re){let Ue=M,Fe=!1;if(j){Ue=x.get(Re),Ue===void 0&&(Ue=[],x.set(Re,Ue));const be=j.textures;if(Ue.length!==be.length||Ue[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,He=be.length;xe<He;xe++)Ue[xe]=r.COLOR_ATTACHMENT0+xe;Ue.length=be.length,Fe=!0}}else Ue[0]!==r.BACK&&(Ue[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(Ue)}function lt(j){return b!==j?(r.useProgram(j),b=j,!0):!1}const $t={[As]:r.FUNC_ADD,[HE]:r.FUNC_SUBTRACT,[GE]:r.FUNC_REVERSE_SUBTRACT};$t[VE]=r.MIN,$t[kE]=r.MAX;const G={[jE]:r.ZERO,[XE]:r.ONE,[WE]:r.SRC_COLOR,[sd]:r.SRC_ALPHA,[JE]:r.SRC_ALPHA_SATURATE,[KE]:r.DST_COLOR,[YE]:r.DST_ALPHA,[qE]:r.ONE_MINUS_SRC_COLOR,[rd]:r.ONE_MINUS_SRC_ALPHA,[QE]:r.ONE_MINUS_DST_COLOR,[ZE]:r.ONE_MINUS_DST_ALPHA,[$E]:r.CONSTANT_COLOR,[eb]:r.ONE_MINUS_CONSTANT_COLOR,[tb]:r.CONSTANT_ALPHA,[nb]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(j,Re,Ue,Fe,be,xe,He,st,Ot,At){if(j===Ya){T===!0&&(we(r.BLEND),T=!1);return}if(T===!1&&(fe(r.BLEND),T=!0),j!==FE){if(j!==y||At!==w){if((_!==As||N!==As)&&(r.blendEquation(r.FUNC_ADD),_=As,N=As),At)switch(j){case wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFunc(r.ONE,r.ONE);break;case E_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case b_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case E_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,U=null,I=null,F=null,z.set(0,0,0),X=0,y=j,w=At}return}be=be||Re,xe=xe||Ue,He=He||Fe,(Re!==_||be!==N)&&(r.blendEquationSeparate($t[Re],$t[be]),_=Re,N=be),(Ue!==L||Fe!==U||xe!==I||He!==F)&&(r.blendFuncSeparate(G[Ue],G[Fe],G[xe],G[He]),L=Ue,U=Fe,I=xe,F=He),(st.equals(z)===!1||Ot!==X)&&(r.blendColor(st.r,st.g,st.b,Ot),z.copy(st),X=Ot),y=j,w=!1}function at(j,Re){j.side===Oi?we(r.CULL_FACE):fe(r.CULL_FACE);let Ue=j.side===jn;Re&&(Ue=!Ue),tt(Ue),j.blending===wr&&j.transparent===!1?mt(Ya):mt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const Fe=j.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),We(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(j){D!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),D=j)}function Ve(j){j!==BE?(fe(r.CULL_FACE),j!==V&&(j===S_?r.cullFace(r.BACK):j===IE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),V=j}function Vt(j){j!==J&&(B&&r.lineWidth(j),J=j)}function We(j,Re,Ue){j?(fe(r.POLYGON_OFFSET_FILL),(oe!==Re||pe!==Ue)&&(r.polygonOffset(Re,Ue),oe=Re,pe=Ue)):we(r.POLYGON_OFFSET_FILL)}function rt(j){j?fe(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function en(j){j===void 0&&(j=r.TEXTURE0+le-1),ye!==j&&(r.activeTexture(j),ye=j)}function Zt(j,Re,Ue){Ue===void 0&&(ye===null?Ue=r.TEXTURE0+le-1:Ue=ye);let Fe=Te[Ue];Fe===void 0&&(Fe={type:void 0,texture:void 0},Te[Ue]=Fe),(Fe.type!==j||Fe.texture!==Re)&&(ye!==Ue&&(r.activeTexture(Ue),ye=Ue),r.bindTexture(j,Re||ne[j]),Fe.type=j,Fe.texture=Re)}function O(){const j=Te[ye];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ie(){try{r.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{r.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ke(){try{r.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function De(){try{r.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{r.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(){try{r.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{r.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ne(j){he.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),he.copy(j))}function Qe(j){Me.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Me.copy(j))}function Be(j,Re){let Ue=p.get(Re);Ue===void 0&&(Ue=new WeakMap,p.set(Re,Ue));let Fe=Ue.get(j);Fe===void 0&&(Fe=r.getUniformBlockIndex(Re,j.name),Ue.set(j,Fe))}function Le(j,Re){const Fe=p.get(Re).get(j);m.get(Re)!==Fe&&(r.uniformBlockBinding(Re,Fe,j.__bindingPointIndex),m.set(Re,Fe))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ye=null,Te={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,_=null,L=null,U=null,N=null,I=null,F=null,z=new bt(0,0,0),X=0,w=!1,D=null,V=null,J=null,oe=null,pe=null,he.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:fe,disable:we,bindFramebuffer:Ie,drawBuffers:Xe,useProgram:lt,setBlending:mt,setMaterial:at,setFlipSided:tt,setCullFace:Ve,setLineWidth:Vt,setPolygonOffset:We,setScissorTest:rt,activeTexture:en,bindTexture:Zt,unbindTexture:O,compressedTexImage2D:A,compressedTexImage3D:ie,texImage2D:Ze,texImage3D:Ae,updateUBOMapping:Be,uniformBlockBinding:Le,texStorage2D:De,texStorage3D:Ye,texSubImage2D:ge,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:Ke,scissor:Ne,viewport:Qe,reset:ct}}function OC(r,e,i,s,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Tt,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,A){return M?new OffscreenCanvas(O,A):Kc("canvas")}function T(O,A,ie){let ge=1;const Ee=Zt(O);if((Ee.width>ie||Ee.height>ie)&&(ge=ie/Math.max(Ee.width,Ee.height)),ge<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const de=Math.floor(ge*Ee.width),Ke=Math.floor(ge*Ee.height);g===void 0&&(g=b(de,Ke));const De=A?b(de,Ke):g;return De.width=de,De.height=Ke,De.getContext("2d").drawImage(O,0,0,de,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+de+"x"+Ke+")."),De}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){r.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(O,A,ie,ge,Ee=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let de=A;if(A===r.RED&&(ie===r.FLOAT&&(de=r.R32F),ie===r.HALF_FLOAT&&(de=r.R16F),ie===r.UNSIGNED_BYTE&&(de=r.R8)),A===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(de=r.R8UI),ie===r.UNSIGNED_SHORT&&(de=r.R16UI),ie===r.UNSIGNED_INT&&(de=r.R32UI),ie===r.BYTE&&(de=r.R8I),ie===r.SHORT&&(de=r.R16I),ie===r.INT&&(de=r.R32I)),A===r.RG&&(ie===r.FLOAT&&(de=r.RG32F),ie===r.HALF_FLOAT&&(de=r.RG16F),ie===r.UNSIGNED_BYTE&&(de=r.RG8)),A===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(de=r.RG8UI),ie===r.UNSIGNED_SHORT&&(de=r.RG16UI),ie===r.UNSIGNED_INT&&(de=r.RG32UI),ie===r.BYTE&&(de=r.RG8I),ie===r.SHORT&&(de=r.RG16I),ie===r.INT&&(de=r.RG32I)),A===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(de=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(de=r.RGB16UI),ie===r.UNSIGNED_INT&&(de=r.RGB32UI),ie===r.BYTE&&(de=r.RGB8I),ie===r.SHORT&&(de=r.RGB16I),ie===r.INT&&(de=r.RGB32I)),A===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),ie===r.UNSIGNED_INT&&(de=r.RGBA32UI),ie===r.BYTE&&(de=r.RGBA8I),ie===r.SHORT&&(de=r.RGBA16I),ie===r.INT&&(de=r.RGBA32I)),A===r.RGB&&(ie===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),A===r.RGBA){const Ke=Ee?Yc:Dt.getTransfer(ge);ie===r.FLOAT&&(de=r.RGBA32F),ie===r.HALF_FLOAT&&(de=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(de=Ke===Ht?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function N(O,A){let ie;return O?A===null||A===Ds||A===Wo?ie=r.DEPTH24_STENCIL8:A===ha?ie=r.DEPTH32F_STENCIL8:A===Xo&&(ie=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ds||A===Wo?ie=r.DEPTH_COMPONENT24:A===ha?ie=r.DEPTH_COMPONENT32F:A===Xo&&(ie=r.DEPTH_COMPONENT16),ie}function I(O,A){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ti&&O.minFilter!==Pi?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function F(O){const A=O.target;A.removeEventListener("dispose",F),X(A),A.isVideoTexture&&v.delete(A)}function z(O){const A=O.target;A.removeEventListener("dispose",z),D(A)}function X(O){const A=s.get(O);if(A.__webglInit===void 0)return;const ie=O.source,ge=x.get(ie);if(ge){const Ee=ge[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&w(O),Object.keys(ge).length===0&&x.delete(ie)}s.remove(O)}function w(O){const A=s.get(O);r.deleteTexture(A.__webglTexture);const ie=O.source,ge=x.get(ie);delete ge[A.__cacheKey],f.memory.textures--}function D(O){const A=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let Ee=0;Ee<A.__webglFramebuffer[ge].length;Ee++)r.deleteFramebuffer(A.__webglFramebuffer[ge][Ee]);else r.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)r.deleteFramebuffer(A.__webglFramebuffer[ge]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ie=O.textures;for(let ge=0,Ee=ie.length;ge<Ee;ge++){const de=s.get(ie[ge]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),f.memory.textures--),s.remove(ie[ge])}s.remove(O)}let V=0;function J(){V=0}function oe(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function pe(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function le(O,A){const ie=s.get(O);if(O.isVideoTexture&&rt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ie.__version!==O.version){const ge=O.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(ie,O,A);return}}else O.isExternalTexture&&(ie.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+A)}function B(O,A){const ie=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){ne(ie,O,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+A)}function K(O,A){const ie=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){ne(ie,O,A);return}i.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+A)}function q(O,A){const ie=s.get(O);if(O.version>0&&ie.__version!==O.version){fe(ie,O,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+A)}const ye={[gd]:r.REPEAT,[Cs]:r.CLAMP_TO_EDGE,[vd]:r.MIRRORED_REPEAT},Te={[Ti]:r.NEAREST,[fb]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[Pi]:r.LINEAR,[Eh]:r.LINEAR_MIPMAP_NEAREST,[ws]:r.LINEAR_MIPMAP_LINEAR},P={[mb]:r.NEVER,[Sb]:r.ALWAYS,[gb]:r.LESS,[tx]:r.LEQUAL,[vb]:r.EQUAL,[yb]:r.GEQUAL,[_b]:r.GREATER,[xb]:r.NOTEQUAL};function Q(O,A){if(A.type===ha&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Pi||A.magFilter===Eh||A.magFilter===gc||A.magFilter===ws||A.minFilter===Pi||A.minFilter===Eh||A.minFilter===gc||A.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,ye[A.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,ye[A.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,ye[A.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Te[A.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Te[A.minFilter]),A.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,P[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ti||A.minFilter!==gc&&A.minFilter!==ws||A.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function he(O,A){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",F));const ge=A.source;let Ee=x.get(ge);Ee===void 0&&(Ee={},x.set(ge,Ee));const de=pe(A);if(de!==O.__cacheKey){Ee[de]===void 0&&(Ee[de]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,ie=!0),Ee[de].usedTimes++;const Ke=Ee[O.__cacheKey];Ke!==void 0&&(Ee[O.__cacheKey].usedTimes--,Ke.usedTimes===0&&w(A)),O.__cacheKey=de,O.__webglTexture=Ee[de].texture}return ie}function Me(O,A,ie){return Math.floor(Math.floor(O/ie)/A)}function Ce(O,A,ie,ge){const de=O.updateRanges;if(de.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,ie,ge,A.data);else{de.sort((Ae,Ne)=>Ae.start-Ne.start);let Ke=0;for(let Ae=1;Ae<de.length;Ae++){const Ne=de[Ke],Qe=de[Ae],Be=Ne.start+Ne.count,Le=Me(Qe.start,A.width,4),ct=Me(Ne.start,A.width,4);Qe.start<=Be+1&&Le===ct&&Me(Qe.start+Qe.count-1,A.width,4)===Le?Ne.count=Math.max(Ne.count,Qe.start+Qe.count-Ne.start):(++Ke,de[Ke]=Qe)}de.length=Ke+1;const De=r.getParameter(r.UNPACK_ROW_LENGTH),Ye=r.getParameter(r.UNPACK_SKIP_PIXELS),Ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let Ae=0,Ne=de.length;Ae<Ne;Ae++){const Qe=de[Ae],Be=Math.floor(Qe.start/4),Le=Math.ceil(Qe.count/4),ct=Be%A.width,j=Math.floor(Be/A.width),Re=Le,Ue=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,ct,j,Re,Ue,ie,ge,A.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,De),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ze)}}function ne(O,A,ie){let ge=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=r.TEXTURE_3D);const Ee=he(O,A),de=A.source;i.bindTexture(ge,O.__webglTexture,r.TEXTURE0+ie);const Ke=s.get(de);if(de.version!==Ke.__version||Ee===!0){i.activeTexture(r.TEXTURE0+ie);const De=Dt.getPrimaries(Dt.workingColorSpace),Ye=A.colorSpace===Wa?null:Dt.getPrimaries(A.colorSpace),Ze=A.colorSpace===Wa||De===Ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Ae=T(A.image,!1,l.maxTextureSize);Ae=en(A,Ae);const Ne=c.convert(A.format,A.colorSpace),Qe=c.convert(A.type);let Be=U(A.internalFormat,Ne,Qe,A.colorSpace,A.isVideoTexture);Q(ge,A);let Le;const ct=A.mipmaps,j=A.isVideoTexture!==!0,Re=Ke.__version===void 0||Ee===!0,Ue=de.dataReady,Fe=I(A,Ae);if(A.isDepthTexture)Be=N(A.format===Yo,A.type),Re&&(j?i.texStorage2D(r.TEXTURE_2D,1,Be,Ae.width,Ae.height):i.texImage2D(r.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,Ne,Qe,null));else if(A.isDataTexture)if(ct.length>0){j&&Re&&i.texStorage2D(r.TEXTURE_2D,Fe,Be,ct[0].width,ct[0].height);for(let be=0,xe=ct.length;be<xe;be++)Le=ct[be],j?Ue&&i.texSubImage2D(r.TEXTURE_2D,be,0,0,Le.width,Le.height,Ne,Qe,Le.data):i.texImage2D(r.TEXTURE_2D,be,Be,Le.width,Le.height,0,Ne,Qe,Le.data);A.generateMipmaps=!1}else j?(Re&&i.texStorage2D(r.TEXTURE_2D,Fe,Be,Ae.width,Ae.height),Ue&&Ce(A,Ae,Ne,Qe)):i.texImage2D(r.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,Ne,Qe,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){j&&Re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Be,ct[0].width,ct[0].height,Ae.depth);for(let be=0,xe=ct.length;be<xe;be++)if(Le=ct[be],A.format!==bi)if(Ne!==null)if(j){if(Ue)if(A.layerUpdates.size>0){const He=Q_(Le.width,Le.height,A.format,A.type);for(const st of A.layerUpdates){const Ot=Le.data.subarray(st*He/Le.data.BYTES_PER_ELEMENT,(st+1)*He/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,st,Le.width,Le.height,1,Ne,Ot)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,Ae.depth,Ne,Le.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,be,Be,Le.width,Le.height,Ae.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ue&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,Ae.depth,Ne,Qe,Le.data):i.texImage3D(r.TEXTURE_2D_ARRAY,be,Be,Le.width,Le.height,Ae.depth,0,Ne,Qe,Le.data)}else{j&&Re&&i.texStorage2D(r.TEXTURE_2D,Fe,Be,ct[0].width,ct[0].height);for(let be=0,xe=ct.length;be<xe;be++)Le=ct[be],A.format!==bi?Ne!==null?j?Ue&&i.compressedTexSubImage2D(r.TEXTURE_2D,be,0,0,Le.width,Le.height,Ne,Le.data):i.compressedTexImage2D(r.TEXTURE_2D,be,Be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ue&&i.texSubImage2D(r.TEXTURE_2D,be,0,0,Le.width,Le.height,Ne,Qe,Le.data):i.texImage2D(r.TEXTURE_2D,be,Be,Le.width,Le.height,0,Ne,Qe,Le.data)}else if(A.isDataArrayTexture)if(j){if(Re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Be,Ae.width,Ae.height,Ae.depth),Ue)if(A.layerUpdates.size>0){const be=Q_(Ae.width,Ae.height,A.format,A.type);for(const xe of A.layerUpdates){const He=Ae.data.subarray(xe*be/Ae.data.BYTES_PER_ELEMENT,(xe+1)*be/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,Ae.width,Ae.height,1,Ne,Qe,He)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ne,Qe,Ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,Ae.width,Ae.height,Ae.depth,0,Ne,Qe,Ae.data);else if(A.isData3DTexture)j?(Re&&i.texStorage3D(r.TEXTURE_3D,Fe,Be,Ae.width,Ae.height,Ae.depth),Ue&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ne,Qe,Ae.data)):i.texImage3D(r.TEXTURE_3D,0,Be,Ae.width,Ae.height,Ae.depth,0,Ne,Qe,Ae.data);else if(A.isFramebufferTexture){if(Re)if(j)i.texStorage2D(r.TEXTURE_2D,Fe,Be,Ae.width,Ae.height);else{let be=Ae.width,xe=Ae.height;for(let He=0;He<Fe;He++)i.texImage2D(r.TEXTURE_2D,He,Be,be,xe,0,Ne,Qe,null),be>>=1,xe>>=1}}else if(ct.length>0){if(j&&Re){const be=Zt(ct[0]);i.texStorage2D(r.TEXTURE_2D,Fe,Be,be.width,be.height)}for(let be=0,xe=ct.length;be<xe;be++)Le=ct[be],j?Ue&&i.texSubImage2D(r.TEXTURE_2D,be,0,0,Ne,Qe,Le):i.texImage2D(r.TEXTURE_2D,be,Be,Ne,Qe,Le);A.generateMipmaps=!1}else if(j){if(Re){const be=Zt(Ae);i.texStorage2D(r.TEXTURE_2D,Fe,Be,be.width,be.height)}Ue&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Qe,Ae)}else i.texImage2D(r.TEXTURE_2D,0,Be,Ne,Qe,Ae);y(A)&&_(ge),Ke.__version=de.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function fe(O,A,ie){if(A.image.length!==6)return;const ge=he(O,A),Ee=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ie);const de=s.get(Ee);if(Ee.version!==de.__version||ge===!0){i.activeTexture(r.TEXTURE0+ie);const Ke=Dt.getPrimaries(Dt.workingColorSpace),De=A.colorSpace===Wa?null:Dt.getPrimaries(A.colorSpace),Ye=A.colorSpace===Wa||Ke===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const Ze=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,Ne=[];for(let xe=0;xe<6;xe++)!Ze&&!Ae?Ne[xe]=T(A.image[xe],!0,l.maxCubemapSize):Ne[xe]=Ae?A.image[xe].image:A.image[xe],Ne[xe]=en(A,Ne[xe]);const Qe=Ne[0],Be=c.convert(A.format,A.colorSpace),Le=c.convert(A.type),ct=U(A.internalFormat,Be,Le,A.colorSpace),j=A.isVideoTexture!==!0,Re=de.__version===void 0||ge===!0,Ue=Ee.dataReady;let Fe=I(A,Qe);Q(r.TEXTURE_CUBE_MAP,A);let be;if(Ze){j&&Re&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ct,Qe.width,Qe.height);for(let xe=0;xe<6;xe++){be=Ne[xe].mipmaps;for(let He=0;He<be.length;He++){const st=be[He];A.format!==bi?Be!==null?j?Ue&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,st.width,st.height,Be,st.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,ct,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,st.width,st.height,Be,Le,st.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,ct,st.width,st.height,0,Be,Le,st.data)}}}else{if(be=A.mipmaps,j&&Re){be.length>0&&Fe++;const xe=Zt(Ne[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ct,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ae){j?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ne[xe].width,Ne[xe].height,Be,Le,Ne[xe].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Ne[xe].width,Ne[xe].height,0,Be,Le,Ne[xe].data);for(let He=0;He<be.length;He++){const Ot=be[He].image[xe].image;j?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,Ot.width,Ot.height,Be,Le,Ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,ct,Ot.width,Ot.height,0,Be,Le,Ot.data)}}else{j?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Be,Le,Ne[xe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Be,Le,Ne[xe]);for(let He=0;He<be.length;He++){const st=be[He];j?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,Be,Le,st.image[xe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,ct,Be,Le,st.image[xe])}}}y(A)&&_(r.TEXTURE_CUBE_MAP),de.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function we(O,A,ie,ge,Ee,de){const Ke=c.convert(ie.format,ie.colorSpace),De=c.convert(ie.type),Ye=U(ie.internalFormat,Ke,De,ie.colorSpace),Ze=s.get(A),Ae=s.get(ie);if(Ae.__renderTarget=A,!Ze.__hasExternalTextures){const Ne=Math.max(1,A.width>>de),Qe=Math.max(1,A.height>>de);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?i.texImage3D(Ee,de,Ye,Ne,Qe,A.depth,0,Ke,De,null):i.texImage2D(Ee,de,Ye,Ne,Qe,0,Ke,De,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),We(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,Ee,Ae.__webglTexture,0,Vt(A)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,Ee,Ae.__webglTexture,de),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(O,A,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,O),A.depthBuffer){const ge=A.depthTexture,Ee=ge&&ge.isDepthTexture?ge.type:null,de=N(A.stencilBuffer,Ee),Ke=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=Vt(A);We(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,de,A.width,A.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,de,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,de,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,O)}else{const ge=A.textures;for(let Ee=0;Ee<ge.length;Ee++){const de=ge[Ee],Ke=c.convert(de.format,de.colorSpace),De=c.convert(de.type),Ye=U(de.internalFormat,Ke,De,de.colorSpace),Ze=Vt(A);ie&&We(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,Ye,A.width,A.height):We(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,Ye,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ye,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xe(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(A.depthTexture);ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),le(A.depthTexture,0);const Ee=ge.__webglTexture,de=Vt(A);if(A.depthTexture.format===qo)We(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0);else if(A.depthTexture.format===Yo)We(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function lt(O){const A=s.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const ge=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){const Ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",Ee)};ge.addEventListener("dispose",Ee),A.__depthDisposeCallback=Ee}A.__boundDepthTexture=ge}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const ge=O.texture.mipmaps;ge&&ge.length>0?Xe(A.__webglFramebuffer[0],O):Xe(A.__webglFramebuffer,O)}else if(ie){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=r.createRenderbuffer(),Ie(A.__webglDepthbuffer[ge],O,!1);else{const Ee=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,de)}}else{const ge=O.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Ie(A.__webglDepthbuffer,O,!1);else{const Ee=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,de)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(O,A,ie){const ge=s.get(O);A!==void 0&&we(ge.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&lt(O)}function G(O){const A=O.texture,ie=s.get(O),ge=s.get(A);O.addEventListener("dispose",z);const Ee=O.textures,de=O.isWebGLCubeRenderTarget===!0,Ke=Ee.length>1;if(Ke||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=A.version,f.memory.textures++),de){ie.__webglFramebuffer=[];for(let De=0;De<6;De++)if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer[De]=[];for(let Ye=0;Ye<A.mipmaps.length;Ye++)ie.__webglFramebuffer[De][Ye]=r.createFramebuffer()}else ie.__webglFramebuffer[De]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let De=0;De<A.mipmaps.length;De++)ie.__webglFramebuffer[De]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let De=0,Ye=Ee.length;De<Ye;De++){const Ze=s.get(Ee[De]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&We(O)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let De=0;De<Ee.length;De++){const Ye=Ee[De];ie.__webglColorRenderbuffer[De]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[De]);const Ze=c.convert(Ye.format,Ye.colorSpace),Ae=c.convert(Ye.type),Ne=U(Ye.internalFormat,Ze,Ae,Ye.colorSpace,O.isXRRenderTarget===!0),Qe=Vt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,Ne,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,ie.__webglColorRenderbuffer[De])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(ie.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Q(r.TEXTURE_CUBE_MAP,A);for(let De=0;De<6;De++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ye=0;Ye<A.mipmaps.length;Ye++)we(ie.__webglFramebuffer[De][Ye],O,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ye);else we(ie.__webglFramebuffer[De],O,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(A)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let De=0,Ye=Ee.length;De<Ye;De++){const Ze=Ee[De],Ae=s.get(Ze);let Ne=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ne=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Ae.__webglTexture),Q(Ne,Ze),we(ie.__webglFramebuffer,O,Ze,r.COLOR_ATTACHMENT0+De,Ne,0),y(Ze)&&_(Ne)}i.unbindTexture()}else{let De=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(De,ge.__webglTexture),Q(De,A),A.mipmaps&&A.mipmaps.length>0)for(let Ye=0;Ye<A.mipmaps.length;Ye++)we(ie.__webglFramebuffer[Ye],O,A,r.COLOR_ATTACHMENT0,De,Ye);else we(ie.__webglFramebuffer,O,A,r.COLOR_ATTACHMENT0,De,0);y(A)&&_(De),i.unbindTexture()}O.depthBuffer&&lt(O)}function mt(O){const A=O.textures;for(let ie=0,ge=A.length;ie<ge;ie++){const Ee=A[ie];if(y(Ee)){const de=L(O),Ke=s.get(Ee).__webglTexture;i.bindTexture(de,Ke),_(de),i.unbindTexture()}}}const at=[],tt=[];function Ve(O){if(O.samples>0){if(We(O)===!1){const A=O.textures,ie=O.width,ge=O.height;let Ee=r.COLOR_BUFFER_BIT;const de=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=s.get(O),De=A.length>1;if(De)for(let Ze=0;Ze<A.length;Ze++)i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ye=O.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ze=0;Ze<A.length;Ze++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),De){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const Ae=s.get(A[Ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,ie,ge,0,0,ie,ge,Ee,r.NEAREST),m===!0&&(at.length=0,tt.length=0,at.push(r.COLOR_ATTACHMENT0+Ze),O.depthBuffer&&O.resolveDepthBuffer===!1&&(at.push(de),tt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,tt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),De)for(let Ze=0;Ze<A.length;Ze++){i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const Ae=s.get(A[Ze]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,Ae,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const A=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Vt(O){return Math.min(l.maxSamples,O.samples)}function We(O){const A=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function rt(O){const A=f.render.frame;v.get(O)!==A&&(v.set(O,A),O.update())}function en(O,A){const ie=O.colorSpace,ge=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==Or&&ie!==Wa&&(Dt.getTransfer(ie)===Ht?(ge!==bi||Ee!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),A}function Zt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=J,this.setTexture2D=le,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=$t,this.setupRenderTarget=G,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=We}function PC(r,e){function i(s,l=Wa){let c;const f=Dt.getTransfer(l);if(s===Hi)return r.UNSIGNED_BYTE;if(s===sp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===rp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Y0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Z0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===W0)return r.BYTE;if(s===q0)return r.SHORT;if(s===Xo)return r.UNSIGNED_SHORT;if(s===ap)return r.INT;if(s===Ds)return r.UNSIGNED_INT;if(s===ha)return r.FLOAT;if(s===el)return r.HALF_FLOAT;if(s===K0)return r.ALPHA;if(s===Q0)return r.RGB;if(s===bi)return r.RGBA;if(s===qo)return r.DEPTH_COMPONENT;if(s===Yo)return r.DEPTH_STENCIL;if(s===J0)return r.RED;if(s===op)return r.RED_INTEGER;if(s===$0)return r.RG;if(s===lp)return r.RG_INTEGER;if(s===cp)return r.RGBA_INTEGER;if(s===Vc||s===kc||s===jc||s===Xc)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_d||s===xd||s===yd||s===Sd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Md||s===Ed||s===bd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Md||s===Ed)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===bd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Nd||s===Ud||s===Ld||s===Od||s===Pd||s===zd||s===Bd||s===Id)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Td)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ad)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ud)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ld)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Od)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bd)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Id)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fd||s===Hd||s===Gd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Fd)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vd||s===kd||s===jd||s===Xd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Vd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const zC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new px(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Qa({vertexShader:zC,fragmentShader:BC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new qa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FC extends Ir{constructor(e,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,b=null;const T=typeof XRWebGLBinding<"u",y=new IC,_={},L=i.getContextAttributes();let U=null,N=null;const I=[],F=[],z=new Tt;let X=null;const w=new ai;w.viewport=new Gt;const D=new ai;D.viewport=new Gt;const V=[w,D],J=new rT;let oe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=I[ne];return fe===void 0&&(fe=new Wh,I[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=I[ne];return fe===void 0&&(fe=new Wh,I[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=I[ne];return fe===void 0&&(fe=new Wh,I[ne]=fe),fe.getHandSpace()};function le(ne){const fe=F.indexOf(ne.inputSource);if(fe===-1)return;const we=I[fe];we!==void 0&&(we.update(ne.inputSource,ne.frame,p||f),we.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){l.removeEventListener("select",le),l.removeEventListener("selectstart",le),l.removeEventListener("selectend",le),l.removeEventListener("squeeze",le),l.removeEventListener("squeezestart",le),l.removeEventListener("squeezeend",le),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",K);for(let ne=0;ne<I.length;ne++){const fe=F[ne];fe!==null&&(F[ne]=null,I[ne].disconnect(fe))}oe=null,pe=null,y.reset();for(const ne in _)delete _[ne];e.setRenderTarget(U),M=null,x=null,g=null,l=null,N=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(X),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",le),l.addEventListener("selectstart",le),l.addEventListener("selectend",le),l.addEventListener("squeeze",le),l.addEventListener("squeezestart",le),l.addEventListener("squeezeend",le),l.addEventListener("end",B),l.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ie=null,Xe=null;L.depth&&(Xe=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=L.stencil?Yo:qo,Ie=L.stencil?Wo:Ds);const lt={colorFormat:i.RGBA8,depthFormat:Xe,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(lt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Ns(x.textureWidth,x.textureHeight,{format:bi,type:Hi,depthTexture:new dx(x.textureWidth,x.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const we={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Ns(M.framebufferWidth,M.framebufferHeight,{format:bi,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ce.setContext(l),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(ne){for(let fe=0;fe<ne.removed.length;fe++){const we=ne.removed[fe],Ie=F.indexOf(we);Ie>=0&&(F[Ie]=null,I[Ie].disconnect(we))}for(let fe=0;fe<ne.added.length;fe++){const we=ne.added[fe];let Ie=F.indexOf(we);if(Ie===-1){for(let lt=0;lt<I.length;lt++)if(lt>=F.length){F.push(we),Ie=lt;break}else if(F[lt]===null){F[lt]=we,Ie=lt;break}if(Ie===-1)break}const Xe=I[Ie];Xe&&Xe.connect(we)}}const q=new $,ye=new $;function Te(ne,fe,we){q.setFromMatrixPosition(fe.matrixWorld),ye.setFromMatrixPosition(we.matrixWorld);const Ie=q.distanceTo(ye),Xe=fe.projectionMatrix.elements,lt=we.projectionMatrix.elements,$t=Xe[14]/(Xe[10]-1),G=Xe[14]/(Xe[10]+1),mt=(Xe[9]+1)/Xe[5],at=(Xe[9]-1)/Xe[5],tt=(Xe[8]-1)/Xe[0],Ve=(lt[8]+1)/lt[0],Vt=$t*tt,We=$t*Ve,rt=Ie/(-tt+Ve),en=rt*-tt;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(en),ne.translateZ(rt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Xe[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Zt=$t+rt,O=G+rt,A=Vt-en,ie=We+(Ie-en),ge=mt*G/O*Zt,Ee=at*G/O*Zt;ne.projectionMatrix.makePerspective(A,ie,ge,Ee,Zt,O),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function P(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let fe=ne.near,we=ne.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(we=y.depthFar)),J.near=D.near=w.near=fe,J.far=D.far=w.far=we,(oe!==J.near||pe!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),oe=J.near,pe=J.far),J.layers.mask=ne.layers.mask|6,w.layers.mask=J.layers.mask&3,D.layers.mask=J.layers.mask&5;const Ie=ne.parent,Xe=J.cameras;P(J,Ie);for(let lt=0;lt<Xe.length;lt++)P(Xe[lt],Ie);Xe.length===2?Te(J,w,D):J.projectionMatrix.copy(w.projectionMatrix),Q(ne,J,Ie)};function Q(ne,fe,we){we===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(we.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Wd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(ne){m=ne,x!==null&&(x.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(ne){return _[ne]};let he=null;function Me(ne,fe){if(v=fe.getViewerPose(p||f),b=fe,v!==null){const we=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Ie=!1;we.length!==J.cameras.length&&(J.cameras.length=0,Ie=!0);for(let G=0;G<we.length;G++){const mt=we[G];let at=null;if(M!==null)at=M.getViewport(mt);else{const Ve=g.getViewSubImage(x,mt);at=Ve.viewport,G===0&&(e.setRenderTargetTextures(N,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(N))}let tt=V[G];tt===void 0&&(tt=new ai,tt.layers.enable(G),tt.viewport=new Gt,V[G]=tt),tt.matrix.fromArray(mt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(mt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(at.x,at.y,at.width,at.height),G===0&&(J.matrix.copy(tt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ie===!0&&J.cameras.push(tt)}const Xe=l.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const G=g.getDepthInformation(we[0]);G&&G.isValid&&G.texture&&y.init(G,l.renderState)}if(Xe&&Xe.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let G=0;G<we.length;G++){const mt=we[G].camera;if(mt){let at=_[mt];at||(at=new px,_[mt]=at);const tt=g.getCameraImage(mt);at.sourceTexture=tt}}}}for(let we=0;we<I.length;we++){const Ie=F[we],Xe=I[we];Ie!==null&&Xe!==void 0&&Xe.update(Ie,fe,p||f)}he&&he(ne,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),b=null}const Ce=new vx;Ce.setAnimationLoop(Me),this.setAnimationLoop=function(ne){he=ne},this.dispose=function(){}}}const Es=new Gi,HC=new Qt;function GC(r,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,cx(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,L,U,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),g(y,_)):_.isMeshPhongMaterial?(c(y,_),v(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,N)):_.isMeshMatcapMaterial?(c(y,_),b(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),T(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,L,U):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===jn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===jn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=e.get(_),U=L.envMap,N=L.envMapRotation;U&&(y.envMap.value=U,Es.copy(N),Es.x*=-1,Es.y*=-1,Es.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),y.envMapRotation.value.setFromMatrix4(HC.makeRotationFromEuler(Es)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,L,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const L=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function VC(r,e,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const N=U.program;s.uniformBlockBinding(L,N)}function p(L,U){let N=l[L.id];N===void 0&&(b(L),N=v(L),l[L.id]=N,L.addEventListener("dispose",y));const I=U.program;s.updateUBOMapping(L,I);const F=e.render.frame;c[L.id]!==F&&(x(L),c[L.id]=F)}function v(L){const U=g();L.__bindingPointIndex=U;const N=r.createBuffer(),I=L.__size,F=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,I,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,N),N}function g(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=l[L.id],N=L.uniforms,I=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let F=0,z=N.length;F<z;F++){const X=Array.isArray(N[F])?N[F]:[N[F]];for(let w=0,D=X.length;w<D;w++){const V=X[w];if(M(V,F,w,I)===!0){const J=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let pe=0;for(let le=0;le<oe.length;le++){const B=oe[le],K=T(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,J+pe,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,pe),pe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(L,U,N,I){const F=L.value,z=U+"_"+N;if(I[z]===void 0)return typeof F=="number"||typeof F=="boolean"?I[z]=F:I[z]=F.clone(),!0;{const X=I[z];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return I[z]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function b(L){const U=L.uniforms;let N=0;const I=16;for(let z=0,X=U.length;z<X;z++){const w=Array.isArray(U[z])?U[z]:[U[z]];for(let D=0,V=w.length;D<V;D++){const J=w[D],oe=Array.isArray(J.value)?J.value:[J.value];for(let pe=0,le=oe.length;pe<le;pe++){const B=oe[pe],K=T(B),q=N%I,ye=q%K.boundary,Te=q+ye;N+=ye,Te!==0&&I-Te<K.storage&&(N+=I-Te),J.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=K.storage}}}const F=N%I;return F>0&&(N+=I-F),L.__size=N,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function y(L){const U=L.target;U.removeEventListener("dispose",y);const N=f.indexOf(U.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const L in l)r.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class kC{constructor(e={}){const{canvas:i=Eb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const b=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1;this._outputColorSpace=mi;let F=0,z=0,X=null,w=-1,D=null;const V=new Gt,J=new Gt;let oe=null;const pe=new bt(0);let le=0,B=i.width,K=i.height,q=1,ye=null,Te=null;const P=new Gt(0,0,B,K),Q=new Gt(0,0,B,K);let he=!1;const Me=new hp;let Ce=!1,ne=!1;const fe=new Qt,we=new $,Ie=new Gt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function $t(){return X===null?q:1}let G=s;function mt(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${np}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",be,!1),G===null){const W="webgl2";if(G=mt(W,C),G===null)throw mt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,tt,Ve,Vt,We,rt,en,Zt,O,A,ie,ge,Ee,de,Ke,De,Ye,Ze,Ae,Ne,Qe,Be,Le,ct;function j(){at=new $A(G),at.init(),Be=new PC(G,at),tt=new WA(G,at,e,Be),Ve=new LC(G,at),tt.reversedDepthBuffer&&x&&Ve.buffers.depth.setReversed(!0),Vt=new nR(G),We=new yC,rt=new OC(G,at,Ve,We,tt,Be,Vt),en=new YA(N),Zt=new JA(N),O=new lT(G),Le=new jA(G,O),A=new eR(G,O,Vt,Le),ie=new aR(G,A,O,Vt),Ae=new iR(G,tt,rt),De=new qA(We),ge=new xC(N,en,Zt,at,tt,Le,De),Ee=new GC(N,We),de=new MC,Ke=new CC(at),Ze=new kA(N,en,Zt,Ve,ie,M,m),Ye=new NC(N,ie,tt),ct=new VC(G,Vt,tt,Ve),Ne=new XA(G,at,Vt),Qe=new tR(G,at,Vt),Vt.programs=ge.programs,N.capabilities=tt,N.extensions=at,N.properties=We,N.renderLists=de,N.shadowMap=Ye,N.state=Ve,N.info=Vt}j();const Re=new FC(N,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(B,K,!1))},this.getSize=function(C){return C.set(B,K)},this.setSize=function(C,W,se=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,K=W,i.width=Math.floor(C*q),i.height=Math.floor(W*q),se===!0&&(i.style.width=C+"px",i.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(B*q,K*q).floor()},this.setDrawingBufferSize=function(C,W,se){B=C,K=W,q=se,i.width=Math.floor(C*se),i.height=Math.floor(W*se),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(P)},this.setViewport=function(C,W,se,re){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,W,se,re),Ve.viewport(V.copy(P).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,W,se,re){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,W,se,re),Ve.scissor(J.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(C){Ve.setScissorTest(he=C)},this.setOpaqueSort=function(C){ye=C},this.setTransparentSort=function(C){Te=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,se=!0){let re=0;if(C){let Z=!1;if(X!==null){const Se=X.texture.format;Z=Se===cp||Se===lp||Se===op}if(Z){const Se=X.texture.type,Oe=Se===Hi||Se===Ds||Se===Xo||Se===Wo||Se===sp||Se===rp,ke=Ze.getClearColor(),ze=Ze.getClearAlpha(),Je=ke.r,it=ke.g,$e=ke.b;Oe?(b[0]=Je,b[1]=it,b[2]=$e,b[3]=ze,G.clearBufferuiv(G.COLOR,0,b)):(T[0]=Je,T[1]=it,T[2]=$e,T[3]=ze,G.clearBufferiv(G.COLOR,0,T))}else re|=G.COLOR_BUFFER_BIT}W&&(re|=G.DEPTH_BUFFER_BIT),se&&(re|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",be,!1),Ze.dispose(),de.dispose(),Ke.dispose(),We.dispose(),en.dispose(),Zt.dispose(),ie.dispose(),Le.dispose(),ct.dispose(),ge.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",si),Re.removeEventListener("sessionend",Gr),Ri.stop()};function Ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=Vt.autoReset,W=Ye.enabled,se=Ye.autoUpdate,re=Ye.needsUpdate,Z=Ye.type;j(),Vt.autoReset=C,Ye.enabled=W,Ye.autoUpdate=se,Ye.needsUpdate=re,Ye.type=Z}function be(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){const W=C.target;W.removeEventListener("dispose",xe),He(W)}function He(C){st(C),We.remove(C)}function st(C){const W=We.get(C).programs;W!==void 0&&(W.forEach(function(se){ge.releaseProgram(se)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,se,re,Z,Se){W===null&&(W=Xe);const Oe=Z.isMesh&&Z.matrixWorld.determinant()<0,ke=ga(C,W,se,re,Z);Ve.setMaterial(re,Oe);let ze=se.index,Je=1;if(re.wireframe===!0){if(ze=A.getWireframeAttribute(se),ze===void 0)return;Je=2}const it=se.drawRange,$e=se.attributes.position;let pt=it.start*Je,Ut=(it.start+it.count)*Je;Se!==null&&(pt=Math.max(pt,Se.start*Je),Ut=Math.min(Ut,(Se.start+Se.count)*Je)),ze!==null?(pt=Math.max(pt,0),Ut=Math.min(Ut,ze.count)):$e!=null&&(pt=Math.max(pt,0),Ut=Math.min(Ut,$e.count));const kt=Ut-pt;if(kt<0||kt===1/0)return;Le.setup(Z,re,ke,se,ze);let Lt,gt=Ne;if(ze!==null&&(Lt=O.get(ze),gt=Qe,gt.setIndex(Lt)),Z.isMesh)re.wireframe===!0?(Ve.setLineWidth(re.wireframeLinewidth*$t()),gt.setMode(G.LINES)):gt.setMode(G.TRIANGLES);else if(Z.isLine){let je=re.linewidth;je===void 0&&(je=1),Ve.setLineWidth(je*$t()),Z.isLineSegments?gt.setMode(G.LINES):Z.isLineLoop?gt.setMode(G.LINE_LOOP):gt.setMode(G.LINE_STRIP)}else Z.isPoints?gt.setMode(G.POINTS):Z.isSprite&&gt.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Zo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const je=Z._multiDrawStarts,Xt=Z._multiDrawCounts,Rt=Z._multiDrawCount,Mn=ze?O.get(ze).bytesPerElement:1,Vi=We.get(re).currentProgram.getUniforms();for(let _n=0;_n<Rt;_n++)Vi.setValue(G,"_gl_DrawID",_n),gt.render(je[_n]/Mn,Xt[_n])}else if(Z.isInstancedMesh)gt.renderInstances(pt,kt,Z.count);else if(se.isInstancedBufferGeometry){const je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Xt=Math.min(se.instanceCount,je);gt.renderInstances(pt,kt,Xt)}else gt.render(pt,kt)};function Ot(C,W,se){C.transparent===!0&&C.side===Oi&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,qn(C,W,se),C.side=Ka,C.needsUpdate=!0,qn(C,W,se),C.side=Oi):qn(C,W,se)}this.compile=function(C,W,se=null){se===null&&(se=C),_=Ke.get(se),_.init(W),U.push(_),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),C!==se&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const re=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Se=Z.material;if(Se)if(Array.isArray(Se))for(let Oe=0;Oe<Se.length;Oe++){const ke=Se[Oe];Ot(ke,se,Z),re.add(ke)}else Ot(Se,se,Z),re.add(Se)}),_=U.pop(),re},this.compileAsync=function(C,W,se=null){const re=this.compile(C,W,se);return new Promise(Z=>{function Se(){if(re.forEach(function(Oe){We.get(Oe).currentProgram.isReady()&&re.delete(Oe)}),re.size===0){Z(C);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let At=null;function Ln(C){At&&At(C)}function si(){Ri.stop()}function Gr(){Ri.start()}const Ri=new vx;Ri.setAnimationLoop(Ln),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(C){At=C,Re.setAnimationLoop(C),C===null?Ri.stop():Ri.start()},Re.addEventListener("sessionstart",si),Re.addEventListener("sessionend",Gr),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,W,X),_=Ke.get(C,U.length),_.init(W),U.push(_),fe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Me.setFromProjectionMatrix(fe,zi,W.reversedDepth),ne=this.localClippingEnabled,Ce=De.init(this.clippingPlanes,ne),y=de.get(C,L.length),y.init(),L.push(y),Re.enabled===!0&&Re.isPresenting===!0){const Se=N.xr.getDepthSensingMesh();Se!==null&&Us(Se,W,-1/0,N.sortObjects)}Us(C,W,0,N.sortObjects),y.finish(),N.sortObjects===!0&&y.sort(ye,Te),lt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,lt&&Ze.addToRenderList(y,C),this.info.render.frame++,Ce===!0&&De.beginShadows();const se=_.state.shadowsArray;Ye.render(se,C,W),Ce===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,Z=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Se=W.cameras;if(Z.length>0)for(let Oe=0,ke=Se.length;Oe<ke;Oe++){const ze=Se[Oe];Os(re,Z,C,ze)}lt&&Ze.render(C);for(let Oe=0,ke=Se.length;Oe<ke;Oe++){const ze=Se[Oe];Ls(y,C,ze,ze.viewport)}}else Z.length>0&&Os(re,Z,C,W),lt&&Ze.render(C),Ls(y,C,W);X!==null&&z===0&&(rt.updateMultisampleRenderTarget(X),rt.updateRenderTargetMipmap(X)),C.isScene===!0&&C.onAfterRender(N,C,W),Le.resetDefaultState(),w=-1,D=null,U.pop(),U.length>0?(_=U[U.length-1],Ce===!0&&De.setGlobalState(N.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Us(C,W,se,re){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Me.intersectsSprite(C)){re&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);const Oe=ie.update(C),ke=C.material;ke.visible&&y.push(C,Oe,ke,se,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Me.intersectsObject(C))){const Oe=ie.update(C),ke=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ie.copy(Oe.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(fe)),Array.isArray(ke)){const ze=Oe.groups;for(let Je=0,it=ze.length;Je<it;Je++){const $e=ze[Je],pt=ke[$e.materialIndex];pt&&pt.visible&&y.push(C,Oe,pt,se,Ie.z,$e)}}else ke.visible&&y.push(C,Oe,ke,se,Ie.z,null)}}const Se=C.children;for(let Oe=0,ke=Se.length;Oe<ke;Oe++)Us(Se[Oe],W,se,re)}function Ls(C,W,se,re){const Z=C.opaque,Se=C.transmissive,Oe=C.transparent;_.setupLightsView(se),Ce===!0&&De.setGlobalState(N.clippingPlanes,se),re&&Ve.viewport(V.copy(re)),Z.length>0&&Ja(Z,W,se),Se.length>0&&Ja(Se,W,se),Oe.length>0&&Ja(Oe,W,se),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Os(C,W,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new Ns(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?el:Hi,minFilter:ws,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Se=_.state.transmissionRenderTarget[re.id],Oe=re.viewport||V;Se.setSize(Oe.z*N.transmissionResolutionScale,Oe.w*N.transmissionResolutionScale);const ke=N.getRenderTarget(),ze=N.getActiveCubeFace(),Je=N.getActiveMipmapLevel();N.setRenderTarget(Se),N.getClearColor(pe),le=N.getClearAlpha(),le<1&&N.setClearColor(16777215,.5),N.clear(),lt&&Ze.render(se);const it=N.toneMapping;N.toneMapping=Za;const $e=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),Ce===!0&&De.setGlobalState(N.clippingPlanes,re),Ja(C,se,re),rt.updateMultisampleRenderTarget(Se),rt.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Ut=0,kt=W.length;Ut<kt;Ut++){const Lt=W[Ut],gt=Lt.object,je=Lt.geometry,Xt=Lt.material,Rt=Lt.group;if(Xt.side===Oi&&gt.layers.test(re.layers)){const Mn=Xt.side;Xt.side=jn,Xt.needsUpdate=!0,Vr(gt,se,re,je,Xt,Rt),Xt.side=Mn,Xt.needsUpdate=!0,pt=!0}}pt===!0&&(rt.updateMultisampleRenderTarget(Se),rt.updateRenderTargetMipmap(Se))}N.setRenderTarget(ke,ze,Je),N.setClearColor(pe,le),$e!==void 0&&(re.viewport=$e),N.toneMapping=it}function Ja(C,W,se){const re=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Se=C.length;Z<Se;Z++){const Oe=C[Z],ke=Oe.object,ze=Oe.geometry,Je=Oe.group;let it=Oe.material;it.allowOverride===!0&&re!==null&&(it=re),ke.layers.test(se.layers)&&Vr(ke,W,se,ze,it,Je)}}function Vr(C,W,se,re,Z,Se){C.onBeforeRender(N,W,se,re,Z,Se),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(N,W,se,re,C,Se),Z.transparent===!0&&Z.side===Oi&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,N.renderBufferDirect(se,W,re,Z,C,Se),Z.side=Ka,Z.needsUpdate=!0,N.renderBufferDirect(se,W,re,Z,C,Se),Z.side=Oi):N.renderBufferDirect(se,W,re,Z,C,Se),C.onAfterRender(N,W,se,re,Z,Se)}function qn(C,W,se){W.isScene!==!0&&(W=Xe);const re=We.get(C),Z=_.state.lights,Se=_.state.shadowsArray,Oe=Z.state.version,ke=ge.getParameters(C,Z.state,Se,W,se),ze=ge.getProgramCacheKey(ke);let Je=re.programs;re.environment=C.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(C.isMeshStandardMaterial?Zt:en).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",xe),Je=new Map,re.programs=Je);let it=Je.get(ze);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===Oe)return Sn(C,ke),it}else ke.uniforms=ge.getUniforms(C),C.onBeforeCompile(ke,N),it=ge.acquireProgram(ke,ze),Je.set(ze,it),re.uniforms=ke.uniforms;const $e=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=De.uniform),Sn(C,ke),re.needsLights=su(C),re.lightsStateVersion=Oe,re.needsLights&&($e.ambientLightColor.value=Z.state.ambient,$e.lightProbe.value=Z.state.probe,$e.directionalLights.value=Z.state.directional,$e.directionalLightShadows.value=Z.state.directionalShadow,$e.spotLights.value=Z.state.spot,$e.spotLightShadows.value=Z.state.spotShadow,$e.rectAreaLights.value=Z.state.rectArea,$e.ltc_1.value=Z.state.rectAreaLTC1,$e.ltc_2.value=Z.state.rectAreaLTC2,$e.pointLights.value=Z.state.point,$e.pointLightShadows.value=Z.state.pointShadow,$e.hemisphereLights.value=Z.state.hemi,$e.directionalShadowMap.value=Z.state.directionalShadowMap,$e.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$e.spotShadowMap.value=Z.state.spotShadowMap,$e.spotLightMatrix.value=Z.state.spotLightMatrix,$e.spotLightMap.value=Z.state.spotLightMap,$e.pointShadowMap.value=Z.state.pointShadowMap,$e.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function on(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Wc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Sn(C,W){const se=We.get(C);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function ga(C,W,se,re,Z){W.isScene!==!0&&(W=Xe),rt.resetTextureUnits();const Se=W.fog,Oe=re.isMeshStandardMaterial?W.environment:null,ke=X===null?N.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Or,ze=(re.isMeshStandardMaterial?Zt:en).get(re.envMap||Oe),Je=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),$e=!!se.morphAttributes.position,pt=!!se.morphAttributes.normal,Ut=!!se.morphAttributes.color;let kt=Za;re.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(kt=N.toneMapping);const Lt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,gt=Lt!==void 0?Lt.length:0,je=We.get(re),Xt=_.state.lights;if(Ce===!0&&(ne===!0||C!==D)){const dn=C===D&&re.id===w;De.setState(re,C,dn)}let Rt=!1;re.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Xt.state.version||je.outputColorSpace!==ke||Z.isBatchedMesh&&je.batching===!1||!Z.isBatchedMesh&&je.batching===!0||Z.isBatchedMesh&&je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&je.instancingMorph===!1&&Z.morphTexture!==null||je.envMap!==ze||re.fog===!0&&je.fog!==Se||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==De.numPlanes||je.numIntersection!==De.numIntersection)||je.vertexAlphas!==Je||je.vertexTangents!==it||je.morphTargets!==$e||je.morphNormals!==pt||je.morphColors!==Ut||je.toneMapping!==kt||je.morphTargetsCount!==gt)&&(Rt=!0):(Rt=!0,je.__version=re.version);let Mn=je.currentProgram;Rt===!0&&(Mn=qn(re,W,Z));let Vi=!1,_n=!1,es=!1;const xt=Mn.getUniforms(),Cn=je.uniforms;if(Ve.useProgram(Mn.program)&&(Vi=!0,_n=!0,es=!0),re.id!==w&&(w=re.id,_n=!0),Vi||D!==C){Ve.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xt.setValue(G,"projectionMatrix",C.projectionMatrix),xt.setValue(G,"viewMatrix",C.matrixWorldInverse);const an=xt.map.cameraPosition;an!==void 0&&an.setValue(G,we.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&xt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&xt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,_n=!0,es=!0)}if(Z.isSkinnedMesh){xt.setOptional(G,Z,"bindMatrix"),xt.setOptional(G,Z,"bindMatrixInverse");const dn=Z.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),xt.setValue(G,"boneTexture",dn.boneTexture,rt))}Z.isBatchedMesh&&(xt.setOptional(G,Z,"batchingTexture"),xt.setValue(G,"batchingTexture",Z._matricesTexture,rt),xt.setOptional(G,Z,"batchingIdTexture"),xt.setValue(G,"batchingIdTexture",Z._indirectTexture,rt),xt.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xt.setValue(G,"batchingColorTexture",Z._colorsTexture,rt));const On=se.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ae.update(Z,se,Mn),(_n||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,xt.setValue(G,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Cn.envMap.value=ze,Cn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(Cn.envMapIntensity.value=W.environmentIntensity),_n&&(xt.setValue(G,"toneMappingExposure",N.toneMappingExposure),je.needsLights&&kr(Cn,es),Se&&re.fog===!0&&Ee.refreshFogUniforms(Cn,Se),Ee.refreshMaterialUniforms(Cn,re,q,K,_.state.transmissionRenderTarget[C.id]),Wc.upload(G,on(je),Cn,rt)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Wc.upload(G,on(je),Cn,rt),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&xt.setValue(G,"center",Z.center),xt.setValue(G,"modelViewMatrix",Z.modelViewMatrix),xt.setValue(G,"normalMatrix",Z.normalMatrix),xt.setValue(G,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const dn=re.uniformsGroups;for(let an=0,Ps=dn.length;an<Ps;an++){const Ci=dn[an];ct.update(Ci,Mn),ct.bind(Ci,Mn)}}return Mn}function kr(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function su(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,W,se){const re=We.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),We.get(C.texture).__webglTexture=W,We.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:se,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const se=We.get(C);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const ru=G.createFramebuffer();this.setRenderTarget=function(C,W=0,se=0){X=C,F=W,z=se;let re=!0,Z=null,Se=!1,Oe=!1;if(C){const ze=We.get(C);if(ze.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(G.FRAMEBUFFER,null),re=!1;else if(ze.__webglFramebuffer===void 0)rt.setupRenderTarget(C);else if(ze.__hasExternalTextures)rt.rebindTextures(C,We.get(C.texture).__webglTexture,We.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(ze.__boundDepthTexture!==$e){if($e!==null&&We.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(C)}}const Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Oe=!0);const it=We.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[W])?Z=it[W][se]:Z=it[W],Se=!0):C.samples>0&&rt.useMultisampledRTT(C)===!1?Z=We.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?Z=it[se]:Z=it,V.copy(C.viewport),J.copy(C.scissor),oe=C.scissorTest}else V.copy(P).multiplyScalar(q).floor(),J.copy(Q).multiplyScalar(q).floor(),oe=he;if(se!==0&&(Z=ru),Ve.bindFramebuffer(G.FRAMEBUFFER,Z)&&re&&Ve.drawBuffers(C,Z),Ve.viewport(V),Ve.scissor(J),Ve.setScissorTest(oe),Se){const ze=We.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,se)}else if(Oe){const ze=W;for(let Je=0;Je<C.textures.length;Je++){const it=We.get(C.textures[Je]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Je,it.__webglTexture,se,ze)}}else if(C!==null&&se!==0){const ze=We.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ze.__webglTexture,se)}w=-1},this.readRenderTargetPixels=function(C,W,se,re,Z,Se,Oe,ke=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=We.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){Ve.bindFramebuffer(G.FRAMEBUFFER,ze);try{const Je=C.textures[ke],it=Je.format,$e=Je.type;if(!tt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-re&&se>=0&&se<=C.height-Z&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),G.readPixels(W,se,re,Z,Be.convert(it),Be.convert($e),Se))}finally{const Je=X!==null?We.get(X).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(C,W,se,re,Z,Se,Oe,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=We.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(W>=0&&W<=C.width-re&&se>=0&&se<=C.height-Z){Ve.bindFramebuffer(G.FRAMEBUFFER,ze);const Je=C.textures[ke],it=Je.format,$e=Je.type;if(!tt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,pt),G.bufferData(G.PIXEL_PACK_BUFFER,Se.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),G.readPixels(W,se,re,Z,Be.convert(it),Be.convert($e),0);const Ut=X!==null?We.get(X).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,Ut);const kt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await bb(G,kt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,pt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Se),G.deleteBuffer(pt),G.deleteSync(kt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,se=0){const re=Math.pow(2,-se),Z=Math.floor(C.image.width*re),Se=Math.floor(C.image.height*re),Oe=W!==null?W.x:0,ke=W!==null?W.y:0;rt.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Oe,ke,Z,Se),Ve.unbindTexture()};const sl=G.createFramebuffer(),$a=G.createFramebuffer();this.copyTextureToTexture=function(C,W,se=null,re=null,Z=0,Se=null){Se===null&&(Z!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Z,Z=0):Se=0);let Oe,ke,ze,Je,it,$e,pt,Ut,kt;const Lt=C.isCompressedTexture?C.mipmaps[Se]:C.image;if(se!==null)Oe=se.max.x-se.min.x,ke=se.max.y-se.min.y,ze=se.isBox3?se.max.z-se.min.z:1,Je=se.min.x,it=se.min.y,$e=se.isBox3?se.min.z:0;else{const On=Math.pow(2,-Z);Oe=Math.floor(Lt.width*On),ke=Math.floor(Lt.height*On),C.isDataArrayTexture?ze=Lt.depth:C.isData3DTexture?ze=Math.floor(Lt.depth*On):ze=1,Je=0,it=0,$e=0}re!==null?(pt=re.x,Ut=re.y,kt=re.z):(pt=0,Ut=0,kt=0);const gt=Be.convert(W.format),je=Be.convert(W.type);let Xt;W.isData3DTexture?(rt.setTexture3D(W,0),Xt=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),Xt=G.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),Xt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const Rt=G.getParameter(G.UNPACK_ROW_LENGTH),Mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Vi=G.getParameter(G.UNPACK_SKIP_PIXELS),_n=G.getParameter(G.UNPACK_SKIP_ROWS),es=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Lt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Je),G.pixelStorei(G.UNPACK_SKIP_ROWS,it),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$e);const xt=C.isDataArrayTexture||C.isData3DTexture,Cn=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const On=We.get(C),dn=We.get(W),an=We.get(On.__renderTarget),Ps=We.get(dn.__renderTarget);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,an.__webglFramebuffer),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let Ci=0;Ci<ze;Ci++)xt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(C).__webglTexture,Z,$e+Ci),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(W).__webglTexture,Se,kt+Ci)),G.blitFramebuffer(Je,it,Oe,ke,pt,Ut,Oe,ke,G.DEPTH_BUFFER_BIT,G.NEAREST);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||We.has(C)){const On=We.get(C),dn=We.get(W);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,sl),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,$a);for(let an=0;an<ze;an++)xt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,On.__webglTexture,Z,$e+an):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,On.__webglTexture,Z),Cn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,Se,kt+an):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,Se),Z!==0?G.blitFramebuffer(Je,it,Oe,ke,pt,Ut,Oe,ke,G.COLOR_BUFFER_BIT,G.NEAREST):Cn?G.copyTexSubImage3D(Xt,Se,pt,Ut,kt+an,Je,it,Oe,ke):G.copyTexSubImage2D(Xt,Se,pt,Ut,Je,it,Oe,ke);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Cn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Xt,Se,pt,Ut,kt,Oe,ke,ze,gt,je,Lt.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Xt,Se,pt,Ut,kt,Oe,ke,ze,gt,Lt.data):G.texSubImage3D(Xt,Se,pt,Ut,kt,Oe,ke,ze,gt,je,Lt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Se,pt,Ut,Oe,ke,gt,je,Lt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Se,pt,Ut,Lt.width,Lt.height,gt,Lt.data):G.texSubImage2D(G.TEXTURE_2D,Se,pt,Ut,Oe,ke,gt,je,Lt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Rt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vi),G.pixelStorei(G.UNPACK_SKIP_ROWS,_n),G.pixelStorei(G.UNPACK_SKIP_IMAGES,es),Se===0&&W.generateMipmaps&&G.generateMipmap(Xt),Ve.unbindTexture()},this.initRenderTarget=function(C){We.get(C).__webglFramebuffer===void 0&&rt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?rt.setTextureCube(C,0):C.isData3DTexture?rt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?rt.setTexture2DArray(C,0):rt.setTexture2D(C,0),Ve.unbindTexture()},this.resetState=function(){F=0,z=0,X=null,Ve.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Dt._getUnpackColorSpace()}}function jC(r){ue.useEffect(()=>{const e=r.current;if(!e)return;const i=new kC({canvas:e,antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.shadowMap.enabled=!0,i.shadowMap.type=k0,i.toneMapping=j0,i.toneMappingExposure=.85;const s=new Zb;s.background=new bt("#07110a"),s.fog=new fp("#07110a",.035);const l=new ai(50,window.innerWidth/window.innerHeight,.1,200);l.position.set(0,18,28),l.lookAt(0,0,0);const c=new sT("#1a3a1a",2.2);s.add(c);const f=new K_("#f0c840",2.8);f.position.set(10,20,15),f.castShadow=!0,f.shadow.camera.near=.5,f.shadow.camera.far=80,f.shadow.camera.left=-25,f.shadow.camera.right=25,f.shadow.camera.top=25,f.shadow.camera.bottom=-25,f.shadow.mapSize.set(1024,1024),s.add(f);const d=new K_("#60c8f0",.9);d.position.set(-15,8,-10),s.add(d);const m=new iT("#0a4020",3,40);m.position.set(0,5,0),s.add(m);const p=new dp(22,72),v=new Ss({color:"#0a2210"}),g=new mn(p,v);g.rotation.x=-Math.PI/2,g.receiveShadow=!0,s.add(g);const x=new pp(22,32,72),M=new Ss({color:"#071009",side:Oi}),b=new mn(x,M);b.rotation.x=-Math.PI/2,b.position.y=-.01,s.add(b);for(let Q=0;Q<10;Q++){const he=new qa(44,2),Me=new Ss({color:Q%2===0?"#0c2814":"#091f10",transparent:!0,opacity:.6}),Ce=new mn(he,Me);Ce.rotation.x=-Math.PI/2,Ce.position.set(0,.005,-9+Q*2),s.add(Ce)}const T=new qa(3,20),y=new Ss({color:"#c8a060"}),_=new mn(T,y);_.rotation.x=-Math.PI/2,_.position.y=.01,_.receiveShadow=!0,s.add(_);const L=new ko({color:"#ffffff"}),U=Q=>{const he=new qa(3.8,.06),Me=new mn(he,L);Me.rotation.x=-Math.PI/2,Me.position.set(0,.02,Q),s.add(Me)};U(-9),U(-7.3),U(9),U(7.3);const N=new ko({color:"#ffffff"}),I=(Q,he)=>{const Me=new qa(.06,1.2),Ce=new mn(Me,N);Ce.rotation.x=-Math.PI/2,Ce.position.set(he*1.9,.02,Q-.6),s.add(Ce)};I(-9,1),I(-9,-1),I(9,1),I(9,-1);const F=new Ss({color:"#f0e8c8"}),z=new Ss({color:"#f0e8c8"}),X=Q=>{for(let ne=-1;ne<=1;ne++){const fe=new $c(.04,.04,.72,8),we=new mn(fe,F);we.position.set(ne*.115,.36,Q),we.castShadow=!0,s.add(we)}const he=new $c(.025,.025,.22,6),Me=new mn(he,z);Me.rotation.z=Math.PI/2,Me.position.set(-.057,.73,Q),s.add(Me);const Ce=Me.clone();Ce.position.set(.057,.73,Q),s.add(Ce)};X(-8.5),X(8.5);const w=[],D=20;for(let Q=0;Q<=128;Q++){const he=Q/128*Math.PI*2;w.push(new $(Math.cos(he)*D,.015,Math.sin(he)*D))}const V=new Wn().setFromPoints(w),J=new hx({color:"#ffffff",opacity:.55,transparent:!0}),oe=new $b(V,J);s.add(oe);const pe=70,le=[];for(let Q=0;Q<pe;Q++){const he=4+Math.random()*18,Me=.12+Math.random()*.22,Ce=(Math.random()-.5)*1.4,ne=Math.random()*Math.PI*2,fe=1.5+Math.random()*12,we=.4+Math.random()*.8,Ie=.5+Math.random()*1,Xe=Math.random()*Math.PI*2,lt=.08+Math.random()*.16,$t=new mp(lt,12,8),G=new Ss({color:new bt().setHSL(.02,.85,.32+Math.random()*.08)}),mt=new mn($t,G);mt.castShadow=!0;const at=new gp(lt*1.01,lt*.08,4,24),tt=new ko({color:"#1a0808"}),Ve=new mn(at,tt);Ve.rotation.x=Math.PI/2,mt.add(Ve),mt.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),s.add(mt),le.push({mesh:mt,orbitR:he,orbitSpeed:Me,orbitTilt:Ce,orbitPhase:ne,height:fe,bobAmp:we,bobSpeed:Ie,bobPhase:Xe,spinSpeed:(Math.random()-.5)*2})}const B={x:0,y:0},K=Q=>{B.x=(Q.clientX/window.innerWidth-.5)*2,B.y=(Q.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",K);const q=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",q);let ye=0,Te;const P=()=>{Te=requestAnimationFrame(P),ye+=.008;const Q=28;l.position.x=Math.sin(ye*.18)*Q*.35+B.x*2.5,l.position.z=26+Math.cos(ye*.12)*3,l.position.y=16+Math.sin(ye*.08)*2-B.y*1.8,l.lookAt(0,2,0),le.forEach((he,Me)=>{const Ce=ye*he.orbitSpeed+he.orbitPhase,ne=Math.cos(Ce)*he.orbitR,fe=Math.sin(Ce)*he.orbitR*Math.cos(he.orbitTilt),we=he.height+Math.sin(Ce*he.bobSpeed+he.bobPhase)*he.bobAmp+Math.sin(he.orbitTilt)*Math.sin(Ce)*he.orbitR*.3;he.mesh.position.set(ne,we,fe),he.mesh.rotation.x+=he.spinSpeed*.02,he.mesh.rotation.y+=he.spinSpeed*.015}),m.intensity=2.8+Math.sin(ye*1.2)*.4,i.render(s,l)};return P(),()=>{cancelAnimationFrame(Te),window.removeEventListener("mousemove",K),window.removeEventListener("resize",q),i.dispose()}},[])}function XC(){const r=Jo(),e=ue.useRef(null),[i,s]=ue.useState("login"),[l,c]=ue.useState(""),[f,d]=ue.useState(""),[m,p]=ue.useState(""),[v,g]=ue.useState(!1),[x,M]=ue.useState(!1);jC(e);const b=T=>{T.preventDefault(),M(!0),setTimeout(()=>{M(!1),r("/dashboard")},1500)};return E.jsxs(E.Fragment,{children:[E.jsx("canvas",{ref:e,className:"lg-canvas"}),E.jsxs("div",{className:"lg-page",children:[E.jsx("button",{className:"lg-back",onClick:()=>r("/"),children:"← Home"}),E.jsxs("div",{className:"lg-card",children:[E.jsxs("div",{className:"lg-brand",onClick:()=>r("/"),children:[E.jsx("img",{src:tp,alt:"GullyStat",className:"lg-brand-logo"}),E.jsx("span",{className:"lg-brand-name",children:"GullyStat"})]}),E.jsxs("div",{className:"lg-tabs",children:[E.jsx("button",{className:`lg-tab ${i==="login"?"active":""}`,onClick:()=>s("login"),children:"Login"}),E.jsx("button",{className:`lg-tab ${i==="signup"?"active":""}`,onClick:()=>s("signup"),children:"Sign Up"})]}),E.jsx("h1",{className:"lg-title",children:i==="login"?"Welcome back":"Join the mohalla"}),E.jsx("p",{className:"lg-subtitle",children:i==="login"?"Log in to track your gully legacy":"Create your account and start scoring"}),E.jsxs("button",{className:"lg-google",children:[E.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[E.jsx("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",fill:"#4285F4"}),E.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z",fill:"#34A853"}),E.jsx("path",{d:"M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z",fill:"#FBBC05"}),E.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 6.294C4.672 4.167 6.656 3.58 9 3.58z",fill:"#EA4335"})]}),"Continue with Google"]}),E.jsx("div",{className:"lg-divider",children:E.jsx("span",{children:"or continue with email"})}),E.jsxs("form",{onSubmit:b,className:"lg-form",children:[i==="signup"&&E.jsxs("div",{className:"lg-field",children:[E.jsx("label",{className:"lg-label",children:"Full name"}),E.jsx("div",{className:"lg-input-wrap",children:E.jsx("input",{className:"lg-input",type:"text",placeholder:"Rohit Sharma",value:m,onChange:T=>p(T.target.value),required:!0})})]}),E.jsxs("div",{className:"lg-field",children:[E.jsx("label",{className:"lg-label",children:"Email"}),E.jsx("div",{className:"lg-input-wrap",children:E.jsx("input",{className:"lg-input",type:"email",placeholder:"you@example.com",value:l,onChange:T=>c(T.target.value),required:!0})})]}),E.jsxs("div",{className:"lg-field",children:[E.jsxs("label",{className:"lg-label",children:[E.jsx("span",{children:"Password"}),i==="login"&&E.jsx("button",{type:"button",className:"lg-forgot",children:"Forgot password?"})]}),E.jsxs("div",{className:"lg-input-wrap",children:[E.jsx("input",{className:"lg-input lg-input-has-eye",type:v?"text":"password",placeholder:"••••••••",value:f,onChange:T=>d(T.target.value),required:!0}),E.jsx("button",{type:"button",className:"lg-eye",onClick:()=>g(T=>!T),children:v?"🙈":"👁️"})]})]}),E.jsx("button",{type:"submit",className:"lg-submit",disabled:x,children:x?E.jsx("span",{className:"lg-spinner"}):i==="login"?"🏏 Login to GullyStat":"🚀 Create Account"})]}),E.jsxs("p",{className:"lg-switch",children:[i==="login"?"Don't have an account? ":"Already have an account? ",E.jsx("button",{className:"lg-switch-btn",onClick:()=>s(i==="login"?"signup":"login"),children:i==="login"?"Sign up free":"Log in"})]})]})]})]})}const M0=[{path:"/dashboard",icon:"🏠",label:"Home",parent:"GullyStat"},{path:"/start-match",icon:"🏏",label:"Match",parent:"GullyStat",subs:[{path:"/live-scorer",icon:"📡",label:"Live Scorer"},{path:"/scorecard",icon:"📋",label:"Scorecard"}]},{path:"/leaderboard",icon:"🏆",label:"Compete",parent:"GullyStat",subs:[{path:"/challenges",icon:"⚡",label:"Challenges"},{path:"/head-to-head",icon:"⚔️",label:"Head to Head"},{path:"/tournaments",icon:"🥇",label:"Tournaments"}]},{path:"/ghost-profile",icon:"👻",label:"Profile",parent:"GullyStat",subs:[{path:"/badges",icon:"🎖️",label:"Badges"}]},{path:"/player/me",icon:"📊",label:"Stats",parent:"GullyStat"}];function WC(){ue.useEffect(()=>{const r=document.getElementById("bg-canvas");if(!r)return;const e=r.getContext("2d"),i="01GSABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&",s=["#071209","#0a1a0c","#0d2410","#091508"],l=11,c=16;let f=[],d=0,m=0;const p=()=>{r.width=window.innerWidth,r.height=window.innerHeight,d=Math.ceil(r.width/l),m=Math.ceil(r.height/c),f=Array.from({length:d*m},()=>({char:i[Math.floor(Math.random()*i.length)],color:s[Math.floor(Math.random()*s.length)],opacity:Math.random()*.55+.05}))},v=()=>{e.clearRect(0,0,r.width,r.height),e.font=`${c}px monospace`,e.textBaseline="top";const x=Math.max(1,Math.floor(f.length*.025));for(let M=0;M<x;M++){const b=Math.floor(Math.random()*f.length);f[b]&&(f[b].char=i[Math.floor(Math.random()*i.length)],f[b].color=s[Math.floor(Math.random()*s.length)],f[b].opacity=Math.random()*.55+.05)}f.forEach((M,b)=>{e.globalAlpha=M.opacity,e.fillStyle=M.color,e.fillText(M.char,b%d*l,Math.floor(b/d)*c)}),e.globalAlpha=1};p(),window.addEventListener("resize",p);const g=setInterval(v,55);return()=>{clearInterval(g),window.removeEventListener("resize",p)}},[])}function qC({children:r}){const e=Ai();return E.jsx("div",{className:"page-enter",style:{height:"100%"},children:r},e.pathname)}function YC({children:r,pageLabel:e,parentLabel:i}){const[s,l]=ue.useState(!1),[c,f]=ue.useState(null),d=Jo(),m=Ai();WC();const p=g=>m.pathname===g.path?!0:g.subs?g.subs.some(x=>m.pathname===x.path):!1,v=g=>{g.subs&&!s?(f(x=>x===g.path?null:g.path),d(g.path)):(d(g.path),f(null))};return ue.useEffect(()=>{const g=M0.find(x=>x.subs?.some(M=>m.pathname===M.path));g&&f(g.path)},[m.pathname]),E.jsxs("div",{className:"layout",children:[E.jsx("canvas",{id:"bg-canvas"}),E.jsx("div",{className:"bg-grid"}),E.jsx("div",{className:"bg-vignette"}),E.jsx("div",{className:"bg-scanlines"}),E.jsxs("aside",{className:`sidebar ${s?"collapsed":""}`,children:[E.jsxs("div",{className:"sidebar-header",children:[E.jsx("img",{src:tp,alt:"GullyStat",className:"sidebar-logo"}),!s&&E.jsx("span",{className:"sidebar-title",children:"GULLYSTAT"})]}),E.jsx("nav",{className:"sidebar-nav",children:M0.map((g,x)=>{const M=p(g),b=c===g.path&&!s;return E.jsxs("div",{className:"nav-group",style:{animationDelay:`${x*.06}s`},children:[E.jsxs("button",{className:`nav-item ${M?"active":""}`,onClick:()=>v(g),title:s?g.label:"",children:[E.jsx("span",{className:"nav-icon",children:g.icon}),!s&&E.jsxs(E.Fragment,{children:[E.jsx("span",{className:"nav-label",children:g.label}),g.subs&&E.jsx("span",{className:`nav-chevron ${b?"open":""}`,children:"›"})]})]}),g.subs&&!s&&E.jsx("div",{className:`nav-subs ${b?"open":""}`,children:g.subs.map(T=>E.jsxs("button",{className:`nav-sub-item ${m.pathname===T.path?"active":""}`,onClick:()=>d(T.path),children:[E.jsx("span",{className:"nav-sub-icon",children:T.icon}),E.jsx("span",{className:"nav-sub-label",children:T.label})]},T.path))}),g.subs&&s&&E.jsx("div",{className:"nav-collapsed-subs",children:g.subs.map(T=>E.jsx("button",{className:`nav-collapsed-sub ${m.pathname===T.path?"active":""}`,onClick:()=>d(T.path),title:T.label,children:T.icon},T.path))})]},g.path)})}),E.jsx("div",{className:"sidebar-footer",children:E.jsx("button",{className:"collapse-btn",onClick:()=>{l(g=>!g),s||f(null)},children:s?"▶":"◀ Collapse"})})]}),E.jsxs("div",{className:"main",children:[E.jsxs("header",{className:"topbar",children:[E.jsx("div",{className:"topbar-left",children:E.jsxs("div",{className:"topbar-breadcrumb",children:[E.jsx("span",{className:"topbar-crumb-root",children:"GullyStat"}),i&&i!==e&&E.jsxs(E.Fragment,{children:[E.jsx("span",{className:"topbar-crumb-sep",children:"›"}),E.jsx("span",{className:"topbar-crumb-root",children:i})]}),E.jsx("span",{className:"topbar-crumb-sep",children:"›"}),E.jsx("span",{className:"topbar-page",children:e})]})}),E.jsxs("div",{className:"topbar-right",children:[E.jsxs("div",{className:"live-pill",children:[E.jsx("span",{className:"live-dot"}),"Live"]}),E.jsx("button",{className:"topbar-btn topbar-btn-badge",children:"🔔"}),E.jsx("div",{className:"topbar-avatar",onClick:()=>d("/ghost-profile"),children:"👤"})]})]}),E.jsx("main",{className:"content",children:E.jsx(qC,{children:r})})]})]})}const ZC={"/dashboard":{label:"Home",parent:null},"/start-match":{label:"New Match",parent:"Match"},"/live-scorer":{label:"Live Scorer",parent:"Match"},"/scorecard":{label:"Scorecard",parent:"Match"},"/leaderboard":{label:"Compete",parent:null},"/challenges":{label:"Challenges",parent:"Compete"},"/head-to-head":{label:"Head to Head",parent:"Compete"},"/tournaments":{label:"Tournaments",parent:"Compete"},"/ghost-profile":{label:"Profile",parent:null},"/badges":{label:"Badges",parent:"Profile"},"/player/me":{label:"Stats",parent:null}};function ii({page:r,children:e}){const i=Ai(),s=ZC[i.pathname]||{label:r,parent:null};return E.jsx(YC,{pageLabel:s.label,parentLabel:s.parent,children:e})}function KC(){return E.jsxs(iE,{basename:"/gullystat",children:[E.jsx(zE,{}),E.jsxs(LM,{children:[E.jsx(Un,{path:"/",element:E.jsx(ME,{})}),E.jsx(Un,{path:"/login",element:E.jsx(XC,{})}),E.jsx(Un,{path:"/dashboard",element:E.jsx(ii,{children:E.jsx(AE,{})})}),E.jsx(Un,{path:"/start-match",element:E.jsx(ii,{children:E.jsx(RE,{})})}),E.jsx(Un,{path:"/live-scorer",element:E.jsx(ii,{children:E.jsx(CE,{})})}),E.jsx(Un,{path:"/scorecard/:id",element:E.jsx(ii,{children:E.jsx(v_,{})})}),E.jsx(Un,{path:"/scorecard",element:E.jsx(ii,{children:E.jsx(v_,{})})}),E.jsx(Un,{path:"/player/:id",element:E.jsx(ii,{children:E.jsx(__,{})})}),E.jsx(Un,{path:"/player/me",element:E.jsx(ii,{children:E.jsx(__,{})})}),E.jsx(Un,{path:"/leaderboard",element:E.jsx(ii,{children:E.jsx(wE,{})})}),E.jsx(Un,{path:"/challenges",element:E.jsx(ii,{children:E.jsx(DE,{})})}),E.jsx(Un,{path:"/badges",element:E.jsx(ii,{children:E.jsx(NE,{})})}),E.jsx(Un,{path:"/head-to-head",element:E.jsx(ii,{children:E.jsx(UE,{})})}),E.jsx(Un,{path:"/tournaments",element:E.jsx(ii,{children:E.jsx(LE,{})})}),E.jsx(Un,{path:"/ghost-profile",element:E.jsx(ii,{children:E.jsx(OE,{})})})]})]})}zS.createRoot(document.getElementById("root")).render(E.jsx(ue.StrictMode,{children:E.jsx(KC,{})}));setTimeout(()=>{const r=document.getElementById("bg-canvas");if(!r)return;const e=r.getContext("2d"),i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$GS",s=["#0a2a0a","#0d3d0d","#1B5E20","#0a1a0a"],l=10,c=16;let f=[],d=0,m=0;function p(){r.width=window.innerWidth,r.height=window.innerHeight,d=Math.ceil(r.width/l),m=Math.ceil(r.height/c),f=Array.from({length:d*m},()=>({char:i[Math.floor(Math.random()*i.length)],color:s[Math.floor(Math.random()*s.length)],opacity:Math.random()*.6+.1}))}function v(){e.clearRect(0,0,r.width,r.height),e.font=`${c}px monospace`,e.textBaseline="top";const g=Math.max(1,Math.floor(f.length*.03));for(let x=0;x<g;x++){const M=Math.floor(Math.random()*f.length);f[M]&&(f[M].char=i[Math.floor(Math.random()*i.length)],f[M].color=s[Math.floor(Math.random()*s.length)],f[M].opacity=Math.random()*.6+.1)}f.forEach((x,M)=>{e.globalAlpha=x.opacity,e.fillStyle=x.color,e.fillText(x.char,M%d*l,Math.floor(M/d)*c)}),e.globalAlpha=1}p(),window.addEventListener("resize",p),setInterval(v,60)},100);
