function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e){return null==e?"":e}function c(e,t){e.appendChild(t)}function s(e,t,n){var r=function(e){if(!e)return document;var t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!r.getElementById(t)){var o=f("style");o.id=t,o.textContent=n,function(e,t){c(e.head||e,t),t.sheet}(r,o)}}function l(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t){for(var n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function v(){return p(" ")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.data!==t&&(e.data=t)}var h;function w(e){h=e}function b(e){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(e)}var _=[],x=[],S=[],k=[],C=Promise.resolve(),O=!1;function P(e){S.push(e)}var M=new Set,j=0;function E(){if(0===j){var e=h;do{try{for(;j<_.length;){var t=_[j];j++,w(t),F(t.$$)}}catch(e){throw _.length=0,j=0,e}for(w(null),_.length=0,j=0;x.length;)x.pop()();for(var n=0;n<S.length;n+=1){var r=S[n];M.has(r)||(M.add(r),r())}S.length=0}while(_.length);for(;k.length;)k.pop()();O=!1,M.clear(),w(e)}}function F(e){if(null!==e.fragment){e.update(),r(e.before_update);var t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}var $=new Set;function A(e,t){var n,o,a,i=e.$$;null!==i.fragment&&(n=i.after_update,o=[],a=[],S.forEach((e=>-1===n.indexOf(e)?o.push(e):a.push(e))),a.forEach((e=>e())),S=o,r(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function N(e,t){-1===e.$$.dirty[0]&&(_.push(e),O||(O=!0,C.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(a,i,c,s,l,d,f){var p=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[-1],v=h;w(a);var y=a.$$={fragment:null,ctx:[],props:d,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(v?v.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:i.target||v.$$.root};f&&f(y.root);var g,m,b=!1;if(y.ctx=c?c(a,i.props||{},(function(e,t){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:t;return y.ctx&&l(y.ctx[e],y.ctx[e]=n)&&(!y.skip_bound&&y.bound[e]&&y.bound[e](n),b&&N(a,e)),t})):[],y.update(),b=!0,r(y.before_update),y.fragment=!!s&&s(y.ctx),i.target){if(i.hydrate){var _=function(e){return Array.from(e.childNodes)}(i.target);y.fragment&&y.fragment.l(_),_.forEach(u)}else y.fragment&&y.fragment.c();i.intro&&((g=a.$$.fragment)&&g.i&&($.delete(g),g.i(m))),function(e,n,a,i){var{fragment:c,after_update:s}=e.$$;c&&c.m(n,a),i||P((()=>{var n=e.$$.on_mount.map(t).filter(o);e.$$.on_destroy?e.$$.on_destroy.push(...n):r(n),e.$$.on_mount=[]})),s.forEach(P)}(a,i.target,i.anchor,i.customElement),E()}w(v)}class T{$destroy(){A(this,1),this.$destroy=e}$on(t,n){if(!o(n))return e;var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{var e=r.indexOf(n);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function R(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){U(a,r,o,i,c,"next",e)}function c(e){U(a,r,o,i,c,"throw",e)}i(void 0)}))}}function H(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,q(e,t,"get"))}function B(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,q(e,t,"set"),n),n}function q(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function z(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}var W,G,V=e=>{var{name:t,currentDomainOnly:n=!1}=e,r="expires=Thu, 01 Jan 1970 00:00:01 GMT;",o="path=/;";document.cookie="".concat(t,"=;").concat(o).concat(r),n||(document.cookie="".concat(t,"=;").concat(o).concat(r," domain=").concat(function(){var e,t,n,{isCrossSubdomain:r=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=document.domain||"";return"localhost"===o||null!==(e=window.guardian)&&void 0!==e&&null!==(t=e.config)&&void 0!==t&&null!==(n=t.page)&&void 0!==n&&n.isPreview?o:r?["",...o.split(".").slice(-2)].join("."):o.replace(/^(www|m\.code|dev|m)\./,".")}(),";"))},Q=e=>"[object String]"===Object.prototype.toString.call(e),Y=new WeakMap;class K{constructor(e){z(this,Y,{writable:!0,value:void 0});try{var t=window[e],n=(new Date).toString();t.setItem(n,n);var r=t.getItem(n)==n;t.removeItem(n),r&&B(this,Y,t)}catch(e){}}isAvailable(){return Boolean(L(this,Y))}get(e){try{var t,n,r=JSON.parse(null!==(t=null===(n=L(this,Y))||void 0===n?void 0:n.getItem(e))&&void 0!==t?t:"");if(!(e=>{if("[object Object]"!==Object.prototype.toString.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype})(r))return null;var{value:o,expires:a}=r;return Q(a)&&new Date>new Date(a)?(this.remove(e),null):o}catch(e){return null}}set(e,t,n){var r;return null===(r=L(this,Y))||void 0===r?void 0:r.setItem(e,JSON.stringify({value:t,expires:n}))}remove(e){var t;return null===(t=L(this,Y))||void 0===t?void 0:t.removeItem(e)}clear(){var e;return null===(e=L(this,Y))||void 0===e?void 0:e.clear()}getRaw(e){var t,n;return null!==(t=null===(n=L(this,Y))||void 0===n?void 0:n.getItem(e))&&void 0!==t?t:null}setRaw(e,t){var n;return null===(n=L(this,Y))||void 0===n?void 0:n.setItem(e,t)}}var X,Z,ee=new(W=new WeakMap,G=new WeakMap,class{constructor(){z(this,W,{writable:!0,value:void 0}),z(this,G,{writable:!0,value:void 0})}get local(){return L(this,W)||B(this,W,new K("localStorage"))}get session(){return L(this,G)||B(this,G,new K("sessionStorage"))}}),te="gu.logger",ne={commercial:{background:"#77EEAA",font:"#004400"},cmp:{background:"#FF6BB5",font:"#2F0404"},dotcom:{background:"#000000",font:"#ff7300"},design:{background:"#185E36",font:"#FFF4F2"},tx:{background:"#2F4F4F",font:"#FFFFFF"},supporterRevenue:{background:"#0F70B7",font:"#ffffff"},identity:{background:"#6F5F8F",font:"#ffffff"},openJournalism:{background:"#C74600",font:"#FEF9F5"}},re=e=>Object.keys(ne).includes(e),oe=J(J({},ne),{common:{background:"#052962",font:"#ffffff"}}),ae=e=>{var{background:t,font:n}=oe[e];return"background: ".concat(t,"; color: ").concat(n,"; padding: 2px 3px; border-radius:3px")},ie=()=>{var e=ee.local.get(te);return Q(e)?e.split(",").filter(re):[]};"undefined"!=typeof window&&((X=window).guardian||(X.guardian={}),(Z=window.guardian).logger||(Z.logger={subscribeTo:e=>{var t=ie();t.includes(e)||t.push(e),ee.local.set(te,t.join(",")),ue(e,"🔔 Subscribed, hello!")},unsubscribeFrom:e=>{ue(e,"🔕 Unsubscribed, good-bye!");var t=ie().filter((t=>t!==e));ee.local.set(te,t.join(","))},teams:()=>Object.keys(ne)}));var ce,se,le,ue=function(e){if(ie().includes(e)){for(var t=[ae("common"),"",ae(e),""],n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console.log("%c@guardian%c %c".concat(e,"%c"),...t,...r)}},de=()=>ce,fe=e=>{var t,n;null===(t=window.performance)||void 0===t||null===(n=t.mark)||void 0===n||n.call(t,e),ue("cmp","[event]",e)},pe="undefined"==typeof window,ve=()=>{console.warn("This is a server-side version of the @guardian/consent-management-platform","No consent signals will be received.")},ye=e=>()=>(ve(),e),ge={__disable:ve,__enable:ye(!1),__isDisabled:ye(!1),hasInitialised:ye(!1),init:ve,showPrivacyManager:ve,version:"n/a",willShowPrivacyMessage:ye(Promise.resolve(!1)),willShowPrivacyMessageSync:ye(!1)},me=()=>(void 0===se&&(se=!!pe||window.location.host.endsWith(".theguardian.com")),se),he=me()?"https://sourcepoint.theguardian.com":"https://cdn.privacy-mgmt.com",we=()=>{return e="getUSPData",new Promise(((t,n)=>{window.__uspapi?window.__uspapi(e,1,((r,o)=>o?t(r):n(new Error("Unable to get ".concat(e," data"))))):n(new Error("No __uspapi found on window"))}));var e},be=function(){var e=R((function*(){return{personalisedAdvertising:!("Y"===(yield we()).uspString.charAt(2))}}));return function(){return e.apply(this,arguments)}}(),_e=()=>{return e="getUSPData",new Promise(((t,n)=>{window.__uspapi?window.__uspapi(e,1,((r,o)=>o?t(r):n(new Error("Unable to get ".concat(e," data"))))):n(new Error("No __uspapi found on window"))}));var e},xe=function(){var e=R((function*(){return{doNotSell:"Y"===(yield _e()).uspString.charAt(2)}}));return function(){return e.apply(this,arguments)}}(),Se=e=>new Promise(((t,n)=>{window.__tcfapi?window.__tcfapi(e,2,((r,o)=>o?t(r):n(new Error("Unable to get ".concat(e," data"))))):n(new Error("No __tcfapi found on window"))})),ke={1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1},Ce=function(){var e=R((function*(){var[e,t]=yield Promise.all([Se("addEventListener"),Se("getCustomVendorConsents")]);if(void 0===e){var n,r=null!==(n=de())&&void 0!==n?n:"undefined";throw new Error("No TC Data found with current framework: ".concat(r))}var o=J(J({},ke),e.purpose.consents),{eventStatus:a,gdprApplies:i,tcString:c,addtlConsent:s}=e,{grants:l}=t;return{consents:o,eventStatus:a,vendorConsents:Object.keys(l).sort().reduce(((e,t)=>J(J({},e),{},{[t]:l[t].vendorGrant})),{}),addtlConsent:s,gdprApplies:i,tcString:c}}));return function(){return e.apply(this,arguments)}}(),Oe=[],Pe=e=>{var t;return"cmpuishown"===(null===(t=e.tcfv2)||void 0===t?void 0:t.eventStatus)},Me=(e,t)=>{if(!Pe(t)){var n=JSON.stringify(t);n!==e.lastState&&(e.fn(t),e.lastState=n)}},je=e=>{var t=pe?void 0:navigator.globalPrivacyControl;if(e.tcfv2){var n=e.tcfv2.consents;return J(J({},e),{},{canTarget:Object.keys(n).length>0&&Object.values(n).every(Boolean),framework:"tcfv2",gpcSignal:t})}return e.ccpa?J(J({},e),{},{canTarget:!e.ccpa.doNotSell,framework:"ccpa",gpcSignal:t}):e.aus?J(J({},e),{},{canTarget:e.aus.personalisedAdvertising,framework:"aus",gpcSignal:t}):J(J({},e),{},{canTarget:!1,framework:null,gpcSignal:t})},Ee=function(){var e=R((function*(){switch(de()){case"aus":return je({aus:yield be()});case"ccpa":return je({ccpa:yield xe()});case"tcfv2":return je({tcfv2:yield Ce()});default:throw new Error("no IAB consent framework found on the page")}}));return function(){return e.apply(this,arguments)}}(),Fe=()=>{0!==Oe.length&&Ee().then((e=>{Pe(e)||Oe.forEach((t=>Me(t,e)))}))},$e=e=>{var t={fn:e};Oe.push(t),Ee().then((e=>{Me(t,e)})).catch((()=>{}))},Ae=()=>{!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r=n(2);e.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){n(4),function(){if("function"!=typeof window.__tcfapi){var e,t=[],n=window,r=n.document;!n.__tcfapi&&function e(){var t=!!n.frames.__tcfapiLocator;if(!t)if(r.body){var o=r.createElement("iframe");o.style.cssText="display:none",o.name="__tcfapiLocator",r.body.appendChild(o)}else setTimeout(e,5);return!t}()&&(n.__tcfapi=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];if(!r.length)return t;if("setGdprApplies"===r[0])r.length>3&&2===parseInt(r[1],10)&&"boolean"==typeof r[3]&&(e=r[3],"function"==typeof r[2]&&r[2]("set",!0));else if("ping"===r[0]){var a={gdprApplies:e,cmpLoaded:!1,apiVersion:"2.0"};"function"==typeof r[2]&&r[2](a,!0)}else t.push(r)},n.addEventListener("message",(function(e){var t="string"==typeof e.data,r={};try{r=t?JSON.parse(e.data):e.data}catch(e){}var o=r.__tcfapiCall;o&&n.__tcfapi(o.command,o.version,(function(n,r){var a={__tcfapiReturn:{returnValue:n,success:r,callId:o.callId}};t&&(a=JSON.stringify(a)),e.source.postMessage(a,"*")}),o.parameter)}),!1))}}()},function(e,t,n){var r=n(0),o=n(5).f,a=Function.prototype,i=a.toString,c=/^s*function ([^ (]*)/;r&&!("name"in a)&&o(a,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})},function(e,t,n){var r=n(0),o=n(6),a=n(10),i=n(11),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(a(e),t=i(t,!0),a(n),o)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(0),o=n(2),a=n(7);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(8),o=n(1),a=r.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n(9))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(1);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){var r=n(1);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}}])},Ne=e=>{"tcfv2"===e?Ae():function(){var e=window,t=document;function n(t){var n="string"==typeof t.data;try{var r=n?JSON.parse(t.data):t.data;if(r.__cmpCall){var o=r.__cmpCall;e.__uspapi(o.command,o.parameter,(function(e,r){var a={__cmpReturn:{returnValue:e,success:r,callId:o.callId}};t.source.postMessage(n?JSON.stringify(a):a,"*")}))}}catch(r){}}!function n(){if(!e.frames.__uspapiLocator)if(t.body){var r=t.body,o=t.createElement("iframe");o.style.cssText="display:none",o.name="__uspapiLocator",r.appendChild(o)}else setTimeout(n,5)}(),"function"!=typeof __uspapi&&(e.__uspapi=function(){var e=arguments;if(__uspapi.a=__uspapi.a||[],!e.length)return __uspapi.a;"ping"===e[0]?e[2]({gdprAppliesGlobally:!1,cmpLoaded:!1},!0):__uspapi.a.push([].slice.apply(e))},__uspapi.msgHandler=n,e.addEventListener("message",n,!1))}()},Ie=new Promise((e=>{le=e})),Te=e=>"aus"==e?"https://au.theguardian.com":me()?null:"https://test.theguardian.com",De=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Ne(e),window._sp_)throw new Error("Sourcepoint global (window._sp_) is already defined!");(e=>{ue("cmp","Framework set to ".concat(e)),ce=e})(e),Fe();var n="tcfv2"==e?"gdpr":"ccpa";ue("cmp","framework: ".concat(e)),ue("cmp","frameworkMessageType: ".concat(n)),window._sp_queue=[],window._sp_={config:{baseEndpoint:he,accountId:1257,propertyHref:Te(e),targetingParams:{framework:e},pubData:J(J({},t),{},{cmpInitTimeUtc:(new Date).getTime()}),events:{onConsentReady:(e,t,r)=>{ue("cmp","onConsentReady ".concat(e)),e==n&&(ue("cmp","consentUUID ".concat(t)),ue("cmp","euconsent ".concat(r)),fe("cmp-got-consent"),setTimeout(Fe,0))},onMessageReady:e=>{ue("cmp","onMessageReady ".concat(e)),e==n&&fe("cmp-ui-displayed")},onMessageReceiveData:(e,t)=>{ue("cmp","onMessageReceiveData ".concat(e)),e==n&&(ue("cmp","onMessageReceiveData ",t),le(0!==t.messageId))},onMessageChoiceSelect:(e,t,r)=>{ue("cmp","onMessageChoiceSelect message_type: ".concat(e)),console.log(),e==n&&(ue("cmp","onMessageChoiceSelect choice_id: ".concat(t)),ue("cmp","onMessageChoiceSelect choice_type_id: ".concat(r)),11!==r&&13!==r&&15!==r||setTimeout(Fe,0))},onPrivacyManagerAction:function(e,t){ue("cmp","onPrivacyManagerAction message_type: ".concat(e)),e==n&&ue("cmp","onPrivacyManagerAction ".concat(t))},onMessageChoiceError:function(e,t){ue("cmp","onMessageChoiceError ".concat(e)),e==n&&ue("cmp","onMessageChoiceError ".concat(t))},onPMCancel:function(e){ue("cmp","onPMCancel ".concat(e))},onSPPMObjectReady:function(){ue("cmp","onSPPMObjectReady")},onError:function(e,t,r,o){ue("cmp","errorCode: ".concat(e)),e==n&&(ue("cmp","errorCode: ".concat(t)),ue("cmp",r),ue("cmp","userReset: ".concat(o)))}}}},"tcfv2"===e?window._sp_.config.gdpr={targetingParams:{framework:e}}:window._sp_.config.ccpa={targetingParams:{framework:e}};var r=document.createElement("script");r.id="sourcepoint-lib",r.src="".concat(he,"/unified/wrapperMessagingWithoutDetection.js"),document.body.appendChild(r)};var Je,Ue,Re,He,Le,Be=(e,t)=>{fe("cmp-init"),De(e,t)},qe=()=>Ie,ze=function(){var e,t,n,r,o,a,i,c,s;switch(de()){case"tcfv2":null===(e=window._sp_)||void 0===e||null===(t=e.gdpr)||void 0===t||null===(n=t.loadPrivacyManagerModal)||void 0===n||n.call(t,106842);break;case"ccpa":null===(r=window._sp_)||void 0===r||null===(o=r.ccpa)||void 0===o||null===(a=o.loadPrivacyManagerModal)||void 0===a||a.call(o,540252);break;case"aus":null===(i=window._sp_)||void 0===i||null===(c=i.ccpa)||void 0===c||null===(s=c.loadPrivacyManagerModal)||void 0===s||s.call(c,540341)}},We="gu-cmp-disabled",Ge=()=>new RegExp("".concat(We,"=true(\\W+|$)")).test(document.cookie),Ve=J(J({},{a9:["5f369a02b8e05c308701f829"],acast:["5f203dcb1f0dea790562e20f"],braze:["5ed8c49c4b8ce4571c7ad801"],comscore:["5efefe25b8e05c06542b2a77"],criteo:["5e98e7f1b8e05c111d01b462"],"google-analytics":["5e542b3a4cd8884eb41b5a72"],"google-mobile-ads":["5f1aada6b8e05c306c0597d7"],"google-tag-manager":["5e952f6107d9d20c88e7c975"],googletag:["5f1aada6b8e05c306c0597d7"],ias:["5e7ced57b8e05c485246ccf3"],inizio:["5e37fc3e56a5e6615502f9c9"],ipsos:["5fa51b29a228638b4a1980e4"],magnite:["5e7ced57b8e05c485246cce5"],nielsen:["5ef5c3a5b8e05c69980eaa5b"],ophan:["5f203dbeeaaaa8768fd3226a"],permutive:["5f369a02b8e05c2f2d546a40"],prebid:["5f92a62aa22863685f4daa4c"],qm:["5f295fa4b8e05c76a44c3149"],remarketing:["5ed0eb688a76503f1016578f"],sentry:["5f0f39014effda6e8bbd2006"],teads:["5eab3d5ab8e05c2bbe33f399"],twitter:["5e71760b69966540e4554f01"],"youtube-player":["5e7ac3fae30e7d1bc1ebf5e8"]}),{redplanet:["not-tcfv2-vendor"]}),Qe=(e,t)=>{var n,r=Ve[e];if(void 0===r||Array.isArray(r)&&0===r.length)throw new Error("Vendor '".concat(e,"' not found, or with no Sourcepoint ID. ")+"If it should be added, raise an issue at https://github.com/guardian/consent-management-platform/issues");if(t.ccpa)return!t.ccpa.doNotSell;if(t.aus)return t.aus.personalisedAdvertising;var o=r.find((e=>{var n;return void 0!==(null===(n=t.tcfv2)||void 0===n?void 0:n.vendorConsents[e])}));if(void 0===o)return console.warn("No consent returned from Sourcepoint for vendor: '".concat(e,"'")),!1;var a=null===(n=t.tcfv2)||void 0===n?void 0:n.vendorConsents[o];return void 0===a?(console.warn("No consent returned from Sourcepoint for vendor: '".concat(e,"'")),!1):a},Ye={a9:{localStorage:["apstagUserAgentClientHints","apstagCxMEnabled"]},inizio:{localStorage:["__bm_s","__bm_m"]},criteo:{cookies:["cto_bundle"],localStorage:["criteo_fast_bid_expires","cto_bundle","criteo_fast_bid","criteo_pt_cdb_mngr_metrics","__ansync3rdp_criteo"]},comscore:{cookies:["comScore"]},ipsos:{cookies:["DM_SitId1073","DM_SitId1073SecId5802","DotMetrics.AmpCookie"],localStorage:["DotmetricsSiteData","DotMetricsTimeOnPage","DotMetricsUserId","DotMetricsDeviceGuidId"]},permutive:{cookies:["permutive-id"],localStorage:["permutive-data-queries","_pubcid","permutive-pvc","permutive-data-enrichers","permutive-session","permutive-data-misc","permutive-unprocessed-pba","permutive-app","permutive-data-models","permutive-id","permutive-consent","permutive-events-cache","permutive-data-queries","permutive-events-for-page","__permutiveConfigQueryParams"],sessionStorage:["__permutiveConfigQueryParams"]},prebid:{localStorage:["_psegs","_pubcid_exp"]},googletag:{cookies:["__gpi","__gads"]},"google-analytics":{cookies:["_gid","_ga"]}},Ke=e=>Object.keys(Ye).forEach((t=>{var n=Qe(t,e),r=Ye[t];n||("cookies"in r&&r.cookies.forEach((e=>{V({name:e})})),"localStorage"in r&&r.localStorage.forEach((e=>{ee.local.remove(e)})),"sessionStorage"in r&&r.sessionStorage.forEach((e=>{ee.session.remove(e)})))}));pe||window.guCmpHotFix||(window.guCmpHotFix={});var Xe,Ze=!1,et=new Promise((e=>{Xe=e})),tt=pe?ge:(Je=window.guCmpHotFix).cmp||(Je.cmp={init:e=>{var{pubData:t,country:n}=e;if(!Ge()&&!pe)if(window.guCmpHotFix.initialised){var r,o;"0.0.0-this-never-updates-in-source-code-refer-to-git-tags"!==(null===(r=window.guCmpHotFix.cmp)||void 0===r?void 0:r.version)&&console.warn("Two different versions of the CMP are running:",["0.0.0-this-never-updates-in-source-code-refer-to-git-tags",null===(o=window.guCmpHotFix.cmp)||void 0===o?void 0:o.version])}else{if(window.guCmpHotFix.initialised=!0,void 0===n)throw new Error("CMP initialised without `country` property. A 2-letter, ISO ISO_3166-1 country code is required.");var a=(e=>{var t;switch(e){case"US":t="ccpa";break;case"AU":t="aus";break;default:t="tcfv2"}return t})(n);Be(a,null!=t?t:{}),qe().then((e=>{Le=e,Ze=!0,ue("cmp","initComplete")})),Xe(),$e((e=>{"requestIdleCallback"in window?requestIdleCallback((()=>{Ke(e)}),{timeout:2e3}):Ke(e)}))}},willShowPrivacyMessage:()=>et.then((()=>qe())),willShowPrivacyMessageSync:()=>{if(void 0!==Le)return Le;throw new Error("CMP has not been initialised. Use the async willShowPrivacyMessage() instead.")},hasInitialised:()=>Ze,showPrivacyManager:()=>{et.then(ze)},version:"0.0.0-this-never-updates-in-source-code-refer-to-git-tags",__isDisabled:Ge,__enable:()=>{document.cookie="".concat(We,"=false")},__disable:()=>{document.cookie="".concat(We,"=true")}});pe||(Ue=window.guCmpHotFix).onConsent||(Ue.onConsent=()=>new Promise(((e,t)=>{$e((n=>{(n.tcfv2||n.ccpa||n.aus)&&e(n),t("Unknown framework")}))})));var nt=pe?()=>ve():(Re=window.guCmpHotFix).onConsentChange||(Re.onConsentChange=$e);function rt(e){s(e,"svelte-1rxyyu4",".svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{font-family:SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;font-size:12px}main.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{position:absolute;top:0;bottom:0;left:0;right:0;display:grid;grid-template-columns:auto 400px;grid-template-rows:auto 1fr;grid-template-areas:'footer sidebar'\n\t\t\t'main sidebar'}main.svelte-1rxyyu4>.svelte-1rxyyu4.svelte-1rxyyu4{overflow:auto}nav.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{grid-area:footer;padding:0.5rem;align-self:end;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);z-index:1;display:flex}nav.svelte-1rxyyu4 .svelte-1rxyyu4.svelte-1rxyyu4{font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,\n\t\t\tArial, sans-serif, Apple Color Emoji, Segoe UI Emoji;margin:0 0.25em 0}nav.svelte-1rxyyu4 .svelte-1rxyyu4+.svelte-1rxyyu4{margin-left:0.5em;max-width:50%}#consent-state.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{grid-area:main;padding:1rem}#events.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{grid-area:sidebar;list-style-type:none;padding:0;border-left:black solid 1px;overflow:auto;margin:0}#events.svelte-1rxyyu4 li.svelte-1rxyyu4.svelte-1rxyyu4{border-bottom:1px solid #eee;padding:0}#events.svelte-1rxyyu4 pre.svelte-1rxyyu4.svelte-1rxyyu4{margin:0;background-color:oldlace;color:deeppink;padding:0.4em 0.5em}label.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{display:inline-flex;align-items:center;padding:0.25em;border-radius:0.25em;border:rgba(0, 0, 0, 0.1) solid 1px}label.selected.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{background-color:lightgrey}summary.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{cursor:pointer;padding:0.2em 0.5em}.yes.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4,.no.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4,.label.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{display:inline-flex;min-height:1.5rem;min-width:1.5rem;align-items:center;justify-content:center;margin-right:1px;margin-bottom:1px;font-weight:normal;padding:0 1ch;box-sizing:border-box}.yes.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{background-color:chartreuse}.no.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{background-color:#ff1a4f}.label.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{width:auto;font-weight:normal;background-color:oldlace;color:deeppink}h2.svelte-1rxyyu4.svelte-1rxyyu4.svelte-1rxyyu4{font-weight:normal;margin:0 0 0.2rem}.svelte-1rxyyu4+h2.svelte-1rxyyu4.svelte-1rxyyu4{margin-top:1rem}")}function ot(e,t,n){const r=e.slice();return r[10]=t[n].title,r[11]=t[n].payload,r}function at(e,t,n){const r=e.slice();return r[14]=t[n][0],r[15]=t[n][1],r}function it(e,t,n){const r=e.slice();return r[18]=t[n][0],r[15]=t[n][1],r}function ct(t){let n;return{c(){n=f("h2"),n.textContent="¯\\_(ツ)_/¯",g(n,"class","svelte-1rxyyu4")},m(e,t){l(e,n,t)},p:e,d(e){e&&u(n)}}}function st(e){let t,n,r,o,a,s,d=e[1].aus.personalisedAdvertising+"";return{c(){t=f("h2"),t.textContent="aus.personalisedAdvertising",n=v(),r=f("span"),o=p(d),g(t,"class","svelte-1rxyyu4"),g(r,"data-personalised-advertising",a=e[1].aus.personalisedAdvertising),g(r,"class",s=i(e[1].aus.personalisedAdvertising?"yes":"no")+" svelte-1rxyyu4")},m(e,a){l(e,t,a),l(e,n,a),l(e,r,a),c(r,o)},p(e,t){2&t&&d!==(d=e[1].aus.personalisedAdvertising+"")&&m(o,d),2&t&&a!==(a=e[1].aus.personalisedAdvertising)&&g(r,"data-personalised-advertising",a),2&t&&s!==(s=i(e[1].aus.personalisedAdvertising?"yes":"no")+" svelte-1rxyyu4")&&g(r,"class",s)},d(e){e&&u(t),e&&u(n),e&&u(r)}}}function lt(e){let t,n,r,o,a,i=e[1].ccpa.doNotSell+"";return{c(){t=f("h2"),t.textContent="ccpa.doNotSell",n=v(),r=f("span"),o=p(i),g(t,"class","svelte-1rxyyu4"),g(r,"class","label svelte-1rxyyu4"),g(r,"data-donotsell",a=e[1].ccpa.doNotSell)},m(e,a){l(e,t,a),l(e,n,a),l(e,r,a),c(r,o)},p(e,t){2&t&&i!==(i=e[1].ccpa.doNotSell+"")&&m(o,i),2&t&&a!==(a=e[1].ccpa.doNotSell)&&g(r,"data-donotsell",a)},d(e){e&&u(t),e&&u(n),e&&u(r)}}}function ut(e){let t,n,r,o,a,i,s,y,h,w,b,_=e[1].tcfv2.eventStatus+"",x=Object.entries(e[1].tcfv2.consents),S=[];for(let t=0;t<x.length;t+=1)S[t]=dt(it(e,x,t));let k=Object.entries(e[1].tcfv2.vendorConsents),C=[];for(let t=0;t<k.length;t+=1)C[t]=ft(at(e,k,t));return{c(){t=f("h2"),t.textContent="tcfv2.eventStatus",n=v(),r=f("span"),o=p(_),a=v(),i=f("h2"),i.textContent="tcfv2.consents",s=v();for(let e=0;e<S.length;e+=1)S[e].c();y=v(),h=f("h2"),h.textContent="tcfv2.vendorConsents",w=v();for(let e=0;e<C.length;e+=1)C[e].c();b=p(""),g(t,"class","svelte-1rxyyu4"),g(r,"class","label svelte-1rxyyu4"),g(i,"class","svelte-1rxyyu4"),g(h,"class","svelte-1rxyyu4")},m(e,u){l(e,t,u),l(e,n,u),l(e,r,u),c(r,o),l(e,a,u),l(e,i,u),l(e,s,u);for(let t=0;t<S.length;t+=1)S[t]&&S[t].m(e,u);l(e,y,u),l(e,h,u),l(e,w,u);for(let t=0;t<C.length;t+=1)C[t]&&C[t].m(e,u);l(e,b,u)},p(e,t){if(2&t&&_!==(_=e[1].tcfv2.eventStatus+"")&&m(o,_),2&t){let n;for(x=Object.entries(e[1].tcfv2.consents),n=0;n<x.length;n+=1){const r=it(e,x,n);S[n]?S[n].p(r,t):(S[n]=dt(r),S[n].c(),S[n].m(y.parentNode,y))}for(;n<S.length;n+=1)S[n].d(1);S.length=x.length}if(2&t){let n;for(k=Object.entries(e[1].tcfv2.vendorConsents),n=0;n<k.length;n+=1){const r=at(e,k,n);C[n]?C[n].p(r,t):(C[n]=ft(r),C[n].c(),C[n].m(b.parentNode,b))}for(;n<C.length;n+=1)C[n].d(1);C.length=k.length}},d(e){e&&u(t),e&&u(n),e&&u(r),e&&u(a),e&&u(i),e&&u(s),d(S,e),e&&u(y),e&&u(h),e&&u(w),d(C,e),e&&u(b)}}}function dt(e){let t,n,r,o,a,s=e[18]+"";return{c(){t=f("span"),n=p(s),g(t,"class",r=i(JSON.parse(e[15])?"yes":"no")+" svelte-1rxyyu4"),g(t,"data-purpose",o=e[18]),g(t,"data-consent",a=e[15])},m(e,r){l(e,t,r),c(t,n)},p(e,c){2&c&&s!==(s=e[18]+"")&&m(n,s),2&c&&r!==(r=i(JSON.parse(e[15])?"yes":"no")+" svelte-1rxyyu4")&&g(t,"class",r),2&c&&o!==(o=e[18])&&g(t,"data-purpose",o),2&c&&a!==(a=e[15])&&g(t,"data-consent",a)},d(e){e&&u(t)}}}function ft(e){let t,n,r,o=e[14]+"";return{c(){t=f("span"),n=p(o),g(t,"class",r=i(JSON.parse(e[15])?"yes":"no")+" svelte-1rxyyu4")},m(e,r){l(e,t,r),c(t,n)},p(e,a){2&a&&o!==(o=e[14]+"")&&m(n,o),2&a&&r!==(r=i(JSON.parse(e[15])?"yes":"no")+" svelte-1rxyyu4")&&g(t,"class",r)},d(e){e&&u(t)}}}function pt(e){let t,n,r,o,a,i,s,d,y=e[10]+"",h=JSON.stringify(e[11],null,4)+"";return{c(){t=f("li"),n=f("details"),r=f("summary"),o=p(y),a=v(),i=f("pre"),s=p(h),d=v(),g(r,"class","svelte-1rxyyu4"),g(i,"class","svelte-1rxyyu4"),g(n,"class","svelte-1rxyyu4"),g(t,"class","svelte-1rxyyu4")},m(e,u){l(e,t,u),c(t,n),c(n,r),c(r,o),c(n,a),c(n,i),c(i,s),c(t,d)},p(e,t){4&t&&y!==(y=e[10]+"")&&m(o,y),4&t&&h!==(h=JSON.stringify(e[11],null,4)+"")&&m(s,h)},d(e){e&&u(t)}}}function vt(t){let n,o,a,s,m,h,w,b,_,x,S,k,C,O,P,M,j,E,F,$,A,N,I,T,D,J,U,R,H,L;function B(e,t){return e[1].tcfv2?ut:e[1].ccpa?lt:e[1].aus?st:ct}let q=B(t),z=q(t),W=t[2],G=[];for(let e=0;e<W.length;e+=1)G[e]=pt(ot(t,W,e));var V,Q;return V=t[6][0],R={p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];(Q=t).forEach((e=>V.push(e)))},r(){Q.forEach((e=>V.splice(V.indexOf(e),1)))}},{c(){n=f("main"),o=f("nav"),a=f("button"),a.textContent="open privacy manager",s=v(),m=f("button"),m.textContent="clear preferences",h=v(),w=f("label"),b=f("input"),_=p("\n\t\t\tin RoW:"),x=f("strong"),x.textContent="TCFv2",k=v(),C=f("label"),O=f("input"),P=p("\n\t\t\tin USA:\n\t\t\t"),M=f("strong"),M.textContent="CCPA",E=v(),F=f("label"),$=f("input"),A=p("\n\t\t\tin Australia:\n\t\t\t"),N=f("strong"),N.textContent="CCPA-like",T=v(),D=f("div"),z.c(),J=v(),U=f("ol");for(let e=0;e<G.length;e+=1)G[e].c();g(a,"data-cy","pm"),g(a,"class","svelte-1rxyyu4"),g(m,"class","svelte-1rxyyu4"),g(b,"type","radio"),b.__value="tcfv2",b.value=b.__value,g(b,"class","svelte-1rxyyu4"),g(x,"class","svelte-1rxyyu4"),g(w,"class",S=i("tcfv2"==t[0]?"selected":"none")+" svelte-1rxyyu4"),g(O,"type","radio"),O.__value="ccpa",O.value=O.__value,g(O,"class","svelte-1rxyyu4"),g(M,"class","svelte-1rxyyu4"),g(C,"class",j=i("ccpa"==t[0]?"selected":"none")+" svelte-1rxyyu4"),g($,"type","radio"),$.__value="aus",$.value=$.__value,g($,"class","svelte-1rxyyu4"),g(N,"class","svelte-1rxyyu4"),g(F,"class",I=i("aus"==t[0]?"selected":"none")+" svelte-1rxyyu4"),g(o,"class","svelte-1rxyyu4"),g(D,"id","consent-state"),g(D,"class","svelte-1rxyyu4"),g(U,"id","events"),g(U,"class","svelte-1rxyyu4"),g(n,"class","svelte-1rxyyu4"),R.p(b,O,$)},m(e,r){l(e,n,r),c(n,o),c(o,a),c(o,s),c(o,m),c(o,h),c(o,w),c(w,b),b.checked=b.__value===t[0],c(w,_),c(w,x),c(o,k),c(o,C),c(C,O),O.checked=O.__value===t[0],c(C,P),c(C,M),c(o,E),c(o,F),c(F,$),$.checked=$.__value===t[0],c(F,A),c(F,N),c(n,T),c(n,D),z.m(D,null),c(n,J),c(n,U);for(let e=0;e<G.length;e+=1)G[e]&&G[e].m(U,null);H||(L=[y(a,"click",tt.showPrivacyManager),y(m,"click",t[3]),y(b,"change",t[5]),y(b,"change",t[4]),y(O,"change",t[7]),y(O,"change",t[4]),y($,"change",t[8]),y($,"change",t[4])],H=!0)},p(e,[t]){if(1&t&&(b.checked=b.__value===e[0]),1&t&&S!==(S=i("tcfv2"==e[0]?"selected":"none")+" svelte-1rxyyu4")&&g(w,"class",S),1&t&&(O.checked=O.__value===e[0]),1&t&&j!==(j=i("ccpa"==e[0]?"selected":"none")+" svelte-1rxyyu4")&&g(C,"class",j),1&t&&($.checked=$.__value===e[0]),1&t&&I!==(I=i("aus"==e[0]?"selected":"none")+" svelte-1rxyyu4")&&g(F,"class",I),q===(q=B(e))&&z?z.p(e,t):(z.d(1),z=q(e),z&&(z.c(),z.m(D,null))),4&t){let n;for(W=e[2],n=0;n<W.length;n+=1){const r=ot(e,W,n);G[n]?G[n].p(r,t):(G[n]=pt(r),G[n].c(),G[n].m(U,null))}for(;n<G.length;n+=1)G[n].d(1);G.length=W.length}},i:e,o:e,d(e){e&&u(n),z.d(),d(G,e),R.r(),H=!1,r(L)}}}function yt(e,t,n){let r,o;switch(window.location.hash){case"#tcfv2":localStorage.setItem("framework",JSON.stringify("tcfv2"));break;case"#ccpa":localStorage.setItem("framework",JSON.stringify("ccpa"));break;case"#aus":localStorage.setItem("framework",JSON.stringify("aus"));break;default:window.location.hash="tcfv2",localStorage.setItem("framework",JSON.stringify("tcfv2"))}function a(e){n(2,o=[...o,e]),ue("cmp",e)}window.guardian.logger.subscribeTo("cmp"),window.guCmpHotFix=new Proxy(window.guCmpHotFix,{set:(e,t,n)=>(e[t]=n,console.info("%cwindow.guCmpHotFix","color: deeppink;",{...window.guCmpHotFix}),!0)});let i=()=>{localStorage.clear(),document.cookie.split(";").forEach((e=>{document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)})),window.location.reload()},c=JSON.parse(localStorage.getItem("framework"));tt.willShowPrivacyMessage().then((e=>{a({title:"cmp.willShowPrivacyMessage",payload:e})})),nt((e=>{a({title:"onConsentChange",payload:e}),n(1,r=e)})),b((async()=>{let e="";switch(c){case"tcfv2":e="GB";break;case"ccpa":e="US";break;case"aus":e="AU"}tt.init({country:e}),tt.init({country:e}),tt.init({country:e}),tt.init({country:e})}));return n(1,r={}),n(2,o=[]),[c,r,o,i,()=>{localStorage.setItem("framework",JSON.stringify(c)),window.location.hash=c,i()},function(){c=this.__value,n(0,c)},[[]],function(){c=this.__value,n(0,c)},function(){c=this.__value,n(0,c)}]}pe||(He=window.guCmpHotFix).getConsentFor||(He.getConsentFor=Qe);var gt=new class extends T{constructor(e){super(),I(this,e,yt,vt,a,{},rt)}}({target:document.body});export{gt as default};
//# sourceMappingURL=index.js.map
