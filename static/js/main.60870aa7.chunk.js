(this["webpackJsonpfrom-the-future"]=this["webpackJsonpfrom-the-future"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),o=n(8),c=n.n(o),i=(n(14),n(9)),a=n(3),d=(n(15),n(2)),l=n(0),m=function(e){var t=e.toggle,n=e.sortBy,s=e.onSortByChange,r=e.orderBy,o=e.onOrderByChange;return t?Object(l.jsx)("div",{className:"origin-top-right absolute right-0 mt-2 w-56\r rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",children:Object(l.jsxs)("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:[Object(l.jsxs)("div",{onClick:function(){return s("owner")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Owner Name  ","owner"===n&&Object(l.jsx)(d.b,{})]}),Object(l.jsxs)("div",{onClick:function(){return s("date")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Date ","date"===n&&Object(l.jsx)(d.b,{})]}),Object(l.jsxs)("div",{onClick:function(){return o("asc")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2",role:"menuitem",children:["Asc ","asc"===r&&Object(l.jsx)(d.b,{})]}),Object(l.jsxs)("div",{onClick:function(){return o("desc")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Desc ","desc"===r&&Object(l.jsx)(d.b,{})]})]})}):null},u=function(e){var t=e.query,n=e.onQueryChange,r=e.sortBy,o=e.onSortByChange,c=e.orderBy,i=e.onOrderByChange,u=Object(s.useState)(!1),b=Object(a.a)(u,2),j=b[0],x=b[1];return Object(l.jsx)("div",{className:"py-5",children:Object(l.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(l.jsxs)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:[Object(l.jsx)(d.d,{}),Object(l.jsx)("label",{htmlFor:"query",className:"sr-only"})]}),Object(l.jsx)("input",{type:"text",name:"query",id:"query",value:t,onChange:function(e){n(e.target.value)},className:"pl-8 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300",placeholder:"Search"}),Object(l.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("button",{type:"button",onClick:function(){return x(!j)},className:"justify-center px-4 py-2 bg-indigo-400 border-2 border-indigo-400 text-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center",id:"options-menu","aria-haspopup":"true","aria-expanded":"true",children:["Sort By ",Object(l.jsx)(d.a,{className:"ml-2"})]}),Object(l.jsx)(m,{toggle:j,sortBy:r,onSortByChange:function(e){return o(e)},orderBy:c,onOrderByChange:function(e){return i(e)}})]})})]})})},b=n(4),j=function(e){var t=e.onSendAdvice,n=e.lastId,r={owner:"",date:"",time:"",note:""},o=Object(s.useState)(!1),c=Object(a.a)(o,2),i=c[0],m=c[1],u=Object(s.useState)(r),j=Object(a.a)(u,2),x=j[0],g=j[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){m(!i)},className:"bg-blue-900 text-white px-2 py-3 w-full text-left rounded-t-md ".concat(i?"rounded-t-md":"rounded-md"),children:Object(l.jsxs)("div",{children:[Object(l.jsx)(d.c,{className:"inline-block"}),"  Donate Your 5 Cents"]})}),i&&Object(l.jsxs)("div",{className:"border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4",children:[Object(l.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(l.jsx)("label",{htmlFor:"owner",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Your Name"}),Object(l.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(l.jsx)("input",{onChange:function(e){g(Object(b.a)(Object(b.a)({},x),{},{owner:e.target.value}))},value:x.owner,type:"text",name:"owner",id:"owner",className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300  rounded-md"})})]}),Object(l.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(l.jsx)("label",{htmlFor:"date",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Date"}),Object(l.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(l.jsx)("input",{onChange:function(e){g(Object(b.a)(Object(b.a)({},x),{},{date:e.target.value}))},value:x.date,type:"date",name:"date",id:"date",className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300 rounded-md"})})]}),Object(l.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(l.jsx)("label",{htmlFor:"time",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Time"}),Object(l.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(l.jsx)("input",{onChange:function(e){g(Object(b.a)(Object(b.a)({},x),{},{time:e.target.value}))},value:x.time,type:"time",name:"time",id:"time",className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300 rounded-md"})})]}),Object(l.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(l.jsx)("label",{htmlFor:"note",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Notes"}),Object(l.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(l.jsx)("textarea",{onChange:function(e){g(Object(b.a)(Object(b.a)({},x),{},{note:e.target.value}))},value:x.note,id:"note",name:"note",rows:"3",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"Detailed comments"})})]}),Object(l.jsx)("div",{className:"pt-5",children:Object(l.jsx)("div",{className:"flex justify-end",children:Object(l.jsx)("button",{onClick:function(){var e={id:n+1,owner:x.owner,date:x.date,time:x.time,note:x.note};t(e),g(r),m(!i)},type:"submit",className:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400",children:"Submit"})})})]})]})},x=function(e){var t=e.advice,n=e.onDeleteAdvice;return Object(l.jsxs)("li",{className:"grid grid-cols-1 sm:grid-cols-3 py-1",children:[Object(l.jsx)("div",{className:"max-w-prose text-left sm:col-span-2",children:t.note}),Object(l.jsxs)("div",{className:"justify-self-end grid justify-items-end sm:col-start-3",children:[Object(l.jsx)("span",{children:t.date}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{className:"font-bold text-indigo-500",children:"Owner:"})," ",t.owner]}),Object(l.jsx)("button",{type:"button",onClick:function(){return n(t.id)},className:"p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:Object(l.jsx)(d.e,{})})]})]})};var g=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(s.useState)(""),c=Object(a.a)(o,2),d=c[0],m=c[1],b=Object(s.useState)("owner"),g=Object(a.a)(b,2),f=g[0],h=g[1],O=Object(s.useState)("desc"),p=Object(a.a)(O,2),y=p[0],v=p[1],w=n.filter((function(e){return e.owner.toLowerCase().includes(d.toLowerCase())||e.note.toLowerCase().includes(d.toLowerCase())})).sort((function(e,t){var n="asc"===y?1:-1;return e[f].toLowerCase()<t[f].toLowerCase()?-1*n:1*n})),N=Object(s.useCallback)((function(){fetch("https://tlylt.github.io/from-the-future/data.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);return Object(s.useEffect)((function(){N()}),[N]),Object(l.jsxs)("div",{className:"App container mx-auto mt-3 px-4 font-thin",children:[Object(l.jsx)("h1",{className:"mb-3 text-4xl font-mono",children:"From The Future"}),Object(l.jsx)("p",{children:"Notes to (NUS) Computer Science Freshmen"}),Object(l.jsx)(j,{onSendAdvice:function(e){return r([].concat(Object(i.a)(n),[e]))},lastId:n.reduce((function(e,t){return Number(t.id)>e?Number(t.id):e}),0)}),Object(l.jsx)(u,{query:d,onQueryChange:function(e){return m(e)},orderBy:y,onOrderByChange:function(e){return v(e)},sortBy:f,onSortByChange:function(e){return h(e)}}),Object(l.jsx)("ul",{className:"divide-y divide-gray-200",children:w.map((function(e){return Object(l.jsx)(x,{advice:e,onDeleteAdvice:function(e){return r(n.filter((function(t){return t.id!==e})))}},e.id)}))})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),o(e),c(e)}))};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.60870aa7.chunk.js.map