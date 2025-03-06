/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=function(t,e,r,n,o,i,a,u){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),s=c.querySelector(".card__image"),l=c.querySelector(".card__title");s.src=t.link,s.alt=t.name,l.textContent=t.name,s.addEventListener("click",(function(){return o(t)}));var f=c.querySelector(".card__delete-button");e===t.owner._id?f.addEventListener("click",(function(){return r(c,t._id,i)})):f.remove();var p=c.querySelector(".card__like-button"),d=c.querySelector(".card__like-count");return d.textContent=t.likes.length,t.likes.some((function(t){return t._id===e}))&&p.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(){return n(p,t._id,d,a,u)})),c},e=function(t,e,r){t.remove(),r(e).then((function(){return t.remove()})).catch((function(t){return console.log(t)}))},r=function(t,e,r,n,o){(t.classList.contains("card__like-button_is-active")?o(e):n(e)).then((function(e){t.classList.toggle("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(t){return console.log(t)}))};function n(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");e&&a(e)}}var o=function(t){t.target===t.currentTarget&&a(t.currentTarget)};function i(t){t.classList.add("popup_is-animated"),setTimeout((function(){return t.classList.add("popup_is-opened")}),0),document.addEventListener("keydown",n),t.addEventListener("click",o)}function a(t){t.classList.remove("popup_is-opened"),setTimeout((function(){return t.classList.remove("popup_is-animated")}),600),document.removeEventListener("keydown",n),t.removeEventListener("click",o)}function u(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""}function c(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.classList.remove(r.inactiveButtonClass),e.disabled=!1):(e.classList.add(r.inactiveButtonClass),e.disabled=!0)}function s(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(r){u(t,r,e),r.setCustomValidity("")})),c(r,n,e)}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),u=new T(n||[]);return o(a,"_invoke",{value:C(t,r,u)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h="suspendedStart",v="suspendedYield",y="executing",m="completed",_={};function b(){}function g(){}function w(){}var S={};s(S,a,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(P([])));x&&x!==r&&n.call(x,a)&&(S=x);var E=w.prototype=b.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,i,a,u){var c=d(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==l(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===_)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,_;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(l(e)+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(q.prototype),s(q.prototype,u,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),s(E,c,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),_}},e}function p(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){p(i,n,o,a,u,"next",t)}function u(t){p(i,n,o,a,u,"throw",t)}a(void 0)}))}}var h={baseUrl:"https://nomoreparties.co/v1/wff-cohort-33",headers:{"Content-Type":"application/json",authorization:"0480f82d-e10f-4586-8f02-7352795566a5"}},v=function(){var t=d(f().mark((function t(e){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.ok){t.next=2;break}return t.abrupt("return",e.json());case 2:return t.abrupt("return",Promise.reject("Ошибка: ".concat(e.status)));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=d(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(h.baseUrl,"/cards"),{headers:h.headers}).then((function(t){return v(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=d(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(h.baseUrl,"/users/me"),{headers:h.headers}).then((function(t){return v(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=d(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all([m(),y()]));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=d(f().mark((function t(e,r){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(h.baseUrl,"/users/me"),{method:"PATCH",headers:h.headers,body:JSON.stringify({name:e,about:r})}).then((function(t){return v(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),g=function(){var t=d(f().mark((function t(e){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(h.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:h.headers,body:JSON.stringify({avatar:e})}).then((function(t){return v(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=d(f().mark((function t(e,r){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(h.baseUrl,"/cards"),{method:"POST",headers:h.headers,body:JSON.stringify({name:e,link:r})}).then((function(t){return v(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),S=function(){var t=d(f().mark((function t(e){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(h.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:h.headers}).then((function(t){return v(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=d(f().mark((function t(e){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(h.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:h.headers}).then((function(t){return v(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=d(f().mark((function t(e){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(h.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:h.headers}).then((function(t){return v(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var k=document.querySelector(".places__list"),q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},C=document.querySelector(".profile__title"),O=document.querySelector(".profile__description"),j=document.querySelector(".profile__image"),A=document.forms["edit-profile"],T=document.querySelector(".popup__input_type_name"),P=document.querySelector(".popup__input_type_description"),N=document.querySelector(".popup_type_edit"),U=document.querySelector(".profile__edit-button"),G=A.querySelector(".popup__button");U.addEventListener("click",(function(){i(N),A.name.value=C.textContent,A.description.value=O.textContent,s(A,q)})),A.addEventListener("submit",(function(t){t.preventDefault();var e=P.value,r=T.value;C.textContent=r,O.textContent=e,G.textContent="Сохранение...",b(r,e).then((function(){a(N),s(A,q)})).catch((function(t){return console.log(t)})).finally((function(){G.textContent="Сохранить"}))}));var B=document.forms["edit-avatar"],D=document.querySelector(".popup_type_new-avatar"),I=document.querySelector(".popup__input_type_avatar"),F=document.querySelector(".profile__image-wrapper"),J=B.querySelector(".popup__button");F.addEventListener("click",(function(){i(D),s(B,q)})),B.addEventListener("submit",(function(t){t.preventDefault();var e=I.value;J.textContent="Сохранение...",g(e).then((function(t){j.src=t.avatar,a(D),B.reset(),s(B,q)})).catch((function(t){return console.log(t)})).finally((function(){J.textContent="Сохранить"}))}));var M=document.forms["new-place"],V=document.querySelector(".popup_type_new-card"),z=document.querySelector(".popup__input_type_card-name"),H=document.querySelector(".popup__input_type_url"),Y=document.querySelector(".profile__add-button"),$=M.querySelector(".popup__button");Y.addEventListener("click",(function(){s(M,q),i(V)})),M.addEventListener("submit",(function(n){n.preventDefault();var o=z.value,i=H.value;$.textContent="Сохранение...",w(o,i).then((function(n){var o=t(n,Z,e,r,W,S,L,x);k.prepend(o),a(V),M.reset(),s(M,q)})).catch((function(t){return console.log(t)})).finally((function(){$.textContent="Сохранить"}))}));var Z,K=document.querySelector(".popup_type_image"),Q=document.querySelector(".popup__image"),R=document.querySelector(".popup__caption");function W(t){Q.src=t.link,Q.alt=t.name,R.textContent=t.name,i(K)}document.querySelectorAll(".popup__close").forEach((function(t){return t.addEventListener("click",(function(){a(t.closest(".popup"))}))})),_().then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return E(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];Z=o._id,function(t){var e=t.name,r=t.about,n=t.avatar;C.textContent=e,O.textContent=r,j.src=n}(o),X(i,Z)})).catch((function(t){return console.log(t)}));var X=function(n,o){n.forEach((function(n){var i=t(n,o,e,r,W,S,L,x);k.append(i)}))};!function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){(function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);c(r,n,e),r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){var n=e.dataset.error;e.validity.valueMissing||"url"===e.type||/^[a-zA-Zа-яА-Я\s-]+$/.test(e.value)?e.setCustomValidity(""):e.setCustomValidity(n),e.validity.valid?u(t,e,r):function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.classList.add(n.errorClass),o.textContent=r}(t,e,e.validationMessage,r)}(t,o,e),c(r,n,e)}))}))})(e,t),e.addEventListener("submit",(function(t){t.preventDefault()}))}))}(q)})();