(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/b8u":function(t,n,r){var o=r("STAE");t.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"/qmn":function(t,n,r){var o=r("2oRo");t.exports=o.Promise},"8GlL":function(t,n,r){"use strict";var o=r("HAuM"),e=function(t){var n,r;this.promise=new t((function(t,o){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=o})),this.resolve=o(n),this.reject=o(r)};t.exports.f=function(t){return new e(t)}},G9Af:function(t,n,r){"use strict";r.r(n);r("q1tI");var o=r("ixhd"),e=r.n(o),i=r("tnhK"),u=r("dcqB"),c=r("qKvR");n.default=function(t){var n=1,r=1,o=1,f=1;return Object(c.d)(i.a,{title:"Prueba"},Object(c.d)(u.a,{title:"404: Not found"}),Object(c.d)("p",null,Object(c.d)(e.a,{setup:function(t,n){t.createCanvas(500,250).parent(n)},draw:function(t){t.loadPixels();for(var e=0;e<t.height;e++)for(var i=0;i<t.width;i++){var u=4*(i+e*t.width);t.pixels[u+0]=e*n,t.pixels[u+1]=(e-i)*r,t.pixels[u+2]=i*o,t.pixels[u+3]=t.random(255)*f}t.updatePixels()},keyPressed:function(t){"r"===t.key?n=0:"g"===t.key?r=0:"b"===t.key?o=0:"a"===t.key?f=0:"R"===t.key?n=1:"G"===t.key?r=1:"B"===t.key?o=1:"A"===t.key&&(f=1)}})))}},HAuM:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},QFcT:function(t,n,r){var o=r("I+eb"),e=Math.hypot,i=Math.abs,u=Math.sqrt;o({target:"Math",stat:!0,forced:!!e&&e(1/0,NaN)!==1/0},{hypot:function(t,n){for(var r,o,e=0,c=0,f=arguments.length,a=0;c<f;)a<(r=i(arguments[c++]))?(e=e*(o=a/r)*o+1,a=r):e+=r>0?(o=r/a)*o:r;return a===1/0?1/0:a*u(e)}})},SEBh:function(t,n,r){var o=r("glrk"),e=r("HAuM"),i=r("tiKp")("species");t.exports=function(t,n){var r,u=o(t).constructor;return void 0===u||null==(r=o(u)[i])?n:e(r)}},STAE:function(t,n,r){var o=r("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},p532:function(t,n,r){"use strict";var o=r("I+eb"),e=r("xDBR"),i=r("/qmn"),u=r("0Dky"),c=r("0GbY"),f=r("SEBh"),a=r("zfnd"),s=r("busE");o({target:"Promise",proto:!0,real:!0,forced:!!i&&u((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=f(this,c("Promise")),r="function"==typeof t;return this.then(r?function(r){return a(n,t()).then((function(){return r}))}:t,r?function(r){return a(n,t()).then((function(){throw r}))}:t)}}),e||"function"!=typeof i||i.prototype.finally||s(i.prototype,"finally",c("Promise").prototype.finally)},tiKp:function(t,n,r){var o=r("2oRo"),e=r("VpIT"),i=r("UTVS"),u=r("kOOl"),c=r("STAE"),f=r("/b8u"),a=e("wks"),s=o.Symbol,p=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},zfnd:function(t,n,r){var o=r("glrk"),e=r("hh1v"),i=r("8GlL");t.exports=function(t,n){if(o(t),e(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}}}]);
//# sourceMappingURL=component---src-pages-prueba-js-07b657f0c0fadd7fbeaa.js.map