(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[172],{1342:function(e,t,a){"use strict";var s=a(4),n=a(7),c=a(15),r=a.n(c),i=a(1),l=a.n(i),o=a(18),d=a(108),b=l.a.forwardRef((function(e,t){var a=e.active,c=e.disabled,i=e.className,o=e.style,b=e.activeLabel,j=e.children,u=Object(n.a)(e,["active","disabled","className","style","activeLabel","children"]),h=a||c?"span":d.a;return l.a.createElement("li",{ref:t,style:o,className:r()(i,"page-item",{active:a,disabled:c})},l.a.createElement(h,Object(s.a)({className:"page-link",disabled:c},u),j,a&&b&&l.a.createElement("span",{className:"sr-only"},b)))}));b.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},b.displayName="PageItem";var j=b;function u(e,t,a){function s(e){var s=e.children,c=Object(n.a)(e,["children"]);return l.a.createElement(b,c,l.a.createElement("span",{"aria-hidden":"true"},s||t),l.a.createElement("span",{className:"sr-only"},a))}return void 0===a&&(a=e),s.displayName=e,s}var h=u("First","\xab"),m=u("Prev","\u2039","Previous"),O=u("Ellipsis","\u2026","More"),x=u("Next","\u203a"),p=u("Last","\xbb"),g=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.children,d=e.size,b=Object(n.a)(e,["bsPrefix","className","children","size"]),j=Object(o.a)(a,"pagination");return l.a.createElement("ul",Object(s.a)({ref:t},b,{className:r()(c,j,d&&j+"-"+d)}),i)}));g.First=h,g.Prev=m,g.Ellipsis=O,g.Item=j,g.Next=x,g.Last=p;t.a=g},2352:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(8);var c=a(1),r=a.n(c),i=a(945),l=a(942),o=a(1342),d=a(946),b=a(964),j=a(1211),u=a(29),h=a(1126),m=function(e){var t=e.filter,a=e.setFilter,n=Object(c.useState)(t),r=Object(u.a)(n,2),i=r[0],l=r[1],o=Object(h.useAsyncDebounce)((function(e){a(e||void 0)}),1e3);return Object(s.jsxs)("span",{className:"d-flex align-items-center justify-content-end",children:["Search:"," ",Object(s.jsx)("input",{className:"form-control ml-2 w-auto",value:i||"",onChange:function(e){l(e.target.value),o(e.target.value)}})]})},O=a(1166),x=a.n(O),p=a(308),g=function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t},f=function(){var e=x.a.generate({words:1,saltLength:0}),t="avatar-"+Math.floor(5*Math.random()+1)+".jpg",a=p("./".concat(t));return Object(s.jsx)(r.a.Fragment,{children:Object(s.jsxs)("div",{className:"d-inline-block align-middle",children:[Object(s.jsx)("img",{src:a.default,alt:"user",className:"img-radius align-top m-r-15",style:{width:"40px"}}),Object(s.jsxs)("div",{className:"d-inline-block",children:[Object(s.jsx)("h6",{className:"m-b-0 text-capitalize",children:e}),Object(s.jsxs)("p",{className:"m-b-0",children:[e," @gmail.com"]})]})]})})},v=function(){var e,t,a=Math.random();return{name:Object(s.jsx)(f,{}),position:x.a.generate({words:1,saltLength:0}),office:x.a.generate({words:1,saltLength:0}),age:Math.floor(60*Math.random()+18),date:(e=new Date(2012,0,1),t=new Date,new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())).toDateString()),salary:Math.floor(100*Math.random()*1e3),status:a>.66?Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"badge badge-light-success",children:"Active"}),Object(s.jsxs)("div",{className:"overlay-edit",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-icon btn-success",children:Object(s.jsxs)("i",{className:"feather icon-check-circle",children:[" ",Object(s.jsx)("span",{className:"sr-only"})," "]})}),Object(s.jsx)("button",{type:"button",className:"btn btn-icon btn-danger",children:Object(s.jsx)("i",{className:"feather icon-trash-2",children:Object(s.jsx)("span",{className:"sr-only"})})})]})]}):a>.33?Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"badge badge-light-danger",children:"Inactive"}),Object(s.jsxs)("div",{className:"overlay-edit",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-icon btn-success",children:Object(s.jsxs)("i",{className:"feather icon-check-circle",children:[" ",Object(s.jsx)("span",{className:"sr-only"})," "]})}),Object(s.jsx)("button",{type:"button",className:"btn btn-icon btn-danger",children:Object(s.jsx)("i",{className:"feather icon-trash-2",children:Object(s.jsx)("span",{className:"sr-only"})})})]})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"badge badge-light-warning",children:"In Process"}),Object(s.jsxs)("div",{className:"overlay-edit",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-icon btn-success",children:Object(s.jsxs)("i",{className:"feather icon-check-circle",children:[" ",Object(s.jsx)("span",{className:"sr-only"})," "]})}),Object(s.jsx)("button",{type:"button",className:"btn btn-icon btn-danger",children:Object(s.jsx)("i",{className:"feather icon-trash-2",children:Object(s.jsx)("span",{className:"sr-only"})})})]})]})}};function N(){var e,t,a=(e=["\n  padding: 0;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return N=function(){return a},a}var y=j.default.div(N());function P(e){var t=e.columns,a=e.data,c=Object(h.useTable)({columns:t,data:a,initialState:{pageIndex:0,pageSize:10}},h.useGlobalFilter,h.useSortBy,h.usePagination),r=c.getTableProps,d=c.getTableBodyProps,j=c.headerGroups,u=c.prepareRow,O=c.globalFilter,x=c.setGlobalFilter,p=c.page,g=c.canPreviousPage,f=c.canNextPage,v=c.pageOptions,N=c.pageCount,y=c.gotoPage,P=c.nextPage,w=c.previousPage,k=c.setPageSize,S=c.state,F=S.pageIndex,M=S.pageSize;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(i.a,{children:[Object(s.jsxs)(l.a,{className:"d-flex align-items-center",children:["Show",Object(s.jsx)("select",{className:"form-control w-auto mx-2",value:M,onChange:function(e){k(Number(e.target.value))},children:[5,10,20,30,40,50].map((function(e){return Object(s.jsx)("option",{value:e,children:e},e)}))}),"entries"]}),Object(s.jsx)(l.a,{children:Object(s.jsx)(m,{filter:O,setFilter:x})})]}),Object(s.jsxs)(b.a,Object(n.a)(Object(n.a)({striped:!0,bordered:!0,hover:!0,responsive:!0},r()),{},{children:[Object(s.jsx)("thead",{children:j.map((function(e){return Object(s.jsx)("tr",Object(n.a)(Object(n.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(s.jsxs)("th",Object(n.a)(Object(n.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(s.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(s.jsx)("span",{className:"feather icon-arrow-down text-muted"}):Object(s.jsx)("span",{className:"feather icon-arrow-up text-muted"}):""})]}))}))}))}))}),Object(s.jsx)("tbody",Object(n.a)(Object(n.a)({},d()),{},{children:p.map((function(e,t){return u(e),Object(s.jsx)("tr",Object(n.a)(Object(n.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(s.jsx)("td",Object(n.a)(Object(n.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(s.jsxs)(i.a,{className:"justify-content-between",children:[Object(s.jsx)(l.a,{children:Object(s.jsxs)("span",{className:"d-flex align-items-center",children:["Page"," "," ",Object(s.jsxs)("strong",{children:[" ",F+1," of ",v.length," "]})," ","| Go to page:"," ",Object(s.jsx)("input",{type:"number",className:"form-control ml-2",defaultValue:F+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;y(t)},style:{width:"100px"}})]})}),Object(s.jsx)(l.a,{children:Object(s.jsxs)(o.a,{className:"justify-content-end",children:[Object(s.jsx)(o.a.First,{onClick:function(){return y(0)},disabled:!g}),Object(s.jsx)(o.a.Prev,{onClick:function(){return w()},disabled:!g}),Object(s.jsx)(o.a.Next,{onClick:function(){return P()},disabled:!f}),Object(s.jsx)(o.a.Last,{onClick:function(){return y(N-1)},disabled:!f})]})})]})]})}t.default=function(){var e=r.a.useMemo((function(){return[{Header:"Name",accessor:"name"},{Header:"Position",accessor:"position"},{Header:"Office",accessor:"office"},{Header:"Age",accessor:"age"},{Header:"Date",accessor:"date"},{Header:"Salary",accessor:"salary"},{Header:"Status",accessor:"status"}]}),[]),t=r.a.useMemo((function(){return function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=t[a];return g(s).map((function(s){return Object(n.a)(Object(n.a)({},v()),{},{subRows:t[a+1]?e(a+1):void 0})}))}()}(100)}),[]);return Object(s.jsx)(r.a.Fragment,{children:Object(s.jsx)(i.a,{children:Object(s.jsx)(l.a,{sm:12,children:Object(s.jsx)(d.a,{className:"user-profile-list",children:Object(s.jsx)(d.a.Body,{className:"p-0",children:Object(s.jsx)(y,{children:Object(s.jsx)(P,{columns:e,data:t})})})})})})})}}}]);
//# sourceMappingURL=172.1f2f36f3.chunk.js.map