(this["webpackJsonpfrom-the-future"]=this["webpackJsonpfrom-the-future"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),o=n(9),c=n.n(o),i=(n(16),n(10)),a=n(3),l=(n(17),n(2)),d=n(0),u=function(e){var t=e.toggle,n=e.sortBy,r=e.onSortByChange,s=e.orderBy,o=e.onOrderByChange;return t?Object(d.jsx)("div",{className:"origin-top-right absolute right-0 mt-2 w-56\r rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",children:Object(d.jsxs)("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:[Object(d.jsxs)("div",{onClick:function(){return r("owner")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Owner Name  ","owner"===n&&Object(d.jsx)(l.b,{})]}),Object(d.jsxs)("div",{onClick:function(){return r("length")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Length ","length"===n&&Object(d.jsx)(l.b,{})]}),Object(d.jsxs)("div",{onClick:function(){return r("date")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-50  hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Date ","date"===n&&Object(d.jsx)(l.b,{})]}),Object(d.jsxs)("div",{onClick:function(){return o("asc")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-50  hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2",role:"menuitem",children:["Asc ","asc"===s&&Object(d.jsx)(l.b,{})]}),Object(d.jsxs)("div",{onClick:function(){return o("desc")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-50  hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Desc ","desc"===s&&Object(d.jsx)(l.b,{})]})]})}):null},b=function(e){var t=e.query,n=e.onQueryChange,s=e.sortBy,o=e.onSortByChange,c=e.orderBy,i=e.onOrderByChange,b=Object(r.useState)(!1),m=Object(a.a)(b,2),j=m[0],h=m[1];return Object(d.jsx)("div",{className:"py-5",children:Object(d.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(d.jsxs)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:[Object(d.jsx)(l.e,{}),Object(d.jsx)("label",{htmlFor:"query",className:"sr-only"})]}),Object(d.jsx)("input",{type:"text",name:"query",id:"query",value:t,maxLength:"50",onChange:function(e){n(e.target.value)},className:"pl-8 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300",placeholder:"Search"}),Object(d.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("button",{type:"button",onClick:function(){return h(!j)},className:"justify-center px-4 py-2 bg-sku-darker border-2 border-sku-dark text-sm text-sku-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center",id:"options-menu","aria-haspopup":"true","aria-expanded":"true",children:["Sort By ",Object(d.jsx)(l.a,{className:"ml-2"})]}),Object(d.jsx)(u,{toggle:j,sortBy:s,onSortByChange:function(e){return o(e)},orderBy:c,onOrderByChange:function(e){return i(e)}})]})})]})})},m=n(5),j=n(4),h=n.n(j),g=n(11),x=function(e){var t=e.onSendAdvice,n={owner:"",date:"",note:"",contact:""},s=Object(r.useState)(!1),o=Object(a.a)(s,2),c=o[0],i=o[1],u=Object(r.useState)(n),b=Object(a.a)(u,2),j=b[0],x=b[1],f=Object(r.useState)(!1),O=Object(a.a)(f,2),p=O[0],y=O[1],v=Object(r.useRef)(0);return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){i(!c)},className:"bg-sku-darker text-white px-2 py-3 w-full text-left rounded-t-md ".concat(c?"rounded-t-md":"rounded-md"),children:Object(d.jsxs)("div",{children:[Object(d.jsx)(l.c,{className:"inline-block"}),"  Donate Your 5 Cents"]})}),c&&Object(d.jsxs)("div",{className:"border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4",children:[Object(d.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(d.jsx)("label",{htmlFor:"owner",className:"block text-sm font-medium text-gray-700",children:"Your Name"}),Object(d.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(d.jsx)("input",{onChange:function(e){x(Object(m.a)(Object(m.a)({},j),{},{owner:e.target.value}))},value:j.owner,type:"text",name:"owner",id:"owner",placeholder:"Only If You Wish To Be Remembered...",maxLength:"20",className:"px-1 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300  rounded-md"})})]}),Object(d.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(d.jsx)("label",{htmlFor:"note",className:"block text-sm font-medium text-gray-700",children:"Notes"}),Object(d.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(d.jsx)("textarea",{onChange:function(e){x(Object(m.a)(Object(m.a)({},j),{},{note:e.target.value}))},value:j.note,id:"note",name:"note",rows:"4",maxLength:"1000",required:!0,className:"px-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-md",placeholder:"Your Advice Please..."})})]}),Object(d.jsxs)("div",{className:"sm:grid sm:grid-cols-3 invisible sm:gap-4 sm:items-start hidden sm:pt-5",children:[Object(d.jsx)("label",{htmlFor:"contact",className:"block text-sm font-medium text-gray-700",children:"Contact"}),Object(d.jsx)("input",{id:"contact",name:"contact",size:"40",type:"text",value:j.contact,maxLength:"10",onChange:function(e){x(Object(m.a)(Object(m.a)({},j),{},{contact:e.target.value}))}})]}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"flex justify-end",children:Object(d.jsx)("button",{onClick:function(){if(""!==j.note.trim()&&""===j.contact&&null!==j.contact){var e={id:Object(g.a)(),owner:""===j.owner.trim()?"Anonymous":j.owner,date:h()(),note:j.note.trim()};t(e),x(n),i(!c),y(!0),setTimeout((function(){return y(!1)}),function(e){for(var t,n=3,r=5,s=0;s<=e;s++)t=r,r=n+r,n=t;return 1e3*r}(v.current++))}},disabled:p||0===j.note.length,type:"submit",className:"ml-3 inline-flex justify-center disabled:opacitiy-50 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  ".concat(p||0===j.note.length?"":"hover:bg-indigo-700"," focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sku-dark \n                                ").concat(j.note.length>0&&!p?"text-sku-light bg-sku-darker":"text-sku-dark bg-sku-light"),children:"Submit"})})})]})]})},f=function(e){var t=e.advice,n=e.onDeleteAdvice;return Object(d.jsxs)("li",{className:"group hover:bg-sku-light hover:shadow-lg grid grid-cols-1 sm:grid-cols-3 py-4 px-2",children:[Object(d.jsx)("div",{className:"max-w-prose text-left sm:col-span-2 overflow-auto",children:t.note}),Object(d.jsxs)("div",{className:"justify-items-end grid items-center content-center",children:[Object(d.jsx)("span",{children:h()(t.date).format("LLL")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{className:"font-bold text-sku-darker",children:"Owner:"})," ",t.owner]}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(t.id)},className:"p-1.5 mr-1.5 mt-1 rounded text-white bg-sku-darker hover:bg-sku-light hover:text-sku-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:Object(d.jsx)(l.d,{})})]})]})},O=function(){return Object(d.jsx)("footer",{className:"py-5 hidden"})};var p=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),c=Object(a.a)(o,2),l=c[0],u=c[1],m=Object(r.useState)("date"),j=Object(a.a)(m,2),g=j[0],p=j[1],y=Object(r.useState)("desc"),v=Object(a.a)(y,2),w=v[0],k=v[1],N=n.filter((function(e){return e.owner.toLowerCase().includes(l.toLowerCase())||e.note.toLowerCase().includes(l.toLowerCase())})).sort((function(e,t){var n="asc"===w?1:-1;return"date"===g?h()(e[g]+"","YYYY-MM-DDTHH:mm:ss.SSSSZ").isBefore(h()(t[g]+"","YYYY-MM-DDTHH:mm:ss.SSSSZ"))?-1*n:1*n:"owner"===g?(e[g]+"").toLowerCase()<(t[g]+"").toLowerCase()?-1*n:1*n:"length"===g?e.note.length<t.note.length?-1*n:1*n:(console.log("Something is wrong"),!1)})),C=Object(r.useCallback)((function(){fetch("https://hkiq5n.deta.dev/").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),S=Object(r.useCallback)((function(e){s([].concat(Object(i.a)(n),[e])),fetch("https://hkiq5n.deta.dev/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("Success!")})).catch((function(e){console.log("Error:",e)}))}),[n]);return Object(r.useEffect)((function(){C()}),[C]),Object(d.jsxs)("div",{className:"bg-sku App container max-w-4xl mx-auto pt-3 px-5 font-note",children:[Object(d.jsx)("h1",{className:"mb-3 text-4xl font-futuristic font-bold",children:"From The Future"}),Object(d.jsx)("p",{className:"pb-2",children:"Notes to (NUS) Computing Freshmen"}),Object(d.jsx)(x,{onSendAdvice:function(e){return S(e)}}),Object(d.jsx)(b,{query:l,onQueryChange:function(e){return u(e)},orderBy:w,onOrderByChange:function(e){return k(e)},sortBy:g,onSortByChange:function(e){return p(e)}}),Object(d.jsx)("ul",{className:"divide-y-2 divide-sku-light",children:N.map((function(e){return Object(d.jsx)(f,{advice:e,onDeleteAdvice:function(e){return s(n.filter((function(t){return t.id!==e})))}},e.id)}))}),Object(d.jsx)(O,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),y()}},[[20,1,2]]]);
//# sourceMappingURL=main.b8ac6043.chunk.js.map