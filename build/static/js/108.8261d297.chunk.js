(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[108],{2556:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(1),s=a.n(r),l=a(947),n=a(946),i=a(948),d=a(967),o=a(86),j=a(20),b=a(6);t.default=function(){var e=Object(o.a)(),t=Object(r.useContext)(j.a),a=t.state,h=a.layout,O=a.collapseMenu,u=a.layoutType,x=a.navIconColor,f=t.dispatch;return Object(r.useEffect)((function(){"horizontal"!==h&&e.width>991&&f({type:b.b,layout:"horizontal"}),f({type:b.k,layoutType:"menu-light"}),f({type:b.h,headerBackColor:"header-blue"}),f({type:b.l,navActiveListColor:"active-lightblue"}),x||f({type:b.t}),O&&e.width>991&&f({type:b.d})}),[f,e,h,O,u,x]),Object(c.jsx)(s.a.Fragment,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(n.a,{children:Object(c.jsxs)(i.a,{children:[Object(c.jsx)(i.a.Header,{children:Object(c.jsx)(i.a.Title,{as:"h5",children:"Pre Build Layout 5h"})}),Object(c.jsxs)(i.a.Body,{children:[Object(c.jsxs)(i.a.Text,{children:["Open ",Object(c.jsx)("code",{children:"constant.js"})," file from directory [ ../src/config/constant.js ] and edit ",Object(c.jsx)("mark",{children:"highlighted"})," options in this file."]}),Object(c.jsxs)(d.a,{bordered:!0,striped:!0,responsive:!0,children:[Object(c.jsx)("thead",{className:"header-table",children:Object(c.jsx)("tr",{children:Object(c.jsx)("th",{children:"Configuration"})})}),Object(c.jsx)("tbody",{children:Object(c.jsx)("tr",{children:Object(c.jsx)("td",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsxs)("mark",{children:["layout: ",Object(c.jsx)("code",{children:"horizontal"})]})}),Object(c.jsxs)("li",{children:["subLayout: ",Object(c.jsx)("code",{children:"null"})]}),Object(c.jsx)("li",{children:Object(c.jsxs)("mark",{children:["collapseMenu: ",Object(c.jsx)("code",{children:"false"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("mark",{children:["layoutType: ",Object(c.jsx)("code",{children:"menu-light"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("mark",{children:["navIconColor: ",Object(c.jsx)("code",{children:"true"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("mark",{children:["headerBackColor: ",Object(c.jsx)("code",{children:"header-blue"})]})}),Object(c.jsxs)("li",{children:["navBackColor: ",Object(c.jsx)("code",{children:"navbar-default"})]}),Object(c.jsxs)("li",{children:["navBrandColor: ",Object(c.jsx)("code",{children:"brand-default"})]}),Object(c.jsxs)("li",{children:["navBackImage: ",Object(c.jsx)("code",{children:"false"})]}),Object(c.jsxs)("li",{children:["rtlLayout: ",Object(c.jsx)("code",{children:"false"})]}),Object(c.jsxs)("li",{children:["navFixedLayout: ",Object(c.jsx)("code",{children:"true"})]}),Object(c.jsxs)("li",{children:["headerFixedLayout: ",Object(c.jsx)("code",{children:"false"})]}),Object(c.jsxs)("li",{children:["boxLayout: ",Object(c.jsx)("code",{children:"false"})]}),Object(c.jsxs)("li",{children:["navDropdownIcon: ",Object(c.jsx)("code",{children:"style1"})]}),Object(c.jsxs)("li",{children:["navListIcon: ",Object(c.jsx)("code",{children:"style1"})]}),Object(c.jsxs)("li",{children:["navActiveListColor: ",Object(c.jsx)("code",{children:"active-default"})]}),Object(c.jsxs)("li",{children:["navListTitleColor: ",Object(c.jsx)("code",{children:"title-default"})]}),Object(c.jsxs)("li",{children:["navListTitleHide: ",Object(c.jsx)("code",{children:"false"})]}),Object(c.jsxs)("li",{children:["configBlock: ",Object(c.jsx)("code",{children:"true"})]})]})})})})]})]})]})})})})}},930:function(e,t,a){"use strict";var c=a(4),r=a(1),s=a.n(r),l=a(15),n=a.n(l);t.a=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(c.a)({},t,{ref:a,className:n()(t.className,e)}))}))}},946:function(e,t,a){"use strict";var c=a(4),r=a(7),s=a(15),l=a.n(s),n=a(1),i=a.n(n),d=a(18),o=["xl","lg","md","sm","xs"],j=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.as,j=void 0===n?"div":n,b=Object(r.a)(e,["bsPrefix","className","as"]),h=Object(d.a)(a,"col"),O=[],u=[];return o.forEach((function(e){var t,a,c,r=b[e];if(delete b[e],"object"===typeof r&&null!=r){var s=r.span;t=void 0===s||s,a=r.offset,c=r.order}else t=r;var l="xs"!==e?"-"+e:"";t&&O.push(!0===t?""+h+l:""+h+l+"-"+t),null!=c&&u.push("order"+l+"-"+c),null!=a&&u.push("offset"+l+"-"+a)})),O.length||O.push(h),i.a.createElement(j,Object(c.a)({},b,{ref:t,className:l.a.apply(void 0,[s].concat(O,u))}))}));j.displayName="Col",t.a=j},947:function(e,t,a){"use strict";var c=a(4),r=a(7),s=a(15),l=a.n(s),n=a(1),i=a.n(n),d=a(18),o=["xl","lg","md","sm","xs"],j=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.noGutters,j=e.as,b=void 0===j?"div":j,h=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),O=Object(d.a)(a,"row"),u=O+"-cols",x=[];return o.forEach((function(e){var t,a=h[e];delete h[e];var c="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&x.push(""+u+c+"-"+t)})),i.a.createElement(b,Object(c.a)({ref:t},h,{className:l.a.apply(void 0,[s,O,n&&"no-gutters"].concat(x))}))}));j.displayName="Row",j.defaultProps={noGutters:!1},t.a=j},948:function(e,t,a){"use strict";var c=a(4),r=a(7),s=a(15),l=a.n(s),n=a(1),i=a.n(n),d=a(18),o=a(70),j=a(930),b=a(291),h=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.variant,o=e.as,j=void 0===o?"img":o,b=Object(r.a)(e,["bsPrefix","className","variant","as"]),h=Object(d.a)(a,"card-img");return i.a.createElement(j,Object(c.a)({ref:t,className:l()(n?h+"-"+n:h,s)},b))}));h.displayName="CardImg",h.defaultProps={variant:null};var O=h,u=Object(j.a)("h5"),x=Object(j.a)("h6"),f=Object(o.a)("card-body"),v=Object(o.a)("card-title",{Component:u}),m=Object(o.a)("card-subtitle",{Component:x}),p=Object(o.a)("card-link",{Component:"a"}),y=Object(o.a)("card-text",{Component:"p"}),g=Object(o.a)("card-header"),N=Object(o.a)("card-footer"),k=Object(o.a)("card-img-overlay"),C=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.bg,j=e.text,h=e.border,O=e.body,u=e.children,x=e.as,v=void 0===x?"div":x,m=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=Object(d.a)(a,"card"),y=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return i.a.createElement(b.a.Provider,{value:y},i.a.createElement(v,Object(c.a)({ref:t},m,{className:l()(s,p,o&&"bg-"+o,j&&"text-"+j,h&&"border-"+h)}),O?i.a.createElement(f,null,u):u))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=O,C.Title=v,C.Subtitle=m,C.Body=f,C.Link=p,C.Text=y,C.Header=g,C.Footer=N,C.ImgOverlay=k;t.a=C},967:function(e,t,a){"use strict";var c=a(4),r=a(7),s=a(15),l=a.n(s),n=a(1),i=a.n(n),d=a(18),o=i.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.striped,o=e.bordered,j=e.borderless,b=e.hover,h=e.size,O=e.variant,u=e.responsive,x=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),f=Object(d.a)(a,"table"),v=l()(s,f,O&&f+"-"+O,h&&f+"-"+h,n&&f+"-striped",o&&f+"-bordered",j&&f+"-borderless",b&&f+"-hover"),m=i.a.createElement("table",Object(c.a)({},x,{className:v,ref:t}));if(u){var p=f+"-responsive";return"string"===typeof u&&(p=p+"-"+u),i.a.createElement("div",{className:p},m)}return m}));t.a=o}}]);
//# sourceMappingURL=108.8261d297.chunk.js.map