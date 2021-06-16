(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[149],{1237:function(e,r,t){"use strict";var a=[{Header:"Security Information",columns:[{Header:"#",accessor:"market_cap_rank"},{Header:"Name",accessor:"name"},{Header:"Symbol",accessor:"symbol",Cell:function(e){return e.value.toUpperCase()}}]},{Header:"Market Pricing Info",columns:[{Header:"Current Price",accessor:"current_price",Cell:function(e){var r=e.value;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r)}},{Header:"24h Price Change",accessor:"price_change_24h",Cell:function(e){var r=e.value;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r)}},{Header:"24h Price Change (%)",accessor:"price_change_percentage_24h",Cell:function(e){return e.value.toFixed(2)+"%"}},{Header:"All Time High (ATH)",accessor:"ath",Cell:function(e){var r=e.value;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r)}},{Header:"Change From ATH",accessor:"ath_change_percentage",Cell:function(e){return e.value.toFixed(2)+"%"}},{Header:"Market Capitalization",accessor:"market_cap",Cell:function(e){var r=e.value;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r)}}]}];r.a=a},1452:function(e,r){},2649:function(e,r,t){"use strict";t.r(r);var a=t(1),n=t.n(a),c=t(77),s=t.n(c),o=t(109),i=t(8),u=t(29),l=t(945),d=t(944),b=t(946),j=t(919),m=t(910),h=t(963),O=t(1113),f=(t(229),t(43)),p=(t(1237),t(0)),v=f.d.binance.secretKey,x=f.d.binance.apiKey,y=(new(t(1183))).options({APIKEY:x,APISECRET:v});function g(e){var r=e.columns,t=e.data,n=Object(O.useTable)({columns:r,data:t},O.useFilters,O.useSortBy),c=n.getTableProps,s=n.getTableBodyProps,o=n.headerGroups,l=n.rows,d=n.prepareRow,b=(n.setFilter,Object(a.useState)("")),j=Object(u.a)(b,2),m=(j[0],j[1],l);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(h.a,Object(i.a)(Object(i.a)({striped:!0,bordered:!0,hover:!0,responsive:!0},c()),{},{children:[Object(p.jsx)("thead",{children:o.map((function(e){return Object(p.jsx)("tr",Object(i.a)(Object(i.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsxs)("th",Object(i.a)(Object(i.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(p.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(p.jsx)("span",{className:"feather icon-arrow-down text-muted float-right mt-1"}):Object(p.jsx)("span",{className:"feather icon-arrow-up text-muted float-right mt-1"}):""})]}))}))}))}))}),Object(p.jsx)("tbody",Object(i.a)(Object(i.a)({},s()),{},{children:m.map((function(e,r){return d(e),Object(p.jsx)("tr",Object(i.a)(Object(i.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(p.jsx)("td",Object(i.a)(Object(i.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))})}y.options({APIKEY:x,APISECRET:v,useServerTime:!0,recvWindow:5e3,verbose:!0,log:function(e){console.log(e)}});var H=function(){var e=n.a.useMemo((function(){return[{Header:"Trade Information",columns:[{Header:"Trade ID",accessor:"symbol"},{Header:"Quantity Held",accessor:"available"},{Header:"Quantity On Order",accessor:"onOrder"}]}]}),[]),r=Object(a.useState)(""),t=Object(u.a)(r,2),c=t[0],i=t[1],h=Object(a.useState)(""),O=Object(u.a)(h,2),f=O[0],v=O[1],x=Object(a.useState)(""),H=Object(u.a)(x,2),S=(H[0],H[1]),C=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,y.futuresPrices();case 3:return e.t1=e.sent,e.t0.info.call(e.t0,e.t1),e.next=7,y.useServerTime();case 7:y.balance((function(e,r){return e?console.error(e):(v(r),r)})),S(y.trades("ETHAUD",(function(e,r,t){console.info(t+" trade history",r)})));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){C();var e=setInterval((function(){C()}),1e4);return function(){return clearInterval(e)}}),[]);var w=function(e){var r=[];for(var t in e)r.push({symbol:t,available:e[t].available,onOrder:e[t].onOrder});return r}(f).filter((function(e){return e.symbol.toLowerCase().includes(c.toLowerCase())}));return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(d.a,{children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(b.a.Header,{children:Object(p.jsx)(b.a.Title,{as:"h5",children:"Cryptocurrencies"})}),Object(p.jsxs)(b.a.Body,{children:[Object(p.jsxs)(j.a,{size:"sm",className:"mb-3",children:[Object(p.jsx)(j.a.Prepend,{children:Object(p.jsx)(j.a.Text,{id:"inputGroup-sizing-sm",children:"Filter"})}),Object(p.jsx)(m.a,{onChange:function(e){i(e.target.value)},"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"})]}),Object(p.jsx)(g,{columns:e,data:w})]})]})})})})};r.default=function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)(H,{})})}}}]);
//# sourceMappingURL=149.87787773.chunk.js.map