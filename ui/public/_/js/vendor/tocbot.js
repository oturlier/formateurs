!function(){var b,d;function c(e){if(d[e])return d[e].exports;var t=d[e]={i:e,l:!1,exports:{}};return b[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}d={},c.m=b=[function(r,s,C){(function(e){var t,n,o,l;l=void 0!==e?e:this.window||this.global,n=[],t=function(e){"use strict";function l(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)p.call(n,o)&&(e[o]=n[o])}return e}function r(o,l,r){l||(l=250);var s,i;return function(){var e=r||this,t=+new Date,n=arguments;s&&t<s+l?(clearTimeout(i),i=setTimeout(function(){s=t,o.apply(e,n)},l)):(s=t,o.apply(e,n))}}var s,i,c=C(2),a={},u={},d=C(3),f=C(4);if("undefined"!=typeof window){var m,h=!!e.document.querySelector&&!!e.addEventListener,p=Object.prototype.hasOwnProperty;return u.destroy=function(){if(!a.skipRendering)try{document.querySelector(a.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+a.tocSelector)}a.scrollContainer&&document.querySelector(a.scrollContainer)?(document.querySelector(a.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(a.scrollContainer).removeEventListener("resize",this._scrollListener,!1),s&&document.querySelector(a.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),s&&document.removeEventListener("click",this._clickListener,!1))},u.init=function(e){if(h&&(a=l(c,e||{}),this.options=a,this.state={},a.scrollSmooth&&(a.duration=a.scrollSmoothDuration,a.offset=a.scrollSmoothOffset,u.scrollSmooth=C(5).initSmoothScrolling(a)),s=d(a),i=f(a),this._buildHtml=s,this._parseContent=i,u.destroy(),null!==(m=i.selectHeadings(a.contentSelector,a.headingSelector)))){var t=i.nestHeadingsArray(m),n=t.nest;a.skipRendering||s.render(a.tocSelector,n),this._scrollListener=r(function(e){s.updateToc(m);var t=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||t)&&(s.updateToc(m),a.scrollEndCallback&&a.scrollEndCallback(e))},a.throttleTimeout),this._scrollListener(),a.scrollContainer&&document.querySelector(a.scrollContainer)?(document.querySelector(a.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(a.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var o=null;return this._clickListener=r(function(e){a.scrollSmooth&&s.disableTocAnimation(e),s.updateToc(m),o&&clearTimeout(o),o=setTimeout(function(){s.enableTocAnimation()},a.scrollSmoothDuration)},a.throttleTimeout),a.scrollContainer&&document.querySelector(a.scrollContainer)?document.querySelector(a.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},u.refresh=function(e){u.destroy(),u.init(e||this.options)},e.tocbot=u,u}}(l),void 0!==(o="function"==typeof t?t.apply(s,n):t)&&(r.exports=o)}).call(s,C(1))},function(ca,da){var ea;ea=function(){return this}();try{ea=ea||Function("return this")()||eval("this")}catch(ca){"object"==typeof window&&(ea=window)}ca.exports=ea},function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:!1,orderedList:!0,scrollContainer:null,skipRendering:!1}},function(e,t){e.exports=function(a){function l(e,t){var n=t.appendChild(function(e){var t=document.createElement("li"),n=document.createElement("a");return a.listItemClass&&t.setAttribute("class",a.listItemClass),a.onClick&&(n.onclick=a.onClick),a.includeHtml&&e.childNodes.length?u.call(e.childNodes,function(e){n.appendChild(e.cloneNode(!0))}):n.textContent=e.textContent,n.setAttribute("href","#"+e.id),n.setAttribute("class",a.linkClass+h+"node-name--"+e.nodeName+h+a.extraLinkClasses),t.appendChild(n),t}(e));if(e.children.length){var o=r(e.isCollapsed);e.children.forEach(function(e){l(e,o)}),n.appendChild(o)}}function r(e){var t=a.orderedList?"ol":"ul",n=document.createElement(t),o=a.listClass+h+a.extraListClasses;return e&&(o+=h+a.collapsibleClass,o+=h+a.isCollapsedClass),n.setAttribute("class",o),n}var u=[].forEach,d=[].some,f=document.body,m=!0,h=" ";return{enableTocAnimation:function(){m=!0},disableTocAnimation:function(e){var t=e.target||e.srcElement;"string"==typeof t.className&&-1!==t.className.indexOf(a.linkClass)&&(m=!1)},render:function(e,t){var n=r(!1);t.forEach(function(e){l(e,n)});var o=document.querySelector(e);if(null!==o)return o.firstChild&&o.removeChild(o.firstChild),0===t.length?o:o.appendChild(n)},updateToc:function(e){if(a.scrollContainer&&document.querySelector(a.scrollContainer))var n=document.querySelector(a.scrollContainer).scrollTop;else n=document.documentElement.scrollTop||f.scrollTop;a.positionFixedSelector&&function(){if(a.scrollContainer&&document.querySelector(a.scrollContainer))var e=document.querySelector(a.scrollContainer).scrollTop;else e=document.documentElement.scrollTop||f.scrollTop;var t=document.querySelector(a.positionFixedSelector);"auto"===a.fixedSidebarOffset&&(a.fixedSidebarOffset=document.querySelector(a.tocSelector).offsetTop),e>a.fixedSidebarOffset?-1===t.className.indexOf(a.positionFixedClass)&&(t.className+=h+a.positionFixedClass):t.className=t.className.split(h+a.positionFixedClass).join("")}();var o,l=e;if(m&&null!==document.querySelector(a.tocSelector)&&0<l.length){d.call(l,function(e,t){return function e(t){var n=0;return t!=document.querySelector(a.contentSelector&&null!=t)&&(n=t.offsetTop,a.hasInnerContainers&&(n+=e(t.offsetParent))),n}(e)>n+a.headingsOffset+10?(o=l[0===t?t:t-1],!0):t===l.length-1?(o=l[l.length-1],!0):void 0});var t=document.querySelector(a.tocSelector).querySelectorAll("."+a.linkClass);u.call(t,function(e){e.className=e.className.split(h+a.activeLinkClass).join("")});var r=document.querySelector(a.tocSelector).querySelectorAll("."+a.listItemClass);u.call(r,function(e){e.className=e.className.split(h+a.activeListItemClass).join("")});var s=document.querySelector(a.tocSelector).querySelector("."+a.linkClass+".node-name--"+o.nodeName+'[href*="#'+o.id+'"]');-1===s.className.indexOf(a.activeLinkClass)&&(s.className+=h+a.activeLinkClass);var i=s.parentNode;i&&-1===i.className.indexOf(a.activeListItemClass)&&(i.className+=h+a.activeListItemClass);var c=document.querySelector(a.tocSelector).querySelectorAll("."+a.listClass+"."+a.collapsibleClass);u.call(c,function(e){-1===e.className.indexOf(a.isCollapsedClass)&&(e.className+=h+a.isCollapsedClass)}),s.nextSibling&&-1!==s.nextSibling.className.indexOf(a.isCollapsedClass)&&(s.nextSibling.className=s.nextSibling.className.split(h+a.isCollapsedClass).join("")),function e(t){return-1!==t.className.indexOf(a.collapsibleClass)&&-1!==t.className.indexOf(a.isCollapsedClass)?(t.className=t.className.split(h+a.isCollapsedClass).join(""),e(t.parentNode.parentNode)):t}(s.parentNode.parentNode)}}}}},function(e,t){e.exports=function(i){function c(e){return e[e.length-1]}function a(e){return+e.nodeName.split("H").join("")}function u(e){var t={id:e.id,children:[],nodeName:e.nodeName,headingLevel:a(e),textContent:e.textContent.trim()};return i.includeHtml&&(t.childNodes=e.childNodes),t}var t=[].reduce;return{nestHeadingsArray:function(e){return t.call(e,function(e,t){return function(e,t){for(var n=u(e),o=a(e),l=t,r=c(l),s=o-(r?r.headingLevel:0);0<s;)(r=c(l))&&void 0!==r.children&&(l=r.children),s--;o>=i.collapseDepth&&(n.isCollapsed=!0),l.push(n)}(u(t),e.nest),e},{nest:[]})},selectHeadings:function(t,e){var n=e;i.ignoreSelector&&(n=e.split(",").map(function(e){return e.trim()+":not("+i.ignoreSelector+")"}));try{return document.querySelector(t).querySelectorAll(n)}catch(e){return console.warn("Element not found: "+t),null}}}}},function(e,t){t.initSmoothScrolling=function(t){function n(e){return e.slice(0,e.lastIndexOf("#"))}document.documentElement.style;var o=t.duration,l=t.offset,r=location.hash?n(location.href):location.href;document.body.addEventListener("click",function(e){!function(e){return"a"===e.tagName.toLowerCase()&&(0<e.hash.length||"#"===e.href.charAt(e.href.length-1))&&(n(e.href)===r||n(e.href)+"#"===r)}(e.target)||-1<e.target.className.indexOf("no-smooth-scroll")||"#"===e.target.href.charAt(e.target.href.length-2)&&"!"===e.target.href.charAt(e.target.href.length-1)||-1===e.target.className.indexOf(t.linkClass)||function(e,t){function n(e){l=e-o,window.scrollTo(0,s.easing(l,r,c,a)),l<a?requestAnimationFrame(n):(window.scrollTo(0,r+c),"function"==typeof s.callback&&s.callback())}var o,l,r=window.pageYOffset,s={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},i=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),c="string"==typeof e?s.offset+(e?i&&i.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,a="function"==typeof s.duration?s.duration(c):s.duration;requestAnimationFrame(function(e){n(o=e)})}(e.target.hash,{duration:o,offset:l,callback:function(){!function(e){var t=document.getElementById(e.substring(1));t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}(e.target.hash)}})},!1)}}],c.c=d,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}();