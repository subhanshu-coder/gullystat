(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var hh={exports:{}},No={};var $v;function TS(){if($v)return No;$v=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var t_;function AS(){return t_||(t_=1,hh.exports=TS()),hh.exports}var R=AS(),dh={exports:{}},oe={};var e_;function RS(){if(e_)return oe;e_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function _(P,Q,ht){this.props=P,this.context=Q,this.refs=y,this.updater=ht||E}_.prototype.isReactComponent={},_.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=_.prototype;function N(P,Q,ht){this.props=P,this.context=Q,this.refs=y,this.updater=ht||E}var U=N.prototype=new L;U.constructor=N,b(U,_.prototype),U.isPureReactComponent=!0;var I=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(P,Q,ht){var Mt=ht.ref;return{$$typeof:s,type:P,key:Q,ref:Mt!==void 0?Mt:null,props:ht}}function D(P,Q){return w(P.type,Q,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function J(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ht){return Q[ht]})}var ot=/\/+/g;function pt(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):Q.toString(36)}function lt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(F,F):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,Q,ht,Mt,Ct){var nt=typeof P;(nt==="undefined"||nt==="boolean")&&(P=null);var ut=!1;if(P===null)ut=!0;else switch(nt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(P.$$typeof){case s:case t:ut=!0;break;case v:return ut=P._init,B(ut(P._payload),Q,ht,Mt,Ct)}}if(ut)return Ct=Ct(P),ut=Mt===""?"."+pt(P,0):Mt,I(Ct)?(ht="",ut!=null&&(ht=ut.replace(ot,"$&/")+"/"),B(Ct,Q,ht,"",function(jt){return jt})):Ct!=null&&(V(Ct)&&(Ct=D(Ct,ht+(Ct.key==null||P&&P.key===Ct.key?"":(""+Ct.key).replace(ot,"$&/")+"/")+ut)),Q.push(Ct)),1;ut=0;var wt=Mt===""?".":Mt+":";if(I(P))for(var It=0;It<P.length;It++)Mt=P[It],nt=wt+pt(Mt,It),ut+=B(Mt,Q,ht,nt,Ct);else if(It=M(P),typeof It=="function")for(P=It.call(P),It=0;!(Mt=P.next()).done;)Mt=Mt.value,nt=wt+pt(Mt,It++),ut+=B(Mt,Q,ht,nt,Ct);else if(nt==="object"){if(typeof P.then=="function")return B(lt(P),Q,ht,Mt,Ct);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ut}function K(P,Q,ht){if(P==null)return P;var Mt=[],Ct=0;return B(P,Mt,"","",function(nt){return Q.call(ht,nt,Ct++)}),Mt}function q(P){if(P._status===-1){var Q=P._result;Q=Q(),Q.then(function(ht){(P._status===0||P._status===-1)&&(P._status=1,P._result=ht)},function(ht){(P._status===0||P._status===-1)&&(P._status=2,P._result=ht)}),P._status===-1&&(P._status=0,P._result=Q)}if(P._status===1)return P._result.default;throw P._result}var yt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Tt={map:K,forEach:function(P,Q,ht){K(P,function(){Q.apply(this,arguments)},ht)},count:function(P){var Q=0;return K(P,function(){Q++}),Q},toArray:function(P){return K(P,function(Q){return Q})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return oe.Activity=g,oe.Children=Tt,oe.Component=_,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=N,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},oe.cache=function(P){return function(){return P.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(P,Q,ht){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Mt=b({},P.props),Ct=P.key;if(Q!=null)for(nt in Q.key!==void 0&&(Ct=""+Q.key),Q)!j.call(Q,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&Q.ref===void 0||(Mt[nt]=Q[nt]);var nt=arguments.length-2;if(nt===1)Mt.children=ht;else if(1<nt){for(var ut=Array(nt),wt=0;wt<nt;wt++)ut[wt]=arguments[wt+2];Mt.children=ut}return w(P.type,Ct,Mt)},oe.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},oe.createElement=function(P,Q,ht){var Mt,Ct={},nt=null;if(Q!=null)for(Mt in Q.key!==void 0&&(nt=""+Q.key),Q)j.call(Q,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Ct[Mt]=Q[Mt]);var ut=arguments.length-2;if(ut===1)Ct.children=ht;else if(1<ut){for(var wt=Array(ut),It=0;It<ut;It++)wt[It]=arguments[It+2];Ct.children=wt}if(P&&P.defaultProps)for(Mt in ut=P.defaultProps,ut)Ct[Mt]===void 0&&(Ct[Mt]=ut[Mt]);return w(P,nt,Ct)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(P){return{$$typeof:d,render:P}},oe.isValidElement=V,oe.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:q}},oe.memo=function(P,Q){return{$$typeof:p,type:P,compare:Q===void 0?null:Q}},oe.startTransition=function(P){var Q=z.T,ht={};z.T=ht;try{var Mt=P(),Ct=z.S;Ct!==null&&Ct(ht,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(F,yt)}catch(nt){yt(nt)}finally{Q!==null&&ht.types!==null&&(Q.types=ht.types),z.T=Q}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(P){return z.H.use(P)},oe.useActionState=function(P,Q,ht){return z.H.useActionState(P,Q,ht)},oe.useCallback=function(P,Q){return z.H.useCallback(P,Q)},oe.useContext=function(P){return z.H.useContext(P)},oe.useDebugValue=function(){},oe.useDeferredValue=function(P,Q){return z.H.useDeferredValue(P,Q)},oe.useEffect=function(P,Q){return z.H.useEffect(P,Q)},oe.useEffectEvent=function(P){return z.H.useEffectEvent(P)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(P,Q,ht){return z.H.useImperativeHandle(P,Q,ht)},oe.useInsertionEffect=function(P,Q){return z.H.useInsertionEffect(P,Q)},oe.useLayoutEffect=function(P,Q){return z.H.useLayoutEffect(P,Q)},oe.useMemo=function(P,Q){return z.H.useMemo(P,Q)},oe.useOptimistic=function(P,Q){return z.H.useOptimistic(P,Q)},oe.useReducer=function(P,Q,ht){return z.H.useReducer(P,Q,ht)},oe.useRef=function(P){return z.H.useRef(P)},oe.useState=function(P){return z.H.useState(P)},oe.useSyncExternalStore=function(P,Q,ht){return z.H.useSyncExternalStore(P,Q,ht)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.2.4",oe}var n_;function Yd(){return n_||(n_=1,dh.exports=RS()),dh.exports}var ft=Yd(),ph={exports:{}},Lo={},mh={exports:{}},gh={};var i_;function CS(){return i_||(i_=1,(function(s){function t(B,K){var q=B.length;B.push(K);t:for(;0<q;){var yt=q-1>>>1,Tt=B[yt];if(0<l(Tt,K))B[yt]=K,B[q]=Tt,q=yt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],q=B.pop();if(q!==K){B[0]=q;t:for(var yt=0,Tt=B.length,P=Tt>>>1;yt<P;){var Q=2*(yt+1)-1,ht=B[Q],Mt=Q+1,Ct=B[Mt];if(0>l(ht,q))Mt<Tt&&0>l(Ct,ht)?(B[yt]=Ct,B[Mt]=q,yt=Mt):(B[yt]=ht,B[Q]=q,yt=Q);else if(Mt<Tt&&0>l(Ct,q))B[yt]=Ct,B[Mt]=q,yt=Mt;else break t}}return K}function l(B,K){var q=B.sortIndex-K.sortIndex;return q!==0?q:B.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,M=!1,E=!1,b=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=B)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function I(B){if(b=!1,U(B),!E)if(i(m)!==null)E=!0,F||(F=!0,J());else{var K=i(p);K!==null&&lt(I,K.startTime-B)}}var F=!1,z=-1,j=5,w=-1;function D(){return y?!0:!(s.unstable_now()-w<j)}function V(){if(y=!1,F){var B=s.unstable_now();w=B;var K=!0;try{t:{E=!1,b&&(b=!1,L(z),z=-1),M=!0;var q=x;try{e:{for(U(B),g=i(m);g!==null&&!(g.expirationTime>B&&D());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,x=g.priorityLevel;var Tt=yt(g.expirationTime<=B);if(B=s.unstable_now(),typeof Tt=="function"){g.callback=Tt,U(B),K=!0;break e}g===i(m)&&r(m),U(B)}else r(m);g=i(m)}if(g!==null)K=!0;else{var P=i(p);P!==null&&lt(I,P.startTime-B),K=!1}}break t}finally{g=null,x=q,M=!1}K=void 0}}finally{K?J():F=!1}}}var J;if(typeof N=="function")J=function(){N(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,pt=ot.port2;ot.port1.onmessage=V,J=function(){pt.postMessage(null)}}else J=function(){_(V,0)};function lt(B,K){z=_(function(){B(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var q=x;x=K;try{return B()}finally{x=q}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=x;x=B;try{return K()}finally{x=q}},s.unstable_scheduleCallback=function(B,K,q){var yt=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?yt+q:yt):q=yt,B){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=q+Tt,B={id:v++,callback:K,priorityLevel:B,startTime:q,expirationTime:Tt,sortIndex:-1},q>yt?(B.sortIndex=q,t(p,B),i(m)===null&&B===i(p)&&(b?(L(z),z=-1):b=!0,lt(I,q-yt))):(B.sortIndex=Tt,t(m,B),E||M||(E=!0,F||(F=!0,J()))),B},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(B){var K=x;return function(){var q=x;x=K;try{return B.apply(this,arguments)}finally{x=q}}}})(gh)),gh}var a_;function wS(){return a_||(a_=1,mh.exports=CS()),mh.exports}var vh={exports:{}},wn={};var r_;function DS(){if(r_)return wn;r_=1;var s=Yd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},wn.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.2.4",wn}var s_;function US(){if(s_)return vh.exports;s_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),vh.exports=DS(),vh.exports}var o_;function NS(){if(o_)return Lo;o_=1;var s=wS(),t=Yd(),i=US();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=h;break}if(A===o){S=!0,o=u,a=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===a){S=!0,a=h,o=u;break}if(A===o){S=!0,o=h,a=u;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var lt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function P(e){return{current:e}}function Q(e){0>Tt||(e.current=yt[Tt],yt[Tt]=null,Tt--)}function ht(e,n){Tt++,yt[Tt]=e.current,e.current=n}var Mt=P(null),Ct=P(null),nt=P(null),ut=P(null);function wt(e,n){switch(ht(nt,n),ht(Ct,e),ht(Mt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Mv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Mv(n),e=Ev(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Mt),ht(Mt,e)}function It(){Q(Mt),Q(Ct),Q(nt)}function jt(e){e.memoizedState!==null&&ht(ut,e);var n=Mt.current,a=Ev(n,e.type);n!==a&&(ht(Ct,e),ht(Mt,a))}function le(e){Ct.current===e&&(Q(Mt),Q(Ct)),ut.current===e&&(Q(ut),Co._currentValue=q)}var $e,G;function me(e){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",G=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+G}var ae=!1;function ee(e,n){if(!e||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var at=ct}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ct){at=ct}e.call(_t.prototype)}}else{try{throw Error()}catch(ct){at=ct}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var H=S.split(`
`),et=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===et.length)for(o=H.length-1,u=et.length-1;1<=o&&0<=u&&H[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==et[u]){var mt=`
`+H[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function Vt(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return me("Activity");default:return""}}function Ve(e){try{var n="",a=null;do n+=Vt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Wt=Object.prototype.hasOwnProperty,se=s.unstable_scheduleCallback,tn=s.unstable_cancelCallback,Ze=s.unstable_shouldYield,O=s.unstable_requestPaint,T=s.unstable_now,it=s.unstable_getCurrentPriorityLevel,gt=s.unstable_ImmediatePriority,Et=s.unstable_UserBlockingPriority,dt=s.unstable_NormalPriority,Kt=s.unstable_LowPriority,Dt=s.unstable_IdlePriority,Yt=s.log,Zt=s.unstable_setDisableYieldValue,At=null,Ut=null;function Qt(e){if(typeof Yt=="function"&&Zt(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(At,e)}catch{}}var Bt=Math.clz32?Math.clz32:X,Lt=Math.log,ce=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Lt(e)/ce|0)|0}var Rt=256,Nt=262144,Ft=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=bt(o):(S&=A,S!==0?u=bt(S):a||(a=A&~e,a!==0&&(u=bt(a))))):(A=o&~h,A!==0?u=bt(A):S!==0?u=bt(S):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ai(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,et=e.hiddenUpdates;for(a=S&~a;0<a;){var mt=31-Bt(a),_t=1<<mt;A[mt]=0,H[mt]=-1;var at=et[mt];if(at!==null)for(et[mt]=null,mt=0;mt<at.length;mt++){var ct=at[mt];ct!==null&&(ct.lane&=-536870913)}a&=~_t}o!==0&&Gs(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function Gs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ai(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Nr(e,n){var a=n&-n;return a=(a&42)!==0?1:Lr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Lr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ja(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Wv(e.type))}function Vs(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var qn=Math.random().toString(36).slice(2),on="__reactFiber$"+qn,Sn="__reactProps$"+qn,ga="__reactContainer$"+qn,ks="__reactEvents$"+qn,ru="__reactListeners$"+qn,su="__reactHandles$"+qn,al="__reactResources$"+qn,$a="__reactMarker$"+qn;function C(e){delete e[on],delete e[Sn],delete e[ks],delete e[ru],delete e[su]}function W(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ga]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Dv(e);e!==null;){if(a=e[on])return a;e=Dv(e)}return n}e=a,a=e.parentNode}return null}function rt(e){if(e=e[on]||e[ga]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Z(e){var n=e[al];return n||(n=e[al]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[$a]=!0}var Ot=new Set,kt={};function zt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(kt[e]=n,e=0;e<n.length;e++)Ot.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},pe={};function Ne(e){return Wt.call(pe,e)?!0:Wt.call($t,e)?!1:ie.test(e)?pe[e]=!0:($t[e]=!0,!1)}function ke(e,n,a){if(Ne(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Le(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ge(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Re(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mn(e){if(!e._valueTracker){var n=je(e)?"checked":"value";e._valueTracker=Re(e,n,""+e[n])}}function Gi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=je(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tr=/[\n"\\]/g;function xe(e){return e.replace(tr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(e,n,a,o,u,h,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xt(n)):e.value!==""+Xt(n)&&(e.value=""+Xt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?dn(e,S,Xt(n)):a!=null?dn(e,S,Xt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Xt(A):e.removeAttribute("name")}function Ln(e,n,a,o,u,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Mn(e);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Mn(e)}function dn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Pr(e,n,a){if(n!=null&&(n=""+Xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xt(a):""}function Ri(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Xt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Mn(e)}function zr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var yx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||yx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&xp(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&xp(e,h,n[h])}function ou(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return Mx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vi(){}var lu=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,Ir=null;function Sp(e){var n=rt(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Sn]||null;if(!u)throw Error(r(90));Cn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Gi(o)}break t;case"textarea":Pr(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var uu=!1;function Mp(e,n,a){if(uu)return e(n,a);uu=!0;try{var o=e(n);return o}finally{if(uu=!1,(Br!==null||Ir!==null)&&(Wl(),Br&&(n=Br,e=Ir,Ir=Br=null,Sp(n),e)))for(n=0;n<e.length;n++)Sp(e[n])}}function Xs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(ki)try{var js={};Object.defineProperty(js,"passive",{get:function(){fu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{fu=!1}var va=null,hu=null,sl=null;function Ep(){if(sl)return sl;var e,n=hu,a=n.length,o,u="value"in va?va.value:va.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return sl=u.slice(e,1<o?1-o:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function bp(){return!1}function zn(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ll:bp,this.isPropagationStopped=bp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=zn(er),Ws=g({},er,{view:0,detail:0}),Ex=zn(Ws),du,pu,qs,ul=g({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qs&&(qs&&e.type==="mousemove"?(du=e.screenX-qs.screenX,pu=e.screenY-qs.screenY):pu=du=0,qs=e),du)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),Tp=zn(ul),bx=g({},ul,{dataTransfer:0}),Tx=zn(bx),Ax=g({},Ws,{relatedTarget:0}),mu=zn(Ax),Rx=g({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=zn(Rx),wx=g({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dx=zn(wx),Ux=g({},er,{data:0}),Ap=zn(Ux),Nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ox[e])?!!n[e]:!1}function gu(){return Px}var zx=g({},Ws,{key:function(e){if(e.key){var n=Nx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bx=zn(zx),Ix=g({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=zn(Ix),Fx=g({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Hx=zn(Fx),Gx=g({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=zn(Gx),kx=g({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xx=zn(kx),jx=g({},er,{newState:0,oldState:0}),Wx=zn(jx),qx=[9,13,27,32],vu=ki&&"CompositionEvent"in window,Ys=null;ki&&"documentMode"in document&&(Ys=document.documentMode);var Yx=ki&&"TextEvent"in window&&!Ys,Cp=ki&&(!vu||Ys&&8<Ys&&11>=Ys),wp=" ",Dp=!1;function Up(e,n){switch(e){case"keyup":return qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function Zx(e,n){switch(e){case"compositionend":return Np(n);case"keypress":return n.which!==32?null:(Dp=!0,wp);case"textInput":return e=n.data,e===wp&&Dp?null:e;default:return null}}function Kx(e,n){if(Fr)return e==="compositionend"||!vu&&Up(e,n)?(e=Ep(),sl=hu=va=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qx[e.type]:n==="textarea"}function Op(e,n,a,o){Br?Ir?Ir.push(o):Ir=[o]:Br=o,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Zs=null,Ks=null;function Jx(e){gv(e,0)}function fl(e){var n=st(e);if(Gi(n))return e}function Pp(e,n){if(e==="change")return n}var zp=!1;if(ki){var _u;if(ki){var xu="oninput"in document;if(!xu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),xu=typeof Bp.oninput=="function"}_u=xu}else _u=!1;zp=_u&&(!document.documentMode||9<document.documentMode)}function Ip(){Zs&&(Zs.detachEvent("onpropertychange",Fp),Ks=Zs=null)}function Fp(e){if(e.propertyName==="value"&&fl(Ks)){var n=[];Op(n,Ks,e,cu(e)),Mp(Jx,n)}}function $x(e,n,a){e==="focusin"?(Ip(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",Fp)):e==="focusout"&&Ip()}function ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Ks)}function ey(e,n){if(e==="click")return fl(n)}function ny(e,n){if(e==="input"||e==="change")return fl(n)}function iy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:iy;function Qs(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Wt.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gp(e,n){var a=Hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ay=ki&&"documentMode"in document&&11>=document.documentMode,Hr=null,Su=null,Js=null,Mu=!1;function Xp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Hr==null||Hr!==_n(o)||(o=Hr,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Qs(Js,o)||(Js=o,o=$l(Su,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Hr)))}function nr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Eu={},jp={};ki&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function ir(e){if(Eu[e])return Eu[e];if(!Gr[e])return e;var n=Gr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jp)return Eu[e]=n[a];return e}var Wp=ir("animationend"),qp=ir("animationiteration"),Yp=ir("animationstart"),ry=ir("transitionrun"),sy=ir("transitionstart"),oy=ir("transitioncancel"),Zp=ir("transitionend"),Kp=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function gi(e,n){Kp.set(e,n),zt(n,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],Vr=0,Tu=0;function dl(){for(var e=Vr,n=Tu=Vr=0;n<e;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var h=ri[n];if(ri[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&Qp(a,u,h)}}function pl(e,n,a,o){ri[Vr++]=e,ri[Vr++]=n,ri[Vr++]=a,ri[Vr++]=o,Tu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Au(e,n,a,o){return pl(e,n,a,o),ml(e)}function ar(e,n){return pl(e,null,null,n),ml(e)}function Qp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function ml(e){if(50<So)throw So=0,zf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var kr={};function ly(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,o){return new ly(e,n,a,o)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Ru(e)&&(S=1);else if(typeof e=="string")S=dS(e,a,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Zn(31,a,n,u),e.elementType=w,e.lanes=h,e;case b:return rr(a.children,u,h,n);case y:S=8,u|=24;break;case _:return e=Zn(12,a,n,u|2),e.elementType=_,e.lanes=h,e;case I:return e=Zn(13,a,n,u),e.elementType=I,e.lanes=h,e;case F:return e=Zn(19,a,n,u),e.elementType=F,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:S=10;break t;case L:S=9;break t;case U:S=11;break t;case z:S=14;break t;case j:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Zn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function rr(e,n,a,o){return e=Zn(7,e,o,n),e.lanes=a,e}function Cu(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function $p(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function wu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var tm=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=tm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ve(n)},tm.set(e,n),n)}return{value:e,source:n,stack:Ve(n)}}var Xr=[],jr=0,vl=null,$s=0,oi=[],li=0,_a=null,Ci=1,wi="";function ji(e,n){Xr[jr++]=$s,Xr[jr++]=vl,vl=e,$s=n}function em(e,n,a){oi[li++]=Ci,oi[li++]=wi,oi[li++]=_a,_a=e;var o=Ci;e=wi;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var h=32-Bt(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ci=1<<32-Bt(n)+u|a<<u|o,wi=h+e}else Ci=1<<h|a<<u|o,wi=e}function Du(e){e.return!==null&&(ji(e,1),em(e,1,0))}function Uu(e){for(;e===vl;)vl=Xr[--jr],Xr[jr]=null,$s=Xr[--jr],Xr[jr]=null;for(;e===_a;)_a=oi[--li],oi[li]=null,wi=oi[--li],oi[li]=null,Ci=oi[--li],oi[li]=null}function nm(e,n){oi[li++]=Ci,oi[li++]=wi,oi[li++]=_a,Ci=n.id,wi=n.overflow,_a=e}var En=null,We=null,Me=!1,xa=null,ci=!1,Nu=Error(r(519));function ya(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(si(n,e)),Nu}function im(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[Sn]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)_e(Eo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||yv(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||ya(e,!0)}function am(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:En=En.return}}function Wr(e){if(e!==En)return!1;if(!Me)return am(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qf(e.type,e.memoizedProps)),a=!a),a&&We&&ya(e),am(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=wv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=wv(e)}else n===27?(n=We,Oa(e.type)?(e=nh,nh=null,We=e):We=n):We=En?fi(e.stateNode.nextSibling):null;return!0}function sr(){We=En=null,Me=!1}function Lu(){var e=xa;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),xa=null),e}function to(e){xa===null?xa=[e]:xa.push(e)}var Ou=P(null),or=null,Wi=null;function Sa(e,n,a){ht(Ou,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=Ou.current,Q(Ou)}function Pu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function zu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Pu(h.return,a,e),o||(S=null);break t}h=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Pu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function qr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=u.type;Yn(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===ut.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}u=u.return}e!==null&&zu(n,e,a,o),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return rm(or,e)}function xl(e,n){return or===null&&lr(e),rm(e,n)}function rm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(r(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var cy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},uy=s.unstable_scheduleCallback,fy=s.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new cy,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&uy(fy,function(){e.controller.abort()})}var no=null,Iu=0,Yr=0,Zr=null;function hy(e,n){if(no===null){var a=no=[];Iu=0,Yr=Vf(),Zr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then(sm,sm),n}function sm(){if(--Iu===0&&no!==null){Zr!==null&&(Zr.status="fulfilled");var e=no;no=null,Yr=0,Zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function dy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var om=B.S;B.S=function(e,n){Xg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hy(e,n),om!==null&&om(e,n)};var cr=P(null);function Fu(){var e=cr.current;return e!==null?e:Xe.pooledCache}function yl(e,n){n===null?ht(cr,cr.current):ht(cr,n.pool)}function lm(){var e=Fu();return e===null?null:{parent:ln._currentValue,pool:e}}var Kr=Error(r(460)),Hu=Error(r(474)),Sl=Error(r(542)),Ml={then:function(){}};function cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function um(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e}throw fr=n,Kr}}function ur(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fr=a,Kr):a}}var fr=null;function fm(){if(fr===null)throw Error(r(459));var e=fr;return fr=null,e}function hm(e){if(e===Kr||e===Sl)throw Error(r(483))}var Qr=null,io=0;function El(e){var n=io;return io+=1,Qr===null&&(Qr=[]),um(Qr,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dm(e){function n(Y,k){if(e){var tt=Y.deletions;tt===null?(Y.deletions=[k],Y.flags|=16):tt.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Xi(Y,k),Y.index=0,Y.sibling=null,Y}function h(Y,k,tt){return Y.index=tt,e?(tt=Y.alternate,tt!==null?(tt=tt.index,tt<k?(Y.flags|=67108866,k):tt):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,tt,vt){return k===null||k.tag!==6?(k=Cu(tt,Y.mode,vt),k.return=Y,k):(k=u(k,tt),k.return=Y,k)}function H(Y,k,tt,vt){var te=tt.type;return te===b?mt(Y,k,tt.props.children,vt,tt.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&ur(te)===k.type)?(k=u(k,tt.props),ao(k,tt),k.return=Y,k):(k=gl(tt.type,tt.key,tt.props,null,Y.mode,vt),ao(k,tt),k.return=Y,k)}function et(Y,k,tt,vt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=wu(tt,Y.mode,vt),k.return=Y,k):(k=u(k,tt.children||[]),k.return=Y,k)}function mt(Y,k,tt,vt,te){return k===null||k.tag!==7?(k=rr(tt,Y.mode,vt,te),k.return=Y,k):(k=u(k,tt),k.return=Y,k)}function _t(Y,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Cu(""+k,Y.mode,tt),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return tt=gl(k.type,k.key,k.props,null,Y.mode,tt),ao(tt,k),tt.return=Y,tt;case E:return k=wu(k,Y.mode,tt),k.return=Y,k;case j:return k=ur(k),_t(Y,k,tt)}if(lt(k)||J(k))return k=rr(k,Y.mode,tt,null),k.return=Y,k;if(typeof k.then=="function")return _t(Y,El(k),tt);if(k.$$typeof===N)return _t(Y,xl(Y,k),tt);bl(Y,k)}return null}function at(Y,k,tt,vt){var te=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return te!==null?null:A(Y,k,""+tt,vt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===te?H(Y,k,tt,vt):null;case E:return tt.key===te?et(Y,k,tt,vt):null;case j:return tt=ur(tt),at(Y,k,tt,vt)}if(lt(tt)||J(tt))return te!==null?null:mt(Y,k,tt,vt,null);if(typeof tt.then=="function")return at(Y,k,El(tt),vt);if(tt.$$typeof===N)return at(Y,k,xl(Y,tt),vt);bl(Y,tt)}return null}function ct(Y,k,tt,vt,te){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Y=Y.get(tt)||null,A(k,Y,""+vt,te);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case M:return Y=Y.get(vt.key===null?tt:vt.key)||null,H(k,Y,vt,te);case E:return Y=Y.get(vt.key===null?tt:vt.key)||null,et(k,Y,vt,te);case j:return vt=ur(vt),ct(Y,k,tt,vt,te)}if(lt(vt)||J(vt))return Y=Y.get(tt)||null,mt(k,Y,vt,te,null);if(typeof vt.then=="function")return ct(Y,k,tt,El(vt),te);if(vt.$$typeof===N)return ct(Y,k,tt,xl(k,vt),te);bl(k,vt)}return null}function Gt(Y,k,tt,vt){for(var te=null,Ce=null,qt=k,fe=k=0,Se=null;qt!==null&&fe<tt.length;fe++){qt.index>fe?(Se=qt,qt=null):Se=qt.sibling;var we=at(Y,qt,tt[fe],vt);if(we===null){qt===null&&(qt=Se);break}e&&qt&&we.alternate===null&&n(Y,qt),k=h(we,k,fe),Ce===null?te=we:Ce.sibling=we,Ce=we,qt=Se}if(fe===tt.length)return a(Y,qt),Me&&ji(Y,fe),te;if(qt===null){for(;fe<tt.length;fe++)qt=_t(Y,tt[fe],vt),qt!==null&&(k=h(qt,k,fe),Ce===null?te=qt:Ce.sibling=qt,Ce=qt);return Me&&ji(Y,fe),te}for(qt=o(qt);fe<tt.length;fe++)Se=ct(qt,Y,fe,tt[fe],vt),Se!==null&&(e&&Se.alternate!==null&&qt.delete(Se.key===null?fe:Se.key),k=h(Se,k,fe),Ce===null?te=Se:Ce.sibling=Se,Ce=Se);return e&&qt.forEach(function(Fa){return n(Y,Fa)}),Me&&ji(Y,fe),te}function ne(Y,k,tt,vt){if(tt==null)throw Error(r(151));for(var te=null,Ce=null,qt=k,fe=k=0,Se=null,we=tt.next();qt!==null&&!we.done;fe++,we=tt.next()){qt.index>fe?(Se=qt,qt=null):Se=qt.sibling;var Fa=at(Y,qt,we.value,vt);if(Fa===null){qt===null&&(qt=Se);break}e&&qt&&Fa.alternate===null&&n(Y,qt),k=h(Fa,k,fe),Ce===null?te=Fa:Ce.sibling=Fa,Ce=Fa,qt=Se}if(we.done)return a(Y,qt),Me&&ji(Y,fe),te;if(qt===null){for(;!we.done;fe++,we=tt.next())we=_t(Y,we.value,vt),we!==null&&(k=h(we,k,fe),Ce===null?te=we:Ce.sibling=we,Ce=we);return Me&&ji(Y,fe),te}for(qt=o(qt);!we.done;fe++,we=tt.next())we=ct(qt,Y,fe,we.value,vt),we!==null&&(e&&we.alternate!==null&&qt.delete(we.key===null?fe:we.key),k=h(we,k,fe),Ce===null?te=we:Ce.sibling=we,Ce=we);return e&&qt.forEach(function(bS){return n(Y,bS)}),Me&&ji(Y,fe),te}function Fe(Y,k,tt,vt){if(typeof tt=="object"&&tt!==null&&tt.type===b&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var te=tt.key;k!==null;){if(k.key===te){if(te=tt.type,te===b){if(k.tag===7){a(Y,k.sibling),vt=u(k,tt.props.children),vt.return=Y,Y=vt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&ur(te)===k.type){a(Y,k.sibling),vt=u(k,tt.props),ao(vt,tt),vt.return=Y,Y=vt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}tt.type===b?(vt=rr(tt.props.children,Y.mode,vt,tt.key),vt.return=Y,Y=vt):(vt=gl(tt.type,tt.key,tt.props,null,Y.mode,vt),ao(vt,tt),vt.return=Y,Y=vt)}return S(Y);case E:t:{for(te=tt.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(Y,k.sibling),vt=u(k,tt.children||[]),vt.return=Y,Y=vt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}vt=wu(tt,Y.mode,vt),vt.return=Y,Y=vt}return S(Y);case j:return tt=ur(tt),Fe(Y,k,tt,vt)}if(lt(tt))return Gt(Y,k,tt,vt);if(J(tt)){if(te=J(tt),typeof te!="function")throw Error(r(150));return tt=te.call(tt),ne(Y,k,tt,vt)}if(typeof tt.then=="function")return Fe(Y,k,El(tt),vt);if(tt.$$typeof===N)return Fe(Y,k,xl(Y,tt),vt);bl(Y,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(Y,k.sibling),vt=u(k,tt),vt.return=Y,Y=vt):(a(Y,k),vt=Cu(tt,Y.mode,vt),vt.return=Y,Y=vt),S(Y)):a(Y,k)}return function(Y,k,tt,vt){try{io=0;var te=Fe(Y,k,tt,vt);return Qr=null,te}catch(qt){if(qt===Kr||qt===Sl)throw qt;var Ce=Zn(29,qt,null,Y.mode);return Ce.lanes=vt,Ce.return=Y,Ce}}}var hr=dm(!0),pm=dm(!1),Ma=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(e),Qp(e,null,a),n}return pl(e,o,n,a),ml(e)}function ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}function ku(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Xu=!1;function so(){if(Xu){var e=Zr;if(e!==null)throw e}}function oo(e,n,a,o){Xu=!1;var u=e.updateQueue;Ma=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,et=H.next;H.next=null,S===null?h=et:S.next=et,S=H;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==S&&(A===null?mt.firstBaseUpdate=et:A.next=et,mt.lastBaseUpdate=H))}if(h!==null){var _t=u.baseState;S=0,mt=et=H=null,A=h;do{var at=A.lane&-536870913,ct=at!==A.lane;if(ct?(ye&at)===at:(o&at)===at){at!==0&&at===Yr&&(Xu=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,ne=A;at=n;var Fe=a;switch(ne.tag){case 1:if(Gt=ne.payload,typeof Gt=="function"){_t=Gt.call(Fe,_t,at);break t}_t=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ne.payload,at=typeof Gt=="function"?Gt.call(Fe,_t,at):Gt,at==null)break t;_t=g({},_t,at);break t;case 2:Ma=!0}}at=A.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(et=mt=ct,H=_t):mt=mt.next=ct,S|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);mt===null&&(H=_t),u.baseState=H,u.firstBaseUpdate=et,u.lastBaseUpdate=mt,h===null&&(u.shared.lanes=0),wa|=S,e.lanes=S,e.memoizedState=_t}}function mm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function gm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mm(a[e],n)}var Jr=P(null),Tl=P(0);function vm(e,n){e=na,ht(Tl,e),ht(Jr,n),na=e|n.baseLanes}function ju(){ht(Tl,na),ht(Jr,Jr.current)}function Wu(){na=Tl.current,Q(Jr),Q(Tl)}var Kn=P(null),ui=null;function Ta(e){var n=e.alternate;ht(rn,rn.current&1),ht(Kn,e),ui===null&&(n===null||Jr.current!==null||n.memoizedState!==null)&&(ui=e)}function qu(e){ht(rn,rn.current),ht(Kn,e),ui===null&&(ui=e)}function _m(e){e.tag===22?(ht(rn,rn.current),ht(Kn,e),ui===null&&(ui=e)):Aa()}function Aa(){ht(rn,rn.current),ht(Kn,Kn.current)}function Qn(e){Q(Kn),ui===e&&(ui=null),Q(rn)}var rn=P(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||eh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=0,ue=null,Be=null,cn=null,Rl=!1,$r=!1,dr=!1,Cl=0,lo=0,ts=null,py=0;function en(){throw Error(r(321))}function Yu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Zu(e,n,a,o,u,h){return Yi=h,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?eg:ff,dr=!1,h=a(o,u),dr=!1,$r&&(h=ym(n,a,o,u)),xm(e),h}function xm(e){B.H=fo;var n=Be!==null&&Be.next!==null;if(Yi=0,cn=Be=ue=null,Rl=!1,lo=0,ts=null,n)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&_l(e)&&(un=!0))}function ym(e,n,a,o){ue=e;var u=0;do{if($r&&(ts=null),lo=0,$r=!1,25<=u)throw Error(r(301));if(u+=1,cn=Be=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=ng,h=n(a,o)}while($r);return h}function my(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ue.flags|=1024),n}function Ku(){var e=Cl!==0;return Cl=0,e}function Qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ju(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}Yi=0,cn=Be=ue=null,$r=!1,lo=Cl=0,ts=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ue.memoizedState=cn=e:cn=cn.next=e,cn}function sn(){if(Be===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=cn===null?ue.memoizedState:cn.next;if(n!==null)cn=n,Be=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},cn===null?ue.memoizedState=cn=e:cn=cn.next=e}return cn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,ts===null&&(ts=[]),e=um(ts,e,n),n=ue,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?eg:ff),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===N)return bn(e)}throw Error(r(438,String(e)))}function $u(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Zi(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=sn();return tf(n,Be,e)}function tf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=S=null,H=null,et=n,mt=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(ye&_t)===_t:(Yi&_t)===_t){var at=et.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Yr&&(mt=!0);else if((Yi&at)===at){et=et.next,at===Yr&&(mt=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(A=H=_t,S=h):H=H.next=_t,ue.lanes|=at,wa|=at;_t=et.action,dr&&a(h,_t),h=et.hasEagerState?et.eagerState:a(h,_t)}else at={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(A=H=at,S=h):H=H.next=at,ue.lanes|=_t,wa|=_t;et=et.next}while(et!==null&&et!==n);if(H===null?S=h:H.next=A,!Yn(h,e.memoizedState)&&(un=!0,mt&&(a=Zr,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ef(e){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);Yn(h,n.memoizedState)||(un=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Sm(e,n,a){var o=ue,u=sn(),h=Me;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Yn((Be||u).memoizedState,a);if(S&&(u.memoizedState=a,un=!0),u=u.queue,rf(bm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,es(9,{destroy:void 0},Em.bind(null,o,u,a,n),null),Xe===null)throw Error(r(349));h||(Yi&127)!==0||Mm(o,n,a)}return a}function Mm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=wl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Em(e,n,a,o){n.value=a,n.getSnapshot=o,Tm(n)&&Am(e)}function bm(e,n,a){return a(function(){Tm(n)&&Am(e)})}function Tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Am(e){var n=ar(e,2);n!==null&&Gn(n,e,2)}function nf(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),dr){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},n}function Rm(e,n,a,o){return e.baseState=a,tf(e,Be,typeof o=="function"?o:Zi)}function gy(e,n,a,o,u){if(Ol(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Cm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Cm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=B.T,S={};B.T=S;try{var A=a(u,o),H=B.S;H!==null&&H(S,A),wm(e,n,A)}catch(et){af(e,n,et)}finally{h!==null&&S.types!==null&&(h.types=S.types),B.T=h}}else try{h=a(u,o),wm(e,n,h)}catch(et){af(e,n,et)}}function wm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Dm(e,n,o)},function(o){return af(e,n,o)}):Dm(e,n,a)}function Dm(e,n,a){n.status="fulfilled",n.value=a,Um(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cm(e,a)))}function af(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Um(n),n=n.next;while(n!==o)}e.action=null}function Um(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Nm(e,n){return n}function Lm(e,n){if(Me){var a=Xe.formState;if(a!==null){t:{var o=ue;if(Me){if(We){e:{for(var u=We,h=ci;u.nodeType!==8;){if(!h){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){We=fi(u.nextSibling),o=u.data==="F!";break t}}ya(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:n},a.queue=o,a=Jm.bind(null,ue,o),o.dispatch=a,o=nf(!1),h=uf.bind(null,ue,!1,o.queue),o=On(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=gy.bind(null,ue,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Om(e){var n=sn();return Pm(n,Be,e)}function Pm(e,n,a){if(n=tf(e,n,Nm)[0],e=Ul(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(S){throw S===Kr?Sl:S}else o=n;n=sn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,es(9,{destroy:void 0},vy.bind(null,u,a),null)),[o,h,e]}function vy(e,n){e.action=n}function zm(e){var n=sn(),a=Be;if(a!==null)return Pm(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function es(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=wl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Bm(){return sn().memoizedState}function Nl(e,n,a,o){var u=On();ue.flags|=e,u.memoizedState=es(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ll(e,n,a,o){var u=sn();o=o===void 0?null:o;var h=u.memoizedState.inst;Be!==null&&o!==null&&Yu(o,Be.memoizedState.deps)?u.memoizedState=es(n,h,a,o):(ue.flags|=e,u.memoizedState=es(1|n,h,a,o))}function Im(e,n){Nl(8390656,8,e,n)}function rf(e,n){Ll(2048,8,e,n)}function _y(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=wl(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Fm(e){var n=sn().memoizedState;return _y({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Hm(e,n){return Ll(4,2,e,n)}function Gm(e,n){return Ll(4,4,e,n)}function Vm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function km(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,Vm.bind(null,n,e),a)}function sf(){}function Xm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function jm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=e(),dr){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o}function of(e,n,a){return a===void 0||(Yi&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Wg(),ue.lanes|=e,wa|=e,a)}function Wm(e,n,a,o){return Yn(a,n)?a:Jr.current!==null?(e=of(e,a,o),Yn(e,n)||(un=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(ye&261930)===0?(un=!0,e.memoizedState=a):(e=Wg(),ue.lanes|=e,wa|=e,n)}function qm(e,n,a,o,u){var h=K.p;K.p=h!==0&&8>h?h:8;var S=B.T,A={};B.T=A,uf(e,!1,n,a);try{var H=u(),et=B.S;if(et!==null&&et(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=dy(H,o);uo(e,n,mt,ti(e))}else uo(e,n,o,ti(e))}catch(_t){uo(e,n,{then:function(){},status:"rejected",reason:_t},ti())}finally{K.p=h,S!==null&&A.types!==null&&(S.types=A.types),B.T=S}}function xy(){}function lf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Ym(e).queue;qm(e,u,n,q,a===null?xy:function(){return Zm(e),a(o)})}function Ym(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Zm(e){var n=Ym(e);n.next===null&&(n=e.alternate.memoizedState),uo(e,n.next.queue,{},ti())}function cf(){return bn(Co)}function Km(){return sn().memoizedState}function Qm(){return sn().memoizedState}function yy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Ea(a);var o=ba(n,e,a);o!==null&&(Gn(o,n,a),ro(o,n,a)),n={cache:Bu()},e.payload=n;return}n=n.return}}function Sy(e,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(e)?$m(n,a):(a=Au(e,n,a,o),a!==null&&(Gn(a,e,o),tg(a,n,o)))}function Jm(e,n,a){var o=ti();uo(e,n,a,o)}function uo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))$m(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,A=h(S,a);if(u.hasEagerState=!0,u.eagerState=A,Yn(A,S))return pl(e,n,u,0),Xe===null&&dl(),!1}catch{}if(a=Au(e,n,u,o),a!==null)return Gn(a,e,o),tg(a,n,o),!0}return!1}function uf(e,n,a,o){if(o={lane:2,revertLane:Vf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(n)throw Error(r(479))}else n=Au(e,a,o,2),n!==null&&Gn(n,e,2)}function Ol(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function $m(e,n){$r=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function tg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}var fo={readContext:bn,use:Dl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};fo.useEffectEvent=en;var eg={readContext:bn,use:Dl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:Im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Nl(4194308,4,Vm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Nl(4194308,4,e,n)},useInsertionEffect:function(e,n){Nl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var o=e();if(dr){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=On();if(a!==void 0){var u=a(n);if(dr){Qt(!0);try{a(n)}finally{Qt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Sy.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=nf(e);var n=e.queue,a=Jm.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(e,n){var a=On();return of(a,e,n)},useTransition:function(){var e=nf(!1);return e=qm.bind(null,ue,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=On();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(ye&127)!==0||Mm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Im(bm.bind(null,o,h,e),[e]),o.flags|=2048,es(9,{destroy:void 0},Em.bind(null,o,h,a,n),null),a},useId:function(){var e=On(),n=Xe.identifierPrefix;if(Me){var a=wi,o=Ci;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=py++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:cf,useFormState:Lm,useActionState:Lm,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:$u,useCacheRefresh:function(){return On().memoizedState=yy.bind(null,ue)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ff={readContext:bn,use:Dl,useCallback:Xm,useContext:bn,useEffect:rf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:jm,useReducer:Ul,useRef:Bm,useState:function(){return Ul(Zi)},useDebugValue:sf,useDeferredValue:function(e,n){var a=sn();return Wm(a,Be.memoizedState,e,n)},useTransition:function(){var e=Ul(Zi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:cf,useFormState:Om,useActionState:Om,useOptimistic:function(e,n){var a=sn();return Rm(a,Be,e,n)},useMemoCache:$u,useCacheRefresh:Qm};ff.useEffectEvent=Fm;var ng={readContext:bn,use:Dl,useCallback:Xm,useContext:bn,useEffect:rf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:jm,useReducer:ef,useRef:Bm,useState:function(){return ef(Zi)},useDebugValue:sf,useDeferredValue:function(e,n){var a=sn();return Be===null?of(a,e,n):Wm(a,Be.memoizedState,e,n)},useTransition:function(){var e=ef(Zi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:cf,useFormState:zm,useActionState:zm,useOptimistic:function(e,n){var a=sn();return Be!==null?Rm(a,Be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Qm};ng.useEffectEvent=Fm;function hf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ti(),u=Ea(o);u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(Gn(n,e,o),ro(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ti(),u=Ea(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(Gn(n,e,o),ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=ba(e,o,a),n!==null&&(Gn(n,e,a),ro(n,e,a))}};function ig(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,o)||!Qs(u,h):!0}function ag(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&df.enqueueReplaceState(n,n.state,null)}function pr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function rg(e){hl(e)}function sg(e){console.error(e)}function og(e){hl(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function lg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pf(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function cg(e){return e=Ea(e),e.tag=3,e}function ug(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){lg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){lg(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function My(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?ql():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(e,o,u)),!1;case 22:return a.flags|=65536,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(e,o,u)),!1}throw Error(r(435,a.tag))}return Ff(e,o,u),ql(),!1}if(Me)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Nu&&(e=Error(r(422),{cause:o}),to(si(e,a)))):(o!==Nu&&(n=Error(r(423),{cause:o}),to(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=si(o,a),u=pf(e.stateNode,o,u),ku(e,u),nn!==4&&(nn=2)),!1;var h=Error(r(520),{cause:o});if(h=si(h,a),yo===null?yo=[h]:yo.push(h),nn!==4&&(nn=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=pf(a.stateNode,o,e),ku(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Da===null||!Da.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=cg(u),ug(u,e,a,o),ku(a,u),!1}a=a.return}while(a!==null);return!1}var mf=Error(r(461)),un=!1;function Tn(e,n,a,o){n.child=e===null?pm(n,null,a,o):hr(n,e.child,a,o)}function fg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return lr(n),o=Zu(e,n,a,S,h,u),A=Ku(),e!==null&&!un?(Qu(e,n,u),Ki(e,n,u)):(Me&&A&&Du(n),n.flags|=1,Tn(e,n,o,u),n.child)}function hg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Ru(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,dg(e,n,h,o,u)):(e=gl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Ef(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(S,o)&&e.ref===n.ref)return Ki(e,n,u)}return n.flags|=1,e=Xi(h,o),e.ref=n.ref,e.return=n,n.child=e}function dg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Qs(h,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=h,Ef(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Ki(e,n,u)}return gf(e,n,a,o,u)}function pg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return mg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(n,h!==null?h.cachePool:null),h!==null?vm(n,h):ju(),_m(n);else return o=n.lanes=536870912,mg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(yl(n,h.cachePool),vm(n,h),Aa(),n.memoizedState=null):(e!==null&&yl(n,null),ju(),Aa());return Tn(e,n,u,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function mg(e,n,a,o,u){var h=Fu();return h=h===null?null:{parent:ln._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&yl(n,null),ju(),_m(n),e!==null&&qr(e,n,o,!0),n.childLanes=u,null}function zl(e,n){return n=Il({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function gg(e,n,a){return hr(n,e.child,null,a),e=zl(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function Ey(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=zl(n,o),n.lanes=536870912,ho(null,e);if(qu(n),(e=We)?(e=Cv(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=n,n.child=a,En=n,We=null)):e=null,e===null)throw ya(n);return n.lanes=536870912,null}return zl(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=gg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||qr(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=Xe,o!==null&&(S=Nr(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,ar(e,S),Gn(o,e,S),mf;ql(),n=gg(e,n,a)}else e=h.treeContext,We=fi(S.nextSibling),En=n,Me=!0,xa=null,ci=!1,e!==null&&nm(n,e),n=zl(n,o),n.flags|=4096;return n}return e=Xi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function gf(e,n,a,o,u){return lr(n),a=Zu(e,n,a,o,void 0,u),o=Ku(),e!==null&&!un?(Qu(e,n,u),Ki(e,n,u)):(Me&&o&&Du(n),n.flags|=1,Tn(e,n,a,u),n.child)}function vg(e,n,a,o,u,h){return lr(n),n.updateQueue=null,a=ym(n,o,a,u),xm(e),o=Ku(),e!==null&&!un?(Qu(e,n,h),Ki(e,n,h)):(Me&&o&&Du(n),n.flags|=1,Tn(e,n,a,h),n.child)}function _g(e,n,a,o,u){if(lr(n),n.stateNode===null){var h=kr,S=a.contextType;typeof S=="object"&&S!==null&&(h=bn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=df,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Gu(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?bn(S):kr,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(hf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&df.enqueueReplaceState(h,h.state,null),oo(n,o,h,u),so(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,H=pr(a,A);h.props=H;var et=h.context,mt=a.contextType;S=kr,typeof mt=="object"&&mt!==null&&(S=bn(mt));var _t=a.getDerivedStateFromProps;mt=typeof _t=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||et!==S)&&ag(n,h,o,S),Ma=!1;var at=n.memoizedState;h.state=at,oo(n,o,h,u),so(),et=n.memoizedState,A||at!==et||Ma?(typeof _t=="function"&&(hf(n,a,_t,o),et=n.memoizedState),(H=Ma||ig(n,a,H,o,at,et,S))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=S,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Vu(e,n),S=n.memoizedProps,mt=pr(a,S),h.props=mt,_t=n.pendingProps,at=h.context,et=a.contextType,H=kr,typeof et=="object"&&et!==null&&(H=bn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==_t||at!==H)&&ag(n,h,o,H),Ma=!1,at=n.memoizedState,h.state=at,oo(n,o,h,u),so();var ct=n.memoizedState;S!==_t||at!==ct||Ma||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof A=="function"&&(hf(n,a,A,o),ct=n.memoizedState),(mt=Ma||ig(n,a,mt,o,at,ct,H)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),h.props=o,h.state=ct,h.context=H,o=mt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Bl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=hr(n,e.child,null,u),n.child=hr(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Ki(e,n,u),e}function xg(e,n,a,o){return sr(),n.flags|=256,Tn(e,n,a,o),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(e){return{baseLanes:e,cachePool:lm()}}function xf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function yg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Ta(n):Aa(),(e=We)?(e=Cv(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=n,n.child=a,En=n,We=null)):e=null,e===null)throw ya(n);return eh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Aa(),u=n.mode,A=Il({mode:"hidden",children:A},u),o=rr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=_f(a),o.childLanes=xf(e,S,a),n.memoizedState=vf,ho(null,o)):(Ta(n),yf(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(h)n.flags&256?(Ta(n),n.flags&=-257,n=Sf(e,n,a)):n.memoizedState!==null?(Aa(),n.child=e.child,n.flags|=128,n=null):(Aa(),A=o.fallback,u=n.mode,o=Il({mode:"visible",children:o.children},u),A=rr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,hr(n,e.child,null,a),o=n.child,o.memoizedState=_f(a),o.childLanes=xf(e,S,a),n.memoizedState=vf,n=ho(null,o));else if(Ta(n),eh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var et=S.dgst;S=et,o=Error(r(419)),o.stack="",o.digest=S,to({value:o,source:null,stack:null}),n=Sf(e,n,a)}else if(un||qr(e,n,a,!1),S=(a&e.childLanes)!==0,un||S){if(S=Xe,S!==null&&(o=Nr(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,ar(e,o),Gn(S,e,o),mf;th(A)||ql(),n=Sf(e,n,a)}else th(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,We=fi(A.nextSibling),En=n,Me=!0,xa=null,ci=!1,e!==null&&nm(n,e),n=yf(n,o.children),n.flags|=4096);return n}return u?(Aa(),A=o.fallback,u=n.mode,H=e.child,et=H.sibling,o=Xi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,et!==null?A=Xi(et,A):(A=rr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,ho(null,o),o=n.child,A=e.child.memoizedState,A===null?A=_f(a):(u=A.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=lm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=xf(e,S,a),n.memoizedState=vf,ho(e.child,o)):(Ta(n),a=e.child,e=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function yf(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function Sf(e,n,a){return hr(n,e.child,null,a),e=yf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Pu(e.return,n,a)}function Mf(e,n,a,o,u,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function Mg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=rn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,ht(rn,S),Tn(e,n,o,a),o=Me?$s:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,a,n);else if(e.tag===19)Sg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Mf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Mf(n,!0,a,null,h,o);break;case"together":Mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Xi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Xi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function by(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Sa(n,ln,e.memoizedState.cache),sr();break;case 27:case 5:jt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?yg(e,n,a):(Ta(n),e=Ki(e,n,a),e!==null?e.sibling:null);Ta(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Mg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(rn,rn.current),o)break;return null;case 22:return n.lanes=0,pg(e,n,a,n.pendingProps);case 24:Sa(n,ln,e.memoizedState.cache)}return Ki(e,n,a)}function Eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Ef(e,a)&&(n.flags&128)===0)return un=!1,by(e,n,a);un=(e.flags&131072)!==0}else un=!1,Me&&(n.flags&1048576)!==0&&em(n,$s,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ur(n.elementType),n.type=e,typeof e=="function")Ru(e)?(o=pr(e,o),n.tag=1,n=_g(null,n,e,o,a)):(n.tag=0,n=gf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=fg(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=hg(null,n,e,o,a);break t}}throw n=pt(e)||e,Error(r(306,n,""))}}return n;case 0:return gf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=pr(o,n.pendingProps),_g(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Vu(e,n),oo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Sa(n,ln,o),o!==h.cache&&zu(n,[ln],a,!0),so(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=xg(e,n,o,a);break t}else if(o!==u){u=si(Error(r(424)),n),to(u),n=xg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=fi(e.firstChild),En=n,Me=!0,xa=null,ci=!0,a=pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(sr(),o===u){n=Ki(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Bl(e,n),e===null?(a=Ov(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=tc(nt.current).createElement(a),o[on]=n,o[Sn]=e,An(o,a,e),St(o),n.stateNode=o):n.memoizedState=Ov(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&Me&&(o=n.stateNode=Uv(n.type,n.pendingProps,nt.current),En=n,ci=!0,u=We,Oa(n.type)?(nh=u,We=fi(o.firstChild)):We=u),Tn(e,n,n.pendingProps.children,a),Bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=We)&&(o=tS(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,En=n,We=fi(o.firstChild),ci=!1,u=!0):u=!1),u||ya(n)),jt(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,Qf(u,h)?o=null:S!==null&&Qf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(e,n,my,null,null,a),Co._currentValue=u),Bl(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=We)&&(a=eS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,En=n,We=null,e=!0):e=!1),e||ya(n)),null;case 13:return yg(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=hr(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return fg(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,lr(n),u=bn(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return hg(e,n,n.type,n.pendingProps,a);case 15:return dg(e,n,n.type,n.pendingProps,a);case 19:return Mg(e,n,a);case 31:return Ey(e,n,a);case 22:return pg(e,n,a,n.pendingProps);case 24:return lr(n),o=bn(ln),e===null?(u=Fu(),u===null&&(u=Xe,h=Bu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Gu(n),Sa(n,ln,u)):((e.lanes&a)!==0&&(Vu(e,n),oo(n,null,null,a),so()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,ln,o)):(o=h.cache,Sa(n,ln,o),o!==u.cache&&zu(n,[ln],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Qi(e){e.flags|=4}function bf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw fr=Ml,Hu}else e.flags&=-16777217}function bg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fv(n))if(Kg())e.flags|=8192;else throw fr=Ml,Hu}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,rs|=n)}function po(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ty(e,n,a){var o=n.pendingProps;switch(Uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(ln),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?Qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),qe(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Qi(n),h!==null?(qe(n),bg(n,h)):(qe(n),bf(n,u,null,o,a))):h?h!==e.memoizedState?(Qi(n),qe(n),bg(n,h)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Qi(n),qe(n),bf(n,u,e,o,a)),null;case 27:if(le(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Mt.current,Wr(n)?im(n):(e=Uv(u,o,a),n.stateNode=e,Qi(n))}return qe(n),null;case 5:if(le(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(h=Mt.current,Wr(n))im(n);else{var S=tc(nt.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[on]=n,h[Sn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(An(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Qi(n)}}return qe(n),bf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=nt.current,Wr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||yv(e.nodeValue,a)),e||ya(n,!0)}else e=tc(e).createTextNode(o),e[on]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Wr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[on]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),qe(n),null);case 4:return It(),e===null&&Wf(n.stateNode.containerInfo),qe(n),null;case 10:return qi(n.type),qe(n),null;case 19:if(Q(rn),o=n.memoizedState,o===null)return qe(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)po(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Al(e),h!==null){for(n.flags|=128,po(o,!1),e=h.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jp(a,e),a=a.sibling;return ht(rn,rn.current&1|2),Me&&ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Xl&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304)}else{if(!u)if(e=Al(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Me)return qe(n),null}else 2*T()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=rn.current,ht(rn,u?a&1|2:a&1),Me&&ji(n,o.treeForkCount),e):(qe(n),null);case 22:case 23:return Qn(n),Wu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Q(cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(ln),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ay(e,n){switch(Uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(ln),It(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));sr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));sr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(rn),null;case 4:return It(),null;case 10:return qi(n.type),null;case 22:case 23:return Qn(n),Wu(),e!==null&&Q(cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(ln),null;case 25:return null;default:return null}}function Tg(e,n){switch(Uu(n),n.tag){case 3:qi(ln),It();break;case 26:case 27:case 5:le(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:Q(rn);break;case 10:qi(n.type);break;case 22:case 23:Qn(n),Wu(),e!==null&&Q(cr);break;case 24:qi(ln)}}function mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){ze(n,n.return,A)}}function Ra(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var H=a,et=A;try{et()}catch(mt){ze(u,H,mt)}}}o=o.next}while(o!==h)}}catch(mt){ze(n,n.return,mt)}}function Ag(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gm(n,a)}catch(o){ze(e,e.return,o)}}}function Rg(e,n,a){a.props=pr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ze(e,n,o)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ze(e,n,u)}}function Di(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function Cg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function Tf(e,n,a){try{var o=e.stateNode;Yy(o,e.type,a,n),o[Sn]=n}catch(u){ze(e,e.return,u)}}function wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Af(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi));else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Rf(e,n,a),e=e.sibling;e!==null;)Rf(e,n,a),e=e.sibling}function Hl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hl(e,n,a),e=e.sibling;e!==null;)Hl(e,n,a),e=e.sibling}function Dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[on]=e,n[Sn]=a}catch(h){ze(e,e.return,h)}}var Ji=!1,fn=!1,Cf=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Ry(e,n){if(e=e.containerInfo,Zf=oc,e=kp(e),yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,A=-1,H=-1,et=0,mt=0,_t=e,at=null;e:for(;;){for(var ct;_t!==a||u!==0&&_t.nodeType!==3||(A=S+u),_t!==h||o!==0&&_t.nodeType!==3||(H=S+o),_t.nodeType===3&&(S+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)at=_t,_t=ct;for(;;){if(_t===e)break e;if(at===a&&++et===u&&(A=S),at===h&&++mt===o&&(H=S),(ct=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=ct}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:e,selectionRange:a},oc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Gt=pr(a.type,u);e=o.getSnapshotBeforeUpdate(Gt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){ze(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Ng(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),o&4&&mo(5,a);break;case 1:if(ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){ze(a,a.return,S)}else{var u=pr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){ze(a,a.return,S)}}o&64&&Ag(a),o&512&&go(a,a.return);break;case 3:if(ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gm(e,n)}catch(S){ze(a,a.return,S)}}break;case 27:n===null&&o&4&&Dg(a);case 26:case 5:ta(e,a),n===null&&o&4&&Cg(a),o&512&&go(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),o&4&&Pg(e,a);break;case 13:ta(e,a),o&4&&zg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zy.bind(null,a),nS(e,a))));break;case 22:if(o=a.memoizedState!==null||Ji,!o){n=n!==null&&n.memoizedState!==null||fn,u=Ji;var h=fn;Ji=o,(fn=n)&&!h?ea(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),Ji=u,fn=h}break;case 30:break;default:ta(e,a)}}function Lg(e){var n=e.alternate;n!==null&&(e.alternate=null,Lg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&C(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Bn=!1;function $i(e,n,a){for(a=a.child;a!==null;)Og(e,n,a),a=a.sibling}function Og(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:fn||Di(a,n),$i(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Di(a,n);var o=Ye,u=Bn;Oa(a.type)&&(Ye=a.stateNode,Bn=!1),$i(e,n,a),To(a.stateNode),Ye=o,Bn=u;break;case 5:fn||Di(a,n);case 6:if(o=Ye,u=Bn,Ye=null,$i(e,n,a),Ye=o,Bn=u,Ye!==null)if(Bn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(h){ze(a,n,h)}else try{Ye.removeChild(a.stateNode)}catch(h){ze(a,n,h)}break;case 18:Ye!==null&&(Bn?(e=Ye,Av(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ds(e)):Av(Ye,a.stateNode));break;case 4:o=Ye,u=Bn,Ye=a.stateNode.containerInfo,Bn=!0,$i(e,n,a),Ye=o,Bn=u;break;case 0:case 11:case 14:case 15:Ra(2,a,n),fn||Ra(4,a,n),$i(e,n,a);break;case 1:fn||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Rg(a,n,o)),$i(e,n,a);break;case 21:$i(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,$i(e,n,a),fn=o;break;default:$i(e,n,a)}}function Pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ds(e)}catch(a){ze(n,n.return,a)}}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ds(e)}catch(a){ze(n,n.return,a)}}function Cy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ug),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ug),n;default:throw Error(r(435,e.tag))}}function Gl(e,n){var a=Cy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=By.bind(null,e,o);o.then(u,u)}})}function In(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Oa(A.type)){Ye=A.stateNode,Bn=!1;break t}break;case 5:Ye=A.stateNode,Bn=!1;break t;case 3:case 4:Ye=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if(Ye===null)throw Error(r(160));Og(h,S,u),Ye=null,Bn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bg(n,e),n=n.sibling}var vi=null;function Bg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),Fn(e),o&4&&(Ra(3,e,e.return),mo(3,e),Ra(5,e,e.return));break;case 1:In(n,e),Fn(e),o&512&&(fn||a===null||Di(a,a.return)),o&64&&Ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(In(n,e),Fn(e),o&512&&(fn||a===null||Di(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[$a]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),An(h,o,a),h[on]=e,St(h),o=h;break t;case"link":var S=Bv("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;case"meta":if(S=Bv("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[on]=e,St(h),o=h}e.stateNode=o}else Iv(u,e.type,e.stateNode);else e.stateNode=zv(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Iv(u,e.type,e.stateNode):zv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:In(n,e),Fn(e),o&512&&(fn||a===null||Di(a,a.return)),a!==null&&o&4&&Tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(In(n,e),Fn(e),o&512&&(fn||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{zr(u,"")}catch(Gt){ze(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Tf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Cf=!0);break;case 6:if(In(n,e),Fn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Gt){ze(e,e.return,Gt)}}break;case 3:if(ic=null,u=vi,vi=ec(n.containerInfo),In(n,e),vi=u,Fn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(Gt){ze(e,e.return,Gt)}Cf&&(Cf=!1,Ig(e));break;case 4:o=vi,vi=ec(e.stateNode.containerInfo),In(n,e),Fn(e),vi=o;break;case 12:In(n,e),Fn(e);break;case 31:In(n,e),Fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 13:In(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,et=Ji,mt=fn;if(Ji=et||u,fn=mt||H,In(n,e),fn=mt,Ji=et,Fn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||Ji||fn||mr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var _t=H.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Gt){ze(H,H.return,Gt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Gt){ze(H,H.return,Gt)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;u?Rv(ct,!0):Rv(H.stateNode,!1)}catch(Gt){ze(H,H.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gl(e,a))));break;case 19:In(n,e),Fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 30:break;case 21:break;default:In(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(wg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Af(e);Hl(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(zr(S,""),a.flags&=-33);var A=Af(e);Hl(e,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,et=Af(e);Rf(e,et,H);break;default:throw Error(r(161))}}catch(mt){ze(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ng(e,n.alternate,n),n=n.sibling}function mr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),mr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rg(n,n.return,a),mr(n);break;case 27:To(n.stateNode);case 26:case 5:Di(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}e=e.sibling}}function ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:ea(u,h,a),mo(4,h);break;case 1:if(ea(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){ze(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)mm(H[u],A)}catch(et){ze(o,o.return,et)}}a&&S&64&&Ag(h),go(h,h.return);break;case 27:Dg(h);case 26:case 5:ea(u,h,a),a&&o===null&&S&4&&Cg(h),go(h,h.return);break;case 12:ea(u,h,a);break;case 31:ea(u,h,a),a&&S&4&&Pg(u,h);break;case 13:ea(u,h,a),a&&S&4&&zg(u,h);break;case 22:h.memoizedState===null&&ea(u,h,a),go(h,h.return);break;case 30:break;default:ea(u,h,a)}n=n.sibling}}function wf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function Df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function _i(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fg(e,n,a,o),n=n.sibling}function Fg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,o),u&2048&&mo(9,n);break;case 1:_i(e,n,a,o);break;case 3:_i(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(u&2048){_i(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){ze(n,n.return,H)}}else _i(e,n,a,o);break;case 31:_i(e,n,a,o);break;case 13:_i(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?_i(e,n,a,o):vo(e,n):h._visibility&2?_i(e,n,a,o):(h._visibility|=2,ns(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&wf(S,n);break;case 24:_i(e,n,a,o),u&2048&&Df(n.alternate,n);break;default:_i(e,n,a,o)}}function ns(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,A=a,H=o,et=S.flags;switch(S.tag){case 0:case 11:case 15:ns(h,S,A,H,u),mo(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&2?ns(h,S,A,H,u):vo(h,S):(mt._visibility|=2,ns(h,S,A,H,u)),u&&et&2048&&wf(S.alternate,S);break;case 24:ns(h,S,A,H,u),u&&et&2048&&Df(S.alternate,S);break;default:ns(h,S,A,H,u)}n=n.sibling}}function vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&wf(o.alternate,o);break;case 24:vo(a,o),u&2048&&Df(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var _o=8192;function is(e,n,a){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)Hg(e,n,a),e=e.sibling}function Hg(e,n,a){switch(e.tag){case 26:is(e,n,a),e.flags&_o&&e.memoizedState!==null&&pS(a,vi,e.memoizedState,e.memoizedProps);break;case 5:is(e,n,a);break;case 3:case 4:var o=vi;vi=ec(e.stateNode.containerInfo),is(e,n,a),vi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=_o,_o=16777216,is(e,n,a),_o=o):is(e,n,a));break;default:is(e,n,a)}}function Gg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,kg(o,e)}Gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):xo(e);break;default:xo(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,kg(o,e)}Gg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function kg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,h=o.return;if(Lg(o),o===a){xn=null;break t}if(u!==null){u.return=h,xn=u;break t}xn=h}}}var wy={getCacheForType:function(e){var n=bn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(ln).controller.signal}},Dy=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,ve=null,ye=0,Pe=0,Jn=null,Ca=!1,as=!1,Uf=!1,na=0,nn=0,wa=0,gr=0,Nf=0,$n=0,rs=0,yo=null,Hn=null,Lf=!1,kl=0,Xg=0,Xl=1/0,jl=null,Da=null,pn=0,Ua=null,ss=null,ia=0,Of=0,Pf=null,jg=null,So=0,zf=null;function ti(){return(Ue&2)!==0&&ye!==0?ye&-ye:B.T!==null?Vf():Ja()}function Wg(){if($n===0)if((ye&536870912)===0||Me){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function Gn(e,n,a){(e===Xe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(os(e,0),Na(e,ye,$n,!1)),Nn(e,a),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(gr|=a),nn===4&&Na(e,ye,$n,!1)),Ui(e))}function qg(e,n,a){if((Ue&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=o?Ly(e,n):If(e,n,!0),h=o;do{if(u===0){as&&!o&&Na(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Uy(a)){u=If(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=yo;var H=A.current.memoizedState.isDehydrated;if(H&&(os(A,S).flags|=256),S=If(A,S,!1),S!==2){if(Uf&&!H){A.errorRecoveryDisabledLanes|=h,gr|=h,u=4;break t}h=Hn,Hn=u,h!==null&&(Hn===null?Hn=h:Hn.push.apply(Hn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){os(e,0),Na(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,$n,!Ca);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=kl+300-T(),10<u)){if(Na(o,n,$n,!Ca),xt(o,0,!0)!==0)break t;ia=n,o.timeoutHandle=bv(Yg.bind(null,o,a,Hn,jl,Lf,n,$n,gr,rs,Ca,h,"Throttled",-0,0),u);break t}Yg(o,a,Hn,jl,Lf,n,$n,gr,rs,Ca,h,null,-0,0)}}break}while(!0);Ui(e)}function Yg(e,n,a,o,u,h,S,A,H,et,mt,_t,at,ct){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},Hg(n,h,_t);var Gt=(h&62914560)===h?kl-T():(h&4194048)===h?Xg-T():0;if(Gt=mS(_t,Gt),Gt!==null){ia=h,e.cancelPendingCommit=Gt(nv.bind(null,e,n,h,a,o,u,S,A,H,mt,_t,null,at,ct)),Na(e,h,S,!et);return}}nv(e,n,h,a,o,u,S,A,H)}function Uy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Yn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(e,n,a,o){n&=~Nf,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Bt(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&Gs(e,a,n)}function Wl(){return(Ue&6)===0?(Mo(0),!1):!0}function Bf(){if(ve!==null){if(Pe===0)var e=ve.return;else e=ve,Wi=or=null,Ju(e),Qr=null,io=0,e=ve;for(;e!==null;)Tg(e.alternate,e),e=e.return;ve=null}}function os(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,Bf(),Xe=e,ve=a=Xi(e.current,null),ye=n,Pe=0,Jn=null,Ca=!1,as=Ht(e,n),Uf=!1,rs=$n=Nf=gr=wa=nn=0,Hn=yo=null,Lf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),h=1<<u;n|=e[u],o&=~h}return na=n,dl(),a}function Zg(e,n){ue=null,B.H=fo,n===Kr||n===Sl?(n=fm(),Pe=3):n===Hu?(n=fm(),Pe=4):Pe=n===mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ve===null&&(nn=1,Pl(e,si(n,e.current)))}function Kg(){var e=Kn.current;return e===null?!0:(ye&4194048)===ye?ui===null:(ye&62914560)===ye||(ye&536870912)!==0?e===ui:!1}function Qg(){var e=B.H;return B.H=fo,e===null?fo:e}function Jg(){var e=B.A;return B.A=wy,e}function ql(){nn=4,Ca||(ye&4194048)!==ye&&Kn.current!==null||(as=!0),(wa&134217727)===0&&(gr&134217727)===0||Xe===null||Na(Xe,ye,$n,!1)}function If(e,n,a){var o=Ue;Ue|=2;var u=Qg(),h=Jg();(Xe!==e||ye!==n)&&(jl=null,os(e,n)),n=!1;var S=nn;t:do try{if(Pe!==0&&ve!==null){var A=ve,H=Jn;switch(Pe){case 8:Bf(),S=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var et=Pe;if(Pe=0,Jn=null,ls(e,A,H,et),a&&as){S=0;break t}break;default:et=Pe,Pe=0,Jn=null,ls(e,A,H,et)}}Ny(),S=nn;break}catch(mt){Zg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Wi=or=null,Ue=o,B.H=u,B.A=h,ve===null&&(Xe=null,ye=0,dl()),S}function Ny(){for(;ve!==null;)$g(ve)}function Ly(e,n){var a=Ue;Ue|=2;var o=Qg(),u=Jg();Xe!==e||ye!==n?(jl=null,Xl=T()+500,os(e,n)):as=Ht(e,n);t:do try{if(Pe!==0&&ve!==null){n=ve;var h=Jn;e:switch(Pe){case 1:Pe=0,Jn=null,ls(e,n,h,1);break;case 2:case 9:if(cm(h)){Pe=0,Jn=null,tv(n);break}n=function(){Pe!==2&&Pe!==9||Xe!==e||(Pe=7),Ui(e)},h.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:cm(h)?(Pe=0,Jn=null,tv(n)):(Pe=0,Jn=null,ls(e,n,h,7));break;case 5:var S=null;switch(ve.tag){case 26:S=ve.memoizedState;case 5:case 27:var A=ve;if(S?Fv(S):A.stateNode.complete){Pe=0,Jn=null;var H=A.sibling;if(H!==null)ve=H;else{var et=A.return;et!==null?(ve=et,Yl(et)):ve=null}break e}}Pe=0,Jn=null,ls(e,n,h,5);break;case 6:Pe=0,Jn=null,ls(e,n,h,6);break;case 8:Bf(),nn=6;break t;default:throw Error(r(462))}}Oy();break}catch(mt){Zg(e,mt)}while(!0);return Wi=or=null,B.H=o,B.A=u,Ue=a,ve!==null?0:(Xe=null,ye=0,dl(),nn)}function Oy(){for(;ve!==null&&!Ze();)$g(ve)}function $g(e){var n=Eg(e.alternate,e,na);e.memoizedProps=e.pendingProps,n===null?Yl(e):ve=n}function tv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=vg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Ju(n);default:Tg(a,n),n=ve=Jp(n,na),n=Eg(a,n,na)}e.memoizedProps=e.pendingProps,n===null?Yl(e):ve=n}function ls(e,n,a,o){Wi=or=null,Ju(n),Qr=null,io=0;var u=n.return;try{if(My(e,u,n,a,ye)){nn=1,Pl(e,si(a,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;nn=1,Pl(e,si(a,e.current)),ve=null;return}n.flags&32768?(Me||o===1?e=!0:as||(ye&536870912)!==0?e=!1:(Ca=e=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),ev(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){ev(n,Ca);return}e=n.return;var a=Ty(n.alternate,n,na);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);nn===0&&(nn=5)}function ev(e,n){do{var a=Ay(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);nn=6,ve=null}function nv(e,n,a,o,u,h,S,A,H){e.cancelPendingCommit=null;do Zl();while(pn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Tu,ai(e,a,h,S,A,H),e===Xe&&(ve=Xe=null,ye=0),ss=n,Ua=e,ia=a,Of=h,Pf=u,jg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Iy(dt,function(){return ov(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=K.p,K.p=2,S=Ue,Ue|=4;try{Ry(e,n,a)}finally{Ue=S,K.p=u,B.T=o}}pn=1,iv(),av(),rv()}}function iv(){if(pn===1){pn=0;var e=Ua,n=ss,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Ue;Ue|=4;try{Bg(n,e);var h=Kf,S=kp(e.containerInfo),A=h.focusedElem,H=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&Vp(A.ownerDocument.documentElement,A)){if(H!==null&&yu(A)){var et=H.start,mt=H.end;if(mt===void 0&&(mt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(mt,A.value.length);else{var _t=A.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var ct=at.getSelection(),Gt=A.textContent.length,ne=Math.min(H.start,Gt),Fe=H.end===void 0?ne:Math.min(H.end,Gt);!ct.extend&&ne>Fe&&(S=Fe,Fe=ne,ne=S);var Y=Gp(A,ne),k=Gp(A,Fe);if(Y&&k&&(ct.rangeCount!==1||ct.anchorNode!==Y.node||ct.anchorOffset!==Y.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var tt=_t.createRange();tt.setStart(Y.node,Y.offset),ct.removeAllRanges(),ne>Fe?(ct.addRange(tt),ct.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ct.addRange(tt))}}}}for(_t=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var vt=_t[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}oc=!!Zf,Kf=Zf=null}finally{Ue=u,K.p=o,B.T=a}}e.current=n,pn=2}}function av(){if(pn===2){pn=0;var e=Ua,n=ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Ue;Ue|=4;try{Ng(e,n.alternate,n)}finally{Ue=u,K.p=o,B.T=a}}pn=3}}function rv(){if(pn===4||pn===3){pn=0,O();var e=Ua,n=ss,a=ia,o=jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ss=Ua=null,sv(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Da=null),Or(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=K.p,K.p=2,B.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];h(A.value,{componentStack:A.stack})}}finally{B.T=n,K.p=u}}(ia&3)!==0&&Zl(),Ui(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===zf?So++:(So=0,zf=e):So=0,Mo(0)}}function sv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Zl(){return iv(),av(),rv(),ov()}function ov(){if(pn!==5)return!1;var e=Ua,n=Of;Of=0;var a=Or(ia),o=B.T,u=K.p;try{K.p=32>a?32:a,B.T=null,a=Pf,Pf=null;var h=Ua,S=ia;if(pn=0,ss=Ua=null,ia=0,(Ue&6)!==0)throw Error(r(331));var A=Ue;if(Ue|=4,Vg(h.current),Fg(h,h.current,S,a),Ue=A,Mo(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(At,h)}catch{}return!0}finally{K.p=u,B.T=o,sv(e,n)}}function lv(e,n,a){n=si(a,n),n=pf(e.stateNode,n,2),e=ba(e,n,2),e!==null&&(Nn(e,2),Ui(e))}function ze(e,n,a){if(e.tag===3)lv(e,e,a);else for(;n!==null;){if(n.tag===3){lv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=si(a,e),a=cg(2),o=ba(n,a,2),o!==null&&(ug(a,o,n,e),Nn(o,2),Ui(o));break}}n=n.return}}function Ff(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Dy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Uf=!0,u.add(a),e=Py.bind(null,e,n,a),n.then(e,e))}function Py(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ye&a)===a&&(nn===4||nn===3&&(ye&62914560)===ye&&300>T()-kl?(Ue&2)===0&&os(e,0):Nf|=a,rs===ye&&(rs=0)),Ui(e)}function cv(e,n){n===0&&(n=Oe()),e=ar(e,n),e!==null&&(Nn(e,n),Ui(e))}function zy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),cv(e,a)}function By(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),cv(e,a)}function Iy(e,n){return se(e,n)}var Kl=null,cs=null,Hf=!1,Ql=!1,Gf=!1,La=0;function Ui(e){e!==cs&&e.next===null&&(cs===null?Kl=cs=e:cs=cs.next=e),Ql=!0,Hf||(Hf=!0,Hy())}function Mo(e,n){if(!Gf&&Ql){Gf=!0;do for(var a=!1,o=Kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Bt(42|e)+1)-1,h&=u&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,dv(o,h))}else h=ye,h=xt(o,o===Xe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ht(o,h)||(a=!0,dv(o,h));o=o.next}while(a);Gf=!1}}function Fy(){uv()}function uv(){Ql=Hf=!1;var e=0;La!==0&&Ky()&&(e=La);for(var n=T(),a=null,o=Kl;o!==null;){var u=o.next,h=fv(o,n);h===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(cs=a)):(a=o,(e!==0||(h&3)!==0)&&(Ql=!0)),o=u}pn!==0&&pn!==5||Mo(e),La!==0&&(La=0)}function fv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Bt(h),A=1<<S,H=u[S];H===-1?((A&a)===0||(A&o)!==0)&&(u[S]=re(A,n)):H<=n&&(e.expiredLanes|=A),h&=~A}if(n=Xe,a=ye,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&tn(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&tn(o),Or(a)){case 2:case 8:a=Et;break;case 32:a=dt;break;case 268435456:a=Dt;break;default:a=dt}return o=hv.bind(null,e),a=se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&tn(o),e.callbackPriority=2,e.callbackNode=null,2}function hv(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var o=ye;return o=xt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(qg(e,o,n),fv(e,T()),e.callbackNode!=null&&e.callbackNode===a?hv.bind(null,e):null)}function dv(e,n){if(Zl())return null;qg(e,n,!0)}function Hy(){Jy(function(){(Ue&6)!==0?se(gt,Fy):uv()})}function Vf(){if(La===0){var e=Yr;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),La=e}return La}function pv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function mv(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Gy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=pv((u[Sn]||null).action),S=o.submitter;S&&(n=(n=S[Sn]||null)?pv(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var A=new cl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(La!==0){var H=S?mv(u,S):new FormData(u);lf(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(A.preventDefault(),H=S?mv(u,S):new FormData(u),lf(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var kf=0;kf<bu.length;kf++){var Xf=bu[kf],Vy=Xf.toLowerCase(),ky=Xf[0].toUpperCase()+Xf.slice(1);gi(Vy,"on"+ky)}gi(Wp,"onAnimationEnd"),gi(qp,"onAnimationIteration"),gi(Yp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(ry,"onTransitionRun"),gi(sy,"onTransitionStart"),gi(oy,"onTransitionCancel"),gi(Zp,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function gv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],H=A.instance,et=A.currentTarget;if(A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(mt){hl(mt)}u.currentTarget=null,h=H}else for(S=0;S<o.length;S++){if(A=o[S],H=A.instance,et=A.currentTarget,A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(mt){hl(mt)}u.currentTarget=null,h=H}}}}function _e(e,n){var a=n[ks];a===void 0&&(a=n[ks]=new Set);var o=e+"__bubble";a.has(o)||(vv(n,e,2,!1),a.add(o))}function jf(e,n,a){var o=0;n&&(o|=4),vv(a,e,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[Jl]){e[Jl]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(Xy.has(a)||jf(a,!1,e),jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,jf("selectionchange",!1,n))}}function vv(e,n,a,o){switch(Wv(n)){case 2:var u=_S;break;case 8:u=xS;break;default:u=oh}a=u.bind(null,n,a,e),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function qf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=W(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=h=S;continue t}A=A.parentNode}}o=o.return}Mp(function(){var et=h,mt=cu(a),_t=[];t:{var at=Kp.get(e);if(at!==void 0){var ct=cl,Gt=e;switch(e){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":ct=Bx;break;case"focusin":Gt="focus",ct=mu;break;case"focusout":Gt="blur",ct=mu;break;case"beforeblur":case"afterblur":ct=mu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Hx;break;case Wp:case qp:case Yp:ct=Cx;break;case Zp:ct=Vx;break;case"scroll":case"scrollend":ct=Ex;break;case"wheel":ct=Xx;break;case"copy":case"cut":case"paste":ct=Dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Rp;break;case"toggle":case"beforetoggle":ct=Wx}var ne=(n&4)!==0,Fe=!ne&&(e==="scroll"||e==="scrollend"),Y=ne?at!==null?at+"Capture":null:at;ne=[];for(var k=et,tt;k!==null;){var vt=k;if(tt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||tt===null||Y===null||(vt=Xs(k,Y),vt!=null&&ne.push(bo(k,vt,tt))),Fe)break;k=k.return}0<ne.length&&(at=new ct(at,Gt,null,a,mt),_t.push({event:at,listeners:ne}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&a!==lu&&(Gt=a.relatedTarget||a.fromElement)&&(W(Gt)||Gt[ga]))break t;if((ct||at)&&(at=mt.window===mt?mt:(at=mt.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Gt=a.relatedTarget||a.toElement,ct=et,Gt=Gt?W(Gt):null,Gt!==null&&(Fe=c(Gt),ne=Gt.tag,Gt!==Fe||ne!==5&&ne!==27&&ne!==6)&&(Gt=null)):(ct=null,Gt=et),ct!==Gt)){if(ne=Tp,vt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Rp,vt="onPointerLeave",Y="onPointerEnter",k="pointer"),Fe=ct==null?at:st(ct),tt=Gt==null?at:st(Gt),at=new ne(vt,k+"leave",ct,a,mt),at.target=Fe,at.relatedTarget=tt,vt=null,W(mt)===et&&(ne=new ne(Y,k+"enter",Gt,a,mt),ne.target=tt,ne.relatedTarget=Fe,vt=ne),Fe=vt,ct&&Gt)e:{for(ne=jy,Y=ct,k=Gt,tt=0,vt=Y;vt;vt=ne(vt))tt++;vt=0;for(var te=k;te;te=ne(te))vt++;for(;0<tt-vt;)Y=ne(Y),tt--;for(;0<vt-tt;)k=ne(k),vt--;for(;tt--;){if(Y===k||k!==null&&Y===k.alternate){ne=Y;break e}Y=ne(Y),k=ne(k)}ne=null}else ne=null;ct!==null&&_v(_t,at,ct,ne,!1),Gt!==null&&Fe!==null&&_v(_t,Fe,Gt,ne,!0)}}t:{if(at=et?st(et):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var Ce=Pp;else if(Lp(at))if(zp)Ce=ny;else{Ce=ty;var qt=$x}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&ou(et.elementType)&&(Ce=Pp):Ce=ey;if(Ce&&(Ce=Ce(e,et))){Op(_t,Ce,a,mt);break t}qt&&qt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&dn(at,"number",at.value)}switch(qt=et?st(et):window,e){case"focusin":(Lp(qt)||qt.contentEditable==="true")&&(Hr=qt,Su=et,Js=null);break;case"focusout":Js=Su=Hr=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Xp(_t,a,mt);break;case"selectionchange":if(ay)break;case"keydown":case"keyup":Xp(_t,a,mt)}var fe;if(vu)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Fr?Up(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Cp&&a.locale!=="ko"&&(Fr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Fr&&(fe=Ep()):(va=mt,hu="value"in va?va.value:va.textContent,Fr=!0)),qt=$l(et,Se),0<qt.length&&(Se=new Ap(Se,e,null,a,mt),_t.push({event:Se,listeners:qt}),fe?Se.data=fe:(fe=Np(a),fe!==null&&(Se.data=fe)))),(fe=Yx?Zx(e,a):Kx(e,a))&&(Se=$l(et,"onBeforeInput"),0<Se.length&&(qt=new Ap("onBeforeInput","beforeinput",null,a,mt),_t.push({event:qt,listeners:Se}),qt.data=fe)),Gy(_t,e,et,a,mt)}gv(_t,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Xs(e,a),u!=null&&o.unshift(bo(e,u,h)),u=Xs(e,n),u!=null&&o.push(bo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function jy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _v(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var A=a,H=A.alternate,et=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||et===null||(H=et,u?(et=Xs(a,h),et!=null&&S.unshift(bo(a,et,H))):u||(et=Xs(a,h),et!=null&&S.push(bo(a,et,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Wy=/\r\n?/g,qy=/\u0000|\uFFFD/g;function xv(e){return(typeof e=="string"?e:""+e).replace(Wy,`
`).replace(qy,"")}function yv(e,n){return n=xv(n),xv(e)===n}function Ie(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zr(e,""+o);break;case"className":Le(e,"class",o);break;case"tabIndex":Le(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(e,a,o);break;case"style":yp(e,o,h);break;case"data":if(n!=="object"){Le(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Vi);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=rl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),ke(e,"popover",o);break;case"xlinkActuate":ge(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ge(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ge(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ge(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ge(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ge(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ge(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ge(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ge(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ke(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sx.get(a)||a,ke(e,a,o))}}function Yf(e,n,a,o,u,h){switch(a){case"style":yp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zr(e,o):(typeof o=="number"||typeof o=="bigint")&&zr(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ke(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,h,S,a,null)}}u&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var A=h=S=u=null,H=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":S=mt;break;case"checked":H=mt;break;case"defaultChecked":et=mt;break;case"value":h=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Ie(e,n,o,mt,a,null)}}Ln(e,h,A,H,et,S,u,!1);return;case"select":_e("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Ie(e,n,u,A,a,null)}n=h,a=S,e.multiple=!!o,n!=null?an(e,!!o,n,!1):a!=null&&an(e,!!o,a,!0);return;case"textarea":_e("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ie(e,n,S,A,a,null)}Ri(e,o,u,h);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ie(e,n,H,o,a,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<Eo.length;o++)_e(Eo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,et,o,a,null)}return;default:if(ou(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Yf(e,n,mt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ie(e,n,A,o,a,null))}function Yy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,A=null,H=null,et=null,mt=null;for(ct in a){var _t=a[ct];if(a.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=_t;default:o.hasOwnProperty(ct)||Ie(e,n,ct,null,o,_t)}}for(var at in o){var ct=o[at];if(_t=a[at],o.hasOwnProperty(at)&&(ct!=null||_t!=null))switch(at){case"type":h=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":mt=ct;break;case"value":S=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==_t&&Ie(e,n,at,ct,o,_t)}}Cn(e,S,A,H,et,mt,h,u);return;case"select":ct=S=A=at=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ct=H;default:o.hasOwnProperty(h)||Ie(e,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":at=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==H&&Ie(e,n,u,h,o,H)}n=A,a=S,o=ct,at!=null?an(e,!!a,at,!1):!!o!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":ct=at=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ie(e,n,A,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":at=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Ie(e,n,S,u,o,h)}Pr(e,at,ct);return;case"option":for(var Gt in a)at=a[Gt],a.hasOwnProperty(Gt)&&at!=null&&!o.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:Ie(e,n,Gt,null,o,at));for(H in o)at=o[H],ct=a[H],o.hasOwnProperty(H)&&at!==ct&&(at!=null||ct!=null)&&(H==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":Ie(e,n,H,at,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)at=a[ne],a.hasOwnProperty(ne)&&at!=null&&!o.hasOwnProperty(ne)&&Ie(e,n,ne,null,o,at);for(et in o)if(at=o[et],ct=a[et],o.hasOwnProperty(et)&&at!==ct&&(at!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Ie(e,n,et,at,o,ct)}return;default:if(ou(n)){for(var Fe in a)at=a[Fe],a.hasOwnProperty(Fe)&&at!==void 0&&!o.hasOwnProperty(Fe)&&Yf(e,n,Fe,void 0,o,at);for(mt in o)at=o[mt],ct=a[mt],!o.hasOwnProperty(mt)||at===ct||at===void 0&&ct===void 0||Yf(e,n,mt,at,o,ct);return}}for(var Y in a)at=a[Y],a.hasOwnProperty(Y)&&at!=null&&!o.hasOwnProperty(Y)&&Ie(e,n,Y,null,o,at);for(_t in o)at=o[_t],ct=a[_t],!o.hasOwnProperty(_t)||at===ct||at==null&&ct==null||Ie(e,n,_t,at,o,ct)}function Sv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,A=u.duration;if(h&&A&&Sv(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],et=H.startTime;if(et>A)break;var mt=H.transferSize,_t=H.initiatorType;mt&&Sv(_t)&&(H=H.responseEnd,S+=mt*(H<A?1:(A-et)/(H-et)))}if(--o,n+=8*(h+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zf=null,Kf=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function Mv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ev(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function Ky(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var bv=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(e){return Tv.resolve(null).then(e).catch($y)}:bv;function $y(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Av(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ds(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")To(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,To(a);for(var h=a.firstChild;h;){var S=h.nextSibling,A=h.nodeName;h[$a]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&To(e.ownerDocument.body);a=u}while(a);ds(n)}function Rv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function $f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[$a])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function eS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function Cv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function th(e){return e.data==="$?"||e.data==="$~"}function eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var nh=null;function wv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Dv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Uv(e,n,a){switch(n=tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);C(e)}var hi=new Map,Nv=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=K.d;K.d={f:iS,r:aS,D:rS,C:sS,L:oS,m:lS,X:uS,S:cS,M:fS};function iS(){var e=aa.f(),n=Wl();return e||n}function aS(e){var n=rt(e);n!==null&&n.tag===5&&n.type==="form"?Zm(n):aa.r(e)}var us=typeof document>"u"?null:document;function Lv(e,n,a){var o=us;if(o&&typeof n=="string"&&n){var u=xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Nv.has(u)||(Nv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),St(n),o.head.appendChild(n)))}}function rS(e){aa.D(e),Lv("dns-prefetch",e,null)}function sS(e,n){aa.C(e,n),Lv("preconnect",e,n)}function oS(e,n,a){aa.L(e,n,a);var o=us;if(o&&e&&n){var u='link[rel="preload"][as="'+xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xe(a.imageSizes)+'"]')):u+='[href="'+xe(e)+'"]';var h=u;switch(n){case"style":h=fs(e);break;case"script":h=hs(e)}hi.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(h))||n==="script"&&o.querySelector(Ro(h))||(n=o.createElement("link"),An(n,"link",e),St(n),o.head.appendChild(n)))}}function lS(e,n){aa.m(e,n);var a=us;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xe(o)+'"][href="'+xe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=hs(e)}if(!hi.has(h)&&(e=g({rel:"modulepreload",href:e},n),hi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(h)))return}o=a.createElement("link"),An(o,"link",e),St(o),a.head.appendChild(o)}}}function cS(e,n,a){aa.S(e,n,a);var o=us;if(o&&e){var u=Z(o).hoistableStyles,h=fs(e);n=n||"default";var S=u.get(h);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Ao(h)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(h))&&ih(e,a);var H=S=o.createElement("link");St(H),An(H,"link",e),H._p=new Promise(function(et,mt){H.onload=et,H.onerror=mt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,nc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(h,S)}}}function uS(e,n){aa.X(e,n);var a=us;if(a&&e){var o=Z(a).hoistableScripts,u=hs(e),h=o.get(u);h||(h=a.querySelector(Ro(u)),h||(e=g({src:e,async:!0},n),(n=hi.get(u))&&ah(e,n),h=a.createElement("script"),St(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function fS(e,n){aa.M(e,n);var a=us;if(a&&e){var o=Z(a).hoistableScripts,u=hs(e),h=o.get(u);h||(h=a.querySelector(Ro(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=hi.get(u))&&ah(e,n),h=a.createElement("script"),St(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Ov(e,n,a,o){var u=(u=nt.current)?ec(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fs(a.href),a=Z(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=fs(a.href);var h=Z(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(Ao(e)))&&!h._p&&(S.instance=h,S.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),h||hS(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=Z(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function fs(e){return'href="'+xe(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function Pv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function hS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),St(n),e.head.appendChild(n))}function hs(e){return'[src="'+xe(e)+'"]'}function Ro(e){return"script[async]"+e}function zv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xe(a.href)+'"]');if(o)return n.instance=o,St(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),An(o,"style",u),nc(o,a.precedence,e),n.instance=o;case"stylesheet":u=fs(a.href);var h=e.querySelector(Ao(u));if(h)return n.state.loading|=4,n.instance=h,St(h),h;o=Pv(a),(u=hi.get(u))&&ih(o,u),h=(e.ownerDocument||e).createElement("link"),St(h);var S=h;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),An(h,"link",o),n.state.loading|=4,nc(h,a.precedence,e),n.instance=h;case"script":return h=hs(a.src),(u=e.querySelector(Ro(h)))?(n.instance=u,St(u),u):(o=a,(u=hi.get(h))&&(o=g({},a),ah(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nc(o,a.precedence,e));return n.instance}function nc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ah(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function Bv(e,n,a){if(ic===null){var o=new Map,u=ic=new Map;u.set(a,o)}else u=ic,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[$a]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(h):o.set(S,[h])}}return o}function Iv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function dS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function pS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=fs(o.href),h=n.querySelector(Ao(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ac.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,St(h);return}h=n.ownerDocument||n,o=Pv(o),(u=hi.get(u))&&ih(o,u),h=h.createElement("link"),St(h);var S=h;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),An(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ac.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var rh=0;function mS(e,n){return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&rh===0&&(rh=62500*Zy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>rh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rc=null;function sc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,n.forEach(gS,e),rc=null,ac.call(e))}function gS(e,n){if(!(n.state.loading&4)){var a=rc.get(e);if(a)var o=a.get(null);else{a=new Map,rc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function vS(e,n,a,o,u,h,S,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Hv(e,n,a,o,u,h,S,A,H,et,mt,_t){return e=new vS(e,n,a,S,H,et,mt,_t,A),n=1,h===!0&&(n|=24),h=Zn(3,null,null,n),e.current=h,h.stateNode=e,n=Bu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Gu(h),e}function Gv(e){return e?(e=kr,e):kr}function Vv(e,n,a,o,u,h){u=Gv(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ba(e,o,n),a!==null&&(Gn(a,e,n),ro(a,e,n))}function kv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function sh(e,n){kv(e,n),(e=e.alternate)&&kv(e,n)}function Xv(e){if(e.tag===13||e.tag===31){var n=ar(e,67108864);n!==null&&Gn(n,e,67108864),sh(e,67108864)}}function jv(e){if(e.tag===13||e.tag===31){var n=ti();n=Lr(n);var a=ar(e,n);a!==null&&Gn(a,e,n),sh(e,n)}}var oc=!0;function _S(e,n,a,o){var u=B.T;B.T=null;var h=K.p;try{K.p=2,oh(e,n,a,o)}finally{K.p=h,B.T=u}}function xS(e,n,a,o){var u=B.T;B.T=null;var h=K.p;try{K.p=8,oh(e,n,a,o)}finally{K.p=h,B.T=u}}function oh(e,n,a,o){if(oc){var u=lh(o);if(u===null)qf(e,n,o,lc,a),qv(e,o);else if(SS(u,e,n,a,o))o.stopPropagation();else if(qv(e,o),n&4&&-1<yS.indexOf(e)){for(;u!==null;){var h=rt(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=bt(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-Bt(S);A.entanglements[1]|=H,S&=~H}Ui(h),(Ue&6)===0&&(Xl=T()+500,Mo(0))}}break;case 31:case 13:A=ar(h,2),A!==null&&Gn(A,h,2),Wl(),sh(h,2)}if(h=lh(o),h===null&&qf(e,n,o,lc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else qf(e,n,o,null,a)}}function lh(e){return e=cu(e),ch(e)}var lc=null;function ch(e){if(lc=null,e=W(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function Wv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case gt:return 2;case Et:return 8;case dt:case Kt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var uh=!1,Pa=null,za=null,Ba=null,wo=new Map,Do=new Map,Ia=[],yS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qv(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=rt(n),n!==null&&Xv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function SS(e,n,a,o,u){switch(n){case"focusin":return Pa=Uo(Pa,e,n,a,o,u),!0;case"dragenter":return za=Uo(za,e,n,a,o,u),!0;case"mouseover":return Ba=Uo(Ba,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return wo.set(h,Uo(wo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Do.set(h,Uo(Do.get(h)||null,e,n,a,o,u)),!0}return!1}function Yv(e){var n=W(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Vs(e.priority,function(){jv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Vs(e.priority,function(){jv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=lh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);lu=o,a.target.dispatchEvent(o),lu=null}else return n=rt(a),n!==null&&Xv(n),e.blockedOn=a,!1;n.shift()}return!0}function Zv(e,n,a){cc(e)&&a.delete(n)}function MS(){uh=!1,Pa!==null&&cc(Pa)&&(Pa=null),za!==null&&cc(za)&&(za=null),Ba!==null&&cc(Ba)&&(Ba=null),wo.forEach(Zv),Do.forEach(Zv)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,uh||(uh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,MS)))}var fc=null;function Kv(e){fc!==e&&(fc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ch(o||a)===null)continue;break}var h=rt(a);h!==null&&(e.splice(n,3),n-=3,lf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ds(e){function n(H){return uc(H,e)}Pa!==null&&uc(Pa,e),za!==null&&uc(za,e),Ba!==null&&uc(Ba,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<Ia.length;a++){var o=Ia[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)Yv(a),a.blockedOn===null&&Ia.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[Sn]||null;if(typeof h=="function")S||Kv(a);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[Sn]||null)A=S.formAction;else if(ch(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Kv(a)}}}function Qv(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function fh(e){this._internalRoot=e}hc.prototype.render=fh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ti();Vv(a,o,e,n,null,null)},hc.prototype.unmount=fh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vv(e.current,2,null,e,null,null),Wl(),n[ga]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ja();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,e),a===0&&Yv(e)}};var Jv=t.version;if(Jv!=="19.2.4")throw Error(r(527,Jv,"19.2.4"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var ES={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{At=dc.inject(ES),Ut=dc}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=rg,h=sg,S=og;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Hv(e,1,!1,null,null,a,o,null,u,h,S,Qv),e[ga]=n.current,Wf(e),new fh(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=rg,S=sg,A=og,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Hv(e,1,!0,n,a??null,o,u,H,h,S,A,Qv),n.context=Gv(null),a=n.current,o=ti(),o=Lr(o),u=Ea(o),u.callback=null,ba(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Ui(n),e[ga]=n.current,Wf(e),new hc(n)},Lo.version="19.2.4",Lo}var l_;function LS(){if(l_)return ph.exports;l_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ph.exports=NS(),ph.exports}var OS=LS();var c_="popstate";function u_(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function PS(s={}){function t(r,l){let c=l.state?.masked,{pathname:f,search:d,hash:m}=c||r.location;return id("",{pathname:f,search:d,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:Xo(l)}return BS(t,i,null,s)}function Ke(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ii(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zS(){return Math.random().toString(36).substring(2,10)}function f_(s,t){return{usr:s.state,key:s.key,idx:t,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function id(s,t,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?zs(t):t,state:i,key:t&&t.key||r||zS(),unstable_mask:l}}function Xo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function zs(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function BS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,d="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){d="POP";let y=v(),_=y==null?null:y-p;p=y,m&&m({action:d,location:b.location,delta:_})}function x(y,_){d="PUSH";let L=u_(y)?y:id(b.location,y,_);p=v()+1;let N=f_(L,p),U=b.createHref(L.unstable_mask||L);try{f.pushState(N,"",U)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(U)}c&&m&&m({action:d,location:b.location,delta:1})}function M(y,_){d="REPLACE";let L=u_(y)?y:id(b.location,y,_);p=v();let N=f_(L,p),U=b.createHref(L.unstable_mask||L);f.replaceState(N,"",U),c&&m&&m({action:d,location:b.location,delta:0})}function E(y){return IS(y)}let b={get action(){return d},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(c_,g),m=y,()=>{l.removeEventListener(c_,g),m=null}},createHref(y){return t(l,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(y){return f.go(y)}};return b}function IS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ke(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Xo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function S0(s,t,i="/"){return FS(s,t,i,!1)}function FS(s,t,i,r){let l=typeof t=="string"?zs(t):t,c=da(l.pathname||"/",i);if(c==null)return null;let f=M0(s);HS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=QS(c);d=ZS(f[m],p,r)}return d}function M0(s,t=[],i=[],r="",l=!1){let c=(f,d,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;Ke(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=zi([r,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(Ke(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),M0(f.children,t,x,g,m)),!(f.path==null&&!f.index)&&t.push({path:g,score:qS(g,f.index),routesMeta:x})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of E0(f.path))c(f,d,!0,m)}),t}function E0(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=E0(r.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function HS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:YS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var GS=/^:[\w-]+$/,VS=3,kS=2,XS=1,jS=10,WS=-2,h_=s=>s==="*";function qS(s,t){let i=s.split("/"),r=i.length;return i.some(h_)&&(r+=WS),t&&(r+=kS),i.filter(l=>!h_(l)).reduce((l,c)=>l+(GS.test(c)?VS:c===""?XS:jS),r)}function YS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function ZS(s,t,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,v=c==="/"?t:t.slice(c.length)||"/",g=Wc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=Wc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:zi([c,g.pathname]),pathnameBase:eM(zi([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=zi([c,g.pathnameBase]))}return f}function Wc(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=KS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let E=d[x]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[x];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function KS(s,t=!1,i=!0){Ii(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m,p,v)=>{if(r.push({paramName:d,isOptional:m!=null}),m){let g=v.charAt(p+f.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function QS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ii(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function da(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var JS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function $S(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?zs(s):s,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=d_(i.substring(1),"/"):c=d_(i,t)):c=t,{pathname:c,search:nM(r),hash:iM(l)}}function d_(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function _h(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tM(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function b0(s){let t=tM(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Zd(s,t,i,r=!1){let l;typeof s=="string"?l=zs(s):(l={...s},Ke(!l.pathname||!l.pathname.includes("?"),_h("?","pathname","search",l)),Ke(!l.pathname||!l.pathname.includes("#"),_h("#","pathname","hash",l)),Ke(!l.search||!l.search.includes("#"),_h("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let g=t.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}d=g>=0?t[g]:"/"}let m=$S(l,d),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var zi=s=>s.join("/").replace(/\/\/+/g,"/"),eM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),nM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,iM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,aM=class{constructor(s,t,i,r=!1){this.status=s,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function rM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function sM(s){return s.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var T0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function A0(s,t){let i=s;if(typeof i!="string"||!JS.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(T0)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),d=da(f.pathname,t);f.origin===c.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{Ii(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var R0=["POST","PUT","PATCH","DELETE"];new Set(R0);var oM=["GET",...R0];new Set(oM);var Bs=ft.createContext(null);Bs.displayName="DataRouter";var $c=ft.createContext(null);$c.displayName="DataRouterState";var lM=ft.createContext(!1),C0=ft.createContext({isTransitioning:!1});C0.displayName="ViewTransition";var cM=ft.createContext(new Map);cM.displayName="Fetchers";var uM=ft.createContext(null);uM.displayName="Await";var mi=ft.createContext(null);mi.displayName="Navigation";var Ko=ft.createContext(null);Ko.displayName="Location";var pa=ft.createContext({outlet:null,matches:[],isDataRoute:!1});pa.displayName="Route";var Kd=ft.createContext(null);Kd.displayName="RouteError";var w0="REACT_ROUTER_ERROR",fM="REDIRECT",hM="ROUTE_ERROR_RESPONSE";function dM(s){if(s.startsWith(`${w0}:${fM}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function pM(s){if(s.startsWith(`${w0}:${hM}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new aM(t.status,t.statusText,t.data)}catch{}}function mM(s,{relative:t}={}){Ke(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ft.useContext(mi),{hash:l,pathname:c,search:f}=Jo(s,{relative:t}),d=c;return i!=="/"&&(d=c==="/"?i:zi([i,c])),r.createHref({pathname:d,search:f,hash:l})}function Qo(){return ft.useContext(Ko)!=null}function ma(){return Ke(Qo(),"useLocation() may be used only in the context of a <Router> component."),ft.useContext(Ko).location}var D0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function U0(s){ft.useContext(mi).static||ft.useLayoutEffect(s)}function tu(){let{isDataRoute:s}=ft.useContext(pa);return s?CM():gM()}function gM(){Ke(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=ft.useContext(Bs),{basename:t,navigator:i}=ft.useContext(mi),{matches:r}=ft.useContext(pa),{pathname:l}=ma(),c=JSON.stringify(b0(r)),f=ft.useRef(!1);return U0(()=>{f.current=!0}),ft.useCallback((m,p={})=>{if(Ii(f.current,D0),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=Zd(m,JSON.parse(c),l,p.relative==="path");s==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:zi([t,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[t,i,c,l,s])}ft.createContext(null);function Jo(s,{relative:t}={}){let{matches:i}=ft.useContext(pa),{pathname:r}=ma(),l=JSON.stringify(b0(i));return ft.useMemo(()=>Zd(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function vM(s,t){return N0(s,t)}function N0(s,t,i){Ke(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=ft.useContext(mi),{matches:l}=ft.useContext(pa),c=l[l.length-1],f=c?c.params:{},d=c?c.pathname:"/",m=c?c.pathnameBase:"/",p=c&&c.route;{let y=p&&p.path||"";O0(d,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let v=ma(),g;if(t){let y=typeof t=="string"?zs(t):t;Ke(m==="/"||y.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${y.pathname}" was given in the \`location\` prop.`),g=y}else g=v;let x=g.pathname||"/",M=x;if(m!=="/"){let y=m.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=S0(s,{pathname:M});Ii(p||E!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Ii(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=MM(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:zi([m,r.encodeLocation?r.encodeLocation(y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?m:zi([m,r.encodeLocation?r.encodeLocation(y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),l,i);return t&&b?ft.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...g},navigationType:"POP"}},b):b}function _M(){let s=RM(),t=rM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ft.createElement(ft.Fragment,null,ft.createElement("p",null,"💿 Hey developer 👋"),ft.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ft.createElement("code",{style:c},"ErrorBoundary")," or"," ",ft.createElement("code",{style:c},"errorElement")," prop on your route.")),ft.createElement(ft.Fragment,null,ft.createElement("h2",null,"Unexpected Application Error!"),ft.createElement("h3",{style:{fontStyle:"italic"}},t),i?ft.createElement("pre",{style:l},i):null,f)}var xM=ft.createElement(_M,null),L0=class extends ft.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=pM(s.digest);i&&(s=i)}let t=s!==void 0?ft.createElement(pa.Provider,{value:this.props.routeContext},ft.createElement(Kd.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?ft.createElement(yM,{error:s},t):t}};L0.contextType=lM;var xh=new WeakMap;function yM({children:s,error:t}){let{basename:i}=ft.useContext(mi);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=dM(t.digest);if(r){let l=xh.get(t);if(l)throw l;let c=A0(r.location,i);if(T0&&!xh.get(t))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw xh.set(t,f),f}return ft.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function SM({routeContext:s,match:t,children:i}){let r=ft.useContext(Bs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ft.createElement(pa.Provider,{value:s},i)}function MM(s,t=[],i){let r=i?.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,c=r?.errors;if(c!=null){let v=l.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);Ke(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let f=!1,d=-1;if(i&&r){f=r.renderFallback;for(let v=0;v<l.length;v++){let g=l[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=v),g.route.id){let{loaderData:x,errors:M}=r,E=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||E){i.isStatic&&(f=!0),d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}}let m=i?.onError,p=r&&m?(v,g)=>{m(v,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:sM(r.matches),errorInfo:g})}:void 0;return l.reduceRight((v,g,x)=>{let M,E=!1,b=null,y=null;r&&(M=c&&g.route.id?c[g.route.id]:void 0,b=g.route.errorElement||xM,f&&(d<0&&x===0?(O0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):d===x&&(E=!0,y=g.route.hydrateFallbackElement||null)));let _=t.concat(l.slice(0,x+1)),L=()=>{let N;return M?N=b:E?N=y:g.route.Component?N=ft.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=v,ft.createElement(SM,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:r!=null},children:N})};return r&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?ft.createElement(L0,{location:r.location,revalidation:r.revalidation,component:b,error:M,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):L()},null)}function Qd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function EM(s){let t=ft.useContext(Bs);return Ke(t,Qd(s)),t}function bM(s){let t=ft.useContext($c);return Ke(t,Qd(s)),t}function TM(s){let t=ft.useContext(pa);return Ke(t,Qd(s)),t}function Jd(s){let t=TM(s),i=t.matches[t.matches.length-1];return Ke(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function AM(){return Jd("useRouteId")}function RM(){let s=ft.useContext(Kd),t=bM("useRouteError"),i=Jd("useRouteError");return s!==void 0?s:t.errors?.[i]}function CM(){let{router:s}=EM("useNavigate"),t=Jd("useNavigate"),i=ft.useRef(!1);return U0(()=>{i.current=!0}),ft.useCallback(async(l,c={})=>{Ii(i.current,D0),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var p_={};function O0(s,t,i){!t&&!p_[s]&&(p_[s]=!0,Ii(!1,i))}ft.memo(wM);function wM({routes:s,future:t,state:i,isStatic:r,onError:l}){return N0(s,void 0,{state:i,isStatic:r,onError:l})}function kn(s){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DM({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Ke(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),m=ft.useMemo(()=>({basename:d,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[d,l,c,f]);typeof i=="string"&&(i=zs(i));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:M="default",unstable_mask:E}=i,b=ft.useMemo(()=>{let y=da(p,d);return y==null?null:{location:{pathname:y,search:v,hash:g,state:x,key:M,unstable_mask:E},navigationType:r}},[d,p,v,g,x,M,r,E]);return Ii(b!=null,`<Router basename="${d}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:ft.createElement(mi.Provider,{value:m},ft.createElement(Ko.Provider,{children:t,value:b}))}function UM({children:s,location:t}){return vM(ad(s),t)}function ad(s,t=[]){let i=[];return ft.Children.forEach(s,(r,l)=>{if(!ft.isValidElement(r))return;let c=[...t,l];if(r.type===ft.Fragment){i.push.apply(i,ad(r.props.children,c));return}Ke(r.type===kn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=ad(r.props.children,c)),i.push(f)}),i}var Fc="get",Hc="application/x-www-form-urlencoded";function eu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function NM(s){return eu(s)&&s.tagName.toLowerCase()==="button"}function LM(s){return eu(s)&&s.tagName.toLowerCase()==="form"}function OM(s){return eu(s)&&s.tagName.toLowerCase()==="input"}function PM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function zM(s,t){return s.button===0&&(!t||t==="_self")&&!PM(s)}var pc=null;function BM(){if(pc===null)try{new FormData(document.createElement("form"),0),pc=!1}catch{pc=!0}return pc}var IM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yh(s){return s!=null&&!IM.has(s)?(Ii(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hc}"`),null):s}function FM(s,t){let i,r,l,c,f;if(LM(s)){let d=s.getAttribute("action");r=d?da(d,t):null,i=s.getAttribute("method")||Fc,l=yh(s.getAttribute("enctype"))||Hc,c=new FormData(s)}else if(NM(s)||OM(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?da(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Fc,l=yh(s.getAttribute("formenctype"))||yh(d.getAttribute("enctype"))||Hc,c=new FormData(d,s),!BM()){let{name:p,type:v,value:g}=s;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(eu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Fc,r=null,l=Hc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $d(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function HM(s,t,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&da(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function GM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function kM(s,t,i){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await GM(c,i);return f.links?f.links():[]}return[]}));return qM(r.flat(1).filter(VM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function m_(s,t,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?t.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function XM(s,t,{includeHydrateFallback:i}={}){return jM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function jM(s){return[...new Set(s)]}function WM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function qM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(WM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function P0(){let s=ft.useContext(Bs);return $d(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function YM(){let s=ft.useContext($c);return $d(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var tp=ft.createContext(void 0);tp.displayName="FrameworkContext";function z0(){let s=ft.useContext(tp);return $d(s,"You must render this element inside a <HydratedRouter> element"),s}function ZM(s,t){let i=ft.useContext(tp),[r,l]=ft.useState(!1),[c,f]=ft.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=t,x=ft.useRef(null);ft.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let b=_=>{_.forEach(L=>{f(L.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),ft.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:Oo(d,M),onBlur:Oo(m,E),onMouseEnter:Oo(p,M),onMouseLeave:Oo(v,E),onTouchStart:Oo(g,M)}]:[!1,x,{}]}function Oo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function KM({page:s,...t}){let{router:i}=P0(),r=ft.useMemo(()=>S0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ft.createElement(JM,{page:s,matches:r,...t}):null}function QM(s){let{manifest:t,routeModules:i}=z0(),[r,l]=ft.useState([]);return ft.useEffect(()=>{let c=!1;return kM(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),r}function JM({page:s,matches:t,...i}){let r=ma(),{future:l,manifest:c,routeModules:f}=z0(),{basename:d}=P0(),{loaderData:m,matches:p}=YM(),v=ft.useMemo(()=>m_(s,t,p,c,r,"data"),[s,t,p,c,r]),g=ft.useMemo(()=>m_(s,t,p,c,r,"assets"),[s,t,p,c,r]),x=ft.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,y=!1;if(t.forEach(L=>{let N=c.routes[L.route.id];!N||!N.hasLoader||(!v.some(U=>U.route.id===L.route.id)&&L.route.id in m&&f[L.route.id]?.shouldRevalidate||N.hasClientLoader?y=!0:b.add(L.route.id))}),b.size===0)return[];let _=HM(s,d,l.unstable_trailingSlashAwareDataRequests,"data");return y&&b.size>0&&_.searchParams.set("_routes",t.filter(L=>b.has(L.route.id)).map(L=>L.route.id).join(",")),[_.pathname+_.search]},[d,l.unstable_trailingSlashAwareDataRequests,m,r,c,v,t,s,f]),M=ft.useMemo(()=>XM(g,c),[g,c]),E=QM(g);return ft.createElement(ft.Fragment,null,x.map(b=>ft.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),M.map(b=>ft.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),E.map(({key:b,link:y})=>ft.createElement("link",{key:b,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function $M(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var tE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tE&&(window.__reactRouterVersion="7.13.1")}catch{}function eE({basename:s,children:t,unstable_useTransitions:i,window:r}){let l=ft.useRef();l.current==null&&(l.current=PS({window:r,v5Compat:!0}));let c=l.current,[f,d]=ft.useState({action:c.action,location:c.location}),m=ft.useCallback(p=>{i===!1?d(p):ft.startTransition(()=>d(p))},[i]);return ft.useLayoutEffect(()=>c.listen(m),[c,m]),ft.createElement(DM,{basename:s,children:t,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var B0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I0=ft.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,unstable_mask:d,state:m,target:p,to:v,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:M,...E},b){let{basename:y,navigator:_,unstable_useTransitions:L}=ft.useContext(mi),N=typeof v=="string"&&B0.test(v),U=A0(v,y);v=U.to;let I=mM(v,{relative:l}),F=ma(),z=null;if(d){let lt=Zd(d,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);y!=="/"&&(lt.pathname=lt.pathname==="/"?y:zi([y,lt.pathname])),z=_.createHref(lt)}let[j,w,D]=ZM(r,E),V=rE(v,{replace:f,unstable_mask:d,state:m,target:p,preventScrollReset:g,relative:l,viewTransition:x,unstable_defaultShouldRevalidate:M,unstable_useTransitions:L});function J(lt){t&&t(lt),lt.defaultPrevented||V(lt)}let ot=!(U.isExternal||c),pt=ft.createElement("a",{...E,...D,href:(ot?z:void 0)||U.absoluteURL||I,onClick:ot?J:t,ref:$M(b,w),target:p,"data-discover":!N&&i==="render"?"true":void 0});return j&&!N?ft.createElement(ft.Fragment,null,pt,ft.createElement(KM,{page:I})):pt});I0.displayName="Link";var nE=ft.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},v){let g=Jo(f,{relative:p.relative}),x=ma(),M=ft.useContext($c),{navigator:E,basename:b}=ft.useContext(mi),y=M!=null&&uE(g)&&d===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,L=x.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&b&&(N=da(N,b)||N);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=L===_||!l&&L.startsWith(_)&&L.charAt(U)==="/",F=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),z={isActive:I,isPending:F,isTransitioning:y},j=I?t:void 0,w;typeof r=="function"?w=r(z):w=[r,I?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(z):c;return ft.createElement(I0,{...p,"aria-current":j,className:w,ref:v,style:D,to:f,viewTransition:d},typeof m=="function"?m(z):m)});nE.displayName="NavLink";var iE=ft.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Fc,action:d,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},E)=>{let{unstable_useTransitions:b}=ft.useContext(mi),y=lE(),_=cE(d,{relative:p}),L=f.toLowerCase()==="get"?"get":"post",N=typeof d=="string"&&B0.test(d),U=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let F=I.nativeEvent.submitter,z=F?.getAttribute("formmethod")||f,j=()=>y(F||I.currentTarget,{fetcherKey:t,method:z,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});b&&i!==!1?ft.startTransition(()=>j()):j()};return ft.createElement("form",{ref:E,method:L,action:_,onSubmit:r?m:U,...M,"data-discover":!N&&s==="render"?"true":void 0})});iE.displayName="Form";function aE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F0(s){let t=ft.useContext(Bs);return Ke(t,aE(s)),t}function rE(s,{target:t,replace:i,unstable_mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:m,unstable_useTransitions:p}={}){let v=tu(),g=ma(),x=Jo(s,{relative:f});return ft.useCallback(M=>{if(zM(M,t)){M.preventDefault();let E=i!==void 0?i:Xo(g)===Xo(x),b=()=>v(s,{replace:E,unstable_mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:m});p?ft.startTransition(()=>b()):b()}},[g,v,x,i,r,l,t,s,c,f,d,m,p])}var sE=0,oE=()=>`__${String(++sE)}__`;function lE(){let{router:s}=F0("useSubmit"),{basename:t}=ft.useContext(mi),i=AM(),r=s.fetch,l=s.navigate;return ft.useCallback(async(c,f={})=>{let{action:d,method:m,encType:p,formData:v,body:g}=FM(c,t);if(f.navigate===!1){let x=f.fetcherKey||oE();await r(x,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,t,i])}function cE(s,{relative:t}={}){let{basename:i}=ft.useContext(mi),r=ft.useContext(pa);Ke(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Jo(s||".",{relative:t})},f=ma();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(v=>v==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:zi([i,c.pathname])),Xo(c)}function uE(s,{relative:t}={}){let i=ft.useContext(C0);Ke(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=F0("useViewTransitionState"),l=Jo(s,{relative:t});if(!i.isTransitioning)return!1;let c=da(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=da(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Wc(l.pathname,f)!=null||Wc(l.pathname,c)!=null}const ep="/gullystat/assets/logo-B69as7Ir.png",g_=[{id:"live",emoji:"🏏",tag:"Core",title:"Live Ball-by-Ball Scoring",desc:"Log every delivery in seconds. Real-time run rates, required rates, partnership tracker, wagonwheel, and full fall-of-wickets — all updating live as you play.",bullets:["Ball-by-ball entry","Live RRR calculator","Partnership tracker","Fall of wickets log"],accent:"#f0c840"},{id:"formats",emoji:"🎮",tag:"Game Modes",title:"6 Game Formats",desc:"Hundrum (100-ball), Overum (custom overs), Solo challenges, Team vs Team, Ghost Mode battles, and tournament brackets. Every variant your mohalla plays.",bullets:["Hundrum · 100-ball format","Overum · set your own overs","Solo challenge mode","Team vs Team + tournaments"],accent:"#60c8f0"},{id:"ai",emoji:"🤖",tag:"AI",title:"AI Match Reports",desc:"After every match GullyStat writes a full broadcast-style report — star performers, momentum shifts, turning points, and man of the match. Share it instantly.",bullets:["Auto-generated after every match","Star performer highlights","Momentum shift analysis","One-tap share as image"],accent:"#a78bfa"},{id:"stats",emoji:"📊",tag:"Analytics",title:"Deep Player Stats",desc:"Career averages, strike rates, economy, milestones, and form graphs — tracked separately per format. Watch your journey from gully rookie to mohalla legend.",bullets:["Batting + bowling averages","Format-split career stats","Milestone tracking (50s, 100s)","Form graph over last 10 matches"],accent:"#34d399"},{id:"ghost",emoji:"👻",tag:"Ghost Mode",title:"Ghost Profile",desc:'Play in the shadows. Build a reputation without revealing your identity. Appear on leaderboards as "???" — then reveal yourself when the time is right.',bullets:["Anonymous identity",'Leaderboard slot shows "???"',"Reveal yourself anytime","Build the mystery"],accent:"#f87171"},{id:"social",emoji:"🏆",tag:"Social",title:"Leaderboards & H2H",desc:"Mohalla-level leaderboards, head-to-head records, rivalry scores. Know exactly who you own and who owns you — with receipts.",bullets:["Mohalla leaderboards","Head-to-head records","Rivalry tracking","Season & all-time rankings"],accent:"#fbbf24"}];function Sh({topColor:s,bottomColor:t,speed:i="7s"}){const m=()=>R.jsxs("svg",{viewBox:"0 0 1440 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",className:"bw-svg",children:[R.jsx("rect",{x:"-1",y:72,width:1442,height:29,fill:t}),Array.from({length:12},(p,v)=>R.jsx("circle",{cx:v*120+60,cy:72,r:60,fill:t},v))]});return R.jsx("div",{className:"bw-wrap",style:{background:s},children:R.jsxs("div",{className:"bw-track",style:{animationDuration:i},children:[R.jsx(m,{}),R.jsx(m,{})]})})}const fE=["4","W","1","6","1","2"],hE=[{name:"Rahul S",star:!0,r:67,b:44,sr:152},{name:"Suresh K",star:!1,r:38,b:22,sr:172}],dE=[{v:"9",l:"Fours",gold:!0},{v:"5",l:"Sixes",gold:!0},{v:"8",l:"Wkts",red:!0},{v:"48",l:"P'ship"}],pE=[{v:"9.3",l:"Run Rate"},{v:"30.7",l:"Req Rate",red:!0},{v:"152",l:"Str Rate"}],mE=[{ball:"6",type:"s",text:"18.4 — Rahul smashes over long-on! Massive six!"},{ball:"W",type:"w",text:"17.2 — Caught at mid-off! Arjun out for 28"},{ball:"4",type:"f",text:"17.1 — Driven through covers, races away!"}],gE=[{l:"P'ship",v:"48 runs"},{l:"Bndrys",v:"9×4  5×6"},{l:"Econ",v:"Vikram 6.0"}],vE=s=>s==="W"?"pb pb-w":s==="6"?"pb pb-s":s==="4"?"pb pb-f":"pb pb-n",_E=s=>s==="s"?"ct ct-s":s==="w"?"ct ct-w":"ct ct-f";function xE(){return R.jsx("div",{className:"phone",children:R.jsxs("div",{className:"phone-shell",children:[R.jsx("div",{className:"ph-btn ph-vol1"}),R.jsx("div",{className:"ph-btn ph-vol2"}),R.jsx("div",{className:"ph-btn ph-pwr"}),R.jsxs("div",{className:"phone-screen",children:[R.jsx("div",{className:"ph-island"}),R.jsxs("div",{className:"ph-status",children:[R.jsx("span",{className:"ph-time",children:"9:41"}),R.jsxs("div",{className:"ph-icons",children:[R.jsxs("svg",{width:"11",height:"8",viewBox:"0 0 12 8",fill:"none",children:[R.jsx("rect",{x:"0",y:"4",width:"2",height:"4",rx:"0.5",fill:"rgba(242,237,228,0.55)"}),R.jsx("rect",{x:"3",y:"2.5",width:"2",height:"5.5",rx:"0.5",fill:"rgba(242,237,228,0.65)"}),R.jsx("rect",{x:"6",y:"1",width:"2",height:"7",rx:"0.5",fill:"rgba(242,237,228,0.80)"}),R.jsx("rect",{x:"9",y:"0",width:"2",height:"8",rx:"0.5",fill:"rgba(242,237,228,1)"})]}),R.jsxs("div",{className:"ph-batt",children:[R.jsx("div",{className:"ph-batt-fill"}),R.jsx("div",{className:"ph-batt-tip"})]})]})]}),R.jsxs("div",{className:"ph-header",children:[R.jsxs("div",{className:"ph-header-left",children:[R.jsx("span",{className:"ph-appname",children:"GullyStat"}),R.jsx("span",{className:"ph-appsub",children:"Live Match"})]}),R.jsxs("div",{className:"ph-live-pill",children:[R.jsx("span",{className:"ph-live-dot"}),R.jsx("span",{children:"LIVE"})]})]}),R.jsxs("div",{className:"ph-block",children:[R.jsx("div",{className:"ph-lbl",children:"📋 Scorecard · Overum 20"}),R.jsxs("div",{className:"ph-teams",children:[R.jsxs("div",{className:"ph-team",children:[R.jsx("span",{className:"ph-tname",children:"Team A"}),R.jsxs("span",{className:"ph-runs",children:["187",R.jsx("em",{children:"/6"})]}),R.jsx("span",{className:"ph-ov",children:"20.0 ov · CRR 7.7"})]}),R.jsx("div",{className:"ph-vs-col",children:R.jsx("span",{className:"ph-vs",children:"VS"})}),R.jsxs("div",{className:"ph-team ph-team-r",children:[R.jsx("span",{className:"ph-tname",children:"Team B"}),R.jsxs("span",{className:"ph-runs ph-batting",children:["142",R.jsx("em",{children:"/8"})]}),R.jsx("span",{className:"ph-ov",children:"18.3 ov · batting"})]})]}),R.jsx("div",{className:"ph-chase",children:"⚡ Need 46 off 9 · RRR 30.67"})]}),R.jsxs("div",{className:"ph-row2",children:[R.jsxs("div",{className:"ph-block ph-batting-block",children:[R.jsx("div",{className:"ph-lbl",children:"🏏 Batting"}),hE.map((s,t)=>R.jsxs("div",{className:"ph-batter",children:[R.jsxs("span",{className:"ph-bname",children:[s.name,s.star&&R.jsx("span",{className:"ph-star",children:" ★"})]}),R.jsxs("div",{className:"ph-bstats",children:[R.jsx("span",{className:"ph-brun",children:s.r}),R.jsxs("span",{className:"ph-bball",children:["(",s.b,")"]}),R.jsxs("span",{className:"ph-bsr",children:["SR ",s.sr]})]})]},t)),R.jsx("div",{className:"ph-divider"}),R.jsxs("div",{className:"ph-batter",children:[R.jsxs("span",{className:"ph-bname ph-bowler",children:["Vikram P ",R.jsx("span",{className:"ph-bowl-tag",children:"bowl"})]}),R.jsxs("div",{className:"ph-bstats",children:[R.jsx("span",{className:"ph-brun",children:"2"}),R.jsx("span",{className:"ph-bball",children:"/18 (3)"})]})]})]}),R.jsxs("div",{className:"ph-right-col",children:[R.jsxs("div",{className:"ph-block ph-balls-block",children:[R.jsx("div",{className:"ph-lbl",children:"🎯 Last 6"}),R.jsx("div",{className:"ph-balls",children:fE.map((s,t)=>R.jsx("span",{className:vE(s),children:s},t))})]}),R.jsxs("div",{className:"ph-block ph-grid-block",children:[R.jsx("div",{className:"ph-lbl",children:"📊 Stats"}),R.jsx("div",{className:"ph-g4",children:dE.map((s,t)=>R.jsxs("div",{className:"ph-gs",children:[R.jsx("span",{className:"ph-gv"+(s.gold?" ph-gold":s.red?" ph-red":""),children:s.v}),R.jsx("span",{className:"ph-gl",children:s.l})]},t))}),R.jsx("div",{className:"ph-g3",children:pE.map((s,t)=>R.jsxs("div",{className:"ph-gs",children:[R.jsx("span",{className:"ph-gv"+(s.red?" ph-red":""),children:s.v}),R.jsx("span",{className:"ph-gl",children:s.l})]},t))})]})]})]}),R.jsxs("div",{className:"ph-block ph-comm-block",children:[R.jsx("div",{className:"ph-lbl",children:"🎙️ Commentary"}),mE.map((s,t)=>R.jsxs("div",{className:"ph-comm",children:[R.jsx("span",{className:_E(s.type),children:s.ball}),R.jsx("span",{className:"ph-comm-text",children:s.text})]},t))]}),R.jsxs("div",{className:"ph-bottom-row",children:[R.jsxs("div",{className:"ph-block ph-report-block",children:[R.jsx("div",{className:"ph-lbl",children:"🤖 AI Report"}),R.jsx("p",{className:"ph-report-p",children:"Rahul's 67★ keeps chase alive. RRR 30.67 near impossible — 2 wkts left."}),R.jsxs("div",{className:"ph-rtags",children:[R.jsx("span",{className:"ph-rtag",children:"Rahul 67★"}),R.jsx("span",{className:"ph-rtag ph-rtag-r",children:"Vikram 2/18"})]})]}),R.jsxs("div",{className:"ph-block ph-summary-block",children:[R.jsx("div",{className:"ph-lbl",children:"📝 Summary"}),gE.map((s,t)=>R.jsxs("div",{className:"ph-sum-row",children:[R.jsx("span",{className:"ph-sum-l",children:s.l}),R.jsx("span",{className:"ph-sum-v",children:s.v})]},t))]})]}),R.jsx("div",{className:"ph-nav",children:[{ic:"🏠",l:"Home"},{ic:"📊",l:"Stats"},{ic:"🏏",l:"Live"},{ic:"🏆",l:"Board"},{ic:"👤",l:"Profile"}].map((s,t)=>R.jsxs("div",{className:"ph-nav-item"+(t===2?" ph-nav-active":""),children:[R.jsx("span",{className:"ph-nav-ic",children:s.ic}),R.jsx("span",{className:"ph-nav-l",children:s.l})]},t))})]})]})})}function yE(){const s=tu(),t=ft.useRef(null),[i,r]=ft.useState(!1),[l,c]=ft.useState(!1),[f,d]=ft.useState("live"),m=g_.find(g=>g.id===f);ft.useEffect(()=>{const g=t.current;if(!g)return;const x=()=>c(g.scrollTop>500);return g.addEventListener("scroll",x,{passive:!0}),()=>g.removeEventListener("scroll",x)},[]);const p=g=>{const x=t.current,M=document.getElementById(g);!x||!M||(x.scrollTo({top:M.offsetTop-70,behavior:"smooth"}),r(!1))},v=()=>{t.current?.scrollTo({top:0,behavior:"smooth"})};return R.jsx("div",{className:"landing-root",ref:t,children:R.jsxs("div",{className:"landing-content",children:[R.jsxs("nav",{className:"top-nav",children:[R.jsxs("div",{className:"nav-inner",children:[R.jsxs("div",{className:"nav-brand",onClick:v,children:[R.jsx("img",{src:ep,alt:"GullyStat",className:"nav-logo"}),R.jsx("span",{className:"nav-name",children:"GULLYSTAT"})]}),R.jsx("div",{className:"nav-links",children:[{label:"Features",id:"features"},{label:"Formats",id:"formats"},{label:"About",id:"about"}].map(g=>R.jsx("button",{className:"nav-link",onClick:()=>p(g.id),children:g.label},g.id))}),R.jsxs("div",{className:"nav-cta-d",children:[R.jsx("button",{className:"nav-login",onClick:()=>s("/login"),children:"Login"}),R.jsx("button",{className:"nav-launch",onClick:()=>s("/dashboard"),children:"🏏 Launch App"})]}),R.jsxs("button",{className:`nav-burger ${i?"open":""}`,onClick:()=>r(g=>!g),children:[R.jsx("span",{}),R.jsx("span",{}),R.jsx("span",{})]})]}),i&&R.jsxs("div",{className:"nav-mob-drop",children:[[{label:"Features",id:"features"},{label:"Formats",id:"formats"},{label:"About",id:"about"}].map(g=>R.jsx("button",{className:"nav-mob-link",onClick:()=>p(g.id),children:g.label},g.id)),R.jsx("div",{className:"nav-mob-sep"}),R.jsx("button",{className:"nav-mob-launch",onClick:()=>{s("/dashboard"),r(!1)},children:"🏏 Launch App"})]})]}),R.jsxs("button",{className:`back-top ${l?"visible":""}`,onClick:v,children:[R.jsx("span",{children:"↑"}),R.jsx("span",{children:"TOP"})]}),R.jsxs("section",{className:"sec-hero",id:"hero",children:[R.jsx("div",{className:"hero-bg-grad"}),R.jsx("div",{className:"hero-bg-dots"}),R.jsx("div",{className:"hero-bg-vignette"}),R.jsxs("div",{className:"hero-wrap",children:[R.jsxs("div",{className:"hero-left",children:[R.jsxs("div",{className:"hero-badge",children:[R.jsx("span",{className:"hero-dot"}),"LOCAL CRICKET · PROFESSIONAL ANALYTICS"]}),R.jsxs("h1",{className:"hero-h1",children:["Your gully.",R.jsx("br",{}),"Your stats.",R.jsx("br",{}),R.jsx("span",{className:"hero-accent",children:"Your legacy."})]}),R.jsxs("p",{className:"hero-sub",children:["What Cricinfo does for internationals —",R.jsx("br",{}),"GullyStat does for your mohalla."]}),R.jsx("div",{className:"hero-tags",children:["Hundrum · 100-ball","Overum · Custom","Live Scoring","AI Reports","Ghost Mode","Leaderboards"].map(g=>R.jsx("span",{className:"hero-tag",children:g},g))}),R.jsxs("div",{className:"hero-btns",children:[R.jsx("button",{className:"btn-gold",onClick:()=>s("/dashboard"),children:"🏏 Start Tracking"}),R.jsx("button",{className:"btn-ghost",onClick:()=>p("features"),children:"See Features ↓"})]}),R.jsx("div",{className:"hero-stats",children:[{v:"6",l:"Game Modes"},{v:"100+",l:"Matches"},{v:"AI",l:"Reports"},{v:"👻",l:"Ghost Mode"}].map((g,x)=>R.jsxs("div",{className:"hstat",children:[R.jsx("span",{className:"hstat-v",children:g.v}),R.jsx("span",{className:"hstat-l",children:g.l})]},x))})]}),R.jsxs("div",{className:"hero-right",children:[R.jsx("div",{className:"phone-glow"}),R.jsx(xE,{}),R.jsx("div",{className:"phone-tag",children:"📱 Available on Mobile"})]})]}),R.jsxs("div",{className:"scroll-hint",onClick:()=>p("features"),children:[R.jsx("span",{className:"scroll-hint-text",children:"scroll down"}),R.jsx("span",{className:"scroll-hint-arrow",children:"↓"})]}),R.jsx(Sh,{topColor:"#07110a",bottomColor:"#0d1f3c",speed:"7s"})]}),R.jsx("section",{className:"sec-features",id:"features",children:R.jsxs("div",{className:"sec-inner",children:[R.jsx("div",{className:"sec-eyebrow",children:"CORE FEATURES"}),R.jsxs("h2",{className:"sec-title",children:["What GullyStat",R.jsx("br",{}),R.jsx("span",{className:"sec-accent",children:"gives you"})]}),R.jsx("p",{className:"sec-sub",children:"Every feature designed for how gully cricket is actually played — loud, local, and legendary."}),R.jsxs("div",{className:"ft-explorer",children:[R.jsx("div",{className:"ft-tabs",children:g_.map(g=>R.jsxs("button",{className:"ft-tab"+(f===g.id?" ft-tab-on":""),onClick:()=>d(g.id),style:f===g.id?{"--ac":g.accent}:{},children:[R.jsx("span",{className:"ft-tab-em",children:g.emoji}),R.jsx("span",{className:"ft-tab-name",children:g.title})]},g.id))}),R.jsxs("div",{className:"ft-detail",style:{"--ac":m.accent},children:[R.jsx("div",{className:"ft-detail-tag",children:m.tag}),R.jsxs("div",{className:"ft-detail-top",children:[R.jsx("span",{className:"ft-detail-em",children:m.emoji}),R.jsx("h3",{className:"ft-detail-title",children:m.title})]}),R.jsx("p",{className:"ft-detail-desc",children:m.desc}),R.jsx("ul",{className:"ft-bullets",children:m.bullets.map((g,x)=>R.jsxs("li",{className:"ft-bullet",children:[R.jsx("span",{className:"ft-bullet-dot",style:{background:m.accent,boxShadow:`0 0 6px ${m.accent}`}}),g]},x))}),R.jsx("button",{className:"ft-detail-cta",style:{color:m.accent,borderColor:m.accent+"44",background:m.accent+"12"},onClick:()=>s("/dashboard"),children:"Try it now →"})]})]})]})}),R.jsx(Sh,{topColor:"#0d1f3c",bottomColor:"#160d2e",speed:"5s"}),R.jsx("section",{className:"sec-formats",id:"formats",children:R.jsxs("div",{className:"sec-inner",children:[R.jsx("div",{className:"sec-eyebrow",children:"GAME MODES"}),R.jsxs("h2",{className:"sec-title",children:["Play your",R.jsx("br",{}),R.jsx("span",{className:"sec-accent",children:"way"})]}),R.jsx("p",{className:"sec-sub",children:"6 formats for every kind of gully cricket. Pick your game."}),R.jsx("div",{className:"fmt-grid",children:[{name:"Hundrum",tag:"100-BALL",color:"#3b82f6",desc:"No overs, just 100 balls. Every delivery counts. Explosive, chaotic, addictive."},{name:"Overum",tag:"CUSTOM OVERS",color:"#f0c840",desc:"You set the rules. 5 overs, 10, 20 — your match, your terms."},{name:"Solo",tag:"CHALLENGE",color:"#34d399",desc:"Set a target, bat alone against a ghost score. No team needed."},{name:"Ghost",tag:"ANONYMOUS",color:"#a78bfa",desc:"Your stats are real. Your identity is hidden. Be the phantom of the mohalla."},{name:"Team",tag:"CLASSIC",color:"#f87171",desc:"Full squad vs squad. Complete scorecard, batting & bowling stats."},{name:"Tourney",tag:"BRACKET",color:"#fbbf24",desc:"Mohalla championship mode. Knockout brackets, group stages, finals."}].map((g,x)=>R.jsxs("div",{className:"fmt-card",style:{"--fc":g.color},children:[R.jsxs("div",{className:"fmt-num",children:["0",x+1]}),R.jsx("div",{className:"fmt-pill",style:{color:g.color,background:g.color+"18",border:`1px solid ${g.color}44`},children:g.name}),R.jsx("div",{className:"fmt-tag",children:g.tag}),R.jsx("p",{className:"fmt-desc",children:g.desc})]},x))})]})}),R.jsx(Sh,{topColor:"#160d2e",bottomColor:"#040c06",speed:"9s"}),R.jsx("section",{className:"sec-cta",id:"about",children:R.jsxs("div",{className:"cta-inner",children:[R.jsxs("div",{className:"cta-left",children:[R.jsx("div",{className:"sec-eyebrow",children:"FREE · NO SETUP · JUST CRICKET"}),R.jsxs("h2",{className:"sec-title",children:["Ready to track",R.jsx("br",{}),R.jsx("span",{className:"cta-accent",children:"your legacy?"})]}),R.jsx("p",{className:"sec-sub",children:"Join mohallas across India scoring every gully match like it's an international."}),R.jsxs("div",{className:"cta-btns",children:[R.jsx("button",{className:"btn-gold lg",onClick:()=>s("/dashboard"),children:"🏏 Start Tracking — Free"}),R.jsx("button",{className:"btn-ghost",onClick:v,children:"↑ Back to Top"})]})]}),R.jsx("div",{className:"cta-checklist",children:[{e:"🏏",t:"Live ball-by-ball scoring"},{e:"🤖",t:"AI match reports after every game"},{e:"📊",t:"Career stats tracked per format"},{e:"👻",t:"Ghost mode — play anonymous"},{e:"🏆",t:"Mohalla leaderboards"},{e:"⚔️",t:"Head-to-head records & rivalries"}].map((g,x)=>R.jsxs("div",{className:"cta-check",children:[R.jsx("span",{className:"cta-check-em",children:g.e}),g.t]},x))})]})})]})})}function SE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Dashboard Page"})}function ME(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"StartMatch Page"})}function EE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"LiveScorer Page"})}function bE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Scorecard Page"})}function TE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"PlayerProfile Page"})}function AE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Leaderboard Page"})}function RE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Challenges Page"})}function CE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Badges Page"})}function wE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"HeadToHead Page"})}function DE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"Tournaments Page"})}function UE(){return R.jsx("div",{style:{padding:"2rem",fontSize:"1.5rem",color:"#1B5E20",fontWeight:"bold"},children:"GhostProfile Page"})}const v_=["+1","+2","+4","+6","W!","OUT!","FOUR!","SIX!","NB","WD","★","🏏"],__=["#f0c840","#f8d860","#34d399","#60c8f0","#a78bfa","#f87171","#fbbf24"];let NE=0;const Mh=()=>++NE;function LE(){const[s,t]=ft.useState([]),i=ft.useCallback(r=>{r.target.tagName.toLowerCase();const l=r.clientX,c=r.clientY,f=__[Math.floor(Math.random()*__.length)],d=v_[Math.floor(Math.random()*v_.length)],p={id:Mh(),type:"number",x:l,y:c,label:d,color:f,dx:(Math.random()-.5)*30,dy:-(60+Math.random()*50)},v={id:Mh(),type:"ring",x:l,y:c,color:f},g=Array.from({length:5},(M,E)=>{const b=E/5*Math.PI*2+Math.random()*.4,y=35+Math.random()*45;return{id:Mh(),type:"dot",x:l,y:c,dx:Math.cos(b)*y,dy:Math.sin(b)*y,color:f,size:3+Math.random()*4}});t(M=>[...M,p,v,...g]);const x=[p.id,v.id,...g.map(M=>M.id)];setTimeout(()=>{t(M=>M.filter(E=>!x.includes(E.id)))},900)},[]);return ft.useEffect(()=>(window.addEventListener("click",i),()=>window.removeEventListener("click",i)),[i]),R.jsx("div",{className:"click-overlay","aria-hidden":"true",children:s.map(r=>r.type==="number"?R.jsx("span",{className:"click-number",style:{left:r.x,top:r.y,color:r.color,"--dx":`${r.dx}px`,"--dy":`${r.dy}px`,textShadow:`0 0 12px ${r.color}88, 0 0 28px ${r.color}44`},children:r.label},r.id):r.type==="ring"?R.jsx("span",{className:"click-ring",style:{left:r.x,top:r.y,borderColor:r.color,boxShadow:`0 0 8px ${r.color}66`}},r.id):r.type==="dot"?R.jsx("span",{className:"click-dot",style:{left:r.x,top:r.y,width:r.size,height:r.size,background:r.color,"--dx":`${r.dx}px`,"--dy":`${r.dy}px`,boxShadow:`0 0 6px ${r.color}`}},r.id):null)})}const np="180",OE=0,x_=1,PE=2,H0=1,G0=2,ua=3,Ka=0,Xn=1,Li=2,Ya=0,ws=1,y_=2,S_=3,M_=4,zE=5,Ar=100,BE=101,IE=102,FE=103,HE=104,GE=200,VE=201,kE=202,XE=203,rd=204,sd=205,jE=206,WE=207,qE=208,YE=209,ZE=210,KE=211,QE=212,JE=213,$E=214,od=0,ld=1,cd=2,Us=3,ud=4,fd=5,hd=6,dd=7,ip=0,tb=1,eb=2,Za=0,nb=1,ib=2,ab=3,V0=4,rb=5,sb=6,ob=7,k0=300,Ns=301,Ls=302,pd=303,md=304,nu=306,gd=1e3,Cr=1001,vd=1002,Ti=1003,lb=1004,mc=1005,Oi=1006,Eh=1007,wr=1008,Fi=1009,X0=1010,j0=1011,jo=1012,ap=1013,Dr=1014,fa=1015,$o=1016,rp=1017,sp=1018,Wo=1020,W0=35902,q0=35899,Y0=1021,Z0=1022,bi=1023,qo=1026,Yo=1027,K0=1028,op=1029,Q0=1030,lp=1031,cp=1033,Gc=33776,Vc=33777,kc=33778,Xc=33779,_d=35840,xd=35841,yd=35842,Sd=35843,Md=36196,Ed=37492,bd=37496,Td=37808,Ad=37809,Rd=37810,Cd=37811,wd=37812,Dd=37813,Ud=37814,Nd=37815,Ld=37816,Od=37817,Pd=37818,zd=37819,Bd=37820,Id=37821,Fd=36492,Hd=36494,Gd=36495,Vd=36283,kd=36284,Xd=36285,jd=36286,cb=3200,ub=3201,J0=0,fb=1,Wa="",pi="srgb",Os="srgb-linear",qc="linear",He="srgb",ps=7680,E_=519,hb=512,db=513,pb=514,$0=515,mb=516,gb=517,vb=518,_b=519,b_=35044,T_="300 es",Pi=2e3,Yc=2001;class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=Math.PI/180,Wd=180/Math.PI;function tl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Ee(s,t,i){return Math.max(t,Math.min(i,s))}function xb(s,t){return(s%t+t)%t}function Th(s,t,i){return(1-i)*s+i*t}function Po(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Te{constructor(t=0,i=0){Te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class el{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3];const x=c[f+0],M=c[f+1],E=c[f+2],b=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=b;return}if(g!==b||m!==x||p!==M||v!==E){let y=1-d;const _=m*x+p*M+v*E+g*b,L=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const I=Math.sqrt(N),F=Math.atan2(I,_*L);y=Math.sin(y*F)/I,d=Math.sin(d*F)/I}const U=d*L;if(m=m*y+x*U,p=p*y+M*U,v=v*y+E*U,g=g*y+b*U,y===1-d){const I=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=I,p*=I,v*=I,g*=I}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+v*g+m*M-p*x,t[i+1]=m*E+v*x+p*g-d*M,t[i+2]=p*E+v*M+d*x-m*g,t[i+3]=v*E-d*g-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),g=d(c/2),x=m(r/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g-x*M*E;break;case"YXZ":this._x=x*v*g+p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g+x*M*E;break;case"ZXY":this._x=x*v*g-p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g-x*M*E;break;case"ZYX":this._x=x*v*g-p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g+x*M*E;break;case"YZX":this._x=x*v*g+p*M*E,this._y=p*M*g+x*v*E,this._z=p*v*E-x*M*g,this._w=p*v*g-x*M*E;break;case"XZY":this._x=x*v*g-p*M*E,this._y=p*M*g-x*v*E,this._z=p*v*E+x*M*g,this._w=p*v*g+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=r+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+f*d+l*p-c*m,this._y=l*v+f*m+c*d-r*p,this._z=c*v+f*p+r*m-l*d,this._w=f*v-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(A_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(A_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),v=2*(d*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-d*v,this.y=r+m*v+d*p-c*g,this.z=l+m*g+c*v-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new $,A_=new el;class he{constructor(t,i,r,l,c,f,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p)}set(t,i,r,l,c,f,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],M=r[5],E=r[8],b=l[0],y=l[3],_=l[6],L=l[1],N=l[4],U=l[7],I=l[2],F=l[5],z=l[8];return c[0]=f*b+d*L+m*I,c[3]=f*y+d*N+m*F,c[6]=f*_+d*U+m*z,c[1]=p*b+v*L+g*I,c[4]=p*y+v*N+g*F,c[7]=p*_+v*U+g*z,c[2]=x*b+M*L+E*I,c[5]=x*y+M*N+E*F,c[8]=x*_+M*U+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*f*v-i*d*p-r*c*v+r*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*f-d*p,x=d*m-v*c,M=p*c-f*m,E=i*g+r*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=g*b,t[1]=(l*p-v*r)*b,t[2]=(d*r-l*f)*b,t[3]=x*b,t[4]=(v*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=M*b,t[7]=(r*m-p*i)*b,t[8]=(f*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Rh.makeScale(t,i)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new he;function tx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yb(){const s=Zc("canvas");return s.style.display="block",s}const R_={};function Zo(s){s in R_||(R_[s]=!0,console.warn(s))}function Sb(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const C_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mb(){const s={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===He&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Os]:{primaries:t,whitePoint:r,transfer:qc,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:He,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const De=Mb();function ha(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ms;class Eb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ms===void 0&&(ms=Zc("canvas")),ms.width=t.width,ms.height=t.height;const l=ms.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ms}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ha(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ha(i[r]/255)*255):i[r]=ha(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bb=0;class up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=tl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Ch(l[f].image)):c.push(Ch(l[f]))}else c=Ch(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Ch(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tb=0;const wh=new $;class jn extends Is{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=Cr,l=Cr,c=Oi,f=wr,d=bi,m=Fi,p=jn.DEFAULT_ANISOTROPY,v=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=tl(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==k0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gd:t.x=t.x-Math.floor(t.x);break;case Cr:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gd:t.y=t.y-Math.floor(t.y);break;case Cr:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=k0;jn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,i=0,r=0,l=1){Ge.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],E=m[9],b=m[2],y=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+b)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(M+1)/2,I=(_+1)/2,F=(v+x)/4,z=(g+b)/4,j=(E+y)/4;return N>U&&N>I?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=F/r,c=z/r):U>I?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=F/l,c=j/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=z/c,l=j/c),this.set(r,l,c,i),this}let L=Math.sqrt((y-E)*(y-E)+(g-b)*(g-b)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(g-b)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ab extends Is{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Ge(0,0,t,i),this.scissorTest=!1,this.viewport=new Ge(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new jn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new up(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends Ab{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class ex extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rb extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),vc.subVectors(this.max,zo),gs.subVectors(t.a,zo),vs.subVectors(t.b,zo),_s.subVectors(t.c,zo),Ha.subVectors(vs,gs),Ga.subVectors(_s,vs),vr.subVectors(gs,_s);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-vr.z,vr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,vr.z,0,-vr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-vr.y,vr.x,0];return!Dh(i,gs,vs,_s,vc)||(i=[1,0,0,0,1,0,0,0,1],!Dh(i,gs,vs,_s,vc))?!1:(_c.crossVectors(Ha,Ga),i=[_c.x,_c.y,_c.z],Dh(i,gs,vs,_s,vc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ra=[new $,new $,new $,new $,new $,new $,new $,new $],xi=new $,gc=new nl,gs=new $,vs=new $,_s=new $,Ha=new $,Ga=new $,vr=new $,zo=new $,vc=new $,_c=new $,_r=new $;function Dh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){_r.fromArray(s,c);const d=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=t.dot(_r),p=i.dot(_r),v=r.dot(_r);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Cb=new nl,Bo=new $,Uh=new $;class iu{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Cb.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Uh)),this.expandByPoint(Bo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sa=new $,Nh=new $,xc=new $,Va=new $,Lh=new $,yc=new $,Oh=new $;class nx{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Nh.copy(t).add(i).multiplyScalar(.5),xc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(Nh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(xc),d=Va.dot(this.direction),m=-Va.dot(xc),p=Va.lengthSq(),v=Math.abs(1-f*f);let g,x,M,E;if(v>0)if(g=f*m-d,x=f*d-m,E=c*v,g>=0)if(x>=-E)if(x<=E){const b=1/v;g*=b,x*=b,M=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Nh).addScaledVector(xc,x),M}intersectSphere(t,i){sa.subVectors(t.center,this.origin);const r=sa.dot(this.direction),l=sa.dot(sa)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(c=(t.min.y-x.y)*v,f=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,f=(t.min.y-x.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,i,r,l,c){Lh.subVectors(i,t),yc.subVectors(r,t),Oh.crossVectors(Lh,yc);let f=this.direction.dot(Oh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Va.subVectors(this.origin,t);const m=d*this.direction.dot(yc.crossVectors(Va,yc));if(m<0)return null;const p=d*this.direction.dot(Lh.cross(Va));if(p<0||m+p>f)return null;const v=-d*Va.dot(Oh);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,c,f,d,m,p,v,g,x,M,E,b,y){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p,v,g,x,M,E,b,y)}set(t,i,r,l,c,f,d,m,p,v,g,x,M,E,b,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=E,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/xs.setFromMatrixColumn(t,0).length(),c=1/xs.setFromMatrixColumn(t,1).length(),f=1/xs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=f*v,M=f*g,E=d*v,b=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*v,M=m*g,E=p*v,b=p*g;i[0]=x+b*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=M*d-E,i[6]=b+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*v,M=m*g,E=p*v,b=p*g;i[0]=x-b*d,i[4]=-f*g,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*v,i[9]=b-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*v,M=f*g,E=d*v,b=d*g;i[0]=m*v,i[4]=E*p-M,i[8]=x*p+b,i[1]=m*g,i[5]=b*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,M=f*p,E=d*m,b=d*p;i[0]=m*v,i[4]=b-x*g,i[8]=E*g+M,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*g+E,i[10]=x-b*g}else if(t.order==="XZY"){const x=f*m,M=f*p,E=d*m,b=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+b,i[5]=f*v,i[9]=M*g-E,i[2]=E*g-M,i[6]=d*v,i[10]=b*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wb,t,Db)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ka.crossVectors(r,ei),ka.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ka.crossVectors(r,ei)),ka.normalize(),Sc.crossVectors(ei,ka),l[0]=ka.x,l[4]=Sc.x,l[8]=ei.x,l[1]=ka.y,l[5]=Sc.y,l[9]=ei.y,l[2]=ka.z,l[6]=Sc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],M=r[13],E=r[2],b=r[6],y=r[10],_=r[14],L=r[3],N=r[7],U=r[11],I=r[15],F=l[0],z=l[4],j=l[8],w=l[12],D=l[1],V=l[5],J=l[9],ot=l[13],pt=l[2],lt=l[6],B=l[10],K=l[14],q=l[3],yt=l[7],Tt=l[11],P=l[15];return c[0]=f*F+d*D+m*pt+p*q,c[4]=f*z+d*V+m*lt+p*yt,c[8]=f*j+d*J+m*B+p*Tt,c[12]=f*w+d*ot+m*K+p*P,c[1]=v*F+g*D+x*pt+M*q,c[5]=v*z+g*V+x*lt+M*yt,c[9]=v*j+g*J+x*B+M*Tt,c[13]=v*w+g*ot+x*K+M*P,c[2]=E*F+b*D+y*pt+_*q,c[6]=E*z+b*V+y*lt+_*yt,c[10]=E*j+b*J+y*B+_*Tt,c[14]=E*w+b*ot+y*K+_*P,c[3]=L*F+N*D+U*pt+I*q,c[7]=L*z+N*V+U*lt+I*yt,c[11]=L*j+N*J+U*B+I*Tt,c[15]=L*w+N*ot+U*K+I*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],x=t[10],M=t[14],E=t[3],b=t[7],y=t[11],_=t[15];return E*(+c*m*g-l*p*g-c*d*x+r*p*x+l*d*M-r*m*M)+b*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*v-c*m*v)+y*(+i*p*g-i*d*M-c*f*g+r*f*M+c*d*v-r*p*v)+_*(-l*d*v-i*m*g+i*d*x+l*f*g-r*f*x+r*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],x=t[10],M=t[11],E=t[12],b=t[13],y=t[14],_=t[15],L=g*y*p-b*x*p+b*m*M-d*y*M-g*m*_+d*x*_,N=E*x*p-v*y*p-E*m*M+f*y*M+v*m*_-f*x*_,U=v*b*p-E*g*p+E*d*M-f*b*M-v*d*_+f*g*_,I=E*g*m-v*b*m-E*d*x+f*b*x+v*d*y-f*g*y,F=i*L+r*N+l*U+c*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=L*z,t[1]=(b*x*c-g*y*c-b*l*M+r*y*M+g*l*_-r*x*_)*z,t[2]=(d*y*c-b*m*c+b*l*p-r*y*p-d*l*_+r*m*_)*z,t[3]=(g*m*c-d*x*c-g*l*p+r*x*p+d*l*M-r*m*M)*z,t[4]=N*z,t[5]=(v*y*c-E*x*c+E*l*M-i*y*M-v*l*_+i*x*_)*z,t[6]=(E*m*c-f*y*c-E*l*p+i*y*p+f*l*_-i*m*_)*z,t[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*M+i*m*M)*z,t[8]=U*z,t[9]=(E*g*c-v*b*c-E*r*M+i*b*M+v*r*_-i*g*_)*z,t[10]=(f*b*c-E*d*c+E*r*p-i*b*p-f*r*_+i*d*_)*z,t[11]=(v*d*c-f*g*c-v*r*p+i*g*p+f*r*M-i*d*M)*z,t[12]=I*z,t[13]=(v*b*l-E*g*l+E*r*x-i*b*x-v*r*y+i*g*y)*z,t[14]=(E*d*l-f*b*l-E*r*m+i*b*m+f*r*y-i*d*y)*z,t[15]=(f*g*l-v*d*l+v*r*m-i*g*m-f*r*x+i*d*x)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,m=t.z,p=c*f,v=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*f,0,p*m-l*d,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,v=f+f,g=d+d,x=c*p,M=c*v,E=c*g,b=f*v,y=f*g,_=d*g,L=m*p,N=m*v,U=m*g,I=r.x,F=r.y,z=r.z;return l[0]=(1-(b+_))*I,l[1]=(M+U)*I,l[2]=(E-N)*I,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(x+_))*F,l[6]=(y+L)*F,l[7]=0,l[8]=(E+N)*z,l[9]=(y-L)*z,l[10]=(1-(x+b))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=xs.set(l[0],l[1],l[2]).length();const f=xs.set(l[4],l[5],l[6]).length(),d=xs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/c,v=1/f,g=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=g,yi.elements[9]*=g,yi.elements[10]*=g,i.setFromRotationMatrix(yi),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=Pi,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(r-l),x=(i+t)/(i-t),M=(r+l)/(r-l);let E,b;if(m)E=c/(f-c),b=f*c/(f-c);else if(d===Pi)E=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(d===Yc)E=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=Pi,m=!1){const p=this.elements,v=2/(i-t),g=2/(r-l),x=-(i+t)/(i-t),M=-(r+l)/(r-l);let E,b;if(m)E=1/(f-c),b=f/(f-c);else if(d===Pi)E=-2/(f-c),b=-(f+c)/(f-c);else if(d===Yc)E=-1/(f-c),b=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const xs=new $,yi=new Qe,wb=new $(0,0,0),Db=new $(1,1,1),ka=new $,Sc=new $,ei=new $,D_=new Qe,U_=new el;class Hi{constructor(t=0,i=0,r=0,l=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return D_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(D_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return U_.setFromEuler(this),this.setFromQuaternion(U_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class ix{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ub=0;const N_=new $,ys=new el,oa=new Qe,Mc=new $,Io=new $,Nb=new $,Lb=new el,L_=new $(1,0,0),O_=new $(0,1,0),P_=new $(0,0,1),z_={type:"added"},Ob={type:"removed"},Ss={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Rn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new $,i=new Hi,r=new el,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new he}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ix,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(L_,t)}rotateY(t){return this.rotateOnAxis(O_,t)}rotateZ(t){return this.rotateOnAxis(P_,t)}translateOnAxis(t,i){return N_.copy(t).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(L_,t)}translateY(t){return this.translateOnAxis(O_,t)}translateZ(t){return this.translateOnAxis(P_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Mc.copy(t):Mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Io,Mc,this.up):oa.lookAt(Mc,Io,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(oa),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(z_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ob),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(z_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,Nb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Lb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),v=f(t.images),g=f(t.shapes),x=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new $(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new $,la=new $,zh=new $,ca=new $,Ms=new $,Es=new $,B_=new $,Bh=new $,Ih=new $,Fh=new $,Hh=new Ge,Gh=new Ge,Vh=new Ge;class Ei{constructor(t=new $,i=new $,r=new $){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Si.subVectors(l,i),la.subVectors(r,i),zh.subVectors(t,i);const f=Si.dot(Si),d=Si.dot(la),m=Si.dot(zh),p=la.dot(la),v=la.dot(zh),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-d*v)*x,E=(f*v-d*m)*x;return c.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,i,r,l,c,f,d,m){return this.getBarycoord(t,i,r,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ca.x),m.addScaledVector(f,ca.y),m.addScaledVector(d,ca.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,i),Gh.fromBufferAttribute(t,r),Vh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Hh,c.x),f.addScaledVector(Gh,c.y),f.addScaledVector(Vh,c.z),f}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),la.subVectors(t,i),Si.cross(la).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Si.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;Ms.subVectors(l,r),Es.subVectors(c,r),Bh.subVectors(t,r);const m=Ms.dot(Bh),p=Es.dot(Bh);if(m<=0&&p<=0)return i.copy(r);Ih.subVectors(t,l);const v=Ms.dot(Ih),g=Es.dot(Ih);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Ms,f);Fh.subVectors(t,c);const M=Ms.dot(Fh),E=Es.dot(Fh);if(E>=0&&M<=E)return i.copy(c);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Es,d);const y=v*E-M*g;if(y<=0&&g-v>=0&&M-E>=0)return B_.subVectors(c,l),d=(g-v)/(g-v+(M-E)),i.copy(l).addScaledVector(B_,d);const _=1/(y+b+x);return f=b*_,d=x*_,i.copy(r).addScaledVector(Ms,f).addScaledVector(Es,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function kh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class be{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=xb(t,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=kh(f,c,t+1/3),this.g=kh(f,c,t),this.b=kh(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const r=ax[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return De.workingToColorSpace(Un.copy(this),t),Math.round(Ee(Un.r*255,0,255))*65536+Math.round(Ee(Un.g*255,0,255))*256+Math.round(Ee(Un.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=pi){De.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(Ec);const r=Th(Xa.h,Ec.h,i),l=Th(Xa.s,Ec.s,i),c=Th(Xa.l,Ec.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new be;be.NAMES=ax;let Pb=0;class Fs extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=ws,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rd&&(r.blendSrc=this.blendSrc),this.blendDst!==sd&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ko extends Fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new $,bc=new Te;let zb=0;class Bi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=b_,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Po(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==b_&&(t.usage=this.usage),t}}class rx extends Bi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class sx extends Bi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Je extends Bi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Bb=0;const di=new Qe,Xh=new Rn,bs=new $,ni=new nl,Fo=new nl,yn=new $;class Wn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tx(t)?sx:rx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new he().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Je(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ni.min,Fo.min),ni.expandByPoint(yn),yn.addVectors(ni.max,Fo.max),ni.expandByPoint(yn)):(ni.expandByPoint(Fo.min),ni.expandByPoint(Fo.max))}ni.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)yn.fromBufferAttribute(d,p),m&&(bs.fromBufferAttribute(t,p),yn.add(bs)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new $,m[j]=new $;const p=new $,v=new $,g=new $,x=new Te,M=new Te,E=new Te,b=new $,y=new $;function _(j,w,D){p.fromBufferAttribute(r,j),v.fromBufferAttribute(r,w),g.fromBufferAttribute(r,D),x.fromBufferAttribute(c,j),M.fromBufferAttribute(c,w),E.fromBufferAttribute(c,D),v.sub(p),g.sub(p),M.sub(x),E.sub(x);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(V),d[j].add(b),d[w].add(b),d[D].add(b),m[j].add(y),m[w].add(y),m[D].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let j=0,w=L.length;j<w;++j){const D=L[j],V=D.start,J=D.count;for(let ot=V,pt=V+J;ot<pt;ot+=3)_(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const N=new $,U=new $,I=new $,F=new $;function z(j){I.fromBufferAttribute(l,j),F.copy(I);const w=d[j];N.copy(w),N.sub(I.multiplyScalar(I.dot(w))).normalize(),U.crossVectors(F,w);const V=U.dot(m[j])<0?-1:1;f.setXYZW(j,N.x,N.y,N.z,V)}for(let j=0,w=L.length;j<w;++j){const D=L[j],V=D.start,J=D.count;for(let ot=V,pt=V+J;ot<pt;ot+=3)z(t.getX(ot+0)),z(t.getX(ot+1)),z(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new $,c=new $,f=new $,d=new $,m=new $,p=new $,v=new $,g=new $;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),b=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),d.add(v),m.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let M=0,E=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*v;for(let _=0;_<v;_++)x[E++]=p[M++]}return new Bi(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I_=new Qe,xr=new nx,Tc=new iu,F_=new $,Ac=new $,Rc=new $,Cc=new $,jh=new $,wc=new $,H_=new $,Dc=new $;class mn extends Rn{constructor(t=new Wn,i=new ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){wc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(jh.fromBufferAttribute(g,t),f?wc.addScaledVector(jh,v):wc.addScaledVector(jh.sub(i),v))}i.add(wc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(c),xr.copy(t.ray).recast(t.near),!(Tc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Tc,F_)===null||xr.origin.distanceToSquared(F_)>(t.far-t.near)**2))&&(I_.copy(c).invert(),xr.copy(t.ray).applyMatrix4(I_),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,xr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const y=x[E],_=f[y.materialIndex],L=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=L,I=N;U<I;U+=3){const F=d.getX(U),z=d.getX(U+1),j=d.getX(U+2);l=Uc(this,_,t,r,p,v,g,F,z,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let y=E,_=b;y<_;y+=3){const L=d.getX(y),N=d.getX(y+1),U=d.getX(y+2);l=Uc(this,f,t,r,p,v,g,L,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const y=x[E],_=f[y.materialIndex],L=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=L,I=N;U<I;U+=3){const F=U,z=U+1,j=U+2;l=Uc(this,_,t,r,p,v,g,F,z,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let y=E,_=b;y<_;y+=3){const L=y,N=y+1,U=y+2;l=Uc(this,f,t,r,p,v,g,L,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ib(s,t,i,r,l,c,f,d){let m;if(t.side===Xn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,t.side===Ka,d),m===null)return null;Dc.copy(d),Dc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Dc);return p<i.near||p>i.far?null:{distance:p,point:Dc.clone(),object:s}}function Uc(s,t,i,r,l,c,f,d,m,p){s.getVertexPosition(d,Ac),s.getVertexPosition(m,Rc),s.getVertexPosition(p,Cc);const v=Ib(s,t,i,r,Ac,Rc,Cc,H_);if(v){const g=new $;Ei.getBarycoord(H_,Ac,Rc,Cc,g),l&&(v.uv=Ei.getInterpolatedAttribute(l,d,m,p,g,new Te)),c&&(v.uv1=Ei.getInterpolatedAttribute(c,d,m,p,g,new Te)),f&&(v.normal=Ei.getInterpolatedAttribute(f,d,m,p,g,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new $,materialIndex:0};Ei.getNormal(Ac,Rc,Cc,x.normal),v.face=x,v.barycoord=g}return v}class il extends Wn{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(g,2));function E(b,y,_,L,N,U,I,F,z,j,w){const D=U/z,V=I/j,J=U/2,ot=I/2,pt=F/2,lt=z+1,B=j+1;let K=0,q=0;const yt=new $;for(let Tt=0;Tt<B;Tt++){const P=Tt*V-ot;for(let Q=0;Q<lt;Q++){const ht=Q*D-J;yt[b]=ht*L,yt[y]=P*N,yt[_]=pt,p.push(yt.x,yt.y,yt.z),yt[b]=0,yt[y]=0,yt[_]=F>0?1:-1,v.push(yt.x,yt.y,yt.z),g.push(Q/z),g.push(1-Tt/j),K+=1}}for(let Tt=0;Tt<j;Tt++)for(let P=0;P<z;P++){const Q=x+P+lt*Tt,ht=x+P+lt*(Tt+1),Mt=x+(P+1)+lt*(Tt+1),Ct=x+(P+1)+lt*Tt;m.push(Q,ht,Ct),m.push(ht,Mt,Ct),q+=6}d.addGroup(M,q,w),M+=q,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Pn(s){const t={};for(let i=0;i<s.length;i++){const r=Ps(s[i]);for(const l in r)t[l]=r[l]}return t}function Fb(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function ox(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const Hb={clone:Ps,merge:Pn};var Gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends Fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gb,this.fragmentShader=Vb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=Fb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class lx extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new $,G_=new Te,V_=new Te;class ii extends lx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Wd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-t/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ja.x,ja.y).multiplyScalar(-t/ja.z)}getViewSize(t,i){return this.getViewBounds(t,G_,V_),i.subVectors(V_,G_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ts=-90,As=1;class kb extends Rn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Ts,As,t,i);l.layers=this.layers,this.add(l);const c=new ii(Ts,As,t,i);c.layers=this.layers,this.add(c);const f=new ii(Ts,As,t,i);f.layers=this.layers,this.add(f);const d=new ii(Ts,As,t,i);d.layers=this.layers,this.add(d);const m=new ii(Ts,As,t,i);m.layers=this.layers,this.add(m);const p=new ii(Ts,As,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,v]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,x,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class cx extends jn{constructor(t=[],i=Ns,r,l,c,f,d,m,p,v){super(t,i,r,l,c,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xb extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new cx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new il(5,5,5),c=new Qa({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:Ya});c.uniforms.tEquirect.value=i;const f=new mn(l,c),d=i.minFilter;return i.minFilter===wr&&(i.minFilter=Oi),new kb(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Nc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jb={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const b of t.hand.values()){const y=i.getJointPose(b,r),_=this._getHandJoint(p,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Nc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class fp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(t),this.density=i}clone(){return new fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wb extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const qh=new $,qb=new $,Yb=new he;class br{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=qh.subVectors(r,i).cross(qb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(qh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Yb.getNormalMatrix(t),l=this.coplanarPoint(qh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new iu,Zb=new Te(.5,.5),Lc=new $;class hp{constructor(t=new br,i=new br,r=new br,l=new br,c=new br,f=new br){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Pi,r=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],E=c[8],b=c[9],y=c[10],_=c[11],L=c[12],N=c[13],U=c[14],I=c[15];if(l[0].setComponents(p-f,M-v,_-E,I-L).normalize(),l[1].setComponents(p+f,M+v,_+E,I+L).normalize(),l[2].setComponents(p+d,M+g,_+b,I+N).normalize(),l[3].setComponents(p-d,M-g,_-b,I-N).normalize(),r)l[4].setComponents(m,x,y,U).normalize(),l[5].setComponents(p-m,M-x,_-y,I-U).normalize();else if(l[4].setComponents(p-m,M-x,_-y,I-U).normalize(),i===Pi)l[5].setComponents(p+m,M+x,_+y,I+U).normalize();else if(i===Yc)l[5].setComponents(m,x,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);const i=Zb.distanceTo(t.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ux extends Fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kc=new $,Qc=new $,k_=new Qe,Ho=new nx,Oc=new iu,Yh=new $,X_=new $;class Kb extends Rn{constructor(t=new Wn,i=new ux){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Kc.fromBufferAttribute(i,l-1),Qc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Kc.distanceTo(Qc);t.setAttribute("lineDistance",new Je(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(l),Oc.radius+=c,t.ray.intersectsSphere(Oc)===!1)return;k_.copy(l).invert(),Ho.copy(t.ray).applyMatrix4(k_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=M,y=E-1;b<y;b+=p){const _=v.getX(b),L=v.getX(b+1),N=Pc(this,t,Ho,m,_,L,b);N&&i.push(N)}if(this.isLineLoop){const b=v.getX(E-1),y=v.getX(M),_=Pc(this,t,Ho,m,b,y,E-1);_&&i.push(_)}}else{const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let b=M,y=E-1;b<y;b+=p){const _=Pc(this,t,Ho,m,b,b+1,b);_&&i.push(_)}if(this.isLineLoop){const b=Pc(this,t,Ho,m,E-1,M,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Pc(s,t,i,r,l,c,f){const d=s.geometry.attributes.position;if(Kc.fromBufferAttribute(d,l),Qc.fromBufferAttribute(d,c),i.distanceSqToSegment(Kc,Qc,Yh,X_)>r)return;Yh.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Yh);if(!(p<t.near||p>t.far))return{distance:p,point:X_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class fx extends jn{constructor(t,i,r=Dr,l,c,f,d=Ti,m=Ti,p,v=qo,g=1){if(v!==qo&&v!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,f,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new up(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hx extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class dp extends Wn{constructor(t=1,i=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:l},i=Math.max(3,i);const c=[],f=[],d=[],m=[],p=new $,v=new Te;f.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let g=0,x=3;g<=i;g++,x+=3){const M=r+g/i*l;p.x=t*Math.cos(M),p.y=t*Math.sin(M),f.push(p.x,p.y,p.z),d.push(0,0,1),v.x=(f[x]/t+1)/2,v.y=(f[x+1]/t+1)/2,m.push(v.x,v.y)}for(let g=1;g<=i;g++)c.push(g,g+1,0);this.setIndex(c),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Jc extends Wn{constructor(t=1,i=1,r=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],x=[],M=[];let E=0;const b=[],y=r/2;let _=0;L(),f===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(v),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(M,2));function L(){const U=new $,I=new $;let F=0;const z=(i-t)/r;for(let j=0;j<=c;j++){const w=[],D=j/c,V=D*(i-t)+t;for(let J=0;J<=l;J++){const ot=J/l,pt=ot*m+d,lt=Math.sin(pt),B=Math.cos(pt);I.x=V*lt,I.y=-D*r+y,I.z=V*B,g.push(I.x,I.y,I.z),U.set(lt,z,B).normalize(),x.push(U.x,U.y,U.z),M.push(ot,1-D),w.push(E++)}b.push(w)}for(let j=0;j<l;j++)for(let w=0;w<c;w++){const D=b[w][j],V=b[w+1][j],J=b[w+1][j+1],ot=b[w][j+1];(t>0||w!==0)&&(v.push(D,V,ot),F+=3),(i>0||w!==c-1)&&(v.push(V,J,ot),F+=3)}p.addGroup(_,F,0),_+=F}function N(U){const I=E,F=new Te,z=new $;let j=0;const w=U===!0?t:i,D=U===!0?1:-1;for(let J=1;J<=l;J++)g.push(0,y*D,0),x.push(0,D,0),M.push(.5,.5),E++;const V=E;for(let J=0;J<=l;J++){const pt=J/l*m+d,lt=Math.cos(pt),B=Math.sin(pt);z.x=w*B,z.y=y*D,z.z=w*lt,g.push(z.x,z.y,z.z),x.push(0,D,0),F.x=lt*.5+.5,F.y=B*.5*D+.5,M.push(F.x,F.y),E++}for(let J=0;J<l;J++){const ot=I+J,pt=V+J;U===!0?v.push(pt,pt+1,ot):v.push(pt+1,pt,ot),j+=3}p.addGroup(_,j,U===!0?1:2),_+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qa extends Wn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,g=t/d,x=i/m,M=[],E=[],b=[],y=[];for(let _=0;_<v;_++){const L=_*x-f;for(let N=0;N<p;N++){const U=N*g-c;E.push(U,-L,0),b.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const N=L+p*_,U=L+p*(_+1),I=L+1+p*(_+1),F=L+1+p*_;M.push(N,U,F),M.push(U,I,F)}this.setIndex(M),this.setAttribute("position",new Je(E,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.width,t.height,t.widthSegments,t.heightSegments)}}class pp extends Wn{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const d=[],m=[],p=[],v=[];let g=t;const x=(i-t)/l,M=new $,E=new Te;for(let b=0;b<=l;b++){for(let y=0;y<=r;y++){const _=c+y/r*f;M.x=g*Math.cos(_),M.y=g*Math.sin(_),m.push(M.x,M.y,M.z),p.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,v.push(E.x,E.y)}g+=x}for(let b=0;b<l;b++){const y=b*(r+1);for(let _=0;_<r;_++){const L=_+y,N=L,U=L+r+1,I=L+r+2,F=L+1;d.push(N,U,F),d.push(U,I,F)}}this.setIndex(d),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(p,3)),this.setAttribute("uv",new Je(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class mp extends Wn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+d,Math.PI);let p=0;const v=[],g=new $,x=new $,M=[],E=[],b=[],y=[];for(let _=0;_<=r;_++){const L=[],N=_/r;let U=0;_===0&&f===0?U=.5/i:_===r&&m===Math.PI&&(U=-.5/i);for(let I=0;I<=i;I++){const F=I/i;g.x=-t*Math.cos(l+F*c)*Math.sin(f+N*d),g.y=t*Math.cos(f+N*d),g.z=t*Math.sin(l+F*c)*Math.sin(f+N*d),E.push(g.x,g.y,g.z),x.copy(g).normalize(),b.push(x.x,x.y,x.z),y.push(F+U,1-N),L.push(p++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<i;L++){const N=v[_][L+1],U=v[_][L],I=v[_+1][L],F=v[_+1][L+1];(_!==0||f>0)&&M.push(N,U,F),(_!==r-1||m<Math.PI)&&M.push(U,I,F)}this.setIndex(M),this.setAttribute("position",new Je(E,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gp extends Wn{constructor(t=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const f=[],d=[],m=[],p=[],v=new $,g=new $,x=new $;for(let M=0;M<=r;M++)for(let E=0;E<=l;E++){const b=E/l*c,y=M/r*Math.PI*2;g.x=(t+i*Math.cos(y))*Math.cos(b),g.y=(t+i*Math.cos(y))*Math.sin(b),g.z=i*Math.sin(y),d.push(g.x,g.y,g.z),v.x=t*Math.cos(b),v.y=t*Math.sin(b),x.subVectors(g,v).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=l;E++){const b=(l+1)*M+E-1,y=(l+1)*(M-1)+E-1,_=(l+1)*(M-1)+E,L=(l+1)*M+E;f.push(b,y,L),f.push(y,_,L)}this.setIndex(f),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(m,3)),this.setAttribute("uv",new Je(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Sr extends Fs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=J0,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qb extends Fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jb extends Fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vp extends Rn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Zh=new Qe,j_=new $,W_=new $;class dx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;j_.setFromMatrixPosition(t.matrixWorld),i.position.copy(j_),W_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(W_),i.updateMatrixWorld(),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const q_=new Qe,Go=new $,Kh=new $;class $b extends dx{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Go.setFromMatrixPosition(t.matrixWorld),r.position.copy(Go),Kh.copy(r.position),Kh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Kh),r.updateMatrixWorld(),l.makeTranslation(-Go.x,-Go.y,-Go.z),q_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(q_,r.coordinateSystem,r.reversedDepth)}}class tT extends vp{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new $b}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class px extends lx{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class eT extends dx{constructor(){super(new px(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y_ extends vp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new eT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nT extends vp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class iT extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Z_(s,t,i,r){const l=aT(r);switch(i){case Y0:return s*t;case K0:return s*t/l.components*l.byteLength;case op:return s*t/l.components*l.byteLength;case Q0:return s*t*2/l.components*l.byteLength;case lp:return s*t*2/l.components*l.byteLength;case Z0:return s*t*3/l.components*l.byteLength;case bi:return s*t*4/l.components*l.byteLength;case cp:return s*t*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kc:case Xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xd:case Sd:return Math.max(s,16)*Math.max(t,8)/4;case _d:case yd:return Math.max(s,8)*Math.max(t,8)/2;case Md:case Ed:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Td:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Od:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Id:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fd:case Hd:case Gd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Vd:case kd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xd:case jd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function aT(s){switch(s){case Fi:case X0:return{byteLength:1,components:1};case jo:case j0:case $o:return{byteLength:2,components:1};case rp:case sp:return{byteLength:2,components:4};case Dr:case ap:case fa:return{byteLength:4,components:1};case W0:case q0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);function mx(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function rT(s){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,v);else{g.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<g.length;M++){const E=g[x],b=g[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,g[x]=b)}g.length=x+1;for(let M=0,E=g.length;M<E;M++){const b=g[M];s.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var sT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oT=`#ifdef USE_ALPHAHASH
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
#endif`,lT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hT=`#ifdef USE_AOMAP
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
#endif`,dT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pT=`#ifdef USE_BATCHING
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
#endif`,mT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_T=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xT=`#ifdef USE_IRIDESCENCE
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
#endif`,yT=`#ifdef USE_BUMPMAP
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
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wT=`#define PI 3.141592653589793
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
} // validated`,DT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UT=`vec3 transformedNormal = objectNormal;
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
#endif`,NT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zT="gl_FragColor = linearToOutputTexel( gl_FragColor );",BT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HT=`#ifdef USE_ENVMAP
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
#endif`,GT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qT=`#ifdef USE_GRADIENTMAP
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
}`,YT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QT=`uniform bool receiveShadow;
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
#endif`,JT=`#ifdef USE_ENVMAP
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
#endif`,$T=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i1=`PhysicalMaterial material;
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
#endif`,a1=`struct PhysicalMaterial {
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
}`,r1=`
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m1=`#if defined( USE_POINTS_UV )
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
#endif`,g1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
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
#endif`,M1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C1=`#ifdef USE_NORMALMAP
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
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X1=`float getShadowMask() {
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
}`,j1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y1=`#ifdef USE_SKINNING
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
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$1=`#ifdef USE_TRANSMISSION
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
#endif`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sA=`uniform sampler2D t2D;
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`#include <common>
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
}`,hA=`#if DEPTH_PACKING == 3200
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
}`,dA=`#define DISTANCE
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
}`,pA=`#define DISTANCE
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
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`uniform float scale;
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
}`,_A=`uniform vec3 diffuse;
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
}`,xA=`#include <common>
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
}`,yA=`uniform vec3 diffuse;
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
}`,SA=`#define LAMBERT
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
}`,MA=`#define LAMBERT
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
}`,EA=`#define MATCAP
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
}`,bA=`#define MATCAP
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
}`,TA=`#define NORMAL
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
}`,AA=`#define NORMAL
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
}`,RA=`#define PHONG
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
}`,CA=`#define PHONG
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
}`,wA=`#define STANDARD
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
}`,DA=`#define STANDARD
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
}`,UA=`#define TOON
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
}`,NA=`#define TOON
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
}`,LA=`uniform float size;
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
}`,OA=`uniform vec3 diffuse;
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
}`,PA=`#include <common>
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
}`,zA=`uniform vec3 color;
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
}`,BA=`uniform float rotation;
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
}`,IA=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:sT,alphahash_pars_fragment:oT,alphamap_fragment:lT,alphamap_pars_fragment:cT,alphatest_fragment:uT,alphatest_pars_fragment:fT,aomap_fragment:hT,aomap_pars_fragment:dT,batching_pars_vertex:pT,batching_vertex:mT,begin_vertex:gT,beginnormal_vertex:vT,bsdfs:_T,iridescence_fragment:xT,bumpmap_pars_fragment:yT,clipping_planes_fragment:ST,clipping_planes_pars_fragment:MT,clipping_planes_pars_vertex:ET,clipping_planes_vertex:bT,color_fragment:TT,color_pars_fragment:AT,color_pars_vertex:RT,color_vertex:CT,common:wT,cube_uv_reflection_fragment:DT,defaultnormal_vertex:UT,displacementmap_pars_vertex:NT,displacementmap_vertex:LT,emissivemap_fragment:OT,emissivemap_pars_fragment:PT,colorspace_fragment:zT,colorspace_pars_fragment:BT,envmap_fragment:IT,envmap_common_pars_fragment:FT,envmap_pars_fragment:HT,envmap_pars_vertex:GT,envmap_physical_pars_fragment:JT,envmap_vertex:VT,fog_vertex:kT,fog_pars_vertex:XT,fog_fragment:jT,fog_pars_fragment:WT,gradientmap_pars_fragment:qT,lightmap_pars_fragment:YT,lights_lambert_fragment:ZT,lights_lambert_pars_fragment:KT,lights_pars_begin:QT,lights_toon_fragment:$T,lights_toon_pars_fragment:t1,lights_phong_fragment:e1,lights_phong_pars_fragment:n1,lights_physical_fragment:i1,lights_physical_pars_fragment:a1,lights_fragment_begin:r1,lights_fragment_maps:s1,lights_fragment_end:o1,logdepthbuf_fragment:l1,logdepthbuf_pars_fragment:c1,logdepthbuf_pars_vertex:u1,logdepthbuf_vertex:f1,map_fragment:h1,map_pars_fragment:d1,map_particle_fragment:p1,map_particle_pars_fragment:m1,metalnessmap_fragment:g1,metalnessmap_pars_fragment:v1,morphinstance_vertex:_1,morphcolor_vertex:x1,morphnormal_vertex:y1,morphtarget_pars_vertex:S1,morphtarget_vertex:M1,normal_fragment_begin:E1,normal_fragment_maps:b1,normal_pars_fragment:T1,normal_pars_vertex:A1,normal_vertex:R1,normalmap_pars_fragment:C1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:N1,opaque_fragment:L1,packing:O1,premultiplied_alpha_fragment:P1,project_vertex:z1,dithering_fragment:B1,dithering_pars_fragment:I1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:V1,shadowmap_vertex:k1,shadowmask_pars_fragment:X1,skinbase_vertex:j1,skinning_pars_vertex:W1,skinning_vertex:q1,skinnormal_vertex:Y1,specularmap_fragment:Z1,specularmap_pars_fragment:K1,tonemapping_fragment:Q1,tonemapping_pars_fragment:J1,transmission_fragment:$1,transmission_pars_fragment:tA,uv_pars_fragment:eA,uv_pars_vertex:nA,uv_vertex:iA,worldpos_vertex:aA,background_vert:rA,background_frag:sA,backgroundCube_vert:oA,backgroundCube_frag:lA,cube_vert:cA,cube_frag:uA,depth_vert:fA,depth_frag:hA,distanceRGBA_vert:dA,distanceRGBA_frag:pA,equirect_vert:mA,equirect_frag:gA,linedashed_vert:vA,linedashed_frag:_A,meshbasic_vert:xA,meshbasic_frag:yA,meshlambert_vert:SA,meshlambert_frag:MA,meshmatcap_vert:EA,meshmatcap_frag:bA,meshnormal_vert:TA,meshnormal_frag:AA,meshphong_vert:RA,meshphong_frag:CA,meshphysical_vert:wA,meshphysical_frag:DA,meshtoon_vert:UA,meshtoon_frag:NA,points_vert:LA,points_frag:OA,shadow_vert:PA,shadow_frag:zA,sprite_vert:BA,sprite_frag:IA},Pt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ni={basic:{uniforms:Pn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Pn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new be(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Pn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Pn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Pn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new be(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Pn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Pn([Pt.points,Pt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Pn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Pn([Pt.common,Pt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Pn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Pn([Pt.sprite,Pt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Pn([Pt.common,Pt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Pn([Pt.lights,Pt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ni.physical={uniforms:Pn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const zc={r:0,b:0,g:0},Mr=new Hi,FA=new Qe;function HA(s,t,i,r,l,c,f){const d=new be(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function b(N){let U=!1;const I=E(N);I===null?_(d,m):I&&I.isColor&&(_(I,1),U=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,U){const I=E(U);I&&(I.isCubeTexture||I.mapping===nu)?(v===void 0&&(v=new mn(new il(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:Ps(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Mr.copy(U.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(FA.makeRotationFromEuler(Mr)),v.material.toneMapped=De.getTransfer(I.colorSpace)!==He,(g!==I||x!==I.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=I,x=I.version,M=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new mn(new qa(2,2),new Qa({name:"BackgroundMaterial",uniforms:Ps(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=De.getTransfer(I.colorSpace)!==He,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||x!==I.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=I,x=I.version,M=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(zc,ox(s)),r.buffers.color.setClear(zc.r,zc.g,zc.b,U,f)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:b,addToRenderList:y,dispose:L}}function GA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function d(D,V,J,ot,pt){let lt=!1;const B=g(ot,J,V);c!==B&&(c=B,p(c.object)),lt=M(D,ot,J,pt),lt&&E(D,ot,J,pt),pt!==null&&t.update(pt,s.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,U(D,V,J,ot),pt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function v(D){return s.deleteVertexArray(D)}function g(D,V,J){const ot=J.wireframe===!0;let pt=r[D.id];pt===void 0&&(pt={},r[D.id]=pt);let lt=pt[V.id];lt===void 0&&(lt={},pt[V.id]=lt);let B=lt[ot];return B===void 0&&(B=x(m()),lt[ot]=B),B}function x(D){const V=[],J=[],ot=[];for(let pt=0;pt<i;pt++)V[pt]=0,J[pt]=0,ot[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:ot,object:D,attributes:{},index:null}}function M(D,V,J,ot){const pt=c.attributes,lt=V.attributes;let B=0;const K=J.getAttributes();for(const q in K)if(K[q].location>=0){const Tt=pt[q];let P=lt[q];if(P===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),Tt===void 0||Tt.attribute!==P||P&&Tt.data!==P.data)return!0;B++}return c.attributesNum!==B||c.index!==ot}function E(D,V,J,ot){const pt={},lt=V.attributes;let B=0;const K=J.getAttributes();for(const q in K)if(K[q].location>=0){let Tt=lt[q];Tt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Tt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Tt=D.instanceColor));const P={};P.attribute=Tt,Tt&&Tt.data&&(P.data=Tt.data),pt[q]=P,B++}c.attributes=pt,c.attributesNum=B,c.index=ot}function b(){const D=c.newAttributes;for(let V=0,J=D.length;V<J;V++)D[V]=0}function y(D){_(D,0)}function _(D,V){const J=c.newAttributes,ot=c.enabledAttributes,pt=c.attributeDivisors;J[D]=1,ot[D]===0&&(s.enableVertexAttribArray(D),ot[D]=1),pt[D]!==V&&(s.vertexAttribDivisor(D,V),pt[D]=V)}function L(){const D=c.newAttributes,V=c.enabledAttributes;for(let J=0,ot=V.length;J<ot;J++)V[J]!==D[J]&&(s.disableVertexAttribArray(J),V[J]=0)}function N(D,V,J,ot,pt,lt,B){B===!0?s.vertexAttribIPointer(D,V,J,pt,lt):s.vertexAttribPointer(D,V,J,ot,pt,lt)}function U(D,V,J,ot){b();const pt=ot.attributes,lt=J.getAttributes(),B=V.defaultAttributeValues;for(const K in lt){const q=lt[K];if(q.location>=0){let yt=pt[K];if(yt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const Tt=yt.normalized,P=yt.itemSize,Q=t.get(yt);if(Q===void 0)continue;const ht=Q.buffer,Mt=Q.type,Ct=Q.bytesPerElement,nt=Mt===s.INT||Mt===s.UNSIGNED_INT||yt.gpuType===ap;if(yt.isInterleavedBufferAttribute){const ut=yt.data,wt=ut.stride,It=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let jt=0;jt<q.locationSize;jt++)_(q.location+jt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let jt=0;jt<q.locationSize;jt++)y(q.location+jt);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let jt=0;jt<q.locationSize;jt++)N(q.location+jt,P/q.locationSize,Mt,Tt,wt*Ct,(It+P/q.locationSize*jt)*Ct,nt)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<q.locationSize;ut++)_(q.location+ut,yt.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<q.locationSize;ut++)y(q.location+ut);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let ut=0;ut<q.locationSize;ut++)N(q.location+ut,P/q.locationSize,Mt,Tt,P*Ct,P/q.locationSize*ut*Ct,nt)}}else if(B!==void 0){const Tt=B[K];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(q.location,Tt);break;case 3:s.vertexAttrib3fv(q.location,Tt);break;case 4:s.vertexAttrib4fv(q.location,Tt);break;default:s.vertexAttrib1fv(q.location,Tt)}}}}L()}function I(){j();for(const D in r){const V=r[D];for(const J in V){const ot=V[J];for(const pt in ot)v(ot[pt].object),delete ot[pt];delete V[J]}delete r[D]}}function F(D){if(r[D.id]===void 0)return;const V=r[D.id];for(const J in V){const ot=V[J];for(const pt in ot)v(ot[pt].object),delete ot[pt];delete V[J]}delete r[D.id]}function z(D){for(const V in r){const J=r[V];if(J[D.id]===void 0)continue;const ot=J[D.id];for(const pt in ot)v(ot[pt].object),delete ot[pt];delete J[D.id]}}function j(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:L}}function VA(s,t,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function f(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=v[E];i.update(M,r,1)}function m(p,v,g,x){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],v[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let E=0;for(let b=0;b<g;b++)E+=v[b]*x[b];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function kA(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==bi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===$o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Fi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==fa&&!j)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:I,maxSamples:F}}function XA(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new br,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||l;return l=x,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,M){const E=g.clippingPlanes,b=g.clipIntersection,y=g.clipShadows,_=s.get(g);if(!l||E===null||E.length===0||c&&!y)c?v(null):p();else{const L=c?0:r,N=L*4;let U=_.clippingState||null;m.value=U,U=v(E,x,N,M);for(let I=0;I!==N;++I)U[I]=i[I];_.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,x,M,E){const b=g!==null?g.length:0;let y=null;if(b!==0){if(y=m.value,E!==!0||y===null){const _=M+b*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,U=M;N!==b;++N,U+=4)f.copy(g[N]).applyMatrix4(L,d),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function jA(s){let t=new WeakMap;function i(f,d){return d===pd?f.mapping=Ns:d===md&&(f.mapping=Ls),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===pd||d===md)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Xb(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Cs=4,K_=[.125,.215,.35,.446,.526,.582],Rr=20,Qh=new px,Q_=new be;let Jh=null,$h=0,td=0,ed=!1;const Tr=(1+Math.sqrt(5))/2,Rs=1/Tr,J_=[new $(-Tr,Rs,0),new $(Tr,Rs,0),new $(-Rs,0,Tr),new $(Rs,0,Tr),new $(0,Tr,-Rs),new $(0,Tr,Rs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],WA=new $;class $_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=WA}=c;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,$h,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,Bc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ns||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:$o,format:bi,colorSpace:Os,depthBuffer:!1},l=t0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qA(c)),this._blurMaterial=YA(c,t,i)}return l}_compileMaterial(t){const i=new mn(this._lodPlanes[0],t);this._renderer.compile(i,Qh)}_sceneToCubeUV(t,i,r,l,c){const m=new ii(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(Q_),g.toneMapping=Za,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const b=new ko({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),y=new mn(new il,b);let _=!1;const L=t.background;L?L.isColor&&(b.color.copy(L),t.background=null,_=!0):(b.color.copy(Q_),_=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[N]));const I=this._cubeSize;Bc(l,U*I,N>2?I:0,I,I),g.setRenderTarget(l),_&&g.render(y,m),g.render(t,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=M,g.autoClear=x,t.background=L}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ns||t.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new mn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Bc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Qh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=J_[(l-c-1)%J_.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new mn(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rr-1),b=c/E,y=isFinite(c)?1+Math.floor(v*b):Rr;y>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rr}`);const _=[];let L=0;for(let z=0;z<Rr;++z){const j=z/b,w=Math.exp(-j*j/2);_.push(w),z===0?L+=w:z<y&&(L+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-r;const U=this._sizeLods[l],I=3*U*(l>N-Cs?l-N+Cs:0),F=4*(this._cubeSize-U);Bc(i,I,F,3*U,2*U),m.setRenderTarget(i),m.render(g,Qh)}}function qA(s){const t=[],i=[],r=[];let l=s;const c=s-Cs+1+K_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-Cs?m=K_[f-s+Cs-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,E=6,b=3,y=2,_=1,L=new Float32Array(b*E*M),N=new Float32Array(y*E*M),U=new Float32Array(_*E*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,j=F>2?0:-1,w=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];L.set(w,b*E*F),N.set(x,y*E*F);const D=[F,F,F,F,F,F];U.set(D,_*E*F)}const I=new Wn;I.setAttribute("position",new Bi(L,b)),I.setAttribute("uv",new Bi(N,y)),I.setAttribute("faceIndex",new Bi(U,_)),t.push(I),l>Cs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function t0(s,t,i){const r=new Ur(s,t,i);return r.texture.mapping=nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function YA(s,t,i){const r=new Float32Array(Rr),l=new $(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_p(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function e0(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_p(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function n0(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_p(),fragmentShader:`

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
	`}function ZA(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===pd||m===md,v=m===Ns||m===Ls;if(p||v){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new $_(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new $_(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function KA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Zo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function QA(s,t,i,r){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,E=g.attributes.position;let b=0;if(M!==null){const L=M.array;b=M.version;for(let N=0,U=L.length;N<U;N+=3){const I=L[N+0],F=L[N+1],z=L[N+2];x.push(I,F,F,z,z,I)}}else if(E!==void 0){const L=E.array;b=E.version;for(let N=0,U=L.length/3-1;N<U;N+=3){const I=N+0,F=N+1,z=N+2;x.push(I,F,F,z,z,I)}}else return;const y=new(tx(x)?sx:rx)(x,1);y.version=b;const _=c.get(g);_&&t.remove(_),c.set(g,y)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function JA(s,t,i){let r;function l(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*f),i.update(M,r,1)}function p(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,x*f,E),i.update(M,r,E))}function v(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,E);let y=0;for(let _=0;_<E;_++)y+=M[_];i.update(y,r,1)}function g(x,M,E,b){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/f,M[_],b[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,b,0,E);let _=0;for(let L=0;L<E;L++)_+=M[L]*b[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function $A(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function tR(s,t,i){const r=new WeakMap,l=new Ge;function c(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let D=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),b===!0&&(U=2),y===!0&&(U=3);let I=d.attributes.position.count*U,F=1;I>t.maxTextureSize&&(F=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*F*4*g),j=new ex(z,I,F,g);j.type=fa,j.needsUpdate=!0;const w=U*4;for(let V=0;V<g;V++){const J=_[V],ot=L[V],pt=N[V],lt=I*F*4*V;for(let B=0;B<J.count;B++){const K=B*w;E===!0&&(l.fromBufferAttribute(J,B),z[lt+K+0]=l.x,z[lt+K+1]=l.y,z[lt+K+2]=l.z,z[lt+K+3]=0),b===!0&&(l.fromBufferAttribute(ot,B),z[lt+K+4]=l.x,z[lt+K+5]=l.y,z[lt+K+6]=l.z,z[lt+K+7]=0),y===!0&&(l.fromBufferAttribute(pt,B),z[lt+K+8]=l.x,z[lt+K+9]=l.y,z[lt+K+10]=l.z,z[lt+K+11]=pt.itemSize===4?l.w:1)}}x={count:g,texture:j,size:new Te(I,F)},r.set(d,x),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function eR(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const gx=new jn,i0=new fx(1,1),vx=new ex,_x=new Rb,xx=new cx,a0=[],r0=[],s0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function Hs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=a0[l];if(c===void 0&&(c=new Float32Array(l),a0[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function gn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function vn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function au(s,t){let i=r0[t];i===void 0&&(i=new Int32Array(t),r0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function nR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function iR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2fv(this.addr,t),vn(i,t)}}function aR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;s.uniform3fv(this.addr,t),vn(i,t)}}function rR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4fv(this.addr,t),vn(i,t)}}function sR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;l0.set(r),s.uniformMatrix2fv(this.addr,!1,l0),vn(i,r)}}function oR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;o0.set(r),s.uniformMatrix3fv(this.addr,!1,o0),vn(i,r)}}function lR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;s0.set(r),s.uniformMatrix4fv(this.addr,!1,s0),vn(i,r)}}function cR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function uR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2iv(this.addr,t),vn(i,t)}}function fR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3iv(this.addr,t),vn(i,t)}}function hR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4iv(this.addr,t),vn(i,t)}}function dR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function pR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2uiv(this.addr,t),vn(i,t)}}function mR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3uiv(this.addr,t),vn(i,t)}}function gR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4uiv(this.addr,t),vn(i,t)}}function vR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(i0.compareFunction=$0,c=i0):c=gx,i.setTexture2D(t||c,l)}function _R(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||_x,l)}function xR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||xx,l)}function yR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||vx,l)}function SR(s){switch(s){case 5126:return nR;case 35664:return iR;case 35665:return aR;case 35666:return rR;case 35674:return sR;case 35675:return oR;case 35676:return lR;case 5124:case 35670:return cR;case 35667:case 35671:return uR;case 35668:case 35672:return fR;case 35669:case 35673:return hR;case 5125:return dR;case 36294:return pR;case 36295:return mR;case 36296:return gR;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return yR}}function MR(s,t){s.uniform1fv(this.addr,t)}function ER(s,t){const i=Hs(t,this.size,2);s.uniform2fv(this.addr,i)}function bR(s,t){const i=Hs(t,this.size,3);s.uniform3fv(this.addr,i)}function TR(s,t){const i=Hs(t,this.size,4);s.uniform4fv(this.addr,i)}function AR(s,t){const i=Hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function RR(s,t){const i=Hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function CR(s,t){const i=Hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function wR(s,t){s.uniform1iv(this.addr,t)}function DR(s,t){s.uniform2iv(this.addr,t)}function UR(s,t){s.uniform3iv(this.addr,t)}function NR(s,t){s.uniform4iv(this.addr,t)}function LR(s,t){s.uniform1uiv(this.addr,t)}function OR(s,t){s.uniform2uiv(this.addr,t)}function PR(s,t){s.uniform3uiv(this.addr,t)}function zR(s,t){s.uniform4uiv(this.addr,t)}function BR(s,t,i){const r=this.cache,l=t.length,c=au(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||gx,c[f])}function IR(s,t,i){const r=this.cache,l=t.length,c=au(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||_x,c[f])}function FR(s,t,i){const r=this.cache,l=t.length,c=au(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||xx,c[f])}function HR(s,t,i){const r=this.cache,l=t.length,c=au(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||vx,c[f])}function GR(s){switch(s){case 5126:return MR;case 35664:return ER;case 35665:return bR;case 35666:return TR;case 35674:return AR;case 35675:return RR;case 35676:return CR;case 5124:case 35670:return wR;case 35667:case 35671:return DR;case 35668:case 35672:return UR;case 35669:case 35673:return NR;case 5125:return LR;case 36294:return OR;case 36295:return PR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return IR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return HR}}class VR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=SR(i.type)}}class kR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GR(i.type)}}class XR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function c0(s,t){s.seq.push(t),s.map[t.id]=t}function jR(s,t,i){const r=s.name,l=r.length;for(nd.lastIndex=0;;){const c=nd.exec(r),f=nd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){c0(i,p===void 0?new VR(d,s,t):new kR(d,s,t));break}else{let g=i.map[d];g===void 0&&(g=new XR(d),c0(i,g)),i=g}}}class jc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);jR(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function u0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const WR=37297;let qR=0;function YR(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const f0=new he;function ZR(s){De._getMatrix(f0,De.workingColorSpace,s);const t=`mat3( ${f0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case qc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function h0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+YR(s.getShaderSource(t),d)}else return c}function KR(s,t){const i=ZR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function QR(s,t){let i;switch(t){case nb:i="Linear";break;case ib:i="Reinhard";break;case ab:i="Cineon";break;case V0:i="ACESFilmic";break;case sb:i="AgX";break;case ob:i="Neutral";break;case rb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new $;function JR(){De.getLuminanceCoefficients(Ic);const s=Ic.x.toFixed(4),t=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $R(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function tC(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function eC(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Vo(s){return s!==""}function d0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nC=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(s){return s.replace(nC,aC)}const iC=new Map;function aC(s,t){let i=de[t];if(i===void 0){const r=iC.get(t);if(r!==void 0)i=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return qd(i)}const rC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(s){return s.replace(rC,sC)}function sC(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function g0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function oC(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===H0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===G0?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function lC(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case Ls:t="ENVMAP_TYPE_CUBE";break;case nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cC(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ls&&(t="ENVMAP_MODE_REFRACTION"),t}function uC(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ip:t="ENVMAP_BLENDING_MULTIPLY";break;case tb:t="ENVMAP_BLENDING_MIX";break;case eb:t="ENVMAP_BLENDING_ADD";break}return t}function fC(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function hC(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=oC(i),p=lC(i),v=cC(i),g=uC(i),x=fC(i),M=$R(i),E=tC(c),b=l.createProgram();let y,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(y=[g0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[g0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?de.tonemapping_pars_fragment:"",i.toneMapping!==Za?QR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,KR("linearToOutputTexel",i.outputColorSpace),JR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),f=qd(f),f=d0(f,i),f=p0(f,i),d=qd(d),d=d0(d,i),d=p0(d,i),f=m0(f),d=m0(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=L+y+f,U=L+_+d,I=u0(l,l.VERTEX_SHADER,N),F=u0(l,l.FRAGMENT_SHADER,U);l.attachShader(b,I),l.attachShader(b,F),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(V){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(b)||"",ot=l.getShaderInfoLog(I)||"",pt=l.getShaderInfoLog(F)||"",lt=J.trim(),B=ot.trim(),K=pt.trim();let q=!0,yt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,I,F);else{const Tt=h0(l,I,"vertex"),P=h0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+Tt+`
`+P)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(B===""||K==="")&&(yt=!1);yt&&(V.diagnostics={runnable:q,programLog:lt,vertexShader:{log:B,prefix:y},fragmentShader:{log:K,prefix:_}})}l.deleteShader(I),l.deleteShader(F),j=new jc(l,b),w=eC(l,b)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,WR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=F,this}let dC=0;class pC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new mC(t),i.set(t,r)),r}}class mC{constructor(t){this.id=dC++,this.code=t,this.usedTimes=0}}function gC(s,t,i,r,l,c,f){const d=new ix,m=new pC,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,D,V,J,ot){const pt=J.fog,lt=ot.geometry,B=w.isMeshStandardMaterial?J.environment:null,K=(w.isMeshStandardMaterial?i:t).get(w.envMap||B),q=K&&K.mapping===nu?K.image.height:null,yt=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Tt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,P=Tt!==void 0?Tt.length:0;let Q=0;lt.morphAttributes.position!==void 0&&(Q=1),lt.morphAttributes.normal!==void 0&&(Q=2),lt.morphAttributes.color!==void 0&&(Q=3);let ht,Mt,Ct,nt;if(yt){const Ae=Ni[yt];ht=Ae.vertexShader,Mt=Ae.fragmentShader}else ht=w.vertexShader,Mt=w.fragmentShader,m.update(w),Ct=m.getVertexShaderID(w),nt=m.getFragmentShaderID(w);const ut=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),It=ot.isInstancedMesh===!0,jt=ot.isBatchedMesh===!0,le=!!w.map,$e=!!w.matcap,G=!!K,me=!!w.aoMap,ae=!!w.lightMap,ee=!!w.bumpMap,Vt=!!w.normalMap,Ve=!!w.displacementMap,Wt=!!w.emissiveMap,se=!!w.metalnessMap,tn=!!w.roughnessMap,Ze=w.anisotropy>0,O=w.clearcoat>0,T=w.dispersion>0,it=w.iridescence>0,gt=w.sheen>0,Et=w.transmission>0,dt=Ze&&!!w.anisotropyMap,Kt=O&&!!w.clearcoatMap,Dt=O&&!!w.clearcoatNormalMap,Yt=O&&!!w.clearcoatRoughnessMap,Zt=it&&!!w.iridescenceMap,At=it&&!!w.iridescenceThicknessMap,Ut=gt&&!!w.sheenColorMap,Qt=gt&&!!w.sheenRoughnessMap,Bt=!!w.specularMap,Lt=!!w.specularColorMap,ce=!!w.specularIntensityMap,X=Et&&!!w.transmissionMap,Rt=Et&&!!w.thicknessMap,Nt=!!w.gradientMap,Ft=!!w.alphaMap,bt=w.alphaTest>0,xt=!!w.alphaHash,Ht=!!w.extensions;let re=Za;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(re=s.toneMapping);const Oe={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:ht,fragmentShader:Mt,defines:w.defines,customVertexShaderID:Ct,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:jt,batchingColor:jt&&ot._colorsTexture!==null,instancing:It,instancingColor:It&&ot.instanceColor!==null,instancingMorph:It&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Os,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:$e,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:ae,bumpMap:ee,normalMap:Vt,displacementMap:x&&Ve,emissiveMap:Wt,normalMapObjectSpace:Vt&&w.normalMapType===fb,normalMapTangentSpace:Vt&&w.normalMapType===J0,metalnessMap:se,roughnessMap:tn,anisotropy:Ze,anisotropyMap:dt,clearcoat:O,clearcoatMap:Kt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Yt,dispersion:T,iridescence:it,iridescenceMap:Zt,iridescenceThicknessMap:At,sheen:gt,sheenColorMap:Ut,sheenRoughnessMap:Qt,specularMap:Bt,specularColorMap:Lt,specularIntensityMap:ce,transmission:Et,transmissionMap:X,thicknessMap:Rt,gradientMap:Nt,opaque:w.transparent===!1&&w.blending===ws&&w.alphaToCoverage===!1,alphaMap:Ft,alphaTest:bt,alphaHash:xt,combine:w.combine,mapUv:le&&b(w.map.channel),aoMapUv:me&&b(w.aoMap.channel),lightMapUv:ae&&b(w.lightMap.channel),bumpMapUv:ee&&b(w.bumpMap.channel),normalMapUv:Vt&&b(w.normalMap.channel),displacementMapUv:Ve&&b(w.displacementMap.channel),emissiveMapUv:Wt&&b(w.emissiveMap.channel),metalnessMapUv:se&&b(w.metalnessMap.channel),roughnessMapUv:tn&&b(w.roughnessMap.channel),anisotropyMapUv:dt&&b(w.anisotropyMap.channel),clearcoatMapUv:Kt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&b(w.sheenRoughnessMap.channel),specularMapUv:Bt&&b(w.specularMap.channel),specularColorMapUv:Lt&&b(w.specularColorMap.channel),specularIntensityMapUv:ce&&b(w.specularIntensityMap.channel),transmissionMapUv:X&&b(w.transmissionMap.channel),thicknessMapUv:Rt&&b(w.thicknessMap.channel),alphaMapUv:Ft&&b(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Vt||Ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!lt.attributes.uv&&(le||Ft),fog:!!pt,useFog:w.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:wt,skinning:ot.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===He,decodeVideoTextureEmissive:Wt&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===He,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Li,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function _(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)D.push(V),D.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(L(D,w),N(D,w),D.push(s.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function L(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function N(w,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const D=E[w.type];let V;if(D){const J=Ni[D];V=Hb.clone(J.uniforms)}else V=w.uniforms;return V}function I(w,D){let V;for(let J=0,ot=v.length;J<ot;J++){const pt=v[J];if(pt.cacheKey===D){V=pt,++V.usedTimes;break}}return V===void 0&&(V=new hC(s,D,w,c),v.push(V)),V}function F(w){if(--w.usedTimes===0){const D=v.indexOf(w);v[D]=v[v.length-1],v.pop(),w.destroy()}}function z(w){m.remove(w)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:I,releaseProgram:F,releaseShaderCache:z,programs:v,dispose:j}}function vC(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function _C(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function v0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(g,x,M,E,b,y){let _=s[t];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:E,renderOrder:g.renderOrder,z:b,group:y},s[t]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=b,_.group=y),t++,_}function d(g,x,M,E,b,y){const _=f(g,x,M,E,b,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,x,M,E,b,y){const _=f(g,x,M,E,b,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||_C),r.length>1&&r.sort(x||v0),l.length>1&&l.sort(x||v0)}function v(){for(let g=t,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function xC(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new _0,s.set(r,[f])):l>=c.length?(f=new _0,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function yC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new be};break;case"SpotLight":i={position:new $,direction:new $,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=i,i}}}function SC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let MC=0;function EC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bC(s){const t=new yC,i=SC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,c=new Qe,f=new Qe;function d(p){let v=0,g=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,E=0,b=0,y=0,_=0,L=0,N=0,U=0,I=0,F=0,z=0;p.sort(EC);for(let w=0,D=p.length;w<D;w++){const V=p[w],J=V.color,ot=V.intensity,pt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=J.r*ot,g+=J.g*ot,x+=J.b*ot;else if(V.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(V.sh.coefficients[B],ot);z++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=lt,r.directionalShadowMatrix[M]=V.shadow.matrix,L++}r.directional[M]=B,M++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(J).multiplyScalar(ot),B.distance=pt,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,r.spot[b]=B;const K=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,K.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[b]=K.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[b]=q,r.spotShadowMap[b]=lt,U++}b++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(J).multiplyScalar(ot),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=B,y++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const K=V.shadow,q=i.get(V);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=V.shadow.matrix,N++}r.point[E]=B,E++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(ot),B.groundColor.copy(V.groundColor).multiplyScalar(ot),r.hemi[_]=B,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==M||j.pointLength!==E||j.spotLength!==b||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==L||j.numPointShadows!==N||j.numSpotShadows!==U||j.numSpotMaps!==I||j.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+I-F,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=z,j.directionalLength=M,j.pointLength=E,j.spotLength=b,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=L,j.numPointShadows=N,j.numSpotShadows=U,j.numSpotMaps=I,j.numLightProbes=z,r.version=MC++)}function m(p,v){let g=0,x=0,M=0,E=0,b=0;const y=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const N=p[_];if(N.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),g++}else if(N.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),f.identity(),c.copy(N.matrixWorld),c.premultiply(y),f.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const U=r.hemi[b];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(y),b++}}}return{setup:d,setupView:m,state:r}}function x0(s){const t=new bC(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function TC(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new x0(s),t.set(l,[d])):c>=f.length?(d=new x0(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const AC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RC=`uniform sampler2D shadow_pass;
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
}`;function CC(s,t,i){let r=new hp;const l=new Te,c=new Te,f=new Ge,d=new Qb({depthPacking:ub}),m=new Jb,p={},v=i.maxTextureSize,g={[Ka]:Xn,[Xn]:Ka,[Li]:Li},x=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:AC,fragmentShader:RC}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Wn;E.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new mn(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H0;let _=this.type;this.render=function(F,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const w=s.getRenderTarget(),D=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Ya),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ot=_!==ua&&this.type===ua,pt=_===ua&&this.type!==ua;for(let lt=0,B=F.length;lt<B;lt++){const K=F[lt],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const yt=q.getFrameExtents();if(l.multiply(yt),c.copy(q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/yt.x),l.x=c.x*yt.x,q.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/yt.y),l.y=c.y*yt.y,q.mapSize.y=c.y)),q.map===null||ot===!0||pt===!0){const P=this.type!==ua?{minFilter:Ti,magFilter:Ti}:{};q.map!==null&&q.map.dispose(),q.map=new Ur(l.x,l.y,P),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const Tt=q.getViewportCount();for(let P=0;P<Tt;P++){const Q=q.getViewport(P);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),J.viewport(f),q.updateMatrices(K,P),r=q.getFrustum(),U(z,j,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ua&&L(q,j),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(w,D,V)};function L(F,z){const j=t.update(b);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ur(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(z,null,j,x,b,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(z,null,j,M,b,null)}function N(F,z,j,w){let D=null;const V=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)D=V;else if(D=j.isPointLight===!0?m:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=D.uuid,ot=z.uuid;let pt=p[J];pt===void 0&&(pt={},p[J]=pt);let lt=pt[ot];lt===void 0&&(lt=D.clone(),pt[ot]=lt,z.addEventListener("dispose",I)),D=lt}if(D.visible=z.visible,D.wireframe=z.wireframe,w===ua?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:g[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,j.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const J=s.properties.get(D);J.light=j}return D}function U(F,z,j,w,D){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===ua)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const ot=t.update(F),pt=F.material;if(Array.isArray(pt)){const lt=ot.groups;for(let B=0,K=lt.length;B<K;B++){const q=lt[B],yt=pt[q.materialIndex];if(yt&&yt.visible){const Tt=N(F,yt,w,D);F.onBeforeShadow(s,F,z,j,ot,Tt,q),s.renderBufferDirect(j,null,ot,Tt,F,q),F.onAfterShadow(s,F,z,j,ot,Tt,q)}}}else if(pt.visible){const lt=N(F,pt,w,D);F.onBeforeShadow(s,F,z,j,ot,lt,null),s.renderBufferDirect(j,null,ot,lt,F,null),F.onAfterShadow(s,F,z,j,ot,lt,null)}}const J=F.children;for(let ot=0,pt=J.length;ot<pt;ot++)U(J[ot],z,j,w,D)}function I(F){F.target.removeEventListener("dispose",I);for(const j in p){const w=p[j],D=F.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const wC={[od]:ld,[cd]:hd,[ud]:dd,[Us]:fd,[ld]:od,[hd]:cd,[dd]:ud,[fd]:Us};function DC(s,t){function i(){let X=!1;const Rt=new Ge;let Nt=null;const Ft=new Ge(0,0,0,0);return{setMask:function(bt){Nt!==bt&&!X&&(s.colorMask(bt,bt,bt,bt),Nt=bt)},setLocked:function(bt){X=bt},setClear:function(bt,xt,Ht,re,Oe){Oe===!0&&(bt*=re,xt*=re,Ht*=re),Rt.set(bt,xt,Ht,re),Ft.equals(Rt)===!1&&(s.clearColor(bt,xt,Ht,re),Ft.copy(Rt))},reset:function(){X=!1,Nt=null,Ft.set(-1,0,0,0)}}}function r(){let X=!1,Rt=!1,Nt=null,Ft=null,bt=null;return{setReversed:function(xt){if(Rt!==xt){const Ht=t.get("EXT_clip_control");xt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Rt=xt;const re=bt;bt=null,this.setClear(re)}},getReversed:function(){return Rt},setTest:function(xt){xt?ut(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(xt){Nt!==xt&&!X&&(s.depthMask(xt),Nt=xt)},setFunc:function(xt){if(Rt&&(xt=wC[xt]),Ft!==xt){switch(xt){case od:s.depthFunc(s.NEVER);break;case ld:s.depthFunc(s.ALWAYS);break;case cd:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case ud:s.depthFunc(s.EQUAL);break;case fd:s.depthFunc(s.GEQUAL);break;case hd:s.depthFunc(s.GREATER);break;case dd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ft=xt}},setLocked:function(xt){X=xt},setClear:function(xt){bt!==xt&&(Rt&&(xt=1-xt),s.clearDepth(xt),bt=xt)},reset:function(){X=!1,Nt=null,Ft=null,bt=null,Rt=!1}}}function l(){let X=!1,Rt=null,Nt=null,Ft=null,bt=null,xt=null,Ht=null,re=null,Oe=null;return{setTest:function(Ae){X||(Ae?ut(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Ae){Rt!==Ae&&!X&&(s.stencilMask(Ae),Rt=Ae)},setFunc:function(Ae,Nn,ai){(Nt!==Ae||Ft!==Nn||bt!==ai)&&(s.stencilFunc(Ae,Nn,ai),Nt=Ae,Ft=Nn,bt=ai)},setOp:function(Ae,Nn,ai){(xt!==Ae||Ht!==Nn||re!==ai)&&(s.stencilOp(Ae,Nn,ai),xt=Ae,Ht=Nn,re=ai)},setLocked:function(Ae){X=Ae},setClear:function(Ae){Oe!==Ae&&(s.clearStencil(Ae),Oe=Ae)},reset:function(){X=!1,Rt=null,Nt=null,Ft=null,bt=null,xt=null,Ht=null,re=null,Oe=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],E=null,b=!1,y=null,_=null,L=null,N=null,U=null,I=null,F=null,z=new be(0,0,0),j=0,w=!1,D=null,V=null,J=null,ot=null,pt=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=K>=2);let yt=null,Tt={};const P=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),ht=new Ge().fromArray(P),Mt=new Ge().fromArray(Q);function Ct(X,Rt,Nt,Ft){const bt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(X,xt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Nt;Ht++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,Ft,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(Rt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return xt}const nt={};nt[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ut(s.DEPTH_TEST),f.setFunc(Us),ee(!1),Vt(x_),ut(s.CULL_FACE),me(Ya);function ut(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function wt(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function It(X,Rt){return g[X]!==Rt?(s.bindFramebuffer(X,Rt),g[X]=Rt,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Rt),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function jt(X,Rt){let Nt=M,Ft=!1;if(X){Nt=x.get(Rt),Nt===void 0&&(Nt=[],x.set(Rt,Nt));const bt=X.textures;if(Nt.length!==bt.length||Nt[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Ht=bt.length;xt<Ht;xt++)Nt[xt]=s.COLOR_ATTACHMENT0+xt;Nt.length=bt.length,Ft=!0}}else Nt[0]!==s.BACK&&(Nt[0]=s.BACK,Ft=!0);Ft&&s.drawBuffers(Nt)}function le(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const $e={[Ar]:s.FUNC_ADD,[BE]:s.FUNC_SUBTRACT,[IE]:s.FUNC_REVERSE_SUBTRACT};$e[FE]=s.MIN,$e[HE]=s.MAX;const G={[GE]:s.ZERO,[VE]:s.ONE,[kE]:s.SRC_COLOR,[rd]:s.SRC_ALPHA,[ZE]:s.SRC_ALPHA_SATURATE,[qE]:s.DST_COLOR,[jE]:s.DST_ALPHA,[XE]:s.ONE_MINUS_SRC_COLOR,[sd]:s.ONE_MINUS_SRC_ALPHA,[YE]:s.ONE_MINUS_DST_COLOR,[WE]:s.ONE_MINUS_DST_ALPHA,[KE]:s.CONSTANT_COLOR,[QE]:s.ONE_MINUS_CONSTANT_COLOR,[JE]:s.CONSTANT_ALPHA,[$E]:s.ONE_MINUS_CONSTANT_ALPHA};function me(X,Rt,Nt,Ft,bt,xt,Ht,re,Oe,Ae){if(X===Ya){b===!0&&(wt(s.BLEND),b=!1);return}if(b===!1&&(ut(s.BLEND),b=!0),X!==zE){if(X!==y||Ae!==w){if((_!==Ar||U!==Ar)&&(s.blendEquation(s.FUNC_ADD),_=Ar,U=Ar),Ae)switch(X){case ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case y_:s.blendFunc(s.ONE,s.ONE);break;case S_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case M_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case y_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case S_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,N=null,I=null,F=null,z.set(0,0,0),j=0,y=X,w=Ae}return}bt=bt||Rt,xt=xt||Nt,Ht=Ht||Ft,(Rt!==_||bt!==U)&&(s.blendEquationSeparate($e[Rt],$e[bt]),_=Rt,U=bt),(Nt!==L||Ft!==N||xt!==I||Ht!==F)&&(s.blendFuncSeparate(G[Nt],G[Ft],G[xt],G[Ht]),L=Nt,N=Ft,I=xt,F=Ht),(re.equals(z)===!1||Oe!==j)&&(s.blendColor(re.r,re.g,re.b,Oe),z.copy(re),j=Oe),y=X,w=!1}function ae(X,Rt){X.side===Li?wt(s.CULL_FACE):ut(s.CULL_FACE);let Nt=X.side===Xn;Rt&&(Nt=!Nt),ee(Nt),X.blending===ws&&X.transparent===!1?me(Ya):me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ft=X.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Wt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(X){D!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),D=X)}function Vt(X){X!==OE?(ut(s.CULL_FACE),X!==V&&(X===x_?s.cullFace(s.BACK):X===PE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),V=X}function Ve(X){X!==J&&(B&&s.lineWidth(X),J=X)}function Wt(X,Rt,Nt){X?(ut(s.POLYGON_OFFSET_FILL),(ot!==Rt||pt!==Nt)&&(s.polygonOffset(Rt,Nt),ot=Rt,pt=Nt)):wt(s.POLYGON_OFFSET_FILL)}function se(X){X?ut(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function tn(X){X===void 0&&(X=s.TEXTURE0+lt-1),yt!==X&&(s.activeTexture(X),yt=X)}function Ze(X,Rt,Nt){Nt===void 0&&(yt===null?Nt=s.TEXTURE0+lt-1:Nt=yt);let Ft=Tt[Nt];Ft===void 0&&(Ft={type:void 0,texture:void 0},Tt[Nt]=Ft),(Ft.type!==X||Ft.texture!==Rt)&&(yt!==Nt&&(s.activeTexture(Nt),yt=Nt),s.bindTexture(X,Rt||nt[X]),Ft.type=X,Ft.texture=Rt)}function O(){const X=Tt[yt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(X){ht.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ht.copy(X))}function Qt(X){Mt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Mt.copy(X))}function Bt(X,Rt){let Nt=p.get(Rt);Nt===void 0&&(Nt=new WeakMap,p.set(Rt,Nt));let Ft=Nt.get(X);Ft===void 0&&(Ft=s.getUniformBlockIndex(Rt,X.name),Nt.set(X,Ft))}function Lt(X,Rt){const Ft=p.get(Rt).get(X);m.get(Rt)!==Ft&&(s.uniformBlockBinding(Rt,Ft,X.__bindingPointIndex),m.set(Rt,Ft))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},yt=null,Tt={},g={},x=new WeakMap,M=[],E=null,b=!1,y=null,_=null,L=null,N=null,U=null,I=null,F=null,z=new be(0,0,0),j=0,w=!1,D=null,V=null,J=null,ot=null,pt=null,ht.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ut,disable:wt,bindFramebuffer:It,drawBuffers:jt,useProgram:le,setBlending:me,setMaterial:ae,setFlipSided:ee,setCullFace:Vt,setLineWidth:Ve,setPolygonOffset:Wt,setScissorTest:se,activeTexture:tn,bindTexture:Ze,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:it,texImage2D:Zt,texImage3D:At,updateUBOMapping:Bt,uniformBlockBinding:Lt,texStorage2D:Dt,texStorage3D:Yt,texSubImage2D:gt,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:Kt,scissor:Ut,viewport:Qt,reset:ce}}function UC(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Te,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return M?new OffscreenCanvas(O,T):Zc("canvas")}function b(O,T,it){let gt=1;const Et=Ze(O);if((Et.width>it||Et.height>it)&&(gt=it/Math.max(Et.width,Et.height)),gt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const dt=Math.floor(gt*Et.width),Kt=Math.floor(gt*Et.height);g===void 0&&(g=E(dt,Kt));const Dt=T?E(dt,Kt):g;return Dt.width=dt,Dt.height=Kt,Dt.getContext("2d").drawImage(O,0,0,dt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+dt+"x"+Kt+")."),Dt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(O,T,it,gt,Et=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let dt=T;if(T===s.RED&&(it===s.FLOAT&&(dt=s.R32F),it===s.HALF_FLOAT&&(dt=s.R16F),it===s.UNSIGNED_BYTE&&(dt=s.R8)),T===s.RED_INTEGER&&(it===s.UNSIGNED_BYTE&&(dt=s.R8UI),it===s.UNSIGNED_SHORT&&(dt=s.R16UI),it===s.UNSIGNED_INT&&(dt=s.R32UI),it===s.BYTE&&(dt=s.R8I),it===s.SHORT&&(dt=s.R16I),it===s.INT&&(dt=s.R32I)),T===s.RG&&(it===s.FLOAT&&(dt=s.RG32F),it===s.HALF_FLOAT&&(dt=s.RG16F),it===s.UNSIGNED_BYTE&&(dt=s.RG8)),T===s.RG_INTEGER&&(it===s.UNSIGNED_BYTE&&(dt=s.RG8UI),it===s.UNSIGNED_SHORT&&(dt=s.RG16UI),it===s.UNSIGNED_INT&&(dt=s.RG32UI),it===s.BYTE&&(dt=s.RG8I),it===s.SHORT&&(dt=s.RG16I),it===s.INT&&(dt=s.RG32I)),T===s.RGB_INTEGER&&(it===s.UNSIGNED_BYTE&&(dt=s.RGB8UI),it===s.UNSIGNED_SHORT&&(dt=s.RGB16UI),it===s.UNSIGNED_INT&&(dt=s.RGB32UI),it===s.BYTE&&(dt=s.RGB8I),it===s.SHORT&&(dt=s.RGB16I),it===s.INT&&(dt=s.RGB32I)),T===s.RGBA_INTEGER&&(it===s.UNSIGNED_BYTE&&(dt=s.RGBA8UI),it===s.UNSIGNED_SHORT&&(dt=s.RGBA16UI),it===s.UNSIGNED_INT&&(dt=s.RGBA32UI),it===s.BYTE&&(dt=s.RGBA8I),it===s.SHORT&&(dt=s.RGBA16I),it===s.INT&&(dt=s.RGBA32I)),T===s.RGB&&(it===s.UNSIGNED_INT_5_9_9_9_REV&&(dt=s.RGB9_E5),it===s.UNSIGNED_INT_10F_11F_11F_REV&&(dt=s.R11F_G11F_B10F)),T===s.RGBA){const Kt=Et?qc:De.getTransfer(gt);it===s.FLOAT&&(dt=s.RGBA32F),it===s.HALF_FLOAT&&(dt=s.RGBA16F),it===s.UNSIGNED_BYTE&&(dt=Kt===He?s.SRGB8_ALPHA8:s.RGBA8),it===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),it===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function U(O,T){let it;return O?T===null||T===Dr||T===Wo?it=s.DEPTH24_STENCIL8:T===fa?it=s.DEPTH32F_STENCIL8:T===jo&&(it=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Dr||T===Wo?it=s.DEPTH_COMPONENT24:T===fa?it=s.DEPTH_COMPONENT32F:T===jo&&(it=s.DEPTH_COMPONENT16),it}function I(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ti&&O.minFilter!==Oi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function F(O){const T=O.target;T.removeEventListener("dispose",F),j(T),T.isVideoTexture&&v.delete(T)}function z(O){const T=O.target;T.removeEventListener("dispose",z),D(T)}function j(O){const T=r.get(O);if(T.__webglInit===void 0)return;const it=O.source,gt=x.get(it);if(gt){const Et=gt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&w(O),Object.keys(gt).length===0&&x.delete(it)}r.remove(O)}function w(O){const T=r.get(O);s.deleteTexture(T.__webglTexture);const it=O.source,gt=x.get(it);delete gt[T.__cacheKey],f.memory.textures--}function D(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let Et=0;Et<T.__webglFramebuffer[gt].length;Et++)s.deleteFramebuffer(T.__webglFramebuffer[gt][Et]);else s.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)s.deleteFramebuffer(T.__webglFramebuffer[gt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=O.textures;for(let gt=0,Et=it.length;gt<Et;gt++){const dt=r.get(it[gt]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),f.memory.textures--),r.remove(it[gt])}r.remove(O)}let V=0;function J(){V=0}function ot(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function pt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function lt(O,T){const it=r.get(O);if(O.isVideoTexture&&se(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&it.__version!==O.version){const gt=O.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(it,O,T);return}}else O.isExternalTexture&&(it.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,it.__webglTexture,s.TEXTURE0+T)}function B(O,T){const it=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){nt(it,O,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,it.__webglTexture,s.TEXTURE0+T)}function K(O,T){const it=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){nt(it,O,T);return}i.bindTexture(s.TEXTURE_3D,it.__webglTexture,s.TEXTURE0+T)}function q(O,T){const it=r.get(O);if(O.version>0&&it.__version!==O.version){ut(it,O,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture,s.TEXTURE0+T)}const yt={[gd]:s.REPEAT,[Cr]:s.CLAMP_TO_EDGE,[vd]:s.MIRRORED_REPEAT},Tt={[Ti]:s.NEAREST,[lb]:s.NEAREST_MIPMAP_NEAREST,[mc]:s.NEAREST_MIPMAP_LINEAR,[Oi]:s.LINEAR,[Eh]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},P={[hb]:s.NEVER,[_b]:s.ALWAYS,[db]:s.LESS,[$0]:s.LEQUAL,[pb]:s.EQUAL,[vb]:s.GEQUAL,[mb]:s.GREATER,[gb]:s.NOTEQUAL};function Q(O,T){if(T.type===fa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Oi||T.magFilter===Eh||T.magFilter===mc||T.magFilter===wr||T.minFilter===Oi||T.minFilter===Eh||T.minFilter===mc||T.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,yt[T.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,yt[T.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,yt[T.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Tt[T.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Tt[T.minFilter]),T.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ti||T.minFilter!==mc&&T.minFilter!==wr||T.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ht(O,T){let it=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",F));const gt=T.source;let Et=x.get(gt);Et===void 0&&(Et={},x.set(gt,Et));const dt=pt(T);if(dt!==O.__cacheKey){Et[dt]===void 0&&(Et[dt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,it=!0),Et[dt].usedTimes++;const Kt=Et[O.__cacheKey];Kt!==void 0&&(Et[O.__cacheKey].usedTimes--,Kt.usedTimes===0&&w(T)),O.__cacheKey=dt,O.__webglTexture=Et[dt].texture}return it}function Mt(O,T,it){return Math.floor(Math.floor(O/it)/T)}function Ct(O,T,it,gt){const dt=O.updateRanges;if(dt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,it,gt,T.data);else{dt.sort((At,Ut)=>At.start-Ut.start);let Kt=0;for(let At=1;At<dt.length;At++){const Ut=dt[Kt],Qt=dt[At],Bt=Ut.start+Ut.count,Lt=Mt(Qt.start,T.width,4),ce=Mt(Ut.start,T.width,4);Qt.start<=Bt+1&&Lt===ce&&Mt(Qt.start+Qt.count-1,T.width,4)===Lt?Ut.count=Math.max(Ut.count,Qt.start+Qt.count-Ut.start):(++Kt,dt[Kt]=Qt)}dt.length=Kt+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),Yt=s.getParameter(s.UNPACK_SKIP_PIXELS),Zt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let At=0,Ut=dt.length;At<Ut;At++){const Qt=dt[At],Bt=Math.floor(Qt.start/4),Lt=Math.ceil(Qt.count/4),ce=Bt%T.width,X=Math.floor(Bt/T.width),Rt=Lt,Nt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ce,X,Rt,Nt,it,gt,T.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Zt)}}function nt(O,T,it){let gt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=s.TEXTURE_3D);const Et=ht(O,T),dt=T.source;i.bindTexture(gt,O.__webglTexture,s.TEXTURE0+it);const Kt=r.get(dt);if(dt.version!==Kt.__version||Et===!0){i.activeTexture(s.TEXTURE0+it);const Dt=De.getPrimaries(De.workingColorSpace),Yt=T.colorSpace===Wa?null:De.getPrimaries(T.colorSpace),Zt=T.colorSpace===Wa||Dt===Yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let At=b(T.image,!1,l.maxTextureSize);At=tn(T,At);const Ut=c.convert(T.format,T.colorSpace),Qt=c.convert(T.type);let Bt=N(T.internalFormat,Ut,Qt,T.colorSpace,T.isVideoTexture);Q(gt,T);let Lt;const ce=T.mipmaps,X=T.isVideoTexture!==!0,Rt=Kt.__version===void 0||Et===!0,Nt=dt.dataReady,Ft=I(T,At);if(T.isDepthTexture)Bt=U(T.format===Yo,T.type),Rt&&(X?i.texStorage2D(s.TEXTURE_2D,1,Bt,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Bt,At.width,At.height,0,Ut,Qt,null));else if(T.isDataTexture)if(ce.length>0){X&&Rt&&i.texStorage2D(s.TEXTURE_2D,Ft,Bt,ce[0].width,ce[0].height);for(let bt=0,xt=ce.length;bt<xt;bt++)Lt=ce[bt],X?Nt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Ut,Qt,Lt.data):i.texImage2D(s.TEXTURE_2D,bt,Bt,Lt.width,Lt.height,0,Ut,Qt,Lt.data);T.generateMipmaps=!1}else X?(Rt&&i.texStorage2D(s.TEXTURE_2D,Ft,Bt,At.width,At.height),Nt&&Ct(T,At,Ut,Qt)):i.texImage2D(s.TEXTURE_2D,0,Bt,At.width,At.height,0,Ut,Qt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,Bt,ce[0].width,ce[0].height,At.depth);for(let bt=0,xt=ce.length;bt<xt;bt++)if(Lt=ce[bt],T.format!==bi)if(Ut!==null)if(X){if(Nt)if(T.layerUpdates.size>0){const Ht=Z_(Lt.width,Lt.height,T.format,T.type);for(const re of T.layerUpdates){const Oe=Lt.data.subarray(re*Ht/Lt.data.BYTES_PER_ELEMENT,(re+1)*Ht/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,re,Lt.width,Lt.height,1,Ut,Oe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,At.depth,Ut,Lt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,bt,Bt,Lt.width,Lt.height,At.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Nt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,At.depth,Ut,Qt,Lt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,bt,Bt,Lt.width,Lt.height,At.depth,0,Ut,Qt,Lt.data)}else{X&&Rt&&i.texStorage2D(s.TEXTURE_2D,Ft,Bt,ce[0].width,ce[0].height);for(let bt=0,xt=ce.length;bt<xt;bt++)Lt=ce[bt],T.format!==bi?Ut!==null?X?Nt&&i.compressedTexSubImage2D(s.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Ut,Lt.data):i.compressedTexImage2D(s.TEXTURE_2D,bt,Bt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Nt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Ut,Qt,Lt.data):i.texImage2D(s.TEXTURE_2D,bt,Bt,Lt.width,Lt.height,0,Ut,Qt,Lt.data)}else if(T.isDataArrayTexture)if(X){if(Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,Bt,At.width,At.height,At.depth),Nt)if(T.layerUpdates.size>0){const bt=Z_(At.width,At.height,T.format,T.type);for(const xt of T.layerUpdates){const Ht=At.data.subarray(xt*bt/At.data.BYTES_PER_ELEMENT,(xt+1)*bt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xt,At.width,At.height,1,Ut,Qt,Ht)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ut,Qt,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,At.width,At.height,At.depth,0,Ut,Qt,At.data);else if(T.isData3DTexture)X?(Rt&&i.texStorage3D(s.TEXTURE_3D,Ft,Bt,At.width,At.height,At.depth),Nt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ut,Qt,At.data)):i.texImage3D(s.TEXTURE_3D,0,Bt,At.width,At.height,At.depth,0,Ut,Qt,At.data);else if(T.isFramebufferTexture){if(Rt)if(X)i.texStorage2D(s.TEXTURE_2D,Ft,Bt,At.width,At.height);else{let bt=At.width,xt=At.height;for(let Ht=0;Ht<Ft;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,Bt,bt,xt,0,Ut,Qt,null),bt>>=1,xt>>=1}}else if(ce.length>0){if(X&&Rt){const bt=Ze(ce[0]);i.texStorage2D(s.TEXTURE_2D,Ft,Bt,bt.width,bt.height)}for(let bt=0,xt=ce.length;bt<xt;bt++)Lt=ce[bt],X?Nt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Ut,Qt,Lt):i.texImage2D(s.TEXTURE_2D,bt,Bt,Ut,Qt,Lt);T.generateMipmaps=!1}else if(X){if(Rt){const bt=Ze(At);i.texStorage2D(s.TEXTURE_2D,Ft,Bt,bt.width,bt.height)}Nt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ut,Qt,At)}else i.texImage2D(s.TEXTURE_2D,0,Bt,Ut,Qt,At);y(T)&&_(gt),Kt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ut(O,T,it){if(T.image.length!==6)return;const gt=ht(O,T),Et=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+it);const dt=r.get(Et);if(Et.version!==dt.__version||gt===!0){i.activeTexture(s.TEXTURE0+it);const Kt=De.getPrimaries(De.workingColorSpace),Dt=T.colorSpace===Wa?null:De.getPrimaries(T.colorSpace),Yt=T.colorSpace===Wa||Kt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Ut=[];for(let xt=0;xt<6;xt++)!Zt&&!At?Ut[xt]=b(T.image[xt],!0,l.maxCubemapSize):Ut[xt]=At?T.image[xt].image:T.image[xt],Ut[xt]=tn(T,Ut[xt]);const Qt=Ut[0],Bt=c.convert(T.format,T.colorSpace),Lt=c.convert(T.type),ce=N(T.internalFormat,Bt,Lt,T.colorSpace),X=T.isVideoTexture!==!0,Rt=dt.__version===void 0||gt===!0,Nt=Et.dataReady;let Ft=I(T,Qt);Q(s.TEXTURE_CUBE_MAP,T);let bt;if(Zt){X&&Rt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,ce,Qt.width,Qt.height);for(let xt=0;xt<6;xt++){bt=Ut[xt].mipmaps;for(let Ht=0;Ht<bt.length;Ht++){const re=bt[Ht];T.format!==bi?Bt!==null?X?Nt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,re.width,re.height,Bt,re.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,ce,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,re.width,re.height,Bt,Lt,re.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,ce,re.width,re.height,0,Bt,Lt,re.data)}}}else{if(bt=T.mipmaps,X&&Rt){bt.length>0&&Ft++;const xt=Ze(Ut[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,ce,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(At){X?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ut[xt].width,Ut[xt].height,Bt,Lt,Ut[xt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Ut[xt].width,Ut[xt].height,0,Bt,Lt,Ut[xt].data);for(let Ht=0;Ht<bt.length;Ht++){const Oe=bt[Ht].image[xt].image;X?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,Oe.width,Oe.height,Bt,Lt,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,ce,Oe.width,Oe.height,0,Bt,Lt,Oe.data)}}else{X?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt,Lt,Ut[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Bt,Lt,Ut[xt]);for(let Ht=0;Ht<bt.length;Ht++){const re=bt[Ht];X?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,Bt,Lt,re.image[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,ce,Bt,Lt,re.image[xt])}}}y(T)&&_(s.TEXTURE_CUBE_MAP),dt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function wt(O,T,it,gt,Et,dt){const Kt=c.convert(it.format,it.colorSpace),Dt=c.convert(it.type),Yt=N(it.internalFormat,Kt,Dt,it.colorSpace),Zt=r.get(T),At=r.get(it);if(At.__renderTarget=T,!Zt.__hasExternalTextures){const Ut=Math.max(1,T.width>>dt),Qt=Math.max(1,T.height>>dt);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,dt,Yt,Ut,Qt,T.depth,0,Kt,Dt,null):i.texImage2D(Et,dt,Yt,Ut,Qt,0,Kt,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Wt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,Et,At.__webglTexture,0,Ve(T)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,Et,At.__webglTexture,dt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function It(O,T,it){if(s.bindRenderbuffer(s.RENDERBUFFER,O),T.depthBuffer){const gt=T.depthTexture,Et=gt&&gt.isDepthTexture?gt.type:null,dt=U(T.stencilBuffer,Et),Kt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Ve(T);Wt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,dt,T.width,T.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,dt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,dt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Kt,s.RENDERBUFFER,O)}else{const gt=T.textures;for(let Et=0;Et<gt.length;Et++){const dt=gt[Et],Kt=c.convert(dt.format,dt.colorSpace),Dt=c.convert(dt.type),Yt=N(dt.internalFormat,Kt,Dt,dt.colorSpace),Zt=Ve(T);it&&Wt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Yt,T.width,T.height):Wt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,Yt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Yt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const Et=gt.__webglTexture,dt=Ve(T);if(T.depthTexture.format===qo)Wt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Yo)Wt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function le(O){const T=r.get(O),it=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const gt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",Et)};gt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=gt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const gt=O.texture.mipmaps;gt&&gt.length>0?jt(T.__webglFramebuffer[0],O):jt(T.__webglFramebuffer,O)}else if(it){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=s.createRenderbuffer(),It(T.__webglDepthbuffer[gt],O,!1);else{const Et=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[gt];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,dt)}}else{const gt=O.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),It(T.__webglDepthbuffer,O,!1);else{const Et=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,dt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(O,T,it){const gt=r.get(O);T!==void 0&&wt(gt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),it!==void 0&&le(O)}function G(O){const T=O.texture,it=r.get(O),gt=r.get(T);O.addEventListener("dispose",z);const Et=O.textures,dt=O.isWebGLCubeRenderTarget===!0,Kt=Et.length>1;if(Kt||(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=T.version,f.memory.textures++),dt){it.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[Dt]=[];for(let Yt=0;Yt<T.mipmaps.length;Yt++)it.__webglFramebuffer[Dt][Yt]=s.createFramebuffer()}else it.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)it.__webglFramebuffer[Dt]=s.createFramebuffer()}else it.__webglFramebuffer=s.createFramebuffer();if(Kt)for(let Dt=0,Yt=Et.length;Dt<Yt;Dt++){const Zt=r.get(Et[Dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&Wt(O)===!1){it.__webglMultisampledFramebuffer=s.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Et.length;Dt++){const Yt=Et[Dt];it.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,it.__webglColorRenderbuffer[Dt]);const Zt=c.convert(Yt.format,Yt.colorSpace),At=c.convert(Yt.type),Ut=N(Yt.internalFormat,Zt,At,Yt.colorSpace,O.isXRRenderTarget===!0),Qt=Ve(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,Ut,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,it.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(it.__webglDepthRenderbuffer=s.createRenderbuffer(),It(it.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){i.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),Q(s.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)wt(it.__webglFramebuffer[Dt][Yt],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt);else wt(it.__webglFramebuffer[Dt],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Dt=0,Yt=Et.length;Dt<Yt;Dt++){const Zt=Et[Dt],At=r.get(Zt);let Ut=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,At.__webglTexture),Q(Ut,Zt),wt(it.__webglFramebuffer,O,Zt,s.COLOR_ATTACHMENT0+Dt,Ut,0),y(Zt)&&_(Ut)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Dt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,gt.__webglTexture),Q(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)wt(it.__webglFramebuffer[Yt],O,T,s.COLOR_ATTACHMENT0,Dt,Yt);else wt(it.__webglFramebuffer,O,T,s.COLOR_ATTACHMENT0,Dt,0);y(T)&&_(Dt),i.unbindTexture()}O.depthBuffer&&le(O)}function me(O){const T=O.textures;for(let it=0,gt=T.length;it<gt;it++){const Et=T[it];if(y(Et)){const dt=L(O),Kt=r.get(Et).__webglTexture;i.bindTexture(dt,Kt),_(dt),i.unbindTexture()}}}const ae=[],ee=[];function Vt(O){if(O.samples>0){if(Wt(O)===!1){const T=O.textures,it=O.width,gt=O.height;let Et=s.COLOR_BUFFER_BIT;const dt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Kt=r.get(O),Dt=T.length>1;if(Dt)for(let Zt=0;Zt<T.length;Zt++)i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Yt=O.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Zt=0;Zt<T.length;Zt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Zt]);const At=r.get(T[Zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,it,gt,0,0,it,gt,Et,s.NEAREST),m===!0&&(ae.length=0,ee.length=0,ae.push(s.COLOR_ATTACHMENT0+Zt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ae.push(dt),ee.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let Zt=0;Zt<T.length;Zt++){i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Zt]);const At=r.get(T[Zt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ve(O){return Math.min(l.maxSamples,O.samples)}function Wt(O){const T=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(O){const T=f.render.frame;v.get(O)!==T&&(v.set(O,T),O.update())}function tn(O,T){const it=O.colorSpace,gt=O.format,Et=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||it!==Os&&it!==Wa&&(De.getTransfer(it)===He?(gt!==bi||Et!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function Ze(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=J,this.setTexture2D=lt,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=$e,this.setupRenderTarget=G,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Wt}function NC(s,t){function i(r,l=Wa){let c;const f=De.getTransfer(l);if(r===Fi)return s.UNSIGNED_BYTE;if(r===rp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===W0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===q0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===X0)return s.BYTE;if(r===j0)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===ap)return s.INT;if(r===Dr)return s.UNSIGNED_INT;if(r===fa)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===Y0)return s.ALPHA;if(r===Z0)return s.RGB;if(r===bi)return s.RGBA;if(r===qo)return s.DEPTH_COMPONENT;if(r===Yo)return s.DEPTH_STENCIL;if(r===K0)return s.RED;if(r===op)return s.RED_INTEGER;if(r===Q0)return s.RG;if(r===lp)return s.RG_INTEGER;if(r===cp)return s.RGBA_INTEGER;if(r===Gc||r===Vc||r===kc||r===Xc)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_d||r===xd||r===yd||r===Sd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md||r===Ed||r===bd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Md||r===Ed)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===bd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Td||r===Ad||r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Nd||r===Ld||r===Od||r===Pd||r===zd||r===Bd||r===Id)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Td)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ad)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ud)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ld)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Od)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Id)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fd||r===Hd||r===Gd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Fd)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vd||r===kd||r===Xd||r===jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Vd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const LC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OC=`
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

}`;class PC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new hx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Qa({vertexShader:LC,fragmentShader:OC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new qa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zC extends Is{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,E=null;const b=typeof XRWebGLBinding<"u",y=new PC,_={},L=i.getContextAttributes();let N=null,U=null;const I=[],F=[],z=new Te;let j=null;const w=new ii;w.viewport=new Ge;const D=new ii;D.viewport=new Ge;const V=[w,D],J=new iT;let ot=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=I[nt];return ut===void 0&&(ut=new Wh,I[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=I[nt];return ut===void 0&&(ut=new Wh,I[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=I[nt];return ut===void 0&&(ut=new Wh,I[nt]=ut),ut.getHandSpace()};function lt(nt){const ut=F.indexOf(nt.inputSource);if(ut===-1)return;const wt=I[ut];wt!==void 0&&(wt.update(nt.inputSource,nt.frame,p||f),wt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function B(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",K);for(let nt=0;nt<I.length;nt++){const ut=F[nt];ut!==null&&(F[nt]=null,I[nt].disconnect(ut))}ot=null,pt=null,y.reset();for(const nt in _)delete _[nt];t.setRenderTarget(N),M=null,x=null,g=null,l=null,U=null,Ct.stop(),r.isPresenting=!1,t.setPixelRatio(j),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",B),l.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,It=null,jt=null;L.depth&&(jt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=L.stencil?Yo:qo,It=L.stencil?Wo:Dr);const le={colorFormat:i.RGBA8,depthFormat:jt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(le),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Ur(x.textureWidth,x.textureHeight,{format:bi,type:Fi,depthTexture:new fx(x.textureWidth,x.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const wt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Ur(M.framebufferWidth,M.framebufferHeight,{format:bi,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(nt){for(let ut=0;ut<nt.removed.length;ut++){const wt=nt.removed[ut],It=F.indexOf(wt);It>=0&&(F[It]=null,I[It].disconnect(wt))}for(let ut=0;ut<nt.added.length;ut++){const wt=nt.added[ut];let It=F.indexOf(wt);if(It===-1){for(let le=0;le<I.length;le++)if(le>=F.length){F.push(wt),It=le;break}else if(F[le]===null){F[le]=wt,It=le;break}if(It===-1)break}const jt=I[It];jt&&jt.connect(wt)}}const q=new $,yt=new $;function Tt(nt,ut,wt){q.setFromMatrixPosition(ut.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const It=q.distanceTo(yt),jt=ut.projectionMatrix.elements,le=wt.projectionMatrix.elements,$e=jt[14]/(jt[10]-1),G=jt[14]/(jt[10]+1),me=(jt[9]+1)/jt[5],ae=(jt[9]-1)/jt[5],ee=(jt[8]-1)/jt[0],Vt=(le[8]+1)/le[0],Ve=$e*ee,Wt=$e*Vt,se=It/(-ee+Vt),tn=se*-ee;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(tn),nt.translateZ(se),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),jt[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Ze=$e+se,O=G+se,T=Ve-tn,it=Wt+(It-tn),gt=me*G/O*Ze,Et=ae*G/O*Ze;nt.projectionMatrix.makePerspective(T,it,gt,Et,Ze,O),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function P(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ut=nt.near,wt=nt.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),J.near=D.near=w.near=ut,J.far=D.far=w.far=wt,(ot!==J.near||pt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),ot=J.near,pt=J.far),J.layers.mask=nt.layers.mask|6,w.layers.mask=J.layers.mask&3,D.layers.mask=J.layers.mask&5;const It=nt.parent,jt=J.cameras;P(J,It);for(let le=0;le<jt.length;le++)P(jt[le],It);jt.length===2?Tt(J,w,D):J.projectionMatrix.copy(w.projectionMatrix),Q(nt,J,It)};function Q(nt,ut,wt){wt===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(wt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Wd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(nt){return _[nt]};let ht=null;function Mt(nt,ut){if(v=ut.getViewerPose(p||f),E=ut,v!==null){const wt=v.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let It=!1;wt.length!==J.cameras.length&&(J.cameras.length=0,It=!0);for(let G=0;G<wt.length;G++){const me=wt[G];let ae=null;if(M!==null)ae=M.getViewport(me);else{const Vt=g.getViewSubImage(x,me);ae=Vt.viewport,G===0&&(t.setRenderTargetTextures(U,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(U))}let ee=V[G];ee===void 0&&(ee=new ii,ee.layers.enable(G),ee.viewport=new Ge,V[G]=ee),ee.matrix.fromArray(me.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(me.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ae.x,ae.y,ae.width,ae.height),G===0&&(J.matrix.copy(ee.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),It===!0&&J.cameras.push(ee)}const jt=l.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){g=r.getBinding();const G=g.getDepthInformation(wt[0]);G&&G.isValid&&G.texture&&y.init(G,l.renderState)}if(jt&&jt.includes("camera-access")&&b){t.state.unbindTexture(),g=r.getBinding();for(let G=0;G<wt.length;G++){const me=wt[G].camera;if(me){let ae=_[me];ae||(ae=new hx,_[me]=ae);const ee=g.getCameraImage(me);ae.sourceTexture=ee}}}}for(let wt=0;wt<I.length;wt++){const It=F[wt],jt=I[wt];It!==null&&jt!==void 0&&jt.update(It,ut,p||f)}ht&&ht(nt,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),E=null}const Ct=new mx;Ct.setAnimationLoop(Mt),this.setAnimationLoop=function(nt){ht=nt},this.dispose=function(){}}}const Er=new Hi,BC=new Qe;function IC(s,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,ox(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,L,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),g(y,_)):_.isMeshPhongMaterial?(c(y,_),v(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),b(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,L,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Xn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Xn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=t.get(_),N=L.envMap,U=L.envMapRotation;N&&(y.envMap.value=N,Er.copy(U),Er.x*=-1,Er.y*=-1,Er.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(BC.makeRotationFromEuler(Er)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,L,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){const L=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function FC(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,N){const U=N.program;r.uniformBlockBinding(L,U)}function p(L,N){let U=l[L.id];U===void 0&&(E(L),U=v(L),l[L.id]=U,L.addEventListener("dispose",y));const I=N.program;r.updateUBOMapping(L,I);const F=t.render.frame;c[L.id]!==F&&(x(L),c[L.id]=F)}function v(L){const N=g();L.__bindingPointIndex=N;const U=s.createBuffer(),I=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,I,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,U),U}function g(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const N=l[L.id],U=L.uniforms,I=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let F=0,z=U.length;F<z;F++){const j=Array.isArray(U[F])?U[F]:[U[F]];for(let w=0,D=j.length;w<D;w++){const V=j[w];if(M(V,F,w,I)===!0){const J=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let pt=0;for(let lt=0;lt<ot.length;lt++){const B=ot[lt],K=b(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,J+pt,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,pt),pt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,N,U,I){const F=L.value,z=N+"_"+U;if(I[z]===void 0)return typeof F=="number"||typeof F=="boolean"?I[z]=F:I[z]=F.clone(),!0;{const j=I[z];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return I[z]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function E(L){const N=L.uniforms;let U=0;const I=16;for(let z=0,j=N.length;z<j;z++){const w=Array.isArray(N[z])?N[z]:[N[z]];for(let D=0,V=w.length;D<V;D++){const J=w[D],ot=Array.isArray(J.value)?J.value:[J.value];for(let pt=0,lt=ot.length;pt<lt;pt++){const B=ot[pt],K=b(B),q=U%I,yt=q%K.boundary,Tt=q+yt;U+=yt,Tt!==0&&I-Tt<K.storage&&(U+=I-Tt),J.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=K.storage}}}const F=U%I;return F>0&&(U+=I-F),L.__size=U,L.__cache={},this}function b(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),N}function y(L){const N=L.target;N.removeEventListener("dispose",y);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class HC{constructor(t={}){const{canvas:i=yb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),b=new Int32Array(4);let y=null,_=null;const L=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let I=!1;this._outputColorSpace=pi;let F=0,z=0,j=null,w=-1,D=null;const V=new Ge,J=new Ge;let ot=null;const pt=new be(0);let lt=0,B=i.width,K=i.height,q=1,yt=null,Tt=null;const P=new Ge(0,0,B,K),Q=new Ge(0,0,B,K);let ht=!1;const Mt=new hp;let Ct=!1,nt=!1;const ut=new Qe,wt=new $,It=new Ge,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function $e(){return j===null?q:1}let G=r;function me(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${np}`),i.addEventListener("webglcontextlost",Nt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",bt,!1),G===null){const W="webgl2";if(G=me(W,C),G===null)throw me(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,ee,Vt,Ve,Wt,se,tn,Ze,O,T,it,gt,Et,dt,Kt,Dt,Yt,Zt,At,Ut,Qt,Bt,Lt,ce;function X(){ae=new KA(G),ae.init(),Bt=new NC(G,ae),ee=new kA(G,ae,t,Bt),Vt=new DC(G,ae),ee.reversedDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),Ve=new $A(G),Wt=new vC,se=new UC(G,ae,Vt,Wt,ee,Bt,Ve),tn=new jA(U),Ze=new ZA(U),O=new rT(G),Lt=new GA(G,O),T=new QA(G,O,Ve,Lt),it=new eR(G,T,O,Ve),At=new tR(G,ee,se),Dt=new XA(Wt),gt=new gC(U,tn,Ze,ae,ee,Lt,Dt),Et=new IC(U,Wt),dt=new xC,Kt=new TC(ae),Zt=new HA(U,tn,Ze,Vt,it,M,m),Yt=new CC(U,it,ee),ce=new FC(G,Ve,ee,Vt),Ut=new VA(G,ae,Ve),Qt=new JA(G,ae,Ve),Ve.programs=gt.programs,U.capabilities=ee,U.extensions=ae,U.properties=Wt,U.renderLists=dt,U.shadowMap=Yt,U.state=Vt,U.info=Ve}X();const Rt=new zC(U,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(B,K,!1))},this.getSize=function(C){return C.set(B,K)},this.setSize=function(C,W,rt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,K=W,i.width=Math.floor(C*q),i.height=Math.floor(W*q),rt===!0&&(i.style.width=C+"px",i.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(B*q,K*q).floor()},this.setDrawingBufferSize=function(C,W,rt){B=C,K=W,q=rt,i.width=Math.floor(C*rt),i.height=Math.floor(W*rt),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(P)},this.setViewport=function(C,W,rt,st){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,W,rt,st),Vt.viewport(V.copy(P).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,W,rt,st){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,W,rt,st),Vt.scissor(J.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){Vt.setScissorTest(ht=C)},this.setOpaqueSort=function(C){yt=C},this.setTransparentSort=function(C){Tt=C},this.getClearColor=function(C){return C.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,rt=!0){let st=0;if(C){let Z=!1;if(j!==null){const St=j.texture.format;Z=St===cp||St===lp||St===op}if(Z){const St=j.texture.type,Ot=St===Fi||St===Dr||St===jo||St===Wo||St===rp||St===sp,kt=Zt.getClearColor(),zt=Zt.getClearAlpha(),Jt=kt.r,ie=kt.g,$t=kt.b;Ot?(E[0]=Jt,E[1]=ie,E[2]=$t,E[3]=zt,G.clearBufferuiv(G.COLOR,0,E)):(b[0]=Jt,b[1]=ie,b[2]=$t,b[3]=zt,G.clearBufferiv(G.COLOR,0,b))}else st|=G.COLOR_BUFFER_BIT}W&&(st|=G.DEPTH_BUFFER_BIT),rt&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Zt.dispose(),dt.dispose(),Kt.dispose(),Wt.dispose(),tn.dispose(),Ze.dispose(),it.dispose(),Lt.dispose(),ce.dispose(),gt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",ai),Rt.removeEventListener("sessionend",Gs),Ai.stop()};function Nt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=Ve.autoReset,W=Yt.enabled,rt=Yt.autoUpdate,st=Yt.needsUpdate,Z=Yt.type;X(),Ve.autoReset=C,Yt.enabled=W,Yt.autoUpdate=rt,Yt.needsUpdate=st,Yt.type=Z}function bt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xt(C){const W=C.target;W.removeEventListener("dispose",xt),Ht(W)}function Ht(C){re(C),Wt.remove(C)}function re(C){const W=Wt.get(C).programs;W!==void 0&&(W.forEach(function(rt){gt.releaseProgram(rt)}),C.isShaderMaterial&&gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,rt,st,Z,St){W===null&&(W=jt);const Ot=Z.isMesh&&Z.matrixWorld.determinant()<0,kt=ga(C,W,rt,st,Z);Vt.setMaterial(st,Ot);let zt=rt.index,Jt=1;if(st.wireframe===!0){if(zt=T.getWireframeAttribute(rt),zt===void 0)return;Jt=2}const ie=rt.drawRange,$t=rt.attributes.position;let pe=ie.start*Jt,Ne=(ie.start+ie.count)*Jt;St!==null&&(pe=Math.max(pe,St.start*Jt),Ne=Math.min(Ne,(St.start+St.count)*Jt)),zt!==null?(pe=Math.max(pe,0),Ne=Math.min(Ne,zt.count)):$t!=null&&(pe=Math.max(pe,0),Ne=Math.min(Ne,$t.count));const ke=Ne-pe;if(ke<0||ke===1/0)return;Lt.setup(Z,st,kt,rt,zt);let Le,ge=Ut;if(zt!==null&&(Le=O.get(zt),ge=Qt,ge.setIndex(Le)),Z.isMesh)st.wireframe===!0?(Vt.setLineWidth(st.wireframeLinewidth*$e()),ge.setMode(G.LINES)):ge.setMode(G.TRIANGLES);else if(Z.isLine){let Xt=st.linewidth;Xt===void 0&&(Xt=1),Vt.setLineWidth(Xt*$e()),Z.isLineSegments?ge.setMode(G.LINES):Z.isLineLoop?ge.setMode(G.LINE_LOOP):ge.setMode(G.LINE_STRIP)}else Z.isPoints?ge.setMode(G.POINTS):Z.isSprite&&ge.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Zo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ge.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Xt=Z._multiDrawStarts,je=Z._multiDrawCounts,Re=Z._multiDrawCount,Mn=zt?O.get(zt).bytesPerElement:1,Gi=Wt.get(st).currentProgram.getUniforms();for(let _n=0;_n<Re;_n++)Gi.setValue(G,"_gl_DrawID",_n),ge.render(Xt[_n]/Mn,je[_n])}else if(Z.isInstancedMesh)ge.renderInstances(pe,ke,Z.count);else if(rt.isInstancedBufferGeometry){const Xt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,je=Math.min(rt.instanceCount,Xt);ge.renderInstances(pe,ke,je)}else ge.render(pe,ke)};function Oe(C,W,rt){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,qn(C,W,rt),C.side=Ka,C.needsUpdate=!0,qn(C,W,rt),C.side=Li):qn(C,W,rt)}this.compile=function(C,W,rt=null){rt===null&&(rt=C),_=Kt.get(rt),_.init(W),N.push(_),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),C!==rt&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const st=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const St=Z.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const kt=St[Ot];Oe(kt,rt,Z),st.add(kt)}else Oe(St,rt,Z),st.add(St)}),_=N.pop(),st},this.compileAsync=function(C,W,rt=null){const st=this.compile(C,W,rt);return new Promise(Z=>{function St(){if(st.forEach(function(Ot){Wt.get(Ot).currentProgram.isReady()&&st.delete(Ot)}),st.size===0){Z(C);return}setTimeout(St,10)}ae.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ae=null;function Nn(C){Ae&&Ae(C)}function ai(){Ai.stop()}function Gs(){Ai.start()}const Ai=new mx;Ai.setAnimationLoop(Nn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){Ae=C,Rt.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},Rt.addEventListener("sessionstart",ai),Rt.addEventListener("sessionend",Gs),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(W),W=Rt.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,W,j),_=Kt.get(C,N.length),_.init(W),N.push(_),ut.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Mt.setFromProjectionMatrix(ut,Pi,W.reversedDepth),nt=this.localClippingEnabled,Ct=Dt.init(this.clippingPlanes,nt),y=dt.get(C,L.length),y.init(),L.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const St=U.xr.getDepthSensingMesh();St!==null&&Nr(St,W,-1/0,U.sortObjects)}Nr(C,W,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(yt,Tt),le=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,le&&Zt.addToRenderList(y,C),this.info.render.frame++,Ct===!0&&Dt.beginShadows();const rt=_.state.shadowsArray;Yt.render(rt,C,W),Ct===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,Z=y.transmissive;if(_.setupLights(),W.isArrayCamera){const St=W.cameras;if(Z.length>0)for(let Ot=0,kt=St.length;Ot<kt;Ot++){const zt=St[Ot];Or(st,Z,C,zt)}le&&Zt.render(C);for(let Ot=0,kt=St.length;Ot<kt;Ot++){const zt=St[Ot];Lr(y,C,zt,zt.viewport)}}else Z.length>0&&Or(st,Z,C,W),le&&Zt.render(C),Lr(y,C,W);j!==null&&z===0&&(se.updateMultisampleRenderTarget(j),se.updateRenderTargetMipmap(j)),C.isScene===!0&&C.onAfterRender(U,C,W),Lt.resetDefaultState(),w=-1,D=null,N.pop(),N.length>0?(_=N[N.length-1],Ct===!0&&Dt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Nr(C,W,rt,st){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Mt.intersectsSprite(C)){st&&It.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ut);const Ot=it.update(C),kt=C.material;kt.visible&&y.push(C,Ot,kt,rt,It.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Mt.intersectsObject(C))){const Ot=it.update(C),kt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),It.copy(C.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),It.copy(Ot.boundingSphere.center)),It.applyMatrix4(C.matrixWorld).applyMatrix4(ut)),Array.isArray(kt)){const zt=Ot.groups;for(let Jt=0,ie=zt.length;Jt<ie;Jt++){const $t=zt[Jt],pe=kt[$t.materialIndex];pe&&pe.visible&&y.push(C,Ot,pe,rt,It.z,$t)}}else kt.visible&&y.push(C,Ot,kt,rt,It.z,null)}}const St=C.children;for(let Ot=0,kt=St.length;Ot<kt;Ot++)Nr(St[Ot],W,rt,st)}function Lr(C,W,rt,st){const Z=C.opaque,St=C.transmissive,Ot=C.transparent;_.setupLightsView(rt),Ct===!0&&Dt.setGlobalState(U.clippingPlanes,rt),st&&Vt.viewport(V.copy(st)),Z.length>0&&Ja(Z,W,rt),St.length>0&&Ja(St,W,rt),Ot.length>0&&Ja(Ot,W,rt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Or(C,W,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new Ur(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?$o:Fi,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const St=_.state.transmissionRenderTarget[st.id],Ot=st.viewport||V;St.setSize(Ot.z*U.transmissionResolutionScale,Ot.w*U.transmissionResolutionScale);const kt=U.getRenderTarget(),zt=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(St),U.getClearColor(pt),lt=U.getClearAlpha(),lt<1&&U.setClearColor(16777215,.5),U.clear(),le&&Zt.render(rt);const ie=U.toneMapping;U.toneMapping=Za;const $t=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),Ct===!0&&Dt.setGlobalState(U.clippingPlanes,st),Ja(C,rt,st),se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St),ae.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ne=0,ke=W.length;Ne<ke;Ne++){const Le=W[Ne],ge=Le.object,Xt=Le.geometry,je=Le.material,Re=Le.group;if(je.side===Li&&ge.layers.test(st.layers)){const Mn=je.side;je.side=Xn,je.needsUpdate=!0,Vs(ge,rt,st,Xt,je,Re),je.side=Mn,je.needsUpdate=!0,pe=!0}}pe===!0&&(se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St))}U.setRenderTarget(kt,zt,Jt),U.setClearColor(pt,lt),$t!==void 0&&(st.viewport=$t),U.toneMapping=ie}function Ja(C,W,rt){const st=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,St=C.length;Z<St;Z++){const Ot=C[Z],kt=Ot.object,zt=Ot.geometry,Jt=Ot.group;let ie=Ot.material;ie.allowOverride===!0&&st!==null&&(ie=st),kt.layers.test(rt.layers)&&Vs(kt,W,rt,zt,ie,Jt)}}function Vs(C,W,rt,st,Z,St){C.onBeforeRender(U,W,rt,st,Z,St),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(U,W,rt,st,C,St),Z.transparent===!0&&Z.side===Li&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,U.renderBufferDirect(rt,W,st,Z,C,St),Z.side=Ka,Z.needsUpdate=!0,U.renderBufferDirect(rt,W,st,Z,C,St),Z.side=Li):U.renderBufferDirect(rt,W,st,Z,C,St),C.onAfterRender(U,W,rt,st,Z,St)}function qn(C,W,rt){W.isScene!==!0&&(W=jt);const st=Wt.get(C),Z=_.state.lights,St=_.state.shadowsArray,Ot=Z.state.version,kt=gt.getParameters(C,Z.state,St,W,rt),zt=gt.getProgramCacheKey(kt);let Jt=st.programs;st.environment=C.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(C.isMeshStandardMaterial?Ze:tn).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",xt),Jt=new Map,st.programs=Jt);let ie=Jt.get(zt);if(ie!==void 0){if(st.currentProgram===ie&&st.lightsStateVersion===Ot)return Sn(C,kt),ie}else kt.uniforms=gt.getUniforms(C),C.onBeforeCompile(kt,U),ie=gt.acquireProgram(kt,zt),Jt.set(zt,ie),st.uniforms=kt.uniforms;const $t=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($t.clippingPlanes=Dt.uniform),Sn(C,kt),st.needsLights=ru(C),st.lightsStateVersion=Ot,st.needsLights&&($t.ambientLightColor.value=Z.state.ambient,$t.lightProbe.value=Z.state.probe,$t.directionalLights.value=Z.state.directional,$t.directionalLightShadows.value=Z.state.directionalShadow,$t.spotLights.value=Z.state.spot,$t.spotLightShadows.value=Z.state.spotShadow,$t.rectAreaLights.value=Z.state.rectArea,$t.ltc_1.value=Z.state.rectAreaLTC1,$t.ltc_2.value=Z.state.rectAreaLTC2,$t.pointLights.value=Z.state.point,$t.pointLightShadows.value=Z.state.pointShadow,$t.hemisphereLights.value=Z.state.hemi,$t.directionalShadowMap.value=Z.state.directionalShadowMap,$t.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$t.spotShadowMap.value=Z.state.spotShadowMap,$t.spotLightMatrix.value=Z.state.spotLightMatrix,$t.spotLightMap.value=Z.state.spotLightMap,$t.pointShadowMap.value=Z.state.pointShadowMap,$t.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=ie,st.uniformsList=null,ie}function on(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=jc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Sn(C,W){const rt=Wt.get(C);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function ga(C,W,rt,st,Z){W.isScene!==!0&&(W=jt),se.resetTextureUnits();const St=W.fog,Ot=st.isMeshStandardMaterial?W.environment:null,kt=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Os,zt=(st.isMeshStandardMaterial?Ze:tn).get(st.envMap||Ot),Jt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ie=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),$t=!!rt.morphAttributes.position,pe=!!rt.morphAttributes.normal,Ne=!!rt.morphAttributes.color;let ke=Za;st.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=U.toneMapping);const Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ge=Le!==void 0?Le.length:0,Xt=Wt.get(st),je=_.state.lights;if(Ct===!0&&(nt===!0||C!==D)){const dn=C===D&&st.id===w;Dt.setState(st,C,dn)}let Re=!1;st.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==je.state.version||Xt.outputColorSpace!==kt||Z.isBatchedMesh&&Xt.batching===!1||!Z.isBatchedMesh&&Xt.batching===!0||Z.isBatchedMesh&&Xt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Xt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Xt.instancing===!1||!Z.isInstancedMesh&&Xt.instancing===!0||Z.isSkinnedMesh&&Xt.skinning===!1||!Z.isSkinnedMesh&&Xt.skinning===!0||Z.isInstancedMesh&&Xt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Xt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Xt.instancingMorph===!1&&Z.morphTexture!==null||Xt.envMap!==zt||st.fog===!0&&Xt.fog!==St||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Dt.numPlanes||Xt.numIntersection!==Dt.numIntersection)||Xt.vertexAlphas!==Jt||Xt.vertexTangents!==ie||Xt.morphTargets!==$t||Xt.morphNormals!==pe||Xt.morphColors!==Ne||Xt.toneMapping!==ke||Xt.morphTargetsCount!==ge)&&(Re=!0):(Re=!0,Xt.__version=st.version);let Mn=Xt.currentProgram;Re===!0&&(Mn=qn(st,W,Z));let Gi=!1,_n=!1,tr=!1;const xe=Mn.getUniforms(),Cn=Xt.uniforms;if(Vt.useProgram(Mn.program)&&(Gi=!0,_n=!0,tr=!0),st.id!==w&&(w=st.id,_n=!0),Gi||D!==C){Vt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xe.setValue(G,"projectionMatrix",C.projectionMatrix),xe.setValue(G,"viewMatrix",C.matrixWorldInverse);const an=xe.map.cameraPosition;an!==void 0&&an.setValue(G,wt.setFromMatrixPosition(C.matrixWorld)),ee.logarithmicDepthBuffer&&xe.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&xe.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,_n=!0,tr=!0)}if(Z.isSkinnedMesh){xe.setOptional(G,Z,"bindMatrix"),xe.setOptional(G,Z,"bindMatrixInverse");const dn=Z.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),xe.setValue(G,"boneTexture",dn.boneTexture,se))}Z.isBatchedMesh&&(xe.setOptional(G,Z,"batchingTexture"),xe.setValue(G,"batchingTexture",Z._matricesTexture,se),xe.setOptional(G,Z,"batchingIdTexture"),xe.setValue(G,"batchingIdTexture",Z._indirectTexture,se),xe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xe.setValue(G,"batchingColorTexture",Z._colorsTexture,se));const Ln=rt.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&At.update(Z,rt,Mn),(_n||Xt.receiveShadow!==Z.receiveShadow)&&(Xt.receiveShadow=Z.receiveShadow,xe.setValue(G,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Cn.envMap.value=zt,Cn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(Cn.envMapIntensity.value=W.environmentIntensity),_n&&(xe.setValue(G,"toneMappingExposure",U.toneMappingExposure),Xt.needsLights&&ks(Cn,tr),St&&st.fog===!0&&Et.refreshFogUniforms(Cn,St),Et.refreshMaterialUniforms(Cn,st,q,K,_.state.transmissionRenderTarget[C.id]),jc.upload(G,on(Xt),Cn,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(jc.upload(G,on(Xt),Cn,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&xe.setValue(G,"center",Z.center),xe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),xe.setValue(G,"normalMatrix",Z.normalMatrix),xe.setValue(G,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const dn=st.uniformsGroups;for(let an=0,Pr=dn.length;an<Pr;an++){const Ri=dn[an];ce.update(Ri,Mn),ce.bind(Ri,Mn)}}return Mn}function ks(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function ru(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,W,rt){const st=Wt.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Wt.get(C.texture).__webglTexture=W,Wt.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const rt=Wt.get(C);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0};const su=G.createFramebuffer();this.setRenderTarget=function(C,W=0,rt=0){j=C,F=W,z=rt;let st=!0,Z=null,St=!1,Ot=!1;if(C){const zt=Wt.get(C);if(zt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(G.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)se.setupRenderTarget(C);else if(zt.__hasExternalTextures)se.rebindTextures(C,Wt.get(C.texture).__webglTexture,Wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $t=C.depthTexture;if(zt.__boundDepthTexture!==$t){if($t!==null&&Wt.has($t)&&(C.width!==$t.image.width||C.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(C)}}const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ot=!0);const ie=Wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[W])?Z=ie[W][rt]:Z=ie[W],St=!0):C.samples>0&&se.useMultisampledRTT(C)===!1?Z=Wt.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?Z=ie[rt]:Z=ie,V.copy(C.viewport),J.copy(C.scissor),ot=C.scissorTest}else V.copy(P).multiplyScalar(q).floor(),J.copy(Q).multiplyScalar(q).floor(),ot=ht;if(rt!==0&&(Z=su),Vt.bindFramebuffer(G.FRAMEBUFFER,Z)&&st&&Vt.drawBuffers(C,Z),Vt.viewport(V),Vt.scissor(J),Vt.setScissorTest(ot),St){const zt=Wt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,rt)}else if(Ot){const zt=W;for(let Jt=0;Jt<C.textures.length;Jt++){const ie=Wt.get(C.textures[Jt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Jt,ie.__webglTexture,rt,zt)}}else if(C!==null&&rt!==0){const zt=Wt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(C,W,rt,st,Z,St,Ot,kt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){Vt.bindFramebuffer(G.FRAMEBUFFER,zt);try{const Jt=C.textures[kt],ie=Jt.format,$t=Jt.type;if(!ee.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-st&&rt>=0&&rt<=C.height-Z&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+kt),G.readPixels(W,rt,st,Z,Bt.convert(ie),Bt.convert($t),St))}finally{const Jt=j!==null?Wt.get(j).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(C,W,rt,st,Z,St,Ot,kt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(W>=0&&W<=C.width-st&&rt>=0&&rt<=C.height-Z){Vt.bindFramebuffer(G.FRAMEBUFFER,zt);const Jt=C.textures[kt],ie=Jt.format,$t=Jt.type;if(!ee.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,pe),G.bufferData(G.PIXEL_PACK_BUFFER,St.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+kt),G.readPixels(W,rt,st,Z,Bt.convert(ie),Bt.convert($t),0);const Ne=j!==null?Wt.get(j).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,Ne);const ke=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Sb(G,ke,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,pe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,St),G.deleteBuffer(pe),G.deleteSync(ke),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,rt=0){const st=Math.pow(2,-rt),Z=Math.floor(C.image.width*st),St=Math.floor(C.image.height*st),Ot=W!==null?W.x:0,kt=W!==null?W.y:0;se.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Ot,kt,Z,St),Vt.unbindTexture()};const al=G.createFramebuffer(),$a=G.createFramebuffer();this.copyTextureToTexture=function(C,W,rt=null,st=null,Z=0,St=null){St===null&&(Z!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=Z,Z=0):St=0);let Ot,kt,zt,Jt,ie,$t,pe,Ne,ke;const Le=C.isCompressedTexture?C.mipmaps[St]:C.image;if(rt!==null)Ot=rt.max.x-rt.min.x,kt=rt.max.y-rt.min.y,zt=rt.isBox3?rt.max.z-rt.min.z:1,Jt=rt.min.x,ie=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const Ln=Math.pow(2,-Z);Ot=Math.floor(Le.width*Ln),kt=Math.floor(Le.height*Ln),C.isDataArrayTexture?zt=Le.depth:C.isData3DTexture?zt=Math.floor(Le.depth*Ln):zt=1,Jt=0,ie=0,$t=0}st!==null?(pe=st.x,Ne=st.y,ke=st.z):(pe=0,Ne=0,ke=0);const ge=Bt.convert(W.format),Xt=Bt.convert(W.type);let je;W.isData3DTexture?(se.setTexture3D(W,0),je=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),je=G.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),je=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const Re=G.getParameter(G.UNPACK_ROW_LENGTH),Mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Gi=G.getParameter(G.UNPACK_SKIP_PIXELS),_n=G.getParameter(G.UNPACK_SKIP_ROWS),tr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ie),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$t);const xe=C.isDataArrayTexture||C.isData3DTexture,Cn=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const Ln=Wt.get(C),dn=Wt.get(W),an=Wt.get(Ln.__renderTarget),Pr=Wt.get(dn.__renderTarget);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,an.__webglFramebuffer),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let Ri=0;Ri<zt;Ri++)xe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Wt.get(C).__webglTexture,Z,$t+Ri),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Wt.get(W).__webglTexture,St,ke+Ri)),G.blitFramebuffer(Jt,ie,Ot,kt,pe,Ne,Ot,kt,G.DEPTH_BUFFER_BIT,G.NEAREST);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||Wt.has(C)){const Ln=Wt.get(C),dn=Wt.get(W);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,al),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,$a);for(let an=0;an<zt;an++)xe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ln.__webglTexture,Z,$t+an):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ln.__webglTexture,Z),Cn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,St,ke+an):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,St),Z!==0?G.blitFramebuffer(Jt,ie,Ot,kt,pe,Ne,Ot,kt,G.COLOR_BUFFER_BIT,G.NEAREST):Cn?G.copyTexSubImage3D(je,St,pe,Ne,ke+an,Jt,ie,Ot,kt):G.copyTexSubImage2D(je,St,pe,Ne,Jt,ie,Ot,kt);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Cn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(je,St,pe,Ne,ke,Ot,kt,zt,ge,Xt,Le.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(je,St,pe,Ne,ke,Ot,kt,zt,ge,Le.data):G.texSubImage3D(je,St,pe,Ne,ke,Ot,kt,zt,ge,Xt,Le):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,St,pe,Ne,Ot,kt,ge,Xt,Le.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,St,pe,Ne,Le.width,Le.height,ge,Le.data):G.texSubImage2D(G.TEXTURE_2D,St,pe,Ne,Ot,kt,ge,Xt,Le);G.pixelStorei(G.UNPACK_ROW_LENGTH,Re),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Gi),G.pixelStorei(G.UNPACK_SKIP_ROWS,_n),G.pixelStorei(G.UNPACK_SKIP_IMAGES,tr),St===0&&W.generateMipmaps&&G.generateMipmap(je),Vt.unbindTexture()},this.initRenderTarget=function(C){Wt.get(C).__webglFramebuffer===void 0&&se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),Vt.unbindTexture()},this.resetState=function(){F=0,z=0,j=null,Vt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}function GC(s){ft.useEffect(()=>{const t=s.current;if(!t)return;const i=new HC({canvas:t,antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.shadowMap.enabled=!0,i.shadowMap.type=G0,i.toneMapping=V0,i.toneMappingExposure=.85;const r=new Wb;r.background=new be("#07110a"),r.fog=new fp("#07110a",.035);const l=new ii(50,window.innerWidth/window.innerHeight,.1,200);l.position.set(0,18,28),l.lookAt(0,0,0);const c=new nT("#1a3a1a",2.2);r.add(c);const f=new Y_("#f0c840",2.8);f.position.set(10,20,15),f.castShadow=!0,f.shadow.camera.near=.5,f.shadow.camera.far=80,f.shadow.camera.left=-25,f.shadow.camera.right=25,f.shadow.camera.top=25,f.shadow.camera.bottom=-25,f.shadow.mapSize.set(1024,1024),r.add(f);const d=new Y_("#60c8f0",.9);d.position.set(-15,8,-10),r.add(d);const m=new tT("#0a4020",3,40);m.position.set(0,5,0),r.add(m);const p=new dp(22,72),v=new Sr({color:"#0a2210"}),g=new mn(p,v);g.rotation.x=-Math.PI/2,g.receiveShadow=!0,r.add(g);const x=new pp(22,32,72),M=new Sr({color:"#071009",side:Li}),E=new mn(x,M);E.rotation.x=-Math.PI/2,E.position.y=-.01,r.add(E);for(let Q=0;Q<10;Q++){const ht=new qa(44,2),Mt=new Sr({color:Q%2===0?"#0c2814":"#091f10",transparent:!0,opacity:.6}),Ct=new mn(ht,Mt);Ct.rotation.x=-Math.PI/2,Ct.position.set(0,.005,-9+Q*2),r.add(Ct)}const b=new qa(3,20),y=new Sr({color:"#c8a060"}),_=new mn(b,y);_.rotation.x=-Math.PI/2,_.position.y=.01,_.receiveShadow=!0,r.add(_);const L=new ko({color:"#ffffff"}),N=Q=>{const ht=new qa(3.8,.06),Mt=new mn(ht,L);Mt.rotation.x=-Math.PI/2,Mt.position.set(0,.02,Q),r.add(Mt)};N(-9),N(-7.3),N(9),N(7.3);const U=new ko({color:"#ffffff"}),I=(Q,ht)=>{const Mt=new qa(.06,1.2),Ct=new mn(Mt,U);Ct.rotation.x=-Math.PI/2,Ct.position.set(ht*1.9,.02,Q-.6),r.add(Ct)};I(-9,1),I(-9,-1),I(9,1),I(9,-1);const F=new Sr({color:"#f0e8c8"}),z=new Sr({color:"#f0e8c8"}),j=Q=>{for(let nt=-1;nt<=1;nt++){const ut=new Jc(.04,.04,.72,8),wt=new mn(ut,F);wt.position.set(nt*.115,.36,Q),wt.castShadow=!0,r.add(wt)}const ht=new Jc(.025,.025,.22,6),Mt=new mn(ht,z);Mt.rotation.z=Math.PI/2,Mt.position.set(-.057,.73,Q),r.add(Mt);const Ct=Mt.clone();Ct.position.set(.057,.73,Q),r.add(Ct)};j(-8.5),j(8.5);const w=[],D=20;for(let Q=0;Q<=128;Q++){const ht=Q/128*Math.PI*2;w.push(new $(Math.cos(ht)*D,.015,Math.sin(ht)*D))}const V=new Wn().setFromPoints(w),J=new ux({color:"#ffffff",opacity:.55,transparent:!0}),ot=new Kb(V,J);r.add(ot);const pt=70,lt=[];for(let Q=0;Q<pt;Q++){const ht=4+Math.random()*18,Mt=.12+Math.random()*.22,Ct=(Math.random()-.5)*1.4,nt=Math.random()*Math.PI*2,ut=1.5+Math.random()*12,wt=.4+Math.random()*.8,It=.5+Math.random()*1,jt=Math.random()*Math.PI*2,le=.08+Math.random()*.16,$e=new mp(le,12,8),G=new Sr({color:new be().setHSL(.02,.85,.32+Math.random()*.08)}),me=new mn($e,G);me.castShadow=!0;const ae=new gp(le*1.01,le*.08,4,24),ee=new ko({color:"#1a0808"}),Vt=new mn(ae,ee);Vt.rotation.x=Math.PI/2,me.add(Vt),me.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.add(me),lt.push({mesh:me,orbitR:ht,orbitSpeed:Mt,orbitTilt:Ct,orbitPhase:nt,height:ut,bobAmp:wt,bobSpeed:It,bobPhase:jt,spinSpeed:(Math.random()-.5)*2})}const B={x:0,y:0},K=Q=>{B.x=(Q.clientX/window.innerWidth-.5)*2,B.y=(Q.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",K);const q=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",q);let yt=0,Tt;const P=()=>{Tt=requestAnimationFrame(P),yt+=.008;const Q=28;l.position.x=Math.sin(yt*.18)*Q*.35+B.x*2.5,l.position.z=26+Math.cos(yt*.12)*3,l.position.y=16+Math.sin(yt*.08)*2-B.y*1.8,l.lookAt(0,2,0),lt.forEach((ht,Mt)=>{const Ct=yt*ht.orbitSpeed+ht.orbitPhase,nt=Math.cos(Ct)*ht.orbitR,ut=Math.sin(Ct)*ht.orbitR*Math.cos(ht.orbitTilt),wt=ht.height+Math.sin(Ct*ht.bobSpeed+ht.bobPhase)*ht.bobAmp+Math.sin(ht.orbitTilt)*Math.sin(Ct)*ht.orbitR*.3;ht.mesh.position.set(nt,wt,ut),ht.mesh.rotation.x+=ht.spinSpeed*.02,ht.mesh.rotation.y+=ht.spinSpeed*.015}),m.intensity=2.8+Math.sin(yt*1.2)*.4,i.render(r,l)};return P(),()=>{cancelAnimationFrame(Tt),window.removeEventListener("mousemove",K),window.removeEventListener("resize",q),i.dispose()}},[])}function VC(){const s=tu(),t=ft.useRef(null),[i,r]=ft.useState("login"),[l,c]=ft.useState(""),[f,d]=ft.useState(""),[m,p]=ft.useState(""),[v,g]=ft.useState(!1),[x,M]=ft.useState(!1);GC(t);const E=b=>{b.preventDefault(),M(!0),setTimeout(()=>{M(!1),s("/dashboard")},1500)};return R.jsxs(R.Fragment,{children:[R.jsx("canvas",{ref:t,className:"lg-canvas"}),R.jsxs("div",{className:"lg-page",children:[R.jsx("button",{className:"lg-back",onClick:()=>s("/"),children:"← Home"}),R.jsxs("div",{className:"lg-card",children:[R.jsxs("div",{className:"lg-brand",onClick:()=>s("/"),children:[R.jsx("img",{src:ep,alt:"GullyStat",className:"lg-brand-logo"}),R.jsx("span",{className:"lg-brand-name",children:"GullyStat"})]}),R.jsxs("div",{className:"lg-tabs",children:[R.jsx("button",{className:`lg-tab ${i==="login"?"active":""}`,onClick:()=>r("login"),children:"Login"}),R.jsx("button",{className:`lg-tab ${i==="signup"?"active":""}`,onClick:()=>r("signup"),children:"Sign Up"})]}),R.jsx("h1",{className:"lg-title",children:i==="login"?"Welcome back":"Join the mohalla"}),R.jsx("p",{className:"lg-subtitle",children:i==="login"?"Log in to track your gully legacy":"Create your account and start scoring"}),R.jsxs("button",{className:"lg-google",children:[R.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[R.jsx("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",fill:"#4285F4"}),R.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z",fill:"#34A853"}),R.jsx("path",{d:"M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z",fill:"#FBBC05"}),R.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 6.294C4.672 4.167 6.656 3.58 9 3.58z",fill:"#EA4335"})]}),"Continue with Google"]}),R.jsx("div",{className:"lg-divider",children:R.jsx("span",{children:"or continue with email"})}),R.jsxs("form",{onSubmit:E,className:"lg-form",children:[i==="signup"&&R.jsxs("div",{className:"lg-field",children:[R.jsx("label",{className:"lg-label",children:"Full name"}),R.jsx("div",{className:"lg-input-wrap",children:R.jsx("input",{className:"lg-input",type:"text",placeholder:"Rohit Sharma",value:m,onChange:b=>p(b.target.value),required:!0})})]}),R.jsxs("div",{className:"lg-field",children:[R.jsx("label",{className:"lg-label",children:"Email"}),R.jsx("div",{className:"lg-input-wrap",children:R.jsx("input",{className:"lg-input",type:"email",placeholder:"you@example.com",value:l,onChange:b=>c(b.target.value),required:!0})})]}),R.jsxs("div",{className:"lg-field",children:[R.jsxs("label",{className:"lg-label",children:[R.jsx("span",{children:"Password"}),i==="login"&&R.jsx("button",{type:"button",className:"lg-forgot",children:"Forgot password?"})]}),R.jsxs("div",{className:"lg-input-wrap",children:[R.jsx("input",{className:"lg-input lg-input-has-eye",type:v?"text":"password",placeholder:"••••••••",value:f,onChange:b=>d(b.target.value),required:!0}),R.jsx("button",{type:"button",className:"lg-eye",onClick:()=>g(b=>!b),children:v?"🙈":"👁️"})]})]}),R.jsx("button",{type:"submit",className:"lg-submit",disabled:x,children:x?R.jsx("span",{className:"lg-spinner"}):i==="login"?"🏏 Login to GullyStat":"🚀 Create Account"})]}),R.jsxs("p",{className:"lg-switch",children:[i==="login"?"Don't have an account? ":"Already have an account? ",R.jsx("button",{className:"lg-switch-btn",onClick:()=>r(i==="login"?"signup":"login"),children:i==="login"?"Sign up free":"Log in"})]})]})]})]})}const y0=[{path:"/dashboard",icon:"🏠",label:"Dashboard"},{path:"/start-match",icon:"🏏",label:"New Match"},{path:"/leaderboard",icon:"🏆",label:"Leaderboard"},{path:"/challenges",icon:"⚡",label:"Challenges"},{path:"/badges",icon:"🎖️",label:"Badges"},{path:"/head-to-head",icon:"⚔️",label:"Head to Head"},{path:"/tournaments",icon:"🥇",label:"Tournaments"},{path:"/ghost-profile",icon:"👻",label:"Ghost Profile"}];function Mi({children:s}){const[t,i]=ft.useState(!1),r=tu(),l=ma(),c=y0.find(f=>f.path===l.pathname)?.label||"GullyStat";return R.jsxs("div",{className:"layout",children:[R.jsx("canvas",{id:"bg-canvas"}),R.jsx("div",{className:"bg-vignette"}),R.jsx("div",{className:"bg-scanlines"}),R.jsxs("aside",{className:`sidebar ${t?"collapsed":""}`,children:[R.jsxs("div",{className:"sidebar-header",children:[R.jsx("img",{src:ep,alt:"GullyStat",className:"sidebar-logo"}),!t&&R.jsx("span",{className:"sidebar-title",children:"GULLYSTAT"})]}),R.jsx("nav",{className:"sidebar-nav",children:y0.map(f=>R.jsxs("button",{className:`nav-item ${l.pathname===f.path?"active":""}`,onClick:()=>r(f.path),children:[R.jsx("span",{className:"nav-icon",children:f.icon}),!t&&R.jsx("span",{className:"nav-label",children:f.label})]},f.path))}),R.jsx("button",{className:"collapse-btn",onClick:()=>i(!t),children:t?"▶":"◀"})]}),R.jsxs("div",{className:"main",children:[R.jsxs("header",{className:"topbar",children:[R.jsx("span",{className:"topbar-page",children:c}),R.jsxs("div",{className:"topbar-right",children:[R.jsxs("div",{className:"live-pill",children:[R.jsx("span",{className:"live-dot"}),"Live"]}),R.jsx("button",{className:"topbar-btn",children:"🔔"}),R.jsx("button",{className:"topbar-btn",children:"👤"})]})]}),R.jsx("main",{className:"content",children:s})]})]})}function kC(){return R.jsxs(eE,{basename:"/gullystat",children:[R.jsx(LE,{}),R.jsxs(UM,{children:[R.jsx(kn,{path:"/",element:R.jsx(yE,{})}),R.jsx(kn,{path:"/login",element:R.jsx(VC,{})}),R.jsx(kn,{path:"/dashboard",element:R.jsx(Mi,{children:R.jsx(SE,{})})}),R.jsx(kn,{path:"/start-match",element:R.jsx(Mi,{children:R.jsx(ME,{})})}),R.jsx(kn,{path:"/live-scorer",element:R.jsx(Mi,{children:R.jsx(EE,{})})}),R.jsx(kn,{path:"/scorecard/:id",element:R.jsx(Mi,{children:R.jsx(bE,{})})}),R.jsx(kn,{path:"/player/:id",element:R.jsx(Mi,{children:R.jsx(TE,{})})}),R.jsx(kn,{path:"/leaderboard",element:R.jsx(Mi,{children:R.jsx(AE,{})})}),R.jsx(kn,{path:"/challenges",element:R.jsx(Mi,{children:R.jsx(RE,{})})}),R.jsx(kn,{path:"/badges",element:R.jsx(Mi,{children:R.jsx(CE,{})})}),R.jsx(kn,{path:"/head-to-head",element:R.jsx(Mi,{children:R.jsx(wE,{})})}),R.jsx(kn,{path:"/tournaments",element:R.jsx(Mi,{children:R.jsx(DE,{})})}),R.jsx(kn,{path:"/ghost-profile",element:R.jsx(Mi,{children:R.jsx(UE,{})})})]})]})}OS.createRoot(document.getElementById("root")).render(R.jsx(ft.StrictMode,{children:R.jsx(kC,{})}));setTimeout(()=>{const s=document.getElementById("bg-canvas");if(!s)return;const t=s.getContext("2d"),i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$GS",r=["#0a2a0a","#0d3d0d","#1B5E20","#0a1a0a"],l=10,c=16;let f=[],d=0,m=0;function p(){s.width=window.innerWidth,s.height=window.innerHeight,d=Math.ceil(s.width/l),m=Math.ceil(s.height/c),f=Array.from({length:d*m},()=>({char:i[Math.floor(Math.random()*i.length)],color:r[Math.floor(Math.random()*r.length)],opacity:Math.random()*.6+.1}))}function v(){t.clearRect(0,0,s.width,s.height),t.font=`${c}px monospace`,t.textBaseline="top";const g=Math.max(1,Math.floor(f.length*.03));for(let x=0;x<g;x++){const M=Math.floor(Math.random()*f.length);f[M]&&(f[M].char=i[Math.floor(Math.random()*i.length)],f[M].color=r[Math.floor(Math.random()*r.length)],f[M].opacity=Math.random()*.6+.1)}f.forEach((x,M)=>{t.globalAlpha=x.opacity,t.fillStyle=x.color,t.fillText(x.char,M%d*l,Math.floor(M/d)*c)}),t.globalAlpha=1}p(),window.addEventListener("resize",p),setInterval(v,60)},100);
