_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";r.r(t);var n=r("rePB"),c=r("nKUr"),o=r("q1tI"),a=r.n(o),i=(r("uXJ4"),r("zPlV"),r("YFqc")),s=r.n(i),u=r("Ff2n"),l=r("nOHt");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e){var t=e.className,r=e.children,n=e.href,o=Object(u.a)(e,["className","children","href"]),a=Object(l.useRouter)(),i="py-2 hover:text-gray-700 ".concat(t," ").concat((null===a||void 0===a?void 0:a.pathname)===n?"text-gray-700 border-b-2 border-blue-700 font-bold px-2":"text-gray-500");return Object(c.jsx)("a",p(p({href:n},o),{},{onClick:function(e){e.preventDefault(),a.push(n)},className:i,children:r}))}function d(){Object(l.useRouter)();return Object(c.jsx)("nav",{className:"mb-10 border-t-4 border-blue-700",children:Object(c.jsx)("div",{className:"max-w-5xl mx-auto px-5 md:px-8",children:Object(c.jsxs)("div",{className:"flex justify-between items-center",children:[Object(c.jsx)("div",{className:"py-2 mr-auto",children:Object(c.jsx)(s.a,{as:"/",href:"/",children:Object(c.jsxs)("a",{children:[Object(c.jsx)("span",{className:"text-lg font-bold tracking-tight",children:"Abdullah Gira"}),Object(c.jsx)("span",{className:"text-3xl text-blue-700",children:"."})]})})}),Object(c.jsxs)("ul",{className:"flex text-sm",children:[Object(c.jsx)("li",{children:Object(c.jsx)(b,{href:"/",className:"mr-8",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b,{href:"/blog",children:"Blog"})})]})]})})})}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(t,j({},r))]})}},Ff2n:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.d(t,"a",(function(){return n}))},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),c=r("284h");t.__esModule=!0,t.default=void 0;var o=c(r("q1tI")),a=r("elyg"),i=r("nOHt"),s=r("vNVm"),u={};function l(e,t,r,n){if((0,a.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var c=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),c=r&&r.pathname||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),r=n(t,2),o=r[0],i=r[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),p=f.href,b=f.as,d=e.children,O=e.replace,j=e.shallow,h=e.scroll,v=e.locale;"string"===typeof d&&(d=o.default.createElement("a",null,d));var y=o.Children.only(d),m=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),x=n(g,2),w=x[0],P=x[1],E=o.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);(0,o.useEffect)((function(){var e=P&&t&&(0,a.isLocalURL)(p),n="undefined"!==typeof v?v:r&&r.locale,c=u[p+"%"+b+(n?"%"+n:"")];e&&!c&&l(r,p,b,{locale:n})}),[b,p,P,v,t,r]);var N={ref:E,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,c,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[c?"replace":"push"](r,n,{shallow:o,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,r,p,b,O,j,h,v)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(r,p,b,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(N.href=(0,a.addBasePath)((0,a.addLocale)(b,"undefined"!==typeof v?v:r&&r.locale,r&&r.defaultLocale))),o.default.cloneElement(y,N)};t.default=f},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},uXJ4:function(e,t,r){},vNVm:function(e,t,r){"use strict";var n=r("J4zp"),c=r("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,c=(0,o.useRef)(),u=(0,o.useState)(!1),l=n(u,2),f=l[0],p=l[1],b=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:c,elements:n}),r}(r),c=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(c))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){i||f||(0,a.default)((function(){return p(!0)}))}),[f]),[b,f]};var o=r("q1tI"),a=c(r("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map},zPlV:function(e,t,r){}},[[0,0,2,1]]]);