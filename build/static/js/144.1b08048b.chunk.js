(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[144],{1121:function(e,t,c){"use strict";var a=c(9),n=c(29),s=c(1),i=c.n(s),o=c(912),r=c(946),l=c(1167),j=c(2),d=c(85),b=c(0);t.a=function(e){var t,c,h,O,u,x=e.isOption,p=e.title,m=e.children,f=e.cardClass,g=e.optionClass,k=Object(s.useState)(!1),C=Object(n.a)(k,2),N=C[0],w=C[1],y=Object(s.useState)(!1),v=Object(n.a)(y,2),S=v[0],H=v[1],I=Object(s.useState)(!1),A=Object(n.a)(I,2),G=A[0],T=A[1],z=Object(s.useState)(!1),F=Object(n.a)(z,2),P=F[0],R=F[1],B=Object(d.a)(),D=[];return x&&(h=Object(b.jsx)("div",{className:"card-header-right "+g,children:Object(b.jsxs)(o.a,{alignRight:!0,className:"btn-group card-option",children:[Object(b.jsx)(o.a.Toggle,{id:"dropdown-basic",className:"btn-icon",children:Object(b.jsx)("i",{className:"feather icon-more-horizontal"})}),Object(b.jsxs)(o.a.Menu,{as:"ul",className:"list-unstyled card-option",children:[Object(b.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return w(!N)},children:[Object(b.jsx)("i",{className:N?"feather icon-minimize":"feather icon-maximize"}),Object(b.jsxs)(j.b,{to:"#",children:[" ",N?"Restore":"Maximize"," "]})]}),Object(b.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return H(!S)},children:[Object(b.jsx)("i",{className:S?"feather icon-plus":"feather icon-minus"}),Object(b.jsxs)(j.b,{to:"#",children:[" ",S?"Expand":"Collapse"," "]})]}),Object(b.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){T(!0),setInterval((function(){T(!1)}),3e3)},children:[Object(b.jsx)("i",{className:"feather icon-refresh-cw"}),Object(b.jsx)(j.b,{to:"#",children:" Reload "})]}),Object(b.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){R(!0)},children:[Object(b.jsx)("i",{className:"feather icon-trash"}),Object(b.jsx)(j.b,{to:"#",children:" Remove "})]})]})]})})),O=Object(b.jsxs)(r.a.Header,{children:[Object(b.jsx)(r.a.Title,{as:"h5",children:p}),h]}),N&&(D=[].concat(Object(a.a)(D),["full-card"]),t={position:"fixed",top:0,left:0,right:0,width:B.width,height:B.height}),G&&(D=[].concat(Object(a.a)(D),["card-load"]),c=Object(b.jsx)("div",{className:"card-loader",children:Object(b.jsx)("i",{className:"pct-loader1 anim-rotate"})})),P&&(D=[].concat(Object(a.a)(D),["d-none"])),f&&(D=[].concat(Object(a.a)(D),[f])),u=Object(b.jsxs)(r.a,{className:D.join(" "),style:t,children:[O,Object(b.jsx)(l.a,{in:!S,children:Object(b.jsx)("div",{children:Object(b.jsx)(r.a.Body,{children:m})})}),c]}),Object(b.jsx)(i.a.Fragment,{children:u})}},2576:function(e,t,c){"use strict";c.r(t);var a=c(29),n=c(1),s=c.n(n),i=c(945),o=c(944),r=c(946),l=c(316),j=c(2468),d=c(2474),b=c(940),h=c(1121),O=c(0),u=[{selector:".tour-1",content:"Click hear customize basic card layout"},{selector:".card-option",content:"Click hear open card options"},{selector:".displayChatbox",content:"Click chat open chat conversation"},{selector:".mobile-menu",content:"Click to see collapse menu layout"},{selector:".pcoded-menu-caption",content:"Menu caption"}],x=[{content:Object(O.jsx)("h5",{children:"Let's begin our journey!"}),placement:"center",locale:{skip:Object(O.jsx)("strong",{"aria-label":"skip",children:"S-K-I-P"})},target:"body"},{target:".tour-1",content:"Click hear customize basic card layout",placement:"top"},{target:".card-option",content:"Click hear open card options"},{target:".displayChatbox",content:"Click chat open chat conversation"},{target:".mobile-menu",content:"Click to see collapse menu layout"},{target:".pcoded-menu-caption",content:"Menu caption"}];t.default=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],p=t[1],m=Object(n.useState)(!1),f=Object(a.a)(m,2),g=f[0],k=f[1],C=Object(n.useState)(x),N=Object(a.a)(C,1)[0];return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(i.a,{children:Object(O.jsx)(o.a,{sm:12,children:Object(O.jsx)(b.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/react-joyride"})})}),Object(O.jsx)(i.a,{className:"btn-page",children:Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(r.a,{children:[Object(O.jsx)(r.a.Header,{children:Object(O.jsx)(r.a.Title,{as:"h5",children:"Tour"})}),Object(O.jsxs)(r.a.Body,{children:[Object(O.jsx)(l.a,{onClick:function(){return p(!0)},children:"Start Basic Tour"}),Object(O.jsx)(l.a,{onClick:function(){return k(!0)},children:"Joy Ride"}),Object(O.jsx)(j.a,{steps:u,isOpen:c,onRequestClose:function(){return p(!1)}}),Object(O.jsx)(d.b,{callback:function(e){var t=e.status;[d.a.FINISHED,d.a.SKIPPED].includes(t)&&k(!1)},run:g,continuous:!0,scrollToFirstStep:!0,showProgress:!0,showSkipButton:!0,steps:N,styles:{options:{zIndex:1e4}}})]})]}),Object(O.jsxs)(h.a,{isOption:!0,title:"Hello tour",cardClass:"tour-1 card-test",optionClass:"card-option",children:[Object(O.jsx)("h1",{children:"H1 Gradient Able"}),Object(O.jsx)("h2",{children:"H2 Gradient Able"}),Object(O.jsx)("h3",{children:"H3 Gradient Able"}),Object(O.jsx)("h4",{children:"H4 Gradient Able"}),Object(O.jsx)("h5",{children:"H5 Gradient Able"}),Object(O.jsx)("h6",{children:"H6 Gradient Able"}),Object(O.jsx)(r.a.Text,{children:"Paragraph Gradient Able"}),Object(O.jsx)(r.a.Text,{children:"Paragraph Gradient Able"})]})]})})]})}},940:function(e,t,c){"use strict";var a=c(1),n=c.n(a),s=c(960),i=c(0);t.a=function(e){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsxs)(s.a,{variant:"warning",children:[e.message,Object(i.jsx)(s.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}}}]);
//# sourceMappingURL=144.1b08048b.chunk.js.map