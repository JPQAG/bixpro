(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[116],{1131:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(8),s=t(1166),n=t.n(s),c=function(e){for(var a=[],t=0;t<e;t++)a.push(t);return a},o=function(){var e=Math.random();return{firstName:n.a.generate({words:1,numbers:0}),lastName:n.a.generate({words:1,numbers:0}),age:Math.floor(30*Math.random()),visits:Math.floor(100*Math.random()),progress:Math.floor(100*Math.random()),status:e>.66?"relationship":e>.33?"complicated":"single"}};function i(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];var s=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=a[t];return c(s).map((function(s){return Object(r.a)(Object(r.a)({},o()),{},{subRows:a[t+1]?e(t+1):void 0})}))};return s()}},2308:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t(8),n=t(1),c=t.n(n),o=t(945),i=t(942),l=t(946),d=t(961),u=t(1126),b=t(1131),j=t(939);function m(e){var a=e.columns,t=e.data,n=Object(u.useTable)({columns:a,data:t},u.useSortBy),c=n.getTableProps,o=n.getTableBodyProps,i=n.headerGroups,l=n.rows,b=n.prepareRow,j=l.slice(0,20);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,Object(s.a)(Object(s.a)({striped:!0,bordered:!0,hover:!0,responsive:!0},c()),{},{children:[Object(r.jsx)("thead",{children:i.map((function(e){return Object(r.jsx)("tr",Object(s.a)(Object(s.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(r.jsxs)("th",Object(s.a)(Object(s.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(r.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(r.jsx)("span",{className:"feather icon-arrow-down text-muted float-right mt-1"}):Object(r.jsx)("span",{className:"feather icon-arrow-up text-muted float-right mt-1"}):""})]}))}))}))}))}),Object(r.jsx)("tbody",Object(s.a)(Object(s.a)({},o()),{},{children:j.map((function(e,a){return b(e),Object(r.jsx)("tr",Object(s.a)(Object(s.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(r.jsx)("td",Object(s.a)(Object(s.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))})}a.default=function(){var e=c.a.useMemo((function(){return[{Header:"Name",columns:[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"}]},{Header:"Info",columns:[{Header:"Age",accessor:"age"},{Header:"Visits",accessor:"visits"},{Header:"Status",accessor:"status"},{Header:"Profile Progress",accessor:"progress"}]}]}),[]),a=c.a.useMemo((function(){return Object(b.a)(10)}),[]);return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(o.a,{children:Object(r.jsx)(i.a,{sm:12,children:Object(r.jsx)(j.a,{message:"For more info please check the components's official documentation",link:"https://react-table.tanstack.com/"})})}),Object(r.jsx)(o.a,{children:Object(r.jsx)(i.a,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(l.a.Header,{children:Object(r.jsx)(l.a.Title,{as:"h5",children:"Column Sorting"})}),Object(r.jsx)(l.a.Body,{children:Object(r.jsx)(m,{columns:e,data:a})})]})})})]})}},939:function(e,a,t){"use strict";var r=t(0),s=t(1),n=t.n(s),c=t(954);a.a=function(e){return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsxs)(c.a,{variant:"warning",children:[e.message,Object(r.jsx)(c.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}},941:function(e,a,t){"use strict";var r=t(4),s=t(7),n=t(17),c=t.n(n),o=t(1),i=t.n(o),l=t(15),d=t.n(l),u={label:c.a.string.isRequired,onClick:c.a.func},b=i.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,c=e.className,o=Object(s.a)(e,["label","onClick","className"]);return i.a.createElement("button",Object(r.a)({ref:a,type:"button",className:d()("close",c),onClick:n},o),i.a.createElement("span",{"aria-hidden":"true"},"\xd7"),i.a.createElement("span",{className:"sr-only"},t))}));b.displayName="CloseButton",b.propTypes=u,b.defaultProps={label:"Close"},a.a=b},954:function(e,a,t){"use strict";var r=t(4),s=t(7),n=t(15),c=t.n(n),o=t(1),i=t.n(o),l=t(59),d=t(53),u=t(18),b=t(293),j=t(941),m=t(927),h=t(70),f=t(108),O=Object(m.a)("h4");O.displayName="DivStyledAsH4";var p=Object(h.a)("alert-heading",{Component:O}),g=Object(h.a)("alert-link",{Component:f.a}),x={show:!0,transition:b.a,closeLabel:"Close alert"},v=i.a.forwardRef((function(e,a){var t=Object(l.a)(e,{show:"onClose"}),n=t.bsPrefix,o=t.show,m=t.closeLabel,h=t.className,f=t.children,O=t.variant,p=t.onClose,g=t.dismissible,x=t.transition,v=Object(s.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),N=Object(u.a)(n,"alert"),w=Object(d.a)((function(e){p&&p(!1,e)})),k=!0===x?b.a:x,C=i.a.createElement("div",Object(r.a)({role:"alert"},k?void 0:v,{ref:a,className:c()(h,N,O&&N+"-"+O,g&&N+"-dismissible")}),g&&i.a.createElement(j.a,{onClick:w,label:m}),f);return k?i.a.createElement(k,Object(r.a)({unmountOnExit:!0},v,{ref:void 0,in:o}),C):o?C:null}));v.displayName="Alert",v.defaultProps=x,v.Link=g,v.Heading=p,a.a=v}}]);
//# sourceMappingURL=116.8f20edc0.chunk.js.map