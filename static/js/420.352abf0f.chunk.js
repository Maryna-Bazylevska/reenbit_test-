"use strict";(self.webpackChunkreenbit_test_=self.webpackChunkreenbit_test_||[]).push([[420],{256:function(t,e,n){n.r(e),n.d(e,{default:function(){return N}});var r,a=n(439),c=n(791),i=n(689),s=n(87),u=n(390),o=["title","titleId"];function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function m(t,e){var n=t.title,a=t.titleId,i=f(t,o);return c.createElement("svg",l({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},i),n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",fill:"black",fillOpacity:.54})))}var h=c.forwardRef(m),p=(n.p,{div:"Form_div__piY21",button:"Form_button__t6FSP",input:"Form_input__KeyjQ"}),d=n(184),g=function(t){var e=t.onSubmit,n=(0,c.useState)(""),r=(0,a.Z)(n,2),i=r[0],s=r[1];return(0,d.jsx)("div",{className:p.div,children:(0,d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i)},children:[(0,d.jsx)("button",{type:"submit",className:p.button,children:(0,d.jsx)("span",{className:p.span,children:(0,d.jsx)(h,{})})}),(0,d.jsx)("input",{className:p.input,placeholder:"Filter by name...",value:i,onChange:function(t){s(t.currentTarget.value.toLowerCase())}})]})})},_="CharactersPage_list__1pJxB",v="CharactersPage_item__gqQrj",b="CharactersPage_img__C0OYT",j="CharactersPage_name__9v7q9",y="CharactersPage_species__6To2c",C="CharactersPage_link__CcB3S",x="CharactersPage_div__weG13",w="CharactersPage_image__vPZUQ",O=n.p+"static/media/picture.475efae23620a5951afd.jpg";var N=function(){var t=(0,c.useState)([]),e=(0,a.Z)(t,2),n=e[0],r=e[1],o=function(t,e){var n=(0,c.useState)((function(){try{if("undefined"===typeof window)return e;var n=window.localStorage.getItem(t);return null!==n?JSON.parse(n):e}catch(r){return console.log(r),e}})),r=(0,a.Z)(n,2),i=r[0],s=r[1];return[i,function(e){try{s(e),window.localStorage.setItem(t,JSON.stringify(e))}catch(n){console.log(n)}}]}("query",""),l=(0,a.Z)(o,2),f=l[0],m=l[1],h=(0,i.TH)();(0,c.useEffect)((function(){(0,u.ql)().then((function(t){r(t.results)}))}),[]),(0,c.useEffect)((function(){null!==f&&(0,u.mq)(f).then((function(t){if(0===t.results.length)return alert("Not found!");r(t.results)}))}),[f]);return(0,d.jsxs)("div",{className:x,children:[(0,d.jsx)("img",{src:O,alt:"Rick and Morty",className:w}),(0,d.jsx)(g,{onSubmit:function(t){if(""===t)return alert("Please, enter a text!");m(t)}}),n&&(0,d.jsx)("ul",{className:_,children:n.map((function(t){var e=t.id,n=t.name,r=t.species;return(0,d.jsx)("li",{className:v,children:(0,d.jsxs)(s.rU,{to:"/".concat(e),state:{from:h},className:C,children:[(0,d.jsx)("img",{src:"https://rickandmortyapi.com/api/character/avatar/".concat(e,".jpeg"),alt:"search icon",className:b}),(0,d.jsx)("p",{className:j,children:n}),(0,d.jsx)("p",{className:y,children:r})]})},e)}))})]})}},390:function(t,e,n){n.d(e,{MD:function(){return s},mq:function(){return i},ql:function(){return c}});var r=n(243),a="https://rickandmortyapi.com/api/character",c=function(){return r.Z.get("".concat(a)).then((function(t){return t.data}))},i=function(t){return r.Z.get("".concat(a,"/?name=").concat(t)).then((function(t){return t.data}))},s=function(t){return r.Z.get("".concat(a,"/").concat(t)).then((function(t){return t.data}))}}}]);
//# sourceMappingURL=420.352abf0f.chunk.js.map