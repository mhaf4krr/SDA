_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(r.default.useContext(i.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},i=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery,c=void 0!==i&&i;return n||r&&c}},"4eaG":function(e,t,n){e.exports={main_wrapper:"Card_main_wrapper__2r4A6"}},"5Sku":function(e,t,n){e.exports={main_wrapper:"LandUseSection_main_wrapper__312qG",sub_wrapper:"LandUseSection_sub_wrapper__17oX3",map_wrapper:"LandUseSection_map_wrapper__12QTj"}},"5rfp":function(e,t,n){e.exports={main_wrapper:"Card_main_wrapper___F0Wb",image:"Card_image__3srQg",information:"Card_information__R4j0C"}},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(a=n("Xuae"))&&a.__esModule?a:{default:a},c=n("lwAK"),o=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var i=!0,c=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){c=!0;var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var d=r.props[l],f=a[l]||new Set;"name"===l&&c||!f.has(d)?(f.add(d),a[l]=f):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,r.useContext)(c.AmpStateContext),a=(0,r.useContext)(o.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}b.rewind=function(){};var m=b;t.default=m},AJ8q:function(e,t,n){e.exports={main_wrapper:"AboutSection_main_wrapper__1sYWd"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},E72d:function(e,t,n){e.exports={main_wrapper:"People_main_wrapper__2HeEm"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},LwFo:function(e,t,n){e.exports={main_wrapper:"NotificationSection_main_wrapper__1mFc2"}},Mt1y:function(e,t,n){"use strict";var a=n("wx14"),r=n("iuhU"),i=(n("17x9"),n("q1tI")),c=n.n(i),o=n("ZeOK"),s=n("ICNK"),u=n("Y53p"),l=n("H+2d");function d(e){var t=e.children,n=e.className,i=e.clearing,p=e.content,f=e.fitted,b=e.hidden,m=e.horizontal,h=e.inverted,v=e.section,j=e.vertical,O=Object(r.default)("ui",Object(o.a)(i,"clearing"),Object(o.a)(f,"fitted"),Object(o.a)(b,"hidden"),Object(o.a)(m,"horizontal"),Object(o.a)(h,"inverted"),Object(o.a)(v,"section"),Object(o.a)(j,"vertical"),"divider",n),x=Object(s.a)(d,e),g=Object(u.a)(d,e);return c.a.createElement(g,Object(a.a)({},x,{className:O}),l.a.isNil(t)?p:t)}d.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],d.propTypes={},t.a=d},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Pmoa:function(e,t){e.exports=next},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,a,r,i,c,o){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,r,i,c,o],l=0;(s=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),c=n("Bnag");e.exports=function(e){return a(e)||r(e)||i(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return gt})),n.d(t,"default",(function(){return yt}));var a=n("nKUr"),r=n("q1tI"),i=n.n(r),c=n("g4pe"),o=n.n(c),s=n("u46R"),u=n.n(s);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var p=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function f(e){var t=p(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var b=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function m(e){var t=function(e){var t=Object(r.useRef)(e);return t.current=e,t}(e);Object(r.useEffect)((function(){return function(){return t.current()}}),[])}var h=Math.pow(2,31)-1;function v(e,t,n){var a=n-Date.now();e.current=a<=h?setTimeout(t,a):setTimeout((function(){return v(e,t,n)}),h)}function j(){var e=function(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(r.useRef)();return m((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=h?t.current=setTimeout(a,r):v(t,a,Date.now()+r))},clear:n}}),[])}var O=n("TSYQ"),x=n.n(O),g=n("zLVn"),y=n("dI71"),_=n("17x9"),w=n.n(_),E=n("i8i4"),N=n.n(E),S=!1,C=i.a.createContext(null),k="unmounted",P="exited",A="entering",M="entered",I="exiting",T=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=P,a.appearStatus=A):r=M:r=t.unmountOnExit||t.mountOnEnter?k:P,a.state={status:r},a.nextCallback=null,a}Object(y.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===k?{status:P}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==A&&n!==M&&(t=A):n!==A&&n!==M||(t=I)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===A?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===P&&this.setState({status:k})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[N.a.findDOMNode(this),a],i=r[0],c=r[1],o=this.getTimeouts(),s=a?o.appear:o.enter;!e&&!n||S?this.safeSetState({status:M},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,c),this.safeSetState({status:A},(function(){t.props.onEntering(i,c),t.onTransitionEnd(s,(function(){t.safeSetState({status:M},(function(){t.props.onEntered(i,c)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:N.a.findDOMNode(this);t&&!S?(this.props.onExit(a),this.safeSetState({status:I},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:P},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:P},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:N.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],c=r[1];this.props.addEndListener(i,c)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===k)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(g.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(C.Provider,{value:null},"function"===typeof n?n(e,a):i.a.cloneElement(i.a.Children.only(n),a))},t}(i.a.Component);function D(){}T.contextType=C,T.propTypes={},T.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:D,onEntering:D,onEntered:D,onExit:D,onExiting:D,onExited:D},T.UNMOUNTED=k,T.EXITED=P,T.ENTERING=A,T.ENTERED=M,T.EXITING=I;var R=T,L=n("wx14");n("QLaP");function K(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function H(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function q(e,t){return Object.keys(t).reduce((function(n,a){var i,c=n,o=c[K(a)],s=c[a],u=Object(g.a)(c,[K(a),a].map(H)),l=t[a],d=function(e,t,n){var a=Object(r.useRef)(void 0!==e),i=Object(r.useState)(t),c=i[0],o=i[1],s=void 0!==e,u=a.current;return a.current=s,!s&&u&&c!==t&&o(t),[s?e:c,Object(r.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(a)),o(e)}),[n])]}(s,o,e[l]),p=d[0],f=d[1];return Object(L.a)({},u,((i={})[a]=p,i[l]=f,i))}),e)}function F(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function U(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function z(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}F.__suppressDeprecationWarning=!0,U.__suppressDeprecationWarning=!0,z.__suppressDeprecationWarning=!0;var G=/-(.)/g;var W=i.a.createContext({});W.Consumer,W.Provider;function Y(e,t){var n=Object(r.useContext)(W);return e||n[t]||t}var J=function(e){return e[0].toUpperCase()+(t=e,t.replace(G,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var X=function(e,t){var n=void 0===t?{}:t,a=n.displayName,r=void 0===a?J(e):a,c=n.Component,o=n.defaultProps,s=i.a.forwardRef((function(t,n){var a=t.className,r=t.bsPrefix,o=t.as,s=void 0===o?c||"div":o,u=d(t,["className","bsPrefix","as"]),p=Y(r,e);return i.a.createElement(s,l({ref:n,className:x()(a,p)},u))}));return s.defaultProps=o,s.displayName=r,s}("carousel-caption"),B=i.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,r=e.bsPrefix,c=e.children,o=e.className,s=d(e,["as","bsPrefix","children","className"]),u=x()(o,Y(r,"carousel-item"));return i.a.createElement(a,l({ref:t},s,{className:u}),c)}));B.displayName="CarouselItem";var V=B;function Z(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}var Q=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)};function $(e){return!e||"#"===e.trim()}var ee=i.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"a":n,r=e.disabled,c=e.onKeyDown,o=d(e,["as","disabled","onKeyDown"]),s=function(e){var t=o.href,n=o.onClick;(r||$(t))&&e.preventDefault(),r?e.stopPropagation():n&&n(e)};return $(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),r&&(o.tabIndex=-1,o["aria-disabled"]=!0),i.a.createElement(a,l({ref:t},o,{onClick:s,onKeyDown:Q((function(e){" "===e.key&&(e.preventDefault(),s(e))}),c)}))}));ee.displayName="SafeAnchor";var te=ee;function ne(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var ae=/([A-Z])/g;var re=/^ms-/;function ie(e){return function(e){return e.replace(ae,"-$1").toLowerCase()}(e).replace(re,"-ms-")}var ce=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var oe=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(ie(t))||function(e,t){return ne(e).getComputedStyle(e,t)}(e).getPropertyValue(ie(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!ce.test(e))}(r)?n+=ie(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(ie(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n},se=!("undefined"===typeof window||!window.document||!window.document.createElement),ue=!1,le=!1;try{var de={get passive(){return ue=!0},get once(){return le=ue=!0}};se&&(window.addEventListener("test",de,de),window.removeEventListener("test",de,!0))}catch(_t){}var pe=function(e,t,n,a){if(a&&"boolean"!==typeof a&&!le){var r=a.once,i=a.capture,c=n;!le&&r&&(c=n.__once||function e(a){this.removeEventListener(t,e,i),n.call(this,a)},n.__once=c),e.addEventListener(t,c,ue?a:i)}e.addEventListener(t,n,a)};var fe=function(e,t,n,a){var r=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var be=function(e,t,n,a){return pe(e,t,n,a),function(){fe(e,t,n,a)}};function me(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=be(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}function he(e,t,n,a){null==n&&(n=function(e){var t=oe(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=me(e,n,a),i=be(e,"transitionend",t);return function(){r(),i()}}function ve(e,t){var n=oe(e,t)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function je(e,t){var n=ve(e,"transitionDuration"),a=ve(e,"transitionDelay"),r=he(e,(function(n){n.target===e&&(r(),t(n))}),n+a)}var Oe={bsPrefix:w.a.string,as:w.a.elementType,slide:w.a.bool,fade:w.a.bool,controls:w.a.bool,indicators:w.a.bool,activeIndex:w.a.number,onSelect:w.a.func,onSlide:w.a.func,onSlid:w.a.func,interval:w.a.number,keyboard:w.a.bool,pause:w.a.oneOf(["hover",!1]),wrap:w.a.bool,touch:w.a.bool,prevIcon:w.a.node,prevLabel:w.a.string,nextIcon:w.a.node,nextLabel:w.a.string},xe={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function ge(e,t){var n=q(e,{activeIndex:"onSelect"}),a=n.as,c=void 0===a?"div":a,o=n.bsPrefix,s=n.slide,u=n.fade,m=n.controls,h=n.indicators,v=n.activeIndex,O=n.onSelect,g=n.onSlide,y=n.onSlid,_=n.interval,w=n.keyboard,E=n.onKeyDown,N=n.pause,S=n.onMouseOver,C=n.onMouseOut,k=n.wrap,P=n.touch,A=n.onTouchStart,M=n.onTouchMove,I=n.onTouchEnd,T=n.prevIcon,D=n.prevLabel,L=n.nextIcon,K=n.nextLabel,H=n.className,F=n.children,U=d(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),z=Y(o,"carousel"),G=Object(r.useRef)(null),W=Object(r.useState)("next"),J=W[0],X=W[1],B=Object(r.useState)(!1),V=B[0],Q=B[1],$=Object(r.useState)(!1),ee=$[0],ne=$[1],ae=Object(r.useState)(v||0),re=ae[0],ie=ae[1];ee||v===re||(G.current?X(G.current):X((v||0)>re?"next":"prev"),s&&ne(!0),ie(v||0)),Object(r.useEffect)((function(){G.current&&(G.current=null)}));var ce,oe=0;!function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(F,(function(e,t){++oe,t===v&&(ce=e.props.interval)}));var se=p(ce),ue=Object(r.useCallback)((function(e){if(!ee){var t=re-1;if(t<0){if(!k)return;t=oe-1}G.current="prev",O&&O(t,e)}}),[ee,re,O,k,oe]),le=f((function(e){if(!ee){var t=re+1;if(t>=oe){if(!k)return;t=0}G.current="next",O&&O(t,e)}})),de=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:de.current,prev:ue,next:le}}));var pe=f((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(de.current)&&le()})),fe="next"===J?"left":"right";b((function(){s||(g&&g(re,fe),y&&y(re,fe))}),[re]);var be=z+"-item-"+J,me=z+"-item-"+fe,he=Object(r.useCallback)((function(e){!function(e){e.offsetHeight}(e),g&&g(re,fe)}),[g,re,fe]),ve=Object(r.useCallback)((function(){ne(!1),y&&y(re,fe)}),[y,re,fe]),Oe=Object(r.useCallback)((function(e){if(w&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ue(e);case"ArrowRight":return e.preventDefault(),void le(e)}E&&E(e)}),[w,E,ue,le]),xe=Object(r.useCallback)((function(e){"hover"===N&&Q(!0),S&&S(e)}),[N,S]),ge=Object(r.useCallback)((function(e){Q(!1),C&&C(e)}),[C]),ye=Object(r.useRef)(0),_e=Object(r.useRef)(0),we=j(),Ee=Object(r.useCallback)((function(e){ye.current=e.touches[0].clientX,_e.current=0,"hover"===N&&Q(!0),A&&A(e)}),[N,A]),Ne=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?_e.current=0:_e.current=e.touches[0].clientX-ye.current,M&&M(e)}),[M]),Se=Object(r.useCallback)((function(e){if(P){var t=_e.current;Math.abs(t)>40&&(t>0?ue(e):le(e))}"hover"===N&&we.set((function(){Q(!1)}),_||void 0),I&&I(e)}),[P,N,ue,le,we,_,I]),Ce=null!=_&&!V&&!ee,ke=Object(r.useRef)();Object(r.useEffect)((function(){var e,t;if(Ce)return ke.current=window.setInterval(document.visibilityState?pe:le,null!=(e=null!=(t=se.current)?t:_)?e:void 0),function(){null!==ke.current&&clearInterval(ke.current)}}),[Ce,le,se,_,pe]);var Pe=Object(r.useMemo)((function(){return h&&Array.from({length:oe},(function(e,t){return function(e){O&&O(t,e)}}))}),[h,oe,O]);return i.a.createElement(c,l({ref:de},U,{onKeyDown:Oe,onMouseOver:xe,onMouseOut:ge,onTouchStart:Ee,onTouchMove:Ne,onTouchEnd:Se,className:x()(H,z,s&&"slide",u&&z+"-fade")}),h&&i.a.createElement("ol",{className:z+"-indicators"},Z(F,(function(e,t){return i.a.createElement("li",{key:t,className:t===re?"active":void 0,onClick:Pe?Pe[t]:void 0})}))),i.a.createElement("div",{className:z+"-inner"},Z(F,(function(e,t){var n=t===re;return s?i.a.createElement(R,{in:n,onEnter:n?he:void 0,onEntered:n?ve:void 0,addEndListener:je},(function(t){return i.a.cloneElement(e,{className:x()(e.props.className,n&&"entered"!==t&&be,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&me)})})):i.a.cloneElement(e,{className:x()(e.props.className,n&&"active")})}))),m&&i.a.createElement(i.a.Fragment,null,(k||0!==v)&&i.a.createElement(te,{className:z+"-control-prev",onClick:ue},T,D&&i.a.createElement("span",{className:"sr-only"},D)),(k||v!==oe-1)&&i.a.createElement(te,{className:z+"-control-next",onClick:le},L,K&&i.a.createElement("span",{className:"sr-only"},K))))}var ye=i.a.forwardRef(ge);ye.displayName="Carousel",ye.propTypes=Oe,ye.defaultProps=xe,ye.Caption=X,ye.Item=V;var _e=ye,we=n("u9WA"),Ee=n.n(we),Ne=n("rxnA");function Se(e){return Object(a.jsxs)(_e,{className:Ee.a.slide,children:[console.log(e.banners),e.banners.map((function(e){return Object(a.jsxs)(_e.Item,{className:Ee.a.slide,children:[Object(a.jsx)("img",{className:"d-block w-100",src:Ne.a+e.file.url,alt:"slide"}),Object(a.jsx)(_e.Caption,{children:Object(a.jsx)("p",{children:e.title})})]})}))]})}var Ce=n("E72d"),ke=n.n(Ce),Pe=n("5rfp"),Ae=n.n(Pe);function Me(e){return Object(a.jsxs)("div",{className:Ae.a.main_wrapper,children:[Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(e.img,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:Ae.a.image}),Object(a.jsxs)("div",{className:Ae.a.information,children:[Object(a.jsx)("h5",{children:e.name}),Object(a.jsx)("p",{children:e.designation})]})]})}function Ie(){return Object(a.jsxs)("div",{className:ke.a.main_wrapper,children:[Object(a.jsx)(Me,{img:"/assets/ps.jpg",name:"Mr. Dheeraj Gupta(IAS)",designation:"Principal Secretary to Govt, Housing and UD Dept."}),Object(a.jsx)(Me,{img:"/assets/vc.jpeg",name:"Dr. Bashir Ahmad Lone(KAS)",designation:"Vice Chairman, Srinagar Development Authority"})]})}function Te(e){return Object(a.jsxs)("div",{className:u.a.main_wrapper,children:[Object(a.jsx)("div",{className:u.a.banner,children:Object(a.jsx)(Se,{banners:e.banners})}),Object(a.jsx)("div",{className:u.a.people,children:Object(a.jsx)(Ie,{})})]})}var De=n("Mt1y"),Re=n("sRW8"),Le=n.n(Re),Ke=n("aQu0"),He=n("AJ8q"),qe=n.n(He);function Fe(){return Object(a.jsxs)("div",{className:qe.a.main_wrapper,children:[Object(a.jsx)(Ke.a,{textAlign:"center",style:{color:"#03045e"},as:"h3",children:"Srinagar Development Authority"}),Object(a.jsx)("p",{children:"The Srinagar Development Authority was constituted under section 3 of Jammu and Kashmir Development Act, 1970, (enforced w.e.f. 31st October 1970 by Notification S.R.O 518 dated 31-10-1970), the Local Area delineated vide SRO 43 dated 2nd February 1971 for the purpose of this Act formed the area of jurisdiction of the Authority. First Master Plan of the said Local area was approved by Government and notified vide SRO 754 dated 22nd November 1976. The second Master Plan (2000 \u2013 2021) was approved by Government vide Cabinet Decision No. 11/1 dated 16-01-2003 and notified vide SRO-28 dated 30th January 2003. The Master Plan 2035 is a third statutory document, wherein Srinagar Metropolitan planning limits have been increased from 416 sq kms too 766 sq kms. The Master Plan 2035 was approved by State Administrative Council(SAC) and subsequently notified Vide SRO 160 dated 07.03.2019"})]})}var Ue=n("ODXe"),ze=n("R6OX"),Ge=n("iuhU"),We=n("ZeOK"),Ye=n("ICNK"),Je=n("Y53p"),Xe=n("H+2d");function Be(e){var t=e.children,n=e.className,a=e.compact,r=e.content,c=e.horizontal,o=e.piled,s=e.raised,u=e.size,l=e.stacked,d=Object(Ge.default)("ui",u,Object(We.a)(a,"compact"),Object(We.a)(c,"horizontal"),Object(We.a)(o,"piled"),Object(We.a)(s,"raised"),Object(We.a)(l,"stacked"),"segments",n),p=Object(Ye.a)(Be,e),f=Object(Je.a)(Be,e);return i.a.createElement(f,Object(L.a)({},p,{className:d}),Xe.a.isNil(t)?r:t)}Be.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],Be.propTypes={};var Ve=Be;function Ze(e){var t=e.children,n=e.className,a=e.content,r=Object(Ge.default)("inline",n),c=Object(Ye.a)(Ze,e),o=Object(Je.a)(Ze,e);return i.a.createElement(o,Object(L.a)({},c,{className:r}),Xe.a.isNil(t)?a:t)}Ze.handledProps=["as","children","className","content"],Ze.propTypes={};var Qe=Ze;function $e(e){var t=e.attached,n=e.basic,a=e.children,r=e.circular,c=e.className,o=e.clearing,s=e.color,u=e.compact,l=e.content,d=e.disabled,p=e.floated,f=e.inverted,b=e.loading,m=e.placeholder,h=e.padded,v=e.piled,j=e.raised,O=e.secondary,x=e.size,g=e.stacked,y=e.tertiary,_=e.textAlign,w=e.vertical,E=Object(Ge.default)("ui",s,x,Object(We.a)(n,"basic"),Object(We.a)(r,"circular"),Object(We.a)(o,"clearing"),Object(We.a)(u,"compact"),Object(We.a)(d,"disabled"),Object(We.a)(f,"inverted"),Object(We.a)(b,"loading"),Object(We.a)(m,"placeholder"),Object(We.a)(v,"piled"),Object(We.a)(j,"raised"),Object(We.a)(O,"secondary"),Object(We.a)(g,"stacked"),Object(We.a)(y,"tertiary"),Object(We.a)(w,"vertical"),Object(We.b)(t,"attached"),Object(We.b)(h,"padded"),Object(We.c)(_),Object(We.d)(p,"floated"),"segment",c),N=Object(Ye.a)($e,e),S=Object(Je.a)($e,e);return i.a.createElement(S,Object(L.a)({},N,{className:E}),Xe.a.isNil(a)?l:a)}$e.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],$e.Group=Ve,$e.Inline=Qe,$e.propTypes={};var et=$e,tt=n("ikXu");function nt(e){return Object(a.jsxs)(tt.a,{celled:!0,unstackable:!0,children:[Object(a.jsx)(tt.a.Header,{children:Object(a.jsxs)(tt.a.Row,{textAlign:"center",children:[Object(a.jsx)(tt.a.HeaderCell,{width:1,children:"S.No"}),Object(a.jsx)(tt.a.HeaderCell,{width:3,children:"Dated"}),Object(a.jsx)(tt.a.HeaderCell,{children:"Title of Download File"})]})}),Object(a.jsx)(tt.a.Body,{children:e.data.map((function(e,t){return Object(a.jsxs)(tt.a.Row,{textAlign:"center",children:[Object(a.jsx)(tt.a.Cell,{children:t+1}),Object(a.jsx)(tt.a.Cell,{children:new Date(e.date).toLocaleDateString()}),Object(a.jsxs)(tt.a.Cell,{textAlign:"left",children:[console.log(e),Object(a.jsx)("a",{target:"_blank",href:Ne.a+e.file.url,children:e.title})]})]})}))})]})}console.log(Ne.a);var at=n("LwFo"),rt=n.n(at);function it(e){var t=i.a.useState("Public Notices"),n=Object(Ue.a)(t,2),r=n[0],c=n[1],o=function(e,t){var n=t.name;return c(n)};return Object(a.jsxs)("div",{className:rt.a.main_wrapper,style:{padding:"1.5rem 2rem",backgroundColor:"#EEF0F1"},children:[console.log(e.data),Object(a.jsxs)(ze.a,{attached:"top",stackable:!0,tabular:!0,children:[Object(a.jsx)(ze.a.Item,{name:"Tenders",active:"Tenders"===r,onClick:o}),Object(a.jsx)(ze.a.Item,{name:"Expression of Interest",active:"Expression of Interest"===r,onClick:o}),Object(a.jsx)(ze.a.Item,{name:"Public Notices",active:"Public Notices"===r,onClick:o}),Object(a.jsx)(ze.a.Item,{name:"Circulars and Orders",active:"Circulars and Orders"===r,onClick:o}),Object(a.jsx)(ze.a.Item,{name:"Auction Notices",active:"Auction Notices"===r,onClick:o})]}),Object(a.jsx)(et,{style:{height:"90%"},attached:"bottom",children:Object(a.jsx)(nt,{data:function(){switch(r){case"Public Notices":return e.data.public_notices;case"Tenders":return e.data.tenders;case"Circulars and Orders":return e.data.circular_orders;case"Expression of Interest":return e.data.eoi;case"Auction Notices":return e.data.short_term_quotations;default:return e.data.public_notices}}()})})]})}function ct(e){return Object(a.jsxs)("div",{className:Le.a.main_wrapper,children:[Object(a.jsx)(Fe,{}),Object(a.jsx)(it,{data:e.data})]})}var ot=n("YFqc"),st=n.n(ot),ut=n("yE/o"),lt=n("5XkN"),dt=n("5Sku"),pt=n.n(dt);n("Pmoa");function ft(){return Object(a.jsx)("div",{className:pt.a.main_wrapper,children:Object(a.jsx)(ut.a,{children:Object(a.jsxs)("div",{className:pt.a.sub_wrapper,children:[Object(a.jsx)("a",{target:"_blank",href:Ne.a+"/uploads/Final_Landuse_Plan_0eed3696ed.pdf",children:Object(a.jsxs)("div",{className:pt.a.map_wrapper,children:[Object(a.jsx)(Ke.a,{style:{color:"white",textAlign:"center"},as:"h3",children:"LAND USE MAP-2035"}),Object(a.jsx)(lt.a,{rounded:!0,src:"/assets/land_use_map.png",size:"medium"})]})}),Object(a.jsx)(st.a,{href:"/gallery/607ebaaccab21b743ae11521",children:Object(a.jsxs)("div",{className:pt.a.map_wrapper,children:[Object(a.jsx)(Ke.a,{style:{color:"white"},as:"h3",children:"HOUSING PROJECTS"}),Object(a.jsx)(lt.a,{rounded:!0,src:"/assets/housing.jpeg",size:"medium"})]})}),Object(a.jsx)(st.a,{href:"/gallery/607ebb53cab21b743ae1153d",children:Object(a.jsxs)("div",{className:pt.a.map_wrapper,children:[Object(a.jsx)(Ke.a,{style:{color:"white"},as:"h3",children:"COMMERCIAL PROJECTS"}),Object(a.jsx)(lt.a,{rounded:!0,src:"/assets/commercial.jpeg",size:"medium"})]})})]})})})}var bt=n("luPt"),mt=n.n(bt),ht=n("D1pA"),vt=n("4eaG"),jt=n.n(vt);function Ot(e){return e.external?Object(a.jsx)("a",{target:"_blank",style:{color:"black",textDecoration:"none"},href:e.link,children:Object(a.jsxs)("div",{className:jt.a.main_wrapper,children:[Object(a.jsx)(ht.a,{name:e.icon,size:"big"}),Object(a.jsx)(Ke.a,{className:jt.a.header,style:{marginTop:0,marginLeft:"0.5rem",color:"inherit"},as:"h4",children:e.title})]})}):Object(a.jsx)(st.a,{href:e.link,children:Object(a.jsxs)("div",{className:jt.a.main_wrapper,children:[Object(a.jsx)(ht.a,{name:e.icon,size:"big"}),Object(a.jsx)(Ke.a,{className:jt.a.header,style:{marginTop:0,marginLeft:"0.5rem",color:"inherit"},as:"h4",children:e.title})]})})}function xt(){return Object(a.jsx)("div",{className:mt.a.main_wrapper,children:Object(a.jsxs)("div",{className:mt.a.sub_wrapper,children:[Object(a.jsx)(Ot,{icon:"flag",title:"Master Plan",link:"/planning/MasterPlan"}),Object(a.jsx)(Ot,{icon:"exclamation triangle",title:"Enforcement",link:"/enforcements/"}),Object(a.jsx)(Ot,{icon:"check circle\n",title:"BOCA",link:"/planning/BOCAMinutes"}),Object(a.jsx)(Ot,{icon:"folder",title:"J&K PSG Act",link:"/PSGAct"}),Object(a.jsx)(Ot,{icon:"file",title:"Downloads",link:"/downloads/Downloads"}),Object(a.jsx)(Ot,{icon:"file",title:"Procedure for Building Plan Approval",link:"/land_management/DocumentsRequired"}),Object(a.jsx)(Ot,{icon:"cogs",title:"Services",external:!0,link:Ne.a+"/uploads/services_2428bdef1e.pdf"})]})})}var gt=!0;function yt(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(o.a,{children:[Object(a.jsx)("title",{children:"SRINAGAR DEVELOPMENT AUTHORITY | SDA"}),Object(a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),Object(a.jsx)("meta",{name:"description",content:"Official Website Portal of SDA"}),Object(a.jsx)("meta",{name:"keywords",content:"SDA,srinagar development authority,srinagar development,Srinagar,SMC,SDA,JaKeGA, JKIT, JKITD"}),Object(a.jsx)("meta",{name:"author",content:"Mufti Hyder Ali"})]}),Object(a.jsx)(Te,{banners:e.banners}),Object(a.jsx)(De.a,{}),Object(a.jsx)(ct,{data:e.data}),Object(a.jsx)(De.a,{}),Object(a.jsx)(xt,{}),Object(a.jsx)(De.a,{}),Object(a.jsx)(De.a,{}),Object(a.jsx)(ft,{})]})}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),i=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),o=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){c(n,e);var t=u(n);function n(e){var i;return r(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},aQu0:function(e,t,n){"use strict";var a=n("wx14"),r=n("iuhU"),i=(n("17x9"),n("q1tI")),c=n.n(i),o=n("ZeOK"),s=n("ICNK"),u=n("Y53p"),l=n("H+2d"),d=n("D1pA"),p=n("5XkN"),f=n("MZgk");function b(e){var t=e.children,n=e.className,i=e.content,o=Object(r.default)("sub header",n),d=Object(s.a)(b,e),p=Object(u.a)(b,e);return c.a.createElement(p,Object(a.a)({},d,{className:o}),l.a.isNil(t)?i:t)}b.handledProps=["as","children","className","content"],b.propTypes={},b.create=Object(f.b)(b,(function(e){return{content:e}}));var m=b;function h(e){var t=e.children,n=e.className,i=e.content,o=Object(r.default)("content",n),d=Object(s.a)(h,e),p=Object(u.a)(h,e);return c.a.createElement(p,Object(a.a)({},d,{className:o}),l.a.isNil(t)?i:t)}h.handledProps=["as","children","className","content"],h.propTypes={};var v=h;function j(e){var t=e.attached,n=e.block,i=e.children,f=e.className,b=e.color,h=e.content,O=e.disabled,x=e.dividing,g=e.floated,y=e.icon,_=e.image,w=e.inverted,E=e.size,N=e.sub,S=e.subheader,C=e.textAlign,k=Object(r.default)("ui",b,E,Object(o.a)(n,"block"),Object(o.a)(O,"disabled"),Object(o.a)(x,"dividing"),Object(o.d)(g,"floated"),Object(o.a)(!0===y,"icon"),Object(o.a)(!0===_,"image"),Object(o.a)(w,"inverted"),Object(o.a)(N,"sub"),Object(o.b)(t,"attached"),Object(o.c)(C),"header",f),P=Object(s.a)(j,e),A=Object(u.a)(j,e);if(!l.a.isNil(i))return c.a.createElement(A,Object(a.a)({},P,{className:k}),i);var M=d.a.create(y,{autoGenerateKey:!1}),I=p.a.create(_,{autoGenerateKey:!1}),T=m.create(S,{autoGenerateKey:!1});return M||I?c.a.createElement(A,Object(a.a)({},P,{className:k}),M||I,(h||T)&&c.a.createElement(v,null,h,T)):c.a.createElement(A,Object(a.a)({},P,{className:k}),h,T)}j.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],j.propTypes={},j.Content=v,j.Subheader=m;t.a=j},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},luPt:function(e,t,n){e.exports={main_wrapper:"CardSection_main_wrapper__3Znd0",sub_wrapper:"CardSection_sub_wrapper__azV1p"}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},sRW8:function(e,t,n){e.exports={main_wrapper:"Main_main_wrapper__2p8cP"}},u46R:function(e,t,n){e.exports={main_wrapper:"BannerSection_main_wrapper__GvwpM",banner:"BannerSection_banner__16vFV",people:"BannerSection_people__2YBhM"}},u9WA:function(e,t,n){e.exports={slide:"Banner_slide__2RctG"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},"yE/o":function(e,t,n){"use strict";var a=n("wx14"),r=n("iuhU"),i=(n("17x9"),n("q1tI")),c=n.n(i),o=n("ZeOK"),s=n("ICNK"),u=n("Y53p"),l=n("H+2d");function d(e){var t=e.children,n=e.className,i=e.content,p=e.fluid,f=e.text,b=e.textAlign,m=Object(r.default)("ui",Object(o.a)(f,"text"),Object(o.a)(p,"fluid"),Object(o.c)(b),"container",n),h=Object(s.a)(d,e),v=Object(u.a)(d,e);return c.a.createElement(v,Object(a.a)({},h,{className:m}),l.a.isNil(t)?i:t)}d.handledProps=["as","children","className","content","fluid","text","textAlign"],d.propTypes={},t.a=d}},[["vlRD",0,1,2,3,4,6,8]]]);