(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[87],{1283:function(e,a){},2532:function(e,a,t){"use strict";t.r(a);var r=t(77),c=t.n(r),n=t(109),s=t(29),i=t(1),o=t.n(i),l=t(942),d=t(940),b=t(944),u=t(919),f=t(910),j=t(957),m=t(229),p=t.n(m),v=t(41),O=t(0),h=v.d.binance.secretKey,x=v.d.binance.apiKey,N=(new(t(1027))).options({APIKEY:x,APISECRET:h});N.options({APIKEY:v.d.binance.secretKey,APISECRET:v.d.binance.apiKey,useServerTime:!0,recvWindow:6e4,verbose:!0,log:function(e){console.log(e)}});a.default=function(){var e=Object(i.useState)([]),a=Object(s.a)(e,2),t=(a[0],a[1]),r=function(){var e=Object(n.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.a.get("https://api.binance.com/api/v3/time").then((function(e){t(e.data),console.log(e.data)})).catch((function(e){return console.log(e)})),e.next=3,N.prices();case 3:a=e.sent,console.log("price of Bitcoin: "+a.BTCUSDT);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){r();var e=setInterval((function(){r()}),1e3);return function(){return clearInterval(e)}}),[]),Object(O.jsx)(o.a.Fragment,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(d.a,{xl:12,md:6,children:Object(O.jsxs)(b.a,{className:"code-table",children:[Object(O.jsx)(b.a.Header,{children:Object(O.jsx)(b.a.Title,{as:"h5",children:"Portfolio Holdings"})}),Object(O.jsxs)(b.a.Body,{className:"pb-0",children:[Object(O.jsxs)(u.a,{size:"sm",className:"mb-3",children:[Object(O.jsx)(u.a.Prepend,{children:Object(O.jsx)(u.a.Text,{id:"inputGroup-sizing-sm",children:"Filter"})}),Object(O.jsx)(f.a,{"aria-label":"Small","aria-describedby":"input-Group-sizing-sm"})]}),Object(O.jsxs)(j.a,{response:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"First Column"}),Object(O.jsx)("th",{children:"Second Column"})]})}),Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"First Data"}),Object(O.jsx)("td",{children:"Second Data"})]})})]})]})]})})})})}},925:function(e,a,t){"use strict";var r=t(4),c=t(1),n=t.n(c),s=t(15),i=t.n(s);a.a=function(e){return n.a.forwardRef((function(a,t){return n.a.createElement("div",Object(r.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},940:function(e,a,t){"use strict";var r=t(4),c=t(7),n=t(15),s=t.n(n),i=t(1),o=t.n(i),l=t(18),d=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.as,b=void 0===i?"div":i,u=Object(c.a)(e,["bsPrefix","className","as"]),f=Object(l.a)(t,"col"),j=[],m=[];return d.forEach((function(e){var a,t,r,c=u[e];if(delete u[e],"object"===typeof c&&null!=c){var n=c.span;a=void 0===n||n,t=c.offset,r=c.order}else a=c;var s="xs"!==e?"-"+e:"";a&&j.push(!0===a?""+f+s:""+f+s+"-"+a),null!=r&&m.push("order"+s+"-"+r),null!=t&&m.push("offset"+s+"-"+t)})),j.length||j.push(f),o.a.createElement(b,Object(r.a)({},u,{ref:a,className:s.a.apply(void 0,[n].concat(j,m))}))}));b.displayName="Col",a.a=b},942:function(e,a,t){"use strict";var r=t(4),c=t(7),n=t(15),s=t.n(n),i=t(1),o=t.n(i),l=t(18),d=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.noGutters,b=e.as,u=void 0===b?"div":b,f=Object(c.a)(e,["bsPrefix","className","noGutters","as"]),j=Object(l.a)(t,"row"),m=j+"-cols",p=[];return d.forEach((function(e){var a,t=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+m+r+"-"+a)})),o.a.createElement(u,Object(r.a)({ref:a},f,{className:s.a.apply(void 0,[n,j,i&&"no-gutters"].concat(p))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},a.a=b},944:function(e,a,t){"use strict";var r=t(4),c=t(7),n=t(15),s=t.n(n),i=t(1),o=t.n(i),l=t(18),d=t(70),b=t(925),u=t(291),f=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.variant,d=e.as,b=void 0===d?"img":d,u=Object(c.a)(e,["bsPrefix","className","variant","as"]),f=Object(l.a)(t,"card-img");return o.a.createElement(b,Object(r.a)({ref:a,className:s()(i?f+"-"+i:f,n)},u))}));f.displayName="CardImg",f.defaultProps={variant:null};var j=f,m=Object(b.a)("h5"),p=Object(b.a)("h6"),v=Object(d.a)("card-body"),O=Object(d.a)("card-title",{Component:m}),h=Object(d.a)("card-subtitle",{Component:p}),x=Object(d.a)("card-link",{Component:"a"}),N=Object(d.a)("card-text",{Component:"p"}),g=Object(d.a)("card-header"),y=Object(d.a)("card-footer"),P=Object(d.a)("card-img-overlay"),E=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.bg,b=e.text,f=e.border,j=e.body,m=e.children,p=e.as,O=void 0===p?"div":p,h=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(l.a)(t,"card"),N=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return o.a.createElement(u.a.Provider,{value:N},o.a.createElement(O,Object(r.a)({ref:a},h,{className:s()(n,x,d&&"bg-"+d,b&&"text-"+b,f&&"border-"+f)}),j?o.a.createElement(v,null,m):m))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=j,E.Title=O,E.Subtitle=h,E.Body=v,E.Link=x,E.Text=N,E.Header=g,E.Footer=y,E.ImgOverlay=P;a.a=E},957:function(e,a,t){"use strict";var r=t(4),c=t(7),n=t(15),s=t.n(n),i=t(1),o=t.n(i),l=t(18),d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.striped,d=e.bordered,b=e.borderless,u=e.hover,f=e.size,j=e.variant,m=e.responsive,p=Object(c.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(l.a)(t,"table"),O=s()(n,v,j&&v+"-"+j,f&&v+"-"+f,i&&v+"-striped",d&&v+"-bordered",b&&v+"-borderless",u&&v+"-hover"),h=o.a.createElement("table",Object(r.a)({},p,{className:O,ref:a}));if(m){var x=v+"-responsive";return"string"===typeof m&&(x=x+"-"+m),o.a.createElement("div",{className:x},h)}return h}));a.a=d}}]);
//# sourceMappingURL=87.b76b62c2.chunk.js.map