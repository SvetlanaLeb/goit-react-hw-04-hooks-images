(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,n){e.exports={btnLoadMore:"Button_btnLoadMore__2Q04h"}},16:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(4),r=n.n(a),s=(n(16),n(9)),i=n(3),u=n(7),l=n(10),b=n.n(l),j=(n(37),n(38),n(39),n(1));var m=function(e){var t=e.onSubmit,n=Object(c.useState)(""),o=Object(i.a)(n,2),a=o[0],r=o[1];return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a),r("")):u.b.warn("Enter your request")},children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:a,onChange:function(e){r(e.currentTarget.value.toLowerCase())}})]})})},d=(n(41),function(e){var t=e.webformatURL,n=e.largeImageURL,c=e.tags,o=e.onClick;return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{src:t,alt:c,className:"ImageGalleryItem-image",onClick:function(){return o(n)}})})}),h=(n(42),function(e){var t=e.data,n=e.onImageClick;return Object(j.jsx)("ul",{className:"ImageGallery",children:t&&t.map((function(e){var t=e.id,c=e.webformatURL,o=e.largeImageURL,a=e.tags;return Object(j.jsx)(d,{webformatURL:c,largeImageURL:o,tags:a,onClick:n},t)}))})}),f=function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("22384127-56cbd68b25450c364ed3164a8","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("No results were found for ".concat(e," ")))}))},O=n(11),g=n.n(O),p=function(e){var t=e.onLoadClick;return Object(j.jsx)("button",{className:g.a.btnLoadMore,type:"button",onClick:t,children:"Load more"})},x=(n(43),document.querySelector("#modal-root"));var v=function(e){var t=e.onClose,n=e.children;return Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",(function(t){e(t)})),function(){window.removeEventListener("keydown",(function(t){e(t)}))}}),[t]),Object(a.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(j.jsx)("div",{className:"Modal",children:n})}),x)};var w=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(null),r=Object(i.a)(a,2),l=r[0],d=r[1],O=Object(c.useState)(1),g=Object(i.a)(O,2),x=g[0],w=g[1],S=Object(c.useState)(!1),k=Object(i.a)(S,2),y=k[0],L=k[1],C=Object(c.useState)(null),N=Object(i.a)(C,2),I=N[0],E=N[1],F=Object(c.useState)(!1),R=Object(i.a)(F,2),U=R[0],M=R[1],T=Object(c.useState)(""),_=Object(i.a)(T,2),q=_[0],B=_[1];return Object(c.useEffect)((function(){""!==n&&(L(!0),f(n,x).then((function(e){d((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.hits))}))})).catch((function(e){return E(e)})).finally((function(){return L(!1)})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}),[x,n]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{onSubmit:function(e){o(e),d([]),w(1)}}),I&&Object(j.jsx)("h2",{children:I.message}),l&&0===l.length&&!1===y&&Object(j.jsx)("h2",{children:"No results were found for your search"}),l&&Object(j.jsx)(h,{data:l,onImageClick:function(e){M(!0),B(e)}}),l&&0!==l.length&&Object(j.jsx)(p,{onLoadClick:function(){w((function(e){return e+1}))}}),y&&Object(j.jsx)(b.a,{type:"ThreeDots",color:"blueviolet",height:80,width:80,className:"Loader"}),U&&Object(j.jsx)(v,{modalImage:q,onClose:function(){M(!1),B("")},children:Object(j.jsx)("img",{src:q,alt:""})}),Object(j.jsx)(u.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c25880c1.chunk.js.map