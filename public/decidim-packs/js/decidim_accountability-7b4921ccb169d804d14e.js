!function(){var n={69355:function(n,t,e){var o={"./decidim/accountability/decidim_accountability.svg":46193};function r(n){var t=i(n);return e(t)}function i(n){if(!e.o(o,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return o[n]}r.keys=function(){return Object.keys(o)},r.resolve=i,n.exports=r,r.id=69355},6746:function(){$((function(){$(".diff-i18n_html, .diff-i18n").each((function(n,t){var e=$(t).find(".diff__value"),o=e.data("old-value").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r=e.data("new-value").replace(/</g,"&lt;").replace(/>/g,"&gt;"),i=JsDiff.diffChars(o,r),u="";i.forEach((function(n){var t=n.added,e=n.removed,o=n.value,r="";t?r="#89ffaa":e&&(r="red"),u+=t||e?'<span style="background-color: '.concat(r,'">').concat(o,"</span>"):o})),u=u.replace(/\n/g,"<br><br>"),e.html(u)}))}))},46193:function(n,t,e){"use strict";n.exports=e.p+"media/images/decidim_accountability-55aaa6f0f7f85234bad7.svg"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o](i,i.exports,e),i.exports}e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/decidim-packs/",function(){"use strict";function n(){}function t(n,t,e,o,r){for(var i=0,u=t.length,s=0,a=0;i<u;i++){var c=t[i];if(c.removed){if(c.value=n.join(o.slice(a,a+c.count)),a+=c.count,i&&t[i-1].added){var f=t[i-1];t[i-1]=t[i],t[i]=f}}else{if(!c.added&&r){var p=e.slice(s,s+c.count);p=p.map((function(n,t){var e=o[a+t];return e.length>n.length?e:n})),c.value=n.join(p)}else c.value=n.join(e.slice(s,s+c.count));s+=c.count,c.added||(a+=c.count)}}var l=t[u-1];return u>1&&"string"===typeof l.value&&(l.added||l.removed)&&n.equals("",l.value)&&(t[u-2].value+=l.value,t.pop()),t}n.prototype={diff:function(n,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o.callback;"function"===typeof o&&(r=o,o={}),this.options=o;var i=this;function u(n){return r?(setTimeout((function(){r(void 0,n)}),0),!0):n}n=this.castInput(n),e=this.castInput(e),n=this.removeEmpty(this.tokenize(n));var s=(e=this.removeEmpty(this.tokenize(e))).length,a=n.length,c=1,f=s+a;o.maxEditLength&&(f=Math.min(f,o.maxEditLength));var p=[{newPos:-1,components:[]}],l=this.extractCommon(p[0],e,n,0);if(p[0].newPos+1>=s&&l+1>=a)return u([{value:this.join(e),count:e.length}]);function v(){for(var o=-1*c;o<=c;o+=2){var r=void 0,f=p[o-1],l=p[o+1],v=(l?l.newPos:0)-o;f&&(p[o-1]=void 0);var d=f&&f.newPos+1<s,h=l&&0<=v&&v<a;if(d||h){if(!d||h&&f.newPos<l.newPos?(r={newPos:(m=l).newPos,components:m.components.slice(0)},i.pushComponent(r.components,void 0,!0)):((r=f).newPos++,i.pushComponent(r.components,!0,void 0)),v=i.extractCommon(r,e,n,o),r.newPos+1>=s&&v+1>=a)return u(t(i,r.components,e,n,i.useLongestToken));p[o]=r}else p[o]=void 0}var m;c++}if(r)!function n(){setTimeout((function(){if(c>f)return r();v()||n()}),0)}();else for(;c<=f;){var d=v();if(d)return d}},pushComponent:function(n,t,e){var o=n[n.length-1];o&&o.added===t&&o.removed===e?n[n.length-1]={count:o.count+1,added:t,removed:e}:n.push({count:1,added:t,removed:e})},extractCommon:function(n,t,e,o){for(var r=t.length,i=e.length,u=n.newPos,s=u-o,a=0;u+1<r&&s+1<i&&this.equals(t[u+1],e[s+1]);)u++,s++,a++;return a&&n.components.push({count:a}),n.newPos=u,s},equals:function(n,t){return this.options.comparator?this.options.comparator(n,t):n===t||this.options.ignoreCase&&n.toLowerCase()===t.toLowerCase()},removeEmpty:function(n){for(var t=[],e=0;e<n.length;e++)n[e]&&t.push(n[e]);return t},castInput:function(n){return n},tokenize:function(n){return n.split("")},join:function(n){return n.join("")}};new n;var o=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,r=/\S/,i=new n;i.equals=function(n,t){return this.options.ignoreCase&&(n=n.toLowerCase(),t=t.toLowerCase()),n===t||this.options.ignoreWhitespace&&!r.test(n)&&!r.test(t)},i.tokenize=function(n){for(var t=n.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),e=0;e<t.length-1;e++)!t[e+1]&&t[e+2]&&o.test(t[e])&&o.test(t[e+2])&&(t[e]+=t[e+2],t.splice(e+1,2),e--);return t};var u=new n;u.tokenize=function(n){var t=[],e=n.split(/(\n|\r\n)/);e[e.length-1]||e.pop();for(var o=0;o<e.length;o++){var r=e[o];o%2&&!this.options.newlineIsToken?t[t.length-1]+=r:(this.options.ignoreWhitespace&&(r=r.trim()),t.push(r))}return t};var s=new n;s.tokenize=function(n){return n.split(/(\S.+?[.!?])(?=\s+|$)/)};var a=new n;function c(n){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}a.tokenize=function(n){return n.split(/([{}:;,]|\s+)/)};var f=Object.prototype.toString,p=new n;function l(n,t,e,o,r){var i,u;for(t=t||[],e=e||[],o&&(n=o(r,n)),i=0;i<t.length;i+=1)if(t[i]===n)return e[i];if("[object Array]"===f.call(n)){for(t.push(n),u=new Array(n.length),e.push(u),i=0;i<n.length;i+=1)u[i]=l(n[i],t,e,o,r);return t.pop(),e.pop(),u}if(n&&n.toJSON&&(n=n.toJSON()),"object"===c(n)&&null!==n){t.push(n),u={},e.push(u);var s,a=[];for(s in n)n.hasOwnProperty(s)&&a.push(s);for(a.sort(),i=0;i<a.length;i+=1)u[s=a[i]]=l(n[s],t,e,o,s);t.pop(),e.pop()}else u=n;return u}p.useLongestToken=!0,p.tokenize=u.tokenize,p.castInput=function(n){var t=this.options,e=t.undefinedReplacement,o=t.stringifyReplacer,r=void 0===o?function(n,t){return"undefined"===typeof t?e:t}:o;return"string"===typeof n?n:JSON.stringify(l(n,null,null,r),r,"  ")},p.equals=function(t,e){return n.prototype.equals.call(p,t.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};var v=new n;v.tokenize=function(n){return n.slice()},v.join=v.removeEmpty=function(n){return n};e(6746);$((function(){$(window).width()<768&&$(".category--section").click((function(n){$(n.currentTarget).next(".category--elements").toggleClass("active")}))})),e(69355)}()}();
//# sourceMappingURL=decidim_accountability-7b4921ccb169d804d14e.js.map