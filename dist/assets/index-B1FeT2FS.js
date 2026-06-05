var Vy=Object.defineProperty;var Gy=(n,e,t)=>e in n?Vy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ye=(n,e,t)=>Gy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Kg={exports:{}},_u={},Zg={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll=Symbol.for("react.element"),Wy=Symbol.for("react.portal"),jy=Symbol.for("react.fragment"),Xy=Symbol.for("react.strict_mode"),qy=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),Ky=Symbol.for("react.forward_ref"),Zy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),Jy=Symbol.for("react.lazy"),jp=Symbol.iterator;function eS(n){return n===null||typeof n!="object"?null:(n=jp&&n[jp]||n["@@iterator"],typeof n=="function"?n:null)}var Qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jg=Object.assign,ev={};function Ko(n,e,t){this.props=n,this.context=e,this.refs=ev,this.updater=t||Qg}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ko.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function tv(){}tv.prototype=Ko.prototype;function yh(n,e,t){this.props=n,this.context=e,this.refs=ev,this.updater=t||Qg}var Sh=yh.prototype=new tv;Sh.constructor=yh;Jg(Sh,Ko.prototype);Sh.isPureReactComponent=!0;var Xp=Array.isArray,nv=Object.prototype.hasOwnProperty,Mh={current:null},iv={key:!0,ref:!0,__self:!0,__source:!0};function rv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nv.call(e,i)&&!iv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ll,type:n,key:s,ref:o,props:r,_owner:Mh.current}}function tS(n,e){return{$$typeof:ll,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Eh(n){return typeof n=="object"&&n!==null&&n.$$typeof===ll}function nS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var qp=/\/+/g;function Wu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?nS(""+n.key):e.toString(36)}function hc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ll:case Wy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Wu(o,0):i,Xp(r)?(t="",n!=null&&(t=n.replace(qp,"$&/")+"/"),hc(r,e,t,"",function(c){return c})):r!=null&&(Eh(r)&&(r=tS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(qp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Xp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Wu(s,a);o+=hc(s,e,t,l,r)}else if(l=eS(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Wu(s,a++),o+=hc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(n,e,t){if(n==null)return n;var i=[],r=0;return hc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function iS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var mn={current:null},pc={transition:null},rS={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:pc,ReactCurrentOwner:Mh};function sv(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Ml,forEach:function(n,e,t){Ml(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ml(n,function(){e++}),e},toArray:function(n){return Ml(n,function(e){return e})||[]},only:function(n){if(!Eh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};He.Component=Ko;He.Fragment=jy;He.Profiler=qy;He.PureComponent=yh;He.StrictMode=Xy;He.Suspense=Zy;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;He.act=sv;He.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Jg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)nv.call(e,l)&&!iv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ll,type:n.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(n){return n={$$typeof:Yy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:$y,_context:n},n.Consumer=n};He.createElement=rv;He.createFactory=function(n){var e=rv.bind(null,n);return e.type=n,e};He.createRef=function(){return{current:null}};He.forwardRef=function(n){return{$$typeof:Ky,render:n}};He.isValidElement=Eh;He.lazy=function(n){return{$$typeof:Jy,_payload:{_status:-1,_result:n},_init:iS}};He.memo=function(n,e){return{$$typeof:Qy,type:n,compare:e===void 0?null:e}};He.startTransition=function(n){var e=pc.transition;pc.transition={};try{n()}finally{pc.transition=e}};He.unstable_act=sv;He.useCallback=function(n,e){return mn.current.useCallback(n,e)};He.useContext=function(n){return mn.current.useContext(n)};He.useDebugValue=function(){};He.useDeferredValue=function(n){return mn.current.useDeferredValue(n)};He.useEffect=function(n,e){return mn.current.useEffect(n,e)};He.useId=function(){return mn.current.useId()};He.useImperativeHandle=function(n,e,t){return mn.current.useImperativeHandle(n,e,t)};He.useInsertionEffect=function(n,e){return mn.current.useInsertionEffect(n,e)};He.useLayoutEffect=function(n,e){return mn.current.useLayoutEffect(n,e)};He.useMemo=function(n,e){return mn.current.useMemo(n,e)};He.useReducer=function(n,e,t){return mn.current.useReducer(n,e,t)};He.useRef=function(n){return mn.current.useRef(n)};He.useState=function(n){return mn.current.useState(n)};He.useSyncExternalStore=function(n,e,t){return mn.current.useSyncExternalStore(n,e,t)};He.useTransition=function(){return mn.current.useTransition()};He.version="18.3.1";Zg.exports=He;var Je=Zg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS=Je,oS=Symbol.for("react.element"),aS=Symbol.for("react.fragment"),lS=Object.prototype.hasOwnProperty,cS=sS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uS={key:!0,ref:!0,__self:!0,__source:!0};function ov(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)lS.call(e,i)&&!uS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:oS,type:n,key:s,ref:o,props:r,_owner:cS.current}}_u.Fragment=aS;_u.jsx=ov;_u.jsxs=ov;Kg.exports=_u;var y=Kg.exports,av={exports:{}},qn={},lv={exports:{}},cv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,Y){var Z=D.length;D.push(Y);e:for(;0<Z;){var ie=Z-1>>>1,ve=D[ie];if(0<r(ve,Y))D[ie]=Y,D[Z]=ve,Z=ie;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],Z=D.pop();if(Z!==Y){D[0]=Z;e:for(var ie=0,ve=D.length,Ve=ve>>>1;ie<Ve;){var W=2*(ie+1)-1,J=D[W],de=W+1,ae=D[de];if(0>r(J,Z))de<ve&&0>r(ae,J)?(D[ie]=ae,D[de]=Z,ie=de):(D[ie]=J,D[W]=Z,ie=W);else if(de<ve&&0>r(ae,Z))D[ie]=ae,D[de]=Z,ie=de;else break e}}return Y}function r(D,Y){var Z=D.sortIndex-Y.sortIndex;return Z!==0?Z:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var Y=t(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=D)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=t(c)}}function S(D){if(_=!1,g(D),!x)if(t(l)!==null)x=!0,G(T);else{var Y=t(c);Y!==null&&q(S,Y.startTime-D)}}function T(D,Y){x=!1,_&&(_=!1,d(C),C=-1),p=!0;var Z=f;try{for(g(Y),h=t(l);h!==null&&(!(h.expirationTime>Y)||D&&!N());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,f=h.priorityLevel;var ve=ie(h.expirationTime<=Y);Y=n.unstable_now(),typeof ve=="function"?h.callback=ve:h===t(l)&&i(l),g(Y)}else i(l);h=t(l)}if(h!==null)var Ve=!0;else{var W=t(c);W!==null&&q(S,W.startTime-Y),Ve=!1}return Ve}finally{h=null,f=Z,p=!1}}var A=!1,w=null,C=-1,E=5,M=-1;function N(){return!(n.unstable_now()-M<E)}function z(){if(w!==null){var D=n.unstable_now();M=D;var Y=!0;try{Y=w(!0,D)}finally{Y?k():(A=!1,w=null)}}else A=!1}var k;if(typeof v=="function")k=function(){v(z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,X=j.port2;j.port1.onmessage=z,k=function(){X.postMessage(null)}}else k=function(){m(z,0)};function G(D){w=D,A||(A=!0,k())}function q(D,Y){C=m(function(){D(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,G(T))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var Z=f;f=Y;try{return D()}finally{f=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=f;f=D;try{return Y()}finally{f=Z}},n.unstable_scheduleCallback=function(D,Y,Z){var ie=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,D={id:u++,callback:Y,priorityLevel:D,startTime:Z,expirationTime:ve,sortIndex:-1},Z>ie?(D.sortIndex=Z,e(c,D),t(l)===null&&D===t(c)&&(_?(d(C),C=-1):_=!0,q(S,Z-ie))):(D.sortIndex=ve,e(l,D),x||p||(x=!0,G(T))),D},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(D){var Y=f;return function(){var Z=f;f=Y;try{return D.apply(this,arguments)}finally{f=Z}}}})(cv);lv.exports=cv;var fS=lv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dS=Je,Wn=fS;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uv=new Set,ka={};function Os(n,e){Lo(n,e),Lo(n+"Capture",e)}function Lo(n,e){for(ka[n]=e,n=0;n<e.length;n++)uv.add(e[n])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=Object.prototype.hasOwnProperty,hS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$p={},Yp={};function pS(n){return sd.call(Yp,n)?!0:sd.call($p,n)?!1:hS.test(n)?Yp[n]=!0:($p[n]=!0,!1)}function mS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function _S(n,e,t,i){if(e===null||typeof e>"u"||mS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Jt[n]=new _n(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Jt[e]=new _n(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Jt[n]=new _n(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Jt[n]=new _n(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Jt[n]=new _n(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Jt[n]=new _n(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Jt[n]=new _n(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Jt[n]=new _n(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Jt[n]=new _n(n,5,!1,n.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function Th(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(wh,Th);Jt[e]=new _n(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(wh,Th);Jt[e]=new _n(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(wh,Th);Jt[e]=new _n(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Jt[n]=new _n(n,1,!1,n.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Jt[n]=new _n(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ah(n,e,t,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_S(e,t,r,i)&&(t=null),i||r===null?pS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var lr=dS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,El=Symbol.for("react.element"),ro=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),fv=Symbol.for("react.provider"),dv=Symbol.for("react.context"),Rh=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ld=Symbol.for("react.suspense_list"),bh=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),hv=Symbol.for("react.offscreen"),Kp=Symbol.iterator;function na(n){return n===null||typeof n!="object"?null:(n=Kp&&n[Kp]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,ju;function va(n){if(ju===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||""}return`
`+ju+n}var Xu=!1;function qu(n,e){if(!n||Xu)return"";Xu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?va(n):""}function gS(n){switch(n.tag){case 5:return va(n.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 2:case 15:return n=qu(n.type,!1),n;case 11:return n=qu(n.type.render,!1),n;case 1:return n=qu(n.type,!0),n;default:return""}}function cd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case so:return"Fragment";case ro:return"Portal";case od:return"Profiler";case Ch:return"StrictMode";case ad:return"Suspense";case ld:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case dv:return(n.displayName||"Context")+".Consumer";case fv:return(n._context.displayName||"Context")+".Provider";case Rh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case bh:return e=n.displayName||null,e!==null?e:cd(n.type)||"Memo";case vr:e=n._payload,n=n._init;try{return cd(n(e))}catch{}}return null}function vS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cd(e);case 8:return e===Ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xS(n){var e=pv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function wl(n){n._valueTracker||(n._valueTracker=xS(n))}function mv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=pv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Pc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ud(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Zp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Vr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _v(n,e){e=e.checked,e!=null&&Ah(n,"checked",e,!1)}function fd(n,e){_v(n,e);var t=Vr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?dd(n,e.type,t):e.hasOwnProperty("defaultValue")&&dd(n,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Qp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function dd(n,e,t){(e!=="number"||Pc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var xa=Array.isArray;function yo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Vr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function hd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Jp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(xa(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Vr(t)}}function gv(n,e){var t=Vr(e.value),i=Vr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function em(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function vv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?vv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Tl,xv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Fa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yS=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(n){yS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ta[e]=Ta[n]})});function yv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ta.hasOwnProperty(n)&&Ta[n]?(""+e).trim():e+"px"}function Sv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=yv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var SS=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(n,e){if(e){if(SS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function _d(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=null;function Ph(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vd=null,So=null,Mo=null;function tm(n){if(n=fl(n)){if(typeof vd!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Su(e),vd(n.stateNode,n.type,e))}}function Mv(n){So?Mo?Mo.push(n):Mo=[n]:So=n}function Ev(){if(So){var n=So,e=Mo;if(Mo=So=null,tm(n),e)for(n=0;n<e.length;n++)tm(e[n])}}function wv(n,e){return n(e)}function Tv(){}var $u=!1;function Av(n,e,t){if($u)return n(e,t);$u=!0;try{return wv(n,e,t)}finally{$u=!1,(So!==null||Mo!==null)&&(Tv(),Ev())}}function za(n,e){var t=n.stateNode;if(t===null)return null;var i=Su(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var xd=!1;if(tr)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){xd=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{xd=!1}function MS(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Aa=!1,Nc=null,Lc=!1,yd=null,ES={onError:function(n){Aa=!0,Nc=n}};function wS(n,e,t,i,r,s,o,a,l){Aa=!1,Nc=null,MS.apply(ES,arguments)}function TS(n,e,t,i,r,s,o,a,l){if(wS.apply(this,arguments),Aa){if(Aa){var c=Nc;Aa=!1,Nc=null}else throw Error(ne(198));Lc||(Lc=!0,yd=c)}}function ks(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Cv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function nm(n){if(ks(n)!==n)throw Error(ne(188))}function AS(n){var e=n.alternate;if(!e){if(e=ks(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return nm(r),n;if(s===i)return nm(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function Rv(n){return n=AS(n),n!==null?bv(n):null}function bv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=bv(n);if(e!==null)return e;n=n.sibling}return null}var Pv=Wn.unstable_scheduleCallback,im=Wn.unstable_cancelCallback,CS=Wn.unstable_shouldYield,RS=Wn.unstable_requestPaint,Dt=Wn.unstable_now,bS=Wn.unstable_getCurrentPriorityLevel,Nh=Wn.unstable_ImmediatePriority,Nv=Wn.unstable_UserBlockingPriority,Dc=Wn.unstable_NormalPriority,PS=Wn.unstable_LowPriority,Lv=Wn.unstable_IdlePriority,gu=null,Oi=null;function NS(n){if(Oi&&typeof Oi.onCommitFiberRoot=="function")try{Oi.onCommitFiberRoot(gu,n,void 0,(n.current.flags&128)===128)}catch{}}var xi=Math.clz32?Math.clz32:IS,LS=Math.log,DS=Math.LN2;function IS(n){return n>>>=0,n===0?32:31-(LS(n)/DS|0)|0}var Al=64,Cl=4194304;function ya(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ic(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ya(a):(s&=o,s!==0&&(i=ya(s)))}else o=t&~r,o!==0?i=ya(o):s!==0&&(i=ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-xi(e),r=1<<t,i|=n[t],e&=~r;return i}function US(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-xi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=US(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Sd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dv(){var n=Al;return Al<<=1,!(Al&4194240)&&(Al=64),n}function Yu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function cl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-xi(e),n[e]=t}function kS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-xi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Lh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-xi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var st=0;function Iv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Uv,Dh,Ov,kv,Fv,Md=!1,Rl=[],Pr=null,Nr=null,Lr=null,Ba=new Map,Ha=new Map,yr=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rm(n,e){switch(n){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function ra(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fl(e),e!==null&&Dh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function zS(n,e,t,i,r){switch(e){case"focusin":return Pr=ra(Pr,n,e,t,i,r),!0;case"dragenter":return Nr=ra(Nr,n,e,t,i,r),!0;case"mouseover":return Lr=ra(Lr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,ra(Ba.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,ra(Ha.get(s)||null,n,e,t,i,r)),!0}return!1}function zv(n){var e=vs(n.target);if(e!==null){var t=ks(e);if(t!==null){if(e=t.tag,e===13){if(e=Cv(t),e!==null){n.blockedOn=e,Fv(n.priority,function(){Ov(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ed(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);gd=i,t.target.dispatchEvent(i),gd=null}else return e=fl(t),e!==null&&Dh(e),n.blockedOn=t,!1;e.shift()}return!0}function sm(n,e,t){mc(n)&&t.delete(e)}function BS(){Md=!1,Pr!==null&&mc(Pr)&&(Pr=null),Nr!==null&&mc(Nr)&&(Nr=null),Lr!==null&&mc(Lr)&&(Lr=null),Ba.forEach(sm),Ha.forEach(sm)}function sa(n,e){n.blockedOn===e&&(n.blockedOn=null,Md||(Md=!0,Wn.unstable_scheduleCallback(Wn.unstable_NormalPriority,BS)))}function Va(n){function e(r){return sa(r,n)}if(0<Rl.length){sa(Rl[0],n);for(var t=1;t<Rl.length;t++){var i=Rl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Pr!==null&&sa(Pr,n),Nr!==null&&sa(Nr,n),Lr!==null&&sa(Lr,n),Ba.forEach(e),Ha.forEach(e),t=0;t<yr.length;t++)i=yr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<yr.length&&(t=yr[0],t.blockedOn===null);)zv(t),t.blockedOn===null&&yr.shift()}var Eo=lr.ReactCurrentBatchConfig,Uc=!0;function HS(n,e,t,i){var r=st,s=Eo.transition;Eo.transition=null;try{st=1,Ih(n,e,t,i)}finally{st=r,Eo.transition=s}}function VS(n,e,t,i){var r=st,s=Eo.transition;Eo.transition=null;try{st=4,Ih(n,e,t,i)}finally{st=r,Eo.transition=s}}function Ih(n,e,t,i){if(Uc){var r=Ed(n,e,t,i);if(r===null)of(n,e,i,Oc,t),rm(n,i);else if(zS(r,n,e,t,i))i.stopPropagation();else if(rm(n,i),e&4&&-1<FS.indexOf(n)){for(;r!==null;){var s=fl(r);if(s!==null&&Uv(s),s=Ed(n,e,t,i),s===null&&of(n,e,i,Oc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else of(n,e,i,null,t)}}var Oc=null;function Ed(n,e,t,i){if(Oc=null,n=Ph(i),n=vs(n),n!==null)if(e=ks(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Cv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Oc=n,null}function Bv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bS()){case Nh:return 1;case Nv:return 4;case Dc:case PS:return 16;case Lv:return 536870912;default:return 16}default:return 16}}var Er=null,Uh=null,_c=null;function Hv(){if(_c)return _c;var n,e=Uh,t=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return _c=r.slice(n,1<i?1-i:void 0)}function gc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function bl(){return!0}function om(){return!1}function $n(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:om,this.isPropagationStopped=om,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oh=$n(Zo),ul=wt({},Zo,{view:0,detail:0}),GS=$n(ul),Ku,Zu,oa,vu=wt({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oa&&(oa&&n.type==="mousemove"?(Ku=n.screenX-oa.screenX,Zu=n.screenY-oa.screenY):Zu=Ku=0,oa=n),Ku)},movementY:function(n){return"movementY"in n?n.movementY:Zu}}),am=$n(vu),WS=wt({},vu,{dataTransfer:0}),jS=$n(WS),XS=wt({},ul,{relatedTarget:0}),Qu=$n(XS),qS=wt({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),$S=$n(qS),YS=wt({},Zo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),KS=$n(YS),ZS=wt({},Zo,{data:0}),lm=$n(ZS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=e1[n])?!!e[n]:!1}function kh(){return t1}var n1=wt({},ul,{key:function(n){if(n.key){var e=QS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=gc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?JS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(n){return n.type==="keypress"?gc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),i1=$n(n1),r1=wt({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=$n(r1),s1=wt({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),o1=$n(s1),a1=wt({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),l1=$n(a1),c1=wt({},vu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),u1=$n(c1),f1=[9,13,27,32],Fh=tr&&"CompositionEvent"in window,Ca=null;tr&&"documentMode"in document&&(Ca=document.documentMode);var d1=tr&&"TextEvent"in window&&!Ca,Vv=tr&&(!Fh||Ca&&8<Ca&&11>=Ca),um=" ",fm=!1;function Gv(n,e){switch(n){case"keyup":return f1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var oo=!1;function h1(n,e){switch(n){case"compositionend":return Wv(e);case"keypress":return e.which!==32?null:(fm=!0,um);case"textInput":return n=e.data,n===um&&fm?null:n;default:return null}}function p1(n,e){if(oo)return n==="compositionend"||!Fh&&Gv(n,e)?(n=Hv(),_c=Uh=Er=null,oo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vv&&e.locale!=="ko"?null:e.data;default:return null}}var m1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!m1[n.type]:e==="textarea"}function jv(n,e,t,i){Mv(i),e=kc(e,"onChange"),0<e.length&&(t=new Oh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ra=null,Ga=null;function _1(n){n0(n,0)}function xu(n){var e=co(n);if(mv(e))return n}function g1(n,e){if(n==="change")return e}var Xv=!1;if(tr){var Ju;if(tr){var ef="oninput"in document;if(!ef){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),ef=typeof hm.oninput=="function"}Ju=ef}else Ju=!1;Xv=Ju&&(!document.documentMode||9<document.documentMode)}function pm(){Ra&&(Ra.detachEvent("onpropertychange",qv),Ga=Ra=null)}function qv(n){if(n.propertyName==="value"&&xu(Ga)){var e=[];jv(e,Ga,n,Ph(n)),Av(_1,e)}}function v1(n,e,t){n==="focusin"?(pm(),Ra=e,Ga=t,Ra.attachEvent("onpropertychange",qv)):n==="focusout"&&pm()}function x1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xu(Ga)}function y1(n,e){if(n==="click")return xu(e)}function S1(n,e){if(n==="input"||n==="change")return xu(e)}function M1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Mi=typeof Object.is=="function"?Object.is:M1;function Wa(n,e){if(Mi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!sd.call(e,r)||!Mi(n[r],e[r]))return!1}return!0}function mm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _m(n,e){var t=mm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=mm(t)}}function $v(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?$v(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Yv(){for(var n=window,e=Pc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Pc(n.document)}return e}function zh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function E1(n){var e=Yv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&$v(t.ownerDocument.documentElement,t)){if(i!==null&&zh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=_m(t,s);var o=_m(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var w1=tr&&"documentMode"in document&&11>=document.documentMode,ao=null,wd=null,ba=null,Td=!1;function gm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Td||ao==null||ao!==Pc(i)||(i=ao,"selectionStart"in i&&zh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ba&&Wa(ba,i)||(ba=i,i=kc(wd,"onSelect"),0<i.length&&(e=new Oh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ao)))}function Pl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var lo={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},tf={},Kv={};tr&&(Kv=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function yu(n){if(tf[n])return tf[n];if(!lo[n])return n;var e=lo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Kv)return tf[n]=e[t];return n}var Zv=yu("animationend"),Qv=yu("animationiteration"),Jv=yu("animationstart"),e0=yu("transitionend"),t0=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(n,e){t0.set(n,e),Os(e,[n])}for(var nf=0;nf<vm.length;nf++){var rf=vm[nf],T1=rf.toLowerCase(),A1=rf[0].toUpperCase()+rf.slice(1);Kr(T1,"on"+A1)}Kr(Zv,"onAnimationEnd");Kr(Qv,"onAnimationIteration");Kr(Jv,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(e0,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Os("onBeforeInput",["compositionend","keypress","textInput","paste"]);Os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function xm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,TS(i,e,void 0,n),n.currentTarget=null}function n0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;xm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;xm(r,a,c),s=l}}}if(Lc)throw n=yd,Lc=!1,yd=null,n}function dt(n,e){var t=e[Pd];t===void 0&&(t=e[Pd]=new Set);var i=n+"__bubble";t.has(i)||(i0(e,n,2,!1),t.add(i))}function sf(n,e,t){var i=0;e&&(i|=4),i0(t,n,i,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ja(n){if(!n[Nl]){n[Nl]=!0,uv.forEach(function(t){t!=="selectionchange"&&(C1.has(t)||sf(t,!1,n),sf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,sf("selectionchange",!1,e))}}function i0(n,e,t,i){switch(Bv(e)){case 1:var r=HS;break;case 4:r=VS;break;default:r=Ih}t=r.bind(null,e,t,n),r=void 0,!xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function of(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Av(function(){var c=s,u=Ph(t),h=[];e:{var f=t0.get(n);if(f!==void 0){var p=Oh,x=n;switch(n){case"keypress":if(gc(t)===0)break e;case"keydown":case"keyup":p=i1;break;case"focusin":x="focus",p=Qu;break;case"focusout":x="blur",p=Qu;break;case"beforeblur":case"afterblur":p=Qu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=jS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=o1;break;case Zv:case Qv:case Jv:p=$S;break;case e0:p=l1;break;case"scroll":p=GS;break;case"wheel":p=u1;break;case"copy":case"cut":case"paste":p=KS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=cm}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=za(v,d),S!=null&&_.push(Xa(v,S,g)))),m)break;v=v.return}0<_.length&&(f=new p(f,x,null,t,u),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==gd&&(x=t.relatedTarget||t.fromElement)&&(vs(x)||x[nr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=c,x=x?vs(x):null,x!==null&&(m=ks(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(_=am,S="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=cm,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?f:co(p),g=x==null?f:co(x),f=new _(S,v+"leave",p,t,u),f.target=m,f.relatedTarget=g,S=null,vs(u)===c&&(_=new _(d,v+"enter",x,t,u),_.target=g,_.relatedTarget=m,S=_),m=S,p&&x)t:{for(_=p,d=x,v=0,g=_;g;g=zs(g))v++;for(g=0,S=d;S;S=zs(S))g++;for(;0<v-g;)_=zs(_),v--;for(;0<g-v;)d=zs(d),g--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=zs(_),d=zs(d)}_=null}else _=null;p!==null&&ym(h,f,p,_,!1),x!==null&&m!==null&&ym(h,m,x,_,!0)}}e:{if(f=c?co(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=g1;else if(dm(f))if(Xv)T=S1;else{T=x1;var A=v1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=y1);if(T&&(T=T(n,c))){jv(h,T,t,u);break e}A&&A(n,f,c),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&dd(f,"number",f.value)}switch(A=c?co(c):window,n){case"focusin":(dm(A)||A.contentEditable==="true")&&(ao=A,wd=c,ba=null);break;case"focusout":ba=wd=ao=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,gm(h,t,u);break;case"selectionchange":if(w1)break;case"keydown":case"keyup":gm(h,t,u)}var w;if(Fh)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else oo?Gv(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Vv&&t.locale!=="ko"&&(oo||C!=="onCompositionStart"?C==="onCompositionEnd"&&oo&&(w=Hv()):(Er=u,Uh="value"in Er?Er.value:Er.textContent,oo=!0)),A=kc(c,C),0<A.length&&(C=new lm(C,n,null,t,u),h.push({event:C,listeners:A}),w?C.data=w:(w=Wv(t),w!==null&&(C.data=w)))),(w=d1?h1(n,t):p1(n,t))&&(c=kc(c,"onBeforeInput"),0<c.length&&(u=new lm("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=w))}n0(h,e)})}function Xa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function kc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=za(n,t),s!=null&&i.unshift(Xa(n,s,r)),s=za(n,e),s!=null&&i.push(Xa(n,s,r))),n=n.return}return i}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ym(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=za(t,s),l!=null&&o.unshift(Xa(t,l,a))):r||(l=za(t,s),l!=null&&o.push(Xa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var R1=/\r\n?/g,b1=/\u0000|\uFFFD/g;function Sm(n){return(typeof n=="string"?n:""+n).replace(R1,`
`).replace(b1,"")}function Ll(n,e,t){if(e=Sm(e),Sm(n)!==e&&t)throw Error(ne(425))}function Fc(){}var Ad=null,Cd=null;function Rd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,N1=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(n){return Mm.resolve(null).then(n).catch(L1)}:bd;function L1(n){setTimeout(function(){throw n})}function af(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Va(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Va(e)}function Dr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Em(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),Pi="__reactFiber$"+Qo,qa="__reactProps$"+Qo,nr="__reactContainer$"+Qo,Pd="__reactEvents$"+Qo,D1="__reactListeners$"+Qo,I1="__reactHandles$"+Qo;function vs(n){var e=n[Pi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[nr]||t[Pi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Em(n);n!==null;){if(t=n[Pi])return t;n=Em(n)}return e}n=t,t=n.parentNode}return null}function fl(n){return n=n[Pi]||n[nr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function co(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Su(n){return n[qa]||null}var Nd=[],uo=-1;function Zr(n){return{current:n}}function pt(n){0>uo||(n.current=Nd[uo],Nd[uo]=null,uo--)}function ft(n,e){uo++,Nd[uo]=n.current,n.current=e}var Gr={},cn=Zr(Gr),Mn=Zr(!1),Ps=Gr;function Do(n,e){var t=n.type.contextTypes;if(!t)return Gr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function En(n){return n=n.childContextTypes,n!=null}function zc(){pt(Mn),pt(cn)}function wm(n,e,t){if(cn.current!==Gr)throw Error(ne(168));ft(cn,e),ft(Mn,t)}function r0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,vS(n)||"Unknown",r));return wt({},t,i)}function Bc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Gr,Ps=cn.current,ft(cn,n),ft(Mn,Mn.current),!0}function Tm(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=r0(n,e,Ps),i.__reactInternalMemoizedMergedChildContext=n,pt(Mn),pt(cn),ft(cn,n)):pt(Mn),ft(Mn,t)}var $i=null,Mu=!1,lf=!1;function s0(n){$i===null?$i=[n]:$i.push(n)}function U1(n){Mu=!0,s0(n)}function Qr(){if(!lf&&$i!==null){lf=!0;var n=0,e=st;try{var t=$i;for(st=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}$i=null,Mu=!1}catch(r){throw $i!==null&&($i=$i.slice(n+1)),Pv(Nh,Qr),r}finally{st=e,lf=!1}}return null}var fo=[],ho=0,Hc=null,Vc=0,Qn=[],Jn=0,Ns=null,Zi=1,Qi="";function fs(n,e){fo[ho++]=Vc,fo[ho++]=Hc,Hc=n,Vc=e}function o0(n,e,t){Qn[Jn++]=Zi,Qn[Jn++]=Qi,Qn[Jn++]=Ns,Ns=n;var i=Zi;n=Qi;var r=32-xi(i)-1;i&=~(1<<r),t+=1;var s=32-xi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Zi=1<<32-xi(e)+r|t<<r|i,Qi=s+n}else Zi=1<<s|t<<r|i,Qi=n}function Bh(n){n.return!==null&&(fs(n,1),o0(n,1,0))}function Hh(n){for(;n===Hc;)Hc=fo[--ho],fo[ho]=null,Vc=fo[--ho],fo[ho]=null;for(;n===Ns;)Ns=Qn[--Jn],Qn[Jn]=null,Qi=Qn[--Jn],Qn[Jn]=null,Zi=Qn[--Jn],Qn[Jn]=null}var Vn=null,zn=null,mt=!1,gi=null;function a0(n,e){var t=ti(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Am(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Vn=n,zn=Dr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Vn=n,zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ns!==null?{id:Zi,overflow:Qi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ti(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Vn=n,zn=null,!0):!1;default:return!1}}function Ld(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Dd(n){if(mt){var e=zn;if(e){var t=e;if(!Am(n,e)){if(Ld(n))throw Error(ne(418));e=Dr(t.nextSibling);var i=Vn;e&&Am(n,e)?a0(i,t):(n.flags=n.flags&-4097|2,mt=!1,Vn=n)}}else{if(Ld(n))throw Error(ne(418));n.flags=n.flags&-4097|2,mt=!1,Vn=n}}}function Cm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Dl(n){if(n!==Vn)return!1;if(!mt)return Cm(n),mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Rd(n.type,n.memoizedProps)),e&&(e=zn)){if(Ld(n))throw l0(),Error(ne(418));for(;e;)a0(n,e),e=Dr(e.nextSibling)}if(Cm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){zn=Dr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}zn=null}}else zn=Vn?Dr(n.stateNode.nextSibling):null;return!0}function l0(){for(var n=zn;n;)n=Dr(n.nextSibling)}function Io(){zn=Vn=null,mt=!1}function Vh(n){gi===null?gi=[n]:gi.push(n)}var O1=lr.ReactCurrentBatchConfig;function aa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Il(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Rm(n){var e=n._init;return e(n._payload)}function c0(n){function e(d,v){if(n){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=kr(d,v),d.index=0,d.sibling=null,d}function s(d,v,g){return d.index=g,n?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,g,S){return v===null||v.tag!==6?(v=mf(g,d.mode,S),v.return=d,v):(v=r(v,g),v.return=d,v)}function l(d,v,g,S){var T=g.type;return T===so?u(d,v,g.props.children,S,g.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===vr&&Rm(T)===v.type)?(S=r(v,g.props),S.ref=aa(d,v,g),S.return=d,S):(S=wc(g.type,g.key,g.props,null,d.mode,S),S.ref=aa(d,v,g),S.return=d,S)}function c(d,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=_f(g,d.mode,S),v.return=d,v):(v=r(v,g.children||[]),v.return=d,v)}function u(d,v,g,S,T){return v===null||v.tag!==7?(v=Ts(g,d.mode,S,T),v.return=d,v):(v=r(v,g),v.return=d,v)}function h(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=mf(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case El:return g=wc(v.type,v.key,v.props,null,d.mode,g),g.ref=aa(d,null,v),g.return=d,g;case ro:return v=_f(v,d.mode,g),v.return=d,v;case vr:var S=v._init;return h(d,S(v._payload),g)}if(xa(v)||na(v))return v=Ts(v,d.mode,g,null),v.return=d,v;Il(d,v)}return null}function f(d,v,g,S){var T=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(d,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case El:return g.key===T?l(d,v,g,S):null;case ro:return g.key===T?c(d,v,g,S):null;case vr:return T=g._init,f(d,v,T(g._payload),S)}if(xa(g)||na(g))return T!==null?null:u(d,v,g,S,null);Il(d,g)}return null}function p(d,v,g,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,a(v,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case El:return d=d.get(S.key===null?g:S.key)||null,l(v,d,S,T);case ro:return d=d.get(S.key===null?g:S.key)||null,c(v,d,S,T);case vr:var A=S._init;return p(d,v,g,A(S._payload),T)}if(xa(S)||na(S))return d=d.get(g)||null,u(v,d,S,T,null);Il(v,S)}return null}function x(d,v,g,S){for(var T=null,A=null,w=v,C=v=0,E=null;w!==null&&C<g.length;C++){w.index>C?(E=w,w=null):E=w.sibling;var M=f(d,w,g[C],S);if(M===null){w===null&&(w=E);break}n&&w&&M.alternate===null&&e(d,w),v=s(M,v,C),A===null?T=M:A.sibling=M,A=M,w=E}if(C===g.length)return t(d,w),mt&&fs(d,C),T;if(w===null){for(;C<g.length;C++)w=h(d,g[C],S),w!==null&&(v=s(w,v,C),A===null?T=w:A.sibling=w,A=w);return mt&&fs(d,C),T}for(w=i(d,w);C<g.length;C++)E=p(w,d,C,g[C],S),E!==null&&(n&&E.alternate!==null&&w.delete(E.key===null?C:E.key),v=s(E,v,C),A===null?T=E:A.sibling=E,A=E);return n&&w.forEach(function(N){return e(d,N)}),mt&&fs(d,C),T}function _(d,v,g,S){var T=na(g);if(typeof T!="function")throw Error(ne(150));if(g=T.call(g),g==null)throw Error(ne(151));for(var A=T=null,w=v,C=v=0,E=null,M=g.next();w!==null&&!M.done;C++,M=g.next()){w.index>C?(E=w,w=null):E=w.sibling;var N=f(d,w,M.value,S);if(N===null){w===null&&(w=E);break}n&&w&&N.alternate===null&&e(d,w),v=s(N,v,C),A===null?T=N:A.sibling=N,A=N,w=E}if(M.done)return t(d,w),mt&&fs(d,C),T;if(w===null){for(;!M.done;C++,M=g.next())M=h(d,M.value,S),M!==null&&(v=s(M,v,C),A===null?T=M:A.sibling=M,A=M);return mt&&fs(d,C),T}for(w=i(d,w);!M.done;C++,M=g.next())M=p(w,d,C,M.value,S),M!==null&&(n&&M.alternate!==null&&w.delete(M.key===null?C:M.key),v=s(M,v,C),A===null?T=M:A.sibling=M,A=M);return n&&w.forEach(function(z){return e(d,z)}),mt&&fs(d,C),T}function m(d,v,g,S){if(typeof g=="object"&&g!==null&&g.type===so&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case El:e:{for(var T=g.key,A=v;A!==null;){if(A.key===T){if(T=g.type,T===so){if(A.tag===7){t(d,A.sibling),v=r(A,g.props.children),v.return=d,d=v;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===vr&&Rm(T)===A.type){t(d,A.sibling),v=r(A,g.props),v.ref=aa(d,A,g),v.return=d,d=v;break e}t(d,A);break}else e(d,A);A=A.sibling}g.type===so?(v=Ts(g.props.children,d.mode,S,g.key),v.return=d,d=v):(S=wc(g.type,g.key,g.props,null,d.mode,S),S.ref=aa(d,v,g),S.return=d,d=S)}return o(d);case ro:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(d,v.sibling),v=r(v,g.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=_f(g,d.mode,S),v.return=d,d=v}return o(d);case vr:return A=g._init,m(d,v,A(g._payload),S)}if(xa(g))return x(d,v,g,S);if(na(g))return _(d,v,g,S);Il(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,g),v.return=d,d=v):(t(d,v),v=mf(g,d.mode,S),v.return=d,d=v),o(d)):t(d,v)}return m}var Uo=c0(!0),u0=c0(!1),Gc=Zr(null),Wc=null,po=null,Gh=null;function Wh(){Gh=po=Wc=null}function jh(n){var e=Gc.current;pt(Gc),n._currentValue=e}function Id(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function wo(n,e){Wc=n,Gh=po=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Sn=!0),n.firstContext=null)}function ai(n){var e=n._currentValue;if(Gh!==n)if(n={context:n,memoizedValue:e,next:null},po===null){if(Wc===null)throw Error(ne(308));po=n,Wc.dependencies={lanes:0,firstContext:n}}else po=po.next=n;return e}var xs=null;function Xh(n){xs===null?xs=[n]:xs.push(n)}function f0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Xh(e)):(t.next=r.next,r.next=t),e.interleaved=t,ir(n,i)}function ir(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var xr=!1;function qh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function er(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ir(n,t)}return r=i.interleaved,r===null?(e.next=e,Xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ir(n,t)}function vc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Lh(n,t)}}function bm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function jc(n,e,t,i){var r=n.updateQueue;xr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,_=a;switch(f=e,p=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(p,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,f=typeof x=="function"?x.call(p,h,f):x,f==null)break e;h=wt({},h,f);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ds|=o,n.lanes=o,n.memoizedState=h}}function Pm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var dl={},ki=Zr(dl),$a=Zr(dl),Ya=Zr(dl);function ys(n){if(n===dl)throw Error(ne(174));return n}function $h(n,e){switch(ft(Ya,e),ft($a,n),ft(ki,dl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=pd(e,n)}pt(ki),ft(ki,e)}function Oo(){pt(ki),pt($a),pt(Ya)}function h0(n){ys(Ya.current);var e=ys(ki.current),t=pd(e,n.type);e!==t&&(ft($a,n),ft(ki,t))}function Yh(n){$a.current===n&&(pt(ki),pt($a))}var yt=Zr(0);function Xc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cf=[];function Kh(){for(var n=0;n<cf.length;n++)cf[n]._workInProgressVersionPrimary=null;cf.length=0}var xc=lr.ReactCurrentDispatcher,uf=lr.ReactCurrentBatchConfig,Ls=0,Et=null,zt=null,Xt=null,qc=!1,Pa=!1,Ka=0,k1=0;function en(){throw Error(ne(321))}function Zh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Mi(n[t],e[t]))return!1;return!0}function Qh(n,e,t,i,r,s){if(Ls=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xc.current=n===null||n.memoizedState===null?H1:V1,n=t(i,r),Pa){s=0;do{if(Pa=!1,Ka=0,25<=s)throw Error(ne(301));s+=1,Xt=zt=null,e.updateQueue=null,xc.current=G1,n=t(i,r)}while(Pa)}if(xc.current=$c,e=zt!==null&&zt.next!==null,Ls=0,Xt=zt=Et=null,qc=!1,e)throw Error(ne(300));return n}function Jh(){var n=Ka!==0;return Ka=0,n}function Ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Et.memoizedState=Xt=n:Xt=Xt.next=n,Xt}function li(){if(zt===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=zt.next;var e=Xt===null?Et.memoizedState:Xt.next;if(e!==null)Xt=e,zt=n;else{if(n===null)throw Error(ne(310));zt=n,n={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Xt===null?Et.memoizedState=Xt=n:Xt=Xt.next=n}return Xt}function Za(n,e){return typeof e=="function"?e(n):e}function ff(n){var e=li(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=zt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ls&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Et.lanes|=u,Ds|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Mi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Et.lanes|=s,Ds|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function df(n){var e=li(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Mi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function p0(){}function m0(n,e){var t=Et,i=li(),r=e(),s=!Mi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,ep(v0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(t.flags|=2048,Qa(9,g0.bind(null,t,i,r,e),void 0,null),qt===null)throw Error(ne(349));Ls&30||_0(t,e,r)}return r}function _0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function g0(n,e,t,i){e.value=t,e.getSnapshot=i,x0(e)&&y0(n)}function v0(n,e,t){return t(function(){x0(e)&&y0(n)})}function x0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Mi(n,t)}catch{return!0}}function y0(n){var e=ir(n,1);e!==null&&yi(e,n,1,-1)}function Nm(n){var e=Ai();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},e.queue=n,n=n.dispatch=B1.bind(null,Et,n),[e.memoizedState,n]}function Qa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function S0(){return li().memoizedState}function yc(n,e,t,i){var r=Ai();Et.flags|=n,r.memoizedState=Qa(1|e,t,void 0,i===void 0?null:i)}function Eu(n,e,t,i){var r=li();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&Zh(i,o.deps)){r.memoizedState=Qa(e,t,s,i);return}}Et.flags|=n,r.memoizedState=Qa(1|e,t,s,i)}function Lm(n,e){return yc(8390656,8,n,e)}function ep(n,e){return Eu(2048,8,n,e)}function M0(n,e){return Eu(4,2,n,e)}function E0(n,e){return Eu(4,4,n,e)}function w0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function T0(n,e,t){return t=t!=null?t.concat([n]):null,Eu(4,4,w0.bind(null,e,n),t)}function tp(){}function A0(n,e){var t=li();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function C0(n,e){var t=li();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function R0(n,e,t){return Ls&21?(Mi(t,e)||(t=Dv(),Et.lanes|=t,Ds|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Sn=!0),n.memoizedState=t)}function F1(n,e){var t=st;st=t!==0&&4>t?t:4,n(!0);var i=uf.transition;uf.transition={};try{n(!1),e()}finally{st=t,uf.transition=i}}function b0(){return li().memoizedState}function z1(n,e,t){var i=Or(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},P0(n))N0(e,t);else if(t=f0(n,e,t,i),t!==null){var r=hn();yi(t,n,i,r),L0(t,e,i)}}function B1(n,e,t){var i=Or(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(P0(n))N0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Mi(a,o)){var l=e.interleaved;l===null?(r.next=r,Xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=f0(n,e,r,i),t!==null&&(r=hn(),yi(t,n,i,r),L0(t,e,i))}}function P0(n){var e=n.alternate;return n===Et||e!==null&&e===Et}function N0(n,e){Pa=qc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function L0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Lh(n,t)}}var $c={readContext:ai,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},H1={readContext:ai,useCallback:function(n,e){return Ai().memoizedState=[n,e===void 0?null:e],n},useContext:ai,useEffect:Lm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,yc(4194308,4,w0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return yc(4194308,4,n,e)},useInsertionEffect:function(n,e){return yc(4,2,n,e)},useMemo:function(n,e){var t=Ai();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ai();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=z1.bind(null,Et,n),[i.memoizedState,n]},useRef:function(n){var e=Ai();return n={current:n},e.memoizedState=n},useState:Nm,useDebugValue:tp,useDeferredValue:function(n){return Ai().memoizedState=n},useTransition:function(){var n=Nm(!1),e=n[0];return n=F1.bind(null,n[1]),Ai().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Et,r=Ai();if(mt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),qt===null)throw Error(ne(349));Ls&30||_0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Lm(v0.bind(null,i,s,n),[n]),i.flags|=2048,Qa(9,g0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ai(),e=qt.identifierPrefix;if(mt){var t=Qi,i=Zi;t=(i&~(1<<32-xi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ka++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=k1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},V1={readContext:ai,useCallback:A0,useContext:ai,useEffect:ep,useImperativeHandle:T0,useInsertionEffect:M0,useLayoutEffect:E0,useMemo:C0,useReducer:ff,useRef:S0,useState:function(){return ff(Za)},useDebugValue:tp,useDeferredValue:function(n){var e=li();return R0(e,zt.memoizedState,n)},useTransition:function(){var n=ff(Za)[0],e=li().memoizedState;return[n,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:b0,unstable_isNewReconciler:!1},G1={readContext:ai,useCallback:A0,useContext:ai,useEffect:ep,useImperativeHandle:T0,useInsertionEffect:M0,useLayoutEffect:E0,useMemo:C0,useReducer:df,useRef:S0,useState:function(){return df(Za)},useDebugValue:tp,useDeferredValue:function(n){var e=li();return zt===null?e.memoizedState=n:R0(e,zt.memoizedState,n)},useTransition:function(){var n=df(Za)[0],e=li().memoizedState;return[n,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:b0,unstable_isNewReconciler:!1};function mi(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ud(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wu={isMounted:function(n){return(n=n._reactInternals)?ks(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=hn(),r=Or(n),s=er(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ir(n,s,r),e!==null&&(yi(e,n,r,i),vc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=hn(),r=Or(n),s=er(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ir(n,s,r),e!==null&&(yi(e,n,r,i),vc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=hn(),i=Or(n),r=er(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ir(n,r,i),e!==null&&(yi(e,n,i,t),vc(e,n,i))}};function Dm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(t,i)||!Wa(r,s):!0}function D0(n,e,t){var i=!1,r=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=En(e)?Ps:cn.current,i=e.contextTypes,s=(i=i!=null)?Do(n,r):Gr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Im(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&wu.enqueueReplaceState(e,e.state,null)}function Od(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},qh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=En(e)?Ps:cn.current,r.context=Do(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ud(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wu.enqueueReplaceState(r,r.state,null),jc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ko(n,e){try{var t="",i=e;do t+=gS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function hf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function kd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var W1=typeof WeakMap=="function"?WeakMap:Map;function I0(n,e,t){t=er(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Kc||(Kc=!0,qd=i),kd(n,e)},t}function U0(n,e,t){t=er(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){kd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){kd(n,e),typeof i!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Um(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new W1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=rM.bind(null,n,e,t),e.then(n,n))}function Om(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function km(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=er(-1,1),e.tag=2,Ir(t,e,1))),t.lanes|=1),n)}var j1=lr.ReactCurrentOwner,Sn=!1;function dn(n,e,t,i){e.child=n===null?u0(e,null,t,i):Uo(e,n.child,t,i)}function Fm(n,e,t,i,r){t=t.render;var s=e.ref;return wo(e,r),i=Qh(n,e,t,i,s,r),t=Jh(),n!==null&&!Sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,rr(n,e,r)):(mt&&t&&Bh(e),e.flags|=1,dn(n,e,i,r),e.child)}function zm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!cp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,O0(n,e,s,i,r)):(n=wc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Wa,t(o,i)&&n.ref===e.ref)return rr(n,e,r)}return e.flags|=1,n=kr(s,i),n.ref=e.ref,n.return=e,e.child=n}function O0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Wa(s,i)&&n.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Sn=!0);else return e.lanes=n.lanes,rr(n,e,r)}return Fd(n,e,t,i,r)}function k0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(_o,On),On|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ft(_o,On),On|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ft(_o,On),On|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ft(_o,On),On|=i;return dn(n,e,r,t),e.child}function F0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Fd(n,e,t,i,r){var s=En(t)?Ps:cn.current;return s=Do(e,s),wo(e,r),t=Qh(n,e,t,i,s,r),i=Jh(),n!==null&&!Sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,rr(n,e,r)):(mt&&i&&Bh(e),e.flags|=1,dn(n,e,t,r),e.child)}function Bm(n,e,t,i,r){if(En(t)){var s=!0;Bc(e)}else s=!1;if(wo(e,r),e.stateNode===null)Sc(n,e),D0(e,t,i),Od(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=ai(c):(c=En(t)?Ps:cn.current,c=Do(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Im(e,o,i,c),xr=!1;var f=e.memoizedState;o.state=f,jc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Mn.current||xr?(typeof u=="function"&&(Ud(e,t,u,i),l=e.memoizedState),(a=xr||Dm(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,d0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:mi(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=En(t)?Ps:cn.current,l=Do(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Im(e,o,i,l),xr=!1,f=e.memoizedState,o.state=f,jc(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||Mn.current||xr?(typeof p=="function"&&(Ud(e,t,p,i),x=e.memoizedState),(c=xr||Dm(e,t,c,i,f,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return zd(n,e,t,i,s,r)}function zd(n,e,t,i,r,s){F0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Tm(e,t,!1),rr(n,e,s);i=e.stateNode,j1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Uo(e,n.child,null,s),e.child=Uo(e,null,a,s)):dn(n,e,a,s),e.memoizedState=i.state,r&&Tm(e,t,!0),e.child}function z0(n){var e=n.stateNode;e.pendingContext?wm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&wm(n,e.context,!1),$h(n,e.containerInfo)}function Hm(n,e,t,i,r){return Io(),Vh(r),e.flags|=256,dn(n,e,t,i),e.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function Hd(n){return{baseLanes:n,cachePool:null,transitions:null}}function B0(n,e,t){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ft(yt,r&1),n===null)return Dd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cu(o,i,0,null),n=Ts(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Hd(t),e.memoizedState=Bd,n):np(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return X1(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=kr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=Ts(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Hd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Bd,i}return s=n.child,n=s.sibling,i=kr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function np(n,e){return e=Cu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ul(n,e,t,i){return i!==null&&Vh(i),Uo(e,n.child,null,t),n=np(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function X1(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=hf(Error(ne(422))),Ul(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cu({mode:"visible",children:i.children},r,0,null),s=Ts(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Uo(e,n.child,null,o),e.child.memoizedState=Hd(o),e.memoizedState=Bd,s);if(!(e.mode&1))return Ul(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=hf(s,i,void 0),Ul(n,e,o,i)}if(a=(o&n.childLanes)!==0,Sn||a){if(i=qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ir(n,r),yi(i,n,r,-1))}return lp(),i=hf(Error(ne(421))),Ul(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=sM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,zn=Dr(r.nextSibling),Vn=e,mt=!0,gi=null,n!==null&&(Qn[Jn++]=Zi,Qn[Jn++]=Qi,Qn[Jn++]=Ns,Zi=n.id,Qi=n.overflow,Ns=e),e=np(e,i.children),e.flags|=4096,e)}function Vm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Id(n.return,e,t)}function pf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function H0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(n,e,i.children,t),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Vm(n,t,e);else if(n.tag===19)Vm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ft(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Xc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),pf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Xc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}pf(e,!0,t,null,s);break;case"together":pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function rr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ds|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=kr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=kr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function q1(n,e,t){switch(e.tag){case 3:z0(e),Io();break;case 5:h0(e);break;case 1:En(e.type)&&Bc(e);break;case 4:$h(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Gc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(yt,yt.current&1),e.flags|=128,null):t&e.child.childLanes?B0(n,e,t):(ft(yt,yt.current&1),n=rr(n,e,t),n!==null?n.sibling:null);ft(yt,yt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return H0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,k0(n,e,t)}return rr(n,e,t)}var V0,Vd,G0,W0;V0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Vd=function(){};G0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ys(ki.current);var s=null;switch(t){case"input":r=ud(n,r),i=ud(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=hd(n,r),i=hd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Fc)}md(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ka.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ka.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};W0=function(n,e,t,i){t!==i&&(e.flags|=4)};function la(n,e){if(!mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function tn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function $1(n,e,t){var i=e.pendingProps;switch(Hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return En(e.type)&&zc(),tn(e),null;case 3:return i=e.stateNode,Oo(),pt(Mn),pt(cn),Kh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Dl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gi!==null&&(Kd(gi),gi=null))),Vd(n,e),tn(e),null;case 5:Yh(e);var r=ys(Ya.current);if(t=e.type,n!==null&&e.stateNode!=null)G0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return tn(e),null}if(n=ys(ki.current),Dl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Pi]=e,i[qa]=s,n=(e.mode&1)!==0,t){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<Sa.length;r++)dt(Sa[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":Zp(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Jp(i,s),dt("invalid",i)}md(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,n),r=["children",""+a]):ka.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(t){case"input":wl(i),Qp(i,s,!0);break;case"textarea":wl(i),em(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=vv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Pi]=e,n[qa]=i,V0(n,e,!1,!1),e.stateNode=n;e:{switch(o=_d(t,i),t){case"dialog":dt("cancel",n),dt("close",n),r=i;break;case"iframe":case"object":case"embed":dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Sa.length;r++)dt(Sa[r],n);r=i;break;case"source":dt("error",n),r=i;break;case"img":case"image":case"link":dt("error",n),dt("load",n),r=i;break;case"details":dt("toggle",n),r=i;break;case"input":Zp(n,i),r=ud(n,i),dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),dt("invalid",n);break;case"textarea":Jp(n,i),r=hd(n,i),dt("invalid",n);break;default:r=i}md(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Fa(n,l):typeof l=="number"&&Fa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ka.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",n):l!=null&&Ah(n,s,l,o))}switch(t){case"input":wl(n),Qp(n,i,!1);break;case"textarea":wl(n),em(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Vr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?yo(n,!!i.multiple,s,!1):i.defaultValue!=null&&yo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Fc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(n&&e.stateNode!=null)W0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=ys(Ya.current),ys(ki.current),Dl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Pi]=e,(s=i.nodeValue!==t)&&(n=Vn,n!==null))switch(n.tag){case 3:Ll(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ll(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Pi]=e,e.stateNode=i}return tn(e),null;case 13:if(pt(yt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(mt&&zn!==null&&e.mode&1&&!(e.flags&128))l0(),Io(),e.flags|=98560,s=!1;else if(s=Dl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Pi]=e}else Io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else gi!==null&&(Kd(gi),gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||yt.current&1?Bt===0&&(Bt=3):lp())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return Oo(),Vd(n,e),n===null&&ja(e.stateNode.containerInfo),tn(e),null;case 10:return jh(e.type._context),tn(e),null;case 17:return En(e.type)&&zc(),tn(e),null;case 19:if(pt(yt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)la(s,!1);else{if(Bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Xc(n),o!==null){for(e.flags|=128,la(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ft(yt,yt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Dt()>Fo&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(n=Xc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return tn(e),null}else 2*Dt()-s.renderingStartTime>Fo&&t!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,t=yt.current,ft(yt,i?t&1|2:t&1),e):(tn(e),null);case 22:case 23:return ap(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Y1(n,e){switch(Hh(e),e.tag){case 1:return En(e.type)&&zc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Oo(),pt(Mn),pt(cn),Kh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Yh(e),null;case 13:if(pt(yt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Io()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return pt(yt),null;case 4:return Oo(),null;case 10:return jh(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var Ol=!1,on=!1,K1=typeof WeakSet=="function"?WeakSet:Set,me=null;function mo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Rt(n,e,i)}else t.current=null}function Gd(n,e,t){try{t()}catch(i){Rt(n,e,i)}}var Gm=!1;function Z1(n,e){if(Ad=Uc,n=Yv(),zh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Cd={focusedElem:n,selectionRange:t},Uc=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:mi(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){Rt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return x=Gm,Gm=!1,x}function Na(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Gd(e,t,s)}r=r.next}while(r!==i)}}function Tu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Wd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function j0(n){var e=n.alternate;e!==null&&(n.alternate=null,j0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Pi],delete e[qa],delete e[Pd],delete e[D1],delete e[I1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function X0(n){return n.tag===5||n.tag===3||n.tag===4}function Wm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||X0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Fc));else if(i!==4&&(n=n.child,n!==null))for(jd(n,e,t),n=n.sibling;n!==null;)jd(n,e,t),n=n.sibling}function Xd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Xd(n,e,t),n=n.sibling;n!==null;)Xd(n,e,t),n=n.sibling}var Yt=null,_i=!1;function ur(n,e,t){for(t=t.child;t!==null;)q0(n,e,t),t=t.sibling}function q0(n,e,t){if(Oi&&typeof Oi.onCommitFiberUnmount=="function")try{Oi.onCommitFiberUnmount(gu,t)}catch{}switch(t.tag){case 5:on||mo(t,e);case 6:var i=Yt,r=_i;Yt=null,ur(n,e,t),Yt=i,_i=r,Yt!==null&&(_i?(n=Yt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Yt.removeChild(t.stateNode));break;case 18:Yt!==null&&(_i?(n=Yt,t=t.stateNode,n.nodeType===8?af(n.parentNode,t):n.nodeType===1&&af(n,t),Va(n)):af(Yt,t.stateNode));break;case 4:i=Yt,r=_i,Yt=t.stateNode.containerInfo,_i=!0,ur(n,e,t),Yt=i,_i=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gd(t,e,o),r=r.next}while(r!==i)}ur(n,e,t);break;case 1:if(!on&&(mo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Rt(t,e,a)}ur(n,e,t);break;case 21:ur(n,e,t);break;case 22:t.mode&1?(on=(i=on)||t.memoizedState!==null,ur(n,e,t),on=i):ur(n,e,t);break;default:ur(n,e,t)}}function jm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new K1),e.forEach(function(i){var r=oM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ui(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,_i=!1;break e;case 3:Yt=a.stateNode.containerInfo,_i=!0;break e;case 4:Yt=a.stateNode.containerInfo,_i=!0;break e}a=a.return}if(Yt===null)throw Error(ne(160));q0(s,o,r),Yt=null,_i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$0(e,n),e=e.sibling}function $0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(e,n),Ti(n),i&4){try{Na(3,n,n.return),Tu(3,n)}catch(_){Rt(n,n.return,_)}try{Na(5,n,n.return)}catch(_){Rt(n,n.return,_)}}break;case 1:ui(e,n),Ti(n),i&512&&t!==null&&mo(t,t.return);break;case 5:if(ui(e,n),Ti(n),i&512&&t!==null&&mo(t,t.return),n.flags&32){var r=n.stateNode;try{Fa(r,"")}catch(_){Rt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_v(r,s),_d(a,o);var c=_d(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Sv(r,h):u==="dangerouslySetInnerHTML"?xv(r,h):u==="children"?Fa(r,h):Ah(r,u,h,c)}switch(a){case"input":fd(r,s);break;case"textarea":gv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?yo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?yo(r,!!s.multiple,s.defaultValue,!0):yo(r,!!s.multiple,s.multiple?[]:"",!1))}r[qa]=s}catch(_){Rt(n,n.return,_)}}break;case 6:if(ui(e,n),Ti(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Rt(n,n.return,_)}}break;case 3:if(ui(e,n),Ti(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(_){Rt(n,n.return,_)}break;case 4:ui(e,n),Ti(n);break;case 13:ui(e,n),Ti(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sp=Dt())),i&4&&jm(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(on=(c=on)||u,ui(e,n),on=c):ui(e,n),Ti(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(me=n,u=n.child;u!==null;){for(h=me=u;me!==null;){switch(f=me,p=f.child,f.tag){case 0:case 11:case 14:case 15:Na(4,f,f.return);break;case 1:mo(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){Rt(i,t,_)}}break;case 5:mo(f,f.return);break;case 22:if(f.memoizedState!==null){qm(h);continue}}p!==null?(p.return=f,me=p):qm(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yv("display",o))}catch(_){Rt(n,n.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){Rt(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ui(e,n),Ti(n),i&4&&jm(n);break;case 21:break;default:ui(e,n),Ti(n)}}function Ti(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(X0(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fa(r,""),i.flags&=-33);var s=Wm(n);Xd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Wm(n);jd(n,a,o);break;default:throw Error(ne(161))}}catch(l){Rt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Q1(n,e,t){me=n,Y0(n)}function Y0(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ol;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=Ol;var c=on;if(Ol=o,(on=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?$m(r):l!==null?(l.return=o,me=l):$m(r);for(;s!==null;)me=s,Y0(s),s=s.sibling;me=r,Ol=a,on=c}Xm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Xm(n)}}function Xm(n){for(;me!==null;){var e=me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:mi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Pm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Va(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}on||e.flags&512&&Wd(e)}catch(f){Rt(e,e.return,f)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function qm(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function $m(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Tu(4,e)}catch(l){Rt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Wd(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{Wd(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var J1=Math.ceil,Yc=lr.ReactCurrentDispatcher,ip=lr.ReactCurrentOwner,si=lr.ReactCurrentBatchConfig,Ye=0,qt=null,Ft=null,Zt=0,On=0,_o=Zr(0),Bt=0,Ja=null,Ds=0,Au=0,rp=0,La=null,vn=null,sp=0,Fo=1/0,Xi=null,Kc=!1,qd=null,Ur=null,kl=!1,wr=null,Zc=0,Da=0,$d=null,Mc=-1,Ec=0;function hn(){return Ye&6?Dt():Mc!==-1?Mc:Mc=Dt()}function Or(n){return n.mode&1?Ye&2&&Zt!==0?Zt&-Zt:O1.transition!==null?(Ec===0&&(Ec=Dv()),Ec):(n=st,n!==0||(n=window.event,n=n===void 0?16:Bv(n.type)),n):1}function yi(n,e,t,i){if(50<Da)throw Da=0,$d=null,Error(ne(185));cl(n,t,i),(!(Ye&2)||n!==qt)&&(n===qt&&(!(Ye&2)&&(Au|=t),Bt===4&&Sr(n,Zt)),wn(n,i),t===1&&Ye===0&&!(e.mode&1)&&(Fo=Dt()+500,Mu&&Qr()))}function wn(n,e){var t=n.callbackNode;OS(n,e);var i=Ic(n,n===qt?Zt:0);if(i===0)t!==null&&im(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&im(t),e===1)n.tag===0?U1(Ym.bind(null,n)):s0(Ym.bind(null,n)),N1(function(){!(Ye&6)&&Qr()}),t=null;else{switch(Iv(i)){case 1:t=Nh;break;case 4:t=Nv;break;case 16:t=Dc;break;case 536870912:t=Lv;break;default:t=Dc}t=ix(t,K0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function K0(n,e){if(Mc=-1,Ec=0,Ye&6)throw Error(ne(327));var t=n.callbackNode;if(To()&&n.callbackNode!==t)return null;var i=Ic(n,n===qt?Zt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Qc(n,i);else{e=i;var r=Ye;Ye|=2;var s=Q0();(qt!==n||Zt!==e)&&(Xi=null,Fo=Dt()+500,ws(n,e));do try{nM();break}catch(a){Z0(n,a)}while(!0);Wh(),Yc.current=s,Ye=r,Ft!==null?e=0:(qt=null,Zt=0,e=Bt)}if(e!==0){if(e===2&&(r=Sd(n),r!==0&&(i=r,e=Yd(n,r))),e===1)throw t=Ja,ws(n,0),Sr(n,i),wn(n,Dt()),t;if(e===6)Sr(n,i);else{if(r=n.current.alternate,!(i&30)&&!eM(r)&&(e=Qc(n,i),e===2&&(s=Sd(n),s!==0&&(i=s,e=Yd(n,s))),e===1))throw t=Ja,ws(n,0),Sr(n,i),wn(n,Dt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:ds(n,vn,Xi);break;case 3:if(Sr(n,i),(i&130023424)===i&&(e=sp+500-Dt(),10<e)){if(Ic(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){hn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=bd(ds.bind(null,n,vn,Xi),e);break}ds(n,vn,Xi);break;case 4:if(Sr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-xi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*J1(i/1960))-i,10<i){n.timeoutHandle=bd(ds.bind(null,n,vn,Xi),i);break}ds(n,vn,Xi);break;case 5:ds(n,vn,Xi);break;default:throw Error(ne(329))}}}return wn(n,Dt()),n.callbackNode===t?K0.bind(null,n):null}function Yd(n,e){var t=La;return n.current.memoizedState.isDehydrated&&(ws(n,e).flags|=256),n=Qc(n,e),n!==2&&(e=vn,vn=t,e!==null&&Kd(e)),n}function Kd(n){vn===null?vn=n:vn.push.apply(vn,n)}function eM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Mi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(n,e){for(e&=~rp,e&=~Au,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-xi(e),i=1<<t;n[t]=-1,e&=~i}}function Ym(n){if(Ye&6)throw Error(ne(327));To();var e=Ic(n,0);if(!(e&1))return wn(n,Dt()),null;var t=Qc(n,e);if(n.tag!==0&&t===2){var i=Sd(n);i!==0&&(e=i,t=Yd(n,i))}if(t===1)throw t=Ja,ws(n,0),Sr(n,e),wn(n,Dt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ds(n,vn,Xi),wn(n,Dt()),null}function op(n,e){var t=Ye;Ye|=1;try{return n(e)}finally{Ye=t,Ye===0&&(Fo=Dt()+500,Mu&&Qr())}}function Is(n){wr!==null&&wr.tag===0&&!(Ye&6)&&To();var e=Ye;Ye|=1;var t=si.transition,i=st;try{if(si.transition=null,st=1,n)return n()}finally{st=i,si.transition=t,Ye=e,!(Ye&6)&&Qr()}}function ap(){On=_o.current,pt(_o)}function ws(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,P1(t)),Ft!==null)for(t=Ft.return;t!==null;){var i=t;switch(Hh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zc();break;case 3:Oo(),pt(Mn),pt(cn),Kh();break;case 5:Yh(i);break;case 4:Oo();break;case 13:pt(yt);break;case 19:pt(yt);break;case 10:jh(i.type._context);break;case 22:case 23:ap()}t=t.return}if(qt=n,Ft=n=kr(n.current,null),Zt=On=e,Bt=0,Ja=null,rp=Au=Ds=0,vn=La=null,xs!==null){for(e=0;e<xs.length;e++)if(t=xs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}xs=null}return n}function Z0(n,e){do{var t=Ft;try{if(Wh(),xc.current=$c,qc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qc=!1}if(Ls=0,Xt=zt=Et=null,Pa=!1,Ka=0,ip.current=null,t===null||t.return===null){Bt=1,Ja=e,Ft=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Om(o);if(p!==null){p.flags&=-257,km(p,o,a,s,e),p.mode&1&&Um(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Um(s,c,e),lp();break e}l=Error(ne(426))}}else if(mt&&a.mode&1){var m=Om(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),km(m,o,a,s,e),Vh(ko(l,a));break e}}s=l=ko(l,a),Bt!==4&&(Bt=2),La===null?La=[s]:La.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=I0(s,l,e);bm(s,d);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ur===null||!Ur.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=U0(s,a,e);bm(s,S);break e}}s=s.return}while(s!==null)}ex(t)}catch(T){e=T,Ft===t&&t!==null&&(Ft=t=t.return);continue}break}while(!0)}function Q0(){var n=Yc.current;return Yc.current=$c,n===null?$c:n}function lp(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),qt===null||!(Ds&268435455)&&!(Au&268435455)||Sr(qt,Zt)}function Qc(n,e){var t=Ye;Ye|=2;var i=Q0();(qt!==n||Zt!==e)&&(Xi=null,ws(n,e));do try{tM();break}catch(r){Z0(n,r)}while(!0);if(Wh(),Ye=t,Yc.current=i,Ft!==null)throw Error(ne(261));return qt=null,Zt=0,Bt}function tM(){for(;Ft!==null;)J0(Ft)}function nM(){for(;Ft!==null&&!CS();)J0(Ft)}function J0(n){var e=nx(n.alternate,n,On);n.memoizedProps=n.pendingProps,e===null?ex(n):Ft=e,ip.current=null}function ex(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Y1(t,e),t!==null){t.flags&=32767,Ft=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Bt=6,Ft=null;return}}else if(t=$1(t,e,On),t!==null){Ft=t;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=n}while(e!==null);Bt===0&&(Bt=5)}function ds(n,e,t){var i=st,r=si.transition;try{si.transition=null,st=1,iM(n,e,t,i)}finally{si.transition=r,st=i}return null}function iM(n,e,t,i){do To();while(wr!==null);if(Ye&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(kS(n,s),n===qt&&(Ft=qt=null,Zt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||kl||(kl=!0,ix(Dc,function(){return To(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=si.transition,si.transition=null;var o=st;st=1;var a=Ye;Ye|=4,ip.current=null,Z1(n,t),$0(t,n),E1(Cd),Uc=!!Ad,Cd=Ad=null,n.current=t,Q1(t),RS(),Ye=a,st=o,si.transition=s}else n.current=t;if(kl&&(kl=!1,wr=n,Zc=r),s=n.pendingLanes,s===0&&(Ur=null),NS(t.stateNode),wn(n,Dt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kc)throw Kc=!1,n=qd,qd=null,n;return Zc&1&&n.tag!==0&&To(),s=n.pendingLanes,s&1?n===$d?Da++:(Da=0,$d=n):Da=0,Qr(),null}function To(){if(wr!==null){var n=Iv(Zc),e=si.transition,t=st;try{if(si.transition=null,st=16>n?16:n,wr===null)var i=!1;else{if(n=wr,wr=null,Zc=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,me=n.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:Na(8,u,s)}var h=u.child;if(h!==null)h.return=u,me=h;else for(;me!==null;){u=me;var f=u.sibling,p=u.return;if(j0(u),u===c){me=null;break}if(f!==null){f.return=p,me=f;break}me=p}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var v=n.current;for(me=v;me!==null;){o=me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,me=g;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tu(9,a)}}catch(T){Rt(a,a.return,T)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(Ye=r,Qr(),Oi&&typeof Oi.onPostCommitFiberRoot=="function")try{Oi.onPostCommitFiberRoot(gu,n)}catch{}i=!0}return i}finally{st=t,si.transition=e}}return!1}function Km(n,e,t){e=ko(t,e),e=I0(n,e,1),n=Ir(n,e,1),e=hn(),n!==null&&(cl(n,1,e),wn(n,e))}function Rt(n,e,t){if(n.tag===3)Km(n,n,t);else for(;e!==null;){if(e.tag===3){Km(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ur===null||!Ur.has(i))){n=ko(t,n),n=U0(e,n,1),e=Ir(e,n,1),n=hn(),e!==null&&(cl(e,1,n),wn(e,n));break}}e=e.return}}function rM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=hn(),n.pingedLanes|=n.suspendedLanes&t,qt===n&&(Zt&t)===t&&(Bt===4||Bt===3&&(Zt&130023424)===Zt&&500>Dt()-sp?ws(n,0):rp|=t),wn(n,e)}function tx(n,e){e===0&&(n.mode&1?(e=Cl,Cl<<=1,!(Cl&130023424)&&(Cl=4194304)):e=1);var t=hn();n=ir(n,e),n!==null&&(cl(n,e,t),wn(n,t))}function sM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),tx(n,t)}function oM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),tx(n,t)}var nx;nx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Sn=!1,q1(n,e,t);Sn=!!(n.flags&131072)}else Sn=!1,mt&&e.flags&1048576&&o0(e,Vc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sc(n,e),n=e.pendingProps;var r=Do(e,cn.current);wo(e,t),r=Qh(null,e,i,n,r,t);var s=Jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,Bc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qh(e),r.updater=wu,e.stateNode=r,r._reactInternals=e,Od(e,i,n,t),e=zd(null,e,i,!0,s,t)):(e.tag=0,mt&&s&&Bh(e),dn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Sc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lM(i),n=mi(i,n),r){case 0:e=Fd(null,e,i,n,t);break e;case 1:e=Bm(null,e,i,n,t);break e;case 11:e=Fm(null,e,i,n,t);break e;case 14:e=zm(null,e,i,mi(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Fd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Bm(n,e,i,r,t);case 3:e:{if(z0(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,d0(n,e),jc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ko(Error(ne(423)),e),e=Hm(n,e,i,t,r);break e}else if(i!==r){r=ko(Error(ne(424)),e),e=Hm(n,e,i,t,r);break e}else for(zn=Dr(e.stateNode.containerInfo.firstChild),Vn=e,mt=!0,gi=null,t=u0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Io(),i===r){e=rr(n,e,t);break e}dn(n,e,i,t)}e=e.child}return e;case 5:return h0(e),n===null&&Dd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Rd(i,r)?o=null:s!==null&&Rd(i,s)&&(e.flags|=32),F0(n,e),dn(n,e,o,t),e.child;case 6:return n===null&&Dd(e),null;case 13:return B0(n,e,t);case 4:return $h(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Uo(e,null,i,t):dn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Fm(n,e,i,r,t);case 7:return dn(n,e,e.pendingProps,t),e.child;case 8:return dn(n,e,e.pendingProps.children,t),e.child;case 12:return dn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(Gc,i._currentValue),i._currentValue=o,s!==null)if(Mi(s.value,o)){if(s.children===r.children&&!Mn.current){e=rr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=er(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Id(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Id(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,wo(e,t),r=ai(r),i=i(r),e.flags|=1,dn(n,e,i,t),e.child;case 14:return i=e.type,r=mi(i,e.pendingProps),r=mi(i.type,r),zm(n,e,i,r,t);case 15:return O0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Sc(n,e),e.tag=1,En(i)?(n=!0,Bc(e)):n=!1,wo(e,t),D0(e,i,r),Od(e,i,r,t),zd(null,e,i,!0,n,t);case 19:return H0(n,e,t);case 22:return k0(n,e,t)}throw Error(ne(156,e.tag))};function ix(n,e){return Pv(n,e)}function aM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,e,t,i){return new aM(n,e,t,i)}function cp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function lM(n){if(typeof n=="function")return cp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Rh)return 11;if(n===bh)return 14}return 2}function kr(n,e){var t=n.alternate;return t===null?(t=ti(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function wc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")cp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case so:return Ts(t.children,r,s,e);case Ch:o=8,r|=8;break;case od:return n=ti(12,t,e,r|2),n.elementType=od,n.lanes=s,n;case ad:return n=ti(13,t,e,r),n.elementType=ad,n.lanes=s,n;case ld:return n=ti(19,t,e,r),n.elementType=ld,n.lanes=s,n;case hv:return Cu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fv:o=10;break e;case dv:o=9;break e;case Rh:o=11;break e;case bh:o=14;break e;case vr:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=ti(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ts(n,e,t,i){return n=ti(7,n,i,e),n.lanes=t,n}function Cu(n,e,t,i){return n=ti(22,n,i,e),n.elementType=hv,n.lanes=t,n.stateNode={isHidden:!1},n}function mf(n,e,t){return n=ti(6,n,null,e),n.lanes=t,n}function _f(n,e,t){return e=ti(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function cM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yu(0),this.expirationTimes=Yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function up(n,e,t,i,r,s,o,a,l){return n=new cM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ti(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},qh(s),n}function uM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function rx(n){if(!n)return Gr;n=n._reactInternals;e:{if(ks(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(En(t))return r0(n,t,e)}return e}function sx(n,e,t,i,r,s,o,a,l){return n=up(t,i,!0,n,r,s,o,a,l),n.context=rx(null),t=n.current,i=hn(),r=Or(t),s=er(i,r),s.callback=e??null,Ir(t,s,r),n.current.lanes=r,cl(n,r,i),wn(n,i),n}function Ru(n,e,t,i){var r=e.current,s=hn(),o=Or(r);return t=rx(t),e.context===null?e.context=t:e.pendingContext=t,e=er(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ir(r,e,o),n!==null&&(yi(n,r,o,s),vc(n,r,o)),o}function Jc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function fp(n,e){Zm(n,e),(n=n.alternate)&&Zm(n,e)}function fM(){return null}var ox=typeof reportError=="function"?reportError:function(n){console.error(n)};function dp(n){this._internalRoot=n}bu.prototype.render=dp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Ru(n,e,null,null)};bu.prototype.unmount=dp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Is(function(){Ru(null,n,null,null)}),e[nr]=null}};function bu(n){this._internalRoot=n}bu.prototype.unstable_scheduleHydration=function(n){if(n){var e=kv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<yr.length&&e!==0&&e<yr[t].priority;t++);yr.splice(t,0,n),t===0&&zv(n)}};function hp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function dM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jc(o);s.call(c)}}var o=sx(e,i,n,0,null,!1,!1,"",Qm);return n._reactRootContainer=o,n[nr]=o.current,ja(n.nodeType===8?n.parentNode:n),Is(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jc(l);a.call(c)}}var l=up(n,0,!1,null,null,!1,!1,"",Qm);return n._reactRootContainer=l,n[nr]=l.current,ja(n.nodeType===8?n.parentNode:n),Is(function(){Ru(e,l,t,i)}),l}function Nu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jc(o);a.call(l)}}Ru(e,o,n,r)}else o=dM(t,e,n,r,i);return Jc(o)}Uv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ya(e.pendingLanes);t!==0&&(Lh(e,t|1),wn(e,Dt()),!(Ye&6)&&(Fo=Dt()+500,Qr()))}break;case 13:Is(function(){var i=ir(n,1);if(i!==null){var r=hn();yi(i,n,1,r)}}),fp(n,1)}};Dh=function(n){if(n.tag===13){var e=ir(n,134217728);if(e!==null){var t=hn();yi(e,n,134217728,t)}fp(n,134217728)}};Ov=function(n){if(n.tag===13){var e=Or(n),t=ir(n,e);if(t!==null){var i=hn();yi(t,n,e,i)}fp(n,e)}};kv=function(){return st};Fv=function(n,e){var t=st;try{return st=n,e()}finally{st=t}};vd=function(n,e,t){switch(e){case"input":if(fd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Su(i);if(!r)throw Error(ne(90));mv(i),fd(i,r)}}}break;case"textarea":gv(n,t);break;case"select":e=t.value,e!=null&&yo(n,!!t.multiple,e,!1)}};wv=op;Tv=Is;var hM={usingClientEntryPoint:!1,Events:[fl,co,Su,Mv,Ev,op]},ca={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pM={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Rv(n),n===null?null:n.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||fM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{gu=Fl.inject(pM),Oi=Fl}catch{}}qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hM;qn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(ne(200));return uM(n,e,null,t)};qn.createRoot=function(n,e){if(!hp(n))throw Error(ne(299));var t=!1,i="",r=ox;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=up(n,1,!1,null,null,t,!1,i,r),n[nr]=e.current,ja(n.nodeType===8?n.parentNode:n),new dp(e)};qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=Rv(e),n=n===null?null:n.stateNode,n};qn.flushSync=function(n){return Is(n)};qn.hydrate=function(n,e,t){if(!Pu(e))throw Error(ne(200));return Nu(null,n,e,!0,t)};qn.hydrateRoot=function(n,e,t){if(!hp(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ox;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=sx(e,null,n,1,t??null,r,!1,s,o),n[nr]=e.current,ja(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new bu(e)};qn.render=function(n,e,t){if(!Pu(e))throw Error(ne(200));return Nu(null,n,e,!1,t)};qn.unmountComponentAtNode=function(n){if(!Pu(n))throw Error(ne(40));return n._reactRootContainer?(Is(function(){Nu(null,null,n,!1,function(){n._reactRootContainer=null,n[nr]=null})}),!0):!1};qn.unstable_batchedUpdates=op;qn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Pu(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Nu(n,e,t,!1,i)};qn.version="18.3.1-next-f1338f8080-20240426";function ax(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ax)}catch(n){console.error(n)}}ax(),av.exports=qn;var mM=av.exports,lx,Jm=mM;lx=Jm.createRoot,Jm.hydrateRoot;function _M(){return Je.useEffect(()=>{if(window.matchMedia("(max-width: 768px)").matches)return;const n=document.createElement("div"),e=document.createElement("div");n.id="cursor",e.id="cursor-ring",document.body.appendChild(n),document.body.appendChild(e);let t=0,i=0,r=0,s=0,o;const a=c=>{r=c.clientX,s=c.clientY,n.style.left=r+"px",n.style.top=s+"px"},l=()=>{t+=(r-t)*.18,i+=(s-i)*.18,e.style.left=t+"px",e.style.top=i+"px",o=requestAnimationFrame(l)};return window.addEventListener("mousemove",a),l(),()=>{window.removeEventListener("mousemove",a),cancelAnimationFrame(o),n.remove(),e.remove()}},[]),null}function qi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function cx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},el={duration:.5,overwrite:!1,delay:0},pp,Qt,_t,ni=1e8,ut=1/ni,Zd=Math.PI*2,gM=Zd/4,vM=0,ux=Math.sqrt,xM=Math.cos,yM=Math.sin,$t=function(e){return typeof e=="string"},bt=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},mp=function(e){return typeof e>"u"},Fi=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},_p=function(){return typeof window<"u"},zl=function(e){return bt(e)||$t(e)},fx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,SM=/random\([^)]+\)/g,MM=/,\s*/g,e_=/(?:-?\.?\d|\.)+/gi,dx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,go=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hx=/[+-]=-?[.\d]+/,EM=/[^,'"\[\]\s]+/gi,wM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,St,Ci,Qd,gp,jn={},eu={},px,mx=function(e){return(eu=zo(e,jn))&&Nn},vp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},tl=function(e,t){return!t&&console.warn(e)},_x=function(e,t){return e&&(jn[e]=t)&&eu&&(eu[e]=t)||jn},nl=function(){return 0},TM={suppressEvents:!0,isStart:!0,kill:!1},Tc={suppressEvents:!0,kill:!1},AM={suppressEvents:!0},xp={},Fr=[],Jd={},gx,kn={},vf={},t_=30,Ac=[],yp="",Sp=function(e){var t=e[0],i,r;if(Fi(t)||bt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ac.length;r--&&!Ac[r].targetTest(t););i=Ac[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new zx(e[r],i)))||e.splice(r,1);return e},As=function(e){return e._gsap||Sp(ii(e))[0]._gsap},vx=function(e,t,i){return(i=e[t])&&bt(i)?e[t]():mp(i)&&e.getAttribute&&e.getAttribute(t)||i},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},xt=function(e){return Math.round(e*1e7)/1e7||0},Ao=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},CM=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},tu=function(){var e=Fr.length,t=Fr.slice(0),i,r;for(Jd={},Fr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Mp=function(e){return!!(e._initted||e._startAt||e.add)},xx=function(e,t,i,r){Fr.length&&!Qt&&tu(),e.render(t,i,!!(Qt&&t<0&&Mp(e))),Fr.length&&!Qt&&tu()},yx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(EM).length<2?t:$t(e)?e.trim():e},Sx=function(e){return e},Xn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},RM=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},zo=function(e,t){for(var i in t)e[i]=t[i];return e},n_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Fi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},nu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ia=function(e){var t=e.parent||St,i=e.keyframes?RM(ln(e.keyframes)):Xn;if(Tn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},bM=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Mx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Lu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},PM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},eh=function(e,t,i,r){return e._startAt&&(Qt?e._startAt.revert(Tc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},NM=function n(e){return!e||e._ts&&n(e.parent)},i_=function(e){return e._repeat?Bo(e._tTime,e=e.duration()+e._rDelay)*e:0},Bo=function(e,t){var i=Math.floor(e=xt(e/t));return e&&i===e?i-1:i},iu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Du=function(e){return e._end=xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},Iu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=xt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Du(e),i._dirty||Cs(i,e)),e},Ex=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=iu(e.rawTime(),t),(!t._dur||hl(0,t.totalDuration(),i)-t._tTime>ut)&&t.render(i,!0)),Cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ut}},Ni=function(e,t,i,r){return t.parent&&Wr(t),t._start=xt((sr(i)?i:i||e!==St?Zn(e,i,t):e._time)+t._delay),t._end=xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mx(e,t,"_first","_last",e._sort?"_start":0),th(t)||(e._recent=t),r||Ex(e,t),e._ts<0&&Iu(e,e._tTime),e},wx=function(e,t){return(jn.ScrollTrigger||vp("scrollTrigger",t))&&jn.ScrollTrigger.create(t,e)},Tx=function(e,t,i,r,s){if(wp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gx!==Fn.frame)return Fr.push(e),e._lazy=[s,r],1},LM=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},th=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},DM=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&LM(e)&&!(!e._initted&&th(e))||(e._ts<0||e._dp._ts<0)&&!th(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=hl(0,e._tDur,t),u=Bo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Bo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Qt||r||e._zTime===ut||!t&&e._zTime){if(!e._initted&&Tx(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?ut:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&eh(e,t,i,!0),e._onUpdate&&!i&&Bn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Wr(e,1),!i&&!Qt&&(Bn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},IM=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ho=function(e,t,i,r){var s=e._repeat,o=xt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:xt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Iu(e,e._tTime=e._tDur*a),e.parent&&Du(e),i||Cs(e.parent,e),e},r_=function(e){return e instanceof yn?Cs(e):Ho(e,e._dur)},UM={_start:0,endTime:nl,totalDuration:nl},Zn=function n(e,t,i){var r=e.labels,s=e._recent||UM,o=e.duration()>=ni?s.endTime(!1):e._dur,a,l,c;return $t(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(ln(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ua=function(e,t,i){var r=sr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new kt(t[0],o,t[s+1])},Jr=function(e,t){return e||e===0?t(e):t},hl=function(e,t,i){return i<e?e:i>t?t:i},an=function(e,t){return!$t(e)||!(t=wM.exec(e))?"":t[1]},OM=function(e,t,i){return Jr(i,function(r){return hl(e,t,r)})},nh=[].slice,Ax=function(e,t){return e&&Fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fi(e[0]))&&!e.nodeType&&e!==Ci},kM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return $t(r)&&!t||Ax(r,1)?(s=i).push.apply(s,ii(r)):i.push(r)})||i},ii=function(e,t,i){return _t&&!t&&_t.selector?_t.selector(e):$t(e)&&!i&&(Qd||!Vo())?nh.call((t||gp).querySelectorAll(e),0):ln(e)?kM(e,i):Ax(e)?nh.call(e,0):e?[e]:[]},ih=function(e){return e=ii(e)[0]||tl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ii(t,i.querySelectorAll?i:i===e?tl("Invalid scope")||gp.createElement("div"):e)}},Cx=function(e){return e.sort(function(){return .5-Math.random()})},Rx=function(e){if(bt(e))return e;var t=Fi(e)?e:{each:e},i=Rs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return $t(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,p,x){var _=(x||t).length,m=o[_],d,v,g,S,T,A,w,C,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,ni])[1],!E){for(w=-ni;w<(w=x[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=o[_]=[],d=l?Math.min(E,_)*u-.5:r%E,v=E===ni?0:l?_*h/E-.5:r/E|0,w=0,C=ni,A=0;A<_;A++)g=A%E-d,S=v-(A/E|0),m[A]=T=c?Math.abs(c==="y"?S:g):ux(g*g+S*S),T>w&&(w=T),T<C&&(C=T);r==="random"&&Cx(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=an(t.amount||t.each)||0,i=i&&_<0?KM(i):i}return _=(m[f]-m.min)/m.max||0,xt(m.b+(i?i(_):_)*m.v)+m.u}},rh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=xt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(sr(i)?0:an(i))}},bx=function(e,t){var i=ln(e),r,s;return!i&&Fi(e)&&(r=i=e.radius||ni,e.values?(e=ii(e.values),(s=!sr(e[0]))&&(r*=r)):e=rh(e.increment)),Jr(t,i?bt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||sr(o)?u:u+an(o)}:rh(e))},Px=function(e,t,i,r){return Jr(ln(e)?!t:i===!0?!!(i=0):!r,function(){return ln(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},FM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},zM=function(e,t){return function(i){return e(parseFloat(i))+(t||an(i))}},BM=function(e,t,i){return Lx(e,t,0,1,i)},Nx=function(e,t,i){return Jr(i,function(r){return e[~~t(r)]})},HM=function n(e,t,i){var r=t-e;return ln(e)?Nx(e,n(0,e.length),t):Jr(i,function(s){return(r+(s-e)%r)%r+e})},VM=function n(e,t,i){var r=t-e,s=r*2;return ln(e)?Nx(e,n(0,e.length-1),t):Jr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},il=function(e){return e.replace(SM,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(MM);return Px(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Lx=function(e,t,i,r,s){var o=t-e,a=r-i;return Jr(s,function(l){return i+((l-e)/o*a||0)})},GM=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=$t(e),a={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(x){x*=h;var _=Math.min(f,~~x);return u[_](x-_)},i=t}else r||(e=zo(ln(e)?[]:{},e));if(!u){for(l in t)Ep.call(a,e,l,"get",t[l]);s=function(x){return Cp(x,a)||(o?e.p:e)}}}return Jr(i,s)},s_=function(e,t,i){var r=e.labels,s=ni,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Bn=function(e,t,i){var r=e.vars,s=r[t],o=_t,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Fr.length&&tu(),a&&(_t=a),u=l?s.apply(c,l):s.call(c),_t=o,u},Ma=function(e){return Wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Bn(e,"onInterrupt"),e},vo,Dx=[],Ix=function(e){if(e)if(e=!e.name&&e.default||e,_p()||e.headless){var t=e.name,i=bt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:nl,render:Cp,add:Ep,kill:oE,modifier:sE,rawVars:0},o={targetTest:0,get:0,getSetter:Ap,aliases:{},register:0};if(Vo(),e!==r){if(kn[t])return;Xn(r,Xn(nu(e,s),o)),zo(r.prototype,zo(s,nu(e,o))),kn[r.prop=t]=r,e.targetTest&&(Ac.push(r),xp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_x(t,r),e.register&&e.register(Nn,r,Cn)}else Dx.push(e)},ct=255,Ea={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},xf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ct+.5|0},Ux=function(e,t,i){var r=e?sr(e)?[e>>16,e>>8&ct,e&ct]:0:Ea.black,s,o,a,l,c,u,h,f,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ea[e])r=Ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ct,r&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(e_),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=xf(l+1/3,s,o),r[1]=xf(l,s,o),r[2]=xf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(dx),i&&r.length<4&&(r[3]=1),r}else r=e.match(e_)||Ea.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/ct,o=r[1]/ct,a=r[2]/ct,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Ox=function(e){var t=[],i=[],r=-1;return e.split(zr).forEach(function(s){var o=s.match(go)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},o_=function(e,t,i){var r="",s=(e+r).match(zr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Ux(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=Ox(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(zr,"1").split(go),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(zr),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},zr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ea)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),WM=/hsl[a]?\(/,kx=function(e){var t=e.join(" "),i;if(zr.lastIndex=0,zr.test(t))return i=WM.test(t),e[1]=o_(e[1],i),e[0]=o_(e[0],i,Ox(e[1])),!0},rl,Fn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,h,f,p,x=function _(m){var d=n()-r,v=m===!0,g,S,T,A;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,g=T-o,(g>0||v)&&(A=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=g+(g>=s?4:s-g),S=1),v||(l=c(_)),S)for(p=0;p<a.length;p++)a[p](T,f,A,m)};return h={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){px&&(!Qd&&_p()&&(Ci=Qd=window,gp=Ci.document||{},jn.gsap=Nn,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(Nn.version),mx(eu||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),Dx.forEach(Ix)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},rl=1,x(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),rl=0,c=nl},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,d,v){var g=d?function(S,T,A,w){m(S,T,A,w),h.remove(g)}:m;return h.remove(m),a[v?"unshift":"push"](g),Vo(),g},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),Vo=function(){return!rl&&Fn.wake()},Xe={},jM=/^[\d.\-M][\d.\-,\s]/,XM=/["']/g,qM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(XM,"").trim():+c,r=l.substr(a+1).trim();return t},$M=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},YM=function(e){var t=(e+"").split("("),i=Xe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[qM(t[1])]:$M(e).split(",").map(yx)):Xe._CE&&jM.test(e)?Xe._CE("",e):i},KM=function(e){return function(t){return 1-e(1-t)}},Rs=function(e,t){return e&&(bt(e)?e:Xe[e]||YM(e))||t},Fs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return An(e,function(a){Xe[a]=jn[a]=s,Xe[o=a.toLowerCase()]=i;for(var l in s)Xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[a+"."+l]=s[l]}),s},Fx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Zd*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*yM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Fx(a);return s=Zd/s,l.config=function(c,u){return n(e,c,u)},l},Sf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Fx(i);return r.config=function(s){return n(e,s)},r};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Fs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;Fs("Elastic",yf("in"),yf("out"),yf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Fs("Circ",function(n){return-(ux(1-n*n)-1)});Fs("Sine",function(n){return n===1?1:-xM(n*gM)+1});Fs("Back",Sf("in"),Sf("out"),Sf());Xe.SteppedEase=Xe.steps=jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-ut;return function(a){return((r*hl(0,o,a)|0)+s)*i}}};el.ease=Xe["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return yp+=n+","+n+"Params,"});var zx=function(e,t){this.id=vM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vx,this.set=t?t.getSetter:Ap},sl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ho(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),rl||Fn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ho(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Vo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Iu(this,i),!s._dp||s.parent||Ex(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ni(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ut||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),xx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+i_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+i_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Bo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?iu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ut?0:this._rts,this.totalTime(hl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Du(this),PM(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=xt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ni(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Tn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?iu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=AM);var r=Qt;return Qt=i,Mp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,r_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,r_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Zn(this,i),Tn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Tn(r)),this._dur||(this._zTime=-ut),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ut)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=bt(i)?i:Sx,l=function(){var u=r.then;r.then=null,s&&s(),bt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ma(this)},n}();Xn(sl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var yn=function(n){cx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Tn(i.sortChildren),St&&Ni(i.parent||St,qi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&wx(qi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ua(0,arguments,this),this},t.from=function(r,s,o){return Ua(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ua(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ia(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(r,s,Zn(this,o),1),this},t.call=function(r,s,o){return Ni(this,kt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new kt(r,o,Zn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Ia(o).immediateRender=Tn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Ia(a).immediateRender=Tn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:xt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,x,_,m,d,v,g,S,T,A,w;if(this!==St&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,S=this._start,g=this._ts,d=!g,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=xt(u%m),u===l?(_=this._repeat,f=c):(T=xt(u/m),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=Bo(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),A&&_&1&&(f=c-f,w=1),_!==T&&!this._lock){var C=A&&T&1,E=C===(A&&_&1);if(_<T&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(w?0:xt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=IM(this,xt(a),xt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!!g,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!T&&(Bn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){v=0,x&&(u+=this._zTime=-ut);break}}p=x}else{p=this._last;for(var M=r<0?r:f;p;){if(x=p._prev,(p._act||M<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,o||Qt&&Mp(p)),f!==this._time||!this._ts&&!d){v=0,x&&(u+=this._zTime=M?-ut:ut);break}}p=x}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-ut)._zTime=f>=a?1:-1,this._ts))return this._start=S,Du(this),this.render(r,s,o);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(g)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Bn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(sr(s)||(s=Zn(this,s,r)),!(r instanceof sl)){if(ln(r))return r.forEach(function(a){return o.add(a,s)}),this;if($t(r))return this.addLabel(r,s);if(bt(r))r=kt.delayedCall(0,r);else return this}return this!==r?Ni(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof kt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return $t(r)?this.removeLabel(r):bt(r)?this.killTweensOf(r):(r.parent===this&&Lu(this,r),r===this._recent&&(this._recent=this._last),Cs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(Fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Zn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=kt.delayedCall(0,s||nl,o);return a.data="isPause",this._hasPause=1,Ni(this,a,Zn(this,r))},t.removePause=function(r){var s=this._first;for(r=Zn(this,r);s;)s._start===r&&s.data==="isPause"&&Wr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Tr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ii(r),l=this._first,c=sr(s),u;l;)l instanceof kt?CM(l._targets,a)&&(c?(!Tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Zn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,x=kt.to(o,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ut,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());x._dur!==m&&Ho(x,m,0,1).render(x._time,!0,!0),p=1}u&&u.apply(x,h||[])}},s));return f?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Xn({startAt:{time:Zn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),s_(this,Zn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),s_(this,Zn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=xt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Cs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Cs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ni(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=xt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ho(o,o===St&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(St._ts&&(xx(St,iu(r,St)),gx=Fn.frame),Fn.frame>=t_){t_+=Gn.autoSleep||120;var s=St._first;if((!s||!s._ts)&&Gn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},e}(sl);Xn(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ZM=function(e,t,i,r,s,o,a){var l=new Cn(this._pt,e,t,0,1,jx,null,s),c=0,u=0,h,f,p,x,_,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=il(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(gf)||[];h=gf.exec(r);)x=h[0],_=r.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),x!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:x.charAt(1)==="="?Ao(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},c=gf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(hx.test(r)||d)&&(l.e=0),this._pt=l,l},Ep=function(e,t,i,r,s,o,a,l,c,u){bt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:bt(h)?c?e[t.indexOf("set")||!bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=bt(h)?c?nE:Gx:Tp,x;if($t(r)&&(~r.indexOf("random(")&&(r=il(r)),r.charAt(1)==="="&&(x=Ao(f,r)+(an(f)||0),(x||x===0)&&(r=x))),!u||f!==r||sh)return!isNaN(f*r)&&r!==""?(x=new Cn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?rE:Wx,0,p),c&&(x.fp=c),a&&x.modifier(a,this,e),this._pt=x):(!h&&!(t in e)&&vp(t,r),ZM.call(this,e,t,f,r,p,l||Gn.stringFilter,c))},QM=function(e,t,i,r,s){if(bt(e)&&(e=Oa(e,s,t,i,r)),!Fi(e)||e.style&&e.nodeType||ln(e)||fx(e))return $t(e)?Oa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Oa(e[a],s,t,i,r);return o},Bx=function(e,t,i,r,s,o){var a,l,c,u;if(kn[e]&&(a=new kn[e]).init(s,a.rawVars?t[e]:QM(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Cn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==vo))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Tr,sh,wp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,x=e._dur,_=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,g=e._overwrite==="auto"&&!pp,S=e.timeline,T=r.easeReverse||h,A,w,C,E,M,N,z,k,j,X,G,q,D;if(S&&(!f||!s)&&(s="none"),e._ease=Rs(s,el.ease),e._rEase=T&&(Rs(T)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(k=m[0]?As(m[0]).harness:0,q=k&&r[k.prop],A=nu(r,xp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!p?_.render(-1,!0):_.revert(u&&x?Tc:TM),_._lazy=0),o){if(Wr(e._startAt=kt.set(m,Xn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!a&&!p)&&e._startAt.revert(Tc),a&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&x&&!_){if(t&&(a=!1),C=Xn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Tn(l),immediateRender:a,stagger:0,parent:d},A),q&&(C[k.prop]=q),Wr(e._startAt=kt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(Tc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&Tn(l)||l&&!x,w=0;w<m.length;w++){if(M=m[w],z=M._gsap||Sp(m)[w]._gsap,e._ptLookup[w]=X={},Jd[z.id]&&Fr.length&&tu(),G=v===m?w:v.indexOf(M),k&&(j=new k).init(M,q||A,e,G,v)!==!1&&(e._pt=E=new Cn(e._pt,M,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(Y){X[Y]=E}),j.priority&&(N=1)),!k||q)for(C in A)kn[C]&&(j=Bx(C,A,e,G,M,v))?j.priority&&(N=1):X[C]=E=Ep.call(e,M,C,"get",A[C],G,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),g&&e._pt&&(Tr=e,St.killTweensOf(M,X,e.globalTime(t)),D=!e.parent,Tr=0),e._pt&&l&&(Jd[z.id]=1)}N&&Xx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!D,f&&t<=0&&S.render(ni,!0,!0)},JM=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(u=f[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return sh=1,e.vars[t]="+=0",wp(e,a),sh=0,l?tl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=Lt(i)+an(h.e)),h.b&&(h.b=u.s+an(h.b))},eE=function(e,t){var i=e[0]?As(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=zo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},tE=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(ln(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Oa=function(e,t,i,r,s){return bt(e)?e.call(t,i,r,s):$t(e)&&~e.indexOf("random(")?il(e):e},Hx=yp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vx={};An(Hx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Vx[n]=1});var kt=function(n){cx(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ia(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,x=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=r.parent||St,v=(ln(i)||fx(i)?sr(i[0]):"length"in r)?[i]:ii(i),g,S,T,A,w,C,E,M;if(a._targets=v.length?Sp(v):tl("GSAP target "+i+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||f||zl(c)||zl(u)){r=a.vars;var N=r.easeReverse||r.yoyoEase;if(g=a.timeline=new yn({data:"nested",defaults:_||{},targets:d&&d.data==="nested"?d.vars.targets:v}),g.kill(),g.parent=g._dp=qi(a),g._start=0,f||zl(c)||zl(u)){if(A=v.length,E=f&&Rx(f),Fi(f))for(w in f)~Hx.indexOf(w)&&(M||(M={}),M[w]=f[w]);for(S=0;S<A;S++)T=nu(r,Vx),T.stagger=0,N&&(T.easeReverse=N),M&&zo(T,M),C=v[S],T.duration=+Oa(c,qi(a),S,C,v),T.delay=(+Oa(u,qi(a),S,C,v)||0)-a._delay,!f&&A===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),g.to(C,T,E?E(S,C,v):0),g._ease=Xe.none;g.duration()?c=u=0:a.timeline=0}else if(x){Ia(Xn(g.vars.defaults,{ease:"none"})),g._ease=Rs(x.ease||r.ease||"none");var z=0,k,j,X;if(ln(x))x.forEach(function(G){return g.to(v,G,">")}),g.duration();else{T={};for(w in x)w==="ease"||w==="easeEach"||tE(w,x[w],T,x.easeEach);for(w in T)for(k=T[w].sort(function(G,q){return G.t-q.t}),z=0,S=0;S<k.length;S++)j=k[S],X={ease:j.e,duration:(j.t-(S?k[S-1].t:0))/100*c},X[w]=j.v,g.to(v,X,z),z+=X.duration;g.duration()<c&&g.to({},{duration:c-g.duration()})}}c||a.duration(c=g.duration())}else a.timeline=0;return p===!0&&!pp&&(Tr=qi(a),St.killTweensOf(v),Tr=0),Ni(d,qi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!x&&a._start===xt(d._time)&&Tn(h)&&NM(qi(a))&&d.data!=="nested")&&(a._tTime=-ut,a.render(Math.max(0,-u)||0)),m&&wx(qi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ut&&!u?l:r<ut?0:r,f,p,x,_,m,d,v,g;if(!c)DM(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,g=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=xt(h%_),h===l?(x=this._repeat,f=c):(m=xt(h/_),x=~~m,x&&x===m?(f=c,x--):f>c&&(f=c)),d=this._yoyo&&x&1,d&&(f=c-f),m=Bo(this._tTime,_),f===a&&!o&&this._initted&&x===m)return this._tTime=h,this;x!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(xt(_*x),!0).invalidate()._lock=0)}if(!this._initted){if(Tx(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&x!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var T=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Bn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;g&&g.render(r<0?r:g._dur*g._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&eh(this,r,s,o),Bn(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&eh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Wr(this,1),!s&&!(u&&!a)&&(h||a||d)&&(Bn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){rl||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||wp(this,c),u=this._ease(c/this._dur),JM(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Iu(this,0),this.parent||Mx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Tr&&Tr.vars.overwrite!==!0)._first||Ma(this),this.parent&&o!==this.timeline.totalDuration()&&Ho(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ii(r):a,c=this._ptLookup,u=this._pt,h,f,p,x,_,m,d;if((!s||s==="all")&&bM(a,l))return s==="all"&&(this._pt=0),Ma(this);for(h=this._op=this._op||[],s!=="all"&&($t(s)&&(_={},An(s,function(v){return _[v]=1}),s=_),s=eE(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],s==="all"?(h[d]=s,x=f,p={}):(p=h[d]=h[d]||{},x=s);for(_ in x)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Lu(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Ma(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ua(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ua(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return St.killTweensOf(r,s,o)},e}(sl);Xn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(n){kt[n]=function(){var e=new yn,t=nh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Tp=function(e,t,i){return e[t]=i},Gx=function(e,t,i){return e[t](i)},nE=function(e,t,i,r){return e[t](r.fp,i)},iE=function(e,t,i){return e.setAttribute(t,i)},Ap=function(e,t){return bt(e[t])?Gx:mp(e[t])&&e.setAttribute?iE:Tp},Wx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Cp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},sE=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},oE=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Lu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},aE=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Xx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Cn=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Wx,this.d=l||this,this.set=c||Tp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=aE,this.m=i,this.mt=s,this.tween=r},n}();An(yp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return xp[n]=1});jn.TweenMax=jn.TweenLite=kt;jn.TimelineLite=jn.TimelineMax=yn;St=new yn({sortChildren:!1,defaults:el,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=kx;var bs=[],Cc={},lE=[],a_=0,cE=0,Mf=function(e){return(Cc[e]||lE).map(function(t){return t()})},oh=function(){var e=Date.now(),t=[];e-a_>2&&(Mf("matchMediaInit"),bs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Ci.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Mf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),a_=e,Mf("matchMedia"))},qx=function(){function n(t,i){this.selector=i&&ih(i),this.data=[],this._r=[],this.isReverted=!1,this.id=cE++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){bt(i)&&(s=r,r=i,i=bt);var o=this,a=function(){var c=_t,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ih(s)),_t=o,h=r.apply(o,arguments),bt(h)&&o._r.push(h),_t=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===bt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=_t;_t=null,i(this),_t=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof kt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof kt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=bs.length;o--;)bs[o].id===this.id&&bs.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),uE=function(){function n(t){this.contexts=[],this.scope=t,_t&&_t.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Fi(i)||(i={matches:i});var o=new qx(0,s||this.scope),a=o.conditions={},l,c,u;_t&&!o.selector&&(o.selector=_t.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Ci.matchMedia(i[c]),l&&(bs.indexOf(o)<0&&bs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(oh):l.addEventListener("change",oh)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ru={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Ix(r)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return St.getTweensOf(e,t)},getProperty:function(e,t,i,r){$t(e)&&(e=ii(e)[0]);var s=As(e||{}).get,o=i?Sx:yx;return i==="native"&&(i=""),e&&(t?o((kn[t]&&kn[t].get||s)(e,t,i,r)):function(a,l,c){return o((kn[a]&&kn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=ii(e),e.length>1){var r=e.map(function(u){return Nn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=kn[t],a=As(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;vo._pt=0,h.init(e,i?u+i:u,vo,0,[e]),h.render(1,h),vo._pt&&Cp(1,vo)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=Nn.to(e,Xn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return St.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Rs(e.ease,el.ease)),n_(el,e||{})},config:function(e){return n_(Gn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!kn[a]&&!jn[a]&&tl(t+" effect requires "+a+" plugin.")}),vf[t]=function(a,l,c){return i(ii(a),Xn(l||{},s),c)},o&&(yn.prototype[t]=function(a,l,c){return this.add(vf[t](a,Fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=Rs(t)},parseEase:function(e,t){return arguments.length?Rs(e,t):Xe},getById:function(e){return St.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new yn(e),r,s;for(i.smoothChildTiming=Tn(e.smoothChildTiming),St.remove(i),i._dp=0,i._time=i._tTime=St._time,r=St._first;r;)s=r._next,(t||!(!r._dur&&r instanceof kt&&r.vars.onComplete===r._targets[0]))&&Ni(i,r,r._start-r._delay),r=s;return Ni(St,i,0),i},context:function(e,t){return e?new qx(e,t):_t},matchMedia:function(e){return new uE(e)},matchMediaRefresh:function(){return bs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||oh()},addEventListener:function(e,t){var i=Cc[e]||(Cc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Cc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:HM,wrapYoyo:VM,distribute:Rx,random:Px,snap:bx,normalize:BM,getUnit:an,clamp:OM,splitColor:Ux,toArray:ii,selector:ih,mapRange:Lx,pipe:FM,unitize:zM,interpolate:GM,shuffle:Cx},install:mx,effects:vf,ticker:Fn,updateRoot:yn.updateRoot,plugins:kn,globalTimeline:St,core:{PropTween:Cn,globals:_x,Tween:kt,Timeline:yn,Animation:sl,getCache:As,_removeLinkedListItem:Lu,reverting:function(){return Qt},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return pp=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ru[n]=kt[n]});Fn.add(yn.updateRoot);vo=ru.to({},{duration:0});var fE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},dE=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=fE(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Ef=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if($t(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}dE(a,s)}}}},Nn=ru.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ef("roundProps",rh),Ef("modifiers"),Ef("snap",bx))||ru;kt.version=yn.version=Nn.version="3.15.0";px=1;_p()&&Vo();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var l_,Ar,Co,Rp,Ss,c_,bp,hE=function(){return typeof window<"u"},or={},hs=180/Math.PI,Ro=Math.PI/180,Bs=Math.atan2,u_=1e8,Pp=/([A-Z])/g,pE=/(left|right|width|margin|padding|x)/i,mE=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ah=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_E=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xE=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},$x=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Yx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},yE=function(e,t,i){return e.style[t]=i},SE=function(e,t,i){return e.style.setProperty(t,i)},ME=function(e,t,i){return e._gsap[t]=i},EE=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},wE=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},TE=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Mt="transform",Rn=Mt+"Origin",AE=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Yi(r,a)}):this.tfm[e]=o.x?o[e]:Yi(r,e),e===Rn&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Mt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=Mt}(s||t)&&this.props.push(e,t,s[e])},Kx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},CE=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=bp(),(!s||!s.isStart)&&!i[Mt]&&(Kx(i),r.zOrigin&&i[Rn]&&(i[Rn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Zx=function(e,t){var i={target:e,props:[],revert:CE,save:AE};return e._gsap||Nn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Qx,lh=function(e,t){var i=Ar.createElementNS?Ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return i&&i.style?i:Ar.createElement(e)},Hn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Pp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Go(t)||t,1)||""},f_="O,Moz,ms,Ms,Webkit".split(","),Go=function(e,t,i){var r=t||Ss,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(f_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?f_[o]:"")+e},ch=function(){hE()&&window.document&&(l_=window,Ar=l_.document,Co=Ar.documentElement,Ss=lh("div")||{style:{}},lh("div"),Mt=Go(Mt),Rn=Mt+"Origin",Ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qx=!!Go("perspective"),bp=Nn.core.reverting,Rp=1)},d_=function(e){var t=e.ownerSVGElement,i=lh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Co.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Co.removeChild(i),s},h_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Jx=function(e){var t,i;try{t=e.getBBox()}catch{t=d_(e),i=1}return t&&(t.width||t.height)||i||(t=d_(e)),t&&!t.width&&!t.x&&!t.y?{x:+h_(e,["x","cx","x1"])||0,y:+h_(e,["y","cy","y1"])||0,width:0,height:0}:t},ey=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jx(e))},jr=function(e,t){if(t){var i=e.style,r;t in or&&t!==Rn&&(t=Mt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Pp,"-$1").toLowerCase())):i.removeAttribute(t)}},Cr=function(e,t,i,r,s,o){var a=new Cn(e._pt,t,i,0,1,o?Yx:$x);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},p_={deg:1,rad:1,turn:1},RE={grid:1,flex:1},Xr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Ss.style,l=pE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",x,_,m,d;if(r===o||!s||p_[r]||p_[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&ey(e),(p||o==="%")&&(or[t]||~t.indexOf("adius")))return x=d?e.getBBox()[l?"width":"height"]:e[u],Lt(p?s/x*h:s/100*x);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ar||!_.appendChild)&&(_=Ar.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Fn.time&&!m.uncache)return Lt(s/m.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,x=e[u],v?e.style[t]=v:jr(e,t)}else(p||o==="%")&&!RE[Hn(_,"display")]&&(a.position=Hn(e,"position")),_===e&&(a.position="static"),_.appendChild(Ss),x=Ss[u],_.removeChild(Ss),a.position="absolute";return l&&p&&(m=As(_),m.time=Fn.time,m.width=_[u]),Lt(f?x*s/h:x&&s?h/x*s:0)},Yi=function(e,t,i,r){var s;return Rp||ch(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=al(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ou(Hn(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=su[t]&&su[t](e,t,i)||Hn(e,t)||vx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Xr(e,t,s,i)+i:s},bE=function(e,t,i,r){if(!i||i==="none"){var s=Go(t,e,1),o=s&&Hn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Hn(e,"borderTopColor"))}var a=new Cn(this._pt,e.style,t,0,1,jx),l=0,c=0,u,h,f,p,x,_,m,d,v,g,S,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Hn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Hn(e,t)||r,_?e.style[t]=_:jr(e,t)),u=[i,r],kx(u),i=u[0],r=u[1],f=i.match(go)||[],T=r.match(go)||[],T.length){for(;h=go.exec(r);)m=h[0],v=r.substring(l,h.index),x?x=(x+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(x=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=Ao(p,m)+S),d=parseFloat(m),g=m.substr((d+"").length),l=go.lastIndex-g.length,g||(g=g||Gn.units[t]||S,l===r.length&&(r+=g,a.e+=g)),S!==g&&(p=Xr(e,t,_,g)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:p,c:d-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Yx:$x;return hx.test(r)&&(a.e=0),this._pt=a,a},m_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PE=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=m_[i]||i,t[1]=m_[r]||r,t.join(" ")},NE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],or[a]&&(l=1,a=a==="transformOrigin"?Rn:Mt),jr(i,a);l&&(jr(i,Mt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",al(i,1),o.uncache=1,Kx(r)))}},su={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Cn(e._pt,t,i,0,0,NE);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ol=[1,0,0,1,0,0],ty={},ny=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},__=function(e){var t=Hn(e,Mt);return ny(t)?ol:t.substr(7).match(dx).map(Lt)},Np=function(e,t){var i=e._gsap||As(e),r=e.style,s=__(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ol:s):(s===ol&&!e.offsetParent&&e!==Co&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Co.appendChild(e)),s=__(e),l?r.display=l:jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Co.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},uh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Np(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],x=l[1],_=l[2],m=l[3],d=l[4],v=l[5],g=t.split(" "),S=parseFloat(g[0])||0,T=parseFloat(g[1])||0,A,w,C,E;i?l!==ol&&(w=p*m-x*_)&&(C=S*(m/w)+T*(-_/w)+(_*v-m*d)/w,E=S*(-x/w)+T*(p/w)-(p*v-x*d)/w,S=C,T=E):(A=Jx(e),S=A.x+(~g[0].indexOf("%")?S/100*A.width:S),T=A.y+(~(g[1]||g[0]).indexOf("%")?T/100*A.height:T)),r||r!==!1&&a.smooth?(d=S-c,v=T-u,a.xOffset=h+(d*p+v*_)-d,a.yOffset=f+(d*x+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Rn]="0px 0px",o&&(Cr(o,a,"xOrigin",c,S),Cr(o,a,"yOrigin",u,T),Cr(o,a,"xOffset",h,a.xOffset),Cr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},al=function(e,t){var i=e._gsap||new zx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Hn(e,Rn)||"0",u,h,f,p,x,_,m,d,v,g,S,T,A,w,C,E,M,N,z,k,j,X,G,q,D,Y,Z,ie,ve,Ve,W,J;return u=h=f=_=m=d=v=g=S=0,p=x=1,i.svg=!!(e.getCTM&&ey(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),r.scale=r.rotate=r.translate="none"),w=Np(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),c=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),uh(e,q||c,!!q||i.originIsAbsolute,i.smooth!==!1,w)),T=i.xOrigin||0,A=i.yOrigin||0,w!==ol&&(N=w[0],z=w[1],k=w[2],j=w[3],u=X=w[4],h=G=w[5],w.length===6?(p=Math.sqrt(N*N+z*z),x=Math.sqrt(j*j+k*k),_=N||z?Bs(z,N)*hs:0,v=k||j?Bs(k,j)*hs+_:0,v&&(x*=Math.abs(Math.cos(v*Ro))),i.svg&&(u-=T-(T*N+A*k),h-=A-(T*z+A*j))):(J=w[6],Ve=w[7],Z=w[8],ie=w[9],ve=w[10],W=w[11],u=w[12],h=w[13],f=w[14],C=Bs(J,ve),m=C*hs,C&&(E=Math.cos(-C),M=Math.sin(-C),q=X*E+Z*M,D=G*E+ie*M,Y=J*E+ve*M,Z=X*-M+Z*E,ie=G*-M+ie*E,ve=J*-M+ve*E,W=Ve*-M+W*E,X=q,G=D,J=Y),C=Bs(-k,ve),d=C*hs,C&&(E=Math.cos(-C),M=Math.sin(-C),q=N*E-Z*M,D=z*E-ie*M,Y=k*E-ve*M,W=j*M+W*E,N=q,z=D,k=Y),C=Bs(z,N),_=C*hs,C&&(E=Math.cos(C),M=Math.sin(C),q=N*E+z*M,D=X*E+G*M,z=z*E-N*M,G=G*E-X*M,N=q,X=D),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Lt(Math.sqrt(N*N+z*z+k*k)),x=Lt(Math.sqrt(G*G+J*J)),C=Bs(X,G),v=Math.abs(C)>2e-4?C*hs:0,S=W?1/(W<0?-W:W):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ny(Hn(e,Mt)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Lt(p),i.scaleY=Lt(x),i.rotation=Lt(_)+a,i.rotationX=Lt(m)+a,i.rotationY=Lt(d)+a,i.skewX=v+a,i.skewY=g+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Rn]=ou(c)),i.xOffset=i.yOffset=0,i.force3D=Gn.force3D,i.renderTransform=i.svg?DE:Qx?iy:LE,i.uncache=0,i},ou=function(e){return(e=e.split(" "))[0]+" "+e[1]},wf=function(e,t,i){var r=an(t);return Lt(parseFloat(t)+parseFloat(Xr(e,"x",i+"px",r)))+r},LE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,iy(e,t)},is="0deg",ua="0px",rs=") ",iy=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,x=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,g=i.zOrigin,S="",T=d==="auto"&&e&&e!==1||d===!0;if(g&&(h!==is||u!==is)){var A=parseFloat(u)*Ro,w=Math.sin(A),C=Math.cos(A),E;A=parseFloat(h)*Ro,E=Math.cos(A),o=wf(v,o,w*E*-g),a=wf(v,a,-Math.sin(A)*-g),l=wf(v,l,C*E*-g+g)}m!==ua&&(S+="perspective("+m+rs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||o!==ua||a!==ua||l!==ua)&&(S+=l!==ua||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+rs),c!==is&&(S+="rotate("+c+rs),u!==is&&(S+="rotateY("+u+rs),h!==is&&(S+="rotateX("+h+rs),(f!==is||p!==is)&&(S+="skew("+f+", "+p+rs),(x!==1||_!==1)&&(S+="scale("+x+", "+_+rs),v.style[Mt]=S||"translate(0, 0)"},DE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,x=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,g=parseFloat(o),S=parseFloat(a),T,A,w,C,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ro,c*=Ro,T=Math.cos(l)*h,A=Math.sin(l)*h,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=Ro,E=Math.tan(c-u),E=Math.sqrt(1+E*E),w*=E,C*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),T*=E,A*=E)),T=Lt(T),A=Lt(A),w=Lt(w),C=Lt(C)):(T=h,C=f,A=w=0),(g&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(g=Xr(p,"x",o,"px"),S=Xr(p,"y",a,"px")),(x||_||m||d)&&(g=Lt(g+x-(x*T+_*w)+m),S=Lt(S+_-(x*A+_*C)+d)),(r||s)&&(E=p.getBBox(),g=Lt(g+r/100*E.width),S=Lt(S+s/100*E.height)),E="matrix("+T+","+A+","+w+","+C+","+g+","+S+")",p.setAttribute("transform",E),v&&(p.style[Mt]=E)},IE=function(e,t,i,r,s){var o=360,a=$t(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?hs:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*u_)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*u_)%o-~~(c/o)*o)),e._pt=f=new Cn(e._pt,t,i,r,c,_E),f.e=u,f.u="deg",e._props.push(i),f},g_=function(e,t){for(var i in t)e[i]=t[i];return e},UE=function(e,t,i){var r=g_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,p,x;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Mt]=t,a=al(i,1),jr(i,Mt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Mt],o[Mt]=t,a=al(i,1),o[Mt]=c);for(l in or)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=an(c),x=an(u),h=p!==x?Xr(i,l,c,x):parseFloat(c),f=parseFloat(u),e._pt=new Cn(e._pt,a,l,h,f-h,ah),e._pt.u=x||0,e._props.push(l));g_(a,r)};An("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});su[e>1?"border"+n:n]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(x){return Yi(a,x,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(x,_){return p[x]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,h)}});var ry={name:"css",register:ch,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,h,f,p,x,_,m,d,v,g,S,T,A,w,C,E;Rp||ch(),this.styles=this.styles||Zx(e),C=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(kn[_]&&Bx(_,t,i,r,e,s)))){if(p=typeof u,x=su[_],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=il(u)),x)x(this,e,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",zr.lastIndex=0,zr.test(c)||(m=an(c),d=an(u),d?m!==d&&(c=Xr(e,_,c,d)+d):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],$t(c)&&~c.indexOf("random(")&&(c=il(c)),an(c+"")||c==="auto"||(c+=Gn.units[_]||an(Yi(e,_))||""),(c+"").charAt(1)==="="&&(c=Yi(e,_))):c=Yi(e,_),f=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in Di&&(_==="autoAlpha"&&(f===1&&Yi(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),Cr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),g=_ in or,g){if(this.styles.save(_),E=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=Hn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=Hn(e,"perspective"),M?e.style.perspective=M:jr(e,"perspective")}h=parseFloat(u)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||al(e,t.parseTransform),A=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Cn(this._pt,a,Mt,0,1,T.renderTransform,T,0,-1),S.dep=1),_==="scale")this._pt=new Cn(this._pt,T,"scaleY",T.scaleY,(v?Ao(T.scaleY,v+h):h)-T.scaleY||0,ah),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Rn,0,a[Rn]),u=PE(u),T.svg?uh(e,u,0,A,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&Cr(this,T,"zOrigin",T.zOrigin,d),Cr(this,a,_,ou(c),ou(u)));continue}else if(_==="svgOrigin"){uh(e,u,1,A,0,this);continue}else if(_ in ty){IE(this,T,_,f,v?Ao(f,v+u):u);continue}else if(_==="smoothOrigin"){Cr(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){UE(this,u,e);continue}}else _ in a||(_=Go(_)||_);if(g||(h||h===0)&&(f||f===0)&&!mE.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),d=an(u)||(_ in Gn.units?Gn.units[_]:m),m!==d&&(f=Xr(e,_,c,d)),this._pt=new Cn(this._pt,g?T:a,_,f,(v?Ao(f,v+h):h)-f,!g&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?xE:ah),this._pt.u=d||0,g&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=vE):m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=gE);else if(_ in a)bE.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,r,s);else if(_!=="parseTransform"){vp(_,u);continue}g||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}w&&Xx(this)},render:function(e,t){if(t.tween._time||!bp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Yi,aliases:Di,getSetter:function(e,t,i){var r=Di[t];return r&&r.indexOf(",")<0&&(t=r),t in or&&t!==Rn&&(e._gsap.x||Yi(e,"x"))?i&&c_===i?t==="scale"?EE:ME:(c_=i||{})&&(t==="scale"?wE:TE):e.style&&!mp(e.style[t])?yE:~t.indexOf("-")?SE:Ap(e,t)},core:{_removeProperty:jr,_getMatrix:Np}};Nn.utils.checkPrefix=Go;Nn.core.getStyleSaver=Zx;(function(n,e,t,i){var r=An(n+","+e+","+t,function(s){or[s]=1});An(e,function(s){Gn.units[s]="deg",ty[s]=1}),Di[r[13]]=n+","+e,An(i,function(s){var o=s.split(":");Di[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Gn.units[n]="px"});Nn.registerPlugin(ry);var Un=Nn.registerPlugin(ry)||Nn;Un.core.Tween;const OE="_splash_byy3q_1",kE="_clouds_byy3q_16",FE="_cloud_byy3q_16",zE="_cloud1_byy3q_31",BE="_cloud2_byy3q_39",HE="_cloud3_byy3q_47",VE="_canvas_byy3q_56",GE="_inner_byy3q_65",WE="_eyebrow_byy3q_75",jE="_logoWrap_byy3q_85",XE="_logo_byy3q_85",qE="_dot_byy3q_142",$E="_tagline_byy3q_146",YE="_loaderWrap_byy3q_156",KE="_bar_byy3q_169",ZE="_barFill_byy3q_178",QE="_count_byy3q_198",JE="_skip_byy3q_212",Qe={splash:OE,clouds:kE,cloud:FE,cloud1:zE,cloud2:BE,cloud3:HE,canvas:VE,inner:GE,eyebrow:WE,logoWrap:jE,logo:XE,dot:qE,tagline:$E,loaderWrap:YE,bar:KE,barFill:ZE,count:QE,skip:JE};function ew({onDone:n}){const e=Je.useRef(null),t=Je.useRef(null),i=Je.useRef(null),r=Je.useRef(null),s=Je.useRef(!1),o=()=>{if(s.current)return;s.current=!0,Un.timeline({onComplete:()=>{document.body.style.overflow="",n==null||n()}}).to(`.${Qe.inner}, .${Qe.loaderWrap}, .${Qe.skip}`,{opacity:0,y:-24,duration:.55,ease:"power2.inOut"}).to(`.${Qe.cloud}`,{opacity:0,duration:.55,ease:"power2.in"},0).to(e.current,{yPercent:-100,duration:.9,ease:"power4.inOut"},.35).set(e.current,{display:"none"})};return Je.useEffect(()=>{const a=t.current;if(!a)return;const l=a.getContext("2d");let c,u,h;const f=[],p=()=>{c=a.width=window.innerWidth*Math.min(devicePixelRatio,2),u=a.height=window.innerHeight*Math.min(devicePixelRatio,2),a.style.width=window.innerWidth+"px",a.style.height=window.innerHeight+"px"};p();const x=window.innerWidth<768?60:120;for(let d=0;d<x;d++)f.push({x:Math.random()*c,y:Math.random()*u,r:Math.random()*1.6+.3,sp:Math.random()*.25+.05,a:Math.random()*.6+.2,gold:Math.random()>.72});const _=()=>{l.clearRect(0,0,c,u),f.forEach(d=>{d.y-=d.sp*(devicePixelRatio||1),d.y<0&&(d.y=u,d.x=Math.random()*c),l.beginPath(),l.arc(d.x,d.y,d.r,0,Math.PI*2),l.fillStyle=d.gold?`rgba(201,169,110,${d.a})`:`rgba(242,239,232,${d.a*.5})`,l.fill()}),h=requestAnimationFrame(_)};f.forEach(d=>{l.beginPath(),l.arc(d.x,d.y,d.r,0,Math.PI*2),l.fillStyle=d.gold?`rgba(201,169,110,${d.a})`:`rgba(242,239,232,${d.a*.5})`,l.fill()});const m=setTimeout(()=>{h=requestAnimationFrame(_)},500);return window.addEventListener("resize",p),()=>{clearTimeout(m),cancelAnimationFrame(h),window.removeEventListener("resize",p)}},[]),Je.useEffect(()=>{document.body.style.overflow="hidden";const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches;Un.to(`.${Qe.cloud1}`,{opacity:1,duration:1.6,ease:"power2.out"}),Un.to(`.${Qe.cloud2}`,{opacity:1,duration:1.6,ease:"power2.out",delay:.2}),Un.to(`.${Qe.cloud3}`,{opacity:1,duration:1.6,ease:"power2.out",delay:.4}),a||(Un.to(`.${Qe.cloud1}`,{x:60,y:30,duration:11,repeat:-1,yoyo:!0,ease:"sine.inOut"}),Un.to(`.${Qe.cloud2}`,{x:-50,y:-40,duration:13,repeat:-1,yoyo:!0,ease:"sine.inOut"}),Un.to(`.${Qe.cloud3}`,{x:30,y:-25,duration:9,repeat:-1,yoyo:!0,ease:"sine.inOut"}));const l=Un.timeline({delay:.3});l.to(`.${Qe.eyebrow}`,{opacity:1,duration:.7,ease:"power3.out"},0).to(`.${Qe.tagline}`,{opacity:1,duration:.8,ease:"power3.out"},.9);const c={v:0},u=Un.to(c,{v:100,duration:a?1:2.8,ease:"power2.out",delay:.5,onUpdate:()=>{const f=Math.round(c.v);r.current&&(r.current.textContent=f),i.current&&(i.current.style.width=f+"%")},onComplete:()=>Un.delayedCall(.35,o)}),h=setTimeout(()=>o(),6e3);return()=>{u.kill(),l.kill(),clearTimeout(h)}},[]),y.jsxs("div",{className:Qe.splash,ref:e,children:[y.jsxs("div",{className:Qe.clouds,children:[y.jsx("div",{className:`${Qe.cloud} ${Qe.cloud1}`}),y.jsx("div",{className:`${Qe.cloud} ${Qe.cloud2}`}),y.jsx("div",{className:`${Qe.cloud} ${Qe.cloud3}`})]}),y.jsx("canvas",{ref:t,className:Qe.canvas}),y.jsx("button",{className:Qe.skip,onClick:o,children:"pular intro"}),y.jsxs("div",{className:Qe.inner,children:[y.jsx("p",{className:Qe.eyebrow,children:"Tecnologia · Design · Growth"}),y.jsx("div",{className:Qe.logoWrap,children:y.jsxs("h1",{className:Qe.logo,children:[y.jsx("span",{children:"v"}),y.jsx("span",{children:"e"}),y.jsx("span",{children:"r"}),y.jsx("span",{children:"a"}),y.jsx("span",{className:Qe.dot,children:"."})]})}),y.jsx("p",{className:Qe.tagline,children:"do design ao resultado — para negócios locais"})]}),y.jsxs("div",{className:Qe.loaderWrap,children:[y.jsx("div",{className:Qe.bar,children:y.jsx("div",{className:Qe.barFill,ref:i})}),y.jsxs("div",{className:Qe.count,children:[y.jsx("b",{ref:r,children:"0"}),"%  carregando experiência"]})]})]})}const tw="_nav_17qh7_1",nw="_scrolled_17qh7_12",iw="_logo_17qh7_21",rw="_tabs_17qh7_38",sw="_tabBtn_17qh7_52",ow="_tabActive_17qh7_71",aw="_tabLine_17qh7_76",lw="_cta_17qh7_79",cw="_hamburger_17qh7_100",uw="_hamburgerOpen_17qh7_119",fw="_open_17qh7_143",fi={nav:tw,scrolled:nw,logo:iw,tabs:rw,tabBtn:sw,tabActive:ow,tabLine:aw,cta:lw,hamburger:cw,hamburgerOpen:uw,open:fw},dw=[{id:"home",label:"home"},{id:"portfolio",label:"portfólio"},{id:"paletas",label:"paletas"},{id:"precos",label:"preços"}];function hw({tab:n,setTab:e}){const[t,i]=Je.useState(!1),[r,s]=Je.useState(!1);Je.useEffect(()=>{const l=()=>i(window.scrollY>60);return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]);const o=l=>{e(l),s(!1)},a=()=>{e("home"),s(!1),setTimeout(()=>{var l;(l=document.getElementById("contato"))==null||l.scrollIntoView({behavior:"smooth",block:"start"})},80)};return y.jsxs("nav",{className:`${fi.nav} ${t?fi.scrolled:""}`,children:[y.jsxs("button",{className:fi.logo,onClick:()=>o("home"),"data-cursor":!0,children:["vera",y.jsx("span",{children:"."})]}),y.jsx("ul",{className:`${fi.tabs} ${r?fi.open:""}`,children:dw.map(({id:l,label:c})=>y.jsx("li",{children:y.jsxs("button",{className:`${fi.tabBtn} ${n===l?fi.tabActive:""}`,onClick:()=>o(l),"data-cursor":!0,children:[c,n===l&&y.jsx("span",{className:fi.tabLine})]})},l))}),y.jsx("button",{className:fi.cta,onClick:a,"data-cursor":!0,children:"falar com a gente"}),y.jsxs("button",{className:`${fi.hamburger} ${r?fi.hamburgerOpen:""}`,onClick:()=>s(!r),"aria-label":"Menu",children:[y.jsx("span",{}),y.jsx("span",{}),y.jsx("span",{})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lp="165",pw=0,v_=1,mw=2,sy=1,_w=2,ji=3,qr=0,bn=1,Ki=2,Br=0,bo=1,x_=2,y_=3,S_=4,gw=5,_s=100,vw=101,xw=102,yw=103,Sw=104,Mw=200,Ew=201,ww=202,Tw=203,fh=204,dh=205,Aw=206,Cw=207,Rw=208,bw=209,Pw=210,Nw=211,Lw=212,Dw=213,Iw=214,Uw=0,Ow=1,kw=2,au=3,Fw=4,zw=5,Bw=6,Hw=7,oy=0,Vw=1,Gw=2,Hr=0,Ww=1,jw=2,Xw=3,qw=4,$w=5,Yw=6,Kw=7,ay=300,Wo=301,jo=302,hh=303,ph=304,Uu=306,mh=1e3,Ms=1001,_h=1002,ri=1003,Zw=1004,Bl=1005,vi=1006,Tf=1007,Es=1008,$r=1009,Qw=1010,Jw=1011,lu=1012,ly=1013,Xo=1014,Rr=1015,Ou=1016,cy=1017,uy=1018,qo=1020,eT=35902,tT=1021,nT=1022,Ii=1023,iT=1024,rT=1025,Po=1026,$o=1027,sT=1028,fy=1029,oT=1030,dy=1031,hy=1033,Af=33776,Cf=33777,Rf=33778,bf=33779,M_=35840,E_=35841,w_=35842,T_=35843,A_=36196,C_=37492,R_=37496,b_=37808,P_=37809,N_=37810,L_=37811,D_=37812,I_=37813,U_=37814,O_=37815,k_=37816,F_=37817,z_=37818,B_=37819,H_=37820,V_=37821,Pf=36492,G_=36494,W_=36495,aT=36283,j_=36284,X_=36285,q_=36286,lT=3200,cT=3201,uT=0,fT=1,Mr="",Ri="srgb",es="srgb-linear",Dp="display-p3",ku="display-p3-linear",cu="linear",ht="srgb",uu="rec709",fu="p3",Hs=7680,$_=519,dT=512,hT=513,pT=514,py=515,mT=516,_T=517,gT=518,vT=519,Y_=35044,K_="300 es",Ji=2e3,du=2001;class Jo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=Math.PI/180,gh=180/Math.PI;function pl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function xn(n,e,t){return Math.max(e,Math.min(t,n))}function xT(n,e){return(n%e+e)%e}function Lf(n,e,t){return(1-t)*n+t*e}function fa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,i,r,s,o,a,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],x=i[8],_=r[0],m=r[3],d=r[6],v=r[1],g=r[4],S=r[7],T=r[2],A=r[5],w=r[8];return s[0]=o*_+a*v+l*T,s[3]=o*m+a*g+l*A,s[6]=o*d+a*S+l*w,s[1]=c*_+u*v+h*T,s[4]=c*m+u*g+h*A,s[7]=c*d+u*S+h*w,s[2]=f*_+p*v+x*T,s[5]=f*m+p*g+x*A,s[8]=f*d+p*S+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,x=t*h+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Df.makeScale(e,t)),this}rotate(e){return this.premultiply(Df.makeRotation(-e)),this}translate(e,t){return this.premultiply(Df.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Df=new Ie;function my(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yT(){const n=hu("canvas");return n.style.display="block",n}const Z_={};function _y(n){n in Z_||(Z_[n]=!0,console.warn(n))}function ST(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Q_=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),J_=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hl={[es]:{transfer:cu,primaries:uu,toReference:n=>n,fromReference:n=>n},[Ri]:{transfer:ht,primaries:uu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ku]:{transfer:cu,primaries:fu,toReference:n=>n.applyMatrix3(J_),fromReference:n=>n.applyMatrix3(Q_)},[Dp]:{transfer:ht,primaries:fu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(J_),fromReference:n=>n.applyMatrix3(Q_).convertLinearToSRGB()}},MT=new Set([es,ku]),rt={enabled:!0,_workingColorSpace:es,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!MT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hl[e].toReference,r=Hl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hl[n].primaries},getTransfer:function(n){return n===Mr?cu:Hl[n].transfer}};function No(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function If(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vs;class ET{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=hu("canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=No(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(No(t[i]/255)*255):t[i]=No(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wT=0;class gy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=pl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uf(r[o].image)):s.push(Uf(r[o]))}else s=Uf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Uf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ET.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TT=0;class Pn extends Jo{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=Ms,r=Ms,s=vi,o=Es,a=Ii,l=$r,c=Pn.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=pl(),this.name="",this.source=new gy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ay)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=ay;Pn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,i=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],x=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,S=(p+1)/2,T=(d+1)/2,A=(u+f)/4,w=(h+_)/4,C=(x+m)/4;return g>S&&g>T?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=w/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=C/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=C/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-x)*(m-x)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AT extends Jo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends AT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vy extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CT extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==x){let m=1-a;const d=l*f+c*p+u*x+h*_,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const T=Math.sqrt(g),A=Math.atan2(T,d*v);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const S=a*v;if(l=l*m+f*S,c=c*m+p*S,u=u*m+x*S,h=h*m+_*S,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*h+l*p-c*f,e[t+1]=l*x+u*f+c*h-a*p,e[t+2]=c*x+u*p+a*f-l*h,e[t+3]=u*x-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"YXZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"ZXY":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"ZYX":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"YZX":this._x=f*u*h+c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h-f*p*x;break;case"XZY":this._x=f*u*h-c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Of.copy(this).projectOnVector(e),this.sub(Of)}reflect(e){return this.sub(Of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Of=new F,eg=new ml;class _l{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vl.copy(i.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Gl.subVectors(this.max,da),Gs.subVectors(e.a,da),Ws.subVectors(e.b,da),js.subVectors(e.c,da),fr.subVectors(Ws,Gs),dr.subVectors(js,Ws),ss.subVectors(Gs,js);let t=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-ss.z,ss.y,fr.z,0,-fr.x,dr.z,0,-dr.x,ss.z,0,-ss.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-ss.y,ss.x,0];return!kf(t,Gs,Ws,js,Gl)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,Gs,Ws,js,Gl))?!1:(Wl.crossVectors(fr,dr),t=[Wl.x,Wl.y,Wl.z],kf(t,Gs,Ws,js,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new F,new F,new F,new F,new F,new F,new F,new F],di=new F,Vl=new _l,Gs=new F,Ws=new F,js=new F,fr=new F,dr=new F,ss=new F,da=new F,Gl=new F,Wl=new F,os=new F;function kf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){os.fromArray(n,s);const a=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=i.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const RT=new _l,ha=new F,Ff=new F;class gl{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):RT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Ff)),this.expandByPoint(ha.copy(e.center).sub(Ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new F,zf=new F,jl=new F,hr=new F,Bf=new F,Xl=new F,Hf=new F;class Ip{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zf.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(zf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(jl),a=hr.dot(this.direction),l=-hr.dot(jl),c=hr.lengthSq(),u=Math.abs(1-o*o);let h,f,p,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(zf).addScaledVector(jl,f),p}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,r,s){Bf.subVectors(t,e),Xl.subVectors(i,e),Hf.crossVectors(Bf,Xl);let o=this.direction.dot(Hf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Xl.crossVectors(hr,Xl));if(l<0)return null;const c=a*this.direction.dot(Bf.cross(hr));if(c<0||l+c>o)return null;const u=-a*hr.dot(Hf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,r,s,o,a,l,c,u,h,f,p,x,_,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,p,x,_,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,p,x,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=x,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,x=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,x=c*u,_=c*h;t[0]=f+_*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,x=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,x=a*u,_=a*h;t[0]=l*u,t[4]=x*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=x*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+x,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bT,e,PT)}lookAt(e,t,i){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),pr.crossVectors(i,Dn),pr.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),pr.crossVectors(i,Dn)),pr.normalize(),ql.crossVectors(Dn,pr),r[0]=pr.x,r[4]=ql.x,r[8]=Dn.x,r[1]=pr.y,r[5]=ql.y,r[9]=Dn.y,r[2]=pr.z,r[6]=ql.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],x=i[2],_=i[6],m=i[10],d=i[14],v=i[3],g=i[7],S=i[11],T=i[15],A=r[0],w=r[4],C=r[8],E=r[12],M=r[1],N=r[5],z=r[9],k=r[13],j=r[2],X=r[6],G=r[10],q=r[14],D=r[3],Y=r[7],Z=r[11],ie=r[15];return s[0]=o*A+a*M+l*j+c*D,s[4]=o*w+a*N+l*X+c*Y,s[8]=o*C+a*z+l*G+c*Z,s[12]=o*E+a*k+l*q+c*ie,s[1]=u*A+h*M+f*j+p*D,s[5]=u*w+h*N+f*X+p*Y,s[9]=u*C+h*z+f*G+p*Z,s[13]=u*E+h*k+f*q+p*ie,s[2]=x*A+_*M+m*j+d*D,s[6]=x*w+_*N+m*X+d*Y,s[10]=x*C+_*z+m*G+d*Z,s[14]=x*E+_*k+m*q+d*ie,s[3]=v*A+g*M+S*j+T*D,s[7]=v*w+g*N+S*X+T*Y,s[11]=v*C+g*z+S*G+T*Z,s[15]=v*E+g*k+S*q+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],x=e[3],_=e[7],m=e[11],d=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],x=e[12],_=e[13],m=e[14],d=e[15],v=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,g=x*f*c-u*m*c-x*l*p+o*m*p+u*l*d-o*f*d,S=u*_*c-x*h*c+x*a*p-o*_*p-u*a*d+o*h*d,T=x*h*l-u*_*l-x*a*f+o*_*f+u*a*m-o*h*m,A=t*v+i*g+r*S+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*w,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*m*s-x*f*s+x*r*p-t*m*p-u*r*d+t*f*d)*w,e[6]=(x*l*s-o*m*s-x*r*c+t*m*c+o*r*d-t*l*d)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*w,e[8]=S*w,e[9]=(x*h*s-u*_*s-x*i*p+t*_*p+u*i*d-t*h*d)*w,e[10]=(o*_*s-x*a*s+x*i*c-t*_*c-o*i*d+t*a*d)*w,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*w,e[12]=T*w,e[13]=(u*_*r-x*h*r+x*i*f-t*_*f-u*i*m+t*h*m)*w,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*m-t*a*m)*w,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,x=s*h,_=o*u,m=o*h,d=a*h,v=l*c,g=l*u,S=l*h,T=i.x,A=i.y,w=i.z;return r[0]=(1-(_+d))*T,r[1]=(p+S)*T,r[2]=(x-g)*T,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+d))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(x+g)*w,r[9]=(m-v)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xs.set(r[0],r[1],r[2]).length();const o=Xs.set(r[4],r[5],r[6]).length(),a=Xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);const c=1/s,u=1/o,h=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,t.setFromRotationMatrix(hi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ji){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,x;if(a===Ji)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===du)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ji){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,p=(i+r)*u;let x,_;if(a===Ji)x=(o+s)*h,_=-2*h;else if(a===du)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xs=new F,hi=new It,bT=new F(0,0,0),PT=new F(1,1,1),pr=new F,ql=new F,Dn=new F,tg=new It,ng=new ml;class ar{constructor(e=0,t=0,i=0,r=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ng.setFromEuler(this),this.setFromQuaternion(ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class xy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NT=0;const ig=new F,qs=new ml,Vi=new It,$l=new F,pa=new F,LT=new F,DT=new ml,rg=new F(1,0,0),sg=new F(0,1,0),og=new F(0,0,1),ag={type:"added"},IT={type:"removed"},$s={type:"childadded",child:null},Vf={type:"childremoved",child:null};class pn extends Jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new F,t=new ar,i=new ml,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Ie}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(rg,e)}rotateY(e){return this.rotateOnAxis(sg,e)}rotateZ(e){return this.rotateOnAxis(og,e)}translateOnAxis(e,t){return ig.copy(e).applyQuaternion(this.quaternion),this.position.add(ig.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rg,e)}translateY(e){return this.translateOnAxis(sg,e)}translateZ(e){return this.translateOnAxis(og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$l.copy(e):$l.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(pa,$l,this.up):Vi.lookAt($l,pa,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),qs.setFromRotationMatrix(Vi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ag),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IT),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ag),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,LT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,DT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new F(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new F,Gi=new F,Gf=new F,Wi=new F,Ys=new F,Ks=new F,lg=new F,Wf=new F,jf=new F,Xf=new F;class Li{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pi.subVectors(e,t),r.cross(pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pi.subVectors(r,t),Gi.subVectors(i,t),Gf.subVectors(e,t);const o=pi.dot(pi),a=pi.dot(Gi),l=pi.dot(Gf),c=Gi.dot(Gi),u=Gi.dot(Gf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static isFrontFacing(e,t,i,r){return pi.subVectors(i,t),Gi.subVectors(e,t),pi.cross(Gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),pi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Li.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ys.subVectors(r,i),Ks.subVectors(s,i),Wf.subVectors(e,i);const l=Ys.dot(Wf),c=Ks.dot(Wf);if(l<=0&&c<=0)return t.copy(i);jf.subVectors(e,r);const u=Ys.dot(jf),h=Ks.dot(jf);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ys,o);Xf.subVectors(e,s);const p=Ys.dot(Xf),x=Ks.dot(Xf);if(x>=0&&p<=x)return t.copy(s);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Ks,a);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return lg.subVectors(s,r),a=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(lg,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(Ys,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function qf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=xT(e,1),t=xn(t,0,1),i=xn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qf(o,s,e+1/3),this.g=qf(o,s,e),this.b=qf(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ri){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ri){const i=yy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}copyLinearToSRGB(e){return this.r=If(e.r),this.g=If(e.g),this.b=If(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return rt.fromWorkingColorSpace(rn.copy(this),e),Math.round(xn(rn.r*255,0,255))*65536+Math.round(xn(rn.g*255,0,255))*256+Math.round(xn(rn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(rn.copy(this),t);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ri){rt.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,r=rn.b;return e!==Ri?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(Yl);const i=Lf(mr.h,Yl.h,t),r=Lf(mr.s,Yl.s,t),s=Lf(mr.l,Yl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new nt;nt.NAMES=yy;let UT=0;class ea extends Jo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=bo,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==qr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fh&&(i.blendSrc=this.blendSrc),this.blendDst!==dh&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==au&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Up extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=oy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new F,Kl=new Ke;class oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Y_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _y("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kl.fromBufferAttribute(this,t),Kl.applyMatrix3(e),this.setXY(t,Kl.x,Kl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Y_&&(e.usage=this.usage),e}}class Sy extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class My extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Si extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let OT=0;const Kn=new It,$f=new pn,Zs=new F,In=new _l,ma=new _l,jt=new F;class ci extends Jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(my(e)?My:Sy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,i){return Kn.makeTranslation(e,t,i),this.applyMatrix4(Kn),this}scale(e,t,i){return Kn.makeScale(e,t,i),this.applyMatrix4(Kn),this}lookAt(e){return $f.lookAt(e),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ma.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(In.min,ma.min),In.expandByPoint(jt),jt.addVectors(In.max,ma.max),In.expandByPoint(jt)):(In.expandByPoint(ma.min),In.expandByPoint(ma.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),jt.add(Zs)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new F,l[C]=new F;const c=new F,u=new F,h=new F,f=new Ke,p=new Ke,x=new Ke,_=new F,m=new F;function d(C,E,M){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),x.sub(f);const N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(N),a[C].add(_),a[E].add(_),a[M].add(_),l[C].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,E=v.length;C<E;++C){const M=v[C],N=M.start,z=M.count;for(let k=N,j=N+z;k<j;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const g=new F,S=new F,T=new F,A=new F;function w(C){T.fromBufferAttribute(r,C),A.copy(T);const E=a[C];g.copy(E),g.sub(T.multiplyScalar(T.dot(E))).normalize(),S.crossVectors(A,E);const N=S.dot(l[C])<0?-1:1;o.setXYZW(C,g.x,g.y,g.z,N)}for(let C=0,E=v.length;C<E;++C){const M=v[C],N=M.start,z=M.count;for(let k=N,j=N+z;k<j;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[x++]=c[p++]}return new oi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cg=new It,as=new Ip,Zl=new gl,ug=new F,Qs=new F,Js=new F,eo=new F,Yf=new F,Ql=new F,Jl=new Ke,ec=new Ke,tc=new Ke,fg=new F,dg=new F,hg=new F,nc=new F,ic=new F;class Ui extends pn{constructor(e=new ci,t=new Up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Yf.fromBufferAttribute(h,e),o?Ql.addScaledVector(Yf,u):Ql.addScaledVector(Yf.sub(t),u))}t.add(Ql)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(Zl.containsPoint(as.origin)===!1&&(as.intersectSphere(Zl,ug)===null||as.origin.distanceToSquared(ug)>(e.far-e.near)**2))&&(cg.copy(s).invert(),as.copy(e.ray).applyMatrix4(cg),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const m=f[x],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=g;S<T;S+=3){const A=a.getX(S),w=a.getX(S+1),C=a.getX(S+2);r=rc(this,d,e,i,c,u,h,A,w,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=rc(this,o,e,i,c,u,h,v,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const m=f[x],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=g;S<T;S+=3){const A=S,w=S+1,C=S+2;r=rc(this,d,e,i,c,u,h,A,w,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){const v=m,g=m+1,S=m+2;r=rc(this,o,e,i,c,u,h,v,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function kT(n,e,t,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qr,a),l===null)return null;ic.copy(a),ic.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ic);return c<t.near||c>t.far?null:{distance:c,point:ic.clone(),object:n}}function rc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Qs),n.getVertexPosition(l,Js),n.getVertexPosition(c,eo);const u=kT(n,e,t,i,Qs,Js,eo,nc);if(u){r&&(Jl.fromBufferAttribute(r,a),ec.fromBufferAttribute(r,l),tc.fromBufferAttribute(r,c),u.uv=Li.getInterpolation(nc,Qs,Js,eo,Jl,ec,tc,new Ke)),s&&(Jl.fromBufferAttribute(s,a),ec.fromBufferAttribute(s,l),tc.fromBufferAttribute(s,c),u.uv1=Li.getInterpolation(nc,Qs,Js,eo,Jl,ec,tc,new Ke)),o&&(fg.fromBufferAttribute(o,a),dg.fromBufferAttribute(o,l),hg.fromBufferAttribute(o,c),u.normal=Li.getInterpolation(nc,Qs,Js,eo,fg,dg,hg,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Li.getNormal(Qs,Js,eo,h.normal),u.face=h}return u}class vl extends ci{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Si(c,3)),this.setAttribute("normal",new Si(u,3)),this.setAttribute("uv",new Si(h,2));function x(_,m,d,v,g,S,T,A,w,C,E){const M=S/w,N=T/C,z=S/2,k=T/2,j=A/2,X=w+1,G=C+1;let q=0,D=0;const Y=new F;for(let Z=0;Z<G;Z++){const ie=Z*N-k;for(let ve=0;ve<X;ve++){const Ve=ve*M-z;Y[_]=Ve*v,Y[m]=ie*g,Y[d]=j,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(ve/w),h.push(1-Z/C),q+=1}}for(let Z=0;Z<C;Z++)for(let ie=0;ie<w;ie++){const ve=f+ie+X*Z,Ve=f+ie+X*(Z+1),W=f+(ie+1)+X*(Z+1),J=f+(ie+1)+X*Z;l.push(ve,Ve,J),l.push(Ve,W,J),D+=6}a.addGroup(p,D,E),p+=D,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=Yo(n[t]);for(const r in i)e[r]=i[r]}return e}function FT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ey(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const zT={clone:Yo,merge:fn};var BT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BT,this.fragmentShader=HT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=FT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wy extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new F,pg=new Ke,mg=new Ke;class ei extends wy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gh*2*Math.atan(Math.tan(Nf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,pg,mg),t.subVectors(mg,pg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class VT extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ei(to,no,e,t);r.layers=this.layers,this.add(r);const s=new ei(to,no,e,t);s.layers=this.layers,this.add(s);const o=new ei(to,no,e,t);o.layers=this.layers,this.add(o);const a=new ei(to,no,e,t);a.layers=this.layers,this.add(a);const l=new ei(to,no,e,t);l.layers=this.layers,this.add(l);const c=new ei(to,no,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===du)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Ty extends Pn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wo,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GT extends Us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ty(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vl(5,5,5),s=new Yr({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Br});s.uniforms.tEquirect.value=t;const o=new Ui(r,s),a=t.minFilter;return t.minFilter===Es&&(t.minFilter=vi),new VT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Kf=new F,WT=new F,jT=new Ie;class ps{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Kf.subVectors(i,t).cross(WT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jT.getNormalMatrix(e),r=this.coplanarPoint(Kf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new gl,sc=new F;class Ay{constructor(e=new ps,t=new ps,i=new ps,r=new ps,s=new ps,o=new ps){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ji){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],x=r[9],_=r[10],m=r[11],d=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-d).normalize(),i[1].setComponents(l+s,f+c,m+p,S+d).normalize(),i[2].setComponents(l+o,f+u,m+x,S+v).normalize(),i[3].setComponents(l-o,f-u,m-x,S-v).normalize(),i[4].setComponents(l-a,f-h,m-_,S-g).normalize(),t===Ji)i[5].setComponents(l+a,f+h,m+_,S+g).normalize();else if(t===du)i[5].setComponents(a,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(sc.x=r.normal.x>0?e.max.x:e.min.x,sc.y=r.normal.y>0?e.max.y:e.min.y,sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function XT(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let p=0,x=f.length;p<x;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Fu extends ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],x=[],_=[],m=[];for(let d=0;d<u;d++){const v=d*f-o;for(let g=0;g<c;g++){const S=g*h-s;x.push(S,-v,0),_.push(0,0,1),m.push(g/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const g=v+c*d,S=v+c*(d+1),T=v+1+c*(d+1),A=v+1+c*d;p.push(g,S,A),p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new Si(x,3)),this.setAttribute("normal",new Si(_,3)),this.setAttribute("uv",new Si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.width,e.height,e.widthSegments,e.heightSegments)}}var qT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$T=`#ifdef USE_ALPHAHASH
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
#endif`,YT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JT=`#ifdef USE_AOMAP
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
#endif`,eA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tA=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,nA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oA=`#ifdef USE_IRIDESCENCE
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
#endif`,aA=`#ifdef USE_BUMPMAP
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
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mA=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,_A=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,gA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vA=`vec3 transformedNormal = objectNormal;
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
#endif`,xA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EA="gl_FragColor = linearToOutputTexel( gl_FragColor );",wA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,TA=`#ifdef USE_ENVMAP
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
#endif`,AA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CA=`#ifdef USE_ENVMAP
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
#endif`,RA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bA=`#ifdef USE_ENVMAP
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
#endif`,PA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IA=`#ifdef USE_GRADIENTMAP
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
}`,UA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FA=`uniform bool receiveShadow;
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
#endif`,zA=`#ifdef USE_ENVMAP
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
#endif`,BA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WA=`PhysicalMaterial material;
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
#endif`,jA=`struct PhysicalMaterial {
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
}`,XA=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,qA=`#if defined( RE_IndirectDiffuse )
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
#endif`,$A=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n2=`#if defined( USE_POINTS_UV )
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
#endif`,i2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`#ifdef USE_MORPHTARGETS
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
#endif`,c2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m2=`#ifdef USE_NORMALMAP
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
#endif`,_2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,M2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D2=`#ifdef USE_SKINNING
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
#endif`,I2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U2=`#ifdef USE_SKINNING
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
#endif`,O2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z2=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B2=`#ifdef USE_TRANSMISSION
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
#endif`,H2=`#ifdef USE_TRANSMISSION
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
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q2=`uniform sampler2D t2D;
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
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`#include <common>
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
}`,J2=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eC=`#define DISTANCE
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
}`,tC=`#define DISTANCE
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
}`,nC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rC=`uniform float scale;
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
}`,sC=`uniform vec3 diffuse;
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
}`,oC=`#include <common>
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
}`,aC=`uniform vec3 diffuse;
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
}`,lC=`#define LAMBERT
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
}`,cC=`#define LAMBERT
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
}`,uC=`#define MATCAP
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
}`,fC=`#define MATCAP
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
}`,dC=`#define NORMAL
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
}`,hC=`#define NORMAL
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
}`,pC=`#define PHONG
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
}`,mC=`#define PHONG
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
}`,_C=`#define STANDARD
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
}`,gC=`#define STANDARD
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
}`,vC=`#define TOON
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
}`,xC=`#define TOON
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
}`,yC=`uniform float size;
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
}`,SC=`uniform vec3 diffuse;
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
}`,MC=`#include <common>
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
}`,EC=`uniform vec3 color;
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
}`,wC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,TC=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:qT,alphahash_pars_fragment:$T,alphamap_fragment:YT,alphamap_pars_fragment:KT,alphatest_fragment:ZT,alphatest_pars_fragment:QT,aomap_fragment:JT,aomap_pars_fragment:eA,batching_pars_vertex:tA,batching_vertex:nA,begin_vertex:iA,beginnormal_vertex:rA,bsdfs:sA,iridescence_fragment:oA,bumpmap_pars_fragment:aA,clipping_planes_fragment:lA,clipping_planes_pars_fragment:cA,clipping_planes_pars_vertex:uA,clipping_planes_vertex:fA,color_fragment:dA,color_pars_fragment:hA,color_pars_vertex:pA,color_vertex:mA,common:_A,cube_uv_reflection_fragment:gA,defaultnormal_vertex:vA,displacementmap_pars_vertex:xA,displacementmap_vertex:yA,emissivemap_fragment:SA,emissivemap_pars_fragment:MA,colorspace_fragment:EA,colorspace_pars_fragment:wA,envmap_fragment:TA,envmap_common_pars_fragment:AA,envmap_pars_fragment:CA,envmap_pars_vertex:RA,envmap_physical_pars_fragment:zA,envmap_vertex:bA,fog_vertex:PA,fog_pars_vertex:NA,fog_fragment:LA,fog_pars_fragment:DA,gradientmap_pars_fragment:IA,lightmap_pars_fragment:UA,lights_lambert_fragment:OA,lights_lambert_pars_fragment:kA,lights_pars_begin:FA,lights_toon_fragment:BA,lights_toon_pars_fragment:HA,lights_phong_fragment:VA,lights_phong_pars_fragment:GA,lights_physical_fragment:WA,lights_physical_pars_fragment:jA,lights_fragment_begin:XA,lights_fragment_maps:qA,lights_fragment_end:$A,logdepthbuf_fragment:YA,logdepthbuf_pars_fragment:KA,logdepthbuf_pars_vertex:ZA,logdepthbuf_vertex:QA,map_fragment:JA,map_pars_fragment:e2,map_particle_fragment:t2,map_particle_pars_fragment:n2,metalnessmap_fragment:i2,metalnessmap_pars_fragment:r2,morphinstance_vertex:s2,morphcolor_vertex:o2,morphnormal_vertex:a2,morphtarget_pars_vertex:l2,morphtarget_vertex:c2,normal_fragment_begin:u2,normal_fragment_maps:f2,normal_pars_fragment:d2,normal_pars_vertex:h2,normal_vertex:p2,normalmap_pars_fragment:m2,clearcoat_normal_fragment_begin:_2,clearcoat_normal_fragment_maps:g2,clearcoat_pars_fragment:v2,iridescence_pars_fragment:x2,opaque_fragment:y2,packing:S2,premultiplied_alpha_fragment:M2,project_vertex:E2,dithering_fragment:w2,dithering_pars_fragment:T2,roughnessmap_fragment:A2,roughnessmap_pars_fragment:C2,shadowmap_pars_fragment:R2,shadowmap_pars_vertex:b2,shadowmap_vertex:P2,shadowmask_pars_fragment:N2,skinbase_vertex:L2,skinning_pars_vertex:D2,skinning_vertex:I2,skinnormal_vertex:U2,specularmap_fragment:O2,specularmap_pars_fragment:k2,tonemapping_fragment:F2,tonemapping_pars_fragment:z2,transmission_fragment:B2,transmission_pars_fragment:H2,uv_pars_fragment:V2,uv_pars_vertex:G2,uv_vertex:W2,worldpos_vertex:j2,background_vert:X2,background_frag:q2,backgroundCube_vert:$2,backgroundCube_frag:Y2,cube_vert:K2,cube_frag:Z2,depth_vert:Q2,depth_frag:J2,distanceRGBA_vert:eC,distanceRGBA_frag:tC,equirect_vert:nC,equirect_frag:iC,linedashed_vert:rC,linedashed_frag:sC,meshbasic_vert:oC,meshbasic_frag:aC,meshlambert_vert:lC,meshlambert_frag:cC,meshmatcap_vert:uC,meshmatcap_frag:fC,meshnormal_vert:dC,meshnormal_frag:hC,meshphong_vert:pC,meshphong_frag:mC,meshphysical_vert:_C,meshphysical_frag:gC,meshtoon_vert:vC,meshtoon_frag:xC,points_vert:yC,points_frag:SC,shadow_vert:MC,shadow_frag:EC,sprite_vert:wC,sprite_frag:TC},le={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},bi={basic:{uniforms:fn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:fn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new nt(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:fn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:fn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:fn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new nt(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:fn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:fn([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:fn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:fn([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:fn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:fn([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:fn([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:fn([le.lights,le.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};bi.physical={uniforms:fn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const oc={r:0,b:0,g:0},cs=new ar,AC=new It;function CC(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function x(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?t:e).get(g)),g}function _(v){let g=!1;const S=x(v);S===null?d(a,l):S&&S.isColor&&(d(S,1),g=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,g){const S=x(g);S&&(S.isCubeTexture||S.mapping===Uu)?(u===void 0&&(u=new Ui(new vl(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:Yo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cs.copy(g.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(AC.makeRotationFromEuler(cs)),u.material.toneMapped=rt.getTransfer(S.colorSpace)!==ht,(h!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ui(new Fu(2,2),new Yr({name:"BackgroundMaterial",uniforms:Yo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=rt.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,g){v.getRGB(oc,Ey(n)),i.buffers.color.setClear(oc.r,oc.g,oc.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function RC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,N,z,k,j){let X=!1;const G=h(k,z,N);s!==G&&(s=G,c(s.object)),X=p(M,k,z,j),X&&x(M,k,z,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(M,N,z,k),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,N,z){const k=z.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let X=j[N.id];X===void 0&&(X={},j[N.id]=X);let G=X[k];return G===void 0&&(G=f(l()),X[k]=G),G}function f(M){const N=[],z=[],k=[];for(let j=0;j<t;j++)N[j]=0,z[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,N,z,k){const j=s.attributes,X=N.attributes;let G=0;const q=z.getAttributes();for(const D in q)if(q[D].location>=0){const Z=j[D];let ie=X[D];if(ie===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function x(M,N,z,k){const j={},X=N.attributes;let G=0;const q=z.getAttributes();for(const D in q)if(q[D].location>=0){let Z=X[D];Z===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),j[D]=ie,G++}s.attributes=j,s.attributesNum=G,s.index=k}function _(){const M=s.newAttributes;for(let N=0,z=M.length;N<z;N++)M[N]=0}function m(M){d(M,0)}function d(M,N){const z=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;z[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),j[M]!==N&&(n.vertexAttribDivisor(M,N),j[M]=N)}function v(){const M=s.newAttributes,N=s.enabledAttributes;for(let z=0,k=N.length;z<k;z++)N[z]!==M[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function g(M,N,z,k,j,X,G){G===!0?n.vertexAttribIPointer(M,N,z,j,X):n.vertexAttribPointer(M,N,z,k,j,X)}function S(M,N,z,k){_();const j=k.attributes,X=z.getAttributes(),G=N.defaultAttributeValues;for(const q in X){const D=X[q];if(D.location>=0){let Y=j[q];if(Y===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const Z=Y.normalized,ie=Y.itemSize,ve=e.get(Y);if(ve===void 0)continue;const Ve=ve.buffer,W=ve.type,J=ve.bytesPerElement,de=W===n.INT||W===n.UNSIGNED_INT||Y.gpuType===ly;if(Y.isInterleavedBufferAttribute){const ae=Y.data,ze=ae.stride,Ue=Y.offset;if(ae.isInstancedInterleavedBuffer){for(let $e=0;$e<D.locationSize;$e++)d(D.location+$e,ae.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let $e=0;$e<D.locationSize;$e++)m(D.location+$e);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let $e=0;$e<D.locationSize;$e++)g(D.location+$e,ie/D.locationSize,W,Z,ze*J,(Ue+ie/D.locationSize*$e)*J,de)}else{if(Y.isInstancedBufferAttribute){for(let ae=0;ae<D.locationSize;ae++)d(D.location+ae,Y.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<D.locationSize;ae++)m(D.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let ae=0;ae<D.locationSize;ae++)g(D.location+ae,ie/D.locationSize,W,Z,ie*J,ie/D.locationSize*ae*J,de)}}else if(G!==void 0){const Z=G[q];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(D.location,Z);break;case 3:n.vertexAttrib3fv(D.location,Z);break;case 4:n.vertexAttrib4fv(D.location,Z);break;default:n.vertexAttrib1fv(D.location,Z)}}}}v()}function T(){C();for(const M in i){const N=i[M];for(const z in N){const k=N[z];for(const j in k)u(k[j].object),delete k[j];delete N[z]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const z in N){const k=N[z];for(const j in k)u(k[j].object),delete k[j];delete N[z]}delete i[M.id]}function w(M){for(const N in i){const z=i[N];if(z[M.id]===void 0)continue;const k=z[M.id];for(const j in k)u(k[j].object),delete k[j];delete z[M.id]}}function C(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function bC(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h;p++)this.render(c[p],u[p]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,i,1)}}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=u[_];for(let _=0;_<f.length;_++)t.update(x,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PC(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Ii&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===Ou&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==$r&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Rr&&!w)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:S,maxSamples:T}}function NC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ps,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let S=d.clippingState||null;l.value=S,S=u(x,f,g,p);for(let T=0;T!==g;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,x){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,S=p;g!==_;++g,S+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function LC(n){let e=new WeakMap;function t(o,a){return a===hh?o.mapping=Wo:a===ph&&(o.mapping=jo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hh||a===ph)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new GT(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class DC extends wy{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xo=4,_g=[.125,.215,.35,.446,.526,.582],gs=20,Zf=new DC,gg=new nt;let Qf=null,Jf=0,ed=0,td=!1;const ms=(1+Math.sqrt(5))/2,io=1/ms,vg=[new F(-ms,io,0),new F(ms,io,0),new F(-io,0,ms),new F(io,0,ms),new F(0,ms,-io),new F(0,ms,io),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Qf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qf,Jf,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Ou,format:Ii,colorSpace:es,depthBuffer:!1},r=yg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IC(s)),this._blurMaterial=UC(s,e,t)}return r}_compileMaterial(e){const t=new Ui(this._lodPlanes[0],e);this._renderer.compile(t,Zf)}_sceneToCubeUV(e,t,i,r){const a=new ei(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(gg),u.toneMapping=Hr,u.autoClear=!1;const p=new Up({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),x=new Ui(new vl,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(gg),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const g=this._cubeSize;ac(r,v*g,d>2?g:0,g,g),u.setRenderTarget(r),_&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Wo||e.mapping===jo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ui(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ac(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vg[(r-s-1)%vg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ui(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gs-1),_=s/x,m=isFinite(s)?1+Math.floor(u*_):gs;m>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const d=[];let v=0;for(let w=0;w<gs;++w){const C=w/_,E=Math.exp(-C*C/2);d.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-i;const S=this._sizeLods[r],T=3*S*(r>g-xo?r-g+xo:0),A=4*(this._cubeSize-S);ac(t,T,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Zf)}}function IC(n){const e=[],t=[],i=[];let r=n;const s=n-xo+1+_g.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xo?l=_g[o-n+xo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,_=3,m=2,d=1,v=new Float32Array(_*x*p),g=new Float32Array(m*x*p),S=new Float32Array(d*x*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,E=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(E,_*x*A),g.set(f,m*x*A);const M=[A,A,A,A,A,A];S.set(M,d*x*A)}const T=new ci;T.setAttribute("position",new oi(v,_)),T.setAttribute("uv",new oi(g,m)),T.setAttribute("faceIndex",new oi(S,d)),e.push(T),r>xo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yg(n,e,t){const i=new Us(n,e,t);return i.texture.mapping=Uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ac(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function UC(n,e,t){const i=new Float32Array(gs),r=new F(0,1,0);return new Yr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Sg(){return new Yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Mg(){return new Yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Op(){return`

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
	`}function OC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hh||l===ph,u=l===Wo||l===jo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new xg(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new xg(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_y("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FC(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const _=p[x];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,x=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let g=0,S=v.length;g<S;g+=3){const T=v[g+0],A=v[g+1],w=v[g+2];f.push(T,A,A,w,w,T)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const T=g+0,A=g+1,w=g+2;f.push(T,A,A,w,w,T)}}else return;const m=new(my(f)?My:Sy)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zC(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,f*o,x),t.update(p,i,x))}function u(f,p,x){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<x;m++)this.render(f[m]/o,p[m]);else{_.multiDrawElementsWEBGL(i,p,0,s,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,i,1)}}function h(f,p,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,x);let d=0;for(let v=0;v<x;v++)d+=p[v];for(let v=0;v<_.length;v++)t.update(d,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function BC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function HC(n,e,t){const i=new WeakMap,r=new Kt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let T=a.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*A*4*h),C=new vy(w,T,A,h);C.type=Rr,C.needsUpdate=!0;const E=S*4;for(let N=0;N<h;N++){const z=d[N],k=v[N],j=g[N],X=T*A*4*N;for(let G=0;G<z.count;G++){const q=G*E;x===!0&&(r.fromBufferAttribute(z,G),w[X+q+0]=r.x,w[X+q+1]=r.y,w[X+q+2]=r.z,w[X+q+3]=0),_===!0&&(r.fromBufferAttribute(k,G),w[X+q+4]=r.x,w[X+q+5]=r.y,w[X+q+6]=r.z,w[X+q+7]=0),m===!0&&(r.fromBufferAttribute(j,G),w[X+q+8]=r.x,w[X+q+9]=r.y,w[X+q+10]=r.z,w[X+q+11]=j.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Ke(T,A)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const _=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function VC(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ry extends Pn{constructor(e,t,i,r,s,o,a,l,c,u=Po){if(u!==Po&&u!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Po&&(i=Xo),i===void 0&&u===$o&&(i=qo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ri,this.minFilter=l!==void 0?l:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const by=new Pn,Py=new Ry(1,1);Py.compareFunction=py;const Ny=new vy,Ly=new CT,Dy=new Ty,Eg=[],wg=[],Tg=new Float32Array(16),Ag=new Float32Array(9),Cg=new Float32Array(4);function ta(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Eg[r];if(s===void 0&&(s=new Float32Array(r),Eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zu(n,e){let t=wg[e];t===void 0&&(t=new Int32Array(e),wg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function GC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function WC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function jC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function XC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function qC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Cg.set(i),n.uniformMatrix2fv(this.addr,!1,Cg),Vt(t,i)}}function $C(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Ag.set(i),n.uniformMatrix3fv(this.addr,!1,Ag),Vt(t,i)}}function YC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Tg.set(i),n.uniformMatrix4fv(this.addr,!1,Tg),Vt(t,i)}}function KC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function QC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function JC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function eR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function nR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function iR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function rR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Py:by;t.setTexture2D(e||s,r)}function sR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ly,r)}function oR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dy,r)}function aR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ny,r)}function lR(n){switch(n){case 5126:return GC;case 35664:return WC;case 35665:return jC;case 35666:return XC;case 35674:return qC;case 35675:return $C;case 35676:return YC;case 5124:case 35670:return KC;case 35667:case 35671:return ZC;case 35668:case 35672:return QC;case 35669:case 35673:return JC;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return aR}}function cR(n,e){n.uniform1fv(this.addr,e)}function uR(n,e){const t=ta(e,this.size,2);n.uniform2fv(this.addr,t)}function fR(n,e){const t=ta(e,this.size,3);n.uniform3fv(this.addr,t)}function dR(n,e){const t=ta(e,this.size,4);n.uniform4fv(this.addr,t)}function hR(n,e){const t=ta(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pR(n,e){const t=ta(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mR(n,e){const t=ta(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _R(n,e){n.uniform1iv(this.addr,e)}function gR(n,e){n.uniform2iv(this.addr,e)}function vR(n,e){n.uniform3iv(this.addr,e)}function xR(n,e){n.uniform4iv(this.addr,e)}function yR(n,e){n.uniform1uiv(this.addr,e)}function SR(n,e){n.uniform2uiv(this.addr,e)}function MR(n,e){n.uniform3uiv(this.addr,e)}function ER(n,e){n.uniform4uiv(this.addr,e)}function wR(n,e,t){const i=this.cache,r=e.length,s=zu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||by,s[o])}function TR(n,e,t){const i=this.cache,r=e.length,s=zu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ly,s[o])}function AR(n,e,t){const i=this.cache,r=e.length,s=zu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Dy,s[o])}function CR(n,e,t){const i=this.cache,r=e.length,s=zu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ny,s[o])}function RR(n){switch(n){case 5126:return cR;case 35664:return uR;case 35665:return fR;case 35666:return dR;case 35674:return hR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return _R;case 35667:case 35671:return gR;case 35668:case 35672:return vR;case 35669:case 35673:return xR;case 5125:return yR;case 36294:return SR;case 36295:return MR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return TR;case 35680:case 36300:case 36308:case 36293:return AR;case 36289:case 36303:case 36311:case 36292:return CR}}class bR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lR(t.type)}}class PR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RR(t.type)}}class NR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Rg(n,e){n.seq.push(e),n.map[e.id]=e}function LR(n,e,t){const i=n.name,r=i.length;for(nd.lastIndex=0;;){const s=nd.exec(i),o=nd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Rg(t,c===void 0?new bR(a,n,e):new PR(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new NR(a),Rg(t,h)),t=h}}}class Rc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);LR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function bg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const DR=37297;let IR=0;function UR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function OR(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===fu&&t===uu?i="LinearDisplayP3ToLinearSRGB":e===uu&&t===fu&&(i="LinearSRGBToLinearDisplayP3"),n){case es:case ku:return[i,"LinearTransferOETF"];case Ri:case Dp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Pg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+UR(n.getShaderSource(e),o)}else return r}function kR(n,e){const t=OR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function FR(n,e){let t;switch(e){case Ww:t="Linear";break;case jw:t="Reinhard";break;case Xw:t="OptimizedCineon";break;case qw:t="ACESFilmic";break;case Yw:t="AgX";break;case Kw:t="Neutral";break;case $w:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function BR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function HR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wa(n){return n!==""}function Ng(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VR=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(n){return n.replace(VR,WR)}const GR=new Map;function WR(n,e){let t=De[e];if(t===void 0){const i=GR.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vh(t)}const jR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(n){return n.replace(jR,XR)}function XR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ig(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_w?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function $R(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wo:case jo:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function KR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oy:e="ENVMAP_BLENDING_MULTIPLY";break;case Vw:e="ENVMAP_BLENDING_MIX";break;case Gw:e="ENVMAP_BLENDING_ADD";break}return e}function ZR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function QR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qR(t),c=$R(t),u=YR(t),h=KR(t),f=ZR(t),p=zR(t),x=BR(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wa).join(`
`),d.length>0&&(d+=`
`)):(m=[Ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),d=[Ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?De.tonemapping_pars_fragment:"",t.toneMapping!==Hr?FR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,kR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),o=vh(o),o=Ng(o,t),o=Lg(o,t),a=vh(a),a=Ng(a,t),a=Lg(a,t),o=Dg(o),a=Dg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=v+m+o,S=v+d+a,T=bg(r,r.VERTEX_SHADER,g),A=bg(r,r.FRAGMENT_SHADER,S);r.attachShader(_,T),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(N){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(T).trim(),j=r.getShaderInfoLog(A).trim();let X=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,A);else{const q=Pg(r,T,"vertex"),D=Pg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+q+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||j==="")&&(G=!1);G&&(N.diagnostics={runnable:X,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:j,prefix:d}})}r.deleteShader(T),r.deleteShader(A),C=new Rc(r,_),E=HR(r,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,DR)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let JR=0;class eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tb(e),t.set(e,i)),i}}class tb{constructor(e){this.id=JR++,this.code=e,this.usedTimes=0}}function nb(n,e,t,i,r,s,o){const a=new xy,l=new eb,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,N,z,k){const j=z.fog,X=k.geometry,G=E.isMeshStandardMaterial?z.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),D=q&&q.mapping===Uu?q.image.height:null,Y=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=Z!==void 0?Z.length:0;let ve=0;X.morphAttributes.position!==void 0&&(ve=1),X.morphAttributes.normal!==void 0&&(ve=2),X.morphAttributes.color!==void 0&&(ve=3);let Ve,W,J,de;if(Y){const ot=bi[Y];Ve=ot.vertexShader,W=ot.fragmentShader}else Ve=E.vertexShader,W=E.fragmentShader,l.update(E),J=l.getVertexShaderID(E),de=l.getFragmentShaderID(E);const ae=n.getRenderTarget(),ze=k.isInstancedMesh===!0,Ue=k.isBatchedMesh===!0,$e=!!E.map,I=!!E.matcap,qe=!!q,We=!!E.aoMap,gt=!!E.lightMap,Te=!!E.bumpMap,Ze=!!E.normalMap,Be=!!E.displacementMap,Le=!!E.emissiveMap,Ut=!!E.metalnessMap,P=!!E.roughnessMap,R=E.anisotropy>0,V=E.clearcoat>0,Q=E.dispersion>0,ee=E.iridescence>0,te=E.sheen>0,Ee=E.transmission>0,ce=R&&!!E.anisotropyMap,ue=V&&!!E.clearcoatMap,Oe=V&&!!E.clearcoatNormalMap,re=V&&!!E.clearcoatRoughnessMap,Se=ee&&!!E.iridescenceMap,Ge=ee&&!!E.iridescenceThicknessMap,be=te&&!!E.sheenColorMap,fe=te&&!!E.sheenRoughnessMap,ke=!!E.specularMap,je=!!E.specularColorMap,Pt=!!E.specularIntensityMap,L=Ee&&!!E.transmissionMap,he=Ee&&!!E.thicknessMap,$=!!E.gradientMap,K=!!E.alphaMap,oe=E.alphaTest>0,Pe=!!E.alphaHash,et=!!E.extensions;let Nt=Hr;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const Gt={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:W,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&k._colorsTexture!==null,instancing:ze,instancingColor:ze&&k.instanceColor!==null,instancingMorph:ze&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:es,alphaToCoverage:!!E.alphaToCoverage,map:$e,matcap:I,envMap:qe,envMapMode:qe&&q.mapping,envMapCubeUVHeight:D,aoMap:We,lightMap:gt,bumpMap:Te,normalMap:Ze,displacementMap:f&&Be,emissiveMap:Le,normalMapObjectSpace:Ze&&E.normalMapType===fT,normalMapTangentSpace:Ze&&E.normalMapType===uT,metalnessMap:Ut,roughnessMap:P,anisotropy:R,anisotropyMap:ce,clearcoat:V,clearcoatMap:ue,clearcoatNormalMap:Oe,clearcoatRoughnessMap:re,dispersion:Q,iridescence:ee,iridescenceMap:Se,iridescenceThicknessMap:Ge,sheen:te,sheenColorMap:be,sheenRoughnessMap:fe,specularMap:ke,specularColorMap:je,specularIntensityMap:Pt,transmission:Ee,transmissionMap:L,thicknessMap:he,gradientMap:$,opaque:E.transparent===!1&&E.blending===bo&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:oe,alphaHash:Pe,combine:E.combine,mapUv:$e&&_(E.map.channel),aoMapUv:We&&_(E.aoMap.channel),lightMapUv:gt&&_(E.lightMap.channel),bumpMapUv:Te&&_(E.bumpMap.channel),normalMapUv:Ze&&_(E.normalMap.channel),displacementMapUv:Be&&_(E.displacementMap.channel),emissiveMapUv:Le&&_(E.emissiveMap.channel),metalnessMapUv:Ut&&_(E.metalnessMap.channel),roughnessMapUv:P&&_(E.roughnessMap.channel),anisotropyMapUv:ce&&_(E.anisotropyMap.channel),clearcoatMapUv:ue&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(E.sheenRoughnessMap.channel),specularMapUv:ke&&_(E.specularMap.channel),specularColorMapUv:je&&_(E.specularColorMap.channel),specularIntensityMapUv:Pt&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:he&&_(E.thicknessMap.channel),alphaMapUv:K&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ze||R),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&($e||K),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ki,flipSided:E.side===bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:et&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:et&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(v(M,E),g(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function g(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const M=x[E.type];let N;if(M){const z=bi[M];N=zT.clone(z.uniforms)}else N=E.uniforms;return N}function T(E,M){let N;for(let z=0,k=u.length;z<k;z++){const j=u[z];if(j.cacheKey===M){N=j,++N.usedTimes;break}}return N===void 0&&(N=new QR(n,M,E,s),u.push(N)),N}function A(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function ib(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function rb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ug(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Og(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,x,_,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:_,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,x,_,m){const d=o(h,f,p,x,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,x,_,m){const d=o(h,f,p,x,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||rb),i.length>1&&i.sort(f||Ug),r.length>1&&r.sort(f||Ug)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function sb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Og,n.set(i,[o])):r>=s.length?(o=new Og,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ob(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new nt};break;case"SpotLight":t={position:new F,direction:new F,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function ab(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lb=0;function cb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ub(n){const e=new ob,t=ab(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new It,o=new It;function a(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,x=0,_=0,m=0,d=0,v=0,g=0,S=0,T=0,A=0,w=0;c.sort(cb);for(let E=0,M=c.length;E<M;E++){const N=c[E],z=N.color,k=N.intensity,j=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=z.r*k,h+=z.g*k,f+=z.b*k;else if(N.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(N.sh.coefficients[G],k);w++}else if(N.isDirectionalLight){const G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const q=N.shadow,D=t.get(N);D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=N.shadow.matrix,v++}i.directional[p]=G,p++}else if(N.isSpotLight){const G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(z).multiplyScalar(k),G.distance=j,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,i.spot[_]=G;const q=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,q.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[_]=q.matrix,N.castShadow){const D=t.get(N);D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=X,S++}_++}else if(N.isRectAreaLight){const G=e.get(N);G.color.copy(z).multiplyScalar(k),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=G,m++}else if(N.isPointLight){const G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){const q=N.shadow,D=t.get(N);D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=X,i.pointShadowMatrix[x]=N.shadow.matrix,g++}i.point[x]=G,x++}else if(N.isHemisphereLight){const G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(k),G.groundColor.copy(N.groundColor).multiplyScalar(k),i.hemi[d]=G,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==g||C.numSpotShadows!==S||C.numSpotMaps!==T||C.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,C.directionalLength=p,C.pointLength=x,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=g,C.numSpotShadows=S,C.numSpotMaps=T,C.numLightProbes=w,i.version=lb++)}function l(c,u){let h=0,f=0,p=0,x=0,_=0;const m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const g=c[d];if(g.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function kg(n){const e=new ub(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new kg(n),e.set(r,[a])):s>=o.length?(a=new kg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class db extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hb extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mb=`uniform sampler2D shadow_pass;
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
}`;function _b(n,e,t){let i=new Ay;const r=new Ke,s=new Ke,o=new Kt,a=new db({depthPacking:cT}),l=new hb,c={},u=t.maxTextureSize,h={[qr]:bn,[bn]:qr,[Ki]:Ki},f=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:pb,fragmentShader:mb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new ci;x.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ui(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sy;let d=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Br),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=d!==ji&&this.type===ji,j=d===ji&&this.type!==ji;for(let X=0,G=A.length;X<G;X++){const q=A[X],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||k===!0||j===!0){const ie=this.type!==ji?{minFilter:ri,magFilter:ri}:{};D.map!==null&&D.map.dispose(),D.map=new Us(r.x,r.y,ie),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const Z=D.getViewportCount();for(let ie=0;ie<Z;ie++){const ve=D.getViewport(ie);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),z.viewport(o),D.updateMatrices(q,ie),i=D.getFrustum(),S(w,C,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===ji&&v(D,C),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,N)};function v(A,w){const C=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Us(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,C,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,C,p,_,null)}function g(A,w,C,E){let M=null;const N=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)M=N;else if(M=C.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=M.uuid,k=w.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let X=j[k];X===void 0&&(X=M.clone(),j[k]=X,w.addEventListener("dispose",T)),M=X}if(M.visible=w.visible,M.wireframe=w.wireframe,E===ji?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=C}return M}function S(A,w,C,E,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ji)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const k=e.update(A),j=A.material;if(Array.isArray(j)){const X=k.groups;for(let G=0,q=X.length;G<q;G++){const D=X[G],Y=j[D.materialIndex];if(Y&&Y.visible){const Z=g(A,Y,E,M);A.onBeforeShadow(n,A,w,C,k,Z,D),n.renderBufferDirect(C,null,k,Z,A,D),A.onAfterShadow(n,A,w,C,k,Z,D)}}}else if(j.visible){const X=g(A,j,E,M);A.onBeforeShadow(n,A,w,C,k,X,null),n.renderBufferDirect(C,null,k,X,A,null),A.onAfterShadow(n,A,w,C,k,X,null)}}const z=A.children;for(let k=0,j=z.length;k<j;k++)S(z[k],w,C,E,M)}function T(A){A.target.removeEventListener("dispose",T);for(const C in c){const E=c[C],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function gb(n){function e(){let L=!1;const he=new Kt;let $=null;const K=new Kt(0,0,0,0);return{setMask:function(oe){$!==oe&&!L&&(n.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){L=oe},setClear:function(oe,Pe,et,Nt,Gt){Gt===!0&&(oe*=Nt,Pe*=Nt,et*=Nt),he.set(oe,Pe,et,Nt),K.equals(he)===!1&&(n.clearColor(oe,Pe,et,Nt),K.copy(he))},reset:function(){L=!1,$=null,K.set(-1,0,0,0)}}}function t(){let L=!1,he=null,$=null,K=null;return{setTest:function(oe){oe?de(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(oe){he!==oe&&!L&&(n.depthMask(oe),he=oe)},setFunc:function(oe){if($!==oe){switch(oe){case Uw:n.depthFunc(n.NEVER);break;case Ow:n.depthFunc(n.ALWAYS);break;case kw:n.depthFunc(n.LESS);break;case au:n.depthFunc(n.LEQUAL);break;case Fw:n.depthFunc(n.EQUAL);break;case zw:n.depthFunc(n.GEQUAL);break;case Bw:n.depthFunc(n.GREATER);break;case Hw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=oe}},setLocked:function(oe){L=oe},setClear:function(oe){K!==oe&&(n.clearDepth(oe),K=oe)},reset:function(){L=!1,he=null,$=null,K=null}}}function i(){let L=!1,he=null,$=null,K=null,oe=null,Pe=null,et=null,Nt=null,Gt=null;return{setTest:function(ot){L||(ot?de(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(ot){he!==ot&&!L&&(n.stencilMask(ot),he=ot)},setFunc:function(ot,Ei,wi){($!==ot||K!==Ei||oe!==wi)&&(n.stencilFunc(ot,Ei,wi),$=ot,K=Ei,oe=wi)},setOp:function(ot,Ei,wi){(Pe!==ot||et!==Ei||Nt!==wi)&&(n.stencilOp(ot,Ei,wi),Pe=ot,et=Ei,Nt=wi)},setLocked:function(ot){L=ot},setClear:function(ot){Gt!==ot&&(n.clearStencil(ot),Gt=ot)},reset:function(){L=!1,he=null,$=null,K=null,oe=null,Pe=null,et=null,Nt=null,Gt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,x=!1,_=null,m=null,d=null,v=null,g=null,S=null,T=null,A=new nt(0,0,0),w=0,C=!1,E=null,M=null,N=null,z=null,k=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=G>=2);let D=null,Y={};const Z=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),ve=new Kt().fromArray(Z),Ve=new Kt().fromArray(ie);function W(L,he,$,K){const oe=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(L,Pe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<$;et++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(he+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return Pe}const J={};J[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(n.DEPTH_TEST),s.setFunc(au),Te(!1),Ze(v_),de(n.CULL_FACE),We(Br);function de(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function ae(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function ze(L,he){return u[L]!==he?(n.bindFramebuffer(L,he),u[L]=he,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Ue(L,he){let $=f,K=!1;if(L){$=h.get(he),$===void 0&&($=[],h.set(he,$));const oe=L.textures;if($.length!==oe.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,et=oe.length;Pe<et;Pe++)$[Pe]=n.COLOR_ATTACHMENT0+Pe;$.length=oe.length,K=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,K=!0);K&&n.drawBuffers($)}function $e(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const I={[_s]:n.FUNC_ADD,[vw]:n.FUNC_SUBTRACT,[xw]:n.FUNC_REVERSE_SUBTRACT};I[yw]=n.MIN,I[Sw]=n.MAX;const qe={[Mw]:n.ZERO,[Ew]:n.ONE,[ww]:n.SRC_COLOR,[fh]:n.SRC_ALPHA,[Pw]:n.SRC_ALPHA_SATURATE,[Rw]:n.DST_COLOR,[Aw]:n.DST_ALPHA,[Tw]:n.ONE_MINUS_SRC_COLOR,[dh]:n.ONE_MINUS_SRC_ALPHA,[bw]:n.ONE_MINUS_DST_COLOR,[Cw]:n.ONE_MINUS_DST_ALPHA,[Nw]:n.CONSTANT_COLOR,[Lw]:n.ONE_MINUS_CONSTANT_COLOR,[Dw]:n.CONSTANT_ALPHA,[Iw]:n.ONE_MINUS_CONSTANT_ALPHA};function We(L,he,$,K,oe,Pe,et,Nt,Gt,ot){if(L===Br){x===!0&&(ae(n.BLEND),x=!1);return}if(x===!1&&(de(n.BLEND),x=!0),L!==gw){if(L!==_||ot!==C){if((m!==_s||g!==_s)&&(n.blendEquation(n.FUNC_ADD),m=_s,g=_s),ot)switch(L){case bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case x_:n.blendFunc(n.ONE,n.ONE);break;case y_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case S_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case x_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case y_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case S_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}d=null,v=null,S=null,T=null,A.set(0,0,0),w=0,_=L,C=ot}return}oe=oe||he,Pe=Pe||$,et=et||K,(he!==m||oe!==g)&&(n.blendEquationSeparate(I[he],I[oe]),m=he,g=oe),($!==d||K!==v||Pe!==S||et!==T)&&(n.blendFuncSeparate(qe[$],qe[K],qe[Pe],qe[et]),d=$,v=K,S=Pe,T=et),(Nt.equals(A)===!1||Gt!==w)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Gt),A.copy(Nt),w=Gt),_=L,C=!1}function gt(L,he){L.side===Ki?ae(n.CULL_FACE):de(n.CULL_FACE);let $=L.side===bn;he&&($=!$),Te($),L.blending===bo&&L.transparent===!1?We(Br):We(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){E!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),E=L)}function Ze(L){L!==pw?(de(n.CULL_FACE),L!==M&&(L===v_?n.cullFace(n.BACK):L===mw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),M=L}function Be(L){L!==N&&(X&&n.lineWidth(L),N=L)}function Le(L,he,$){L?(de(n.POLYGON_OFFSET_FILL),(z!==he||k!==$)&&(n.polygonOffset(he,$),z=he,k=$)):ae(n.POLYGON_OFFSET_FILL)}function Ut(L){L?de(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function P(L){L===void 0&&(L=n.TEXTURE0+j-1),D!==L&&(n.activeTexture(L),D=L)}function R(L,he,$){$===void 0&&(D===null?$=n.TEXTURE0+j-1:$=D);let K=Y[$];K===void 0&&(K={type:void 0,texture:void 0},Y[$]=K),(K.type!==L||K.texture!==he)&&(D!==$&&(n.activeTexture($),D=$),n.bindTexture(L,he||J[L]),K.type=L,K.texture=he)}function V(){const L=Y[D];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){ve.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ve.copy(L))}function fe(L){Ve.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function ke(L,he){let $=l.get(he);$===void 0&&($=new WeakMap,l.set(he,$));let K=$.get(L);K===void 0&&(K=n.getUniformBlockIndex(he,L.name),$.set(L,K))}function je(L,he){const K=l.get(he).get(L);a.get(he)!==K&&(n.uniformBlockBinding(he,K,L.__bindingPointIndex),a.set(he,K))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},D=null,Y={},u={},h=new WeakMap,f=[],p=null,x=!1,_=null,m=null,d=null,v=null,g=null,S=null,T=null,A=new nt(0,0,0),w=0,C=!1,E=null,M=null,N=null,z=null,k=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:ae,bindFramebuffer:ze,drawBuffers:Ue,useProgram:$e,setBlending:We,setMaterial:gt,setFlipSided:Te,setCullFace:Ze,setLineWidth:Be,setPolygonOffset:Le,setScissorTest:Ut,activeTexture:P,bindTexture:R,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Se,texImage3D:Ge,updateUBOMapping:ke,uniformBlockBinding:je,texStorage2D:Oe,texStorage3D:re,texSubImage2D:te,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:be,viewport:fe,reset:Pt}}function vb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,R){return p?new OffscreenCanvas(P,R):hu("canvas")}function _(P,R,V){let Q=1;const ee=Ut(P);if((ee.width>V||ee.height>V)&&(Q=V/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(Q*ee.width),Ee=Math.floor(Q*ee.height);h===void 0&&(h=x(te,Ee));const ce=R?x(te,Ee):h;return ce.width=te,ce.height=Ee,ce.getContext("2d").drawImage(P,0,0,te,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+Ee+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==ri&&P.minFilter!==vi}function d(P){n.generateMipmap(P)}function v(P,R,V,Q,ee=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=R;if(R===n.RED&&(V===n.FLOAT&&(te=n.R32F),V===n.HALF_FLOAT&&(te=n.R16F),V===n.UNSIGNED_BYTE&&(te=n.R8)),R===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(te=n.R8UI),V===n.UNSIGNED_SHORT&&(te=n.R16UI),V===n.UNSIGNED_INT&&(te=n.R32UI),V===n.BYTE&&(te=n.R8I),V===n.SHORT&&(te=n.R16I),V===n.INT&&(te=n.R32I)),R===n.RG&&(V===n.FLOAT&&(te=n.RG32F),V===n.HALF_FLOAT&&(te=n.RG16F),V===n.UNSIGNED_BYTE&&(te=n.RG8)),R===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(te=n.RG8UI),V===n.UNSIGNED_SHORT&&(te=n.RG16UI),V===n.UNSIGNED_INT&&(te=n.RG32UI),V===n.BYTE&&(te=n.RG8I),V===n.SHORT&&(te=n.RG16I),V===n.INT&&(te=n.RG32I)),R===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),R===n.RGBA){const Ee=ee?cu:rt.getTransfer(Q);V===n.FLOAT&&(te=n.RGBA32F),V===n.HALF_FLOAT&&(te=n.RGBA16F),V===n.UNSIGNED_BYTE&&(te=Ee===ht?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function g(P,R){let V;return P?R===null||R===Xo||R===qo?V=n.DEPTH24_STENCIL8:R===Rr?V=n.DEPTH32F_STENCIL8:R===lu&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Xo||R===qo?V=n.DEPTH_COMPONENT24:R===Rr?V=n.DEPTH_COMPONENT32F:R===lu&&(V=n.DEPTH_COMPONENT16),V}function S(P,R){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ri&&P.minFilter!==vi?Math.log2(Math.max(R.width,R.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?R.mipmaps.length:1}function T(P){const R=P.target;R.removeEventListener("dispose",T),w(R),R.isVideoTexture&&u.delete(R)}function A(P){const R=P.target;R.removeEventListener("dispose",A),E(R)}function w(P){const R=i.get(P);if(R.__webglInit===void 0)return;const V=P.source,Q=f.get(V);if(Q){const ee=Q[R.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(P),Object.keys(Q).length===0&&f.delete(V)}i.remove(P)}function C(P){const R=i.get(P);n.deleteTexture(R.__webglTexture);const V=P.source,Q=f.get(V);delete Q[R.__cacheKey],o.memory.textures--}function E(P){const R=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(R.__webglFramebuffer[Q]))for(let ee=0;ee<R.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(R.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(R.__webglFramebuffer[Q]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[Q])}else{if(Array.isArray(R.__webglFramebuffer))for(let Q=0;Q<R.__webglFramebuffer.length;Q++)n.deleteFramebuffer(R.__webglFramebuffer[Q]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Q=0;Q<R.__webglColorRenderbuffer.length;Q++)R.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[Q]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const V=P.textures;for(let Q=0,ee=V.length;Q<ee;Q++){const te=i.get(V[Q]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(V[Q])}i.remove(P)}let M=0;function N(){M=0}function z(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function k(P){const R=[];return R.push(P.wrapS),R.push(P.wrapT),R.push(P.wrapR||0),R.push(P.magFilter),R.push(P.minFilter),R.push(P.anisotropy),R.push(P.internalFormat),R.push(P.format),R.push(P.type),R.push(P.generateMipmaps),R.push(P.premultiplyAlpha),R.push(P.flipY),R.push(P.unpackAlignment),R.push(P.colorSpace),R.join()}function j(P,R){const V=i.get(P);if(P.isVideoTexture&&Be(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(V,P,R);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+R)}function X(P,R){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Ve(V,P,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+R)}function G(P,R){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Ve(V,P,R);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+R)}function q(P,R){const V=i.get(P);if(P.version>0&&V.__version!==P.version){W(V,P,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+R)}const D={[mh]:n.REPEAT,[Ms]:n.CLAMP_TO_EDGE,[_h]:n.MIRRORED_REPEAT},Y={[ri]:n.NEAREST,[Zw]:n.NEAREST_MIPMAP_NEAREST,[Bl]:n.NEAREST_MIPMAP_LINEAR,[vi]:n.LINEAR,[Tf]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},Z={[dT]:n.NEVER,[vT]:n.ALWAYS,[hT]:n.LESS,[py]:n.LEQUAL,[pT]:n.EQUAL,[gT]:n.GEQUAL,[mT]:n.GREATER,[_T]:n.NOTEQUAL};function ie(P,R){if(R.type===Rr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===vi||R.magFilter===Tf||R.magFilter===Bl||R.magFilter===Es||R.minFilter===vi||R.minFilter===Tf||R.minFilter===Bl||R.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,D[R.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,D[R.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,D[R.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Y[R.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Y[R.minFilter]),R.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Z[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ri||R.minFilter!==Bl&&R.minFilter!==Es||R.type===Rr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function ve(P,R){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,R.addEventListener("dispose",T));const Q=R.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const te=k(R);if(te!==P.__cacheKey){ee[te]===void 0&&(ee[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[te].usedTimes++;const Ee=ee[P.__cacheKey];Ee!==void 0&&(ee[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(R)),P.__cacheKey=te,P.__webglTexture=ee[te].texture}return V}function Ve(P,R,V){let Q=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Q=n.TEXTURE_3D);const ee=ve(P,R),te=R.source;t.bindTexture(Q,P.__webglTexture,n.TEXTURE0+V);const Ee=i.get(te);if(te.version!==Ee.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const ce=rt.getPrimaries(rt.workingColorSpace),ue=R.colorSpace===Mr?null:rt.getPrimaries(R.colorSpace),Oe=R.colorSpace===Mr||ce===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let re=_(R.image,!1,r.maxTextureSize);re=Le(R,re);const Se=s.convert(R.format,R.colorSpace),Ge=s.convert(R.type);let be=v(R.internalFormat,Se,Ge,R.colorSpace,R.isVideoTexture);ie(Q,R);let fe;const ke=R.mipmaps,je=R.isVideoTexture!==!0,Pt=Ee.__version===void 0||ee===!0,L=te.dataReady,he=S(R,re);if(R.isDepthTexture)be=g(R.format===$o,R.type),Pt&&(je?t.texStorage2D(n.TEXTURE_2D,1,be,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,be,re.width,re.height,0,Se,Ge,null));else if(R.isDataTexture)if(ke.length>0){je&&Pt&&t.texStorage2D(n.TEXTURE_2D,he,be,ke[0].width,ke[0].height);for(let $=0,K=ke.length;$<K;$++)fe=ke[$],je?L&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,fe.width,fe.height,Se,Ge,fe.data):t.texImage2D(n.TEXTURE_2D,$,be,fe.width,fe.height,0,Se,Ge,fe.data);R.generateMipmaps=!1}else je?(Pt&&t.texStorage2D(n.TEXTURE_2D,he,be,re.width,re.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Se,Ge,re.data)):t.texImage2D(n.TEXTURE_2D,0,be,re.width,re.height,0,Se,Ge,re.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){je&&Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,be,ke[0].width,ke[0].height,re.depth);for(let $=0,K=ke.length;$<K;$++)if(fe=ke[$],R.format!==Ii)if(Se!==null)if(je){if(L)if(R.layerUpdates.size>0){for(const oe of R.layerUpdates){const Pe=fe.width*fe.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,oe,fe.width,fe.height,1,Se,fe.data.slice(Pe*oe,Pe*(oe+1)),0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,re.depth,Se,fe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,be,fe.width,fe.height,re.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,fe.width,fe.height,re.depth,Se,Ge,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,be,fe.width,fe.height,re.depth,0,Se,Ge,fe.data)}else{je&&Pt&&t.texStorage2D(n.TEXTURE_2D,he,be,ke[0].width,ke[0].height);for(let $=0,K=ke.length;$<K;$++)fe=ke[$],R.format!==Ii?Se!==null?je?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,fe.width,fe.height,Se,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,$,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?L&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,fe.width,fe.height,Se,Ge,fe.data):t.texImage2D(n.TEXTURE_2D,$,be,fe.width,fe.height,0,Se,Ge,fe.data)}else if(R.isDataArrayTexture)if(je){if(Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,be,re.width,re.height,re.depth),L)if(R.layerUpdates.size>0){let $;switch(Ge){case n.UNSIGNED_BYTE:switch(Se){case n.ALPHA:$=1;break;case n.LUMINANCE:$=1;break;case n.LUMINANCE_ALPHA:$=2;break;case n.RGB:$=3;break;case n.RGBA:$=4;break;default:throw new Error(`Unknown texel size for format ${Se}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:$=1;break;default:throw new Error(`Unknown texel size for type ${Ge}.`)}const K=re.width*re.height*$;for(const oe of R.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,re.width,re.height,1,Se,Ge,re.data.slice(K*oe,K*(oe+1)));R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Ge,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,Se,Ge,re.data);else if(R.isData3DTexture)je?(Pt&&t.texStorage3D(n.TEXTURE_3D,he,be,re.width,re.height,re.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Ge,re.data)):t.texImage3D(n.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,Se,Ge,re.data);else if(R.isFramebufferTexture){if(Pt)if(je)t.texStorage2D(n.TEXTURE_2D,he,be,re.width,re.height);else{let $=re.width,K=re.height;for(let oe=0;oe<he;oe++)t.texImage2D(n.TEXTURE_2D,oe,be,$,K,0,Se,Ge,null),$>>=1,K>>=1}}else if(ke.length>0){if(je&&Pt){const $=Ut(ke[0]);t.texStorage2D(n.TEXTURE_2D,he,be,$.width,$.height)}for(let $=0,K=ke.length;$<K;$++)fe=ke[$],je?L&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Se,Ge,fe):t.texImage2D(n.TEXTURE_2D,$,be,Se,Ge,fe);R.generateMipmaps=!1}else if(je){if(Pt){const $=Ut(re);t.texStorage2D(n.TEXTURE_2D,he,be,$.width,$.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ge,re)}else t.texImage2D(n.TEXTURE_2D,0,be,Se,Ge,re);m(R)&&d(Q),Ee.__version=te.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function W(P,R,V){if(R.image.length!==6)return;const Q=ve(P,R),ee=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const te=i.get(ee);if(ee.version!==te.__version||Q===!0){t.activeTexture(n.TEXTURE0+V);const Ee=rt.getPrimaries(rt.workingColorSpace),ce=R.colorSpace===Mr?null:rt.getPrimaries(R.colorSpace),ue=R.colorSpace===Mr||Ee===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Oe=R.isCompressedTexture||R.image[0].isCompressedTexture,re=R.image[0]&&R.image[0].isDataTexture,Se=[];for(let K=0;K<6;K++)!Oe&&!re?Se[K]=_(R.image[K],!0,r.maxCubemapSize):Se[K]=re?R.image[K].image:R.image[K],Se[K]=Le(R,Se[K]);const Ge=Se[0],be=s.convert(R.format,R.colorSpace),fe=s.convert(R.type),ke=v(R.internalFormat,be,fe,R.colorSpace),je=R.isVideoTexture!==!0,Pt=te.__version===void 0||Q===!0,L=ee.dataReady;let he=S(R,Ge);ie(n.TEXTURE_CUBE_MAP,R);let $;if(Oe){je&&Pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,ke,Ge.width,Ge.height);for(let K=0;K<6;K++){$=Se[K].mipmaps;for(let oe=0;oe<$.length;oe++){const Pe=$[oe];R.format!==Ii?be!==null?je?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Pe.width,Pe.height,be,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Pe.width,Pe.height,be,fe,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,ke,Pe.width,Pe.height,0,be,fe,Pe.data)}}}else{if($=R.mipmaps,je&&Pt){$.length>0&&he++;const K=Ut(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,ke,K.width,K.height)}for(let K=0;K<6;K++)if(re){je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se[K].width,Se[K].height,be,fe,Se[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,Se[K].width,Se[K].height,0,be,fe,Se[K].data);for(let oe=0;oe<$.length;oe++){const et=$[oe].image[K].image;je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,et.width,et.height,be,fe,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,ke,et.width,et.height,0,be,fe,et.data)}}else{je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,fe,Se[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,be,fe,Se[K]);for(let oe=0;oe<$.length;oe++){const Pe=$[oe];je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,be,fe,Pe.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,ke,be,fe,Pe.image[K])}}}m(R)&&d(n.TEXTURE_CUBE_MAP),te.__version=ee.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function J(P,R,V,Q,ee,te){const Ee=s.convert(V.format,V.colorSpace),ce=s.convert(V.type),ue=v(V.internalFormat,Ee,ce,V.colorSpace);if(!i.get(R).__hasExternalTextures){const re=Math.max(1,R.width>>te),Se=Math.max(1,R.height>>te);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,ue,re,Se,R.depth,0,Ee,ce,null):t.texImage2D(ee,te,ue,re,Se,0,Ee,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ze(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,i.get(V).__webglTexture,0,Te(R)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,i.get(V).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(P,R,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),R.depthBuffer){const Q=R.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,te=g(R.stencilBuffer,ee),Ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Te(R);Ze(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,te,R.width,R.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,te,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,P)}else{const Q=R.textures;for(let ee=0;ee<Q.length;ee++){const te=Q[ee],Ee=s.convert(te.format,te.colorSpace),ce=s.convert(te.type),ue=v(te.internalFormat,Ee,ce,te.colorSpace),Oe=Te(R);V&&Ze(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ue,R.width,R.height):Ze(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,ue,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,ue,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(P,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),j(R.depthTexture,0);const Q=i.get(R.depthTexture).__webglTexture,ee=Te(R);if(R.depthTexture.format===Po)Ze(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(R.depthTexture.format===$o)Ze(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ze(P){const R=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!R.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ae(R.__webglFramebuffer,P)}else if(V){R.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[Q]),R.__webglDepthbuffer[Q]=n.createRenderbuffer(),de(R.__webglDepthbuffer[Q],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=n.createRenderbuffer(),de(R.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(P,R,V){const Q=i.get(P);R!==void 0&&J(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ze(P)}function $e(P){const R=P.texture,V=i.get(P),Q=i.get(R);P.addEventListener("dispose",A);const ee=P.textures,te=P.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=R.version,o.memory.textures++),te){V.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer[ce]=[];for(let ue=0;ue<R.mipmaps.length;ue++)V.__webglFramebuffer[ce][ue]=n.createFramebuffer()}else V.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer=[];for(let ce=0;ce<R.mipmaps.length;ce++)V.__webglFramebuffer[ce]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ce=0,ue=ee.length;ce<ue;ce++){const Oe=i.get(ee[ce]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ze(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const ue=ee[ce];V.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ce]);const Oe=s.convert(ue.format,ue.colorSpace),re=s.convert(ue.type),Se=v(ue.internalFormat,Oe,re,ue.colorSpace,P.isXRRenderTarget===!0),Ge=Te(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Se,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,V.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),de(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(n.TEXTURE_CUBE_MAP,R);for(let ce=0;ce<6;ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)J(V.__webglFramebuffer[ce][ue],P,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else J(V.__webglFramebuffer[ce],P,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(R)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,ue=ee.length;ce<ue;ce++){const Oe=ee[ce],re=i.get(Oe);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),ie(n.TEXTURE_2D,Oe),J(V.__webglFramebuffer,P,Oe,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Oe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),ie(ce,R),R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)J(V.__webglFramebuffer[ue],P,R,n.COLOR_ATTACHMENT0,ce,ue);else J(V.__webglFramebuffer,P,R,n.COLOR_ATTACHMENT0,ce,0);m(R)&&d(ce),t.unbindTexture()}P.depthBuffer&&ze(P)}function I(P){const R=P.textures;for(let V=0,Q=R.length;V<Q;V++){const ee=R[V];if(m(ee)){const te=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(ee).__webglTexture;t.bindTexture(te,Ee),d(te),t.unbindTexture()}}}const qe=[],We=[];function gt(P){if(P.samples>0){if(Ze(P)===!1){const R=P.textures,V=P.width,Q=P.height;let ee=n.COLOR_BUFFER_BIT;const te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(P),ce=R.length>1;if(ce)for(let ue=0;ue<R.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ue=0;ue<R.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ue]);const Oe=i.get(R[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,V,Q,0,0,V,Q,ee,n.NEAREST),l===!0&&(qe.length=0,We.length=0,qe.push(n.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(qe.push(te),We.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<R.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ue]);const Oe=i.get(R[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const R=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Te(P){return Math.min(r.maxSamples,P.samples)}function Ze(P){const R=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Be(P){const R=o.render.frame;u.get(P)!==R&&(u.set(P,R),P.update())}function Le(P,R){const V=P.colorSpace,Q=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==es&&V!==Mr&&(rt.getTransfer(V)===ht?(Q!==Ii||ee!==$r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),R}function Ut(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=Ue,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ze}function xb(n,e){function t(i,r=Mr){let s;const o=rt.getTransfer(r);if(i===$r)return n.UNSIGNED_BYTE;if(i===cy)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uy)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eT)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qw)return n.BYTE;if(i===Jw)return n.SHORT;if(i===lu)return n.UNSIGNED_SHORT;if(i===ly)return n.INT;if(i===Xo)return n.UNSIGNED_INT;if(i===Rr)return n.FLOAT;if(i===Ou)return n.HALF_FLOAT;if(i===tT)return n.ALPHA;if(i===nT)return n.RGB;if(i===Ii)return n.RGBA;if(i===iT)return n.LUMINANCE;if(i===rT)return n.LUMINANCE_ALPHA;if(i===Po)return n.DEPTH_COMPONENT;if(i===$o)return n.DEPTH_STENCIL;if(i===sT)return n.RED;if(i===fy)return n.RED_INTEGER;if(i===oT)return n.RG;if(i===dy)return n.RG_INTEGER;if(i===hy)return n.RGBA_INTEGER;if(i===Af||i===Cf||i===Rf||i===bf)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Af)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Af)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===M_||i===E_||i===w_||i===T_)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===M_)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===E_)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===w_)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===T_)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===A_||i===C_||i===R_)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===A_||i===C_)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===R_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===b_||i===P_||i===N_||i===L_||i===D_||i===I_||i===U_||i===O_||i===k_||i===F_||i===z_||i===B_||i===H_||i===V_)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===b_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===P_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===N_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===L_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===D_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===I_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===U_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===O_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===k_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===F_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===z_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===B_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===H_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===V_)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pf||i===G_||i===W_)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pf)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===G_)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===W_)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===aT||i===j_||i===X_||i===q_)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===j_)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===X_)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===q_)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class yb extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let lc=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Sb={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eb=`
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

}`;class wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yr({vertexShader:Mb,fragmentShader:Eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ui(new Fu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Tb extends Jo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,x=null;const _=new wb,m=t.getContextAttributes();let d=null,v=null;const g=[],S=[],T=new Ke;let A=null;const w=new ei;w.layers.enable(1),w.viewport=new Kt;const C=new ei;C.layers.enable(2),C.viewport=new Kt;const E=[w,C],M=new yb;M.layers.enable(1),M.layers.enable(2);let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=g[W];return J===void 0&&(J=new id,g[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=g[W];return J===void 0&&(J=new id,g[W]=J),J.getGripSpace()},this.getHand=function(W){let J=g[W];return J===void 0&&(J=new id,g[W]=J),J.getHandSpace()};function k(W){const J=S.indexOf(W.inputSource);if(J===-1)return;const de=g[J];de!==void 0&&(de.update(W.inputSource,W.frame,c||o),de.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let W=0;W<g.length;W++){const J=S[W];J!==null&&(S[W]=null,g[W].disconnect(J))}N=null,z=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,v=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Us(p.framebufferWidth,p.framebufferHeight,{format:Ii,type:$r,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,de=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?$o:Po,de=m.stencil?qo:Xo);const ze={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Us(f.textureWidth,f.textureHeight,{format:Ii,type:$r,depthTexture:new Ry(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(W){for(let J=0;J<W.removed.length;J++){const de=W.removed[J],ae=S.indexOf(de);ae>=0&&(S[ae]=null,g[ae].disconnect(de))}for(let J=0;J<W.added.length;J++){const de=W.added[J];let ae=S.indexOf(de);if(ae===-1){for(let Ue=0;Ue<g.length;Ue++)if(Ue>=S.length){S.push(de),ae=Ue;break}else if(S[Ue]===null){S[Ue]=de,ae=Ue;break}if(ae===-1)break}const ze=g[ae];ze&&ze.connect(de)}}const G=new F,q=new F;function D(W,J,de){G.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);const ae=G.distanceTo(q),ze=J.projectionMatrix.elements,Ue=de.projectionMatrix.elements,$e=ze[14]/(ze[10]-1),I=ze[14]/(ze[10]+1),qe=(ze[9]+1)/ze[5],We=(ze[9]-1)/ze[5],gt=(ze[8]-1)/ze[0],Te=(Ue[8]+1)/Ue[0],Ze=$e*gt,Be=$e*Te,Le=ae/(-gt+Te),Ut=Le*-gt;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ut),W.translateZ(Le),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const P=$e+Le,R=I+Le,V=Ze-Ut,Q=Be+(ae-Ut),ee=qe*I/R*P,te=We*I/R*P;W.projectionMatrix.makePerspective(V,Q,ee,te,P,R),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),M.near=C.near=w.near=W.near,M.far=C.far=w.far=W.far,(N!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,z=M.far,w.near=N,w.far=z,C.near=N,C.far=z,w.updateProjectionMatrix(),C.updateProjectionMatrix(),W.updateProjectionMatrix());const J=W.parent,de=M.cameras;Y(M,J);for(let ae=0;ae<de.length;ae++)Y(de[ae],J);de.length===2?D(M,w,C):M.projectionMatrix.copy(w.projectionMatrix),Z(W,M,J)};function Z(W,J,de){de===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=gh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ie=null;function ve(W,J){if(u=J.getViewerPose(c||o),x=J,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;de.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Ue=0;Ue<de.length;Ue++){const $e=de[Ue];let I=null;if(p!==null)I=p.getViewport($e);else{const We=h.getViewSubImage(f,$e);I=We.viewport,Ue===0&&(e.setRenderTargetTextures(v,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(v))}let qe=E[Ue];qe===void 0&&(qe=new ei,qe.layers.enable(Ue),qe.viewport=new Kt,E[Ue]=qe),qe.matrix.fromArray($e.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray($e.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(I.x,I.y,I.width,I.height),Ue===0&&(M.matrix.copy(qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(qe)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const Ue=h.getDepthInformation(de[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,r.renderState)}}for(let de=0;de<g.length;de++){const ae=S[de],ze=g[de];ae!==null&&ze!==void 0&&ze.update(ae,J,c||o)}ie&&ie(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const Ve=new Cy;Ve.setAnimationLoop(ve),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}const us=new ar,Ab=new It;function Cb(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ey(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,g):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===bn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===bn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),g=v.envMap,S=v.envMapRotation;g&&(m.envMap.value=g,us.copy(S),us.x*=-1,us.y*=-1,us.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(us)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(x(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const T=g.program;i.updateUBOMapping(v,T);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function u(v){const g=h();v.__bindingPointIndex=g;const S=n.createBuffer(),T=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],S=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let A=0,w=S.length;A<w;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,M=C.length;E<M;E++){const N=C[E];if(p(N,A,E,T)===!0){const z=N.__offset,k=Array.isArray(N.value)?N.value:[N.value];let j=0;for(let X=0;X<k.length;X++){const G=k[X],q=_(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,z+j,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,j),j+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,g,S,T){const A=v.value,w=g+"_"+S;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{const C=T[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return T[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function x(v){const g=v.uniforms;let S=0;const T=16;for(let w=0,C=g.length;w<C;w++){const E=Array.isArray(g[w])?g[w]:[g[w]];for(let M=0,N=E.length;M<N;M++){const z=E[M],k=Array.isArray(z.value)?z.value:[z.value];for(let j=0,X=k.length;j<X;j++){const G=k[j],q=_(G),D=S%T;D!==0&&T-D<q.boundary&&(S+=T-D),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=q.storage}}}const A=S%T;return A>0&&(S+=T-A),v.__size=S,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class bb{constructor(e={}){const{canvas:t=yT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ri,this.toneMapping=Hr,this.toneMappingExposure=1;const g=this;let S=!1,T=0,A=0,w=null,C=-1,E=null;const M=new Kt,N=new Kt;let z=null;const k=new nt(0);let j=0,X=t.width,G=t.height,q=1,D=null,Y=null;const Z=new Kt(0,0,X,G),ie=new Kt(0,0,X,G);let ve=!1;const Ve=new Ay;let W=!1,J=!1;const de=new It,ae=new F,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function $e(){return w===null?q:1}let I=i;function qe(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lp}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",K,!1),I===null){const U="webgl2";if(I=qe(U,b),I===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let We,gt,Te,Ze,Be,Le,Ut,P,R,V,Q,ee,te,Ee,ce,ue,Oe,re,Se,Ge,be,fe,ke,je;function Pt(){We=new kC(I),We.init(),fe=new xb(I,We),gt=new PC(I,We,e,fe),Te=new gb(I),Ze=new BC(I),Be=new ib,Le=new vb(I,We,Te,Be,gt,fe,Ze),Ut=new LC(g),P=new OC(g),R=new XT(I),ke=new RC(I,R),V=new FC(I,R,Ze,ke),Q=new VC(I,V,R,Ze),Se=new HC(I,gt,Le),ue=new NC(Be),ee=new nb(g,Ut,P,We,gt,ke,ue),te=new Cb(g,Be),Ee=new sb,ce=new fb(We),re=new CC(g,Ut,P,Te,Q,f,l),Oe=new _b(g,Q,gt),je=new Rb(I,Ze,gt,Te),Ge=new bC(I,We,Ze),be=new zC(I,We,Ze),Ze.programs=ee.programs,g.capabilities=gt,g.extensions=We,g.properties=Be,g.renderLists=Ee,g.shadowMap=Oe,g.state=Te,g.info=Ze}Pt();const L=new Tb(g,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=We.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=We.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(X,G,!1))},this.getSize=function(b){return b.set(X,G)},this.setSize=function(b,U,B=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,G=U,t.width=Math.floor(b*q),t.height=Math.floor(U*q),B===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(X*q,G*q).floor()},this.setDrawingBufferSize=function(b,U,B){X=b,G=U,q=B,t.width=Math.floor(b*B),t.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,U,B,H){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,U,B,H),Te.viewport(M.copy(Z).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,U,B,H){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,U,B,H),Te.scissor(N.copy(ie).multiplyScalar(q).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(b){Te.setScissorTest(ve=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(b=!0,U=!0,B=!0){let H=0;if(b){let O=!1;if(w!==null){const se=w.texture.format;O=se===hy||se===dy||se===fy}if(O){const se=w.texture.type,pe=se===$r||se===Xo||se===lu||se===qo||se===cy||se===uy,_e=re.getClearColor(),xe=re.getClearAlpha(),Ae=_e.r,Re=_e.g,we=_e.b;pe?(p[0]=Ae,p[1]=Re,p[2]=we,p[3]=xe,I.clearBufferuiv(I.COLOR,0,p)):(x[0]=Ae,x[1]=Re,x[2]=we,x[3]=xe,I.clearBufferiv(I.COLOR,0,x))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),B&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Ee.dispose(),ce.dispose(),Be.dispose(),Ut.dispose(),P.dispose(),Q.dispose(),ke.dispose(),je.dispose(),ee.dispose(),L.dispose(),L.removeEventListener("sessionstart",Ei),L.removeEventListener("sessionend",wi),ts.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Ze.autoReset,U=Oe.enabled,B=Oe.autoUpdate,H=Oe.needsUpdate,O=Oe.type;Pt(),Ze.autoReset=b,Oe.enabled=U,Oe.autoUpdate=B,Oe.needsUpdate=H,Oe.type=O}function K(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const U=b.target;U.removeEventListener("dispose",oe),Pe(U)}function Pe(b){et(b),Be.remove(b)}function et(b){const U=Be.get(b).programs;U!==void 0&&(U.forEach(function(B){ee.releaseProgram(B)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,H,O,se){U===null&&(U=ze);const pe=O.isMesh&&O.matrixWorld.determinant()<0,_e=Fy(b,U,B,H,O);Te.setMaterial(H,pe);let xe=B.index,Ae=1;if(H.wireframe===!0){if(xe=V.getWireframeAttribute(B),xe===void 0)return;Ae=2}const Re=B.drawRange,we=B.attributes.position;let tt=Re.start*Ae,Tt=(Re.start+Re.count)*Ae;se!==null&&(tt=Math.max(tt,se.start*Ae),Tt=Math.min(Tt,(se.start+se.count)*Ae)),xe!==null?(tt=Math.max(tt,0),Tt=Math.min(Tt,xe.count)):we!=null&&(tt=Math.max(tt,0),Tt=Math.min(Tt,we.count));const At=Tt-tt;if(At<0||At===1/0)return;ke.setup(O,H,_e,B,xe);let Ln,it=Ge;if(xe!==null&&(Ln=R.get(xe),it=be,it.setIndex(Ln)),O.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*$e()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(O.isLine){let Me=H.linewidth;Me===void 0&&(Me=1),Te.setLineWidth(Me*$e()),O.isLineSegments?it.setMode(I.LINES):O.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else O.isPoints?it.setMode(I.POINTS):O.isSprite&&it.setMode(I.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?it.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)it.renderInstances(tt,At,O.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,un=Math.min(B.instanceCount,Me);it.renderInstances(tt,At,un)}else it.render(tt,At)};function Nt(b,U,B){b.transparent===!0&&b.side===Ki&&b.forceSinglePass===!1?(b.side=bn,b.needsUpdate=!0,yl(b,U,B),b.side=qr,b.needsUpdate=!0,yl(b,U,B),b.side=Ki):yl(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),m=ce.get(B),m.init(U),v.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),b!==B&&b.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const H=new Set;return b.traverse(function(O){const se=O.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const _e=se[pe];Nt(_e,B,O),H.add(_e)}else Nt(se,B,O),H.add(se)}),v.pop(),m=null,H},this.compileAsync=function(b,U,B=null){const H=this.compile(b,U,B);return new Promise(O=>{function se(){if(H.forEach(function(pe){Be.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){O(b);return}setTimeout(se,10)}We.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Gt=null;function ot(b){Gt&&Gt(b)}function Ei(){ts.stop()}function wi(){ts.start()}const ts=new Cy;ts.setAnimationLoop(ot),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(b){Gt=b,L.setAnimationLoop(b),b===null?ts.stop():ts.start()},L.addEventListener("sessionstart",Ei),L.addEventListener("sessionend",wi),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(U),U=L.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,U,w),m=ce.get(b,v.length),m.init(U),v.push(m),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ve.setFromProjectionMatrix(de),J=this.localClippingEnabled,W=ue.init(this.clippingPlanes,J),_=Ee.get(b,d.length),_.init(),d.push(_),L.enabled===!0&&L.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&Bu(se,U,-1/0,g.sortObjects)}Bu(b,U,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(D,Y),Ue=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Ue&&re.addToRenderList(_,b),this.info.render.frame++,W===!0&&ue.beginShadows();const B=m.state.shadowsArray;Oe.render(B,b,U),W===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,O=_.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(O.length>0)for(let pe=0,_e=se.length;pe<_e;pe++){const xe=se[pe];Bp(H,O,b,xe)}Ue&&re.render(b);for(let pe=0,_e=se.length;pe<_e;pe++){const xe=se[pe];zp(_,b,xe,xe.viewport)}}else O.length>0&&Bp(H,O,b,U),Ue&&re.render(b),zp(_,b,U);w!==null&&(Le.updateMultisampleRenderTarget(w),Le.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(g,b,U),ke.resetDefaultState(),C=-1,E=null,v.pop(),v.length>0?(m=v[v.length-1],W===!0&&ue.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Bu(b,U,B,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ve.intersectsSprite(b)){H&&ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const pe=Q.update(b),_e=b.material;_e.visible&&_.push(b,pe,_e,B,ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ve.intersectsObject(b))){const pe=Q.update(b),_e=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ae.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ae.copy(pe.boundingSphere.center)),ae.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(_e)){const xe=pe.groups;for(let Ae=0,Re=xe.length;Ae<Re;Ae++){const we=xe[Ae],tt=_e[we.materialIndex];tt&&tt.visible&&_.push(b,pe,tt,B,ae.z,we)}}else _e.visible&&_.push(b,pe,_e,B,ae.z,null)}}const se=b.children;for(let pe=0,_e=se.length;pe<_e;pe++)Bu(se[pe],U,B,H)}function zp(b,U,B,H){const O=b.opaque,se=b.transmissive,pe=b.transparent;m.setupLightsView(B),W===!0&&ue.setGlobalState(g.clippingPlanes,B),H&&Te.viewport(M.copy(H)),O.length>0&&xl(O,U,B),se.length>0&&xl(se,U,B),pe.length>0&&xl(pe,U,B),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Bp(b,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Us(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ou:$r,minFilter:Es,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const se=m.state.transmissionRenderTarget[H.id],pe=H.viewport||M;se.setSize(pe.z,pe.w);const _e=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(k),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),Ue?re.render(B):g.clear();const xe=g.toneMapping;g.toneMapping=Hr;const Ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),W===!0&&ue.setGlobalState(g.clippingPlanes,H),xl(b,B,H),Le.updateMultisampleRenderTarget(se),Le.updateRenderTargetMipmap(se),We.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let we=0,tt=U.length;we<tt;we++){const Tt=U[we],At=Tt.object,Ln=Tt.geometry,it=Tt.material,Me=Tt.group;if(it.side===Ki&&At.layers.test(H.layers)){const un=it.side;it.side=bn,it.needsUpdate=!0,Hp(At,B,H,Ln,it,Me),it.side=un,it.needsUpdate=!0,Re=!0}}Re===!0&&(Le.updateMultisampleRenderTarget(se),Le.updateRenderTargetMipmap(se))}g.setRenderTarget(_e),g.setClearColor(k,j),Ae!==void 0&&(H.viewport=Ae),g.toneMapping=xe}function xl(b,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,se=b.length;O<se;O++){const pe=b[O],_e=pe.object,xe=pe.geometry,Ae=H===null?pe.material:H,Re=pe.group;_e.layers.test(B.layers)&&Hp(_e,U,B,xe,Ae,Re)}}function Hp(b,U,B,H,O,se){b.onBeforeRender(g,U,B,H,O,se),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(g,U,B,H,b,se),O.transparent===!0&&O.side===Ki&&O.forceSinglePass===!1?(O.side=bn,O.needsUpdate=!0,g.renderBufferDirect(B,U,H,O,b,se),O.side=qr,O.needsUpdate=!0,g.renderBufferDirect(B,U,H,O,b,se),O.side=Ki):g.renderBufferDirect(B,U,H,O,b,se),b.onAfterRender(g,U,B,H,O,se)}function yl(b,U,B){U.isScene!==!0&&(U=ze);const H=Be.get(b),O=m.state.lights,se=m.state.shadowsArray,pe=O.state.version,_e=ee.getParameters(b,O.state,se,U,B),xe=ee.getProgramCacheKey(_e);let Ae=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?P:Ut).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",oe),Ae=new Map,H.programs=Ae);let Re=Ae.get(xe);if(Re!==void 0){if(H.currentProgram===Re&&H.lightsStateVersion===pe)return Gp(b,_e),Re}else _e.uniforms=ee.getUniforms(b),b.onBuild(B,_e,g),b.onBeforeCompile(_e,g),Re=ee.acquireProgram(_e,xe),Ae.set(xe,Re),H.uniforms=_e.uniforms;const we=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=ue.uniform),Gp(b,_e),H.needsLights=By(b),H.lightsStateVersion=pe,H.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Re,H.uniformsList=null,Re}function Vp(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Rc.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Gp(b,U){const B=Be.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Fy(b,U,B,H,O){U.isScene!==!0&&(U=ze),Le.resetTextureUnits();const se=U.fog,pe=H.isMeshStandardMaterial?U.environment:null,_e=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:es,xe=(H.isMeshStandardMaterial?P:Ut).get(H.envMap||pe),Ae=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,Tt=!!B.morphAttributes.color;let At=Hr;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(At=g.toneMapping);const Ln=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=Ln!==void 0?Ln.length:0,Me=Be.get(H),un=m.state.lights;if(W===!0&&(J===!0||b!==E)){const Yn=b===E&&H.id===C;ue.setState(H,b,Yn)}let at=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==un.state.version||Me.outputColorSpace!==_e||O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null||Me.envMap!==xe||H.fog===!0&&Me.fog!==se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ue.numPlanes||Me.numIntersection!==ue.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==Re||Me.morphTargets!==we||Me.morphNormals!==tt||Me.morphColors!==Tt||Me.toneMapping!==At||Me.morphTargetsCount!==it)&&(at=!0):(at=!0,Me.__version=H.version);let zi=Me.currentProgram;at===!0&&(zi=yl(H,U,O));let Sl=!1,ns=!1,Hu=!1;const Wt=zi.getUniforms(),cr=Me.uniforms;if(Te.useProgram(zi.program)&&(Sl=!0,ns=!0,Hu=!0),H.id!==C&&(C=H.id,ns=!0),Sl||E!==b){Wt.setValue(I,"projectionMatrix",b.projectionMatrix),Wt.setValue(I,"viewMatrix",b.matrixWorldInverse);const Yn=Wt.map.cameraPosition;Yn!==void 0&&Yn.setValue(I,ae.setFromMatrixPosition(b.matrixWorld)),gt.logarithmicDepthBuffer&&Wt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Wt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,ns=!0,Hu=!0)}if(O.isSkinnedMesh){Wt.setOptional(I,O,"bindMatrix"),Wt.setOptional(I,O,"bindMatrixInverse");const Yn=O.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Wt.setValue(I,"boneTexture",Yn.boneTexture,Le))}O.isBatchedMesh&&(Wt.setOptional(I,O,"batchingTexture"),Wt.setValue(I,"batchingTexture",O._matricesTexture,Le),Wt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Wt.setValue(I,"batchingColorTexture",O._colorsTexture,Le));const Vu=B.morphAttributes;if((Vu.position!==void 0||Vu.normal!==void 0||Vu.color!==void 0)&&Se.update(O,B,zi),(ns||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,Wt.setValue(I,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(cr.envMap.value=xe,cr.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(cr.envMapIntensity.value=U.environmentIntensity),ns&&(Wt.setValue(I,"toneMappingExposure",g.toneMappingExposure),Me.needsLights&&zy(cr,Hu),se&&H.fog===!0&&te.refreshFogUniforms(cr,se),te.refreshMaterialUniforms(cr,H,q,G,m.state.transmissionRenderTarget[b.id]),Rc.upload(I,Vp(Me),cr,Le)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Rc.upload(I,Vp(Me),cr,Le),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Wt.setValue(I,"center",O.center),Wt.setValue(I,"modelViewMatrix",O.modelViewMatrix),Wt.setValue(I,"normalMatrix",O.normalMatrix),Wt.setValue(I,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Yn=H.uniformsGroups;for(let Gu=0,Hy=Yn.length;Gu<Hy;Gu++){const Wp=Yn[Gu];je.update(Wp,zi),je.bind(Wp,zi)}}return zi}function zy(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function By(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,U,B){Be.get(b.texture).__webglTexture=U,Be.get(b.depthTexture).__webglTexture=B;const H=Be.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const B=Be.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){w=b,T=U,A=B;let H=!0,O=null,se=!1,pe=!1;if(b){const xe=Be.get(b);xe.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(I.FRAMEBUFFER,null),H=!1):xe.__webglFramebuffer===void 0?Le.setupRenderTarget(b):xe.__hasExternalTextures&&Le.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const Re=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?O=Re[U][B]:O=Re[U],se=!0):b.samples>0&&Le.useMultisampledRTT(b)===!1?O=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[B]:O=Re,M.copy(b.viewport),N.copy(b.scissor),z=b.scissorTest}else M.copy(Z).multiplyScalar(q).floor(),N.copy(ie).multiplyScalar(q).floor(),z=ve;if(Te.bindFramebuffer(I.FRAMEBUFFER,O)&&H&&Te.drawBuffers(b,O),Te.viewport(M),Te.scissor(N),Te.setScissorTest(z),se){const xe=Be.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,B)}else if(pe){const xe=Be.get(b.texture),Ae=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Ae)}C=-1},this.readRenderTargetPixels=function(b,U,B,H,O,se,pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Te.bindFramebuffer(I.FRAMEBUFFER,_e);try{const xe=b.texture,Ae=xe.format,Re=xe.type;if(!gt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&B>=0&&B<=b.height-O&&I.readPixels(U,B,H,O,fe.convert(Ae),fe.convert(Re),se)}finally{const xe=w!==null?Be.get(w).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,H,O,se,pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Te.bindFramebuffer(I.FRAMEBUFFER,_e);try{const xe=b.texture,Ae=xe.format,Re=xe.type;if(!gt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-H&&B>=0&&B<=b.height-O){const we=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(U,B,H,O,fe.convert(Ae),fe.convert(Re),0),I.flush();const tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await ST(I,tt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se)}finally{I.deleteBuffer(we),I.deleteSync(tt)}return se}}finally{const xe=w!==null?Be.get(w).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(b,U=null,B=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-B),O=Math.floor(b.image.width*H),se=Math.floor(b.image.height*H),pe=U!==null?U.x:0,_e=U!==null?U.y:0;Le.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,pe,_e,O,se),Te.unbindTexture()},this.copyTextureToTexture=function(b,U,B=null,H=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],U=arguments[2],O=arguments[3]||0,B=null);let se,pe,_e,xe,Ae,Re;B!==null?(se=B.max.x-B.min.x,pe=B.max.y-B.min.y,_e=B.min.x,xe=B.min.y):(se=b.image.width,pe=b.image.height,_e=0,xe=0),H!==null?(Ae=H.x,Re=H.y):(Ae=0,Re=0);const we=fe.convert(U.format),tt=fe.convert(U.type);Le.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Tt=I.getParameter(I.UNPACK_ROW_LENGTH),At=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ln=I.getParameter(I.UNPACK_SKIP_PIXELS),it=I.getParameter(I.UNPACK_SKIP_ROWS),Me=I.getParameter(I.UNPACK_SKIP_IMAGES),un=b.isCompressedTexture?b.mipmaps[O]:b.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,un.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,un.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_e),I.pixelStorei(I.UNPACK_SKIP_ROWS,xe),b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Ae,Re,se,pe,we,tt,un.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Ae,Re,un.width,un.height,we,un.data):I.texSubImage2D(I.TEXTURE_2D,O,Ae,Re,we,tt,un),I.pixelStorei(I.UNPACK_ROW_LENGTH,Tt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,it),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Me),O===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B=null,H=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,b=arguments[2],U=arguments[3],O=arguments[4]||0);let se,pe,_e,xe,Ae,Re,we,tt,Tt;const At=b.isCompressedTexture?b.mipmaps[O]:b.image;B!==null?(se=B.max.x-B.min.x,pe=B.max.y-B.min.y,_e=B.max.z-B.min.z,xe=B.min.x,Ae=B.min.y,Re=B.min.z):(se=At.width,pe=At.height,_e=At.depth,xe=0,Ae=0,Re=0),H!==null?(we=H.x,tt=H.y,Tt=H.z):(we=0,tt=0,Tt=0);const Ln=fe.convert(U.format),it=fe.convert(U.type);let Me;if(U.isData3DTexture)Le.setTexture3D(U,0),Me=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Le.setTexture2DArray(U,0),Me=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const un=I.getParameter(I.UNPACK_ROW_LENGTH),at=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zi=I.getParameter(I.UNPACK_SKIP_PIXELS),Sl=I.getParameter(I.UNPACK_SKIP_ROWS),ns=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Me,O,we,tt,Tt,se,pe,_e,Ln,it,At.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,O,we,tt,Tt,se,pe,_e,Ln,At.data):I.texSubImage3D(Me,O,we,tt,Tt,se,pe,_e,Ln,it,At),I.pixelStorei(I.UNPACK_ROW_LENGTH,un),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Sl),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ns),O===0&&U.generateMipmaps&&I.generateMipmap(Me),Te.unbindTexture()},this.initRenderTarget=function(b){Be.get(b).__webglFramebuffer===void 0&&Le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){T=0,A=0,w=null,Te.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Dp?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===ku?"display-p3":"srgb"}}class Pb extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Iy extends ea{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new F,mu=new F,Fg=new It,_a=new Ip,cc=new gl,rd=new F,zg=new F;class Nb extends pn{constructor(e=new ci,t=new Iy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)pu.fromBufferAttribute(t,r-1),mu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new Si(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(r),cc.radius+=s,e.ray.intersectsSphere(cc)===!1)return;Fg.copy(r).invert(),_a.copy(e.ray).applyMatrix4(Fg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){const d=u.getX(_),v=u.getX(_+1),g=uc(this,e,_a,l,d,v);g&&t.push(g)}if(this.isLineLoop){const _=u.getX(x-1),m=u.getX(p),d=uc(this,e,_a,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){const d=uc(this,e,_a,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=uc(this,e,_a,l,x-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(pu.fromBufferAttribute(o,r),mu.fromBufferAttribute(o,s),t.distanceSqToSegment(pu,mu,rd,zg)>i)return;rd.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(rd);if(!(l<e.near||l>e.far))return{distance:l,point:zg.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class Uy extends ea{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bg=new It,xh=new Ip,fc=new gl,dc=new F;class Lb extends pn{constructor(e=new ci,t=new Uy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(r),fc.radius+=s,e.ray.intersectsSphere(fc)===!1)return;Bg.copy(r).invert(),xh.copy(e.ray).applyMatrix4(Bg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=f,_=p;x<_;x++){const m=c.getX(x);dc.fromBufferAttribute(h,m),Hg(dc,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,_=p;x<_;x++)dc.fromBufferAttribute(h,x),Hg(dc,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hg(n,e,t,i,r,s,o){const a=xh.distanceSqToPoint(n);if(a<t){const l=new F;xh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class kp extends ci{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Si(s,3)),this.setAttribute("normal",new Si(s.slice(),3)),this.setAttribute("uv",new Si(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const g=new F,S=new F,T=new F;for(let A=0;A<t.length;A+=3)p(t[A+0],g),p(t[A+1],S),p(t[A+2],T),l(g,S,T,v)}function l(v,g,S,T){const A=T+1,w=[];for(let C=0;C<=A;C++){w[C]=[];const E=v.clone().lerp(S,C/A),M=g.clone().lerp(S,C/A),N=A-C;for(let z=0;z<=N;z++)z===0&&C===A?w[C][z]=E:w[C][z]=E.clone().lerp(M,z/N)}for(let C=0;C<A;C++)for(let E=0;E<2*(A-C)-1;E++){const M=Math.floor(E/2);E%2===0?(f(w[C][M+1]),f(w[C+1][M]),f(w[C][M])):(f(w[C][M+1]),f(w[C+1][M+1]),f(w[C+1][M]))}}function c(v){const g=new F;for(let S=0;S<s.length;S+=3)g.x=s[S+0],g.y=s[S+1],g.z=s[S+2],g.normalize().multiplyScalar(v),s[S+0]=g.x,s[S+1]=g.y,s[S+2]=g.z}function u(){const v=new F;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];const S=m(v)/2/Math.PI+.5,T=d(v)/Math.PI+.5;o.push(S,1-T)}x(),h()}function h(){for(let v=0;v<o.length;v+=6){const g=o[v+0],S=o[v+2],T=o[v+4],A=Math.max(g,S,T),w=Math.min(g,S,T);A>.9&&w<.1&&(g<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,g){const S=v*3;g.x=e[S+0],g.y=e[S+1],g.z=e[S+2]}function x(){const v=new F,g=new F,S=new F,T=new F,A=new Ke,w=new Ke,C=new Ke;for(let E=0,M=0;E<s.length;E+=9,M+=6){v.set(s[E+0],s[E+1],s[E+2]),g.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),A.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),T.copy(v).add(g).add(S).divideScalar(3);const N=m(T);_(A,M+0,v,N),_(w,M+2,g,N),_(C,M+4,S,N)}}function _(v,g,S,T){T<0&&v.x===1&&(o[g]=v.x-1),S.x===0&&S.z===0&&(o[g]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.vertices,e.indices,e.radius,e.details)}}class Fp extends kp{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fp(e.radius,e.detail)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);const Db="_hero_o3i7v_1",Ib="_canvas_o3i7v_12",Ub="_inner_o3i7v_20",Ob="_pre_o3i7v_30",kb="_title_o3i7v_40",Fb="_dot_o3i7v_51",zb="_sub_o3i7v_53",Bb="_actions_o3i7v_68",Hb="_btnPrimary_o3i7v_76",Vb="_btnGhost_o3i7v_100",Gb="_scrollHint_o3i7v_119",Wb="_fadeBottom_o3i7v_148",jb="_trust_o3i7v_160",Xb="_trustItem_o3i7v_177",qb="_trustNum_o3i7v_178",$b="_trustLabel_o3i7v_186",Yb="_trustSep_o3i7v_193",lt={hero:Db,canvas:Ib,inner:Ub,pre:Ob,title:kb,dot:Fb,sub:zb,actions:Bb,btnPrimary:Hb,btnGhost:Vb,scrollHint:Gb,fadeBottom:Wb,trust:jb,trustItem:Xb,trustNum:qb,trustLabel:$b,trustSep:Yb};function Kb(){const n=Je.useRef(null);return Je.useEffect(()=>{const e=n.current;if(!e)return;const t=window.innerWidth,i=window.innerHeight,r=new bb({canvas:e,antialias:!0,alpha:!0});r.setPixelRatio(Math.min(devicePixelRatio,2)),r.setSize(t,i);const s=new Pb,o=new ei(55,t/i,.1,600);o.position.set(0,0,10);const a=2800,l=new ci,c=new Float32Array(a*3),u=new Float32Array(a*3);for(let C=0;C<a;C++)if(c[C*3]=(Math.random()-.5)*40,c[C*3+1]=(Math.random()-.5)*24,c[C*3+2]=(Math.random()-.5)*20,Math.random()>.72)u[C*3]=.75+Math.random()*.15,u[C*3+1]=.6+Math.random()*.12,u[C*3+2]=.22+Math.random()*.12;else{const E=.05+Math.random()*.09;u[C*3]=E,u[C*3+1]=E,u[C*3+2]=E*.75}l.setAttribute("position",new oi(c,3)),l.setAttribute("color",new oi(u,3));const h=new Uy({size:.04,vertexColors:!0,transparent:!0,opacity:.85}),f=new Lb(l,h);s.add(f);const p=[];[{size:1.1,color:13216110,opacity:.18,x:-5,y:1.5},{size:.75,color:1974832,opacity:.35,x:5.5,y:-1},{size:.55,color:13216110,opacity:.1,x:0,y:-3}].forEach(({size:C,color:E,opacity:M,x:N,y:z})=>{const k=new Fp(C,1),j=new Up({color:E,wireframe:!0,transparent:!0,opacity:M}),X=new Ui(k,j);X.position.set(N,z,-2),X.userData={sp:.2+Math.random()*.3,ph:Math.random()*Math.PI*2,oy:z},s.add(X),p.push(X)});const _=new Iy({color:1580074,transparent:!0,opacity:.35});for(let C=0;C<14;C++){const E=(Math.random()-.5)*28,M=(Math.random()-.5)*16,N=[new F(E,M,Math.random()*2-1),new F(E+(Math.random()-.5)*12,M+(Math.random()-.5)*7,Math.random()*2-1)];s.add(new Nb(new ci().setFromPoints(N),_))}let m=0,d=0,v=0;const g=l.attributes.position.array,S=C=>{d=(C.clientX/innerWidth-.5)*2,v=-(C.clientY/innerHeight-.5)*2};window.addEventListener("mousemove",S);let T;const A=()=>{T=requestAnimationFrame(A),m+=.005,l.attributes.position.needsUpdate=!0;for(let C=0;C<a;C++)g[C*3+1]+=.0015,g[C*3+1]>12&&(g[C*3+1]=-12);o.position.x+=(d*1.8-o.position.x)*.03,o.position.y+=(v*1.1-o.position.y)*.03,o.lookAt(0,0,0),p.forEach(C=>{C.rotation.x+=C.userData.sp*.007,C.rotation.y+=C.userData.sp*.005,C.position.y=C.userData.oy+Math.sin(m*C.userData.sp+C.userData.ph)*1.2}),r.render(s,o)};A();const w=()=>{const C=innerWidth,E=innerHeight;o.aspect=C/E,o.updateProjectionMatrix(),r.setSize(C,E)};return window.addEventListener("resize",w),()=>{cancelAnimationFrame(T),window.removeEventListener("mousemove",S),window.removeEventListener("resize",w),r.dispose()}},[]),Je.useEffect(()=>{Un.set(["#h-pre","#h-title","#h-sub","#h-actions","#h-hint","#h-trust"],{opacity:0,y:18}),Un.timeline({delay:.15}).to("#h-pre",{opacity:1,y:0,duration:.8,ease:"power3.out"},0).to("#h-title",{opacity:1,y:0,duration:1,ease:"power4.out"},.15).to("#h-sub",{opacity:1,y:0,duration:.8,ease:"power3.out"},.55).to("#h-actions",{opacity:1,y:0,duration:.8,ease:"power3.out"},.8).to("#h-trust",{opacity:1,y:0,duration:.8,ease:"power3.out"},1).to("#h-hint",{opacity:.3,y:0,duration:.8,ease:"power3.out"},1.2)},[]),y.jsxs("section",{className:lt.hero,id:"hero",children:[y.jsx("canvas",{ref:n,className:lt.canvas}),y.jsxs("div",{className:lt.inner,children:[y.jsx("p",{className:lt.pre,id:"h-pre",children:"Tecnologia · Design · Growth"}),y.jsxs("h1",{className:lt.title,id:"h-title",children:["vera",y.jsx("span",{className:lt.dot,children:"."})]}),y.jsxs("p",{className:lt.sub,id:"h-sub",children:["Sites, cardápios, dashboards",y.jsx("br",{}),y.jsx("em",{children:"e automações sérias"})," — do design ao resultado."]}),y.jsxs("div",{className:lt.actions,id:"h-actions",children:[y.jsxs("a",{href:"#lp",className:lt.btnPrimary,"data-cursor":!0,children:[y.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),y.jsx("polyline",{points:"13 6 19 12 13 18"})]}),"ver soluções"]}),y.jsxs("a",{href:"#sobre",className:lt.btnGhost,"data-cursor":!0,children:["conhecer o grupo",y.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),y.jsx("polyline",{points:"13 6 19 12 13 18"})]})]})]})]}),y.jsxs("div",{className:lt.trust,id:"h-trust",children:[y.jsxs("div",{className:lt.trustItem,children:[y.jsx("span",{className:lt.trustNum,children:"3 dias"}),y.jsx("span",{className:lt.trustLabel,children:"entrega média"})]}),y.jsx("span",{className:lt.trustSep}),y.jsxs("div",{className:lt.trustItem,children:[y.jsx("span",{className:lt.trustNum,children:"100%"}),y.jsx("span",{className:lt.trustLabel,children:"mobile first"})]}),y.jsx("span",{className:lt.trustSep}),y.jsxs("div",{className:lt.trustItem,children:[y.jsx("span",{className:lt.trustNum,children:"R$349"}),y.jsx("span",{className:lt.trustLabel,children:"a partir de"})]}),y.jsx("span",{className:lt.trustSep}),y.jsxs("div",{className:lt.trustItem,children:[y.jsx("span",{className:lt.trustNum,children:"Itu · SP"}),y.jsx("span",{className:lt.trustLabel,children:"feito por nós"})]})]}),y.jsxs("div",{className:lt.scrollHint,id:"h-hint",children:[y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),y.jsx("polyline",{points:"19 12 12 19 5 12"})]}),y.jsx("span",{children:"scroll"})]}),y.jsx("div",{className:lt.fadeBottom})]})}const Zb="_tape_3c6e3_1",Qb="_group_3c6e3_19",Jb="_item_3c6e3_25",eP="_sep_3c6e3_36",bc={tape:Zb,group:Qb,item:Jb,sep:eP},Vg=["sites","cardápios digitais","dashboards","landing pages","automações","analytics","whatsapp","identidade visual"],tP=[...Vg,...Vg];function Gg(){return y.jsx("div",{className:bc.group,children:tP.map((n,e)=>y.jsxs("span",{className:bc.item,children:[n,y.jsx("span",{className:bc.sep,children:"✦"})]},e))})}function nP(){return y.jsxs("div",{className:bc.tape,"aria-hidden":"true",children:[y.jsx("style",{children:`
        @keyframes veraTapeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .vera-tape-track {
          display: flex;
          width: max-content;
          flex-wrap: nowrap;
          animation: veraTapeScroll 40s linear infinite;
        }
        .vera-tape-track:hover { animation-play-state: paused; }
      `}),y.jsxs("div",{className:"vera-tape-track",children:[y.jsx(Gg,{}),y.jsx(Gg,{})]})]})}function iP(){Je.useEffect(()=>{const n=document.querySelectorAll("[data-counters]"),e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(e.unobserve(i.target),i.target.querySelectorAll("[data-count]").forEach(r=>{const s=parseInt(r.dataset.count,10)||0,o=r.dataset.suf||"",a=1400,l=performance.now(),c=u=>{const h=Math.min((u-l)/a,1),f=1-Math.pow(1-h,3);r.textContent=Math.round(s*f)+o,h<1&&requestAnimationFrame(c)};requestAnimationFrame(c)}))})},{threshold:.3});return n.forEach(t=>e.observe(t)),()=>e.disconnect()},[])}const rP="_wrap_1nasz_1",sP="_intro_1nasz_8",oP="_introText_1nasz_16",aP="_statsGrid_1nasz_29",lP="_teamSection_1nasz_39",cP="_stat_1nasz_29",uP="_statNum_1nasz_53",fP="_statLabel_1nasz_64",dP="_teamGrid_1nasz_72",hP="_card_1nasz_79",pP="_cardNum_1nasz_107",mP="_avatar_1nasz_116",_P="_cardName_1nasz_133",gP="_cardRole_1nasz_142",vP="_tags_1nasz_150",xP="_tag_1nasz_150",sn={wrap:rP,intro:sP,introText:oP,statsGrid:aP,teamSection:lP,stat:cP,statNum:uP,statLabel:fP,teamGrid:dP,card:hP,cardNum:pP,avatar:mP,cardName:_P,cardRole:gP,tags:vP,tag:xP},yP=[{count:"3",suf:" dias",label:"prazo médio de entrega"},{count:"349",suf:"",label:"a partir de — R$"},{count:"4",suf:"",label:"especialistas no time"},{count:"100",suf:"%",label:"mobile first"}],SP=[{initials:"AR",name:"Alaf Rocha",role:"Marketing & Growth",tags:["Aquisição","Retenção","Growth Hacking","Estratégia de marca"]},{initials:"OB",name:"Otávio Barbieri",role:"Backend & IA · Fundador",tags:["Arquitetura","APIs","Inteligência Artificial","Infraestrutura"]},{initials:"DP",name:"Davi Paulino",role:"Frontend",tags:["React","TypeScript","Design de Interface","Performance Web"]},{initials:"EG",name:"Enzo Gabriel",role:"Design",tags:["Figma","Sistema Visual","UX / UI","Identidade de Produto"]}];function MP(){return iP(),y.jsxs("section",{id:"sobre",className:sn.wrap,children:[y.jsxs("div",{className:"section",children:[y.jsxs("div",{className:sn.intro,children:[y.jsxs("div",{children:[y.jsx("div",{className:"s-label reveal",children:"o grupo"}),y.jsxs("h2",{className:"reveal",children:["Quatro pessoas.",y.jsx("br",{}),y.jsx("em",{children:"Um padrão."})]})]}),y.jsxs("p",{className:`${sn.introText} reveal`,children:["A ",y.jsx("strong",{children:"vera."})," nasceu de uma ideia simples: tecnologia bem feita não precisa ser cara nem demorar meses. Somos quatro estudantes de tecnologia em Itu, SP, com foco real em entrega e qualidade.",y.jsx("br",{}),y.jsx("br",{}),"Cada integrante é especialista no que faz. O que a gente entrega foi pensado, projetado e construído com intenção."]})]}),y.jsx("div",{className:sn.statsGrid,"data-counters":!0,children:yP.map(({count:n,suf:e,label:t},i)=>y.jsxs("div",{className:`${sn.stat} reveal d${i+1}`,children:[y.jsxs("div",{className:sn.statNum,"data-count":n,"data-suf":e,children:["0",e]}),y.jsx("div",{className:sn.statLabel,children:t})]},t))})]}),y.jsxs("div",{className:`section ${sn.teamSection}`,children:[y.jsx("div",{className:"s-label reveal",children:"time"}),y.jsxs("h2",{className:"reveal",children:["Cada um no",y.jsx("br",{}),y.jsx("em",{children:"seu elemento."})]}),y.jsx("div",{className:sn.teamGrid,children:SP.map(({initials:n,name:e,role:t,tags:i},r)=>y.jsxs("div",{className:`${sn.card} reveal d${r%4+1}`,"data-cursor":!0,children:[y.jsxs("div",{className:sn.cardNum,children:["0",r+1," / 04"]}),y.jsx("div",{className:sn.avatar,children:n}),y.jsx("div",{className:sn.cardName,children:e}),y.jsx("div",{className:sn.cardRole,children:t}),y.jsx("div",{className:sn.tags,children:i.map(s=>y.jsx("span",{className:sn.tag,children:s},s))})]},e))})]})]})}const EP="_wrap_1iiv7_6",wP="_header_1iiv7_9",TP="_headTop_1iiv7_18",AP="_desc_1iiv7_26",CP="_featGrid_1iiv7_33",RP="_feat_1iiv7_33",bP="_featIcon_1iiv7_57",PP="_featTitle_1iiv7_68",NP="_featDesc_1iiv7_74",LP="_processoRow_1iiv7_80",DP="_processoGrid_1iiv7_85",IP="_step_1iiv7_95",UP="_stepNum_1iiv7_103",OP="_stepTitle_1iiv7_109",kP="_stepDesc_1iiv7_115",FP="_portfolioRow_1iiv7_121",zP="_portfolioGrid_1iiv7_126",BP="_pCard_1iiv7_132",HP="_pThumb_1iiv7_142",VP="_pBadge_1iiv7_152",GP="_pInfo_1iiv7_162",WP="_pTitle_1iiv7_163",jP="_pDesc_1iiv7_168",XP="_pEmpty_1iiv7_174",qP="_pEmptyIcon_1iiv7_183",$P="_mockWrap_1iiv7_200",YP="_mockBar_1iiv7_205",KP="_mockDot_1iiv7_211",ZP="_mockUrl_1iiv7_212",QP="_mockBody_1iiv7_216",JP="_mockLogo_1iiv7_217",e3="_mockLines_1iiv7_222",t3="_mockLine_1iiv7_222",Ne={wrap:EP,header:wP,headTop:TP,desc:AP,featGrid:CP,feat:RP,featIcon:bP,featTitle:PP,featDesc:NP,processoRow:LP,processoGrid:DP,step:IP,stepNum:UP,stepTitle:OP,stepDesc:kP,portfolioRow:FP,portfolioGrid:zP,pCard:BP,pThumb:HP,pBadge:VP,pInfo:GP,pTitle:WP,pDesc:jP,pEmpty:XP,pEmptyIcon:qP,mockWrap:$P,mockBar:YP,mockDot:KP,mockUrl:ZP,mockBody:QP,mockLogo:JP,mockLines:e3,mockLine:t3},n3=[{icon:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),y.jsx("polyline",{points:"8 21 12 17 16 21"})]}),title:"Design único",desc:"Criado do zero para o seu negócio. Sem templates, sem visual genérico."},{icon:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("polyline",{points:"16 18 22 12 16 6"}),y.jsx("polyline",{points:"8 6 2 12 8 18"})]}),title:"Código limpo",desc:"Sites rápidos, responsivos e preparados para publicar sem peso desnecessário."},{icon:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"}),y.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18",strokeWidth:"2.5"})]}),title:"WhatsApp e leads",desc:"Botões, formulários e mensagens prontas para transformar visita em conversa."},{icon:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("circle",{cx:"12",cy:"12",r:"10"}),y.jsx("polyline",{points:"12 6 12 12 16 14"})]}),title:"Medição real",desc:"Analytics, eventos e dashboards para saber o que está gerando contato."}],i3=[{num:"01",title:"Você nos conta o negócio",desc:"A gente entende o que você vende, para quem vende e qual ação o visitante precisa tomar."},{num:"02",title:"Construímos e apresentamos",desc:"Desenvolvemos a página ou cardápio, validamos o visual e ajustamos antes de publicar."},{num:"03",title:"No ar e medindo",desc:"O projeto vai para o ar com WhatsApp, formulário, eventos e base para acompanhar resultado."}];function Wg({name:n}){return y.jsxs("div",{className:Ne.mockWrap,children:[y.jsxs("div",{className:Ne.mockBar,children:[y.jsx("span",{className:Ne.mockDot,style:{background:"#ff5f57"}}),y.jsx("span",{className:Ne.mockDot,style:{background:"#ffbd2e"}}),y.jsx("span",{className:Ne.mockDot,style:{background:"#28ca41"}}),y.jsx("span",{className:Ne.mockUrl,children:n})]}),y.jsxs("div",{className:Ne.mockBody,children:[y.jsxs("div",{className:Ne.mockLogo,children:[n.split(".")[0],y.jsx("span",{children:"."})]}),y.jsxs("div",{className:Ne.mockLines,children:[y.jsx("div",{className:Ne.mockLine,style:{width:"68%"}}),y.jsx("div",{className:Ne.mockLine,style:{width:"45%"}}),y.jsx("div",{className:Ne.mockLine,style:{width:"80%"}}),y.jsx("div",{className:Ne.mockLine,style:{width:"32%",marginTop:"0.6rem"}})]})]})]})}function r3(){return y.jsxs("section",{id:"lp",className:Ne.wrap,children:[y.jsx("div",{className:Ne.header,children:y.jsxs("div",{className:"inner",children:[y.jsxs("div",{className:Ne.headTop,children:[y.jsxs("div",{children:[y.jsx("div",{className:"s-label reveal",children:"soluções digitais"}),y.jsxs("h2",{className:"reveal",children:["Páginas que",y.jsx("br",{}),y.jsx("em",{children:"convertem."})]})]}),y.jsx("p",{className:`${Ne.desc} reveal`,children:"Design sério, código limpo e foco em resultado. A Vera Group cria sites, cardápios digitais, dashboards e automações para negócios locais venderem melhor."})]}),y.jsx("div",{className:Ne.featGrid,children:n3.map(({icon:n,title:e,desc:t},i)=>y.jsxs("div",{className:`${Ne.feat} reveal d${i+1}`,"data-cursor":!0,children:[y.jsx("div",{className:Ne.featIcon,children:n}),y.jsxs("div",{children:[y.jsx("div",{className:Ne.featTitle,children:e}),y.jsx("div",{className:Ne.featDesc,children:t})]})]},e))})]})}),y.jsx("div",{className:"section-full",children:y.jsxs("div",{className:"inner",children:[y.jsxs("div",{className:Ne.processoRow,children:[y.jsx("div",{className:"s-label reveal",children:"como funciona"}),y.jsxs("h2",{className:"reveal",style:{marginBottom:"0.6rem"},children:["do briefing",y.jsx("br",{}),y.jsx("em",{children:"ao ar."})]}),y.jsx("div",{className:Ne.processoGrid,children:i3.map(({num:n,title:e,desc:t},i)=>y.jsxs("div",{className:`${Ne.step} reveal d${i+1}`,children:[y.jsx("div",{className:Ne.stepNum,children:n}),y.jsx("div",{className:Ne.stepTitle,children:e}),y.jsx("div",{className:Ne.stepDesc,children:t})]},n))})]}),y.jsxs("div",{className:Ne.portfolioRow,children:[y.jsx("div",{className:"s-label reveal",children:"portfólio"}),y.jsxs("h2",{className:"reveal",style:{marginBottom:"3rem"},children:["O que já ",y.jsx("em",{children:"entregamos."})]}),y.jsxs("div",{className:Ne.portfolioGrid,children:[y.jsxs("div",{className:`${Ne.pCard} reveal d1`,onClick:()=>window.open("/ronaldo-rocha-site/index.html","_blank"),"data-cursor":!0,children:[y.jsxs("div",{className:Ne.pThumb,children:[y.jsx(Wg,{name:"ronaldo.rocha"}),y.jsx("span",{className:Ne.pBadge,children:"publicado"})]}),y.jsxs("div",{className:Ne.pInfo,children:[y.jsx("h3",{className:Ne.pTitle,children:"Ronaldo Rocha"}),y.jsx("p",{className:Ne.pDesc,children:"Site de engenharia com foco em orçamento, WhatsApp inteligente, formulário completo, eventos e base para dashboard."})]})]}),y.jsxs("div",{className:`${Ne.pCard} reveal d2`,onClick:()=>window.open("/vo-neis-cardapio/index.html","_blank"),"data-cursor":!0,children:[y.jsxs("div",{className:Ne.pThumb,children:[y.jsx(Wg,{name:"vo.neis"}),y.jsx("span",{className:Ne.pBadge,children:"cardápio"})]}),y.jsxs("div",{className:Ne.pInfo,children:[y.jsx("h3",{className:Ne.pTitle,children:"Vó Neis Confeitaria"}),y.jsx("p",{className:Ne.pDesc,children:"Cardápio digital premium com categorias, carrinho simples, total parcial e pedido organizado pelo WhatsApp."})]})]}),y.jsxs("div",{className:`${Ne.pEmpty} reveal d3`,children:[y.jsx("div",{className:Ne.pEmptyIcon,children:y.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("circle",{cx:"12",cy:"12",r:"10"}),y.jsx("polyline",{points:"12 6 12 12 16 14"})]})}),y.jsx("p",{children:"Seu negócio pode ser o próximo case aqui."}),y.jsx("a",{href:"#contato","data-cursor":!0,children:"solicitar orçamento →"})]})]})]})]})})]})}const s3="_wrap_1v9a0_2",o3="_titleRow_1v9a0_8",a3="_subtitle_1v9a0_16",l3="_grid_1v9a0_23",c3="_card_1v9a0_30",u3="_icon_1v9a0_50",f3="_badge_1v9a0_61",d3="_pulseDot_1v9a0_72",h3="_title_1v9a0_8",p3="_desc_1v9a0_91",m3="_blur_1v9a0_97",_3="_foot_1v9a0_110",g3="_footItem_1v9a0_119",v3="_footNum_1v9a0_120",x3="_footLabel_1v9a0_126",y3="_footCta_1v9a0_131",Ct={wrap:s3,titleRow:o3,subtitle:a3,grid:l3,card:c3,icon:u3,badge:f3,pulseDot:d3,title:h3,desc:p3,blur:m3,foot:_3,footItem:g3,footNum:v3,footLabel:x3,footCta:y3},S3=[{title:"vera.",desc:"Gestão financeira inteligente com IA. Analisa gastos, detecta problemas e sugere soluções — integrado ao Open Finance.",icon:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"}),y.jsx("path",{d:"M8 12h8M12 8v8"})]})},{title:"vera. scan",desc:"Scanner de notas fiscais com análise automática de produtos e comparação de preços em tempo real com estabelecimentos próximos.",icon:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"}),y.jsx("rect",{x:"7",y:"7",width:"10",height:"10",rx:"1"})]})},{title:"vera. pages",desc:"Plataforma para criar, gerenciar e monitorar landing pages, cardápios e dashboards com analytics integrado e conexão nativa ao WhatsApp.",icon:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),y.jsx("path",{d:"M8 21h8M12 17v4"})]})}];function M3(){return y.jsx("section",{id:"apps",className:Ct.wrap,children:y.jsxs("div",{className:"section",children:[y.jsx("div",{className:"s-label reveal",children:"aplicativos"}),y.jsxs("div",{className:Ct.titleRow,children:[y.jsxs("h2",{className:"reveal",children:["Produtos que estamos",y.jsx("br",{}),y.jsx("em",{children:"construindo."})]}),y.jsx("p",{className:`${Ct.subtitle} reveal`,children:"Além de landing pages, a vera. desenvolve seus próprios produtos. Em breve disponíveis para o público."})]}),y.jsx("div",{className:Ct.grid,children:S3.map(({title:n,desc:e,icon:t},i)=>y.jsxs("div",{className:`${Ct.card} reveal d${i+1}`,"data-cursor":!0,children:[y.jsxs("div",{className:Ct.badge,children:[y.jsx("span",{className:Ct.pulseDot}),"em breve"]}),y.jsx("div",{className:Ct.icon,children:t}),y.jsx("h3",{className:Ct.title,children:n}),y.jsx("p",{className:Ct.desc,children:e}),y.jsx("div",{className:Ct.blur})]},n))}),y.jsxs("div",{className:`${Ct.foot} reveal`,children:[y.jsxs("div",{className:Ct.footItem,children:[y.jsx("span",{className:Ct.footNum,children:"03"}),y.jsx("span",{className:Ct.footLabel,children:"produtos em desenvolvimento"})]}),y.jsxs("div",{className:Ct.footItem,children:[y.jsx("span",{className:Ct.footNum,children:"IA"}),y.jsx("span",{className:Ct.footLabel,children:"no núcleo de cada um"})]}),y.jsxs("div",{className:Ct.footItem,children:[y.jsx("span",{className:Ct.footNum,children:"2026"}),y.jsx("span",{className:Ct.footLabel,children:"primeiros lançamentos"})]}),y.jsx("a",{className:Ct.footCta,href:"#contato","data-cursor":!0,children:"quero saber antes →"})]})]})})}const E3="_wrap_1fjlj_5",w3="_layout_1fjlj_10",T3="_left_1fjlj_19",A3="_desc_1fjlj_21",C3="_meta_1fjlj_30",R3="_metaItem_1fjlj_38",b3="_metaK_1fjlj_39",P3="_metaV_1fjlj_46",N3="_linksCol_1fjlj_54",L3="_link_1fjlj_54",D3="_linkIcon_1fjlj_78",I3="_linkText_1fjlj_89",U3="_linkLabel_1fjlj_95",O3="_linkValue_1fjlj_100",k3="_arrow_1fjlj_106",F3="_note_1fjlj_118",z3="_noteDot_1fjlj_127",vt={wrap:E3,layout:w3,left:T3,desc:A3,meta:C3,metaItem:R3,metaK:b3,metaV:P3,linksCol:N3,link:L3,linkIcon:D3,linkText:I3,linkLabel:U3,linkValue:O3,arrow:k3,note:F3,noteDot:z3},B3=[{href:"https://wa.me/5511940723507?text=Oi%2C%20vim%20pelo%20site%20da%20Vera%20Group%20e%20quero%20um%20or%C3%A7amento.",label:"WhatsApp",value:"+55 11 94072-3507",icon:y.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})},{href:"https://instagram.com/veragroup.ia",label:"Instagram",value:"@veragroup.ia",icon:y.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),y.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),y.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5",strokeWidth:"2.5"})]})}];function H3(){return y.jsx("section",{id:"contato",className:vt.wrap,children:y.jsx("div",{className:"section",children:y.jsxs("div",{className:vt.layout,children:[y.jsxs("div",{className:vt.left,children:[y.jsx("div",{className:"s-label reveal",children:"contato"}),y.jsxs("h2",{className:"reveal",children:["Bora",y.jsx("br",{}),y.jsx("em",{children:"conversar?"})]}),y.jsxs("p",{className:`${vt.desc} reveal`,children:["A gente responde rápido e sem enrolação.",y.jsx("br",{}),"Manda mensagem — a gente vai atrás."]}),y.jsxs("div",{className:`${vt.meta} reveal`,children:[y.jsxs("div",{className:vt.metaItem,children:[y.jsx("span",{className:vt.metaK,children:"resposta"}),y.jsx("span",{className:vt.metaV,children:"em até 24h"})]}),y.jsxs("div",{className:vt.metaItem,children:[y.jsx("span",{className:vt.metaK,children:"onde"}),y.jsx("span",{className:vt.metaV,children:"Itu · São Paulo"})]}),y.jsxs("div",{className:vt.metaItem,children:[y.jsx("span",{className:vt.metaK,children:"orçamento"}),y.jsx("span",{className:vt.metaV,children:"sem compromisso"})]})]})]}),y.jsxs("div",{className:`${vt.linksCol} reveal`,children:[B3.map(({href:n,label:e,value:t,icon:i})=>y.jsxs("a",{href:n,target:"_blank",rel:"noreferrer",className:vt.link,"data-cursor":!0,children:[y.jsx("div",{className:vt.linkIcon,children:i}),y.jsxs("div",{className:vt.linkText,children:[y.jsx("span",{className:vt.linkLabel,children:e}),y.jsx("span",{className:vt.linkValue,children:t})]}),y.jsx("div",{className:vt.arrow,children:"›"})]},e)),y.jsxs("div",{className:vt.note,children:[y.jsx("div",{className:vt.noteDot}),y.jsx("span",{children:"Disponíveis agora — normalmente respondemos em minutos."})]})]})]})})})}function br(n=".reveal"){Je.useEffect(()=>{const e=requestAnimationFrame(()=>{const t=window.innerHeight||document.documentElement.clientHeight,i=document.querySelectorAll(n),r=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),r.unobserve(o.target))})},{threshold:.05,rootMargin:"0px 0px -8% 0px"});i.forEach(s=>{const o=s.getBoundingClientRect();o.top<t*.95&&o.bottom>0?s.classList.add("visible"):r.observe(s)}),br._io=r});return()=>{cancelAnimationFrame(e),br._io&&(br._io.disconnect(),br._io=null)}},[n])}function V3(){return br(),y.jsxs(y.Fragment,{children:[y.jsx(Kb,{}),y.jsx(nP,{}),y.jsx(MP,{}),y.jsx("div",{className:"divider"}),y.jsx(r3,{}),y.jsx("div",{className:"divider"}),y.jsx(M3,{}),y.jsx("div",{className:"divider"}),y.jsx(H3,{})]})}const G3="_wrap_y7mo6_1",W3="_hero_y7mo6_4",j3="_heroInner_y7mo6_10",X3="_eyebrow_y7mo6_12",q3="_title_y7mo6_13",$3="_sub_y7mo6_15",Y3="_filterSection_y7mo6_18",K3="_filterInner_y7mo6_19",Z3="_filters_y7mo6_20",Q3="_filterBtn_y7mo6_21",J3="_filterActive_y7mo6_27",eN="_gridSection_y7mo6_30",tN="_gridInner_y7mo6_31",nN="_grid_y7mo6_30",iN="_card_y7mo6_34",rN="_cardSoon_y7mo6_36",sN="_thumb_y7mo6_38",oN="_thumbPlaceholder_y7mo6_40",aN="_thumbInitials_y7mo6_41",lN="_soonContent_y7mo6_42",cN="_soonDot_y7mo6_43",uN="_thumbOverlay_y7mo6_45",fN="_thumbLink_y7mo6_47",dN="_info_y7mo6_49",hN="_infoTop_y7mo6_50",pN="_cat_y7mo6_51",mN="_liveTag_y7mo6_52",_N="_liveDot_y7mo6_53",gN="_soonTag_y7mo6_54",vN="_name_y7mo6_55",xN="_desc_y7mo6_56",yN="_tags_y7mo6_57",SN="_tag_y7mo6_57",MN="_ctaSection_y7mo6_61",EN="_ctaInner_y7mo6_62",wN="_ctaEye_y7mo6_63",TN="_ctaTitle_y7mo6_64",AN="_ctaSub_y7mo6_66",CN="_ctaBtn_y7mo6_67",Fe={wrap:G3,hero:W3,heroInner:j3,eyebrow:X3,title:q3,sub:$3,filterSection:Y3,filterInner:K3,filters:Z3,filterBtn:Q3,filterActive:J3,gridSection:eN,gridInner:tN,grid:nN,card:iN,cardSoon:rN,thumb:sN,thumbPlaceholder:oN,thumbInitials:aN,soonContent:lN,soonDot:cN,thumbOverlay:uN,thumbLink:fN,info:dN,infoTop:hN,cat:pN,liveTag:mN,liveDot:_N,soonTag:gN,name:vN,desc:xN,tags:yN,tag:SN,ctaSection:MN,ctaInner:EN,ctaEye:wN,ctaTitle:TN,ctaSub:AN,ctaBtn:CN},jg=[{id:1,name:"Ronaldo Rocha",category:"Site Pro",desc:"Site de engenharia com foco em orçamento, WhatsApp inteligente, formulário completo, eventos e dashboard de leads.",url:"/ronaldo-rocha-site/index.html",tags:["Site","Analytics","Dashboard"],live:!0,thumb:null},{id:2,name:"Vó Neis Confeitaria",category:"Cardápio Digital",desc:"Cardápio online premium para WhatsApp, com categorias, carrinho simples, total parcial e pedido organizado.",url:"/vo-neis-cardapio/index.html",tags:["Cardápio","WhatsApp","Mobile"],live:!0,thumb:null},{id:3,name:"Dashboard Ronaldo",category:"Dashboard",desc:"Painel comercial para acompanhar visitas, cliques, leads, serviços, regiões e status das oportunidades.",url:"/ronaldo-dashboard/index.html",tags:["Leads","Funil","Métricas"],live:!0,thumb:null},{id:4,name:"Próximo case",category:"Automação",desc:"Novo projeto em desenvolvimento. Seu negócio pode ocupar este espaço com site, dashboard ou cardápio digital.",url:null,tags:[],live:!1,thumb:null}],RN=["Todos","Site Pro","Cardápio Digital","Dashboard","Automação"];function bN(){br();const[n,e]=Je.useState("Todos"),t=n==="Todos"?jg:jg.filter(i=>i.category===n);return y.jsxs("div",{className:Fe.wrap,children:[y.jsx("section",{className:Fe.hero,children:y.jsxs("div",{className:Fe.heroInner,children:[y.jsx("p",{className:`${Fe.eyebrow} reveal`,children:"Portfólio"}),y.jsxs("h1",{className:`${Fe.title} reveal`,children:["projetos que",y.jsx("br",{}),y.jsx("span",{children:"entregamos."})]}),y.jsx("p",{className:`${Fe.sub} reveal`,children:"Cada projeto é construído com intenção: design pensado, código limpo, WhatsApp funcionando e métrica para entender resultado."})]})}),y.jsx("section",{className:Fe.filterSection,children:y.jsx("div",{className:Fe.filterInner,children:y.jsx("div",{className:Fe.filters,children:RN.map(i=>y.jsx("button",{className:`${Fe.filterBtn} ${n===i?Fe.filterActive:""}`,onClick:()=>e(i),"data-cursor":!0,children:i},i))})})}),y.jsx("section",{className:Fe.gridSection,children:y.jsx("div",{className:Fe.gridInner,children:y.jsx("div",{className:Fe.grid,children:t.map((i,r)=>y.jsxs("div",{className:`${Fe.card} ${i.live?"":Fe.cardSoon} reveal`,style:{transitionDelay:`${r*.06}s`},children:[y.jsxs("div",{className:Fe.thumb,children:[i.thumb?y.jsx("img",{src:i.thumb,alt:i.name}):y.jsx("div",{className:Fe.thumbPlaceholder,children:i.live?y.jsx("span",{className:Fe.thumbInitials,children:i.name.slice(0,2).toUpperCase()}):y.jsxs("div",{className:Fe.soonContent,children:[y.jsx("div",{className:Fe.soonDot}),y.jsx("span",{children:"em breve"})]})}),i.live&&y.jsx("div",{className:Fe.thumbOverlay,children:i.url&&y.jsxs("a",{href:i.url,target:"_blank",rel:"noreferrer",className:Fe.thumbLink,"data-cursor":!0,children:[y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),y.jsx("polyline",{points:"15 3 21 3 21 9"}),y.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"ver projeto"]})})]}),y.jsxs("div",{className:Fe.info,children:[y.jsxs("div",{className:Fe.infoTop,children:[y.jsx("span",{className:Fe.cat,children:i.category}),i.live?y.jsxs("span",{className:Fe.liveTag,children:[y.jsx("span",{className:Fe.liveDot}),"live"]}):y.jsx("span",{className:Fe.soonTag,children:"em breve"})]}),y.jsx("h3",{className:Fe.name,children:i.name}),y.jsx("p",{className:Fe.desc,children:i.desc}),i.tags.length>0&&y.jsx("div",{className:Fe.tags,children:i.tags.map(s=>y.jsx("span",{className:Fe.tag,children:s},s))})]})]},i.id))})})}),y.jsx("section",{className:Fe.ctaSection,children:y.jsxs("div",{className:Fe.ctaInner,children:[y.jsx("p",{className:`${Fe.ctaEye} reveal`,children:"Próximo projeto"}),y.jsxs("h2",{className:`${Fe.ctaTitle} reveal`,children:["pode ser o ",y.jsx("span",{children:"seu."})]}),y.jsx("p",{className:`${Fe.ctaSub} reveal`,children:"Vamos construir algo bonito, mensurável e útil para vender."}),y.jsxs("a",{href:"https://wa.me/5511940723507?text=Oi%2C%20vim%20pelo%20site%20da%20Vera%20Group%20e%20quero%20um%20or%C3%A7amento.",target:"_blank",rel:"noreferrer",className:`${Fe.ctaBtn} reveal`,"data-cursor":!0,children:[y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"})}),"falar com a gente"]})]})})]})}const PN="_wrap_x143g_1",NN="_header_x143g_3",LN="_headerInner_x143g_8",DN="_eye_x143g_10",IN="_title_x143g_12",UN="_sub_x143g_14",ON="_catBar_x143g_17",kN="_catInner_x143g_18",FN="_catBtn_x143g_19",zN="_catActive_x143g_21",BN="_gridSection_x143g_24",HN="_gridInner_x143g_25",VN="_grid_x143g_24",GN="_card_x143g_29",WN="_cardSelected_x143g_35",jN="_swatches_x143g_37",XN="_swatch_x143g_37",qN="_cardBottom_x143g_40",$N="_cardName_x143g_41",YN="_cardCat_x143g_42",KN="_checkIcon_x143g_44",ZN="_customizer_x143g_47",QN="_custInner_x143g_48",JN="_custHeader_x143g_50",eL="_custEye_x143g_51",tL="_custHint_x143g_52",nL="_customBtn_x143g_54",iL="_colorRow_x143g_57",rL="_colorItem_x143g_58",sL="_colorSwatch_x143g_59",oL="_editIcon_x143g_61",aL="_colorInput_x143g_62",lL="_colorHex_x143g_63",cL="_preview_x143g_66",uL="_previewLabel_x143g_67",fL="_previewCard_x143g_68",dL="_previewNav_x143g_69",hL="_previewLogo_x143g_70",pL="_previewLinks_x143g_71",mL="_previewBody_x143g_72",_L="_formSection_x143g_75",gL="_formInner_x143g_76",vL="_formCard_x143g_78",xL="_formEye_x143g_80",yL="_formTitle_x143g_81",SL="_formSub_x143g_83",ML="_formPalPreview_x143g_85",EL="_formPalName_x143g_86",wL="_formRight_x143g_88",TL="_field_x143g_89",AL="_label_x143g_90",CL="_input_x143g_91",RL="_formBtn_x143g_95",bL="_formNote_x143g_98",ge={wrap:PN,header:NN,headerInner:LN,eye:DN,title:IN,sub:UN,catBar:ON,catInner:kN,catBtn:FN,catActive:zN,gridSection:BN,gridInner:HN,grid:VN,card:GN,cardSelected:WN,swatches:jN,swatch:XN,cardBottom:qN,cardName:$N,cardCat:YN,checkIcon:KN,customizer:ZN,custInner:QN,custHeader:JN,custEye:eL,custHint:tL,customBtn:nL,colorRow:iL,colorItem:rL,colorSwatch:sL,editIcon:oL,colorInput:aL,colorHex:lL,preview:cL,previewLabel:uL,previewCard:fL,previewNav:dL,previewLogo:hL,previewLinks:pL,previewBody:mL,formSection:_L,formInner:gL,formCard:vL,formEye:xL,formTitle:yL,formSub:SL,formPalPreview:ML,formPalName:EL,formRight:wL,field:TL,label:AL,input:CL,formBtn:RL,formNote:bL},PL="5511940723507",Xg=[{id:1,name:"Obsidian Gold",cat:"Luxo",colors:["#09090f","#c9a96e","#f2efe8","#1a1a24"]},{id:2,name:"Noir Champagne",cat:"Luxo",colors:["#0a0a14","#e2c48a","#f8f5f0","#141420"]},{id:3,name:"Dark Velvet",cat:"Luxo",colors:["#12101e","#b8860b","#f0ebe0","#1e1b2e"]},{id:4,name:"Midnight Silk",cat:"Luxo",colors:["#080812","#d4af37","#f5f2ea","#10101a"]},{id:5,name:"Royale Noir",cat:"Luxo",colors:["#0d0b18","#c0a060","#ede8dc","#181524"]},{id:6,name:"Carbon Blue",cat:"Tech",colors:["#0d1117","#58a6ff","#f0f6ff","#161b22"]},{id:7,name:"Deep Indigo",cat:"Tech",colors:["#0f0f23","#6366f1","#f1f5f9","#14142e"]},{id:8,name:"Cyber Teal",cat:"Tech",colors:["#030f14","#14b8a6","#f0fdfa","#051c24"]},{id:9,name:"Steel Gray",cat:"Tech",colors:["#111318","#94a3b8","#f1f5f9","#1a1e28"]},{id:10,name:"Night Electric",cat:"Tech",colors:["#050510","#818cf8","#eef2ff","#0a0a1a"]},{id:11,name:"Forest Dark",cat:"Natural",colors:["#0d1a0f","#4ade80","#f0fdf4","#152117"]},{id:12,name:"Earth & Oak",cat:"Natural",colors:["#1a1208","#a16207","#fefce8","#261b0c"]},{id:13,name:"Sage Noir",cat:"Natural",colors:["#0f1a14","#6ee7b7","#ecfdf5","#162018"]},{id:14,name:"Desert Night",cat:"Natural",colors:["#1a1006","#f59e0b","#fffbeb","#261800"]},{id:15,name:"Moss Stone",cat:"Natural",colors:["#0e1a0e","#65a30d","#f7fee7","#172417"]},{id:16,name:"Crimson Dark",cat:"Bold",colors:["#1a0505","#ef4444","#fff5f5","#260808"]},{id:17,name:"Volcanic",cat:"Bold",colors:["#120600","#f97316","#fff7ed","#1e0e00"]},{id:18,name:"Deep Violet",cat:"Bold",colors:["#0f0a1e","#8b5cf6","#faf5ff","#17103a"]},{id:19,name:"Hot Pink",cat:"Bold",colors:["#150a12","#f43f5e","#fff1f2","#220f1b"]},{id:20,name:"Electric Rose",cat:"Bold",colors:["#12060e","#e879f9","#fdf4ff","#1e0e1a"]},{id:21,name:"Pure Noir",cat:"Clean",colors:["#111111","#ffffff","#f5f5f5","#888888"]},{id:22,name:"Warm Paper",cat:"Clean",colors:["#f5f0e8","#1a1a1a","#ede5d8","#8b7355"]},{id:23,name:"Arctic White",cat:"Clean",colors:["#f8f9fa","#2c3e50","#eef0f2","#6c757d"]},{id:24,name:"Cream & Ash",cat:"Clean",colors:["#fdf8f0","#2d2926","#f0e8d8","#9e9080"]},{id:25,name:"Nordic",cat:"Clean",colors:["#f5f7fa","#1e293b","#e2e8f0","#64748b"]},{id:26,name:"Aurora",cat:"Criativo",colors:["#030d1a","#c084fc","#faf5ff","#08152e"]},{id:27,name:"Neon Green",cat:"Criativo",colors:["#05100a","#22c55e","#f0fdf4","#0a1e12"]},{id:28,name:"Sunset",cat:"Criativo",colors:["#120800","#fb923c","#fff7ed","#1e1000"]},{id:29,name:"Ocean Deep",cat:"Criativo",colors:["#030a14","#0ea5e9","#f0f9ff","#051220"]},{id:30,name:"Cyber Purple",cat:"Criativo",colors:["#0a0010","#a855f7","#faf5ff","#100020"]}],NL=["Todas","Luxo","Tech","Natural","Bold","Clean","Criativo"];function LL(){br();const[n,e]=Je.useState("Todas"),[t,i]=Je.useState(null),[r,s]=Je.useState(["#c9a96e","#09090f","#f2efe8","#1a1a24"]),[o,a]=Je.useState(!1),[l,c]=Je.useState(""),[u,h]=Je.useState(""),f=Je.useRef([]),p=n==="Todas"?Xg:Xg.filter(g=>g.cat===n),x=o?r:t?t.colors:null,_=o?"Personalizada":(t==null?void 0:t.name)??"",m=()=>{if(!l.trim()||!u.trim()){alert("Preencha seu nome e número.");return}const g=(x==null?void 0:x.join(", "))??"sem paleta selecionada",S=encodeURIComponent(`Olá! Sou ${l}, número ${u}.

Vi o site da vera. e quero uma landing page com a paleta *${_}*: ${g}.

Pode me ajudar?`);window.open(`https://wa.me/${PL}?text=${S}`,"_blank")},d=g=>{i(g),a(!1),s([...g.colors])},v=(g,S)=>{const T=[...r];T[g]=S,s(T),o||a(!0)};return y.jsxs("div",{className:ge.wrap,children:[y.jsx("section",{className:ge.header,children:y.jsxs("div",{className:ge.headerInner,children:[y.jsx("p",{className:`${ge.eye} reveal`,children:"Paletas"}),y.jsxs("h1",{className:`${ge.title} reveal`,children:["a cor certa",y.jsx("br",{}),y.jsx("span",{children:"vende mais."})]}),y.jsx("p",{className:`${ge.sub} reveal`,children:"Escolha uma paleta pronta, ajuste as cores como quiser ou crie a sua do zero. Depois a gente apresenta 3 opções personalizadas pra você no WhatsApp."})]})}),y.jsx("div",{className:ge.catBar,children:y.jsx("div",{className:ge.catInner,children:NL.map(g=>y.jsx("button",{className:`${ge.catBtn} ${n===g?ge.catActive:""}`,onClick:()=>e(g),"data-cursor":!0,children:g},g))})}),y.jsx("section",{className:ge.gridSection,children:y.jsx("div",{className:ge.gridInner,children:y.jsx("div",{className:ge.grid,children:p.map((g,S)=>y.jsx("div",{className:"reveal",style:{transitionDelay:`${S%6*.05}s`},children:y.jsxs("div",{className:`${ge.card} ${(t==null?void 0:t.id)===g.id&&!o?ge.cardSelected:""}`,onClick:()=>d(g),"data-cursor":!0,children:[y.jsx("div",{className:ge.swatches,children:g.colors.map((T,A)=>y.jsx("div",{className:ge.swatch,style:{background:T}},A))}),y.jsxs("div",{className:ge.cardBottom,children:[y.jsxs("div",{children:[y.jsx("p",{className:ge.cardName,children:g.name}),y.jsx("p",{className:ge.cardCat,children:g.cat})]}),(t==null?void 0:t.id)===g.id&&!o&&y.jsx("div",{className:ge.checkIcon,children:y.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("polyline",{points:"20 6 9 17 4 12"})})})]})]})},g.id))})})}),(t||o)&&y.jsx("section",{className:ge.customizer,children:y.jsxs("div",{className:ge.custInner,children:[y.jsxs("div",{className:ge.custHeader,children:[y.jsxs("div",{children:[y.jsx("p",{className:ge.custEye,children:o?"paleta personalizada":`editando — ${t==null?void 0:t.name}`}),y.jsx("p",{className:ge.custHint,children:"Clique em qualquer cor para ajustar"})]}),y.jsx("button",{className:ge.customBtn,onClick:()=>{a(!0),i(null)},"data-cursor":!0,children:"criar do zero"})]}),y.jsx("div",{className:ge.colorRow,children:r.map((g,S)=>y.jsxs("div",{className:ge.colorItem,children:[y.jsxs("div",{className:ge.colorSwatch,style:{background:g},onClick:()=>{var T;return(T=f.current[S])==null?void 0:T.click()},"data-cursor":!0,children:[y.jsx("span",{className:ge.editIcon,children:y.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"}),y.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),y.jsx("input",{type:"color",ref:T=>f.current[S]=T,value:g,onChange:T=>v(S,T.target.value),className:ge.colorInput})]}),y.jsx("span",{className:ge.colorHex,children:g})]},S))}),y.jsxs("div",{className:ge.preview,children:[y.jsx("p",{className:ge.previewLabel,children:"preview"}),y.jsxs("div",{className:ge.previewCard,style:{background:r[0]},children:[y.jsxs("div",{className:ge.previewNav,style:{borderBottom:`1px solid ${r[3]}40`},children:[y.jsx("div",{className:ge.previewLogo,style:{color:r[1]},children:"marca."}),y.jsx("div",{className:ge.previewLinks,children:["sobre","serviços","contato"].map(g=>y.jsx("span",{style:{color:r[2],opacity:.6,fontSize:"0.6rem"},children:g},g))})]}),y.jsxs("div",{className:ge.previewBody,children:[y.jsx("div",{className:ge.previewHeadline,style:{background:r[1],borderRadius:4,height:12,width:"60%"}}),y.jsx("div",{className:ge.previewText,style:{background:r[2],borderRadius:3,height:8,width:"80%",opacity:.4,marginTop:8}}),y.jsx("div",{className:ge.previewText,style:{background:r[2],borderRadius:3,height:8,width:"65%",opacity:.4,marginTop:5}}),y.jsx("div",{className:ge.previewCta,style:{background:r[1],color:r[0],borderRadius:999,padding:"6px 16px",fontSize:"0.6rem",fontWeight:600,display:"inline-block",marginTop:16},children:"saiba mais"})]})]})]})]})}),y.jsx("section",{className:ge.formSection,children:y.jsx("div",{className:ge.formInner,children:y.jsxs("div",{className:ge.formCard,children:[y.jsxs("div",{className:ge.formLeft,children:[y.jsx("p",{className:ge.formEye,children:"Próximo passo"}),y.jsxs("h2",{className:ge.formTitle,children:["receba 3 opções",y.jsx("br",{}),y.jsx("span",{children:"no seu WhatsApp."})]}),y.jsx("p",{className:ge.formSub,children:"A gente pega a sua paleta e cria 3 variações profissionais. Você escolhe ao vivo, em call, e a gente já explica como isso vai aumentar suas vendas."}),x&&y.jsxs("div",{className:ge.formPalPreview,children:[x.map((g,S)=>y.jsx("div",{style:{background:g,width:28,height:28,borderRadius:6}},S)),y.jsx("span",{className:ge.formPalName,children:_})]})]}),y.jsxs("div",{className:ge.formRight,children:[y.jsxs("div",{className:ge.field,children:[y.jsx("label",{className:ge.label,children:"Seu nome"}),y.jsx("input",{className:ge.input,type:"text",placeholder:"João Silva",value:l,onChange:g=>c(g.target.value)})]}),y.jsxs("div",{className:ge.field,children:[y.jsx("label",{className:ge.label,children:"Seu número (WhatsApp)"}),y.jsx("input",{className:ge.input,type:"tel",placeholder:"(11) 99999-9999",value:u,onChange:g=>h(g.target.value)})]}),y.jsxs("button",{className:ge.formBtn,onClick:m,"data-cursor":!0,children:[y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"})}),"enviar paleta no WhatsApp"]}),y.jsx("p",{className:ge.formNote,children:"Retornamos em até 24h com as 3 opções."})]})]})})})]})}const DL="_wrap_skqhz_1",IL="_header_skqhz_3",UL="_headerInner_skqhz_8",OL="_eye_skqhz_10",kL="_title_skqhz_11",FL="_sub_skqhz_13",zL="_plansSection_skqhz_16",BL="_plansInner_skqhz_17",HL="_plansGrid_skqhz_19",VL="_planCard_skqhz_21",GL="_planHighlight_skqhz_29",WL="_planTag_skqhz_36",jL="_planTagGold_skqhz_37",XL="_planTagGray_skqhz_38",qL="_planTop_skqhz_40",$L="_planName_skqhz_41",YL="_planPrice_skqhz_43",KL="_planCurr_skqhz_44",ZL="_planNum_skqhz_45",QL="_planDelivery_skqhz_47",JL="_planDesc_skqhz_48",eD="_planBtn_skqhz_50",tD="_planBtnGold_skqhz_51",nD="_planBtnGhost_skqhz_53",iD="_features_skqhz_56",rD="_feat_skqhz_56",sD="_featNo_skqhz_59",oD="_featOk_skqhz_60",aD="_featX_skqhz_61",lD="_custom_skqhz_63",cD="_customLink_skqhz_64",uD="_faqSection_skqhz_68",fD="_faqInner_skqhz_69",dD="_faqEye_skqhz_71",hD="_faqTitle_skqhz_72",pD="_faqList_skqhz_74",mD="_faqItem_skqhz_76",_D="_faqQ_skqhz_79",gD="_faqArrow_skqhz_82",vD="_faqOpen_skqhz_84",xD="_faqAWrap_skqhz_87",yD="_faqA_skqhz_82",SD="_bottomCta_skqhz_103",MD="_bottomInner_skqhz_104",ED="_bottomEye_skqhz_106",wD="_bottomTitle_skqhz_107",TD="_bottomBtn_skqhz_110",Ce={wrap:DL,header:IL,headerInner:UL,eye:OL,title:kL,sub:FL,plansSection:zL,plansInner:BL,plansGrid:HL,planCard:VL,planHighlight:GL,planTag:WL,planTagGold:jL,planTagGray:XL,planTop:qL,planName:$L,planPrice:YL,planCurr:KL,planNum:ZL,planDelivery:QL,planDesc:JL,planBtn:eD,planBtnGold:tD,planBtnGhost:nD,features:iD,feat:rD,featNo:sD,featOk:oD,featX:aD,custom:lD,customLink:cD,faqSection:uD,faqInner:fD,faqEye:dD,faqTitle:hD,faqList:pD,faqItem:mD,faqQ:_D,faqArrow:gD,faqOpen:vD,faqAWrap:xD,faqA:yD,bottomCta:SD,bottomInner:MD,bottomEye:ED,bottomTitle:wD,bottomBtn:TD},AD=[{id:"essencial",name:"Site Essencial",price:"349",desc:"Landing page responsiva, WhatsApp, formulário simples e SEO básico.",highlight:!1,tag:null,delivery:"3 dias úteis",features:[{text:"Landing page responsiva",ok:!0},{text:"Hero + CTA + contato",ok:!0},{text:"Design mobile first",ok:!0},{text:"WhatsApp direto",ok:!0},{text:"Paleta de cores personalizada",ok:!0},{text:"Entrega em código limpo",ok:!0},{text:"SEO básico",ok:!0},{text:"Eventos de analytics",ok:!1},{text:"Formulário integrado",ok:!1},{text:"Dashboard de leads",ok:!1}]},{id:"profissional",name:"Site Pro",price:"649",desc:"Site + WhatsApp inteligente + formulário completo + analytics.",highlight:!0,tag:"mais escolhido",delivery:"7 dias úteis",features:[{text:"Landing page multi-seção completa",ok:!0},{text:"Hero, sobre, serviços e contato",ok:!0},{text:"Design mobile first",ok:!0},{text:"WhatsApp por serviço",ok:!0},{text:"Paleta de cores personalizada",ok:!0},{text:"Entrega em código limpo",ok:!0},{text:"SEO básico",ok:!0},{text:"Eventos de analytics",ok:!0},{text:"Formulário completo",ok:!0},{text:"Dashboard de leads",ok:!1}]},{id:"premium",name:"Presença Completa",price:"999",desc:"Site + analytics + dashboard + automação de leads.",highlight:!1,tag:"mais completo",delivery:"a combinar",features:[{text:"Projeto completo para captação",ok:!0},{text:"Design personalizado",ok:!0},{text:"Design mobile first",ok:!0},{text:"WhatsApp inteligente",ok:!0},{text:"Paleta de cores personalizada",ok:!0},{text:"Entrega em código limpo",ok:!0},{text:"SEO completo",ok:!0},{text:"Eventos de analytics",ok:!0},{text:"Dashboard de leads",ok:!0},{text:"Automação para planilha/CRM",ok:!0}]}],CD=[{q:"Como funciona o processo?",a:"Você escolhe o plano, entra em contato via WhatsApp, a gente agenda uma call rápida para entender o projeto e definir a paleta. Depois é só aguardar a entrega."},{q:"Posso parcelar?",a:"Sim. Aceitamos pagamento no pix, cartão ou parcelado. Fale com a gente para detalhes."},{q:"O que são revisões?",a:"Cada revisão é uma rodada de ajustes no design ou código após a primeira entrega. No plano Premium as revisões são ilimitadas até você aprovar."},{q:"Vocês fazem hospedagem?",a:"Entregamos o código pronto para você hospedar. Se precisar de ajuda com deploy, a gente orienta sem custo extra."},{q:"Tenho uma ideia fora dos planos. E aí?",a:"Fale com a gente. Todo projeto diferente recebe um orçamento personalizado. Não tem nada que não dá para fazer."}];function RD(){br();const[n,e]=Je.useState(null),t=i=>{const r=encodeURIComponent(`Olá! Tenho interesse no plano *${i}* da vera. Pode me passar mais detalhes?`);window.open(`https://wa.me/?text=${r}`,"_blank")};return y.jsxs("div",{className:Ce.wrap,children:[y.jsx("section",{className:Ce.header,children:y.jsxs("div",{className:Ce.headerInner,children:[y.jsx("p",{className:`${Ce.eye} reveal`,children:"Pacotes"}),y.jsxs("h1",{className:`${Ce.title} reveal`,children:["simples,",y.jsx("br",{}),y.jsx("span",{children:"transparente."})]}),y.jsx("p",{className:`${Ce.sub} reveal`,children:"Ofertas fáceis de entender para vender sites, cardápios, dashboards, analytics e automações."})]})}),y.jsx("section",{className:Ce.plansSection,children:y.jsxs("div",{className:Ce.plansInner,children:[y.jsx("div",{className:Ce.plansGrid,children:AD.map((i,r)=>y.jsxs("div",{className:`${Ce.planCard} ${i.highlight?Ce.planHighlight:""} reveal`,style:{transitionDelay:`${r*.1}s`},children:[i.tag&&y.jsx("div",{className:`${Ce.planTag} ${i.highlight?Ce.planTagGold:Ce.planTagGray}`,children:i.tag}),y.jsxs("div",{className:Ce.planTop,children:[y.jsx("p",{className:Ce.planName,children:i.name}),y.jsxs("div",{className:Ce.planPrice,children:[y.jsx("span",{className:Ce.planCurr,children:"R$"}),y.jsx("span",{className:Ce.planNum,children:i.price})]}),y.jsxs("p",{className:Ce.planDelivery,children:[y.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("circle",{cx:"12",cy:"12",r:"10"}),y.jsx("polyline",{points:"12 6 12 12 16 14"})]}),i.delivery]}),y.jsx("p",{className:Ce.planDesc,children:i.desc})]}),y.jsx("button",{className:`${Ce.planBtn} ${i.highlight?Ce.planBtnGold:Ce.planBtnGhost}`,onClick:()=>t(i.name),"data-cursor":!0,children:"quero este plano"}),y.jsx("ul",{className:Ce.features,children:i.features.map((s,o)=>y.jsxs("li",{className:`${Ce.feat} ${s.ok?"":Ce.featNo}`,children:[s.ok?y.jsx("span",{className:Ce.featOk,children:y.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("polyline",{points:"20 6 9 17 4 12"})})}):y.jsx("span",{className:Ce.featX,children:y.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),s.text]},o))})]},i.id))}),y.jsxs("p",{className:`${Ce.custom} reveal`,children:["Também fazemos cardápio digital e dashboard separados."," ",y.jsx("button",{className:Ce.customLink,onClick:()=>t("Personalizado"),"data-cursor":!0,children:"Fale com a gente para um orçamento personalizado →"})]})]})}),y.jsx("section",{className:Ce.faqSection,children:y.jsxs("div",{className:Ce.faqInner,children:[y.jsx("p",{className:`${Ce.faqEye} reveal`,children:"Dúvidas"}),y.jsx("h2",{className:`${Ce.faqTitle} reveal`,children:"Perguntas frequentes"}),y.jsx("div",{className:Ce.faqList,children:CD.map((i,r)=>y.jsx("div",{className:"reveal",children:y.jsxs("div",{className:`${Ce.faqItem} ${n===r?Ce.faqOpen:""}`,children:[y.jsxs("button",{className:Ce.faqQ,onClick:()=>e(n===r?null:r),"data-cursor":!0,children:[i.q,y.jsx("span",{className:Ce.faqArrow,children:y.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),y.jsx("div",{className:Ce.faqAWrap,children:y.jsx("p",{className:Ce.faqA,children:i.a})})]})},r))})]})}),y.jsx("section",{className:Ce.bottomCta,children:y.jsxs("div",{className:Ce.bottomInner,children:[y.jsx("p",{className:`${Ce.bottomEye} reveal`,children:"Ainda com dúvida?"}),y.jsxs("h2",{className:`${Ce.bottomTitle} reveal`,children:["a gente resolve",y.jsx("br",{}),y.jsx("span",{children:"agora."})]}),y.jsxs("button",{className:`${Ce.bottomBtn} reveal`,onClick:()=>t("Dúvida geral"),"data-cursor":!0,children:[y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"})}),"chamar no WhatsApp"]})]})})]})}const bD="_footer_180j7_1",PD="_inner_180j7_7",ND="_logo_180j7_16",LD="_place_180j7_29",DD="_tags_180j7_36",ga={footer:bD,inner:PD,logo:ND,place:LD,tags:DD};function ID(){return y.jsx("footer",{className:ga.footer,children:y.jsxs("div",{className:ga.inner,children:[y.jsxs("button",{className:ga.logo,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"data-cursor":!0,children:["vera",y.jsx("span",{children:"."})]}),y.jsx("p",{className:ga.place,children:"Itu, São Paulo — 2026"}),y.jsx("p",{className:ga.tags,children:"design · código · crescimento"})]})})}var qg="1.3.23";function Oy(n,e,t){return Math.max(n,Math.min(e,t))}function UD(n,e,t){return(1-t)*n+t*e}function OD(n,e,t,i){return UD(n,e,1-Math.exp(-t*i))}function kD(n,e){return(n%e+e)%e}var FD=class{constructor(){ye(this,"isRunning",!1);ye(this,"value",0);ye(this,"from",0);ye(this,"to",0);ye(this,"currentTime",0);ye(this,"lerp");ye(this,"duration");ye(this,"easing");ye(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=Oy(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=OD(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function zD(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var BD=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){ye(this,"width",0);ye(this,"height",0);ye(this,"scrollHeight",0);ye(this,"scrollWidth",0);ye(this,"debouncedResize");ye(this,"wrapperResizeObserver");ye(this,"contentResizeObserver");ye(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ye(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ye(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=zD(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ky=class{constructor(){ye(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const HD=100/6,gr={passive:!1};function $g(n,e){return n===1?HD:n===2?e:1}var VD=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){ye(this,"touchStart",{x:0,y:0});ye(this,"lastDelta",{x:0,y:0});ye(this,"window",{width:0,height:0});ye(this,"emitter",new ky);ye(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});ye(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});ye(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});ye(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=$g(i,this.window.width),s=$g(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});ye(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,gr),this.element.addEventListener("touchstart",this.onTouchStart,gr),this.element.addEventListener("touchmove",this.onTouchMove,gr),this.element.addEventListener("touchend",this.onTouchEnd,gr)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,gr),this.element.removeEventListener("touchstart",this.onTouchStart,gr),this.element.removeEventListener("touchmove",this.onTouchMove,gr),this.element.removeEventListener("touchend",this.onTouchEnd,gr)}};const Yg=n=>Math.min(1,1.001-2**(-10*n));var GD=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:x=1,autoResize:_=!0,prevent:m,virtualScroll:d,overscroll:v=!0,autoRaf:g=!1,anchors:S=!1,autoToggle:T=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:C=w,stopInertiaOnNavigate:E=!1}={}){ye(this,"_isScrolling",!1);ye(this,"_isStopped",!1);ye(this,"_isLocked",!1);ye(this,"_preventNextNativeScrollEvent",!1);ye(this,"_resetVelocityTimeout",null);ye(this,"_rafId",null);ye(this,"isTouching");ye(this,"time",0);ye(this,"userData",{});ye(this,"lastVelocity",0);ye(this,"velocity",0);ye(this,"direction",0);ye(this,"options");ye(this,"targetScroll");ye(this,"animatedScroll");ye(this,"animate",new FD);ye(this,"emitter",new ky);ye(this,"dimensions");ye(this,"virtualScroll");ye(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});ye(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ye(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});ye(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});ye(this,"onPointerDown",n=>{n.button===1&&this.reset()});ye(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(x=>{var _,m,d,v,g;return x instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(x))||((_=x.hasAttribute)==null?void 0:_.call(x,"data-lenis-prevent"))||u==="vertical"&&((m=x.hasAttribute)==null?void 0:m.call(x,"data-lenis-prevent-vertical"))||u==="horizontal"&&((d=x.hasAttribute)==null?void 0:d.call(x,"data-lenis-prevent-horizontal"))||r&&((v=x.hasAttribute)==null?void 0:v.call(x,"data-lenis-prevent-touch"))||s&&((g=x.hasAttribute)==null?void 0:g.call(x,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(x,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=r&&this.options.syncTouch,p=r&&i.type==="touchend";p&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ye(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ye(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=qg,window.lenis||(window.lenis={}),window.lenis.version=qg,h==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Yg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:p,wheelMultiplier:x,autoResize:_,prevent:m,virtualScroll:d,overscroll:v,autoRaf:g,anchors:S,autoToggle:T,allowNestedScroll:A,naiveDimensions:C,stopInertiaOnNavigate:E},this.dimensions=new BD(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new VD(t,{touchMultiplier:p,wheelMultiplier:x}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=n,p=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let x=null;if(typeof f=="string"?(x=document.querySelector(f),x||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(x=f),x){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?S.left:S.top}const _=x.getBoundingClientRect(),m=getComputedStyle(x),d=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),g=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(d)?0:d)-(Number.isNaN(g)?0:g)}}if(typeof f=="number"){if(f+=p,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const x=f-this.animatedScroll;x>this.limit/2?f-=this.limit:x<-this.limit/2&&(f+=this.limit)}}else f=Oy(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Yg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(x,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=x-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=x,this.setScroll(this.scroll),r&&(this.targetScroll=x),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,h,f,p,x;if(i-(r.time??0)>2e3){r.time=Date.now();const A=window.getComputedStyle(n);if(r.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;h=n.scrollWidth,f=n.scrollHeight,p=n.clientWidth,x=n.clientHeight,a=h>p,l=f>x,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=f,r.clientWidth=p,r.clientHeight=x,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,h=r.scrollWidth,f=r.scrollHeight,p=r.clientWidth,x=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,d,v,g,S,T;if(_==="horizontal")m=Math.round(n.scrollLeft),d=h-p,v=e,g=s,S=a,T=c;else if(_==="vertical")m=Math.round(n.scrollTop),d=f-x,v=t,g=o,S=l,T=u;else return!1;return!T&&(m>=d||m<=0)?!0:(v>0?m<d:m>0)&&g&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?kD(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};function WD(){Je.useEffect(()=>{const n=new GD({duration:1.1,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),smoothWheel:!0});let e;const t=r=>{n.raf(r),e=requestAnimationFrame(t)};e=requestAnimationFrame(t);const i=r=>{const s=r.target.closest('a[href^="#"]');if(!s)return;const o=s.getAttribute("href");if(o.length>1){const a=document.querySelector(o);a&&(r.preventDefault(),n.scrollTo(a,{offset:-10}))}};return document.addEventListener("click",i),()=>{cancelAnimationFrame(e),document.removeEventListener("click",i),n.destroy()}},[])}function jD(){const[n,e]=Je.useState("home"),[t,i]=Je.useState(!0);return WD(),Je.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[n]),y.jsxs(y.Fragment,{children:[t&&y.jsx(ew,{onDone:()=>i(!1)}),y.jsx(_M,{}),y.jsx(hw,{tab:n,setTab:e}),y.jsxs("main",{children:[n==="home"&&!t&&y.jsx(V3,{},"home"),n==="portfolio"&&y.jsx(bN,{},"portfolio"),n==="paletas"&&y.jsx(LL,{},"paletas"),n==="precos"&&y.jsx(RD,{},"precos")]}),y.jsx(ID,{})]})}lx(document.getElementById("root")).render(y.jsx(Je.StrictMode,{children:y.jsx(jD,{})}));
