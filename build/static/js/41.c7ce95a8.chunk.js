(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[41],{1213:function(e,t,a){"use strict";t.a=a.p+"static/media/l1.b0d3fde5.jpg"},1299:function(e,t,a){"use strict";t.a=a.p+"static/media/l2.0d9f124c.jpg"},1300:function(e,t,a){"use strict";t.a=a.p+"static/media/l3.e03a3320.jpg"},1301:function(e,t,a){"use strict";t.a=a.p+"static/media/l4.ced56c75.jpg"},1302:function(e,t,a){"use strict";t.a=a.p+"static/media/l5.363fa5d7.jpg"},1303:function(e,t,a){"use strict";t.a=a.p+"static/media/l6.e00c75e9.jpg"},1325:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-1.caf9fcc6.jpg"},1326:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-2.aa1027ef.jpg"},1327:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-3.4250c1f2.jpg"},1328:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-4.ee7f86f7.jpg"},1329:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-5.19343d86.jpg"},1330:function(e,t,a){"use strict";t.a=a.p+"static/media/img-grd-gal-6.f590feca.jpg"},1475:function(e,t,a){"use strict";var c=a(0),i=a(8),s=a(1),n=a.n(s),r=a(1382);t.a=function(e){var t=e.currentImage,a=e.photos;return Object(c.jsx)(n.a.Fragment,{children:Object(c.jsx)(r.c,{currentIndex:t,views:a.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})})}},2657:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(29),s=a(1),n=a.n(s),r=a(947),l=a(946),o=a(948),d=a(1651),h=a(1382),u=a(1213),j=a(1299),b=a(1300),g=a(1301),m=a(1302),f=a(1303),p=a(1325),O=a(1326),w=a(1327),x=a(1328),k=a(1329),v=a(1330),C=[{src:p.a,width:6,height:4},{src:O.a,width:4,height:2},{src:w.a,width:4,height:4},{src:x.a,width:6,height:5},{src:k.a,width:7,height:3},{src:v.a,width:3,height:4},{src:u.a,width:2,height:1},{src:j.a,width:2,height:2},{src:b.a,width:5,height:4},{src:g.a,width:4,height:3},{src:m.a,width:4,height:3},{src:f.a,width:3,height:4}],N=a(1475),y=a(942);t.default=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),a=t[0],u=t[1],j=Object(s.useState)(!1),b=Object(i.a)(j,2),g=b[0],m=b[1],f=Object(s.useCallback)((function(e,t){t.photo;var a=t.index;u(a),m(!0)}),[]);return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)(r.a,{children:Object(c.jsx)(l.a,{sm:12,children:Object(c.jsx)(y.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/react-photo-gallery"})})}),Object(c.jsx)(r.a,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(o.a.Body,{children:Object(c.jsx)(d.a,{photos:C,onClick:f})})})})}),Object(c.jsx)(h.b,{children:g?Object(c.jsx)(h.a,{onClose:function(){u(0),m(!1)},children:Object(c.jsx)(N.a,{currentImage:a,photos:C})}):null})]})}},942:function(e,t,a){"use strict";var c=a(0),i=a(1),s=a.n(i),n=a(962);t.a=function(e){return Object(c.jsx)(s.a.Fragment,{children:Object(c.jsxs)(n.a,{variant:"warning",children:[e.message,Object(c.jsx)(n.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}},944:function(e,t,a){"use strict";var c=a(4),i=a(7),s=a(17),n=a.n(s),r=a(1),l=a.n(r),o=a(15),d=a.n(o),h={label:n.a.string.isRequired,onClick:n.a.func},u=l.a.forwardRef((function(e,t){var a=e.label,s=e.onClick,n=e.className,r=Object(i.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(c.a)({ref:t,type:"button",className:d()("close",n),onClick:s},r),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},a))}));u.displayName="CloseButton",u.propTypes=h,u.defaultProps={label:"Close"},t.a=u},962:function(e,t,a){"use strict";var c=a(4),i=a(7),s=a(15),n=a.n(s),r=a(1),l=a.n(r),o=a(59),d=a(53),h=a(18),u=a(293),j=a(944),b=a(930),g=a(70),m=a(108),f=Object(b.a)("h4");f.displayName="DivStyledAsH4";var p=Object(g.a)("alert-heading",{Component:f}),O=Object(g.a)("alert-link",{Component:m.a}),w={show:!0,transition:u.a,closeLabel:"Close alert"},x=l.a.forwardRef((function(e,t){var a=Object(o.a)(e,{show:"onClose"}),s=a.bsPrefix,r=a.show,b=a.closeLabel,g=a.className,m=a.children,f=a.variant,p=a.onClose,O=a.dismissible,w=a.transition,x=Object(i.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),k=Object(h.a)(s,"alert"),v=Object(d.a)((function(e){p&&p(!1,e)})),C=!0===w?u.a:w,N=l.a.createElement("div",Object(c.a)({role:"alert"},C?void 0:x,{ref:t,className:n()(g,k,f&&k+"-"+f,O&&k+"-dismissible")}),O&&l.a.createElement(j.a,{onClick:v,label:b}),m);return C?l.a.createElement(C,Object(c.a)({unmountOnExit:!0},x,{ref:void 0,in:r}),N):r?N:null}));x.displayName="Alert",x.defaultProps=w,x.Link=O,x.Heading=p,t.a=x}}]);
//# sourceMappingURL=41.c7ce95a8.chunk.js.map