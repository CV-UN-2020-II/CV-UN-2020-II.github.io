(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{G9Af:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("dI71"),i=n("zLVn"),c=n("wx14"),s=n("JX7q"),u=n("TOwV"),l=n("2mql"),f=n.n(l);function d(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var h=o.a.createContext();var p={initialChunks:{}};var m=function(e){return e};function v(e){var t=e.defaultResolveComponent,n=void 0===t?m:t,r=e.render,l=e.onLoad;function v(e,t){void 0===t&&(t={});var m=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),v={};function y(e){return t.cacheKey?t.cacheKey(e):m.resolve?m.resolve(e):null}function b(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!Object(u.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return f()(o,a,{preload:!0}),a}var g,w=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:y(n)},r.promise=null,d(!n.__chunkExtractor||m.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(m.requireAsync(n).catch((function(){})),r.loadSync(),n.__chunkExtractor.addChunk(m.chunkName(n))),Object(s.a)(r)):(!1!==t.ssr&&(m.isReady&&m.isReady(n)||m.chunkName&&p.initialChunks[m.chunkName(n)])&&r.loadSync(),r)}Object(a.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=y(e);return Object(c.a)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var o=n.prototype;return o.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.triggerOnLoad=function(){var e=this;l&&setTimeout((function(){l(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=b(m.requireSync(this.props),this.props,C);this.state.result=e,this.state.loading=!1}catch(t){this.state.error=t}},o.getCacheKey=function(){return y(this.props)||JSON.stringify(this.props)},o.getCache=function(){return v[this.getCacheKey()]},o.setCache=function(e){v[this.getCacheKey()]=e},o.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,r=(n.__chunkExtractor,n.forwardedRef,Object(i.a)(n,["__chunkExtractor","forwardedRef"]));this.promise=m.requireAsync(r).then((function(n){var r=b(n,e.props,C);t.suspense&&e.setCache(r),e.safeSetState({result:b(n,e.props,C),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},o.render=function(){var e=this.props,n=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,Object(i.a)(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,u=s.error,l=s.loading,f=s.result;if(t.suspense){var d=this.getCache();if(!d)throw this.loadAsync();return r({loading:!1,fallback:null,result:d,options:t,props:Object(c.a)({},a,{ref:n})})}if(u)throw u;var h=o||t.fallback||null;return l?h:r({loading:l,fallback:h,result:f,options:t,props:Object(c.a)({},a,{ref:n})})},n}(o.a.Component),k=(g=w,function(e){return o.a.createElement(h.Consumer,null,(function(t){return o.a.createElement(g,Object.assign({__chunkExtractor:t},e))}))}),C=o.a.forwardRef((function(e,t){return o.a.createElement(k,Object.assign({forwardedRef:t},e))}));return C.preload=function(e){m.requireAsync(e)},C.load=function(e){return m.requireAsync(e)},C}return{loadable:v,lazy:function(e,t){return v(e,Object(c.a)({},t,{suspense:!0}))}}}var y=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return o.a.createElement(t,n)}}),b=y.loadable,g=y.lazy,w=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.loading,r=e.props;return!n&&r.children?r.children(t):null}}),k=w.loadable,C=w.lazy;var O=b;O.lib=k,g.lib=C;var _=O((function(){return Promise.all([n.e(5),n.e(16)]).then(n.t.bind(null,"58Bg",7))}));function R(e){e.setup=function(){e.createCanvas(400,400),e.noStroke()},e.draw=function(){var t=e.color("coral");e.fill(t),e.circle(45,45,65),e.mouseIsPressed?e.fill(e.color("lightsalmon")):e.fill(e.color("hsl(160, 100%, 50%)")),e.circle(e.mouseX,e.mouseY,70,70)}}var S=n("qKvR"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return Object(S.d)(_,{sketch:R})},t}(r.Component),E=n("tnhK");t.default=function(){return Object(S.d)(E.a,null,Object(S.d)(j,null))}}}]);
//# sourceMappingURL=component---src-pages-prueba-js-d173d62184a52e9ac345.js.map