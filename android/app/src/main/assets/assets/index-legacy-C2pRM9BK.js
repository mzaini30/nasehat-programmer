!function(){function r(r,e,n){return e=t(e),function(r,o){if(o&&("object"==b(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}(r,o()?Reflect.construct(e,n||[],t(r).constructor):e.apply(r,n))}function o(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(o=function(){return!!r})()}function t(r){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},t(r)}function e(r,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(o&&o.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),o&&n(r,o)}function n(r,o){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},n(r,o)}function a(r,o){if(!(r instanceof o))throw new TypeError("Cannot call a class as a function")}function i(r,o){for(var t=0;t<o.length;t++){var e=o[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,u(e.key),e)}}function d(r,o,t){return o&&i(r.prototype,o),t&&i(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function c(r,o,t){return(o=u(o))in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r}function u(r){var o=function(r,o){if("object"!=b(r)||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var e=t.call(r,o||"default");if("object"!=b(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(r)}(r,"string");return"symbol"==b(o)?o:o+""}function l(r){return function(r){if(Array.isArray(r))return f(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||p(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(r){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},b(r)}function p(r,o){if(r){if("string"==typeof r)return f(r,o);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(r,o):void 0}}function f(r,o){(null==o||o>r.length)&&(o=r.length);for(var t=0,e=Array(o);t<o;t++)e[t]=r[t];return e}System.register([],(function(o,t){"use strict";return{execute:function(){var o,t=document.createElement("style");function n(){}function i(r){return r()}function u(){return Object.create(null)}function p(r){r.forEach(i)}function f(r){return"function"==typeof r}function s(r,o){return r!=r?o==o:r!==o||r&&"object"===b(r)||"function"==typeof r}function g(r,o,t){r.insertBefore(o,t||null)}function h(r){r.parentNode&&r.parentNode.removeChild(r)}function m(r){return document.createElement(r)}function x(){return r=" ",document.createTextNode(r);var r}function v(r){o=r}t.textContent=":root{--background-body: #fff;--background: #efefef;--background-alt: #f7f7f7;--selection: #9e9e9e;--text-main: #363636;--text-bright: #000;--text-muted: #70777f;--links: #0076d1;--focus: #0096bfab;--border: #dbdbdb;--code: #000;--animation-duration: .1s;--button-base: #d0cfcf;--button-hover: #9b9b9b;--scrollbar-thumb: rgb(170, 170, 170);--scrollbar-thumb-hover: var(--button-hover);--form-placeholder: #949494;--form-text: #1d1d1d;--variable: #39a33c;--highlight: #ff0;--select-arrow: url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23161f27'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E\")}html{scrollbar-color:rgb(170,170,170) #fff;scrollbar-color:var(--scrollbar-thumb) var(--background-body);scrollbar-width:thin}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,\"Segoe UI Emoji\",\"Apple Color Emoji\",\"Noto Color Emoji\",sans-serif;line-height:1.4;max-width:800px;margin:20px auto;padding:0 10px;word-wrap:break-word;color:#363636;color:var(--text-main);background:#fff;background:var(--background-body);text-rendering:optimizeLegibility}button,input,textarea{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}h1{font-size:2.2em;margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:12px;margin-top:24px}h1,h2,h3,h4,h5,h6,strong{color:#000;color:var(--text-bright)}h1,h2,h3,h4,h5,h6,b,strong,th{font-weight:600}q:before{content:none}q:after{content:none}blockquote,q{border-left:4px solid #0096bfab;border-left:4px solid var(--focus);margin:1.5em 0;padding:.5em 1em;font-style:italic}blockquote>footer{font-style:normal;border:0}blockquote cite,address{font-style:normal}a[href^=\"mailto:\"]:before{content:\"📧 \"}a[href^=\"tel:\"]:before{content:\"📞 \"}a[href^=\"sms:\"]:before{content:\"💬 \"}mark{background-color:#ff0;background-color:var(--highlight);border-radius:2px;padding:0 2px;color:#000}a>code,a>strong{color:inherit}button,select,input[type=submit],input[type=reset],input[type=button],input[type=checkbox],input[type=range],input[type=radio]{cursor:pointer}input,select{display:block}[type=checkbox],[type=radio]{display:initial}input,button,textarea,select{color:#1d1d1d;color:var(--form-text);background-color:#efefef;background-color:var(--background);font-family:inherit;font-size:inherit;margin-right:6px;margin-bottom:6px;padding:10px;border:none;border-radius:6px;outline:none}button,input[type=submit],input[type=reset],input[type=button]{background-color:#d0cfcf;background-color:var(--button-base);padding-right:30px;padding-left:30px}button:hover,input[type=submit]:hover,input[type=reset]:hover,input[type=button]:hover{background:#9b9b9b;background:var(--button-hover)}input[type=color]{min-height:2rem;padding:8px;cursor:pointer}input[type=checkbox],input[type=radio]{height:1em;width:1em}input[type=radio]{border-radius:100%}input{vertical-align:top}label{vertical-align:middle;margin-bottom:4px;display:inline-block}input:not([type=checkbox]):not([type=radio]),input[type=range],select,button,textarea{-webkit-appearance:none}textarea{display:block;margin-right:0;box-sizing:border-box;resize:vertical}textarea:not([cols]){width:100%}textarea:not([rows]){min-height:40px;height:140px}select{background:#efefef url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23161f27'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E\") calc(100% - 12px) 50% / 12px no-repeat;background:var(--background) var(--select-arrow) calc(100% - 12px) 50% / 12px no-repeat;padding-right:35px}select::-ms-expand{display:none}select[multiple]{padding-right:10px;background-image:none;overflow-y:auto}input:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}select:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}button:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}textarea:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}input[type=checkbox]:active,input[type=radio]:active,input[type=submit]:active,input[type=reset]:active,input[type=button]:active,input[type=range]:active,button:active{transform:translateY(2px)}input:disabled,select:disabled,button:disabled,textarea:disabled{cursor:not-allowed;opacity:.5}::-moz-placeholder{color:#949494;color:var(--form-placeholder)}:-ms-input-placeholder{color:#949494;color:var(--form-placeholder)}::-ms-input-placeholder{color:#949494;color:var(--form-placeholder)}::placeholder{color:#949494;color:var(--form-placeholder)}fieldset{border:1px #0096bfab solid;border:1px var(--focus) solid;border-radius:6px;margin:0 0 12px;padding:10px}legend{font-size:.9em;font-weight:600}input[type=range]{margin:10px 0;padding:10px 0;background:transparent}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-runnable-track{width:100%;height:9.5px;-webkit-transition:.2s;transition:.2s;background:#efefef;background:var(--background);border-radius:3px}input[type=range]::-webkit-slider-thumb{box-shadow:0 1px 1px #000,0 0 1px #0d0d0d;height:20px;width:20px;border-radius:50%;background:#dbdbdb;background:var(--border);-webkit-appearance:none;margin-top:-7px}input[type=range]:focus::-webkit-slider-runnable-track{background:#efefef;background:var(--background)}input[type=range]::-moz-range-track{width:100%;height:9.5px;-moz-transition:.2s;transition:.2s;background:#efefef;background:var(--background);border-radius:3px}input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;height:20px;width:20px;border-radius:50%;background:#dbdbdb;background:var(--border)}input[type=range]::-ms-track{width:100%;height:9.5px;background:transparent;border-color:transparent;border-width:16px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#efefef;background:var(--background);border:.2px solid #010101;border-radius:3px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}input[type=range]::-ms-fill-upper{background:#efefef;background:var(--background);border:.2px solid #010101;border-radius:3px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:20px;width:20px;border-radius:50%;background:#dbdbdb;background:var(--border)}input[type=range]:focus::-ms-fill-lower{background:#efefef;background:var(--background)}input[type=range]:focus::-ms-fill-upper{background:#efefef;background:var(--background)}a{text-decoration:none;color:#0076d1;color:var(--links)}a:hover{text-decoration:underline}code,samp{background:#efefef;background:var(--background);color:#000;color:var(--code);padding:2.5px 5px;border-radius:6px;font-size:1em}time{background:#efefef;background:var(--background);color:#000;color:var(--code);padding:2.5px 5px;border-radius:6px;font-size:1em}pre>code{padding:10px;display:block;overflow-x:auto}var{color:#39a33c;color:var(--variable);font-style:normal;font-family:monospace}kbd{background:#efefef;background:var(--background);border:1px solid #dbdbdb;border:1px solid var(--border);border-radius:2px;color:#363636;color:var(--text-main);padding:2px 4px}img,video{max-width:100%;height:auto}hr{border:none;border-top:1px solid #dbdbdb;border-top:1px solid var(--border)}table{border-collapse:collapse;margin-bottom:10px;width:100%;table-layout:fixed}table caption{text-align:left}td,th{padding:6px;text-align:left;vertical-align:top;word-wrap:break-word}thead{border-bottom:1px solid #dbdbdb;border-bottom:1px solid var(--border)}tfoot{border-top:1px solid #dbdbdb;border-top:1px solid var(--border)}tbody tr:nth-child(2n){background-color:#efefef;background-color:var(--background)}tbody tr:nth-child(2n) button{background-color:#f7f7f7;background-color:var(--background-alt)}tbody tr:nth-child(2n) button:hover{background-color:#fff;background-color:var(--background-body)}::-webkit-scrollbar{height:10px;width:10px}::-webkit-scrollbar-track{background:#efefef;background:var(--background);border-radius:6px}::-webkit-scrollbar-thumb{background:#aaa;background:var(--scrollbar-thumb);border-radius:6px}::-webkit-scrollbar-thumb:hover{background:#9b9b9b;background:var(--scrollbar-thumb-hover)}::-moz-selection{background-color:#9e9e9e;background-color:var(--selection);color:#000;color:var(--text-bright)}::selection{background-color:#9e9e9e;background-color:var(--selection);color:#000;color:var(--text-bright)}details{display:flex;flex-direction:column;align-items:flex-start;background-color:#f7f7f7;background-color:var(--background-alt);padding:10px 10px 0;margin:1em 0;border-radius:6px;overflow:hidden}details[open]{padding:10px}details>:last-child{margin-bottom:0}details[open] summary{margin-bottom:10px}summary{display:list-item;background-color:#efefef;background-color:var(--background);padding:10px;margin:-10px -10px 0;cursor:pointer;outline:none}summary:hover,summary:focus{text-decoration:underline}details>:not(summary){margin-top:0}summary::-webkit-details-marker{color:#363636;color:var(--text-main)}dialog{background-color:#f7f7f7;background-color:var(--background-alt);color:#363636;color:var(--text-main);border:none;border-radius:6px;border-color:#dbdbdb;border-color:var(--border);padding:10px 30px}dialog>header:first-child{background-color:#efefef;background-color:var(--background);border-radius:6px 6px 0 0;margin:-10px -30px 10px;padding:10px;text-align:center}dialog::-webkit-backdrop{background:rgba(0,0,0,.61);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}dialog::backdrop{background:rgba(0,0,0,.61);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}footer{border-top:1px solid #dbdbdb;border-top:1px solid var(--border);padding-top:10px;color:#70777f;color:var(--text-muted)}body>footer{margin-top:40px}@media print{body,pre,code,summary,details,button,input,textarea{background-color:#fff}button,input,textarea{border:1px solid #000}body,h1,h2,h3,h4,h5,h6,pre,code,button,input,textarea,footer,summary,strong{color:#000}summary::marker{color:#000}summary::-webkit-details-marker{color:#000}tbody tr:nth-child(2n){background-color:#f2f2f2}a{color:#00f;text-decoration:underline}}\n",document.head.appendChild(t);var k=[],y=[],w=[],$=[];function C(r){w.push(r)}var _=new Set,E=0;function j(r){if(null!==r.fragment){r.update(),p(r.before_update);var o=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,o),r.after_update.forEach(C)}}var O,S=new Set;function P(r,o){r&&r.i&&(S.delete(r),r.i(o))}function z(r,o,t){var e=r.$$,n=e.fragment,a=e.after_update;n&&n.m(o,t),C((function(){var o,t=r.$$.on_mount.map(i).filter(f);r.$$.on_destroy?(o=r.$$.on_destroy).push.apply(o,l(t)):p(t);r.$$.on_mount=[]})),a.forEach(C)}function L(r,o){var t,e,n,a=r.$$;null!==a.fragment&&(t=a.after_update,e=[],n=[],w.forEach((function(r){return-1===t.indexOf(r)?e.push(r):n.push(r)})),n.forEach((function(r){return r()})),w=e,p(a.on_destroy),a.fragment&&a.fragment.d(o),a.on_destroy=a.fragment=null,a.ctx=[])}function A(r,t,e,a,i,d){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[-1],b=o;v(r);var f=r.$$={fragment:null,ctx:[],props:d,update:n,not_equal:i,bound:u(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(b?b.$$.context:[])),callbacks:u(),dirty:l,skip_bound:!1,root:t.target||b.$$.root};if(c&&c(f.root),f.ctx=[],f.update(),p(f.before_update),f.fragment=!!a&&a(f.ctx),t.target){if(t.hydrate){var s=function(r){return Array.from(r.childNodes)}(t.target);f.fragment&&f.fragment.l(s),s.forEach(h)}else f.fragment&&f.fragment.c();t.intro&&P(r.$$.fragment),z(r,t.target,t.anchor),function(){if(0===E){var r=o;do{try{for(;E<k.length;){var t=k[E];E++,v(t),j(t.$$)}}catch(a){throw k.length=0,E=0,a}for(v(null),k.length=0,E=0;y.length;)y.pop()();for(var e=0;e<w.length;e+=1){var n=w[e];_.has(n)||(_.add(n),n())}w.length=0}while(k.length);for(;$.length;)$.pop()();_.clear(),v(r)}}()}v(b)}var T=function(){return d((function r(){a(this,r),c(this,"$$",void 0),c(this,"$$set",void 0)}),[{key:"$destroy",value:function(){L(this,1),this.$destroy=n}},{key:"$on",value:function(r,o){if(!f(o))return n;var t=this.$$.callbacks[r]||(this.$$.callbacks[r]=[]);return t.push(o),function(){var r=t.indexOf(o);-1!==r&&t.splice(r,1)}}},{key:"$set",value:function(r){var o;this.$$set&&(o=r,0!==Object.keys(o).length)&&(this.$$.skip_bound=!0,this.$$set(r),this.$$.skip_bound=!1)}}])}();function q(r){var o,t,e,a,i,d,c,u,l;return{c:function(){(o=m("h1")).textContent="Nasehat Programmer",t=x(),(e=m("p")).textContent="Berikut ini lebih tepatnya catatan bagi diriku sendiri sih supaya lebih serius di bidang pemrograman ini, sekaligus jadi sharing juga buat kalian semua yang ingin menekuni bidang ini.",a=x(),(i=m("blockquote")).innerHTML="<p>Status Aplikasi : On Going</p>",d=x(),(c=m("h2")).textContent="Prinsip",u=x(),(l=m("ol")).innerHTML="<li><p>Buatlah dengan cepat</p> <p>Jadi, jangan malu untuk copy paste atau menggunakan ChatGPT kalau ternyata itu membuatmu lebih cepat dalam membuat aplikasi.</p></li>"},m:function(r,n){g(r,o,n),g(r,t,n),g(r,e,n),g(r,a,n),g(r,i,n),g(r,d,n),g(r,c,n),g(r,u,n),g(r,l,n)},p:n,i:n,o:n,d:function(r){r&&(h(o),h(t),h(e),h(a),h(i),h(d),h(c),h(u),h(l))}}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");var N=function(o){function t(o){var e;return a(this,t),A(e=r(this,t),o,null,q,s,{}),e}return e(t,o),d(t)}(T);function B(r){var o,t;return o=new N({}),{c:function(){var r;(r=o.$$.fragment)&&r.c()},m:function(r,e){z(o,r,e),t=!0},p:n,i:function(r){t||(P(o.$$.fragment,r),t=!0)},o:function(r){!function(r,o,t,e){if(r&&r.o){if(S.has(r))return;S.add(r),O.c.push((function(){S.delete(r)})),r.o(o)}}(o.$$.fragment,r),t=!1},d:function(r){L(o,r)}}}new(function(o){function t(o){var e;return a(this,t),A(e=r(this,t),o,null,B,s,{}),e}return e(t,o),d(t)}(T))({target:document.getElementById("app")})}}}))}();
